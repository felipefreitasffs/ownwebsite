
# Stage 1: Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
# Using npm ci for cleaner, reproducible builds
RUN npm ci

# Copy the rest of the application code
COPY . .

# Set environment variable for telemetry for the build
ENV NEXT_TELEMETRY_DISABLED=1
# Build the Next.js application
# The `output: 'standalone'` in next.config.ts will ensure
# a minimal server and assets are in .next/standalone
RUN npm run build

# Verify that the standalone directory was created
RUN if [ ! -d ".next/standalone" ]; then \
      echo "ERROR: .next/standalone directory not found after build." >&2; \
      echo "Contents of .next directory:" >&2; \
      ls -AlpR .next; \
      exit 1; \
    fi

# Stage 2: Production stage
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
# ENV PORT=3000 # Next.js default port is 3000

# Copy the standalone output from the builder stage.
# This single COPY command should bring everything needed:
# server.js, .next/static, .next/server, and the 'public' folder (if it exists and was processed by the build).
COPY --from=builder /app/.next/standalone ./

# Expose the port the app runs on
EXPOSE 3000

# Optional: Run as a non-root user for security.
# Ensure 'nextjs' user and 'nodejs' group exist or create them.
# Example: RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs --ingroup nodejs
# USER nextjs

# Command to run the application using the standalone server.js
CMD ["node", "server.js"]

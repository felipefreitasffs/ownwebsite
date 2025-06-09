# Dockerfile

# Builder stage: Build the Next.js application
FROM node:20-bookworm-slim AS builder
WORKDIR /app

# Set NEXT_TELEMETRY_DISABLED to 1 to disable telemetry during build
ENV NEXT_TELEMETRY_DISABLED=1

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies using npm ci
# This uses package-lock.json for reproducible builds
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the Next.js application
# The build script is defined in package.json (e.g., "next build")
# Ensure your next.config.js has output: 'standalone'
RUN npm run build

# Verify that the standalone directory was created
# If this fails, the build didn't produce the expected output
RUN if [ ! -d ".next/standalone" ]; then \
      echo "ERROR: .next/standalone directory not found after build." >&2; \
      echo "Contents of .next directory:" >&2; \
      ls -AlpR .next; \
      exit 1; \
    fi

# Runner stage: Create the final lightweight image
FROM node:20-alpine AS runner
WORKDIR /app

# Set NEXT_TELEMETRY_DISABLED to 1 to disable telemetry in production
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
# Uncomment the following line if you use a custom port
# ENV PORT=3000

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder /app/.next/standalone ./
# The public folder is typically included in .next/standalone with output: 'standalone'
# If you have specific needs for it to be separate, ensure it's handled correctly by 'standalone' or adjust.
# COPY --from=builder /app/public ./public

EXPOSE 3000

# Start the Next.js application
# The server.js file is part of the standalone output
CMD ["node", "server.js"]

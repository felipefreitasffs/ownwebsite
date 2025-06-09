
# Stage 1: Builder
FROM node:20-slim AS builder

# Set working directory
WORKDIR /app

# Set NEXT_TELEMETRY_DISABLED
ENV NEXT_TELEMETRY_DISABLED=1

# Copy package.json and package-lock.json (or npm-shrinkwrap.json)
COPY package.json package-lock.json* ./

# Install dependencies using npm ci
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Build the Next.js application
RUN npm run build

# Verify that the standalone directory was created
RUN if [ ! -d ".next/standalone" ]; then \
      echo "ERROR: .next/standalone directory not found after build." >&2; \
      echo "Contents of .next directory:" >&2; \
      ls -AlpR .next; \
      exit 1; \
    fi

# Stage 2: Runner
FROM node:20-slim AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copy only the necessary files from the builder stage
COPY --from=builder /app/.next/standalone ./
# The public folder assets are typically served by Next.js itself or are bundled
# into .next/static which is part of the standalone output.
# If you have specific assets in public that need to be at the root,
# you might need to copy them, but typically .next/standalone handles this.

EXPOSE 3000

ENV PORT=3000

# Start the Next.js application
# The standalone output includes a server.js file
CMD ["node", "server.js"]

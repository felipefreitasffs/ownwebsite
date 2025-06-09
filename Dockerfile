
# Stage 1: Build the Next.js app
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies based on lockfile
COPY package.json package-lock.json* ./
RUN npm ci --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Set NEXT_TELEMETRY_DISABLED to 1 to disable telemetry during build
ENV NEXT_TELEMETRY_DISABLED 1

# Build the Next.js app
# This will also generate the standalone output
RUN npm run build

# Stage 2: Production image
# Use a slim Node.js image
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy the standalone output from the builder stage
COPY --from=builder /app/.next/standalone ./
# Copy the static assets from the public folder
COPY --from=builder /app/public ./public
# Copy the .next/static folder which contains optimized static assets (CSS, JS, images)
# This is necessary for the standalone output to serve static files correctly
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Set the correct user for running the app
USER nextjs

# Expose the port the app runs on
EXPOSE 3000

# Start the app
# The server.js file is created by Next.js in the standalone output
CMD ["node", "server.js"]

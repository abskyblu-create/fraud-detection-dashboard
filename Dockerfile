# =========================
# STAGE 1: Build with Node
# =========================
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy dependency files first (better caching)
COPY package.json package-lock.json* ./

# Install dependencies (reproducible)
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build for production -> creates /app/dist
RUN npm run build


# =========================
# STAGE 2: Serve with Nginx
# =========================
FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy build output from previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Add nginx config for SPA routing (React Router etc.)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port
EXPOSE 80

# Start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]


# Docker Setup Guide

This guide will help you get started with Docker for your portfolio website.

## Prerequisites

- **Docker Desktop** - Download from [docker.com](https://www.docker.com/products/docker-desktop)
- **Docker CLI** - Comes with Docker Desktop

## Quick Start

### Development

1. Make sure Docker is running
2. Run this command in your project directory:
   ```bash
   docker-compose -f docker-compose.dev.yml up
   ```
3. Visit `http://localhost:5173` in your browser

### Production

1. Build and run:
   ```bash
   docker-compose up -d
   ```
2. Visit `http://localhost:3000` in your browser

## Architecture

### Development Container (Dockerfile.dev)
- Uses Node.js Alpine image (lightweight)
- Runs Vite development server on port 5173
- Hot module replacement (HMR) enabled
- Mounts your code for live editing

### Production Container (Dockerfile)
- Multi-stage build (optimized for size)
- Build stage: Compiles React with Vite
- Runtime stage: Serves static files with `serve`
- Runs on port 3000
- Includes health checks

## File Descriptions

| File | Purpose |
|------|---------|
| `Dockerfile` | Builds production image |
| `Dockerfile.dev` | Builds development image |
| `docker-compose.yml` | Production container setup |
| `docker-compose.dev.yml` | Development container setup |
| `.dockerignore` | Files to exclude from build context |

## Common Tasks

### Build Production Image
```bash
docker build -t my-portfolio:1.0 .
```

### View Running Containers
```bash
docker ps
```

### Check Container Logs
```bash
docker-compose logs -f
```

### Rebuild After Dependency Changes
```bash
docker-compose -f docker-compose.dev.yml down
docker-compose -f docker-compose.dev.yml up --build
```

### Access Container Shell
```bash
docker exec -it portfolio-website sh
```

### Stop Containers
```bash
docker-compose -f docker-compose.dev.yml down
# or
docker-compose down
```

### Clean Up Everything
```bash
docker-compose down -v
docker system prune -a
```

## Environment Variables

To use environment variables in your Docker container:

1. Create a `.env` file in your project root:
   ```
   VITE_API_URL=https://api.example.com
   ```

2. Update `docker-compose.yml`:
   ```yaml
   services:
     portfolio:
       env_file:
         - .env
   ```

3. Use in your React code:
   ```javascript
   const apiUrl = import.meta.env.VITE_API_URL
   ```

## Troubleshooting

### Port Already in Use
If port 3000 or 5173 is already in use:

**Mac/Linux:**
```bash
# Find process on port 3000
lsof -i :3000

# Kill process
kill -9 <PID>
```

**Windows:**
```bash
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

Or change the port in `docker-compose.yml`:
```yaml
ports:
  - "8000:3000"  # Access on localhost:8000
```

### Build Fails
1. Clear Docker cache: `docker system prune -a`
2. Rebuild: `docker-compose build --no-cache`

### Container Won't Start
1. Check logs: `docker-compose logs`
2. Verify Docker Desktop is running
3. Ensure no other container is using the port

### Changes Not Reflected (Dev)
- Dev container has volume mounting
- Check if the file was saved
- Restart container: `docker-compose -f docker-compose.dev.yml restart`

## Performance Tips

1. **Use .dockerignore** - Excludes unnecessary files from build context
2. **Alpine images** - Smaller image sizes (used in both Dockerfiles)
3. **Multi-stage builds** - Reduces final image size (used in production Dockerfile)
4. **Layer caching** - Copy package.json before source code for better caching

## Next Steps

1. Test development workflow: `docker-compose -f docker-compose.dev.yml up`
2. Test production build: `docker-compose up`
3. Push to Docker Hub for sharing
4. Deploy to your preferred platform (AWS, Heroku, etc.)

## Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Guide](https://docs.docker.com/compose/)
- [Node.js Docker Best Practices](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)

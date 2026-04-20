# Developer Portfolio Website

A modern, responsive portfolio website built with React and Vite. Perfect for showcasing your projects, skills, and experience.

## Features

- 🚀 **Fast Performance** - Built with Vite for lightning-fast development and production builds
- 📱 **Responsive Design** - Looks great on mobile, tablet, and desktop
- 🎨 **Modern Styling** - Custom CSS with smooth animations and transitions
- 📂 **Multiple Sections**:
  - Home with hero section and featured projects
  - About page with highlights and resume download
  - Projects showcase with detailed project cards
  - Skills and services section
  - Blog with article listings
  - Contact form with validation

## Getting Started

### Prerequisites

**Option 1: Local Development**
- Node.js (v14 or higher)
- npm or yarn

**Option 2: Docker**
- Docker
- Docker Compose (optional, but recommended)

### Installation

#### Option 1: Local Development

1. Navigate to the project directory:
   ```bash
   cd "Portfolio Website"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

#### Option 2: Docker Development

1. Navigate to the project directory:
   ```bash
   cd "Portfolio Website"
   ```

2. Run with Docker Compose (recommended):
   ```bash
   docker-compose -f docker-compose.dev.yml up
   ```

3. Open your browser and visit `http://localhost:5173`

4. To stop the container:
   ```bash
   docker-compose -f docker-compose.dev.yml down
   ```

**Alternative Docker commands:**

Build the development image:
```bash
docker build -f Dockerfile.dev -t portfolio-dev .
```

Run the development container:
```bash
docker run -p 5173:5173 -v $(pwd):/app portfolio-dev
```

## Building for Production

### Local Build
```bash
npm run build
```

The optimized build will be in the `dist` folder, ready for deployment.

### Docker Production Build

Build the production image:
```bash
docker build -t portfolio-website .
```

Run the production container:
```bash
docker run -p 3000:3000 portfolio-website
```

With Docker Compose:
```bash
docker-compose up -d
```

Access your portfolio at `http://localhost:3000`

To stop the container:
```bash
docker-compose down
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navigation.jsx
│   └── Footer.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Blog.jsx
│   └── Contact.jsx
├── styles/             # CSS files
│   ├── index.css
│   ├── App.css
│   ├── Navigation.css
│   ├── Footer.css
│   └── pages/          # Page-specific styles
├── App.jsx             # Main App component
└── main.jsx            # React entry point
```

## Customization

### Colors
Edit the CSS variables in `src/styles/index.css`:
```css
:root {
  --primary-color: #0066cc;
  --secondary-color: #004399;
  --text-color: #333333;
  /* ... more colors */
}
```

### Content
Update the content in each page component:
- **Home**: Featured projects
- **About**: Your bio and highlights
- **Projects**: Project cards with links
- **Skills**: Your technical skills
- **Blog**: Article listings
- **Contact**: Contact information

### Navigation
Add or remove navigation links in `src/components/Navigation.jsx`

## Deployment

### Traditional Deployment

#### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Create a new project and connect your GitHub repo
4. Deploy with one click!

#### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to [Netlify](https://netlify.com)

#### Deploy to GitHub Pages
1. Update `vite.config.js` with your repository name
2. Run: `npm run build`
3. Push the `dist` folder to `gh-pages` branch

### Docker Deployment

#### Deploy to Docker Hub

1. Create a Docker Hub account at [dockerhub.com](https://hub.docker.com)

2. Build and tag your image:
   ```bash
   docker build -t yourusername/portfolio-website:latest .
   ```

3. Push to Docker Hub:
   ```bash
   docker login
   docker push yourusername/portfolio-website:latest
   ```

4. Others can now run your portfolio:
   ```bash
   docker run -p 3000:3000 yourusername/portfolio-website:latest
   ```

#### Deploy to AWS (ECS/Fargate)
1. Create an ECR repository
2. Build and push your image to ECR
3. Create an ECS task definition using the image
4. Deploy the service

#### Deploy to DigitalOcean App Platform
1. Push code to GitHub
2. Connect your GitHub repo to DigitalOcean
3. Create an app and select Docker from the Dockerfile
4. Deploy with one click!

#### Deploy to Heroku (with Docker)
1. Login to Heroku: `heroku login`
2. Create app: `heroku create your-app-name`
3. Build and push:
   ```bash
   heroku container:push web
   heroku container:release web
   ```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **CSS3** - Styling with custom properties
- **Docker** - Container orchestration

## Docker Reference

### Files Included

- **Dockerfile** - Production image configuration
- **Dockerfile.dev** - Development image configuration  
- **docker-compose.yml** - Production container orchestration
- **docker-compose.dev.yml** - Development container orchestration
- **.dockerignore** - Files to exclude from Docker build

### Common Docker Commands

**Development:**
```bash
# Start development container
docker-compose -f docker-compose.dev.yml up

# Stop development container
docker-compose -f docker-compose.dev.yml down

# Build dev image
docker build -f Dockerfile.dev -t portfolio-dev .
```

**Production:**
```bash
# Start production container
docker-compose up

# Stop production container
docker-compose down

# Build production image
docker build -t portfolio-website .

# Run production container
docker run -p 3000:3000 portfolio-website
```

**Troubleshooting:**
```bash
# View container logs
docker-compose logs -f portfolio

# Access container shell
docker exec -it portfolio-website sh

# Remove all containers
docker-compose down -v
```

## Next Steps

1. **Personalize**: Update all content with your information
2. **Add Projects**: Update the projects with your actual work
3. **Connect Social**: Add your GitHub, LinkedIn, Twitter links
4. **Setup Contact**: Integrate with a backend service like Formspree or EmailJS
5. **Deploy**: Choose a hosting platform and go live!

## Tips for Success

- Keep text concise and impactful
- Use high-quality images for projects
- Test on multiple devices
- Keep SEO in mind (add meta tags)
- Get feedback from friends and colleagues
- Update regularly with new projects and content

## License

Feel free to use this template for your portfolio!

## Support

Need help? Check out:
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)

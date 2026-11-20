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

**Local Development**
- Node.js (v14 or higher)
- npm or yarn

### Installation

#### Local Development

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

## Building for Production

### Local Build
```bash
npm run build
```

The optimized build will be in the `dist` folder, ready for deployment.

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

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **CSS3** - Styling with custom properties
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

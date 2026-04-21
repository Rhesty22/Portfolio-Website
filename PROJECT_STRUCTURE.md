# Project Structure Guide

## Complete Directory Layout

```
DLG Portfolio Website/
├── src/
│   ├── components/
│   │   ├── common/                 # Reusable UI components
│   │   │   ├── Button.jsx         # Reusable button with variants
│   │   │   └── Navbar.jsx         # Main navigation bar
│   │   ├── sections/               # Page sections
│   │   │   ├── Hero.jsx           # Hero section
│   │   │   ├── About.jsx          # About section
│   │   │   ├── Skills.jsx         # Skills section
│   │   │   ├── Projects.jsx       # Projects section
│   │   │   ├── Contact.jsx        # Contact section
│   │   │   └── Blog.jsx           # Blog section
│   │   ├── layout/
│   │   │   └── PublicLayout.jsx   # Main layout wrapper
│   │   ├── Footer.jsx             # Footer component
│   │   └── Navigation.jsx         # Additional nav component
│   ├── pages/                      # Page components
│   │   ├── Home.jsx               # Home page
│   │   ├── About.jsx              # About page
│   │   ├── Skills.jsx             # Skills page
│   │   ├── Projects.jsx           # Projects page
│   │   ├── Contact.jsx            # Contact page
│   │   └── Blog.jsx               # Blog page
│   ├── assets/
│   │   ├── icons/                 # SVG icons directory
│   │   │   └── README.md
│   │   └── images/                # Image files directory
│   │       └── README.md
│   ├── data/
│   │   └── portfolio.js           # Content and data configuration
│   ├── styles/
│   │   ├── index.css              # Global styles with Tailwind
│   │   ├── App.css                # App component styles
│   │   ├── Navigation.css         # Navigation styles
│   │   ├── Footer.css             # Footer styles
│   │   ├── components/            # Component-specific styles
│   │   └── pages/
│   │       ├── Home.css
│   │       ├── About.css
│   │       ├── Skills.css
│   │       ├── Projects.css
│   │       ├── Contact.css
│   │       └── Blog.css
│   ├── App.jsx                    # Main App component
│   └── main.jsx                   # Application entry point
├── tailwind.config.js             # Tailwind CSS configuration
├── postcss.config.js              # PostCSS configuration
├── vite.config.js                 # Vite build configuration
├── index.html                     # HTML entry point
├── package.json                   # Dependencies and scripts
├── DESIGN_SYSTEM.md               # Design system documentation
└── DOCKER_SETUP.md                # Docker setup guide
```

## Component Categories

### Common Components (`src/components/common/`)
Reusable UI building blocks used across multiple pages:
- **Button.jsx** - Customizable button component with variants
- **Navbar.jsx** - Navigation bar with responsive mobile menu

### Section Components (`src/components/sections/`)
Large content sections that make up pages:
- **Hero.jsx** - Hero banner section
- **About.jsx** - About section
- **Skills.jsx** - Skills section
- **Projects.jsx** - Projects showcase
- **Contact.jsx** - Contact form section
- **Blog.jsx** - Blog section

### Layout Components (`src/components/layout/`)
Structural layout components:
- **PublicLayout.jsx** - Main wrapper with Navbar and Footer

### Pages (`src/pages/`)
Full page components that use sections and components:
- **Home.jsx** - Homepage (uses Hero, Projects preview, etc.)
- **About.jsx** - About page
- **Skills.jsx** - Skills page
- **Projects.jsx** - Projects gallery
- **Contact.jsx** - Contact page
- **Blog.jsx** - Blog listing

### Assets
- **icons/** - SVG icons for social links, UI elements
- **images/** - Product images, screenshots, profile photos

### Data (`src/data/`)
- **portfolio.js** - Centralized data source for portfolio content

### Styles
- **index.css** - Global styles with Tailwind directives
- **Component-specific CSS** - Additional styling per component

## Data Flow

Content is stored in `src/data/portfolio.js`:
```
portfolio.js
  ├── personal (name, title, email)
  ├── skills (array of skill categories)
  ├── projects (array of project objects)
  ├── experience (array of experience objects)
  ├── blog (array of blog posts)
  └── social (social media links)
```

Components import and use this data:
```jsx
import { portfolioData } from '@/data/portfolio';

// Usage in components
{portfolioData.projects.map(project => (...))}
```

## Component Usage Examples

### Using the Button Component
```jsx
import Button from '@/components/common/Button';

<Button variant="primary" size="md">
  Click Me
</Button>
```

### Using PublicLayout
```jsx
import PublicLayout from '@/components/layout/PublicLayout';

function App() {
  return (
    <PublicLayout>
      <Hero />
      {/* other sections */}
    </PublicLayout>
  );
}
```

### Using Portfolio Data
```jsx
import { portfolioData } from '@/data/portfolio';

function ProjectsList() {
  return (
    <div>
      {portfolioData.projects.map(project => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}
```

## Naming Conventions

- **Components**: PascalCase (Button.jsx, Navbar.jsx)
- **Files**: PascalCase for components, kebab-case for utilities
- **CSS Classes**: kebab-case with Tailwind utilities
- **Variables/Functions**: camelCase
- **Constants**: UPPER_SNAKE_CASE

## Import Aliases

Consider setting up import aliases in `vite.config.js`:
```javascript
alias: {
  '@': '/src',
  '@components': '/src/components',
  '@data': '/src/data',
  '@assets': '/src/assets',
}
```

Then use:
```jsx
import Button from '@/components/common/Button';
import { portfolioData } from '@/data/portfolio';
```

## Next Steps

1. Update all pages to use `PublicLayout`
2. Integrate portfolio data into page components
3. Customize colors in `tailwind.config.js`
4. Add your images to `src/assets/images/`
5. Add SVG icons to `src/assets/icons/`
6. Update content in `src/data/portfolio.js`
7. Install and configure Tailwind CSS (if not already done)

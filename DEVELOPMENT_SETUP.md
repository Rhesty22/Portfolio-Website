# Development Setup Guide

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Install Tailwind CSS (if not already installed):
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. Update `index.css` with Tailwind directives:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Development Server

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## File Organization Best Practices

### When to Create a New Component
- If UI logic is reused in 2+ places → Common component
- If a section is large (200+ lines) → Break into sections
- If it has its own state/hooks → Separate component

### CSS Organization
1. Use Tailwind utilities first
2. Add custom CSS in component-specific files only if needed
3. Keep global styles minimal (index.css)
4. Use CSS modules for complex component styling

### Data Management
1. Keep all content in `src/data/portfolio.js`
2. Export as named exports for easy importing
3. Update data without touching components

### Imports
Prefer absolute imports (with aliases):
```jsx
import Button from '@/components/common/Button';
import { portfolioData } from '@/data/portfolio';
```

Instead of relative imports:
```jsx
import Button from '../../../components/common/Button';
```

## Component Development Workflow

### Creating a New Page Component

1. Create file in `src/pages/NewPage.jsx`
2. Import `PublicLayout`
3. Import needed sections/components
4. Structure:
```jsx
import PublicLayout from '@/components/layout/PublicLayout';
import Hero from '@/components/sections/Hero';

function NewPage() {
  return (
    <PublicLayout>
      <Hero />
      {/* Add more sections */}
    </PublicLayout>
  );
}

export default NewPage;
```

### Creating a New Reusable Component

1. Create file in `src/components/common/ComponentName.jsx`
2. Keep it focused on one responsibility
3. Accept props for customization
4. Example:
```jsx
function ComponentName({ title, variant = 'default', className = '' }) {
  return (
    <div className={`component-class ${className}`}>
      {title}
    </div>
  );
}

export default ComponentName;
```

### Creating a New Section Component

1. Create file in `src/components/sections/SectionName.jsx`
2. Import data from `portfolio.js` if needed
3. Make it responsive
4. Example:
```jsx
import { portfolioData } from '@/data/portfolio';

function SectionName() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section content */}
      </div>
    </section>
  );
}

export default SectionName;
```

## Tailwind CSS Tips

### Commonly Used Utilities
```jsx
// Spacing
<div className="p-4 m-2">
// Flexbox
<div className="flex justify-center items-center">
// Grid
<div className="grid grid-cols-3 gap-4">
// Responsive
<div className="text-sm md:text-lg lg:text-xl">
// Colors
<div className="text-blue-600 bg-gray-100">
// Hover/Focus
<button className="hover:bg-blue-700 focus:ring-2">
```

### Custom Utilities in index.css
```css
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-600 text-white rounded-lg;
  }
}
```

## Responsive Design Checklist

- [ ] Mobile layout (320px)
- [ ] Tablet layout (768px)
- [ ] Desktop layout (1280px)
- [ ] Touch-friendly button sizes (48px minimum)
- [ ] Readable text sizes (16px minimum body)
- [ ] Proper spacing on all screen sizes
- [ ] Images responsive with max-width

## Performance Tips

1. Use code splitting for page components
2. Lazy load images
3. Optimize images (WebP format)
4. Use Tailwind's purge feature (done automatically)
5. Keep components small and focused
6. Memoize expensive computations

## Debugging

### Common Issues

**Tailwind classes not showing:**
- Clear node_modules and reinstall
- Check `tailwind.config.js` content paths
- Restart dev server

**Import errors:**
- Verify file paths
- Check file names (case-sensitive on Linux/Mac)
- Ensure all components are exported

**Styling conflicts:**
- Use Tailwind specificity
- Avoid inline styles when possible
- Check CSS file order

## Testing

Add test files alongside components:
```
src/
├── components/
│   └── common/
│       ├── Button.jsx
│       └── Button.test.jsx
```

## Deployment

### Vercel (Recommended for Vite)
```bash
npm run build
# Push to GitHub
# Vercel auto-deploys on push
```

### Docker
```bash
docker build -f Dockerfile -t portfolio-app .
docker run -p 80:80 portfolio-app
```

## Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [MDN Web Docs](https://developer.mozilla.org)

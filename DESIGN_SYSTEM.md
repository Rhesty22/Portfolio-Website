# Design System Documentation

## Overview
This portfolio website uses a modern design system built with Tailwind CSS, featuring a clean, professional aesthetic with blue and purple accent colors.

## Color Palette
- **Primary Blue**: #0284c7 (600), #0369a1 (700)
- **Secondary Purple**: #7c3aed (600), #6d28d9 (700)
- **Dark**: #111827 (900), #030712 (950)
- **Light**: #f9fafb (50), #f3f4f6 (100)

## Typography
- **Font Family**: Inter (Primary), Fira Code (Monospace)
- **Heading 1**: 48px - 60px (responsive)
- **Heading 2**: 36px - 42px (responsive)
- **Body**: 16px
- **Small**: 14px

## Components

### Button Component
Located in: `src/components/common/Button.jsx`

**Variants:**
- `primary` - Main CTA button
- `secondary` - Alternative action
- `outline` - Border style
- `ghost` - Minimal style

**Sizes:**
- `sm` - Small buttons
- `md` - Medium buttons (default)
- `lg` - Large buttons

**Usage:**
```jsx
import Button from '@/components/common/Button';

<Button variant="primary" size="md">Click Me</Button>
```

### Navbar Component
Located in: `src/components/common/Navbar.jsx`

- Responsive navigation with mobile menu
- Logo and navigation links
- CTA button integration
- Sticky positioning

### Hero Section
Located in: `src/components/sections/Hero.jsx`

- Gradient background
- Prominent headline
- Social media links
- Call-to-action buttons

### Layout
Located in: `src/components/layout/PublicLayout.jsx`

Wraps all pages with Navbar and Footer

## Spacing Scale
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px

## Breakpoints
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

## Responsiveness Rules
- Mobile-first approach
- Use Tailwind's responsive prefixes: `sm:`, `md:`, `lg:`, etc.
- Test on: 320px (mobile), 768px (tablet), 1280px (desktop)

## File Structure
```
src/
├── components/
│   ├── common/        # Reusable components (Button, Navbar)
│   ├── sections/      # Page sections (Hero, About, etc)
│   ├── layout/        # Layout wrappers
│   └── [pages]        # Individual pages
├── assets/
│   ├── icons/         # SVG icons
│   └── images/        # Image files
├── data/
│   └── portfolio.js    # Content data
├── styles/
│   ├── index.css       # Global styles
│   └── components/     # Component-specific styles
```

## Best Practices
1. Use Tailwind utility classes first
2. Create custom components for reusability
3. Keep colors consistent with palette
4. Maintain accessibility standards (WCAG 2.1)
5. Test responsive design at all breakpoints
6. Use semantic HTML elements
7. Keep components small and focused

## Animation & Transitions
- Default transition: `transition-all duration-200`
- Smooth transitions: `transition-smooth` (duration-300)
- Hover states: `hover:` prefix
- Focus states: `focus:ring-2 focus:ring-offset-2`

## Customization
Edit `tailwind.config.js` to:
- Add new colors
- Modify spacing
- Extend fonts
- Add plugins

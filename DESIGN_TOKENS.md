# Design Tokens & Reference

## Color System

### Primary Colors (Blue)
```
Blue 50:   #f0f9ff
Blue 100:  #e0f2fe
Blue 500:  #0ea5e9
Blue 600:  #0284c7 ← Main primary color
Blue 700:  #0369a1
Blue 900:  #082f49
```

### Secondary Colors (Purple)
```
Purple 500: #8b5cf6
Purple 600: #7c3aed ← Main secondary color
Purple 700: #6d28d9
```

### Neutral Colors (Gray & Dark)
```
Gray 50:    #f9fafb (near white)
Gray 100:   #f3f4f6
Gray 600:   #4b5563
Gray 700:   #374151
Gray 900:   #111827
Gray 950:   #030712 (near black)
```

### Semantic Colors
```
Success:  #10b981 (Green)
Warning:  #f59e0b (Amber)
Error:    #ef4444 (Red)
Info:     #0ea5e9 (Sky Blue)
```

## Typography

### Font Families
```
Primary:   'Inter'        (sans-serif)
Monospace: 'Fira Code'    (code snippets)
Fallback:  system fonts
```

### Font Sizes
```
xs:  12px   (0.75rem)
sm:  14px   (0.875rem)
base: 16px  (1rem)
lg:  18px   (1.125rem)
xl:  20px   (1.25rem)
2xl: 24px   (1.5rem)
3xl: 30px   (1.875rem)
4xl: 36px   (2.25rem)
5xl: 48px   (3rem)
6xl: 60px   (3.75rem)
```

### Font Weights
```
Thin:       100
Light:      300
Normal:     400
Medium:     500
Semibold:   600
Bold:       700
```

## Spacing Scale

```
0:   0px
1:   4px
2:   8px
3:   12px
4:   16px
5:   20px
6:   24px
8:   32px
10:  40px
12:  48px
16:  64px
20:  80px
24:  96px
```

Usage: `p-4` (padding 16px), `m-2` (margin 8px), `gap-3` (12px gap)

## Breakpoints

```
xs:  0px     (default, no prefix)
sm:  640px   (sm:)
md:  768px   (md:)
lg:  1024px  (lg:)
xl:  1280px  (xl:)
2xl: 1536px  (2xl:)
```

Example: `text-sm md:text-base lg:text-lg`

## Border Radius

```
none:    0px
sm:      0.125rem (2px)
base:    0.25rem (4px)
md:      0.375rem (6px)
lg:      0.5rem (8px)
xl:      0.75rem (12px)
2xl:     1rem (16px)
3xl:     1.5rem (24px)
full:    9999px (circle)
```

Usage: `rounded-lg`, `rounded-full`

## Shadows

```
sm:   0 1px 2px 0 rgba(0, 0, 0, 0.05)
base: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)
md:   0 4px 6px -1px rgba(0, 0, 0, 0.1)
lg:   0 10px 15px -3px rgba(0, 0, 0, 0.1)
xl:   0 20px 25px -5px rgba(0, 0, 0, 0.1)
2xl:  0 25px 50px -12px rgba(0, 0, 0, 0.25)
```

Usage: `shadow-md`, `shadow-lg hover:shadow-xl`

## Common Patterns

### Button Sizes
```
Small:   px-3 py-1.5 text-sm
Medium:  px-4 py-2.5 text-base
Large:   px-6 py-3 text-lg
```

### Container
```
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* content */}
</div>
```

### Section Padding
```
<section className="py-16 md:py-24">
  {/* content */}
</section>
```

### Flexbox Center
```
<div className="flex justify-center items-center">
  {/* centered content */}
</div>
```

### Grid
```
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* items */}
</div>
```

### Text Truncation
```
<!-- Single line -->
<p className="truncate">Long text...</p>

<!-- Multiple lines -->
<p className="line-clamp-3">Long text...</p>
```

### Gradient
```
<div className="bg-gradient-to-r from-blue-600 to-purple-600">
  {/* gradient background */}
</div>
```

### Hover & Transition
```
<button className="hover:bg-blue-700 transition-all duration-200">
  Hover me
</button>
```

### Focus States
```
<input className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
```

## Accessibility Classes

```
<!-- Skip to main content -->
<a href="#main" className="sr-only">
  Skip to main content
</a>

<!-- Visually hidden but accessible to screen readers -->
<span className="sr-only">$19.99</span>

<!-- Show on focus -->
<div className="sr-only focus:not-sr-only">
  Focus visible
</div>
```

## Utility Classes (Custom)

From `src/styles/index.css`:

```css
.container-custom     /* Max width + padding */
.section-padding      /* py-16 md:py-24 */
.gradient-primary     /* Blue to purple gradient */
.card                 /* White bg + shadow + hover */
.transition-smooth    /* Smooth 300ms transition */
```

## Responsive Tips

1. **Mobile First**: Write styles for mobile, add `md:` and `lg:` for larger screens
2. **Common Pattern**:
   ```jsx
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
   ```
3. **Text Sizing**:
   ```jsx
   <h1 className="text-3xl md:text-4xl lg:text-5xl">
   ```
4. **Spacing**:
   ```jsx
   <section className="px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
   ```

## Quick Reference Commands

### Tailwind Classes
- `p-4` - Padding 16px
- `m-2` - Margin 8px
- `mb-4` - Margin bottom 16px
- `pt-6` - Padding top 24px
- `px-4` - Padding left/right 16px
- `py-8` - Padding top/bottom 32px

### Colors
- `text-blue-600` - Text color
- `bg-blue-600` - Background color
- `border-blue-600` - Border color
- `fill-blue-600` - SVG fill

### Display
- `flex`, `grid`, `block`, `inline-block`
- `justify-center`, `items-center`, `gap-4`

### Sizing
- `w-full`, `w-1/2`, `h-64`
- `min-h-screen`, `max-w-7xl`

### Hover/Focus
- `hover:bg-blue-700`
- `focus:ring-2 focus:ring-blue-500`
- `disabled:opacity-50`

## Customization Reference

Edit `tailwind.config.js` to modify:
- Colors
- Fonts
- Spacing
- Breakpoints
- Border radius
- Shadows
- Animation timing

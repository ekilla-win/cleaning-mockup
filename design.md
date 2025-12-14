# Cleaning Service Website - Design Document

## Design Philosophy

### Color Palette
- **Primary**: Deep Navy (#1e3a8a) - Trust, professionalism
- **Secondary**: Sage Green (#10b981) - Clean, natural, fresh
- **Accent**: Warm Orange (#f59e0b) - Energy, warmth, attention to CTA
- **Neutral**: Cool Gray (#6b7280) - Balance, sophistication
- **Background**: Pure White (#ffffff) / Dark Slate (#0f172a) for dark mode

### Typography
- **Display Font**: "Playfair Display" - Elegant serif for headings, premium feel
- **Body Font**: "Inter" - Clean, modern sans-serif for readability
- **Accent Font**: "JetBrains Mono" - For pricing, technical details

### Visual Language
- **Clean & Minimal**: Emphasizing the core service offering
- **Professional Imagery**: High-quality photos of actual cleaning professionals
- **Consistent Iconography**: Simple, outlined icons throughout
- **Generous White Space**: Breathing room for content
- **Subtle Animations**: Smooth transitions, hover effects

## Visual Effects & Styling

### Used Libraries
- **Anime.js**: Smooth animations for elements, stagger effects
- **ECharts.js**: Interactive pricing calculator visualization
- **Splide.js**: Image carousels for before/after galleries
- **p5.js**: Particle background effect for hero section
- **Pixi.js**: Advanced visual effects for service cards

### Header Effects
- **Particle Background**: Subtle floating particles using p5.js
- **Gradient Text Animation**: Color cycling on main headline
- **Staggered Fade-in**: Service cards appear with delay
- **Floating Elements**: Cleaning icons with gentle motion

### Interactive Elements
- **Service Cards**: 3D tilt effect on hover, shadow expansion
- **Pricing Calculator**: Real-time visual feedback with animated charts
- **Dark Mode Toggle**: Smooth color transitions, icon morphing
- **Navigation**: Underline animation, active state indicators

### Animation Patterns
- **Scroll Reveal**: Elements fade in as they enter viewport
- **Hover States**: Buttons lift, cards tilt, images zoom slightly
- **Loading States**: Skeleton screens, progress indicators
- **Form Feedback**: Success/error animations with color changes

## Layout & Structure

### Grid System
- **Desktop**: 12-column grid with 1200px max-width
- **Tablet**: 8-column grid with responsive breakpoints
- **Mobile**: Single column with optimized touch targets

### Component Hierarchy
1. **Mockup Banner** - Fixed top notification
2. **Navigation Bar** - Logo, menu, dark mode toggle
3. **Hero Section** - Main headline, CTA, background effect
4. **Service Overview** - Quick service cards with icons
5. **Interactive Content** - Calculator, filters, forms
6. **Footer** - Contact info, social links, copyright

### Responsive Design
- **Mobile-First**: Progressive enhancement approach
- **Touch-Friendly**: Minimum 44px tap targets
- **Readable Text**: 16px minimum body text size
- **Optimized Images**: WebP format with fallbacks

## Brand Elements

### Logo Concept
- **Icon**: Stylized broom with sparkle effect
- **Typography**: "SparkleClean" in Playfair Display
- **Colors**: Navy primary with green accent

### Iconography
- **Service Icons**: Outlined style, consistent stroke width
- **UI Icons**: Feather icon set for consistency
- **Status Icons**: Color-coded for different states

### Photography Style
- **Professional**: Real cleaning professionals in action
- **Bright & Clean**: Well-lit, high-contrast images
- **Diverse**: Representing different settings and people
- **Consistent**: Similar color grading and composition
# Cleaning Service Website - Project Outline

## File Structure
```
/mnt/okcomputer/output/
├── index.html              # Homepage with hero and service overview
├── services.html           # Detailed services with pricing calculator
├── about.html             # Company information and team
├── contact.html           # Contact form and business hours
├── main.js               # Main JavaScript functionality
├── resources/            # Local assets folder
│   ├── hero-bg.jpg       # Hero background image
│   ├── service-1.jpg     # Basic cleaning service
│   ├── service-2.jpg     # Deep cleaning service
│   ├── service-3.jpg     # Commercial cleaning
│   ├── team-1.jpg        # Team member photo
│   ├── team-2.jpg        # Team member photo
│   ├── team-3.jpg        # Team member photo
│   └── logo.png          # Company logo
```

## Page Breakdown

### 1. index.html - Homepage
**Purpose**: First impression, service overview, lead generation
**Sections**:
- Mockup banner (fixed top)
- Navigation with dark mode toggle
- Hero section with background effect and CTA
- Service overview cards (3 main services)
- Why choose us section with animated counters
- Customer testimonials carousel
- Footer

**Interactive Elements**:
- Dark mode toggle
- Service card hover effects
- Scroll animations
- Testimonial carousel

### 2. services.html - Service Details
**Purpose**: Detailed service information, pricing, booking
**Sections**:
- Mockup banner
- Navigation
- Service categories filter
- Service grid with detailed cards
- Interactive pricing calculator
- Before/after image gallery
- Booking CTA section
- Footer

**Interactive Elements**:
- Service filter system
- Pricing calculator with real-time updates
- Image gallery with lightbox
- Service card animations

### 3. about.html - Company Information
**Purpose**: Build trust, showcase team, company values
**Sections**:
- Mockup banner
- Navigation
- Company story/hero
- Team member grid
- Company values with icons
- Certifications and awards
- Mission statement
- Footer

**Interactive Elements**:
- Team member card hover effects
- Animated statistics
- Value icons with tooltips

### 4. contact.html - Contact Information
**Purpose**: Contact details, hours, location, inquiry form
**Sections**:
- Mockup banner
- Navigation
- Contact hero
- Contact information cards
- Business hours
- Contact form
- Fake address and map placeholder
- Footer

**Interactive Elements**:
- Contact form with validation
- Interactive business hours display
- Form submission animation

## Technical Implementation

### Core Libraries Integration
- **Anime.js**: Page transitions, element animations
- **ECharts.js**: Pricing calculator visualization
- **Splide.js**: Image carousels and testimonials
- **p5.js**: Hero background particle effect
- **Pixi.js**: Advanced card hover effects

### JavaScript Functionality (main.js)
- Dark mode toggle with localStorage
- Pricing calculator logic
- Form validation and submission
- Scroll animations
- Navigation active states
- Image lazy loading
- Mobile menu toggle

### Responsive Design
- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Touch-friendly interactions
- Optimized images for different screen sizes

### Performance Optimization
- Minified CSS and JavaScript
- Optimized images (WebP with fallbacks)
- Lazy loading for images
- Critical CSS inlining
- Font preloading

## Content Strategy

### Fake Data Requirements
- **Company Name**: SparkleClean Pro Services
- **Address**: 123 Clean Street, Spotless City, SC 12345
- **Phone**: (555) 123-CLEAN
- **Email**: info@sparklecleanpro.com
- **Hours**: Mon-Fri 8AM-6PM, Sat 9AM-4PM, Sun Closed
- **Pricing**: Tiered service packages
- **Team**: 6 fake team member profiles
- **Testimonials**: 5 fake customer reviews

### SEO Considerations
- Semantic HTML structure
- Meta tags and descriptions
- Schema.org markup for local business
- Alt text for all images
- Clean URL structure
# Cleaning Service Website - Interaction Design

## Core Interactive Features

### 1. Dark Mode Toggle
- **Location**: Top navigation bar, next to menu items
- **Functionality**: Toggle between light and dark themes
- **Visual Feedback**: Smooth transition animation, icon changes (sun/moon)
- **Persistence**: Saves user preference in localStorage

### 2. Service Booking Calculator
- **Location**: Services page
- **Functionality**: 
  - Select service type (Basic, Deep, Move-in/out, Commercial)
  - Select property size (Studio, 1BR, 2BR, 3BR+, Office)
  - Select frequency (One-time, Weekly, Bi-weekly, Monthly)
  - Calculate estimated price
- **Visual Feedback**: Real-time price updates, progress indicators
- **Output**: Estimated price range and "Get Quote" button

### 3. Service Filter & Search
- **Location**: Services page
- **Functionality**:
  - Filter services by type (Residential, Commercial, Specialty)
  - Filter by price range
  - Search by keyword
  - Sort by popularity, price, or rating
- **Visual Feedback**: Animated filter chips, search suggestions

### 4. Contact Form with Validation
- **Location**: Contact page
- **Functionality**:
  - Name, email, phone, service type, message fields
  - Real-time validation feedback
  - Service type dropdown
  - Preferred contact method selection
- **Visual Feedback**: Success/error states, loading animation
- **Note**: Form will show "Thank you" message (no actual submission)

## Navigation & User Flow

### Primary Navigation
- Home → Services → About → Contact
- Responsive mobile menu with slide-in animation
- Active page highlighting

### Secondary Interactions
- **Scroll-to-top button**: Appears after scrolling, smooth animation
- **Hover effects**: Cards lift with shadow, buttons glow
- **Loading animations**: Page transitions, form submissions
- **Image galleries**: Before/after cleaning photos with lightbox

## Mobile Considerations
- Touch-friendly buttons (minimum 44px)
- Swipe gestures for image galleries
- Collapsible service details
- Simplified calculator interface

## Accessibility Features
- Keyboard navigation support
- Screen reader friendly labels
- High contrast mode compatibility
- Focus indicators on all interactive elements
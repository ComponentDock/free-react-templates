# Template: CarouselTwelve (carousel-twelve)

## Purpose

Recreation of ColorLib **Carousel V12** (`https://colorlib.com/wp/template/carousel-12/`), a product list and item showcase carousel template built with React 19, Tailwind CSS 4, and TypeScript.

## Design tokens

- **Brand Colors**:
  - Primary / Accent: `#3b82f6` (Blue) / `#2563eb`
  - Neutral dark: `#1e293b` (Slate 800)
  - Neutral light: `#f8fafc` (Slate 50)
  - Card background: `#ffffff` with subtle shadows
- **Typography**:
  - Font Family: Inter, system-ui, sans-serif
  - Heading Weight: Bold (700)
  - Body Weight: Regular (400) / Medium (500)
- **UI Elements**:
  - Border radius: `rounded-xl` for cards, `rounded-full` for navigation buttons and badges
  - Shadows: `shadow-md` and `shadow-lg` for card elevation

## Sections & Gherkin Requirements

### 1. Header / Navbar

- **Requirement**: The header shall display a brand logo, navigation links (Home, Products, Features, Testimonials, Contact), and a CTA button ("Get Started").
- **Scenario**: User views header
  - Given the user loads the CarouselTwelve template
  - When the header renders
  - Then all navigation links and the CTA button are visible and interactive.

### 2. Hero Showcase

- **Requirement**: The hero section shall display an attention-grabbing headline, description, and primary CTA alongside an inspiring featured visual/carousel preview.
- **Scenario**: User views hero section
  - Given the user is on the main page
  - When the hero section renders
  - Then the headline, descriptive subtext, and call-to-action buttons are clearly displayed.

### 3. Product Carousel Section

- **Requirement**: The product carousel shall present interactive slides containing product cards with images, titles, pricing, and "View Details" actions, supporting next/prev navigation and dot indicators.
- **Scenario**: User interacts with the product carousel
  - Given the user scrolls to the product carousel
  - When the user clicks the next or previous carousel controls
  - Then the active product slides transition smoothly and update the visible items.

### 4. Features Grid

- **Requirement**: The features section shall highlight key product benefits in a clean multi-column grid with custom icons and descriptive text.
- **Scenario**: User reviews product features
  - Given the user views the features section
  - When the section renders
  - Then all feature cards display correct icons, titles, and descriptions.

### 5. Testimonials Section

- **Requirement**: The testimonials section shall showcase customer reviews in quote cards with avatars and ratings.
- **Scenario**: User reads testimonials
  - Given the user scrolls to the testimonials area
  - When the testimonials render
  - Then user feedback cards display with proper formatting and ratings.

### 6. Footer

- **Requirement**: The footer shall contain company links, newsletter subscription, social icons, and the mandatory Component Dock attribution link (`https://www.componentdock.com/`).
- **Scenario**: User checks footer attribution
  - Given the user reaches the bottom of the page
  - When the footer renders
  - Then the Component Dock attribution link is present and correctly pointed.

## Verification Checklist

- [ ] Spec validation passes (`npm run spec:validate`)
- [ ] 100% test coverage maintained across new components
- [ ] Component Dock attribution present in footer
- [ ] Responsive layouts verified on mobile and desktop viewports

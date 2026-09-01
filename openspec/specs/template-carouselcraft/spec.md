# Template: CarouselCraft (carousel-15)

## Purpose

Recreation of ColorLib **Carousel 15** (`https://colorlib.com/wp/template/carousel-15/`), an interactive carousel and slider showcase template featuring thumbnail navigation, smooth sliding transitions, caption overlays, and responsive layout.

- **New Name**: CarouselCraft (`apps/carouselcraft`)
- **Source Slug**: `carousel-15`
- **Preview URL**: `https://colorlib.com/wp/template/carousel-15/`
- **Stack**: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide React.

## Design Tokens

- **Brand Colors**:
  - Primary / Accent: Blue (`#007bff` / `bg-blue-600`)
  - Neutral dark: Charcoal (`#212529` / `text-gray-900`)
  - Neutral light: Off-white / Gray (`#f8f9fa` / `bg-gray-50`)
- **Typography**:
  - Font Family: system-ui, sans-serif (Inter / Roboto style)
  - Headings: Bold, clean sans-serif
- **Button / Component Shapes**:
  - Rounded corners (`rounded-lg`, `rounded-full` for navigation arrows)
  - Subtle shadows and smooth hover transitions

## Requirements & Scenarios

### Requirement 1: Hero Banner & Navigation

- The template must feature a responsive top navigation bar with brand logo and navigation links (Home, Features, Gallery, Contact).
- A prominent hero section introducing the Carousel Showcase with headline, description, and primary CTA.

### Requirement 2: Interactive Feature Carousel

- A multi-item carousel component with sliding animation, next/previous controls, and dot indicators.
- Each slide contains high-quality imagery, title, description, and interactive action button.

### Requirement 3: Thumbnail Navigation Strip

- A thumbnail preview bar underneath or beside the main carousel allowing direct click-to-slide navigation.
- Active thumbnail highlighted with a distinct border/glow.

### Requirement 4: Features / Highlights Grid

- A 3-column feature grid highlighting key capabilities (Responsive Design, Touch Enabled, Smooth Transitions).
- Icons, titles, and descriptive blurbs for each feature.

### Requirement 5: Call to Action & Footer

- A call-to-action banner prompting users to explore or download.
- Footer with copyright, social links, and mandatory Component Dock attribution (`https://www.componentdock.com/`).

## Verification Checklist

- [ ] Spec validation (`npm run spec:validate`) passes cleanly.
- [ ] 100% test coverage maintained on all new components.
- [ ] Footer contains Component Dock link.
- [ ] No mention of ColorLib in source code.

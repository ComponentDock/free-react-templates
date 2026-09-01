# Template: CarouselVane (Feedback Carousel / Testimonials)

## Purpose

Recreation of ColorLib Carousel V16 (`https://colorlib.com/wp/template/carousel-16/`), a modern and minimal free feedback/testimonial carousel template featuring customer reviews, opinions, avatars, and ratings. Built as a Vite + React 19 + Tailwind CSS 4 + TypeScript app in `apps/carousel-vane`.

## Design Tokens & Theme

- **Brand Colors**:
  - Primary Accent: `#3b82f6` (Blue / Trust)
  - Neutral Dark: `#1e293b` (Slate 800)
  - Neutral Light: `#f8fafc` (Slate 50)
  - Card Background: `#ffffff` with subtle border/shadow (`shadow-sm`)
- **Typography**: Sans-serif (Inter / System font stack)
- **Component Styling**: Rounded card containers (`rounded-xl`), circular avatar thumbnails (`rounded-full`), clean carousel navigation arrows and pagination dots.

## Requirements

### Requirement: Interactive Feedback Carousel

Users SHALL be able to view and interact with a customer testimonial carousel containing avatars, names, titles, and review copy.

#### Scenario: Display testimonials with avatars and feedback text

- Given the CarouselVane application is loaded
- When the user views the feedback section
- Then multiple testimonial cards should be displayed showing customer avatars, names, titles, and review paragraphs.

#### Scenario: Navigate through carousel slides

- Given the carousel is active
- When the user clicks the next/previous navigation controls or pagination dots
- Then the active testimonial slide should update smoothly with slide transition effects.

#### Scenario: Footer Attribution

- Given any page in the application
- When the user scrolls to the footer
- Then it must display a link to `https://www.componentdock.com/` branded as "Component Dock".

## Verification Checklist

- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Vitest coverage is 100% on changed code
- [ ] Build succeeds (`npm run build`)
- [ ] Footer links to Component Dock

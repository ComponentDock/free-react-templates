# Template: Carouselide (Carousel & Showcase)

## Purpose

Recreation of ColorLib **Carousel 07** (`carousel-07`), a modern interactive carousel and slide showcase website template.

- **Source Slug**: `carousel-07`
- **Preview URL**: `https://preview.colorlib.com/theme/carousel-07/` _(Note: Preview URL returned 404; designed using architectural recovery and screenshot fallback)._
- **Stack**: Vite, React 19, Tailwind CSS 4, TypeScript (strict).
- **Branding**: `https://www.componentdock.com/` in footer.

## Design Tokens (Extracted / Fallback Profile)

- **Primary Color**: `#6366f1` (Indigo) / `#4f46e5`
- **Accent Color**: `#f59e0b` (Amber)
- **Neutral Dark**: `#0f172a` (Slate 900)
- **Neutral Light**: `#f8fafc` (Slate 50)
- **Font Family**: Inter, system-ui, sans-serif
- **Button Radius**: `rounded-lg` with shadow and hover elevation.

---

## Requirements & Gherkin Scenarios

### Feature 1: Responsive Navigation Bar

- **As a** visitor,
- **I want** a clean sticky header with logo, navigation links, and a CTA button,
- **So that** I can easily navigate across sections or initiate action.

#### Scenario: Nav bar renders correctly

- **Given** the user loads the Carouselide home page,
- **When** the navigation bar is rendered,
- **Then** it displays the brand logo, links for Home, Features, Gallery, Testimonials, and Contact, and a "Get Started" CTA button.

### Feature 2: Hero Carousel Showcase

- **As a** visitor,
- **I want** an immersive hero banner with slide navigation arrows and indicators,
- **So that** I can browse featured slides and highlights immediately.

#### Scenario: Hero carousel controls

- **Given** the hero carousel displays slide 1 of 3,
- **When** the user clicks the next arrow or slide indicator dot,
- **Then** the carousel smoothly transitions to slide 2 with updated headline and CTA.

### Feature 3: Interactive Feature Cards Slider

- **As a** visitor,
- **I want** a scrollable or card-carousel section highlighting core capabilities,
- **So that** I can explore key features in an engaging card format.

#### Scenario: Feature cards display and interaction

- **Given** the feature section is visible,
- **When** the user views the feature cards grid or navigates via slider controls,
- **Then** each card shows an icon, title, description, and hover animation.

### Feature 4: Testimonial Carousel

- **As a** user,
- **I want** to read client testimonials presented in an auto-playing or manual carousel,
- **So that** I can build trust in the product or service.

#### Scenario: Testimonial navigation

- **Given** the testimonial carousel is active,
- **When** the user clicks pagination buttons,
- **Then** the review quote, author avatar, and title update instantly.

### Feature 5: Image Gallery Carousel

- **As a** visitor,
- **I want** a visual gallery carousel showing high-res portfolio items or screenshots,
- **So that** I can evaluate visual quality.

#### Scenario: Gallery display

- **Given** the gallery section is loaded,
- **When** the user scrolls or clicks through the gallery items,
- **Then** responsive images load cleanly via Picsum placeholders.

### Feature 6: Newsletter Subscription

- **As a** subscriber,
- **I want** an email subscription form with validation,
- **So that** I can receive updates and newsletters.

#### Scenario: Valid email submission

- **Given** the newsletter form is displayed,
- **When** the user enters a valid email address and clicks subscribe,
- **Then** a success confirmation message appears.

### Feature 7: Footer with Component Dock Link

- **As a** visitor,
- **I want** a footer containing brand info, navigation links, copyright, and Component Dock attribution,
- **So that** I can access secondary pages and explore more templates.

#### Scenario: Footer attribution present

- **Given** the footer is rendered,
- **Then** it must contain a link pointing to `https://www.componentdock.com/` labeled "Component Dock" or similar.

---

## Verification Checklist

- [ ] TypeScript strict compilation (`npm run build`) succeeds.
- [ ] 100% test coverage across all components.
- [ ] All 7 Gherkin features fully implemented and tested.
- [ ] Footer includes mandatory Component Dock link.
- [ ] No mention of ColorLib in app source code.

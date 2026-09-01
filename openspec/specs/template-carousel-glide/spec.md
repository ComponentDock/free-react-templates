# Template: CarouselGlide (Carousel / Interactive UI)

## Purpose

Recreation of ColorLib **Carousel 18** (`https://colorlib.com/wp/template/carousel-18/`), a modern split-design responsive carousel featuring an immersive image showcase on one side and interactive testimonial/content cards with smooth slide navigation on the other. Built for Vite, React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens & Theme

- **Brand Colors:**
  - Primary: `#7f53ac` (Rich Purple / Indigo accent)
  - Secondary: `#647dee` (Vibrant Blue gradient)
  - Neutral Dark: `#1a202c` (Slate 900)
  - Neutral Light: `#f7fafc` (Slate 50)
  - Accent / Highlight: `#ff6b6b` (Coral pink for active indicators/badges)
- **Typography:**
  - Font Family: `"Inter", "Poppins", sans-serif`
  - Heading Weights: 600, 700
  - Body Weights: 400, 500
- **UI Styling:**
  - Card & Container Border Radius: `rounded-2xl` / `rounded-3xl`
  - Transitions: Smooth cubic-bezier transitions (`transition-all duration-300 ease-in-out`)
  - Shadows: Soft elevated shadows (`shadow-xl`, `shadow-2xl`)

---

## Requirements & Gherkin Scenarios

### Feature 1: Split Hero Carousel

- **As a** site visitor,
- **I want** to view a prominent split-screen carousel showcasing high-impact visual imagery alongside rich testimonial or product details,
- **So that** I can easily browse through featured items with clear context.

#### Scenario 1: Navigating carousel slides

- **Given** the CarouselGlide page is loaded,
- **When** the user clicks the "Next" or "Previous" arrow controls (or pagination dots),
- **Then** the active slide transitions smoothly, updating both the featured image on the left and the headline/testimonial text on the right.

#### Scenario 2: Autoplay toggle and pause on hover

- **Given** the carousel is active,
- **When** the user hovers over the carousel container,
- **Then** autoplay pauses, allowing the user to read the content without abrupt transitions.

---

### Feature 2: Interactive Features & Highlights Grid

- **As a** prospective user,
- **I want** to explore key product benefits and feature cards below the hero carousel,
- **So that** I understand the core value proposition.

#### Scenario 1: Viewing feature cards

- **Given** the user scrolls down to the features section,
- **When** the feature cards come into view,
- **Then** they display clean icons, titles, and descriptions with hover lift effects.

---

### Feature 3: Call-to-Action & Footer

- **As a** visitor ready to engage,
- **I want** a clear call-to-action banner and a professional footer linking to Component Dock,
- **So that** I can take the next step or explore more templates.

#### Scenario 1: Footer attribution

- **Given** the user reaches the bottom of the page,
- **When** the footer is rendered,
- **Then** it displays copyright information and a prominent link to `https://www.componentdock.com/`.

---

## Verification Checklist

- [ ] TypeScript strict mode compilation (`npm run typecheck`) passes without errors.
- [ ] Tailwind CSS 4 build succeeds with `injectUiSource()` configured in `vite.config.ts`.
- [ ] Vitest test suite passes with 100% coverage on new code (`npm run test:coverage`).
- [ ] Footer correctly links `https://www.componentdock.com/`.
- [ ] Zero references to ColorLib in app source files.

# Template: Concertina (Accordion & FAQ Showcase)

## Purpose

Recreation of ColorLib `accordion-05` (`https://colorlib.com/wp/template/accordion-05/`).

- **New Name**: Concertina (`apps/concertina`)
- **Category**: Accordion / FAQ / Interactive Display
- **Preview URL**: `https://colorlib.com/wp/template/accordion-05/` (Live preview unreachable; design derived from official ColorLib screenshot analysis).

## Design Tokens

- **Brand Colors**:
  - Primary / Accent: Emerald Teal (`#0d9488`, `teal-600`)
  - Background: Neutral Light (`#f8fafc`, `slate-50`) & Pure White (`#ffffff`)
  - Text Primary: Dark Slate (`#0f172a`, `slate-900`)
  - Text Muted: Slate Gray (`#64748b`, `slate-500`)
- **Typography**: Inter / system sans-serif (`font-sans`).
- **Radii & Shadows**: `rounded-lg` (0.5rem), subtle shadow elevation (`shadow-sm`, `shadow-md`).
- **Layout Structure**: Single-page layout with sticky navbar, hero banner, interactive accordion/FAQ sections, feature highlights, testimonials, newsletter form, and footer linking `https://www.componentdock.com/`.

## Requirements & Gherkin Scenarios

### Requirement 1: Sticky Navigation Header

- The header must remain fixed at the top with brand logo, navigation links, and a CTA button.
- **Scenario**: User views navigation
  - Given the page is loaded
  - When the user scrolls down
  - Then the header stays fixed at the top with clear navigation links.

### Requirement 2: Hero Banner

- Display a prominent hero section with headline, descriptive subtext, and primary call-to-action button.
- **Scenario**: User views hero banner
  - Given the user arrives at the site
  - When they view the hero section
  - Then they see a clear value proposition and primary action button.

### Requirement 3: Interactive Accordion & FAQ Section

- Interactive accordion items that expand and collapse smoothly to reveal detailed content.
- **Scenario**: User toggles accordion items
  - Given the accordion list is displayed with collapsed items
  - When the user clicks an accordion header
  - Then the corresponding content expands while other items remain collapsed.

### Requirement 4: Feature Highlights Grid

- Grid of key features highlighting benefits with icons and descriptions.
- **Scenario**: User browses feature cards
  - Given the user scrolls to the features section
  - When they view the feature cards
  - Then they see clean cards with icons, titles, and descriptions.

### Requirement 5: Testimonials Section

- Social proof section featuring client quotes and avatars.
- **Scenario**: User reads testimonials
  - Given the user reaches the testimonial section
  - When they view client feedback
  - Then they see professional quotes and user attribution.

### Requirement 6: Newsletter Signup Form

- Email subscription form with validation.
- **Scenario**: User subscribes to newsletter
  - Given the user enters a valid email in the newsletter input
  - When they click subscribe
  - Then a success confirmation message is displayed.

### Requirement 7: Footer with Component Dock Attribution

- Footer containing site links, copyright, and required attribution link to `https://www.componentdock.com/`.
- **Scenario**: User checks footer attribution
  - Given the user scrolls to the bottom of the page
  - When they view the footer
  - Then they find the copyright and a link to Component Dock (`https://www.componentdock.com/`).

## Verification Checklist

- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Vitest tests pass with 100% coverage (`npm run test:coverage`)
- [ ] Build succeeds (`npm run build`)
- [ ] Footer links `https://www.componentdock.com/`
- [ ] No `colorlib` references in app code

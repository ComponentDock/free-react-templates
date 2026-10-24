# Template: CarouselLog (Carousel)
<!-- prep-status: shipped-as=carousel-vane -->
> **SHIPPED-UNDER** — the ColorLib `carousel-16` design this prep describes already
> ships as `apps/carousel-vane` (<https://carousel-vane.free.componentdock.com>).
> Do not scaffold `apps/carousellog`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-carousel-vane/spec.md`.

## Purpose

Recreation of ColorLib **Carousel 16** (`https://colorlib.com/wp/template/carousel-16/`), a responsive testimonial/content carousel template built with Vite, React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens & Reference

- **Source Slug**: `carousel-16`
- **Preview URL**: `https://preview.colorlib.com/theme/carousel-16/`
- **Brand Palette**: Clean neutral slate background (`bg-slate-900` / `bg-slate-50`), primary accent indigo/violet (`bg-indigo-600`, `text-indigo-400`), card backgrounds in soft white/dark cards with circular avatars.
- **Typography**: Sans-serif font family, clean modern headings and body copy.
- **Components**: Header/Navbar, Hero Banner with Carousel, Testimonial Cards featuring circular avatars and ratings, Call-to-Action section, Footer linking to Component Dock (`https://www.componentdock.com/`).

## Requirements

### Requirement 1: Navbar & Header

#### Scenario: Navbar & Header

- The template must render a responsive navigation bar with brand logo and navigation links.
- **Scenario:** Viewing the header
- **GIVEN** the user loads the CarouselLog template
- **THEN** the navigation bar displays the brand logo and links for Home, Features, Testimonials, and Contact

### Requirement 2: Hero Section with Testimonial Carousel

#### Scenario: Hero Section with Testimonial Carousel

- The hero section must showcase a prominent interactive carousel displaying testimonials, quotes, client names, roles, and circular avatars.
- **Scenario:** Interacting with the carousel
- **GIVEN** the user is on the hero section
- **WHEN** the user clicks the next/previous carousel controls or pagination dots
- **THEN** the carousel slides to display the next/previous testimonial card smoothly

### Requirement 3: Testimonial Details & Cards

#### Scenario: Testimonial Details & Cards

- Each testimonial card must display a circular avatar, quote text, author name, title/role, and star rating.
- **Scenario:** Inspecting testimonial cards
- **GIVEN** the user views the testimonial carousel items
- **THEN** each card clearly presents the author's avatar, feedback text, and professional title

### Requirement 4: Call to Action (CTA) Section

#### Scenario: Call to Action (CTA) Section

- A prominent CTA banner encouraging users to engage or subscribe.
- **Scenario:** Viewing the CTA section
- **GIVEN** the user scrolls past the carousel
- **THEN** a distinct call-to-action section appears with a headline, description, and action button

### Requirement 5: Footer with Component Dock Attribution

#### Scenario: Footer with Component Dock Attribution

- Footer containing copyright and mandatory link to `https://www.componentdock.com/`.
- **Scenario:** Checking footer links
- **GIVEN** the user scrolls to the bottom of the page
- **THEN** the footer displays copyright information and a link to Component Dock (`https://www.componentdock.com/`)

## Verification checklist

- [ ] Spec validation passes (`npm run spec:validate`)
- [ ] Vitest coverage at 100%
- [ ] Fully responsive on mobile and desktop
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] Navbar & Header — the navigation bar displays the brand logo and links for Home, Features, Testimonials, and Contact
- [ ] Hero Section with Testimonial Carousel — the carousel slides to display the next/previous testimonial card smoothly
- [ ] Testimonial Details & Cards — each card clearly presents the author's avatar, feedback text, and professional title
- [ ] Call to Action (CTA) Section — a distinct call-to-action section appears with a headline, description, and action button

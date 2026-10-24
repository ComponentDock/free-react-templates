# Template: Interluxe (Interior Design Website)
<!-- prep-status: shipped-as=timber -->
> **SHIPPED-UNDER** — the ColorLib `balay` design this prep describes already
> ships as `apps/timber` (<https://timber.free.componentdock.com>).
> Do not scaffold `apps/interluxe`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-timber/spec.md`.

## Purpose

Recreation of ColorLib **Balay** — a best interior design website template with
sidebar navigation, hero slider, about section, services, blog, and contact.

- **Source:** https://colorlib.com/wp/template/balay/
- **Preview:** https://preview.colorlib.com/theme/balay/
- **New name:** interluxe
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Interior Design Website

## Design tokens

Extracted from live preview DOM and `css/style.css`:

| Token             | Value                                               | Notes                                             |
| ----------------- | --------------------------------------------------- | ------------------------------------------------- |
| font-family       | "Quicksand", Arial, sans-serif                      | Loaded via Google Fonts (weights 300/400/500/700) |
| primary/accent    | #FFC300 (gold/yellow)                               | Active nav, hero desc bg, buttons, hover          |
| body-text         | rgba(0,0,0,0.7)                                     | Paragraph text                                    |
| heading-color     | #000                                                | Headings (h1–h6)                                  |
| background        | #fff                                                | Page/main content background                      |
| aside-bg          | #2C2C2C (dark charcoal)                             | Sidebar background                                |
| aside-text        | rgba(255,255,255,0.5)                               | Sidebar nav link default color                    |
| aside-active      | #FFC300                                             | Active nav link in sidebar                        |
| aside-footer-text | rgba(255,255,255,0.3)                               | Sidebar footer copyright                          |
| border-color      | #b3b3b3                                             | Borders/dividers                                  |
| heading-meta      | #FFC300                                             | Small "Welcome" / "What I do?" labels             |
| font-weight       | 300 (light), 400 (normal), 500 (medium), 700 (bold) | Quicksand weights                                 |
| font-size         | 16px (body)                                         | Base                                              |
| line-height       | 1.8 (body)                                          | Generous                                          |
| transition        | .3s all ease                                        | Hover/interactive transitions                     |
| overlay           | rgba(0,0,0,0.5)                                     | Hero image overlay                                |

### Visual design notes (from preview HTML)

The template is a **single-page interior design website** with these sections:

1. **Sidebar navigation** (left side, dark #2C2C2C background)
   - Logo: "Interluxe" (we rename from "Balay")
   - Nav links: Home, Project, About, Services, Blog, Contact
   - Footer: copyright + social icons (Facebook, Twitter, Instagram, LinkedIn)
   - Fixed position on desktop, toggle on mobile

2. **Hero slider** (full-width, FlexSlider-based)
   - 3 slides with background images and overlay
   - Each slide has: heading ("An Inspiring Built Space", "Interior Design Studio", "The National Gallery")
   - Subtext: "100% html5 bootstrap templates..."
   - CTA button: "View Project →" (gold #FFC300 background)

3. **About section** ("Who we are")
   - 2-column: image left, text right
   - Heading meta: "Welcome"
   - Heading: "Who we are"
   - Description paragraphs
   - 3 feature boxes with check icons: "We are passionate", "Honest Dependable", "Always Improving"

4. **Services section** ("Here are some of my expertise")
   - Heading meta: "What I do?"
   - Heading: "Here are some of my expertise"
   - 2-column grid of service items with icons
   - Services: General Contracting, Interior Design, Consultancy, Building

5. **Blog section** ("Read our articles")
   - Heading meta: "Blog"
   - 3-column grid of blog cards with images, date, title, description
   - "Read more" links

6. **Contact section** ("Get in touch")
   - Heading meta: "Contact"
   - Contact form: name, email, subject, message, submit button

7. **Footer** (Component Dock attribution required)

## Requirements

### Feature: Interluxe template behaviour

#### Scenario: Sidebar navigation renders

- **GIVEN** I am on the Interluxe page
- **THEN** I should see a sidebar with the logo "Interluxe"
- **AND** I should see navigation links: Home, Project, About, Services, Blog, Contact
- **AND** the sidebar should have a dark background (#2C2C2C)

#### Scenario: Hero slider displays

- **GIVEN** I am on the Interluxe page
- **THEN** I should see a full-width hero slider with background images
- **AND** each slide should have a heading and a "View Project" button
- **AND** the slider should auto-advance between slides

#### Scenario: About section renders

- **GIVEN** I am on the Interluxe page
- **THEN** I should see a "Welcome" meta label
- **AND** I should see a "Who we are" heading
- **AND** I should see 3 feature boxes: "We are passionate", "Honest Dependable", "Always Improving"

#### Scenario: Services section renders

- **GIVEN** I am on the Interluxe page
- **THEN** I should see a "What I do?" meta label
- **AND** I should see a "Here are some of my expertise" heading
- **AND** I should see service items with icons and descriptions

#### Scenario: Blog section renders

- **GIVEN** I am on the Interluxe page
- **THEN** I should see a "Blog" meta label
- **AND** I should see blog cards with images, dates, and titles

#### Scenario: Contact section renders

- **GIVEN** I am on the Interluxe page
- **THEN** I should see a "Contact" meta label
- **AND** I should see a contact form with name, email, subject, and message fields

#### Scenario: Design tokens match

- **GIVEN** I am on the Interluxe page
- **THEN** the primary accent color should be #FFC300
- **AND** the font family should include "Quicksand"
- **AND** the sidebar background should be #2C2C2C

#### Scenario: Mobile responsive

- **GIVEN** I am on the Interluxe page on a mobile device
- **THEN** the sidebar should collapse to a toggle button
- **AND** the content should be full-width

#### Scenario: Accessibility

- **GIVEN** I am on the Interluxe page
- **THEN** all sections should have proper headings
- **AND** the contact form should have associated labels
- **AND** navigation should be keyboard accessible

#### Scenario: Footer links to Component Dock

- **GIVEN** I am on the Interluxe page
- **THEN** the footer should contain a link to https://www.componentdock.com/

## Verification checklist

- [ ] Sidebar renders with logo and navigation links
- [ ] Hero slider displays with slides and CTA buttons
- [ ] About section renders with image, text, and feature boxes
- [ ] Services section renders with service items
- [ ] Blog section renders with blog cards
- [ ] Contact section renders with form
- [ ] Design tokens match: #FFC300 accent, Quicksand font, #2C2C2C sidebar
- [ ] Responsive on mobile (sidebar toggle)
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] No shared files modified (standalone template)

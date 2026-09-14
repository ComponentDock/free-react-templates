# Template: Lensvault (Photography Studio)

## Purpose

Recreation of ColorLib "Shotgear" — a photography studio website template.

- **Source:** https://colorlib.com/wp/template/shotgear/
- **Preview:** https://preview.colorlib.com/theme/shotgear/
- **Source slug:** `shotgear`
- **New name:** `lensvault`
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

Extracted from the live preview stylesheet (`style.css`) and DOM:

| Token              | Value              | Notes                                     |
| ------------------ | ------------------ | ----------------------------------------- |
| Brand orange       | `#ff4800`          | CTA buttons, links, pricing accents       |
| Dark background    | `#182028`          | Navbar, sections, button default bg       |
| Footer bg          | `#1e2528`          | Footer area                               |
| Body text          | `#999999`          | Paragraphs, secondary text                |
| Muted text         | `#888888`          | Subtitles, description copy               |
| Heading text       | `#182028`          | Section headings                          |
| White              | `#fff`             | Card backgrounds, light sections          |
| Light section bg   | `#fbf9ff`          | Alternating section tint                  |
| Font — headings    | `Oswald`, sans-serif | All h1–h6, nav links, buttons           |
| Font — body        | `Roboto`, sans-serif | Paragraphs, form labels, descriptions   |
| Button radius      | `50px` (pill)      | Primary CTA buttons (btn_1, btn_2)       |
| Button default bg  | `#182028`          | Dark fill                                 |
| Button hover bg    | `#ff4800`          | Brand orange on hover                     |
| Border accent      | `#f0e9ff`          | Pricing table borders                     |

## Section Structure

1. **Navbar** — Fixed/sticky transparent navbar with logo, nav links (Home, About, Services, Portfolio, Blog, Elements, Contact), cart dropdown
2. **Hero (banner_part)** — Full-width background image, centered text: subtitle "Model Photography", headline "Creative" (bold), CTA button "view work"
3. **About (about_us)** — Centered section with subtitle "About our studio", quote "The Camera Is An Instrument That Teaches People To See Without A Camera", "read more" button
4. **Gallery (gallery_part)** — "Check latest work" heading, filterable portfolio grid with overlay text on hover, multiple image cards in varied widths
5. **Services (our_service)** — "What we offer" heading, service cards (wedding photography, nature photography, etc.) with icons and descriptions
6. **Testimonials (review_part)** — "Testimonials" subtitle, carousel/slider with customer quotes and names
7. **Pricing (pricing_part)** — "Pricing plan" heading, 3-tier pricing cards with feature lists and CTA buttons
8. **Blog (catagory_post)** — "Latest story" heading, 3 blog post cards with image, title, date, excerpt
9. **Footer (footer-area)** — Dark background (#1e2528), 4 columns: service links, contact info, Instagram feed, newsletter signup form

## Gherkin Requirements

### Navbar
- Given the user is on any page
  - When the page loads
  - Then a sticky navbar appears at the top with the logo and navigation links
  - And the nav contains Home, About, Services, Portfolio, Blog, Contact links
- Given the user scrolls down
  - When the page scrolls past the hero
  - Then the navbar becomes fixed with a solid background

### Hero Section
- Given the user is on the homepage
  - When the hero section renders
  - Then a full-width background image displays
  - And the subtitle "Model Photography" is visible
  - And the headline "Creative" is displayed prominently
  - And a "view work" button is shown

### About Section
- Given the user scrolls to the About section
  - When the section is visible
  - Then the subtitle "About our studio" appears
  - And the quote text is displayed in large typography
  - And a "read more" button is present

### Gallery Section
- Given the user reaches the Gallery section
  - When the section renders
  - Then the heading "Check latest work" is visible
  - And a filterable portfolio grid displays image cards
  - And each card shows an overlay with title text on hover

### Services Section
- Given the user scrolls to Services
  - When the section loads
  - Then the heading "What we offer" is displayed
  - And service cards are shown with icons and descriptions
  - And at least two service types are visible (wedding photography, nature photography)

### Testimonials Section
- Given the user reaches the Testimonials section
  - When the section renders
  - Then a carousel of testimonials is displayed
  - And each slide shows a customer quote and name
  - And navigation dots/arrows allow switching slides

### Pricing Section
- Given the user scrolls to Pricing
  - When the section renders
  - Then the heading "Pricing plan" is visible
  - And three pricing cards are displayed
  - And each card shows a price, feature list, and CTA button

### Blog Section
- Given the user reaches the Blog section
  - When the section renders
  - Then the heading "Latest story" is displayed
  - And three blog post cards are shown
  - And each card has an image, title, date, and excerpt

### Footer
- Given the user scrolls to the footer
  - When the footer renders
  - Then a dark background (#1e2528) footer is visible
  - And four columns display: services, contact info, Instagram, newsletter
  - And the footer links to Component Dock

## Verification Checklist

- [ ] All 9 sections match the original section order 1:1
- [ ] Brand color `#ff4800` used for CTAs and accents
- [ ] Oswald used for headings, Roboto for body text
- [ ] Pill-shaped buttons (border-radius: 50px)
- [ ] Dark (#182028) navbar and section backgrounds
- [ ] Gallery grid with hover overlays
- [ ] Testimonial carousel functional
- [ ] Pricing cards display 3 tiers
- [ ] Blog section with 3 post cards
- [ ] Footer links to Component Dock
- [ ] Footer has 4-column layout
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] `npm run verify:app lensvault` passes

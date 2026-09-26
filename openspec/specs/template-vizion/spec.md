# Template: Vizion (Creative Designer Portfolio)

## Purpose

Vizion is a single-page creative designer portfolio landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Melan" free template (source:
https://colorlib.com/wp/template/melan/), built under a DIFFERENT name
(**Vizion**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

**Preview URL:** https://preview.colorlib.com/theme/melan/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/melan-free-template.jpg

The original is a Bootstrap 4 personal portfolio page for a creative designer
named Milan. It features a sticky navbar, hero with social links, services
grid, portfolio gallery with hover overlays, about section with download CV,
stats counters, testimonial carousel, project CTA, and a footer.

## Design tokens (extracted from preview CSS)

- **Brand color:** #615CFD (purple/indigo)
- **Font family:** "Muli" (Google Fonts, renamed to "Mulish")
- **Headings color:** #001D38 (dark navy)
- **Body text:** #4D4D4D
- **Button style:** outlined with brand color border, solid brand color fill on hover; CTA buttons solid brand color with white text
- **Section backgrounds:** white (default), dark charcoal (#2B2B2B) for portfolio header
- **Counter area:** white background
- **Footer:** light gray background

## Section structure (in order)

1. **Navbar** — Logo text "Vizion" + nav links (Home, About, Services, Portfolio, Contact) + "Contact Me" CTA button. Sticky on scroll.
2. **Hero** — Full-width background with subtle pattern/gradient. Social links (Facebook, Twitter, Instagram) on the left side. Centered text: "Hello This is Vizion" heading + "Creative Designer" subtitle.
3. **Services** — Section title "Service Provided" / "Build brands campaigns & digital projects". 3-column grid: Graphic Design, Web Design, Mobile App — each with icon, title, description.
4. **Portfolio** — Dark background header "Portfolios" / "Some of my awesome stuffs here". Below: grid of 5 portfolio items (2 large + 3 medium) with hover overlay showing title. "More Folio" button at bottom.
5. **About** — Split layout: left side has "About me" heading, description text, "Download CV" button. Right side has decorative color grid pattern + portrait image. Large "About" watermark text in background.
6. **Stats** — 3-column counter: 520+ Total Projects, 244 On Going Projects, 95% Job Success.
7. **Testimonials** — Carousel/slider with quote icon, testimonial text, author name + role + avatar.
8. **CTA** — "Let's discuss for a project" heading, description, "Start Talking" button.
9. **Footer** — Top: nav links (About, Services, Portfolio) left + social icons right. Bottom: copyright with "Made with Component Dock" link.

## Scenarios

### Navbar

- Renders logo and all nav links
- "Contact Me" button is visible
- Becomes sticky on scroll

### Hero

- Displays heading "Hello This is Vizion"
- Displays subtitle "Creative Designer"
- Shows social media icon links

### Services

- Renders 3 service cards
- Each card has icon, title, description

### Portfolio

- Renders section header on dark background
- Shows 5 portfolio items in grid
- Each item has hover overlay with title
- "More Folio" button is present

### About

- Shows "About me" heading and description
- "Download CV" button is present
- Decorative image/grid visible

### Stats

- Shows 3 stat counters with values and labels

### Testimonials

- Renders testimonial content with author info

### CTA

- Shows "Let's discuss for a project" heading
- "Start Talking" button is present

### Footer

- Contains nav links
- Contains social media icons
- Contains Component Dock attribution link

# Template: Grange (Agriculture / Farming)
<!-- prep-status: shipped-as=greenfield -->
> **SHIPPED-UNDER** — the ColorLib `farmland` design this prep describes already
> ships as `apps/greenfield` (<https://greenfield.free.componentdock.com>).
> Do not scaffold `apps/grange`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-greenfield/spec.md`.

## Purpose

Recreation of ColorLib "Farmland" as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **Source template:** [Farmland](https://colorlib.com/wp/template/farmland/)
- **Live preview:** https://preview.colorlib.com/theme/farmland/
- **New name:** `grange` (app folder: `apps/grange`, package: `@free-react-templates/grange`)
- **Design category:** Agriculture / Farming / Organic
- **Deploy target:** https://grange.free.componentdock.com

## Design tokens (extracted from live preview CSS)

| Token | Value | Notes |
|-------|-------|-------|
| Brand primary | `#5d8c55` | Forest green — dominant brand color (59 uses in style.css) |
| Brand secondary | `#ecdc67` | Golden yellow accent (13 uses) |
| Brand dark | `#3d5c38` | Dark green accent (buttons, hover states) |
| Brand mid | `#486c42` | Mid green for subtle accents |
| Text dark | `#212529` | Headings and body text |
| Text muted | `#6c757d` | Subtext, meta, secondary |
| Background white | `#fff` | Section backgrounds |
| Background light | `#f8f9fa` | Alternate section bg |
| Body font | `"Roboto", Arial, sans-serif` | Loaded via Google Fonts (weights 300, 400, 500, 700, 900) |
| Display font | `"Covered By Your Grace", cursive` | Handwritten style — hero headings and footer brand |
| Button radius | `0.25rem` | Small rounded corners |
| Button primary bg | `#5d8c55` (override Bootstrap #007bff) | Brand green buttons |
| Button secondary | Transparent bg with green border/text | Ghost-style secondary |
| Section backgrounds | Hero: full-height bg image + overlay; Counter: bg image; Video: bg image; Newsletter/footer: bg image + overlay | Image-heavy, nature/farm theme |

## Sections (in order)

1. **Navbar** — Fixed/sticky top, logo "Grange" (Covered By Your Grace font), nav links: Home, About, Services, Projects, Blog, Contact. Social icons (Twitter, Facebook, Instagram). Hamburger menu on mobile.
2. **Hero** — Full-height slider (2 slides), each with background farm image + dark overlay. Heading in "Covered By Your Grace" cursive: "Agriculture is the Most Healthful" / second slide. Subheading + description text + two CTA buttons (Our Services, Our Projects). Owl Carousel slider with dots.
3. **Services** — 4 service cards in a row: Fresh Vegetables, Agricultural Products, Organic Products, Dairy Products. Each card has a flaticon icon, title, and short description. White background, no padding top.
4. **About** — Split layout: left side has two stacked images, right side has heading "We're Leader In Agricultural Market", body text, and two feature items (Growing Fruits and Vegetables, Tips for Ripening Fruits) with icons. "Learn More" secondary button.
5. **Counter/Stats** — Full-width section with background farm image. Statistics counters (animated on scroll): number of projects, team members, satisfied clients, awards. Overlay darkens image.
6. **Projects/Portfolio** — "Explore Projects" heading. 4 project cards in a grid: Organic Solution, Harvest Innovation, Farm System, Agricultural Farming. Each card has a background image, title overlay at bottom, hover effect.
7. **Video/CTA** — Full-width background image with centered play button icon. Heading: "Watch Modern Agricultural Farming". Dark overlay. Click opens video or navigates.
8. **Testimonials** — "What Our Customers Say" heading. Owl Carousel slider with customer testimonials. Each slide: user avatar image, quote text, customer name. Light background.
9. **FAQ + Contact** — Two-column layout. Left: "Request An Estimate" contact form (name, email, subject, message, submit button). Right: "Frequently Asked Questions" accordion (expandable FAQ items). White background.
10. **Blog/Recent Posts** — "Recent Post" heading on light gray bg (#f8f9fa). 3 blog cards: each with featured image, category tag, date, title, excerpt text. Cards in a row.
11. **Footer** — Dark background with 4 columns: Brand ("Grange" in cursive + description), Quick Links, Services, Newsletter subscribe form. Social media icons. Copyright bar at bottom. "Made with Component Dock" link.

## Requirements

### Feature: Grange Template — Agriculture Landing Page

#### Scenario: Navbar renders correctly

- **GIVEN** the user loads the page
- **WHEN** the navbar is visible
- **THEN** it displays the "Grange" logo in cursive font
- **AND** it shows navigation links: Home, About, Services, Projects, Blog, Contact
- **AND** it shows social media icons (Twitter, Facebook, Instagram)
- **AND** on mobile it shows a hamburger menu toggle

#### Scenario: Hero slider displays slides

- **GIVEN** the user loads the page
- **WHEN** the hero section is visible
- **THEN** it shows a full-height background image with dark overlay
- **AND** it displays a cursive heading "Agriculture is the Most Healthful"
- **AND** it shows a subheading and description paragraph
- **AND** it displays two CTA buttons: "Our Services" and "Our Projects"
- **AND** the slider advances to the second slide after a timeout

#### Scenario: Services section shows 4 service cards

- **GIVEN** the user scrolls to the services section
- **WHEN** the services section is visible
- **THEN** it displays 4 cards: Fresh Vegetables, Agricultural Products, Organic Products, Dairy Products
- **AND** each card has an icon, title, and description

#### Scenario: About section displays company info

- **GIVEN** the user scrolls to the about section
- **WHEN** the about section is visible
- **THEN** it shows a heading "We're Leader In Agricultural Market"
- **AND** it displays two images on the left side
- **AND** it shows two feature items with icons on the right
- **AND** it has a "Learn More" button

#### Scenario: Counter section shows animated stats

- **GIVEN** the user scrolls to the counter section
- **WHEN** the counter section enters the viewport
- **THEN** it displays a background image with overlay
- **AND** it shows animated number counters that count up on scroll

#### Scenario: Projects grid shows 4 portfolio items

- **GIVEN** the user scrolls to the projects section
- **WHEN** the projects section is visible
- **THEN** it shows a heading "Explore Projects"
- **AND** it displays 4 project cards in a grid
- **AND** each card has a background image and title overlay

#### Scenario: Video CTA section renders

- **GIVEN** the user scrolls to the video section
- **WHEN** the video section is visible
- **THEN** it shows a full-width background image with overlay
- **AND** it displays a heading "Watch Modern Agricultural Farming"
- **AND** it shows a play button icon centered on the image

#### Scenario: Testimonials carousel works

- **GIVEN** the user scrolls to the testimonials section
- **WHEN** the testimonials section is visible
- **THEN** it shows a heading "What Our Customers Say"
- **AND** it displays a carousel with customer quotes
- **AND** each slide shows a user avatar, quote text, and name

#### Scenario: FAQ + Contact form is functional

- **GIVEN** the user scrolls to the FAQ/contact section
- **WHEN** the section is visible
- **THEN** it shows a contact form on the left with fields: name, email, subject, message
- **AND** it shows an FAQ accordion on the right
- **AND** clicking an FAQ item expands/collapses the answer

#### Scenario: Blog section shows recent posts

- **GIVEN** the user scrolls to the blog section
- **WHEN** the blog section is visible
- **THEN** it shows a heading "Recent Post" on a light gray background
- **AND** it displays 3 blog cards with image, category, date, title, and excerpt

#### Scenario: Footer displays correctly

- **GIVEN** the user scrolls to the footer
- **WHEN** the footer is visible
- **THEN** it shows the "Grange" logo in cursive font
- **AND** it displays 4 columns: brand info, quick links, services, newsletter
- **AND** it has a newsletter subscribe input + button
- **AND** it shows social media icons
- **AND** it displays a copyright bar with "Made with Component Dock" link

#### Scenario: Page is responsive

- **GIVEN** the user views the page on a mobile device (viewport < 768px)
- **WHEN** the page loads
- **THEN** the navbar collapses into a hamburger menu
- **AND** the hero text is readable and not clipped
- **AND** service cards stack vertically
- **AND** the projects grid stacks into 1-2 columns
- **AND** the FAQ/contact section stacks vertically
- **AND** footer columns stack vertically

## Verification checklist

- [ ] Spec reviewed — all sections from the ColorLib source are represented
- [ ] Design tokens match the original: green #5d8c55 primary, golden #ecdc67 accent, Roboto body font, Covered By Your Grace display font
- [ ] Section order matches 1:1 with original: Hero → Services → About → Counter → Projects → Video → Testimonials → FAQ/Contact → Blog → Footer
- [ ] All images use placeholder URLs (picsum.photos with deterministic seeds)
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
- [ ] CNAME file: `grange.free.componentdock.com`
- [ ] Package name: `@free-react-templates/grange`
- [ ] `injectUiSource()` registered in vite.config.ts
- [ ] `npm install` run at root to register workspace in lockfile

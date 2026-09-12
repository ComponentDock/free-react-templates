# Template: Grange (Agriculture / Farming)

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

## Gherkin requirements

### Feature: Grange Template — Agriculture Landing Page

#### Scenario: Navbar renders correctly
- **Given** the user loads the page
- **When** the navbar is visible
- **Then** it displays the "Grange" logo in cursive font
- **And** it shows navigation links: Home, About, Services, Projects, Blog, Contact
- **And** it shows social media icons (Twitter, Facebook, Instagram)
- **And** on mobile it shows a hamburger menu toggle

#### Scenario: Hero slider displays slides
- **Given** the user loads the page
- **When** the hero section is visible
- **Then** it shows a full-height background image with dark overlay
- **And** it displays a cursive heading "Agriculture is the Most Healthful"
- **And** it shows a subheading and description paragraph
- **And** it displays two CTA buttons: "Our Services" and "Our Projects"
- **And** the slider advances to the second slide after a timeout

#### Scenario: Services section shows 4 service cards
- **Given** the user scrolls to the services section
- **When** the services section is visible
- **Then** it displays 4 cards: Fresh Vegetables, Agricultural Products, Organic Products, Dairy Products
- **And** each card has an icon, title, and description

#### Scenario: About section displays company info
- **Given** the user scrolls to the about section
- **When** the about section is visible
- **Then** it shows a heading "We're Leader In Agricultural Market"
- **And** it displays two images on the left side
- **And** it shows two feature items with icons on the right
- **And** it has a "Learn More" button

#### Scenario: Counter section shows animated stats
- **Given** the user scrolls to the counter section
- **When** the counter section enters the viewport
- **Then** it displays a background image with overlay
- **And** it shows animated number counters that count up on scroll

#### Scenario: Projects grid shows 4 portfolio items
- **Given** the user scrolls to the projects section
- **When** the projects section is visible
- **Then** it shows a heading "Explore Projects"
- **And** it displays 4 project cards in a grid
- **And** each card has a background image and title overlay

#### Scenario: Video CTA section renders
- **Given** the user scrolls to the video section
- **When** the video section is visible
- **Then** it shows a full-width background image with overlay
- **And** it displays a heading "Watch Modern Agricultural Farming"
- **And** it shows a play button icon centered on the image

#### Scenario: Testimonials carousel works
- **Given** the user scrolls to the testimonials section
- **When** the testimonials section is visible
- **Then** it shows a heading "What Our Customers Say"
- **And** it displays a carousel with customer quotes
- **And** each slide shows a user avatar, quote text, and name

#### Scenario: FAQ + Contact form is functional
- **Given** the user scrolls to the FAQ/contact section
- **When** the section is visible
- **Then** it shows a contact form on the left with fields: name, email, subject, message
- **And** it shows an FAQ accordion on the right
- **And** clicking an FAQ item expands/collapses the answer

#### Scenario: Blog section shows recent posts
- **Given** the user scrolls to the blog section
- **When** the blog section is visible
- **Then** it shows a heading "Recent Post" on a light gray background
- **And** it displays 3 blog cards with image, category, date, title, and excerpt

#### Scenario: Footer displays correctly
- **Given** the user scrolls to the footer
- **When** the footer is visible
- **Then** it shows the "Grange" logo in cursive font
- **And** it displays 4 columns: brand info, quick links, services, newsletter
- **And** it has a newsletter subscribe input + button
- **And** it shows social media icons
- **And** it displays a copyright bar with "Made with Component Dock" link

#### Scenario: Page is responsive
- **Given** the user views the page on a mobile device (viewport < 768px)
- **When** the page loads
- **Then** the navbar collapses into a hamburger menu
- **And** the hero text is readable and not clipped
- **And** service cards stack vertically
- **And** the projects grid stacks into 1-2 columns
- **And** the FAQ/contact section stacks vertically
- **And** footer columns stack vertically

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

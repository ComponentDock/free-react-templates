# Template: Draftwell (Creative Agency)

## Purpose

Recreation of ColorLib **Design** (slug: `design`).
Preview: https://preview.colorlib.com/theme/design/
ColorLib page: https://colorlib.com/wp/template/design/

**Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

**Category:** Creative agency / design studio — a clean, modern template with a split hero featuring an image + floating quote overlay, stats counter row, 3-step "how it works" process with dashed arrow connectors, services section with checklist, testimonial carousel, 5-column blog grid, and a 3-column footer with social icons.

---

## Replication Research

### Source: Live Preview DOM (https://preview.colorlib.com/theme/design/)

Fetched 2026-09-11. Structure extracted from rendered HTML:

1. **Navbar** — White bg, centered nav. Logo text "Design" left. Nav links centered: Home, Dropdown (with sub-menus), Inner Page, Contact us. CTA button "Free Templates" right-aligned. Mobile: hamburger toggle + slide-down mobile menu.
2. **Hero** — Split layout inside container. Left column (col-lg-5): large heading "Create, Code, and Published." (50px, weight 700), description paragraph, "Get Started" primary button, two feature cards below (icon + "High Quality" heading + description). Right column (col-lg-6): hero image with decorative gray bg shape behind it, floating quote block (dark navy bg, white text) overlaid at bottom-left of the image with blockquote text + author name/title.
3. **Achievements** — 4-column stat cards: "99.55% Ratings 4.9 from user", "98,000+ Happy Customers", "99.99% Server Up time", "1M+ Love by our customers". Each: large number, heading, description. Light padding.
4. **How It Works** — Centered section with "How it works" subtitle + heading. 3 columns with numbered steps: "1. Create an account", "2. Create new orders", "3. Ship and track". Each step: icon in blue circle, heading, description. Dashed SVG arrow connectors between steps (hidden on mobile).
5. **Services** — Two-column layout on light gray bg (#f8f9fa). Left: "Services" subtitle, heading, description, checkmark list (3 items), "Get Started" button. Right: image with decorative dotted border element.
6. **Testimonial** — Owl Carousel slider. Each slide: circular author avatar, blockquote text, author name, author title. 3 testimonial slides.
7. **Blog** — 5-column grid of blog post cards on light gray bg. Each card: white bg, rounded corners (20px, bottom-left sharp), date label (uppercase, bold), title link, description. Hover: card lifts up with shadow.
8. **Footer** — White bg. Two main columns: Left = About paragraph + "Connect with us" social icons (Facebook, Twitter, Instagram, Dribbble, LinkedIn) in rounded squares. Right = "Navigations" heading + 3 columns of link lists. Copyright line at bottom with divider.

### Design Tokens Extracted from CSS

| Token                       | Value                                             | Notes                                                                                     |
| --------------------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Font family (body)          | `"Montserrat", sans-serif`                        | Clean geometric sans-serif, weights 300/400/700                                           |
| Primary brand color         | `#1264fa`                                         | Vivid blue — buttons, links, icon bg circles, hover states, nav CTA                       |
| Primary button hover        | `#1264fa`                                         | Slightly lighter blue on hover                                                             |
| Text color (headings)       | `#000839`                                         | Dark navy — h1, h2, h3, hero text, testimonial author name                                |
| Text color (body)           | `#000000`                                         | Footer links, body paragraphs                                                              |
| Text color (muted)          | `rgba(0, 8, 57, 0.5)`                            | Subtitles, feature descriptions, date labels, stat descriptions                           |
| Text color (white)          | `#ffffff`                                         | Hero quote block text                                                                      |
| Background (main)           | `#ffffff`                                         | Page background                                                                            |
| Background (light sections) | `#f8f9fa`                                         | Services section, blog section bg                                                          |
| Background (hero deco)      | `#dae1e7`                                         | Decorative shape behind hero image                                                         |
| Background (hero quote)     | `#000839`                                         | Dark navy floating quote block                                                             |
| Background (icon circles)   | `#1264fa`                                         | 40px blue circles behind feature/step icons                                                |
| Button radius               | `30px`                                            | Pill-shaped buttons                                                                        |
| Social icon bg              | `#f8f9fa`                                         | Light gray rounded squares, 10px border-radius                                             |
| Blog card radius            | `20px 20px 20px 0`                                | Rounded except bottom-left                                                                 |
| Blog card hover shadow      | `0 15px 30px 0 rgba(0,0,0,0.05)`                 | Subtle lift on hover                                                                       |
| Step connector arrows       | SVG dashed, stroke `#979797`                      | Curved dashed arrows between steps                                                         |
| Subtitle label              | `13px, weight 400`                                | Small uppercase-style label above headings                                                 |
| Section heading             | `30px, weight 700`                                | Mid-size section titles                                                                    |
| Hero heading                | `50px, weight 700`                                | Large display heading                                                                      |
| Feature icon                | 60px font-size (icon font)                        | Flaticon icons in blue circles                                                             |

### Screenshot Analysis

The preview was unreachable for browser rendering at time of analysis. Visual notes from the ColorLib screenshot (design-free-template.jpg):

- Clean white background with a professional, minimal aesthetic
- Hero: large heading on the left, image on the right with a dark navy quote overlay at the bottom-left of the image
- Blue (#1264fa) is the dominant accent color for CTAs and interactive elements
- Montserrat font gives a modern, geometric feel
- Sections alternate between white and light gray (#f8f9fa) backgrounds
- Blog cards have a subtle card-hover lift effect
- Footer is clean white with organized link columns and social icons in light rounded squares
- Overall tone: professional creative agency, clean and spacious

---

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://preview.colorlib.com/theme/design/` | HTTP 200 · 24,554 B · title `Design Free HTML Template by Colorlib` |
| stylesheet | `https://preview.colorlib.com/theme/design/css/bootstrap.min.css` | HTTP 200 · 25,251 B · sha256 `8671f5fefb60` |
| stylesheet | `https://preview.colorlib.com/theme/design/css/owl.carousel.min.css` | HTTP 200 · 2,888 B · sha256 `291f9774e2bf` |
| stylesheet | `https://preview.colorlib.com/theme/design/css/owl.theme.default.min.css` | HTTP 200 · 89 B · sha256 `2a5681786e0f` |
| stylesheet | `https://preview.colorlib.com/theme/design/css/jquery.fancybox.min.css` | HTTP 200 · 9,369 B · sha256 `86ea6c7543e6` |
| stylesheet | `https://preview.colorlib.com/theme/design/fonts/icomoon/style.css` | HTTP 200 · 79,820 B · sha256 `b696dfc59a40` |
| stylesheet | `https://preview.colorlib.com/theme/design/fonts/flaticon/font/flaticon.css` | HTTP 200 · 1,286 B · sha256 `25b71562d73d` |
| stylesheet | `https://preview.colorlib.com/theme/design/css/aos.css` | HTTP 200 · 7,330 B · sha256 `9b90cbe78e7d` |
| stylesheet | `https://preview.colorlib.com/theme/design/css/style.css` | HTTP 200 · 27,802 B · sha256 `4567f225ba66` |

**Live palette** (hex × occurrences in that sheet): `#ffffff`×42,
`#1264fa`×29, `#6c757d`×14, `#000000`×14, `#007bff`×11, `#f8f9fa`×9,
`#212529`×8, `#495057`×7, `#cccccc`×5, `#000839`×5.

**Token deltas** — the sheet, not the screenshot, decides:

- `#1264fa` is the fill (29 declarations — `a{color}`, `.btn-primary`, icon circles) and `#2671fa` the hover (2 declarations — `.btn.btn-primary:hover{background, border-color}`): both are live, so the brief's "Brand blue / Hover blue" pair is correct. Re-measured 2026-10-23 on `css/style.css` (27,802 B, sha256 `4567f225ba66…`); the earlier "`#2671fa` → `#1264fa`" delta was a mis-capture of a real hover rule.

**Low-chroma values the sheet actually uses** — `#6c757d`, `#f8f9fa`,
`#212529`, `#495057`; any sampled Tailwind grey above is an approximation of
these.

## Requirements

### Feature: Navbar

#### Scenario: Desktop navigation displays all links and CTA

- **GIVEN** the user is on a desktop viewport
- **WHEN** the page loads
- **THEN** the navbar displays the logo "Draftwell" on the left
- **AND** navigation links (Home, Services, About, Blog, Contact) are visible
- **AND** a "Get Started" CTA button is displayed on the right

#### Scenario: Mobile navigation shows hamburger menu

- **GIVEN** the user is on a mobile viewport
- **WHEN** the page loads
- **THEN** the navbar shows the logo and a hamburger toggle
- **AND** the nav links are hidden
- **WHEN** the user taps the hamburger
- **THEN** a slide-down mobile menu appears with all nav links

#### Scenario: Navigation links have correct hover state

- **GIVEN** the desktop navbar is visible
- **WHEN** the user hovers over a nav link
- **THEN** the link text changes to brand blue (#1264fa)

### Feature: Hero Section

#### Scenario: Hero displays heading, text, CTA, and image

- **GIVEN** the user views the hero section
- **THEN** a heading "Create, Code, and Published." is displayed at 50px
- **AND** a description paragraph is shown below the heading
- **AND** a "Get Started" primary button is displayed
- **AND** a hero image is shown on the right with a decorative gray background shape

#### Scenario: Hero quote overlay appears on image

- **GIVEN** the hero image is loaded
- **THEN** a floating dark navy (#000839) quote block is overlaid at the bottom-left of the image
- **AND** the quote block contains a blockquote and author name/title in white text

#### Scenario: Hero displays two feature cards below CTA

- **GIVEN** the hero section is visible
- **THEN** two feature cards are displayed below the CTA button
- **AND** each card has a blue circle icon, heading, and description text

### Feature: Achievements Section

#### Scenario: Stats display four metric cards

- **GIVEN** the achievements section is in view
- **THEN** four stat cards are displayed in a row
- **AND** each card shows a large number, heading, and description
- **AND** the numbers use bold weight at 40px font size

### Feature: How It Works Section

#### Scenario: Three-step process displays with connectors

- **GIVEN** the how-it-works section is in view
- **THEN** a "How it works" subtitle and heading are centered at the top
- **AND** three step cards are displayed: "1. Create an account", "2. Create new orders", "3. Ship and track"
- **AND** each step has a blue circle icon, heading, and description
- **AND** dashed SVG arrow connectors link the steps (hidden on mobile)

### Feature: Services Section

#### Scenario: Services section shows checklist and image

- **GIVEN** the services section is in view
- **THEN** the background is light gray (#f8f9fa)
- **AND** a "Services" subtitle, heading, and description are on the left
- **AND** a checkmark list with 3 items is displayed
- **AND** a "Get Started" primary button is below the list
- **AND** a service image with a dotted decorative element is on the right

### Feature: Testimonial Section

#### Scenario: Testimonials carousel displays author quotes

- **GIVEN** the testimonial section is in view
- **THEN** a carousel displays testimonial cards
- **AND** each card has a circular author avatar, blockquote, author name, and title
- **AND** carousel navigation arrows are available

### Feature: Blog Section

#### Scenario: Blog grid shows post cards with hover effect

- **GIVEN** the blog section is in view
- **THEN** the background is light gray (#f8f9fa)
- **AND** 5 blog post cards are displayed in a row
- **AND** each card has white bg, rounded corners (20px, bottom-left sharp), date, title, and description
- **WHEN** the user hovers over a card
- **THEN** the card lifts up 5px with a subtle shadow

### Feature: Footer

#### Scenario: Footer displays about, social, and navigation links

- **GIVEN** the footer is in view
- **THEN** an "About" paragraph and social icons (Facebook, Twitter, Instagram, Dribbble, LinkedIn) are on the left
- **AND** three columns of navigation links are on the right
- **AND** a copyright line is at the bottom with a top divider
- **AND** the footer links to Component Dock in the copyright

---

## Verification checklist

- [ ] Navbar: logo, nav links, CTA, mobile hamburger, hover states
- [ ] Hero: heading, description, CTA button, image, quote overlay, feature cards
- [ ] Achievements: 4 stat cards with correct layout and typography
- [ ] How It Works: 3 steps with icons, headings, descriptions, arrow connectors
- [ ] Services: two-column layout, checklist, image, dotted decoration
- [ ] Testimonials: carousel with avatar, quote, author info
- [ ] Blog: 5 cards with hover lift effect, correct border-radius
- [ ] Footer: about, social icons, navigation columns, copyright
- [ ] Responsive: all sections adapt to mobile/tablet viewports
- [ ] Design tokens: Montserrat font, #1264fa brand blue, #000839 dark navy, pill buttons (30px radius)
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Placeholder images via picsum.photos
- [ ] Icons from lucide-react (replacing flaticon/icomoon)

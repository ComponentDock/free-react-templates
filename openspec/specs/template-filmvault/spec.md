# Template: FilmVault (Photography Portfolio)

## Purpose

A photography portfolio template with hero, about, services, gallery, pricing and instagram feed sections. Recreation of ColorLib "Rettro" photography template.

- **Source:** https://colorlib.com/wp/template/rettro/
- **Preview:** https://preview.colorlib.com/theme/rettro/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **New name:** `filmvault` (does not reuse ColorLib source name)
- **Package:** `@free-react-templates/filmvault`
- **Deploy target:** `https://filmvault.free.componentdock.com`

## Design Tokens (from live preview CSS)

| Token | Value |
|---|---|
| Body font | `"Montserrat", sans-serif` |
| Heading font | `"Playfair Display", serif` |
| Heading color | `#071112` (near-black) |
| Body text color | `#10285d` (dark navy) |
| Link color | `#635c5c` |
| Body font size | `16px` |
| Button style | `.boxed-btn`: white bg, `#071112` text/border, 1px solid, letter-spacing 3px, uppercase, Playfair Display |
| Button hover | bg `#071112`, text `#fff` |
| Section padding | `40px` (section-padding40, section-padding2) |
| Testimonial bg | Dark image overlay (`section_bg03.png`) |

### Visual Description (from live preview)

Elegant, editorial photography portfolio with a dark, sophisticated aesthetic. Playfair Display serif headings give a luxurious feel. Montserrat body text is clean and modern. Hero is a full-width slider with large "Photography" headline and handwritten signature overlay. Gallery uses asymmetric 2-column layout with captions and hover overlay (+ icon). A full-width "About Me" section with background image and dark overlay. Services are 4 minimal icon cards. Testimonials sit on a dark textured background with quote marks. Pricing has 3 clean cards (Silver/Gold/Platinum) with camera icons. Instagram carousel at the bottom. Footer is centered with logo, nav, and social links.

## Sections (order from live preview)

1. **Header/Navbar** — Logo left, nav links (Home, About, Portfolio, Pricing, Blog dropdown, Contact), sticky, hamburger menu on mobile
2. **Hero Slider** — Full-width image slider with 3 slides, each showing "Photography" headline + handwritten signature + bottom caption (number + "Travel pro" + description), dot navigation with thumbnail images
3. **Gallery** — 2-column asymmetric grid (5/7, 6/6 split), 4 gallery items with background images, figcaptions (Travelshots, Experimental, Father's Day, Curious Cats), hover overlay with + icon, "More Portfolio" button
4. **About Me** — Full-width section with dark background image overlay, heading "I'm Ready to Exceed Expectations", description paragraph, "About Me" border button
5. **Services/Categories** — Centered heading "Life is about Creating Experiences", 4 icon cards in a row (col-lg-3), each with SVG icon + title
6. **Testimonials** — Dark textured background, centered, carousel of 2 testimonials, each with quote mark icon, quote text, founder image + name + role
7. **Pricing** — Centered heading "Choose a plan", 3 pricing cards (Silver $50, Gold $100 — "Most Popular" badge, Platinum $50), each with camera icon, plan name, price, feature list, "Get Started" border button
8. **Instagram Feed** — Full-width carousel of 5-6 Instagram photos with hover overlay showing Instagram icon
9. **Footer** — Centered: logo, nav links (same as header), social icons (Twitter, Facebook, Pinterest), copyright with Component Dock link

## Requirements

### Feature: FilmVault template behaviour

#### Scenario: Hero slider displays with navigation

- **GIVEN** I visit the FilmVault homepage
- **THEN** I see a full-width hero slider
- **AND** the headline "Photography" is displayed
- **AND** a handwritten signature image appears below the headline
- **AND** a bottom caption shows a slide number, title, and description
- **AND** dot navigation with thumbnail images is visible
- **AND** the slider transitions between 3 slides

#### Scenario: Gallery shows asymmetric image grid

- **GIVEN** I scroll to the Gallery section
- **THEN** I see a heading "With my camera, I capture daily life"
- **AND** 4 gallery items are displayed in a 2-column asymmetric layout
- **AND** each item has a background image with a caption below
- **AND** hovering over an item shows a dark overlay with a + icon
- **AND** a "More Portfolio" button is centered below

#### Scenario: About Me section displays with dark overlay

- **GIVEN** I scroll to the About Me section
- **THEN** I see a full-width section with a dark background image
- **AND** the heading reads "I'm Ready to Exceed Expectations"
- **AND** a description paragraph is displayed
- **AND** an "About Me" border button is present

#### Scenario: Services section shows 4 categories

- **GIVEN** I scroll to the Services section
- **THEN** I see the heading "Life is about Creating Experiences"
- **AND** 4 service cards are displayed in a single row
- **AND** each card has an icon and a title

#### Scenario: Testimonials carousel works

- **GIVEN** I scroll to the Testimonials section
- **THEN** I see a dark textured background
- **AND** 2 testimonial slides are available
- **AND** each slide has a quote mark icon, quote text, founder image, name, and role
- **AND** dot navigation allows switching between testimonials

#### Scenario: Pricing section shows 3 plans

- **GIVEN** I scroll to the Pricing section
- **THEN** I see the heading "Choose a plan"
- **AND** 3 pricing cards are displayed: Silver ($50), Gold ($100), Platinum ($50)
- **AND** the Gold card has a "Most Popular" badge
- **AND** each card has a camera icon, plan name, price, feature list, and "Get Started" button

#### Scenario: Instagram feed shows photo carousel

- **GIVEN** I scroll to the Instagram section
- **THEN** I see a horizontal carousel of 5-6 photos
- **AND** hovering over a photo shows an Instagram icon overlay

#### Scenario: Footer contains navigation and social links

- **GIVEN** I scroll to the Footer
- **THEN** I see a centered logo
- **AND** navigation links (Home, About, Portfolio, Pricing, Blog, Contact) are displayed
- **AND** social icons (Twitter, Facebook, Pinterest) are present
- **AND** a copyright line with "Made with ❤️ by Component Dock" is shown

#### Scenario: Navbar is sticky on scroll

- **GIVEN** I scroll down the page
- **THEN** the navbar remains fixed at the top of the viewport
- **AND** navigation links remain clickable

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/filmvault/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/filmvault/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification Checklist

- [ ] All 9 sections present in correct order
- [ ] Hero: slider with 3 slides, headline, signature, captions, dot nav
- [ ] Gallery: asymmetric grid, 4 items with captions, hover overlay, "More Portfolio" button
- [ ] About Me: full-width dark bg, heading, description, border button
- [ ] Services: 4 icon cards in a row
- [ ] Testimonials: dark bg, 2 slides with quotes, founder info, dot nav
- [ ] Pricing: 3 cards, correct prices, "Most Popular" badge on Gold, feature lists
- [ ] Instagram: horizontal carousel with hover overlay
- [ ] Footer: centered logo, nav, social icons, copyright with Component Dock link
- [ ] Fonts: Playfair Display for headings, Montserrat for body
- [ ] Button style: border buttons with letter-spacing, uppercase
- [ ] Navbar sticky on scroll
- [ ] Responsive layout (mobile, tablet, desktop)
- [ ] No ColorLib references in app code
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] Placeholder images use `picsum.photos/seed/filmvault-*`
- [ ] 100% test coverage
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Replication Notes

- **Preview source:** https://preview.colorlib.com/theme/rettro/ (fetched successfully)
- **CSS source:** https://preview.colorlib.com/theme/rettro/assets/css/style.css
- **Fonts:** Playfair Display (headings, serif) + Montserrat (body, sans-serif) — loaded via Google Fonts
- **Icons:** Original uses Themify Icons + Font Awesome; recreate with lucide-react
- **Slider:** Original uses Owl Carousel; replace with CSS-based slider or framer-motion
- **Gallery hover:** Original uses hover-direction-snake JS; replace with CSS hover transitions
- **Testimonial carousel:** Original uses Owl Carousel with dot navigation
- **Instagram carousel:** Original uses Owl Carousel
- **Animations:** WOW.js fade-in; use CSS animations
- **No assets copied:** all images replaced with picsum.photos placeholders

## Verification checklist

- [ ] Footer credits Component Dock with a link to https://www.componentdock.com/

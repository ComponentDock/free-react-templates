# Template: Zenbend (Yoga Studio)

## Purpose

Zenbend is a full-page yoga studio website in the free-react-templates monorepo.
It is an original React recreation of the ColorLib "Yogafun" free template
(source: https://colorlib.com/wp/template/yogafun/), built under a DIFFERENT
name (**Zenbend**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 yoga/wellness site with a dark full-bleed hero
(video background with play button overlay), feature icons with chakra/lotus
motifs, two-column about sections, a 6-card yoga classes grid, an owl-carousel
testimonial slider, a green (`#71774b`) stats/CTA banner, blog posts with
media layout, a newsletter subscription form, and a dark footer with contact
info and social links. Font: Oxygen (Google Fonts). Brand color: olive-sage
`#71774b`.

## Source mapping

- **ColorLib item:** "Yogafun" (TEMPLATES.md line 1241).
- **Source URL:** https://colorlib.com/wp/template/yogafun/
- **Preview URL — REACHABLE (verified 2026-09-15):**
  `https://preview.colorlib.com/theme/yogafun/` (HTTP 200, 26,646 bytes).
- **Preview CSS:** `css/style.css` (57,656 bytes) — Bootstrap 4 base +
  custom styles. Fonts: Oxygen (Google Fonts) via `fonts/` local copies.
  Icons: Font Awesome, Ionicons, Flaticon (chakra/lotus/yoga glyphs) —
  REPLACE with lucide-react, do not ship.

## Design tokens (extracted from live preview CSS)

| Token | Value | Source |
|---|---|---|
| Brand color (primary) | `#71774b` (olive-sage green) | `.bg-primary`, `.text-primary`, `.btn-primary` |
| Darker brand variant | `#535837` | Hover/active states |
| Lightest brand variant | `#5b603c` | Alternate hover |
| Navbar background | `#343a40` (Bootstrap dark) | `.navbar-dark.bg-dark` |
| Page background | `#fff` | `body` |
| Section light bg | `#f7f7f7` / `#f8f9fa` | `.bg-light`, `.feature-1` |
| Section border | `#dee2e6` | `.border-t` |
| Body text color | `#212529` | `body` |
| Muted text | `#6c757d` | `.text-muted` |
| Font family | `"Oxygen", sans-serif` | `--font-family-sans-serif` |
| Hero heading size | `50px`, `line-height: 1.2` | `.block-41-heading` |
| Hero text size | `20px` (md+) | `.block-41-text` |
| Button style | Rounded (`border-radius: 0.25rem`), 2px border, brand color bg, white text | `.btn.btn-primary` |
| Video play button | 60px white circle (`border-radius: 50%`), centered play icon | `.btn-play` |
| Testimonial card | White bg, 40px padding, max-width 700px, centered, 50% border-radius avatar | `.block-33` |
| Feature cards | `#f8f9fa` bg, 30px padding, min-height 50% | `.feature-1` |
| Footer | Dark bg (`#1d2124`), white text, social icon row | `.site-footer` |

## Section structure (order from live DOM + screenshot)

1. **Navbar** — Dark (`bg-dark`), brand "YOGAFUN" left, nav links right
   (Home, About, Classes [dropdown: Health, Mind, Meditation, Mind Balance,
   Yoga, Body Strength, Pilates], Blog, Contact), search icon.
2. **Hero** — Full-bleed video/image background, overlay, large white heading
   "Lose Yourself In Ambience & Atmosphere", circular white play button
   with "Watch Video" text below. Height: ~600px.
3. **Feature icons** — 4-column grid on light bg: Chakra icon, image,
   Chakra 2 icon, Yoga icon. Each with heading + lorem text. Flaticon
   chakra/lotus/yoga glyphs in brand color.
4. **About section** (bg-light) — Two columns: left has 2 feature cards
   (image + icon + heading + text + "Read More" link), right has heading
   "Do Yoga Today For Better Tomorrow" + text + "Read More" button.
5. **Yoga Classes** (border-top) — Heading "Yoga Classes", 6 cards in
   3×2 grid: Yoga Barre, Yoga Core, Yoga For Health, Yoga For Beginners,
   Yoga for All, Yoga Restore. Each card: background image, overlay text.
6. **Testimonials** (bg-light) — Heading "Testimonial", carousel of
   testimonial cards: avatar (circular), name, company, quote. Owl-carousel
   style (replace with simple auto-advancing carousel).
7. **Stats/CTA banner** (bg-primary `#71774b`) — 3-column: "Chat With Us",
   "Happy Customers", "Fast Support" — each with icon + heading + text.
8. **Blog** — Heading "Our Blog", 2 blog post cards in media layout:
   image left, title + date + excerpt + "Read More" right.
9. **Newsletter/Subscribe** (bg-light) — Heading "Subscribe", email input
   + "Subscribe" button, centered.
10. **Footer** — Dark bg, 3 columns: "About The YogaFun" text,
    Contact Info (address, phone, email), Quick Links (About, Terms,
    Disclaimers, Contact). Social icons row (Facebook, Twitter, Instagram,
    LinkedIn). Copyright line with Colorlib attribution → REPLACE with
    "Component Dock".

## Gherkin requirements

### Feature: Zenbend Yoga Studio Template

#### Scenario: Navbar renders with correct brand and navigation
  Given the page loads
  Then the navbar displays the brand "ZENBEND" on the left
  And the nav links "Home", "About", "Classes", "Blog", "Contact" are visible
  And the Classes link has a dropdown with yoga class categories
  And the navbar has a dark background

#### Scenario: Hero section displays with video overlay
  Given the page loads
  Then a full-bleed hero section is visible
  And the heading reads "Lose Yourself In Ambience & Atmosphere"
  And a circular white play button is centered below the heading
  And "Watch Video" text appears below the play button

#### Scenario: Feature icons section displays four items
  Given the page loads
  Then 4 feature icon cards are displayed in a grid
  And each card has an icon, a heading, and description text
  And the feature icons use the brand olive-sage color

#### Scenario: About section displays two-column layout
  Given the page loads
  Then the about section has a light background
  And a "Do Yoga Today For Better Tomorrow" heading is visible
  And "Read More" links/buttons are present

#### Scenario: Yoga Classes grid shows 6 class cards
  Given the page loads
  Then 6 yoga class cards are displayed in a 3×2 grid
  And each card shows a class name (Yoga Barre, Yoga Core, etc.)
  And each card has a background image with overlay

#### Scenario: Testimonial carousel displays quotes
  Given the page loads
  Then the testimonial section has a light background
  And testimonial cards show avatar, name, company, and quote
  And cards are navigable (carousel or scroll)

#### Scenario: Stats/CTA banner shows on brand color background
  Given the page loads
  Then a green (#71774b) banner section is visible
  And it contains 3 items: "Chat With Us", "Happy Customers", "Fast Support"
  And each item has an icon, heading, and description

#### Scenario: Blog section displays posts
  Given the page loads
  Then 2 blog post cards are displayed
  And each card has an image, title, date, excerpt, and "Read More" link

#### Scenario: Newsletter subscription form works
  Given the page loads
  Then a "Subscribe" heading is visible
  And an email input field is present
  And a "Subscribe" button is present

#### Scenario: Footer renders with contact info and links
  Given the page loads
  Then the footer has a dark background
  And contact info (address, phone, email) is displayed
  And quick links (About, Terms, Disclaimers, Contact) are present
  And social media icons (Facebook, Twitter, Instagram, LinkedIn) are shown
  And the footer links to "https://www.componentdock.com/"

#### Scenario: All sections use consistent brand tokens
  Given the page loads
  Then the primary color is olive-sage (#71774b)
  And the font family is "Oxygen" with sans-serif fallback
  And buttons have rounded corners with brand color background
  And section backgrounds alternate between white, light grey, and brand green

## Verification checklist

- [ ] Brand color `#71774b` applied consistently via Tailwind theme
- [ ] Font "O loaded via Google Fonts link in index.html
- [ ] Navbar: dark bg, brand name, dropdown for Classes, search icon
- [ ] Hero: full-bleed bg, heading, play button, "Watch Video" text
- [ ] Feature icons: 4-column grid, chakra/lotus/yoga icons (lucide)
- [ ] About: two-column layout, "Do Yoga Today" heading, Read More
- [ ] Yoga Classes: 6 cards, 3×2 grid, background images, overlay text
- [ ] Testimonials: carousel with avatars, names, quotes
- [ ] Stats/CTA: green banner, 3 items with icons
- [ ] Blog: 2 post cards, media layout, dates, excerpts
- [ ] Newsletter: email input + subscribe button
- [ ] Footer: dark bg, contact info, quick links, social icons, Component Dock link
- [ ] No ColorLib references in app code (provenance only in spec/PR)
- [ ] Placeholder images via `picsum.photos/seed/zenbend-<n>/`
- [ ] Icons from lucide-react (no Font Awesome, Ionicons, or Flaticon)
- [ ] Responsive: mobile hamburger nav, stacked columns on small screens
- [ ] 100% test coverage on all components
- [ ] `npm run verify:app zenbend` passes

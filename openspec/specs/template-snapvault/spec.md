# Template: SnapVault (Photography Portfolio)

## Purpose

Recreation of ColorLib **Fotograp** — a single-photographer portfolio template with hero cover, specialty cards, testimonial carousel, photo gallery grid, CTA banner, and dark footer.

- **Source slug:** `fotograp`
- **Preview URL:** https://preview.colorlib.com/theme/fotograp/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/fotograp-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript · Vitest + Testing Library

## Design tokens

Extracted from the live preview stylesheet (`css/style.css` at `preview.colorlib.com/theme/fotograp/`):

| Token | Value | Notes |
|---|---|---|
| Primary brand | `#7971ea` | Muted violet — used on `.text-primary`, links, accent elements |
| Body text | `#4d4d4d` | Default paragraph color |
| Headings | `#000` / `#25262a` | Black for section headings, near-black for card titles |
| Footer background | `#333333` | Dark charcoal |
| Footer text | `#737373` | Muted gray paragraphs |
| Footer links | `#999999` | Light gray links, white on hover |
| Section background (alt) | `#f4f5f9` | Light gray alternating sections |
| CTA button | `btn-danger` (Bootstrap red) | Rounded (`border-radius: .25rem`), `py-3 px-5` |
| Font family | `"Josefin Sans", sans-serif` | Loaded via Google Fonts (weights 300i, 400, 700) |
| Icon font | `icomoon` | Custom icon set for social/nav icons |
| Border radius (buttons) | `0.25rem` | Bootstrap default `.rounded` on CTA |
| Section padding | `5em 0` (desktop), `2.5em 0` (mobile) | `.site-section` |
| Hero overlay | `rgba(0,0,0,0.4)` | Semi-transparent dark overlay on cover image |
| Profile pic | `border-radius: 50%`, `max-width: 200px` | Circular headshot |
| Card shadow | `0 0 10px 0 rgba(0,0,0,0.1)` | `.site-block-half` subtle box-shadow |

## Section order (from preview DOM)

1. **Navbar** — Logo "fotograp." (text with primary dot), nav links (Home, Photography dropdown, Services, About, Contact), social icons (Facebook, Twitter, Instagram, YouTube)
2. **Hero/Cover** — Full-viewport background image with dark overlay, centered headline "I'm Ben Botsford a Professional Photographer Live in Oakland", circular profile pic below
3. **Specialties** — "My Specialties" heading with underline, 2-column layout of half-image/half-text cards: Nature Photography, Portrait Photography, Wedding Photography, Food & Drink Photography. Each card has a background image on one side and text on the other, with subtle box-shadow
4. **Testimonials** — Parallax background section with dark overlay, carousel of 3 testimonial cards (quote text + attribution name). Uses Owl Carousel
5. **Gallery** — "My Photography" heading, 3-column grid of 6 photo items with titles (Autumn Leaf, Sea Creatures, Enjoying Deep Sea, Beautiful Beach, Laughter is Science, Knot Tying). Each item has an image with hover overlay
6. **CTA Banner** — "Need a photographer?" heading with "Contact Me" button (red/rounded)
7. **Footer** — Dark charcoal background (#333333), 3-column layout: About blurb, Navigation links, Follow Me social links. Copyright bar at bottom

## Gherkin requirements

### Navbar
- Scenario: Logo displays brand name with accent dot
- Scenario: Navigation links are visible on desktop (xl+ breakpoint)
- Scenario: Mobile hamburger menu toggles mobile nav
- Scenario: Social media icon links are displayed in the header

### Hero
- Scenario: Hero section displays background image with dark overlay
- Scenario: Hero heading displays photographer introduction text
- Scenario: Circular profile image is displayed below heading

### Specialties
- Scenario: "My Specialties" section heading is displayed
- Scenario: Four specialty cards are rendered (Nature, Portrait, Wedding, Food & Drink)
- Scenario: Each card shows an image and descriptive text side-by-side
- Scenario: Cards have subtle box-shadow styling

### Testimonials
- Scenario: Testimonial section has parallax background with dark overlay
- Scenario: Three testimonial quotes are displayed in a carousel
- Scenario: Each testimonial shows quote text and author attribution

### Gallery
- Scenario: "My Photography" section heading is displayed
- Scenario: Six photo items are rendered in a 3-column grid
- Scenario: Each photo item shows an image with a title label
- Scenario: Photo items have hover interaction

### CTA Banner
- Scenario: "Need a photographer?" call-to-action is displayed
- Scenario: "Contact Me" button is rendered with rounded styling

### Footer
- Scenario: Footer has dark background (#333333)
- Scenario: Three-column layout with About, Navigation, and Follow Me sections
- Scenario: Footer links are displayed in navigation column
- Scenario: Social media links are displayed in follow column
- Scenario: Footer contains Component Dock attribution link

## Verification checklist

- [ ] Hero uses background image with rgba(0,0,0,0.4) overlay
- [ ] Primary brand color #7971ea used for links and accents
- [ ] Font family is "Josefin Sans" (loaded via Google Fonts)
- [ ] Specialty cards use 50/50 image-text split with box-shadow
- [ ] Testimonial section has parallax fixed background with overlay
- [ ] Gallery grid is 3 columns on desktop
- [ ] CTA button uses red/danger styling with rounded corners
- [ ] Footer background is #333333 with muted text colors
- [ ] Circular profile pic (border-radius: 50%, max-width: 200px)
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to https://www.componentdock.com/
- [ ] All images use picsum.photos placeholders
- [ ] 100% test coverage (lines, functions, branches, statements)

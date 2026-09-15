# Osiris — Design Notes & Implementation Outline

**Source:** ColorLib Zeta — https://preview.colorlib.com/theme/zeta/
**New name:** osiris
**Stack:** React 19 + Vite + Tailwind 4 + TypeScript

## Section implementation order

1. **Navbar** — Logo ("osiris.") + 5 nav links + active highlight (orange bg)
2. **Hero** — Full-width parallax bg, headline "Do you need a modern website?", "modern" italic, CTA button, dots + arrows
3. **SocialSidebar** — Fixed right, 6 icon links (Pinterest, Facebook, Twitter, Dribbble, Behance, LinkedIn)
4. **Features** — 3-col grid: icon + uppercase title + paragraph
5. **About** — Parallax bg, title "about our project", text + signature (left), 4 skill progress bars (right)
6. **Testimonials** — Carousel: user photo, name, title, quote mark, text; left/right nav
7. **Services** — Parallax bg, 3×2 grid (6 items), "discover" CTA at bottom
8. **Clients** — Title "our clients", 2-col text, logo carousel
9. **Contact** — Parallax bg, title "let's work together", text, "contact" CTA
10. **Footer** — Dark bg, copyright (left), social icons (right), ComponentDock link

## Fidelity notes

### Navbar
- Logo: bold lowercase first letter + bold wordmark + dot. Use Montserrat 700.
- Nav links: Open Sans, uppercase, letter-spacing 0.2em on hover/active
- Active nav: brand orange (#ff4200) background block behind the link text
- Mobile: full-screen overlay with centered nav + social icons at bottom

### Hero Slider
- Height: 840px desktop (reduced on mobile)
- Background: full-bleed image (use picsum.photos/seed/osiris-hero/1920/840)
- Headline: Montserrat 700, ~52px, white. Second line "a modern website?" with "modern" in italic
- CTA: 187×66px, #ff4200 bg, white uppercase text "DISCOVER", right arrow icon
- Geometric wireframe overlay: decorative SVG polygons (optional, for fidelity)
- Dots: numbered 01. 02. 03., bottom-left, white text
- Arrows: left/right chevrons, white, positioned at sides

### Social Sidebar
- Fixed position, right edge, vertically centered over hero
- White icons on transparent bg, ~30px size
- Icons: Pinterest, Facebook, Twitter, Dribbble, Behance, LinkedIn

### Features
- White background section
- 3 equal columns, centered content
- Icon: SVG from lucide-react (equivalent icons)
- Title: Montserrat 600, uppercase, letter-spacing 0.2em
- Description: Open Sans 400, gray (#6e6e6e)

### About
- Parallax background image (picsum.photos/seed/osiris-about/1920/1080)
- Decorative shape overlay (optional SVG)
- Title: "about our project" with decorative "z" accent (replace with "o" for Osiris)
- Left column: paragraph text + signature image (optional decorative)
- Right column: 4 skill bars with animated fill
  - Track: light pink (#fde0db)
  - Fill: brand orange (#ff4200)
  - Labels: management (85%), design (100%), projects (75%), inspiration (95%)
  - Animate on scroll into view

### Testimonials
- White background
- Carousel with 3+ testimonial cards
- Each card: circular photo (picsum.photos/seed/osiris-test-N/100/100), name (Montserrat 600), title (Open Sans 400), large quote mark ("), paragraph text
- Left/right arrow navigation
- Arrows: gray (#777) with hover transition

### Services
- Parallax background image (picsum.photos/seed/osiris-services/1920/1080)
- Decorative shape overlay
- 3×2 grid (6 items): icon + title + description
- Titles: same uppercase style as Features
- "discover" CTA button at bottom center (same style as hero)

### Clients
- White background
- Title: "our clients" with decorative accent
- 2 columns of descriptive text (Open Sans)
- Logo carousel below: 5 logos (use placeholder SVGs or picsum.photos)

### Contact
- Parallax background image (picsum.photos/seed/osiris-contact/1920/1080)
- Decorative shape overlay
- Title: "let's work together" with decorative accent
- Centered paragraph
- "contact" CTA button (same orange style)

### Footer
- Background: #111111
- Copyright text on left (Open Sans, gray #6e6e6e)
- Social icons on right (same 6 as sidebar)
- Must include ComponentDock attribution link

## Shared UI components to reuse

- `packages/ui` Button/ButtonLink (orange variant)
- `packages/ui` cn() utility
- Consider adding: Carousel component, Parallax wrapper, SkillBar, SocialIcons

## Key design tokens for @theme

```
brand-orange: #ff4200
dark-bg: #171717
footer-dark: #111111
skill-track: #fde0db
text-gray: #6e6e6e
text-dark: #111111
```

# GiveCraft — Prep Notes

## Source
- ColorLib slug: `seelife`
- Preview: https://preview.colorlib.com/theme/seelife/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/seelife-free-template.jpg

## Section order (1:1 fidelity)
1. Navbar (transparent overlay, logo left, nav links right)
2. Hero Banner (full-width nature image, white text, green+yellow CTAs)
3. Our Major Causes (3 image cards)
4. About Us (split: image left, text right)
5. Featured Causes (3 cards with raised/goal/donate)
6. Upcoming Events (2x2 grid, images + countdown timers)
7. Meet Our Volunteers (4 team cards with social icons)
8. CTA / Become a Volunteer (dark overlay, yellow button)
9. Our Latest Story (3 blog cards)
10. Newsletter Subscribe (green bar, email input + yellow button)
11. Footer (4 columns: Mission, Links, Gallery, Contact; copyright bar)

## Key design decisions
- Brand color: `#60bc0f` (bright green) — goes in `@theme` as primary
- Accent: `#fdbb00` (golden yellow) — secondary CTA
- Fonts: Poppins (headings), Roboto (body) — via Google Fonts link
- Buttons: sharp corners (radius 0), uppercase, small (12px), Roboto
- Section padding: 130px top/bottom
- Hero: full-width background image with text overlay
- Subscribe bar: green bg, overlaps footer area (negative margin on desktop)
- CTA area: dark overlay on background image, yellow rounded button
- Footer: dark bg, 4-column layout, light text

## Component breakdown
- `Navbar.tsx` — transparent fixed nav with logo + links
- `Hero.tsx` — full-width bg image, headline, two CTA buttons
- `Causes.tsx` — 3-column card grid with images
- `About.tsx` — 2-column split (image left, text right)
- `FeaturedCauses.tsx` — 3 cards with progress indicators
- `Events.tsx` — 2x2 event cards with countdown timer component
- `Team.tsx` — 4 volunteer cards with social icons
- `CtaBanner.tsx` — dark overlay CTA section
- `Story.tsx` — 3 blog cards
- `Subscribe.tsx` — newsletter form bar
- `Footer.tsx` — 4-column footer + copyright

## Placeholder images
- Hero: `https://picsum.photos/seed/givecraft-hero/1920/1080`
- Causes: `https://picsum.photos/seed/givecraft-c1/400/300`, `-c2`, `-c3`
- About: `https://picsum.photos/seed/givecraft-about/600/500`
- Featured: `https://picsum.photos/seed/givecraft-f1/400/300`, `-f2`, `-f3`
- Events: `https://picsum.photos/seed/givecraft-e1/400/300`, `-e2`, `-e3`, `-e4`
- Team: `https://picsum.photos/seed/givecraft-t1/300/400`, `-t2`, `-t3`, `-t4`
- Stories: `https://picsum.photos/seed/givecraft-s1/400/300`, `-s2`, `-s3`
- Gallery: `https://picsum.photos/seed/givecraft-g1/100/100`, through `-g6`
- CTA bg: `https://picsum.photos/seed/givecraft-cta/1920/600`

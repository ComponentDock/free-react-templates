# GivePulse — Design Notes & Task Outline

Source: ColorLib "Charilife" (https://colorlib.com/wp/template/charilife/)
New name: GivePulse
Preview: https://preview.colorlib.com/theme/charilife/

## Section order (1:1 with source)

1. Navbar — transparent overlay → sticky dark on scroll
2. Hero — full-height parallax, dark overlay, coral subtitle + white heading
3. About — two columns: text + video play button; brand logo carousel below
4. Features — grey bg, 3 icon cards (Give Donation, Give Inspiration, Become Bolunteer)
5. Popular Causes — grey bg, 3 fundraiser cards with progress bars + donate
6. Call-to-Action — parallax image, dark overlay, volunteer recruitment
7. Events — white bg, 4 event cards with date badges + countdown timers
8. Blog — grey bg, left text column + 2 blog cards on right
9. Instagram — 5-column image strip, hover overlay with icon
10. Footer — dark bg, 4-column widget grid + copyright bar

## Fidelity notes

- Hero: 900px desktop, 700px tablet, 480px mobile ≤425px. Content right-aligned (col-lg-7).
- About video play button: CSS-only (border triangle trick for play icon), pulse animation.
- Brand carousel: 4 grayscale logos, opacity 0.3 → 1.0 on hover.
- Feature icons: use lucide-react icons instead of Flaticon. White circle bg, coral icon.
- Cause cards: image zoom 1.2x on hover, shadow on hover. No border-radius on cards.
- Event countdown: hardcoded static display (no live JS countdown needed).
- Blog: left column has large h2 + paragraph; right has card grid.
- Instagram: 5 equal columns, dark overlay + icon on hover.
- Footer: 4 columns — About, Latest Posts (coral dot icons), Instagram (thumbnails), Newsletter (email input).
- Copyright bar at very bottom with Component Dock link.

## Task checklist

- [ ] Create app scaffold (copy from simplest existing app, rename)
- [ ] Set up index.html with Google Fonts (Lora + Roboto)
- [ ] Set up Tailwind theme tokens (brand coral, dark, fonts)
- [ ] Implement Navbar component
- [ ] Implement Hero section
- [ ] Implement About section (with video play button)
- [ ] Implement Features section (3 cards)
- [ ] Implement Popular Causes section (3 cards + progress)
- [ ] Implement CTA section (parallax)
- [ ] Implement Events section (4 cards + countdown)
- [ ] Implement Blog section (2 cards)
- [ ] Implement Instagram strip (5 images)
- [ ] Implement Footer (4-column + copyright)
- [ ] Write tests for all sections (100% coverage)
- [ ] Verify responsive behavior
- [ ] Verify accessibility (focus rings, aria labels, skip link)
- [ ] Run per-app gate: typecheck → lint → vitest → build

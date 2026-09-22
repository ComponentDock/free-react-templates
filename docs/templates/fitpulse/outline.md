# FitPulse — Design Notes & Implementation Outline

Source: ColorLib Fitnessclub
Preview: https://preview.colorlib.com/theme/fitnessclub/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/fitnessclub-free-template.jpg

## Section order (top to bottom)

1. Header/Navbar — sticky transparent, dark blue (#1f2b7b) CTA
2. Hero Slider — full-width 2-slide carousel, red (#f04e3c) button
3. About — split: image (left, video overlay) + text (right)
4. Services — dark bg, 3 icon cards, "Discover More" links
5. Testimonials — split: image (left) + carousel (right)
6. Gallery — masonry: 1 large + 4 small, arrow overlays
7. Team — 3 trainer cards, hover social overlay
8. Membership CTA — dark bg, centered heading + button
9. Schedule — tab bar (7 days) + class listings
10. Contact — split: info (left) + form (right)
11. Blog — 3 post cards with date badges
12. Footer — dark bg, 4 columns, Component Dock attribution

## Fidelity notes

- **Fonts**: Barlow (body/nav/buttons) + Teko (display/headings). Both loaded via Google Fonts <link> in index.html.
- **Colors**: Primary navy #1f2b7b, accent red #f04e3c, cyan #4cd3e3, dark bg #2c234d. Lavender page bg #f9f9ff.
- **Buttons**: Rectangular (0 border-radius), uppercase text, solid background.
- **Section backgrounds**: Alternating white, lavender (#f9f9ff), light purple (#f0e9ff), and dark (image-based section_bg01/02/03). Use solid dark colors or gradients as stand-ins for background images.
- **Layout**: Standard Bootstrap-like grid (12-col). Max-width container.
- **Slider**: Use CSS-only or lightweight carousel. No heavy JS dependencies.
- **Gallery**: CSS Grid or masonry layout. Use picsum.photos/seed/fitpulse-N/ for images.
- **Schedule tabs**: Simple tab UI with day labels + class list content per tab.
- **Video popup**: Skip YouTube embed; use a play button overlay that could link anywhere.
- **No parallax effects** needed — flat sections with bg images.

## Implementation checklist

- [ ] Create apps/fitpulse workspace (copy simplest existing app)
- [ ] Set package name: @free-react-templates/fitpulse
- [ ] Set public/CNAME: fitpulse.free.componentdock.com
- [ ] Set homepage in package.json
- [ ] Add Google Fonts (Barlow + Teko) to index.html
- [ ] Implement Header component
- [ ] Implement HeroSlider component
- [ ] Implement About component
- [ ] Implement Services component
- [ ] Implement Testimonials component
- [ ] Implement Gallery component
- [ ] Implement Team component
- [ ] Implement MembershipCTA component
- [ ] Implement Schedule component
- [ ] Implement Contact component
- [ ] Implement Blog component
- [ ] Implement Footer (with Component Dock link)
- [ ] Compose in App.tsx in correct section order
- [ ] Write tests for every component (100% coverage)
- [ ] Run verify-app.sh fitpulse
- [ ] Commit, push, merge PR

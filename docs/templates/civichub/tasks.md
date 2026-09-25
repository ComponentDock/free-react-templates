# CivicHub — Implementation Tasks

Recreation of ColorLib "Civic" (https://colorlib.com/wp/template/civic/)

## Design Notes

- **Color palette:** Primary dark #40424a, light bg #f2f7f8, social bg #f9f9f9, body #505259, headings #40424a, footer #40424a
- **Typography:** Josefin Sans (weights 400, 600, 700 + italic) via Google Fonts
- **Buttons:** Pill shape (border-radius 60px), white bg, dark text, uppercase
- **Layout:** Bootstrap-style container-fluid/row/col recreated with Tailwind grid
- **Images:** All placeholder via picsum.photos with deterministic seeds (e.g. `civichub-hero`, `civichub-port-1`)
- **Icons:** Social icons via lucide-react (Pinterest→Link, LinkedIn, Instagram, Facebook, Twitter→X)
- **Progress circles:** CSS-only animated circular progress (no library needed)

## Sections (priority order)

1. [ ] Scaffold (package.json, vite.config, vitest.config, index.html, index.css, main.tsx, App.tsx)
2. [ ] Header — logo + tagline + two pill CTA buttons
3. [ ] Hero — split layout: left info + right portrait photo
4. [ ] SocialLinks — 5 social icon circles in horizontal bar
5. [ ] WorkExperience — timeline with 2 job entries
6. [ ] Education — timeline with 2 entries, background image overlay
7. [ ] References — carousel with 3 review cards and quotation marks
8. [ ] Portfolio — 4-column grid with image, title, category
9. [ ] ExtraSkills — 2 circular progress + 2 stat boxes
10. [ ] ContactForm — 4-field form + send button
11. [ ] Footer — dark bg, copyright with ComponentDock link
12. [ ] Tests — 100% coverage
13. [ ] Verification — verify-app.sh passes

## Fidelity Notes

- The original uses Bootstrap grid (col-xl-10 offset-xl-1, col-lg-6, etc.) — recreate with Tailwind grid/flex
- Hero image is full-height on right column — use `object-cover` with aspect-ratio
- Education section has a background image with overlay — use `bg-cover bg-center` with pseudo-element overlay
- References section uses Owl Carousel — replace with simple CSS-based carousel or static cards
- Portfolio items use `data-setbg` JS pattern — replace with standard `<img>` tags
- Social section has a bottom border (1px solid #cbcbcb) spanning the container
- Extra Skills has 2 circular progress indicators — use CSS conic-gradient or SVG circles
- Footer is minimal: just copyright text centered on dark background
- All sections use `container-fluid` (full-width) — recreate with `w-full` + responsive padding

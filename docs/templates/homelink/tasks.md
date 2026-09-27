# Homelink — Implementation Tasks

Recreation of ColorLib "Homespace" (https://preview.colorlib.com/theme/homespace/).
App folder: `apps/homelink`. Package: `@free-react-templates/homelink`.

## Section order (1:1 fidelity with source)

1. Top bar — thin white bar, phone + email left, social icons right
2. Navbar — sticky, "Homelink" brand, 7 nav links, hamburger on mobile
3. Hero slider — owl-carousel-style property slides, overlay text, CTA
4. Features — 3 icon cards on light `#edf0f5` background
5. New Properties — 6 property cards, 3-col grid, price/address/rooms
6. Our Services — 4 service cards on light background, "Learn More" links
7. Our Blog — 3 blog post cards
8. Our Agents — 3 agent cards, circular avatars, dark background
9. Footer — 3 columns (About, Navigations, Follow Us), Component Dock link

## Design tokens (from css/style.css)

| Token          | Value                            | Usage                          |
|----------------|----------------------------------|--------------------------------|
| accent         | `#f89d13` (orange)              | Buttons, highlights, links     |
| footer-bg      | `#25262a` (dark)                | Footer background              |
| section-light  | `#edf0f5`                       | Features, services backgrounds |
| body-bg        | `#f8f9fa`                       | Page background                |
| text-dark      | `#333333`                       | Headings                       |
| text-gray      | `#777`, `#737373`               | Body text                      |
| border         | `#e6e6e6`, `#cccccc`            | Dividers, card borders         |
| font-body      | Nunito Sans                      | All body text                  |
| font-accent    | Roboto Mono                      | Monospace accent (optional)    |
| border-radius  | 0% (sharp) / 50% (avatars)      | Cards = sharp; avatars = circle|

## Implementation notes

- Copy simplest existing app (e.g. `apps/abode` or `apps/homely`) as scaffold
- Rename package to `@free-react-templates/homelink`
- Set `public/CNAME` to `homelink.free.componentdock.com`
- Set `"homepage"` to `https://homelink.free.componentdock.com`
- Hero slider: use CSS transitions or a lightweight carousel (no external deps)
- Property cards: 3-column CSS grid, each card with image + overlay info
- Agent avatars: circular images with 50% border-radius
- Footer: dark bg, 3 columns, Component Dock attribution
- Placeholder images: `https://picsum.photos/seed/homelink-<n>/<w>/<h>`
- Icons: lucide-react (Home, MapPin, Bed, Bath, Car, Mail, Phone, etc.)
- No ColorLib references in app code

# LineCraft — Tasks & Design Notes

## Source

- **ColorLib slug:** design
- **Preview URL:** https://preview.colorlib.com/theme/design/
- **Screenshot:** design-free-template.jpg

## Section order (implementation sequence)

1. **Navbar** — "LineCraft" logo + centered nav (Home, About, Contact) + dark-mode toggle
2. **Hero** — "Create, Code, and Published." + paragraph + "Get Started" button + 2 feature cards
3. **Achievements** — 4-column stats bar (Ratings, Happy Customers, Server Up time, Love)
4. **How it works** — 3-step process (Create account, Create orders, Ship and track)
5. **Testimonials** — carousel of testimonial cards with author photos
6. **Blog** — "Latest Blog Posts" heading + 5 post entries (date, title, excerpt)
7. **Footer** — About blurb, Social icons, Navigation links + Component Dock link

## Design token reference (from css/style.css)

| Token              | Value                                   |
|--------------------|-----------------------------------------|
| Primary color      | #1264fa (blue — buttons, links)         |
| Hover color        | #2671fa (lighter blue)                  |
| Heading text       | #303030                                 |
| Body text          | #7b7b7b                                 |
| Light bg           | #f8f9fa / #f9f9f9                       |
| Border color       | #e9ecef                                 |
| Font               | Montserrat (300/400/700) via Google Fonts |
| Button style       | .btn-primary: bg #1264fa, standard radius |
| Hero bg            | white (no overlay)                      |
| Footer bg          | dark (#303030)                          |

## Fidelity notes

- Navbar is centered with logo on left, nav centered, CTA right — use
  centered layout with flex.
- Hero is clean white bg with large headline, paragraph, and blue button.
  Two feature cards below with flaticon-style icons (use lucide-react).
- Achievements: 4-column stat bar with large bold numbers, subtitle, and
  description. Light background.
- How it works: 3 steps with icons, titles, and descriptions. The original
  uses curved SVG arrows between steps — simplify to a horizontal connector
  or numbered dots.
- Testimonials: centered card layout with author photo, blockquote, name,
  and role. Implement as a simple carousel or static cards.
- Blog: text-only entries (date, title link, excerpt) in a responsive grid.
  No images on blog cards.
- Footer: dark bg, two-column layout (About + Social left, Navigations right).
  Social icons: Facebook, Twitter, Instagram, Dribbble, LinkedIn.
  Replace ColorLib attribution with ComponentDock link.
- Font: Montserrat is a geometric sans-serif — clean and modern.
- Primary blue (#1264fa) is distinctive — use it consistently.

## Components to reuse from packages/ui

- Button / ButtonLink (for CTA buttons)
- Card (for feature cards, blog entries)
- Badge (for stat labels)
- cn (class merging utility)

## Images

All placeholder images: `https://picsum.photos/seed/linecraft-<n>/<w>/<h>`

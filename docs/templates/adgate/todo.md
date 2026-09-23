# AdGate — Tasks & Design Notes

## Template Info

- **New name:** AdGate
- **ColorLib source:** Classy Ads (https://colorlib.com/wp/template/classy-ads/)
- **Preview URL:** https://preview.colorlib.com/theme/classy-ads/ (404 — used screenshot + page description)
- **Category:** Classified Ads / Listing Marketplace

## Design Tokens (from screenshot analysis)

| Token | Value | Usage |
| --- | --- | --- |
| Brand / Primary | #20c997 (teal/mint) | Buttons, search CTA, category icons, accent |
| Brand dark (hover) | #1aa87d | Button hover state |
| Hero overlay | rgba(0,0,0,0.5) | Dark semi-transparent overlay on hero image |
| Body text | #333333 | Main paragraph text |
| Heading text | #212121 | Headings, navbar logo |
| Muted text | #777777 | Subtitles, secondary text |
| Navbar background | #ffffff | Top navigation bar |
| Category card bg | #f8f9fa (light gray) | Category icon section background |
| Page background | #ffffff | Overall page background |
| Font family | Poppins (Google Fonts) | Body and headings |
| Button radius | 4px | Rounded buttons |
| Search bar bg | #ffffff | Search bar container |

## Sections (in order)

1. **Navbar** — White sticky top, logo "AdGate", nav links (Home, Ads, About dropdown, Blog, Contact), Log In, Register, teal "Post an Ad" CTA. Hamburger menu on mobile.
2. **Hero** — Full-width background image (workspace/laptop scene) with dark semi-transparent overlay. Centered white headline "Largest Classifieds In The World", subtitle "You can buy, sell anything you want."
3. **Search Bar** — Horizontal white bar at hero bottom: keyword input ("What are you looking for?"), location input with pin icon, category dropdown ("All Categories"), teal "Search" button.
4. **Categories** — 6 cards in horizontal row on light gray bg: Real Estate (3,921), Books & Magazines (398), Furniture (1,229), Electronics (32,891), Cars & Vehicles (29,221), Other (219). Teal line icons.
5. **Featured Ads** — Grid of ad listing cards with thumbnail images, titles, descriptions. Heading "Featured Ads".
6. **Trending Items** — Trending classified listings section with cards.
7. **Testimonials** — User testimonials with quotes, names, optional avatars.
8. **Newsletter** — Dark or light bg section with email input and "Subscribe" button.
9. **Footer** — Multi-column: About, Quick Links, Contact Info, social icons. Copyright "Made with Component Dock" → componentdock.com.

## Implementation Notes

- All placeholder images use picsum.photos with seeded URLs (e.g. `picsum.photos/seed/adgate-N/w/h`)
- Social icons use lucide-react
- Hero background: use a workspace/laptop themed picsum image
- Category icons: use lucide-react (Home, BookOpen, Sofa, Monitor, Car, Package)
- Search bar: positioned absolutely at bottom of hero, overlapping hero boundary
- Google Fonts (Poppins) via `<link>` in index.html
- No ColorLib references in any app files
- Footer links to https://www.componentdock.com/
- Base implementation on `apps/aurora` or similar multi-section landing app
- Reuse `packages/ui` (Button, ButtonLink, Card, cn) — do NOT duplicate components

## Tasks

- [ ] Create branch `feat/template-adgate` from latest origin/main.
- [ ] Mark Classy Ads `[~]` in TEMPLATES.md on the branch (claimed as AdGate).
- [ ] Refine spec with any additional replication findings.
- [ ] Scaffold `apps/adgate` (copy simplest multi-section app, rename package to `@free-react-templates/adgate`).
- [ ] Write tests first (TDD, red phase): Navbar, Hero, Search, Categories, Featured Ads, Trending, Testimonials, Newsletter, Footer + dark mode.
- [ ] Implement components using `packages/ui` + `cn()`, picsum-seeded images, lucide icons, Google Fonts (Poppins).
- [ ] Run verification gate: typecheck → lint → test:coverage (100%) → build → knip → fallow. Also `npm run spec:validate`.
- [ ] Self-review (docs/self-review.md), update TEMPLATES.md docs, commit conventionally, push branch, open PR to main.

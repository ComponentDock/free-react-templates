# Celestial — Design Notes & Implementation Outline

## Source Mapping

- **ColorLib source:** Stellar (slug: `stellar`)
- **Preview:** https://preview.colorlib.com/theme/stellar/
- **New name:** Celestial
- **Deploy target:** https://celestial.free.componentdock.com

## Section Order (top → bottom)

1. Navbar (transparent, sticky on scroll)
2. Hero (full-viewport parallax)
3. About (light bg, 4-column process grid)
4. Services (dark bg parallax, 3-column service grid)
5. Works/Portfolio (light bg, 4-column portfolio grid)
6. Testimonials (light grey bg, slider)
7. Clients (light bg, logo grid)
8. Stats (dark bg parallax, 4-column counters)
9. Contact (light bg, 3-column layout)
10. Footer

## Component Breakdown

| Component | File | Notes |
|-----------|------|-------|
| Navbar | `Navbar.tsx` | Transparent over hero, fixed position, shrinks on scroll. Logo left, nav links right, hamburger on mobile |
| Hero | `Hero.tsx` | Full viewport height, parallax background (picsum), dark overlay, centered headline + 2 CTA buttons + scroll indicator + social links |
| About | `About.tsx` | Numbered subhead "01.", heading, intro paragraphs, 4-column process grid (Planning, Branding, Implementation, Documentation) |
| Services | `Services.tsx` | Dark parallax bg, numbered subhead "02.", heading, 6 services in 3-col grid, white text |
| Works | `Works.tsx` | Numbered subhead "03.", heading, 8 portfolio items in 4-col grid with hover overlays |
| Testimonials | `Testimonials.tsx` | Heading, slider with 3 items, prev/next arrows, auto-rotate |
| Clients | `Clients.tsx` | Numbered subhead "04.", heading, greyscale logo grid |
| Stats | `Stats.tsx` | Dark parallax bg, 4 counters with animated numbers |
| Contact | `Contact.tsx` | Numbered subhead "05.", heading, 3-col: address / subscribe+social / contact info+CTA |
| Footer | `Footer.tsx` | Copyright line with Component Dock link |

## Design Token Notes

- Brand primary: `#F26522` (orange) — buttons, subhead underlines, links
- Dark bg: `#151515` — services/stats sections
- Body text: `#2a2a2b` on light sections, `#FFFFFF` on dark sections
- Light bg sections: `#FFFFFF` (about, works, clients, contact)
- Testimonials bg: `#F1F1F1`
- Teal accent: `#035D5C` (contact links)
- Heading font: Montserrat (Google Fonts), 600 weight
- Body font: Merriweather (Google Fonts)
- Display headings: Montserrat 600, 4.6rem
- Subheads: Montserrat 600, uppercase, 1.6rem, with "01." prefix + orange underline
- Buttons: Montserrat, `#F26522` bg, white text, `border-radius: 3px`, uppercase, hover → `#b8b8b8`
- Parallax overlays: hero `rgba(0,0,0,0.4)`, services `rgba(0,0,0,0.5)`, stats `rgba(0,0,0,0.45)`

## Fidelity Notes

### Must Match 1:1
- Section order and count (10 sections)
- Numbered subheads ("01.", "02.", etc.) with orange underline
- 4-column process grid in About (exact same 4 steps)
- 6 services in 3-column grid (exact same 6 service names)
- 8 portfolio items in 4-column grid
- 3 testimonials with author/role in slider
- 4 stats counters in row
- 3-column contact layout
- Transparent navbar that becomes sticky

### Placeholders / Substitutions
- Hero bg image: `https://picsum.photos/seed/celestial-hero/3000/2000` (parallax)
- Services bg: `https://picsum.photos/seed/celestial-services/3000/2000` (parallax)
- Stats bg: `https://picsum.photos/seed/celestial-stats/3000/2000` (parallax)
- Portfolio images: `https://picsum.photos/seed/celestial-work-<n>/800/600` (n=1-8)
- Client logos: use text placeholders or simple SVG icons
- Process icons: lucide-react icons (Lightbulb, Palette, Code, FileText or similar)
- Service icons: lucide-react icons (Fingerprint, PenTool, Globe, Lightbulb, Layout, Smartphone)

### Parallax Implementation
Use CSS `background-attachment: fixed` or a lightweight JS scroll handler for
the hero, services, and stats sections. The original uses `data-parallax="scroll"`
with `data-image-src` attributes (likely Stellar.js or similar).

### Testimonials Slider
Implement with a simple state-based slider (no external dependency needed).
3 items, prev/next arrows, optional auto-rotate every 5s.

### Stats Counters
Animate numbers from 0 to target on scroll-into-view using IntersectionObserver.
Counters: 213, 179, 35, 2319.

## Implementation Tasks

1. [ ] Create `apps/celestial/` workspace (copy boilerplate, rename package)
2. [ ] Set up `index.css` with Tailwind + theme tokens (brand orange, fonts)
3. [ ] Build Navbar component (transparent, sticky, responsive)
4. [ ] Build Hero component (parallax bg, headline, CTAs, scroll indicator)
5. [ ] Build About component (subhead, heading, paragraphs, process grid)
6. [ ] Build Services component (dark bg, service grid)
7. [ ] Build Works component (portfolio grid with hover overlays)
8. [ ] Build Testimonials component (slider with 3 items)
9. [ ] Build Clients component (logo grid)
10. [ ] Build Stats component (animated counters)
11. [ ] Build Contact component (3-column layout, form)
12. [ ] Build Footer component (copyright + Component Dock link)
13. [ ] Compose all sections in App.tsx
14. [ ] Add responsive breakpoints (mobile/tablet/desktop)
15. [ ] Write tests for all components (100% coverage)
16. [ ] Run `scripts/verify-app.sh celestial` to validate

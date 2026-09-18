# Repertoire — Design Notes

Recreation of ColorLib [Work](https://colorlib.com/wp/template/work/) — portfolio/personal branding landing page.

## Original template analysis

**Source:** https://preview.colorlib.com/theme/work/
**Category:** Portfolio / Personal Branding
**Layout:** Sticky left sidebar + scrollable main content

### Sections in order

1. **Sidebar** — Fixed left, logo, nav links (Home/Work/About/Services/Blog/Contact), social icons footer
2. **Hero** — Full-height image slider, 3 slides, dark overlay, heading + CTA button
3. **About** — Two-column: overlapping images (left) + heading + description + accordion (right)
4. **Services** — 2-column grid of 6 service items with icons
5. **Portfolio** — 2-column grid of 6 project cards with background images + overlays
6. **Blog** — 3-column grid of 3 blog posts with images + metadata
7. **CTA** — Full-width "Get in Touch!" with description + button
8. **Footer** — Social icons (in sidebar) + Component Dock attribution

### Design tokens

- **Font:** Quicksand (300/400/500/700)
- **Primary:** #6366f1 (indigo-500)
- **Background:** white
- **Text:** #333333
- **Hero overlay:** rgba(0,0,0,0.5)
- **CTA bg:** #f8f9fa

### Replication approach

- Sidebar: fixed left on desktop, collapsible hamburger on mobile
- Hero: auto-rotating carousel with CSS transitions (no external slider lib)
- About accordion: controlled state, max-height transitions
- Portfolio: CSS grid 2-col, hover overlay with transform
- Blog: CSS grid 3-col on desktop, 1-col on mobile
- Images: picsum.photos seeded placeholders (no external asset downloads)
- Icons: lucide-react for utility, inline SVGs for social/brand icons

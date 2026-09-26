# ShotLab — Implementation Todo

Source: ColorLib Mostudio — https://preview.colorlib.com/theme/mostudio/
New name: ShotLab (apps/shotlab)

## Structure Order (section-by-section)

1. **Sidebar** — Fixed left sidebar with logo bg image, nav links (Home/Gallery/About/Pricing/Contact), newsletter form, copyright. Hamburger on mobile.
2. **Portfolio Gallery** — 8+ alternating rows: 50/50 image + text. Category label (uppercase, wide spacing), title (Abril Fatface), description, "View Portfolio" CTA. Zoom icon overlay on hover. Alternating left/right layout.
3. **About** — Full-width dark bg, heading with golden span ("I'm [Name] the CEO of a ShotLab Photography"), 3 circular team member photos with name + role.
4. **Pricing** — 4-column grid on dark image overlay. Plan title, price (large bold white), feature list, CTA button.
5. **Contact** — Form with transparent inputs (bottom-border only), name/email/subject/message fields, "Send Message" button.
6. **Footer** — Copyright with year, Component Dock link.

## Design Tokens

- Brand: `#f3c623` (golden yellow)
- Bg: `#000000` (black)
- Text: `#ffffff` (white)
- Muted text: `rgba(255,255,255,0.6)`
- Category label: `rgba(255,255,255,0.2)`
- Heading font: Abril Fatface (Google Fonts)
- Body font: Poppins (Google Fonts)
- Button radius: `30px` (pill shape)
- Button style: outline golden border, transparent bg → solid golden bg on hover

## Fidelity Notes

- The original is a multi-page Bootstrap template (index.html, about.html, pricing.html, contact.html, gallery.html). Recreate as a SINGLE-PAGE React app with scroll-to sections.
- Sidebar is fixed left on desktop, off-screen with hamburger on mobile (<992px).
- Portfolio items use `portfolio-wrap` class: alternating `col-md-6 img` + `col-md-6 text` rows. Odd rows: image left, text right. Even rows: image right (order-md-last), text left.
- Text areas have black background with white text. The `.absolute` description has a golden left-border accent line (2px wide, 40px tall).
- About section uses `ftco-about` with dark overlay. Team members are in `.team-wrap` with circular photos (90px diameter).
- Pricing cards are in `.pricing` class on dark image overlay (opacity 0.3).
- Contact form: `.form-control` with transparent bg, bottom-border only (`border-bottom: 1px solid rgba(255,255,255,0.1)`), white placeholder text.
- All images → `https://picsum.photos/seed/shotlab-<n>/<w>/<h>`
- No ColorLib references in app code. Footer → Component Dock link.

## Component Map

| Section | Component | Notes |
|---------|-----------|-------|
| Sidebar | `Sidebar.tsx` | Logo, nav, newsletter, copyright. Fixed left desktop, slide-in mobile |
| Portfolio | `PortfolioGallery.tsx` | 8 alternating rows, each a `PortfolioItem.tsx` |
| About | `About.tsx` | Heading + team grid (3 members) |
| Pricing | `Pricing.tsx` | 4 pricing cards on dark overlay |
| Contact | `Contact.tsx` | Form with styled inputs |
| Footer | `Footer.tsx` | Copyright + Component Dock |

# VitaClinic (ColorLib Healthcare) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-vitaclinic`. Recreation name: **VitaClinic** (NEW name —
> the ColorLib source keeps its name "Healthcare").

## Source mapping

- **ColorLib item:** "Healthcare" (TEMPLATES.md line 2237; section Healthcare category).
- **Source URL:** https://colorlib.com/wp/template/healthcare/
- **Preview URL — REACHABLE (verified 2026-09-24):** `https://preview.colorlib.com/theme/healthcare/`
  (HTTP 200, 37,632 bytes).
- **Preview CSS:** `css/style.css` (46,400 bytes — main styles), `css/bootstrap.css` (Bootstrap grid/utilities), `css/animate.css`, `css/flexslider.css`, `css/owl.carousel.min.css`, `css/magnific-popup.css`. Icon font: `flaticon` (REPLACE with lucide-react). Fonts: Google Fonts Poppins.

## Section structure (order from preview DOM)

1. **Top bar** — dark strip with phone number + location address
2. **Navbar** — logo "Healthcare" → "VitaClinic", nav: Home, Doctors (dropdown), Services, Departments (dropdown), Blog, Contact
3. **Hero slider** — 4 slides, full-width background images, overlay, centered text (h1 + h2 + CTA button "Make an Appointment")
4. **Services bar** — 3 icon+label items + heading "Comprehensive services for our patients" (white bg)
5. **About** — split layout: image right, text left with heading "About VitaClinic" + accordion FAQ (3 panels)
6. **Choose/Features** — split layout: background image left, 4 feature cards right (Qualified Doctors, Free Consultation, Online Enrollment, Modern Facilities)
7. **Doctors** — heading "Well Experienced Doctors", 3 circular photo cards
8. **Testimonials** — colored bg section, heading "Our patients and their opinions"
9. **Blog** — heading "Recent blog", 2–3 blog entry cards with image + title + date
10. **Footer** — dark bg (#282e34): Head Office, Departments, Useful Links, Support columns + appointment form (name/email/message/submit)
11. **Scroll-to-top** — floating button

## Design tokens (captured from CSS)

- Primary blue: `#3c97e8` (buttons, nav active, gradient end)
- Accent green: `#9bdf46` (feature highlights)
- Gradient: `linear-gradient(90deg, #43DDE6, #3c97e8)`
- Font: Poppins (400, 500, 600, 700)
- Button border-radius: 30px (pill shape)
- Doctor images: 50% border-radius (circular)
- Footer bg: #282e34
- Light sections: #f9f9f9

## Implementation notes

- Replace Flaticon icons with lucide-react equivalents
- Hero slider: implement as a CSS-only or lightweight JS slider (no heavy deps)
- Accordion FAQ: use details/summary or custom state management
- Appointment form: static HTML form (no backend)
- Placeholder images: use `picsum.photos/seed/vitaclinic-<n>/<w>/<h>`
- Google Fonts: add Poppins via `<link>` in index.html
- Footer MUST link to `https://www.componentdock.com/`
- No ColorLib references in any app code

## Tasks

- [ ] Copy starter app template, rename to vitaclinic
- [ ] Set up index.css with Tailwind theme tokens (primary blue, accent green, Poppins font)
- [ ] Build TopBar component
- [ ] Build Navbar component with dropdown menus
- [ ] Build HeroSlider component with 4 slides
- [ ] Build ServicesBar component (3 items + heading)
- [ ] Build About component with accordion FAQ
- [ ] Build Features component (split layout + 4 cards)
- [ ] Build Doctors component (3 circular cards)
- [ ] Build Testimonials component
- [ ] Build Blog component (2–3 entries)
- [ ] Build Footer component (4 columns + form)
- [ ] Build ScrollToTop component
- [ ] Compose all sections in App.tsx
- [ ] Write tests for all components (100% coverage)
- [ ] Add vite.config.ts with injectUiSource()
- [ ] Run npm install at repo root
- [ ] Verify: typecheck + lint + tests + build

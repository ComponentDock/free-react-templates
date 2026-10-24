# Precedent — Law Firm Landing Page

## Task Outline

1. **Scaffold** — Copy Docket app structure, rename to `precedent`, update package.json
2. **TopBar** — Dark bar with phone, email, search icon
3. **Navbar** — Logo + links, sticky on scroll, mobile hamburger
4. **Hero** — Full-width image, overlay, heading, two CTA buttons
5. **FeatureStrip** — Dark 4-column feature grid with icons
6. **TrustSection** — Two-column: Lady Justice image + features grid
7. **PracticeAreas** — Section heading + 4 practice area cards
8. **Attorneys** — Team grid with photos, names, titles, social links
9. **Testimonials** — Client testimonials slider
10. **CtaBanner** — Dark CTA section
11. **ContactForm** — Consultation form with validation
12. **Footer** — Dark 3-column footer with ComponentDock link
13. **Tests** — 100% coverage for all components
14. **Verify** — `scripts/verify-app.sh precedent`

## Design Notes
> **Reference identity (measured 2026-10-24).** The demo directory
> `https://preview.colorlib.com/theme/lawfirm/` serves the **v3.0.2 rebuild** — this
> row's design, and the design this brief describes. The earlier note that the preview
> was unreachable is void: the page answers 200 with `css/style.min.css` (202,719 B,
> `?v=3.0.2`). Measured tokens: gold `#cbb88c` (CTA fill, text `#1d2227`), ink
> `#1d2227`, deep gold `#7e6939`, panel `#f5f4f0`, strip ramp
> `#161a1e`/`#121518`/`#0e1013`, **Roboto only — no serif face and no Inter anywhere**
> in the sheet. The invented `#c5a55a` / `#1a1a2e` / Georgia / Inter palette in the app
> table below is app debt (implementer repaint). Evidence:
> `openspec/specs/template-precedent/spec.md` §Reference identity.


- **Color palette:** Gold accent **#cbb88c** (CTA fill, text #1d2227), ink #1d2227, accent-deep #7e6939, panel #f5f4f0, white text
- **Typography:** **Roboto 400/500/700 only** — the sheet carries no serif face and no Inter
- **Layout:** Single-page landing, sectioned vertically
- **Images:** Use picsum.photos seeded placeholders, lucide-react icons
- **Brand icons:** Use inline SVG (lucide-react removed brand icons)
- **Footer:** Link to componentdock.com, no ColorLib references

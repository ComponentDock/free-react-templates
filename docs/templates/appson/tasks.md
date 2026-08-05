# Appson (Colorlib Appson) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Implementation ships on
> `feat/template-appson` and lands via PR.

## Design notes (replication findings — updated 2026-08-05)

- **Original:** ColorLib "Appson" — apps landing HTML template
  (source: https://colorlib.com/wp/template/appson/).
- **Demo DOM analyzed:** the ColorLib preview wrapper page
  (https://preview.colorlib.com/theme/appson/) is a product showcase; the
  **real theme** was fetched from
  `https://preview.colorlib.com/theme/appson/appson/index.html`
  (HTTP 200, "Appson || App Landing Html Template") with
  `assets/css/style.css` (32KB) + `assets/css/typography.css`.
- **Visual design:** white/light app-landing page with **orange `#ff6818`**
  brand bands (Features + Download sections), dark `#272727` headings,
  muted `#666666` body text, phone mockup screenshots, Montserrat font.
- **Structure (1:1, section order):**
  1. Navbar: "Appson" + links (Home, About, Features, Screenshot,
     download, Pricing, Review, Contact).
  2. Hero: "Perfect Landing Page" + "The Best Template For Your Mobile App
     To Showcase And Acquire New Customers All" + phone mockup +
     Download Now.
  3. About: "Work the way you live" + blurbs + feature list (Fully
     Responsive Design / Android Platform / Strategy Solutions) + mobile
     screen image.
  4. Features (orange band): "Best Features" — .Unlimited Features,
     .Cloud Storage, .Modern Design, Android Platform, Strategy Solutions,
     Fully Responsive Design.
  5. Screenshots: "Screenshots" — 4 phone screens.
  6. Download (orange band): "Download Appson" + App Store / Google Play.
  7. Pricing: "Pricing Plan" — Basic $50/m, Premium $150/m, Unlimited
     $250/m (10 User, 50 Email Accounts, 100 MB Disk Space, 2 Subdomains,
     Free Updates, Support 24/7) + purchase.
  8. Team: "Meet my team" — 4 members (John Deo — front-end developer …)
     - stats 20K / 5K / 30K / 50.
  9. Testimonial: "Testimonial" — quote by John Deo, CEO Of iphone.
  10. Blog: "Our Latest Blog" — 3 posts "Work For Success" + Read More.
  11. Contact: "Contact US" — Your Name / Your Email address / Your
      Subject / Your Message + "Subscribe to our Newsletter" + Sign Up.
  12. Footer: copyright + Colorlib credit (paraphrased).
- **Design tokens extracted from `style.css` / `typography.css`:**
  - Primary orange `#ff6818` (`.bg-theme`, buttons); shades `#fe5f1b`,
    `#ff6719`, `#ff5700`; blue accent `#00b0ff`.
  - Dark `#272727`, muted `#666666` / `#696969`, light bg `#f3f3f3`, white.
  - Font: **Montserrat** (Google Fonts via `<link>`).
- **Recreation name:** Appson. App folder `apps/appson`, package
  `@free-react-templates/appson`.
- **Recreation approach:** copy `apps/appru` (closest app-landing pattern),
  re-theme tokens to orange `#ff6818`, Montserrat; picsum placeholders
  (`picsum.photos/seed/appson-<n>/<w>/<h>`); lucide-react icons; no assets
  copied.

## Tasks

- [x] Fetch preview wrapper + real theme DOM + CSS; extract tokens
      (2026-08-05).
- [x] Write/refine `openspec/specs/template-appson/spec.md` with the REAL
      section list (hero → about → features → screenshots → download →
      pricing → team → testimonial → blog → contact → newsletter → footer).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/appson` (copy the section-rich landing app pattern —
      Appru; rename package to `@free-react-templates/appson`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-appson`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [ ] Bookkeeping on main: mark Appson `[x]` + live Surge URL in
      TEMPLATES.md (both occurrences), set `"homepage"` in
      `apps/appson/package.json`.

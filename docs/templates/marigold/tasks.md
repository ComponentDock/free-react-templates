# Marigold (Colorlib Schmidt) — Tasks & Design Notes

## Design notes

- **Original:** ColorLib "Schmidt" — free personal portfolio template
  (source: https://colorlib.com/wp/template/schmidt/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/schmidt/`
  (HTTP 200, 10.1KB — multi-page site). Stylesheet `css/style.css` (65.5KB)
  analyzed for tokens. TEMPLATES.md screenshot confirms visual design.
- **Structure observed (single-page consolidation):** navbar (brand "Schmt." →
  "Marigold", links: Home/About/Services/Experiences/Works/Blog/Contact,
  transparent overlay) → hero (100vh, background image, right 50% golden
  overlay #d5c455, left text: subheading "UI/UX Designer & Developer", h1
  "I'm John Schmidt", two CTAs "More About Me" + "Hire Me", copyright) →
  about (stats: 5000 Happy Clients, 1200 Projects, 500 Coffee, 587 Hours;
  personal info: Name/DOB/Address/Zip/Email/Phone; "Download CV" CTA) →
  skills (9 progress bars: Photoshop 90%, Figma 95%, Illustrator 90%,
  JavaScript 85%, HTML5 95%, CSS3 90%, WordPress 70%, XD 80%, SEO 80%) →
  services (8 cards: UI/UX, Web Dev, Graphic Design, Branding, Marketing,
  Mobile App, Visual Editor, IT Consultancy) → pricing (4 tiers: $49/$79/
  $109/$149) → testimonials (carousel with avatar + name + quote) → footer
  (copyright + Component Dock link).
- **Design tokens:** accent **#d5c455** (golden yellow); dark text **#222222**;
  white **#fff**; navbar dark bg **#222222**; font **Poppins** (300–700);
  Bootstrap 5 buttons (0.25rem radius); hero overlay right 50% #d5c455;
  subheading uppercase 700 weight 16px letter-spacing 1px #d5c455;
  h1 700 weight #222222 80px.
- **Recreation name:** Marigold. App folder `apps/marigold`, package
  `@free-react-templates/marigold`.
- **Design approach:** light theme with golden-yellow (#d5c455) accents; hero
  = seeded picsum photo + golden overlay right half + headline + two CTAs;
  about with counter animation + personal info; skills with progress bars;
  services with lucide icons; pricing cards; testimonials carousel; simple
  footer; all images picsum-seeded (`picsum.photos/seed/marigold-N/w/h`);
  Google Fonts Poppins via `<link>`.

## Implementation tasks

1. **Scaffold app:** Copy simplest existing app, rename package to
   `@free-react-templates/marigold`, set up vite.config.ts with
   `injectUiSource()`, set `public/CNAME` and `homepage`.
2. **Navbar component:** Brand "Marigold", nav links (Home, About, Services,
   Experiences, Works, Blog, Contact), dark-mode toggle, transparent
   background that becomes solid #222222 on scroll.
3. **Hero component:** 100vh section with seeded picsum background image,
   right-half golden overlay (#d5c455), left column with subheading (golden
   uppercase), h1, two CTA buttons (primary + white), copyright line at
   bottom. Responsive: overlay hidden on mobile, text centered.
4. **About component:** Stats counters (4 items with animated countup),
   personal info (2-column list), "Download CV" button. Section heading
   with golden subheading + h2.
5. **Skills component:** "My Skills" heading, 9 progress bars in 3-column
   grid with skill names and percentage values.
6. **Services component:** 8 service cards in responsive grid with lucide
   icons and short descriptions.
7. **Pricing component:** "Choose Your Pricing Plan" heading, 4 pricing
   cards (Personal/Professional/Medium/Gigantic) with price, feature list,
   "Get Started" CTA.
8. **Testimonials component:** "Happy Guests" heading, carousel with
   testimonial cards (avatar, name, position, quote).
9. **Footer component:** Copyright text with heart icon, "Component Dock"
   link to https://www.componentdock.com/.
10. **App.tsx composition:** Compose all sections in order, set document
    title "Marigold — Personal Portfolio Template".
11. **index.css theme tokens:** Define brand color (#d5c455) in @theme,
    configure Poppins font family.
12. **Tests (TDD):** Write tests for each component (100% coverage), then
    verify with `npm run test:coverage`.
13. **Build & verify:** Run `scripts/verify-app.sh marigold` (typecheck +
    lint + tests + build).

## Fidelity notes

- Hero split layout is critical: left text + right golden overlay (50% width).
- The golden yellow #d5c455 is the primary brand accent throughout.
- Poppins font with weights 300-700; headings are 700 weight.
- Progress bars use Bootstrap-style styling with percentage labels.
- Testimonials carousel with avatar images (use seeded picsum or initials).
- Footer is minimal: just copyright + Component Dock link.
- All images must be picsum-seeded, no ColorLib assets copied.

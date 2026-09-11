# Brickwork (ColorLib Construct) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-brickwork`. Recreation name: **Brickwork** (NEW name —
> the ColorLib source keeps its name "Construct").

## Source mapping

- **ColorLib item:** "Construct" (TEMPLATES.md line 951).
- **Source URL:** https://colorlib.com/wp/template/construct/
- **Preview URL — REACHABLE (verified 2026-09-11 by direct fetch):**
  **https://preview.colorlib.com/theme/construct/**
  (HTTP 200, 438 lines, `<title>Colorlib Construct</title>`).
- **Preview CSS:** `css/style.css` (763 lines, hand-written custom styles) +
  `css/bootstrap.css` (Bootstrap 4). Fonts: Open Sans 300/400/700/800 via
  Cloudflare Fonts (inline @font-face) + Ionicons + FontAwesome + Flaticon.

## Reference research (done — do not redo)

### Live preview DOM structure (fetched 2026-09-11)

```
<header>
  <nav.navbar.navbar-expand-lg.navbar-light.bg-light>
    a.navbar-brand "Construct"
    ul.navbar-nav (Home, Services [dropdown: Metal Roofing, General Contracting,
      House Renovation, Laminate Flooring, Construction Consultant], Works, News,
      About, Contact)
    ul.navbar-nav.ml-auto.cta-btn → a "Get A Quote"
  </nav>
</header>

<section.home-slider.owl-carousel>
  .slider-item (bg image slider-2.jpg) → h1 "Creating A Brighter Future" + p + btn-primary "Download Now!"
  .slider-item (bg image slider-1.jpg) → h1 "Trusted Construction & Development Since 1889" + p
</section>

<section.container.cta-overlap>
  h2 "Trusted Construction & Development Since 1889" + a.btn-cta.btn-outline-white "Get A Quote"
</section>

<section.section> (Services)
  h2.heading.border-bottom "Services" + p.lead
  .row > 3x .col-lg-4 > .media.media-feature.text-center
    → icon (.flaticon-blueprint / .flaticon-building-1 / .flaticon-crane) +
      h3 (House Renovation / Construction Consultant / General Contracting) +
      p + a.btn.btn-outline-primary.btn-sm "Learn More"
  a.btn.btn-primary.btn-block "View All Services"
</section>

<section.section.border-t> (Recent Works)
  h2.heading.border-bottom "Recent Works" + p.lead + a.btn.btn-primary "View All Works"
  .row.no-gutters > 3x .col-md-4 > a.link-thumbnail
    → img + h3 (Wood Polishing / General Construction Building / House Renovation) +
      span.ion-plus.icon (hidden, shown on hover)
</section>

<section.section.bg-light> (Company News)
  h2.heading.border-bottom "Company News" + p.lead
  .major-caousel.owl-carousel > 8x .media.media-custom
    → img + span.meta-post (date) + h3 (title) + p + a "Read more" + span.ion-chatbubble + count
</section>

<section.section> (Testimonial)
  h2.heading.border-bottom "Testimonial" + p.lead
  .row > 2x .col-md-6 > .media.media-testimonial.text-center
    → img (circular) + p (name, company link) + blockquote
</section>

<footer.site-footer>
  .row > 4x .col-md-3:
    1. copyright text (Colorlib attribution → REPLACE with Component Dock)
    2. address / phone / email
    3. Quick Links (About, Services, Works, Contact)
    4. Social (Twitter, Facebook, LinkedIn, Instagram icons)
</footer>
```

### Design tokens (from CSS — confirmed)

| Token | Value | Usage |
|-------|-------|-------|
| Brand / primary | `#f4b214` | CTA buttons, active nav, heading underlines, feature icons, footer links, CTA bar bg, social hover bg |
| Secondary accent | `#f6c245` | btn-primary hover bg |
| Body text | `#868e96` | All body paragraphs |
| Headings | `#000` | h1, h2, h3, h5 |
| Meta text | `#ced4da` | Date labels, comment counts |
| Page bg | `#fff` | Body, cards, media-custom |
| Footer bg | `#f2f2f2` | site-footer |
| Section divider | `1px solid #f8f9fa` | .border-t on Recent Works |
| Feature card radius | `4px` | .media-feature |
| Feature card hover border | `10px solid #f4b214` | .media-feature:hover border-bottom |
| Social icon radius | `50%` | .footer-social a |
| CTA overlap bar | `#f4b214` bg, white text, `margin-top: -4em` | .cta-overlap |
| Heading underline | `50px × 2px #f4b214`, centered | .heading.border-bottom:before |
| Font family | `"Open Sans", Arial, sans-serif` | body |
| Font weights | 300, 400, 700, 800 | Open Sans via Cloudflare Fonts |
| Section padding | `7em 0` | .section |
| Loader stroke | `#f4b214` | #loader .path |

### Screenshot visual notes

The screenshot (construct-free-template.jpg) shows:
- White navbar with "CONSTRUCT" brand and golden CTA button on right
- Large hero slider with construction site background, bold uppercase white headline
- Golden CTA bar overlapping below hero
- Clean white services section with 3 icon cards (amber icons, bottom-border hover effect)
- Image grid portfolio with hover overlays
- Light grey blog card carousel section
- Testimonials with circular person photos
- Grey 4-column footer

## Implementation tasks

1. **Create workspace** — `apps/brickwork/`, `@free-react-templates/brickwork`, `npm install` at root
2. **Navbar** — White sticky nav, brand "Brickwork", desktop links + Services dropdown, mobile hamburger, golden CTA button
3. **Hero slider** — Full-viewport carousel (use a lightweight carousel lib or simple React state), background images via picsum.photos, bold uppercase h1, paragraphs
4. **CTA overlap bar** — Golden bar with negative top margin, white heading, white-bordered button
5. **Services section** — 3-column card grid, flaticon-style icons → lucide-react equivalents, hover scale + golden border-bottom
6. **Recent works** — 3-column image grid with dark overlay hover (title + plus icon fade in)
7. **Company news** — Light bg section, carousel of blog cards with image, date, title, description, read more, comment count
8. **Testimonials** — 2-column, circular images, names, company links, blockquotes
9. **Footer** — Grey bg, 4 columns (copyright w/ Component Dock link, contact, quick links, social icons as circles)
10. **Tests** — Vitest + Testing Library, 100% coverage, test each section component
11. **vite.config.ts** — Register `injectUiSource()` per conventions
12. **public/CNAME** — `brickwork.free.componentdock.com`
13. **package.json** — `homepage: "https://brickwork.free.componentdock.com"`, `@free-react-templates/brickwork`

### Component structure (planned)

```
apps/brickwork/
  src/
    main.tsx
    App.tsx
    index.css  (Tailwind entry + @theme brand token)
    components/
      Navbar.tsx
      HeroSlider.tsx
      CtaBar.tsx
      Services.tsx
      RecentWorks.tsx
      CompanyNews.tsx
      Testimonials.tsx
      Footer.tsx
    test/
      setup.ts
  public/
    CNAME
  package.json
  vite.config.ts
  tsconfig.json
  index.html
```

### Fidelity notes

- **Name change:** "Construct" → "Brickwork" (never use "construct" in app code)
- **Brand color mapping:** `#f4b214` → Tailwind `@theme` custom color (e.g. `--color-brand: #f4b214`)
- **Font:** Open Sans via Google Fonts `<link>` in index.html
- **Icons:** Replace flaticon/ionicons/fontawesome with lucide-react
  - flaticon-blueprint → lucide `Ruler` or `PenTool`
  - flaticon-building-1 → lucide `Building2`
  - flaticon-crane → lucide `HardHat` or `Construction`
  - ion-plus → lucide `Plus`
  - ion-chatbubble → lucide `MessageCircle`
  - fa-twitter/facebook/linkedin/instagram → lucide equivalents
- **Images:** picsum.photos seeded placeholders (`https://picsum.photos/seed/brickwork-1/1920/1080` etc.)
- **Carousel:** The original uses Owl Carousel; implement with a lightweight React carousel (e.g. simple CSS scroll-snap or a small lib) — avoid jQuery
- **No parallax** — this template has none
- **Footer attribution:** Replace Colorlib credit with "Component Dock" link
- **CTA overlap:** Use negative margin-top and relative z-index to overlap hero

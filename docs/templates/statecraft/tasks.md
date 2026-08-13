# Statecraft (ColorLib Consul) — Tasks & Design Notes

> Prep artifacts prepared on `main`; implementation ships on
> `feat/template-statecraft`.

## Design notes (replication findings)

- **Original:** ColorLib "Consul" — consulting / business advisory firm
  landing page, "Consulting | Template" (source:
  https://colorlib.com/wp/template/consul/).
- **Preview analyzed:** https://preview.colorlib.com/theme/consul/
  (HTTP 200, ~31 KB HTML). Live DOM + `assets/css/style.css` (~98 KB,
  complete/readable) parsed for structure and tokens; screenshot
  `consul-colorlib-template.jpg` (1200x946) reviewed visually: dark
  olive-green header/hero with a faint script watermark "Consul", white
  serif headline "Unlocking the **potential** of those who advance the
  world" (yellow-highlighted word), pale 24px subtext, outlined yellow
  "Explore More" button, bearded man-at-desk photo right; script
  wordmark + centered links + yellow "Make an Appointment" CTA in the
  navbar; cream "Who We Are" section with two office thumbnails.
- **Visual design:** warm corporate consulting site. Brand yellow
  `#F3D955` (buttons, services band, footer, hero highlight) on dark
  olive/ink hero; cream `#EBE5D0` section surfaces; body copy olive
  `#36402B`; coral `#F15B43` used sparingly as a secondary accent.
  Body text **Hind** sans-serif 16px; section labels **Shippori Mincho**
  serif uppercase; section headings Hind 700 46px ink `#1A1A1A`.
  Buttons: **square (radius 0)**; `.btn` solid yellow with tall padding
  (30px 35px); `.border-btn` outlined yellow (1px, 16px 28px padding,
  18px). Sections padded 100px top/bottom (70px mobile).
- **Structure (1:1, section order, home page):**
  1. Navbar (over the hero, dark): brand wordmark left; links HOME /
     ABOUT / SERVICES / CASES / BLOG / BLOG DETAILS / ELEMENT / CONTACT;
     right yellow "Make an Appointment" CTA. Mobile hamburger → stacked
     menu (`aria-expanded`).
  2. Hero slider `section.slider-area` (multi-slide carousel, split
     layout): left `hero-caption` — h1 60px w700 white with a yellow
     `<span>` word, p 24px `#DADFD4`, `.border-btn.hero-btn` "Explore
     More"; right `hero-man-img` photo (hidden <lg); dark overlay
     `#2E2200` @ 0.5 over the bg image; big script watermark behind the
     caption. Slides: "Unlocking the potential of those who advance the
     world" · "The gain insights, advice and tools to achieve your
     mission-critical priorities" · "We increase our clients' topline by
     optimizing their growth strategies, marketing, pricing and sales."
  3. Who We Are `section.about-area.section-bg.top-padding` (cream
     `#EBE5D0`): label "Who We Are" (uppercase serif) + h2 46px + right
     paragraph (Objectivity since 2013, trust/retention) + two office
     thumbnails bottom-left.
  4. Services band `section.services-area1` (**yellow `#F3D955` bg**):
     label "Services" + headline; `row.services-active` of 3
     `.single-services` cards (cream `#EBE5D0`, padding 33px 46px 16px
     32px): icon + h3 "Business" + trust blurb + "Learn More".
  5. Why Choose Us `section.about-area1.section-padding` (light): label
     "Why Choose Us?" + headline + image beside text.
  6. Top Stories `section.services-area.bottom-padding.fix`: h2 "Top
     Stories" + "More Cases" link; 3 case cards (`case1..3.jpg`) — image
     - title "Business Strategy" + blurb + read-more.
  7. Testimonials `section.testimonial-area` (cream `#EBE5D0`, dot
     carousel): centered slides — quote + founder name "Manuel Labor" +
     role meta.
  8. Blog `section.home-blog.section-padding` (cream): label "Latest
     Blog" + h2 "Tips & Tricks"; 2–3 cards (`blog1.jpg`, `blog2.jpg`) —
     image + meta + title + excerpt.
  9. Footer `footer.footer-wrapper.gray-bg` (CSS `.footer-wrapper` bg
     yellow `#F3D955`; HTML also carries `gray-bg` `#F1FBFF` — verify
     visually, CSS order favors yellow): "Quick Links" (Work, Services,
     Products, Tips & Tricks) · "Services" (Strategy & Transformation,
     Growth & Innovation, Leadership & Change, Digitalisation & IT,
     Operations & Efficiency) · "Newsletter" ("Subscribe newsletter to
     get updates." + email input + submit). Bottom bar: copyright line
     (Component Dock credit, not ColorLib).
- **Tokens:** brand yellow `#F3D955`; accent coral `#F15B43`; ink
  `#1A1A1A`; olive `#36402B`; cream `#EBE5D0`; peach `#FCF2EB`; pale
  blue-gray `#F1FBFF`; hero p `#DADFD4`. Fonts: Hind (300–700) body
  16px; Shippori Mincho (400–800) labels; headings Hind 700. Buttons:
  radius 0; `.btn` yellow 30px 35px padding, white 16px text;
  `.border-btn` 1px yellow outline 16px 28px, 18px. Hero overlay
  `#2E2200` @ 0.5; h1 60px w700 white + yellow span; p 24px. Card bg
  `#EBE5D0`, padding 33px 46px 16px 32px. Newsletter input 60px, 1px
  `#1A1A1A`, radius 5px. Section padding 100px/70px.

## Task outline (for the implementer)

1. Scaffold `apps/statecraft` (copy simplest existing app; package
   `@free-react-templates/statecraft`; CNAME
   `statecraft.free.componentdock.com`; homepage
   `https://statecraft.free.componentdock.com`; run `npm install` at
   root so the lockfile registers the workspace; keep `injectUiSource()`
   in `vite.config.ts`; copy the jsdom MemoryStorage polyfill from
   `apps/cura/src/test/setup.ts`).
2. `index.html`: title "Statecraft — Consulting Template"; Google Fonts
   `<link>` for Hind (300, 400, 500, 600, 700) + Shippori Mincho (400,
   500, 600, 700, 800).
3. `src/index.css` `@theme`: `--color-brand: #F3D955; --color-accent:
#F15B43; --color-ink: #1A1A1A; --color-olive: #36402B; --color-cream:
#EBE5D0; --color-peach: #FCF2EB;` body font Hind, labels Shippori
   Mincho.
4. Components (TDD, 100% coverage):
   - `Navbar.tsx` — dark bar, brand wordmark, links, yellow
     "Make an Appointment" CTA, mobile hamburger (`aria-expanded`).
   - `HeroSlider.tsx` — 3 slides, split caption/photo layout, yellow
     highlighted word, outlined Explore More, prev/next + dots, photo
     hidden below lg, dark overlay + watermark.
   - `WhoWeAre.tsx` — cream section, serif label, headline, paragraph,
     two thumbnails.
   - `Services.tsx` — yellow band, 3 cream cards (icon, title, blurb,
     Learn More).
   - `WhyChooseUs.tsx` — light section, label, headline, image.
   - `TopStories.tsx` — heading + More Cases link + 3 image cards.
   - `Testimonials.tsx` — cream dot carousel, quote + founder + role.
   - `Blog.tsx` — Latest Blog / Tips & Tricks, 3 blog cards.
   - `Footer.tsx` — 3 columns (Quick Links, Services, Newsletter form
     with submit), copyright bar linking
     https://www.componentdock.com/.
5. Verify: `scripts/verify-app.sh statecraft` (typecheck, lint, knip,
   fallow, vitest 100% coverage, build); `grep -ri colorlib apps/statecraft`
   must be empty; commit conventionally and open the PR with source
   template, preview URL, and design tokens documented.

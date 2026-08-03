# Horse Club (Colorlib Horse Club) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Scarlet PR awaits review.
> Implementation ships later on `feat/template-horse-club`.

## Design notes

- **Original:** ColorLib "Horse Club" — free equestrian club website template
  (source: https://colorlib.com/wp/template/horse-club/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/horseclub/`
  (HTTP 200 — note the preview slug is `horseclub`, no hyphen) + stylesheet
  `css/main.css` (HTTP 200).
- **Structure observed (1:1, section order):**
  1. Header — top bar (email `info@horseclub.com`, phone `+880 123 12 658
439`) + nav: Home, About, Service, Training, Events, Pricing, Blog,
     Contact.
  2. Banner — h6 "Introducing Horse Club", h1 "Inter relation Between Horse
     & Rider", "Book Consultancy" CTA; slider second slide "Brand new app to
     blow your mind" / "We've made a life that will change you".
  3. About/Video — copy + video play block.
  4. Features — six cards: Expert Technicians, Professional Service, Great
     Support, Technical Skills, Highly Recomended, Positive Reviews
     (multi-color icons: cyan/yellow/blue/orange/red).
  5. Home About — second image + copy block.
  6. Pricing — "Choose the best plan that suits you"; 01 Basic £199.00, 02
     Economy £299.00, 03 Premium £399.00, 04 Enterprise £499.00.
  7. Booking — "Appointment Form" + testimonial carousel (Fannie Rowe,
     Hulda Sutton).
  8. Latest Blog — "Latest News from our Blog"; cards (image, meta, title,
     excerpt).
  9. Gallery — responsive image grid.
  10. Footer — About Us, Contact Us, Newsletter, social, bottom bar.
- **Design tokens:** brand pink-red **#f6214b** (primary buttons/links);
  feature-icon palette **#4cd3e3** (cyan), **#f4e700** (yellow),
  **#38a4ff** (blue), **#f45622** (orange), **#f44a40** (red); text
  **#222222**, muted **#777777**, light sections **#f9f9ff**; font
  **Poppins** via Google Fonts; filled rounded pink-red buttons.
- **Recreation name:** Horse Club → app folder `apps/horse-club`, package
  `@free-react-templates/horse-club`.
- **Design approach:** pink-red brand tokens in `@theme`
  (`--color-brand: #f6214b`); multi-color icon accents for the six feature
  cards; seeded picsum placeholders
  `https://picsum.photos/seed/horseclub-<n>/<w>/<h>`; lucide-react icons;
  booking/newsletter forms with client-side validation (zod); repo-standard
  Navbar (dark-mode toggle) and Footer chrome; social icons (GitHub, X,
  LinkedIn) inline SVG.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/sage` (multi-section landing architecture with
  pricing/testimonials) once the pipeline reaches it.

## Tasks

- [ ] Write `openspec/specs/template-horse-club/spec.md` (Gherkin
      requirements + scenarios + replication findings) — DONE on main (this
      prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/horse-club` (copy `apps/sage`; rename package to
      `@free-react-templates/horse-club`).
- [ ] TDD: tests first for Navbar, Hero, About/Video, Features, Home About,
      Pricing, Booking form, Testimonials, Blog, Gallery, Footer, App
      composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.

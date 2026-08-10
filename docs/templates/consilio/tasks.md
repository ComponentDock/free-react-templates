# Consilio (ColorLib Consultingbiz) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-consilio` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Consultingbiz" — professional corporate consulting
  landing page: top info bar + transparent navbar over a full-screen hero
  slider, icon service cards, split support/company section (red diagonal
  stripe block + dark navy panel), video intro with play button, two case
  study blocks (4-image strip + 3 detailed cards with metric chips), navy
  gradient CTA banner, dark testimonial carousel, animated counters, team
  grid, 3-tier pricing with monthly/yearly toggle, FAQ accordion,
  want-to-work CTA, blog cards, brand logo strip, dark multi-column footer
  with newsletter form (source:
  https://colorlib.com/wp/template/consultingbiz/). Listed in TEMPLATES.md
  under Consulting (line 365) — one recreation covers that checklist row
  (the dup rows at lines 953/1376 are the same template; do NOT re-implement
  them, mark them `[x]` with the same surge URL at bookkeeping time).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/consultingbiz/`
  (HTTP 200, ~56KB HTML). DOM + `assets/css/style.css` (381KB,
  Bootstrap-based) extracted and analyzed. Screenshot
  `consultingbiz-free-template.jpeg` + live preview viewed in browser:
  corporate navy + red-CTA aesthetic; hero = full-width businessman-photo
  slider with dark overlay, left-aligned white text, red "OUR SERVICES"
  button; red diagonal-stripe block left of the split section; counter row
  with red-highlighted middle box (480 Active Clients); near-black footer.
- **Brand color is navy `#14435c`, NOT Bootstrap blue** — use it as the
  primary brand token. Accent red `#ff2143` for primary buttons/highlights.
  Section eyebrows are pink-red `#eb566c` uppercase with a 54×2px line
  before the text (`.section-tittle span::before`). Headings Roboto weight
  500 `#092c3f`; body/paragraphs Poppins `#10285d`.
- **Hero is a 2-slide slider** (both slides share the same heading/copy in
  the original). Slides use background images (`slider-img-1.jpg`) with a
  dark overlay; content left-aligned. Recreation: picsum backgrounds,
  interval advance + prev/next or dots.
- **Split section signature:** left column = RED panel with subtle diagonal
  stripes holding the meeting photo; right column = dark navy panel with
  "Our Best Services" + 2 paragraphs + red "MORE ABOUT US" button. On mobile
  the columns stack.
- **CTA banner:** `linear-gradient(135deg, #14435c 0%, #06151d 100%)` with
  white solid "Get Free Consultation" (`bg #fff`, text `#14435c`, hover bg
  `#092c3f`) and white-outline "View Our Services" (transparent, 2px white
  border). Radius 5px, padding 15px 35px.
- **Pricing:** Monthly/Yearly toggle with "Save 20%" — yearly = monthly ×12
  ×0.8 (or equivalent per-month discounted display). Professional plan has
  the "MOST POPULAR" badge; Enterprise uses "CONTACT US", others "GET
  STARTED". Plan data (copy can be paraphrased but keep the kinds):
  Starter $499 "For small businesses" (Initial Business Assessment, Monthly
  Strategy Session, Email Support, Basic Analytics Report, Dedicated
  Consultant, 24/7 Priority Support); Professional $999 "For growing
  companies"; Enterprise "For large organizations".
- **FAQ accordion:** 5 items, first expanded, one-open-at-a-time. Questions:
  "What types of businesses do you work with?", "How long does a typical
  consulting engagement last?", "What makes ConsultingBiz different from
  other consulting firms?", "Do you offer remote consulting services?", "How
  do I get started with a consultation?".
- **Footer:** bg `#11141b`, top border `#233148`. Columns: brand + blurb +
  newsletter form (email input + red SIGN UP button); contact (phone
  "+564 7885 3222", email "youremail@gmail.com"); LOCATION links (Advanced,
  Management, Corporate, Customer, Information); EXPLORE links (Cookies,
  About, Privacy Policy, Proparties, Licenses); social icons. Copyright bar
  with "made with ♥" credit (paraphrase, drop Colorlib attribution).
- **Icons:** original uses Font Awesome + flaticon + themify. Recreation:
  lucide-react for UI icons (target, shield, scale/clipboard for services;
  play, check, phone, mail, chevrons, arrows); inline SVG for social brands
  (Facebook, Twitter, LinkedIn, Instagram, Google Plus — lucide-react
  removed brand icons, see replication skill pitfall).
- **Placeholders:** `https://picsum.photos/seed/consilio-<n>/<w>/<h>` — hero
  slides (2, e.g. 1920×900), split image (e.g. 600×500), video thumb
  (e.g. 800×450), 4 featured case images (e.g. 500×400), 3 detailed case
  images (e.g. 600×450), 3 team photos (e.g. 400×480), 3 blog thumbs
  (e.g. 600×400), brand logos (text or small picsum 200×60), testimonial
  author avatars (80×80).

## Implementation tasks (for the implementer stream)

1. **Scaffold:** copy simplest existing app (e.g. `apps/onepage`), rename to
   `@free-react-templates/consilio`; run `npm install` at root so
   `package-lock.json` registers the workspace; keep `injectUiSource()` in
   `vite.config.ts` (see `docs/conventions.md`).
2. **Theme tokens** (`src/index.css` `@theme`): `--color-brand: #14435c`,
   `--color-brand-deep: #092c3f`, `--color-navy: #0d2d3e`, `--color-accent:
#ff2143`, `--color-eyebrow: #eb566c`, `--color-footer: #11141b`,
   `--color-body: #10285d`; Roboto + Poppins Google Fonts `<link>` in
   `index.html`.
3. **Header** (`components/Header.tsx`): top bar (hours + 4 socials,
   hidden below lg) + main nav (wordmark, Home/About/Services/Portfolio/
   Blog/Contact with simple dropdowns for About/Services/Blog/Contact,
   "Get Free Consultation" dark button), mobile toggle with `aria-expanded`.
   Header over the hero; original is transparent-over-slider — implement
   with a light solid bar for simplicity OR transparent + dark text overlay
   only if it stays readable on the picsum images (pick one, keep it
   consistent, note the choice in the PR).
4. **HeroSlider** (`components/HeroSlider.tsx`): 2 slides, picsum bg +
   dark overlay, eyebrow / h1 / subtext / red "OUR SERVICES" button, dots +
   auto-advance; a11y (aria-live or labelled controls).
5. **TopServices** (`components/TopServices.tsx`): eyebrow + heading + 3
   icon cards (Strategy Planning, Insurance Service, Audit & Evaluation).
6. **CompanySupport** (`components/CompanySupport.tsx`): split — red
   striped panel w/ image + navy panel (heading, 2 paragraphs, red "MORE
   ABOUT US" button); stack on mobile.
7. **VideoIntro** (`components/VideoIntro.tsx`): thumb + round play button
   (decorative), heading, paragraph, 4-item check list.
8. **FeaturedCases** (`components/FeaturedCases.tsx`): eyebrow + heading +
   4 image cards with tag + title link.
9. **CaseStudies** (`components/CaseStudies.tsx`): eyebrow + heading + 3
   detailed cards (tag, title, blurb, Client line, metric chip).
10. **CtaBanner** (`components/CtaBanner.tsx`): navy gradient, heading +
    white solid + white outline buttons.
11. **Testimonials** (`components/Testimonials.tsx`): dark section, quote +
    author, prev/next controls, 3-4 quotes.
12. **Counters** (`components/Counters.tsx`): 4 boxes (8705/480/626/9774),
    middle box red-highlighted; optional count-up on view (IntersectionObserver).
13. **Team** (`components/Team.tsx`): eyebrow + heading + 3 cards
    (photo/name/role).
14. **Pricing** (`components/Pricing.tsx`): eyebrow + heading + toggle
    (Monthly/Yearly, "Save 20%") + 3 plan cards, Professional featured.
15. **Faq** (`components/Faq.tsx`): accordion, 5 items, first open,
    one-open-at-a-time.
16. **WantToWork** (`components/WantToWork.tsx`): heading + "MORE ABOUT US"
    button on dark band.
17. **Blog** (`components/Blog.tsx`): eyebrow + heading + 3 cards
    (meta/title/excerpt/Read More).
18. **Brands** (`components/Brands.tsx`): grayscale logo strip.
19. **Footer** (`components/Footer.tsx`): 4-5 columns incl. newsletter form
    (zod email validation + success state), contact, LOCATION + EXPLORE link
    lists, socials; copyright bar.
20. **App composition** (`App.tsx`): Header → HeroSlider → TopServices →
    CompanySupport → VideoIntro → FeaturedCases → CaseStudies → CtaBanner →
    Testimonials → Counters → Team → Pricing → Faq → WantToWork → Blog →
    Brands → Footer; dark-mode `.dark` variants per conventions.
21. **Tests:** one `describe` per component, scenario-style `it` blocks
    mirroring the spec; 100% coverage required.
22. **Verify:** `npm run verify:app consilio` (typecheck + lint + vitest
    100% + build) → PR `feat/template-consilio` → merge immediately →
    `[x]` + surge URL + `npm run readme:status` on main. Also mark the dup
    Consultingbiz rows (953, 1376) `[x]` with the same surge URL at
    bookkeeping time (do NOT re-implement).

## Fidelity pitfalls

- Do NOT reuse the source name "Consultingbiz" anywhere as the app/package
  name.
- Do NOT copy original images/fonts/CSS — picsum + Google Fonts only.
- `section-bg` sections (support-company, pricing, wantToWork, testimonial,
  footer) use background images in the original — recreate as solid dark
  navy surfaces (`#14435c`-family) instead; the exact images must not be
  copied.
- The header-top bar is hidden below `lg` in the original — keep that
  responsive behavior.
- Hero slider images need a dark overlay so white text stays readable on
  arbitrary picsum photos.
- Pricing toggle must keep a11y states (`role="switch"` or radiogroup with
  aria-checked) and update prices on switch; keep yearly math simple
  (monthly price × 0.8, rounded).
- Test queries: desktop + mobile navs render duplicate links in the DOM —
  use `getAllByRole` and index the mobile one last.
- Social brand icons: verify lucide-react exports; use inline SVG paths if
  missing (they are — brand icons were removed).
- Newsletter form swaps to a success message on submit — assert
  `queryByLabelText(...)` absent instead of checking the input value.

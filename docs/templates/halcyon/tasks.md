# Halcyon (ColorLib Wellspa) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-halcyon` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Wellspa" — spa & wellness single-page template
  (source: https://colorlib.com/wp/template/wellspa/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/wellspa/
  (HTTP 200, full rendered DOM + `css/style.css` (23.6 KB) + vendored
  `css/bootstrap.min.css` (34.4 KB, `$primary` overridden to `#ffa188`)
  extracted). Screenshot `wellspa-free-template.jpg` confirms: dark warm
  hero (hot-stone massage photo) with white serif headline + peach pill
  CTA, clean white body, peach/coral accents, elegant Playfair serif
  headings, Muli body text.
- **Structure (1:1, section order):**
  1. Header: transparent navbar over hero, serif wordmark "WellSpa" left,
     right nav (Home / About / Services / Gallery / Blog / Contact) white,
     active link peach; hamburger → slide-down mobile menu overlay.
  2. Hero cover (`site-section-cover overlay`): full-height bg image
     (`calc(100vh - 196px)`, `min-height: 677px`) with `rgba(0,0,0,0.3)`
     overlay — serif white h1 "Spa Which You Love", paragraph, "Learn
     More" pill button (col-md-7).
  3. About: left (col-md-5) serif heading "WellSpa Spa & Wellness", bold
     sub-paragraph, plain paragraph, 4 circular social icons (twitter,
     instagram, facebook, linkedin); right (col-md-6) two overlapping
     `.bg-img-1` photos (50% width, 350px tall, second offset
     `mt-md-5 mr-md-4`).
  4. Services: centered "Our Services" heading with peach underline bar
     (`heading-border-bottom`), 4 cards (col-lg-3): image + serif title +
     text — Body Shrub, Relax Massage, Facial Spa, Body Shrub.
  5. Discount CTA (`services_294491`): bg `rgba(255,161,136,0.1)`,
     centered peach serif "Get 20% discount" h2 (text-primary), lead
     paragraph, "Contact us" pill button.
  6. Features (`features_75651`): parallax bg image (same hero photo) +
     overlay, white "Spa Features" heading + peach underline, 4 cards
     (col-lg-3): peach 2.4rem icon + white h3 + muted
     `rgba(255,255,255,0.5)` p — Relaxing Massage (towel), Candle
     (candle), Bathrobe (bathrobe), Hot Stones (hot stones). Card:
     `padding: 30px`, `border-radius: 4px`, `border: 1px solid
rgba(255,255,255,0.2)`, hover `background: rgba(255,255,255,0.1)`.
  7. Testimonials: centered "Testimonials" heading, owl carousel of 4+
     cards (circular author photo `img-fluid mr-3` + name span +
     blockquote), then centered "Prev" / "Next" pill buttons.
  8. Big quote (`testimonial_38201`): left (col-md-5) large serif quote
     with peach `&ldquo;`/`&rdquo;` marks, attribution "— Jean Doe, Spa
     Customer" (muted role span); right (col-md-6) same two overlapping
     photos as About.
  9. Footer (`site-footer bg-image overlay`): bg image + overlay, centered
     serif white wordmark "WellSpa", centered links Home / About /
     Services / Contact, circular social icons, bottom bar with
     `border-top: 1px solid rgba(255,255,255,0.1)` + copyright line.
- **Design tokens extracted from `style.css` + custom bootstrap:**
  - Brand peach **`#ffa188`** primary — `$primary` in vendored bootstrap;
    `.btn-primary` bg `#ffa188` (hover `#ff8362`, border hover
    `#ff7955`), active nav link, form-control focus border, owl active
    dot, `heading-border-bottom` underline bar, feature icons, big-quote
    marks.
  - Dark `#000` (footer bg), `#364d59` (dark slate), `#212529` (body
    text); grays `#f8f9fa`, `#ced4da`, `#e6e6e6`, `#666666`; muted on
    dark `rgba(255,255,255,0.5)`.
  - Fonts: **"Muli"** (body/nav; also -apple-system fallback stack),
    **"Playfair Display"** (serif headings + wordmark, weights 400/900).
  - Buttons: pill `border-radius: 30px`, `padding: 10px 30px`, bold,
    white text; `.btn-primary` peach bg, hover `#ff8362`.
  - Hero overlay `rgba(0,0,0,0.3)`; `.bg-image` uses
    `background-attachment: fixed` (parallax effect).
  - Section rhythm: `.site-section` padding `2.5em 0`; footer `4em 0`
    (8em on md+).
- **Recreation name:** Halcyon (NEW — distinct from ColorLib "Wellspa" and
  from all existing apps/spec names). App folder `apps/halcyon`, package
  `@free-react-templates/halcyon`.
- **Recreation approach:** hero cover + parallax features/footer via fixed
  background attachment (or an overlay div for the parallax look);
  `https://picsum.photos/seed/halcyon-<n>/<w>/<h>` placeholders (hero,
  about pair ×2, 4 service images, testimonial avatars); lucide icons
  (twitter/instagram/facebook/linkedin for social; towel/sparkles/
  flame/etc. for features); Muli + Playfair Display via Google Fonts
  `<link>`; peach `#ffa188` primary in `@theme` (hover `#ff8362`); pill
  buttons via rounded-full; repo-standard Navbar (dark-mode toggle) +
  Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-halcyon/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/halcyon` (copy the simplest app; rename package to
      `@free-react-templates/halcyon`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate (local per-app gate in FAST_MODE).
- [ ] Push `feat/template-halcyon`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).

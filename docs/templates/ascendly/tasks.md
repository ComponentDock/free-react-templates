# Ascendly — implementation tasks + design notes

Recreates ColorLib **Arcwork** (business consulting landing) as **Ascendly**.
Full spec: `openspec/specs/template-ascendly/spec.md` (tokens, Gherkin, checklist).
Preview: https://preview.colorlib.com/theme/arcwork/ · Source page:
https://colorlib.com/wp/template/arcwork/
TEMPLATES.md rows to mark at ship: lines **341, 893, 2495** (THREE `Arcwork`
duplicates — Bootstrap, Business and Portfolio categories; mark ALL of them).

## Task outline (TDD, 100% coverage, one commit per section or logical group)

- [ ] 1. Scaffold app `apps/ascendly` (copy simplest existing app; rename package
      `@free-react-templates/ascendly`; register `injectUiSource()` in
      `vite.config.ts`; `npm install` at root so the lockfile registers the
      workspace; `index.html` title "Ascendly — Business Template" + Google
      Fonts `<link>`: Roboto 400/500/700/900)
- [ ] 2. `@theme` tokens in `index.css`: brand indigo `#3b4eda`, cream
      `#fff6da`, page white, muted `#6c7b95`, dark `#212529`, `#f8f9fa`
      light tint; font family roboto; radius 30px pill for `.btn`-style
      actions; section padding rhythm 7rem (112px)
- [ ] 3. Navbar (site name "Ascendly" + Home link + dark-mode toggle; logo
      uppercase; optional extra links Home/About/Services/Blog/Contact)
- [ ] 4. Hero (split: absolutely-positioned cream `#fff6da` band covering the
      right ~50%; centered h1 "Grow Up Your Business." with a light
      word-cycling effect on the last word — Business/Startups/Organization —
      and blinking caret; "View Our Services" CTA = uppercase 14px weight-900
      link with a 2px indigo bar under it)
- [ ] 5. Feature cards (3 cards in a row: Financial Analysis / Marketing Plans
      / Optimize Solutions; card = cream bg, 40px padding, giant faint indigo
      icon (lucide BarChart3 / TrendingUp / Briefcase at low opacity,
      absolute left), h2 in indigo 18px, lorem blurb, "View Our Services"
      link; MIDDLE card gets the active treatment: 2px indigo border +
      transparent bg — do not forget the `.active` state)
- [ ] 6. Our Solutions (section with left-half cream band behind the heading;
      h2 "Our Solutions"; 6 image cards — 3 seeded picsum images reused
      twice — each image + h3 title link 18px weight 900; render as a
      simple 6-card grid or horizontally scrollable row since the original
      is an owl carousel)
- [ ] 7. Testimonial (h2 "Testimonial"; 2 slides — portrait image (40% width) + quote + author "— Craig Stephen"; dots active = indigo; a static
      stacked render of both slides is acceptable, or a simple cycle)
- [ ] 8. Blog (h2 "Blog" + "View All" link right-aligned; 3 `post-entry-1`
      cards: 2px solid indigo border, white bg, image, h2 title, "July 17,
      2019 by Admin", excerpt)
- [ ] 9. CTA band (`bg-tertiary` = `#fff6da`): centered h2 "Let's work
      together to make your business growth dramatically." + "View Our
      Services" link (same underline-bar style as hero)
- [ ] 10. Footer (white; uppercase logo "Ascendly" 2rem weight 900; 3 link
      columns — Contact Us (Contact Us / hello@mydomain.com / +1 829 2293 382
      / Support) and TWO duplicate columns (Home / Blog / Services / About Us
      — keep the duplication); centered row of 5 social icons (inline SVG
      brand icons: Facebook, X, LinkedIn, Instagram, Skype-ish fifth);
      copyright bar "© <year> Ascendly. All rights reserved.")
- [ ] 11. `npm run verify:app ascendly` (typecheck + lint + 100% coverage + build)
- [ ] 12. PR: claim (`[~]` on all 3 Arcwork rows), implement, merge, mark
      `[x]` + surge URL + `npm run readme:status`

## Design notes (fidelity per section)

- **Look & feel:** clean, professional business-growth landing. White base
  with ONE indigo accent (`#3b4eda`) and cream (`#fff6da`) as the warm
  secondary for split bands, cards and the CTA band. Roboto everywhere,
  headings weight 900. No images in hero; photos only in Solutions/Blog/
  Testimonial.
- **Split-band trick:** the original paints only HALF of a section with cream
  via `:before` pseudo-elements — hero cream on the right 50%, "Our
  Solutions" cream on the left 50%. Replicate with an absolutely-positioned
  half-width div (`absolute inset-y-0 right-0 w-1/2 bg-cream -z-10` style)
  so content stays centered above it.
- **Signature CTA (`.more-29291`):** NOT a pill button — an uppercase 14px
  weight-900 text link with a 2px solid indigo bar under the text
  (`border-b-2 border-indigo` or a `before` bar), padding-bottom 7px. Used
  in hero, feature cards and the CTA band. (The base `.btn` is a 30px-radius
  pill if any real button is needed, e.g. forms.)
- **Feature cards:** cream bg + 40px padding; giant icon in
  `rgba(59,78,218,0.2)` at ~7rem absolutely positioned to the left, slightly
  clipped; hover/active → border 2px indigo, bg white, icon slides right.
  Middle card starts in `.active` state.
- **Blog cards:** 2px solid indigo border, white bg, contents padding 20px,
  title 18px black → indigo on hover.
- **Carousels:** original uses owl.carousel (Solutions, Testimonial). A
  simple static render of all slides (grid/stack) is fine; if a cycle is
  added, dots must match (active dot = `#3b4eda`, 15px wide bar style).
- **Footer:** white, not dark. Logo uppercase 2rem weight 900; the two
  duplicate "Home/Blog/Services/About Us" columns are intentional in the
  original — keep them.
- **Images:** all picsum-seeded (`picsum.photos/seed/ascendly-N/w/h`) —
  office/desk/meeting shots for Solutions (3 unique, reused), portrait for
  Testimonial, article thumbnails for Blog.
- **Accessibility:** icon-only social links get aria-labels; the word-cycling
  headline must not trap focus (use aria-live polite or a plain static
  fallback); CTA links are real `<a>` elements.

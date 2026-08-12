# Brushwork (ColorLib Snipp) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-brushwork` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Snipp" — creative designer portfolio / agency
  landing page: transparent navbar, full-viewport gradient hero with
  particle-network overlay, overlapping masonry portfolio grid with
  hover-reveal info bars, about blurb with CTA, 4 pastel-tiled icon service
  cards, gradient newsletter parallax band, works gallery (Illustration /
  Application / Web Design), light testimonial carousel, sky-blue animated
  counters, blog cards, dark multi-column footer (source:
  https://colorlib.com/wp/template/snipp/). Listed in TEMPLATES.md (line
  500).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/snipp/`
  (HTTP 200, ~36KB HTML). DOM + `css/style.css` (68KB, Bootstrap 4-based)
  extracted and analyzed. Screenshot `snipp-free-template.jpg` (1200×946)
  viewed in browser: warm pastel gradient aesthetic; hero = pink `#ee76ad` →
  peach `#efac78` 45° gradient with dots/lines particle pattern, centered
  white "We love to create **Beautiful** websites", pill outline "Get in
  touch" button; portfolio masonry grid overlapping the hero bottom; footer
  dark.
- **Brand look is the 45° pink→peach gradient** (`linear-gradient(45deg,
#ee76ad 0%, #efac78 100%)`, opacity .97) used for the hero overlay AND the
  newsletter band. Secondary brand color: sky blue `#29bae4` (counters
  section bg). Dark text `#404044`.
- **Portfolio masonry:** the grid uses mixed Bootstrap column widths (3/6/4/8)
  for a staggered masonry look; each card has a background image, title +
  "Website" tag, and a user block (avatar + "John Bruce" / "Designer").
  Hover reveals a white bottom bar (`.text`, slides up, opacity 0→1) and a
  white top bar (`.text-1`).
- **Services:** 4 cards with hexagonal-ish icon tiles (rounded square +
  triangle notches via `:before/:after`). Tint pairs: Strategy
  (lightbulb, `#fce7f1`/`#ee76ad`), Design (laptop, `#fdf2ea`/`#efac78`),
  Development (gear, `#def4fb`/`#29bae4`), Help & Supports (chat,
  `#ebfdf4`/`#79efb4`).
- **Newsletter:** `.subscribe-form` pill input (transparent bg, 1px
  rgba(255,255,255,.7) border, radius 30px, white placeholder) with a
  paper-plane icon at right 20px — the icon IS the submit affordance in the
  original (no separate button). Recreation: keep the pill input + a
  paper-plane submit button for a11y.
- **Counters:** `#29bae4` bg, 3 stats with `data-number` count-up: 400
  "Customers are satisfied with our professional support", 1000 "Amazing
  preset options to be mixed and combined", 8000 "Average response time on
  live chat support channel".
- **Works:** subheading "Works" + h2 "View our works below to see our design
  and way of development." + 3 cards (Illustration, Application, Web Design)
  with image/title/blurb/"View Portfolio" + "View All Projects" link.
- **Testimonials:** `bg-light`, subheading "Customer Says" + h2 "Our
  satisfied customer says", carousel of quotes (author "Dennis Green", roles
  Marketing Manager / Interface Designer / UI Designer), prev/next.
- **Blog:** `bg-light`, subheading "Blog" + h2 "Recent Blog", 3 cards with
  meta (July 12, 2018 / Admin / 3 comments), title, Read More.
- **Footer:** dark. Brand + blurb; Quick Links (Home, Case studies,
  Services, Portfolio, About, Contact); Contact Information (address "198
  West 21th Street, Suite 721 New York NY 10016", phone "+ 1235 2355 98",
  email "info@yoursite.com"); social icons; copyright bar (credit
  paraphrased, Colorlib attribution dropped, Component Dock link per
  conventions).
- **Icons:** original uses icomoon/flaticon/ionicons. Recreation:
  lucide-react for UI icons (lightbulb, laptop, settings/gear, message-circle
  for services; send/paper-plane for newsletter; chevrons for carousel);
  inline SVG for social brands (Facebook, Twitter, Instagram — lucide-react
  removed brand icons, see replication skill pitfall).
- **Placeholders:** `https://picsum.photos/seed/brushwork-<n>/<w>/<h>` —
  6 portfolio images (e.g. 600×700 / 600×350 mixed aspect ratios for
  masonry), 3 works images (e.g. 600×450), 3 blog thumbs (e.g. 600×400),
  testimonial avatars (80×80), hero particle pattern (SVG/CSS, no image).

## Implementation tasks (for the implementer stream)

1. **Scaffold:** copy simplest existing app (e.g. `apps/onepage`), rename to
   `@free-react-templates/brushwork`; run `npm install` at root so
   `package-lock.json` registers the workspace; keep `injectUiSource()` in
   `vite.config.ts` (see `docs/conventions.md`).
2. **Theme tokens** (`src/index.css` `@theme`): `--color-brand-start:
#ee76ad`, `--color-brand-end: #efac78`, `--color-sky: #29bae4`,
   `--color-ink: #404044`, `--color-muted: #c0c0c3`, tile tints
   (`--color-tile-pink: #fce7f1`, `--color-tile-peach: #fdf2ea`,
   `--color-tile-blue: #def4fb`, `--color-tile-green: #ebfdf4`); Work Sans
   Google Fonts `<link>` in `index.html`.
3. **Header** (`components/Header.tsx`): wordmark "Brushwork." (uppercase
   weight 700), links Home/About/Services/Portfolio (dropdown: Portfolio,
   Portfolio Single)/Case Studies/Contact, "Get in touch" button right,
   mobile toggle with `aria-expanded`. Original navbar is transparent over
   the gradient hero — implement light-transparent with dark text OR solid
   white bar (pick one, keep readable, note in PR).
4. **Hero** (`components/Hero.tsx`): full-viewport section on the 45° brand
   gradient; subtle particle/dot pattern (static inline SVG or CSS
   radial-gradients — no canvas lib); centered white h1 "We love to create
   **Beautiful** websites" (light 200 + bold 800), pill outline "Get in
   touch" button (1px white/40 border, radius 30px, hover: white bg + ink
   text).
5. **FeaturedPortfolio** (`components/FeaturedPortfolio.tsx`): masonry grid
   (`-mt-*` overlap over hero), 6 cards (The Verge, Racks, Zendesk, Curator,
   Tasty, Voyage) with picsum images of mixed aspect ratios; hover/focus
   reveals white info bar (title + "Website" tag + avatar + "John Bruce" /
   "Designer"); below the grid: about blurb "UI/UX, visual, Web designer
   with more than 12 years of experience..." + "Get in touch" button.
6. **Services** (`components/Services.tsx`): subheading "Our Services" + h2
   "Web & Mobile app design, bring your ideas to life" + 4 cards with pastel
   tile + lucide icon (lightbulb/laptop/settings/message-circle) + title +
   blurb. Tile shape: rounded square with triangle notches (CSS
   clip-path or pseudo-elements) — or plain rounded tile, note the
   simplification.
7. **Newsletter** (`components/Newsletter.tsx`): gradient band, h2 "Subcribe
   to our Newsletter" + blurb + pill email input + paper-plane submit
   button; zod email validation, per-field error, success message on valid
   submit.
8. **Works** (`components/Works.tsx`): subheading "Works" + h2 + 3 cards
   (Illustration, Application, Web Design) with image/title/blurb/"View
   Portfolio" link + "View All Projects" link.
9. **Testimonials** (`components/Testimonials.tsx`): `bg-light` section,
   subheading "Customer Says" + h2 "Our satisfied customer says", 3-4 quotes
   (quote + "Dennis Green" + role), prev/next controls, one visible at a
   time.
10. **Counters** (`components/Counters.tsx`): `#29bae4` bg, subheading "Our
    achievements" + 3 counters (400/1000/8000 with labels); count-up on
    scroll via IntersectionObserver, static values fallback.
11. **Blog** (`components/Blog.tsx`): `bg-light`, subheading "Blog" + h2
    "Recent Blog" + 3 cards (meta date/Admin/3 comments, title, Read More).
12. **Footer** (`components/Footer.tsx`): dark; brand + blurb, Quick Links
    list, Contact Information (address/phone/email with icons), social
    icons; copyright bar with Component Dock link
    (https://www.componentdock.com/).
13. **App composition** (`App.tsx`): Header → Hero → FeaturedPortfolio →
    Services → Newsletter → Works → Testimonials → Counters → Blog →
    Footer; dark-mode `.dark` variants per conventions.
14. **Tests:** one `describe` per component, scenario-style `it` blocks
    mirroring the spec; 100% coverage required.
15. **Verify:** `npm run verify:app brushwork` (typecheck + lint + vitest
    100% + build) → PR `feat/template-brushwork` → merge immediately →
    `[x]` + surge URL + `npm run readme:status` on main.

## Fidelity pitfalls

- Do NOT reuse the source name "Snipp" anywhere as the app/package name.
- Do NOT copy original images/fonts/CSS — picsum + Google Fonts only. The
  particle-network hero overlay must be recreated (SVG/CSS), not copied.
- The hero gradient is the template's signature — use the exact 45° angle
  and the `#ee76ad`/`#efac78` stops, opacity ~0.97 over a light base or
  standalone.
- Portfolio section MUST overlap the hero (`margin-top: -250px` ≈ `-mt-40`
  to `-mt-64` depending on breakpoint) — this is a signature layout detail.
- Counters: `data-number` count-up animation; keep static fallback so the
  layout/tests don't depend on animation timing (RTL fake timers + act()).
- Newsletter has no separate submit button in the original — keep the pill
  input + paper-plane affordance; make it a real submit button for a11y and
  form tests (query by role button, not by placeholder).
- Test queries: nav dropdown + mobile menu can duplicate links in the DOM —
  use `getAllByRole` and index appropriately.
- Social brand icons: verify lucide-react exports; use inline SVG paths if
  missing (they are — brand icons were removed).
- Footer credit: paraphrase the "made with ♥" credit, drop Colorlib
  attribution, add the Component Dock link (repo convention).

# Gloss (Colorlib Makeup Artist) — Tasks & Design Notes

> Claimed by the implementer stream: ColorLib "Makeup Artist" is recreated
> under the NEW name **Gloss** (apps/gloss, package
> `@free-react-templates/gloss`). The prep folder was source-named
> `makeupartist`; renamed to `gloss` on claim per the naming rule.

## Design notes

- **Original:** ColorLib "Makeup Artist" — free makeup artist website
  template (source: https://colorlib.com/wp/template/makeupartist/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/makeupartist/`
  (HTTP 200, 32.5KB) + stylesheet `css/style.css` (63.2KB). Full rendered
  DOM extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** header (Home/About/Services/Shop/Pages/
  works/Blog/Contact + socials + Get a Quote) → hero ("Make your face the
  center of attention." + Contact us) → about ("Best makeup services" /
  "Professional makeup": Daily makeup From $20.0, Wedding makeup From
  $50.0, Event makeup From $30.0, Creative Makeup From $70.0) → services
  (set-bg: Danielle Benton, Dani Alves — Blogger/Client quotes) → works
  gallery ("Latest projects": 7 × "Brown hair wave") → blog ("Makeup
  artist tips": 3 posts, Rosie Chapman, Jun 15 2020) → shop ("Beauty
  products": Palettes / Leather shopper bag $49.00, Add to Cart / Keep an
  eye / Love this) → CTA ("Book online for 20% discount" + "Get a quote"
  form: Name, Number phone, Email, Choose services, Your message, Book
  services) → footer (Address / Phone / Email + "Follow us on @gloss").
- **Design tokens:** brand pink **#e65783** on dark maroon **#200204** /
  **#111111**; light **#f8f2f2** sections; muted **#888888**; headings/body
  **Spartan** + "Mattings Regular" display via Google Fonts (Mattings not
  on Google Fonts — Playfair Display stands in); pink filled pill buttons
  (`primary-btn`, radius 50px, uppercase, letter-spacing).
- **Recreation name:** Gloss. App folder `apps/gloss`, package
  `@free-react-templates/gloss`, homepage
  `https://free-react-templates-gloss.surge.sh`.
- **Design approach:** dark maroon hero with seeded picsum photo +
  headline; light about with 4 service cards; dark testimonials band; works
  gallery with seeded photo tiles; blog cards with seeded photos; shop grid
  with seeded photo tiles + hover actions; CTA band + booking form; footer
  with contact columns + social handle; all images picsum-seeded
  (`picsum.photos/seed/gloss-N/w/h`); Google Fonts via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, cn) — do NOT duplicate
  components.
- Base implementation on `apps/terra` (multi-section landing with
  Navbar/Hero/Sections/Footer + dark-mode toggle) and `apps/aurora`
  (section patterns); BrandIcon copied from terra.

## Tasks

- [x] Claim: branch `feat/template-gloss`, mark Makeupartist `[~]` in
      TEMPLATES.md (2 rows), push claim.
- [x] Rename prep artifacts: `openspec/specs/template-makeupartist` →
      `openspec/specs/template-gloss`, `docs/templates/makeupartist` →
      `docs/templates/gloss`; refine spec with replication findings
      (incl. the Latest projects gallery the prep missed).
- [x] Scaffold `apps/gloss` (copy terra patterns, rename package to
      `@free-react-templates/gloss`, injectUiSource() kept in vite.config,
      homepage set).
- [x] Write tests first (TDD, red phase): Navbar (dark mode + mobile menu),
      Hero, About, Services, Projects, Blog, Shop, CTA (form submit), Footer + App composition.
- [x] Implement components using `packages/ui` + `cn()`, picsum-seeded
      images, lucide icons, Google Fonts (Spartan + Playfair Display).
- [x] `npm install` at repo root (register workspace in package-lock.json).
- [x] Run per-app verification gate: `bash scripts/verify-app.sh gloss`
      (typecheck + lint + 100% coverage tests + build) + `npm run
    spec:validate`.
- [x] Push branch, open PR (title "feat: Gloss — Makeup Artist Portfolio
      template (ColorLib Makeupartist)"), merge immediately.
- [ ] Bookkeeping on main: mark both Makeupartist rows `[x]` + gloss surge
      link, `npm run readme:status`, commit (chore:) + push.

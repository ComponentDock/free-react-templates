# Barcut (Colorlib Barcut) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Lagoon PR awaits review.
> Implementation ships later on `feat/template-dapper`.

## Design notes

- **Original:** ColorLib "Barcut" — free barber shop website template
  (source: https://colorlib.com/wp/template/barcut/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/barcut/`
  (HTTP 200, 42.3KB) + stylesheet `css/main.css` (76.2KB). Full rendered DOM
  extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** navbar (Dapper Salon + Home/About/Pricing/
  Barbers/Gallery/Services/Blog/Contact) → hero (photo carousel, "HairStyle is
  a Must Try Fashion" + Watch Intro Video) → about split ("We Believe that
  Interior beauty Lasts Long" + Learn More) → services (4 icon cards: Stylish
  Hair Cutting, Quality Gel Shave, Beard Trimming, Executive Wash) → catalogue
  tabs ("Select Your Style", Shaveing + View Gallery...) → team ("We Have All
  Famous Barbers": Peter Baker, Nancy Holmes, Gavin Hansen) → testimonials
  (dark photo band, Fanny Spencer) → pricing ("Choose Your Package": Basic
  $79 / Premium $89 / Luxury $99, middle card dark #222, Order Now) → blog
  ("Latest From Blog", 4 posts) → black footer (About Me + Newsletter + Follow
  Me).
- **Design tokens:** brand gold **#ba9236**; primary button gradient
  `#ba9236 → #fdc136 → #ba9236`; body text `#777777` on light `#f9f9ff`;
  headings **Playfair Display** (serif) + body **Roboto** (sans-serif) via
  Google Fonts; photo overlays `rgba(0,0,0,0.3)`; footer `#000000`; active
  pricing card `#222`.
- **Recreation name:** Dapper. App folder `apps/dapper`, package
  `@free-react-templates/dapper`.
- **Design approach:** light theme with gold accents; hero = seeded picsum
  photo + headline; about split with bordered photo; services with lucide
  icons; catalogue as tabbed style list; team cards with initials avatars;
  pricing cards with item lists and highlighted middle card; blog cards with
  seeded photos; newsletter input in footer; all images picsum-seeded
  (`picsum.photos/seed/dapper-N/w/h`); Google Fonts via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT duplicate
  components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [x] Write `openspec/specs/template-dapper/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/dapper` (copy `apps/aurora`; rename package to
      `@free-react-templates/dapper`).
- [ ] TDD: tests first for Navbar, Hero, About, Services, Team,
      Testimonials, Pricing, BlogSection, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.

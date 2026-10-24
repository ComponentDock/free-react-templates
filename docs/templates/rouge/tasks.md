# Rouge (Colorlib Diva) — Tasks & Design Notes

> **SHIPPED** — this prep's design shipped as `apps/rouge`
> (<https://rouge.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

> Prep artifacts prepared on `main` while the Cove PR awaits review.
> Implementation ships later on `feat/template-rouge`.

## Design notes

- **Original:** ColorLib "Diva" — free beauty salon website template
  (source: https://colorlib.com/wp/template/diva/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/diva/`
  (HTTP 200, 14.8KB) + stylesheet `css/style.css` (26.8KB). Full rendered DOM
  extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** transparent header (Rouge + Home/About
  Us/Services/News/Contact) → hero slider (2 photo slides, "Be bold.Be
  beautiful." + sb-big / sb-line CTAs) → intro band (photo bg, "Why Choose
  Us?" + lead copy + counters +3500 / 12 / +175 / 56K) → services (photo bg,
  white text, "Our Services" + 6 icon cards: Hair Dressing, Zen Massage,
  Manicure & Pedicure, Make Up, Tanning Bed, Spa Treatments) → testimonials
  (photo bg, "Client Testimonials" + slider, author Maria Parker) → brands
  (brand-logo carousel row) → footer (photo bg: about widget + Our Services
  links + contact widget + "Make an appointment" form + copyright).
- **Design tokens:** brand hot pink **#e22b63**; `site-btn` white text /
  padding 12px 30px / min-width 145px, `sb-line` transparent pink text,
  `sb-dark` black fill; headings + body **Futura LT Bold** (commercial —
  substitute Google Font **Jost** + Montserrat/Open Sans fallback); all
  sections photo-backed (`set-bg`) with white text; dark `#4a4a4a`/`#1e1e1e`
  text accents.
- **Recreation name:** Rouge. App folder `apps/rouge`, package
  `@free-react-templates/rouge`.
- **Design approach:** dark theme with hot-pink accents; hero = seeded
  picsum photo + headline + primary/outline CTAs; intro split with stat
  counters; services with lucide icons; testimonials with initials avatar;
  brands row recreated as styled text marks; footer with appointment form;
  all images picsum-seeded (`picsum.photos/seed/rouge-N/w/h`); Google Fonts
  via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [x] Write `openspec/specs/template-diva/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/rouge` (copy `apps/aurora`; rename package to
      `@free-react-templates/rouge`).
- [ ] TDD: tests first for Navbar, Hero, Intro (stats), Services,
      Testimonials, Footer (appointment form), App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/rouge/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/rouge/public/CNAME` = `rouge.free.componentdock.com`
  and the package `homepage` = `https://rouge.free.componentdock.com`.

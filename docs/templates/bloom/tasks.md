# Bloom (ColorLib Pretty) — Tasks & Design Notes

> **SHIPPED** — this prep's design shipped as `apps/bloom`
> (<https://bloom.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

> Prep artifacts prepared on `main` while the Cove PR awaits review.
> Implementation ships later on `feat/template-bloom`.

## Design notes

- **Original:** ColorLib "Pretty" — free beauty salon website template
  (source: https://colorlib.com/wp/template/pretty/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/pretty/`
  (HTTP 200, 33.8KB) + stylesheet `css/style.css` (65.3KB). Full rendered
  DOM extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** navbar (Pretty + Home/About/Services/Work/
  Blog/Contact) → hero slider (Beauty Salon / Skin & Beauty Care / Makeup
  Pro / Hair Style) → about ("Skin & Beauty Care" + copy) → team (bg-light,
  "Our Beauty Experts": Mellisa Smith, Marie Mush, Ana Jacobson, Ivan
  Dorchsner) → discount band ("Save up to 25% Off", Student Discount) →
  work ("Our Work": Lips Makeover, Hair Style, Makeup) → pricing (bg-light,
  "Beauty Pricing": Basic, Standard, Premium, Platinum) → counter band →
  blog ("Recent from blog": "Skin Care for Teen Skin") → appointment form →
  footer (About Us + Recent Blog + Address/Phone/Opening Hours/Appointments
  - "Spa Center" + "Have a Questions?" + social).
- **Design tokens:** brand hot pink **#fa5bdd** + sky blue **#78d5ef**;
  light bgs `#f8f9fa`/white; headings **Montserrat** + body **Work Sans**
  via Google Fonts; pink filled rounded uppercase buttons.
- **Recreation name:** Bloom. App folder `apps/bloom`, package
  `@free-react-templates/bloom`.
- **Design approach:** light theme with pink accents; hero = seeded picsum
  photo + headline; about split; team cards with initials avatars; discount
  band; portfolio tiles with seeded photos; pricing tiers; counter stats;
  blog cards with seeded photos; appointment form; footer with
  contact/hours + social links; all images picsum-seeded
  (`picsum.photos/seed/bloom-N/w/h`); Google Fonts via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [x] Write `openspec/specs/template-bloom/spec.md` (Gherkin requirements + scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/bloom` (copy `apps/aurora`; rename package to
      `@free-react-templates/bloom`).
- [ ] TDD: tests first for Navbar, Hero, About, Team, Work, Pricing,
      Blog, Appointment, Footer, App composition; run red.
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
- **Provenance ban.** No file under `apps/bloom/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/bloom/public/CNAME` = `bloom.free.componentdock.com`
  and the package `homepage` = `https://bloom.free.componentdock.com`.

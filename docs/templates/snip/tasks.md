# Snip (ColorLib Hairsalone) — Tasks & Design Notes

> **SHIPPED** — this prep's design shipped as `apps/snip`
> (<https://snip.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

> Prep artifacts prepared on `main` (folder renamed from `hairsalone` on the
> implementer branch: original ColorLib slug → new name Snip).
> Implementation ships on `feat/template-snip`.

## Design notes

- **Original:** ColorLib "Hairsalone" — free barber shop website template
  (source: https://colorlib.com/wp/template/hairsalone/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/hairsalone/`
  (HTTP 200, 27.6KB) + stylesheet `assets/css/style.css` (70.4KB). Full
  rendered DOM extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** navbar (logo + Home/Services/About/Blog/Blog
  Details/Element/Contact) → hero slider ("Good Look Guaranteed" +
  "Experienced and traditional stylish barber shop" + "Book An Appointment" /
  "About Us"; second slide "Connect with your dream style") → about
  (framed photo + copy) → categories ("Our Services" intro) → services
  (3 icon cards: Stylish hair cut, Cut & hair style, Color & hair wash) →
  pricing ("Pricing List": Stylish hair cut $40, Hair color, Wedding style,
  Hair straight) → team ("Expert Team": Marvin Gardens, Tara Zona — Cutting
  Master, social icons) → footer (logo + blurb, Useful Links, Contact us:
  78/A Green lane Kings road NYC-1989 · finlone@gmail.com · +10 (87) 728
  2870, social icons, copyright).
- **Design tokens:** brand hot pink **#FF4495**; navy headings
  **#00044A**/**#140C40**; light bgs **#f9f9ff**, lavender **#f0e9ff**; dark
  navy footer; display headings **Rufina** (Google Font) + **Karla** sans
  body; pink filled uppercase buttons.
- **Recreation name:** Snip (new original name; evokes barber scissors).
  App folder `apps/snip`, package `@free-react-templates/snip`.
- **Design approach:** light theme with pink accents; hero = seeded picsum
  photo slider (2 slides, next/prev controls); about split with framed
  photo; services with lucide icons (Scissors, Sparkles, Palette); pricing
  as priced rows; team cards with initials avatars + social icons; footer
  with contact details + newsletter-free links; all images picsum-seeded
  (`picsum.photos/seed/snip-N/w/h`); Google Fonts via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/mane` (hair salon landing with
  Navbar/Hero/Services/Team/Footer structure + BrandIcon socials) — closest
  existing multi-section salon app; add Pricing from mane's Pricing.

## Tasks

- [x] Write `openspec/specs/template-snip/spec.md` (Gherkin requirements + scenarios + replication findings) — prep on main (as `template-hairsalone`), renamed on the implementer branch.
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/snip` (copy `apps/mane`; rename package to
      `@free-react-templates/snip`).
- [ ] TDD: tests first for Navbar, Hero (slider), About, Services, Pricing,
      Team, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `bash scripts/verify-app.sh snip` + `npm run spec:validate`.
- [ ] PR: `feat: Snip — Barber Shop template (ColorLib Hairsalone)`; merge
      immediately.
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
- **Provenance ban.** No file under `apps/snip/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/snip/public/CNAME` = `snip.free.componentdock.com`
  and the package `homepage` = `https://snip.free.componentdock.com`.

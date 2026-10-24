# Haute (ColorLib Instylr) — Tasks & Design Notes

> **SHIPPED** — this prep's design shipped as `apps/haute`
> (<https://haute.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

> Prep artifacts prepared on `main` by the prep stream (as Instylr), renamed
> to Haute on claim: the ColorLib source name must never be reused.

## Design notes

- **Original:** ColorLib "Instylr" — free fashion website template
  (source: https://colorlib.com/wp/template/instylr/). Recreated under the
  NEW name **Haute**.
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/instylr/`
  (HTTP 200, 13.3KB) + stylesheet `css/style.css` (28.1KB). Full rendered
  DOM extracted; structure below is from the DOM + CSS tokens + screenshot.
- **Structure observed (1:1):** dark header (`#262626`, InStyle-style logo +
  "Fashion Forward" tagline + Home/the Brand/Portfolio/Shop/Blog/Contact +
  social icons) → hero slider (full-screen photos, "Style is forever" +
  outlined white "Read More" + dots) → intro split (image + pink label +
  quote + black-outlined "Read More") → portfolio grid ("See More" hover
  tiles) → blog ("Recent Posts": Paris Fashion Week, About Our Fashion App,
  Simple Blog Post + date badge + tags) → white footer (About + social,
  Recent Posts, Useful Links, Contact + copyright).
- **Design tokens:** brand hot pink **#ff006c** (logo span, nav hover, tags,
  dates, social hovers); header **#262626**; headings **#081624**; white
  sections; white footer; Helvetica Neue family (recreated with Poppins +
  Roboto via Google Fonts); outlined buttons (`site-btn` white border on
  hero, `sb-dark` black border in intro).
- **Recreation name:** Haute. App folder `apps/haute`, package
  `@free-react-templates/haute`.
- **Design approach:** hero = seeded picsum fashion photo slider (3 slides,
  "Style is forever" headline, dots + prev/next); intro split with quote;
  portfolio grid (6 seeded photo tiles, hover overlay + "See More"); blog
  cards (seeded photos, "20 Jan" date badge, pink tags, navy titles);
  footer with link columns + inline SVG social icons (pinterest, facebook,
  twitter, dribbble, behance); all images picsum-seeded
  (`picsum.photos/seed/haute-N/w/h`); Google Fonts via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/allure` (recent fashion app with
  Navbar/Hero/Intro/Footer structure, BrandIcon inline SVG socials) — the
  closest existing multi-section app.

## Tasks

- [x] Create branch `feat/template-haute` from latest origin/main.
- [x] Mark Instylr `[~]` in TEMPLATES.md on the branch (both dup rows).
- [x] Rename prep: `openspec/specs/template-instylr` → `template-haute`,
      `docs/templates/instylr` → `docs/templates/haute`; refine spec with
      confirmed replication findings.
- [ ] Scaffold `apps/haute` (copy `apps/allure`, rename package to
      `@free-react-templates/haute`, keep `injectUiSource()`).
- [ ] Write tests first (TDD, red phase): Navbar, hero slider, intro,
      portfolio, blog, footer + dark mode + mobile menu.
- [ ] Implement components using `packages/ui` + `cn()`, picsum-seeded
      images, lucide icons, inline SVG brand icons, Google Fonts.
- [ ] Run verification gate: `scripts/verify-app.sh haute` (typecheck →
      lint → knip → fallow → test:coverage 100% → build) + `npm run
    spec:validate`.
- [ ] Self-review (docs/self-review.md), commit conventionally, push branch,
      open PR to main, merge immediately.
- [ ] Bookkeeping on main: mark both Instylr rows `[x]` + surge URL, set
      homepage, `npm run readme:status`, push.

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/haute/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/haute/public/CNAME` = `haute.free.componentdock.com`
  and the package `homepage` = `https://haute.free.componentdock.com`.

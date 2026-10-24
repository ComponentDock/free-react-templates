# Lagoon (Colorlib Error 404 17) — Tasks & Design Notes

> **SHIPPED** — this prep's design shipped as `apps/lagoon`
> (<https://lagoon.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

> Prep artifacts prepared on `main` while the Scarlet PR awaits review.
> Implementation ships later on `feat/template-lagoon`.

## Design notes

- **Original:** ColorLib "Colorlib Error 404 V17" — free error page template
  (source: https://colorlib.com/wp/template/colorlib-error-404-17/).
- **Live demo DOM analyzed:** `https://colorlib.com/etc/404/colorlib-error-404-17/`
  (HTTP 200) + stylesheet `css/style.css`. The official preview portal
  (`https://preview.colorlib.com/theme/colorlib-error-404-17/` and variants)
  returns 404 — the ColorLib template page's "Preview" target hosts the
  rendered page and is the reference.
- **Structure observed (1:1):** full-viewport `#notfound` container →
  centered `.notfound` block (max-width 710px, padding-left 190px): 150×150px
  teal `:(` emoticon (`<h1>` Passion One 900, 150px, letter-spacing 15.5px,
  `#00b5c3`) on the left; `<h2>` "404 - Page not found" (Raleway 700, 28px,
  uppercase, `#292929`); `<p>` "The page you are looking for might have been
  removed had its name changed or is temporarily unavailable." (Raleway 400,
  14px, `#333`); "home page" white pill button (radius 40px, shadow
  `0 4px 15px -5px rgba(0,0,0,.3)`, hover: white on teal).
- **Design tokens:** brand teal **#00b5c3**, near-black **#292929**, **#333**,
  white; fonts **Passion One** (display) + **Raleway** (body) via Google
  Fonts; pill button with soft shadow.
- **Recreation name:** Lagoon (evokes the teal water tone). App folder
  `apps/lagoon`, package `@free-react-templates/lagoon`.
- **Design approach:** light page; `:(` recreated as an inline teal text
  display in Passion One (with dark-mode-friendly treatment); "home page" pill
  linking to `/` with teal hover; repo-standard Navbar (dark-mode toggle) and
  Footer chrome; social icons (GitHub, X, LinkedIn) inline SVG.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation on `apps/scarlet` or `apps/flick` (existing 404 apps
  with Navbar/ErrorSection/Footer/SocialLinks structure to adapt).

## Tasks

- [x] Write `openspec/specs/template-lagoon/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep).
- [x] Validate spec: `npm run spec:validate`.
- [x] Create `apps/lagoon` (copy `apps/scarlet`; rename package to
      `@free-react-templates/lagoon`).
- [x] TDD: tests first for Navbar, ErrorSection (teal emoticon, 404 content,
      home page pill, hover state), Footer, App composition; run red.
- [x] Implement components (green) at 100% coverage.
- [x] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [x] Update README structure + `docs/ai-context.md` app list.

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/lagoon/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/lagoon/public/CNAME` = `lagoon.free.componentdock.com`
  and the package `homepage` = `https://lagoon.free.componentdock.com`.

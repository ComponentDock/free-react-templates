# Locale — task outline

Recreation of ColorLib **Gricklo** (https://colorlib.com/wp/template/gricklo/)
as `apps/locale`. One template, one app folder; every step below leaves the
per-app gate green.

## Reference and spec

- [x] Recover the design record (this repo's earlier recreation, `073c05c69`) —
      live preview and screenshot unreachable this run (Cloudflare 1106 IP ban;
      no Wayback snapshot) — and record the fallback in the spec.
- [x] `openspec/specs/template-locale/spec.md` — requirements with SHALL +
      scenario per behaviour.
- [x] Design notes with the token table (`docs/templates/locale/design-notes.md`).

## Scaffold

- [x] `apps/locale` with `package.json` (`@free-react-templates/locale`),
      `index.html`, `tsconfig.json`, `vitest.config.ts`.
- [x] `vite.config.ts` keeps the inline `injectUiSource()` helper and
      `plugins: [react(), injectUiSource(), tailwindcss()]`.
- [x] `public/CNAME` = `locale.free.componentdock.com`, `"homepage"` matching,
      `public/favicon.svg` branded for Locale.
- [x] `npm install` at the repo root so the lockfile registers the workspace;
      `grep -c "free-react-templates/locale" package-lock.json` ≥ 1.

## Tests first, then implementation

- [x] `App.test.tsx` — title, section order, Component Dock credit, provenance
      guard over every shipped app file.
- [x] `Navbar.test.tsx` — wide links, scrolled state, folded panel open/Escape
      (and a non-Escape key leaving it open), backdrop and close control.
- [x] `Hero.test.tsx` — copy, both search fields, submit cancelled, pill
      switching.
- [x] `Destinations.test.tsx` — six cities, Explore links, ring/veil tokens.
- [x] `Interests.test.tsx` — side cards, tall centre card with description + CTA.
- [x] `Listings.test.tsx` — four-card window, next, previous wrap, dot jump.
- [x] `CtaBand.test.tsx`, `HowItWorks.test.tsx`, `Testimonials.test.tsx` —
      content and slider wrap.
- [x] `Footer.test.tsx` — malformed address error, valid address success, error
      cleared while typing, single external Component Dock link.
- [x] Implement the components until the suite is green.

## Verification

- [x] `bash scripts/verify-app.sh locale` — typecheck + lint + 100% coverage
      (lines/functions/branches/statements) + production build.
- [x] `npx openspec validate template-locale --type spec` prints "is valid".
- [x] Build artefact check — `grep -c inline-flex apps/locale/dist/assets/*.css`
      ≥ 1 (proves the injected `@source` reached `packages/ui`).

## Ship

- [x] PR `feat/template-locale` → `main`, merged immediately.
- [x] Bookkeeping on `main`: both checklist rows for the design re-pointed at
      `locale` and marked done, `"homepage"` set, `npm run readme:status`
      regenerated `README.md`.

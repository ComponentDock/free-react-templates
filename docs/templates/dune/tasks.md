# Dune (Colorlib Error 404 2) — Tasks & Design Notes

> **SHIPPED** — this prep's design shipped as `apps/dune`
> (<https://dune.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

<!-- brief-file-consensus: superseded design -->
> **SUPERSEDED DESIGN** — this file was written for ColorLib `colorlib-error-404-2` in an
> earlier prep of `dune`. The spec, the TEMPLATES.md row and the app are
> ColorLib `safario`: treat the section list below as history where the two
> disagree (`openspec/specs/template-dune/spec.md` is authoritative).
> **Source slug:** `safario`


> Prep artifacts prepared on `main` while the Drift PR awaits review.
> Implementation ships later on `feat/template-dune`.

## Design notes

- **Original:** ColorLib "Colorlib Error 404 V2" — free **minimal boxy** error
  page template, released 2025, license CC BY 3.0
  (source: https://colorlib.com/wp/template/colorlib-error-404-2/).
- **Official description:** "For everyone who likes to keep things minimal on
  their websites, this free boxy error page template will save the day. The
  canvas features a big 404 sign with additional text and a search bar to help
  prevent the user from leaving early."
- **Layout observed from the description/preview:** minimal, boxy, centered
  error page with a big "404" sign, additional text, and a search bar; simple
  responsive layout.
- **Recreation name:** Dune (evokes minimal, earthy, clean). App folder
  `apps/dune`, package `@free-react-templates/dune`.
- **Design approach:** centered large "404" + "Page not found" + short message
  + "Back to home" button + a search bar (labeled input + submit button;
  form submits the query to a search results URL, e.g. a Google-style
  `?q=` endpoint, so the test can assert the submitted URL contains the
  encoded query); boxy/minimal styling; dark-mode support via
  `@custom-variant dark`.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation on `apps/drift` (simplest existing 404 app) — same
  Navbar/ErrorSection/Footer structure, with the search bar added to the error
  section.

## Tasks

- [ ] Write `openspec/specs/template-dune/spec.md` (Gherkin requirements +
      scenarios) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/dune` (copy `apps/drift`; rename package to
      `@free-react-templates/dune`).
- [ ] TDD: tests first for Navbar, ErrorSection (404 content, home button,
      search bar with submit behavior), Footer, App composition; run red.
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
- **Provenance ban.** No file under `apps/dune/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dune/public/CNAME` = `dune.free.componentdock.com`
  and the package `homepage` = `https://dune.free.componentdock.com`.

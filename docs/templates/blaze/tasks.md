# Blaze (Colorlib Error 404 13) — Tasks & Design Notes

> Prep artifacts prepared on `main`; refined during implementation on
> `feat/template-blaze` with live-demo replication findings.

## Design notes (replication findings — live demo analyzed)

- **Original:** ColorLib "Colorlib Error 404 V13" — free **bold** error page
  template, released 2025, license CC BY 3.0
  (source: https://colorlib.com/wp/template/colorlib-error-404-13/).
- **Official description:** "The best free bold error page template that
  quickly integrates into different projects and guarantees complete
  responsiveness." / "Grab this free bold error page template now and enjoy
  the smooth integration into your website, blog or online store. Along with
  the icons and main notification, you can also add extra text and take users
  back to the front page with the home button."
- **Live demo DOM analyzed:** `https://colorlib.com/etc/404/colorlib-error-404-13/`
  (HTTP 200; `https://preview.colorlib.com/theme/colorlib-error-404-13/` and
  variants return 404 — the ColorLib "Preview" button targets the
  `/etc/404/` host). Structure:
  1. Full-viewport `#notfound` container; `.notfound` centered (max-width
     520px).
  2. `.notfound-404`: 170×170px red (#e01818) rounded square (7px radius)
     with double-ring inset shadow (white ring) and a giant white "!".
  3. `h2` "Error 404" (uppercase, display font) beside the block.
  4. `p` — "The page you are looking for might have been removed had its name
     changed or is temporarily unavailable." + red "Back to homepage" link.
  - Mobile: block stacks above the headline (42px), paddings collapse.
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#e01818**; text: **#222**.
  - Fonts: **"Chango"** (display, cursive) + **"Montserrat"** (body) via
    Google Fonts `<link>`.
  - Shape: 7px radius; ring via `box-shadow: 0 0 0 10px #e01818 inset,
0 0 0 20px #fff inset` → Tailwind ring/inset utilities.
- **Recreation name:** Blaze (bold and striking — matches the bold-design
  theme). App folder `apps/blaze`, package `@free-react-templates/blaze`.
- **Recreation approach:** repo-standard Navbar (dark-mode toggle) + Footer
  chrome; error section faithful to the live DOM (exclamation block with
  accessible label, "Error 404" heading, explanatory copy, red
  "Back to homepage" link); `--color-brand: #e01818` + display font in
  `@theme`; no assets copied.
- Reuse `packages/ui` (Button, cn) — do NOT duplicate components.
- Base implementation on `apps/tears` (most recent simple 404 app) — same
  Navbar/ErrorSection/Footer structure to adapt.

## Tasks

- [x] Write `openspec/specs/template-blaze/spec.md` (Gherkin requirements +
      scenarios) — prepared on main, refined with live-demo findings on the
      branch.
- [x] Validate spec: `npm run spec:validate`.
- [x] Create `apps/blaze` (copy `apps/tears`; rename package to
      `@free-react-templates/blaze`).
- [x] TDD: tests first for Navbar, ErrorSection (exclamation illustration,
      bold "Error 404" content, message, back-home link), Footer, App
      composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-blaze`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.

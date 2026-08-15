# Quadly (ColorLib Checkbox 11) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-quadly`.

## Design notes (replication findings)

- **Original:** ColorLib "Checkbox 11" — eleventh of the "Bootstrap Checkboxes
  (20)" series (source: https://colorlib.com/wp/template/checkbox-11/).
  TEMPLATES.md line 741 — mark that line `[x]` when done (single row, no
  duplicate rows). **NUMBERING QUIRK:** entries 01–10 map to
  `/theme/bootstrap/checkbox-01/…checkbox-10/` (custom designs branded
  "Checkbox #01"–"#10": Tickbox's 6 colored checkboxes, Taskly's
  strikethrough checklist, Moodly's smiley mood-toggle, …). Entries 11–20 map
  to `/theme/bootstrap/checkbox-11/…checkbox-20/` and serve a SEPARATE
  codrops-sourced sub-series branded "BS4 Custom Checkbox #1"–"#9"
  (checkbox-11 → "#1", checkbox-12 → "#2", … checkbox-19 → "#9", checkbox-20
  → duplicate "#9"). So entry "Checkbox 11" = demo branded **"BS4 Custom
  Checkbox #1"** — the plain 4-state DEFAULT BS4 custom checkbox group. Do
  NOT reuse the Tickbox/Taskly/Moodly app blindly; verify the live DOM for
  each item.
- **Sibling mapping:** Checkbox 01→Tickbox, 02→Picks, 03→Ticktag, 04→Checkly,
  05→Tickwell, 06→Toggly, 07→Switchly, 08→Soluna, 09→Taskly, 10→Moodly.
  Checkbox 11 → **Quadly** ("quad" for the four checkbox states + the
  series' "-ly" suffix; `quad` is taken by another template — `quadly` is
  free, verified 2026-08-15).
- **Preview URL caveat:** `https://preview.colorlib.com/theme/checkbox-11/`
  is **404** — these demos live under the Bootstrap mega-theme. Use
  `https://preview.colorlib.com/theme/bootstrap/checkbox-11/` (HTTP 200,
  17 KB HTML, verified 2026-08-15; the ColorLib template page links this
  exact sub-path). Page stylesheet:
  `https://preview.colorlib.com/theme/bootstrap/checkbox-11/css/style.css`
  (771 bytes — page-specific: body `#fff`, Roboto stack, `.content` 7rem
  padding, `h2` 20px). Checkbox widget styling comes from Bootstrap 4's
  `css/bootstrap.min.css` (216 KB — `.custom-control`/`.custom-checkbox`
  classes, fully extracted for tokens). libs: bootstrap 4, jquery, popper.
  Google Font **Roboto** (this sub-series page loads its own small
  stylesheet — NOT Poppins). `js/main.js` is an unused accordion helper —
  nothing to replicate. Cross-checked with the TEMPLATES.md screenshot
  (`checkbox-11.jpg`, 1200×972, browser-viewed 2026-08-15) — screenshot
  matches the live DOM exactly (heading + four 4-state checkboxes; the
  screenshot's URL bar shows the demo's codrops origin,
  `ui-preview.codrops.com`).
- **Visual design (DOM + CSS tokens + screenshot):** minimal demo page on
  white **`#fff`** (renders near-white in the screenshot). Centered narrow
  column (`div.content` 7rem padding → container → `row.justify-content-center`
  → `col-lg-3` ≈25% on lg+, full-width below) with:
  1. `h2.my-5.text-left` — **"BS4 Custom Checkbox #1"** (20px, dark, 3rem
     top+bottom margins; keep this heading verbatim per fidelity, like the
     siblings kept "Checkbox #NN").
  2. Four stacked `custom-control custom-checkbox` rows (16px rounded-square
     indicator + label; min-height 1.5rem, no gaps):
     - **First checkbox** (`id=checked`, `checked`) — solid `#007bff` +
       white checkmark
     - **Second checkbox** (`id=unchecked`) — white + 1px `#adb5bd` border
     - **Disabled** (`id=disabled`, `disabled`) — `#e9ecef` fill, label
       `#6c757d`
     - **Disabled & checked** (`id=disabled-checked`, `disabled`+`checked`)
       — `rgba(0,123,255,0.5)` fill + faint white check, label `#6c757d`
       No navbar, no footer, no images — pure form-component typography.
- **Design tokens (from bootstrap.min.css):** checked `#007bff`; unchecked
  border `#adb5bd` 1px solid; disabled fill `#e9ecef`; disabled label
  `#6c757d`; disabled+checked fill `rgba(0,123,255,0.5)`; focus ring
  `rgba(0,123,255,0.25)` (0 0 0 0.2rem) + `#80bdff` unchecked focus border;
  active `#b3d7ff`; indicator 1rem×1rem (16px) radius 0.25rem (4px);
  transition 0.15s ease-in-out (suppressed under `prefers-reduced-motion`);
  rows min-height 1.5rem / padding-left 1.5rem / label margin-bottom 0;
  section padding 7rem 0; heading 20px.
- **Checkmark:** BS4 uses a white SVG path at 50% of the indicator (~8px).
  Reproduce with lucide-react `Check` (~10–12px, white, strokeWidth ~3)
  centered — NOT font-awesome. Verify the export with the typeof probe.
- **No images** — no picsum seeds.

## Task outline (implementer)

1. Scaffold `apps/quadly` (copy the simplest existing app, e.g. `apps/moodly`
   or `apps/tickbox` — closest sibling; rename package to
   `@free-react-templates/quadly`; `public/CNAME` = `quadly.free.componentdock.com`;
   `homepage` = `https://quadly.free.componentdock.com`).
2. Spec-first: confirm `openspec/specs/template-quadly/spec.md` scenarios
   (already on main); add/refine only if the live DOM proves something
   different.
3. Tailwind tokens in `@theme` (see Design tokens above) — page `#fff`,
   `#007bff` primary, `#adb5bd` border, `#e9ecef`/`#6c757d` disabled,
   `rgba(0,123,255,0.5)` disabled-checked, focus ring + `#80bdff`,
   `#b3d7ff` active.
4. Roboto via Google Fonts `<link>` in `index.html`; title "Quadly —
   Checkbox States" (or similar).
5. Component: one section → centered column → heading + 4 checkbox rows.
   Model rows 1–2 as controlled checkbox state (`checked` default true for
   row 1), rows 3–4 static `disabled`. Use lucide `Check` for the
   checkmark. Focus-visible ring per repo accessibility convention.
6. Footer: "More templates at Component Dock" →
   https://www.componentdock.com/ (small muted text).
7. TDD: tests → implementation → 100% coverage (rows, states, toggles,
   disabled-inertness, focus ring, reduced motion, footer).
8. Verify: `scripts/verify-app.sh quadly` (FAST_MODE per-app gate) + `npm run
spec:validate`.
9. PR `feat/template-quadly` → squash-merge to main; then bookkeeping:
   TEMPLATES.md line 741 `[~]`→`[x]` + surge URL
   (`quadly.free.componentdock.com`) + `npm run readme:status`; push.
10. Do NOT reference ColorLib in app files (provenance only in spec/
    TEMPLATES.md/PR); footer MUST link componentdock.com.

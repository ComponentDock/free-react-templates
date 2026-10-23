# Platter — Design Notes

Reference: **Colorlib Wizard 7** — `https://colorlib.com/wp/template/colorlib-wizard-7/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-wizard-7/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-7.jpg  
Shipped: https://platter.free.componentdock.com

Recreation of ColorLib "Colorlib Wizard 7" (https://colorlib.com/wp/template/colorlib-wizard-7/) as a React 19 + Tailwind CSS 4 + TypeScript single-page restaurant reservation wizard. The original is a 3-step booking form with a split layout: food image on the left, dark form panel on the right.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Dancing Script:wght@400;600**

## Design tokens (`apps/platter/src/index.css` `@theme`)

| token                 | value     | role        |
| --------------------- | --------- | ----------- |
| `--color-brand-50`    | `#faf5f0` | brand 50    |
| `--color-brand-100`   | `#f0e4d5` | brand 100   |
| `--color-brand-200`   | `#e2cab0` | brand 200   |
| `--color-brand-300`   | `#d4b08b` | brand 300   |
| `--color-brand-400`   | `#c9956b` | brand 400   |
| `--color-brand-500`   | `#b87a4a` | brand 500   |
| `--color-brand-600`   | `#9a6340` | brand 600   |
| `--color-brand-700`   | `#7c4e34` | brand 700   |
| `--color-brand-800`   | `#5e3a28` | brand 800   |
| `--color-brand-900`   | `#40261c` | brand 900   |
| `--color-brand-950`   | `#221310` | brand 950   |
| `--color-surface-50`  | `#f8f8fa` | surface 50  |
| `--color-surface-100` | `#f0f0f3` | surface 100 |
| `--color-surface-200` | `#e0e0e6` | surface 200 |
| `--color-surface-300` | `#c8c8d1` | surface 300 |
| `--color-surface-400` | `#a0a0ad` | surface 400 |
| `--color-surface-500` | `#787889` | surface 500 |
| `--color-surface-600` | `#5a5a6b` | surface 600 |
| `--color-surface-700` | `#42424f` | surface 700 |
| `--color-surface-800` | `#2c2c38` | surface 800 |
| `--color-surface-900` | `#1a1a2e` | surface 900 |
| `--color-surface-950` | `#0f0f1e` | surface 950 |

## Document order

| #   | component           | spec requirement              | notes                   |
| --- | ------------------- | ----------------------------- | ----------------------- |
| 1   | `Navbar`            | —                             | no dedicated spec block |
| 2   | `ReservationWizard` | Three-step reservation wizard | see fidelity note below |
| 3   | `Footer`            | Mandatory footer              | see fidelity note below |

## Section-by-section fidelity

Bands marked _anchors only_ have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`

_anchors only_ — Platter

### `ReservationWizard`

The template SHALL implement a 3-step wizard form for restaurant table booking.

### `Footer`

The template SHALL include a footer linking to Component Dock.

## Deltas from the reference

- Photographs are deterministic placeholders (`picsum.photos/seed/…`); no source asset is copied.
- Icon glyphs come from `lucide-react`, not the source's icon font.
- Copy is paraphrased to the same kind of content (headline + subtext + CTA, card title + blurb + link).
- The source's credit bar is replaced by the Component Dock credit (see delivery contract).

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/platter/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/platter/public/CNAME` = `platter.free.componentdock.com`
  and the package `homepage` = `https://platter.free.componentdock.com`.

## Reference tokens (measured 2026-10-23)

Evidence: `https://preview.colorlib.com/theme/colorlib-wizard-7/` returns **HTTP 404** (element demo). Reference recovered from `https://preview.colorlib.com/downloads/free/colorlib-wizard-7.zip` -> `colorlib-wizard-7/css/style.css` (research only; no asset copied).

- Hex census: `#cdaa7c` 4, `#e9e0cf` 1, `#524b42` 1, `#666` 12, `#333` 1, `#fff` 7 (count = rules containing the literal).
- Typefaces: Headings: `Raleway` Semibold/Bold; Script accent: `Satisfy`.
- Radii: essentially none (`50%` decorative only) — sharp panels and inputs.
- Section order (shipped): `Navbar -> ReservationWizard -> Footer`.

### Deltas measured against the shipped app

- Typefaces differ: the app loads **Playfair Display + Dancing Script + Inter**; the reference uses **Raleway + Satisfy**.
- The app's tan scale is anchored on `--color-brand-500: #b87a4a` (`#b87a4a` occurs 0 times in the reference); the reference accent is `#cdaa7c` and its panel is `#524b42` (app uses `#221310`).

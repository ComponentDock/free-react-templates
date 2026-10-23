# Entrywell — Design Notes

Reference: **Modal 09** — `https://colorlib.com/wp/template/modal-09/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/modal-09/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/modal-09.jpg  
Shipped: https://entrywell.free.componentdock.com

A single-page React template featuring a centered launch button that opens a split-layout sign-in/sign-up modal. The modal has a background image on the left half and a dark form panel on the right with Sign In / Sign Up tab navigation. The design uses a golden/amber brand color (#e3b04b) with a Roboto font family.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto:wght@300;400;700**

## Design tokens (`apps/entrywell/src/index.css` `@theme`)

| token                        | value                      | role               |
| ---------------------------- | -------------------------- | ------------------ |
| `--color-brand`              | `#e3b04b`                  | brand              |
| `--color-brand-hover`        | `transparent`              | brand hover        |
| `--color-panel-dark`         | `#2b2b28`                  | panel dark         |
| `--color-panel-dark-lighter` | `rgba(255, 255, 255, 0.1)` | panel dark lighter |
| `--color-input-text`         | `rgba(255, 255, 255, 0.7)` | input text         |
| `--color-input-placeholder`  | `rgba(255, 255, 255, 0.2)` | input placeholder  |

## Document order

| #   | component       | spec requirement               | notes                   |
| --- | --------------- | ------------------------------ | ----------------------- |
| 1   | `LaunchSection` | Page layout and launch button  | see fidelity note below |
| 2   | `Footer`        | Footer links to Component Dock | see fidelity note below |
| 3   | `SignModal`     | Modal opens with split layout  | see fidelity note below |

## Section-by-section fidelity

### `LaunchSection`

The template SHALL render a centered hero section with the template name "Entrywell" and a "Launch Modal" button.

### `Footer`

The footer SHALL link to https://www.componentdock.com/.

### `SignModal`

The modal SHALL display a split layout — a background image on the left half and a dark form panel on the right half with tab navigation.

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
- **Provenance ban.** No file under `apps/entrywell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/entrywell/public/CNAME` = `entrywell.free.componentdock.com`
  and the package `homepage` = `https://entrywell.free.componentdock.com`.

## Reference tokens (measured 2026-10-23)

Evidence: `https://preview.colorlib.com/theme/modal-09/` returns **HTTP 404** (element demo). Reference recovered from `https://preview.colorlib.com/downloads/free/modal-09.zip` -> `modal-09/css/style.css` (research only; no asset copied).

- Hex census: `#e3b04b` 9, `#2b2b28` 1, `#6c757d` 6, `#dee2e6` 5, `#495057` 4 (count = rules containing the literal).
- Typefaces: All UI: `Roboto`; Labels: uppercase, letter-spaced, white on the dark panel.
- Radii: `0` (3), `0.25rem` (2), `0.3rem` (1), `5px` (1) — crisp, barely rounded.
- Section order (shipped): `LaunchSection -> SignModal -> Footer`.

### Deltas measured against the shipped app

- None measured.

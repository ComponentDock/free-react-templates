# Codex — Design Notes

Reference: **Colorlib Wizard 29** — `https://colorlib.com/wp/template/colorlib-wizard-29/`  
Live preview: `https://colorlib.com/etc/bwiz/colorlib-wizard-29/index.html`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-29.jpg  
Shipped: https://codex.free.componentdock.com

Recreation of ColorLib Wizard 29 — a free registration wizard template with a 4-step form wizard. The original is a Bootstrap-based page with a full-page background image, a white card containing a "Register Wizard" heading, and a horizontal tab-style step indicator for username, email, password, and confirm-password steps.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato:wght@400;700**

## Design tokens (`apps/codex/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-accent` | `#3155cc` | brand accent |
| `--color-brand-accent-hover` | `#1d41b8` | brand accent hover |
| `--color-brand-circle-active` | `#3d6aff` | brand circle active |
| `--color-brand-tab-inactive` | `#999999` | brand tab inactive |
| `--color-brand-circle-inactive` | `#666666` | brand circle inactive |
| `--color-brand-input-text` | `#666666` | brand input text |
| `--color-brand-input-placeholder` | `#999999` | brand input placeholder |
| `--color-brand-input-border` | `#e5e5e5` | brand input border |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Footer` | Footer with Component Dock Branding | see fidelity note below |
| 2 | `StepIndicator` | Step Indicator | see fidelity note below |
| 3 | `StepInput` | Step 1 — Username | see fidelity note below |

## Section-by-section fidelity

### `Footer`
The wizard SHALL include a footer that links to Component Dock.

### `StepIndicator`
The wizard SHALL display 4 horizontal pill-shaped step tabs, each with a circular step number and a text label.

### `StepInput`
The wizard SHALL display a username text input with a "next step" button flush-right inside the input field.

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
- **Provenance ban.** No file under `apps/codex/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/codex/public/CNAME` = `codex.free.componentdock.com`
  and the package `homepage` = `https://codex.free.componentdock.com`.

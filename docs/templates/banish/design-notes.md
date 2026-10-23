# Banish — Design Notes

Reference: **Colorlib Wizard 10** — `https://colorlib.com/wp/template/colorlib-wizard-10/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-wizard-10/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-10.jpg  
Shipped: https://banish.free.componentdock.com

Banish is a single-page multi-step registration FORM WIZARD in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;600**

## Design tokens (`apps/banish/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-page` | `#f5f5f5` | Page: full-viewport photo background (replaced by Tailwind bg utility) |
| `--color-card` | `#ffffff` | Card: white |
| `--color-ink` | `#333333` | Near-black accent: #333 — text, inputs, icons, bar fill, buttons |
| `--color-ink-hover` | `#4d4d4d` | ink hover |
| `--color-track` | `#b7b2ab` | Progress track: #b7b2ab |
| `--color-tile` | `#e5e5e5` | Payment tile border: #e5e5e5 |
| `--color-drop` | `#4192cb` | Select dropdown border: #4192cb |
| `--color-drop-hv` | `#81acee` | Dropdown row hover: #81acee |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Font |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `WizardCard` | Wizard navigation | see fidelity note below |
| 2 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `WizardCard`
The system SHALL provide Back/Next (Finish on step 3) navigation that is never blocked, with the step-1 Back button invisible but layout-reserved.

### `Footer`
The system SHALL include the required attribution footer.

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
- **Provenance ban.** No file under `apps/banish/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/banish/public/CNAME` = `banish.free.componentdock.com`
  and the package `homepage` = `https://banish.free.componentdock.com`.

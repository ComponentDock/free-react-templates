# Abjure — Design Notes

Reference: **Colorlib Wizard 12** — `https://colorlib.com/wp/template/colorlib-wizard-12/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-wizard-12/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-12.jpg  
Shipped: https://abjure.free.componentdock.com

Abjure is a single-page five-step SIGN-UP FORM WIZARD in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;500;700**

## Design tokens (`apps/abjure/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-montserrat` | `'Montserrat', sans-serif` | font montserrat |
| `--color-sky` | `#00a7f6` | sky |
| `--color-sky-deep` | `#0184d2` | sky deep |
| `--color-ink` | `#222222` | ink |
| `--color-label-dim` | `#999999` | label dim |
| `--color-line` | `#ebebeb` | line |
| `--color-error` | `#e10000` | error |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `StepField` | Five-step field inventory | see fidelity note below |
| 2 | `NavButtons` | Circular action buttons | see fidelity note below |

## Section-by-section fidelity

### `StepField`
The wizard SHALL have exactly five single-field steps in source order.

### `NavButtons`
The system SHALL render the Prev/Next circular icon buttons, with Prev disabled-but-visible on step 1 and the Next button becoming the Finish action on step 5.

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
- **Provenance ban.** No file under `apps/abjure/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/abjure/public/CNAME` = `abjure.free.componentdock.com`
  and the package `homepage` = `https://abjure.free.componentdock.com`.

# Checkly — Design Notes

Reference: **Checkbox 02** — `https://colorlib.com/wp/template/checkbox-02/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/checkbox-02/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/checkbox-02.jpg  
Shipped: https://checkly.free.componentdock.com

Checkly is a single-page component showcase template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Checkbox 02" checkbox showcase design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/checkly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fef2f2` | primary 50 |
| `--color-primary-100` | `#fee2e2` | primary 100 |
| `--color-primary-200` | `#fecaca` | primary 200 |
| `--color-primary-300` | `#fca5a5` | primary 300 |
| `--color-primary-400` | `#f87171` | primary 400 |
| `--color-primary-500` | `#ef4444` | primary 500 |
| `--color-primary-600` | `#dc2626` | primary 600 |
| `--color-primary-700` | `#b91c1c` | primary 700 |
| `--color-primary-800` | `#991b1b` | primary 800 |
| `--color-primary-900` | `#7f1d1d` | primary 900 |
| `--color-primary-950` | `#450a0a` | primary 950 |
| `--color-coral` | `#f76262` | coral |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `CheckboxShowcase` | Custom checkboxes | see fidelity note below |
| 2 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `CheckboxShowcase`
The system SHALL render 3 custom-styled circular checkboxes.

### `Footer`
The system SHALL render a minimal footer with the site name and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/checkly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/checkly/public/CNAME` = `checkly.free.componentdock.com`
  and the package `homepage` = `https://checkly.free.componentdock.com`.

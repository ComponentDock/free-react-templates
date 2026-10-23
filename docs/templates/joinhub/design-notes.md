# Joinhub — Design Notes

Reference: **Signup Form 16** — `https://colorlib.com/wp/template/signup-form-16/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/signup-form-16/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-16.jpg  
Shipped: https://joinhub.free.componentdock.com

Recreation of ColorLib **Signup Form 16** (`https://colorlib.com/wp/template/signup-form-16/`). Preview: `https://preview.colorlib.com/theme/bootstrap/signup-form-16/`. Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto:wght@300;400;500;700**

## Design tokens (`apps/joinhub/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-purple` | `#6807f9` | brand purple |
| `--color-brand-blue` | `#007bff` | brand blue |
| `--color-brand-blue-dark` | `#0069d9` | brand blue dark |
| `--color-page-bg` | `#ffffff` | page bg |
| `--color-input-border` | `#ced4da` | input border |
| `--color-input-text` | `#495057` | input text |
| `--color-divider` | `#e6e6e6` | divider |
| `--color-or-text` | `#999999` | or text |
| `--color-label-text` | `rgba(0, 0, 0, 0.3)` | label text |
| `--color-checkbox-text` | `rgba(0, 0, 0, 0.4)` | checkbox text |
| `--color-heading` | `#000000` | heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ImagePanel` | Split layout renders two panels | see fidelity note below |
| 2 | `SocialButtons` | Social login buttons | see fidelity note below |
| 3 | `OrDivider` | Or divider | see fidelity note below |
| 4 | `TermsCheckbox` | Terms checkbox | see fidelity note below |
| 5 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `ImagePanel`
The system SHALL render a horizontal split layout with a left image panel (40% width) and a right form panel (60% width) on desktop viewports.

### `SocialButtons`
The form panel SHALL render three circular social login buttons (Google, Facebook, Twitter) as 40px circles with thin borders.

### `OrDivider`
The form panel SHALL render an "or" text divider with horizontal lines below the social buttons.

### `TermsCheckbox`
The form SHALL display a checkbox labeled "I agree all statements in terms of service" that is checked by default.

### `Footer`
The page SHALL include a footer linking to Component Dock.

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
- **Provenance ban.** No file under `apps/joinhub/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/joinhub/public/CNAME` = `joinhub.free.componentdock.com`
  and the package `homepage` = `https://joinhub.free.componentdock.com`.

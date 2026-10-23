# Regwave — Design Notes

Reference: **Colorlib Regform 30** — `https://colorlib.com/wp/template/colorlib-regform-30/`  
Live preview: `https://colorlib.com/etc/regform/colorlib-regform-30/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-30.jpg  
Shipped: https://regwave.free.componentdock.com

Regwave is a membership registration form template with a two-column card layout. The left panel provides informational content and a login action, while the right panel contains a multi-field registration form. The design uses a cyan background with a blue accent brand color, following the Colorlib Reg Form V30 pattern.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700**

## Design tokens (`apps/regwave/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-bg` | `#75e2e9` | Brand palette: cyan background + blue accent from original template. |
| `--color-brand-primary` | `#3786bd` | brand primary |
| `--color-brand-primary-hover` | `#2f73a3` | brand primary hover |
| `--color-brand-focus` | `#53c83c` | brand focus |
| `--color-heading` | `#333` | Text colors. |
| `--color-label` | `#666` | label |
| `--color-input-text` | `#333` | input text |
| `--color-placeholder` | `#999` | placeholder |
| `--color-form-bg` | `#fff` | Form card. |
| `--color-input-border` | `#e5e5e5` | input border |
| `--color-card-shadow` | `rgba(0, 0, 0, 0.15)` | card shadow |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | Fonts: Open Sans (from original template). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `RegistrationCard` | Two-column registration card layout | see fidelity note below |
| 2 | `Footer` | Footer Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `RegistrationCard`
Users SHALL see a centered card with two columns: a left information panel and a right registration form panel.

### `Footer`
The footer SHALL link to Component Dock.

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
- **Provenance ban.** No file under `apps/regwave/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/regwave/public/CNAME` = `regwave.free.componentdock.com`
  and the package `homepage` = `https://regwave.free.componentdock.com`.

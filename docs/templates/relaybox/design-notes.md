# Relaybox — Design Notes

Reference: **Contact Form V17** — `https://colorlib.com/wp/template/contact-form-v17/`  
Live preview: `https://preview.colorlib.com/theme/contact-form-v17/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v17.jpg  
Shipped: https://relaybox.free.componentdock.com

Relaybox is a single-page contact-form template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Contact Form V17" website template (see TEMPLATES.md, line 1432), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@400;600;700**

## Design tokens (`apps/relaybox/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#28a745` | brand |
| `--color-brand-dark` | `#218838` | brand dark |
| `--color-ink` | `#333333` | ink |
| `--color-body` | `#555555` | body |
| `--color-border` | `#e5e7eb` | border |
| `--color-placeholder` | `#999999` | placeholder |
| `--color-card` | `#ffffff` | card |
| `--color-error` | `#f44336` | error |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ContactInfo` | Split-panel contact form layout | see fidelity note below |
| 2 | `ContactForm` | Left panel contact information | see fidelity note below |
| 3 | `Footer` | Footer Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `ContactInfo`
The page SHALL display a two-column centered container on a light gray background, with a narrow dark left panel (~40%) for contact info and a wider white right panel (~60%) for the contact form.

### `ContactForm`
The left panel SHALL display three contact blocks: address with map pin icon, phone with phone icon, and email with envelope icon. Phone and email links SHALL use the green accent color.

### `Footer`
The page footer SHALL contain a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/relaybox/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/relaybox/public/CNAME` = `relaybox.free.componentdock.com`
  and the package `homepage` = `https://relaybox.free.componentdock.com`.

# Fotura — Design Notes

Reference: **Foto** — `https://colorlib.com/wp/template/foto/`  
Live preview: `https://preview.colorlib.com/theme/foto/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/foto-free-template.jpg  
Shipped: https://fotura.free.componentdock.com

Fotura is a fullscreen photography portfolio template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Foto" photography portfolio design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Allura**, **Poppins**, **Poppins:wght@400;500;600;700**

## Design tokens (`apps/fotura/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#37d583` | Brand green from the original Foto stylesheet — hover accent. |
| `--color-brand-alt` | `#36d98a` | brand alt |
| `--color-ink` | `#333` | Text palette. |
| `--color-muted` | `#777` | muted |
| `--color-light` | `#aaa` | light |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Fonts: Poppins (body) + Allura (accent/script). |
| `--font-accent` | `'Allura', cursive` | font accent |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header with navigation | see fidelity note below |
| 2 | `HeroSlider` | Hero slider with fullscreen carousel | see fidelity note below |
| 3 | `Footer` | Footer with social links | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render an absolute-positioned header with a logo on the left, contact email on the right, a desktop navigation menu with dropdowns, and a hamburger menu icon for mobile.

### `HeroSlider`
The system SHALL render a fullscreen hero slider with background images, a dark overlay, centered white headline text, a subtitle, and a "VISIT" CTA button. The slider SHALL auto-advance between 4 slides with fade transitions.

### `Footer`
The system SHALL render a footer with a copyright notice, a "SHOW THUMBNAILS" button, and social media icon links.

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
- **Provenance ban.** No file under `apps/fotura/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/fotura/public/CNAME` = `fotura.free.componentdock.com`
  and the package `homepage` = `https://fotura.free.componentdock.com`.

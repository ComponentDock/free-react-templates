# Alleluia — Design Notes

Reference: **Mimosan** — `https://colorlib.com/wp/template/mimosan/`  
Live preview: `https://preview.colorlib.com/theme/mimosan/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/mimosan-free-template.jpg  
Shipped: https://alleluia.free.componentdock.com

Alleluia is a single-page church website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Mimosan" design (see TEMPLATES.md, Church category), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Old Standard TT**, **Old Standard TT:ital,wght@0,400;0,700;1,400**, **Open Sans**

## Design tokens (`apps/alleluia/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#b10707` | brand |
| `--color-brand-dark` | `#8c0606` | brand dark |
| `--color-brand-light` | `#db5246` | brand light |
| `--color-text-primary` | `#353535` | text primary |
| `--color-text-secondary` | `#7c7c7c` | text secondary |
| `--color-surface` | `#f7f7f7` | surface |
| `--color-border` | `#e6e6e6` | border |
| `--font-opensans` | `'Open Sans', sans-serif` | font opensans |
| `--font-oldstandard` | `'Old Standard TT', serif` | font oldstandard |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders with logo and navigation | see fidelity note below |
| 2 | `Hero` | Hero section displays fullscreen background with CTA | see fidelity note below |
| 3 | `About` | About section shows church description | see fidelity note below |
| 4 | `Events` | Events section shows upcoming events | see fidelity note below |
| 5 | `Sermons` | Sermons section shows recent sermons | see fidelity note below |
| 6 | `Gallery` | Gallery section shows image grid | see fidelity note below |
| 7 | `Footer` | Footer includes Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a fixed navigation bar with the logo "Alleluia" in serif font, desktop navigation links (Sermons, Events, Contact), a search button, a mobile hamburger toggle, and a top bar with social links (Facebook, Twitter, Instagram).

### `Hero`
The template SHALL display a fullscreen hero section with a background image, a heading "Our lives in praising God", descriptive subtext, and a "Discover More" CTA button linking to the About section.

### `About`
The template SHALL display a two-column About section with a placeholder image, a heading "Who We Are", descriptive paragraphs, and a "Learn More" CTA button.

### `Events`
The template SHALL display an Events section with at least 3 event cards, each showing a date badge (day + month), title, description, time, and location with icons.

### `Sermons`
The template SHALL display a Sermons section with 3 sermon cards in a grid, each showing an image, title, preacher name, and date.

### `Gallery`
The template SHALL display a Gallery section with a 3x3 grid of images linking to full-size versions.

### `Footer`
The template SHALL display a dark footer with contact information, quick links, a newsletter subscribe form, and a "Component Dock" attribution link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/alleluia/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/alleluia/public/CNAME` = `alleluia.free.componentdock.com`
  and the package `homepage` = `https://alleluia.free.componentdock.com`.

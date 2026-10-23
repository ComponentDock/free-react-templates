# Reign — Design Notes

Reference: **Monarchy** — `https://colorlib.com/wp/template/monarchy/`  
Live preview: `https://preview.colorlib.com/theme/monarchy/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/monarchy-free-template.jpg  
Shipped: https://reign.free.componentdock.com

Recreate the ColorLib Monarchy template as a React 19 + Tailwind CSS 4 + TypeScript single-page creative portfolio/agency template. Named "Reign" to evoke the royal/monarchy theme without matching the source name.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Jost**, **Jost:wght@300;400;500;600;700**

## Design tokens (`apps/reign/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-jost` | `'Jost', sans-serif` | font jost |
| `--color-brand` | `#f26200` | brand |
| `--color-brand-dark` | `#d45600` | brand dark |
| `--color-text-primary` | `#000000` | text primary |
| `--color-text-body` | `#757575` | text body |
| `--color-bg-warm` | `#f5ecdb` | bg warm |
| `--color-bg-light` | `#f8f9fa` | bg light |
| `--color-line` | `#e8e8e8` | line |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar with sticky behavior | see fidelity note below |
| 2 | `Hero` | Hero section with headline and video play button | see fidelity note below |
| 3 | `Services` | Services section with three service cards | see fidelity note below |
| 4 | `Portfolio` | Portfolio grid with six project images | see fidelity note below |
| 5 | `Testimonials` | Testimonials section with four client quotes | see fidelity note below |
| 6 | `Blog` | Blog section with two post cards | see fidelity note below |
| 7 | `ClientLogos` | Client logos section | see fidelity note below |
| 8 | `Footer` | Footer with Component Dock link and copyright | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a fixed navigation bar with the "Reign" logo and links to Home, Portfolio, About, Services, Blog, and Contact sections.

### `Hero`
The template SHALL display a full-width hero section with a background image overlay, the headline "Do What You Love", a subtitle, and a play button.

### `Services`
The template SHALL display a three-column services section with Interface Design, Product Design, and Quality Results cards, each with an icon, title, and description.

### `Portfolio`
The template SHALL display a six-item portfolio grid with images and hover overlay effects.

### `Testimonials`
The template SHALL display a four-column testimonials section with client photos, names, roles, and quote text.

### `Blog`
The template SHALL display a two-column blog section with post cards containing images, dates, titles, and author info.

### `ClientLogos`
The template SHALL display a client logos section on a light background with four brand placeholders.

### `Footer`
The template SHALL display a footer with the Reign logo, description, contact links, navigation columns, social icons, copyright text, and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/reign/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/reign/public/CNAME` = `reign.free.componentdock.com`
  and the package `homepage` = `https://reign.free.componentdock.com`.

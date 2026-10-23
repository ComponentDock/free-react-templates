# Morsel — Design Notes

Reference: **Bona** — `https://colorlib.com/wp/template/bona/`  
Live preview: `https://preview.colorlib.com/theme/bona/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bona-food-blog-website-template.jpg  
Shipped: https://morsel.free.componentdock.com

Morsel is a single-page blog/magazine landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Bona" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Maven Pro**, **Maven Pro:wght@400;500;600**, **Roboto**

## Design tokens (`apps/morsel/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#498bf9` | brand |
| `--color-peri` | `#c3d8f5` | peri |
| `--color-blog-bg` | `#edf3f3` | blog bg |
| `--color-input-bg` | `#f5f7f6` | input bg |
| `--color-ink` | `#444444` | ink |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Maven Pro', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Slider` | Slider banner | see fidelity note below |
| 3 | `Blog` | Blog post grid | see fidelity note below |
| 4 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Morsel", anchor links, and a search input.

### `Slider`
The system SHALL render a full-width banner strip below the navbar with a background image and no text content.

### `Blog`
The system SHALL render a blog area on a `#EDF3F3` background containing a grid of post cards in four variants: normal, extra-big, extra-medium, and extra-small, plus a LOAD MORE button.

### `Footer`
The system SHALL render a white footer with three columns: brand + copyright + social icons, a categories link list, and a subscribe email form.

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
- **Provenance ban.** No file under `apps/morsel/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/morsel/public/CNAME` = `morsel.free.componentdock.com`
  and the package `homepage` = `https://morsel.free.componentdock.com`.

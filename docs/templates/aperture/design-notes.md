# Aperture — Design Notes

Reference: **Sunzine** — `https://colorlib.com/wp/template/sunzine/`  
Live preview: `https://preview.colorlib.com/theme/sunzine/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/sunzine-free-template.jpg  
Shipped: https://aperture.free.componentdock.com

Aperture is a single-page photography-gallery landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Sunzine" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Aldrich**, **Raleway**

## Design tokens (`apps/aperture/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#0ece91` | brand |
| `--color-ink` | `#111111` | ink |
| `--color-muted` | `#b7b7b7` | muted |
| `--color-dim` | `#707070` | dim |
| `--color-coal` | `#222222` | coal |
| `--color-heart` | `#b91b1b` | heart |
| `--font-display` | `'Aldrich', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-sans` | `'Raleway', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Gallery` | Gallery filter bar | see fidelity note below |
| 4 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Aperture", anchor links to the page's sections, a search icon, and a mobile menu toggle.

### `Hero`
The system SHALL render a full-width hero with the site's welcome headline.

### `Gallery`
The system SHALL render a category filter bar above the gallery with an "All" option and five photography categories.

### `Footer`
The system SHALL render a dark footer with the site name, a copyright line, and social links.

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
- **Provenance ban.** No file under `apps/aperture/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/aperture/public/CNAME` = `aperture.free.componentdock.com`
  and the package `homepage` = `https://aperture.free.componentdock.com`.

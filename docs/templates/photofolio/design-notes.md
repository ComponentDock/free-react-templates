# Photofolio — Design Notes

Reference: **Photographer** — `https://colorlib.com/wp/template/photographer/`  
Live preview: `https://preview.colorlib.com/theme/photographer/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/photographer-free-template.jpg  
Shipped: https://photofolio.free.componentdock.com

Photofolio is a single-page photographer-portfolio website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Photographer" design (see TEMPLATES.md, Bootstrap section), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600**

## Design tokens (`apps/photofolio/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-ink` | `#212121` | ink |
| `--color-overlay` | `#060606` | overlay |
| `--color-social` | `#121212` | social |
| `--color-body` | `#7d7d7d` | body |
| `--color-hairline` | `#e8e8e8` | hairline |
| `--color-search-border` | `#333` | search border |
| `--color-search-text` | `#999` | search text |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original type: "Poppins", sans-serif everywhere (headings weight 500). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header with logo, controls, and slide-down navigation | see fidelity note below |
| 2 | `HeroWall` | Hero photo wall | see fidelity note below |
| 3 | `Intro` | Intro section | see fidelity note below |
| 4 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a white/transparent header with a text logo, a hamburger button and a search button on the right, and a slide-down navigation menu listing the template's pages.

### `HeroWall`
The system SHALL render a hero made of 21 full-bleed photo tiles arranged in a masonry-style wall that auto-advances, each tile revealing a dark overlay with a white caption on hover.

### `Intro`
The system SHALL render a split intro section with the photographer's headline, a paragraph, an underlined text CTA, and three skill progress bars.

### `Footer`
The system SHALL render a dark footer with the copyright line (linking the branded Component Dock site) and five social icons.

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
- **Provenance ban.** No file under `apps/photofolio/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/photofolio/public/CNAME` = `photofolio.free.componentdock.com`
  and the package `homepage` = `https://photofolio.free.componentdock.com`.

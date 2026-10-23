# Chroma — Design Notes

Reference: **Transcend** — `https://colorlib.com/wp/template/transcend/`  
Live preview: `https://preview.colorlib.com/theme/transcend/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/transcend-free-template-1.jpg  
Shipped: https://chroma.free.componentdock.com

Chroma is a single-page creative-studio landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Domine**, **Domine:wght@400;500;600;700**, **Poppins**

## Design tokens (`apps/chroma/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fceef7` | primary 50 |
| `--color-primary-100` | `#f8d5ea` | primary 100 |
| `--color-primary-200` | `#f0a8d3` | primary 200 |
| `--color-primary-300` | `#e56fb4` | primary 300 |
| `--color-primary-400` | `#cc147f` | primary 400 |
| `--color-primary-500` | `#b31270` | primary 500 |
| `--color-primary-600` | `#8f0e59` | primary 600 |
| `--color-accent-300` | `#7fdcd6` | Teal accent (#26bfb5). |
| `--color-accent-400` | `#26bfb5` | accent 400 |
| `--color-smoke` | `#626262` | Muted copy (#626262). |
| `--color-ink` | `#0a0a0a` | ink |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Domine', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `WhoWeAre` | — | no dedicated spec block |
| 4 | `WhatWeDo` | What We Do section | see fidelity note below |
| 5 | `Works` | Works section | see fidelity note below |
| 6 | `Stats` | Stats section | see fidelity note below |
| 7 | `Contact` | Contact section | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Chroma Studio", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline, a blurb, and quick links to About, Services, and Contact.

### `WhoWeAre`
*anchors only* — Who we are

### `WhatWeDo`
The system SHALL render a "What We Do" section with a heading and six service cards with titles and blurbs.

### `Works`
The system SHALL render a works section with a heading and project cards, each with a title and a category.

### `Stats`
The system SHALL render a stats section with four metrics.

### `Contact`
The system SHALL render a contact section with a heading, contact details, and social links.

### `Footer`
The system SHALL render a footer with a copyright line.

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
- **Provenance ban.** No file under `apps/chroma/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/chroma/public/CNAME` = `chroma.free.componentdock.com`
  and the package `homepage` = `https://chroma.free.componentdock.com`.

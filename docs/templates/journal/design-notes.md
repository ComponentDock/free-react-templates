# Journal — Design Notes

Reference: **Original** — `https://colorlib.com/wp/template/original/`  
Live preview: `https://preview.colorlib.com/theme/original/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/original-free-template.jpg  
Shipped: https://journal.free.componentdock.com

Journal is a single-page lifestyle blog website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Original" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700**

## Design tokens (`apps/journal/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-accent` | `#30336b` | accent |
| `--color-ink` | `#000000` | ink |
| `--color-nearblack` | `#0d0d0d` | nearblack |
| `--color-body` | `#4f4d4d` | body |
| `--color-meta` | `#878787` | meta |
| `--color-tag` | `#a1a1a1` | tag |
| `--color-line` | `#dcdcdc` | line |
| `--color-hairline` | `#e1e1e1` | hairline |
| `--color-chip` | `#c5c5c5` | chip |
| `--color-input` | `#787878` | input |
| `--color-search` | `#bbbec1` | search |
| `--color-primary` | `#30336b` | primary |
| `--color-primary-50` | `#eeeff8` | primary 50 |
| `--color-primary-100` | `#dcddf0` | primary 100 |
| `--color-primary-200` | `#b9bce1` | primary 200 |
| `--color-primary-300` | `#969ad2` | primary 300 |
| `--color-primary-400` | `#7379c3` | primary 400 |
| `--color-primary-500` | `#5057b4` | primary 500 |
| `--color-primary-600` | `#30336b` | primary 600 |
| `--color-primary-700` | `#26285a` | primary 700 |
| `--color-primary-800` | `#1d1f48` | primary 800 |
| `--color-primary-900` | `#141537` | primary 900 |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | — | no dedicated spec block |
| 2 | `Navbar` | Header with ticker, logo and nav | see fidelity note below |
| 3 | `HeroSlider` | Hero slider | see fidelity note below |
| 4 | `MagazineIntro` | Magazine intro row | see fidelity note below |
| 5 | `BlogList` | Blog post list | see fidelity note below |
| 6 | `Sidebar` | Sidebar widgets | see fidelity note below |
| 7 | `InstagramFeed` | Instagram feed | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Navbar`
The system SHALL render a three-part header: a top bar with a breaking-news ticker and social icons, a centered logo, and a sticky navigation bar with a Subscribe button, dropdown menus, and a search control.

### `HeroSlider`
The system SHALL render a full-width hero carousel with three slides, each showing a background photo, a category pill, and a headline on a black bar.

### `MagazineIntro`
The system SHALL render a three-column intro row with a text panel and two image cards with centered category boxes.

### `BlogList`
The system SHALL render five blog posts in a two-column alternating layout with one full-width post, each with a date box, tag, headline, excerpt, and author/comment meta.

### `Sidebar`
The system SHALL render a right sidebar with search, newsletter, advertisement, latest posts, and tags widgets.

### `InstagramFeed`
The system SHALL render an Instagram feed strip with a carousel of square images and a hover overlay.

### `Footer`
The system SHALL render a centered footer with nav links, social icons, and a copyright bar.

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
- **Provenance ban.** No file under `apps/journal/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/journal/public/CNAME` = `journal.free.componentdock.com`
  and the package `homepage` = `https://journal.free.componentdock.com`.

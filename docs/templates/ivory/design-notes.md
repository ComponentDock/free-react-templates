# Ivory — Design Notes

Reference: **Blanca** — `https://colorlib.com/wp/template/blanca/`  
Live preview: `https://preview.colorlib.com/theme/blanca/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/blanca-free-template.jpg  
Shipped: https://ivory.free.componentdock.com

Ivory is a single-page personal blog template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Blanca" personal blog website template design (see TEMPLATES.md, Blog category, line 245), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Dancing Script**, **Dancing Script:wght@400;700**, **Montserrat**

## Design tokens (`apps/ivory/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-ink` | `#2f2f2f` | ink |
| `--color-meta` | `#afafaf` | meta |
| `--color-description` | `#9d9d9d` | description |
| `--color-copyright` | `#b8b8b8` | copyright |
| `--color-headsocial` | `#bec4c9` | headsocial |
| `--color-footsocial` | `#74797e` | footsocial |
| `--color-arrow` | `#3a3a3a` | arrow |
| `--color-search` | `#f5f5f5` | search |
| `--color-searchline` | `#d5d5d5` | searchline |
| `--color-pageline` | `#f0f0f0` | pageline |
| `--color-footerline` | `#d8d8d8` | footerline |
| `--color-lime` | `#9acd32` | lime |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-script` | `'Dancing Script', cursive` | font script |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top bar | see fidelity note below |
| 2 | `Branding` | Branding and navigation | see fidelity note below |
| 3 | `Navbar` | — | no dedicated spec block |
| 4 | `HeroSlider` | Hero slider | see fidelity note below |
| 5 | `SubscribeBadge` | Subscribe badge | see fidelity note below |
| 6 | `BlogList` | Blog list | see fidelity note below |
| 7 | `Pagination` | Pagination | see fidelity note below |
| 8 | `Sidebar` | Sidebar | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
The system SHALL render a slim utility top bar with a greeting + email on the left and social icons + a search field on the right.

### `Branding`
The system SHALL render a centered script wordmark logo with a tiny uppercase tagline, plus a centered uppercase navigation with a 2px underline hover/current state and a mobile hamburger.

### `Navbar`
*anchors only* — Primary · Toggle dark mode · Mobile

### `HeroSlider`
The system SHALL render a full-width hero slider of three photo slides with square white-outline pagination dots (bottom-left) and white square prev/next buttons (visible on md+).

### `SubscribeBadge`
The system SHALL render a circular "Subscribe to my YouTube channel" badge overlapping the hero's bottom-right corner.

### `BlogList`
The system SHALL render three centered blog posts in the main column, each with date, title, tags, featured image, excerpt, share row, read-more button and comments count.

### `Pagination`
The system SHALL render numbered square pagination (01. 02. 03.) with the active page inverted.

### `Sidebar`
The system SHALL render a right sidebar with an about-me bio, four recent posts, a tag pill cloud, and an ad banner.

### `Footer`
The system SHALL render a footer with four recent-post columns, a full-width Instagram image strip, and a dark bottom bar with copyright + social icons.

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
- **Provenance ban.** No file under `apps/ivory/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/ivory/public/CNAME` = `ivory.free.componentdock.com`
  and the package `homepage` = `https://ivory.free.componentdock.com`.

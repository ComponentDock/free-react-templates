# Bytepress — Design Notes

Reference: **Techmag** — `https://colorlib.com/wp/template/techmag/`  
Live preview: `https://preview.colorlib.com/theme/techmag/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/techmag-free-template.jpg  
Shipped: https://bytepress.free.componentdock.com

BytePress is a tech magazine and blog template featuring a dark hero with slider, category intro cards, a featured posts section with sidebar, horizontal technology post cards, a world news grid, and a dark footer with Component Dock branding.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700;800**

## Design tokens (`apps/bytepress/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-accent` | `#ff6347` | accent |
| `--color-accent-hover` | `#e5533a` | accent hover |
| `--color-cat-tech` | `#624693` | cat tech |
| `--color-cat-video` | `#61e49b` | cat video |
| `--color-cat-world` | `#ff4b75` | cat world |
| `--color-cat-party` | `#f8a64f` | cat party |
| `--color-body-bg` | `#ffffff` | body bg |
| `--color-alt-bg` | `#f7f9f9` | alt bg |
| `--color-dark-bg` | `#0d0d0d` | dark bg |
| `--color-muted` | `#878787` | muted |
| `--color-secondary` | `#838282` | secondary |
| `--color-ink` | `#000000` | ink |
| `--font-sans` | `'Open Sans', sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `HeaderBar` | HeaderBar renders subscribe and social links | see fidelity note below |
| 2 | `Navbar` | Navbar provides navigation | see fidelity note below |
| 3 | `Hero` | Hero section displays featured content | see fidelity note below |
| 4 | `IntroCards` | IntroCards display category previews | see fidelity note below |
| 5 | `FeaturedSection` | FeaturedSection shows posts and sidebar | see fidelity note below |
| 6 | `TechnologySection` | TechnologySection shows horizontal post cards | see fidelity note below |
| 7 | `WorldSection` | WorldSection shows post grid | see fidelity note below |
| 8 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `HeaderBar`
The template SHALL display a top header bar with a subscribe button and social media icon links.

### `Navbar`
The template SHALL display a sticky navigation bar with the BytePress logo, navigation links, and a search button.

### `Hero`
The template SHALL display a full-width hero banner with a headline, description, category badge, and call-to-action button.

### `IntroCards`
The template SHALL display three category image cards in a responsive grid.

### `FeaturedSection`
The template SHALL display a featured posts section with a main content area (large post + small posts) and a sidebar (newsletter, latest posts, tags).

### `TechnologySection`
The template SHALL display a technology section with horizontal post cards (image + content side by side).

### `WorldSection`
The template SHALL display a "From the World" section with posts in a 2-column grid.

### `Footer`
The template SHALL display a dark footer with social links, logo, navigation, and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/bytepress/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/bytepress/public/CNAME` = `bytepress.free.componentdock.com`
  and the package `homepage` = `https://bytepress.free.componentdock.com`.

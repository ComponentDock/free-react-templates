# Newsstand — Design Notes

Reference: **Webmag** — `https://colorlib.com/wp/template/webmag/`  
Live preview: `https://preview.colorlib.com/theme/webmag/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/webmag-free-template.jpg  
Shipped: https://newsstand.free.componentdock.com

Newsstand is a single-page magazine/blog landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito**, **Nunito Sans**, **Nunito:wght@300;400;600;700**

## Design tokens (`apps/newsstand/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff8700` | brand |
| `--color-brand-dark` | `#e67a00` | brand dark |
| `--color-cat-1` | `#4bb92f` | cat 1 |
| `--color-cat-3` | `#8d00ff` | cat 3 |
| `--color-cat-4` | `#0078ff` | cat 4 |
| `--color-ink` | `#212631` | ink |
| `--color-body` | `#3d455c` | body |
| `--color-muted` | `#5c6a7d` | muted |
| `--color-line` | `#dfe3eb` | line |
| `--color-grey` | `#f8f9fb` | grey |
| `--font-sans` | `'Nunito', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-heading` | `'Nunito Sans', ui-sans-serif, system-ui, sans-serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `RecentPosts` | Recent Posts section | see fidelity note below |
| 3 | `FeaturedGrey` | Featured Posts grey section | see fidelity note below |
| 4 | `PostsSidebar` | Most Read sidebar widget | see fidelity note below |
| 5 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `RecentPosts`
The system SHALL render a "Recent Posts" section with a 3-column grid of six image post cards, each with a category badge, date and title overlaid at the bottom of the image.

### `FeaturedGrey`
The system SHALL render a grey band section with a centered "Featured Posts" heading and two large post cards.

### `PostsSidebar`
The system SHALL render a sidebar "Most Read" widget listing posts as thumbnail + title rows.

### `Footer`
The system SHALL render a light footer with the brand, legal links, copyright, About/Categories link columns, a newsletter form and social icons.

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
- **Provenance ban.** No file under `apps/newsstand/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/newsstand/public/CNAME` = `newsstand.free.componentdock.com`
  and the package `homepage` = `https://newsstand.free.componentdock.com`.

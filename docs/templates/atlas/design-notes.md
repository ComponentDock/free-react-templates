# Atlas — Design Notes

Reference: **World** — `https://colorlib.com/wp/template/world/`  
Live preview: `https://preview.colorlib.com/theme/world/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/world-free-template-1.jpg  
Shipped: https://atlas.free.componentdock.com

Atlas is a blog & magazine home-page template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Ubuntu**, **Ubuntu:wght@300;400;500;700**, **Work Sans**

## Design tokens (`apps/atlas/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#0000ff` | brand |
| `--color-footer` | `#161616` | footer |
| `--color-ink` | `#000` | ink |
| `--color-text-muted` | `#8d8d8d` | text muted |
| `--color-divider` | `#f1f1f1` | divider |
| `--color-border-gray` | `#d7d7d7` | border gray |
| `--color-input` | `#959595` | input |
| `--color-paper` | `#fff` | paper |
| `--shadow-card` | `0 2px 8px rgba(0, 0, 0, 0.15)` | shadow card |
| `--font-heading` | `'Ubuntu', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-body` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `HeroPostStrip` | — | no dedicated spec block |
| 4 | `CategoryTabs` | — | no dedicated spec block |
| 5 | `Sidebar` | Sidebar widgets | see fidelity note below |
| 6 | `FeaturedCards` | Featured cards row | see fidelity note below |
| 7 | `LatestArticles` | Latest articles and videos | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `HeroSlider`
The system SHALL render a full-width hero photo slider with a dark overlay and a numbered-posts strip over its bottom edge.

### `HeroPostStrip`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `CategoryTabs`
*anchors only* — tablist · tabpanel

### `Sidebar`
The system SHALL render a right sidebar with About, Top Stories, Stay Connected, and Today's Pick widgets.

### `FeaturedCards`
The system SHALL render a row of three post cards below the sidebar section.

### `LatestArticles`
The system SHALL render a Latest Articles column and a Most Popular Videos column.

### `Footer`
The system SHALL render a dark footer with brand + copyright, a link menu, and a subscribe form.

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
- **Provenance ban.** No file under `apps/atlas/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/atlas/public/CNAME` = `atlas.free.componentdock.com`
  and the package `homepage` = `https://atlas.free.componentdock.com`.

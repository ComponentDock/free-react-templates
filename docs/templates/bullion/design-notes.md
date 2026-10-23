# Bullion — Design Notes

Reference: **Newsbit** — `https://colorlib.com/wp/template/newsbit/`  
Live preview: `https://preview.colorlib.com/theme/newsbit/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/newsbit-free-template.jpg  
Shipped: https://bullion.free.componentdock.com

Bullion is a single-page cryptocurrency news magazine template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Newsbit" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Encode Sans Expanded**, **Encode Sans Expanded:wght@300;400;500;600;700;800**

## Design tokens (`apps/bullion/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-accent` | `#f9b500` | accent |
| `--color-dark` | `#191919` | dark |
| `--color-ink` | `#111111` | ink |
| `--color-meta` | `#888888` | meta |
| `--color-ash` | `#aaaaaa` | ash |
| `--color-subline` | `#cccccc` | subline |
| `--color-softedge` | `#dddddd` | softedge |
| `--color-separator` | `#eeeeee` | separator |
| `--color-primary` | `#f9b500` | primary |
| `--color-primary-50` | `#fef8e0` | primary 50 |
| `--color-primary-100` | `#fdeeb3` | primary 100 |
| `--color-primary-200` | `#fbe280` | primary 200 |
| `--color-primary-300` | `#fad64d` | primary 300 |
| `--color-primary-400` | `#f9cc26` | primary 400 |
| `--color-primary-500` | `#f9c200` | primary 500 |
| `--color-primary-600` | `#f9b500` | primary 600 |
| `--color-primary-700` | `#d99d00` | primary 700 |
| `--color-primary-800` | `#b58400` | primary 800 |
| `--color-primary-900` | `#8f6800` | primary 900 |
| `--font-sans` | `'Encode Sans Expanded', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Utility top bar | see fidelity note below |
| 2 | `Header` | Header with search and navigation | see fidelity note below |
| 3 | `HeroMosaic` | Featured story mosaic | see fidelity note below |
| 4 | `RecentNews` | Recent news and crypto mining news | see fidelity note below |
| 5 | `CryptoMining` | — | no dedicated spec block |
| 6 | `Sidebar` | Sidebar with ticker, popular posts, banner, and newsletter | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
The system SHALL render a dark charcoal top bar above the header with utility links on the left and social icon links on the right.

### `Header`
The system SHALL render a white header with a wordmark logo, a search toggle with expanding search form, a desktop navigation menu with a dropdown, and a mobile hamburger menu.

### `HeroMosaic`
The system SHALL render a 600px-tall featured-story mosaic: one large story over a two-story stack, plus a bottom row of three stories, each with an image, a bottom-up gradient overlay, a bold headline, and author/date/view/comment meta.

### `RecentNews`
The system SHALL render a two-column main section: a left column with "RECENT NEWS" (one image card plus four mini posts) and "CRYPTO MINING NEWS" (five image cards) with a bordered "view more" button, and a right sidebar.

### `CryptoMining`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Sidebar`
The system SHALL render a right sidebar with a solid-accent price ticker, a "POPULAR POSTS" mini list, a dark-overlay download banner, and a newsletter subscribe form.

### `Footer`
The system SHALL render a dark charcoal footer with a brand column (wordmark, blurb, copyright), two "MOST POPULAR" link columns, and a bottom bar with legal links and social icons.

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
- **Provenance ban.** No file under `apps/bullion/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/bullion/public/CNAME` = `bullion.free.componentdock.com`
  and the package `homepage` = `https://bullion.free.componentdock.com`.

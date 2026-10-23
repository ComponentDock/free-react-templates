# Convey — Design Notes

Reference: **Logistic** — `https://colorlib.com/wp/template/logistic/`  
Live preview: `https://preview.colorlib.com/theme/logistic/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/logistic-free-template.jpg  
Shipped: https://convey.free.componentdock.com

Convey is a single-page logistics / freight-company website in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Raleway:wght@200;300;400;500;600;700;800;900**

## Design tokens (`apps/convey/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-blush-50` | `#fef2f4` | blush 50 |
| `--color-blush-100` | `#fde3e8` | blush 100 |
| `--color-blush-200` | `#fbccd5` | blush 200 |
| `--color-blush-300` | `#f8a4b4` | blush 300 |
| `--color-blush-400` | `#f66483` | blush 400 |
| `--color-blush-500` | `#f14a6e` | blush 500 |
| `--color-blush-600` | `#e02e56` | blush 600 |
| `--color-blush-700` | `#bd1f45` | blush 700 |
| `--color-blush-800` | `#9c1c3d` | blush 800 |
| `--color-blush-900` | `#821c38` | blush 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Poppins — the original template's typeface (Google Fonts via index.html) |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Sticky navbar | see fidelity note below |
| 2 | `Hero` | Hero slider with split caption | see fidelity note below |
| 3 | `Arrivals` | — | no dedicated spec block |
| 4 | `Parallax` | — | no dedicated spec block |
| 5 | `Gallery` | — | no dedicated spec block |
| 6 | `Features` | — | no dedicated spec block |
| 7 | `Performance` | — | no dedicated spec block |
| 8 | `Newsletter` | — | no dedicated spec block |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a white sticky header with logo, menu, social icons, and a red CTA button.

### `Hero`
The system SHALL render a full-width hero slider with three slides; each slide SHALL carry the red/white split caption box.

### `Arrivals`
*anchors only* — What&apos;s New · Learn Details

### `Parallax`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Gallery`
*anchors only* — Lookbook · A snapshot of the season — shot on location, styled for real life.

### `Features`
*anchors only* — Why Aurora

### `Performance`
*anchors only* — Built to Perform

### `Newsletter`
*anchors only* — status · alert · Subscribe for our Newsletter · We won&apos;t send any kind of spam · Thanks for subscribing — see you in your inbox! · Email address

### `Footer`
The system SHALL render the dark navy footer with brand, two link columns, and the repo-standard Component Dock credit.

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
- **Provenance ban.** No file under `apps/convey/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/convey/public/CNAME` = `convey.free.componentdock.com`
  and the package `homepage` = `https://convey.free.componentdock.com`.

# Givehope — Design Notes

Reference: **Bcharity** — `https://colorlib.com/wp/template/bcharity/`  
Live preview: `https://preview.colorlib.com/theme/bcharity/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/givehope-free-template.jpg — the ROW's slug `givehope`, not the spec's `bcharity`  
Shipped: https://givehope.free.componentdock.com

Row note: `TEMPLATES.md` links the slug `givehope` for this app while the spec records `bcharity`. This brief follows the SPEC — the disagreement is recorded, not resolved (ROW-MULTIPLICITY class, see the SPEC-REFERENCE audit, main `4820f472b`).

GiveHope is a single-page charity/nonprofit website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@400;700**, **Roboto**

## Design tokens (`apps/givehope/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#e6ffe9` | primary 50 |
| `--color-primary-100` | `#b3ffb8` | primary 100 |
| `--color-primary-200` | `#80ff8a` | primary 200 |
| `--color-primary-300` | `#4dff5c` | primary 300 |
| `--color-primary-400` | `#00c424` | primary 400 |
| `--color-primary-500` | `#00a81e` | primary 500 |
| `--color-primary-600` | `#008c19` | primary 600 |
| `--color-primary-700` | `#007014` | primary 700 |
| `--color-primary-800` | `#00550f` | primary 800 |
| `--color-primary-900` | `#003a0a` | primary 900 |
| `--color-navy` | `#0d101d` | Dark navy — footer and dark sections. |
| `--color-heading` | `#14182d` | Heading color (#14182d). |
| `--color-smoke` | `#7f7f7f` | Body text color (#7f7f7f). |
| `--color-sub` | `#b3b4b3` | Section subtitle (#b3b4b3). |
| `--color-mist` | `#f2f5f3` | Light section backgrounds. |
| `--color-border` | `#e9ebec` | Border color. |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Playfair Display', Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero banner | see fidelity note below |
| 3 | `Features` | Features section | see fidelity note below |
| 4 | `Callout` | "Be a part" callout section | see fidelity note below |
| 5 | `Counters` | Counter statistics | see fidelity note below |
| 6 | `Causes` | Featured causes | see fidelity note below |
| 7 | `CTABanner` | CTA banner | see fidelity note below |
| 8 | `Volunteers` | Volunteers section | see fidelity note below |
| 9 | `Blog` | Blog section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a transparent navbar overlaying the hero banner with logo, navigation links, and a desktop-only CTA button.

### `Hero`
The system SHALL render a full-width hero section with a background image, right-aligned headline text, and a green CTA button.

### `Features`
The system SHALL render a 2×2 grid of feature cards with icons and descriptions.

### `Callout`
The system SHALL render a parallax-background callout section with left-aligned text and a right-aligned image.

### `Counters`
The system SHALL render animated stat counters in a row.

### `Causes`
The system SHALL render cause cards with progress bars showing donation goals.

### `CTABanner`
The system SHALL render a full-width background-image CTA section with centered text and a green button.

### `Volunteers`
The system SHALL render team member cards with photos and social overlays.

### `Blog`
The system SHALL render a blog section with a featured post and smaller side posts.

### `Footer`
The system SHALL render a dark footer with logo, newsletter, contact info, and Component Dock attribution.

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
- **Provenance ban.** No file under `apps/givehope/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/givehope/public/CNAME` = `givehope.free.componentdock.com`
  and the package `homepage` = `https://givehope.free.componentdock.com`.

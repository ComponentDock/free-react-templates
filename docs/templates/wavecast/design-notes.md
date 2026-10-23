# Wavecast — Design Notes

Reference: **Podcast** — `https://colorlib.com/wp/template/podcast/`  
Live preview: `https://preview.colorlib.com/theme/podcast/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/podcast-free-template.jpg  
Shipped: https://wavecast.free.componentdock.com

Wavecast is a single-page podcast website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **-apple-system**

## Design tokens (`apps/wavecast/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f0faf9` | primary 50 |
| `--color-primary-100` | `#dcf3f1` | primary 100 |
| `--color-primary-200` | `#b9e6e2` | primary 200 |
| `--color-primary-300` | `#8dd4cd` | primary 300 |
| `--color-primary-400` | `#5fbcb4` | primary 400 |
| `--color-primary-500` | `#45ada4` | primary 500 |
| `--color-primary-600` | `#3ca59d` | primary 600 |
| `--color-primary-700` | `#31837d` | primary 700 |
| `--color-primary-800` | `#296863` | primary 800 |
| `--color-primary-900` | `#235451` | primary 900 |
| `--color-ink` | `#4d4d4d` | Ink — body text (#4d4d4d, weight 200). |
| `--color-dark` | `#25262a` | Dark — hero headline, dropdown item + mobile menu text (#25262a). |
| `--color-footer` | `#333333` | Footer — dark #333333 background. |
| `--color-muted` | `#ccc` | Muted — podcaster counts + byline separators (#ccc). |
| `--color-line` | `#efefef` | Line — pagination + input borders (#efefef). |
| `--color-soft` | `#f8f9fa` | Soft — featured-guests section band (#f8f9fa). |
| `--color-faded` | `#999999` | Faded — footer nav links (#999999). |
| `--color-subtle` | `#737373` | Subtle — footer body text (#737373). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero banner | see fidelity note below |
| 3 | `Episodes` | Episodes section with podcaster sidebar | see fidelity note below |
| 4 | `FeaturedGuests` | Featured guests carousel | see fidelity note below |
| 5 | `SubscribeBand` | Subscribe cover band | see fidelity note below |
| 6 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main navigation · Mobile navigation · Wavecast · Login / Register

### `Hero`
The system SHALL render a hero split with a large 900-weight headline and paragraph on the left and a flat illustration on the right.

### `Episodes`
The system SHALL render an episodes section with a "Popular Podcaster" sidebar of six podcaster entries and five episode cards with photos, titles, bylines, and audio players, followed by round pagination.

### `FeaturedGuests`
The system SHALL render a light-gray section with a centered heading and an auto-advancing carousel of six guest slides (circular photo, name, quote) with prev/next arrows.

### `SubscribeBand`
The system SHALL render a full-width dark photo band with a dark overlay, a white heading and paragraph, and a transparent email input with a teal "Send" button.

### `Footer`
The system SHALL render a dark #333333 footer with three columns (About Us, Navigation, Subscribe) and a ColorLib copyright bar.

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
- **Provenance ban.** No file under `apps/wavecast/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/wavecast/public/CNAME` = `wavecast.free.componentdock.com`
  and the package `homepage` = `https://wavecast.free.componentdock.com`.

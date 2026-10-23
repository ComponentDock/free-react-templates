# Decibel — Design Notes

Reference: **Deejee** — `https://colorlib.com/wp/template/deejee/`  
Live preview: `https://preview.colorlib.com/theme/deejee/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/deejee-free-template.jpg  
Shipped: https://decibel.free.componentdock.com

Decibel is a single-page DJ / radio station landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito Sans**, **Oswald**, **Oswald:wght@400;500;600**, **Pacifico**

## Design tokens (`apps/decibel/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#e3207b` | primary |
| `--color-primary-hover` | `#c41969` | primary hover |
| `--color-primary-active` | `#b91763` | primary active |
| `--color-night` | `#222831` | night |
| `--color-dark` | `#13171d` | dark |
| `--color-ash` | `#737373` | ash |
| `--color-steel` | `#6c757d` | steel |
| `--color-flash` | `#eec60a` | flash |
| `--color-berry` | `#cf1a6f` | berry |
| `--color-primary-50` | `#fdf0f6` | primary 50 |
| `--color-primary-100` | `#fbdcec` | primary 100 |
| `--color-primary-200` | `#f7b9d8` | primary 200 |
| `--color-primary-300` | `#f18dbc` | primary 300 |
| `--color-primary-400` | `#ea5d9c` | primary 400 |
| `--color-primary-500` | `#e3207b` | primary 500 |
| `--color-primary-600` | `#c41969` | primary 600 |
| `--color-primary-700` | `#a31458` | primary 700 |
| `--color-primary-800` | `#821046` | primary 800 |
| `--color-primary-900` | `#610c34` | primary 900 |
| `--font-sans` | `'Nunito Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-script` | `'Pacifico', cursive` | font script |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Hero cover | see fidelity note below |
| 2 | `Hero` | Hero cover | see fidelity note below |
| 3 | `Shows` | Upcoming Shows | see fidelity note below |
| 4 | `Podcasts` | Featured Podcasts retro block | see fidelity note below |
| 5 | `Listeners` | — | no dedicated spec block |
| 6 | `DJs` | Our DJs | see fidelity note below |
| 7 | `News` | News and Events | see fidelity note below |
| 8 | `SocialStrip` | Social strip | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Header`
The system SHALL render a full-viewport hero with a photo background, dark overlay, centered headline and a primary CTA button.

### `Hero`
The system SHALL render a full-viewport hero with a photo background, dark overlay, centered headline and a primary CTA button.

### `Shows`
The system SHALL render a section with a pink-underlined heading and four show cards (image + pink-highlighted title + time/host meta).

### `Podcasts`
The system SHALL render a retro block of three podcast cards (one large left, two stacked right) with highlighted titles and times.

### `Listeners`
*anchors only* — Love By Our Listeners · group · Choose testimonial

### `DJs`
The system SHALL render six DJ cards, each a photo with a centered overlay showing name, role, blurb and social links.

### `News`
The system SHALL render a dark section with three white-boxed news post cards.

### `SocialStrip`
The system SHALL render a pink strip of six social icon links with a yellow-on-dark-pink hover.

### `Footer`
The system SHALL render a dark footer with About + Subscribe form, Navigations + Follow Us, Watch Live Streaming, and a copyright bar.

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
- **Provenance ban.** No file under `apps/decibel/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/decibel/public/CNAME` = `decibel.free.componentdock.com`
  and the package `homepage` = `https://decibel.free.componentdock.com`.

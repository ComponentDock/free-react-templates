# Huddle — Design Notes

Reference: **Confe** — `https://colorlib.com/wp/template/confe/`  
Live preview: `https://preview.colorlib.com/theme/confe/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/confe-free-template.jpg  
Shipped: https://huddle.free.componentdock.com

Huddle recreates the ColorLib "Confe" conference template under a new name. It is a single-page conference/event landing site with sticky navbar, hero with background image overlay, countdown, speakers grid, features, sponsors, event cards, quick-contact bar, and dark footer with Component Dock branding.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Amatic SC**, **Amatic SC:wght@400;700**, **Work Sans**

## Design tokens (`apps/huddle/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f23a2e` | brand |
| `--color-brand-hover` | `#d92f24` | brand hover |
| `--color-body` | `#6b7280` | Body + muted text. |
| `--color-muted` | `#9ca3af` | muted |
| `--color-dark` | `#111827` | Dark sections. |
| `--font-display` | `'Amatic SC', cursive` | font display |
| `--font-sans` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar is sticky and responsive | see fidelity note below |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `About` | — | no dedicated spec block |
| 4 | `ImageSplit` | — | no dedicated spec block |
| 5 | `Speakers` | — | no dedicated spec block |
| 6 | `Features` | — | no dedicated spec block |
| 7 | `Sponsors` | — | no dedicated spec block |
| 8 | `Events` | — | no dedicated spec block |
| 9 | `QuickContact` | — | no dedicated spec block |
| 10 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The navbar SHALL be fixed at the top, white background, with mobile hamburger menu.

### `Hero`
*anchors only* — The Future of Innovation · April 17 – 21, 2025 &bull; Vancouver · Get Your Ticket · Learn More

### `About`
*anchors only* — About The Conference · Conference Begins In · Register Now

### `ImageSplit`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Speakers`
*anchors only* — Speakers

### `Features`
*anchors only* — Why Us?

### `Sponsors`
*anchors only* — Sponsors · Become a Sponsor

### `Events`
*anchors only* — Conference Events

### `QuickContact`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Footer`
The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/huddle/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/huddle/public/CNAME` = `huddle.free.componentdock.com`
  and the package `homepage` = `https://huddle.free.componentdock.com`.

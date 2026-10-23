# Asana — Design Notes

Reference: **Doyoga** — `https://colorlib.com/wp/template/doyoga/`  
Live preview: `https://preview.colorlib.com/theme/doyoga/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/doyoga-free-template.jpg  
Shipped: https://asana.free.componentdock.com

Asana is a yoga studio landing page template featuring class listings, schedule, about section, events, gallery, and contact form. Recreated from the ColorLib DoYoga design.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Quicksand**, **Quicksand:wght@300;400;500;700**

## Design tokens (`apps/asana/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-50` | `#f3e8ff` | Asana brand palette — purple (#6610f2) from the original design |
| `--color-brand-100` | `#e9d5ff` | brand 100 |
| `--color-brand-200` | `#d8b4fe` | brand 200 |
| `--color-brand-300` | `#c084fc` | brand 300 |
| `--color-brand-400` | `#a855f7` | brand 400 |
| `--color-brand-500` | `#6610f2` | brand 500 |
| `--color-brand-600` | `#5a0fd6` | brand 600 |
| `--color-brand-700` | `#4c0db8` | brand 700 |
| `--color-brand-800` | `#3d0a93` | brand 800 |
| `--color-brand-900` | `#2e086e` | brand 900 |
| `--font-sans` | `'Quicksand', ui-sans-serif, system-ui, sans-serif` | Quicksand — the original template's typeface |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `FeaturedClasses` | Featured classes | see fidelity note below |
| 4 | `Schedule` | Schedule | see fidelity note below |
| 5 | `About` | About section | see fidelity note below |
| 6 | `Events` | Events | see fidelity note below |
| 7 | `Gallery` | Gallery | see fidelity note below |
| 8 | `Contact` | Contact form | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Twitter · Facebook · LinkedIn · Instagram

### `Hero`
The template SHALL display a full-width hero with background image, heading, subtitle, and video play button.

### `FeaturedClasses`
The template SHALL display a carousel of yoga class cards with prices and images.

### `Schedule`
The template SHALL display a two-column grid of schedule items with time, date, and join button.

### `About`
The template SHALL display an about section with text and overlapping images.

### `Events`
The template SHALL display event cards with image, title, date, and description.

### `Gallery`
The template SHALL display a filterable image gallery with category buttons.

### `Contact`
The template SHALL display a contact form with name, email, subject, message fields and submit button.

### `Footer`
The template SHALL display a dark footer with Component Dock attribution link.

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
- **Provenance ban.** No file under `apps/asana/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/asana/public/CNAME` = `asana.free.componentdock.com`
  and the package `homepage` = `https://asana.free.componentdock.com`.

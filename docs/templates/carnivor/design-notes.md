# Carnivor — Design Notes

Reference: **Steakshop** — `https://colorlib.com/wp/template/steakshop/`  
Live preview: `https://preview.colorlib.com/theme/steakshop/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/steakshop-free-template.jpg  
Shipped: https://carnivor.free.componentdock.com

A free, production-ready React steakhouse landing page template featuring a right-sidebar navigation, hero banner, food courses, reservation form, chef spotlight, food gallery, brand partners, and a footer with newsletter signup.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Pacifico**, **Roboto**

## Design tokens (`apps/carnivor/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f42f2c` | brand |
| `--color-brand-light` | `#f48464` | brand light |
| `--color-ink` | `#222222` | Ink — dark headings (#222222 from the original). |
| `--color-paper` | `#ffffff` | Paper — light section background. |
| `--color-cream` | `#f9f9f9` | Cream — alternate section background. |
| `--color-mist` | `#777777` | Mist — muted body text (#777777 from the original). |
| `--color-primary-50` | `#fef2f2` | primary 50 |
| `--color-primary-100` | `#fee2e2` | primary 100 |
| `--color-primary-200` | `#fecaca` | primary 200 |
| `--color-primary-300` | `#fca5a5` | primary 300 |
| `--color-primary-400` | `#f87171` | primary 400 |
| `--color-primary-500` | `#f42f2c` | primary 500 |
| `--color-primary-600` | `#dc2626` | primary 600 |
| `--color-primary-700` | `#b91c1c` | primary 700 |
| `--color-primary-800` | `#991b1b` | primary 800 |
| `--color-primary-900` | `#7f1d1d` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Original fonts: "Pacifico" (headings) + "Roboto" (body). |
| `--font-display` | `'Pacifico', cursive` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero Section | see fidelity note below |
| 3 | `Courses` | Food Courses | see fidelity note below |
| 4 | `Reservation` | Reservation Form | see fidelity note below |
| 5 | `Chef` | Chef Section | see fidelity note below |
| 6 | `FoodGallery` | Food Gallery | see fidelity note below |
| 7 | `Brands` | Brand Partners | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Toggle navigation · Main navigation · button · Close navigation

### `Hero`
Users SHALL see a full-screen hero banner with a headline, description, and call-to-action button.

### `Courses`
Users SHALL see two food course sections with images and descriptive text.

### `Reservation`
Users SHALL be able to fill out and submit a reservation form with validation.

### `Chef`
Users SHALL see a chef spotlight with a portrait and specialty items.

### `FoodGallery`
Users SHALL see a grid of food photography images.

### `Brands`
Users SHALL see a section listing partner brands.

### `Footer`
Users SHALL see a footer with quick links, contact info, social icons, newsletter signup, and a Component Dock attribution link.

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
- **Provenance ban.** No file under `apps/carnivor/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/carnivor/public/CNAME` = `carnivor.free.componentdock.com`
  and the package `homepage` = `https://carnivor.free.componentdock.com`.

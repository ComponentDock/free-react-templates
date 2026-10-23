# Sana — Design Notes

Reference: **Hospice** — `https://colorlib.com/wp/template/hospice/`  
Live preview: `https://preview.colorlib.com/theme/hospice/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/hospice-free-template.jpg  
Shipped: https://sana.free.componentdock.com

Sana is a single-page medical / healthcare website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Hospice" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/sana/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-sky-50` | `#eaf6fd` | sky 50 |
| `--color-sky-100` | `#d2ecfb` | sky 100 |
| `--color-sky-200` | `#a8dcf7` | sky 200 |
| `--color-sky-300` | `#79c8f1` | sky 300 |
| `--color-sky-400` | `#4fb7ec` | sky 400 |
| `--color-sky-500` | `#3face4` | sky 500 |
| `--color-sky-600` | `#2d8fc9` | sky 600 |
| `--color-sky-700` | `#2775a6` | sky 700 |
| `--color-sky-800` | `#215f86` | sky 800 |
| `--color-sky-900` | `#1b4c6b` | sky 900 |
| `--color-band-50` | `#f9f9ff` | Neutral surfaces + text from the reference |
| `--color-menu-100` | `#f8f8f8` | menu 100 |
| `--color-ink-900` | `#222222` | ink 900 |
| `--color-mute-500` | `#777777` | mute 500 |
| `--color-line-300` | `#dddddd` | line 300 |
| `--color-line-200` | `#eeeeee` | line 200 |
| `--color-border-form` | `#ced4da` | border form |
| `--color-primary-50` | `#eaf6fd` | primary 50 |
| `--color-primary-100` | `#d2ecfb` | primary 100 |
| `--color-primary-200` | `#a8dcf7` | primary 200 |
| `--color-primary-300` | `#79c8f1` | primary 300 |
| `--color-primary-400` | `#4fb7ec` | primary 400 |
| `--color-primary-500` | `#3face4` | primary 500 |
| `--color-primary-600` | `#2d8fc9` | primary 600 |
| `--color-primary-700` | `#2775a6` | primary 700 |
| `--color-primary-800` | `#215f86` | primary 800 |
| `--color-primary-900` | `#1b4c6b` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Roboto (body + nav) — Google Fonts via index.html |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | — | no dedicated spec block |
| 2 | `Navbar` | — | no dedicated spec block |
| 3 | `Hero` | Hero | see fidelity note below |
| 4 | `ProcedureCategory` | Procedure Category | see fidelity note below |
| 5 | `AboutMyself` | About Myself | see fidelity note below |
| 6 | `Feedback` | Client Feedback | see fidelity note below |
| 7 | `Services` | Our Offered Services | see fidelity note below |
| 8 | `Appointment` | Appointment | see fidelity note below |
| 9 | `RecentBlogs` | Recent Blogs | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Navbar`
*anchors only* — Main · Sana home · menu · menuitem · Search · Toggle dark mode

### `Hero`
The system SHALL render a full-width hero with a medical background image, headline, subtext, and a primary call-to-action.

### `ProcedureCategory`
The system SHALL render a section of image cards that reveal an overlay label on hover.

### `AboutMyself`
The system SHALL render an about section with a left-aligned title and four stat/activity cards.

### `Feedback`
The system SHALL render a rotating carousel of patient testimonial cards.

### `Services`
The system SHALL render a four-column grid of medical service items.

### `Appointment`
The system SHALL render a two-part appointment section with service hours and a booking form.

### `RecentBlogs`
The system SHALL render a three-column grid of blog post cards.

### `Footer`
The system SHALL render a dark footer with link columns, contact details, a newsletter signup, and a copyright bar.

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
- **Provenance ban.** No file under `apps/sana/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sana/public/CNAME` = `sana.free.componentdock.com`
  and the package `homepage` = `https://sana.free.componentdock.com`.

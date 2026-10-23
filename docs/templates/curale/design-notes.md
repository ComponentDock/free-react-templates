# Curale — Design Notes

Reference: **Medino** — `https://colorlib.com/wp/template/medino/`  
Live preview: `https://preview.colorlib.com/theme/medino/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/medino-free-template.jpg  
Shipped: https://curale.free.componentdock.com

Curale is a single-page medical-clinic website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700;900**, **Ubuntu**

## Design tokens (`apps/curale/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#244cfd` | brand |
| `--color-cyan` | `#15e4fd` | cyan |
| `--color-ink` | `#222222` | Headings #222 (Ubuntu 700), body copy #777 (Roboto 15px). |
| `--color-body` | `#777777` | body |
| `--color-surface` | `#f9f9fd` | surface |
| `--color-surface-alt` | `#f9f9ff` | surface alt |
| `--color-footer` | `#12151f` | Dark footer #12151f (navy-black, white text). |
| `--color-primary-50` | `#eef1ff` | primary 50 |
| `--color-primary-100` | `#dce4ff` | primary 100 |
| `--color-primary-200` | `#b9c8ff` | primary 200 |
| `--color-primary-300` | `#8aa5ff` | primary 300 |
| `--color-primary-400` | `#5c7cff` | primary 400 |
| `--color-primary-500` | `#3558fd` | primary 500 |
| `--color-primary-600` | `#244cfd` | primary 600 |
| `--color-primary-700` | `#0f3bb8` | primary 700 |
| `--font-heading` | `'Ubuntu', sans-serif` | font heading |
| `--font-sans` | `'Roboto', sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Top info bar and sticky navigation header | see fidelity note below |
| 2 | `Hero` | Full-width hero banner | see fidelity note below |
| 3 | `Features` | Four feature cards | see fidelity note below |
| 4 | `Welcome` | Welcome section with framed text panel | see fidelity note below |
| 5 | `Departments` | Department cards with hover overlay | see fidelity note below |
| 6 | `Patients` | Patient testimonials and appointment form | see fidelity note below |
| 7 | `Specialists` | Specialist doctor cards | see fidelity note below |
| 8 | `Hotline` | Emergency hotline band | see fidelity note below |
| 9 | `News` | Recent medical news cards | see fidelity note below |
| 10 | `Footer` | Dark footer with newsletter and Instagram feed | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top info bar (contact info left, social icons right, white translucent bg, hidden below 768px) above a fixed main nav with logo and dropdown menus, matching the source structure.

### `Hero`
The system SHALL render a full-width hero with a cover background image, headline stack and a gradient CTA button.

### `Features`
The system SHALL render four feature cards (icon, title, text) in a row on `#f9f9fd` cards with 5px radius and a hover lift.

### `Welcome`
The system SHALL render a split welcome section with an image on one side and a thick-bordered text panel on the other.

### `Departments`
The system SHALL render a "Popular department" section with department cards (image, hover overlay, title) in a grid.

### `Patients`
The system SHALL render two testimonial cards with overlapping round avatars plus a gradient-overlay appointment form with validated fields.

### `Specialists`
The system SHALL render four doctor cards with name/role bars that turn gradient on hover.

### `Hotline`
The system SHALL render a full-width hotline band with a background image, gradient overlay, heading, large phone number and support copy.

### `News`
The system SHALL render three news cards with a blue date badge overlapping the image, a title link and a "read more" link with a sliding arrow.

### `Footer`
The system SHALL render a dark `#12151f` footer with a links column, a newsletter signup and an Instagram feed grid, plus a copyright bar with social icons.

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
- **Provenance ban.** No file under `apps/curale/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/curale/public/CNAME` = `curale.free.componentdock.com`
  and the package `homepage` = `https://curale.free.componentdock.com`.

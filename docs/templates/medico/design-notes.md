# Medico — Design Notes

Reference: **Medico** — `https://colorlib.com/wp/template/medico/`  
Live preview: `https://preview.colorlib.com/theme/medico/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/medic-free-template.jpg  
Shipped: https://medico.free.componentdock.com

Medico is a single-page medical-clinic template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Medico" entry in TEMPLATES.md (line 448, source: https://colorlib.com/wp/template/medico/), built with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@400;500;600;700**, **Roboto**

## Design tokens (`apps/medico/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#eef6ff` | primary 50 |
| `--color-primary-100` | `#d9ecff` | primary 100 |
| `--color-primary-200` | `#b8daff` | primary 200 |
| `--color-primary-300` | `#8cc4ff` | primary 300 |
| `--color-primary-400` | `#64a7ff` | primary 400 |
| `--color-primary-500` | `#649bff` | primary 500 |
| `--color-primary-600` | `#0070fa` | primary 600 |
| `--color-primary-700` | `#0065e1` | primary 700 |
| `--color-primary-800` | `#0750a8` | primary 800 |
| `--color-primary-900` | `#0a3d7c` | primary 900 |
| `--color-brand` | `#0070fa` | brand |
| `--color-brand-2` | `#649bff` | brand 2 |
| `--color-brand-hover` | `#0065e1` | brand hover |
| `--color-icon-circle` | `#f0e9ff` | icon circle |
| `--color-icon-circle-2` | `#f2f6f8` | icon circle 2 |
| `--color-card-border` | `#f2f6f8` | card border |
| `--color-section` | `#f9f9ff` | section |
| `--color-footer` | `#f3f6f7` | footer |
| `--color-heading` | `#242429` | heading |
| `--color-feature-title` | `#0c2e60` | feature title |
| `--color-muted` | `#7f7f7f` | muted |
| `--font-serif` | `'Playfair Display', ui-serif, Georgia, serif` | font serif |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header and navigation | see fidelity note below |
| 2 | `Hero` | Hero banner | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Services` | Services band | see fidelity note below |
| 5 | `Departments` | Departments grid | see fidelity note below |
| 6 | `Doctors` | Doctors grid | see fidelity note below |
| 7 | `AppointmentForm` | Appointment form | see fidelity note below |
| 8 | `Blog` | Blog section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a white header with a logo wordmark, a horizontal nav menu, a hotline callout and a gradient appointment button.

### `Hero`
The system SHALL render a tall hero with an eyebrow, a serif headline, a paragraph, a gradient CTA button and an illustration.

### `About`
The system SHALL render an about section with a photo, a heading, a paragraph, a white "learn more" button and three icon items.

### `Services`
The system SHALL render a light band with a centered title and four feature cards, each with an icon circle, a title and a blurb.

### `Departments`
The system SHALL render a section title and a grid of four bordered department cards.

### `Doctors`
The system SHALL render a title, a subtitle and a grid of four doctor cards with name and specialty.

### `AppointmentForm`
The system SHALL render a blue-gradient reservation band with a heading and an appointment form with service and time selects and a submit button.

### `Blog`
The system SHALL render a title and two article cards, each with a photo, a title, an author, a category and a paragraph.

### `Footer`
The system SHALL render a light footer with about text, link columns, a newsletter form and a copyright bar.

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
- **Provenance ban.** No file under `apps/medico/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/medico/public/CNAME` = `medico.free.componentdock.com`
  and the package `homepage` = `https://medico.free.componentdock.com`.

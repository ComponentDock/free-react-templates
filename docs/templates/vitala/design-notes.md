# Vitala — Design Notes

Reference: **Medicare2** — `https://colorlib.com/wp/template/medicare2/`  
Live preview: `https://preview.colorlib.com/theme/medicare2/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/medicare2-free-template.jpg  
Shipped: https://vitala.free.componentdock.com

Vitala is a medical and healthcare landing page template. It recreates the ColorLib "Medicare2" design as a React 19 + Vite + Tailwind CSS 4 + TypeScript application with a blue gradient brand palette, Playfair Display headings, and Roboto body text.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@400;700**, **Roboto**

## Design tokens (`apps/vitala/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-sky-50` | `#f0f9ff` | sky 50 |
| `--color-sky-100` | `#e0f2fe` | sky 100 |
| `--color-sky-200` | `#bae6fd` | sky 200 |
| `--color-sky-300` | `#7dd3fc` | sky 300 |
| `--color-sky-400` | `#0ba9ff` | sky 400 |
| `--color-sky-500` | `#56d9ff` | sky 500 |
| `--color-sky-600` | `#0284c7` | sky 600 |
| `--color-sky-700` | `#0369a1` | sky 700 |
| `--color-sky-800` | `#075985` | sky 800 |
| `--color-sky-900` | `#0c4a6e` | sky 900 |
| `--font-heading` | `'Playfair Display', ui-serif, Georgia, serif` | Playfair Display — the original template's heading typeface |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Roboto — the original template's body typeface |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Features` | — | no dedicated spec block |
| 4 | `About` | — | no dedicated spec block |
| 5 | `Departments` | Department icons are displayed | see fidelity note below |
| 6 | `Counters` | Footer contains Component Dock link | see fidelity note below |
| 7 | `Team` | — | no dedicated spec block |
| 8 | `BlogAppointment` | Appointment form interaction | see fidelity note below |
| 9 | `Footer` | Footer contains Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Primary · Search · Vitala

### `Hero`
*anchors only* — Caring for Your Health with Compassion and Excellence · Learn More

### `Features`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `About`
*anchors only* — Welcome to Vitala Medical Center · Doctors Time Table

### `Departments`
The departments section SHALL display 6 medical department icons with labels.

### `Counters`
The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

### `Team`
*anchors only* — Meet Our Doctors

### `BlogAppointment`
The appointment form SHALL accept patient details and allow form submission.

### `Footer`
The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/vitala/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vitala/public/CNAME` = `vitala.free.componentdock.com`
  and the package `homepage` = `https://vitala.free.componentdock.com`.

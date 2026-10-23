# Odonto — Design Notes

Reference: **Toothcare** — `https://colorlib.com/wp/template/toothcare/`  
Live preview: `https://preview.colorlib.com/theme/toothcare/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/toothcare-free-template.jpg  
Shipped: https://odonto.free.componentdock.com

A dental clinic template with top bar, hero, info cards, services, appointment booking, team and testimonials sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/odonto/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-teal-50` | `#e0f7fa` | teal 50 |
| `--color-teal-100` | `#b2ebf2` | teal 100 |
| `--color-teal-200` | `#80deea` | teal 200 |
| `--color-teal-300` | `#4dd0e1` | teal 300 |
| `--color-teal-400` | `#00bcd4` | teal 400 |
| `--color-teal-500` | `#00acc1` | teal 500 |
| `--color-teal-600` | `#0097a7` | teal 600 |
| `--color-teal-700` | `#00838f` | teal 700 |
| `--color-teal-800` | `#006064` | teal 800 |
| `--color-teal-900` | `#004d40` | teal 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

> The spec has no section-level requirements; the order below is read from `apps/odonto/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | — | no dedicated spec block |
| 2 | `Navbar` | — | no dedicated spec block |
| 3 | `Hero` | — | no dedicated spec block |
| 4 | `InfoCards` | — | no dedicated spec block |
| 5 | `Services` | — | no dedicated spec block |
| 6 | `About` | — | no dedicated spec block |
| 7 | `Appointment` | — | no dedicated spec block |
| 8 | `Counter` | — | no dedicated spec block |
| 9 | `Team` | — | no dedicated spec block |
| 10 | `Testimonials` | — | no dedicated spec block |
| 11 | `Blog` | — | no dedicated spec block |
| 12 | `CTABanner` | — | no dedicated spec block |
| 13 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
*anchors only* — Mon - Fri 8:00 - 17:00

### `Navbar`
*anchors only* — Odonto · Make an Appointment

### `Hero`
*anchors only* — View Services

### `InfoCards`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Services`
*anchors only* — Toothcare Services

### `About`
*anchors only* — Toothcare is a Dental Clinic and Innovative Approach to Treatment

### `Appointment`
*anchors only* — status · Make An Appointment · Easy Booking — fill out the form below · Appointment Requested! · We will contact you shortly to confirm your booking. · Name

### `Counter`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Team`
*anchors only* — Qualified Dentist

### `Testimonials`
*anchors only* — Happy Customers · Result of our Treatment and Work

### `Blog`
*anchors only* — Recent From Blog

### `CTABanner`
*anchors only* — Do not wait, make an appointment today! · Make an Appointment

### `Footer`
*anchors only* — Odonto · Services · Quick Links · Have a Questions? · Component Dock

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
- **Provenance ban.** No file under `apps/odonto/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/odonto/public/CNAME` = `odonto.free.componentdock.com`
  and the package `homepage` = `https://odonto.free.componentdock.com`.

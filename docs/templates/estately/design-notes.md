# Estately — Design Notes

Reference: **Mondy** — `https://colorlib.com/wp/template/mondy/`  
Live preview: `https://preview.colorlib.com/theme/mondy/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/mondy-free-template.jpg  
Shipped: https://estately.free.componentdock.com

Estately is a single-page real-estate website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Mondy" website template (source: https://colorlib.com/wp/template/mondy/ — "Mondy

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@400;700**, **Roboto**

## Design tokens (`apps/estately/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff000a` | brand |
| `--color-offer` | `#ffba00` | offer |
| `--color-charcoal` | `#22242b` | charcoal |
| `--color-heading` | `#322429` | heading |
| `--color-body` | `#6a6a6a` | body |
| `--color-input` | `#3a3a3a` | input |
| `--color-muted` | `#b6b6b6` | muted |
| `--color-copyright` | `#676767` | copyright |
| `--color-primary-50` | `#fff0f0` | primary 50 |
| `--color-primary-100` | `#ffd6d8` | primary 100 |
| `--color-primary-200` | `#ffa8ab` | primary 200 |
| `--color-primary-300` | `#ff7579` | primary 300 |
| `--color-primary-400` | `#ff3d43` | primary 400 |
| `--color-primary-500` | `#ff141c` | primary 500 |
| `--color-primary-600` | `#ff000a` | primary 600 |
| `--color-primary-700` | `#d90009` | primary 700 |
| `--color-primary-800` | `#a80007` | primary 800 |
| `--color-primary-900` | `#7a0005` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-heading` | `'Lato', ui-sans-serif, system-ui, sans-serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Header / Navbar | see fidelity note below |
| 2 | `Hero` | Hero search | see fidelity note below |
| 3 | `Intro` | Intro section | see fidelity note below |
| 4 | `Properties` | — | no dedicated spec block |
| 5 | `Loan` | Mortgage loan section | see fidelity note below |
| 6 | `Stories` | Seller Success Stories | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a white-on-dark header with a brand wordmark on the left, six nav links (Home active with a red underline), a Pages dropdown, and Sign in / Join us actions on the right.

### `Hero`
The system SHALL render a full-height hero with a background photo, a dark translucent search panel with five property-type tabs, a search input and a Search button.

### `Intro`
The system SHALL render a white intro section titled "Sell Faster. Save Thousands." with two alternating image + text rows, each with a heading, a paragraph and a "Find out more" red underline link.

### `Properties`
*anchors only* — Find out more

### `Loan`
The system SHALL render a dark charcoal (`#22242b`) "See If You Qualify for a Mortgage" section with two text inputs and a Submit button.

### `Stories`
The system SHALL render a "Seller Success Stories" section with an image on the right and text (heading, paragraph, "Find out more" link) on the left.

### `Footer`
The system SHALL render a dark footer with an about widget (logo, blurb, "WE ARE HIRING" button), four link columns (Company, For Buyers, For Sellers, For Renters), and a copyright bar.

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
- **Provenance ban.** No file under `apps/estately/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/estately/public/CNAME` = `estately.free.componentdock.com`
  and the package `homepage` = `https://estately.free.componentdock.com`.

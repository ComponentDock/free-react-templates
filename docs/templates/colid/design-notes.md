# Colid — Design Notes

Reference: **Colid** — `https://colorlib.com/wp/template/colid/`  
Live preview: `https://preview.colorlib.com/theme/colid/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colid-free-app-landing-page-website-template.jpg  
Shipped: https://colid.free.componentdock.com

Colid is a single-page business/promotional landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Colid" website template design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/colid/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#eaf7fc` | primary 50 |
| `--color-primary-100` | `#cdecf8` | primary 100 |
| `--color-primary-200` | `#9edcf2` | primary 200 |
| `--color-primary-300` | `#75cbe7` | primary 300 |
| `--color-primary-400` | `#3baad8` | primary 400 |
| `--color-primary-500` | `#138fc2` | primary 500 |
| `--color-primary-600` | `#2f60c3` | primary 600 |
| `--color-primary-700` | `#274f9f` | primary 700 |
| `--color-primary-800` | `#1f3d7c` | primary 800 |
| `--color-primary-900` | `#172d5c` | primary 900 |
| `--color-paper` | `#f2fefe` | paper |
| `--color-night` | `#000000` | night |
| `--color-muted` | `#515656` | muted |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original font: "Poppins" (Google Fonts, loaded in index.html). |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Highlights` | Highlight tiles | see fidelity note below |
| 4 | `Showcase` | — | no dedicated spec block |
| 5 | `SpecialFeatures` | Special features section | see fidelity note below |
| 6 | `Pricing` | Pricing section | see fidelity note below |
| 7 | `Team` | Team section | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `Faq` | FAQ section | see fidelity note below |
| 10 | `Clients` | — | no dedicated spec block |
| 11 | `Blog` | Blog section | see fidelity note below |
| 12 | `Contact` | Contact footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Colid", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline, a blurb, a "Watch video" button, and a rotating screen preview.

### `Highlights`
The system SHALL render three highlight tiles with icons and blurbs.

### `Showcase`
*anchors only* — Previous showcase slide · Next showcase slide · Read more

### `SpecialFeatures`
The system SHALL render a special features section with a heading and three feature tiles.

### `Pricing`
The system SHALL render a pricing section with a heading and three plans, each with features and a purchase button.

### `Team`
The system SHALL render a team section with a heading and four members.

### `Testimonials`
The system SHALL render a testimonials carousel with quotes and controls.

### `Faq`
The system SHALL render an FAQ section with a heading and an accordion of questions.

### `Clients`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Blog`
The system SHALL render a blog section with three article cards.

### `Contact`
The system SHALL render a contact footer with contact details, a contact form, and a copyright line.

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
- **Provenance ban.** No file under `apps/colid/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/colid/public/CNAME` = `colid.free.componentdock.com`
  and the package `homepage` = `https://colid.free.componentdock.com`.

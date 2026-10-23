# Solo — Design Notes

Reference: **Personal** — `https://colorlib.com/wp/template/personal/`  
Live preview: `https://preview.colorlib.com/theme/personal/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/personal-free-template.jpg  
Shipped: https://solo.free.componentdock.com

Solo is a single-page personal-portfolio / resume template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Personal" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600**

## Design tokens (`apps/solo/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#8490ff` | primary |
| `--color-accent` | `#62bdfc` | accent |
| `--color-band` | `#f9f9ff` | band |
| `--color-ink` | `#222222` | ink |
| `--color-muted` | `#777777` | muted |
| `--color-night` | `#04091e` | night |
| `--color-primary-50` | `#eef0ff` | primary 50 |
| `--color-primary-100` | `#dfe3ff` | primary 100 |
| `--color-primary-200` | `#c2c9ff` | primary 200 |
| `--color-primary-300` | `#a3adff` | primary 300 |
| `--color-primary-400` | `#8d99ff` | primary 400 |
| `--color-primary-500` | `#8490ff` | primary 500 |
| `--color-primary-600` | `#6e7cf5` | primary 600 |
| `--color-primary-700` | `#5a68dd` | primary 700 |
| `--color-primary-800` | `#4a57b8` | primary 800 |
| `--color-primary-900` | `#3b4692` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original font: Poppins (Google), weight 300 body, loaded via <link>. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header navigation | see fidelity note below |
| 2 | `Hero` | Banner hero | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Services` | Services | see fidelity note below |
| 5 | `Facts` | Facts counter band | see fidelity note below |
| 6 | `Portfolio` | Portfolio | see fidelity note below |
| 7 | `Testimonials` | Testimonials | see fidelity note below |
| 8 | `Pricing` | Pricing | see fidelity note below |
| 9 | `BlogSection` | — | no dedicated spec block |
| 10 | `Brands` | Client brands band | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Header`
The system SHALL render a fixed white header with the site name "Solo" and navigation links, gaining a shadow once the page is scrolled.

### `Hero`
The system SHALL render a split hero on a #f9f9ff background with an eyebrow line, a large uppercase name headline, an intro paragraph, a CTA button, and a framed portrait photo on the right.

### `About`
The system SHALL render an about section with a photo on the left and an "About Me" / "Personal Details" heading, two paragraphs, and a "View Full Details" button on the right.

### `Services`
The system SHALL render a white services section with a centered title and three columns, each with an icon, a bold title, and a description; the icon SHALL invert to a gradient background on hover.

### `Facts`
The system SHALL render a band with the brand gradient background and four statistics with large numerals and labels.

### `Portfolio`
The system SHALL render a portfolio section with filter buttons and six image items that show an overlay with a preview icon on hover.

### `Testimonials`
The system SHALL render a #f9f9ff testimonials section with a centered title and a carousel of white quote cards, each with an avatar, name, and role.

### `Pricing`
The system SHALL render a pricing section with three cards (Economy, Business, Premium) that each list features and a price, and SHALL invert to the brand gradient on hover.

### `BlogSection`
*anchors only* — Blog

### `Brands`
The system SHALL render a band with the brand gradient background showing a row of client logo placeholders.

### `Footer`
The system SHALL render a dark #04091e footer with three widgets: About Me (text + copyright crediting Component Dock), Newsletter (email input + send button), and Follow Me (social icon links).

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
- **Provenance ban.** No file under `apps/solo/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/solo/public/CNAME` = `solo.free.componentdock.com`
  and the package `homepage` = `https://solo.free.componentdock.com`.

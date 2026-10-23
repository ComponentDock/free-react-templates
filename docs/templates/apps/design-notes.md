# Apps — Design Notes

Reference: **Apps** — `https://colorlib.com/wp/template/apps/`  
Live preview: `https://preview.colorlib.com/theme/apps/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/apps-free-app-website-template.jpg  
Shipped: https://apps.free.componentdock.com

Apps is a single-page app landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Apps" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700;800**

## Design tokens (`apps/apps/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#eef6ff` | primary 50 |
| `--color-primary-100` | `#d9ecff` | primary 100 |
| `--color-primary-200` | `#b8dbff` | primary 200 |
| `--color-primary-300` | `#8cc4ff` | primary 300 |
| `--color-primary-400` | `#5aa9ff` | primary 400 |
| `--color-primary-500` | `#3ea7ff` | primary 500 |
| `--color-primary-600` | `#3ea7ff` | primary 600 |
| `--color-primary-700` | `#2f86d6` | primary 700 |
| `--color-primary-800` | `#276da8` | primary 800 |
| `--color-primary-900` | `#225c87` | primary 900 |
| `--color-azure` | `#42d1ff` | Cyan brand accent #42d1ff (gradient end, hovers). |
| `--color-night` | `#222222` | Dark footer #222222, light section backgrounds, muted text. |
| `--color-paper` | `#f9f9ff` | paper |
| `--color-fog` | `#f1f1f1` | fog |
| `--color-muted` | `#777777` | muted |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original font: "Poppins" (Google Fonts, loaded in index.html). |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Categories` | Categories section | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `Services` | Services section | see fidelity note below |
| 6 | `Video` | Video band | see fidelity note below |
| 7 | `Features` | — | no dedicated spec block |
| 8 | `Pricing` | Pricing section | see fidelity note below |
| 9 | `Faq` | FAQ and stats section | see fidelity note below |
| 10 | `Cta` | — | no dedicated spec block |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Apps", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline, a blurb, and a call-to-action button.

### `Categories`
The system SHALL render a categories section with a heading and three category cards, each with an icon, a title, and a blurb.

### `About`
The system SHALL render an about section with the heading "We Believe that Interior beautifies the Total Architecture", a blurb, and a details link.

### `Services`
The system SHALL render a services section with a heading and three service tiles, each with an icon, a title, and a blurb.

### `Video`
The system SHALL render a video band with a heading "Being unique is the preference" and a play button.

### `Features`
*anchors only* — Some Features that Made us Unique · Who are in extremely love with eco friendly system.

### `Pricing`
The system SHALL render a pricing section with three plans, each with a name, an audience line, a price, a feature list, and a purchase button.

### `Faq`
The system SHALL render a FAQ section with a heading, three questions, and a stats row with four figures.

### `Cta`
*anchors only* — Download This App Today!

### `Footer`
The system SHALL render a footer with link columns, a newsletter form, social links, and a copyright line.

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
- **Provenance ban.** No file under `apps/apps/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/apps/public/CNAME` = `apps.free.componentdock.com`
  and the package `homepage` = `https://apps.free.componentdock.com`.

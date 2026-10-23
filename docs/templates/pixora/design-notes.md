# Pixora — Design Notes

Reference: **Yaseen** — `https://colorlib.com/wp/template/yaseen/`  
Live preview: `https://preview.colorlib.com/theme/yaseen/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/yaseen-creative-photography-website-landing-page-template.jpg  
Shipped: https://pixora.free.componentdock.com

Pixora is a single-page creative / photography landing page template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@100;300;400;500;600**

## Design tokens (`apps/pixora/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#a387ff` | brand |
| `--color-brand-light` | `#91d1ff` | brand light |
| `--color-ink` | `#222222` | Ink — dark text/headings (#222222 from the original). |
| `--color-muted` | `#777777` | Muted — secondary text (#777777 from the original). |
| `--color-mist` | `#f9faff` | Mist — light section background (#f9faff from the original). |
| `--color-primary-50` | `#f6f3ff` | primary 50 |
| `--color-primary-100` | `#ede7ff` | primary 100 |
| `--color-primary-200` | `#d8ccff` | primary 200 |
| `--color-primary-300` | `#bfacff` | primary 300 |
| `--color-primary-400` | `#b09bff` | primary 400 |
| `--color-primary-500` | `#a387ff` | primary 500 |
| `--color-primary-600` | `#8f6df0` | primary 600 |
| `--color-primary-700` | `#7c58d6` | primary 700 |
| `--color-primary-800` | `#6848b5` | primary 800 |
| `--color-primary-900` | `#553a94` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original font: "Poppins" (100/300/400/500/600). |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Header with nav and mobile menu | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Features` | Features section | see fidelity note below |
| 5 | `Facts` | Facts band | see fidelity note below |
| 6 | `Services` | Services section | see fidelity note below |
| 7 | `NumberedRows` | Numbered feature rows | see fidelity note below |
| 8 | `Newsletter` | Newsletter subscription | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a header with the site logo "Pixora", three anchor links, and a hamburger trigger on small screens that opens a closable mobile menu.

### `Hero`
The system SHALL render a hero with a background photo under a blue→purple gradient overlay, a white uppercase two-line headline with the brand name highlighted, and a white paragraph.

### `About`
The system SHALL render an about section with a framed photo on the left and, on the right, a sun icon, a two-tone heading, a blurb, and a "Learn Details" link.

### `Features`
The system SHALL render a features section on the brand gradient with six white cards, each with an uppercase title and a short blurb.

### `Facts`
The system SHALL render a facts band with four stats, each a large number with a purple caption.

### `Services`
The system SHALL render a services section on a light background with three cards, each with an image, a title, a blurb, and a "View Details" link.

### `NumberedRows`
The system SHALL render three numbered rows (01/02/03), each with a large purple number, a dash-prefixed title, and a blurb.

### `Newsletter`
The system SHALL render a newsletter band on the brand gradient with a "Subscribe for our Newsletter" heading, a no-spam note, an email input, and a "Get Started" button, and SHALL show a success message after a valid submit.

### `Footer`
The system SHALL render a footer with three menu links, four social icons, and a copyright line linking to Component Dock.

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
- **Provenance ban.** No file under `apps/pixora/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pixora/public/CNAME` = `pixora.free.componentdock.com`
  and the package `homepage` = `https://pixora.free.componentdock.com`.

# Reckoner — Design Notes

Reference: **Book Keeping** — `https://colorlib.com/wp/template/book-keeping/`  
Live preview: `https://preview.colorlib.com/theme/book-keeping/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bookkeeping-free-template.jpg  
Shipped: https://reckoner.free.componentdock.com

Reckoner is a single-page bookkeeping consulting agency template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;500;600;700**, **Open Sans**

## Design tokens (`apps/reckoner/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#e8ecfa` | primary 50 |
| `--color-primary-100` | `#c5cef2` | primary 100 |
| `--color-primary-200` | `#9eaee7` | primary 200 |
| `--color-primary-300` | `#778edc` | primary 300 |
| `--color-primary-400` | `#5977d4` | primary 400 |
| `--color-primary-500` | `#2b3990` | primary 500 |
| `--color-primary-600` | `#263485` | primary 600 |
| `--color-primary-700` | `#1f2c75` | primary 700 |
| `--color-primary-800` | `#192465` | primary 800 |
| `--color-primary-900` | `#0e1648` | primary 900 |
| `--color-ink` | `#333333` | Body text: #333333 |
| `--color-smoke` | `#666666` | Muted/label text: #666666 |
| `--color-mist` | `#f8f9fa` | Light section backgrounds |
| `--color-snow` | `#ffffff` | snow |
| `--font-display` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | Font headings: Montserrat |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | Font body: Open Sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ContactBar` | Contact sub-bar | see fidelity note below |
| 2 | `Navbar` | Navigation bar | see fidelity note below |
| 3 | `Hero` | Hero section | see fidelity note below |
| 4 | `AboutUs` | About Us section | see fidelity note below |
| 5 | `Services` | Services section | see fidelity note below |
| 6 | `Counters` | Counters section | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `Newsletter` | Newsletter section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `ContactBar`
The system SHALL render a thin white top bar displaying contact information and social media icons.

### `Navbar`
The system SHALL render a white full-width navigation bar with logo, nav links, and social media icon buttons.

### `Hero`
The system SHALL render a full-width hero section with a photographic background, white heading, subtitle, and a dark blue CTA button.

### `AboutUs`
The system SHALL render a two-column About Us section with an image on the left and content on the right.

### `Services`
The system SHALL render a Services section with multiple service cards displaying icons, titles, and descriptions.

### `Counters`
The system SHALL render a Counters section displaying numerical statistics.

### `Testimonials`
The system SHALL render a Testimonials section with quote cards including author information.

### `Newsletter`
The system SHALL render a Newsletter section with an email input and submit button.

### `Footer`
The system SHALL render a footer with navigation links, social icons, copyright, and a Component Dock attribution link.

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
- **Provenance ban.** No file under `apps/reckoner/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/reckoner/public/CNAME` = `reckoner.free.componentdock.com`
  and the package `homepage` = `https://reckoner.free.componentdock.com`.

# Bulkapp — Design Notes

Reference: **Bulkapp** — `https://colorlib.com/wp/template/bulkapp/`  
Live preview: `https://preview.colorlib.com/theme/bulkapp/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bulkapp-free-template.jpg  
Shipped: https://bulkapp.free.componentdock.com

BulkApp is a single-page app landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "BulkApp" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@400;600;700**, **Roboto**

## Design tokens (`apps/bulkapp/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f5f1fe` | primary 50 |
| `--color-primary-100` | `#eae1fd` | primary 100 |
| `--color-primary-200` | `#d6c4fb` | primary 200 |
| `--color-primary-300` | `#b99ff8` | primary 300 |
| `--color-primary-400` | `#9e74f5` | primary 400 |
| `--color-primary-500` | `#7249fb` | primary 500 |
| `--color-primary-600` | `#6247ea` | primary 600 |
| `--color-primary-700` | `#5237c8` | primary 700 |
| `--color-primary-800` | `#432da1` | primary 800 |
| `--color-primary-900` | `#372780` | primary 900 |
| `--color-brand-start` | `#bc2bff` | Gradient endpoints for hero + download CTA backgrounds. |
| `--color-brand-end` | `#7249fb` | brand end |
| `--color-paper` | `#f9f9ff` | paper |
| `--color-night` | `#222222` | night |
| `--color-muted` | `#777777` | muted |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Features` | Features section | see fidelity note below |
| 4 | `About` | About sections | see fidelity note below |
| 5 | `Pricing` | Pricing section | see fidelity note below |
| 6 | `Screenshots` | Screenshots section | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `DownloadCta` | Download CTA | see fidelity note below |
| 9 | `News` | Latest news section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "BulkApp", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline, a blurb, a phone mockup illustration, and a call-to-action button.

### `Features`
The system SHALL render a features section with a heading and four feature tiles, each with an icon, a title, and a blurb.

### `About`
The system SHALL render two about sections sharing the heading "We Believe that Interior beautifies the Total Architecture", each with a blurb and a "See Details" link. The second section SHALL embed a product tour video thumbnail with a play button.

### `Pricing`
The system SHALL render a pricing section with a heading, a plan with a name, an audience line, a price, a feature list, and a purchase button. The original ColorLib design renders the same "Standard" card three times in a three-column row; the recreation keeps that 1:1.

### `Screenshots`
The system SHALL render a screenshots section with a heading and a row of screenshot placeholder images.

### `Testimonials`
The system SHALL render a testimonials section with a heading, a quote, and a reviewer.

### `DownloadCta`
The system SHALL render a download call-to-action section with a heading, a blurb, and two store links.

### `News`
The system SHALL render a latest news section with a heading and three article cards, each with a date, a title, and a blurb.

### `Footer`
The system SHALL render a footer with link columns, social links, and a copyright line.

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
- **Provenance ban.** No file under `apps/bulkapp/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/bulkapp/public/CNAME` = `bulkapp.free.componentdock.com`
  and the package `homepage` = `https://bulkapp.free.componentdock.com`.

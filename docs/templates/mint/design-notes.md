# Mint — Design Notes

Reference: **Interior Design** — `https://colorlib.com/wp/template/interior-design/`  
Live preview: `https://preview.colorlib.com/theme/interiordesign/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/interiordesign-free-template.jpg  
Shipped: https://mint.free.componentdock.com

Mint is a single-page interior design landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito Sans**, **Nunito Sans:wght@300;400;600;700;900**

## Design tokens (`apps/mint/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#98ccd3` | Mint brand teal — measured from the reference stylesheet (css/style.css): #98ccd3 buttons, accents, overlays. |
| `--color-brand-dark` | `#7dbfc8` | Deeper teal for hover states. |
| `--color-ink` | `#212529` | Ink — headings and dark text (#212529 from the original). |
| `--color-mist` | `#6c757d` | Mist — muted body text (#6c757d from the original). |
| `--color-paper` | `#edf0f5` | Paper — light section backgrounds (#edf0f5 from the original). |
| `--color-coal` | `#212529` | Coal — dark footer background (#212529 from the original). |
| `--color-primary-50` | `#f0f9fa` | primary 50 |
| `--color-primary-100` | `#d9f0f2` | primary 100 |
| `--color-primary-200` | `#b6e2e6` | primary 200 |
| `--color-primary-300` | `#98ccd3` | primary 300 |
| `--color-primary-400` | `#6fb3bd` | primary 400 |
| `--color-primary-500` | `#559aa6` | primary 500 |
| `--color-primary-600` | `#447e89` | primary 600 |
| `--color-primary-700` | `#3a6871` | primary 700 |
| `--color-primary-800` | `#33565d` | primary 800 |
| `--color-primary-900` | `#2e484f` | primary 900 |
| `--font-sans` | `'Nunito Sans', ui-sans-serif, system-ui, sans-serif` | Original font: "Nunito Sans" (body + display). |
| `--font-display` | `'Nunito Sans', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Services` | Services section | see fidelity note below |
| 4 | `WhyUs` | Why Us section | see fidelity note below |
| 5 | `Testimonials` | Testimonials section | see fidelity note below |
| 6 | `Works` | Works section | see fidelity note below |
| 7 | `Blog` | Blog section | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Mint", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline and a CTA button.

### `Services`
The system SHALL render a services section with a heading and at least three service cards.

### `WhyUs`
The system SHALL render a "Why Us" section with at least three numbered FAQ items.

### `Testimonials`
The system SHALL render a testimonials section with at least three client quotes.

### `Works`
The system SHALL render a works gallery with a heading and at least three project images with captions.

### `Blog`
The system SHALL render a blog section with a heading and at least three post cards.

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
- **Provenance ban.** No file under `apps/mint/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/mint/public/CNAME` = `mint.free.componentdock.com`
  and the package `homepage` = `https://mint.free.componentdock.com`.

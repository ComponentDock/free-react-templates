# Girder — Design Notes

Reference: **Constructed** — `https://colorlib.com/wp/template/constructed/`  
Live preview: `https://preview.colorlib.com/theme/constructed/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/constructed-free-template.jpg  
Shipped: https://girder.free.componentdock.com

Girder is a single-page architecture/construction landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Constructed" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;600;700;800**, **Roboto**

## Design tokens (`apps/girder/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#eb1c24` | brand |
| `--color-brand-dark` | `#ee3e45` | Deeper red for hover states. |
| `--color-ink` | `#212529` | Ink — headings and dark text (#212529 from the original). |
| `--color-mist` | `#6c757d` | Mist — muted body text (#6c757d from the original). |
| `--color-paper` | `#f8f9fa` | Paper — light section backgrounds (#f8f9fa from the original). |
| `--color-coal` | `#252837` | Coal — dark CTA/footer background (#252837 from the original). |
| `--color-primary-50` | `#fef2f2` | primary 50 |
| `--color-primary-100` | `#fde3e3` | primary 100 |
| `--color-primary-200` | `#fbcccc` | primary 200 |
| `--color-primary-300` | `#f7a6a6` | primary 300 |
| `--color-primary-400` | `#f07272` | primary 400 |
| `--color-primary-500` | `#eb1c24` | primary 500 |
| `--color-primary-600` | `#d6141c` | primary 600 |
| `--color-primary-700` | `#b31218` | primary 700 |
| `--color-primary-800` | `#941318` | primary 800 |
| `--color-primary-900` | `#7a151a` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Original fonts: "Roboto" (body) + "Montserrat" (display headings). |
| `--font-display` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Services` | Services section | see fidelity note below |
| 4 | `Projects` | Projects section | see fidelity note below |
| 5 | `Testimonials` | Testimonials section | see fidelity note below |
| 6 | `CallToAction` | — | no dedicated spec block |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Girder", anchor links to the page's sections, a phone number, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width split hero with an image, a headline, a blurb, and two call-to-action buttons.

### `Services`
The system SHALL render a services section with a heading and at least six service cards.

### `Projects`
The system SHALL render a projects section with a heading and a project gallery.

### `Testimonials`
The system SHALL render a testimonials section with a heading and quote cards.

### `CallToAction`
*anchors only* — The road of success is always under construction · Get a free quote

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
- **Provenance ban.** No file under `apps/girder/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/girder/public/CNAME` = `girder.free.componentdock.com`
  and the package `homepage` = `https://girder.free.componentdock.com`.

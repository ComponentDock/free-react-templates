# Elevation — Design Notes

Reference: **Buildarch** — `https://colorlib.com/wp/template/buildarch/`  
Live preview: `https://preview.colorlib.com/theme/buildarch/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/buildarch-free-template.jpg  
Shipped: https://elevation.free.componentdock.com

Elevation is a single-page architecture landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Buildarch" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Heebo**, **Heebo:wght@300;400;500;700;800**, **Roboto**

## Design tokens (`apps/elevation/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#a7cb00` | brand |
| `--color-brand-dark` | `#8fae00` | Deeper lime for hover states. |
| `--color-sun` | `#f8b600` | Sun — secondary yellow accent (#f8b600 from the original). |
| `--color-ink` | `#000000` | Ink — headings and dark text (#000 from the original). |
| `--color-mist` | `#777777` | Mist — muted body text (#777777 from the original). |
| `--color-paper` | `#f9f9ff` | Paper — light section backgrounds (#f9f9ff from the original). |
| `--color-coal` | `#000410` | Coal — footer background (#000410 from the original). |
| `--color-primary-50` | `#fbfee6` | primary 50 |
| `--color-primary-100` | `#f4fcc0` | primary 100 |
| `--color-primary-200` | `#e8f886` | primary 200 |
| `--color-primary-300` | `#d7ee42` | primary 300 |
| `--color-primary-400` | `#c2dc12` | primary 400 |
| `--color-primary-500` | `#a7cb00` | primary 500 |
| `--color-primary-600` | `#8fae00` | primary 600 |
| `--color-primary-700` | `#6b8202` | primary 700 |
| `--color-primary-800` | `#556708` | primary 800 |
| `--color-primary-900` | `#48570c` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Original fonts: "Roboto" (body + headings) + "Heebo" (display). |
| `--font-display` | `'Heebo', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Concept` | Concept section | see fidelity note below |
| 4 | `Features` | Features section | see fidelity note below |
| 5 | `FunFacts` | Fun facts section | see fidelity note below |
| 6 | `Testimonials` | Testimonials section | see fidelity note below |
| 7 | `Projects` | Projects section | see fidelity note below |
| 8 | `ClientsLogo` | Clients logo strip | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Elevation", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline, a blurb, and a call-to-action button.

### `Concept`
The system SHALL render a concept section with an image and a text panel containing a heading, a blurb, and a "More About Us" button.

### `Features`
The system SHALL render a features section with at least three feature items, each with an icon, a title, and a blurb.

### `FunFacts`
The system SHALL render a fun facts band with a section title and at least four stat counters.

### `Testimonials`
The system SHALL render a testimonial section with a quote, a star rating, and an author.

### `Projects`
The system SHALL render a projects section with a heading and a project gallery.

### `ClientsLogo`
The system SHALL render a client logo strip with at least four client names.

### `Footer`
The system SHALL render a footer with a newsletter form, social links, and a copyright line.

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
- **Provenance ban.** No file under `apps/elevation/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/elevation/public/CNAME` = `elevation.free.componentdock.com`
  and the package `homepage` = `https://elevation.free.componentdock.com`.

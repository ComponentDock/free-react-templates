# Beamline — Design Notes

Reference: **Archlab** — `https://colorlib.com/wp/template/archlab/`  
Live preview: `https://preview.colorlib.com/theme/archlab/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/archlab-free-template.jpg  
Shipped: https://beamline.free.componentdock.com

Beamline is a single-page architecture landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Archlab" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito Sans**, **Nunito Sans:opsz,wght@6..12,300;6..12,400;6..12,600;6..12,700;6..12,800**

## Design tokens (`apps/beamline/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#96bb7c` | brand |
| `--color-brand-dark` | `#7da363` | Deeper green for hover states. |
| `--color-ink` | `#212529` | Ink — headings and dark text (#212529). |
| `--color-mist` | `#6c757d` | Mist — muted body text (#6c757d). |
| `--color-paper` | `#f8f9fa` | Paper — light section backgrounds (#f8f9fa). |
| `--color-coal` | `#0f101c` | Coal — footer background (#0f101c from the original stylesheet). |
| `--color-primary-50` | `#f2f7ee` | primary 50 |
| `--color-primary-100` | `#e3efdb` | primary 100 |
| `--color-primary-200` | `#c8dfba` | primary 200 |
| `--color-primary-300` | `#a8cb94` | primary 300 |
| `--color-primary-400` | `#96bb7c` | primary 400 |
| `--color-primary-500` | `#7da363` | primary 500 |
| `--color-primary-600` | `#6b8f53` | primary 600 |
| `--color-primary-700` | `#567244` | primary 700 |
| `--color-primary-800` | `#445a37` | primary 800 |
| `--color-primary-900` | `#35472c` | primary 900 |
| `--font-sans` | `'Nunito Sans', ui-sans-serif, system-ui, sans-serif` | Original font: "Nunito Sans" (Google Fonts). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Process` | Process band | see fidelity note below |
| 4 | `Quote` | Quote form | see fidelity note below |
| 5 | `Stats` | Stats band | see fidelity note below |
| 6 | `Projects` | Projects section | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `Pricing` | Pricing section | see fidelity note below |
| 9 | `Blog` | Blog section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Beamline", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline, a blurb, and two buttons.

### `Process`
The system SHALL render a green band with three process cards and a CTA card: "Design Process", "Supervision", "Budget Planning", and "Build a Home For You".

### `Quote`
The system SHALL render a quote form with a "Select Your Services" selector and a "Request A Quote" button.

### `Stats`
The system SHALL render a stats band with four counters: "Years of Experienced", "Project Done", "Licensed Architect", and "Happy Customers".

### `Projects`
The system SHALL render a projects section titled "Our Unique Latest Projects" with project cards and "View Portfolio" buttons.

### `Testimonials`
The system SHALL render a testimonials section titled "Happy Clients" with client quotes.

### `Pricing`
The system SHALL render a pricing section titled "Price & Plans" with three plans and "Get Started" buttons.

### `Blog`
The system SHALL render a blog section titled "Recent Blog" with post cards.

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
- **Provenance ban.** No file under `apps/beamline/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/beamline/public/CNAME` = `beamline.free.componentdock.com`
  and the package `homepage` = `https://beamline.free.componentdock.com`.

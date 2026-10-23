# Presswell — Design Notes

Reference: **Laundry** — `https://colorlib.com/wp/template/laundry/`  
Live preview: `https://preview.colorlib.com/theme/laundry/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/laundry-free-template.jpg  
Shipped: https://presswell.free.componentdock.com

Presswell is a single-page laundry service template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Laundry" design, built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Muli**, **Muli:wght@300;400;500;600;700;800**, **Raleway**

## Design tokens (`apps/presswell/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#6785ff` | brand |
| `--color-brand-dark` | `#5172f5` | brand dark |
| `--color-ink` | `#072366` | Ink — dark navy headings (#072366 from the original). |
| `--color-ink-dark` | `#051a4a` | ink dark |
| `--color-paper` | `#f8f9ff` | Paper — light section backgrounds. |
| `--color-navy` | `#10285d` | Navy — body text (#10285d from the original). |
| `--color-mist` | `#6b7280` | Mist — muted body text. |
| `--color-primary-50` | `#eef2ff` | primary 50 |
| `--color-primary-100` | `#dce4ff` | primary 100 |
| `--color-primary-200` | `#bccaff` | primary 200 |
| `--color-primary-300` | `#8ea5ff` | primary 300 |
| `--color-primary-400` | `#6785ff` | primary 400 |
| `--color-primary-500` | `#5172f5` | primary 500 |
| `--color-primary-600` | `#3a5ae0` | primary 600 |
| `--color-primary-700` | `#2d47c0` | primary 700 |
| `--color-primary-800` | `#283c9d` | primary 800 |
| `--color-primary-900` | `#26367d` | primary 900 |
| `--font-sans` | `'Muli', ui-sans-serif, system-ui, sans-serif` | Original fonts: "Raleway" (headings) + "Muli" (body). |
| `--font-display` | `'Raleway', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Process` | Process section | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `CtaBand` | CTA band | see fidelity note below |
| 6 | `Testimonials` | Testimonials section | see fidelity note below |
| 7 | `Stats` | Stats section | see fidelity note below |
| 8 | `About` | About section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a sticky top navigation bar with the site name "Presswell", navigation links (Home, About, Services, Blog, Contact), a phone number, and a "Make an Appointment" CTA button.

### `Hero`
The system SHALL render a full-width hero with a background image, a level-1 headline "Quality laundry service in your city", subtext, and an "Explore Services" CTA button.

### `Process`
The system SHALL render a "This is how we work" section with three process steps: collect, wash, and deliver.

### `Services`
The system SHALL render a "Services we offer" section with two service cards (Cloth laundry, Cloth ironing).

### `CtaBand`
The system SHALL render a full-width call-to-action band with "Call us for a service" heading and a "Learn More" button.

### `Testimonials`
The system SHALL render a testimonials section with customer quotes, avatar images, and 5-star ratings.

### `Stats`
The system SHALL render a "Company achievement" section with three stat counters.

### `About`
The system SHALL render an about section with a heading, descriptive text, and an "About Us" button.

### `Footer`
The system SHALL render a footer with the brand name, service links, contact information, and a copyright line linking to Component Dock.

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
- **Provenance ban.** No file under `apps/presswell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/presswell/public/CNAME` = `presswell.free.componentdock.com`
  and the package `homepage` = `https://presswell.free.componentdock.com`.

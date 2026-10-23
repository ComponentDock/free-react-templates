# Arlo — Design Notes

Reference: **Alex Rivera** — `https://colorlib.com/wp/template/alex-rivera/`  
Live preview: `https://preview.colorlib.com/theme/alex-rivera/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/alexrivera-template-1771943723675.jpg  
Shipped: https://arlo.free.componentdock.com

Arlo is a single-page portfolio landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Alex Rivera" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@400;500;600;700**, **Space Grotesk**

## Design tokens (`apps/arlo/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fefce8` | primary 50 |
| `--color-primary-100` | `#fef9c3` | primary 100 |
| `--color-primary-200` | `#fef08a` | primary 200 |
| `--color-primary-300` | `#fde047` | primary 300 |
| `--color-primary-400` | `#facc15` | primary 400 |
| `--color-primary-500` | `#eab308` | primary 500 |
| `--color-primary-600` | `#ca8a04` | primary 600 |
| `--color-primary-700` | `#a16207` | primary 700 |
| `--color-primary-800` | `#854d0e` | primary 800 |
| `--color-primary-900` | `#713f12` | primary 900 |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Space Grotesk', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Expertise` | Expertise section | see fidelity note below |
| 5 | `Projects` | — | no dedicated spec block |
| 6 | `Experience` | Experience section | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `Faq` | FAQ section | see fidelity note below |
| 9 | `Contact` | Contact section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Arlo", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline and a blurb.

### `About`
The system SHALL render an about section with a heading and at least two paragraphs.

### `Expertise`
The system SHALL render an expertise section with a heading and at least three skill cards.

### `Projects`
*anchors only* — Featured Work · A selection of projects that showcase my approach to design and development.

### `Experience`
The system SHALL render a career timeline section with a heading and at least three roles.

### `Testimonials`
The system SHALL render a testimonials section with a heading and at least three client quotes.

### `Faq`
The system SHALL render an FAQ section with a heading and at least three expandable questions.

### `Contact`
The system SHALL render a contact section with a heading, contact details, and a message form.

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
- **Provenance ban.** No file under `apps/arlo/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/arlo/public/CNAME` = `arlo.free.componentdock.com`
  and the package `homepage` = `https://arlo.free.componentdock.com`.

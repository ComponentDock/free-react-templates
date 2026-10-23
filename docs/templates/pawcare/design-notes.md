# Pawcare — Design Notes

Reference: **Anipat** — `https://colorlib.com/wp/template/anipat/`  
Live preview: `https://preview.colorlib.com/theme/anipat/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/anipat-free-template.jpg  
Shipped: https://pawcare.free.componentdock.com

Pawcare is a single-page pet-care landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Anipat" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/pawcare/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff3500` | brand |
| `--color-paper` | `#f9f9ff` | Light section background — services area (#f9f9ff). |
| `--color-lavender` | `#f0e9ff` | Icon chip background — lavender (#f0e9ff). |
| `--color-ink` | `#222222` | Heading / dark text (#222222). |
| `--color-mist` | `#999999` | Body text gray (#999999). |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original font: "Poppins" via Google Fonts (loaded in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero slider | see fidelity note below |
| 3 | `Services` | Services section | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `Testimonials` | Testimonials section | see fidelity note below |
| 6 | `Team` | Team section | see fidelity note below |
| 7 | `Cta` | — | no dedicated spec block |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Pawcare", links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline, a short subheading, and an outlined call-to-action button.

### `Services`
The system SHALL render a services section with a heading and three service cards with icons.

### `About`
The system SHALL render an about section with a heading, a blurb, an about button, and adoption stats.

### `Testimonials`
The system SHALL render a testimonials section with at least one quote card.

### `Team`
The system SHALL render a team section with member cards.

### `Cta`
*anchors only* — Why go with Pawcare?

### `Footer`
The system SHALL render a footer with contact details, service links, quick links, social icons, and a copyright line.

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
- **Provenance ban.** No file under `apps/pawcare/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pawcare/public/CNAME` = `pawcare.free.componentdock.com`
  and the package `homepage` = `https://pawcare.free.componentdock.com`.

# Advisory — Design Notes

Reference: **Consulto** — `https://colorlib.com/wp/template/consulto/`  
Live preview: `https://preview.colorlib.com/theme/consulto/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/consulto-free-template.jpg  
Shipped: https://advisory.free.componentdock.com

A business template with header / navigation, hero / slider, services section, about / philosophy section and accordion / solutions sections. Recreation of ColorLib's **Consulto** template as a modern consulting business landing page.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Muli**, **Muli:wght@300;400;500;600;700;800**, **Raleway**

## Design tokens (`apps/advisory/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-body` | `'Muli', sans-serif` | font body |
| `--font-heading` | `'Raleway', sans-serif` | font heading |
| `--color-brand` | `#fd8f5f` | brand |
| `--color-brand-dark` | `#ec8b53` | brand dark |
| `--color-navy` | `#010a44` | navy |
| `--color-navy-dark` | `#1d2547` | navy dark |
| `--color-text` | `#10285d` | text |
| `--color-heading` | `#072366` | heading |
| `--color-paper` | `#ffffff` | paper |
| `--color-mist` | `#666666` | mist |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero / Slider | see fidelity note below |
| 3 | `Services` | Services Section | see fidelity note below |
| 4 | `About` | About / Philosophy Section | see fidelity note below |
| 5 | `Accordion` | Accordion / Solutions Section | see fidelity note below |
| 6 | `Testimonials` | Testimonials Section | see fidelity note below |
| 7 | `CaseStudies` | Case Studies Section | see fidelity note below |
| 8 | `Team` | Team Section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Primary · Mobile · Advisory · Make an Appointment

### `Hero`
The system SHALL render a hero section with a background image, a subtitle "Best Service", a main heading "Business Consulting", descriptive text, and an "Explore Services" CTA button.

### `Services`
The system SHALL render service cards in a carousel/grid, each with a background image, overlay, title, description, and "Make Appointment" button.

### `About`
The system SHALL render a two-column about section with a background image on the left and "Our Philosophy" heading with description and author attribution on the right.

### `Accordion`
The system SHALL render an accordion with 4 collapsible items and a side image with stats (900+, 95%).

### `Testimonials`
The system SHALL render testimonials in a carousel with a dark background, quote text, author name, and avatar.

### `CaseStudies`
The system SHALL render case study cards in a carousel with images, titles, descriptions, and category tags.

### `Team`
The system SHALL render team member cards with circular avatars, names, roles, and social media icons.

### `Footer`
The system SHALL render a dark footer with about info, quick links, services, contact info, and a copyright bar linking to Component Dock.

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
- **Provenance ban.** No file under `apps/advisory/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/advisory/public/CNAME` = `advisory.free.componentdock.com`
  and the package `homepage` = `https://advisory.free.componentdock.com`.

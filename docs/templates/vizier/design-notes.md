# Vizier — Design Notes

Reference: **Mona** — `https://colorlib.com/wp/template/mona/`  
Live preview: `https://preview.colorlib.com/theme/mona/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/mona-free-template.jpg  
Shipped: https://vizier.free.componentdock.com

A personal template with header / navigation, hero carousel, about section, services section and model gallery with tabs sections. Recreation of ColorLib's **Mona** template as a modern model agency landing page.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat:wght@400;500;700**

## Design tokens

No `@theme` token block in `apps/vizier/src/index.css` — the palette is applied as utility colours in the components themselves; read the reference tokens off the shipped markup before restyling.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header / Navigation | see fidelity note below |
| 2 | `Hero` | Hero Carousel | see fidelity note below |
| 3 | `About` | About Section | see fidelity note below |
| 4 | `Services` | Services Section | see fidelity note below |
| 5 | `ModelGallery` | Model Gallery with Tabs | see fidelity note below |
| 6 | `Testimonials` | Client Feedback / Testimonials | see fidelity note below |
| 7 | `Cta` | CTA Section | see fidelity note below |
| 8 | `Blog` | Blog / Latest News | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a fixed white navbar with the "Vizier" logo on the left, navigation links (Home, About, Projects, Models, Casting, Blog, Contact) in the center, a search icon, and a mobile hamburger menu.

### `Hero`
The system SHALL render a full-screen hero section with a background image, model name, role subtitle, "View Profile" CTA, social links, and slide navigation.

### `About`
The system SHALL render an about section with two portrait images and descriptive text about the agency.

### `Services`
The system SHALL render four service cards in a responsive grid.

### `ModelGallery`
The system SHALL render a tabbed model gallery with filter tabs (All, Model, Actor, Singer) and a grid of model cards.

### `Testimonials`
The system SHALL render a testimonials section with a quote, client name, and portrait image.

### `Cta`
The system SHALL render a full-width pink CTA section with heading and button.

### `Blog`
The system SHALL render a blog section with a featured post and smaller posts in a grid layout.

### `Footer`
The system SHALL render a dark footer with logo, links, contact info, social icons, and a Component Dock attribution.

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
- **Provenance ban.** No file under `apps/vizier/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vizier/public/CNAME` = `vizier.free.componentdock.com`
  and the package `homepage` = `https://vizier.free.componentdock.com`.

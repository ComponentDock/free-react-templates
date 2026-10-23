# Borough — Design Notes

Reference: **Directone** — `https://colorlib.com/wp/template/directone/`  
Live preview: `https://preview.colorlib.com/theme/directone/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/directone-free-template.jpg  
Shipped: https://borough.free.componentdock.com

Borough is a one-page local-directory/listing website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito Sans**, **Nunito Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000**

## Design tokens (`apps/borough/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff414d` | brand |
| `--color-brand-dark` | `#f03943` | brand dark |
| `--color-navy` | `#151c26` | navy |
| `--color-ink` | `#10151c` | ink |
| `--color-mist` | `#f8f9fa` | mist |
| `--color-frost` | `#f0f4f7` | frost |
| `--font-sans` | `'Nunito Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero with search form | see fidelity note below |
| 3 | `Categories` | Category cards | see fidelity note below |
| 4 | `ListingSection` | Popular Listing cards | see fidelity note below |
| 5 | `SpecialOffers` | Special Offers band | see fidelity note below |
| 6 | `About` | About + counters | see fidelity note below |
| 7 | `Testimonials` | Testimonial carousel | see fidelity note below |
| 8 | `HowItWorks` | How It Works band | see fidelity note below |
| 9 | `Blog` | Blog cards | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a transparent navbar overlaid on the hero with the renamed brand, the five source links, and a red "Add Listing" button.

### `Hero`
The system SHALL render the full-viewport hero with the headline, subtext, and the four-part search form matching the source's fields and button.

### `Categories`
The system SHALL render the 12 category cards with the source's names, counts, and the single red "active" card.

### `ListingSection`
The system SHALL render the "Popular Listing" section with four listing cards matching the source's structure.

### `SpecialOffers`
The system SHALL render the red striped "Special Offers" band with the dark CTA button.

### `About`
The system SHALL render the about section with two paragraphs and four animated counters.

### `Testimonials`
The system SHALL render the testimonial carousel with quote cards, avatars, names, roles, and dot navigation.

### `HowItWorks`
The system SHALL render the dark video/step band with the pulsing play button and four numbered step cards.

### `Blog`
The system SHALL render the "Recent Blog" section with four cards matching the source's anatomy.

### `Footer`
The system SHALL render the dark footer with the brand, blurb, social circles, three link columns, the contact column, and the copyright bar with the mandatory Component Dock credit.

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
- **Provenance ban.** No file under `apps/borough/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/borough/public/CNAME` = `borough.free.componentdock.com`
  and the package `homepage` = `https://borough.free.componentdock.com`.

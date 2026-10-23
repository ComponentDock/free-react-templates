# Animal-shelter — Design Notes

Reference: **Animal Shelter** — `https://colorlib.com/wp/template/animal-shelter/`  
Live preview: `https://preview.colorlib.com/theme/animalshelter/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/animalshelter-free-template-1.jpg  
Shipped: https://animal-shelter.free.componentdock.com

Animal Shelter is a single-page pet-adoption landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Animal Shelter" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600**

## Design tokens (`apps/animal-shelter/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#fab700` | brand |
| `--color-paper` | `#f9f9ff` | paper |
| `--color-ink` | `#222222` | Near-black text used on the white volunteer buttons (#222222). |
| `--color-mist` | `#777777` | Body text color (#777777). |
| `--color-night` | `#1e1c27` | Footer background (#1e1c27). |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero banner | see fidelity note below |
| 3 | `PetStrip` | Pet photo strip | see fidelity note below |
| 4 | `SelectPet` | Select-pet band | see fidelity note below |
| 5 | `About` | About section | see fidelity note below |
| 6 | `Video` | Video section | see fidelity note below |
| 7 | `Process` | Adoption process section | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `VolunteerCta` | Volunteer call-to-action | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Animal Shelter", links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width banner with a headline, a short subheading, and a primary call-to-action button over a darkened image background.

### `PetStrip`
The system SHALL render a strip of pet photos that overlaps the bottom of the banner.

### `SelectPet`
The system SHALL render a light band prompting visitors to pick a pet with an adoption-form button.

### `About`
The system SHALL render a two-column about section with an image, a heading, a tagline, and a details button.

### `Video`
The system SHALL render a video teaser with a play button and a caption.

### `Process`
The system SHALL render the adoption process as four step cards with icons.

### `Testimonials`
The system SHALL render a testimonials section with at least one guardian quote card.

### `VolunteerCta`
The system SHALL render a volunteer CTA band with two buttons over a darkened image background.

### `Footer`
The system SHALL render a footer with about text, a useful-links column, contact details, social icons, and a copyright line.

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
- **Provenance ban.** No file under `apps/animal-shelter/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/animal-shelter/public/CNAME` = `animal-shelter.free.componentdock.com`
  and the package `homepage` = `https://animal-shelter.free.componentdock.com`.

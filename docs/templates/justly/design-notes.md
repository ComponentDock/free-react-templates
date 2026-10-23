# Justly — Design Notes

Reference: **Zacson** — `https://colorlib.com/wp/template/zacson/`  
Live preview: `https://preview.colorlib.com/theme/zacson/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/zacson-free-template.jpg  
Shipped: https://justly.free.componentdock.com

A Fitness Trainer template with hero, training categories, services, gallery, pricing and about sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Oswald**, **Oswald:wght@200;300;400;500;600;700**, **Roboto Condensed**

## Design tokens (`apps/justly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff0000` | brand |
| `--color-brand-dark` | `#cc0000` | brand dark |
| `--color-surface` | `#000000` | surface |
| `--color-surface-light` | `#111111` | surface light |
| `--color-heading` | `#ffffff` | heading |
| `--color-text` | `#e5e5e5` | text |
| `--color-text-muted` | `#9ca3af` | text muted |
| `--font-heading` | `'Oswald', sans-serif` | font heading |
| `--font-body` | `'Roboto Condensed', sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `TrainingCategories` | Training categories | see fidelity note below |
| 4 | `Services` | Services (What I Offer) | see fidelity note below |
| 5 | `Gallery` | Gallery | see fidelity note below |
| 6 | `Pricing` | Pricing | see fidelity note below |
| 7 | `About` | About section | see fidelity note below |
| 8 | `Blog` | Blog section | see fidelity note below |
| 9 | `Video` | Video section | see fidelity note below |
| 10 | `ContactInfo` | Contact info | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a dark navbar with the site name "Justly", section links (Home, About, Courses, Pricing, Gallery, Contact), and a "Contact" CTA button. A hamburger toggle opens a mobile menu on small screens.

### `Hero`
The system SHALL render a full-width hero section with a background image, greeting text ("Hi, I'm Justly"), heading ("Fitness Coach"), and a "My Courses" outline button.

### `TrainingCategories`
The system SHALL display two training category cards in a two-column grid (Personal Training, Group Training), each with an image, title, description, and a CTA button.

### `Services`
The system SHALL display three service cards in a row (Body Building, Muscle Gain, Weight Loss), each with an image, title, and short description.

### `Gallery`
The system SHALL display a grid of 6 gallery images with hover overlays showing a title and an icon.

### `Pricing`
The system SHALL display three pricing cards, each with a plan duration, price, a list of features with checkmarks, and a "Join Now" button.

### `About`
The system SHALL render a split-layout About section with text on one side and an image on the other, including a "My Courses" CTA button.

### `Blog`
The system SHALL display two blog post cards, each with an image, category tag, and title.

### `Video`
The system SHALL render a full-width video teaser section with a background image and a play button overlay.

### `ContactInfo`
The system SHALL display three contact info cards in a row (Location, Phone, Email), each with an icon, title, and details.

### `Footer`
The system SHALL render a dark footer with the site logo, navigation links, social media icons (Twitter, Facebook, Instagram), and a Component Dock attribution link.

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
- **Provenance ban.** No file under `apps/justly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/justly/public/CNAME` = `justly.free.componentdock.com`
  and the package `homepage` = `https://justly.free.componentdock.com`.

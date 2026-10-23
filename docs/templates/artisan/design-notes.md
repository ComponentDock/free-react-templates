# Artisan — Design Notes

Reference: **Kenedy** — `https://colorlib.com/wp/template/kenedy/`  
Live preview: `https://preview.colorlib.com/theme/kenedy/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/kenedy-free-template.jpg  
Shipped: https://artisan.free.componentdock.com

Artisan is a single-page personal-portfolio landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Kenedy" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700**, **Roboto**

## Design tokens (`apps/artisan/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#e45447` | brand |
| `--color-periwinkle` | `#90acd1` | Periwinkle secondary (#90acd1) — speech bubble, white-button borders. |
| `--color-mist` | `#f9f9ff` | Light section background (#f9f9ff) — works, services, job cards. |
| `--color-ink` | `#222222` | Heading ink (#222222). |
| `--color-body` | `#777777` | Body-copy gray (#777777). |
| `--color-terracotta` | `#e2a599` | Service card palette: terracotta + mauve-brown. |
| `--color-mauve` | `#715f69` | mauve |
| `--color-star` | `#ffc000` | Testimonial star gold (#ffc000) and footer social idle gray (#cccccc). |
| `--color-social` | `#cccccc` | social |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original fonts: Poppins for headings/nav, Roboto for body. |
| `--font-body` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero banner | see fidelity note below |
| 3 | `Brands` | Brands strip | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `Works` | Latest works section | see fidelity note below |
| 6 | `Jobs` | Job history section | see fidelity note below |
| 7 | `Services` | Service offers section | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `Contact` | Contact section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a transparent header over the hero with a logo on the left and a menu of links on the right.

### `Hero`
The system SHALL render a full-screen light hero with a speech-bubble eyebrow, the person's name, a role line with colored keywords, a coral pill button, and a photo on the right.

### `Brands`
The system SHALL render a white rounded card overlapping the hero's bottom edge, containing grayscale client wordmarks.

### `About`
The system SHALL render a split section with a photo on the left and an "about" heading, two paragraphs, and two buttons on the right.

### `Works`
The system SHALL render a light-gray (#f9f9ff) portfolio section with filter tabs and six project cards.

### `Jobs`
The system SHALL render a section with four rounded job cards showing role, company, date range, and a description.

### `Services`
The system SHALL render a light-gray (#f9f9ff) section with four colored service cards.

### `Testimonials`
The system SHALL render a centered testimonial slider with three slides.

### `Contact`
The system SHALL render a solid coral (#e45447) band with a white title, three contact boxes, and a white "Hire Me" button.

### `Footer`
The system SHALL render a white footer with a centered logo, "Follow Me" social icons, and a copyright bar.

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
- **Provenance ban.** No file under `apps/artisan/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/artisan/public/CNAME` = `artisan.free.componentdock.com`
  and the package `homepage` = `https://artisan.free.componentdock.com`.

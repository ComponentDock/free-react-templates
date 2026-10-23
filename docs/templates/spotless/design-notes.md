# Spotless — Design Notes

Reference: **Cleaning** — `https://colorlib.com/wp/template/cleaning/`  
Live preview: `https://preview.colorlib.com/theme/cleaning/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/cleaning-free-template.jpg  
Shipped: https://spotless.free.componentdock.com

Spotless is a cleaning-services landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Cleaning" design (https://colorlib.com/wp/template/cleaning/, "Bootstrap 5" category), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Bai Jamjuree**, **Bai Jamjuree:wght@400;500;600;700**, **Rubik**

## Design tokens (`apps/spotless/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#287ff9` | brand |
| `--color-brand-dark` | `#1e63c4` | brand dark |
| `--color-accent` | `#ffd823` | accent |
| `--color-accent-dark` | `#e0b800` | accent dark |
| `--color-navy` | `#16273f` | navy |
| `--color-heading` | `#111111` | heading |
| `--color-body` | `#444444` | body |
| `--color-muted` | `#888888` | muted |
| `--color-soft` | `#adadad` | soft |
| `--color-light` | `#f1f8ff` | light |
| `--color-light-gray` | `#f5f5f5` | light gray |
| `--font-sans` | `'Rubik', ui-sans-serif, system-ui, sans-serif` | Rubik (body + buttons) · Bai Jamjuree (secondary accent text) |
| `--font-accent` | `'Bai Jamjuree', ui-sans-serif, system-ui, sans-serif` | font accent |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `About` | About | see fidelity note below |
| 4 | `Services` | Services | see fidelity note below |
| 5 | `ChooseUs` | Why choose us | see fidelity note below |
| 6 | `Testimonials` | Testimonials | see fidelity note below |
| 7 | `Team` | Team | see fidelity note below |
| 8 | `WorkSteps` | How it works | see fidelity note below |
| 9 | `Blog` | Blog | see fidelity note below |
| 10 | `CallToAction` | Call to action | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a sticky dark-navy navigation header with a logo, uppercase links, an Appointment CTA, and a mobile menu.

### `Hero`
The system SHALL render a full-width hero over a photo background with a headline, eyebrow, CTA, and a side photo.

### `About`
The system SHALL render a two-column about section with a photo, section title, copy, and a Learn More button.

### `Services`
The system SHALL render a services grid of six cards with icons, titles, prices, and hover overlays.

### `ChooseUs`
The system SHALL render four centered feature blocks explaining why customers choose the service.

### `Testimonials`
The system SHALL render a testimonial band over a photo background with quote cards.

### `Team`
The system SHALL render a team section with four cleaner cards and a Join us button.

### `WorkSteps`
The system SHALL render a three-step process band over a photo background.

### `Blog`
The system SHALL render a blog section with three news cards and a View all link.

### `CallToAction`
The system SHALL render a "Free Call Back" CTA band over a photo background with a phone number.

### `Footer`
The system SHALL render a dark-navy footer with contact info, link columns, a newsletter form, and the standard credit.

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
- **Provenance ban.** No file under `apps/spotless/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/spotless/public/CNAME` = `spotless.free.componentdock.com`
  and the package `homepage` = `https://spotless.free.componentdock.com`.

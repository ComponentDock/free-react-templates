# Forkful — Design Notes

Reference: **Foodfun** — `https://colorlib.com/wp/template/foodfun/`  
Live preview: `https://preview.colorlib.com/theme/foodfun/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/foodfun-free-template.jpg  
Shipped: https://forkful.free.componentdock.com

Forkful is a multi-section restaurant landing page template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Foodfun" design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:ital,wght@0,400;0,700;1,400;1,700**, **Roboto**

## Design tokens (`apps/forkful/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ffb606` | brand |
| `--color-navy` | `#131230` | Dark navy — footer and dark sections (#131230). |
| `--color-navy-dark` | `#0d0d27` | Darker navy for copyright bar (#0d0d27). |
| `--color-paper` | `#f9f9ff` | Light section background (#f9f9ff). |
| `--color-mist` | `#777` | Body text gray (#777). |
| `--color-heading` | `#131230` | Heading color (#131230). |
| `--font-display` | `'Playfair Display', Georgia, serif` | font display |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Welcome` | Welcome section | see fidelity note below |
| 4 | `FoodMenu` | Food menu | see fidelity note below |
| 5 | `ReservationCta` | Reservation CTA | see fidelity note below |
| 6 | `SpecialDishes` | Special dishes | see fidelity note below |
| 7 | `Testimonials` | Testimonials | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navigation bar displays the Forkful brand name and links to all major sections.

### `Hero`
The hero section displays a large background image with a headline and supporting text.

### `Welcome`
The welcome section uses a split layout with an image on the left and text on the right.

### `FoodMenu`
The food menu displays 6 food cards in a responsive grid.

### `ReservationCta`
A call-to-action section with a dark background encourages visitors to make a reservation.

### `SpecialDishes`
Two featured dishes are displayed with large numbering, descriptions, and prices.

### `Testimonials`
Customer testimonials are displayed on a dark background with star ratings.

### `Footer`
The footer displays brand info, contact details, opening hours, and a Component Dock link.

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
- **Provenance ban.** No file under `apps/forkful/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/forkful/public/CNAME` = `forkful.free.componentdock.com`
  and the package `homepage` = `https://forkful.free.componentdock.com`.

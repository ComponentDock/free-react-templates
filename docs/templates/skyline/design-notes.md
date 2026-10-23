# Skyline — Design Notes

Reference: **Rooftop** — `https://colorlib.com/wp/template/rooftop/`  
Live preview: `https://preview.colorlib.com/theme/rooftop/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dreamrs-free-template.jpg — the ROW's slug `dreamrs`, not the spec's `rooftop`  
Shipped: https://skyline.free.componentdock.com

Row note: `TEMPLATES.md` links the slug `dreamrs` for this app while the spec records `rooftop`. This brief follows the SPEC — the disagreement is recorded, not resolved (ROW-MULTIPLICITY class, see the SPEC-REFERENCE audit, main `4820f472b`).

Skyline is a fine-dining restaurant landing page template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Rooftop" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@400;600;700;800**, **Roboto**

## Design tokens (`apps/skyline/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ad9966` | brand |
| `--color-brand-dark` | `#96834f` | brand dark |
| `--color-ink` | `#000000` | Ink — dark headings (#000000 from the original). |
| `--color-paper` | `#f9f9ff` | Paper — light section background (#f9f9ff from the original). |
| `--color-mist` | `#777777` | Mist — muted body text (#777777 from the original). |
| `--color-primary-50` | `#faf6ed` | primary 50 |
| `--color-primary-100` | `#f0e8d2` | primary 100 |
| `--color-primary-200` | `#e2d0a5` | primary 200 |
| `--color-primary-300` | `#d4b878` | primary 300 |
| `--color-primary-400` | `#c4a25b` | primary 400 |
| `--color-primary-500` | `#ad9966` | primary 500 |
| `--color-primary-600` | `#96834f` | primary 600 |
| `--color-primary-700` | `#7a6a3e` | primary 700 |
| `--color-primary-800` | `#5e5130` | primary 800 |
| `--color-primary-900` | `#4a4026` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Original fonts: "Playfair Display" (headings) + "Roboto" (body). |
| `--font-display` | `'Playfair Display', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with navigation and booking CTA | see fidelity note below |
| 2 | `Hero` | Hero section with background and heading | see fidelity note below |
| 3 | `Menu` | Menu section with categories and prices | see fidelity note below |
| 4 | `Gallery` | Gallery section with image grid | see fidelity note below |
| 5 | `Reservation` | Reservation form on dark background | see fidelity note below |
| 6 | `ChefsQuotes` | Chef's Quotes testimonial section | see fidelity note below |
| 7 | `FeaturedDishes` | Featured dishes call-to-action | see fidelity note below |
| 8 | `Contact` | Contact section with address and map | see fidelity note below |
| 9 | `Footer` | Footer with columns, newsletter, and Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL render a sticky header with the logo "Skyline" and navigation links (Home, Menu, Gallery, Contact) plus a "Book Table" CTA button. On mobile, a hamburger menu toggles the navigation links.

### `Hero`
The template SHALL render a full-height hero section with a dark overlay background image, the heading "Skyline", a subtitle "Fine Dining Restaurant", and a scroll-down arrow linking to the menu section.

### `Menu`
The template SHALL render a menu section with a section title, a "See Full Menu" CTA button, and three menu categories (Appetizer, Main Courses, Drinks & Juices) each listing items with prices.

### `Gallery`
The template SHALL render a gallery section with a heading and a grid of four restaurant-themed images with alt text.

### `Reservation`
The template SHALL render a reservation booking form with fields for event name, date, time, guest count, phone, contact name, and special requests. On submission, a confirmation message is displayed.

### `ChefsQuotes`
The template SHALL render a section with the heading "Chef's Quotes", a testimonial quote paragraph, an attribution line, and a chef image.

### `FeaturedDishes`
The template SHALL render a section with three featured dish cards, each with an image, dish name, and description.

### `Contact`
The template SHALL render a contact section with a map placeholder, the restaurant name, address, phone numbers, and email addresses.

### `Footer`
The template SHALL render a footer with four link columns (Top Products, Quick Links, Features, Resources), a newsletter signup form with email validation, and a copyright line containing a "Component Dock" link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/skyline/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/skyline/public/CNAME` = `skyline.free.componentdock.com`
  and the package `homepage` = `https://skyline.free.componentdock.com`.

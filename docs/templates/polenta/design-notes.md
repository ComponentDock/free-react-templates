# Polenta — Design Notes

Reference: **Risotto** — `https://colorlib.com/wp/template/risotto/`  
Live preview: `https://preview.colorlib.com/theme/risotto/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/risotto-free-restaurant-website-template.jpg  
Shipped: https://polenta.free.componentdock.com

Polenta is a free restaurant landing page template that recreates the ColorLib Risotto design in React 19 + Tailwind CSS 4 + TypeScript. It provides a complete restaurant website with navigation, hero, about, menu, reservation, events, contact, and footer sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Cabin**, **Cabin:wght@400;700**, **Dancing Script**, **Quicksand**

## Design tokens (`apps/polenta/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f36700` | Brand palette — orange #f36700 from the original restaurant design. |
| `--color-brand-dark` | `#d45a00` | brand dark |
| `--color-ink` | `#151515` | Ink — dark charcoal headings (#151515 from the original). |
| `--color-paper` | `#f9f9f9` | Paper — light section backgrounds. |
| `--color-mist` | `#969696` | Mist — muted body text (#969696 from the original). |
| `--color-border` | `#ececec` | Border grey. |
| `--color-primary-50` | `#fff7ed` | Primary scale so shared ui Button/ButtonLink `primary` variants resolve to the orange. |
| `--color-primary-100` | `#ffedd5` | primary 100 |
| `--color-primary-200` | `#fed7aa` | primary 200 |
| `--color-primary-300` | `#fdba74` | primary 300 |
| `--color-primary-400` | `#fb923c` | primary 400 |
| `--color-primary-500` | `#f36700` | primary 500 |
| `--color-primary-600` | `#d45a00` | primary 600 |
| `--color-primary-700` | `#c2410c` | primary 700 |
| `--color-primary-800` | `#9a3412` | primary 800 |
| `--color-primary-900` | `#7c2d12` | primary 900 |
| `--font-sans` | `'Cabin', ui-sans-serif, system-ui, sans-serif` | Fonts: Cabin for body, Quicksand for headings, Dancing Script for display titles. |
| `--font-heading` | `'Quicksand', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-display` | `'Dancing Script', cursive` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar with two-tier layout | see fidelity note below |
| 2 | `Hero` | Hero section with parallax background | see fidelity note below |
| 3 | `About` | About section with gallery | see fidelity note below |
| 4 | `Menu` | Menu section with tabbed interface | see fidelity note below |
| 5 | `Reservation` | Reservation form with opening times | see fidelity note below |
| 6 | `Events` | Events section with event cards | see fidelity note below |
| 7 | `Contact` | Contact section with info and social links | see fidelity note below |
| 8 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL render a navigation bar with a top bar (logo + social icons) and a bottom bar (nav links, Reserve CTA, phone + address).

### `Hero`
The template SHALL render a hero section with a background image, welcome heading, subtitle, and a "Discover Menu" CTA button.

### `About`
The template SHALL render an about section with a section header, two-column text layout, and an image gallery.

### `Menu`
The template SHALL render a menu section with tabbed navigation (Dinner, Drinks, Lunch, Dessert) showing dish cards with name, price, and description.

### `Reservation`
The template SHALL render a reservation form with input fields and an opening times sidebar.

### `Events`
The template SHALL render 4 event cards in a 2-column grid, each with an image, date badge, time, title, and description.

### `Contact`
The template SHALL render a contact section with phone, address, email, and social media links.

### `Footer`
The template SHALL render a footer with copyright notice linking to Component Dock and footer navigation links.

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
- **Provenance ban.** No file under `apps/polenta/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/polenta/public/CNAME` = `polenta.free.componentdock.com`
  and the package `homepage` = `https://polenta.free.componentdock.com`.

# Pepperoni — Design Notes

Reference: **Pizza** — `https://colorlib.com/wp/template/pizza/`  
Live preview: `https://preview.colorlib.com/theme/pizza/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/pizza-free-template.jpg  
Shipped: https://pepperoni.free.componentdock.com

Recreate the ColorLib "Pizza" template (https://colorlib.com/wp/template/pizza/) as a React 19 + Tailwind CSS 4 + TypeScript single-page restaurant landing template named "Pepperoni". The design is a dark-themed pizza restaurant site with a hero carousel, about section, services, gallery, tabbed menu, pricing, contact form, and footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Josefin Sans**, **Josefin Sans:wght@300;400;600;700**, **Work Sans**

## Design tokens (`apps/pepperoni/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#78d5ef` | brand |
| `--color-brand-dark` | `#56caeb` | brand dark |
| `--color-ink` | `#212529` | Ink — dark text (#212529 from the original). |
| `--color-ink-light` | `#495057` | ink light |
| `--color-paper` | `#f8f9fa` | Paper — light section background (#f8f9fa). |
| `--color-surface` | `#121618` | Dark surface — navbar/footer (#121618). |
| `--color-surface-light` | `#1a1e21` | surface light |
| `--color-mist` | `#666666` | Mist — muted body text (#666666). |
| `--color-primary-50` | `#ecfaff` | primary 50 |
| `--color-primary-100` | `#d0f3fd` | primary 100 |
| `--color-primary-200` | `#a7e8fb` | primary 200 |
| `--color-primary-300` | `#78d5ef` | primary 300 |
| `--color-primary-400` | `#56caeb` | primary 400 |
| `--color-primary-500` | `#3fc3e8` | primary 500 |
| `--color-primary-600` | `#34c0e7` | primary 600 |
| `--color-primary-700` | `#2bb8e4` | primary 700 |
| `--color-primary-800` | `#28a7de` | primary 800 |
| `--color-primary-900` | `#1a88d4` | primary 900 |
| `--font-sans` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | Original fonts: "Work Sans" (body) + "Josefin Sans" (brand/logo). |
| `--font-display` | `'Josefin Sans', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `IntroBar` | — | no dedicated spec block |
| 4 | `About` | About section | see fidelity note below |
| 5 | `Services` | Services section | see fidelity note below |
| 6 | `Gallery` | Gallery section | see fidelity note below |
| 7 | `Counter` | Counter section | see fidelity note below |
| 8 | `Menu` | Tabbed menu section | see fidelity note below |
| 9 | `MenuPricing` | Menu pricing section | see fidelity note below |
| 10 | `Reservation` | Contact form section | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The template SHALL display a sticky dark (#121618) navigation bar with brand name "Pepperoni" and links to Home, Menu, Services, About, and Contact. The navbar SHALL include a mobile hamburger menu that toggles open/closed on click.

### `Hero`
The template SHALL display a full-width hero section with a background image, heading text "Italian Cuisine", subtitle, and an "Order Now" CTA button linking to the menu section.

### `IntroBar`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `About`
The template SHALL display a split-layout about section with an image on the left and descriptive text on the right, headed "Welcome to Pepperoni — A Restaurant".

### `Services`
The template SHALL display a dark-background services section with 3 service cards: Healthy Foods, Fastest Delivery, and Original Recipes, each with an icon, heading, and description.

### `Gallery`
The template SHALL display a 4-column image grid gallery with hover overlay effects.

### `Counter`
The template SHALL display a dark-background statistics section with 4 counters: Pizza Branches (100), Number of Awards (85), Happy Customers (10,567), and Staff (50).

### `Menu`
The template SHALL display a tabbed menu section with tabs for Pizza, Drinks, Burgers, and Pasta. Each tab SHALL show 3 food items with image, name, description, price, and "Add to Cart" button.

### `MenuPricing`
The template SHALL display a two-column menu pricing list with item names and prices.

### `Reservation`
The template SHALL display a contact form with First Name, Last Name, and Message fields plus a Send button, alongside a map placeholder.

### `Footer`
The template SHALL display a dark-background footer with About Us, Recent Blog, Services links, and Newsletter signup. The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/pepperoni/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pepperoni/public/CNAME` = `pepperoni.free.componentdock.com`
  and the package `homepage` = `https://pepperoni.free.componentdock.com`.

# Pieslice — Design Notes

Reference: **Luigis** — `https://colorlib.com/wp/template/luigis/`  
Live preview: `https://preview.colorlib.com/theme/luigis/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/luigis-free-template.jpg  
Shipped: https://pieslice.free.componentdock.com

Pieslice is a pizza restaurant landing page template that recreates the ColorLib "Luigi's" design (https://colorlib.com/wp/template/luigis/) with a React 19 + Vite + Tailwind CSS 4 + TypeScript stack. It features a hero section, our story, best sellers grid, filterable menu, and a branded footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@400;600;700**

## Design tokens (`apps/pieslice/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#e8663d` | brand |
| `--color-brand-dark` | `#c94e28` | brand dark |
| `--color-dark-bg` | `#222222` | Section backgrounds. |
| `--color-footer-bg` | `#1a1a1a` | footer bg |
| `--color-ink` | `#222222` | Text colors. |
| `--color-body` | `#555555` | body |
| `--color-light-text` | `#aaaaaa` | light text |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | Fonts: Open Sans (loaded via Google Fonts in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders navigation and phone order | see fidelity note below |
| 2 | `Hero` | Hero section displays restaurant branding | see fidelity note below |
| 3 | `OurStory` | Our Story section shows two-column text | see fidelity note below |
| 4 | `BestSellers` | Best Sellers shows product cards with badges | see fidelity note below |
| 5 | `OurMenu` | Our Menu provides category filtering | see fidelity note below |
| 6 | `Footer` | Footer shows contact info and Component Dock attribution | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
Users SHALL see a fixed navbar with the site logo, navigation links (Home, About, Menu, Best Sellers, Contact), and a phone order button.

### `Hero`
Users SHALL see a full-width hero with a background image, subtitle, main heading, and a call-to-action button.

### `OurStory`
Users SHALL see a two-column story section with a heading and descriptive paragraphs.

### `BestSellers`
Users SHALL see an 8-card grid of best-selling items with names, prices, and order buttons. Some items SHALL have ribbon badges.

### `OurMenu`
Users SHALL see a tabbed menu with category filters (All, Pizza, Pasta, Salads, Desserts) and a 2-column grid of menu items.

### `Footer`
Users SHALL see a footer with address, phone, email, social media links, and a Component Dock attribution link.

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
- **Provenance ban.** No file under `apps/pieslice/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pieslice/public/CNAME` = `pieslice.free.componentdock.com`
  and the package `homepage` = `https://pieslice.free.componentdock.com`.

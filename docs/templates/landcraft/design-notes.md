# Landcraft — Design Notes

Reference: **Martxa** — `https://colorlib.com/wp/template/martxa/`  
Live preview: `https://preview.colorlib.com/theme/martxa/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/martxa-free-template1.jpg  
Shipped: https://landcraft.free.componentdock.com

Landcraft is a landscaping company landing page template. It recreates the ColorLib Martxa design as a modern React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700**

## Design tokens (`apps/landcraft/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-montserrat` | `'Montserrat', sans-serif` | font montserrat |
| `--color-brand` | `#296dc1` | brand |
| `--color-brand-dark` | `#1e5aa3` | brand dark |
| `--color-heading` | `#333333` | heading |
| `--color-body` | `#555555` | body |
| `--color-alt-bg` | `#fafafa` | alt bg |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `FunFacts` | Fun facts section | see fidelity note below |
| 6 | `Portfolio` | Portfolio section with filtering | see fidelity note below |
| 7 | `VideoCta` | — | no dedicated spec block |
| 8 | `Team` | Team section | see fidelity note below |
| 9 | `Faq` | FAQ accordion | see fidelity note below |
| 10 | `Testimonials` | Testimonials | see fidelity note below |
| 11 | `QuoteCta` | — | no dedicated spec block |
| 12 | `Blog` | — | no dedicated spec block |
| 13 | `Newsletter` | Newsletter signup | see fidelity note below |
| 14 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main navigation · Search · Mobile navigation

### `Hero`
The page SHALL display a hero section with a background image, heading, description, and two CTA buttons.

### `About`
The page SHALL display an about section with an image, heading, description text, and a list of capabilities.

### `Services`
The page SHALL display a services section with three service cards.

### `FunFacts`
The page SHALL display a statistics section with four numeric counters.

### `Portfolio`
The page SHALL display a portfolio section with filterable items.

### `VideoCta`
*anchors only* — Play video

### `Team`
The page SHALL display a team section with four team member cards.

### `Faq`
The page SHALL display a FAQ section with a functional accordion.

### `Testimonials`
The page SHALL display a testimonials section with client reviews and star ratings.

### `QuoteCta`
*anchors only* — Brayden Shar

### `Blog`
*anchors only* — Our Creative Blog · Stay updated with the latest landscaping tips, trends, and insights from our team. · Read More

### `Newsletter`
The page SHALL display a newsletter section with an email input form.

### `Footer`
The page SHALL display a footer with company info, links, Instagram grid, contact form, and a Component Dock attribution link.

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
- **Provenance ban.** No file under `apps/landcraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/landcraft/public/CNAME` = `landcraft.free.componentdock.com`
  and the package `homepage` = `https://landcraft.free.componentdock.com`.

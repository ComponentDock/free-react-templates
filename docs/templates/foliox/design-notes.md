# Foliox — Design Notes

Reference: **Fplus** — `https://colorlib.com/wp/template/fplus/`  
Live preview: `https://preview.colorlib.com/theme/fplus/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/fplus-free-template.jpg  
Shipped: https://foliox.free.componentdock.com

Foliox is a portfolio and agency website template, recreating the ColorLib F-plus design under a new original name. It provides a complete agency/portfolio site with hero, about, projects gallery, methods, clients, news, and contact sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700**

## Design tokens (`apps/foliox/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#ff6c00` | primary |
| `--color-primary-dark` | `#e56200` | primary dark |
| `--color-surface` | `#f9f9f9` | surface |
| `--color-heading` | `#000000` | heading |
| `--color-body` | `#606060` | body |
| `--color-muted` | `#959595` | muted |
| `--font-family-sans` | `'Montserrat', sans-serif` | font family sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero section with background image and CTA | see fidelity note below |
| 3 | `AboutUs` | About Us section with features | see fidelity note below |
| 4 | `Projects` | Filterable projects gallery | see fidelity note below |
| 5 | `Methods` | Methods video section | see fidelity note below |
| 6 | `Clients` | Clients logo section | see fidelity note below |
| 7 | `RecentNews` | Recent News blog cards | see fidelity note below |
| 8 | `ContactForm` | Contact form | see fidelity note below |
| 9 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — dialog · Navigation menu · Foliox

### `Hero`
The hero section SHALL display a full-viewport background image with the heading "For More Agency" and a "View Portfolio" call-to-action button that scrolls to the projects section.

### `AboutUs`
The About Us section SHALL display a split layout with an image and "Who We Are" text, followed by three feature cards: Reasonable Pricing, eCommerce Support, User-Friendly Admin.

### `Projects`
The Projects section SHALL display a grid of portfolio items with filter buttons (All Fields, Branding, Editorial Design, Graphic Design) that filter the visible items.

### `Methods`
The Methods section SHALL display a "How We Work" heading with description text and a video placeholder with a play button.

### `Clients`
The Clients section SHALL display a row of client logos with grayscale styling that colorizes on hover.

### `RecentNews`
The Recent News section SHALL display three blog post cards with thumbnail, title, author name, and date.

### `ContactForm`
The Contact section SHALL display a form with Name, Email, Subject, Telephone, Message fields and a "Send Message" submit button.

### `Footer`
The footer SHALL contain navigation links, social icons, a subscribe form, and a Component Dock attribution link pointing to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/foliox/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/foliox/public/CNAME` = `foliox.free.componentdock.com`
  and the package `homepage` = `https://foliox.free.componentdock.com`.

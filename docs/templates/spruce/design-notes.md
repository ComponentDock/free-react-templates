# Spruce — Design Notes

Reference: **Olla** — `https://colorlib.com/wp/template/olla/`  
Live preview: `https://preview.colorlib.com/theme/olla/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/olla-colorlib-template.jpg  
Shipped: https://spruce.free.componentdock.com

A free business & web development landing template with a hero, services section, about split, brand logos, FAQ accordion, pricing tabs, testimonials, project gallery, call-to-action, and footer — built with React, Tailwind CSS, and TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Cabin**, **Cabin:wght@500;600;700**, **Open Sans**

## Design tokens (`apps/spruce/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#2845ba` | brand |
| `--color-brand-light` | `#3a5dc9` | brand light |
| `--color-brand-dark` | `#1e3a9e` | brand dark |
| `--color-accent` | `#ec583a` | accent |
| `--color-navy` | `#041735` | navy |
| `--color-mist` | `#f1fbff` | mist |
| `--color-body` | `#5c6168` | body |
| `--color-muted` | `#656565` | muted |
| `--color-border` | `#dbdee9` | border |
| `--color-ink` | `#041735` | ink |
| `--font-heading` | `'Cabin', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-body` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top bar announcement strip | see fidelity note below |
| 2 | `Navbar` | Sticky navigation bar | see fidelity note below |
| 3 | `Hero` | Hero section | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `About` | About section | see fidelity note below |
| 6 | `Brands` | Brand logos section | see fidelity note below |
| 7 | `FAQ` | FAQ accordion | see fidelity note below |
| 8 | `Pricing` | Pricing section | see fidelity note below |
| 9 | `Testimonials` | Testimonials section | see fidelity note below |
| 10 | `Gallery` | Project gallery | see fidelity note below |
| 11 | `CTA` | — | no dedicated spec block |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
The template SHALL render a dark navy announcement bar at the top with informational text and a call-to-action button.

### `Navbar`
The template SHALL render a sticky navigation bar with logo, desktop nav links, and a "Free Quote" CTA button.

### `Hero`
The template SHALL render a hero section with a headline, subtitle, email input form, and hero image.

### `Services`
The template SHALL render a 3-column services section with icon cards.

### `About`
The template SHALL render a two-column about section with an image and feature list.

### `Brands`
The template SHALL render a branded section with a dark blue background and partner logos.

### `FAQ`
The template SHALL render an accordion with expandable/collapsible items.

### `Pricing`
The template SHALL render a pricing section with tabbed pricing (Yearly/Monthly).

### `Testimonials`
The template SHALL render a testimonial with author info and quote.

### `Gallery`
The template SHALL render a 3-column project gallery with hover overlays.

### `CTA`
*anchors only* — Create your amazing website with Spruce · Start Free Trial

### `Footer`
The template SHALL render a footer with Quick Links, Support links, Newsletter form, social icons, and copyright.

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
- **Provenance ban.** No file under `apps/spruce/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/spruce/public/CNAME` = `spruce.free.componentdock.com`
  and the package `homepage` = `https://spruce.free.componentdock.com`.

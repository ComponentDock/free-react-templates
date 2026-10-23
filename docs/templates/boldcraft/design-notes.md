# Boldcraft — Design Notes

Reference: **Calvin** — `https://colorlib.com/wp/template/calvin/`  
Live preview: `https://preview.colorlib.com/theme/calvin/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/calvin-free-template.jpg  
Shipped: https://boldcraft.free.componentdock.com

BoldCraft is a personal portfolio/agency template with a bold, modern aesthetic. It features a transparent sticky header, full-width hero with portrait and headline, about info bar, services grid, portfolio gallery with hover overlays, about section with skill progress bars, brand logo carousel, testimonial carousel, blog cards, and a two…

## Typography

Fonts loaded by `index.html` (Google Fonts): **DM Sans**, **DM Sans:wght@300;400;500**, **Roboto Condensed**

## Design tokens (`apps/boldcraft/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff8553` | BoldCraft brand palette |
| `--color-brand-hover` | `#ec703f` | brand hover |
| `--color-brand-light` | `#ffe7de` | brand light |
| `--color-brand-overlay` | `rgba(255, 133, 83, 0.3)` | brand overlay |
| `--color-brand-social` | `rgba(255, 133, 83, 0.15)` | brand social |
| `--color-accent-green` | `#31ff7a` | accent green |
| `--color-white` | `#ffffff` | white |
| `--color-testimonial-bg` | `#fffbf9` | testimonial bg |
| `--color-text-primary` | `#000000` | text primary |
| `--color-text-secondary` | `#635c5c` | text secondary |
| `--color-text-muted` | `#7a8290` | text muted |
| `--color-text-founder` | `#5e5e5e` | text founder |
| `--color-bg-light` | `#f8f8f8` | bg light |
| `--color-footer-bg` | `#000000` | footer bg |
| `--font-sans` | `'DM Sans', ui-sans-serif, system-ui, sans-serif` | Fonts |
| `--font-heading` | `'Roboto Condensed', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--radius-gallery` | `10px` | Radii |
| `--radius-testimonial` | `12px` | radius testimonial |
| `--radius-social` | `5px` | radius social |
| `--radius-progress` | `4px` | radius progress |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header | see fidelity note below |
| 2 | `Hero` | Hero Section | see fidelity note below |
| 3 | `AboutInfoBar` | — | no dedicated spec block |
| 4 | `Services` | Services Section | see fidelity note below |
| 5 | `Gallery` | Gallery Section | see fidelity note below |
| 6 | `AboutMe` | About Info Bar | see fidelity note below |
| 7 | `BrandArea` | Brand Area | see fidelity note below |
| 8 | `Testimonials` | Testimonials Section | see fidelity note below |
| 9 | `Blog` | Blog Section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Header`
The template SHALL render a transparent sticky header with the "BoldCraft" brand, 5 navigation links (Home, Work, Service, Blog, Contact), and a "Let's Talk" border button.

### `Hero`
The template SHALL render a full-width hero section with a background image, a portrait image on the left, and a headline with subtitle on the right.

### `AboutInfoBar`
*anchors only* — Design For: · Web &amp; Mobile · Phone · Email

### `Services`
The template SHALL render a services section titled "My Expertise" with a 2×2 grid of 4 service cards, each with an icon, title, description, and link.

### `Gallery`
The template SHALL render a gallery section titled "My Works" with a 2×2 grid of portfolio items with orange overlay on hover.

### `AboutMe`
The template SHALL render an info bar overlaid at the bottom of the hero with three columns: design expertise, phone, and email.

### `BrandArea`
The template SHALL render a horizontal row of partner/client logos.

### `Testimonials`
The template SHALL render a testimonials section titled "Client Testimonial" with quote cards showing founder image, name, and role.

### `Blog`
The template SHALL render a blog section titled "Latest News" with 3 blog post cards.

### `Footer`
The template SHALL render a two-part footer: a black CTA section with logo, description, social icons, and buttons; and a bottom bar with copyright linking to Component Dock.

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
- **Provenance ban.** No file under `apps/boldcraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/boldcraft/public/CNAME` = `boldcraft.free.componentdock.com`
  and the package `homepage` = `https://boldcraft.free.componentdock.com`.

# Flux — Design Notes

Reference: **Pixel** — `https://colorlib.com/wp/template/pixel/`  
Live preview: `https://preview.colorlib.com/theme/pixel/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/pixel-free-template.jpg  
Shipped: https://flux.free.componentdock.com

A Digital Agency template with category tiles, newsletter subscription and contact sections. Recreation of ColorLib's **Pixel** digital agency website template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700;800;900**

## Design tokens (`apps/flux/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-blue` | `#688bfe` | brand blue |
| `--color-brand-orange` | `#ff7902` | brand orange |
| `--color-heading` | `#000000` | heading |
| `--color-section-heading` | `#212121` | section heading |
| `--color-body` | `#969696` | body |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with navigation and social links | see fidelity note below |
| 2 | `Hero` | Hero section with background image and CTA | see fidelity note below |
| 3 | `CategoryTiles` | Category tiles section | see fidelity note below |
| 4 | `Newsletter` | Newsletter subscription section | see fidelity note below |
| 5 | `Portfolio` | Portfolio gallery with filter | see fidelity note below |
| 6 | `Contact` | Contact form | see fidelity note below |
| 7 | `Footer` | Footer with Component Dock branding | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a sticky navbar with logo, navigation links (Home, About, Services, Portfolio, Contact), and social icon links (Facebook, Dribbble, Flickr, Instagram, LinkedIn, Pinterest).

### `Hero`
The template SHALL display a full-width hero section with a background image, heading text ("Digital Agency of the year 2024"), subtitle with credit and client info, and a "View Project" CTA button.

### `CategoryTiles`
The template SHALL display two side-by-side category tiles with background images and labels ("Agency" and "What We Do?").

### `Newsletter`
The template SHALL display a newsletter section with blue background, heading "Stay in touch with us", email input field, and a "View Project" button.

### `Portfolio`
The template SHALL display a portfolio section with filter buttons (All Projects, Visual, Advertising, Web Development) and a gallery grid of project items with hover overlays.

### `Contact`
The template SHALL display a contact form with fields for Name, Email, Subject, Message, and a "Send Message" submit button.

### `Footer`
The template SHALL display a footer with blue background, logo, address, support phone, social icons, copyright text with a Component Dock link (https://www.componentdock.com/), and footer navigation links.

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
- **Provenance ban.** No file under `apps/flux/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/flux/public/CNAME` = `flux.free.componentdock.com`
  and the package `homepage` = `https://flux.free.componentdock.com`.

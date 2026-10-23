# Greenfield — Design Notes

Reference: **Farmland** — `https://colorlib.com/wp/template/farmland/`  
Live preview: `https://preview.colorlib.com/theme/farmland/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/farmland-free-template.jpg  
Shipped: https://greenfield.free.componentdock.com

Greenfield is a single-page farm and agriculture website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Farmland" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Covered By Your Grace**, **Roboto**

## Design tokens (`apps/greenfield/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#5d8c55` | Greenfield brand palette — agriculture green #5d8c55. |
| `--color-brand-dark` | `#486c42` | brand dark |
| `--color-accent` | `#ecdc67` | Accent — gold/yellow #ecdc67 for secondary accents. |
| `--color-ink` | `#141b25` | Ink — dark text (#141b25). |
| `--color-paper` | `#f8f9fa` | Paper — light section backgrounds (#f8f9fa). |
| `--color-mist` | `#6c757d` | Mist — muted text (#6c757d). |
| `--color-muted` | `#e8e8e8` | Muted card bg (#e8e8e8). |
| `--color-divider` | `#dee2e6` | Border color. |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Fonts: Roboto (body) + Covered By Your Grace (subheadings). |
| `--font-display` | `'Covered By Your Grace', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | TopBar displays contact info and social links | see fidelity note below |
| 2 | `BrandBar` | BrandBar shows logo and contact details | see fidelity note below |
| 3 | `Navbar` | Navbar provides navigation and mobile menu | see fidelity note below |
| 4 | `Hero` | Hero section displays welcome content | see fidelity note below |
| 5 | `Services` | Services section shows four service cards | see fidelity note below |
| 6 | `About` | About section displays company info | see fidelity note below |
| 7 | `Counter` | Counter section shows statistics | see fidelity note below |
| 8 | `Projects` | Projects section shows portfolio | see fidelity note below |
| 9 | `VideoSection` | Video section | see fidelity note below |
| 10 | `Testimonials` | Testimonials section | see fidelity note below |
| 11 | `RequestQuote` | Request Quote form and FAQ | see fidelity note below |
| 12 | `Blog` | Blog section | see fidelity note below |
| 13 | `Newsletter` | Newsletter subscription | see fidelity note below |
| 14 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The template SHALL display a top bar with an email address on the left and social media icon links (Facebook, Twitter, Instagram, Dribbble) on the right.

### `BrandBar`
The template SHALL display a brand bar with a Sprout icon logo, the brand name "Greenfield", the tagline "Agriculture Farming", a phone number, and an address.

### `Navbar`
The template SHALL display a dark navigation bar with links for Home, About, Services, Projects, Blog, and Contact, plus a "Get A Quote" CTA button. The navbar SHALL be responsive with a hamburger menu on mobile.

### `Hero`
The template SHALL display a full-height hero section with a background image, overlay, welcome subheading, main heading, description paragraph, and two CTA buttons.

### `Services`
The template SHALL display a services section with 4 cards, each containing an icon, title, description, and arrow button.

### `About`
The template SHALL display an about section with a split layout: left side has a background image with an experience badge, right side has a heading, description, feature items, and a "Learn More" button.

### `Counter`
The template SHALL display a counter section with 4 statistics over a background image.

### `Projects`
The template SHALL display a projects section with "Explore Projects" heading and 4 project cards.

### `VideoSection`
The template SHALL display a video section with a background image, play button, and heading.

### `Testimonials`
The template SHALL display a testimonials section with a heading, description, stat, and testimonial cards with quotes, author images, names, and positions.

### `RequestQuote`
The template SHALL display a request quote section with a form (First Name, Last Name, Phone, Service dropdown, Message, Submit button) and a FAQ accordion.

### `Blog`
The template SHALL display a blog section with "Recent Post" heading and 3 blog cards.

### `Newsletter`
The template SHALL display a newsletter section with a heading, description, email input, and Subscribe button.

### `Footer`
The template SHALL display a footer with 4 columns (About, Recent Posts, Explore links, Contact info) and a bottom bar with copyright and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/greenfield/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/greenfield/public/CNAME` = `greenfield.free.componentdock.com`
  and the package `homepage` = `https://greenfield.free.componentdock.com`.

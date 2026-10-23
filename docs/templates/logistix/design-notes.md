# Logistix — Design Notes

Reference: **Thelogistico** — `https://colorlib.com/wp/template/thelogistico/`  
Live preview: `https://preview.colorlib.com/theme/thelogistico/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/thelogistico-colorlib-template.jpg  
Shipped: https://logistix.free.componentdock.com

A Bootstrap 5 logistics template with navigation, hero, services, about us and our mission sections. Provide a free, production-ready React landing page for logistics and cargo transport companies, faithfully recreating the ColorLib Thelogistico design under the original name "Logistix" with React 19, Tailwind CSS 4, and TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto Condensed**, **Roboto:wght@300;400;500;700;900**

## Design tokens (`apps/logistix/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff6600` | brand |
| `--color-brand-dark` | `#e55b00` | brand dark |
| `--color-surface` | `#f1fbff` | Neutral palette |
| `--color-ink` | `#000000` | ink |
| `--color-muted` | `#636363` | muted |
| `--color-border` | `#e8e7d3` | border |
| `--font-display` | `'Roboto Condensed', ui-sans-serif, system-ui, sans-serif` | Font families |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero Section | see fidelity note below |
| 3 | `Services` | Services Section | see fidelity note below |
| 4 | `About` | About Us Section | see fidelity note below |
| 5 | `Mission` | Our Mission Section | see fidelity note below |
| 6 | `Projects` | Projects Section | see fidelity note below |
| 7 | `CTABanner` | CTA Banner | see fidelity note below |
| 8 | `Testimonial` | Testimonial Section | see fidelity note below |
| 9 | `Blog` | Blog Section | see fidelity note below |
| 10 | `Brands` | Brand Partners | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main navigation · Facebook · Instagram · LinkedIn · Mobile navigation

### `Hero`
The template SHALL display a full-width hero with a dark background image and gradient overlay, left-aligned white text ("Welcome to Logistix", "A TRULY GLOBAL SERVICE PROVIDER", subtitle, "Explore Us" CTA), and a right-aligned "Get a quick offer" form with Truckload select, Commodity select, Distance input, and estimated cost display.

### `Services`
The template SHALL display a 4-column responsive grid of service cards: Air Freight, Ocean Freight, Road Transport, and Warehousing. Each card has an icon, title, description, and circular arrow link.

### `About`
The template SHALL display a 2-column split layout with an image on the left and content on the right, including an "About Us" label, heading, description paragraphs, and an accordion with "Road Transport" and "Sea Cargo" items.

### `Mission`
The template SHALL display a dark-background 2-column split with a "Our Mission" label, blockquote, and "Learn More" outlined button on the left, and an image on the right.

### `Projects`
The template SHALL display a 2-column split with an image on the left and dark content on the right, including the heading "We give you complete control of your shipments" and numbered project cards.

### `CTABanner`
The template SHALL display a light gray-blue banner with "Need Help? Get Free quote!" heading, subtitle, and an orange "Learn More" button.

### `Testimonial`
The template SHALL display a dark-background 2-column split with "Client Testimonial" label, quote, founder avatar and name on the left, and a video placeholder with play button on the right.

### `Blog`
The template SHALL display a light gray-blue section with "Latest News" heading and a 3-column grid of blog post cards with images, dates, and titles.

### `Brands`
The template SHALL display a horizontal row of partner brand names.

### `Footer`
The template SHALL display a 5-column footer with logo, quick links, solutions, support, newsletter form with email input, social media icons, copyright line, and a mandatory Component Dock attribution link.

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
- **Provenance ban.** No file under `apps/logistix/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/logistix/public/CNAME` = `logistix.free.componentdock.com`
  and the package `homepage` = `https://logistix.free.componentdock.com`.

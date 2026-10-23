# Plumb — Design Notes

Reference: **Gravity** — `https://colorlib.com/wp/template/gravity/`  
Live preview: `https://preview.colorlib.com/theme/gravity/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/gravity-free-template.jpg  
Shipped: https://plumb.free.componentdock.com

Plumb is a product landing page with a parallax hero, a latest-product band, four-column features, news cards and testimonials. It recreates the ColorLib **Gravity** creative agency design as a React template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@400;700;900**, **Playfair Display**

## Design tokens (`apps/plumb/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fff3ec` | primary 50 |
| `--color-primary-100` | `#ffe2d0` | primary 100 |
| `--color-primary-200` | `#ffc5a0` | primary 200 |
| `--color-primary-300` | `#ffa066` | primary 300 |
| `--color-primary-400` | `#fb742d` | primary 400 |
| `--color-primary-500` | `#e5651f` | primary 500 |
| `--color-primary-600` | `#cc5515` | primary 600 |
| `--color-primary-700` | `#a64210` | primary 700 |
| `--color-primary-800` | `#80320c` | primary 800 |
| `--color-primary-900` | `#60260a` | primary 900 |
| `--color-cream` | `#faf8f5` | Light section backgrounds |
| `--color-mist` | `#f5f3f0` | mist |
| `--color-smoke` | `#7f7f7f` | Muted text |
| `--color-ink` | `#000000` | ink |
| `--font-sans` | `'Lato', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Playfair Display', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with logo, navigation links, and mobile toggle | see fidelity note below |
| 2 | `Hero` | Hero section with parallax background and CTA | see fidelity note below |
| 3 | `LatestProduct` | Latest product section with image and text | see fidelity note below |
| 4 | `Features` | Four-column features section | see fidelity note below |
| 5 | `WebResources` | Web resources section with stats and checklist | see fidelity note below |
| 6 | `News` | News section with author cards | see fidelity note below |
| 7 | `Subscribe` | Newsletter subscription form | see fidelity note below |
| 8 | `Services` | Services grid with icons | see fidelity note below |
| 9 | `Testimonials` | Testimonials section with quotes | see fidelity note below |
| 10 | `CTA` | Hero section with parallax background and CTA | see fidelity note below |
| 11 | `Footer` | Footer with columns and Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL render a navigation bar with the logo "Plumb", five navigation links (Home, About, Services, News, Contact), and a hamburger menu toggle for mobile viewports.

### `Hero`
The template SHALL render a full-width hero section with a background image, a heading, and a "Let's get started" call-to-action button linking to the contact section.

### `LatestProduct`
The template SHALL render a split section showing a "Latest Product" caption, a heading "Poisson Blanc", a paragraph of text, and an image.

### `Features`
The template SHALL render four numbered feature items (1 through 4) each with a paragraph of text and a "Read more" link.

### `WebResources`
The template SHALL render a split section with an illustration image, a "Web Resources" heading, descriptive text, two statistics (99% success rate and 20391 happy customers), a five-item checklist, and a "Contact us" CTA.

### `News`
The template SHALL render an "On The News" heading followed by a grid of three article cards, each with an author photo, author name, heading, excerpt, and "Read more" link.

### `Subscribe`
The template SHALL render a newsletter section with a heading, description text, an email input field, and a "Send" submit button. Submitting the form SHALL clear the email input.

### `Services`
The template SHALL render a "Services" heading followed by a 2x2 grid of service cards (Web Development, Web Design, Graphic Design, Copywriting), each with an icon, heading, and description.

### `Testimonials`
The template SHALL render a "Testimonials" heading followed by a grid of testimonial cards, each with a blockquote, author photo, author name, and title.

### `CTA`
The template SHALL render a full-width hero section with a background image, a heading, and a "Let's get started" call-to-action button linking to the contact section.

### `Footer`
The template SHALL render a footer with four columns (About, Pages, Resources, Contact), social links, copyright text with the current year, and a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/plumb/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/plumb/public/CNAME` = `plumb.free.componentdock.com`
  and the package `homepage` = `https://plumb.free.componentdock.com`.

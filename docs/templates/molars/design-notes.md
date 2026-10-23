# Molars — Design Notes

Reference: **Dentures** — `https://colorlib.com/wp/template/dentures/`  
Live preview: `https://preview.colorlib.com/theme/dentures/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dentures-free-template.jpg  
Shipped: https://molars.free.componentdock.com

Molars is a dental clinic landing page recreated from the ColorLib "Dentures" template. It features a hero with video play button, a services/features grid, a free quote form, customer testimonials, a "why choose us" section, a team section, and a multi-column footer. The template uses Raleway font and a teal #12cad6 brand color.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Raleway**, **Raleway:wght@300;400;600;700**

## Design tokens (`apps/molars/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#e0fafb` | primary 50 |
| `--color-primary-100` | `#b3f2f5` | primary 100 |
| `--color-primary-200` | `#80e9ee` | primary 200 |
| `--color-primary-300` | `#4de0e7` | primary 300 |
| `--color-primary-400` | `#12cad6` | primary 400 |
| `--color-primary-500` | `#0fb4bf` | primary 500 |
| `--color-primary-600` | `#0d9da8` | primary 600 |
| `--color-primary-700` | `#0a7d85` | primary 700 |
| `--color-primary-800` | `#075d62` | primary 800 |
| `--color-primary-900` | `#043d3f` | primary 900 |
| `--color-ink` | `#4d4d4d` | Body text. |
| `--color-footer` | `#333333` | Footer colors. |
| `--color-footer-muted` | `#737373` | footer muted |
| `--color-footer-link` | `#999999` | footer link |
| `--font-sans` | `'Raleway', ui-sans-serif, system-ui, sans-serif` | Raleway (headings + body) via Google Fonts — matching the ColorLib font. |
| `--font-display` | `'Raleway', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar displays brand and navigation | see fidelity note below |
| 2 | `Hero` | Hero section with headline and CTAs | see fidelity note below |
| 3 | `Features` | Features grid displays six services | see fidelity note below |
| 4 | `FreeQuote` | FreeQuote form with image | see fidelity note below |
| 5 | `Testimonials` | Testimonials section with customer cards | see fidelity note below |
| 6 | `WhyChooseUs` | WhyChooseUs section with three features | see fidelity note below |
| 7 | `Team` | Team section with three members | see fidelity note below |
| 8 | `Footer` | Footer with navigation, news, newsletter, and social links | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar SHALL display the "Molars" brand logo and navigation links for Home, About, Services, Testimonials, and Contact. The mobile menu SHALL open and close via a toggle button.

### `Hero`
The hero SHALL display a background image overlay, a decorative play button, the headline "Dental Clinic for Everyone", a subtitle, and two CTA buttons ("Check Out Our Services" and "About Us").

### `Features`
The features section SHALL render a 3x2 grid of six service cards, each with an icon, title, and description.

### `FreeQuote`
The free quote section SHALL display a form with name, email, and message fields, a submit button, and a decorative image alongside.

### `Testimonials`
The testimonials section SHALL display four customer cards, each with a photo, name, "Customer" label, and a quote.

### `WhyChooseUs`
The why choose us section SHALL display a heading "Why Choose us", a clinic image, and three feature rows: Fast Support, Happy Customers, and 24/7 Support.

### `Team`
The team section SHALL display three team members, each with a photo, name, specialty, social links (Facebook, Twitter, Instagram, LinkedIn), and a bio.

### `Footer`
The footer SHALL display navigation links, recent news items with thumbnails, a newsletter email form, social media links, and a copyright line linking to Component Dock.

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
- **Provenance ban.** No file under `apps/molars/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/molars/public/CNAME` = `molars.free.componentdock.com`
  and the package `homepage` = `https://molars.free.componentdock.com`.

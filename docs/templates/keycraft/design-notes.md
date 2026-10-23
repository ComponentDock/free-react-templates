# Keycraft — Design Notes

Reference: **Locksmith** — `https://colorlib.com/wp/template/locksmith/`  
Live preview: `https://preview.colorlib.com/theme/locksmith/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/locksmith-colorlib-template.jpg  
Shipped: https://keycraft.free.componentdock.com

Recreation of ColorLib "Locksmith" (https://colorlib.com/wp/template/locksmith/) as a React 19 + Tailwind CSS 4 + TypeScript template. Provides a locksmith/security services landing page with hero, quote form, services grid, stats counter, product showcase, testimonials, and blog.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700;800**, **Rajdhani**

## Design tokens (`apps/keycraft/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fff9e6` | primary 50 |
| `--color-primary-100` | `#fff0b3` | primary 100 |
| `--color-primary-200` | `#ffe680` | primary 200 |
| `--color-primary-300` | `#ffdb4d` | primary 300 |
| `--color-primary-400` | `#ffc446` | primary 400 |
| `--color-primary-500` | `#f5b800` | primary 500 |
| `--color-primary-600` | `#cc9a00` | primary 600 |
| `--color-primary-700` | `#997300` | primary 700 |
| `--color-primary-800` | `#664d00` | primary 800 |
| `--color-primary-900` | `#332600` | primary 900 |
| `--color-navy` | `#052336` | Dark navy (ColorLib header/footer bg #052336). |
| `--color-teal` | `#0e1f24` | Dark teal (ColorLib section title #0e1f24). |
| `--color-smoke` | `#444444` | Muted body copy (ColorLib #444444). |
| `--color-ink` | `#111111` | ink |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Rajdhani', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with navigation and contact | see fidelity note below |
| 2 | `Hero` | Hero section with CTA | see fidelity note below |
| 3 | `GetQuote` | Get a quote form | see fidelity note below |
| 4 | `Services` | Services grid | see fidelity note below |
| 5 | `WhyChooseUs` | Why choose us section | see fidelity note below |
| 6 | `Counter` | Statistics counter | see fidelity note below |
| 7 | `Products` | Products showcase | see fidelity note below |
| 8 | `Testimonial` | Testimonials | see fidelity note below |
| 9 | `Blog` | Blog posts | see fidelity note below |
| 10 | `Footer` | Footer with Component Dock attribution | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL render a sticky navbar with the brand name "Keycraft", navigation links (Home, About, Services, Shop, News, Contact), and a phone number. The navbar SHALL support a mobile hamburger menu toggle.

### `Hero`
The template SHALL render a full-width hero section with a background image, subtitle "Best locksmith", heading "We Provide Best Locksmith Services All Over World", and a "Contact us" CTA button.

### `GetQuote`
The template SHALL render a dark section with a "Get a quote" heading and a form containing Name, Phone, and Service dropdown fields with a submit button.

### `Services`
The template SHALL display 6 service cards in a 3-column grid: Locksmith Services, Safes & Locks, Access Control, Security Doors, Alarm System, and Video Surveillance.

### `WhyChooseUs`
The template SHALL display a split layout with an image grid on the left and a checklist of 5 items on the right, plus a "Get a quote" CTA.

### `Counter`
The template SHALL display 5 statistics: 25k+ Happy Customers, 16 World Wide Branch, 28k+ Project Complete, 36 Award Winner, 74k+ Products sold.

### `Products`
The template SHALL display 5 product cards with image, price ($55.0), title, and star rating, plus a "View all" link.

### `Testimonial`
The template SHALL display a split layout with a dark overlay + phone CTA on the left and a testimonial slider on the right with dot navigation.

### `Blog`
The template SHALL display 4 blog post cards in a 2-column grid with image, category tag, title, date, and comment count.

### `Footer`
The template SHALL render a 4-column footer (About, Feature Services, Quick Links, Newsletter) with a copyright line linking to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/keycraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/keycraft/public/CNAME` = `keycraft.free.componentdock.com`
  and the package `homepage` = `https://keycraft.free.componentdock.com`.

# Reframe — Design Notes

Reference: **Pivot** — `https://colorlib.com/wp/template/pivot/`  
Live preview: `https://preview.colorlib.com/theme/pivot/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/pivot-free-template.jpg  
Shipped: https://reframe.free.componentdock.com

Recreate ColorLib "Pivot" (https://colorlib.com/wp/template/pivot/) as a React 19 + Tailwind CSS 4 + TypeScript template named "Reframe". The original is a construction company landing page with hero, about, projects, services, news, testimonials, CTA, and footer sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **K2D**, **K2D:wght@300;400;500;600;700**, **Niramit**

## Design tokens (`apps/reframe/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#007bff` | brand |
| `--color-brand-dark` | `#0056b3` | brand dark |
| `--color-brand-light` | `#3395ff` | brand light |
| `--color-ink` | `#1a1a2e` | Ink — dark headings/footer (#1a1a2e). |
| `--color-ink-dark` | `#111122` | ink dark |
| `--color-paper` | `#f2f2f2` | Soapstone — light section background (#f2f2f2). |
| `--color-mist` | `#6c757d` | Mist — muted body text (#6c757d). |
| `--color-primary-50` | `#e7f1ff` | primary 50 |
| `--color-primary-100` | `#cfe3ff` | primary 100 |
| `--color-primary-200` | `#a5c8ff` | primary 200 |
| `--color-primary-300` | `#7aafff` | primary 300 |
| `--color-primary-400` | `#5095ff` | primary 400 |
| `--color-primary-500` | `#007bff` | primary 500 |
| `--color-primary-600` | `#0056b3` | primary 600 |
| `--color-primary-700` | `#003d80` | primary 700 |
| `--color-primary-800` | `#00295c` | primary 800 |
| `--color-primary-900` | `#001a3d` | primary 900 |
| `--font-sans` | `'Niramit', Arial, sans-serif` | Fonts: "K2D" (headings) + "Niramit" (body) from the original. |
| `--font-display` | `'K2D', sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with sticky behavior and mobile toggle | see fidelity note below |
| 2 | `Hero` | Hero section with background image and CTA | see fidelity note below |
| 3 | `About` | About section with text and image | see fidelity note below |
| 4 | `Projects` | Projects grid section | see fidelity note below |
| 5 | `Services` | Services section with icon cards | see fidelity note below |
| 6 | `News` | News section with article cards | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `CTA` | Hero section with background image and CTA | see fidelity note below |
| 9 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a fixed navbar with logo, navigation links (Home, Services dropdown, Projects, News, About, Contact), and a "Quotation" button. The navbar SHALL become opaque on scroll and SHALL support a mobile hamburger menu.

### `Hero`
The template SHALL display a full-width hero section with a dark overlay, construction background image, heading text, subtitle, and a "Get Started" CTA button.

### `About`
The template SHALL display an about section with a heading, blue accent underline, descriptive paragraphs, and a construction worker image in a two-column layout.

### `Projects`
The template SHALL display a projects section with a heading and a 3-column grid of project cards, each with an image and title.

### `Services`
The template SHALL display a services section with 3 service cards, each containing an icon, title, and description.

### `News`
The template SHALL display a news section with 4 article cards in a grid, each with an image, date, and title.

### `Testimonials`
The template SHALL display a testimonials section with customer quotes and author attributions.

### `CTA`
The template SHALL display a full-width hero section with a dark overlay, construction background image, heading text, subtitle, and a "Get Started" CTA button.

### `Footer`
The template SHALL display a dark footer with company info (address, phone, email), quick links, social links, and a copyright line linking to https://www.componentdock.com/ branded as "Component Dock". The footer SHALL NOT contain any ColorLib references.

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
- **Provenance ban.** No file under `apps/reframe/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/reframe/public/CNAME` = `reframe.free.componentdock.com`
  and the package `homepage` = `https://reframe.free.componentdock.com`.

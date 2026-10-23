# Rankly — Design Notes

Reference: **Seo** — `https://colorlib.com/wp/template/seo/`  
Live preview: `https://preview.colorlib.com/theme/seo/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/seo-free-seo-website-template.jpg  
Shipped: https://rankly.free.componentdock.com

Rankly is a single-page SEO/analysis landing page in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Seo" design (https://colorlib.com/wp/template/seo/), built under a DIFFERENT name (**Rankly**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/rankly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f54349` | brand |
| `--color-brand-dark` | `#d93636` | brand dark |
| `--color-ink` | `#222222` | Ink — dark headings (#222222). |
| `--color-paper` | `#f9f9ff` | Paper — light section background (#f9f9ff). |
| `--color-mist` | `#777777` | Mist — muted body text (#777777). |
| `--color-primary-50` | `#fef2f2` | Primary scale so shared Button/ButtonLink `primary` resolves to brand red. |
| `--color-primary-100` | `#fee2e2` | primary 100 |
| `--color-primary-200` | `#fecaca` | primary 200 |
| `--color-primary-300` | `#fca5a5` | primary 300 |
| `--color-primary-400` | `#f87171` | primary 400 |
| `--color-primary-500` | `#f54349` | primary 500 |
| `--color-primary-600` | `#d93636` | primary 600 |
| `--color-primary-700` | `#b91c1c` | primary 700 |
| `--color-primary-800` | `#991b1b` | primary 800 |
| `--color-primary-900` | `#7f1d1d` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top Bar | see fidelity note below |
| 2 | `Navbar` | Navigation Bar | see fidelity note below |
| 3 | `Hero` | Hero Section | see fidelity note below |
| 4 | `Services` | Services Section | see fidelity note below |
| 5 | `About` | About Section | see fidelity note below |
| 6 | `Features` | Features Section | see fidelity note below |
| 7 | `Pricing` | Pricing Section | see fidelity note below |
| 8 | `Team` | Team Section | see fidelity note below |
| 9 | `Testimonials` | Testimonials Section | see fidelity note below |
| 10 | `Blog` | Blog Section | see fidelity note below |
| 11 | `Brands` | Brands Section | see fidelity note below |
| 12 | `Contact` | Contact Form | see fidelity note below |
| 13 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The template SHALL display a top bar with phone number, email, and a "Free SEO Analysis" link.

### `Navbar`
The template SHALL display a sticky navigation bar with logo and nav links.

### `Hero`
The template SHALL display a hero section with headline, description, and CTA.

### `Services`
The template SHALL display three service cards with icons, titles, and descriptions.

### `About`
The template SHALL display an about section with a chart placeholder and text.

### `Features`
The template SHALL display a features section with text and image.

### `Pricing`
The template SHALL display three pricing cards with plan names, prices, and feature lists.

### `Team`
The template SHALL display four team members with photos, names, and roles.

### `Testimonials`
The template SHALL display testimonials with quotes, names, and roles.

### `Blog`
The template SHALL display four blog post cards with images, dates, titles, and engagement counts.

### `Brands`
The template SHALL display a row of brand logos.

### `Contact`
The template SHALL display a contact form with name, email, subject, and message fields.

### `Footer`
The template SHALL display a footer with product links, newsletter form, Instagram feed, social icons, and a Component Dock attribution.

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
- **Provenance ban.** No file under `apps/rankly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/rankly/public/CNAME` = `rankly.free.componentdock.com`
  and the package `homepage` = `https://rankly.free.componentdock.com`.

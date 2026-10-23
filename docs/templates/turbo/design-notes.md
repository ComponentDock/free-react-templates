# Turbo — Design Notes

Reference: **Nitro** — `https://colorlib.com/wp/template/nitro/`  
Live preview: `https://preview.colorlib.com/theme/nitro/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/nitro-free-template.jpg  
Shipped: https://turbo.free.componentdock.com

Recreation of ColorLib Nitro (`https://colorlib.com/wp/template/nitro/`, preview: `https://preview.colorlib.com/theme/nitro/`). Built as a modern React 19 + Tailwind CSS 4 business agency landing template with hero, about, features, team, portfolio, services, testimonials, pricing, FAQ, blog, contact, and footer sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700**

## Design tokens (`apps/turbo/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#e7f1ff` | primary 50 |
| `--color-primary-100` | `#c5d9fe` | primary 100 |
| `--color-primary-200` | `#9ebdfe` | primary 200 |
| `--color-primary-300` | `#6d99fd` | primary 300 |
| `--color-primary-400` | `#4277fc` | primary 400 |
| `--color-primary-500` | `#0d6efd` | primary 500 |
| `--color-primary-600` | `#0a5bcf` | primary 600 |
| `--color-primary-700` | `#0849a1` | primary 700 |
| `--color-primary-800` | `#063a7a` | primary 800 |
| `--color-primary-900` | `#042d5c` | primary 900 |
| `--color-purple-400` | `#6b6daa` | Purple accent (ColorLib .circle-bg / secondary elements). |
| `--color-purple-500` | `#505288` | purple 500 |
| `--color-purple-600` | `#3e4070` | purple 600 |
| `--color-ink` | `#212529` | Neutral tones. |
| `--color-mist` | `#f8f9fa` | mist |
| `--color-smoke` | `#6c757d` | smoke |
| `--color-silver` | `#dee2e6` | silver |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero Section | see fidelity note below |
| 3 | `About` | About Section | see fidelity note below |
| 4 | `Features` | Features Section | see fidelity note below |
| 5 | `Team` | Team Section | see fidelity note below |
| 6 | `Portfolio` | Portfolio Section | see fidelity note below |
| 7 | `Services` | Services Section | see fidelity note below |
| 8 | `Testimonials` | Testimonials Section | see fidelity note below |
| 9 | `Pricing` | Pricing Section | see fidelity note below |
| 10 | `FAQ` | FAQ Section | see fidelity note below |
| 11 | `Blog` | Blog Section | see fidelity note below |
| 12 | `Contact` | Contact Section | see fidelity note below |
| 13 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The page shall display a sticky navbar with the "Turbo." logo and navigation links.

### `Hero`
The page shall display a full-width hero with background image, heading, subtitle, and CTA button.

### `About`
The page shall display an About section with heading, description, and feature bullets.

### `Features`
The page shall display 3 feature cards with icons, titles, descriptions, and links.

### `Team`
The page shall display 4 team member cards with photos, names, and titles.

### `Portfolio`
The page shall display a filterable portfolio gallery with filter tabs.

### `Services`
The page shall display 6 service cards with icons, titles, descriptions, and links.

### `Testimonials`
The page shall display testimonials with quotes, author names, and roles.

### `Pricing`
The page shall display 3 pricing tiers with feature lists and CTA buttons.

### `FAQ`
The page shall display an FAQ accordion with expandable question/answer pairs.

### `Blog`
The page shall display 3 blog cards with images, titles, authors, dates, and excerpts.

### `Contact`
The page shall display contact information and a contact form.

### `Footer`
The page shall display a footer with logo, quick links, social links, and Component Dock copyright.

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
- **Provenance ban.** No file under `apps/turbo/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/turbo/public/CNAME` = `turbo.free.componentdock.com`
  and the package `homepage` = `https://turbo.free.componentdock.com`.

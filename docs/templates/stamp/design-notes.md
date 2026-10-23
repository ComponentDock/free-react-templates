# Stamp — Design Notes

Reference: **Supreme** — `https://colorlib.com/wp/template/supreme/`  
Live preview: `https://preview.colorlib.com/theme/supreme/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/supreme-free-template-1.jpg  
Shipped: https://stamp.free.componentdock.com

An Industrial Manufacturing Landing template with hero, services, about, faq, portfolio and team sections. Provide a free, production-ready React recreation of the ColorLib "Supreme" industrial manufacturing landing page template, using the Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Barlow Condensed**, **Barlow Condensed:wght@300;400;500;600;700;800**

## Design tokens (`apps/stamp/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#fe5c24` | Brand palette — from the Supreme industrial design: orange #fe5c24, dark navy #191d34 |
| `--color-brand-hover` | `#ff7e5f` | brand hover |
| `--color-ink` | `#191d34` | Ink — dark heading color (#191d34 from the original) |
| `--color-mist` | `#777777` | Mist — body text (#777 from the original) |
| `--color-paper` | `#f7f7f7` | Paper — light section bg (#f7f7f7 from the original) |
| `--color-coral` | `#ff7e5f` | Coral — link hover (#ff7e5f from the original) |
| `--font-barlow` | `'Barlow Condensed', sans-serif` | Font: Barlow Condensed from the original |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders all navigation links and contact info | see fidelity note below |
| 2 | `Hero` | Hero section displays headline and CTA | see fidelity note below |
| 3 | `Services` | Services section shows 4 service cards | see fidelity note below |
| 4 | `About` | About section displays commitment message | see fidelity note below |
| 5 | `Industries` | Industries section shows 3 industry cards | see fidelity note below |
| 6 | `FAQ` | FAQ section shows collapsible accordion | see fidelity note below |
| 7 | `Portfolio` | Portfolio section shows project cards with overlay | see fidelity note below |
| 8 | `Team` | Team section displays 4 team members | see fidelity note below |
| 9 | `Blog` | Blog section shows 3 blog posts | see fidelity note below |
| 10 | `Newsletter` | Newsletter section has email subscription form | see fidelity note below |
| 11 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
Users SHALL see a top bar with phone number and email, plus a navigation bar with links to Home, About, Industries, FAQ, Projects, Team, Blog, and Contact.

### `Hero`
Users SHALL see a full-width hero banner with the "Since 1990" subtitle, "Real Solutions!" headline, manufacturing subtext, and a "Learn More" call-to-action button.

### `Services`
Users SHALL see exactly 4 service cards, each with an icon, title, and description.

### `About`
Users SHALL see the "We Are Committed To Customer Satisfaction" heading with an image and a "Read More" button.

### `Industries`
Users SHALL see exactly 3 industry cards with images and titles.

### `FAQ`
Users SHALL see a FAQ section with 3 collapsible accordion items. The first item is expanded by default.

### `Portfolio`
Users SHALL see a portfolio grid with a title card, 4 project cards with overlay text, and a "More Projects" CTA.

### `Team`
Users SHALL see exactly 4 team member cards with photos, names, roles, and social links.

### `Blog`
Users SHALL see 3 blog post cards with category tags, author, date, title, and excerpt.

### `Newsletter`
Users SHALL see a newsletter section with an email input and subscribe button.

### `Footer`
Users SHALL see a footer with the "Component Dock" link pointing to https://www.componentdock.com/, along with services links, gallery thumbnails, and contact info.

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
- **Provenance ban.** No file under `apps/stamp/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/stamp/public/CNAME` = `stamp.free.componentdock.com`
  and the package `homepage` = `https://stamp.free.componentdock.com`.

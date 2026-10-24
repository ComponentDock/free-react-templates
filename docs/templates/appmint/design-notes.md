# Appmint — Design Notes

Reference: **Massive** — `https://colorlib.com/wp/template/massive/`  
Live preview: `https://preview.colorlib.com/theme/massive/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/massive-free-template.jpg  
Shipped: https://appmint.free.componentdock.com

Appmint is a single-page app landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Massive" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Libre Baskerville**, **Libre Baskerville:ital,wght@0,400;0,700;1,400**, **Open Sans**

## Design tokens (`apps/appmint/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-aqua` | `#81ee8e` | aqua |
| `--color-mint` | `#2deab6` | mint |
| `--color-teal` | `#00e2d9` | teal |
| `--color-cyan` | `#00d7f2` | cyan |
| `--color-sky` | `#00c9fd` | sky |
| `--color-ocean` | `#1193d4` | ocean |
| `--color-accent` | `#ef494d` | accent |
| `--color-navy` | `#1a264a` | navy |
| `--color-ink` | `#292929` | ink |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Libre Baskerville', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Features` | Features section | see fidelity note below |
| 4 | `AppSplit` | App split section | see fidelity note below |
| 5 | `Video` | Video section | see fidelity note below |
| 6 | `Work` | Work section | see fidelity note below |
| 7 | `Screenshots` | Screenshots section | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `Download` | Download section | see fidelity note below |
| 10 | `Team` | Team section | see fidelity note below |
| 11 | `Pricing` | Pricing section | see fidelity note below |
| 12 | `Blog` | Blog section | see fidelity note below |
| 13 | `Contact` | Contact section | see fidelity note below |
| 14 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Appmint", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline, a blurb, and two buttons.

### `Features`
The system SHALL render a features section with a heading and four feature tiles, each with an icon, a title, and a blurb.

### `AppSplit`
The system SHALL render an app split section with a heading and at least three feature items.

### `Video`
The system SHALL render a video section with a heading and a play button.

### `Work`
The system SHALL render a how-it-works section with a heading and four steps.

### `Screenshots`
The system SHALL render a screenshots section with a heading and a row of app screenshots.

### `Testimonials`
The system SHALL render a testimonials section with a heading and client quotes.

### `Download`
The system SHALL render a download section with a heading and app store buttons.

### `Team`
The system SHALL render a team section with a heading and team member cards.

### `Pricing`
The system SHALL render a pricing section with a heading and four pricing plans.

### `Blog`
The system SHALL render a blog section with a heading and at least three post cards.

### `Contact`
The system SHALL render a contact section with a heading and a contact form.

### `Footer`
The system SHALL render a footer with link columns, social links, and a copyright line.

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
- **Provenance ban.** No file under `apps/appmint/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/appmint/public/CNAME` = `appmint.free.componentdock.com`
  and the package `homepage` = `https://appmint.free.componentdock.com`.

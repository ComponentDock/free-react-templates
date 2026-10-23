# Wordpressapp — Design Notes

Reference: **Wordpress App Themes** — `https://colorlib.com/wp/template/wordpress-app-themes/`  
Live preview: `https://preview.colorlib.com/theme/wordpress-app-themes/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/app-wordpress-themes.jpg  
Shipped: https://wordpressapp.free.componentdock.com

WordpressApp is a single-page app landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Wordpress App Themes" entry in TEMPLATES.md (App Landing Page category), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;500;600;700**

## Design tokens (`apps/wordpressapp/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#6a1b9a` | brand |
| `--color-punch` | `#ec2d8e` | Hot-pink accent used for the primary CTA ("BUY NOW" button). |
| `--color-grape` | `#4a148c` | Deep violet for gradient end stops. |
| `--color-paper` | `#f8f9fa` | Light section background and borders (bootstrap-style neutrals). |
| `--color-line` | `#dee2e6` | line |
| `--color-ink` | `#212529` | Near-black headings/text. |
| `--color-mist` | `#6c757d` | Secondary body text. |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Features` | Features section | see fidelity note below |
| 4 | `AppSplit` | App split section | see fidelity note below |
| 5 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "WordpressApp", anchor links to the page's sections, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline, a blurb, and a call-to-action button.

### `Features`
The system SHALL render a features section with a heading and at least three feature cards, each with an icon, a title, and a blurb.

### `AppSplit`
The system SHALL render an app showcase split section with a heading, a blurb, and a call-to-action button.

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
- **Provenance ban.** No file under `apps/wordpressapp/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/wordpressapp/public/CNAME` = `wordpressapp.free.componentdock.com`
  and the package `homepage` = `https://wordpressapp.free.componentdock.com`.

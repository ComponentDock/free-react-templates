# Upswing — Design Notes

> **Renamed:** this app shipped as `favison` (a rule-5 violation — the folder
> reused the ColorLib source name). It is now `apps/upswing` /
> `@free-react-templates/upswing` / https://upswing.free.componentdock.com.

Reference: **Favison** — `https://colorlib.com/wp/template/favison/`  
Live preview: `https://preview.colorlib.com/theme/favison/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/favison-free-template.jpg  
Shipped: https://upswing.free.componentdock.com

Upswing is a single-page SaaS/business landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Favison" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/upswing/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fef2f4` | primary 50 |
| `--color-primary-100` | `#fde3e7` | primary 100 |
| `--color-primary-200` | `#fbcbd2` | primary 200 |
| `--color-primary-300` | `#f8a5b2` | primary 300 |
| `--color-primary-400` | `#f4738a` | primary 400 |
| `--color-primary-500` | `#f95f77` | primary 500 |
| `--color-primary-600` | `#f84b67` | primary 600 |
| `--color-primary-700` | `#d63a55` | primary 700 |
| `--color-primary-800` | `#a82e44` | primary 800 |
| `--color-primary-900` | `#7a2132` | primary 900 |
| `--color-sun` | `#f8b600` | sun |
| `--color-aqua` | `#4cd3e3` | aqua |
| `--color-ink` | `#1d1d1d` | ink |
| `--color-coal` | `#2a2a2a` | coal |
| `--color-paper` | `#f9f9ff` | paper |
| `--color-mist` | `#f0e9ff` | mist |
| `--color-body` | `#888888` | body |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original font: "Poppins" (Google Fonts <link> in index.html). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Services` | Services section | see fidelity note below |
| 4 | `About` | About/features section | see fidelity note below |
| 5 | `FeatureBand` | Feature band | see fidelity note below |
| 6 | `Pricing` | Pricing section | see fidelity note below |
| 7 | `Stats` | Stats split | see fidelity note below |
| 8 | `Blog` | Blog section | see fidelity note below |
| 9 | `Brands` | Brands strip | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Upswing", anchor links to the page's sections, a "Sign Up" button, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a headline, a blurb, and a "Begin Free Trial" button.

### `Services`
The system SHALL render a services section with three cards: "Unique Design", "Business Solution", and "Customer Support", each with a blurb and a "Read More" link.

### `About`
The system SHALL render a features section with six tiles: "Cloud Compatibility", "On Time Delivery", "Easy to Use", "Mobile Application", "Add New Project", and "Generating Leads".

### `FeatureBand`
The system SHALL render a dark feature band with a heading, a blurb, and two feature rows.

### `Pricing`
The system SHALL render a pricing section with a heading and at least one plan with a price and a purchase button.

### `Stats`
The system SHALL render a stats split section with an image, a heading, a blurb, and three icon rows.

### `Blog`
The system SHALL render a blog section with a heading and at least three post cards, each with a category, a date, and a title.

### `Brands`
The system SHALL render a strip of client logo tiles between the blog and the footer.

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
- **Provenance ban.** No file under `apps/upswing/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/upswing/public/CNAME` = `upswing.free.componentdock.com`
  and the package `homepage` = `https://upswing.free.componentdock.com`.

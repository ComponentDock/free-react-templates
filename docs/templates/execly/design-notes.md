# Execly — Design Notes

Reference: **Corporate** — `https://colorlib.com/wp/template/corporate/`  
Live preview: `https://preview.colorlib.com/theme/corporate/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/corporate-free-corporate-website-template.jpg  
Shipped: https://execly.free.componentdock.com

A Corporate Business template with header with sticky, hero banner, about section with features, services and portfolio gallery sections. Recreation of the ColorLib **Corporate** business template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/execly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#6434fe` | brand |
| `--color-heading` | `#222222` | heading |
| `--color-body-text` | `#777777` | body text |
| `--color-overlay` | `rgba(0, 0, 0, 0.5)` | overlay |
| `--color-footer-bg` | `#222222` | footer bg |
| `--color-footer-text` | `#999999` | footer text |
| `--color-white` | `#ffffff` | white |
| `--font-heading` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-body` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header with sticky navigation | see fidelity note below |
| 2 | `Hero` | Hero banner section | see fidelity note below |
| 3 | `About` | About section with features | see fidelity note below |
| 4 | `Services` | Services grid | see fidelity note below |
| 5 | `Features` | About section with features | see fidelity note below |
| 6 | `Portfolio` | Portfolio gallery | see fidelity note below |
| 7 | `Stats` | Stats counter section | see fidelity note below |
| 8 | `RecentWorks` | Recent works section | see fidelity note below |
| 9 | `Brands` | Brand logos section | see fidelity note below |
| 10 | `Contact` | Contact form | see fidelity note below |
| 11 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Header`
The app SHALL render a sticky header containing the brand name "Execly" and navigation links (Home, About, Services, Portfolio, Recent Work, Contact) that scroll to the corresponding sections.

### `Hero`
The app SHALL render a full-width hero banner with a background image, dark overlay, subtitle "Discover the Colorful World", title "Build Your Dream", description text, and a "Discover Now" CTA button.

### `About`
The app SHALL render a two-column about section with an image on the left, a heading, description text, and two feature cards (Expert Services, Great Support).

### `Services`
The app SHALL render a 4-column grid of service cards, each with an icon, title, description, and "View Details" outlined button.

### `Features`
The app SHALL render a two-column about section with an image on the left, a heading, description text, and two feature cards (Expert Services, Great Support).

### `Portfolio`
The app SHALL render a grid of 6 portfolio images with hover overlay effect.

### `Stats`
The app SHALL render a statistics section with 5 counters on a brand-colored background.

### `RecentWorks`
The app SHALL render 3 recent work cards with background images, gradient overlay, title, description, and author info.

### `Brands`
The app SHALL render a row of 5 brand logo placeholders.

### `Contact`
The app SHALL render a contact form with name, email, subject, and message fields, plus a "Send Message" button.

### `Footer`
The app SHALL render a footer with 3 columns (About Us, Contact Us, Newsletter), social links, and a copyright line linking to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/execly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/execly/public/CNAME` = `execly.free.componentdock.com`
  and the package `homepage` = `https://execly.free.componentdock.com`.

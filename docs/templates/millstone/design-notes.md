# Millstone — Design Notes

Reference: **Inds** — `https://colorlib.com/wp/template/inds/`  
Live preview: `https://preview.colorlib.com/theme/inds/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/inds-free-template.jpg  
Shipped: https://millstone.free.componentdock.com

Recreate the ColorLib "Inds" industrial company landing page as a modern React 19 + Tailwind CSS 4 + TypeScript single-page template named "Millstone". The template provides a full-featured industrial company website with top bar, navbar, hero, services, about, mission, team, CTA, and footer sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Barlow**, **Barlow:wght@300;400;500;600;700;800;900**, **Roboto**

## Design tokens (`apps/millstone/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fef6ef` | primary 50 |
| `--color-primary-100` | `#fde8d5` | primary 100 |
| `--color-primary-200` | `#fbd0aa` | primary 200 |
| `--color-primary-300` | `#f7ad74` | primary 300 |
| `--color-primary-400` | `#f27420` | primary 400 |
| `--color-primary-500` | `#e05f14` | primary 500 |
| `--color-primary-600` | `#c2480e` | primary 600 |
| `--color-primary-700` | `#a13610` | primary 700 |
| `--color-primary-800` | `#822c14` | primary 800 |
| `--color-primary-900` | `#6b2614` | primary 900 |
| `--color-navy` | `#00163e` | navy |
| `--color-navy-deep` | `#010b1d` | navy deep |
| `--color-mist` | `#f7f7f7` | mist |
| `--color-ink` | `#1a1a1a` | ink |
| `--color-heading` | `#00163e` | heading |
| `--color-body` | `#666666` | body |
| `--color-muted` | `#777777` | muted |
| `--font-heading` | `'Barlow', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-body` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | TopBar displays contact information | see fidelity note below |
| 2 | `Navbar` | Navbar provides navigation and CTA | see fidelity note below |
| 3 | `Hero` | Hero section displays industrial solutions heading | see fidelity note below |
| 4 | `Services` | Services section shows 3 service cards | see fidelity note below |
| 5 | `About` | About section displays company information | see fidelity note below |
| 6 | `Mission` | Mission section shows 4 value cards | see fidelity note below |
| 7 | `Team` | Team section shows 5 team members | see fidelity note below |
| 8 | `CTA` | Navbar provides navigation and CTA | see fidelity note below |
| 9 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The template SHALL display a top bar with phone number, email address, and business hours.

### `Navbar`
The template SHALL have a sticky navigation bar with logo, 6 links, and a Get A Quote button.

### `Hero`
The template SHALL have a full-width hero with a heading, subtitle, and CTA button.

### `Services`
The template SHALL display 3 service cards with icons, headings, descriptions, and arrow links.

### `About`
The template SHALL have an about section with a heading, image, and description.

### `Mission`
The template SHALL display 4 mission/value proposition cards.

### `Team`
The template SHALL display 5 team member cards with photos, names, and roles.

### `CTA`
The template SHALL have a sticky navigation bar with logo, 6 links, and a Get A Quote button.

### `Footer`
The template footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/millstone/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/millstone/public/CNAME` = `millstone.free.componentdock.com`
  and the package `homepage` = `https://millstone.free.componentdock.com`.

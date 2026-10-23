# Doflo — Design Notes

Reference: **Dizzi** — `https://colorlib.com/wp/template/dizzi/`  
Live preview: `https://preview.colorlib.com/theme/dizzi/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dizzi-free-template.jpg  
Shipped: https://doflo.free.componentdock.com

Recreate ColorLib Dizzi as a React 19 + Vite + Tailwind CSS 4 + TypeScript template named "Doflo". The original uses Open Sans font, green (#00d089) primary color, and dark (#1a1a2e) footer. No ColorLib assets are copied; images use picsum.photos placeholders, icons use lucide-react, and brand icons use inline SVGs.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;500;600;700**

## Design tokens (`apps/doflo/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-50` | `#e6faf1` | brand 50 |
| `--color-brand-100` | `#b3f2d6` | brand 100 |
| `--color-brand-200` | `#80e9bb` | brand 200 |
| `--color-brand-300` | `#4de1a0` | brand 300 |
| `--color-brand-400` | `#00d089` | brand 400 |
| `--color-brand-500` | `#00b87a` | brand 500 |
| `--color-brand-600` | `#009e6a` | brand 600 |
| `--color-brand-700` | `#007a53` | brand 700 |
| `--color-brand-800` | `#00573c` | brand 800 |
| `--color-brand-900` | `#003324` | brand 900 |
| `--color-indigo-400` | `#415094` | Secondary — deep indigo blue |
| `--color-indigo-600` | `#343f76` | indigo 600 |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | Open Sans — the original template's typeface |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar navigation and mobile menu | see fidelity note below |
| 2 | `Banner` | Banner hero section | see fidelity note below |
| 3 | `ClientLogos` | — | no dedicated spec block |
| 4 | `About` | About Us section | see fidelity note below |
| 5 | `Services` | Services section | see fidelity note below |
| 6 | `Portfolio` | Portfolio section with filter tabs | see fidelity note below |
| 7 | `Creative` | Creative section | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `CTA` | CTA section | see fidelity note below |
| 10 | `Footer` | Footer with Component Dock credit | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The navbar SHALL display logo, navigation links, and social icons. On mobile, the menu SHALL be toggled via a hamburger button.

### `Banner`
The banner SHALL display the agency tagline and a call-to-action button.

### `ClientLogos`
*anchors only* — Client logos

### `About`
The about section SHALL display the agency description and an explore button.

### `Services`
The services section SHALL display three service cards with number, title, description, and technology tags.

### `Portfolio`
The portfolio section SHALL display project cards filterable by category.

### `Creative`
The creative section SHALL display an image and a heading with a CTA.

### `Testimonials`
The testimonials section SHALL display client reviews with name, role, and quote.

### `CTA`
The CTA section SHALL display a call-to-action with three button links.

### `Footer`
The footer SHALL display brand info, company links, resources, contact locations, and a "Made with Component Dock" attribution link.

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
- **Provenance ban.** No file under `apps/doflo/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/doflo/public/CNAME` = `doflo.free.componentdock.com`
  and the package `homepage` = `https://doflo.free.componentdock.com`.

# Obscura — Design Notes

Reference: **Porto** — `https://colorlib.com/wp/template/porto/`  
Live preview: `https://preview.colorlib.com/theme/porto/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/porto-free-template.jpg  
Shipped: https://obscura.free.componentdock.com

Obscura is a single-page photography / photo-gallery website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Great Vibes**, **Montserrat**

## Design tokens (`apps/obscura/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-red` | `#f44336` | brand red |
| `--color-brand-purple` | `#673ab7` | brand purple |
| `--color-ink` | `#111111` | ink |
| `--color-night` | `#020202` | night |
| `--color-steel` | `#565656` | steel |
| `--color-fog` | `#8c8c8c` | fog |
| `--color-mist` | `#a2a2a2` | mist |
| `--color-smoke` | `#b7b7b7` | smoke |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-script` | `'Great Vibes', cursive` | font script |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Preloader` | Preloader | see fidelity note below |
| 2 | `Header` | Header / navigation | see fidelity note below |
| 3 | `HeroSlider` | Hero slider | see fidelity note below |
| 4 | `About` | About sections | see fidelity note below |
| 5 | `CtaBand` | Call-to-action band | see fidelity note below |
| 6 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Preloader`
The system SHALL render a black full-screen preloader with a spinning ring on initial load.

### `Header`
The system SHALL render a transparent header overlaid on the hero with a logo, social icons, and a menu.

### `HeroSlider`
The system SHALL render a full-screen photo slider with a script headline, a large heading, an outline button, a slide counter, a scroll hint, and a contact widget.

### `About`
The system SHALL render three consecutive full-bleed photo sections, each with an offset heading, paragraph, and outline button.

### `CtaBand`
The system SHALL render a full-width photo CTA band with a heading and a button.

### `Footer`
The system SHALL render a photo-background footer with an about column and two link columns plus a copyright bar.

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
- **Provenance ban.** No file under `apps/obscura/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/obscura/public/CNAME` = `obscura.free.componentdock.com`
  and the package `homepage` = `https://obscura.free.componentdock.com`.

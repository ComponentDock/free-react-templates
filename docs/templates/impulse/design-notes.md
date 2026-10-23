# Impulse — Design Notes

Reference: **Innova** — `https://colorlib.com/wp/template/innova/`  
Live preview: `https://preview.colorlib.com/theme/innova/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/innova-free-template.jpg  
Shipped: https://impulse.free.componentdock.com

A Creative Agency / Portfolio template with hero, services, portfolio, about and cta sections. Recreation of ColorLib **Innova** template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Abril Fatface**, **Roboto Mono**

## Design tokens (`apps/impulse/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#6f42c1` | brand |
| `--color-brand-hover` | `#59339d` | brand hover |
| `--color-dark` | `#343a40` | dark |
| `--color-heading` | `#000000` | heading |
| `--color-body-text` | `#6c757d` | body text |
| `--color-light-bg` | `#f8f9fa` | light bg |
| `--font-display` | `'Abril Fatface', serif` | Fonts: Abril Fatface (headings) + Roboto Mono (body) via Google Fonts (loaded in index.html). |
| `--font-sans` | `'Roboto Mono', ui-monospace, monospace` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders correctly | see fidelity note below |
| 2 | `Hero` | Hero section renders full-viewport | see fidelity note below |
| 3 | `Services` | Services section shows four cards | see fidelity note below |
| 4 | `Portfolio` | Portfolio grid with hover overlay | see fidelity note below |
| 5 | `Testimonials` | Testimonials carousel | see fidelity note below |
| 6 | `About` | About section | see fidelity note below |
| 7 | `Cta` | — | no dedicated spec block |
| 8 | `Footer` | Footer renders with columns and Component Dock link | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
Users SHALL see a transparent navbar overlaying the hero on desktop and a dark navbar on mobile.

### `Hero`
Users SHALL see a full-viewport hero with a background image, dark overlay, and large centered heading.

### `Services`
Users SHALL see four service cards in a responsive grid with purple icons.

### `Portfolio`
Users SHALL see a 2×2 portfolio grid with hover overlays showing project info.

### `Testimonials`
Users SHALL see a testimonial carousel on a light background with dot navigation.

### `About`
Users SHALL see an about section with text and image.

### `Cta`
*anchors only* — Get Started · Let us help you bring your creative vision to life. Reach out today. · Get In Touch!

### `Footer`
Users SHALL see a footer with about text, navigation links, social icons, and a Component Dock link.

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
- **Provenance ban.** No file under `apps/impulse/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/impulse/public/CNAME` = `impulse.free.componentdock.com`
  and the package `homepage` = `https://impulse.free.componentdock.com`.

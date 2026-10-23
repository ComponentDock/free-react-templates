# Playbook — Design Notes

Reference: **Strategy** — `https://colorlib.com/wp/template/strategy/`  
Live preview: `https://preview.colorlib.com/theme/strategy/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/strategy-free-template.jpg  
Shipped: https://playbook.free.componentdock.com

A Portfolio / Creative Agency template with hero, portfolio overlap, what we do, recent blog posts and cta sections. Recreation of ColorLib **Strategy** portfolio/creative agency template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **-apple-system**

## Design tokens (`apps/playbook/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#dc3545` | brand |
| `--color-brand-dark` | `#c82333` | brand dark |
| `--color-ink` | `#000000` | ink |
| `--color-secondary` | `#495057` | secondary |
| `--color-muted` | `#6c757d` | muted |
| `--color-light-text` | `#b3b3b3` | light text |
| `--color-border` | `#e6e6e6` | border |
| `--color-bg-light` | `#f8f9fa` | bg light |
| `--color-bg-form` | `#f6f6f6` | bg form |
| `--color-white` | `#ffffff` | white |
| `--color-footer-border` | `#f4f4f4` | footer border |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar SHALL display logo and navigation links | see fidelity note below |
| 2 | `Hero` | Hero SHALL display full-height section with headline | see fidelity note below |
| 3 | `Portfolio` | Portfolio overlap section SHALL display project grid with hover overlays | see fidelity note below |
| 4 | `Services` | What We Do section SHALL display services with icons | see fidelity note below |
| 5 | `BlogPosts` | Recent Blog Posts section SHALL display posts with hover effects | see fidelity note below |
| 6 | `CTA` | CTA section SHALL display animated call-to-action | see fidelity note below |
| 7 | `Footer` | Footer SHALL display copyright, social links, and Component Dock branding | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar MUST render a logo text and navigation links with a hamburger toggle for mobile.

### `Hero`
The hero section MUST render a large centered headline with a scroll-down arrow.

### `Portfolio`
The portfolio section MUST display project items in a 2+3 grid that overlaps the hero, with hover overlay effects.

### `Services`
The services section MUST display a heading, description text, and 4 service items with icons.

### `BlogPosts`
The blog section MUST display a heading and blog post items with hover overlays.

### `CTA`
The CTA section MUST display an interactive headline that changes text on hover with a red background fill animation.

### `Footer`
The footer MUST display copyright text, social media links, and Component Dock attribution.

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
- **Provenance ban.** No file under `apps/playbook/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/playbook/public/CNAME` = `playbook.free.componentdock.com`
  and the package `homepage` = `https://playbook.free.componentdock.com`.

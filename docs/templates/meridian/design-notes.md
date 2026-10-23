# Meridian — Design Notes

Reference: **Consulting** — `https://colorlib.com/wp/template/consulting/`  
Live preview: `https://preview.colorlib.com/theme/consulting/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/consulting-free-template.jpg  
Shipped: https://meridian.free.componentdock.com

Meridian is a single-page business-consulting template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;600;700;900**, **Source Serif Pro**

## Design tokens (`apps/meridian/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#1fab89` | brand |
| `--color-ink` | `#6c7b95` | ink |
| `--color-charcoal` | `#343a40` | charcoal |
| `--color-icon` | `#d1d1d1` | icon |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-serif` | `'Source Serif Pro', ui-serif, Georgia, serif` | font serif |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `HeroText` | Hero text band | see fidelity note below |
| 3 | `PhotoBand` | Photo band | see fidelity note below |
| 4 | `Services` | Services | see fidelity note below |
| 5 | `Testimonials` | Testimonials carousel | see fidelity note below |
| 6 | `Gallery` | Office Gallery | see fidelity note below |
| 7 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a transparent navbar over the hero with the brand and section links, turning solid white when sticky.

### `HeroText`
The system SHALL render a white hero band with a large black headline.

### `PhotoBand`
The system SHALL render a full-screen photo band directly below the hero text.

### `Services`
The system SHALL render a services section with an eyebrow label, a headline and three icon cards.

### `Testimonials`
The system SHALL render a dark section with a carousel of review slides.

### `Gallery`
The system SHALL render a gallery section with an eyebrow label, headline, paragraph and a six-photo grid.

### `Footer`
The system SHALL render a brand-green footer with the logo, three link columns and a copyright bar.

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
- **Provenance ban.** No file under `apps/meridian/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/meridian/public/CNAME` = `meridian.free.componentdock.com`
  and the package `homepage` = `https://meridian.free.componentdock.com`.

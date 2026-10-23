# Shutterly — Design Notes

Reference: **Josanclick** — `https://colorlib.com/wp/template/josanclick/`  
Live preview: `https://preview.colorlib.com/theme/josanclick/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/josanclick-colorlib-template.jpg  
Shipped: https://shutterly.free.componentdock.com

Shutterly is a photographer portfolio one-pager in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Jost**, **Jost:wght@300;400;500;600**, **Poiret One**

## Design tokens (`apps/shutterly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-ink` | `#0a0a0a` | ink |
| `--color-footer-bg` | `#1e1e1e` | footer bg |
| `--color-services-bg` | `#f2f4f8` | services bg |
| `--color-body` | `#656565` | body |
| `--color-muted` | `#8f8f8f` | muted |
| `--color-meta` | `#74706b` | meta |
| `--color-card-border` | `#dbdbdb` | card border |
| `--color-hover-fill` | `#071112` | hover fill |
| `--font-sans` | `'Jost', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Poiret One', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `About` | About | see fidelity note below |
| 4 | `Gallery` | Gallery | see fidelity note below |
| 5 | `Services` | Services | see fidelity note below |
| 6 | `Testimonial` | Testimonial | see fidelity note below |
| 7 | `Pricing` | Pricing | see fidelity note below |
| 8 | `Instagram` | Instagram strip | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main navigation · Mobile navigation · Shutterly

### `HeroSlider`
The system SHALL render a full-height photo slider with three slides, each with a dark gradient overlay, a caption (span + uppercase h1), arrows, and dots.

### `About`
The system SHALL render a three-column about section with a script heading, paragraph, signature, a vertical photo, an experience counter, a quote, and a "My Work" outline button.

### `Gallery`
The system SHALL render a gap-free 3-column photo gallery of six tiles, each with a hover overlay showing a caption.

### `Services`
The system SHALL render a light `#F2F4F8` services section with the heading "I do for you" and three photo cards (Event / Wedding / Family Photography).

### `Testimonial`
The system SHALL render a black-background testimonial carousel with a heading, one quote, and a founder (portrait + name/role).

### `Pricing`
The system SHALL render three bordered pricing cards, each with a black pill badge, a "$ X USD" price, five feature lines, and a "Choose This Plan" outline button.

### `Instagram`
The system SHALL render a full-bleed horizontal strip of square photo tiles with hover links.

### `Footer`
The system SHALL render a `#1E1E1E` footer with brand/pera/social, Navigation links, Contact details, a Subscribe Newsletter form, a copyright bar, a back-to-top button, and the mandatory Component Dock link.

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
- **Provenance ban.** No file under `apps/shutterly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/shutterly/public/CNAME` = `shutterly.free.componentdock.com`
  and the package `homepage` = `https://shutterly.free.componentdock.com`.

# Swatch — Design Notes

Reference: **Knuford** — `https://colorlib.com/wp/template/knuford/`  
Live preview: `https://preview.colorlib.com/theme/knuford/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/knuford-free-template.jpg  
Shipped: https://swatch.free.componentdock.com

Swatch is a personal portfolio / resume one-pager in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;600;700**

## Design tokens (`apps/swatch/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#0779e4` | brand |
| `--color-brand-soft` | `#3e9ff9` | brand soft |
| `--color-ink` | `#111111` | ink |
| `--color-body` | `#999999` | body |
| `--color-muted` | `#666666` | muted |
| `--color-paper` | `#ffffff` | paper |
| `--color-light` | `#f8f8f8` | light |
| `--color-footer-bg` | `#eeeeee` | footer bg |
| `--color-white-on` | `rgba(255, 255, 255, 0.8)` | white on |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `About` | About (tabs) | see fidelity note below |
| 4 | `Services` | Services | see fidelity note below |
| 5 | `Counters` | Counter band | see fidelity note below |
| 6 | `Portfolio` | Portfolio | see fidelity note below |
| 7 | `Testimonials` | Testimonial carousel | see fidelity note below |
| 8 | `Blog` | Blog | see fidelity note below |
| 9 | `Pricing` | Pricing | see fidelity note below |
| 10 | `Contact` | Contact | see fidelity note below |
| 11 | `CtaStrip` | CTA strip | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a fixed-top navigation bar with a brand, seven anchor links, a scrolled solid-blue state, and a mobile hamburger menu.

### `Hero`
The system SHALL render a full-viewport hero on a light sky-blue background with a "Hi There!" pill, a headline with rotating typewrite text, two CTA buttons, and social links.

### `About`
The system SHALL render an about section with a photo and a tabbed panel (About Me / Skills / Experience) that switches content client-side.

### `Services`
The system SHALL render a services section with three white cards (blue icon boxes, title, blurb, "Read more") and a bottom CTA line.

### `Counters`
The system SHALL render a photo strip with a blue overlay and three animated counters.

### `Portfolio`
The system SHALL render a 6-tile image portfolio grid with titles and a "Web Design" category label on each tile.

### `Testimonials`
The system SHALL render a light-gray testimonial carousel whose active slide is highlighted blue.

### `Blog`
The system SHALL render a light-gray blog section with six white post cards (image, meta, title, blurb).

### `Pricing`
The system SHALL render three pricing cards with blue prices, feature lists, and "Get Started" buttons; the middle card SHALL be marked "Most Popular".

### `Contact`
The system SHALL render a contact section with info rows, a form, social links, and a map placeholder.

### `CtaStrip`
The system SHALL render a solid-blue CTA strip with a headline and a white outline "Contact Me" button.

### `Footer`
The system SHALL render a `#eeeeee` footer with brand/pera/social, a Services widget, a "Have a Questions?" widget, and a copyright bar with the Component Dock link.

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
- **Provenance ban.** No file under `apps/swatch/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/swatch/public/CNAME` = `swatch.free.componentdock.com`
  and the package `homepage` = `https://swatch.free.componentdock.com`.

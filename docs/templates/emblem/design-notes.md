# Emblem — Design Notes

Reference: **Noxen** — `https://colorlib.com/wp/template/noxen/`  
Live preview: `https://preview.colorlib.com/theme/noxen/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/noxen-free-template.jpg  
Shipped: https://emblem.free.componentdock.com

Emblem is a single-page digital agency website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **DM Sans**, **DM Sans:wght@300;400;700**

## Design tokens (`apps/emblem/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#dc3545` | brand |
| `--color-ink` | `#364d59` | ink |
| `--color-feature` | `#edf7ff` | feature |
| `--color-feature-body` | `#9aa3a6` | feature body |
| `--color-light` | `#f8f9fa` | light |
| `--color-track` | `#e9ecef` | track |
| `--color-counter` | `#222222` | counter |
| `--color-gold` | `#ffd692` | gold |
| `--color-footer` | `#000000` | footer |
| `--font-sans` | `'DM Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Sticky header with topbar, nav and social icons | see fidelity note below |
| 2 | `Hero` | Hero cover with split content | see fidelity note below |
| 3 | `Features` | Features section with three cards | see fidelity note below |
| 4 | `Skills` | Skills section with progress bars | see fidelity note below |
| 5 | `CtaBand` | Photo-backdrop CTA band | see fidelity note below |
| 6 | `Counters` | Counter band | see fidelity note below |
| 7 | `NewsCarousel` | News carousel | see fidelity note below |
| 8 | `Services` | More Services grid | see fidelity note below |
| 9 | `Testimonials` | Testimonials | see fidelity note below |
| 10 | `BlogSection` | Blog section | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render the reference header: logo left, quick-contact info (address + hours) right, a nav row (Home, Services, Projects, About, Blog, Contact) with social icons, and a mobile toggle; the header SHALL become sticky with a shrink effect on scroll.

### `Hero`
The system SHALL render a full-width photo hero with a dark overlay, a left text column (H1 + paragraph + primary CTA) and a right image column framed by a decorative dot pattern.

### `Features`
The system SHALL render a "Features" section: subtitle + H2 header, three pale-blue feature cards (icon + title + blurb), and a centered "View All Services" primary button.

### `Skills`
The system SHALL render a light section with a signature block (heading, paragraph, signature image, name + role) on the left and four labeled progress bars on the right.

### `CtaBand`
The system SHALL render a full-width CTA band on a photo backdrop with a dark overlay, a lead line and a white H2.

### `Counters`
The system SHALL render a dark counter band (`#222`) with three counters, each an icon + animated number + caption.

### `NewsCarousel`
The system SHALL render a "News & Events" section on a light background with an autoplaying carousel of image cards that reveal an overlay caption on hover.

### `Services`
The system SHALL render a "More Services" section on a photo backdrop with six centered service cards, each with a circular red-bordered icon, a white title and a translucent-white paragraph.

### `Testimonials`
The system SHALL render a testimonials section on a light background with three white cards (round avatar, quote, name).

### `BlogSection`
The system SHALL render a white blog section with three post cards (image, meta line, title, excerpt).

### `Footer`
The system SHALL render a black footer with an About Us column, a Newsletter form (email input + Send button), two Navigation link columns, and a copyright bar.

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
- **Provenance ban.** No file under `apps/emblem/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/emblem/public/CNAME` = `emblem.free.componentdock.com`
  and the package `homepage` = `https://emblem.free.componentdock.com`.

# Dwell — Design Notes

Reference: **Apart** — `https://colorlib.com/wp/template/apart/`  
Live preview: `https://preview.colorlib.com/theme/apart/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/apart-free-template.jpg  
Shipped: https://dwell.free.componentdock.com

Dwell is a single-page apartment-rental website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito Sans**, **Oswald**, **Oswald:wght@400;500;700**

## Design tokens (`apps/dwell/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#e3c4a8` | brand |
| `--color-brand-dark` | `#ddb795` | brand dark |
| `--color-brand-hover` | `#eec60a` | brand hover |
| `--color-ink` | `#333333` | Ink — body text (#333) and price highlights (#000 via text-black). |
| `--color-soft` | `#edf0f5` | Soft — News section background (Bootstrap bg-light #EDF0F5). |
| `--color-muted` | `#777777` | Muted — property-list details (#777) / footer blurb (#737373). |
| `--color-faint` | `#737373` | faint |
| `--color-secondary` | `#6c757d` | secondary |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Transparent navbar with dropdown | see fidelity note below |
| 2 | `Hero` | Full-viewport hero | see fidelity note below |
| 3 | `PropertyInformation` | Property Information split panel | see fidelity note below |
| 4 | `BrowseApartments` | Browse Apartments grid | see fidelity note below |
| 5 | `FeaturedApartments` | Featured Apartments collage | see fidelity note below |
| 6 | `Testimonials` | Testimonial carousel | see fidelity note below |
| 7 | `News` | News & Events grid | see fidelity note below |
| 8 | `SocialStrip` | Social strip | see fidelity note below |
| 9 | `Footer` | Footer with subscribe, links, and video card | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a transparent navbar overlaying the hero with the brand logo, top-level links, an Apartments dropdown, and a mobile menu.

### `Hero`
The system SHALL render a full-viewport hero with a cover photograph, dark overlay, centered headline, address line, and primary CTA.

### `PropertyInformation`
The system SHALL render a white split panel (photo left, details right) that overlaps the hero bottom by 100px.

### `BrowseApartments`
The system SHALL render the "Browse Apartments" section: a centered heading with a tan underline, intro copy, and a 4-card apartment grid with tan/black highlighted labels.

### `FeaturedApartments`
The system SHALL render the "Featured Apartments" retro collage: one large card on the left and two stacked cards on the right.

### `Testimonials`
The system SHALL render the "Love By Our Customers" carousel with six testimonials, one slide at a time, dot indicators, and prev/next controls.

### `News`
The system SHALL render the "News & Events" section on a light background with three news cards (image, date, headline link).

### `SocialStrip`
The system SHALL render a full-width tan social-icon strip between the News section and the footer.

### `Footer`
The system SHALL render the white 3-column footer with the About blurb + subscribe form, navigation links + follow icons, and the Watch Live Streaming video card, plus the copyright bar.

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
- **Provenance ban.** No file under `apps/dwell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dwell/public/CNAME` = `dwell.free.componentdock.com`
  and the package `homepage` = `https://dwell.free.componentdock.com`.

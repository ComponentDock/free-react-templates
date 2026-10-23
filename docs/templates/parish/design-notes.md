# Parish — Design Notes

Reference: **Vineyard** — `https://colorlib.com/wp/template/vineyard/`  
Live preview: `https://preview.colorlib.com/theme/vineyard/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/vineyard-free-template.jpg  
Shipped: https://parish.free.componentdock.com

Parish is a single-page church landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Barlow Condensed**, **Barlow Condensed:wght@400;500;600;700**, **Poppins**

## Design tokens (`apps/parish/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#aee6bf` | Brand palette — mint-green church design. |
| `--color-brand-deep` | `#2f994f` | brand deep |
| `--color-body` | `#999999` | body |
| `--color-heading` | `rgba(0, 0, 0, 0.8)` | heading |
| `--color-section-bg` | `#f8f9fa` | section bg |
| `--color-footer-bg` | `#171717` | footer bg |
| `--color-footer-text` | `rgba(255, 255, 255, 0.7)` | footer text |
| `--font-heading` | `'Barlow Condensed', ui-sans-serif, system-ui, sans-serif` | Barlow Condensed (headings) + Poppins (body) via Google Fonts. |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Transparent navbar with brand and links | see fidelity note below |
| 2 | `Hero` | Full-height photo hero | see fidelity note below |
| 3 | `Ministries` | Ministries icon list | see fidelity note below |
| 4 | `Counter` | Counter split with stats | see fidelity note below |
| 5 | `Sermons` | Sermon of the day | see fidelity note below |
| 6 | `Instagram` | Instagram strip | see fidelity note below |
| 7 | `Testimonials` | Inspirational testimony | see fidelity note below |
| 8 | `Events` | Upcoming events | see fidelity note below |
| 9 | `Blog` | Recent blog | see fidelity note below |
| 10 | `Footer` | Dark footer with widgets and copyright | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a transparent navbar over the hero with a brand, uppercase links and a mobile menu.

### `Hero`
The system SHALL render a full-height hero with a background photo, mint overlay, play button and headline.

### `Ministries`
The system SHALL render a ministries section with six icon rows and a photo.

### `Counter`
The system SHALL render a two-column counter section with a video image and four statistics.

### `Sermons`
The system SHALL render a light-grey sermons section with a sermon image, meta and two buttons.

### `Instagram`
The system SHALL render a 4-image Instagram strip with hover overlays.

### `Testimonials`
The system SHALL render a photo-background testimonial section with member quotes.

### `Events`
The system SHALL render an events section with three image cards and meta.

### `Blog`
The system SHALL render a blog section with three entries.

### `Footer`
The system SHALL render a dark footer with four widget columns, socials and a copyright bar.

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
- **Provenance ban.** No file under `apps/parish/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/parish/public/CNAME` = `parish.free.componentdock.com`
  and the package `homepage` = `https://parish.free.componentdock.com`.

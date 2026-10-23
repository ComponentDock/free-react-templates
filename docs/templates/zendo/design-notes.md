# Zendo — Design Notes

Reference: **Meditative** — `https://colorlib.com/wp/template/meditative/`  
Live preview: `https://preview.colorlib.com/theme/meditative/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/meditative-free-template.jpg  
Shipped: https://zendo.free.componentdock.com

Zendo is a single-page yoga & meditation studio website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **EB Garamond**, **EB Garamond:wght@400;500;600;700**, **Open Sans**

## Design tokens (`apps/zendo/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ffb5b5` | brand |
| `--color-ink` | `#2c396b` | Dark ink — headings, section title accents, testimony position. |
| `--color-body` | `#212529` | Body copy (#212529) and muted text (#6c757d) from the reference. |
| `--color-muted` | `#6c757d` | muted |
| `--color-light` | `#f8f9fa` | Light section background (#f8f9fa) — class types strip, recent posts. |
| `--color-line` | `rgba(0, 0, 0, 0.05)` | Hairline border color (rgba(0,0,0,0.05) in the reference). |
| `--color-primary-50` | `#fff5f5` | primary 50 |
| `--color-primary-100` | `#ffe9e9` | primary 100 |
| `--color-primary-200` | `#ffd6d6` | primary 200 |
| `--color-primary-300` | `#ffc9c9` | primary 300 |
| `--color-primary-400` | `#ffbfbf` | primary 400 |
| `--color-primary-500` | `#ffb5b5` | primary 500 |
| `--color-primary-600` | `#f7a1a1` | primary 600 |
| `--color-primary-700` | `#e88a8a` | primary 700 |
| `--font-display` | `'EB Garamond', ui-serif, Georgia, serif` | font display |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with brand and dot-separated link row | see fidelity note below |
| 2 | `Hero` | Full-height hero slider | see fidelity note below |
| 3 | `ClassTypes` | Our Classes grid | see fidelity note below |
| 4 | `Experience` | Experience of Yoga split section | see fidelity note below |
| 5 | `Classes` | Our Classes grid | see fidelity note below |
| 6 | `Timetable` | Class time table | see fidelity note below |
| 7 | `Testimonials` | Successful Stories testimonials | see fidelity note below |
| 8 | `StatsBand` | Stats band with count-up numbers | see fidelity note below |
| 9 | `Posts` | Recent posts cards | see fidelity note below |
| 10 | `Gallery` | Photo gallery | see fidelity note below |
| 11 | `Footer` | Light footer with contact widget | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a transparent navbar with a serif brand and an uppercase dot-separated nav-link row below it, switching to a white scrolled state and a hamburger slide-in panel on mobile.

### `Hero`
The system SHALL render a full-height hero slider with two slides, each a cover photo with a white overlay, serif headline, sans sub-heading and a "View our works" button, with pink slider dots.

### `ClassTypes`
The system SHALL render six class cards in a three-column grid, each with an image, a centered title and a date/time line.

### `Experience`
The system SHALL render the "Experience of Yoga" section as a split layout: four icon items left (text right-aligned), a center image, four icon items right (text left-aligned).

### `Classes`
The system SHALL render six class cards in a three-column grid, each with an image, a centered title and a date/time line.

### `Timetable`
The system SHALL render a 7-day class timetable with a pink header row, close icons in empty cells, class entries with circular thumbnails in filled cells, and a month navigation row.

### `Testimonials`
The system SHALL render a testimonial carousel with five quote cards, each with a quote, a quote icon, a round avatar, a name and a position.

### `StatsBand`
The system SHALL render a photo-background stats band with a dark overlay and four statistics that count up when scrolled into view.

### `Posts`
The system SHALL render three blog cards, each with an image, a meta row, a title, an excerpt and a "Read more" link.

### `Gallery`
The system SHALL render eight photo tiles with a hover overlay and an Instagram icon.

### `Footer`
The system SHALL render a light footer with brand + social icons, Popular Links, Quick Links and a "Have a Questions?" contact widget with a validated message form, plus a copyright bar.

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
- **Provenance ban.** No file under `apps/zendo/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/zendo/public/CNAME` = `zendo.free.componentdock.com`
  and the package `homepage` = `https://zendo.free.componentdock.com`.

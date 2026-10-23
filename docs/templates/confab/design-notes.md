# Confab — Design Notes

Reference: **Eventotemplate** — `https://colorlib.com/wp/template/eventotemplate/`  
Live preview: `https://preview.colorlib.com/theme/eventotemplate/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/eventotemplate-colorlib.jpg  
Shipped: https://confab.free.componentdock.com

Confab is a single-page conference / design-week event landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Eventotemplate" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Barlow**, **Barlow:wght@300;400;500;600;700;800**, **Mitr**

## Design tokens (`apps/confab/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ffbd00` | brand |
| `--color-blush` | `#ff60ce` | blush |
| `--color-ember` | `#ec583a` | ember |
| `--color-night` | `#0b0016` | night |
| `--color-coal` | `#0a0a0a` | coal |
| `--color-card` | `#0e0e0e` | card |
| `--color-fog` | `#f2f4f8` | fog |
| `--color-mist` | `#9b9eac` | mist |
| `--color-navy` | `#131933` | navy |
| `--font-sans` | `'Barlow', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Mitr', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header + navigation | see fidelity note below |
| 2 | `Hero` | Hero slider | see fidelity note below |
| 3 | `Stats` | Event stats band | see fidelity note below |
| 4 | `Speakers` | Speakers section | see fidelity note below |
| 5 | `About` | About section | see fidelity note below |
| 6 | `Schedule` | Schedule section | see fidelity note below |
| 7 | `Blog` | Blog section | see fidelity note below |
| 8 | `Brands` | Sponsors band | see fidelity note below |
| 9 | `MapSection` | Map section | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a fixed, initially-transparent header with the brand logo on the left, centered nav links, and a yellow CTA button on the right; when scrolled the header SHALL get a near-black (#0a0a0a) background.

### `Hero`
The system SHALL render a full-width hero slider with at least two slides, each with a photo background, a dark purple-black overlay, the event headline, date, location, a yellow buy-ticket button, and a pink circular play button that opens a video modal.

### `Stats`
The system SHALL render a stats band with three columns of large pink numbers and captions.

### `Speakers`
The system SHALL render a "Speakers" section with a white uppercase heading and a row of speaker cards (photo, yellow name, role, social icons).

### `About`
The system SHALL render an about section with the heading "About Design Week", a bold tagline, and two paragraphs of description.

### `Schedule`
The system SHALL render a "Schedule" section with day tabs (17th Aug, 18th Aug, 19th Aug) and a dark schedule card listing timed items with titles and speaker names.

### `Blog`
The system SHALL render a blog section with three article cards (photo, uppercase title, author, read-more link).

### `Brands`
The system SHALL render a sponsors band with a dark card containing six sponsor marks.

### `MapSection`
The system SHALL render a map section with an embedded map (Google Maps embed or a static map-styled block).

### `Footer`
The system SHALL render a dark footer with a blurb widget, a newsletter form, contact info, and a copyright bar.

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
- **Provenance ban.** No file under `apps/confab/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/confab/public/CNAME` = `confab.free.componentdock.com`
  and the package `homepage` = `https://confab.free.componentdock.com`.

# Machina — Design Notes

Reference: **Braxit** — `https://colorlib.com/wp/template/braxit/`  
Live preview: `https://preview.colorlib.com/theme/braxit/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/braxit-free-template.jpg  
Shipped: https://machina.free.componentdock.com

Machina is a single-page industrial & manufacturing company website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Muli**, **Muli:wght@300;400;500;600;700;800;900**

## Design tokens (`apps/machina/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff3514` | brand |
| `--color-brand-dark` | `#d62d12` | brand dark |
| `--color-ink` | `#140c40` | Ink — headings (dark navy #140C40, the source h1–h5 default). |
| `--color-body` | `#7a8290` | Body greys — paragraphs (#7a8290) + muted (#999999). |
| `--color-mist` | `#999999` | mist |
| `--color-soft` | `#fff7f5` | soft |
| `--color-lilac` | `#f7f7fd` | lilac |
| `--color-foam` | `#f5f9fb` | foam |
| `--color-line` | `#f1f1f1` | line |
| `--color-ember` | `#ff8a00` | Experience badge orange (source `.img-cap` square overlay, #FF8A00). |
| `--color-primary-50` | `#fff1ed` | primary 50 |
| `--color-primary-100` | `#ffe0d9` | primary 100 |
| `--color-primary-200` | `#ffc0b0` | primary 200 |
| `--color-primary-300` | `#ff967d` | primary 300 |
| `--color-primary-400` | `#ff6b4a` | primary 400 |
| `--color-primary-500` | `#ff4a24` | primary 500 |
| `--color-primary-600` | `#ff3514` | primary 600 |
| `--color-primary-700` | `#d62d12` | primary 700 |
| `--color-primary-800` | `#a82512` | primary 800 |
| `--color-primary-900` | `#7c1d10` | primary 900 |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top utility bar | see fidelity note below |
| 2 | `Header` | Hero slider | see fidelity note below |
| 3 | `Hero` | Hero slider | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `Gallery` | Projects gallery | see fidelity note below |
| 6 | `Categories` | Categories grid | see fidelity note below |
| 7 | `Services` | Services row | see fidelity note below |
| 8 | `CtaBanner` | CTA banner | see fidelity note below |
| 9 | `Testimonials` | Testimonials | see fidelity note below |
| 10 | `Contact` | Enquiry card and contact form | see fidelity note below |
| 11 | `Blog` | Blog section | see fidelity note below |
| 12 | `MapSection` | Map section | see fidelity note below |
| 13 | `LogoCta` | Logo CTA bar | see fidelity note below |
| 14 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The system SHALL render a dark-navy top bar above the main navigation with contact info and a quote button.

### `Header`
The system SHALL render a full-bleed photo hero with headline, CTA button, and a video-play button.

### `Hero`
The system SHALL render a full-bleed photo hero with headline, CTA button, and a video-play button.

### `About`
The system SHALL render a two-column about section with animated counters and an experience badge.

### `Gallery`
The system SHALL render a full-width three-tile project gallery with hover overlays.

### `Categories`
The system SHALL render a light-gray section with a heading and four category cards.

### `Services`
The system SHALL render three service cards on an image background.

### `CtaBanner`
The system SHALL render a "Up to 40% Off" call-to-action banner.

### `Testimonials`
The system SHALL render a testimonial slider with star ratings and an avatar strip.

### `Contact`
The system SHALL render an enquiry card and a validated contact form.

### `Blog`
The system SHALL render a "News & Media center" strip with two blog cards.

### `MapSection`
The system SHALL render a full-width map between the blog and the CTA bar.

### `LogoCta`
The system SHALL render a second CTA bar with a logo and double buttons.

### `Footer`
The system SHALL render a four-column footer with a newsletter form and a bottom bar.

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
- **Provenance ban.** No file under `apps/machina/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/machina/public/CNAME` = `machina.free.componentdock.com`
  and the package `homepage` = `https://machina.free.componentdock.com`.

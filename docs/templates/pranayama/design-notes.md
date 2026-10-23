# Pranayama — Design Notes

Reference: **Yoga Studio** — `https://colorlib.com/wp/template/yoga-studio/`  
Live preview: `https://preview.colorlib.com/theme/yogastudio/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/yogastudio-free-template.jpg  
Shipped: https://pranayama.free.componentdock.com

Pranayama is a single-page yoga/wellness website template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700**, **Playfair Display**

## Design tokens (`apps/pranayama/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#9482ac` | Pranayama brand palette — muted purple/lavender (#9482AC). |
| `--color-brand-dark` | `#7d6c96` | brand dark |
| `--color-gold` | `#ffdd8d` | gold |
| `--color-ink` | `#111111` | Ink — dark text (#111111 from original). |
| `--color-ink-light` | `#464646` | ink light |
| `--color-mist` | `#939393` | Mist — muted text (#939393). |
| `--color-paper` | `#ffffff` | Paper — light section backgrounds. |
| `--color-primary-50` | `#f5f3f8` | Primary scale so shared Button/ButtonLink `primary` variants resolve. |
| `--color-primary-100` | `#ebe6f1` | primary 100 |
| `--color-primary-200` | `#d6cce3` | primary 200 |
| `--color-primary-300` | `#bbaad0` | primary 300 |
| `--color-primary-400` | `#a28dbd` | primary 400 |
| `--color-primary-500` | `#9482ac` | primary 500 |
| `--color-primary-600` | `#7d6c96` | primary 600 |
| `--color-primary-700` | `#695a7e` | primary 700 |
| `--color-primary-800` | `#554866` | primary 800 |
| `--color-primary-900` | `#443a52` | primary 900 |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | Fonts — Montserrat (body) + Playfair Display (headings). |
| `--font-display` | `'Playfair Display', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `YogaClasses` | Yoga classes section | see fidelity note below |
| 4 | `DifferentYoga` | Different yoga section | see fidelity note below |
| 5 | `YogaName` | Yoga name section | see fidelity note below |
| 6 | `Testimonials` | Client testimonials | see fidelity note below |
| 7 | `CallToAction` | Call to action | see fidelity note below |
| 8 | `Footer` | Footer with contact form | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main navigation · Mobile navigation · Pranayama

### `Hero`
The template SHALL display a full-width hero section with heading, subtitle, and CTA button.

### `YogaClasses`
The template SHALL display a section with three yoga class cards.

### `DifferentYoga`
The template SHALL display a section with motivational text and statistics.

### `YogaName`
The template SHALL display a section with three yoga style names.

### `Testimonials`
The template SHALL display client testimonials with images and quotes.

### `CallToAction`
The template SHALL display a call-to-action section with a heading and button.

### `Footer`
The template SHALL display a footer with contact form, contact info, and Component Dock link.

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
- **Provenance ban.** No file under `apps/pranayama/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pranayama/public/CNAME` = `pranayama.free.componentdock.com`
  and the package `homepage` = `https://pranayama.free.componentdock.com`.

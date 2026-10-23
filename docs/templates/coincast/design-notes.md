# Coincast — Design Notes

Reference: **Coinbuzz** — `https://colorlib.com/wp/template/coinbuzz/`  
Live preview: `https://preview.colorlib.com/theme/coinbuzz/coinbuzz/index.html`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/coinbuzz-free-template.jpg  
Shipped: https://coincast.free.componentdock.com

Coincast is a cryptocurrency agency landing page in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Coinbuzz" free template (source: https://colorlib.com/wp/template/coinbuzz/), built under a DIFFERENT name (**Coincast**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700**, **Roboto**

## Design tokens (`apps/coincast/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff7700` | Brand orange — primary accent, buttons, CTAs, logo accent. |
| `--color-brand-dark` | `#e06900` | brand dark |
| `--color-brand-light` | `#ff8d29` | brand light |
| `--color-ink` | `#242424` | Ink — dark sections (#242424): header, footer, about, stats, team. |
| `--color-ink-dark` | `#1a1a1a` | ink dark |
| `--color-paper` | `#f4f4f4` | Paper — light section backgrounds (#f4f4f4): featured, services, blog. |
| `--color-border` | `#e5e5e5` | Border gray (#e5e5e5): card borders, dividers. |
| `--color-mist` | `#616162` | Mist — secondary text (#616162). |
| `--color-primary-50` | `#fff7ed` | primary 50 |
| `--color-primary-100` | `#ffedd5` | primary 100 |
| `--color-primary-200` | `#fed7aa` | primary 200 |
| `--color-primary-300` | `#fdba74` | primary 300 |
| `--color-primary-400` | `#ff8d29` | primary 400 |
| `--color-primary-500` | `#ff7700` | primary 500 |
| `--color-primary-600` | `#e06900` | primary 600 |
| `--color-primary-700` | `#c25700` | primary 700 |
| `--color-primary-800` | `#9a4400` | primary 800 |
| `--color-primary-900` | `#7c3700` | primary 900 |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | Original fonts: "Open Sans" (body) + "Roboto" (headings). |
| `--font-display` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Two-bar header | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `Featured` | Featured crypto cards | see fidelity note below |
| 4 | `AboutContent` | — | no dedicated spec block |
| 5 | `Services` | Service grid | see fidelity note below |
| 6 | `Stats` | Counter stats | see fidelity note below |
| 7 | `Testimonials` | Testimonials carousel | see fidelity note below |
| 8 | `CtaBanner` | — | no dedicated spec block |
| 9 | `Resources` | No source-site references in the app | see fidelity note below |
| 10 | `Team` | — | no dedicated spec block |
| 11 | `Contact` | Contact form with background | see fidelity note below |
| 12 | `Investments` | — | no dedicated spec block |
| 13 | `Blog` | Blog cards | see fidelity note below |
| 14 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Header`
The system SHALL render a header with a top contact bar and a bottom navigation bar.

### `HeroSlider`
The system SHALL render a hero section with background images and text overlays, cycling between slides.

### `Featured`
The system SHALL render 3 feature cards on a light background with icons, titles, and descriptions.

### `AboutContent`
*anchors only* — About · Coincast · Learn More

### `Services`
The system SHALL render a "Why Choose Bitcoin" service section with a 3-column asymmetric layout.

### `Stats`
The system SHALL render a stats section with 4 animated counters.

### `Testimonials`
The system SHALL render a testimonial carousel with avatar, quote, and star rating.

### `CtaBanner`
*anchors only* — Start Investing in Cryptocurrency Today · Join Now

### `Resources`
The application SHALL NOT carry the source design's provenance: no file under `apps/coincast/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.

### `Team`
*anchors only* — Our Team

### `Contact`
The system SHALL render a contact form section with a background image and a form overlay.

### `Investments`
*anchors only* — Need to Take Care of Your Currency Investments? · View Services · Contact Us

### `Blog`
The system SHALL render 3 blog post cards on a light background.

### `Footer`
The system SHALL render a dark footer with 3-column widgets and copyright.

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
- **Provenance ban.** No file under `apps/coincast/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/coincast/public/CNAME` = `coincast.free.componentdock.com`
  and the package `homepage` = `https://coincast.free.componentdock.com`.

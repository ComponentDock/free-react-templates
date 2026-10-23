# Buzzer — Design Notes

Reference: **Bravo** — `https://colorlib.com/wp/template/bravo/`  
Live preview: `https://preview.colorlib.com/theme/bravo/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bravo-free-template.jpg  
Shipped: https://buzzer.free.componentdock.com

Buzzer is a single-page business consulting landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Bravo" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/buzzer/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#4760ff` | brand |
| `--color-brand-dark` | `#3650e0` | brand dark |
| `--color-accent` | `#fa8f77` | Coral/salmon accent — section title accents, border buttons. |
| `--color-accent-dark` | `#f07a60` | accent dark |
| `--color-ink` | `#140c40` | Dark navy — headings, hero text, footer background. |
| `--color-ink-dark` | `#0d0830` | ink dark |
| `--color-paper` | `#f7f7f7` | Paper — light section background. |
| `--color-mist` | `#635c5c` | Mist — body text. |
| `--color-slate` | `#7a8290` | Slate — secondary text. |
| `--color-lavender` | `#c2c5db` | Lavender — footer text. |
| `--color-primary-50` | `#eef0ff` | primary 50 |
| `--color-primary-100` | `#d9ddff` | primary 100 |
| `--color-primary-200` | `#b3bbff` | primary 200 |
| `--color-primary-300` | `#8d99ff` | primary 300 |
| `--color-primary-400` | `#6777ff` | primary 400 |
| `--color-primary-500` | `#4760ff` | primary 500 |
| `--color-primary-600` | `#3650e0` | primary 600 |
| `--color-primary-700` | `#2a40b8` | primary 700 |
| `--color-primary-800` | `#1e3090` | primary 800 |
| `--color-primary-900` | `#142068` | primary 900 |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | Original font: "Roboto" (Google Fonts). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero slider | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Services` | Services grid | see fidelity note below |
| 5 | `Testimonials` | Testimonials carousel | see fidelity note below |
| 6 | `Team` | Team section | see fidelity note below |
| 7 | `SecondaryServices` | Secondary services grid | see fidelity note below |
| 8 | `CTA` | — | no dedicated spec block |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a sticky navbar with the brand name "Buzzer" and navigation links.

### `Hero`
The system SHALL render a full-width hero slider with an illustration image, a large headline with coral accent, subtext, and a blue CTA button.

### `About`
The system SHALL render a split two-column section with text content and experience stats on the left, and two stacked image cards on the right.

### `Services`
The system SHALL render a 3-column service card grid with hover overlays.

### `Testimonials`
The system SHALL render a testimonial carousel over a background image.

### `Team`
The system SHALL render a 3-column team member grid with photos, names, roles, and social links.

### `SecondaryServices`
The system SHALL render a 2-column grid of larger service cards.

### `CTA`
*anchors only* — Get started with our awesome service today · Get Started Now

### `Footer`
The system SHALL render a dark navy 4-column footer with logo, link widgets, newsletter form, and a copyright bar.

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
- **Provenance ban.** No file under `apps/buzzer/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/buzzer/public/CNAME` = `buzzer.free.componentdock.com`
  and the package `homepage` = `https://buzzer.free.componentdock.com`.

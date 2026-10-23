# Bloom — Design Notes

Reference: **Pretty** — `https://colorlib.com/wp/template/pretty/`  
Live preview: `https://preview.colorlib.com/theme/pretty/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/pretty-free-template.jpg  
Shipped: https://bloom.free.componentdock.com

Bloom is a single-page beauty-salon landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Pretty" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;600;700;800**, **Work Sans**

## Design tokens (`apps/bloom/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#fa5bdd` | brand |
| `--color-brand-dark` | `#e03cc4` | brand dark |
| `--color-sky` | `#78d5ef` | sky |
| `--color-sky-dark` | `#4db8d8` | sky dark |
| `--color-ink` | `#212529` | Ink — headings + footer text (#212529 from the original). |
| `--color-ink-dark` | `#16191c` | ink dark |
| `--color-paper` | `#f8f9fa` | Paper — light section backgrounds (#f8f9fa from the original). |
| `--color-mist` | `#6c757d` | Mist — muted body text (#6c757d from the original). |
| `--color-primary-50` | `#fdf2fb` | primary 50 |
| `--color-primary-100` | `#fce5f8` | primary 100 |
| `--color-primary-200` | `#f9cbf0` | primary 200 |
| `--color-primary-300` | `#f6a6e5` | primary 300 |
| `--color-primary-400` | `#f27bd8` | primary 400 |
| `--color-primary-500` | `#fa5bdd` | primary 500 |
| `--color-primary-600` | `#e03cc4` | primary 600 |
| `--color-primary-700` | `#b92ba0` | primary 700 |
| `--color-primary-800` | `#8f207c` | primary 800 |
| `--color-primary-900` | `#651a58` | primary 900 |
| `--font-sans` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | Original fonts: "Montserrat" (headings) + "Work Sans" (body). |
| `--font-display` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `About` | — | no dedicated spec block |
| 4 | `Team` | Beauty experts team | see fidelity note below |
| 5 | `Discount` | — | no dedicated spec block |
| 6 | `Work` | Our Work portfolio | see fidelity note below |
| 7 | `Pricing` | Beauty pricing | see fidelity note below |
| 8 | `Counters` | — | no dedicated spec block |
| 9 | `Blog` | — | no dedicated spec block |
| 10 | `Appointment` | Component Dock attribution | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Bloom", a "Home" link, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a background image, a level-1 headline, and a call-to-action button.

### `About`
*anchors only* — Welcome to Bloom · Skin &amp; Beauty Care · Make an Appointment

### `Team`
The system SHALL render an "Our Beauty Experts" section with at least four member cards.

### `Discount`
*anchors only* — Discount · Limited Time · Save up to 25% Off · Students get an extra discount on every treatment — bring your ID and bloom with us. · Book Now

### `Work`
The system SHALL render an "Our Work" section with at least three portfolio tiles.

### `Pricing`
The system SHALL render a "Beauty Pricing" section with at least four priced tiers.

### `Counters`
*anchors only* — Statistics

### `Blog`
*anchors only* — From Our Journal · Recent From Blog · Sept 10, 2026 · Admin · Read More

### `Appointment`
The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.

### `Footer`
The system SHALL render a footer with the site name, contact details, opening hours, and social links.

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
- **Provenance ban.** No file under `apps/bloom/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/bloom/public/CNAME` = `bloom.free.componentdock.com`
  and the package `homepage` = `https://bloom.free.componentdock.com`.

# Pump — Design Notes

Reference: **Muscle** — `https://colorlib.com/wp/template/muscle/`  
Live preview: `https://preview.colorlib.com/theme/muscle/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/muscle-free-template.jpg  
Shipped: https://pump.free.componentdock.com

Pump is a single-page gym/fitness template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Muscle" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Barlow Semi Condensed**, **Barlow Semi Condensed:wght@400;500;600;700;800;900**

## Design tokens (`apps/pump/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#fd0054` | brand |
| `--color-brand-orange` | `#fd6b00` | brand orange |
| `--color-ink` | `#212529` | ink |
| `--color-mist` | `#999999` | mist |
| `--color-cloud` | `#f8f9fa` | cloud |
| `--color-night` | `#1a1d21` | night |
| `--color-primary-50` | `#fff0f6` | primary 50 |
| `--color-primary-100` | `#ffdbe8` | primary 100 |
| `--color-primary-200` | `#ffb8d2` | primary 200 |
| `--color-primary-300` | `#ff8ab5` | primary 300 |
| `--color-primary-400` | `#ff5c97` | primary 400 |
| `--color-primary-500` | `#fd2e78` | primary 500 |
| `--color-primary-600` | `#fd0054` | primary 600 |
| `--color-primary-700` | `#d6004a` | primary 700 |
| `--color-primary-800` | `#a3003a` | primary 800 |
| `--color-primary-900` | `#6e0027` | primary 900 |
| `--font-sans` | `'Barlow Semi Condensed', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Welcome hero | see fidelity note below |
| 3 | `Services` | — | no dedicated spec block |
| 4 | `Stats` | — | no dedicated spec block |
| 5 | `About` | — | no dedicated spec block |
| 6 | `Coaches` | Our Coaches | see fidelity note below |
| 7 | `Classes` | Workout Classes | see fidelity note below |
| 8 | `Pricing` | — | no dedicated spec block |
| 9 | `Testimony` | Testimony band | see fidelity note below |
| 10 | `Blog` | Recent Blog | see fidelity note below |
| 11 | `Appointment` | Component Dock attribution | see fidelity note below |
| 12 | `Gallery` | — | no dedicated spec block |
| 13 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a top navigation bar with the site name "Pump", a "Home" link, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero slider with headlines.

### `Services`
*anchors only* — Shape Your Body · What We Do?

### `Stats`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `About`
*anchors only* — About Pump · Welcome To Our Gym

### `Coaches`
The system SHALL render an "Our Coaches" section with at least four member cards.

### `Classes`
The system SHALL render a "Workout Classes" section with at least four class cards.

### `Pricing`
*anchors only* — Pricing Tables · Membership Plans · Get Started

### `Testimony`
The system SHALL render a "Successful Stories" testimony band.

### `Blog`
The system SHALL render a "Recent Blog" section with at least three post cards.

### `Appointment`
The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.

### `Gallery`
*anchors only* — instagram · Gallery Photo

### `Footer`
The system SHALL render a footer with the site name and link columns.

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
- **Provenance ban.** No file under `apps/pump/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pump/public/CNAME` = `pump.free.componentdock.com`
  and the package `homepage` = `https://pump.free.componentdock.com`.

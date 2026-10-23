# Echo — Design Notes

Reference: **Beckham** — `https://colorlib.com/wp/template/beckham/`  
Live preview: `https://preview.colorlib.com/theme/beckham/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/beckham-free-template.jpg  
Shipped: https://echo.free.componentdock.com

Echo is a single-page personal portfolio template — a creative portfolio for web designers and developers.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700**

## Design tokens (`apps/echo/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#79efb4` | brand |
| `--color-brand-dark` | `#57eba1` | brand dark |
| `--color-ink` | `#212529` | Ink — dark text (#212529 from the original). |
| `--color-sidebar` | `#1a1a1a` | Sidebar dark (#1a1a1a from the original). |
| `--color-surface-dark` | `#222222` | Counter/footer dark (#222 from the original). |
| `--color-mist` | `#6c757d` | Mist — muted body text (#6c757d from the original). |
| `--color-primary-50` | `#edfdf5` | primary 50 |
| `--color-primary-100` | `#d3fae5` | primary 100 |
| `--color-primary-200` | `#aaf5d0` | primary 200 |
| `--color-primary-300` | `#79efb4` | primary 300 |
| `--color-primary-400` | `#57eba1` | primary 400 |
| `--color-primary-500` | `#35e78e` | primary 500 |
| `--color-primary-600` | `#22c976` | primary 600 |
| `--color-primary-700` | `#1da360` | primary 700 |
| `--color-primary-800` | `#1b814e` | primary 800 |
| `--color-primary-900` | `#196941` | primary 900 |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | Original font: "Montserrat" (Google Fonts). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Sidebar` | Sidebar Navigation | see fidelity note below |
| 2 | `Header` | Header | see fidelity note below |
| 3 | `Hero` | Hero Section | see fidelity note below |
| 4 | `About` | About Section | see fidelity note below |
| 5 | `Services` | Services Section | see fidelity note below |
| 6 | `Portfolio` | Portfolio Section | see fidelity note below |
| 7 | `Counter` | Counter Section | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Sidebar`
The system SHALL render a dark sidebar navigation with the site name, an author photo, and numbered navigation links (Home, Resume, Services, Portfolio, Blog, Contact).

### `Header`
The system SHALL render a sticky top header with the author photo and site name.

### `Hero`
The system SHALL render a full-height hero section with a background image, overlay, and centered text.

### `About`
The system SHALL render an about section with a split layout: author image on the left, bio text on the right.

### `Services`
The system SHALL render a services section with 3 service cards.

### `Portfolio`
The system SHALL render a portfolio section with 6 project items in an alternating image/text layout.

### `Counter`
The system SHALL render a counter section with 3 achievement statistics.

### `Footer`
The system SHALL render a dark footer with social links, contact email, and a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/echo/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/echo/public/CNAME` = `echo.free.componentdock.com`
  and the package `homepage` = `https://echo.free.componentdock.com`.

## Reference tokens (measured 2026-10-23)

Read from `https://preview.colorlib.com/theme/beckham/` (HTTP 200, title
`Beckham Muff | UI/UX Designer and Front-End Developer`) and its theme sheet
`css/style.min.css?v=3.0.1` (170,789 B, Bootstrap 5 inlined, self-hosted Poppins
300/400/700). The demo is a **3.0.1 rebuild**.

| Token | Reference | App (`apps/echo`) |
| ----- | --------- | ----------------- |
| Design accent | `#2f89fc` (27: `a`, `.text-primary`, nav active label+underline, owl dot, progress bar) | `--color-brand` is **mint** — see next row |
| Bootstrap `primary` mint | `#79efb4` (21) — only `--bs-primary` consumers: form-control focus (`#bcf7da` border, `#79efb440` ring), `.form-check-input:checked`, `.form-range` thumb, `.btn-outline-primary` | `--color-brand: #79efb4` ✗ — this is the framework's primary variable, not the design accent; the reference's visible accent is the blue |
| Page ground | `#121212` (`body`) | `--color-sidebar: #1a1a1a`, `--color-surface-dark: #222222` — both lighter than the reference ground |
| Copy | `#8c8c8c`, 18 px / 1.8 | `--color-mist: #6c757d` |
| Ink | `#fff` headings | `--color-ink: #212529` (Bootstrap body ink, not used by this theme) |
| Face | **Poppins** 300/400/700 self-hosted | `--font-sans: 'Montserrat', …` ✗ |
| Radius | `4px` kit, `50%` dots | — |

Rebuild drift: the pre-3.0 screenshot is the same dark page with a blue link
accent — no mint is visible there either.

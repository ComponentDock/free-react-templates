# Stratagem — Design Notes

Reference: **Conbusi** — `https://colorlib.com/wp/template/conbusi/`  
Live preview: `https://preview.colorlib.com/theme/conbusi/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/conbusi-free-template.jpg  
Shipped: https://stratagem.free.componentdock.com

Stratagem is a business consulting landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@200;300;400;500;600;700**

## Design tokens (`apps/stratagem/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#5db2ff` | brand |
| `--color-brand-dark` | `#4a9de6` | brand dark |
| `--color-brand-gradient-start` | `#0181f5` | brand gradient start |
| `--color-brand-gradient-end` | `#5db2ff` | brand gradient end |
| `--color-navy` | `#001d38` | Navy — dark headings and overlays (#001D38). |
| `--color-navy-dark` | `#001529` | navy dark |
| `--color-paper` | `#ffffff` | Paper — white body / section backgrounds. |
| `--color-mist` | `#4d4d4d` | Mist — body text (#4D4D4D). |
| `--color-primary-50` | `#eef7ff` | Primary scale for shared Button/ButtonLink `primary` variants. |
| `--color-primary-100` | `#d9edff` | primary 100 |
| `--color-primary-200` | `#bce0ff` | primary 200 |
| `--color-primary-300` | `#8eccff` | primary 300 |
| `--color-primary-400` | `#5db2ff` | primary 400 |
| `--color-primary-500` | `#3697ff` | primary 500 |
| `--color-primary-600` | `#1a76f5` | primary 600 |
| `--color-primary-700` | `#1360e1` | primary 700 |
| `--color-primary-800` | `#164fb6` | primary 800 |
| `--color-primary-900` | `#18458f` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

> The spec has no section-level requirements; the order below is read from `apps/stratagem/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Services` | — | no dedicated spec block |
| 4 | `About` | — | no dedicated spec block |
| 5 | `Counters` | — | no dedicated spec block |
| 6 | `CaseStudy` | — | no dedicated spec block |
| 7 | `FAQ` | — | no dedicated spec block |
| 8 | `Testimonials` | — | no dedicated spec block |
| 9 | `Team` | — | no dedicated spec block |
| 10 | `Contact` | — | no dedicated spec block |
| 11 | `InfoCTA` | — | no dedicated spec block |
| 12 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Primary · Mobile · Welcome to Stratagem consulting service · Stratagem · Get a Quote

### `Hero`
*anchors only* — Big Opportunity for · We help businesses grow with strategic consulting and innovative solutions · Our Services

### `Services`
*anchors only* — What we Do? · We provide comprehensive consulting services tailored to your industry needs · Learn More →

### `About`
*anchors only* — Why our Consulting? · About Us

### `Counters`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `CaseStudy`
*anchors only* — Case Study · Explore our successful projects and see how we help businesses achieve their goals · More Cases

### `FAQ`
*anchors only* — Frequently ask · Find answers to common questions about our consulting services

### `Testimonials`
*anchors only* — Testimonials · What our clients say about working with us

### `Team`
*anchors only* — Expert Team · Meet the professionals behind our consulting success

### `Contact`
*anchors only* — Get Free Quote · Tell us about your project and we will get back to you within 24 hours. · Thank you! We will get back to you shortly. · Your Name · Your Email · Message

### `InfoCTA`
*anchors only* — For Any Information Call Us · Our consultants are ready to discuss your project and provide expert guidance

### `Footer`
*anchors only* — alert · Stratagem · Services · Useful Links · Subscribe · Subscribe to our newsletter for the latest updates and insights.

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
- **Provenance ban.** No file under `apps/stratagem/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/stratagem/public/CNAME` = `stratagem.free.componentdock.com`
  and the package `homepage` = `https://stratagem.free.componentdock.com`.

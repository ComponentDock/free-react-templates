# Zenith — Design Notes

Reference: `https://colorlib.com/wp/template/bootstrap-buttons-05/` (the design page the spec records)  
Live preview: `https://preview.colorlib.com/theme/bootstrap-buttons-05/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/saasify-template-1770211006733.jpg — the ROW's slug `saasify`, not the spec's `bootstrap-buttons-05`  
Shipped: https://zenith.free.componentdock.com

Row note: `TEMPLATES.md` links the slug `saasify` for this app while the spec records `bootstrap-buttons-05`. This brief follows the SPEC — the disagreement is recorded, not resolved (ROW-MULTIPLICITY class, see the SPEC-REFERENCE audit, main `4820f472b`).

An interactive button showcase template with hero, features, pricing, testimonials and CTA sections. Recreation of ColorLib **Bootstrap Buttons 05** (`https://colorlib.com/wp/template/bootstrap-buttons-05/`), built as a modern, interactive Bootstrap-inspired button showcase landing page using React 19, Tailwind CSS 4, and TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@300;400;500;600;700;800**

## Design tokens (`apps/zenith/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f5f3ff` | primary 50 |
| `--color-primary-100` | `#ede9fe` | primary 100 |
| `--color-primary-200` | `#ddd6fe` | primary 200 |
| `--color-primary-300` | `#c4b5fd` | primary 300 |
| `--color-primary-400` | `#a78bfa` | primary 400 |
| `--color-primary-500` | `#8b5cf6` | primary 500 |
| `--color-primary-600` | `#7c3aed` | primary 600 |
| `--color-primary-700` | `#6d28d9` | primary 700 |
| `--color-primary-800` | `#5b21b6` | primary 800 |
| `--color-primary-900` | `#4c1d95` | primary 900 |
| `--color-primary-950` | `#2e1065` | primary 950 |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | Body font — the original's Google Fonts pairing |
| `--shadow-soft` | `0 2px 12px -2px rgb(15 23 42 / 0.08)` | Soft card shadows from the demo stylesheet |
| `--shadow-soft-lg` | `0 12px 32px -8px rgb(15 23 42 / 0.16)` | shadow soft lg |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Features` | — | no dedicated spec block |
| 4 | `Pricing` | — | no dedicated spec block |
| 5 | `Testimonials` | — | no dedicated spec block |
| 6 | `CtaBanner` | — | no dedicated spec block |
| 7 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main · Zenith home · Toggle dark mode · Toggle mobile menu

### `Hero`
*anchors only* — Product dashboard preview · New with AI-powered automation · Build better products, · Start free trial · Watch demo · Zenith

### `Features`
*anchors only* — Everything you need to ship faster · Powerful tools that help your team move from idea to launch without the busywork.

### `Pricing`
*anchors only* — switch · Annual billing · Simple, transparent pricing · Choose the plan that fits your needs. All plans include a 14-day free trial. · Monthly · Annual

### `Testimonials`
*anchors only* — 5 out of 5 stars · Loved by teams worldwide · See what our customers have to say about their experience.

### `CtaBanner`
*anchors only* — Ready to transform your workflow? · Join thousands of teams already using Zenith to build better products, faster. · Start free trial · Contact sales

### `Footer`
*anchors only* — Zenith home · Zenith on Twitter · Zenith on GitHub · Zenith on LinkedIn

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
- **Provenance ban.** No file under `apps/zenith/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/zenith/public/CNAME` = `zenith.free.componentdock.com`
  and the package `homepage` = `https://zenith.free.componentdock.com`.

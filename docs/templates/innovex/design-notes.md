# Innovex — Design Notes

Reference: **Eroo** — `https://colorlib.com/wp/template/eroo/`  
Live preview: `https://preview.colorlib.com/theme/eroo/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/eroo-colorlib-template.jpg  
Shipped: https://innovex.free.componentdock.com

Innovex is a business landing page with a top bar, navbar, hero, services, about band, stat counters, team and footer. It recreates the ColorLib **Eroo** design (https://colorlib.com/wp/template/eroo/, preview: https://preview.colorlib.com/theme/eroo/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Great Vibes**, **Roboto**

## Design tokens (`apps/innovex/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fdf6e9` | primary 50 |
| `--color-primary-100` | `#fae8c0` | primary 100 |
| `--color-primary-200` | `#f5d08a` | primary 200 |
| `--color-primary-300` | `#f5a623` | primary 300 |
| `--color-primary-400` | `#e09520` | primary 400 |
| `--color-primary-500` | `#c7821a` | primary 500 |
| `--color-primary-600` | `#a66b15` | primary 600 |
| `--color-primary-700` | `#7d5010` | primary 700 |
| `--color-primary-800` | `#54360b` | primary 800 |
| `--color-primary-900` | `#2b1b06` | primary 900 |
| `--color-dark` | `#1a1a2e` | dark |
| `--color-dark-lighter` | `#232342` | dark lighter |
| `--color-surface` | `#f8f9fa` | surface |
| `--color-ink` | `#212529` | ink |
| `--color-muted` | `#6c757d` | muted |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-script` | `'Great Vibes', cursive` | font script |

> The spec has no section-level requirements; the order below is read from `apps/innovex/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | — | no dedicated spec block |
| 2 | `Navbar` | — | no dedicated spec block |
| 3 | `Hero` | — | no dedicated spec block |
| 4 | `Services` | — | no dedicated spec block |
| 5 | `About` | — | no dedicated spec block |
| 6 | `Counter` | — | no dedicated spec block |
| 7 | `FAQ` | — | no dedicated spec block |
| 8 | `Team` | — | no dedicated spec block |
| 9 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
*anchors only* — Facebook · Twitter · Instagram · Dribbble

### `Navbar`
*anchors only* — banner · Innovex

### `Hero`
*anchors only* — Welcome to Innovex · Digital Innovation Company that Creates Solution · Get Started · View Portfolio

### `Services`
*anchors only* — We Shape The · Perfect Solutions

### `About`
*anchors only* — Welcome to Innovex · Highest · Creative Standards · Years Of · Experienced

### `Counter`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `FAQ`
*anchors only* — We Are Very · Experienced &amp; Professionals · Frequently Asked Question · Frequently · Ask Question

### `Team`
*anchors only* — Meet The Team · Professional · Creative Team Members · View All Members

### `Footer`
*anchors only* — Email for newsletter · Subscribe · Innovex · Company · Services · Contact

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
- **Provenance ban.** No file under `apps/innovex/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/innovex/public/CNAME` = `innovex.free.componentdock.com`
  and the package `homepage` = `https://innovex.free.componentdock.com`.

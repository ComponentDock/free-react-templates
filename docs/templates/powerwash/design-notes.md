# Powerwash — Design Notes

Reference: **Pressure Washing** — `https://colorlib.com/wp/template/pressure-washing/`  
Live preview: `https://preview.colorlib.com/theme/pressurewashing/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/pressurewashing-free-template.jpg  
Shipped: https://powerwash.free.componentdock.com

Recreation of the ColorLib **Pressure Washing** template. **Source slug:** `pressurewashing` **ColorLib page:** https://colorlib.com/wp/template/pressure-washing/ **Live preview:** https://preview.colorlib.com/theme/pressurewashing/ **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript **Design category:** Service business — local pres…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@300;400;500;600;700;800**

## Design tokens (`apps/powerwash/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-50` | `#eef6ff` | PowerWash brand palette — vivid blue (#207dff) with accent yellow (#ffd31d) |
| `--color-brand-100` | `#d9ebff` | brand 100 |
| `--color-brand-200` | `#bcd8ff` | brand 200 |
| `--color-brand-300` | `#8ebfff` | brand 300 |
| `--color-brand-400` | `#599cff` | brand 400 |
| `--color-brand-500` | `#207dff` | brand 500 |
| `--color-brand-600` | `#0a5ef5` | brand 600 |
| `--color-brand-700` | `#0a4ae1` | brand 700 |
| `--color-brand-800` | `#0f3db6` | brand 800 |
| `--color-brand-900` | `#13378f` | brand 900 |
| `--color-accent-50` | `#fffce8` | accent 50 |
| `--color-accent-100` | `#fff9c2` | accent 100 |
| `--color-accent-200` | `#fff088` | accent 200 |
| `--color-accent-300` | `#ffe04a` | accent 300 |
| `--color-accent-400` | `#ffd31d` | accent 400 |
| `--color-accent-500` | `#efc008` | accent 500 |
| `--color-accent-600` | `#ce9804` | accent 600 |
| `--color-accent-700` | `#a56d07` | accent 700 |
| `--color-accent-800` | `#89550d` | accent 800 |
| `--color-accent-900` | `#754511` | accent 900 |
| `--color-dark-50` | `#f6f6f6` | dark 50 |
| `--color-dark-100` | `#e7e7e7` | dark 100 |
| `--color-dark-200` | `#d1d1d1` | dark 200 |
| `--color-dark-300` | `#b0b0b0` | dark 300 |
| `--color-dark-400` | `#888888` | dark 400 |
| `--color-dark-500` | `#6d6d6d` | dark 500 |
| `--color-dark-600` | `#5d5d5d` | dark 600 |
| `--color-dark-700` | `#4f4f4f` | dark 700 |
| `--color-dark-800` | `#3a3a3a` | dark 800 |
| `--color-dark-900` | `#1a1a1a` | dark 900 |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |

> The spec has no section-level requirements; the order below is read from `apps/powerwash/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `About` | — | no dedicated spec block |
| 4 | `StatsCounter` | — | no dedicated spec block |
| 5 | `Services` | — | no dedicated spec block |
| 6 | `BeforeAfter` | — | no dedicated spec block |
| 7 | `Testimonials` | — | no dedicated spec block |
| 8 | `Gallery` | — | no dedicated spec block |
| 9 | `Blog` | — | no dedicated spec block |
| 10 | `Contact` | — | no dedicated spec block |
| 11 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Facebook · Twitter · Instagram · Toggle menu

### `Hero`
*anchors only* — Pressure · Washing · Learn more

### `About`
*anchors only* — Why Choose Us?

### `StatsCounter`
*anchors only* — We Provide Free Quotation · Free Consultation

### `Services`
*anchors only* — Pressure Washing Services

### `BeforeAfter`
*anchors only* — Before &amp; After Services

### `Testimonials`
*anchors only* — Happy Clients &amp; Feedbacks

### `Gallery`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Blog`
*anchors only* — Latest news from our blog

### `Contact`
*anchors only* — Free Consultation · Select services · Send message

### `Footer`
*anchors only* — Twitter · Facebook · Instagram

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
- **Provenance ban.** No file under `apps/powerwash/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/powerwash/public/CNAME` = `powerwash.free.componentdock.com`
  and the package `homepage` = `https://powerwash.free.componentdock.com`.

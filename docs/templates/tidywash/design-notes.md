# Tidywash — Design Notes

Reference: **Cleanex** — `https://colorlib.com/wp/template/cleanex/`  
Live preview: `https://preview.colorlib.com/theme/cleanex/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/cleanex-template.jpg  
Shipped: https://tidywash.free.componentdock.com

A cleaning services template with topbar, hero, features, process, industries, pricing and testimonials sections. Recreation of ColorLib's **Cleanex** cleaning service website template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@400;500;700**

## Design tokens (`apps/tidywash/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#e8eefb` | primary 50 |
| `--color-primary-100` | `#c5d4f5` | primary 100 |
| `--color-primary-200` | `#9eb8ee` | primary 200 |
| `--color-primary-300` | `#7099e5` | primary 300 |
| `--color-primary-400` | `#225ae1` | primary 400 |
| `--color-primary-500` | `#1947b7` | primary 500 |
| `--color-primary-600` | `#143a96` | primary 600 |
| `--color-primary-700` | `#102e78` | primary 700 |
| `--color-primary-800` | `#0c225c` | primary 800 |
| `--color-primary-900` | `#091844` | primary 900 |
| `--color-accent-400` | `#fedd32` | accent 400 |
| `--color-accent-500` | `#e6c500` | accent 500 |
| `--color-ink` | `#161655` | ink |
| `--color-smoke` | `#999999` | smoke |
| `--color-mist` | `#f4f5f0` | mist |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Topbar` | — | no dedicated spec block |
| 2 | `Navbar` | — | no dedicated spec block |
| 3 | `Hero` | — | no dedicated spec block |
| 4 | `About` | — | no dedicated spec block |
| 5 | `Features` | — | no dedicated spec block |
| 6 | `Counter` | — | no dedicated spec block |
| 7 | `Industries` | — | no dedicated spec block |
| 8 | `Process` | — | no dedicated spec block |
| 9 | `Testimonials` | — | no dedicated spec block |
| 10 | `Pricing` | — | no dedicated spec block |
| 11 | `CTA` | — | no dedicated spec block |
| 12 | `Blog` | — | no dedicated spec block |
| 13 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Topbar`
*anchors only* — Mon - Sat (8am - 7pm) Sunday closed

### `Navbar`
*anchors only* — Main navigation · Tidy · Wash · Request A Quote

### `Hero`
*anchors only* — Hero · Introducing TidyWash · A Clean Home is A Happy Home · Request A Quote

### `About`
*anchors only* — About · About Company · Most Awarded Cleaning Company Since 2000 · Book A Service · First Name · Last Name

### `Features`
*anchors only* — Features · Why Choose Us?

### `Counter`
*anchors only* — Statistics

### `Industries`
*anchors only* — Industries we serve · Services · Starting from $29.00

### `Process`
*anchors only* — How it works · Get Amazing Cleaning in 3 Simple Ways

### `Testimonials`
*anchors only* — Testimonials · Previous testimonial · Next testimonial

### `Pricing`
*anchors only* — Pricing · Our Plans & Pricing · Sign Up

### `CTA`
*anchors only* — Call to action · Need to clean your house? Just hire us!

### `Blog`
*anchors only* — Blog · Our Blog · Recent Posts

### `Footer`
*anchors only* — Tidy · Wash · Recent Posts · Explore · Have a Question? · Component Dock

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
- **Provenance ban.** No file under `apps/tidywash/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/tidywash/public/CNAME` = `tidywash.free.componentdock.com`
  and the package `homepage` = `https://tidywash.free.componentdock.com`.

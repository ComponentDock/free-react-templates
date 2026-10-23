# Refuge — Design Notes

Reference: **Funder** — `https://colorlib.com/wp/template/funder/`  
Live preview: `https://preview.colorlib.com/theme/funder/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/funder-free-template.jpg  
Shipped: https://refuge.free.componentdock.com

Refuge is a business landing page with a navbar, hero, products, about band, split feature, feature cards, impact, founders, testimonials and footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Oswald**, **Oswald:wght@400;500;600;700**, **Work Sans**

## Design tokens (`apps/refuge/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#2563eb` | brand |
| `--color-brand-dark` | `#1d4ed8` | brand dark |
| `--color-ink` | `#1a202c` | ink |
| `--color-ink-dark` | `#0f172a` | ink dark |
| `--color-paper` | `#f8fafc` | paper |
| `--color-paper-alt` | `#f1f5f9` | paper alt |
| `--color-mist` | `#64748b` | mist |
| `--color-primary-50` | `#eff6ff` | primary 50 |
| `--color-primary-100` | `#dbeafe` | primary 100 |
| `--color-primary-200` | `#bfdbfe` | primary 200 |
| `--color-primary-300` | `#93c5fd` | primary 300 |
| `--color-primary-400` | `#60a5fa` | primary 400 |
| `--color-primary-500` | `#3b82f6` | primary 500 |
| `--color-primary-600` | `#2563eb` | primary 600 |
| `--color-primary-700` | `#1d4ed8` | primary 700 |
| `--color-primary-800` | `#1e40af` | primary 800 |
| `--color-primary-900` | `#1e3a8a` | primary 900 |
| `--font-sans` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | font display |

> The spec has no section-level requirements; the order below is read from `apps/refuge/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Products` | — | no dedicated spec block |
| 4 | `About` | — | no dedicated spec block |
| 5 | `SplitFeature` | — | no dedicated spec block |
| 6 | `Features` | — | no dedicated spec block |
| 7 | `Impact` | — | no dedicated spec block |
| 8 | `Founders` | — | no dedicated spec block |
| 9 | `Testimonials` | — | no dedicated spec block |
| 10 | `CtaBanner` | — | no dedicated spec block |
| 11 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Toggle menu · REFUGE · Get A Quote

### `Hero`
*anchors only* — Previous slide · Next slide

### `Products`
*anchors only* — Products &amp; Services · Insurance Coverage · Learn More

### `About`
*anchors only* — We Are Trusted Agency Company

### `SplitFeature`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Features`
*anchors only* — Outstanding Services · Why Choose Us

### `Impact`
*anchors only* — Thousands of Houses Damage Each Year · Insure Yours Now

### `Founders`
*anchors only* — Our Founders

### `Testimonials`
*anchors only* — Previous testimonial · Next testimonial · Testimonies

### `CtaBanner`
*anchors only* — Small Business Insurance Company · Contact Us

### `Footer`
*anchors only* — About · Read More · Quick Menu · Insurance · Social · Component Dock

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
- **Provenance ban.** No file under `apps/refuge/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/refuge/public/CNAME` = `refuge.free.componentdock.com`
  and the package `homepage` = `https://refuge.free.componentdock.com`.

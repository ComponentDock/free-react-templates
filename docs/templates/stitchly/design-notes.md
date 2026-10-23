# Stitchly — Design Notes

Reference: **Tailor** — `https://colorlib.com/wp/template/tailor/`  
Live preview: `https://preview.colorlib.com/theme/tailor/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/tailor-free-template.jpg  
Shipped: https://stitchly.free.componentdock.com

Stitchly is a tailor & sewing services template with a navbar, hero, offers, about band, services, video, testimonial, instagram and footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Josefin Sans**, **Josefin Sans:wght@300;400;500;600;700**, **Montserrat**

## Design tokens (`apps/stitchly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#be9278` | brand |
| `--color-brand-dark` | `#a67a62` | brand dark |
| `--color-accent` | `#6785ff` | accent |
| `--color-ink` | `#072366` | Ink — navy headings/footer (#072366). |
| `--color-ink-dark` | `#051a4d` | ink dark |
| `--color-paper` | `#f5f9fb` | Paper — light section backgrounds. |
| `--color-lavender` | `#f1f4fa` | lavender |
| `--color-testimonial` | `#f9fafc` | testimonial |
| `--color-mist` | `#6b7280` | Mist — muted body text. |
| `--color-primary-50` | `#fdf6f0` | Primary scale so shared Button/ButtonLink `primary` variants resolve to brand copper. |
| `--color-primary-100` | `#f8e8da` | primary 100 |
| `--color-primary-200` | `#f0d0b5` | primary 200 |
| `--color-primary-300` | `#e4b48c` | primary 300 |
| `--color-primary-400` | `#d49a6a` | primary 400 |
| `--color-primary-500` | `#be9278` | primary 500 |
| `--color-primary-600` | `#a67a62` | primary 600 |
| `--color-primary-700` | `#8c6350` | primary 700 |
| `--color-primary-800` | `#745042` | primary 800 |
| `--color-primary-900` | `#5f4237` | primary 900 |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | Original fonts: "Josefin Sans" (headings) + "Montserrat" (body). |
| `--font-display` | `'Josefin Sans', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Offers` | — | no dedicated spec block |
| 4 | `About` | — | no dedicated spec block |
| 5 | `Services` | — | no dedicated spec block |
| 6 | `Video` | — | no dedicated spec block |
| 7 | `Testimonial` | — | no dedicated spec block |
| 8 | `Instagram` | — | no dedicated spec block |
| 9 | `CtaBanner` | — | no dedicated spec block |
| 10 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Primary · Toggle dark mode · Mobile

### `Hero`
*anchors only* — We make clothes that suit you · Our Services

### `Offers`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `About`
*anchors only* — About our tailor house · More About Us

### `Services`
*anchors only* — Why use our service?

### `Video`
*anchors only* — Watch our tailor story on YouTube · Watch Our Story

### `Testimonial`
*anchors only* — Robert Brown · Satisfied Client

### `Instagram`
*anchors only* — Follow on Instagram · Follow us on Instagram · Stay inspired with our latest tailoring projects and style tips.

### `CtaBanner`
*anchors only* — Book Your Appointment · Schedule Now

### `Footer`
*anchors only* — Stitchly · Quick Links · Our Services · Opening Hours · Component Dock

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
- **Provenance ban.** No file under `apps/stitchly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/stitchly/public/CNAME` = `stitchly.free.componentdock.com`
  and the package `homepage` = `https://stitchly.free.componentdock.com`.

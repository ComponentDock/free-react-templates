# Nurture — Design Notes

Reference: **Nurture** — `https://colorlib.com/wp/template/nurture/`  
Live preview: `https://preview.colorlib.com/theme/nurture/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/nurture-free-template.jpg  
Shipped: https://nurture.free.componentdock.com

Recreation of ColorLib's **Nurture** kids learning center template as a React single-page application. The original is a colorful, playful education/daycare landing page with a hero, feature icons, class offerings, about section, school news, pricing plans, and a footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/nurture/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#0fb78d` | brand |
| `--color-brand-dark` | `#0ca06f` | brand dark |
| `--color-sky` | `#4fb0dc` | Sky — secondary blue (#4fb0dc). |
| `--color-lime` | `#5cb100` | Lime — tertiary green (#5cb100). |
| `--color-tangerine` | `#ec661f` | Tangerine — orange CTA (#ec661f). |
| `--color-tangerine-dark` | `#d45a18` | tangerine dark |
| `--color-ink` | `#333333` | Ink — dark text (#333333). |
| `--color-mist` | `#666666` | Mist — muted text (#666666). |
| `--color-paper` | `#ffffff` | Paper — white backgrounds. |
| `--color-cloud` | `#f7f9fc` | Cloud — light gray section backgrounds (#f7f9fc). |
| `--color-dark` | `#2b2b2b` | Dark — footer background (#2b2b2b). |
| `--color-primary-50` | `#eefbf4` | primary 50 |
| `--color-primary-100` | `#d5f5e5` | primary 100 |
| `--color-primary-200` | `#aeead0` | primary 200 |
| `--color-primary-300` | `#79d9b3` | primary 300 |
| `--color-primary-400` | `#42c393` | primary 400 |
| `--color-primary-500` | `#0fb78d` | primary 500 |
| `--color-primary-600` | `#0ca06f` | primary 600 |
| `--color-primary-700` | `#0a7f5a` | primary 700 |
| `--color-primary-800` | `#0b6549` | primary 800 |
| `--color-primary-900` | `#0a533d` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Original font: Poppins throughout. |

> The spec has no section-level requirements; the order below is read from `apps/nurture/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `Features` | — | no dedicated spec block |
| 4 | `EducationCta` | — | no dedicated spec block |
| 5 | `About` | — | no dedicated spec block |
| 6 | `News` | — | no dedicated spec block |
| 7 | `EnrollCta` | — | no dedicated spec block |
| 8 | `Pricing` | — | no dedicated spec block |
| 9 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Nurture · Enroll Now

### `Hero`
*anchors only* — Learning Center for Your Kids · Enroll Now

### `Features`
*anchors only* — What We Offer

### `EducationCta`
*anchors only* — Education for Tomorrow&apos;s Leaders · Learn More

### `About`
*anchors only* — Years Experience · About Us · Learn More

### `News`
*anchors only* — School News · Stay updated with the latest happenings and announcements from our learning center. · Read More →

### `EnrollCta`
*anchors only* — Enroll Your Kids This Summer to get 30% off · Get Started

### `Pricing`
*anchors only* — Pricing · Choose the plan that best fits your child&apos;s needs and your family&apos;s budget. · Get Started

### `Footer`
*anchors only* — Email for newsletter · Nurture · Quick Links · Home · About · Courses

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
- **Provenance ban.** No file under `apps/nurture/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/nurture/public/CNAME` = `nurture.free.componentdock.com`
  and the package `homepage` = `https://nurture.free.componentdock.com`.

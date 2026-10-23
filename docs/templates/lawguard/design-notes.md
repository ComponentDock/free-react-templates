# Lawguard — Design Notes

Reference: **Solicitor** — `https://colorlib.com/wp/template/solicitor/`  
Live preview: `https://preview.colorlib.com/theme/solicitor/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/solicitor-free-template.jpg  
Shipped: https://lawguard.free.componentdock.com

A legal and investigation services template with hero, practice areas, consultants, services, resources and contact sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/lawguard/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#037ef3` | brand |
| `--color-brand-dark` | `#0268c4` | brand dark |
| `--color-charcoal` | `#0f0f11` | charcoal |
| `--color-slate` | `#6c757d` | slate |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

> The spec has no section-level requirements; the order below is read from `apps/lawguard/src/App.tsx` and the copy anchors from each component.

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `About` | — | no dedicated spec block |
| 4 | `Services` | — | no dedicated spec block |
| 5 | `SecurityConsultants` | — | no dedicated spec block |
| 6 | `PracticeArea` | — | no dedicated spec block |
| 7 | `Testimonials` | — | no dedicated spec block |
| 8 | `Resources` | No source-site references in the app | see fidelity note below |
| 9 | `ContactSection` | — | no dedicated spec block |
| 10 | `Footer` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main navigation · Lawguard

### `Hero`
*anchors only* — Meet all your investigative and litigation needs · Our services · Contact us

### `About`
*anchors only* — I&apos;m Jon Campbell · Our services

### `Services`
*anchors only* — Our Services

### `SecurityConsultants`
*anchors only* — tablist · Service categories · tabpanel

### `PracticeArea`
*anchors only* — Practice Area

### `Testimonials`
*anchors only* — tablist · Testimonial authors · tabpanel

### `Resources`
The application SHALL NOT carry the source design's provenance: no file under `apps/lawguard/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.

### `ContactSection`
*anchors only* — alert · Write to us · Thank you! Your message has been sent successfully. · Send Message

### `Footer`
*anchors only* — Contact · Sources · Links · Connect · Component Dock

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
- **Provenance ban.** No file under `apps/lawguard/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/lawguard/public/CNAME` = `lawguard.free.componentdock.com`
  and the package `homepage` = `https://lawguard.free.componentdock.com`.

# Jurist — Design Notes

Reference: **Judicial** — `https://colorlib.com/wp/template/judicial/`  
Live preview: `https://preview.colorlib.com/theme/judicial/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/judicial-free-template.jpg  
Shipped: https://jurist.free.componentdock.com

Provide a free, production-ready React law firm landing template that faithfully recreates the ColorLib Judicial design under the name "Jurist". The template features a hero section, about section, practice areas, expertise grid, stats, consultation form, testimonials with FAQ accordion, social bar, and footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito Sans**, **Nunito Sans:wght@300;400;700;900**, **Oswald**

## Design tokens (`apps/jurist/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#cea15a` | Brand gold — extracted from original Judicial style.css (#cea15a). |
| `--color-navy` | `#293462` | Navy blue for consultation section (#293462). |
| `--color-ink` | `#000000` | Dark background (#000). |
| `--color-slate-body` | `#737373` | Body-copy gray (#737373). |
| `--font-sans` | `'Nunito Sans', ui-sans-serif, system-ui, sans-serif` | Fonts: Nunito Sans (body) + Oswald (headings). |
| `--font-heading` | `'Oswald', 'Nunito Sans', ui-sans-serif, system-ui, sans-serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | — | no dedicated spec block |
| 3 | `About` | — | no dedicated spec block |
| 4 | `FeaturedPractice` | — | no dedicated spec block |
| 5 | `AreasOfExpertise` | — | no dedicated spec block |
| 6 | `WhyChooseUs` | — | no dedicated spec block |
| 7 | `Consultation` | Consultation form accepts input | see fidelity note below |
| 8 | `TestimonialsFaq` | — | no dedicated spec block |
| 9 | `SocialBar` | — | no dedicated spec block |
| 10 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — navigation · Main navigation · Jurist

### `Hero`
*anchors only* — We Fight For Justice · Get Started

### `About`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `FeaturedPractice`
*anchors only* — Featured Practice Area · View All

### `AreasOfExpertise`
*anchors only* — Areas of Expertise

### `WhyChooseUs`
*anchors only* — Why Clients Choose Us? · Free Consultation

### `Consultation`
The consultation form SHALL accept user input in all fields.

### `TestimonialsFaq`
*anchors only* — Happy · Clients Says · Frequently · Ask Questions

### `SocialBar`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Footer`
The footer SHALL include a link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/jurist/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/jurist/public/CNAME` = `jurist.free.componentdock.com`
  and the package `homepage` = `https://jurist.free.componentdock.com`.

# Maven — Design Notes

Reference: **Kanox** — `https://colorlib.com/wp/template/kanox/`  
Live preview: `https://preview.colorlib.com/theme/kanox/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/kanox-free-template.jpg  
Shipped: https://maven.free.componentdock.com

Maven is a single-page creative/digital-agency landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Kanox" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Oswald**, **Oswald:wght@400;500;600;700**, **Poppins**, **Roboto**

## Design tokens (`apps/maven/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-100` | `#ffe3f0` | primary 100 |
| `--color-primary-200` | `#ffb8da` | primary 200 |
| `--color-primary-300` | `#ff8cc2` | primary 300 |
| `--color-primary-400` | `#ff54a4` | primary 400 |
| `--color-primary-500` | `#ff2d91` | primary 500 |
| `--color-primary-600` | `#ff1481` | primary 600 |
| `--color-primary-700` | `#e0056b` | primary 700 |
| `--color-primary-800` | `#b80458` | primary 800 |
| `--color-primary-900` | `#8a0443` | primary 900 |
| `--color-navy` | `#162b45` | navy |
| `--color-navy-light` | `#2e4158` | navy light |
| `--color-navy-muted` | `#586779` | navy muted |
| `--color-navy-deep` | `#112e41` | navy deep |
| `--color-hero-bg` | `#f7f7f7` | Light surfaces and borders from the reference. |
| `--color-card-border` | `#e2e6e7` | card border |
| `--color-team-border` | `#45556a` | team border |
| `--color-dark-muted` | `#abb2ba` | dark muted |
| `--color-gray-muted` | `#888888` | gray muted |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-heading` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Banner hero | see fidelity note below |
| 2 | `Hero` | Banner hero | see fidelity note below |
| 3 | `FeaturesCta` | Features CTA band | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `About` | About section | see fidelity note below |
| 6 | `Work` | Recent work section | see fidelity note below |
| 7 | `Stats` | Stats band | see fidelity note below |
| 8 | `Review` | — | no dedicated spec block |
| 9 | `CtaBand` | Video and testimonials section | see fidelity note below |
| 10 | `Team` | Team section | see fidelity note below |
| 11 | `Blog` | Blog section | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Header`
The system SHALL render a full-width light-gray hero with a giant two-line headline, a circular framed photo, and a hot-pink call-to-action button.

### `Hero`
The system SHALL render a full-width light-gray hero with a giant two-line headline, a circular framed photo, and a hot-pink call-to-action button.

### `FeaturesCta`
The system SHALL render a centered band with a pink eyebrow label and a bold section headline directly below the hero.

### `Services`
The system SHALL render a dark navy (#162b45) band with four centered service cards with icon medallions.

### `About`
The system SHALL render a split section with an image collage on the left carrying an overlapping experience headline, and text with a button on the right.

### `Work`
The system SHALL render a "Creative work for client" heading followed by three alternating image/text work rows.

### `Stats`
The system SHALL render a dark navy (#162b45) band with four large white counters.

### `Review`
*anchors only* — Review · Play intro video · Previous testimonial · Next testimonial

### `CtaBand`
The system SHALL render a split section with a video poster and pulsing play button on the left, and a testimonial slider on the right.

### `Team`
The system SHALL render a dark navy (#162b45) section with three bordered team member cards.

### `Blog`
The system SHALL render a "We Have True Story" heading with three blog cards showing category, date, title, and engagement meta.

### `Footer`
The system SHALL render a dark navy (#162b45) footer with about text, a newsletter form, social icons, an Instagram grid, and a copyright bar.

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
- **Provenance ban.** No file under `apps/maven/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/maven/public/CNAME` = `maven.free.componentdock.com`
  and the package `homepage` = `https://maven.free.componentdock.com`.

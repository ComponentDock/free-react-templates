# Adviso — Design Notes

Reference: **Consultation** — `https://colorlib.com/wp/template/consultation/`  
Live preview: `https://preview.colorlib.com/theme/consultation/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/consultation-colorlib-template.jpg  
Shipped: https://adviso.free.componentdock.com

Adviso is a single-page business consulting template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Consultation" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Jost**, **Jost:wght@300;400;500;600**, **Oswald**

## Design tokens (`apps/adviso/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#00ffab` | brand |
| `--color-brand-dark` | `#55a48a` | brand dark |
| `--color-ink` | `#1e1e1e` | ink |
| `--color-dark-alt` | `#2a2a2a` | dark alt |
| `--color-play` | `#f04506` | play |
| `--color-sweep` | `#ec583a` | sweep |
| `--color-surface` | `#f2f4f8` | surface |
| `--color-surface2` | `#dfebe6` | surface2 |
| `--color-mist` | `#f2f2f2` | mist |
| `--color-body` | `#656565` | body |
| `--font-display` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | Oswald for display headings + buttons, Jost for body/nav |
| `--font-sans` | `'Jost', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `MissionStrip` | Mission strip | see fidelity note below |
| 4 | `Services` | Services | see fidelity note below |
| 5 | `About` | About | see fidelity note below |
| 6 | `Solutions` | Solutions / blog row | see fidelity note below |
| 7 | `VideoCta` | Video / split CTA | see fidelity note below |
| 8 | `CaseStudy` | Case study | see fidelity note below |
| 9 | `Stats` | Stats / Partner | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |
| 11 | `BackToTop` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a transparent navbar over the hero with the site wordmark, section links, a Blog dropdown, and a "Let's Talk" link.

### `HeroSlider`
The system SHALL render a full-height image slider with three slides, each with a dark overlay, a white headline with a mint-highlighted span, subtext, and a transparent outlined CTA button.

### `MissionStrip`
The system SHALL render a light strip below the hero with a green top border containing a mission label, a headline, a paragraph, and a Learn More link.

### `Services`
The system SHALL render three numbered service cards (number, title, paragraph).

### `About`
The system SHALL render an image and a caption whose heading sits on a mint background block, with a paragraph and a Learn More link.

### `Solutions`
The system SHALL render a light section with a heading block and four blog cards (image, title, paragraph, Learn More), with a mint hover overlay.

### `VideoCta`
The system SHALL render a split section with a photo side containing a circular play button and a details side with a heading, paragraphs, and a dark Learn More button.

### `CaseStudy`
The system SHALL render a green-tinted section with a heading, a Learn More link, and three case cards (image, title, paragraph, View Case link).

### `Stats`
The system SHALL render a section with a "Partner for your business" heading, a paragraph, a Learn More link, and three numeric counters.

### `Footer`
The system SHALL render a dark footer with an about column with social icons, Navigation and Services link columns, a newsletter subscribe form, and a copyright bar.

### `BackToTop`
*anchors only* — Back to top

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
- **Provenance ban.** No file under `apps/adviso/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/adviso/public/CNAME` = `adviso.free.componentdock.com`
  and the package `homepage` = `https://adviso.free.componentdock.com`.

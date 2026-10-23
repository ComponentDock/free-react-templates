# Pixelpress — Design Notes

Reference: **Endgam** — `https://colorlib.com/wp/template/endgam/`  
Live preview: `https://preview.colorlib.com/theme/endgam/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/endgam-free-template.jpg  
Shipped: https://pixelpress.free.componentdock.com

Pixelpress is a single-page gaming-news/blog template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Endgam" website template (see TEMPLATES.md, Blog section, line 257), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:ital,wght@0,400;0,500;0,700;1,400;1,700**

## Design tokens (`apps/pixelpress/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-magenta` | `#b01ba5` | magenta |
| `--color-magenta-bright` | `#c313b7` | magenta bright |
| `--color-navy` | `#081624` | navy |
| `--color-deep-purple` | `#0c062e` | deep purple |
| `--color-muted` | `#68647d` | muted |
| `--color-ink` | `#251e2f` | ink |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header with social row, logo, user panel and nav | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `IntroTeasers` | Intro teaser strip | see fidelity note below |
| 4 | `BlogSection` | Featured split section | see fidelity note below |
| 5 | `VideoPromo` | Video promo section | see fidelity note below |
| 6 | `FeaturedSplit` | — | no dedicated spec block |
| 7 | `Newsletter` | Newsletter section | see fidelity note below |
| 8 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Header`
The system SHALL render a sticky-style header band composed of a top social row and a dark-navy bar with logo, user panel and main navigation.

### `HeroSlider`
The system SHALL render a full-width two-slide hero over game-art backgrounds with a giant headline, subtext, CTA and pagination.

### `IntroTeasers`
The system SHALL render a deep-purple strip with three equal-width story teasers.

### `BlogSection`
The system SHALL render a split feature: full-height image on the left, white content panel on the right.

### `VideoPromo`
The system SHALL render a dark video-promo section with a play button and caption.

### `FeaturedSplit`
*anchors only* — no literal copy in the shipped component (imagery/utility band).

### `Newsletter`
The system SHALL render a newsletter signup band on a purple gradient.

### `Footer`
The system SHALL render the footer on the darkest gradient with logo, menu, social icons and copyright.

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
- **Provenance ban.** No file under `apps/pixelpress/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pixelpress/public/CNAME` = `pixelpress.free.componentdock.com`
  and the package `homepage` = `https://pixelpress.free.componentdock.com`.

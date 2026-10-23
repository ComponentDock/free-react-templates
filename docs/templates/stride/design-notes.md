# Stride — Design Notes

Reference: **Stamina** — `https://colorlib.com/wp/template/stamina/`  
Live preview: `https://preview.colorlib.com/theme/stamina/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/accordion-19.jpg — the ROW's slug `accordion-19`, not the spec's `stamina`  
Shipped: https://stride.free.componentdock.com

Row note: `TEMPLATES.md` links the slug `accordion-19` for this app while the spec records `stamina`. This brief follows the SPEC — the disagreement is recorded, not resolved (ROW-MULTIPLICITY class, see the SPEC-REFERENCE audit, main `4820f472b`).

Stride is a dark-hero fitness & gym landing page template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Muli**, **Muli:wght@300;400;700;900**

## Design tokens (`apps/stride/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f23a2e` | brand |
| `--color-brand-dark` | `#d42f25` | brand dark |
| `--color-brand-light` | `#ff7c67` | brand light |
| `--color-gold` | `#f89d13` | gold |
| `--color-dark` | `#1a1a2e` | dark |
| `--color-light` | `#f8f9fa` | light |
| `--color-text-gray` | `#989898` | text gray |
| `--color-text-meta` | `#aeaeae` | text meta |
| `--color-text-sub` | `#ababab` | text sub |
| `--font-sans` | `'Muli', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `HoursBar` | Hours bar | see fidelity note below |
| 4 | `ServicesCarousel` | Services carousel | see fidelity note below |
| 5 | `ParallaxBand` | Parallax bands | see fidelity note below |
| 6 | `Classes` | Classes | see fidelity note below |
| 7 | `Schedule` | Schedule | see fidelity note below |
| 8 | `Trainers` | Trainers | see fidelity note below |
| 9 | `ServicesGrid` | Services grid | see fidelity note below |
| 10 | `Contact` | Contact | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a fixed/absolute navbar over the hero with the brand logo and six section links; white over the hero, inverting to a white bar with black text after scrolling (sticky state).

### `Hero`
The system SHALL render a full-viewport dark hero with a centered headline, lead, and outline CTA, matching the source's video-overlay look via a dark image + `rgba(0,0,0,.5)` overlay (no video assets — deviation noted in PR).

### `HoursBar`
The system SHALL render a brand-red skewed box overlapping the hero's bottom edge with opening hours and a gold contact CTA.

### `ServicesCarousel`
The system SHALL render the "Stay Healthy / Get A Perfect Body" section with an owl-style dots-only carousel of six white feature cards with brand red icons.

### `ParallaxBand`
The system SHALL render three 500px-tall image bands with dark overlays, each with a white headline, lead, and an underlined "Get Started" link.

### `Classes`
The system SHALL render a "Fitness Class / Classes" section with two columns of five horizontal white class cards (thumbnail + title + meta), matching the source's hover treatment.

### `Schedule`
The system SHALL render a "Fitness Sched / Schedule" section with seven day tabs and per-day class lists.

### `Trainers`
The system SHALL render a "Trainer / Our Trainers" section with four circular-avatar trainer cards.

### `ServicesGrid`
The system SHALL render a "Fitness Services / Services" section with a static 3×2 grid of the same six feature cards.

### `Contact`
The system SHALL render a light-grey "Get In Touch / Contact Us" section with a four-field + message form, a red submit button, and the second absolute red hours box.

### `Footer`
The system SHALL render a LIGHT footer (verified live — the source's `color:#fff` heading rule is overridden by Bootstrap's `.text-dark !important`; computed headings are `#343a40` on a white page) with three columns and a copyright bar.

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
- **Provenance ban.** No file under `apps/stride/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/stride/public/CNAME` = `stride.free.componentdock.com`
  and the package `homepage` = `https://stride.free.componentdock.com`.

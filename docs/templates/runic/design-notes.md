# Runic — Design Notes

Reference: **Colorlib Wizard 6** — `https://colorlib.com/wp/template/colorlib-wizard-6/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-wizard-6/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-6.jpg  
Shipped: https://runic.free.componentdock.com

Runic is a single-page three-step ONBOARDING WIZARD in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Bubblegum Sans**, **Montserrat**

## Design tokens (`apps/runic/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-page-start` | `#b8c6f0` | Page gradient: soft pastel blue → lavender → pink |
| `--color-page-mid` | `#d4b8e8` | page mid |
| `--color-page-end` | `#f0c8dc` | page end |
| `--color-card` | `#ffffff` | Card |
| `--color-accent` | `#aac1f0` | CTA / accent: periwinkle blue |
| `--color-accent-hover` | `#98add6` | accent hover |
| `--color-pink` | `#f6c2ec` | Back button / active dot: pink/lavender |
| `--color-pink-hover` | `#dbadd2` | pink hover |
| `--color-dot-active` | `#f6c2ec` | Active field dot |
| `--color-dot-inactive` | `#f6c2ec` | dot inactive |
| `--color-text-primary` | `#333333` | Text |
| `--color-text-secondary` | `#808080` | text secondary |
| `--color-text-placeholder` | `#808080` | text placeholder |
| `--color-input-bg` | `#f7f7f7` | Input |
| `--color-avatar-border` | `#d4b8e8` | Avatar border |
| `--color-step-active` | `#ffffff` | Step dots |
| `--color-step-inactive` | `#ffffff` | step inactive |
| `--color-primary-50` | `#f0f4fd` | Primary scale — maps accent for shared Button |
| `--color-primary-100` | `#dde6fa` | primary 100 |
| `--color-primary-200` | `#bbcdf5` | primary 200 |
| `--color-primary-300` | `#aac1f0` | primary 300 |
| `--color-primary-400` | `#98add6` | primary 400 |
| `--color-primary-500` | `#aac1f0` | primary 500 |
| `--color-primary-600` | `#98add6` | primary 600 |
| `--color-primary-700` | `#8499c4` | primary 700 |
| `--color-primary-800` | `#7085b2` | primary 800 |
| `--color-primary-900` | `#5c71a0` | primary 900 |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Bubblegum Sans', cursive` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `WizardCard` | — | no dedicated spec block |
| 2 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `WizardCard`
*anchors only* — alert · Previous step · Tell us about yours · Please fill in all required fields. · Back · Finish

### `Footer`
The page footer SHALL include a link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/runic/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/runic/public/CNAME` = `runic.free.componentdock.com`
  and the package `homepage` = `https://runic.free.componentdock.com`.

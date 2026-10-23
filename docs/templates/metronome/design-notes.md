# Metronome — Design Notes

Reference: **Calendar 11** — `https://colorlib.com/wp/template/calendar-11/`  
Live preview: `https://preview.colorlib.com/theme/bootstrap/calendar-11/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/calendar-11.jpg  
Shipped: https://metronome.free.componentdock.com

Metronome is a minimal single-page date-picker widget template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto:wght@300;400;500;700**

## Design tokens (`apps/metronome/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-accent` | `#f78b65` | accent |
| `--color-accent-light` | `#f2d1c5` | accent light |
| `--color-muted` | `#999999` | muted |
| `--color-border` | `#ced4da` | border |
| `--color-border-active` | `#0089ec` | border active |
| `--color-border-focus` | `#80bdff` | border focus |
| `--color-text-input` | `#495057` | text input |
| `--color-outfocus` | `#dddddd` | outfocus |
| `--color-disabled-bg` | `#f5f5f5` | disabled bg |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `DatePicker` | Picker open/close behavior | see fidelity note below |
| 2 | `Footer` | Picker footer buttons | see fidelity note below |

## Section-by-section fidelity

### `DatePicker`
The system SHALL open the date picker when the input is focused, close it when a day is selected, when Close is pressed, when Esc is pressed, or when the backdrop is clicked. While open, the input border SHALL be `#0089ec` (source `.picker__input--active`).

### `Footer`
The system SHALL render a footer row of three equal-width text buttons — Today, Clear, Close — each `33%` width with `background: #fff` and hover `background: #f2d1c5`, with the source's small accent icons.

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
- **Provenance ban.** No file under `apps/metronome/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/metronome/public/CNAME` = `metronome.free.componentdock.com`
  and the package `homepage` = `https://metronome.free.componentdock.com`.

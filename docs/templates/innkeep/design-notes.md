# Innkeep — Design Notes

Reference: **Colorlib Regform 25** — `https://colorlib.com/wp/template/colorlib-regform-25/`  
Live preview: `https://preview.colorlib.com/theme/colorlib-regform-25/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-25.jpg  
Shipped: https://innkeep.free.componentdock.com

Innkeep is a single-page hotel room-booking form template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Muli**, **Poppins**, **Poppins:wght@400;500**

## Design tokens (`apps/innkeep/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#3e91f7` | brand |
| `--color-brand-hover` | `#0072fd` | Brand hover — the source button:hover background (#0072fd). |
| `--color-label` | `#4c4c4c` | Label — field label text (#4c4c4c, Muli-SemiBold). |
| `--color-ink` | `#666` | Ink — input text + calendar/chevron icons (#666). |
| `--color-border` | `#e6e6e6` | Border — 1px input borders (#e6e6e6). |
| `--color-check` | `#ebebeb` | Check — custom checkbox checkmark bg (#ebebeb). |
| `--color-check-edge` | `#ccc` | Check-edge — checkbox border (#ccc). |
| `--color-check-glyph` | `#333` | Check-glyph — checkbox check glyph (#333). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `BookingForm` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `BookingForm`
*anchors only* — Name * · name · Phone * · phone · Check-in * · checkIn

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
- **Provenance ban.** No file under `apps/innkeep/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/innkeep/public/CNAME` = `innkeep.free.componentdock.com`
  and the package `homepage` = `https://innkeep.free.componentdock.com`.

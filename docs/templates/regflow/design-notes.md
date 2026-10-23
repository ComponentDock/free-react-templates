# Regflow — Design Notes

Reference: **Colorlib Regform 23** — `https://colorlib.com/wp/template/colorlib-regform-23/`  
Live preview: `https://colorlib.com/etc/regform/colorlib-regform-23/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-23.jpg  
Shipped: https://regflow.free.componentdock.com

A Registration / Contact Form template with form wrapper, form, form heading and description and form fields sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;600;700**

## Design tokens (`apps/regflow/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-card` | `#39459b` | Brand palette from the original registration form. |
| `--color-card-border` | `#0d99d7` | card border |
| `--color-label` | `#00ade6` | label |
| `--color-focus` | `#ffffff` | focus |
| `--color-btn-hover` | `#2098d1` | btn hover |
| `--color-text` | `#ffffff` | text |
| `--font-family-heading` | `'Montserrat', sans-serif` | font family heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `FormWrapper` | Form wrapper | see fidelity note below |
| 2 | `FormField` | Form fields | see fidelity note below |
| 3 | `SubmitButton` | Submit button | see fidelity note below |
| 4 | `Footer` | Form card | see fidelity note below |

## Section-by-section fidelity

### `FormWrapper`
The system SHALL render a full-viewport wrapper with a background image placeholder, centered horizontally and vertically, containing a styled form card.

### `FormField`
The system SHALL render three form fields: "Your Name" (text input), "Your Mail" (text input), and "Your Message" (textarea), each with a floating label that animates upward on focus/validity and an animated underline that scales from 0 to full width.

### `SubmitButton`
The system SHALL render a centered "SUBMIT" button with a right-arrow icon, uppercase text, white 2px border, transparent background. On hover, a blue (#2098D1) fill SHALL slide in from the left (scaleX transition), and the arrow icon SHALL shift 4px to the right.

### `Footer`
The system SHALL render a centered card with a blue-purple (#39459b) background, a thick cyan (#0d99d7) border, a subtle box-shadow, and padding around the form content.

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
- **Provenance ban.** No file under `apps/regflow/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/regflow/public/CNAME` = `regflow.free.componentdock.com`
  and the package `homepage` = `https://regflow.free.componentdock.com`.

## Reference tokens (measured 2026-10-23)

Evidence: https://colorlib.com/etc/regform/colorlib-regform-23/ — HTTP 200 on 2026-10-23; measured `css/style.css` (6,461 bytes). Title served: "RegistrationForm_v7 by Colorlib".

- Hex census: `#fff` 6, `#39459b` 2, `#0d99d7` 2, `#00ade6` 2, `#2098d1` 1 (count = literal occurrences in the sheet).
- Typefaces: Body: `Montserrat`; Labels: `Montserrat` semibold.
- Radii: none — square card with a 10px cyan border.
- Section order (shipped): `FormWrapper -> FormField (name, mail, message) -> SubmitButton -> Footer`.

### Deltas measured against the shipped app

- `apps/regflow` matches the reference exactly: `--color-card #39459b`, `--color-card-border #0d99d7`, `--color-label #00ade6`, `--color-btn-hover #2098d1`, `Montserrat`.
- The reference's square 10px-border card shape is reproduced (no `border-radius` anywhere in the sheet).
- No drift to report for this prep.

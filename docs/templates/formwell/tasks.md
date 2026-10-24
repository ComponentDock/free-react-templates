# Tasks & Design Notes: FormWell (Contact Form 08)

> **SHIPPED** — this prep's design shipped as `apps/formwell`
> (<https://formwell.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

## Overview

Recreation of ColorLib **Contact Form 08** (`https://colorlib.com/wp/template/contact-form-08/`,
live demo `https://preview.colorlib.com/theme/bootstrap/contact-form-08/`) as **FormWell** — one
contact band: a centred heading, then a card that carries the form beside a photograph.

Spec: `openspec/specs/template-formwell/spec.md` (rewritten 2026-10-24; it previously recorded
Contact Form V15 and a map-backed banner card — see `docs/spec-row-mismatch.md`).
Brief with measured tokens and the fidelity-delta table: `docs/templates/formwell/design-notes.md`.
Shipped: https://formwell.free.componentdock.com

Row note: `TEMPLATES.md` line **1411** (`## Contact Form (42)`) links `contact-form-08` and
`formwell`; the spec now records the same slug, so row and spec agree.

## Section order & architecture

The reference is a snippet: one `.ftco-section` (7em vertical padding) holding a centred heading and
one card. There is no navbar, hero, feature grid, testimonial band or footer — the recreation ships
the same two bands plus the mandatory credit line.

| # | file | band | status |
| --- | --- | --- | --- |
| 1 | `src/components/PageTitle.tsx` | centred `h1` naming the template, in the slot the reference fills with its snippet heading | [x] |
| 2 | `src/components/ContactCard.tsx` | white card: `ContactForm` column + `ContactImage` panel | [x] |
| 3 | `src/components/ContactForm.tsx` | "Get in touch with us", Full Name / Email Address row, Subject, Message textarea, "Send Message" submit | [x] |
| 4 | `src/components/ContactImage.tsx` | seeded placeholder photograph (`picsum.photos/seed/formwell`), hidden below `sm` | [x] |
| 5 | `src/components/Footer.tsx` | Component Dock credit (`https://www.componentdock.com/`) | [x] |
| 6 | `src/index.css` | `@theme` tokens: `--color-brand`, `--color-brand-dark`, `--color-bg-page`, `--color-text-*`, `--color-input-bg` | [x] |

## Tasks

- [x] Spec rewritten to the measured Contact Form 08 reference; Requirements aligned to the app
- [x] Brief (`design-notes.md`) rewritten with measured tokens + document order + delta table
- [x] Reference heading and four-field set in order, with the reference's own placeholders
- [x] Uppercase labels associated with their fields; email input keeps `type="email"`
- [x] Typing updates field state; submit prevents navigation
- [x] Footer credit to Component Dock
- [x] No source-site name, domain or URL anywhere under `apps/formwell/`
- [ ] Skin parity with the reference: accent `#71a95a` / hover `#5a8947` (currently `#86b574` /
      `#6d9a5c`), page ground `#ffffff` (currently `#f5f5f5`), body ink `#666666` (currently
      `#333333`), 50px `#ffffff` fields under `0 8px 19px -13px rgba(0,0,0,.09)` with 5px radius
      and `rgba(0,0,0,.3)` placeholders (currently `#f7f7f7` ~40px fields, 2px radius, no shadow,
      `#999` placeholders), `#000` labels (currently `#555`), and the photo-as-card-background
      composition (currently a 40% `<img>` panel beside a white card). Implementer change: update
      `src/index.css` `@theme` + the component classes, adjust the tests that assert
      `bg-input-bg` / accent values, then run `bash scripts/verify-app.sh formwell`
- [ ] Submit-behaviour parity: native `required` / `minlength="5"`, the red warning and green
      success lines, and the ajax POST (currently `preventDefault()` only)

## Design tokens & styling

Measured from `theme/bootstrap/contact-form-08/css/style.css` (14,838 B, sha256 `2e795975…`): accent
`#71a95a` (hover `#5a8947`), page ground `#ffffff`, heading and label ink `#000`, body ink
`#666666`, field ink `rgba(0,0,0,.8)`, placeholder `rgba(0,0,0,.3)`, field surface `#ffffff` with
`0 8px 19px -13px rgba(0,0,0,.09)`, button shadow `0 10px 20px -6px rgba(0,0,0,.12)`, 5px radii,
50px fields, 83.33% card / 58.33% form column, 3rem card padding, 7em band padding, 12px/600
uppercase labels, Poppins declared. Full table in the brief.

Interactive states: the button darkens to `#5a8947` on hover/focus and deepens its shadow; a focused
field paints **nothing** — the sheet's green focus border sits on a border the theme removed, and the
field shadow is `!important` over the reboot's blue ring. `focus:ring-brand/30` in the app is
therefore a divergence to settle when skin parity is taken.

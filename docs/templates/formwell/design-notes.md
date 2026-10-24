# FormWell — Design Notes

Reference: **Contact Form 08** — `https://colorlib.com/wp/template/contact-form-08/`
Live preview: `https://preview.colorlib.com/theme/bootstrap/contact-form-08/` (HTTP 200, 2,970 B, title `Contact Form 08`, read 2026-10-24)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/contact-form-08.jpg (36,536 B, AVIF 1200 × 972)
Token authority: `theme/bootstrap/contact-form-08/css/style.css?v=ccb2648b` (14,838 B, sha256 `2e79597579e7eabf8694c85a4a5cbc510375ac7229c0984377b6cb055130780e`)
Submit behaviour: `theme/bootstrap/contact-form-08/js/snippet.js?v=6fddec7c` (2,687 B, sha256 `dd02a14fec1238e54e82f2d304951dfcde20e96aa86721f818ca1c02f958f7ab`)
Archive twin: `https://preview.colorlib.com/downloads/free/contact-form-08.zip` (HTTP 200 — this family does ship an archive; its `css/style.css` and `js/snippet.js` hash identically to the live pair)
Shipped: https://formwell.free.componentdock.com

One contact band on a white page and nothing else: a centred 28px heading, then an 83.33%-wide card
whose surface **is** a photograph (a white wall with ivy on its right third), a 58.33% form column
padded 3rem on the photo's left, four white borderless 50px fields under a soft `0 8px 19px -13px`
shadow, 12px/600 uppercase labels in `#000`, and one `#71a95a` "Send Message" button that darkens to
`#5a8947`. It is a snippet, not a page — the demo holds **0 anchors**, no nav and no footer, which is
why the recreation ships the single band plus the credit line.

Provenance note: this brief and `openspec/specs/template-formwell/spec.md` were rewritten on
2026-10-24. The earlier pair recorded ColorLib **"Contact Form V15"** (`/template/contact-form-v15/`,
demo `https://colorlib.com/etc/cf/ContactFrom_v15/index.html`, title `Contact V15`, 12,176 B sheet)
and described a full-page Google Maps `iframe` under a dark overlay, a centred white card with a
banner photo, "Contact Us" / "Feel free to drop us a line below!", Phone and underline fields, a pill
"Submit" arrow button and a `#4cd137`/`#5cb85c` palette (V15's own paint is `#57b846`) — none of
which `apps/formwell` renders or the row's design ever had. The spec ↔ row census listed
`formwell spec=contact-form-v15 rows=contact-form-08`, and its copy adjudication found the app's own
strings exclusively in contact-form-08's body (`Get in touch with us`, `Email Address`, `Send
Message`, `Subject` — c08 1 / 1 / 1 / 2 against v15 0 / 0 / 0 / 0), verdict `SPEC-STALE` in
`docs/spec-row-mismatch.md`. The tokens below are re-measured from the contact-form-08 sheet. The
`[formwell]` row (line **1411**, under `## Contact Form (42)`) already pointed at
`contact-form-08`, so no row moved and no rename is needed (`formwell` ≠ `contact-form-08`, rule 5
holds).

## Document order

| # | band | reference | shipped as |
| --- | --- | --- | --- |
| 1 | centred heading | `<h2 class="heading-section">` "Contact Form #08", 28px, `#000`, 400, `3rem` below | `PageTitle` — `h1` "Formwell" (`App.tsx`) |
| 2 | card | `.wrapper.img` 83.33% wide, 5px radius, `images/img.jpg` as a `cover` background | `ContactCard` — white card, `shadow-md` |
| 2a | form column | `.cl-col-md-9 .cl-col-lg-7` → 58.33% at ≥992px, `3rem` padding | `ContactForm` inside a `flex-1 p-8 md:p-10` column |
| 2b | photograph | the card's own background, visible on the right ~42% | `ContactImage` — `<img>` panel at 40%, hidden below `sm` |
| 3 | — (reference has no footer) | — | `Footer` — Component Dock credit |

Band padding in the reference is `.ftco-section { padding: 7em 0 }` (112px at the 16px body size)
inside a 1140px container; the recreation uses `py-12` inside a 1024px column, which reads the same
at desktop width.

## Typography

The sheet declares **four `@font-face` blocks for Roboto** (400 and 700, `fonts/roboto-{400,700}-latin{,-ext}.woff2`,
`font-display: swap`) and then asks for none of them: `body` and `h2`/`h3` resolve to
`"Poppins", Arial, sans-serif`, the sheet delivers no Poppins, and the page loads no font
stylesheet. So the **declared** face is Poppins and the demo **renders** the Arial fallback (the
screenshot's letterforms are Arial's). The recreation loads Poppins from Google Fonts —
`css2?family=Poppins:wght@300;400;500;600;700&display=swap` — which restores the declared intent.
Never copy the woff2.

| role | face | reference sizes |
| --- | --- | --- |
| band heading | Poppins (declared) | `h2.heading-section` 28px, `#000`, weight 400, centred |
| card heading | Poppins (declared) | `h3` 1.75rem, `#000`, weight 400, line-height 1.5, `1.5rem` below |
| body / fields | Poppins (declared) | `body` 16px, line-height 1.8, `#666666`; fields 16px, `rgba(0,0,0,.8)` |
| labels | Poppins (declared) | 12px, weight 600, uppercase, `#000` |
| button | Poppins (declared) | 14px, weight 400, `#fff` |

## Design tokens (measured from `theme/bootstrap/contact-form-08/css/style.css`, 14,838 B)

Sheet census: `#fff`×11, `#6c757d`×4, `#007bff`×4, `#212529`×3, `#495057`×3, `#000`×3,
`#71a95a`×3, `#0062cc`×2, `#5a8947`×2, `#ced4da`×1, `#80bdff`×1, `#e9ecef`×1, `#0069d9`×1,
`#fcf8e3`×1, `#28a745`×1, `red`×1.

| token | value | role against the reference |
| --- | --- | --- |
| accent | `#71a95a` | `.cl-btn.cl-btn-primary` background + border; the only chromatic a visitor sees |
| accent hover | `#5a8947` | `:hover` / `:focus` of the same button |
| page ground | `#ffffff` | `body` background; the band adds no tint |
| heading / label ink | `#000` | `h2`, `h3`, `.contactForm .label` |
| body ink | `#666666` | second `body` block |
| field ink | `rgba(0,0,0,0.8)` | `#contactForm .cl-form-control` |
| placeholder | `rgba(0,0,0,0.3)` | `.cl-form-control::placeholder` (`!important`) |
| field surface | `#ffffff` | `.cl-form-control` |
| field shadow | `0 8px 19px -13px rgba(0,0,0,.09)` | `.cl-form-control` (`!important`) — the field's only edge |
| button shadow | `0 10px 20px -6px rgba(0,0,0,.12)` → `-0.22` hover | `.cl-btn` |
| success line | `#28a745`, 18px / 500 | `#form-message-success` — `display: none` until a submit resolves |
| warning line | `red` | `#form-message-warning` — same parking |
| card radius | `5px` | `.wrapper` (`overflow: hidden`) |
| field / button radius | `5px` | `.cl-form-control`, `.cl-btn` |
| field height | `50px` | `.cl-form-control` (`textarea` resets to `auto`) |
| card width | `83.33333%` | `.cl-col-lg-10` |
| form column | 58.33% ≥992 · 75% 768–991 · 100% below | `.cl-col-lg-7` / `.cl-col-md-9` |
| card padding | `3rem` ≥768 · `1.5rem` below | `.contact-wrap` |
| band padding | `7em 0` | `.ftco-section` |
| container | 540 / 720 / 960 / 1140 | `.cl-container` breakpoints |
| type scale | 28 / 28 / 16 / 14 / 12 px | heading / `h3` / field / button / label |
| border | none on a field | `.contactForm .cl-form-control { border: none }` |

Reference-only values the app does not paint: `#007bff` / `#0069d9` / `#0062cc` (the reboot's
`.cl-btn-primary` family, superseded by the theme's `!important` green), `#495057`, `#ced4da`,
`#80bdff`, `#e9ecef`, `#212529`, `#6c757d` (reboot defaults the theme overrides), `#fcf8e3`
(`mark`). The green focus rule (`.cl-form-control:focus { border-color: #71a95a !important }`) also
paints nothing: the theme removed the border width and put the shadow behind `!important`, so a
focused field shows no ring at all.

## Deltas the app still carries (fidelity debt, recorded not claimed)

| axis | reference | shipped `apps/formwell` |
| --- | --- | --- |
| photograph | card CSS background bleeding under the 58.33% form column | separate `<img>` panel at 40% beside a white card |
| card shadow | none (only fields and button carry shadows) | `shadow-md` |
| accent | `#71a95a` / `#5a8947` | `#86b574` / `#6d9a5c` — 36 RGB units away |
| field surface | `#ffffff`, 50px, 16px text, 5px radius, soft shadow | `#f7f7f7`, ~40px, 14px text, 2px radius, no shadow |
| placeholder | `rgba(0,0,0,0.3)` | `#999999` |
| label ink | `#000` | `#555555` |
| page ground | `#ffffff` | `#f5f5f5` |
| body ink | `#666666` | `#333333` |
| textarea | `rows="4"` | `rows="5"` |
| band | `7em 0`, 1140px container | `py-12`, 1024px container |
| submit | native `required` / `minlength="5"`, ajax POST, success line 6.6s, red warning | `preventDefault()` only |
| typeface | Poppins declared, Arial rendered | Poppins loaded from Google Fonts |

Closing this table is an implementer change (tests + `scripts/verify-app.sh formwell`), not a prep
one.

## Section-by-section fidelity

### `PageTitle`
- The reference's heading names the snippet ("Contact Form #08"); the recreation substitutes its own
  name — "Formwell" — in that slot, per the new-name rule.
- Reference sizing is 28px / weight 400 / `3rem` below; the app renders `text-2xl md:text-3xl bold`
  with `mb-8`, which is the delta in the table above.

### `ContactCard`
- One white card, `flex`, `rounded`, `shadow-md`, holding the form column and the photo column.
  The reference instead paints the photo as the card's background and floats the form on its left
  58.33%; the app's hard split is the visible difference.
- `ContactImage` hides below `sm`; the reference's photo column never disappears (the form column is
  100% below 768px, so the photo simply shrinks out of view).

### `ContactForm`
- The reference's heading and four-field set ship verbatim — "Get in touch with us", `Full Name` /
  `Email Address` on one row at ≥640px, `Subject`, `Message` — with the reference's own placeholders
  (`Name`, `Email`, `Subject`, `Message`) and uppercase 12px labels.
- The reference's `type="email"` and `required` attributes are kept; `minlength="5"`, the status
  lines and the ajax POST are not implemented yet — see the delta table.
- Submit is inert (`preventDefault()`), matching the reference's "no navigation" behaviour only up
  to the point where it would show feedback.

### `Footer`
- The reference has no footer at all, so the mandatory Component Dock credit is delivered as a
  quiet last line ("More templates at Component Dock") separated by a hairline rule.

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the source's own strings,
  it is what the source renders: the recreation replaces any credit with the Component Dock credit.
- **Provenance ban.** No file under `apps/formwell/` may name the source designer, carry a
  `colorlib.com` URL, or reuse the source template's name — code, comments, CSS, markup, metadata
  and filenames included (AGENTS.md rule 5).
- **Asset ban.** No source image, font or stylesheet is copied; the photograph is a
  `picsum.photos` seeded placeholder and the face comes from Google Fonts.
- **Deploy identity.** `apps/formwell/public/CNAME` = `formwell.free.componentdock.com` and the
  package `homepage` = `https://formwell.free.componentdock.com`.

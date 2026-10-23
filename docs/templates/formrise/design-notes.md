# Formrise — Design Notes & Task Outline

<!-- doc-token-reverify:2026-10-22 -->

> **Tokens re-verified against the live sheet (2026-10-22).** The rows below are the values the reference's own stylesheet paints, quoted with the rule that paints them; the sentence further down that carries the older value is a **screenshot approximation and is superseded** where the two differ.  CSS values are canonical over screenshots (`docs/replication.md`), so build the sheet's value.
>
> Live reference: <https://preview.colorlib.com/theme/bootstrap/contact-form-07/>
>
> | brief says | live sheet paints | evidence |
> | --- | --- | --- |
> | `#e8a838` | `#f39422` | `a{color: #f39422}` |
>
> If the quoted rule belongs to a different ROLE than the line you are building (a footer link's red is not a CTA's fill), read the sheet's own rule for your role instead of substituting across roles.

<!-- /doc-token-reverify -->

<!-- ref-reverify:2026-10-22 -->

> **Reference re-verified live 2026-10-22** —
> `https://preview.colorlib.com/theme/bootstrap/contact-form-07/` answers
> HTTP 200 (13,988 B; `style.css` 17,028 B, sha256 `683de413988c`). Any
> "preview 404 / design from screenshot" note further down is
> **superseded**: take CSS values from the live sheet
> (`docs/replication.md`); the screenshot stays the layout target.

Source: ColorLib Contact Form 07
Preview: https://preview.colorlib.com/theme/contact-form-07/ (404 — design from screenshot)

## Section order (top to bottom)

1. **Page title** — centered "Contact Form #07"
2. **Dark card** — single dark container with two sections
   - Left: form section
   - Right: contact information section
   - Vertical divider between them
3. **Footer** — Component Dock link

## Structure details

### Page title
- Centered text, serif font (Playfair Display), ~24–28px
- Light gray page background (#F5F5F5)

### Dark card (centered, ~70% max-width)
- Dark charcoal background (#343A40)
- Rounded corners (~5px)
- Internal vertical divider (~1px, #4A4A4A)

### Left section — Form (~50%)
- "Write us" heading: serif font (Playfair Display), white, ~24px
- Form fields (underline style — light bottom border on dark bg):
  - Name input (placeholder: "Name")
  - Email input (placeholder: "Email")
  - Subject input (placeholder: "Subject")
  - Message textarea (placeholder: "Message", ~120px tall)
- Input borders: #555555 (light on dark)
- "Send Message" button: orange bg (#E8A838), white text, 3px radius

### Right section — Contact Info (~50%)
- "Contact information" heading: serif font, white, ~18px
- Subtext: "We're open for any suggestion or just to have a chat" — #AAAAAA
- Four contact items, each with:
  - Small icon (white/light gray)
  - Label in bold white + value in lighter gray
  - Items: Address, Phone, Email, Website

## Fidelity notes

- Match the dark card: entire card is dark (not split backgrounds)
- Match the orange button: #E8A838
- Match the vertical divider between form and info
- Match the underline input style with light borders on dark bg
- Match the typography: Playfair Display for headings, Poppins for body
- Match the card rounded corners (~5px)

## Component plan

- `src/App.tsx` — compose page
- `src/components/PageTitle.tsx` — centered page title
- `src/components/DarkCard.tsx` — dark card container with divider
- `src/components/ContactForm.tsx` — form with underline inputs + orange button
- `src/components/ContactInfo.tsx` — heading, subtext, 4 contact items
- `src/components/ContactItem.tsx` — single icon + text row

## Tasks

- [ ] Scaffold app from template-starter
- [ ] Install Google Fonts (Playfair Display + Poppins) in index.html
- [ ] Create PageTitle component
- [ ] Create DarkCard (dark bg, rounded, divider)
- [ ] Create ContactForm (underline inputs + orange button)
- [ ] Create ContactInfo (heading, subtext, 4 items)
- [ ] Create ContactItem (icon + text)
- [ ] Style with Tailwind: dark bg, orange, fonts, responsive
- [ ] Add responsive stacking for mobile
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh
- [ ] Commit + open PR

## Reference tokens (measured 2026-10-23)

Read from the live demo `https://preview.colorlib.com/theme/bootstrap/contact-form-07/`
(HTTP 200, 13,988 B, title `Contact Form 07`) and its single sheet
`css/style.css?v=bc1b3538` (17,028 B, sha256 `683de413988c…`). The slug-only
`/theme/contact-form-07/` path 404s; the `bootstrap/` path is the live page.

| Token | Reference | App (`apps/formrise`) |
| ----- | --------- | --------------------- |
| Form panel | `#272a34` charcoal | `#343a40` (`--color-card-dark`) |
| Info panel | `#1c1e25` near-black | same surface as the form panel (one `bg-card-dark`) |
| Accent / CTA | `#f39422` | `#e8a838` |
| CTA hover | `#d67a0c` | `#d4952e` |
| Page canvas | `#fafafa` | `#f5f5f5` |
| Body copy | `#666666` | `#aaaaaa` on the dark card |
| Panel headings | Poppins 400, white | Playfair Display serif bold ← no serif face in the reference |
| Card radius | `10px` | `5px` (`rounded-[5px]`) |
| Card shadow | `0 21px 41px -13px rgba(0,0,0,0.18)` | `shadow-lg` |
| Inputs | `height: 52px`, bottom border `rgba(255,255,255,0.2)` | underline border `#555555` |
| Button | radius `2px`, shadow `0 10px 20px -6px rgba(0,0,0,0.12)` | radius `3px`, no shadow |
| Info icons | 50×50 circle, `rgba(255,255,255,0.02)` plate, white 20px glyph | circle ✓ |

Bootstrap-4 leftovers (`#007bff`, `#6c757d`, `#212529`, `#495057`, `#0062cc`) are
overridden by the `cl-` layer and are **not** design tokens.

Section order measured in the reference DOM: `h2 ("Contact Form #07")` →
`.wrapper` [left `.contact-wrap #272a34` (`h3 "Write us"`, Name/Email/Subject/
Message, `Send Message`) | right `.info-wrap #1c1e25` (`h3 "Contact information"`,
"We're open for any suggestion or just to have a chat", Address / Phone / Email /
Website)] → end. No reference footer; ours appends the Component Dock footer.

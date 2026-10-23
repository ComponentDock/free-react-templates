# Formdrop — Design Notes & Task Outline

<!-- ref-reverify:2026-10-22 -->

> **Reference re-verified live 2026-10-22** —
> `https://preview.colorlib.com/theme/bootstrap/contact-form-04/` answers
> HTTP 200 (13,939 B; `style.css` 17,693 B, sha256 `e7a78fbcb3f9`). Any
> "preview 404 / design from screenshot" note further down is
> **superseded**: take CSS values from the live sheet
> (`docs/replication.md`); the screenshot stays the layout target.

Source: ColorLib Contact Form 04
Preview: https://preview.colorlib.com/theme/contact-form-04/ (404 — design from screenshot)

## Section order (top to bottom)

1. **Page title** — centered "Contact Form #04" above the card
2. **Two-column card**
   - Left: form panel (purple bg)
   - Right: contact info panel (white bg)
3. **Footer** — Component Dock link

## Structure details

### Page title
- Centered text, serif font (Playfair Display), ~24–28px
- Light gray page background (#F5F5F5)

### Left panel — Form (purple, ~45% width)
- Deep purple background (#6C63FF), white text
- "Send us a message" heading: serif font, white, ~22px
- Form fields (underline style — bottom border only, light on purple):
  - Name input (placeholder: "Name")
  - Email input (placeholder: "Email")
  - Subject input (placeholder: "Subject")
  - Message textarea (placeholder: "Message", ~120px tall)
  - All fields stacked vertically (no side-by-side)
- "Send Message" button: pink/magenta bg (#E91E63), white text, 3px radius

### Right panel — Contact Info (white, ~55% width)
- White background
- "Contact us" heading: serif font, dark, ~22px, with a short pink underline decoration
- Subtext: "We're open for any suggestion or just to have a chat" — gray, smaller
- Four contact items, each with:
  - Circular gray icon container (~40px)
  - Icon in dark gray (map pin, phone, paper plane, globe)
  - Label in bold dark + value in regular gray
  - Items: Address, Phone, Email, Website

## Fidelity notes

- Match the purple color: #6C63FF for form panel
- Match the pink accent: #E91E63 for button and heading underline
- Match the heading underline decoration on "Contact us"
- Match the vertical stacking of all form fields (no side-by-side)
- Match the underline input style with light borders on purple
- Match the gray circular icon containers on the info side
- Match the typography: Playfair Display for headings, Poppins for body

## Component plan

- `src/App.tsx` — compose page
- `src/components/PageTitle.tsx` — centered page title
- `src/components/ContactCard.tsx` — two-column card wrapper
- `src/components/ContactForm.tsx` — form with underline inputs + pink button
- `src/components/ContactInfo.tsx` — white info panel with heading, subtext, 4 items
- `src/components/ContactItem.tsx` — single icon + text row
- `src/components/HeadingUnderline.tsx` — pink underline decoration component

## Tasks

- [ ] Scaffold app from template-starter
- [ ] Install Google Fonts (Playfair Display + Poppins) in index.html
- [ ] Create PageTitle component
- [ ] Create ContactCard layout (two columns)
- [ ] Create ContactForm (underline inputs + pink button, all stacked)
- [ ] Create ContactInfo (white panel, heading with underline, subtext, 4 items)
- [ ] Create ContactItem (gray icon circle + text)
- [ ] Create HeadingUnderline (pink decoration)
- [ ] Style with Tailwind: purple, pink, fonts, responsive
- [ ] Add responsive stacking for mobile
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh
- [ ] Commit + open PR

## Reference tokens (measured 2026-10-23)

Read from the live demo `https://preview.colorlib.com/theme/bootstrap/contact-form-04/`
(HTTP 200, 13,939 B, title `Contact Form 04`) and its single sheet
`css/style.css?v=9be41b33` (17,693 B, sha256 `e7a78fbcb3f9…`). The slug-only
`/theme/contact-form-04/` path 404s — always re-probe the `bootstrap/` path.

| Token | Reference | App (`apps/formdrop`) |
| ----- | --------- | --------------------- |
| Form panel | 135° gradient `#7f279c → #2e279d` | flat `#6c63ff` (`--color-brand-purple`) |
| Accent / CTA | `#d62196` | `#e91e63` (`--color-brand-pink`) |
| CTA hover | `#aa1a77` | `#c2185b` |
| Page canvas | `#fafafa` | `#f5f5f5` |
| Body copy | `#666666` | `#333333` |
| Panel headings | Poppins 400 | **Playfair Display serif 700** ← no serif face in the reference |
| Page title | Poppins 28px 400 | Playfair Display 2xl/3xl bold |
| Info icon | 50×50, 1px `rgba(0,0,0,0.05)` ring, `#000` glyph 20px | 48×48 (`h-12 w-12`), filled `#e0e0e0` |
| Info underline | 60×3 `#d62196` | `h-1 w-12` (48×4) `#e91e63` |
| Inputs | `height: 52px`, bottom border `rgba(255,255,255,0.2)` → focus `0.5` | underline ✓, `py-2` (~40px) |
| Button | radius `5px`, `12px 16px`, shadow `0 10px 20px -6px rgba(0,0,0,0.12)` | radius `3px`, no shadow |
| Card shadow | `0 21px 41px -13px rgba(0,0,0,0.18)` | `shadow-md` |

Bootstrap-4 leftovers in the sheet (`#007bff`, `#6c757d`, `#212529`, `#495057`,
`#0062cc`, `#80bdff`, `#ced4da`, `#e9ecef`) are overridden by the `cl-` layer and
are **not** design tokens.

Section order measured in the reference DOM: `h2 ("Contact Form #04")` →
`.wrapper` [7-col gradient form panel (`h3 "Send us a message"`, Name/Email/
Subject/Message, `Send Message`) | 5-col white info panel (`h3 "Contact us"`,
"We're open for any suggestion or just to have a chat", Address / Phone / Email /
Website)] → end. No reference footer; ours appends the mandatory Component Dock
footer.

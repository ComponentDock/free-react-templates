# Formcatch — Design Notes & Task Outline

<!-- ref-reverify:2026-10-22 -->

> **Reference re-verified live 2026-10-22** —
> `https://preview.colorlib.com/theme/bootstrap/contact-form-03/` answers
> HTTP 200 (14,195 B; `style.css` 16,560 B, sha256 `9f28e79f2e1f`). Any
> "preview 404 / design from screenshot" note further down is
> **superseded**: take CSS values from the live sheet
> (`docs/replication.md`); the screenshot stays the layout target.

Source: ColorLib Contact Form 03
Preview: https://preview.colorlib.com/theme/contact-form-03/ (404 — design from screenshot)

## Section order (top to bottom)

1. **Page title** — centered "Contact Form #03"
2. **Info bar** — horizontal row of 4 contact items with teal circular icons
3. **Two-column card**
   - Left: form panel (white bg)
   - Right: image panel (full-height placeholder)
4. **Footer** — Component Dock link

## Structure details

### Page title
- Centered text, serif font (Playfair Display), ~24–28px
- Light gray page background (#F5F5F5)

### Info bar
- Horizontal row, 4 items evenly spaced
- Each item: circular teal icon (~50px) above text
  - Label (bold, dark) + value (teal colored, smaller)
  - Items: Address, Phone, Email, Website
- Icons: white icon on teal (#7EC8E3) circle

### Two-column card — Form (white, ~50% width)
- White background
- "Contact Us" heading: serif font, dark, ~22px
- Form fields (underline style — bottom border only):
  - Row 1: FULL NAME + EMAIL ADDRESS (side by side, 50/50)
  - Row 2: SUBJECT (full width)
  - Row 3: MESSAGE (full width, ~120px tall)
  - Row 4: Send Message button (teal bg, white text, 3px radius)
- Labels: uppercase, small, dark/medium gray

### Two-column card — Image (right, ~50% width)
- Full-height image filling the right column
- Use `https://picsum.photos/seed/formcatch-1/600/600` as placeholder
- Original shows a B&W cat photo — use a similar portrait-style image

## Reference tokens (measured 2026-10-23)

Read from the live demo `https://preview.colorlib.com/theme/bootstrap/contact-form-03/`
(HTTP 200, 14,195 B, title `Contact Form 03`) and its single sheet
`css/style.css?v=3656ea60` (16,560 B, sha256 `9f28e79f2e1f`). The slug-only
`/theme/contact-form-03/` path 404s — always re-probe the `bootstrap/` path.

| Token | Reference | App (`apps/formcatch`) |
| ----- | --------- | ---------------------- |
| Brand | `#46b5d1` | `#7ec8e3` (screenshot-derived, too light) |
| Brand hover | `#2d9bb7` | `#5fb8d8` |
| Page canvas | `#fafafa` | `#f5f5f5` |
| Body copy | `#666666` | `#333333` |
| Headings / labels | `#000` | `#333333` |
| Card | `#fff` | `#fff` |
| Success message | `#28a745` | n/a |
| Body font | `"Poppins", Arial, sans-serif` 16px/1.8 | Poppins (`index.html` link) |
| Heading font | Poppins, 28px, weight 400 | **Playfair Display serif, bold** ← only structural gap |
| Labels | 12px, 600, uppercase | uppercase ✓ |
| Info icon | 60×60, `border-radius: 50%`, teal fill, 20px white glyph | 48×48 (`h-12 w-12`) |
| Inputs | underline only, `border-bottom: 1px solid rgba(0,0,0,0.1)`, focus `#46b5d1` | underline ✓ |
| Button | `12px 16px`, radius `5px`, 14px, shadow `0 10px 20px -6px rgba(0,0,0,0.12)` | `3px` radius, no shadow |
| Band rhythm | `.ftco-section` `padding: 7em 0` | ~`py-16`-ish, looser |

Bootstrap-4 leftovers in the sheet (`#007bff`, `#6c757d`, `#212529`, `#495057`,
`#0062cc`, `#ced4da`, `#e9ecef`, …) are overridden by the teal `!important`
layer and are **not** design tokens.

Section order measured in the reference DOM: `h2 ("Contact Form #03") → 4-up
info bar (.dbox ×4) → 7/5 card (white form panel + CSS-background photo) → end`
— the reference has no footer; ours appends the mandatory Component Dock footer.

## Fidelity notes

- Match the info bar layout: 4 items in a horizontal row with circular icons
- Match the teal color: #7EC8E3 for icons, button, and link accents
- Match the two-column card: form left, image right
- Match the underline input style (no border boxes)
- Match the uppercase labels above inputs
- Match the typography: Playfair Display for headings, Poppins for body
- Image panel should fill the full height of the card

## Component plan

- `src/App.tsx` — compose page
- `src/components/PageTitle.tsx` — centered page title
- `src/components/InfoBar.tsx` — horizontal row of 4 contact items
- `src/components/InfoBarItem.tsx` — single icon + text in info bar
- `src/components/ContactCard.tsx` — two-column card wrapper
- `src/components/ContactForm.tsx` — form with underline inputs + button
- `src/components/ImagePanel.tsx` — right column with placeholder image

## Tasks

- [ ] Scaffold app from template-starter
- [ ] Install Google Fonts (Playfair Display + Poppins) in index.html
- [ ] Create PageTitle component
- [ ] Create InfoBar (horizontal row, 4 items)
- [ ] Create InfoBarItem (circular icon + text)
- [ ] Create ContactCard (two columns: form + image)
- [ ] Create ContactForm (underline inputs + button)
- [ ] Create ImagePanel (placeholder image filling height)
- [ ] Style with Tailwind: colors, fonts, responsive
- [ ] Add responsive stacking for mobile
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh
- [ ] Commit + open PR

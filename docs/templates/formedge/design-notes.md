# Formedge — Design Notes & Task Outline

<!-- docs-drift:2026-10-22 -->
> **⚠ Reference re-read 2026-10-22 — this brief is stale below.**
> The spec (`openspec/specs/template-formedge/spec.md`, section
> **Live reference restored**) is the contract and is canonical over this
> file: `docs/replication.md` — CSS values are canonical over screenshots.
>
> - **Reference is live:** `https://preview.colorlib.com/theme/bootstrap/contact-form-10/` answers **HTTP 200**
>   today; the 404 / "design from screenshot" wording below is the
>   prep-time state. Read section order and markup from the live page.
>
> - **Do not build** these screenshot samples — the live sheet paints
>   no such colour; take the spec's live palette instead:
>   `#4a90d9`.
>
> Where the live design differs materially from the notes below (a few
> designs were re-skinned), build what the spec describes.
<!-- /docs-drift -->

Source: ColorLib Contact Form 10
Preview: https://preview.colorlib.com/theme/contact-form-10/ (404 — design from screenshot)

## Section order (top to bottom)

1. **Background image** — full-width dark city skyline
2. **Title** — centered "Contact Form #10" (white on dark image)
3. **Two-column content** (overlaid on background)
   - Left: contact info (white text/icons on dark image)
   - Right: white form card (overlaid)
4. **Footer** — Component Dock link

## Structure details

### Background
- Full-width image covering the viewport height
- Dark city skyline (dark blue/purple tones)
- Use `https://picsum.photos/seed/formedge-bg/1920/1080` as placeholder

### Page title
- Centered text, serif font (Playfair Display), white, ~28px
- Positioned at the top of the background image

### Left section — Contact Info (on dark bg, ~40% width)
- "Contact us" heading: serif, white, ~24px
- Four contact items vertically stacked:
  - Icon (white) + LABEL (uppercase, white, bold) + value text
  - Address, Phone, Email, Website

### Right section — Form (white card, ~60% width)
- White background, rounded corners (~5px), subtle box shadow
- "Get in touch" heading: serif, dark, ~22px
- Form fields (bordered box style):
  - Name input
  - Email input
  - Subject input
  - Message textarea (tall)
- "Send Message" button: blue bg (#4A90D9), white text, 3px radius

## Fidelity notes

- Match the full-width background image layout
- Match the white form card overlaid on the dark background
- Match the contact info on the dark background (white text/icons)
- Match the blue button: #4A90D9
- Match the card shadow and rounded corners
- Match the typography: Playfair Display for headings, Poppins for body

## Component plan

- `src/App.tsx` — compose page (background image container)
- `src/components/PageTitle.tsx` — centered white title
- `src/components/ContactInfo.tsx` — heading + 4 items on dark bg
- `src/components/ContactItem.tsx` — icon + label + value
- `src/components/ContactCard.tsx` — white card wrapper with shadow
- `src/components/ContactForm.tsx` — bordered inputs + blue button

## Tasks

- [ ] Scaffold app from template-starter
- [ ] Install Google Fonts (Playfair Display + Poppins) in index.html
- [ ] Set background image in CSS
- [ ] Create PageTitle component
- [ ] Create ContactInfo (heading + 4 items)
- [ ] Create ContactItem (icon + label + value)
- [ ] Create ContactCard (white card with shadow)
- [ ] Create ContactForm (bordered inputs + blue button)
- [ ] Style with Tailwind: blue, fonts, responsive
- [ ] Add responsive stacking for mobile
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh
- [ ] Commit + open PR

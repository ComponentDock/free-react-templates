# DarkRelay — Prep Notes

**Source:** ColorLib Contact Form 07
**Slug:** contact-form-07
**Preview:** https://preview.colorlib.com/theme/contact-form-07/ (404 at prep time)
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/contact-form-07.jpg
**Prep date:** 2026-09-17

## Reference status

- Preview URL: **404** — design tokens extracted from screenshot pixel analysis
  (AVIF image 1200×972)
- ColorLib page description: "A powerful and easy to use free dark contact form
  template that uses Bootstrap Framework, which makes it mobile-ready. It rocks
  two sections, one for the form and the other for the contact information."

## Section structure (order)

1. **Page wrapper** — light gray (#FAFAFA) background, centered card
2. **Two-column card** — rounded corners, full-width on desktop, split 50/50
3. **Left column (Contact Info)** — dark blue-gray (#272A33) background
   - Heading text
   - Address line with orange icon
   - Phone line with orange icon
   - Email line with orange icon
4. **Right column (Contact Form)** — very dark (#1D1E23) background
   - Heading text
   - Name input (dark bg, light text)
   - Email input (dark bg, light text)
   - Subject input (dark bg, light text)
   - Message textarea (dark bg, light text)
   - "Send Message" button (orange #E89A41, white text, rounded)
5. **Footer** — Component Dock link

## Design token notes

- Page bg: #FAFAFA (almost white)
- Card left: #272A33 (dark blue-gray)
- Card right: #1D1E23 (very dark, nearly black)
- Accent: #E89A41 (warm orange/amber) — used on icons and CTA button
- Text on dark: white (#FFFFFF) for headings, light gray for body
- Input bg: #2C2D31 (slightly lighter than card bg for contrast)
- Button: solid orange bg, white text, rounded corners (~4px), padding
- No gradient backgrounds — solid dark fills only
- Typography: system sans-serif stack (Bootstrap default)

## Fidelity notes

- Match the two-column split exactly (50/50 on desktop)
- Card should have visible rounded corners
- Orange icons should be inline with text, not in separate containers
- Form inputs should have dark backgrounds with visible borders
- Button should be full-width or wide within the form column
- Mobile: columns stack vertically, form below contact info
- Keep the dark aesthetic consistent — no light form backgrounds

## Task outline for implementer

1. Create `apps/darkrelay/` (copy simplest existing app, rename package)
2. Create `src/components/ContactInfo.tsx` (left column)
3. Create `src/components/ContactForm.tsx` (right column)
4. Create `src/App.tsx` (page layout with two-column card)
5. Set `src/index.css` theme tokens (dark colors, accent)
6. Write tests (Vitest + Testing Library) — 100% coverage
7. Verify: `npm run verify:app darkrelay`
8. Commit, push, open PR, merge

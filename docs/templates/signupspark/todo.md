# Signupspark — Implementation Outline

**Source:** ColorLib Modal 16
**Preview:** https://preview.colorlib.com/theme/bootstrap/modal-16/
**New name:** `signupspark`
**App folder:** `apps/signupspark`

## Structure Order (Section-by-Section)

1. **Page layout** — Full viewport centered content with heading + launch button
2. **Launch button** — Secondary styled button ("Launch modal") centered on page
3. **Modal overlay/backdrop** — Dark semi-transparent backdrop behind modal
4. **Modal container** — Centered dialog with 7px border-radius, deep shadow
5. **Split-screen layout** — Flex row: left image (50%) + right form (50%)
6. **Promotional image** — Background image column (50% width, cover/center)
7. **Form heading** — "Registration form" h3 (black, 22px, Roboto)
8. **Description paragraph** — Gray paragraph text below heading
9. **Country dropdown** — Full-width custom-select with country list
10. **Full Name input** — Text input with shadow
11. **Email Address input** — Email input with shadow
12. **Date of Birth row** — 3-column grid: MM / DD / YYYY text inputs
13. **Sign up button** — Full-width primary button
14. **Privacy note** — Small gray text with link to privacy policy
15. **Footer** — Site name + Component Dock link

## Design Fidelity Notes

### Layout
- Split-screen: flex row with left image (flex: 0 0 50%) and right form (50%)
- On mobile: stack vertically (flex-column)
- Modal is centered vertically and horizontally in viewport

### Colors
- Page/modal background: #efefef (light gray)
- Heading text: #000 (black)
- Paragraph text: #777 (gray)
- Button: Bootstrap primary blue (#007bff)
- Form control shadow: rgba(0,0,0,0.2)
- Privacy note: #999, privacy link: #555 bold

### Typography
- Font family: Roboto (300 weight for body, default for headings)
- Heading h3: 22px
- Paragraph: 14px

### Form Controls
- Borderless inputs with subtle box-shadow (0 1px 3px 0 rgba(0,0,0,0.2))
- Custom select: same shadow treatment
- Date of Birth: 3-column grid layout (col-md-4 each)

### Buttons
- Launch button: secondary style, px-4 py-3
- Sign up button: primary, full-width (btn-block), py-10px

### Modal
- Border-radius: 7px
- Shadow: 0 10px 50px -10px rgba(0,0,0,0.9)
- Overflow: hidden
- Background: transparent border, #efefef body

### Responsive
- Modal stacks vertically on small screens
- Date of Birth row stacks on small screens
- Image column hides or stacks on very small screens

## Key Implementation Details

1. Use a React modal pattern (dialog element or portal-based overlay)
2. Country dropdown can use a static list of ~200 countries
3. Form validation: email format, required fields
4. Focus trap: cycle tab/shift-tab through modal focusable elements
5. Focus restoration: save trigger button ref, restore on close
6. Close on: X button, backdrop click, Escape key
7. Animation: fade-in on open (CSS transition)
8. Placeholder image: `https://picsum.photos/seed/signupspark/600/800`
9. Footer must link to https://www.componentdock.com/
10. No ColorLib references in app code (provenance only in spec)

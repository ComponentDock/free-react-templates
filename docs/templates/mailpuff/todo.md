# Mailpuff — Prep Notes

**Source:** ColorLib "Modal 08"
**Slug:** `modal-08`
**Preview URL:** `https://preview.colorlib.com/theme/bootstrap/modal-08/`
**Category:** Bootstrap Modal Templates
**Date prepped:** 2026-09-06

## Structure order (section-by-section)

1. **Full-page centered section** — White background, vertically centered
   content with heading "Mailpuff" and a primary "Launch Mailpuff" button.
   This is the background page that triggers the modal.

2. **Modal overlay** — Semi-transparent backdrop covering the full viewport
   when modal is open.

3. **Modal dialog** — Vertically centered, max-width 600px, no border, drop
   shadow (`0px 10px 34px -15px rgba(0,0,0,0.24)`).

4. **Modal header (gradient)** — 230px tall with `linear-gradient(45deg,
   #915eff, #ff8e59)` background. Two white angular skew cuts at the bottom
   (`::before` with `skewY(10deg)`, `::after` with `skewY(-10deg)`), each
   50% width and 60px tall.

5. **Close button** — Absolute positioned top-right of the header, 40×40px,
   white × character.

6. **Modal body (overlap)** — Negative top margin (-180px) to overlap the
   gradient header. Contains:
   - Circular icon container (200×200px, `border-radius: 50%`) with SVG
     email/envelope icon
   - "You've Got Mail!" heading (h2, `font-weight: 700`, white)
   - "We sent confirmation link to:" subtext (h4, 18px)
   - Email address display (h3, 22px, `font-weight: 800` for name, 300 for @)

## Component tree

```
App
├── LaunchSection
│   ├── heading "Mailpuff"
│   └── button "Launch Mailpuff" → opens modal
└── ConfirmationModal
    ├── overlay (backdrop)
    └── modal-dialog
        ├── modal-header
        │   ├── gradient background
        │   ├── skew cuts (::before / ::after)
        │   └── close button (×)
        └── modal-body
            ├── icon-container (circle + SVG)
            ├── h2 "You've Got Mail!"
            ├── h4 "We sent confirmation link to:"
            └── h3 "johndoe@gmail.com"
```

## Design token notes for implementer

- Gradient: use `bg-gradient-to-br from-[#915eff] to-[#ff8e59]` or inline
  style `linear-gradient(45deg, #915eff, #ff8e59)`.
- Skew cuts: use Tailwind `before:` / `after:` pseudo-elements with
  `skew-y-[-10deg]` / `skew-y-[10deg]`, absolute positioned, white bg.
- Icon circle: `w-[200px] h-[200px] rounded-full bg-white flex items-center
  justify-center mx-auto mb-2.5`.
- Modal shadow: `shadow-[0px_10px_34px_-15px_rgba(0,0,0,0.24)]`.
- Font: load Poppins via Google Fonts link in `index.html`.
- Body overlap: `mt-[-180px]` on the modal body.
- Close button: `absolute top-0 right-0 w-10 h-10 flex items-center
  justify-center text-white z-10`.
- No ColorLib references in app code — provenance is in the spec only.

## Fidelity notes

- Match section structure 1:1: centered page → modal dialog.
- Match the gradient colors exactly (#915eff purple, #ff8e59 orange, 45deg).
- Match the skew cut geometry: two 50%-width pseudo-elements, 60px tall,
  white background, 10deg/-10deg skew.
- Match modal dimensions: max-width 600px, header 230px height, icon
  200×200px circle.
- Match typography: Poppins weights 300 (light, @ symbol), 700 (heading),
  800 (email address).
- Match the negative margin overlap (-180px) between header and body.
- Match the close button: white × in top-right, 40×40px.
- Match the drop shadow on `.modal-content`.
- Use placeholder images: `https://picsum.photos/seed/mailpuff-<n>/<w>/<h>`
  if any imagery is needed.
- Footer MUST link `https://www.componentdock.com/` ("Component Dock").

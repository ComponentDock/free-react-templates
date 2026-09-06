# Modalbloom — Implementation Notes

Source: ColorLib Modal 18
Preview: https://preview.colorlib.com/theme/bootstrap/modal-18/
New name: modalbloom (replaces "Modal 18")

## Section Order

1. **Page container** — full viewport height, vertically + horizontally centered
2. **Heading** — "Modalbloom" or similar title
3. **Launch button** — Bootstrap secondary style, px-4 py-3, centered
4. **Modal dialog** — centered, white background, 7px border-radius, deep shadow
   - **Illustration area** — 50% width left column, light cyan (#b2fcff) background, undraw-style SVG placeholder
   - **Text content** — right column
     - Heading: "Introducing Work from Anywhere" (22px, Poppins, weight 900)
     - Description paragraph (14px, weight 300, #777)
     - Button row: "No thanks" (link style, gray) + "Get the app" (primary blue)
5. **Footer** — Component Dock link

## Design Fidelity Notes

- **Fonts:** Body uses Roboto (sans-serif); modal interior uses Poppins. Load both via Google Fonts `<link>` in `index.html`.
- **Modal shadow:** The signature deep shadow `0 10px 50px -10px rgba(0,0,0,0.9)` is critical to the look.
- **Image placeholder:** Use `https://picsum.photos/seed/modalbloom/400/400` or a similar placeholder; set `background-color: #b2fcff` on the container.
- **Button styles:** Launch button uses Bootstrap secondary (gray). Modal buttons: "No thanks" as text/link button (gray), "Get the app" as primary blue (#007bff). Both have 4px border-radius.
- **Layout:** The modal uses flexbox with the image at `flex: 0 0 50%` and text filling the rest. On mobile, should stack vertically.
- **Modal behavior:** Standard Bootstrap modal fade-in animation. Close via X, backdrop click, Escape key, or "No thanks" link.
- **No border on modal-content:** The original uses `border: none` on `.modal-content`.
- **Screenshot fallback:** The preview screenshot URL returned AVIF format and could not be visually analyzed; design is based on DOM + CSS analysis only.

## Implementation Checklist

- [ ] Create app folder `apps/modalbloom` (copy from simplest modal template)
- [ ] Set up `package.json` with `@free-react-templates/modalbloom`
- [ ] Add Google Fonts link for Roboto + Poppins in `index.html`
- [ ] Build page container with full-viewport centering
- [ ] Build launch button (secondary style)
- [ ] Build modal component with fade-in animation
- [ ] Build modal illustration area (50% width, #b2fcff bg, placeholder image)
- [ ] Build modal text content (heading, paragraph, buttons)
- [ ] Implement modal close behaviors (X, backdrop, Escape, cancel link)
- [ ] Implement focus trap and focus restoration
- [ ] Add Component Dock footer link
- [ ] Write tests for all behaviors (TDD)
- [ ] Verify 100% coverage
- [ ] Run `npm install` at repo root for lockfile registration

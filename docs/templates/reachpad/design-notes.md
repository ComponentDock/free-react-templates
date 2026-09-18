# Reachpad — Design Notes & Task Outline

Source: ColorLib Contact Form 08
Preview: https://preview.colorlib.com/theme/bootstrap/contact-form-08/

## Section order (top → bottom)

1. **Page heading** — centered text "Get in touch with us" (or paraphrased)
2. **Image wrapper** — full-width container with background image (use picsum.photos placeholder), rounded corners (5px)
3. **Form card** — white card overlay on the left side of the wrapper, containing:
   - "Get in touch with us" heading
   - Success/warning message slots (hidden by default)
   - Form with: Full Name + Email (2-col row), Subject (full), Message (full textarea), Send Message button

## Fidelity notes

### Typography
- Original: Poppins, 400 weight body, 500 weight headings
- Map to: Tailwind `font-sans` with Poppins loaded via Google Fonts link in index.html
- Headings: text-black, font-weight 400
- Body: text-[#666666], line-height 1.8

### Colors
- Brand green: #71a95a → define as `--color-brand` in @theme
- Brand hover: #5a8947 → use on hover states
- Body text: #666666
- Headings/labels: #000000
- Page bg: white

### Form styling
- Inputs: height 50px, border-radius 5px, no border, subtle box-shadow
- Input placeholder: rgba(0,0,0,0.3)
- Input focus: border-color brand green
- Labels: uppercase, 12px, font-weight 600, black
- Textarea: auto-resize vertically

### Button
- Background: #71a95a, text: white
- Border-radius: 5px
- Padding: 12px 16px
- Shadow: 0px 10px 20px -6px rgba(0,0,0,0.12)
- Hover: darken to #5a8947, deeper shadow

### Wrapper/Card
- Full-width container (max-w-7xl centered)
- Background image: picsum.photos/seed/reachpad-bg/1200/600
- Border-radius: 5px
- Form card sits inside, on the left 60%, white background, padding 2rem

### Responsive
- Desktop (≥768px): 2-column layout for Name+Email
- Mobile (<768px): single column, form fills width

### Footer
- Must link to https://www.componentdock.com/
- "Made with Component Dock" or similar

## Tasks

- [ ] Create apps/reachpad/ from template starter
- [ ] Set up index.html with Google Fonts (Poppins) link
- [ ] Define brand tokens in src/index.css @theme
- [ ] Build App.tsx with Heading + ImageWrapper + FormCard sections
- [ ] Build FormCard component with all fields
- [ ] Style with Tailwind classes matching design tokens
- [ ] Add responsive breakpoint (stack columns on mobile)
- [ ] Add input focus state (green border)
- [ ] Add button hover state (darker green)
- [ ] Add placeholder background image via picsum.photos
- [ ] Footer with Component Dock link
- [ ] Write Vitest tests (all scenarios from spec)
- [ ] Ensure 100% test coverage
- [ ] Typecheck + lint pass

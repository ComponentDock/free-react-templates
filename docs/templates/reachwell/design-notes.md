# Reachwell — Design Notes & Task Outline

Source: ColorLib Contact Form V10
Preview: https://colorlib.com/etc/cf/ContactFrom_v10/index.html
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v10.jpg

## Section order (top to bottom)

1. **Full-viewport centered form** — no header, no nav, just the form
2. **Footer** — Component Dock link

## Structure details

### Page background
- Full viewport light gray (#f2f2f2)
- Flexbox centering both horizontally and vertically

### Form container
- 550px wide, transparent background
- Top/bottom padding: 50px top, 160px bottom (room for footer)

### Form title
- "Send Us A Message" — centered, uppercase, 30px
- Dark purple (#403866), Ubuntu-Bold font
- 49px bottom padding

### Input fields (4 total)
All fields share the same pill-shaped style:
- White background, 31px border-radius (pill)
- 62px height, 35px horizontal padding
- 18px font, Ubuntu-Bold, #8f8fa1 text color
- Placeholder color: #bdbdd3
- 16px margin-bottom between fields
- Focus animation: expands 20px wider (calc(100% + 20px)) with 0.4s transition

Fields in order:
1. Full Name (text input)
2. E-mail (text input)
3. Phone (text input)
4. Your Message (textarea, min-height 169px, 19px top padding)

### Submit button
- Centered below the textarea
- 62px height, min-width 150px, 31px border-radius
- Transparent background with a purple-blue (#827ffe) pseudo-element behind it
- White uppercase text, 16px, Ubuntu-Bold
- Paper plane icon + "Send" label
- Hover: expands 20px wider, background shifts to dark purple (#403866)
- 0.4s transition on hover

### Validation errors
- Tooltip-style bubble appearing to the right of the field
- White background, red border (#c80000), 14px border-radius
- Red text (#c80000), 13px, Ubuntu-Bold
- Warning icon (FontAwesome) on the right
- Visible on hover over the errored field, always visible on mobile

## Fidelity notes

- Match the pill-shaped inputs (31px border-radius is critical to the look)
- Match the focus expansion animation (inputs widen on focus)
- Match the button's pseudo-element technique (transparent btn, colored bg behind)
- Match the button hover expansion
- Match the validation tooltip style (positioned to the right, hover-revealed)
- Use Ubuntu-Bold from Google Fonts (not a custom @font-face)
- Match the exact colors: #f2f2f2 bg, #403866 title, #827ffe button, #8f8fa1 input text
- Match the 550px form width and 62px input height
- Match the 49px bottom padding on the title
- The original uses jQuery animations; replace with CSS transitions + React state

## Component plan

- `src/App.tsx` — compose page with centered form + footer
- `src/components/ContactForm.tsx` — form container with title, fields, button
- `src/components/FormInput.tsx` — pill-shaped input with focus animation
- `src/components/FormTextarea.tsx` — pill-shaped textarea with focus animation
- `src/components/SubmitButton.tsx` — pill-shaped button with hover animation
- `src/components/ValidationTooltip.tsx` — error tooltip bubble

## Tasks

- [ ] Scaffold app from template-starter
- [ ] Install Google Font (Ubuntu) in index.html
- [ ] Create ContactForm component (title + fields + button layout)
- [ ] Create FormInput component (pill shape + focus expansion)
- [ ] Create FormTextarea component (pill shape + focus expansion)
- [ ] Create SubmitButton component (purple pseudo-bg + hover expansion)
- [ ] Create ValidationTooltip component (red bubble + icon)
- [ ] Implement client-side validation (name, email, phone, message required)
- [ ] Style with Tailwind: colors, fonts, pill shapes, animations
- [ ] Add responsive behavior for mobile
- [ ] Add footer with Component Dock link
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh
- [ ] Commit + open PR

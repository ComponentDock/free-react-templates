# FormWell — Design Notes & Task Outline

Source: ColorLib Contact Form V15
Preview: https://preview.colorlib.com/theme/contact-form-v15/ (404 — design from screenshot)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v15.jpg

## Section order (top to bottom)

1. **Full-page map background** — Google Maps tiles with dark semi-transparent overlay
2. **Centered white card**
   - Banner image (person with laptop, dark overlay, "Contact Us" heading + subheading)
   - Form fields: Full Name, Email, Phone, Message (underline-style inputs)
   - Submit button (green rounded pill)
3. **Footer** — Component Dock link

## Structure details

### Map background
- Full-viewport background, Google Maps style (dark tiles with street names visible)
- Dark overlay (rgba(0,0,0,0.5)) to make the white card pop
- In React: use a static map image from a placeholder service or a CSS background
  with dark gradient overlay

### Centered card
- White background (#ffffff)
- Centered horizontally and vertically (flex + min-h-screen)
- Box shadow for depth (~0 10px 30px rgba(0,0,0,0.2))
- Max width ~450-500px
- Border-radius: slight rounding (~4-8px)

### Banner image section
- Top of card: background image (person with laptop)
- Dark overlay on the image
- "Contact Us" heading: white, bold, centered, ~28-32px
- "Feel free to drop us a line below!" subheading: white, ~14px, centered below heading
- Padding: ~30-40px top/bottom

### Form fields
- Vertical stack of 4 fields
- Each field:
  - Label on the left side (e.g. "Full Name:", "Email:", "Phone:", "Message:")
  - Input to the right with placeholder text
  - Bottom border only (underline style, ~1px solid #ddd)
  - No box border, no background
- Labels: dark gray, normal weight, ~14px
- Placeholders: light gray (#aaa)
- Padding: ~15px between fields
- Message field: textarea, taller (~80-100px)

### Submit button
- Green background (#4cd137 or similar bright green)
- White text "Submit" + arrow icon (→)
- Rounded pill shape (border-radius ~20-25px)
- Centered below form fields
- Padding: ~10px 30px
- Font: Poppins, bold or semi-bold
- Hover: slightly darker green

## Fidelity notes

- Match the Google Maps background with dark overlay
- Match the centered card with soft shadow
- Match the banner image with dark overlay and white text
- Match the underline-style inputs (no box borders)
- Match the label+input horizontal layout (label left, input right)
- Match the green rounded pill submit button
- Match the responsive behavior (card stays centered, takes full width on mobile)
- Use placeholder images: https://picsum.photos/seed/formwell-banner/800/400 for banner
- Use Google Fonts: Poppins

## Component plan

- `src/App.tsx` — compose page
- `src/components/MapBackground.tsx` — full-viewport map background with dark overlay
- `src/components/ContactCard.tsx` — centered white card wrapper
- `src/components/BannerSection.tsx` — banner image with overlay + heading + subheading
- `src/components/ContactForm.tsx` — form with underline inputs + submit button
- `src/components/FormField.tsx` — single label + input pair (underline style)

## Tasks

- [ ] Scaffold app from template-starter
- [ ] Install Google Fonts (Poppins) in index.html
- [ ] Create MapBackground component (full-viewport, dark overlay)
- [ ] Create ContactCard layout (centered, white, shadow)
- [ ] Create BannerSection (image, overlay, heading, subheading)
- [ ] Create FormField component (label + underline input)
- [ ] Create ContactForm (4 fields + submit button)
- [ ] Style with Tailwind: green button, underline inputs, responsive
- [ ] Add responsive behavior for mobile
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh
- [ ] Commit + open PR

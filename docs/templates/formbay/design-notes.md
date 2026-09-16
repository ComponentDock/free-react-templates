# Formbay — Design Notes & Task Outline

Source: ColorLib Contact Form 11
Preview: https://preview.colorlib.com/theme/contact-form-11/ (404 — design from screenshot)

## Section order (top to bottom)

1. **Two-column layout** (centered on white page)
   - Left: heading + form
   - Right: heading + text + link
2. **Footer** — Component Dock link

## Structure details

### Page background
- White (#FFFFFF), no card, no background image
- Very clean, minimalist aesthetic

### Left column (~50%)
- Large bold heading: "Fill the form. It's easy."
  - Sans-serif (Poppins bold), black, ~40px
- Form fields (underline style — bottom border only):
  - Row 1: First name + Last name (side by side, 50/50)
  - Email (full width)
  - "Write your message" label + Message textarea (tall, ~120px)
- "Send Message" button: coral bg (#E8636F), white text, 4px radius

### Right column (~50%)
- Bold heading: "Let's talk about everything."
  - Sans-serif (Poppins bold), black, ~28px
- Paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
  deleniti itaque similique magni. Magni, laboriosam perferendis maxime!"
  - Sans-serif, gray (#666666)
- "Read more" link in coral color (#E8636F)

## Fidelity notes

- Match the clean, minimal aesthetic (no card, no background image)
- Match the large bold heading style
- Match the coral accent: #E8636F for button and link
- Match the underline input style
- Match the First name + Last name side-by-side layout
- Match the "Write your message" label above the textarea
- Match the sans-serif typography throughout (Poppins bold for headings)

## Component plan

- `src/App.tsx` — compose page
- `src/components/LeftColumn.tsx` — heading + form
- `src/components/ContactForm.tsx` — underline inputs + coral button
- `src/components/RightColumn.tsx` — heading + paragraph + link

## Tasks

- [ ] Scaffold app from template-starter
- [ ] Install Google Fonts (Poppins) in index.html
- [ ] Create LeftColumn (heading + form)
- [ ] Create ContactForm (underline inputs + coral button)
- [ ] Create RightColumn (heading + text + link)
- [ ] Style with Tailwind: coral, fonts, responsive
- [ ] Add responsive stacking for mobile
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh
- [ ] Commit + open PR

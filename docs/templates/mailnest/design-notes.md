# Mailnest — Design Notes & Task Outline

Source: ColorLib Contact Form 16
Preview: https://preview.colorlib.com/theme/contact-form-16/ (404 — design from screenshot)

## Section order (top to bottom)

1. **Two-column layout** (centered, white background)
   - Left: heading + subtext + illustration
   - Right: contact form with rounded inputs
2. **Footer** — Component Dock link

## Structure details

### Left column (~50% width)
- Large bold heading: "Let's talk about everything!" — Poppins bold, ~36–40px, dark/black (#1A1A2E)
- Subtext paragraph below heading: gray (#666), ~14–16px, ~2 lines of lorem ipsum
- Illustration below subtext: person holding an envelope with blue/indigo (#5B4AFF) location pin, decorative plant and geometric elements
- Illustration should be an SVG or placeholder image (`https://picsum.photos/seed/mailnest-illust/400/300`)

### Right column (~50% width)
- Form with 4 fields stacked vertically:
  1. Text input — "Your name" placeholder
  2. Text input — "Email" placeholder
  3. Text input — "Subject" placeholder
  4. Textarea — "Write your message" placeholder (~120px tall)
- Each input: light gray background (#F5F5F5), no visible border, rounded corners (6px), padding ~12–16px
- "Send Message" button below textarea: dark bg (#1A1A2E), white text, rounded corners (6px), padding ~12px 24px
- Font: Poppins (sans-serif) for all form elements

### Footer
- Simple centered text linking to https://www.componentdock.com/ ("Component Dock")

## Fidelity notes

- Match the clean, minimal aesthetic — white background, no decorative borders
- Match the two-column layout (50/50 split, centered)
- Match the large bold heading style
- Match the light gray input backgrounds with no visible border
- Match the rounded input corners (6px)
- Match the dark button with white text and rounded corners
- Match the illustration placement below the subtext
- Use Poppins font throughout (Google Fonts)
- The illustration is decorative — use a placeholder or SVG with similar composition
- No navbar in the original — keep it clean

## Component plan

- `src/App.tsx` — compose page (left column + right column)
- `src/components/IllustrationColumn.tsx` — heading + subtext + illustration
- `src/components/ContactForm.tsx` — form with 4 fields + button

## Tasks

- [ ] Scaffold app from template-starter
- [ ] Install Google Fonts (Poppins) in index.html
- [ ] Create IllustrationColumn component (heading, subtext, illustration)
- [ ] Create ContactForm component (4 inputs + button, rounded style)
- [ ] Compose App.tsx with two-column layout
- [ ] Style with Tailwind: colors, fonts, responsive
- [ ] Add responsive stacking for mobile
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh
- [ ] Commit + open PR

# Connecta — Design Notes & Task Outline

Source: ColorLib Contact Form V1
Preview: https://preview.colorlib.com/theme/contact-form-v1/ (404 — design
from ColorLib OG screenshot + third-party descriptions)

## Section order (top to bottom)

1. **Full-page blue gradient background**
2. **Centered white card** (two columns)
   - Left: decorative envelope illustration
   - Right: contact form
3. **Footer** — Component Dock link

## Structure details

### Background
- Full-viewport blue gradient: left-to-right from light cyan (#29B6F6) to
  deep blue (#1565C0)
- No header, navbar, or top section — gradient is the entire page background

### Card (centered, ~70% max-width)
- White background, rounded corners (~12px), subtle box shadow
- Two columns: left ~40% (illustration), right ~60% (form)
- Vertically centered on the page

### Left column — Envelope illustration
- Green envelope icon (#4CAF50) — flat/vector style with open flap
- Motion decoration: small gray dots and dash lines around the envelope
  suggesting sending animation
- The illustration should be an SVG or lucide-react icon composed to match
  the screenshot (envelope + motion particles)
- Centered both vertically and horizontally in the left column

### Right column — Contact form
- **Heading:** "Get in touch" — bold, dark (#212121), centered, ~24–28px,
  sans-serif font (likely Poppins or similar)
- **Form fields** (stacked vertically, full width each):
  1. Name input — placeholder "John Doe"
  2. Email input — placeholder "Email"
  3. Subject input — placeholder "Subject"
  4. Message textarea — placeholder "Message", ~100–120px tall
- **Input styling:**
  - Light gray background (#ECEFF1)
  - Pill-shaped rounded corners (~20px radius)
  - No visible border
  - Placeholder text in medium gray (#9E9E9E)
  - Adequate padding inside (~12–16px)
- **Submit button:**
  - "Send Email" text + right-arrow (→) icon
  - Green background (#66BB6A)
  - White text
  - Pill-shaped rounded corners (~20px)
  - Centered below the form fields
  - Adequate top margin from the textarea

### Footer
- Simple footer below the card area
- Links to https://www.componentdock.com/ (branded "Component Dock")
- Can be minimal — text on gradient or separate footer section

## Task outline

1. Set up `apps/connecta/` (copy simplest existing app, rename package)
2. Create `src/App.tsx` — compose Background, Card, Footer sections
3. Create `src/components/Background.tsx` — full-viewport blue gradient
4. Create `src/components/ContactCard.tsx` — centered white card with two columns
5. Create `src/components/EnvelopeIllustration.tsx` — SVG envelope + motion particles
6. Create `src/components/ContactForm.tsx` — form with 4 inputs + submit button
7. Create `src/components/Footer.tsx` — Component Dock link
8. Write `src/index.css` — Tailwind entry + gradient theme tokens
9. Write tests for each component (Vitest + RTL)
10. Run `npm run spec:validate` and `scripts/verify-app.sh connecta`
11. Update `public/CNAME` and `package.json` homepage
12. Commit, push, open PR

## Fidelity notes

- The preview URL returns 404; all design decisions based on the ColorLib OG
  screenshot (1920x939 AVIF image) and third-party descriptions
- The envelope illustration is the most distinctive visual element — use an
  SVG composed to match the flat vector style with green stroke
- The gradient background is critical to the template's identity — ensure
  it covers the full viewport without repetition
- Input fields must be pill-shaped (high border-radius) with no visible
  border — just the gray background differentiates them
- The button matches the green of the envelope illustration for visual
  cohesion

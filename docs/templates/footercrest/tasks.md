# Footercrest — Implementation Notes

Source: ColorLib Bootstrap Footer 16
Preview: https://preview.colorlib.com/theme/bft/bootstrap-footer-16/
New name: footercrest

## Section order (top to bottom)

1. **Preview content area** — centered heading "Footer #06" on light background with generous vertical padding
2. **Newsletter subscription section** — two-column layout:
   - Left: "Subscribe to our" subheading + "Newsletter" heading on #322b3c bg
   - Right: pill-shaped email form (white bg, 40px radius) on #372f42 bg
3. **Footer content — three-column link grid + brand block:**
   - Left columns: "Information" (5 links), "Application" (3 links), "API" (3 links)
   - Right column: brand logo + copyright text
4. **No separate copyright bar** — copyright is inside the brand block

## Fidelity notes

### Newsletter section
- Two columns stretch to equal height (align-items-stretch)
- Left column: "Subscribe to our" in rgba(255,255,255,0.3), uppercase, letter-spacing: 2px
- Left column: "Newsletter" in white, 30px, uppercase
- Right column: subscribe form with white background, border-radius: 40px (pill), padding: 3px
- Form input: transparent background, no border, placeholder in rgba(0,0,0,0.3)
- Submit button: #352d3f background, white text, 150px × 56px, pill shape, uppercase, letter-spacing: 1px, font-size: 14px

### Link columns
- Three columns side by side below the newsletter section
- Each column heading: white, 20px ("Information", "Application", "API")
- Each link: checkmark-circle-outline icon (ionicons) + text
- Link color: rgba(255,255,255,0.5)
- Link items: py-1 d-block spacing

### Brand/copyright block
- Positioned on the right side (order-md-last in Bootstrap)
- "Footercrest" logo in white
- Copyright: rgba(255,255,255,0.3), current year, Component Dock attribution

### Typography
- Font: "Poppins", Arial, sans-serif
- Body font-size: 15px, line-height: 1.8
- All headings uppercase

### Overall
- Footer background: #302939 (deep purple-charcoal)
- Padding: 7em 0
- Dark, sophisticated aesthetic throughout
- No bright accents — monochromatic purple palette with white text

## Implementation approach

1. Create `src/components/Newsletter.tsx` — the two-column subscription section
2. Create `src/components/FooterLinks.tsx` — three-column link grid with checkmark icons
3. Create `src/components/FooterCrest.tsx` — the overall footer wrapper composing all sections
4. Create `src/App.tsx` — preview heading + FooterCrest
5. Use lucide-react `CheckCircle2` icon to replace ionicons checkmark-circle-outline
6. Use picsum.photos for any placeholder images if needed (none expected for this footer)
7. Footer links to https://www.componentdock.com/

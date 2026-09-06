# ModalOffer — Design Notes

## Structure Order

1. Modal overlay (dark backdrop)
2. Modal container (centered)
   - Close button (top-right)
   - Headline section
   - Promotional image/graphic
   - Description text
   - CTA button
3. Footer/attribution (optional)

## Section-by-Section Fidelity Notes

### Modal Overlay

- Dark semi-transparent backdrop (#000000 with ~50% opacity)
- Clicking backdrop closes modal
- Smooth fade-in/fade-out animation

### Modal Container

- Centered in viewport (both horizontally and vertically)
- White background (#ffffff)
- Rounded corners (~12px)
- Deep box shadow for elevation
- Max-width: ~500px (focused, conversion-oriented)
- Padding: ~30px

### Close Button

- Top-right corner of modal
- X icon (Lucide `X` component)
- On hover: slight opacity change
- aria-label="Close"

### Headline Section

- Main headline: "Special Offer" or "Limited Time Deal"
- Font: Bold, dark text (#333333)
- Size: 24-28px
- Centered alignment

### Promotional Image/Graphic

- Displayed below headline
- Full-width within modal
- Use placeholder: `https://picsum.photos/seed/modaloffer/440/250`
- Rounded corners (optional)

### Description Text

- 1-2 sentences describing the offer
- Font: Regular weight, gray (#666666)
- Size: 14-16px
- Centered alignment
- Line-height: 1.5

### CTA Button

- Text: "Get Offer" or "Claim Now"
- Background: Orange (#ff6b35)
- Text color: White (#ffffff)
- Font: Bold, 16px
- Full-width or large centered
- Rounded corners (~8px)
- Padding: 14px 28px
- Hover state: Darker orange (#e55a2b)
- Transition: 0.2s ease

## Color Palette

- Primary/Accent: #ff6b35 (orange)
- Background: #ffffff (white)
- Text: #333333 (dark gray)
- Body text: #666666 (medium gray)
- Backdrop: rgba(0,0,0,0.5)

## Typography

- Font family: System sans-serif stack
- Headline: 24-28px, bold
- Body: 14-16px, regular
- Button: 16px, bold

## Interactions

- Modal opens with scale + fade animation (0→1, 0.2s)
- Modal closes with reverse animation
- Focus trap within modal when open
- Escape key closes modal
- Backdrop click closes modal
- CTA button hover effect

## Responsive Behavior

- Mobile (<768px): Modal takes full width with margins
- Headline and button scale down slightly
- Image remains full-width
- Close button remains accessible

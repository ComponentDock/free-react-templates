# Frostsale (ColorLib Modal 03) — Design Notes

## Structure order

1. **Landing page** — centered content with heading + "Launch Modal" button
2. **Modal dialog** — centered, max-width 700px
   - Close button (top-right, 40x40, semi-transparent bg)
   - Left panel (col-md-5): teal bg, snowflake decoration, "Winter" subheading, "Sale" heading (Pacifico), discount display (40%), "To all products" text
   - Right panel (col-md-7): background image, "Shop now" button

## Section-by-section fidelity notes

### Landing page
- White background (#fff)
- Centered content with heading and button
- Button uses teal (#39bdc8) with white text, rounded corners (4px)
- On hover: transparent bg with teal border/text

### Modal overlay
- Dark semi-transparent overlay behind modal
- Modal centered vertically and horizontally
- No border-radius on modal-content (sharp corners)
- Box shadow: 0px 10px 34px -15px rgba(0,0,0,0.24)

### Left panel (teal)
- Background: #39bdc8
- Snowflake icon (flaticon): position absolute, top-right, rgba(255,255,255,0.3), 120px
- "Winter" text: 14px, uppercase, black, letter-spacing 1px
- "Sale" text: 105px, Pacifico cursive, black, with snowflake icon overlay (white, 60px)
- White line separator under "Sale": 50px wide, 2px height
- Discount number: 130px, bold, white, with -40px left margin
- "%" symbol: 30px, bold, positioned right of number
- "off" text: 16px, uppercase, bold, positioned below percent
- "To all products": uppercase text

### Right panel
- Background image: cover, center, no-repeat
- On mobile (<768px): min-height 300px
- "Shop now" button: full-width, teal bg (#39bdc8), white text, uppercase, letter-spacing 1px, 14px font

### Close button
- Position: absolute, top-right of modal
- Size: 40x40px
- Background: rgba(0,0,0,0.1)
- Icon: ionicons close (use lucide-react X icon)
- z-index: 1

## Design tokens summary

| Token | Value |
|-------|-------|
| Brand color | #39bdc8 (teal) |
| Text on teal | #000 (black) |
| Discount number | #fff (white) |
| Font - Sale heading | Pacifico, cursive |
| Font - Body | Lato, sans-serif |
| Button border-radius | 4px |
| Modal max-width | 700px |
| Modal box-shadow | 0px 10px 34px -15px rgba(0,0,0,0.24) |
| Close button size | 40x40px |
| Close button bg | rgba(0,0,0,0.1) |
| Snowflake decoration | rgba(255,255,255,0.3) |

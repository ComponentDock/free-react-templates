# Solefoot — Design Notes

## Source
- ColorLib Bootstrap Footer 14
- Preview: https://preview.colorlib.com/theme/bft/bootstrap-footer-14/
- Category: Bootstrap Footer (footer-only snippet, not full-page template)

## Visual Description
Dark full-width footer on white background. Hero section at top with centered
text. Footer has 4 equal columns on desktop. Copyright bar at bottom with
darker background. Overall aesthetic: clean, modern, dark theme.

## Section Order (top to bottom)
1. Hero section — white bg, centered heading
2. Footer — dark `#272727` bg, 4-col grid
   - Col 1: Brand + description + read more
   - Col 2: Categories list (4 items)
   - Col 3: Tag cloud (8 tags)
   - Col 4: Subscribe form + social icons
3. Copyright bar — darker `#1a1a1a` bg

## Fidelity Notes
- Match dark bg `#272727` exactly for footer
- Match copyright bar `#1a1a1a`
- Match gold accent `#f7b633` for links and submit button
- Submit button is square (no border-radius), 52x52px
- Input is transparent with no border
- Social icons are 40x40px squares with 4px border-radius (not 50% circle)
- Tag cloud items are uppercase with rounded border
- Footer headings are 13px uppercase letter-spacing 1px bold
- Body text uses rgba(255,255,255,0.3) — very low contrast
- Font: Nunito Sans, weights 300/400/600/700

## Adaptation
- Replace "Colorlib" brand with "Solefoot"
- Replace social links with lucide-react icons
- Use placeholder images via picsum.photos if needed
- Footer MUST link to componentdock.com

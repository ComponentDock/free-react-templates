# SearchMint — Implementation Tasks & Design Notes

## Source
- ColorLib: Search Form/Bar V09
- URL: https://colorlib.com/wp/template/search-form-bar-09/
- Preview: https://preview.colorlib.com/theme/bootstrap/search-form-bar-09/

## Structure order
1. Page wrapper (full-width, #fafafa background, generous vertical padding)
2. Container (centered, max-width ~960px on lg)
3. Heading section (centered h1/h2, Poppins 28px normal weight, #000)
4. Search form (flex row, max-width ~640px centered)
   - Search input (white bg, 50px height, 2px radius, no border, shadow)
   - Search button (90px wide, 50px tall, #01d28e bg, white text, 2px radius, shadow)
5. Footer (Component Dock link)

## Section-by-section fidelity notes

### Heading
- Text: Use "Find What You Need" (paraphrased from "Search Form/Bar #09")
- Font: Google Fonts Poppins, weight 400
- Size: 28px (text-[28px])
- Color: black (#000)
- Centered, margin-bottom: 3rem

### Search form
- Flex row with space-between (input fills remaining space, button is fixed)
- Max-width ~640px, centered on page
- Transition: all 0.3s on the form container

### Search input
- Width: calc(100% - 100px) — in Tailwind: `flex-1` (since button is w-[90px])
- Height: 50px
- Background: white
- Border: none
- Border-radius: 2px
- Padding: 0 15px 0 20px
- Placeholder: "Search..." in rgba(0,0,0,0.7)
- Box shadow: 0px 5px 20px -12px rgba(0,0,0,0.2)
- Focus shadow: 0px 5px 20px -12px rgba(0,0,0,0.34)

### Search button
- Width: 90px
- Height: 50px
- Background: #01d28e (mint green)
- Color: white
- Border: none
- Border-radius: 2px
- Box shadow: 0px 5px 20px -12px rgba(0,0,0,0.34)
- Focus: outline none (original suppresses focus ring)

### Page layout
- Background: #fafafa
- Section padding: 7em 0 (py-28)
- Container: standard Bootstrap-like responsive widths
- Heading centered above form with 3rem bottom margin

### Footer
- Standard footer with Component Dock link (per conventions)
- Minimal: just the attribution line

## Implementation notes
- Very simple template — single component (SearchForm) + heading
- No images, no icons, no external assets needed
- Poppins via Google Fonts link in index.html
- Box shadows need custom Tailwind classes or arbitrary values
- Test: verify heading text, input placeholder, button text, layout, accessibility

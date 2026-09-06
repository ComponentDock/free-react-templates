# ShopSteps — Design Notes

## Structure Order (section-by-section)

1. **Background** — Full-viewport background image (food/grocery theme), centered cover
2. **Wrapper Card** — 826×620px white card, centered via flexbox, padding 63px 90px 0
3. **Step Indicator** — Flex row of 4 steps with arrow connectors
   - Step labels: uppercase 12px, color #666
   - Current step highlighted
   - Arrow icons between steps (absolute positioned)
4. **Step 1: Basic Details**
   - h3 heading: Lato-Black 20px, #333, uppercase, letter-spacing 2px
   - 4 rows × 2 columns of form fields
   - Each field: 42px height, 1px solid #e6e6e6 border, Material Design icon right-aligned
   - Fields: First Name, Last Name, Email ID, Your User ID, Country, State, City, Phone Number, Reference Coder (password)
   - City + State share a form-group (50% width, flex)
5. **Step 2: Password Change**
   - h3 heading same style
   - 4 full-width password fields with lock-open icons
6. **Step 3: My Cart**
   - h3 heading
   - Table: thumbnail (17.49%), product detail (22.45%), quantity (16.25%), total price (39.78%), remove (4.03%)
   - Quantity controls: 105×36px #f2f2f2 background, +/- spans, number input
   - Total price: #92c752 green, Lato-Bold
   - Remove button: #666 close-circle icon
7. **Step 4: Cart Totals**
   - h3 heading
   - Summary table: 66.56% width, centered
   - Subtotal, Shipping (radio: Free Shipping / Local pickup), Service fee, Total
   - Total row: #333, Lato-Bold
   - Radio buttons: custom circular checkmarks (#999 border, #999 fill)
8. **Navigation Buttons**
   - Previous: 97×42px, green #8eb852 bg, white text, 3px radius
   - Next/Submit: 234×42px, same green style
   - Hover: #a1d15e

## Fidelity Notes

- Match 826×620px wrapper dimensions exactly
- Match green accent: #8eb852 (primary), #a1d15e (hover), #92c752 (cart price)
- Match input height 42px and border 1px solid #e6e6e6
- Match button radius 3px (not Bootstrap default)
- Match step indicator: uppercase 12px labels, arrows between steps
- Match responsive breakpoint at 767px: background hidden, form rows single-column
- Use lucide-react icons instead of Material Design Iconic Font
- Use picsum.photos for product thumbnails instead of local images
- Replace jQuery Steps plugin with React state machine for step navigation
- Keep the cart table structure with data-title attributes for mobile responsive display

# StepCraft — Design Notes

Source: ColorLib Wizard 6
Preview: https://colorlib.com/etc/bwiz/colorlib-wizard-6/index.html
New name: stepcraft (apps/stepcraft)

## Structure Order

1. Full-viewport background image (form-wizard-bg.jpg → use picsum placeholder)
2. Centered wizard card (white, 738×554px, 10px border-radius)

   **Step 1 — Personal Info:**
   - Form header (flex row):
     - Left (33.75%): Avatar area with circular image + "Choose Picture" camera icon picker
     - Right (66.25%): 3 inline inputs (First Name, Last Name, Team Name) with form indicator dots
   - Email input
   - Password input
   - Navigation: Back (hidden on step 1) + Next button

   **Step 2 — Category Selection:**
   - 3×2 grid of category cards (134px tall, 7px border-radius):
     - Programming, Research, Teacher (row 1)
     - Tour Guide, Business, Artist (row 2)
   - Each card: background image, centered icon + uppercase white label
   - Navigation: Back + Next

   **Step 3 — Address Details:**
   - Row 1: Street Name + Street Number
   - Row 2: City + Country
   - Navigation: Back + Submit/Finish

3. Step indicators (below card): 3 dots, current = 22px pill
4. Footer: "StepCraft" + description + Component Dock link

## Fidelity Notes

### Colors

- Brand primary (back button, active dot): #f6c2ec (pink)
- Secondary (next button): #aac1f0 (light blue)
- Body text: #808080 (gray)
- Input text: #333 (dark)
- Input background: #f7f7f7 (light gray)
- Card background: #fff (white)
- Hover states: pink → #dbadd2, blue → #98add6

### Typography

- Font: Poppins (Google Fonts) — Regular 400, Medium 500, SemiBold 600, Bold 700
- Body: 13px, weight 400
- Labels/avatar picker: 12px, uppercase, weight 800
- Placeholders: uppercase, 13px, #808080
- Category labels: uppercase, Poppins Medium 500, white

### Shapes

- Wizard card: 738×554px, border-radius 10px, shadow 0px 2px 7px rgba(0,0,0,0.1)
- Inputs: height 46px, border-radius 23px (pill), bg #f7f7f7, no border
- Buttons: height 46px, width 146px, border-radius 23px (pill), uppercase, white text
- Back button: bg #f6c2ec, icon left-aligned
- Next button: bg #aac1f0, icon right-aligned
- Category cards: 134px tall, border-radius 7px, 3-column grid, 27px gap
- Step dots: 10px circles, 8px gap; current = 22px wide pill
- Form indicator dots: 10px, border 2px solid #f6c2ec, active = filled

### Background

- Page: full-viewport background image, cover, centered
- Mobile: background removed, card goes edge-to-edge, no shadow/border-radius

### Interactions

- Category cards: hover adds deeper shadow
- Next/Back buttons: hover darkens color + icon wobble animation
- jQuery Steps-style transitions between wizard steps
- Step indicator animates width on step change

### Responsive

- < 768px: card full-width, no border-radius, no shadow
- Form header stacks vertically (avatar on top)
- Category grid: single column
- Step indicators: hidden
- Buttons: stack vertically, right-aligned

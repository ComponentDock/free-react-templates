# SpellForge — Implementation Todo

## Source
- ColorLib template: "Colorlib Wizard 21"
- Slug: `colorlib-wizard-21`
- Preview: https://colorlib.com/etc/bwiz/colorlib-wizard-21/index.html
- Listing: https://colorlib.com/wp/template/colorlib-wizard-21/
- Category: Bootstrap Wizard Templates (Account & Payment)

## Structure Order (top to bottom)

1. **Full-page background** — cover image, centered content
2. **Wizard card** — white container, centered, 851px, rounded corners, shadow
3. **Step progress indicator** — horizontal 3-step bar with circular icons and connector lines
4. **Step content area** — blue (#359bfa) form container
5. **Form fields** — per-step inputs
6. **Action buttons** — Previous (text) / Next (green circle)
7. **Footer** — Component Dock link

## Section-by-Section Fidelity Notes

### Background
- Full viewport background image (cover, centered, no-repeat)
- Use `picsum.photos/seed/spellforge-bg/1920/1080` as placeholder

### Wizard Card (.wizard-v1-content)
- White (#fff), 851px max-width, border-radius: 10px
- Box shadow: 0px 8px 20px rgba(0,0,0,0.15)
- Flex layout (side-by-side in original; stack on mobile)
- Font: Raleway from Google Fonts

### Step Progress Indicator
- 3 steps displayed horizontally in a flex row
- Each step: circular icon (50px, border-radius 50%) + step number + step text
- Connector lines between steps: 6px height, #e5e5e5 background
- Active/done step icon: #6eba2a (green) with box-shadow
- Inactive step icon: #ccc (gray)
- Step text: #333, font-weight 600
- Step number: #666, font-weight 400

### Step 1: Account Information
- Heading: "Account Information" (hidden h2 in original, show as heading)
- Fields: Username*, Email*, Password*, Confirm Password*
- All inputs: background #2f8be0, border none, border-radius 5px, white text
- Placeholders: rgba(255,255,255,0.6)
- Labels: white, 16px, font-weight 500
- Validation: required fields, email pattern

### Step 2: Payment Information
- Heading: "Payment Information"
- Fields: Card Type (select with 5 options), Card Number, CVC, Expiry Month (select), Expiry Year (select)
- Same input styling as step 1
- Select dropdowns with custom arrow icon

### Step 3: Confirm Your Details
- Heading: "Confirm Your Details"
- Summary table showing all entered data
- Table labels: rgba(255,255,255,0.6), 16px
- Table values: #fff
- Sub-headings: "Account Information" and "Payment Information" sections

### Action Buttons
- Container: flex, space-between
- Next button: circular (border-radius 50%), green (#6eba2a) bg, white icon, shadow
- Next hover: #5fa125
- Previous button: transparent bg, #666 text, no shadow
- Previous first-child: no border-radius, no shadow

### Footer
- Simple centered text linking to https://www.componentdock.com/
- Branded as "Component Dock"

## Implementation Steps

1. [ ] Create `apps/spellforge/` from simplest existing app scaffold
2. [ ] Update package.json: name `@free-react-templates/spellforge`, homepage
3. [ ] Add Raleway Google Font to index.html
4. [ ] Build `src/components/StepProgress.tsx` — horizontal step indicator
5. [ ] Build `src/components/WizardCard.tsx` — card container with shadow
6. [ ] Build `src/components/AccountStep.tsx` — step 1 form
7. [ ] Build `src/components/PaymentStep.tsx` — step 2 form
8. [ ] Build `src/components/ConfirmStep.tsx` — step 3 summary table
9. [ ] Build `src/components/ActionButtons.tsx` — prev/next circular buttons
10. [ ] Build `src/components/Footer.tsx` — Component Dock link
11. [ ] Compose in `src/App.tsx` with state management for step navigation
12. [ ] Add form validation (zod + react-hook-form patterns)
13. [ ] Write tests (100% coverage)
14. [ ] Run `npm run verify:app spellforge`
15. [ ] Commit and push

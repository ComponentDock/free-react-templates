# Spellforge — Implementation Tasks & Design Notes

## Source

- ColorLib Wizard 14
- Preview: https://colorlib.com/etc/bwiz/colorlib-wizard-14/index.html
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-14.jpg

## Structure Order (top to bottom, from preview)

1. Page wrapper — full viewport, #f8f8f8 bg, flex center
2. Card container — white, max-width ~700px, border-radius 10px, padding 30px
3. Title — "Build your profile", 24px, #222, centered
4. Progress bar — thin green (#8be7ac) fill bar
5. Step sections (managed by wizard state):
   - **About**: profile image upload + first/last name + email
   - **Account**: role radio cards (Designer, Coder, Developer) with icons
   - **Address**: street name/number + city/country
6. Navigation — Previous / Next buttons at bottom of card

## Component Outline

```
App.tsx
├── WizardCard.tsx          (container + progress bar + step logic)
│   ├── ProgressBar.tsx     (green fill, percentage based on current step)
│   ├── AboutStep.tsx       (image upload + name/email fields)
│   ├── AccountStep.tsx     (role radio cards)
│   └── AddressStep.tsx     (street/city/country fields)
└── Footer.tsx              (Component Dock link)
```

## Design Notes

### Colors

- Primary action: #1ed760 (green buttons, active radio border)
- Progress fill: #8be7ac (lighter green)
- Page bg: #f8f8f8
- Card bg: #fff
- Text: #222 (headings), #999 (placeholders/helper)
- Error: #f63726

### Typography

- Font: Poppins (300–900) via Google Fonts <link> in index.html
- Title: 24px, weight 600
- Step headings (About/Account/Address): 18px, weight 500
- Input text: 14px, weight 400
- Placeholder: 14px, #999

### Layout

- Card: max-width ~700px, centered, border-radius 10px, white bg
- Inputs: border-radius 5px, 15px 25px padding, light border
- Flex rows for side-by-side fields (name pair, address pair)
- Radio cards: flex row, each card has icon (top) + label (bottom), border + rounded

### Interaction

- jQuery Steps replaced by React state (currentStep, formData)
- Step validation before advancing
- Image upload with client-side preview (FileReader)
- Progress bar updates on step change

### Assets (no copying)

- Profile placeholder: https://picsum.photos/seed/spelldesk-avatar/120/120
- Role icons: lucide-react (Pen for Designer, Code for Coder, Terminal for Developer)
- Font: Google Fonts Poppins link

### Fidelity Checklist

- [ ] 1:1 section order matches preview
- [ ] Same color tokens
- [ ] Same border-radius values
- [ ] Same input styling
- [ ] Same step labels (About, Account, Address)
- [ ] Profile image upload with preview
- [ ] Role radio cards with icons
- [ ] Progress bar behavior

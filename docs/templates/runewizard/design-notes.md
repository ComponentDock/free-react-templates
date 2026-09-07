# RuneWizard — Design Notes

## Template Overview
- **New Name:** RuneWizard
- **Source:** ColorLib Wizard 15 (`colorlib-wizard-15`)
- **Preview:** https://colorlib.com/etc/bwiz/colorlib-wizard-15/index.html
- **Category:** Multi-step form wizard (financial sign-up)

## Structure Order
1. Vertical progress sidebar (left side, numbered steps 1-2-3)
2. Main form area (right side)
   - Step 1: Personal Information
   - Step 2: Connect Bank Account
   - Step 3: Set Financial Goals

## Section-by-Section Fidelity Notes

### Progress Sidebar
- Fixed left column, vertical layout
- Step numbers in circles (50% border-radius)
- Active step: green background (#6DAB3C), white text
- Inactive step: light gray (#ebebeb) background
- Connecting lines between steps

### Step 1: Personal Information
- Fields: First Name, Last Name (side-by-side row), Email, Phone, Birth Date (3 dropdowns: MM/DD/YYYY), SSN
- Labels above inputs, placeholder text below
- Input border-radius: 5px
- Font: Roboto Slab

### Step 2: Connect Bank Account
- Bank search input with "Search" button (green #6DAB3C)
- "Or choose from these popular bank" text
- 3 radio buttons with bank images (use placeholder images)

### Step 3: Set Financial Goals
- Range slider using noUiSlider library
- Goal amount display
- Submit/finish button

## Design Tokens Reference
- Font: Roboto Slab (Google Fonts)
- Primary green: #6DAB3C
- Accent lavender: #B97EBB
- Dark background: #222
- White form: #fff
- Text: #222, #555, #999
- Input radius: 5px
- Step circle: 50% radius, #ebebeb bg

## Implementation Notes
- Use react-hook-form for multi-step form state
- Use zod for validation schemas
- noUiSlider can be replaced with HTML5 range input + custom styling
- Bank images: use placeholder URLs (picsum.photos)
- Material Design icons via lucide-react (replace zmdi icons)

# Hexcraft — Design Notes & Task Outline

Source: ColorLib Wizard 2 (https://colorlib.com/wp/template/colorlib-wizard-2/)
Preview: https://colorlib.com/etc/bwiz/colorlib-wizard-2/index.html

## Structure Order

This is NOT a scrolling page — it's a single-viewport 4-step wizard. The implementer builds a Wizard container component that shows one step at a time, with a sidebar indicator.

1. **WizardLayout** — full-viewport container with background image + centered card
2. **StepIndicator** — left sidebar with vertical line + 4 labeled steps (gold active)
3. **Step1ChooseDate** — date pickers + dropdowns + "Book now" button
4. **Step2ChooseRoom** — boarding summary card + date pickers + room config dropdowns
5. **Step3Reservation** — personal info form (name, email, phone, address) + terms checkbox
6. **Step4Confirmation** — boarding summary + confirmation checkboxes + submit

## Section-by-Section Fidelity Notes

### WizardLayout

- Full viewport height (100vh), centered flex container
- Background: full-bleed photo (use picsum.photos placeholder, warm tones)
- Centered card (~909px max-width) with dark semi-transparent overlay
- Left side: image with "YOUR RESERVATION" overlay heading (Bitter font, white, uppercase, thin white border, centered in image)
- Right side: wizard content area

### StepIndicator

- Vertical sidebar (left side of wizard card, ~26% width)
- Vertical line (3px, rgba white 0.4 opacity) connecting step labels
- Each step label: white text, Poppins Medium 15px
- Active step: gold (#edc948) text + gold left-bar highlight
- Completed steps: show with gold left-bar (filled)

### Step1ChooseDate

- Two date picker inputs side by side (Check-in / Check-out)
- Placeholder text below inputs
- Chevron-down icons on right side of inputs
- Duration dropdown (1–5 Nights) + Room dropdown (1–5 Rooms) side by side
- Dropdowns: custom styled with bottom border, white popup on click
- Gold "Book now" pill button centered at bottom

### Step2ChooseRoom

- Boarding summary card (dark bg, white text):
  - Room 1: Small Room, Room 2: Luxury Room
  - Adults: 2, Children: 0
- Two date pickers (Check-in / Check-out) with calendar icons
- Room 1 config: Adult dropdown + Children dropdown
- Room 2 config: Adult dropdown + Children dropdown
- Forward/backward pill buttons

### Step3Reservation

- Form fields in two-column layout (mobile: single column):
  - First name | Last name
  - Email (full width)
  - Phone (full width)
  - Address | City
  - Country | Zip code
- Special requests textarea
- Terms checkbox ("I agree to the Terms & Conditions")
- Forward/backward pill buttons

### Step4Confirmation

- Boarding summary (same card style as Step 2)
- 4 confirmation checkboxes (pre-checked in original; implementer should make them interactive):
  - Terms and conditions
  - Booking availability
  - Privacy policy
  - Cancellation and refund policy
- Forward/backward pill buttons

## Key Design Decisions

- **Pills, not rectangles:** All buttons are pill-shaped (border-radius = height/2)
- **Bottom-border inputs only:** No filled input backgrounds, just a 1px bottom border (#5d718e)
- **Gold accent everywhere:** Active step, buttons, links, checkbox highlights all use #edc948
- **Dark overlay card:** The form sits on a semi-transparent dark card over a photo
- **Bitter for heading only:** "Your Reservation" is the only Bitter-font element; everything else is Poppins
- **Responsive stacking:** At < 768px, wizard card stacks vertically (image on top, form below, sidebar above form)

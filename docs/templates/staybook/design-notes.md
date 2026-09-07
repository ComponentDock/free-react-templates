# StayBook — Design Notes & Implementation Outline

Source: ColorLib Wizard 2
Preview: https://colorlib.com/etc/bwiz/colorlib-wizard-2/index.html
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-2.jpg

## Structure Order (top → bottom, left → right)

1. Page wrapper — full-viewport, warm cream background (#f9f6f1)
2. Inner container — flexbox horizontal
   - Left: Image panel (~30%) — hotel image + "Your reservation" heading
   - Right: Wizard form area (~70%)
     - Vertical step indicator (left sidebar within form, 26% width)
     - Content area (right, 74% width) — switches per step

## Section-by-Section Fidelity Notes

### Image Panel
- Left side, contains a background image (hotel/room photo)
- Overlay heading: "Your reservation" in Bitter Regular font, white
- Takes up roughly 30% of the container width
- Implementation: CSS background-image with picsum placeholder, white heading overlay

### Step Indicator (Vertical Sidebar)
- Vertical list on the left side of the form area
- Left border: 3px solid rgba(242,242,242,0.4)
- Each step: 31px height, 16px bottom margin, flex row
- Active step: gold text (#edc948), 3px gold left bar
- Inactive steps: white text (#fff), no colored bar
- Font: Poppins Medium, 15px

### Step 1 — Choose Date
- Two form rows:
  - Row 1: Check-in date input (left), Check-out date input (right)
  - Row 2: Duration dropdown (left), Room count dropdown (right)
- Date inputs: underlined style (border-bottom only), chevron-down icon
- Dropdowns: custom styled with select-control (34px height, border-bottom), dropdown list (white bg, blue border, blue hover)
- "Book now" button at bottom

### Step 2 — Choose Room
- Split layout: board summary (50% left) + form (50% right)
- Board summary: white card showing room types and adult/child counts
- Form: two date pickers (calendar icon), then per-room sections with adult/child dropdowns
- "Book now" button at bottom

### Step 3 — Make a Reservation
- Two form rows:
  - Row 1: First Name (left), Last Name (right)
  - Row 2: Phone (left), Mail (right)
- Row 3: Address (full width)
- Row 4: Special Requirements textarea (full width, 79px height)
- Terms checkbox: "I have read and accept the terms and conditions"
- "Book by email" button (195px wide, 44px top margin)

### Step 4 — Confirmation
- Board summary at top: Check In and Check Out dates
- Billing table with:
  - Room 1: Small Room — $34
  - Room 2: Luxury Room — $23
  - Rooms & Services — $80
  - VAT 8% — $08
  - Total Price — $88
- Payment options: radio buttons (Full Payment, 10% Deposit)
- "20% Deposit" note with remaining amount
- "Confirmation" button (195px wide)

## Component Breakdown

```
StayBook (App.tsx)
├── ImagePanel (left side)
│   ├── BackgroundImage (hotel placeholder)
│   └── Heading ("Your reservation")
├── WizardForm (right side)
│   ├── StepIndicator (vertical, 4 steps)
│   │   ├── StepItem ("Choose Date")
│   │   ├── StepItem ("Choose Room")
│   │   ├── StepItem ("Make a Reservation")
│   │   └── StepItem ("Confirmation")
│   └── StepContent
│       ├── ChooseDateStep (Step 1)
│       │   ├── DateInput (Check in)
│       │   ├── DateInput (Check out)
│       │   ├── CustomSelect (Duration)
│       │   ├── CustomSelect (Room count)
│       │   └── ForwardButton
│       ├── ChooseRoomStep (Step 2)
│       │   ├── RoomSummaryBoard
│       │   ├── DateInput × 2
│       │   ├── RoomSection (Room 1)
│       │   ├── RoomSection (Room 2)
│       │   └── ForwardButton
│       ├── ReservationStep (Step 3)
│       │   ├── FormRow (First Name + Last Name)
│       │   ├── FormRow (Phone + Mail)
│       │   ├── AddressInput
│       │   ├── SpecialRequirementsTextarea
│       │   ├── TermsCheckbox
│       │   └── BookByEmailButton
│       └── ConfirmationStep (Step 4)
│           ├── DateSummaryBoard
│           ├── BillingTable
│           ├── PaymentRadioGroup
│           └── ConfirmationButton
```

## State Management

- `currentStep: number` (1–4)
- `reservationData: { checkIn, checkOut, duration, rooms, roomDetails[], firstName, lastName, phone, email, address, specialReqs, termsAccepted, paymentOption }`
- Step validation before advancing

## Tailwind Theme Tokens to Define

```css
@theme {
  --color-brand: #edc948;
  --color-brand-hover: #d4b43f;
  --color-accent: #81acee;
  --color-navy: #012353;
  --color-navy-muted: #5d718e;
  --color-surface: #fff;
  --color-bg: #f9f6f1;
  --color-muted: #999;
  --color-text: #fff;
}
```

## Fonts

- Primary: Poppins (400, 500) via Google Fonts
- Heading: Bitter Regular via Google Fonts
- Icons: Linearicons + lucide-react (replacing Material Design Iconic Font)

## Key Implementation Notes

- Date pickers: use a lightweight React date picker (e.g. react-datepicker)
  instead of the jQuery datepicker
- Custom dropdowns: implement as controlled React components with state
  (no native `<select>` for the custom-styled ones)
- Board/bill sections: use Tailwind flex layouts with appropriate spacing
- The background image pattern in the original is a dark texture — use a
  solid dark background or CSS gradient as a simpler alternative
- Step navigation uses jQuery Steps originally — replace with React state
  machine (useState or useReducer)

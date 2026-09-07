# TableNook — Implementation Tasks & Design Notes

## Template Overview

- **Source**: ColorLib Wizard 7 (split-screen restaurant booking wizard)
- **Source slug**: `colorlib-wizard-7`
- **Preview URL**: `https://colorlib.com/etc/bwiz/colorlib-wizard-7/index.html`
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-7.jpg`
- **Category**: Forms / Multi-step Restaurant Booking Wizard
- **Description**: Split-screen 3-step restaurant table booking wizard with dark charcoal form panel, warm gold accents, food images

## Structure Order (section-by-section)

### 1. SplitScreenLayout (container)

- Full viewport height (`min-h-screen`)
- Flexbox row on desktop: `flex-row`
- Flexbox column on mobile: `flex-col` (`max-width: 767px`)
- Max-width: 1400px, centered
- Left panel: 58.88% width, full-height image
- Right panel: 41.12% width, dark form panel

### 2. ImagePanel (left side)

- 58.88% width, full height of the card
- Displays a food/restaurant image that changes per step
- Placeholder: `picsum.photos/seed/tablenook-{1,2,3}/800/562`
- `object-fit: cover` to fill the panel

### 3. FormPanel (right side)

- 41.12% width, 562px height (or `min-h-[562px]`)
- Background: `#333` (dark charcoal)
- Box-shadow: `0 7px 18px rgba(0, 0, 0, 0.2)`
- Inner wrapper: border `1px solid #524b42`, padding `68px 37px`
- Contains: form header + form fields + navigation buttons + step indicator

### 4. FormHeader (per step)

- Centered text
- Title: Raleway Bold, 25px, uppercase, white (#fff), margin-bottom 9px
- Tagline: Satisfy cursive, 18px, gold (#cdaa7c)
- Content changes per step:
  - Step 1: "Book a Table" / "~ Check out our place ~"
  - Step 2: "Contact Details" / "~ Check out our place ~"
  - Step 3: (no header — replaced by ready confirmation)

### 5. Step1Fields — Book a Table

- **People**: Custom dropdown (not native select)
  - Label: "People" with person icon (lucide `Users`)
  - Dropdown: options 1-5, custom styled
  - Select control: height 26px, border-bottom 2px solid #666
  - Dropdown: white background, hover blue (#81acee)
- **Date**: Datepicker input
  - Label: "Date" with calendar icon (lucide `Calendar`)
  - Input: bottom-border-only, text uppercase
  - Use a simple date input or lightweight datepicker
- **Time**: Two side-by-side selects
  - Label: "Time" with clock icon (lucide `Clock`)
  - Select 1: Hours (9am, 10am, 11am, 12pm, etc.)
  - Select 2: Period (am, pm)
  - Each: width 67px, border 2px solid #666, height 31px

### 6. Step2Fields — Contact Details

- **Name**: Text input
  - Label: "Name" with person icon (lucide `User`)
  - Placeholder: "Name" (uppercase, gray #666)
  - Input: bottom-border-only, white text
- **Phone**: Text input
  - Label: "Phone" with phone icon (lucide `Phone`)
  - Placeholder: "My phone"
- **Email**: Text input
  - Label: "Email" with email icon (lucide `Mail`)
  - Placeholder: "Your Email"

### 7. Step3Confirmation — Your Table is Ready

- Gold circle: 38px, border-radius 50%, bg #cdaa7c, centered
  - Checkmark icon inside (lucide `Check`, white, 40px)
- "Your table is ready": Raleway Bold, 25px, uppercase, white, margin-top 36px
- "~ Happy friends with a say ~": Satisfy, 18px, gold #cdaa7c
- Form-inner-last: no padding, flex center/center

### 8. NavigationButtons

- Positioned absolute, bottom-right of form panel (bottom: 79px, right: 52px)
- Two buttons side by side: "Previous" (118px) and "Next" (92px)
- Style: transparent bg, 1px solid #666 border, white text, uppercase, Raleway SemiBold
- Hover: bg #cdaa7c, border transparent
- Step 1: only "Next" visible
- Step 2: both "Previous" and "Next" visible
- Step 3: neither visible (or only "Previous")

### 9. StepIndicator

- Bottom-right of form panel (position: absolute, bottom: 24px, right: 57px)
- Shows current step number (40px, gray #666) + "/ 3" (15px, gray #666)
- Updates on step change

## Component Architecture

```
App.tsx
├── SplitScreenLayout.tsx          (flex container, full viewport)
│   ├── ImagePanel.tsx             (left: full-height food image)
│   └── FormPanel.tsx              (right: dark charcoal form area)
│       ├── FormHeader.tsx         (title + tagline, changes per step)
│       ├── Step1Fields.tsx        (People, Date, Time)
│       │   ├── PeopleDropdown.tsx (custom dropdown, 1-5)
│       │   ├── DatePicker.tsx     (date input)
│       │   └── TimeSelect.tsx     (two selects: hour + am/pm)
│       ├── Step2Fields.tsx        (Name, Phone, Email)
│       │   └── FormInput.tsx      (reusable input with label + icon)
│       ├── Step3Confirmation.tsx  (gold checkmark + ready message)
│       ├── NavigationButtons.tsx  (Previous + Next, positioned absolute)
│       └── StepIndicator.tsx      (step N / 3, positioned absolute)
```

## State Management

- `currentStep` (number 1-3): which step is active
- `bookingData` (object): { people, date, timeHour, timePeriod, name, phone, email }
- Step navigation: forward via "Next", backward via "Previous"
- Image changes based on `currentStep` (form-wizard-{step}.jpg → picsum placeholder)

## Fidelity Notes

- The original uses jQuery Steps plugin for wizard transitions. React: controlled state (`currentStep`) with conditional rendering.
- The custom People dropdown is not a native `<select>` — it's a custom div-based dropdown with hover effects. Implement as a controlled custom dropdown component.
- The datepicker uses a jQuery datepicker plugin. In React, use a native `<input type="date">` or a lightweight library. Style to match: bottom-border-only, uppercase text.
- The time picker uses two native `<select>` elements. Keep as native selects styled per spec.
- Form inputs use `border: none; border-bottom: 2px solid #666` — NOT a full border. This is a key visual detail.
- The navigation buttons are positioned `absolute` at bottom-right of the form panel. In React, use relative/absolute positioning.
- The step indicator uses CSS pseudo-elements (`::before` for number, `::after` for "/ 3"). In React, render as inline elements instead.
- Images in the original are `form-wizard-1.jpg`, `form-wizard-2.jpg`, `form-wizard-3.jpg`. Use `picsum.photos/seed/tablenook-{n}/800/562` as deterministic placeholders.
- Font: Raleway from Google Fonts (loaded via `<link>` in index.html). Satisfy for script text.
- The form inner wrapper has a warm dark brown border (`#524b42`) — subtle but visible against the #333 background.

## Implementation TODO

- [ ] Scaffold `apps/tablenook/` from simplest existing app
- [ ] Update package name to `@free-react-templates/tablenook`
- [ ] Add Raleway + Satisfy fonts via Google Fonts link in `index.html`
- [ ] Create `SplitScreenLayout.tsx` (flex container)
- [ ] Create `ImagePanel.tsx` (left: full-height image, changes per step)
- [ ] Create `FormPanel.tsx` (right: dark bg, box-shadow, inner border)
- [ ] Create `FormHeader.tsx` (title + tagline, step-dependent)
- [ ] Create `Step1Fields.tsx` (People, Date, Time)
- [ ] Create `PeopleDropdown.tsx` (custom dropdown, 1-5)
- [ ] Create `DatePicker.tsx` (date input, bottom-border style)
- [ ] Create `TimeSelect.tsx` (two selects: hour + am/pm)
- [ ] Create `Step2Fields.tsx` (Name, Phone, Email)
- [ ] Create `FormInput.tsx` (reusable: label + icon + bottom-border input)
- [ ] Create `Step3Confirmation.tsx` (gold circle + ready message)
- [ ] Create `NavigationButtons.tsx` (Previous + Next, absolute positioned)
- [ ] Create `StepIndicator.tsx` (step N / 3)
- [ ] Implement step navigation (forward/backward)
- [ ] Implement image switching per step
- [ ] Write tests (Vitest + RTL, 100% coverage)
- [ ] Verify build and tests pass
- [ ] Update `public/CNAME` and `homepage`
- [ ] Commit and push

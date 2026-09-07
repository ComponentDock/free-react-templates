# Stepforge — Implementation Tasks & Design Notes

Source: ColorLib Wizard 26
Preview: https://colorlib.com/etc/bwiz/colorlib-wizard-26/index.html

## Structure order (top to bottom)

1. Page wrapper (full-viewport flex, dark slate background)
2. Heading "Form Booking Wizard" (centered, white, 30px bold)
3. Wizard card (910px max, rounded, drop-shadow, flex row)
   a. Step tabs sidebar (3 vertical step indicators)
   b. Form content area (3 sections, only active one visible)
4. Navigation buttons (Previous / Next, centered below form)

## Section-by-section fidelity notes

### Step tabs sidebar
- Vertical list of 3 step indicators
- Each: circular numbered icon (padding 30px, 25px font, box-shadow) + label text
- Active/done icon: teal background (#55e8d5), white number
- Inactive icon: gray (#ccc), white number
- Step label: 16px, weight 400, color #333 on white tab background
- Tabs have 5px border-radius

### Section 1: Personal Info
- Heading "Personal Info" (30px bold white) + counter "1/3" (18px #ccc)
- Two-column grid: First Name | Last Name
- Two-column grid: Phone Number | E-Mail
- Date of birth row: three small selects (day 12.4%, month 12.4%, year 13.6%) with 5px radius
- Full-width: Address Location
- All inputs: transparent bg, bottom border rgba(255,255,255,0.3), white text
- Floating labels: absolute positioned, animate on focus via translateY(-34px) scale(0.9), turn teal

### Section 2: Booking Information
- Heading "Booking Information" (fix original typo "Infomation")
- Hero image placeholder (full-width within form, margin-bottom 20px)
- Full-width: "Choose a Room" select with chevron-down icon
- Two-column: "Organization Day" text input (datepicker placeholder) | "Time Open" select
- Custom select arrow: absolute positioned chevron icon

### Section 3: Confirm Details
- Heading "Confirm Details" (fix original typo "Comfirm")
- Full-width summary table, left-aligned
- Rows: Full Name, Room, Day, Time, Price
- Row layout: block display, header in rgba(255,255,255,0.5), value in #55e8d5 bold 18px
- Price: "40.00$" displayed in teal bold

### Navigation buttons
- Centered flex container (margin-top 15px)
- Button: 150px × 45px, bg #43ccba, border-radius 5px, white text, 16px weight 600
- Hover: bg #32998b
- Previous: hidden on step 1 (display: none)
- Next: text changes to "Submit" on step 3
- Disabled state: hidden when on first step

## Responsive breakpoints
- ≤991px: wizard card width 90%; step tabs stack vertically (flex-direction column)
- ≤575px: padding reduced to 30px; step icon smaller (20px font, 20px padding);
  form content padding 30px; two-column fields become single-column;
  date selects go full-width; step counter text hidden; hero image hidden

## Key implementation decisions
- Use React state for current step (0-indexed), form data object
- Floating labels: CSS transition on focus/valid (translateY + scale + color)
- Custom select arrows via lucide-react ChevronDown icon
- Date selects: native <select> elements (no datepicker library needed)
- Summary table: read-only display of form state
- Footer: Component Dock link (mandatory per AGENTS.md)

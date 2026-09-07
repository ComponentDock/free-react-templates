# Stepforge — Implementation Tasks

## Source

- ColorLib Wizard 26: https://colorlib.com/wp/template/colorlib-wizard-26/
- Preview: https://colorlib.com/etc/bwiz/colorlib-wizard-26/index.html
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-26.jpg

## Design Tokens (extracted from CSS)

- Background: #383a4f (dark navy)
- Form background: #525575 (purple-gray)
- Accent: #55e8d5 (teal) — step icons, labels, confirmation values
- Button: #43ccba (teal), hover #32998b
- Step inactive: #cccccc (gray)
- Font: Open Sans, sans-serif
- Card: 910px max-width, 10px border-radius, box-shadow 0 8px 20px rgba(0,0,0,0.15)

## Components

1. StepIndicator — 3 step icons with labels
2. PersonalInfoStep — form with 6 fields
3. BookingStep — room select, day input, time select, image
4. ConfirmStep — summary table
5. FormActions — Previous/Next/Submit buttons
6. Footer — Component Dock link

## Status

- [x] Spec written
- [x] App scaffolded
- [x] Tests written (51 tests)
- [x] Implementation complete
- [x] Per-app gate passed (100% coverage)
- [x] Build succeeds

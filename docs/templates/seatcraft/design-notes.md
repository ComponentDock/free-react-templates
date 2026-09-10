# Seatcraft — Design Notes & Task Outline

**Source:** ColorLib "Colorlib Wizard 7"
**Slug:** `colorlib-wizard-7`
**Preview:** https://preview.colorlib.com/theme/colorlib-wizard-7/ (404 at time of prep — design from screenshot)
**Original page:** https://colorlib.com/wp/template/colorlib-wizard-7/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-7.jpg

## Structure Order (top to bottom / visual layers)

1. Page Background
   - Pure white (#FFFFFF) full viewport background

2. Booking Widget (centered)
   - Split/overlapping layout:
     - Left/center: high-end food photograph (dark/moody editorial style, artisanal Japanese-plated dish)
     - Right: dark charcoal form panel overlapping the image
   - The overlap creates a premium, layered feel

3. Form Panel (dark overlay on right side)
   - Background: #333333 (dark charcoal)
   - Border: thin #666666
   - Rounded corners

   a. Header Section
      - Title: "BOOK A TABLE" — #FFFFFF, bold, uppercase, sans-serif, large
      - Subtitle: "~ Check out our place ~" — #C2955B (warm gold/ochre), script/handwritten font (e.g. Dancing Script)

   b. Step 1 Fields (People / Date / Time)
      - People: dropdown selector, default "1", with person icon
      - Date: date field, formatted "14 MAR 2021", with calendar icon
      - Time: dual dropdowns for time range "9 AM" — "7 PM", with clock icon
      - All labels: #999999 (light gray), small sans-serif
      - All input values: #FFFFFF (white)
      - Each field has a minimalist gray icon to the left

   c. Action Button
      - "NEXT" — ghost/outline style: white border, white text, transparent fill
      - Uppercase, small sans-serif

   d. Step Indicator
      - "1/3" text at bottom right of panel
      - #FFFFFF (white), small font

4. Step 2 (extrapolated — not visible in screenshot)
   - Contact information: Name, Email, Phone fields
   - Same dark panel styling
   - "BACK" and "NEXT" buttons

5. Step 3 (extrapolated — not visible in screenshot)
   - Booking summary/review
   - Same dark panel styling
   - "CONFIRM" button (may use warm gold accent #C2955B)

## Fidelity Notes

- The overlapping layout is the key visual signature — food photo partially behind dark form panel.
- The gold script subtitle (#C2955B) against the dark background creates a luxury restaurant feel.
- The ghost button (white outline, no fill) is distinctive — do NOT replace with solid buttons.
- Step 2 and 3 content are not visible in the screenshot — extrapolate reasonable booking flow steps (contact info, confirmation).
- The food image should use picsum.photos with a dark/moody seed for fine-dining feel.
- The wizard icon list (person, calendar, clock) uses minimalist line icons — use lucide-react.
- Form fields should have subtle hover/focus transitions matching the premium aesthetic.
- The "1/3" indicator is text-based, not dots — keep this style.
- Maintain generous spacing and padding for the luxury minimalist feel.

## Tasks

- [ ] Set up workspace: copy simplest existing app, rename to `seatcraft`
- [ ] Configure vite.config.ts with injectUiSource()
- [ ] Set up index.css with Tailwind theme tokens (charcoal, gold, white, gray)
- [ ] Import Google Fonts: body sans-serif + script font for subtitle
- [ ] Implement BookingWidget component (centered container with overlapping layout)
- [ ] Implement FoodImage component (background food photo with dark mood)
- [ ] Implement FormPanel component (dark charcoal container with rounded corners)
- [ ] Implement BookingHeader component (title + gold script subtitle)
- [ ] Implement Step1 component (People, Date, Time selectors)
- [ ] Implement Step2 component (contact info fields — extrapolated)
- [ ] Implement Step3 component (booking summary + confirm — extrapolated)
- [ ] Implement FormField component (icon + label + input/select pattern)
- [ ] Implement GhostButton component (outline style CTA)
- [ ] Implement StepIndicator component ("1/3" text indicator)
- [ ] Implement WizardNavigation component (back/next + step management)
- [ ] Implement App.tsx composing all wizard sections
- [ ] Add multi-step state management (current step, form data persistence)
- [ ] Add form validation (required fields per step)
- [ ] Add responsive layout (stacked on mobile, overlap simplified)
- [ ] Add keyboard accessibility (focus management, tab order, aria)
- [ ] Add Component Dock footer link
- [ ] Write tests (100% coverage, Vitest + RTL)
- [ ] Run verify-app.sh, ensure all gates pass
- [ ] Commit and push

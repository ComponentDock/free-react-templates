# Tasks & Research Notes: Tablecraft (Colorlib Wizard 7)

> Prep artifacts prepared on `main` by the prep stream (stream 4).
> Implementation ships later on a feature branch.

## Source mapping

- **ColorLib item:** "Colorlib Wizard 7" (TEMPLATES.md line 875; section "## Bootstrap Wizards (30)" at line 846).
- **Source URL:** https://colorlib.com/wp/template/colorlib-wizard-7/
- **Preview URL — REACHABLE (verified 2026-09-10):** `https://colorlib.com/etc/bwiz/colorlib-wizard-7/index.html` (HTTP 200, 3,464 bytes). The naive `https://preview.colorlib.com/theme/colorlib-wizard-7/` returns 404.
- **Preview CSS:** `css/style.css` (all styles, hand-written). Uses `vendor/date-picker/` for datepicker (REPLACE with native date input or lightweight React datepicker). Scripts: `jquery.steps.js`, `datepicker.js`, `main.js`.
- **Fonts:** Raleway (Regular, Bold, SemiBold) + Satisfy-Regular → **use Google Fonts `<link>`**.
- **Screenshot:** `colorlib-free-wizard-7.jpg` — two-column overlapping layout, dark form panel, food image, 3-step booking flow.

## Design tokens extracted from CSS

| Token | Value | Notes |
|---|---|---|
| Font family (body) | Raleway | Google Fonts (400, 600, 700) |
| Font family (script) | Satisfy | Google Fonts — decorative subheadings |
| Form panel bg | `#333` | Dark charcoal |
| Form panel border | `1px solid #524b42` | Warm brown |
| Form panel shadow | `0px 7px 18px rgba(0,0,0,0.2)` | |
| Form panel height | `562px` | |
| Form panel width | `41.12%` | Right column |
| Image section width | `58.88%` | Left column |
| Heading color | `#fff` | White, uppercase, Raleway-Bold 25px |
| Subheading color | `#cdaa7c` | Warm gold, Satisfy-Regular 18px |
| Label color | `#ccc` | Light gray |
| Input text | `#fff` | White, Raleway-SemiBold |
| Input border | `2px solid #666` | Bottom-only for text inputs |
| Input focus border | `#e9e0cf` | Warm beige |
| Placeholder color | `#666` | Uppercase |
| Dropdown hover | `#81acee` | Soft blue |
| Button style | Outlined `1px solid #666` | White text, 41px height |
| Button hover | `#cdaa7c` solid fill | Gold, no border |
| Success circle | `38px`, `#cdaa7c` bg | Gold check icon |
| Wizard width | `878px` | |
| Page bg | `#fff` | White |

## Template structure (3 steps)

### Step 1 — Book a Table
- **Left:** Food image placeholder (58.88% width)
- **Right:** Dark form panel with:
  - Header: "BOOK A TABLE" (white uppercase) + "~ Check out our place ~" (gold script)
  - People dropdown (custom select: 1-5 options, person icon)
  - Date picker (calendar icon, format "DD MMM YYYY")
  - Time: two dropdowns side by side (arrival 9AM-12PM, departure 7PM-10PM, clock icon)
- **Navigation:** "Next" button only (Back hidden)

### Step 2 — Contact Details
- **Left:** Different food image placeholder
- **Right:** Dark form panel with:
  - Header: "CONTACT DETAILS" + subtitle
  - Name input (user icon)
  - Phone input (phone icon, placeholder "My phone")
  - Email input (email icon, placeholder "Your Email")
- **Navigation:** "Back" + "Book Now" buttons

### Step 3 — Confirmation
- **Left:** Different food image placeholder
- **Right:** Dark panel with centered success content:
  - Gold circular check icon (38px)
  - "YOUR TABLE IS READY" heading (white uppercase)
  - "~ Happy friends with a say ~" (gold script)
- **Navigation:** Hidden

## Implementation tasks

1. **Bootstrap from simplest existing wizard app** (copy an existing wizard app, rename to `apps/tablecraft`, update package to `@free-react-templates/tablecraft`)
2. **Remove jQuery Steps + datepicker dependency** — implement wizard state in React (useState for currentStep, fade transitions via CSS opacity/transition)
3. **Build components:**
   - `StepIndicator.tsx` — "N /3" text, updates per step
   - `Step1Booking.tsx` — People dropdown (custom or native select), Date picker (native `<input type="date">` or lightweight lib), Time selects
   - `Step2Contact.tsx` — Name, Phone, Email inputs with icons
   - `Step3Confirmation.tsx` — Success screen with check icon
   - `WizardNavigation.tsx` — Back (outlined) and Next/Book Now (outlined → gold hover) buttons
   - `TablecraftWizard.tsx` — container composing steps + state management
4. **Apply design tokens** via Tailwind `@theme` in `index.css` (Raleway + Satisfy from Google Fonts)
5. **Two-column layout**: CSS flexbox, image left 58.88%, form panel right 41.12%, overlapping with shadow
6. **Responsive breakpoints**: 991px and 767px (match original media queries)
7. **Footer** with Component Dock link
8. **Tests** — Vitest + Testing Library, 100% coverage
9. **Verify** — `scripts/verify-app.sh tablecraft`

# Design Notes: DropForm (Dropdown 07)

- **Source**: ColorLib Dropdown 07 (`https://colorlib.com/wp/template/dropdown-07/`)
- **Preview URL**: `https://preview.colorlib.com/theme/bootstrap/dropdown-07/`
- **Category**: Widget / Dropdown Form

## Design Tokens (from CSS extraction)

- **Brand blue**: `#4d80e4` (button bg, links)
- **Hover blue**: `#2161dd` (button hover)
- **Page background**: `#79a0eb` (solid blue)
- **Text color**: gray (body), `#000` (headings), `#fff` (heading text)
- **Font**: Roboto, Google Fonts, weights 400/500/700
- **Button radius**: `5px`, padding `12px 16px`
- **Button shadow**: `0px 10px 20px -6px rgba(0,0,0,0.12)`
- **Form control height**: `48px`, radius `4px`, border `2px solid rgba(0,0,0,0.05)`
- **Dropdown menu**: white bg, shadow `0px 10px 34px -20px rgba(0,0,0,0.41)`, min-width `20rem`
- **Arrow**: CSS pseudo-element triangle (border hack), white, ~0.7em wide

## Visual Design (from screenshot + preview DOM)

- Full-page centered layout on solid blue background
- Large white heading "Dropdown #07" at top, centered
- Blue "Sign Up" button in center of page
- Clicking opens a white dropdown panel below the button
- Panel has a CSS-drawn upward arrow pointing to the button
- Inside panel: "Create Your Account" heading, three form fields
  (Full Name, Email, Password), a "Remember me" checkbox on left,
  "Sign in" blue button on right
- Clean, minimal widget — no header, no footer in the original (we add footer per conventions)

## Design Structure (section order)

1. Page wrapper (blue background, centered content)
2. Heading section ("Dropdown #07" in white)
3. Button group container
   - "Sign Up" primary button (trigger)
   - Dropdown form panel (initially hidden)
     - "Create Your Account" heading
     - Full Name input
     - Email address input
     - Password input
     - Row: Remember me checkbox (left) + Sign in button (right)
4. Footer with Component Dock branding link

## Implementation Guidelines for Implementers

- Use a controlled React state for dropdown open/close (not Bootstrap JS)
- Use `lucide-react` for any icons if needed (e.g. user icon for heading)
- Ensure 100% test coverage with Vitest and Testing Library
- Register app in `package.json` workspaces and root dependencies
- Run `npm install` at repo root after creating the app workspace
- `apps/dropform/public/CNAME` → `dropform.free.componentdock.com`
- `apps/dropform/package.json` homepage → `https://dropform.free.componentdock.com`
- `apps/dropform/vite.config.ts` must include `injectUiSource()` pattern
- Use Tailwind classes for styling, map the CSS tokens to Tailwind theme values
- For the arrow indicator, use CSS `::before`/`::after` with border hack or
  a rotated square, positioned above the dropdown panel

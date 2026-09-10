# WizPath — Design Notes

## Structure Order (top to bottom)

1. **Page wrapper** — textured beige background (`#f5f2ed`), optional decorative food corner imagery (spices, herbs, tomatoes — use placeholder images or omit for simplicity)
2. **Centered card** — white (`#fff`), rounded corners (~8–12px), subtle drop shadow, max-width ~600–700px
3. **Progress indicator** — 4 steps, horizontal, connected by faint green lines
   - Active step: solid `#78a44e` circle + white icon + "STEP 0X" label
   - Inactive steps: white circle + green outline + outline icon + gray label
4. **Section heading** — "BASIC DETAILS" bold uppercase dark text, centered
5. **Form fields grid** — 2-column layout for most rows, 3-column for Country/State/City
   - Each field: label, input with icon, thin gray border, rounded corners
   - Active/filled field: light blue `#e8f0fe` background
6. **Password field** — with show/hide eye icon toggle
7. **Button row** — BACK (left) and CONTINUE (right), solid green, uppercase, small radius

## Fidelity Notes

- **Multi-step wizard is the core UX** — must implement actual step navigation with state management (React state or context)
- **4-step progress indicator** is the primary navigation affordance — animate transitions between steps
- **Form grid** uses CSS grid: `grid-cols-2` for most rows, `grid-cols-3` for Country/State/City row
- **Icons per field** — use `lucide-react` icons matching the field purpose (User, Mail, MapPin, Lock, Eye, EyeOff, ShoppingBag for cart step, etc.)
- **Buttons always visible** at bottom of card regardless of current step
- **No form submission logic** needed — this is a UI template; fields can be uncontrolled or lightly validated with zod
- **Step content** for steps 2–4 not visible in screenshot — infer reasonable content (e.g. step 2: delivery preferences, step 3: order summary, step 4: confirmation) or keep them as placeholder sections
- **Background decoration** — the food-themed corner imagery is specific to the demo; omit or use abstract geometric shapes to keep it template-agnostic
- **Font**: load Roboto or Open Sans via Google Fonts `<link>` in index.html

## Component Breakdown

| Component               | Purpose                                             |
| ----------------------- | --------------------------------------------------- |
| `WizPath.tsx`           | Root — manages step state, renders card             |
| `ProgressIndicator.tsx` | 4-step horizontal progress bar                      |
| `StepForm.tsx`          | Switches content based on current step              |
| `BasicDetailsForm.tsx`  | Step 1: name, email, user ID, location, credentials |
| `StepContent.tsx`       | Steps 2–4 placeholder content                       |
| `FormInput.tsx`         | Reusable styled input with icon + label             |

## Color Palette Reference

```
Brand Green:    #78a44e  (active steps, buttons, connectors)
Page BG:        #f5f2ed  (textured off-white/beige)
Card BG:        #ffffff  (pure white)
Text Primary:   #212529  (headings, labels)
Text Secondary: #999999  (placeholders, inactive labels)
Input Border:   #e0e0e0  (thin gray)
Input Active:   #e8f0fe  (light blue highlight)
```

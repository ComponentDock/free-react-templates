# Tasks & Research Notes: Stepglow (Colorlib Wizard 6)

> Prep artifacts prepared on `main` by the prep stream (stream 4).
> Implementation ships later on a feature branch.

## Source mapping

- **ColorLib item:** "Colorlib Wizard 6" (TEMPLATES.md line 874; section "## Bootstrap Wizards (30)" at line 846).
- **Source URL:** https://colorlib.com/wp/template/colorlib-wizard-6/
- **Preview URL — REACHABLE (verified 2026-09-10):** `https://colorlib.com/etc/bwiz/colorlib-wizard-6/index.html` (HTTP 200, 3,075 bytes). The naive `https://preview.colorlib.com/theme/colorlib-wizard-6/` returns 404 — the whole 30-member wizard family lives under `colorlib.com/etc/bwiz/colorlib-wizard-<n>/index.html`.
- **Preview CSS:** `css/style.css` (all styles, hand-written, NO Bootstrap, NO jquery.steps.css) + `fonts/material-design-iconic-font/` (REPLACE with lucide-react icons). Scripts: `jquery.steps.js` + `main.js`.
- **Fonts:** Poppins (Regular, SemiBold, Medium) via local `@font-face` → **use Google Fonts `<link>` for Poppins 400, 500, 600**. Also references Muli-Bold (unused in visible HTML) → omit.
- **Screenshot:** `colorlib-free-wizard-6.jpg` — pastel gradient background, white card, profile + form + profession grid.

## Design tokens extracted from CSS

| Token | Value | Notes |
|---|---|---|
| Font family | Poppins | Google Fonts (400, 500, 600) |
| Back button color | `#f6c2ec` | Soft pink, hover `#dbadd2` |
| Continue button color | `#aac1f0` | Soft blue/lavender, hover `#98add6` |
| Dot indicator border | `#f6c2ec` | Same pink; active = filled |
| Input background | `#f7f7f7` | Light gray, no border |
| Body text | `#808080` | Gray |
| Input text | `#333` | Dark gray |
| Card background | `#fff` | White |
| Card border-radius | `10px` | |
| Card shadow | `0px 2px 7px rgba(0,0,0,0.1)` | |
| Input/button height | `46px` | Pill shape |
| Input/button border-radius | `23px` | Fully rounded |
| Grid item border-radius | `7px` | |
| Grid item height | `134px` | 30% width, 3-column |
| Background | CSS gradient | Lavender-blue → pale purple → warm pink (replaces `form-wizard-bg.jpg`) |

## Template structure (3 steps)

### Step 1 — Personal Info
- **Header row:** Avatar (circular image + camera icon "Choose Picture" file upload) | 3 inputs (First Name, Last Name, Team Name) in a row
- **Below header:** Email input, Create Password input (full width)
- **Each input** has a `::before` pink dot indicator (active = filled, inactive = outline)

### Step 2 — Choose Profession
- **2×3 grid** of clickable cards with background images and white uppercase labels:
  - Row 1: Programming, Research, Teacher
  - Row 2: Tour Guide, Business, Artist
- **Replace background images** with `picsum.photos/seed/stepglow-<n>` placeholders
- **Replace icon images** with lucide-react icons (Code, Flask, GraduationCap, Map, Briefcase, Palette)

### Step 3 — Address / Location
- **2×2 grid:** Street Name + Street Number (row 1), City + Country (row 2)
- Same pill-shaped inputs as Step 1

## Implementation tasks

1. **Bootstrap from simplest existing wizard app** (copy `apps/wizardry` or `apps/abjure`, rename to `apps/stepglow`, update package name to `@free-react-templates/stepglow`)
2. **Remove jQuery Steps dependency** — implement wizard state in React (useState for currentStep, fade transitions via CSS)
3. **Build components:**
   - `StepIndicator.tsx` — 3 dots with expand/collapse animation
   - `Step1PersonalInfo.tsx` — avatar + form fields with dot indicators
   - `Step2Profession.tsx` — 2×3 grid with hover shadow
   - `Step3Address.tsx` — 2×2 address form
   - `WizardNavigation.tsx` — Back (pink) and Continue (blue) pill buttons with lucide icons
   - `StepGlowWizard.tsx` — container composing steps + state management
4. **Apply design tokens** via Tailwind `@theme` in `index.css`
5. **Responsive breakpoints** at 768px (match original media query)
6. **Footer** with Component Dock link
7. **Tests** — Vitest + Testing Library, 100% coverage
8. **Verify** — `scripts/verify-app.sh stepglow`

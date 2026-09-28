# SignupCraft — Implementation Todo & Design Notes

## Source

- **ColorLib template:** Signup Form 02
- **Slug:** `signup-form-02`
- **Preview URL:** `https://preview.colorlib.com/theme/bootstrap/signup-form-02/`
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-02.jpg`
- **Description:** "A bold, clean and impactful free Bootstrap registration template."

## Design Notes

### Layout

- Split layout: 80% form panel (left, `#f6f7fc` bg) + 20% image panel (right, background image)
- Full viewport height (`100vh`), minimum `900px`
- On mobile (<992px): panels stack vertically, form first then image
- Content centered in a `cl-col-md-7` column within the form panel

### Color Palette

- **Primary brand:** `#fb771a` (orange) — buttons, links, checked checkbox
- **Primary hover:** `#eb6304` — button hover state
- **Content background:** `#f6f7fc` (very light gray-blue)
- **Input shadow:** `0 1px 2px 0 rgba(0,0,0,0.1)` (no borders on inputs)
- **Focus border:** `#fdc197` (light orange)
- **Text dark:** `#212529` — body text
- **Text muted:** `#6c757d` — placeholders
- **Caption text:** `#888` — checkbox caption

### Typography

- Font: Roboto (Google Fonts, weights 300, 400)
- h3: `1.75rem`, weight 500, `margin-bottom: 0.5rem`
- Body: `1rem`, weight 400, line-height 1.5

### Form Fields

- All inputs: white background, no visible border, box-shadow `0 1px 2px 0 rgba(0,0,0,0.1)`, 4px radius, 54px height
- Labels: default styling, `margin-bottom: 0.5rem`
- Placeholders: `#6c757d`
- Focus: light orange `#fdc197` border added

### Button

- Primary: `#fb771a` bg, white text, 54px height, 4px radius
- Padding: `0.375rem 0.75rem` base + `3rem` horizontal (Register button)
- Hover: `#eb6304`
- Focus ring: `0 0 0 0.2rem rgba(252, 139, 60, 0.5)`
- Transition: 0.15s ease-in-out on color, bg, border, box-shadow

### Checkbox

- Custom checkbox: 20×20px, 4px radius
- Unchecked: `#e6e6e6`
- Checked: `#fb771a` with white checkmark icon
- Caption: 14px, `#888` color
- Terms/Privacy links: `#888` with underline

### Image Panel

- 20% width on desktop, full width on mobile
- `background-size: cover`, `background-position: center`
- Original: `images/bg_1.jpg` → replace with `https://picsum.photos/seed/signupcraft/800/1200`

## Implementation Tasks

### 1. Scaffold

- [ ] Copy simplest existing app (e.g. `signupnest`) as base
- [ ] Rename to `signupcraft`, update package.json name to `@free-react-templates/signupcraft`
- [ ] Set up `public/CNAME` with `signupcraft.free.componentdock.com`
- [ ] Set `homepage` in package.json to `https://signupcraft.free.componentdock.com`
- [ ] Run `npm install` at root for lockfile registration

### 2. Components

- [ ] `src/App.tsx` — main split layout (flex, full viewport height)
- [ ] `src/components/FormPanel.tsx` — left panel (80%, `#f6f7fc` bg, container, heading, form)
- [ ] `src/components/ImagePanel.tsx` — right panel (20%, background image cover)
- [ ] `src/components/RegistrationForm.tsx` — form with all 7 fields + checkbox + button
- [ ] `src/components/FormField.tsx` — reusable input wrapper (label + input with styling)
- [ ] `src/components/TermsCheckbox.tsx` — custom checkbox with caption and links

### 3. Styling

- [ ] `src/index.css` — Tailwind entry + `@theme` tokens (brand-primary `#fb771a`, content-bg `#f6f7fc`)
- [ ] Responsive layout: desktop side-by-side, mobile stacked
- [ ] Input styling: no border, box-shadow, 54px height, 4px radius
- [ ] Button styling: orange bg, white text, 54px height, hover darken
- [ ] Custom checkbox styling matching original

### 4. Tests (TDD)

- [ ] Test split layout renders two panels
- [ ] Test heading "Register" and subtitle text
- [ ] Test all 7 form fields render with correct placeholders
- [ ] Test first name + last name side by side on desktop
- [ ] Test email field full width
- [ ] Test phone + website side by side on desktop
- [ ] Test password + re-type side by side on desktop
- [ ] Test checkbox is checked by default
- [ ] Test checkbox caption with links
- [ ] Test Register button styling (orange bg, white text)
- [ ] Test button hover state
- [ ] Test input focus state
- [ ] Test mobile responsive layout
- [ ] Test footer links to Component Dock
- [ ] Verify 100% coverage

### 5. Polish

- [ ] Add Google Fonts link to `index.html` (Roboto 300, 400)
- [ ] Footer: "Made with Component Dock" / link to componentdock.com
- [ ] No ColorLib references in any app source file
- [ ] Run `scripts/verify-app.sh signupcraft`
- [ ] Commit: `feat: signupcraft (ColorLib signup-form-02) registration form template`
- [ ] Open PR, merge, deploy

## Key Differences from Original

- Placeholder image instead of `images/bg_1.jpg`
- No icomoon icon font (use lucide-react checkmark for checkbox)
- Tailwind CSS 4 instead of custom CSS framework
- React 19 + TypeScript instead of plain HTML/CSS/JS
- Component Dock footer replaces any original attribution

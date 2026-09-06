# DimBox — Implementation Tasks

## Source

- ColorLib template: Modal 08
- Preview: https://preview.colorlib.com/theme/bootstrap/modal-08/
- Name: `dimbox` (apps/dimbox)

## Task list

### 1. Scaffold app

- Copy simplest existing app (e.g. `apps/bolt/`) to `apps/dimbox/`
- Rename package to `@free-react-templates/dimbox`
- Update `public/CNAME` → `dimbox.free.componentdock.com`
- Update `package.json` homepage → `https://dimbox.free.componentdock.com`
- Add Poppins font to `index.html` via Google Fonts `<link>`

### 2. Design tokens in index.css

```
@theme {
  --color-brand: #fb8691;
  --color-gradient-start: #915eff;
  --color-gradient-end: #ff8e59;
}
```

### 3. Components (src/components/)

#### TriggerSection.tsx

- Centered container with page title "DimBox"
- Pill button (bg-brand, white text, rounded-full) "Open Confirmation Modal"
- Button calls `setModalOpen(true)`

#### ConfirmationModal.tsx

- Portal-based modal overlay (semi-transparent backdrop)
- Modal dialog centered (max-w-md, shadow-2xl)
- Header: gradient background (`bg-gradient-to-br from-[#915eff] to-[#ff8e59]`), h-56
  - Close button (X icon, absolute top-right, white)
  - "You've Got Mail!" heading (text-white, font-bold)
- Skewed white dividers (::before/::after with skewY)
- Body: centered content
  - Circular icon area (200×200, rounded-full, bg-brand) with Mail icon from lucide-react
  - "We sent confirmation link to:" (text-lg)
  - Email address display "johndoe@gmail.com" (font-extrabold, text-xl)

#### Footer.tsx

- Component Dock link (required)

### 4. App.tsx

- Compose TriggerSection + ConfirmationModal + Footer
- State: `modalOpen` boolean, controlled by TriggerSection button and Modal close

### 5. Tests (colocated *.test.tsx)

- TriggerSection: renders title and button, button click opens modal
- ConfirmationModal: renders when open, has dialog role, shows content, closes on X, closes on backdrop, closes on Escape
- Footer: renders Component Dock link
- App: integration — button opens modal, modal shows content

### 6. Verify

- `npm run verify:app dimbox`
- Coverage 100%

## Fidelity notes

| Aspect          | Original (Modal 08)                      | DimBox recreation                         |
| --------------- | ---------------------------------------- | ----------------------------------------- |
| Layout          | Bootstrap 4 grid, centered               | Tailwind flex, centered                   |
| Modal mechanism | Bootstrap modal JS                       | React state + portal                      |
| Icon            | SVG email image (`images/email.svg`)     | lucide-react `Mail` icon                  |
| Close behavior  | data-dismiss="modal"                     | React state + onKeyDown (Escape)          |
| Gradient        | linear-gradient(45deg, #915eff, #ff8e59) | Tailwind bg-gradient-to-br                |
| Button shape    | border-radius: 40px (Bootstrap .btn)     | rounded-full (Tailwind)                   |
| Fonts           | Poppins via Google Fonts                 | Same — loaded in index.html               |
| Skewed dividers | ::before/::after skewY ±10deg            | CSS pseudo-elements or Tailwind clip-path |

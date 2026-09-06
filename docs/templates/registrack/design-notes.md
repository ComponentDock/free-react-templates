# Registrack — Design Notes

## Structure (section order)

1. **Page body** — centered launch button ("Launch modal") on full-viewport page
2. **Modal overlay** — semi-transparent dark backdrop
3. **Modal dialog** — centered, max-width ~800px (modal-lg), 7px border-radius
4. **Modal body (split-screen)**
   - Left column (50%): background image, cover, centered
   - Right column (50%): light gray background (#efefef), padding
     - Heading: "Registration form"
     - Paragraph description
     - Country dropdown (select)
     - Full Name text input
     - Email Address email input
     - Date of Birth: 3-column row (MM / DD / YYYY)
     - Submit button (full-width)
     - Privacy policy note
5. **Footer** — Component Dock link (replacing original attribution)

## Fidelity notes

### Layout

- Identical split-screen structure to Modal 15 (50/50 flex)
- Uses Bootstrap grid for Date of Birth row (`row mb-4` with 3 `col-md-4`)
- React version: Tailwind flex with `w-1/2` halves, `grid grid-cols-3` for DOB

### Typography

- Font: Roboto (weights 300, 400) — load via Google Fonts link in index.html
- Heading: 22px, color #000
- Paragraph: 14px, color #777, font-weight 300
- Body text (outside modal): #b3b3b3

### Colors

- Background: light gray (#efefef) — NOT white like Modal 15
- Text heading: black (#000)
- Text body: #777
- Text paragraph (outside modal): #b3b3b3
- Form input border: none (no visible border)
- Form input shadow: `0 1px 3px 0 rgba(0,0,0,0.2)`
- Custom select: same shadow treatment
- Button primary: Bootstrap blue (#007bff or Tailwind blue-600)
- Privacy note: #999, link bold #555

### Modal chrome

- Border-radius: 7px on outer modal
- Button radius: 4px
- Shadow: `0 10px 50px -10px rgba(0,0,0,0.9)`
- Form inputs: NO box-shadow override (shadow is the default state)
- Overlay: Bootstrap default

### Unique elements vs Modal 15

1. **Country dropdown**: full country list (100+ options), styled with shadow
2. **Date of Birth**: 3-column input row (MM/DD/YYYY) — not present in Modal 15
3. **Background**: #efefef (light gray) vs #fff (white)
4. **Input styling**: shadow-based (no border) vs border-based in Modal 15

### Placeholder assets

- Image: use `https://picsum.photos/seed/registrack/600/800`
- No icon fonts needed (use lucide-react for X/close icon)
- Country list: use a hardcoded array of common countries (top 50-60)

## Component breakdown

- `App.tsx` — renders launch button + modal state
- `components/Modal.tsx` — the modal overlay + dialog
- `components/RegistrationForm.tsx` — right side form (heading, fields, button, note)
- `components/CountrySelect.tsx` — dropdown with country list
- `components/DateOfBirth.tsx` — 3-column MM/DD/YYYY inputs
- `components/CloseButton.tsx` — X button in top-right corner

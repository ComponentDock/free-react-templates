# Touchpoint — Implementation Todo & Design Notes

Source: ColorLib "Contact Form 01"
Preview: https://preview.colorlib.com/theme/contact-form-01/ (404 — screenshot used)

## Implementation order

1. Scaffold app from simplest existing contact-form-like app
   - Copy minimal app, rename package to `@free-react-templates/touchpoint`
   - Update `public/CNAME` → `touchpoint.free.componentdock.com`
   - Update `homepage` in `package.json`
   - Run `npm install` at repo root to register workspace in lockfile

2. Create `src/index.css` with Tailwind v4 theme tokens
   - `@theme` block: brand-blue (#3b82f6), icon-bg-blue (#60a5fa),
     page-bg (#f5f5f5), input-border (#e5e7eb), text-heading (#1f2937),
     text-body (#374151)
   - Import Google Fonts: Poppins (400, 600, 700)

3. Build form card component (`src/components/FormCard.tsx`)
   - White background card with padding (~40px)
   - "Get in touch" heading
   - Form with 4 fields:
     - Name (text) + Email (email) in a 2-column row
     - Subject (text) full width
     - Message (textarea) full width, min-height ~120px
   - All inputs: light gray border (#e5e7eb), no border-radius, padding
   - "Send Message" button: blue bg, white text, rounded (4px), left-aligned
   - Form submission: prevent default, no SPA navigation

4. Build contact info card component (`src/components/ContactInfo.tsx`)
   - Blue background (#3b82f6), padding (~40px)
   - "Contact us" heading in white
   - Four info items, each with:
     - Circular icon container (~44px, lighter blue bg #60a5fa, white icon)
     - Bold label + value text in white
   - Icons from lucide-react: MapPin, Phone, Send/Plane, Globe

5. Build page layout (`src/components/ContactSection.tsx`)
   - Two-column flex/grid layout
   - FormCard on left, ContactInfo on right
   - Gap between cards (~0 or small)
   - Responsive: stack vertically on ≤768px

6. Compose in `src/App.tsx`
   - Light gray background (#f5f5f5) on outer container
   - Centered max-width container (~900px)
   - ContactSection inside

7. Write tests (TDD)
   - FormCard renders heading, 4 fields, button
   - Fields accept input
   - Button has correct styling classes
   - ContactInfo renders heading and 4 items with icons
   - Responsive layout checks (card stacking)
   - 100% coverage

8. Update README / docs, commit, push

## Design notes

### Layout structure
- Outer page: light gray (#f5f5f5) background, centered content
- Max-width container: ~900px, centered
- Two-column flex layout: form card (left, ~55%), info card (right, ~45%)
- Cards sit flush or with minimal gap
- On mobile: stack vertically

### Color palette
- Page background: #f5f5f5 (light gray)
- Form card: #ffffff (white)
- Info card: #3b82f6 (blue-500)
- Info icon circles: #60a5fa (blue-400)
- Button: #3b82f6 (blue-500)
- Headings: #1f2937 (gray-800)
- Body text: #374151 (gray-700)
- Input borders: #e5e7eb (gray-200)
- Placeholder text: #9ca3af (gray-400)
- White text: #ffffff

### Typography
- Font: Poppins (Google Fonts)
- Card headings: 700 weight, ~24px
- Body/labels: 400 weight, ~14-16px
- Info labels: 700 weight (bold)
- Info values: 400 weight

### Form field styling
- Border: 1px solid #e5e7eb
- No border-radius (sharp corners)
- Padding: ~12px
- Placeholder text: gray-400
- Name + Email: side by side in a row (50% each)
- Subject: full width
- Message textarea: full width, min-height ~120px

### Button styling
- Background: #3b82f6 (blue)
- Text: white, bold
- Border-radius: 4px
- Padding: ~10px 20px
- Left-aligned (not centered)
- Hover: darken slightly (#2563eb or opacity change)

### Contact info card
- Full blue background
- Items stacked vertically with spacing (~20-24px between items)
- Each item: icon (in circle) + text block
- Icon circles: lighter blue (#60a5fa), ~44px diameter, centered icon
- Labels bold, values regular, all white text

### Fidelity notes
- Original uses Bootstrap grid; we use Tailwind flex/grid
- Original uses Font Awesome icons; we use lucide-react equivalents
- Form submission is prevent-default (SPA pattern)
- Contact info data is placeholder (not functional)
- Page title "Contact Form #01" can be omitted or kept as template name

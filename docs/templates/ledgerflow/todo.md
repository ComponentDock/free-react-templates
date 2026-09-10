# LedgerFlow — Implementation Notes

Source: ColorLib "Book Keeping" — https://colorlib.com/wp/template/book-keeping/
Preview: https://preview.colorlib.com/theme/book-keeping/ (404 — design from screenshot)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bookkeeping-free-template.jpg
Package: @free-react-templates/ledgerflow

## Structure order (top to bottom)

1. Top contact bar
2. Navigation bar (with mobile hamburger)
3. Hero section (full-width photo + overlay + CTA)
4. About Us (two-column)
5. Services (card grid)
6. Newsletter / CTA
7. Footer

## Component breakdown

| Component       | Notes                                                               |
| --------------- | ------------------------------------------------------------------- |
| ContactBar.tsx  | Full-width white bar; phone icon + text + number, email icon + email |
| Navbar.tsx      | Logo (blue circle + "$" + brand text), nav links, social icons;     |
|                 | mobile hamburger toggle with slide-down menu                        |
| Hero.tsx        | Full-width bg image (picsum), dark overlay, centered heading +      |
|                 | subheading + "GET STARTED" CTA button with drop shadow on text      |
| About.tsx       | Two-col: image left + text right (label, heading, divider, body,    |
|                 | two-col list with blue arrow icons)                                 |
| Services.tsx    | Section heading + responsive grid of service cards (icon + title +  |
|                 | description each)                                                   |
| Newsletter.tsx  | Heading + email input + submit button                               |
| Footer.tsx      | Company info, nav links, contact, copyright, "Component Dock" link  |

## Design fidelity notes

### Top Contact Bar
- Original: White background, left-aligned, phone icon + "Have a question?"
  + phone number, envelope icon + email. Slate gray text (#64748b), ~12–13px.
  Tight vertical padding (~8px).
- Implementation: `bg-white py-2 px-4` flex container. Use lucide-react icons
  (Phone, Mail). Text in `text-slate-500 text-sm`.

### Navigation Bar
- Original: White background, flex between left/center/right. Left: circular
  royal blue (#2563eb) icon with white "$" + "Book Keeping" text (dark navy
  #1e293b). Center: nav links in dark navy, ~14px. Right: social icons as
  white on blue circles. ~20px gap between links.
- Implementation: `bg-white py-3` flex container with `justify-between`.
  Logo: `rounded-full bg-blue-600 text-white` icon + brand text.
  Social icons: `rounded-full bg-blue-600 text-white p-2` buttons.
  Mobile: hamburger toggle revealing a dropdown menu.

### Hero Section
- Original: Full-width background photo with semi-transparent dark overlay.
  Centered text: heading (~44px, white, bold, drop shadow), subheading
  (~16px, white), "GET STARTED" button (royal blue #2563eb bg, white text,
  uppercase, ~4px border-radius, padding 12px 28px). ~500–600px tall.
- Implementation: `relative` container with `bg-cover bg-center` picsum
  image, dark overlay via `bg-black/50`. Content centered with `flex
  flex-col items-center justify-center`. Heading with `text-shadow`.

### About Us Section
- Original: Max-width ~1200px centered container. Two columns: left = image
  (business/financial photo), right = content. Content flow: "ABOUT US"
  label (small uppercase, #94a3b8), heading (~30px, dark navy #1e293b,
  bold), thin blue (#60a5fa) divider line (~60px), body paragraph
  (#64748b), two-column list items with blue right-arrow icons.
- Implementation: `grid grid-cols-2 gap-12 items-center`. Left = `<img>`,
  Right = label + heading + divider (`border-t-2 border-blue-400 w-16`) +
  text + list. Use lucide-react `ArrowRight` for list icons.

### Services Section
- Original: Section with heading and service cards in a responsive grid.
  Each card: icon (use lucide-react), title, description paragraph.
  Cards on white background with subtle border or shadow.
- Implementation: `grid grid-cols-1 md:grid-cols-3 gap-8`. Each card
  is a flex container with icon on top, title, description.

### Newsletter / CTA
- Original: Heading inviting email subscription, email input field, submit
  button in royal blue.
- Implementation: Centered section with heading, flex row of input +
  button. Input: `border rounded px-4 py-2`. Button: `bg-blue-600 text-white
  rounded px-6 py-2 uppercase`.

### Footer
- Original: Multi-column footer with company info, nav links, contact
  details, copyright. Must include "Component Dock" link.
- Implementation: `bg-slate-800 text-white` (or similar dark bg). Grid
  columns for company, links, contact. Copyright line at bottom with
  "Made with Component Dock" linking to https://www.componentdock.com/.

### Images (all via picsum.photos)
| Purpose         | Seed pattern              | Size       |
| --------------- | ------------------------- | ---------- |
| Hero background | ledgerflow-hero           | 1920×800   |
| About image     | ledgerflow-about          | 800×600    |
| Service icons   | (use lucide-react)        | —          |

### Animations
- Original: Scroll-triggered section reveals.
- Implementation: Use IntersectionObserver to trigger fade-in animations
  when sections enter the viewport. Tailwind `animate-fade-in` or custom
  keyframes.

## Implementation priority

1. Contact bar + Navigation (with mobile responsive toggle)
2. Hero section (photo, overlay, heading, CTA)
3. About Us (two-column with list)
4. Services grid
5. Newsletter/CTA section
6. Footer
7. Responsive polish
8. Animations (IntersectionObserver fade-in)
9. Tests (100% coverage)

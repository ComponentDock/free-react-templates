# BanquetWell — Implementation Tasks & Design Notes

**Source:** ColorLib The Venue (slug: `thevenue`)
**Preview:** https://preview.colorlib.com/theme/thevenue/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/thevenue-free-template.jpg

## Section-by-Section Implementation Order

### 1. Project Setup
- Copy simplest existing app as base
- Rename package to `@free-react-templates/banquetwell`
- Set up `public/CNAME` with `banquetwell.free.componentdock.com`
- Set `homepage` in package.json
- Add Google Fonts: PT Sans Narrow + a cursive substitute for Edward (e.g. 'Dancing Script' or 'Great Vibes')
- Define `@theme` tokens in `index.css`:
  - `--color-brand: #b49383`
  - `--color-accent: #c4ab9f`
  - `--color-red: #db5246`
  - `--color-dark: #232323`
  - `--color-dark-alt: #282828`
  - `--color-text: #636363`
  - `--color-muted: #a5a5a5`

### 2. Header Component (`Header.tsx`)
- Sticky positioning (`sticky top-0 z-50`)
- Logo: text "BanquetWell" (Edward font) + "restaurant" subtitle (PT Sans Narrow)
- Nav links: Home, About Us, Menu, Delivery, Blog, Contact
- Right side: reservation phone number
- Mobile: hamburger menu toggle with full-screen overlay
- Use `cn()` for class composition

### 3. Hero Section (`Hero.tsx`)
- Full-width, full-viewport-height section
- Parallax background image (use picsum.photos with a restaurant/food seed)
- Centered content: subtitle "BanquetWell is", heading "An Extraordinary Experience", paragraph
- Scroll-down indicator at bottom (chevron icon from lucide-react)
- Text: white on dark overlay

### 4. Intro Section (`Intro.tsx`)
- White background
- Subtitle "Something new" (Edward font, #b49383)
- Heading "An Extraordinary Experience" (PT Sans Narrow)
- Descriptive paragraph
- Two-column image grid (picsum.photos seeds)

### 5. Video Section (`VideoSection.tsx`)
- Parallax background image
- Centered text "Food for the soul"
- Circular play button (50% border-radius, white bg, #b49383 icon)
- Modal or external link for video playback

### 6. Signature Dish Section (`SignatureDish.tsx`)
- White background
- Two-column layout: left content, right image
- Left: subtitle, heading, 5-star rating (lucide Star icons), dish name + price
- Ingredient tag list (pill-shaped items)
- "Order Now" button: transparent, 2px solid #c4ab9f border, sharp corners, hover → #c4ab9f bg

### 7. Menu Section (`MenuSection.tsx`)
- White background overall
- Dark (#282828) title bar: "5 Stars" + star rating + "The Menu"
- Three columns: Starters, Main, Deserts
- Each dish: title + price row, ingredient tags, "Order Now" link with underline animation

### 8. Reservation Section (`ReservationSection.tsx`)
- Parallax background image
- Centered form on dark overlay
- Fields: date picker, time picker, party size dropdown (2–6 persons)
- "Make a Reservation" button: transparent, 2px solid border, sharp corners
- Note: use basic HTML inputs (date, time, select) — no external date picker library needed

### 9. Footer Component (`Footer.tsx`)
- Dark background (#232323)
- Three columns: Logo + copyright, About text, Contact info
- Replace Colorlib attribution with Component Dock link
- Copyright: "Made with ❤ by Component Dock" + link to https://www.componentdock.com/

## Fidelity Notes

- **Edward font**: the original uses a custom 'Edward' font. Use 'Dancing Script' or 'Great Vibes' from Google Fonts as a visually similar cursive alternative.
- **Parallax**: original uses a jQuery parallax plugin. Use CSS `background-attachment: fixed` for a native parallax effect, or a lightweight React parallax library.
- **Sharp-cornered buttons**: the original buttons have NO border-radius (sharp/square). Do not add rounded corners.
- **Star ratings**: use lucide-react Star icons, filled, in #b49383 color.
- **Section ordering**: preserve exact order: Header → Hero → Intro → Video → Signature Dish → Menu → Reservations → Footer.
- **Color palette**: warm, earthy tones. The tan (#b49383) is the dominant accent. Dark sections (#232323) provide contrast.
- **Placeholder images**: use `https://picsum.photos/seed/banquetwell-<n>/<w>/<h>` with consistent seeds per slot.

# RegPad — Design Notes

Source: ColorLib "Colorlib Regform 3" (https://colorlib.com/wp/template/colorlib-regform-3/)
Live demo: https://colorlib.com/etc/regform/colorlib-regform-3/

## Structure order (top to bottom)

1. Page wrapper (full viewport, pink-to-purple gradient)
2. Centered 780px card (table layout, split columns)
   - Left column: photo (50% width, cover, full height)
   - Right column: form panel
     - h2 "Registration Info"
     - Form with 5 fields + Submit button
3. Footer (Component Dock attribution)

## Section-by-section fidelity notes

### Page background
- Gradient: `linear-gradient(to top, #fbc2eb 0%, #a18cd1 100%)` — pink at
  bottom, lavender at top. Use Tailwind `bg-gradient-to-t` from pink-300
  to purple-300 or define custom tokens in `@theme`.
- Poppins font from Google Fonts loaded via `<link>` in `index.html`.
- Full viewport height (`min-height: 100vh`).

### Card container
- Max-width 780px (`.wrapper--w780`), centered.
- `display: table` on desktop for side-by-side columns.
- Background `#000` (card-3 overrides the base white).
- `border-radius: 10px`, `box-shadow: 0px 8px 20px 0px rgba(0,0,0,0.15)`.
- `overflow: hidden` (inherited from `.cl-card`).

### Left column — photo
- `display: table-cell; width: 50%`.
- Background image with `cover` positioning.
- Use `https://picsum.photos/seed/regpad-1/600/800` as placeholder.
- The original image (bg-heading-03.jpg) shows a person in dark clothing
  with a hat, surrounded by pink/magenta smoke against a dark background.
  The placeholder should evoke a similar moody/portrait feel.

### Right column — form panel
- `display: table-cell; padding: 57px 65px; padding-bottom: 65px`.
- Black background (inherited from card).
- h2 "Registration Info": 24px, white (#fff), font-weight 400,
  margin-bottom 36px.

### Form fields
- Each field wrapped in `div.cl-input-group` with:
  - `position: relative` (for the calendar icon positioning)
  - `margin-bottom: 33px`
  - `border-bottom: 1px solid rgba(255,255,255,0.2)` — thin translucent
    white underline
- Inputs: transparent bg, 16px, `#ccc` text/placeholder, `padding: 5px 0`.
- No box-shadow, no border except the parent group underline.
- Field order (verbatim from source HTML):
  1. Name — `type="text"`, placeholder "Name"
  2. Birthdate — `type="text"`, placeholder "Birthdate", calendar icon
     at `position: absolute; right: 8px; top: 50%; transform: translateY(-50%)`
     using lucide `Calendar` icon (18px, `#ccc`). Source uses
     Material-Design-Iconic-Font `zmdi-calendar-note` — replace with
     lucide-react.
  3. Gender — custom `<select>` with disabled "Gender" placeholder option,
     options: Male, Female, Other. Source uses a select2-styled wrapper;
     recreate with a native `<select>` styled to match (transparent bg,
     no browser chrome, underline border from parent group).
  4. Email — `type="email"`, placeholder "Email"
  5. Phone — `type="text"`, placeholder "Phone"

### Submit button
- Green pill: `background: #57b846`, `border-radius: 20px`, white text 18px,
  `line-height: 40px`, `padding: 0 33px`.
- Hover: `#4dae3c` with 0.4s ease transition.
- Wrapped in `div.p-t-10` (small top spacing).
- Source has `type="submit"` — keep it, but prevent real form submission
  (mock submit only).

### Footer
- Minimal attribution footer with link to https://www.componentdock.com/
  ("Component Dock"). The source has no footer content.

## Mobile behavior (<768px)
- Card switches to `display: block` (stacked).
- Image column: `width: 100%`, `padding-top: 400px`, `background-position: center center`.
- Form panel: `width: 100%`, `padding: 37px 30px`, `padding-bottom: 45px`.
- The card should fill the viewport width minus small margins.

## Implementation notes
- No JavaScript frameworks in the source — it's plain HTML/CSS with a
  select2 jQuery plugin for the dropdown. The React version uses native
  `<select>` and a date picker component (or simple text input with
  `type="date"`).
- The calendar icon is positioned absolutely inside the input group.
  Use lucide-react `Calendar` icon with `aria-label` for accessibility.
- The source page title says "Au Register Forms" — this is a ColorLib
  internal label, ignore it. The visible heading is "Registration Info".
- The source description says "Collecting details about attendees happens
  easier than you think with this free event registration template" —
  this confirms it's an event registration form.
- The Material-Design-Iconic-Font is used ONLY for the calendar icon.
  Replace entirely with lucide-react.

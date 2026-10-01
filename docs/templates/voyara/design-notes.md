# Voyara — design notes (ColorLib Platina)

Source slug: `platina` · Preview: https://preview.colorlib.com/theme/platina/
(verified 2026-10-01, HTTP 200, 27,002 bytes; `css/main.css` fetched).
Screenshot reviewed:
https://colorlib.com/wp/wp-content/uploads/sites/2/platina-free-travel-agency-website-template.jpg

## Structure order (1:1 with reference)

1. Navbar — white bar, bold wordmark left, hamburger right (panel:
   Home · Facilities · Service · Book); sticky shadow on scroll
2. Hero slider — bedroom photo + pink→peach gradient overlay (0.8),
   white 72px "Enjoy Holidays / with affordable Hotels", white pill
   "Start Searching", stacked white 40px up/down triggers (right edge)
3. Superb Facilities (image tiles) — centered header + 3 hover tiles
   ("Resort Holiday package")
4. Welcome split — photo left | gradient-text h1 "A very Lovely
   Welcome / to our Hotel" + copy + dark pill "Make Package of your own"
5. Superb Facilities (icon grid) — centered header + 6 icon cards
   (Easy Flight Search / Get Hotel Offers / Holiday Packages ×2)
6. Gallery strip — 6 full-width hover tiles
7. Book a Room — centered header + two-column validated form + gradient
   "Book Room" pill with arrow
8. Contact band — `#f9f9ff`, 4 centered columns (office/phone/email/
   support)
9. Footer — `#222222`: About Us · Newsletter (input + gradient arrow) ·
   Instagram Feed ×8 · Follow Us · footer-bottom + Component Dock link

## Section-by-section fidelity notes

- **Signature gradient:** `linear-gradient(to top, #f62e71 0%,
  #f9ab72 100%)` — pink bottom, peach top. It is the design's core
  motif: hero overlay, `.primary-btn`, card `.content-overlay` hovers,
  `.about-right h1` gradient text, facility-icon hover, newsletter
  submit button. Put `brand-gradient` into `@theme`; apply overlay with
  opacity 0.8.
- **Hero:** reference `.banner-area .fullscreen` is 700px in CSS with
  the overlay at opacity 0.8 over `header-bg.jpg` (bedroom: white
  bedding, sheer curtains, balcony). h1 is 72px/700 white
  (`banner-content h1`); `<br>` hidden on mobile. `.head-btn` is WHITE
  bg with dark uppercase text (NOT gradient — the gradient lives behind
  it as the overlay). Triggers: `.next-trigger`/`.prev-trigger`, 40px
  white squares, `#eee` border, hover `#f7427f` bg + white icon; they
  sit vertically stacked at the right edge, vertically centered. The
  original owl slider has 2 slides with identical copy — recreate 2
  slides with distinct photos.
- **Two "Superb Facilities" sections:** the reference genuinely has TWO
  sections with the same h1 — section 3 is the 3 image tiles
  (`.single-service`), section 5 is the 6 icon cards
  (`.sigle-facilities`). Don't merge them. The image tiles reuse the
  gallery hover pattern: `.content-overlay` = the brand gradient,
  opacity 0 → 1 on hover; `.content-details` (white h3) fades in from
  center (translate -50% + opacity transition ~0.4s).
- **Welcome split:** `.about-area` is a container-fluid row:
  `.about-left` photo col-lg-6 (no padding) + `.about-right` col-lg-6.
  The h1 "A very Lovely Welcome to our Hotel" is 25px with the gradient
  applied as TEXT (background-clip) — same hover group as
  `.sigle-facilities:hover .lnr` (icon turns gradient on card hover).
  `.btn-black`: `#222` bg, 1px `#777` border, white uppercase, radius
  20px, hover → white bg / `#222` text / `#222` border.
- **Icon grid:** six cards in DOM = three unique items × 2 (the
  original pads a 2×3 grid by repeating Easy Flight Search / Get Hotel
  Offers / Holiday Packages with lnr-rocket / lnr-magic-wand /
  lnr-gift). Icons 35px, default `#777777`; h4 18px with big top
  margin (40px). Keep the ×2 repeat for 1:1 fidelity.
- **Gallery:** `.gallery-area` is container-fluid, six
  `.single-gallery` col-lg-2 tiles (sm-6), edge-to-edge, same hover
  pattern with "Resort Holiday package" title. Recreate 6/3/2 columns.
- **Booking form:** header centered; form fields are Bootstrap-style
  (white, light border, small radius). Left col-lg-6 holds a 2-col
  field grid (First Name | Last Name; Arrival | Departure; Room Type |
  Number Of Rooms; Adults | Childs); right col-lg-6 is the Message
  textarea. Original placeholder "Messege" — fix to "Message".
  Submit `.primary-btn`: gradient, uppercase white, radius 25px,
  line-height 42px, padding-left 30px / padding-right 60px, ArrowRight
  absolutely positioned at right 30px (shifts right ~5px on hover).
  Original posts to `booking.php` — recreation validates client-side
  and shows a success state.
- **Contact band:** `#f9f9ff` bg, four `.single-info` col-lg-3
  centered columns (h4 + paragraph). Copy: Visit Our Office (Dhaka
  address), Let's call us (Phone 01/02 + FAX), Let's Email Us (3
  emails), Customer Support (3 emails) — paraphrase in the recreation.
- **Footer:** bg `#222222`, padding-top 100px, four widgets
  (col-3/4/3/2): About Us; Newsletter ("Stay update with our latest" —
  fix to "Stay updated"; input + square gradient `.click-btn` arrow,
  radius 0); Instragram Feed (fix typo; 8 square thumbs instafeed);
  Follow Us ("Let us be social"; facebook/twitter/dribbble/behance —
  white icons turning gradient on hover). Footer-bottom is a centered
  copyright line — the original links ColorLib (CC BY); the recreation
  MUST link Component Dock instead.
- **Header detail:** `.default-header` is absolute over the hero at
  top with `background-color: #fff` — visually it's a solid white bar
  above the photo (screenshot). The scrolled variant adds
  `box-shadow: -21.213px 21.213px 30px rgba(158,158,158,0.3)`. The
  original has NO desktop nav links (hamburger only) — the menu panel
  is the recreation's React state; use the four original anchor names
  (fix "Falilities" → "Facilities").
- **Typography:** Poppins everywhere — body 14px/300 `#777777`,
  line-height 1.625; headings 600 `#222222` (h1 36px, h4 18px);
  hero h1 72px/700 white; about h1 25px gradient text. Load
  300/400/500/600/700 via Google Fonts.
- **Pills everywhere:** radius 20px (head-btn, btn-black) / 25px
  (primary-btn) — no square buttons except the newsletter arrow
  (radius 0) and the 40px square triggers/inputs (bootstrap small
  radius on form fields is fine).

# Wanderport — design notes

Recreation of ColorLib **Travelasia** (creative travel agency booking
template). Source: https://colorlib.com/wp/template/travelasia/ ·
Preview analyzed: https://preview.colorlib.com/theme/travelasia/
(HTTP 200, 33,399 bytes HTML + 13,172 bytes `css/main.css`; 2026-10-01;
saved to `/tmp/travelasia.html`, `/tmp/travelasia-main.css`).
Screenshot reviewed: `travelasia-free-creative-travel-agency-booking-template.jpg`
(served as AVIF 1200×958; hero treatment authoritative; demo brand
"TRAVELASIA" + gradient triangle-A logo in the screenshot are NEVER reused).
The preview is a classic Colorlib build (bootstrap grid + jQuery tabs +
owl carousel + magnific-popup + Linearicons/FontAwesome).

## Structure order (1:1 with preview DOM)

1. Navbar — WHITE bar above the hero (not transparent): gradient triangle
   "A" mark + "TRAVELASIA" wordmark left; hamburger right (the screenshot
   shows the hamburger even at ~1200px — links collapse below `lg`).
   Anchor links: Home (#home), Booking (#booking), Packages (#package),
   Contact (#contact). Recreation: original gradient triangle mark +
   "wanderport" wordmark; lucide Menu icon; React-state mobile menu.
2. Hero — `banner-area`, 700px (`.fullscreen`), background photo
   `header-bg.jpg` cover/center + dark overlay `.overlay-bg
   rgba(0,0,0,0.8)` (CSS value; screenshot shows a dark-but-clearly-
   visible cliffside-village photo — tune the overlay to match the
   screenshot if 0.8 crushes the image). Content `col-lg-9` with
   `margin-top: 100px`: white Poppins h1 72px/700 lh 1.15 two lines
   "Wherever you go / it'll inside the World" (45px tablet, 36px mobile,
   `<br>` hidden on mobile); grey lorem subtext; gradient pill
   `.primary-btn` "See Details" + arrow span (right 30px → 20px hover).
3. Booking card — `booking-area { margin-top: -42px }`, white card
   `col-lg-8` centered. Bootstrap `nav-tabs`: links "flights", "hotels",
   "flights+hotels", "Holidays" — inactive `background: #fff3` radius 0,
   active solid white, no borders. Each tab pane: H4 "Book Your
   Flights|Hotels|Flights & Hotels|Holidays" + `booking-form` with six
   `.single-in` inputs (sharp corners, 13px weight 300, mb 30px): From +
   To (col-md-6 each), Start + Return + Adults + Child (col-md-3 each);
   right-aligned gradient `.primary-btn` "Send Message" + arrow. Source
   posts to `mail.php` → recreation: submit prevented.
4. Features — `feature-area section-gap` (120px). 4× `.sigle-feature`
   col-lg-3: Linearicons icon 35px `#777` → gradient-CLIPPED text on
   hover (`.sigle-feature:hover .lnr` background-clip), H4 mt-40 mb-20,
   grey blurb: Easy Flight Search, Get Hotel Offers, Holiday Packages,
   Dedicated Support. Recreation: lucide icons + group-hover
   gradient-clip.
5. Packages — `packages-area id="package"`. Centered `col-md-6
   header-text pb-80`: H1 "Popular Packages" + grey lorem paragraph.
   6× `.single-packages col-lg-2` (six across desktop; sm:6 = 2-up): each
   `.content` = photo (`p1..p6.jpg`) + `.content-overlay` filled with the
   SIGNATURE GRADIENT (grouped in CSS with `.primary-btn`) +
   `.content-details fadeIn-bottom` white H3 `.content-title` 18px/500
   "Resort Holiday package". Hover: gradient overlay + title fade up from
   bottom. Section `padding-bottom: 100px`. Recreation: picsum
   `wanderport-pkg-1..6`, group-hover gradient overlay.
6. Blogs — `blog-area section-gap`, `background-color: #000`. Centered
   `col-md-8 header-text`: white H1 "Our Recent Blogs" + white lorem
   paragraph. 3× `.single-blog col-lg-4`: photo `b1..b3.jpg`
   (`.f-img:hover { opacity: .5; transform: scale(1.05) }`); H4 white
   UPPERCASE `letter-spacing: 3px` mt-35 linking "Summer ware are
   coming" (source typo kept as-is or paraphrase); grey blurb; `.bottom`
   row with `border-top/bottom: 1px solid #222`, py-20: LEFT avatar
   `user.jpg` + white "Mark Wiens"; RIGHT `.meta`: "13th Dec" + lnr-heart
   "15" + lnr-bubble "04" (white spans, ml-10). Recreation: lucide
   Heart/MessageCircle, picsum seeds.
7. About — `about-area`. Row `justify-content-end align-items-center`:
   LEFT `col-lg-6 about-left` (`padding-left: 20%`, py-50): h1
   gradient-CLIPPED 25px on three lines — "Did not find your Package?"
   / "Feel free to ask us." / "We'll make it for you" — grey paragraphs
   (paraphrase the source's workplace-conduct lorem) + `.btn-black`
   "Make Package of your own" (bg `#222`, white, uppercase 14px, radius
   20px, padding 12px/28px; hover → white bg + `#222` text + border).
   RIGHT `col-lg-6 about-right no-padding`: full-bleed photo `c1.jpg`.
8. Contact info — `contact-info-area section-gap`. 4× `.single-info`
   centered: Visit Our Office (Dhaka address — 56/8, bir uttam qazi
   nuruzzaman road, west panthapath, kalabagan, Dhanmondi, Dhaka - 1205),
   Let's call us (Phone 01 / Phone 02 / FAX), Let's Email Us (3 emails),
   Customer Support (3 emails). H4 + detail lines; paraphrase the data
   but keep the same KIND (address, 2 phones + fax, 2×3 emails).
9. Contact form — `contact-area id="contact"`, `background: #fff`. Row:
   LEFT `col-lg-6 contact-left no-padding`: Google Maps `div#map` 545px
   tall (source embeds a real map — recreation: picsum
   `wanderport-map` placeholder or styled static block; NEVER the
   source's map/API key). RIGHT `col-lg-4` (pt-100 pb-100): `form-area`
   — name input "Enter your name", email input "Enter email address"
   (HTML5 email pattern), `.common-textarea` 150px "Messege" — inputs
   `border: 1px solid rgba(111,117,152,0.3)`, transparent bg, lh 48px,
   padding 0 25px (textarea 15px/25px), `#777`, radius 0 — then
   gradient `.primary-btn` "Send Message" + arrow. Submit → `mail.php` →
   recreation: prevented.
10. Footer — `footer-area section-gap` (has BOTH section-gap 120px AND
    `padding-top: 100px`), `background-color: #222222`. Four
    `single-footer-widget col-lg-3`: (a) About Us — grey lorem blurb;
    (b) Newsletter — "Stay update with our latest" + `#mc_embed_signup`
    form: input bg `#191919`, color `#777`, lh 38px, border none,
    padding-left 20px + `.bb-btn` GRADIENT square submit with arrow,
    white, radius 0, `margin-top: -40px` (overlaps the input's right
    edge); (c) "Instragram Feed" (source spelling) — `.instafeed` 8
    thumbs `i1..i8.jpg`, each `li width: 25%` + `img margin: 5px` →
    2 rows × 4; (d) Follow Us — "Let us be social" + `.footer-social`
    4 icons (facebook, twitter, dribbble, behance) `#ccc` → white on
    hover, gradient-CLIPPED into the icon on link hover. `footer-bottom`
    centered: copyright line `footer-text` `padding-top: 80px`, accent
    `footer-text a, footer-text i { color: #5cf2ee }` (aqua heart +
    link); source attribution links Colorlib → recreation MUST link
    `https://www.componentdock.com/` ("Component Dock") instead.

## Design tokens (verified in main.css)

- Font: `"Poppins", sans-serif` EVERYWHERE — body 300/14px `#777`
  lh 1.625; headings (h1/h3/h4/h6) 600 `#222` lh 1.2; hero h1 700
  white 72px. Load Poppins 300–700 via Google Fonts.
- Signature gradient: `linear-gradient(0deg, #9a52fd 0%, #57ffed 100%)`
  (purple bottom → teal/aqua top). Fills: `.primary-btn` (+`:after`
  hover wash), `.primary-btn2.primary-border:hover`, package
  `.content-overlay`, footer `.bb-btn`. Gradient-CLIPPED text:
  `.sigle-feature:hover .lnr`, `.about-left h1` (ALWAYS clipped — the
  about headline is gradient text at rest), `.footer-social a:hover`.
- Accent aqua: `#5cf2ee` — `::selection` background + footer-bottom
  link/icon color. Related: `#57ffed` (gradient teal stop), `#fcd2ff`
  (one stray light-pink rule), `#69d71c` (one stray green rule — not
  used in main sections; skip).
- Neutrals: heading `#222`/`#222222`, body `#777`, package title
  `#1a1a1a`, blog band `#000`, footer bg `#222222`, newsletter input
  `#191919`, social icons `#ccc`, borders `#ccc`/`#222` rules.
- Buttons: primary PILL — radius 25px, lh 42px, padding-left 30px /
  padding-right 60px (room for the absolute arrow span at right 30px →
  20px on hover), white 500; secondary `.primary-btn2` outlined `#222`,
  lh 28px, padding 0 30px, .8em, `.circle` radius 20px; `.btn-black`
  solid `#222` uppercase 14px radius 20px padding 12px/28px, hover
  invert.
- Inputs: booking `.single-in` radius 0, 13px, weight 300, mb 30px;
  contact `.common-input/.common-textarea` 1px
  `rgba(111,117,152,0.3)`, transparent, lh 48px / h 150px, padding
  25px; newsletter input bg `#191919` lh 38px pl 20px no border.
- Rhythm: `.section-gap { padding: 120px 0 }`; hero 700px; booking
  overlap -42px; packages pb 100px; footer pt 100px + bottom pt 80px;
  about-left pl 20% py 50px; contact columns pt/pb 100px.
- Hero overlay: `rgba(0,0,0,0.8)` (CSS); screenshot shows the photo
  clearly visible under a dark wash — match the screenshot visually.
- Tabs: inactive `#fff3` radius 0, active solid white, no borders.

## Fidelity notes for the implementer

- Section order is fixed by the preview DOM (listed above) — do not
  reorder or drop sections.
- Two signature moves to nail: (1) the purple→teal gradient is the only
  CTA fill on the page (hero CTA, both Send Message buttons, package
  hover overlay, newsletter submit) AND clips into text on three hover/
  rest states; (2) pill buttons (radius 25px) vs sharp inputs
  (radius 0) — that contrast is the theme's identity.
- The about headline is gradient text AT REST (not hover) —
  `background-clip: text` on the h1 itself.
- Blog band and footer are the only dark surfaces (pure `#000` and
  `#222222`); everything else is white.
- All icons → lucide-react (ArrowRight for button arrows, Menu for the
  burger, Heart + MessageCircle for blog meta, 4 social icons in the
  footer, 4 feature icons, avatar). No Linearicons/FontAwesome.
- All images → `picsum.photos/seed/wanderport-*` (hero, pkg 1..6,
  blog 1..3, author, about, map, insta 1..8). No copied assets.
- Tabs/booking forms/contact form/newsletter are no-ops (submit
  prevented); tab switching is React state.
- Provenance (`colorlib`, `travelasia`, "TRAVELASIA") lives ONLY in
  this spec, the design notes, and TEMPLATES.md — never in app files.
  Footer links Component Dock.

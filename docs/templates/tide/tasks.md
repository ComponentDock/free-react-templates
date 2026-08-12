# Tide (ColorLib "Waterboat") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-tide` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Waterboat" — yacht charter / sea travel website
  template (source: https://colorlib.com/wp/template/waterboat/). Listed in
  TEMPLATES.md line 529 (Bootstrap section); dup rows at lines 1225
  (Business) and 3015 (Travel) — same source, ONE implementation (line 529
  is the claim row; mark ALL THREE `[x]` after merge).
- **Naming:** the source name "waterboat" must NOT be reused. New name =
  **Tide** (verified free in `apps/`, `openspec/specs/`,
  `docs/templates/`). Fits the ocean/yacht theme.
- **Preview URL:** https://preview.colorlib.com/theme/waterboat/ (HTTP 200,
  27.8 KB, title "WaterBoat &mdash; Website Template by Colorlib"). Fetched:
  `/tmp/waterboat.html`, `/tmp/waterboat-style.css` (28.3 KB),
  `/tmp/waterboat-bootstrap.css` (27.9 KB), screenshot `/tmp/waterboat-shot.jpg`
  (1200×946, viewed in browser: white top info bar with blue-icon contact
  blocks, SOLID BLUE navbar with white links + active underline, luxury
  yacht photo hero with centered white headline "Enjoy The Ocean With Your
  Family" + blue READ MORE button + blue/white carousel dots; screenshot
  cropped after the hero — preview DOM authoritative for the rest). Live
  preview also viewed in the browser: footer is WHITE/light (NOT black —
  `.footer{background:#000}` is dead CSS overridden by `.bg-light`'s
  `!important`), CTA band is blue with an orange "CONTACT US" button,
  testimonial cards white with blue quote icons.
- **Visual design:** bright-blue `#1089ff` yacht-charter landing. Signature
  elements: SOLID BLUE navbar bar (centered links) below a light info bar;
  full-bleed photo hero slider; blue heading-underline bars (50×2px);
  Dancing Script serif section labels in blue ("About Us", "Destination",
  "Book Now", "Team", "Testimonial"); 50px `#efefef`-circle service icons;
  blue-overlay photo bands for stats + CTA; orange `#ffa139` CTA button;
  shadowed white destination cards with blue price pills; LIGHT `#f8f9fa`
  footer with blue-underlined headings.
- **Font:** `"Oswald"` (headings, navbar, buttons — uppercase 14px
  `letter-spacing:.2rem`, nav 16px weight 900), `"Dancing Script"` (serif
  section labels), `"Muli"` (body 300, 1.1rem, gray). Google Fonts `<link>`:
  `Oswald:400,700|Dancing+Script:400,700|Muli:300,400`.
- **Brand colors:** `#1089ff` brand blue (navbar bg, btn-primary, icons,
  active dots, heading underlines, price badges, footer links/underlines;
  hover `#0076e9`), `#ffa139` CTA orange (text `#212529`), heading `#000`,
  body gray 300, `#f8f9fa` light (info bar, destinations, footer), `#efefef`
  icon circles, `#888` footer text, `#ccc` testimonial borders, overlay
  `rgba(16,137,255,0.8)`, card shadow `0 0 30px -5px rgba(0,0,0,0.2)`.
- **Structure (1:1 from the preview DOM):**
  1. `div.header-top.bg-light` — row: logo image (col-6 col-lg-3; source
     comment `<!-- <strong>Water</strong>Boat -->` → recreate as text
     wordmark) + THREE `div.quick-contact-icons` (lg+ only): 40×40px blue
     circle (`border-radius:50%`, `background:#1089ff`) + h4 value +
     `.caption-text` caption — "San Francisco / Mountain View, Fake st.,
     CA", "000 209 392 312 / Toll free", "info@gmail.com / Gournadi, 1230
     Bariasl"; right: mobile hamburger (`site-menu-toggle`, lg hidden).
  2. Navbar `div.site-navbar` (nested inside header-top in the DOM but a
     distinct SOLID BLUE bar — `.sticky-wrapper .site-navbar {
background:#1089ff }`, sticky on scroll) — centered `ul.site-menu`
     (Oswald uppercase 16px 900, white, padding 20px): Home (active, 2px
     WHITE underline bar `left/right:20px`) · About Us · Services ·
     Testimonials · Blog · Contact. Mobile: offcanvas `div.site-mobile-menu`
     panel + dark overlay (recreate with `aria-expanded`).
  3. Hero `div.hero-slide.owl-carousel.site-blocks-cover` — TWO slides
     `div.intro-section` with inline `background-image` (hero_1.jpg /
     hero_2.jpg): slide 1 `col-lg-7 ml-auto text-right` h1 "Explore,
     Discover The Ocean" + p + `a.btn.btn-primary.py-3.px-5` "Read More";
     slide 2 `col-lg-7 mx-auto text-center` h1 "Enjoy The Ocean With Your
     Family". Dots: `.owl-dots` bottom-center, 18×4px bars (white, active
     `#1089ff`). Nav arrows: 70px white circles with black chevron, hover
     `#1089ff` bg + white icon. Render both slides statically.
  4. About `div.site-section` (white) — `col-md-6` image (hero_2.jpg) +
     `col-md-6`: `span.text-serif.text-primary` "About Us" + `h3.heading-
92913.text-black` "Welcome To Our Website" (50×2px blue underline
     `:after`) + 2 lorem paragraphs + `a.btn.btn-primary.py-3.px-4` "Learn
     More".
  5. Services `div.py-5` — THREE `col-md-6.col-lg-4` `div.service-29283`:
     `span.wrap-icon-39293` (50px `#efefef` circle, blue icon: flaticon-
     yacht / flaticon-shield / flaticon-captain → lucide anchor/shield/
     user-check) + h3 "Luxuries Yacht" / "30 Years of Experience" / "Good
     Captain" + lorem.
  6. Stats `div.site-section.bg-image.overlay` (inline hero_1.jpg + blue
     overlay `rgba(16,137,255,0.8)`) — FIVE `div.counter-39392` (white h3
     Oswald + white span): 349 Number of Yacht · 7000+ Customers Satisfied ·
     120 Number of Staffs · 493 Sea Destinations · 230 Professional Sailors.
  7. Destinations `div.site-section.bg-light` — centered header
     (`span.text-serif.text-primary` "Destination" + `h3.heading-92913.text-
center` "Our Destinations"); SIX `col-md-6.col-lg-4.mb-4` cards
     `div.service-39381` (white, `box-shadow:0 0 30px -5px rgba(0,0,0,0.2)`):
     image, `div.p-4`: h3 18px link "Croatia &mdash; Columbia" (blue
     location icon), date row (calendar icon + "Sep. 05 &mdash; Oct. 15"),
     blue price badge `span.bg-primary` "$600" (radius 4px, padding 5px 10px,
     white text).
  8. Booking `div.site-section` (white) — `col-md-7` image (hero_1.jpg) +
     `col-md-5`: "Book Now" serif label + h3 "Book A Yacht" + `form.row`:
     Full Name · Number of People · Date From (datepicker → plain input) ·
     Date To (datepicker → plain input) · select "Yacht You're Interested
     in" (Motor Yacht / Hi-Speed Yacht / Premium Yacht / Presidential Yacht)
     · Email Address · Phone Number · Notes textarea · submit
     `btn.btn-primary.py-3.px-5` "Book Now".
  9. Team `div.site-section` (white) — centered header "Team" + "Our Team";
     FOUR `col-lg-3.col-md-6` `div.person`: `figure` with image +
     `div.social` (stacked 40px white squares bottom-left: facebook, twitter,
     linkedin) + `div.person-contents` (text-center): h3 black "Craig
     Daniel" + `span.position` blue "Engineer".
  10. Testimonials `div.site-section` (white) — centered header "Testimonial"
      - "What Customer Saying..."; THREE `col-md-6.col-lg-4` cards
        `div.testimony-39291` (1px `#ccc` border, radius 4px, padding 30px):
        blue quote icon, blockquote lorem, vcard: 50px circle avatar +
        strong blue "John Doe" + span "CEO and Co-Founder".
  11. CTA `div.site-section.bg-image.overlay` (inline hero_2.jpg + blue
      overlay) — centered h2 white "Get In Touch With Us" + p.lead white +
      `a.btn.btn-warning.py-3.px-5.text-white` "Contact Us" (`#ffa139`
      orange).
  12. Footer `div.footer.bg-light` (`#f8f9fa` — NOT black) — FOUR `col-lg-3`:
      (1) brand image → text wordmark + lorem + "Learn More" link; (2)
      "Our Company": About · News · Services · Our Team · Careers · Projects;
      (3) "Our Services": Industrial · Construction · Remodeling; (4)
      "Contact": Help Center · Support Community · Press · FAQ · Our
      Partners. Headings `h3.footer-heading` black uppercase 16px with
      `span` 2px blue bottom border; links blue underlined. Bottom
      `div.copyright` (padding-top 7rem, centered, gray): copyright +
      MANDATORY Component Dock link (https://www.componentdock.com/), NO
      ColorLib credit.
- **Source quirks:** footer copyright credits ColorLib (replace with
  Component Dock); `.footer{background:#000}` CSS is DEAD — the footer is
  light (`.bg-light` !important wins, confirmed in live preview); logo is an
  image (use a text wordmark); hero owl carousel clones slides (render 2
  statically); nav links point to subpages (keep plain links); date fields
  use bootstrap-datepicker (plain text inputs fine); stats/CTA bands use
  fixed photos (picsum seeds); navbar is nested in header-top in the DOM but
  renders as its own blue bar.

## Implementation tasks (for the implementer stream)

- [ ] Branch `feat/template-tide` off main; copy the simplest existing app;
      rename package to `@free-react-templates/tide`; `npm install` at root
      so package-lock.json registers the workspace.
- [ ] Write `apps/tide` tests FIRST (red): one `describe` per component,
      scenario-style `it` blocks mirroring the spec's Gherkin scenarios;
      100% lines/functions/branches/statements. NOTE: desktop + mobile navs
      render duplicate links — use `getAllByRole` and index the mobile one
      last.
- [ ] `src/index.css` `@theme` tokens: `--color-brand: #1089ff`,
      `--color-brand-hover: #0076e9`, `--color-accent: #ffa139`,
      `--color-ink: #000`, `--color-light: #f8f9fa`, `--color-icon-bg:
    #efefef`, `--color-muted: #888`; fonts Oswald + Dancing Script + Muli
      via `<link>` in `index.html`.
- [ ] Components: `InfoBar` (logo + 3 contact blocks + hamburger),
      `Navbar` (blue bar, centered links, active underline, sticky, mobile
      panel), `Hero` (2 static slides + dots + arrows), `About`,
      `Services` (3 circular-icon cards), `Stats` (blue overlay + 5
      counters), `Destinations` (6 cards + price badges), `Booking` (form
      with labeled fields + select), `Team` (4 persons + social squares),
      `Testimonials` (3 bordered cards), `Cta` (blue band + orange button),
      `Footer` (4 columns + Component Dock credit).
- [ ] Placeholder images `picsum.photos/seed/tide-<n>/<w>/<h>`; icons from
      lucide-react (map-pin, phone, mail, menu, x, anchor, shield,
      user-check, calendar, message-quote; facebook/twitter/linkedin as
      inline SVGs — lucide has NO brand icons); no ColorLib assets/strings
      anywhere in `apps/`.
- [ ] `public/CNAME` = `tide.free.componentdock.com`; package.json
      `homepage` = `https://tide.free.componentdock.com`.
- [ ] Gate: `scripts/verify-app.sh tide` (typecheck + lint + 100% coverage +
      build) — FAST_MODE; full `npm run gate` runs in CI.
- [ ] PR description: source template, preview URL, design tokens, what
      differs (name, text wordmark, placeholders, paraphrased copy, no
      subpages, plain date inputs).
- [ ] After merge: mark TEMPLATES.md lines 529, 1225, 3015 `[x]` + surge URL + `npm run readme:status`.

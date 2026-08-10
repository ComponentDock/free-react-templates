# Gains (ColorLib Fitzone 2) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-gains`.

## Design notes (replication findings)

- **Original:** ColorLib "Fitzone 2" — dark-hero gym/fitness template
  (source: https://colorlib.com/wp/template/fitzone-2/). TEMPLATES.md has
  THREE copies (lines 399, 1016, 1848 — duplicate rows; one recreation
  covers all three; implementer marks ALL THREE `[x]`). WARNING: "Fitzone"
  (no "2", lines 1466/1847) is a DIFFERENT template — don't conflate.
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/fitzone2/ (HTTP
  200, 36.4 KB; title "Fitzone"). Preview slug is `fitzone2` (per
  products.js entry `["fitzone2","Fitzone2","Business",0,...]`), while the
  colorlib.com source page slug is `fitzone-2` (200 OK). Master stylesheet
  `css/style.css` (163 KB) fully extracted; libs: bootstrap, owl.carousel,
  animate, magnific-popup, flaticon, themify-icons.
- **Screenshot:** `fitzone2-free-template.jpg` (1200×946, viewed in
  browser) — dark hero photo of a muscular man lifting a barbell with
  blue/purple smoke effects; "JOIN NOW" huge condensed caps (JOIN red, NOW
  white), "GET IN SHAPE TODAY" red below; dark header bar with orange flame
  logo + white uppercase nav + pill gradient "GET STARTED" button; white
  content sections below (features section with red kicker "AWESOME
  FEATURE" visible at the cut). Demo brands itself "Fitzone"; recreation
  uses the NEW name **Gains**.
- **Visual design (from DOM + CSS tokens + screenshot):** high-energy gym
  aesthetic. Brand gradient red #fa0347 → orange #fc561c on all CTAs
  (pill buttons, offer arrow buttons, video play button) and two full-bleed
  gradient bands (about-us flank + extends section). Teko condensed
  uppercase headings (hero h2 = 160px!), Open Sans body. White sections on
  white with gray_bg (#f9f9ff) testimonial band. Very dark navy footer
  #080a19. Demo copy is placeholder lorem — paraphrase into fitness/gym
  copy.
- **Structure (1:1, section order):**
  1. `header.main_menu.home_menu` — `.container > nav.navbar.navbar-expand-lg`
     `.navbar-light`: `.navbar-brand` logo (image) + `.main-menu-item
justify-content-end` ul links: Home, about, courses, blog, Pages
     (dropdown: trainers, Single blog, Elements), Contact + `div.menu_btn`
     > `a.btn_2.d-none.d-sm-block` "Get started".
  2. `section.banner_part` — bg-image `img/banner_bg.png`; `.banner_text
.text-center > .banner_text_iner`: `h2` "Join <span>now</span>"
     (160px Teko 700 uppercase, #fa0347, span #fff) + `p` "get in shape
     today" (21px uppercase #fff, margin-top -10px).
  3. `section.about_us.section_padding` — `.section_tittle` centered
     (`p` "Awesome feature" 16px #fa0347 uppercase 600 + `h2` "Why you
     Join with us" 40px #2c3033 700 uppercase + `span` 14px #666666 copy).
     `div.row.justify-content-between` with 3× `div.col-lg-4`:
     - left `div.our_feature`: 2× `div.single_feature_item`
       (`div.feature_item_icon` flaticon + text h4/p: "Qualified
       Instructor", "fTons of Equipment");
     - center `div.about_img` (image + `div.overlay_icon` play overlay);
     - right `div.our_feature`: 2× `single_feature_item` (same pattern).
       (Section flank bg: linear-gradient(45deg, #fa0347 1%, #fc561c 99%).)
  4. `section.extends_part.section_padding` — `.container-fluid > .row`:
     `div.col-lg-5 > div.extends_img` (bg image + `div.extends_video` >
     `div.intro_video_iner` with `div.intro_video_icon` play button,
     gradient circle) + `div.col-lg-4.offset-lg-2 > div.extends_member_text`:
     `h2` "Make yourself stronger than your excuses" + `p` copy. Section
     bg: linear-gradient(to left, #fa0347 0%, #fc561c 50%, #fa0347 100%).
  5. `section.our_offer` — `.section_tittle` (`p` "best Courses" + `h2`
     "Why you Join with us" + copy) + `div.row.justify-content-between` >
     `div.col-lg-12`: FOUR `div.single_offer_part > div.single_offer`
     (img `offer_img_1..4.png` + `div.hover_text`: `h2` "Fitness Training"
     - `p` "Fly replenish dominion evening make veriety of" +
       `a.offer_btn` gradient circle with `span.flaticon-slim-right`).
  6. `section.review_part.gray_bg.section_padding` — `.section_tittle`
     (`p` "Testimonials" + `h2` "happy customer says") +
     `div.client_review_part.owl-carousel` with 3×
     `div.client_review_single.media` (quote + `div.client_review_text
.media-body`: name "Mosan Cameron" + role "Executive of fedex").
  7. `section.calculate_part.section_padding` — bg-image
     `img/calculate_bg.png`; `.section_tittle` (`h2` "Calculate your bmi"
     white on dark + copy) + gender radio group (Male / Female / Other —
     `input[type=radio]`) + `a.btn_2` "Book A Table" (gradient pill).
  8. `section.team_member_section.section_padding` — `.section_tittle`
     (`p` "our team" + `h2` "Meet with trainers") + `div.row` with 3×
     `div.col-sm-6.col-lg-4 > div.single_blog_item`: `div.single_blog_img`
     (trainer photo + `div.social_icon` overlay: ti-facebook,
     ti-twitter-alt, ti-instagram, ti-skype) + `div.single_blog_text`
     (`h3` name — source repeats "Anderew Eletch" twice; use 3 distinct
     names + `p` "Personal trainer").
  9. `section.sibscribe-area.section_padding` — bg-image
     `img/sibscribe_bg.png`; centered: `h1` "Start 15 days free trial"
     (white Teko) + `p` "Deep saw bearing seasons in two itself days
     hath" + email `input[type=email].form-control` (placeholder "Enter
     Email Address") + `a.btn_2.sibscribe-btm` "Subscribe".
  10. `footer.footer-area` (bg #080a19) — `.container > .row`: FOUR
      `div.single-footer-widget` columns: About Us (h4 + p), Important
      Link (WHMCS-bridge, Search Domain, My Account, Shopping Cart, Our
      Shop), Contact us (Address / Phone +2 36 265 (8060) / Email
      info@colorlib.com), Newsletter (`div.form-wrap` email input +
      button). Then `.copyright_text` row: `.copyright_part` (© line —
      paraphrase "© 2026 Gains. All rights reserved.") +
      `.copyright_social_icon.text-right` (social icons).
- **Design tokens (from css/style.css + DOM):**
  - Brand gradient **#fa0347 → #fc561c** (btn_2, offer_btn, video play,
    about flank, extends band); brand accent **#fa0347** (hero h2, btn_2
    2px border, section_tittle p, btn_4 bg).
  - Dark **#080a19** (footer); **#2c3033** (headings h1–h6);
    **#555555/#666666** (body, section_tittle span 14px); **#888888**
    (secondary); **#f9f9ff** (gray_bg testimonials); #fff.
  - Fonts: **Teko** (all headings, condensed uppercase) + **Open Sans**
    (body) via Google Fonts.
  - Buttons `.btn_2`: padding 12.5px 38px, radius **50px** (pill), 13px
    600 uppercase #fff, gradient bg (200% auto), **border 2px solid
    #fa0347**, hover = background-position right center. `.btn_4`: 14px
    #fff, padding 14.5px 43px, bg #fa0347.
  - Section title: p 16px uppercase #fa0347 600 / h2 40px #2c3033 Teko
    700 uppercase / span 14px #666666; margin-bottom 75px centered.
  - Hero h2: 160px Teko 700 uppercase #fa0347, line-height 130px, span
    #fff; p 21px uppercase #fff.
  - `.section_padding` 140px 0; footer 4 cols on #080a19.
- **Recreation decisions:** seeded picsum placeholders
  (`picsum.photos/seed/gains-<n>/<w>/<h>` — hero bg + about img + 4 offer
  imgs + 3 trainer photos + calculate bg + subscribe bg ≈ 11 seeds);
  lucide-react icons (play, arrow-right, menu, mail, phone, map-pin,
  search) + inline SVG brand icons for social (facebook, twitter,
  instagram, skype — lucide removed brand icons); Teko + Open Sans via
  Google Fonts `<link>`; testimonial "carousel" can be a static 3-item
  grid (index state; owl.carousel not needed); mobile nav collapse with
  aria; forms (subscribe + newsletter) with zod validation; gender
  selector = radio group.

## Implementation tasks

- [ ] Scaffold `apps/gains` (copy simplest existing app; package
      `@free-react-templates/gains`; register in package-lock via npm
      workspace install)
- [ ] `@theme` tokens: brand gradient stops `--color-brand` (#fa0347) and
      `--color-brand-2` (#fc561c), dark #080a19, headings #2c3033, grays
      (#555555, #666666, #888888, #f9f9ff)
- [ ] Google Fonts `<link>`: Teko + Open Sans in `index.html`
- [ ] Header: logo "Gains", uppercase nav (Home, About, Courses, Blog,
      Pages dropdown, Contact), pill gradient "Get started" button; mobile
      collapse toggle
- [ ] Hero: dark bg image + "Join now" 160px condensed headline (span
      contrast) + red uppercase sub-line
- [ ] About: section title + 3-column (2 features / center image / 2
      features) with icons
- [ ] Extends: gradient band, video play button, headline + copy
- [ ] Offer: 4 image cards with hover overlay (title, copy, gradient
      arrow button)
- [ ] Testimonials: gray bg, 3 quotes with name + role
- [ ] Calculate: bg image, heading, Male/Female/Other radio group,
      gradient pill CTA
- [ ] Team: 3 trainer cards, photo + hover social overlay + name + role
- [ ] Subscribe: bg image, "Start 15 days free trial", email form + pill
      Subscribe, zod validation
- [ ] Footer: 4 widget columns on #080a19 + copyright row with social
      icons
- [ ] Tests (Vitest + Testing Library, 100% coverage): header/nav, hero,
      about, extends, offer cards, testimonials, calculate, team,
      subscribe validation, footer
- [ ] `scripts/verify-app.sh gains`: typecheck + lint + vitest 100% + build
- [ ] Ship via PR `feat/template-gains`, merge immediately
- [ ] After merge: `[x]` on ALL THREE dup rows (lines 399, 1016, AND 1848) in TEMPLATES.md + surge URL; `npm run readme:status`; deploy
      check (curl surge URL)

## Fidelity watch-outs

- The hero headline is HUGE (160px Teko, line-height 130px) — "Join" in
  brand red, "now" in white (span). Don't shrink it; it's the section's
  signature.
- Primary buttons are PILL-shaped (50px radius) with the gradient fill AND
  a 2px #fa0347 border; hover slides the gradient (background-position
  right center). Not rectangular, not flat.
- Two full-bleed gradient bands (about flank + extends) — the brand
  gradient IS the section background there, not just the buttons.
- Offer cards: image + hover overlay (title + copy + gradient circle arrow
  button) — the overlay is the interaction.
- Team photos show a social icon overlay on hover (facebook, twitter,
  instagram, skype) — use inline SVG brand icons; lucide-react removed
  brand icons (they render undefined).
- Testimonials section uses gray_bg (#f9f9ff) — the only gray section.
- Footer is very dark navy #080a19 (not black #000) with light text.
- Calculate section: heading text is WHITE on the dark bg image.
- Source repeats trainer name "Anderew Eletch" twice and the button label
  "Book A Table" on the BMI calculator (template bug) — paraphrase into
  sensible gym copy (3 distinct trainer names; calculator CTA like
  "Calculate Now").
- Demo copy is placeholder lorem — paraphrase into fitness/gym copy; keep
  the same kinds of content (headline + subtext + CTA, card title + blurb).
- Preview slug is `fitzone2`, source page slug is `fitzone-2` — both map
  to the same template; use the preview URL for DOM/CSS reference.

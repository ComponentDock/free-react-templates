# Knot (ColorLib "Sunshine") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-knot` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Sunshine" — free wedding website template (page
  `<title>` "Weeding", a typo in the source; source:
  https://colorlib.com/wp/template/sunshine/). Listed in TEMPLATES.md under
  **Bootstrap (216)** (line 507; duplicate row at line 3100 — same template,
  one app only).
- **Preview REACHABLE (HTTP 200):** `https://preview.colorlib.com/theme/sunshine/`.
  DOM fetched (`/tmp/sunshine.html`, 56,602 bytes) + stylesheet
  `css/style.css` (`/tmp/sunshine.css`, 124,156 bytes) + TEMPLATES.md
  screenshot (`sunshine-free-template.jpg`, viewed in browser). Screenshot
  cross-checks the DOM: full-width outdoor couple photo hero with a large
  terracotta circle centered over the couple ("14 Jan 2020", "Anjelina &
  Jack — Wedding Ceremony", "Get Married"), white nav with "Sunshine" logo,
  floral-divider section headings, countdown on a photo band, groom/bride
  cards with a center timeline, masonry photo gallery, 3 program cards,
  white RSVP card, map with venue info, cream footer.
- **Aesthetic:** romantic / elegant / soft — blush white + warm copper
  `#C78665` + gold `#F2C64D` accents, Muli sans-serif body with Petit Formal
  Script cursive accents (hero + countdown digits).

## Structure (top → bottom, single page)

1. **Header** (`.header-area` / `.main-header-area`, padding 0 50px) —
   logo img left (recreate as a "Knot" wordmark/logo, no asset copy),
   `.main-menu` right-aligned: Home, Our Story, Gallery, Blog (dropdown),
   Pages (dropdown), Contact. Links 15px Muli `#727272`, padding 38px 23px,
   hover/active underline `::before` 2px `#C78665` scaleX(0)→1 (0.3s).
   Blog/Pages submenus: white 200px panel, 14px links, hover `#C78665`,
   opens on hover. Sticky on scroll: `.main-header-area.sticky` fixed,
   white bg, `box-shadow: 0 3px 16px rgba(0,0,0,0.1)`, links padding
   35px 18px. Mobile: `slicknav`-style hamburger menu (implement a simple
   responsive dropdown/off-canvas with the same links).
2. **Hero** (`.slider_area` padding 0 50px, `.slider_area_inner.slider_bg_1`
   height 800px, cover bg photo + `.overlay2::before` white 0.2 overlay) —
   `.slider_text` absolute center: `translate(-50%,-50%) rotate(45deg)`, bg
   `#C78665`, `padding: 126px 55px`, `border-radius: 50%`, z-10; decorative
   rings `:before` (`#C78665`, right -40px bottom -25px top -30px left -20px)
   and `:after` (`#F2C64D`, right -25px bottom -25px top -30px left -40px).
   Inner `.text_inner` `rotate(-45deg)`: span date "14 Jan 2020" (Petit
   Formal Script 18px white), h3 "Anjelina & Jack<br>Wedding Ceremony"
   (Petit Formal Script 36px white lh 46px mb 36px mt 23px), span "Get
   Married" (Muli 16px 600 white). Mobile: circle unrotates, 270px,
   padding 35px 25px, h3 20px; hero height 420–500px.
3. **Countdown** (`.weeding_countdown_area` — source typo, keep class
   semantics not the typo) — decorative `.flowaers_top`/`.flowaers_bottom`
   flower imgs (d-none d-lg-block; recreate with subtle lucide/floral
   decoration or omit on mobile). `.section_title text-center`: flowers
   divider img + span "14. January. 2020" (18px `#C78665` mt 20px mb 10px) +
   h3 "THE. WEDDING. Countdown" (36px Muli 400 uppercase mt 20px).
   `.countdown_area.counter_bg` photo band (padding 35px 35px 50px, bg-size
   cover, bg-position bottom); `.countdown_wrap` white (pt 30px pb 36px,
   `justify-content: space-evenly`): 4 `.single_countdown` — h3 digits 60px
   Petit Formal Script `#C78665` mb 17px + span labels 14px uppercase Muli.
   **Countdown target:** source date (14 Jan 2020) is past → dynamic future
   target (today + 90 days or a fixed near date); note in PR.
4. **Love story** (`.love_story_area`) — `.section_title`: flowers img +
   h3 "Our. Love. Story". Row of 3 (col-xl-4):
   - Left/right `.single_lover_story text-center`: `.story_thumb` 247×247
     circular portrait (border-radius 50%, margin auto) + span label
     "Groom"/"Bride" (24px Muli, mt 33px mb 11px, display block) + h3 name
     "Jack Wonner"/"Anjelina Kona" (36px `#C78665`) + p (16px lh 28px,
     mt 30px mb 20px) + `.social_links` 3 circular icon links (Facebook,
     Twitter, Instagram → lucide).
   - Center `.weding_time_line text-center` (bg `#FFFAF2`, padding 30px,
     mb 30px): 4 `.single_time_line` (pt 45px pb 48px): h3 24px `#C78665`
     400 + 16px p. Titles: Fast Meet, He Proposed, Love Story, Wedding Day.
5. **Gallery** (`.gallery_area`) — `.section_title`: flowers img + h3
   "Gallery. Photos". `container-fluid p-0` masonry: 9 `.single_gallery`
   cells 410px tall cover images (`.gallery_imag_1..9`), each an
   `.popup-image` anchor (magnific-popup lightbox → implement simple
   accessible lightbox or open-image; note in PR). Bootstrap col spans:
   4, 3, 5, 3, 5, 4, 4, 3, 5 (of 12) → flex row with those ratios,
   wrap 2-up on md, 1-up on sm.
6. **Program** (`.program_details_area`) — `.section_title`: flowers img +
   h3 "Program. Details". 3 `.single_program` cards (col-xl-4, padding
   20px, mb 30px, cover bg photos `program_bg_1..3`) each with
   `.program_inner` white panel (padding 57px 30px, text-center): time
   "16.00" / "20.00" / "22.00" + h3 "Wedding Ceremony" / "Lunch Time" /
   "WeParty Time" + lorem paragraph.
7. **RSVP** (`.attending_area` pt 95px pb 280px) — decorative flower_1
   (left, top -120px) / flower_2 (right, bottom -120px) illustrations
   (simplify/skip on mobile). `.main_attending_area` (z-9) → `.popup_box`
   white card (padding 51px 40px 60px, `box-shadow: 0 10px 30px
rgba(0,0,0,0.05)`): `.form_heading`: h3 "Are You Attending?" (36px
   `#C78665`) + p "Kindly respond before 30 August" (15px `#727272`,
   mb 34px). Form (action "#", no backend): input "Your Name" (50px h,
   1px #ddd border, padding 15px, mb 20px, placeholder `#919191`), input
   "Email", select guests (native styled select; source nice-select default
   "1 Guest"), textarea "Additional Message" (120px h), submit button
   `.boxed_btn3` "R.S.V.P" full-width (bg `#C78665`, white 20px text,
   padding 9px 26px; hover bg `#FAF0F0` color `#C78665`, 0.5s). Client-side
   validation (name + email) + success state; note in PR.
8. **Location** (`.location_area`, padding 0 50px, relative) — full-width
   Google Maps iframe (source; recreate with OpenStreetMap/Google embed
   without API key or styled static map placeholder; note in PR) +
   `.location_info` (absolute left 50% bottom 0, translateX(-50%), z-9) →
   `.location_inner` white 616px card (padding 54px 60px): `.location_top`
   (mb 42px): h3 "Location" (36px `#C78665`) + p "Mas Montagnette, 19 West
   21th Str." (16px `#727272` lh 28px) + p with span "+1 843-853-1810"
   (`#C78665`); `.address_info d-flex justify-content-between`: two
   `.single_address text-center`: h4 "Where to stay" / "Activities" (16px
   600 `#C78665`) + "4:00p – 12:00p" + "The Secret Shrine Club" (15px
   `#727272` lh 26px). Mobile: card static, full-width, padding 20px.
9. **Footer** (`.footer`) — `.footer_top` bg `#FFFAF2`, padding 73px 0,
   text-center: `.quick_links` ul inline-block: Home, Our Story, Gallery,
   Accommodation, Contact (15px Muli, `#1F1F1F`, margin 0 27px, hover
   `#C78665`); `.footer_border` + `.copy-right_text` white bar (pb 30px):
   "Copyright © <year> All rights reserved | This template is made with ♥
   by **Component Dock**" — Component Dock links
   https://www.componentdock.com/ (replace Colorlib credit).

## Implementation tasks (TDD, in order)

- [ ] `apps/knot` scaffold: copy the simplest existing app, rename
      package to `@free-react-templates/knot`, `public/CNAME` =
      `knot.free.componentdock.com`, `homepage` =
      `https://knot.free.componentdock.com`
- [ ] `src/index.css` `@theme` tokens: `--color-brand: #C78665`,
      `--color-brand-hover: #FAF0F0`, `--color-gold: #F2C64D`,
      `--color-body: #727272`, `--color-ink: #1F1F1F`,
      `--color-cream: #FFFAF2`, `--color-placeholder: #919191`,
      `--color-line: #ddd`; Google Fonts `<link>` Muli (400/600) + Petit
      Formal Script in `index.html`
- [ ] Header: logo wordmark, 6 nav links + 2 dropdowns, sticky on scroll,
      mobile menu — tests for content, sticky class, underline hover,
      mobile toggle
- [ ] Hero: 800px cover photo (picsum seed `knot-1`), white 0.2 overlay,
      rotated brand circle + gold ring, counter-rotated content, mobile
      unrotate — tests for badge content + responsive class
- [ ] Countdown: section title + date span, 4 units with live ticking
      (fake timers in tests), future target date
- [ ] Love story: groom card + timeline (4 steps) + bride card, social icon
      links — content + icon-link tests
- [ ] Gallery: 9-cell masonry (ratios 4/3/5/3/5/4/4/3/5), lightbox open +
      dismiss — tests for 9 cells + lightbox a11y
- [ ] Program: 3 cards with time/heading/paragraph — content tests
- [ ] RSVP: 4 fields + brand button, validation (empty name / bad email),
      success state — validation + submit tests
- [ ] Location: map embed + venue card (heading, address, phone, two
      address columns) — content tests
- [ ] Footer: cream quick links + white copyright bar with Component Dock
      link (href https://www.componentdock.com/)
- [ ] `bash scripts/verify-app.sh knot` (typecheck + lint + 100% coverage + build) — FAST_MODE gate
- [ ] PR: source template, preview URL, tokens, deviations (name, dynamic
      countdown date, RSVP validation/no backend, map embed choice,
      lightbox choice, placeholder images)

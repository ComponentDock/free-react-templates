# Swole (ColorLib Fitfloss) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-swole`.

## Design notes (replication findings)

- **Original:** ColorLib "Fitfloss" — fitness studio / body building
  template (source: https://colorlib.com/wp/template/fitfloss/).
  TEMPLATES.md has TWO copies of this item (lines 396 and 1841 — mark
  EVERY copy `[x]` when done).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/fitfloss/
  (HTTP 200, 26 KB rendered DOM, title "Fitfloss"). Stylesheet
  `css/style.css` (~158 KB) main, plus animate, bootstrap.min,
  magnific-popup, nice-select, owl.carousel.min, themify-icons. Fonts come
  from a Google Fonts `@import` inside `style.css`:
  `Anton | Oswald:300,400,500,600` — headings default to **Anton**, body/
  nav copy uses **Oswald**; load both from Google Fonts `<link>`s in the
  recreation. Cross-checked against the TEMPLATES.md screenshot
  (`fitfloss-free-template.jpg`, viewed in browser 1200×946) and a live
  browser render — designs match. The demo brands itself "Fitfloss";
  recreation uses the NEW name **Swole**.
- **Visual design (from DOM + CSS tokens + screenshot):** dark, high-energy
  fitness landing page — full-bleed hero photo of a muscular man crouching
  on a blurred city street, dimmed by a dark gradient overlay
  (rgba(10,10,10,0.9) → rgba(50,50,50,0.2)); white tagline "Working hard
  in order to get perfect shape." + huge white uppercase condensed headline
  "FITFLOSS FITNESS STUDIO" (Oswald 100px) + red "Browse Services" button;
  top nav white centered links, shield-shaped red logo block left, red
  phone CTA right; on scroll the header becomes fixed with a red `#ff0000`
  background. Below: white "Our Popular Courses" (3 cards, red prices,
  black-outline "Apply Course" buttons); red-header schedule table (6
  "Fitness Aero" rows); 4 icon features (dumbbell, clock, user, tag);
  about split with text left + workout photo right; black-bordered
  testimonial cards with round avatars; dark rope-texture "Many more
  Features are Waiting!" CTA; solid **red `#ff0000` footer** with About
  Us / Contact / Newsletter columns + square social icons. Demo copy is
  placeholder lorem ("As you pour the first glass of your favorite
  Chianti...", "Helena Phillips / CEO at Google") — paraphrase into
  fitness-themed copy.
- **Structure (1:1, section order):**
  1. Header (`header.main_menu`): `position: absolute; top: 0`, z-index
     999, full width, over hero. Navbar (`nav.navbar.navbar-expand-lg.
navbar-light`): brand left `.navbar-brand` (120×130px logo block with
     red shield bg image); nav centered `.main-menu-item
justify-content-center` — Home / About / Courses / Blog▾ (Blog,
     Single Blog) / Pages▾ (Gallery, Course Details, Course Shedule,
     Elements) / Contact — white Oswald 15px uppercase, padding 30px 24px,
     hover `#ee390f`; red `btn_1` phone CTA right ("+440 1234 654 953",
     `d-none d-lg-inline-block`, padding 11.5px 33px, margin-left 41px).
     Mobile ≤991px: hamburger toggler, collapsed links black, dropdown bg
     `#fafafa` (items black 14px, hover red). Scroll: `.menu_fixed` class
     → fixed, **red `#ff0000` bg**, shadow 0 10px 15px rgba(0,0,0,0.05),
     logo block 90px with bg image removed, nav hover white.
  2. Hero/banner (`section.banner_part`): bg photo (banner_bg.png, cover)
     - `:after` overlay `linear-gradient(to right, rgba(10,10,10,0.9) 0%,
rgba(50,50,50,0.2) 100%)`; `.banner_text` 1080px tall (650px ≤991px,
       700px 992–1200px); content left (col-lg-7): `<p>` tagline (white 16px
       w300 capitalize, 100×1px white rule below) + `<h1>` "Fitfloss Fitness
       Studio" (Oswald white uppercase **100px** w700 lh 120px, mb 64px;
       25px ≤576px) + `btn_1` "Browse Services".
  3. Popular courses (`.popular_cource.section_padding`, padding 140px 0):
     centered `.section_tittle` h2 "Our Popular Courses" (48px `#222` w700
     lh 45px) + intro p; 3 `.single_popular_cource` cards (col-lg-4
     col-sm-6): photo + h3 title (21px black w400, margin 38px 0 17px)
     with **red price span floated right** (`#ff0000`) — Basic Body
     Building $140.00 · BIntermediate Body Building $200.00 (source typo —
     recreate "Intermediate Body Building") · Advanced Body Building
     $250.00 + lorem p + `btn_2` "Apply Course" (mt 42px).
  4. Schedule (`.shedule_part.overflow-hidden`, container-fluid): left
     `.shedule_img` photo (col-lg-5, hidden <992px) + right
     `.shedule_content` (col-lg-6): h2 "Get Your Schedule" (48px, mb 20px)
     - intro p + `table.table-bordered`: thead **red `#ff0000` white
       text** (Course Name / mon / the / wed / thu / fri, padding 30px 35px,
       w400) + 6 tbody rows "Fitness Aero" (th + td times 02.00 / 10.10 /
       02.00 / 02.10 / 10.00; cells padding 30px 35px, `#777777` w300 14px,
       border 1px `#eeeeee`).
  5. Features (`.our_feature.section_padding`): centered h2 "Why You
     Should Choose Us"; 4 `.single_feature` cards (col-lg-3 col-sm-6):
     icon image + h4 (mt 42px mb 16px): **Quality Training**, **Flexible
     Timeframe**, **Qualified Trainers**, **Affordable Price** + lorem p.
  6. About (`section.about_part.padding_bottom.overflow-hidden`,
     container-fluid): row `align-items-center justify-content-end` —
     text left (col-xl-4 col-lg-6 col-md-6, `.about_text`, padding-left
     10%): h2 "We are Fitfloss. A Dedicated Fitness Center Since 2004"
     (48px, lh 60px, mb 40px) + 2 lorem paragraphs (mb 30px) + `btn_1`
     "Browse Services"; photo right (col-lg-5 offset-lg-1 col-md-6,
     `.about_img` = about_img.png).
  7. Testimonials (`.client_review.padding_bottom`): centered h2 "What
     Customer's Say About Us"; owl carousel of 7 `.client_review_single`
     (text-center, **2px solid #000 border**, padding 50px 42px):
     circular avatar (border-radius 50%, max-width 80px) + h4 name
     "Helena Phillips" (16px, mt 17px) + span "CEO at Google" + quote p
     (16px, mt 26px); dots below (14px squares `#eeeeee`, active
     `#ff0000`, mt 75px).
  8. Become a member (`.become_member.section_padding`): bg image +
     **black overlay opacity .5**; centered: h2 "Many more Features are
     Waiting!" (48px white) + p (16px, margin 13px 0 43px) + `btn_1`
     "Become a Member".
  9. Footer (`footer.footer-area.section_padding`, **bg red `#ff0000`**):
     row `justify-content-between` — About Us (`.footer_1`, col-sm-6
     col-lg-3): h4 "About Us" (24px w700 white, mb 23px) + blurb p (16px
     white); Contact us (`.footer_2`, col-lg-3 col-sm-6): h4 "Contact us"
     - `.contact_info`: address p "56/8, rockybeach road, santa monica,
       Los angeles, California - 59620" + 2 phone h2s "012-6532-568-9746" /
       "012-6532-569-9748" (24px white); Newsletter (`.footer_2`, col-sm-12
       col-md-8 col-lg-5): h4 "Newsletter" + p + `#mc_embed_signup` form
       (mt 25px): email input (h 40px, w 65%, bg `#ff3333`, white text,
       padding-left 20px, radius 0, Oswald 13px) + "Subscribe" button with
       arrow icon; copyright bar (`.copyright_part_text`): left "Copyright
       © <year> All rights reserved | This template is made with <heart> by
       Colorlib" (white, Colorlib link `#ff0000`), right `.social_icon`
       (text-align right, ≤991px center): 4 square buttons (30×30, bg
       `#fe3233`, white, margin-left 7px; hover white bg + red text):
       Facebook, Twitter, Instagram, Skype → credit Swole.
- **Design tokens extracted from the preview CSS (`css/style.css`):**
- Brand **red `#ff0000`**: `btn_1` bg, `.menu_fixed` sticky header bg,
  schedule thead bg, course price spans, footer bg, active carousel dot,
  dropdown item hover. Hover variants: `#ee390f` (nav links),
  `#ff3333` (newsletter input bg), `#fe3233` (social icon bg).
- Ink `#222`: default heading color (h1–h6, Anton), section titles 48px
  w700, `btn_1` hover bg.
- Black `#000`: `btn_2` border, testimonial card border, become-member
  overlay (opacity .5), course card h3 titles, mobile dropdown items.
- White `#fff`: hero text, nav links, `btn_1` text, schedule thead text,
  footer text, newsletter input text/placeholder.
- Grays: body p `#777777` (Oswald 14px lh 1.929); schedule cells
  `#777777` w300; table borders + dots `#eeeeee`; dropdown bg `#fafafa`;
  newsletter border `#dedede`.
- Buttons: `btn_1` padding 13.5px 45px, radius **0**, 14px, white on red,
  hover `#222`, transition .4s; `btn_2` padding 14px 28px, transparent,
  **2px solid #000**, 15px black, hover red bg + white text.
- Headings: h1–h6 **Anton**; `.section_tittle h2` 48px w700 lh 45px mb
  25px (25px ≤991px); banner h1 **Oswald** 100px uppercase w700 lh
  120px; body p Oswald 14px lh 1.929.
- Radii: **0** everywhere structural (buttons, inputs, tables); 50% only
  for testimonial avatars; square 30×30 social buttons.
- Spacing: `.section_padding` 140px 0 (80px ≤1200px, 70px smaller);
  `.section_tittle` mb 70px; banner 1080px tall; card h3 margin 38px 0
  17px; feature h4 42px 0 16px; table cells 30px 35px; footer h4 mb
  23px.

## Implementation tasks

- [ ] Spec-first: `openspec/specs/template-swole/spec.md` already on main
      (prep). Open a `feat/template-swole` branch.
- [ ] Copy the simplest existing landing app, rename package to
      `@free-react-templates/swole`, run `npm install` at root so
      `package-lock.json` registers the workspace (grep
      `free-react-templates/swole`).
- [ ] Ensure `vite.config.ts` registers `injectUiSource()` (see
      docs/conventions.md) and app imports Button/ButtonLink/cn from
      `packages/ui` (knip trap — see repo memory notes).
- [ ] TDD: tests first per spec requirement, then implement:

1. `Navbar` — absolute over hero, logo block left, centered white
   uppercase Oswald links (Home / About / Courses / Blog▾ / Pages▾
   / Contact) + red phone CTA; sticky red header on scroll
   (IntersectionObserver or scroll listener, cleaned up); mobile
   hamburger toggling a menu with black links (desktop + mobile
   variants render duplicate links — use `getAllByRole`).
2. `Hero` — bg photo, dark gradient overlay (0.9 → 0.2), white
   tagline + rule, 100px uppercase headline "Swole Fitness Studio",
   red "Browse Services" CTA (radius 0).
3. `PopularCourses` — 3 cards (Basic $140 / Intermediate $200 /
   Advanced $250): photo, black title + red price span, description,
   black-outline "Apply Course" button (hover fills red).
4. `Schedule` — photo column (hidden <lg) + bordered table: red
   header row (Course Name / Mon / The / Wed / Thu / Fri) + 6
   "Fitness Aero" rows with the exact time cells (gray w300 on
   #eeeeee borders).
5. `Features` — 4 cards (Quality Training / Flexible Timeframe /
   Qualified Trainers / Affordable Price) with line icons.
6. `About` — split: text left (48px heading + 2 paragraphs + red
   Browse Services button), photo right.
7. `Testimonials` — carousel of 2px-black-bordered cards (circular
   avatar + name + role + quote), dots with active red, accessible
   controls.
8. `BecomeMember` — photo bg + black 50% overlay, white 48px
   heading, red "Become a Member" button.
9. `Footer` — red bg: About Us blurb · Contact us (address + 2
   phones) · Newsletter form (email input + Subscribe, confirm on
   submit) · copyright bar + 4 square social buttons (inline SVG
   brand icons — lucide-react has no brand icons).

- [ ] Theme tokens in `@theme`: `--color-brand: #ff0000`, ink `#222`,
      black `#000`, body gray `#777777`, light `#eeeeee`.
- [ ] Anton + Oswald Google Fonts `<link>`s in index.html.
- [ ] Placeholders: `picsum.photos/seed/swole-<n>/<w>/<h>`; lucide-react
      icons (dumbbell, clock, user, tag, phone, arrow-right, heart);
      inline SVG brand icons for social.
- [ ] Paraphrase demo copy: fitness-themed tagline, course titles, feature
      blurbs, testimonial quotes, footer blurb; keep the schedule table
      structure and footer columns.
- [ ] Verify: `scripts/verify-app.sh swole` (typecheck + lint + 100%
      coverage + build). Then push branch, open PR, squash-merge
      immediately (`gh pr merge --squash --delete-branch`).
- [ ] After merge: mark TEMPLATES.md Fitfloss lines 396 and 1841
      `[~]`→`[x]` with Surge URL
      `https://free-react-templates-swole.surge.sh` + homepage, run
      `npm run readme:status`, commit + push. Verify `npx knip` + curl the
      Surge URL.

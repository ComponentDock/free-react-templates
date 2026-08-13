# Medair (ColorLib Healthvest) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-medair`.

## Source mapping

- **ColorLib item:** "Healthvest" (TEMPLATES.md — appears 2×: lines 589 and
  1857; both rows point to the same source, one prep covers all; verified
  with `grep -c 'wp/template/healthvest/'` = 2).
- **Source URL:** https://colorlib.com/wp/template/healthvest/
- **Preview URL:** https://preview.colorlib.com/theme/healthvest/ — **HTTP
  200, live** (confirmed 2026-08-13, ~38 KB HTML; screenshot browsed visually
  too). Do not redo this lookup.
- **Preview CSS:** https://preview.colorlib.com/theme/healthvest/css/style.css
  (~74 KB, parsed for tokens) — also imports animate.css, aos.css,
  flaticon.css, glightbox.min.css, tiny-slider.css (all css/), ionicons
  4.5.6 + font-awesome 4.7.0 (CDN). Site is Bootstrap 5 + jQuery +
  tiny-slider + glightbox — **NOT Tailwind**. Fonts: "Prata" (serif
  headings) + "Poppins" (body) — add Google Fonts `<link>`s in index.html;
  do NOT copy font files.

## Reference research (done — do not redo)

### Screenshot (`healthvest-free-template.jpg`, 1200×946)

Browsed visually in the browser. Health/lifestyle one-pager: sticky nav with
logo left, Home/About/Services/Gallery/Blog/Contact + search icon right;
full-width hero photo (blonde woman holding cucumber slices over her eyes,
blurred kitchen background) under a dark overlay; small uppercase tagline
"FINDING BALANCE IN FOOD, HEALTH, AND WELLNESS"; large white serif headline
"Eat Mindfully, Sweat Often & Self Love Always"; solid bright-green "CONTACT
US" button + white-outline "LEARN MORE" button; below the hero a row of five
white cards (four with green line icons — nutrition apple, dumbbell, heart —
plus a counter card); then the About split section (woman's face photo left,
text right). The live preview DOM + parsed stylesheet are the authoritative
reference; the screenshot confirms palette + layout.

### Design tokens (from `css/style.css`)

| Token       | Value                                  | Use                                                                       |
| ----------- | -------------------------------------- | ------------------------------------------------------------------------- |
| Brand green | `#36c940`                              | primary: buttons, headline span, icons, badges, subheads, overlay, hovers |
| Dark        | `#222222`                              | hero overlay (.4), intro overlay (.5), scrolled nav bg, testimonial name  |
| Ink         | `#000000`                              | blog headings, btn-custom, btn-white text                                 |
| Footer bg   | `#1a1a1a`                              | footer background                                                         |
| Footer dark | `#151515`                              | copyright bar (bg-darken)                                                 |
| Light bg    | `#f8f9fa` / `#f8f8f8`                  | blog section (bg-light)                                                   |
| Card shadow | `0px 10px 25px -13px rgba(0,0,0,0.1)`  | blog-entry cards                                                          |
| Btn shadow  | `0px 24px 36px -11px rgba(0,0,0,0.09)` | all `.btn`                                                                |
| Dots        | `#ddd` / `#999`                        | testimonial tns-nav dots / active                                         |
| Fonts       | "Prata" (headings) + "Poppins" (body)  | serif editorial headings · geometric body                                 |

Radii: **0 everywhere on buttons** (square, uppercase 12px/700, letter-spacing
1px, padding 9px 12px); 50% circles on program/step photos (140px, 7px white
border), portraits (80px), play icon, quote icon (30px); 4px on blog +
testimonial cards; 2px on btn-custom + footer socials (40px squares,
`rgba(255,255,255,0.05)` bg, green icons).

## Implementation tasks

1. Scaffold `apps/medair` from the simplest existing app (e.g. `apps/findly`
   or `apps/cura`); rename package to `@free-react-templates/medair`;
   `public/CNAME` = `medair.free.componentdock.com`; `"homepage"` =
   `https://medair.free.componentdock.com`. Footer MUST link
   https://www.componentdock.com/ — no ColorLib mentions in any app file.
2. `@theme` tokens: `--color-brand: #36c940`; dark `#222222`, footer
   `#1a1a1a`, footer-bottom `#151515`, light `#f8f9fa`; font-heading Prata,
   font-body Poppins (Google Fonts links in index.html).
3. Sections (top → bottom, match 1:1):
   1. Navbar — transparent absolute over hero (top 20px); brand "Medair"
      white; links Home · About · Services · Gallery · Blog · Contact
      (14px/500 white/70; active white; green underline on hover). Scroll →
      sticky `#222222` bg. Mobile: collapsible hamburger with same links
      (getAllByRole indexing in tests — mobile menu last). Source "Gallery"
      links to gallery.html; keep the nav item (dead anchor ok — one-pager).
   2. Hero — 100vh (min 750px), picsum bg + `#222222`/40 overlay; uppercase
      tagline "Finding Balance In Food, Health and Wellness" (16px,
      letter-spacing 2px, white/90); Prata 60px headline "Eat Mindfully,
      Sweat Often & Self Love Always" with green span on the second line;
      square green "Contact us" + white "Learn More" (hover invert).
   3. Services strip — 4 cards (Nutrition Strategies / Workout Routines /
      Support Motivation / First Hand Advice) with green icons + blurb, plus
      counter card "Certified Company · 24 · Years of experienced".
   4. About — left photo with white bottom-right counter box ("24" Prata +
      "Years of experienced"); right: green sub "About Us", 54px "Better
      Eat, Better Life", lead "If You Get A Better Nutrition, You Can Enjoy
      A Healthy Age", paragraph, "We Can Help You" 2-column green-check list
      (Low Energy, Stress & Anxiety, Poor Eating Habits, Digestive Problems
      | Balance Body & Mind, Advice, Workout Routines, Protein).
   5. What We Do — 5 circular-photo cards (140px, 7px white border, green
      numbered badge 1–5, green icon, Poppins 20px title, blurb, "Learn
      More"): Weight Loss Program / Sports Nutritionists / Personalized
      Nutrition / Individual Coaching / Child Nutrition. Mobile carousel →
      client-side state.
   6. Intro CTA — photos band + `#222222`/50 overlay; green sub "Finding
      Balance in Food, Health and Wellness"; white 40px "Get Health and
      Instruction Coach" with green highlight span; green "Make An
      Appointment" button.
   7. How It Works — sub "Procedure" + 54px "How It Works?"; 4 numbered
      circular-photo steps: Trusted Services / Natural Ways / Routine
      Exercise / Success/Goal + blurb + "Learn More".
   8. Video CTA — picsum band (min 500px); circular green-ring play button
      (client-side modal or decorative), white sub + 40px "Start Your Body
      Changing With Healthy Nutrition", green "Get Started" + white
      "Contact Us".
   9. Testimonials — sub "Testimonial" + 54px "Successful Stories"; slider
      (≥2 slides, dots `#ddd`/active `#999`): photo side + quote card
      (black/50) + 80px portrait + "Nicole Scott" 22px/700 + "Marketing
      Manager" green uppercase + 30px green quote circle.
   10. Blog (bg `#f8f9fa`) — sub "Our Blog" + "Recent Blog"; 3 white cards
       (4px radius, soft shadow): photo, green date block (Prata day "13" +
       "Jan"), meta "Admin · 3 Comments" (green icons), 24px black title
       (hover green), blurb, "Continue Reading" uppercase link.
   11. Appointment — fixed-attachment photo + `#36c940`/95 overlay; left:
       "Who We Are" (Prata), "We Best Nutrition", "Full Services" blurb,
       "Good Products / Natural & Healthy Foods"; right: white form card
       "Drop A Message" — name, email, subject select (Individual Coaching
       / Sport Nutrition / Personal Nutrition / Other), message, green
       "Send Message" submit; client-side validation (no mailchimp/php).
   12. Footer (`#1a1a1a`) — brand + about + 4 inline-SVG socials (Facebook,
       X, Instagram, YouTube — 40px squares); "Services" (Sport
       Nutritionists, Balance Body & Mind, Workout Routines, Child
       Nutrition); "Quick Links" (Home, About, Services, Gallery, Blog,
       Contact); "Have a Questions?" green-icon contacts (paraphrased
       address/phone/email); copyright bar `#151515`: "© 2026 Medair — All
       rights reserved" + required Component Dock link.
4. Images: `https://picsum.photos/seed/medair-<n>/<w>/<h>` everywhere; screen
   seeds with browser_vision (hero should read as a bright lifestyle/wellness
   photo; appointment band a neutral dark-ish shot for the green overlay).
   Never copy ColorLib assets.
5. TDD: write tests first (header + scroll state + mobile menu, hero + CTAs,
   services strip + counter, about + checklist, what-we-do cards, intro CTA,
   how-it-works steps, video CTA, testimonial slider + dots, blog cards,
   appointment form + validation, footer + Component Dock link, composition),
   100% coverage. Decorative `<img alt="">` strips via
   `container.querySelectorAll('img')`; desktop + mobile nav duplicates with
   `getAllByRole` indexing. RTL fake timers need `act()`. MemoryStorage
   polyfill (from apps/cura/src/test/setup.ts) only if the app uses
   localStorage.
6. Verify: `npm run verify:app -- medair`; full gate runs in CI on merge.
7. PR: `feat: Medair — health/wellness template (ColorLib Healthvest)`,
   include source URL, preview URL, token list, and what differs (renames,
   picsum placeholders `medair-<n>` — screen the hero seed for a
   lifestyle/wellness subject, Google Fonts links, lucide icons + inline-SVG
   socials, tiny-slider/glightbox→client-side state, fixed-attachment mobile
   fallback, paraphrased copy incl. the "Sport Nutriotionists" typo fix and
   "203 Fake St." address).
8. Bookkeeping after merge: mark both TEMPLATES.md Healthvest rows (lines
   589, 1857) `[x]` + `medair` URL + `npm run readme:status`.

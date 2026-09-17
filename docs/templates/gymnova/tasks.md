# GymNova (ColorLib "Fitzone") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-gymnova` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Fitzone" — free gym / fitness club HTML template
  (source: https://colorlib.com/wp/template/fitzone/). Listed in TEMPLATES.md
  line 1468 under Health Fitness (72).
- **Preview REACHABLE (HTTP 200):** `https://preview.colorlib.com/theme/fitzone/`.
  DOM fetched (`/tmp/fitzone-preview.html`, 25,166 bytes) + stylesheet
  `css/style.css` (`/tmp/fitzone-style.css`, 43,120 bytes) + TEMPLATES.md
  screenshot (`fitzone-free-template.jpg`).
- **Aesthetic:** Bright, clean fitness-club look — white rounded header
  overlapping the hero, darkened gym-photo hero with bold white text right-aligned,
  alternating gray `#f5f5f5` and photo-background sections, a single vibrant
  red/magenta `#f61b55` accent for every CTA button, hamburger, and hover state.
  Dual fonts: Roboto (body/hero) + Rubik (headings/buttons).
- **jQuery plugins in the source** (owl-carousel for testimonials, jQuery
  nice-select, jQuery for mobile menu toggle) — implement with React state:
  a CSS/React carousel for testimonials, a hamburger toggle for mobile nav.
- **Fonts:** Dual family — `"Roboto", sans-serif` (body, h1/h2, nav, 400/500/700)
  + `"Rubik", sans-serif` (h3 section headings, h5 card titles, buttons, 400/500/700).
  Both Google-imported — load via `<link>` in `index.html`.
- **Buttons:** `.template-btn` = `#f61b55` bg, white text, `border-radius: 3px`,
  `padding: 13px 24px`, Rubik 14px 500 uppercase. Hover: transparent bg, `#222`
  text, `1px solid #f61b55` border. The hero and discount buttons are the same
  class.
- **Copy is placeholder/Lorem** — paraphrase freely, keep the same content kinds:
  nav (Home / About Us / Schedule / Trainers / Blog / Contact / Pages),
  hero ("feel good / breath"), about ("welcome to our best fitness club"),
  features (Cycling Training / Tone Muscle / Meditation Work), services
  (Personal Training / Boxing Training / Fitness Training), coaches
  (David Williams / Jacob Bare / Senior Fall + one more), discount
  ("25% discount — Subscribe to our newsletter"), BMI ("Calculate Your BMI"),
  testimonials (3 names), friend CTA ("Bring All Your Friends. Get 50% Discount!"),
  footer (About Us / Contact Us / Newsletter).
- **DOM typo:** Source coach name is "senioer fall" — fix to clean name. Source
  uses "frined-bg.jpg" for the friend section — paraphrase correctly.
- **Service section blue overlay:** The `.service-area::after` pseudo-element adds
  `rgba(108,174,255,0.2)` on the right 50% of the section — recreate as an
  absolutely-positioned overlay div.

## Structure (top → bottom, single page)

1. **Header** (`.header-area.main-header`, white, 5px border-radius, 5% margin,
   `position: relative`, `z-index: 2`) — logo image left; right-aligned nav:
   Home / About Us / Schedule / Trainers / Blog (dropdown: Blog Home, Blog Details)
   / Contact / Pages (dropdown: Service, Elements); "Book Now" button (`.template-btn`)
   at right end with `margin-left: 60px`. Mobile: hamburger icon (`.custom-navbar`,
   3 white bars on `#f61b55` bg, `border-radius: 3px`, absolute top-right)
   → dropdown menu (jQuery show/hide in source → React state toggle).
2. **Hero** (`.banner-area.banner-bg`, bg photo + `#b0b0b0` fallback, `padding:
   200px 0 180px`, text right-aligned via `padding-left: 100px` on `.banner-text`)
   — h1 "feel good" (white, 150px Roboto 700 uppercase, line-height 120px,
   responsive to 80px on mobile) + h2 "breath" (white, 90px Roboto 700 uppercase)
   + `.template-btn` "Become a Member" (`margin-top: 30px`).
3. **About** (`.about-area.section-padding`, white, `padding: 130px 0`) — 2-column
   layout: left (`.col-lg-6`) h3 "welcome to our best fitness club" (36px Rubik 500
   uppercase) + 2 paragraphs + `.template-btn` "Learn More" (`margin-top: 1rem`);
   right (`.col-lg-5 offset-lg-1`) an image.
4. **Featured Classes** (`.feature-area`, bg `#f5f5f5`, `padding: 130px 0`) —
   centered h3 "featured classes" + 3 `.single-feature` columns: each has
   `.feature-img` (full-width photo) + `.hover-state` (absolute overlay
   `rgba(1,2,12,0.7)`, opacity 0→1 on hover) with centered `.template-btn`
   "details" (white semi-transparent bg, dark text; hover: transparent bg,
   white text, `1px solid #fff`); below: `.feature-footer` (white bg, `padding:
   30px 40px`, h5 title uppercase + p paragraph; hover: box-shadow). Cards:
   "Cycling Training" / "Tone Muscle" / "Meditation Work". 3-col → 1-col on mobile.
5. **Services** (`.service-area`, bg image + `#b0b0b0` fallback, `padding: 130px 0`)
   — `::after` pseudo-element: absolute, right 50%, `background:
   rgba(108,174,255,0.2)` (recreate as div overlay). Right-aligned text
   (`.col-xl-5 offset-xl-7`): h3 "our service" (white) + 3 `.single-service`
   items (flex row: icon image 40px `margin-right: 1rem` + text block with
   h5 title + p): "Personal Training" / "Boxing Training" / "Fitness Training".
   h3/h5 are white (source overrides default `#222`).
6. **Coaches** (`.coaches-area.section-padding`, `padding: 130px 0`) — centered
   h3 "our fitness coaches" + 4 `.single-coaches` columns: each has
   `.coaches-img` (photo) + `.hover-state` (absolute overlay
   `rgba(1,2,12,0.7)`, opacity 0→1) with social icon list (4 icons right-aligned,
   40px circles, `rgba(255,255,255,0.3)` bg, white icons; hover: `#f61b55` bg);
   below: `.coaches-footer` (`#f5f5f5`, `margin: -50px 10% 0`, `z-index: 2`,
   `padding: 40px 30px 30px`) with h5 name + h6 role. Hover: footer bg white +
   box-shadow, h5 color `#f61b55`. 4-col → 2-col → 1-col on mobile.
   Coaches: David Williams (Fitness Trainer), Jacob Bare (Weight Loss),
   Senior Fall (Gym Fitness), + one more (paraphrase names from source).
7. **Discount / Newsletter** (`.discount-area`, bg image + `#b0b0b0` fallback,
   `padding: 130px 0`, centered) — h3 "25%" (white) + span "discount"
   (`#f61b55`) + h4 "Subscribe to our newsletter and get a coupon code!"
   (white 20px) + email input (360px, no border, `border-radius: 3px`) +
   `.template-btn` "Subscribe" (`margin-left: 10px`). All text white.
8. **BMI Calculator** (`.bmi-area`, bg `#f5f5f5`, `padding: 130px 0`) — 2-column:
   left: an image; right (`.bmi-text`, `padding-left: 30%`): h3 "calculate your
   bmi" + 3 `.form-group` (30% width each, `margin-right: 3%`, float left):
   label (uppercase 500) + input (no border, padding 13px 20px) for Height /
   Weight / Age + `.template-btn` "Calculate" (`width: 100%`).
9. **Client Testimonials** (`.client-area.section-padding`, `padding: 130px 0`) —
   centered h3 "happy client says" + 3 `.single-slide` cards in a carousel:
   each card has a circular photo (70px, `border-radius: 50%`) + h5 name +
   h6 role + paragraph. Background `#f5f5f5`; hover: white bg + box-shadow.
   Implement as a React state carousel (previous/next arrows or dots) replacing
   owl-carousel. 3 visible on desktop, stacked on mobile.
10. **Friend CTA** (`.friend-area`, bg image + `#f61b55` fallback, `padding: 130px
    0`, centered) — h3 "bring all your friends. get 50% discount!" (white) + h4
    subtitle (white 20px) + `.template-btn` "join with us".
11. **Footer** (`.footer-area.section-padding`, bg `#f5f5f5`, `padding: 130px 0`)
    — 3-column widget area:
    - About Us: h5 + paragraph
    - Contact Us: h5 + address paragraph + 2 phone number spans (`#f61b55`,
      `font-size: 24px`, `font-weight: 700`, `display: block`)
    - Newsletter: h5 + paragraph + form (input `border-radius: 5px`, `padding:
      14px 70px 14px 20px`, width 100% + `.template-btn` submit button
      absolute right, `padding: 10px 16px`)
    Footer copyright bar (`.footer-copyright`, `margin-top: 70px`): copyright
    text + heart icon span (`.color`, `#f61b55`) + "by Component Dock" link
    (→ https://www.componentdock.com/) + 4 social icon circles (40px,
    `border-radius: 50%`, `#222` bg on `#fff`, `padding: 10px`, text-center,
    line-height 20px; hover: `#f61b55` bg, `#fff` icon). Icons: inline SVG
    for Facebook / Twitter / Dribbble / Behance (source uses Font Awesome
  — replace with inline SVG or lucide-react where available).

## Implementation tasks (for the implementer stream)

- [ ] `cp -r` scaffold from the simplest existing app; rename package to
      `@free-react-templates/gymnova`; `npm install` at repo root; CNAME +
      homepage `gymnova.free.componentdock.com`
- [ ] `src/index.css` `@theme` tokens: brand `#f61b55`, body `#777`,
      heading `#222`, surface `#f5f5f5`; Google Fonts `<link>` in
      `index.html`: Roboto (400/500/700) + Rubik (400/500/700)
- [ ] `src/data.ts` — nav links (6 + sub-menus), hero text, about content,
      features (3), services (3), coaches (4 with social links), discount
      form, BMI labels, testimonials (3), friend CTA, footer widgets +
      socials (4)
- [ ] Components: `Header` (white rounded, desktop nav + "Book Now" button,
      hamburger mobile toggle), `Hero` (bg photo, right-aligned text,
      "Become a Member" button), `About` (2-col, heading + text + image),
      `FeaturedClasses` (3 cards with hover overlay + "Details" button),
      `Services` (bg photo + blue overlay, right-aligned 3 items),
      `Coaches` (4 cards with social hover overlay + overlapping footer),
      `Discount` (bg photo, "25% discount" + email signup), `BMICalculator`
      (3 inputs + calculate button), `Testimonials` (React carousel,
      3 cards), `FriendCTA` (bg photo, centered text + button),
      `Footer` (3-col widgets + copyright with Component Dock link +
      social icons)
- [ ] Tests per section mirroring the spec Gherkin scenarios, 100%
      coverage (slider/carousel navigation, mobile menu toggle, form
      interactions)
- [ ] Subject-screen picsum seeds (hero, about, 3 features, service bg,
      4 coach photos, discount bg, BMI image, 3 testimonial photos,
      friend bg) — prefer gym/fitness shots; pin seeds in PR
- [ ] `bash scripts/verify-app.sh gymnova` green; PR with source, preview
      URL, tokens, diffs (name, placeholder images, React carousel instead
      of owl-carousel, React hamburger instead of jQuery, Component Dock
      footer credit); squash-merge immediately

## Verification notes / pitfalls

- Desktop + mobile navs may render duplicate links in the DOM — use
  `getAllByRole` and index the mobile one last (skill pitfall).
- jsdom applies injected Tailwind CSS, so `hidden lg:flex` desktop nav
  lists are `display:none` and `getByRole` excludes them — query desktop-only
  links with `{ hidden: true }`; CSS `uppercase` does NOT change accessible
  names, query raw text ('Home'), not 'HOME'.
- `aria-current={cond}` renders `aria-current="false"` — use
  `aria-current={cond ? 'true' : undefined}`.
- The service section's blue overlay (`rgba(108,174,255,0.2)` on right 50%)
  is a `::after` pseudo-element in the source — implement as an
  absolutely-positioned div with `pointer-events: none`.
- The coach `.coaches-footer` overlaps the image by `-50px` margin-top —
  make sure `position: relative; z-index: 2` keeps it above the image.
- The BMI form inputs use `float: left` with fixed 30% width + 3% margin-right
  in the source — use Tailwind flex or grid instead for cleaner layout.
- The newsletter form in the footer has an absolutely-positioned submit button
  inside the form — ensure the input has enough right padding to avoid overlap.
- The testimonial carousel replaces owl-carousel — implement with React state
  (currentSlide index, prev/next handlers, dot indicators). Only one slide
  visible at a time on mobile; 3 on desktop.
- No `tel:` literals anywhere (secret-scan rewrites them) — the source has
  phone numbers in the footer contact section; use dummy numbers or omit.
- Social icons: source uses Font Awesome 4.7 (fa-facebook, fa-twitter,
  fa-dribbble, fa-behance) — replace with inline SVG paths (lucide-react
  removed brand icons). The footer has 4 social icons; the coach hover
  overlay has 4 social icons (different set: FB, Twitter, LinkedIn, Instagram).
- The hamburger menu (`.custom-navbar`) is `display: none` on desktop, `display:
  block` below 992px — toggle with a React state boolean.
- `getByText(/GymNova/)`-style queries can match multiple elements (logo vs
  copyright) — anchor with `/^GymNova$/` where the word repeats.

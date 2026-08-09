# Allure (ColorLib Modelo) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-allure` by an implementer stream.

## Design notes

- **Original:** ColorLib "Modelo" — free model agency website template.
  Source: https://colorlib.com/wp/template/modelo/. New name: **allure**
  (fashion/glamour connotation; no collision with apps/ or existing specs).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/modelo/`
  (HTTP 200, 21.3KB) + stylesheet `styles/main_styles.css` (22.5KB). Full
  rendered DOM extracted; structure below is from the DOM + CSS tokens.
  Screenshot `modelo-free-template.jpg` (1200×946) confirms: dark-mode hero
  with vivid purple color grade on an editorial portrait (round reflective
  sunglasses), huge white "Show Stopper." headline, purple "Submit your
  portfolio" header CTA, vertical social rail (left), white content sections,
  rotated (-90°) section titles on black bands, masonry models grid, black
  contact block, white footer with 4 office columns.
- **Structure observed (1:1):**
  1. `header` (fixed, bg #0b0208, border-bottom 2px #5b0857, 152px):
     left logo "Modelo." (36px bold white, purple period); centered nav
     (Home / About us / Models / News / Contact, 15px white, active/hover
     block bg #690772); bottom-right purple `submit_button` 391×130
     "Submit your portfolio"; hamburger → fullscreen menu (links with purple
     periods + submit link).
  2. `social_bar` (fixed vertical rail, left): Facebook, Twitter, Instagram
     (Roboto 24px/700 #121212, hover #690772).
  3. `home` hero slider: 3 slides, bg `images/index.jpg` (purple-graded
     portrait), `home_title` "Show Stopper." 130px white + `home_subtitle`
     "Jessica Smith. 22. Model." 24px white; square dots 01/02/03 bottom
     left; white 389×128 prev/next box bottom right (Previous | Next, 18px
     #505050 hover #690772, divider #dcdce1).
  4. `intro` (white, pad 105/134): "Model Management" h1 (#121212 + purple
     span) + 2 lorem paragraphs; 3 milestones (72px purple counters animate
     from data-end-value: 173 Models @ The Agency, 2190 Modeling Contracts,
     25 Model Recruitors; titles 18px #121212).
  5. `models`: black 80%×277px band + white h1 "See the Models." rotated
     -90° (span purple); isotope filters All/Female/Male/Children (active/
     hover #751b7e); purple 152×152 "+" see-all square (60px white);
     masonry grid of 9 tiles (`model_big`/`model_wide` 40%,
     `model_small`/`model_tall` 20%): hover overlay rgba(0,0,0,0.85) with
     name 30px white + "View Portfolio" 18px rgba(255,255,255,0.53).
     Original repeats "Alicia Williams" ×9 — write 9 distinct names.
  6. `week_model` (white): rotated title "Model of the week."; left photo
     slider (week_model_1..3.jpg, ~44.6vw, prev/next white box); right:
     "Samantha Smith" 36px bold, lorem, stat list (Age 20 / Height 1.79m /
     5'10" / Shoes 38 / Hair brown / Eyes brown; labels #121212 137px,
     values #949494), underlined "View Full Profile" 16px link, purple
     `.button` "Bookings" 200×71 (hover #121212).
  7. `contact` (black 80% block): "Contact us." 60px white (span #751871);
     form: Name + E-mail inputs (62px, border 1px #ffe5e5, transparent, white
     text, placeholder #a4a4a4 12px, focus border #751b7e), Message textarea
     184px, "Send Message" purple button (hover white bg + #121212 text).
  8. `footer` (white, pad-top 112): left 25% — "Modelo." logo 36px #121212
     (span #751b7e) + "Model Agency" tagline 16px #cecfd1 + copyright 12px
     #616161 ("made with by Colorlib" → repo-standard credit); right 75% —
     4 office cols (Milan / Paris / New York / London): title 20px #121212 +
     list 14px #777777 (street, city, phone). `footer_image` = footer.jpg
     (decorative, optional).
- **Design tokens:**
  - Brand purple #690772 (logo period, nav active block, title spans,
    milestone counters, social/slider-nav hover, CTA block).
  - Deep purple #751b7e (filter active, "+" square, buttons, input focus
    border). Accent #751871 (contact title span).
  - Header #0b0208 + border #5b0857; near-black #121212; black #000000
    bands/contact; white sections.
  - Greys: #505050 nav text, #616161 copyright, #777777 footer list,
    #949494 stat values, #a4a4a4 placeholders, #cecfd1 tagline, #dcdce1
    divider.
  - Fonts: HelveticaNeueLTProBd/Md (proprietary) → **Poppins 700/500**;
    body/nav/social **Roboto**. Key sizes: logo 36, hero 130/24, section h1
    60, counter 72, model name 30, week title 36, contact 60, footer 20.
  - Buttons: square, white bold text, purple → hover black.
  - Signature device: white h1 rotated -90° on a black 80%-wide band.

## Implementation tasks (for the implementer stream)

- [ ] Scaffold `apps/allure` (copy simplest existing app; package
      `@free-react-templates/allure`), wire into workspace + lockfile.
- [ ] Spec tests (red) per `openspec/specs/template-allure/spec.md`
      requirements: header, social rail, hero, intro/milestones, models
      grid, model of the week, contact, footer, composition.
- [ ] Implement (green) with 100% coverage:
  - Header: fixed dark (#0b0208, #5b0857 border), "Allure." text logo,
    5 nav links with purple active blocks, purple "Submit your portfolio"
    CTA, hamburger → fullscreen menu.
  - Social rail: fixed vertical, Facebook/Twitter/Instagram (lucide icons),
    bold dark, purple hover.
  - Hero: full-screen picsum portrait (purple grade via overlay/filter),
    130px "Show Stopper." + subtitle, 01/02/03 indicators, white
    Previous/Next box.
  - Intro: "Model Management." + lorem + 3 animated counters (173/2190/25).
  - Models: black band + rotated -90° title, All/Female/Male/Children
    filters (isotope-style grid filtering), purple "+" square, 9 mixed-size
    tiles with black hover overlay (name + View Portfolio).
  - Model of the week: rotated title, photo slider w/ prev-next, name +
    lorem + stat list, underlined "View Full Profile", purple "Bookings".
  - Contact: black block, "Contact us.", Name/E-mail/Message form,
    "Send Message" (success state on submit).
  - Footer: white, logo/tagline/copyright + 4 office columns.
- [ ] Images: `https://picsum.photos/seed/allure-<n>/<w>/<h>` (hero x3,
      intro x1, models x9, week model x3, footer optional).
- [ ] Fonts: Roboto + Poppins (700/500) via `<link>` in `index.html`.
- [ ] Icons: lucide-react (Menu, X, Facebook, Twitter, Instagram, ArrowLeft/
      ArrowRight, Plus, Send); no brand icons from lucide — use inline SVG
      per repo convention if needed.
- [ ] Verify: `npm run verify:app -- allure` (typecheck + lint + 100%
      coverage + build); run full `npm run gate` once before PR.
- [ ] PR: `feat: allure — model agency template (ColorLib Modelo)`, squash
      merge immediately; then `[x]` + surge URL in TEMPLATES.md +
      `npm run readme:status`.

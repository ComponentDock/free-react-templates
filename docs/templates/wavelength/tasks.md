# Wavelength (ColorLib Radios) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-wavelength` by an implementer stream.

## Design notes

- **Original:** ColorLib "Radios" — free radio station HTML template.
  Source: https://colorlib.com/wp/template/radios/. Single-page homepage;
  subpages (dj.html, schedule.html, podcasts.html, events.html,
  contact.html) are linked from the nav but NOT recreated.
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/radios/`
  (HTTP 200, 36KB) + stylesheets `css/style.css` (242KB),
  `css/swiper-bundle.min.css`, `css/glightbox.min.css`, `css/aos.css`,
  `fonts/icomoon/style.css`. Full rendered DOM extracted
  (`/tmp/radios.html`, `/tmp/radios-style.css`); structure below is from
  the DOM + CSS tokens. Screenshot `radios-free-template.jpg` (1200×946)
  confirms: person with dark hair in white over-ear headphones resting on
  a rose-pink surface fills the hero; white "Radios." logo top-left, small
  white nav links top-right, centered white uppercase "LISTEN — ON-AIR
  NOW" headline, and a large circular play button with a thick lime-green
  border in the hero center; four photo cards below whose titles sit in
  bright lime-green boxes with black schedule boxes underneath — fresh,
  energetic, media-focused aesthetic on a lime-green (#7cbd1e) accent.
- **Structure observed (1:1):**
  1. `div.site-navbar.mt-4` (transparent overlay on hero): `.container.py-1`
     > `.row.align-items-center`: logo `a.text-white.h2.mb-0` = `<strong>
Radios<span class="text-primary">.</span></strong>` (white wordmark,
     > lime period) left; `nav.site-navigation` right: hamburger
     > `button.site-menu-toggle` (d-lg-none) + `ul.site-menu.d-none.d-lg-block`:
     > Home, DJs, Schedule, Podcasts, Events, Contact (links index/dj/
     > schedule/podcasts/events/contact.html) — inline-block, padding 10px,
     > letter-spacing .05em, color rgba(255,255,255,0.6), hover #fff, active
     > #fff.
  2. `div.site-mobile-menu` (fixed off-canvas): `.site-mobile-menu-header`
     with `.site-mobile-menu-close` button + `.site-mobile-menu-body`
     (cloned nav).
  3. `div.site-blocks-cover.overlay` (hero; bg images/hero_bg_3.jpg;
     min-height 600px / height 100vh; `:before` overlay rgba(0,0,0,0.4)):
     centered `.col-md-7.text-center`: `h1` "Listen — On-Air Now" (white,
     1.5rem → 2.5rem ≥768px, 700, letter-spacing .1em, uppercase), `p`
     lorem, `#playerContainer` > `<audio controls class="hero-audio-
player">` (width 100%, max-width 400px, height 50px, border-radius
     25px; controls panel rgba(255,255,255,0.9), lime circular play
     button).
  4. `div.pb-5` (margin-top: -100px) > `.container-fluid` > `.row.g-0`: 4
     × `a.unit-9` (height 300px; image cover scale 1.05 → 1 hover;
     caption absolute top 50% → -65% hover): `h2` show title in lime
     padded box (`display:inline; background:#7cbd1e; box-shadow:10px 0 0
#7cbd1e, 0 0 0 #7cbd1e`, white 20px) + `span` schedule in black
     padded box (same trick with #000, white 11px, letter-spacing .15em,
     uppercase). Titles: Art Gossip / Good Morning Show / Blues Radio /
     Classic Songs; schedule "Friday 1:00pm — 2:30pm".
  5. `div.site-section` (white): `site-section-heading.text-center.mb-5
.w-border.col-md-6.mx-auto` = `h2.mb-5` (20px, letter-spacing .2em,
     uppercase) + `p`; `.w-border` = 70×2px #7cbd1e underline centered.
     Heading "Weekly Radio Program". Then `div.site-block-retro.d-block
.d-md-flex`: `a.col1.unit-9.no-height` (48% width, image 300px) +
     `div.col2.ms-auto` (48%): two stacked `a.unit-9.no-height` (200px
     each, 8% gap). All three cards: h2 "Classic Songs For Classic
     People" (lime box) + span "Friday 1:00pm — 2:30pm" (black box).
  6. `div.site-section.bg-light.block-13`: heading "Love By Our
     Listeners"; `div.nonloop-block-13.swiper` > 6 `div.swiper-slide
.text-center.p-3.p-md-5.bg-white`: circular avatar (w-50
     rounded-circle), `h3.fw-light.h5` name (Megan Smith, Brooke Cagle,
     Philip Martin, Steven Ericson, Nathan Dumlao, Brook Smith), `p.font-
italic` quoted lorem; `div.swiper-pagination` bullets 28×4px radius
     0 #cccccc, active #7cbd1e.
  7. `div.site-blocks-cover.overlay.inner-page-cover.subscribe` (bg
     images/hero_bg_4.jpg; height calc(30vh); rgba(0,0,0,0.4) overlay):
     centered `col-md-6`: `h2` "Subscribe" (20px, letter-spacing .1em,
     uppercase, 300, white), `p.mb-5` lorem, `form.site-block-subscribe`
     > `.input-group.mb-3`: `input.form-control.border-secondary.text-
white.bg-transparent` (placeholder "Enter your email", height 60px,
     > weight 300; placeholder white 0.5 italic) + `button.btn.btn-primary`
     > "Subscribe" (lime bg #7cbd1e, black text, padding 0 20px).
  8. `div.site-section` (white): heading "Our DJs"; 6 × `div.col-md-6
.col-lg-4.mb-5` > `div.team-member` (relative, overflow hidden;
     `:before` overlay rgba(124,189,30,0.8) opacity 0 → 1 hover; img scale
     1 → 1.1 hover; `.text` absolute centered white, opacity 0 →
     translateY(-50%) visible on hover): `h2.mb-2.fw-light.h4` name +
     `span.d-block.mb-2` role "Creative Director" + social icons. Names:
     Megan Smith, Brooke Cagle, Philip Martin, Steven Ericson, Nathan
     Dumlao, Brooke Cagle.
  9. `div.site-section.bg-light`: heading "News &amp; Events"; 3 ×
     `div.col-md-6.col-lg-4` (delays 100/200/300): `a` > `img.img-fluid`
     (img_4/img_2/img_3.jpg) + `div.p-4.bg-white` (1px #e6e6e6 border, 4px
     radius; image zoom scale 1.2 hover): `span.text-secondary.small.text-
uppercase` "Jan 20th, 2032" + `h2.h5.text-black.mb-3` > `a` "Art
     Gossip by Mike Charles" + `p` lorem.
  10. `div.bg-primary` (solid #7cbd1e band): 6 × `a.col-2.text-center
.py-4.social-icon` with aria-labels "Follow us on Facebook / Twitter
      / Instagram / LinkedIn / Pinterest / Subscribe on YouTube", `span
.icon-* .text-white` (icomoon, 20px; hover color #ffc107, bg
      #6ea71b).
  11. `footer.site-footer` (bg #333333, padding 4em 0 → 7em 0 ≥768px):
      - col-lg-4 "About Radios": `h3.footer-heading.mb-4` (14px uppercase
        letter-spacing .1em white; `:before` 40×2px #7cbd1e underline) +
        `p` (#737373).
      - col-lg-4 "Navigations": `ul.list-unstyled` col 1: Home, DJs, News,
        Top 20 of the week; col 2: About Us, Privacy Policy, Contact Us,
        Membership; then "Follow Us" heading + social icons.
      - col-lg-4 "Watch Live Streaming": `div.block-16` > `figure`:
        `img.img-fluid.rounded` + `a.play-button` (70px white circle, lime
        icon-play) linking to a Vimeo staff-pick video (glightbox).
      - copyright row: "Copyright © [year] All rights reserved | This
        template is made with [heart] by Colorlib" → repo standard credit.
- **Design tokens (`css/style.css` + inline):**
  - Brand: **#7cbd1e** lime green (logo period, audio play button, unit-9
    title boxes, section heading underlines, swiper active bullet, btn-
    primary bg with #000 text, footer heading underlines, team hover
    overlay rgba(124,189,30,0.8), social hover bg #6ea71b).
  - Fonts: system-ui sans stack (Bootstrap default) — body 1rem/1.7/400
    #4d4d4d. Uppercase + letter-spacing: hero h1 1.5→2.5rem/700/.1em;
    section headings 20px/.2em; footer headings 14px/.1em; unit-9
    schedule 11px/.15em. No Google Fonts.
  - Colors: #fff text/logo/cards; #000 schedule boxes/selection/btn text;
    #333333 footer bg; #737373 footer text; #b3b3b3 footer links; #a6a6a6
    post date; #cccccc swiper bullet; #f8f9fa bg-light; #e6e6e6 card
    border; #ffc107 social hover; rgba(0,0,0,0.4) hero overlays;
    rgba(255,255,255,0.9) audio panel; rgba(255,255,255,0.5) placeholder;
    rgba(255,255,255,0.6) nav idle.
  - Buttons: btn-primary lime bg + black text (hover #90c740); subscribe
    padding 0 20px; hero audio pill 25px radius / 50px tall / max-width
    400px with lime circular play control.
  - Shapes: 70px white circular play button; rounded-circle avatars; post
    cards 4px radius 1px border; swiper bullets 28×4px radius 0; unit-9
    titles/schedules = inline padded boxes via background + 10px box-
    shadow (signature device).
  - Spacing: hero 100vh; show band pulled over hero with margin-top -100px;
    unit-9 300px (retro col1 300px, col2 cards 200px + 8% gap); section
    heading mb-5; footer 4em/7em 0; social icons py-4 col-2.
  - Section bgs: hero photo + 0.4 overlay; subscribe photo (30vh) + 0.4
    overlay; weekly program + DJs white; testimonials + news #f8f9fa;
    social band solid #7cbd1e; footer #333333.
- **Recreation decisions:** transparent overlay navbar (subpage links → `#`
  anchors); real `<audio controls>` styled as the white/lime pill (no
  external mp3 needed — omit src or use a placeholder); testimonial
  carousel hand-rolled with bar pagination (no new dep) or swiper-style
  auto-advance; AOS fade-ups approximated with Tailwind transitions or
  omitted; icomoon icons → lucide-react / inline SVGs (brand icons have no
  lucide equivalents — inline SVG per repo convention); picsum-seeded
  photos (`picsum.photos/seed/wavelength-N/w/h`); text logo "Wavelength."
  (white + lime period); placeholder names/roles/copy kept.

## Tasks (implementer checklist)

- [ ] Scaffold `apps/wavelength` (copy simplest existing app; package
      `@free-react-templates/wavelength`; register workspace).
- [ ] index.html: title "Wavelength — Radio Station"; system font stack
      (no Google Fonts needed — matches original).
- [ ] `@theme` tokens: `--color-brand: #7cbd1e` (lime), `--color-ink:
    #000`, `--color-body: #4d4d4d`, `--color-footer: #333333`, muted
      grays (#737373, #b3b3b3, #a6a6a6, #cccccc), bg-light #f8f9fa,
      hover yellow #ffc107.
- [ ] Navbar: transparent overlay, "Wavelength." logo (white + lime
      period), 6-link desktop menu (Home, DJs, Schedule, Podcasts,
      Events, Contact), mobile hamburger + off-canvas menu with close
      control (test desktop + mobile variants; duplicates in DOM → use
      getAllByRole, index mobile last).
- [ ] Hero: 100vh photo bg + rgba(0,0,0,0.4) overlay, h1 "Listen — On-Air
      Now" (uppercase 700 ls .1em, 1.5rem mobile / 2.5rem desktop), intro
      line, styled `<audio controls>` (max-w 400px, h-50px, rounded-[25px],
      white panel, lime play button).
- [ ] Show cards band: negative-margin (-100px) row of 4 unit-9 cards
      (300px tall), lime padded-box title + black padded-box schedule
      (implement the box-shadow padding trick), photo zoom + caption lift
      on hover.
- [ ] Weekly Radio Program: section heading with 70px lime underline; retro
      flex block — 1 tall card (48%) + 2 stacked cards (200px, 8% gap);
      stack on mobile.
- [ ] Testimonials: bg-light section, carousel of 6 white slides (circular
      avatar, name, italic quote), bar pagination 28×4px (active lime),
      auto-advance + manual nav.
- [ ] Subscribe band: 30vh photo bg + overlay, "Subscribe" heading, email
      input (transparent, white text, italic 0.5-opacity placeholder,
      height 60px) + lime "Subscribe" button.
- [ ] DJ grid: 6 team cards (3-col), photo + green overlay
      (rgba(124,189,30,0.8)) revealing name/role/socials on hover/focus.
- [ ] News & Events: bg-light section, 3 white cards (1px #e6e6e6 border,
      4px radius, image zoom on hover): date line, title link, excerpt.
- [ ] Social band: solid lime band, 6 accessible icon links (facebook,
      twitter, instagram, linkedin, pinterest, youtube), yellow hover.
- [ ] Footer: #333333, About / Navigations (2 link lists) + Follow Us /
      Watch Live Streaming (thumbnail + 70px white play circle), uppercase
      14px headings with 40px lime underline, copyright bar with repo
      standard credit.
- [ ] Tests: 100% coverage (navbar + mobile menu, hero + audio, show
      cards, retro block, testimonial carousel, subscribe form, DJ grid
      hover, news cards, social band, footer, composition, document
      title).
- [ ] Gate: `npm run verify:app -- wavelength` (typecheck → lint → vitest
      100% → build).
- [ ] PR description: source Radios, preview URL, tokens, renames, icon
      substitution note, picsum note.
- [ ] After merge: verify live surge URL + bundle; bookkeeping `[x]` +
      URL on the Radios row (line 483) + any duplicate rows for the same
      slug.

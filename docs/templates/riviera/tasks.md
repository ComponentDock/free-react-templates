# Riviera (ColorLib "Europa") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-riviera` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Europa" — hotel & spa template
  (source: https://colorlib.com/wp/template/europa/). Listed in TEMPLATES.md
  (Hotel section, line 388; duplicates at lines 1001 and 1906 — mark EVERY
  copy `[x]` when done).
- **Preview URL:** https://preview.colorlib.com/theme/europa/ (title "Europa
  Hotel & Spa | Template"). Fetched: `/tmp/europa-prep/preview.html` (33 KB),
  `/tmp/europa-prep/style.css` (30 KB). Screenshot `europa-free-template.jpg`
  (1200×946, viewed in browser). Preview DOM and screenshot agree — dark
  charcoal header, pool-resort hero, dark translucent booking card, peach
  `#F9AD81` accents, dark `#242424` footer. Screenshot only shows the
  header/hero/booking card; the rest of the sections come from the DOM.
- **Demo brand in the preview is "Europa"** → rename to **Riviera**
  (Mediterranean resort vibe; text logo "Riviera" over "HOTEL & SPA"
  tagline recreated as styled text, never the copied `img/logo.png`).
- **Visual design:** luxury resort, light editorial layout. Dark charcoal
  `#353535` absolute header with white uppercase nav + peach CTA. Hero:
  full-bleed pool photo, centered 96px white "A Luxury Stay". Booking card:
  black 47%-opacity panel overlapping the hero bottom with white "Check
  Availability", From/To date fields (dd/mm/yyyy + calendar icons),
  Adults/Children steppers (-/+), Room dropdown (Master suite / Double Room
  / Single Room / Special Room), peach "Go". Intro: 2 columns — eyebrow
  "a memorable holliday" + 48px "A great stay in a lovely hotel." + copy;
  right column copy + peach CTA. Facilities: two 796px full-bleed photo
  panels ("Luxury Suite Room" — From $399 — icon list Smart TV · High Wi-fii
  · AC · Parking · Pool — outline CTA; "Infinity Pool" flipped with subtitle
  "For all our guests"). Guestbook: 60px section title + 2 dated quote cards
  (stars `#ed8a19`, circular avatars, peach author names, "Madrid"). Video:
  photo + overlapping photo with 95px white circular play button (peach
  icon). About: "“Customers love our facilities”" + copy + CTA + 3 stacked
  photos. Footer: `#242424` — about + logo, Newsletter (input `#676767` +
  peach Subscribe), Contact Info (address 1525 Boring Lane, Los Angeles, CA;
  phone +1 (603)535-4592), link row, `#171717` copyright bar.
- **Fonts:** single family `"Montserrat Alternates", sans-serif` for
  everything (headings h1–h6, body p, inputs; weights 400/500/600/700). Load
  via Google Fonts `<link>` in `index.html`.
- **Structure (1:1 from the preview DOM):**
  1. Header `header.header-section` — `background: #353535; position:
absolute; width: 100%; top: 0; z-index: 999; padding: 30px` ·
     `container-fluid > .inner-header`: `div.logo` (left; text logo
     "Riviera" + "HOTEL & SPA" tagline) · `div.nav-right` (float right;
     peach `primary-btn` "Make a Reservation" — 16px, padding 18px 38px,
     square) · `nav.main-menu.mobile-menu` (float right, margin-right 30px;
     Home (active, peach + underline) · About · Rooms · Pages ▾ · News ·
     Contact, white, ~50px gaps; dropdown white 220px: About Us / Rooms /
     Services, `#242424` links, hover row peach bg white text; hamburger on
     mobile with `aria-expanded`). The header overlays the hero (absolute) —
     the hero pads its top ~396px to clear it.
  2. Hero `section.hero-area.set-bg` (`img/hero-bg.jpg`; `height: 938px;
padding-top: 396px`) — centered `.hero-text h1` "A Luxury Stay": 96px
     white 600.
  3. Booking card `section.search-filter` — `margin-top: -362px; position:
absolute; width: 100%; z-index: 99`. `.check-form`: `:after` black
     0.47-opacity overlay; `h4` "Check Availability" white; `.datepicker`
     From/To white boxes (padding 18px; label 14px 600 `#242424`; input
     10px uppercase `#242424` 0.5 opacity, `border-bottom: 1px solid
#888888`; calendar icon bottom right); `.room-quantity` Adults +
     Children steppers (`.single-quantity` — label p + `.pro-qty` with `-`/
     `+` qtybtns + number input); `.room-selector` dropdown (nice-select;
     options "Master suite · Double Room · Single Room · Special Room",
     placeholder text "Room Eg. ..."); peach Go button (18px white, padding
     43px 27px, `border: 1px solid #F9AD81`).
  4. Intro `section.intro-section.spad` — 2 `col-lg-6` columns:
     `.intro-left`: `div.section-title` — `span` "a memorable holliday"
     (12px, letter-spacing 4px, uppercase, `#868686`) + `h2` "A great stay
     in a<br>lovely hotel." (48px/48px 600 `#181717`) + lorem p
     (`#9d9d9d` 14px/28px 500); `.intro-right` (`padding-top: 168px`): lorem
     p + peach `primary-btn` "Make a Reservation". NOTE: the stylesheet's
     `.intro-text` 15px `#F9AD81` border is NOT wired to the homepage HTML
     (`.intro-left`) — the live preview has NO orange border; follow the
     preview.
  5. Facilities `section.facilities-section` — 2 full-width
     `.facilities-item.set-bg` (`height: 796px; padding: 95px 100px 60px;
margin: 0 -15px`; `img/faci-1.jpg`, `img/faci-2.jpg`): `.fi-title`
     (`margin-bottom: 375px`; 488px on `.fi-right`) — white `h2` 48px/48px
     500 ("Luxury Suite Room" / "Infinity Pool") + subtitle p white 12px
     uppercase letter-spacing 4px ("From $399" / "For all our guests");
     `.fi-features` (inline `.fi-info`: white icon + white label; first
     panel: Smart TV · High Wi-fii · AC · Parking · Pool); `primary-btn`
     transparent + `border: 3px solid #ffffff`. Second panel `.fi-right`
     (image on the right).
  6. Testimonials `section.testimonial-section.spad` — `div.section-title`
     `h2` "Guestbook" (60px `#242424`); 2 `.testimonial-item` (col-lg-6):
     `.ti-time` "02 / 02 / 2019" (11px, letter-spacing 1.2px, `#242424`
     0.5 opacity) · `h4` quote 600 `#242424` ("We loved our stay" / "I will
     come back again") · `.rating` stars `#ed8a19` · p lorem · `.ti-author`:
     circular 54px avatar + `.author-text` `h6` peach name ("JOHN DOE" /
     "Maria Smith") + `span` 12px `#242424` location ("Madrid").
  7. Video `div.video-section` — `.video-bg.set-bg` (height 534px;
     `img/video-bg.jpg`) + `.video-text.set-bg` (height 703px, `margin-top:
-320px`; `img/video-inside-bg.jpg`) with centered white circular play
     link (95×95, radius 50%, `color: #F9AD81`, 25px fa-play) → YouTube
     (replace with `#`/placeholder).
  8. About `section.homepage-about.spad` (padding 75px 0 70px) —
     `.about-text`: `section-title` `h2` "“Customers love our
     <br>facilities”" (`#242424`, line-height 56px) + p + peach
     `primary-btn` "Make a Reservation"; 3 stacked `.about-img` photos
     (min-width 100%, mb 30px; `home-about-1..3.jpg`).
  9. Footer `footer.footer-section` — `background: #242424; padding-top:
72px`; `row` of 3 `col-lg-4 .footer-item`: (1) `div.footer-logo` (text
     logo) + lorem p; (2) `h5` "Newsletter" (`#F9AD81` 500, mb 57px) +
     `form.newslatter-form` — input (height 50px, bg `#676767`, white text,
     italic white placeholder, padding-left 25px) + peach button
     "Subscribe" (14px white, padding 14px 25px, absolute right, height
     100%); (3) `h5` "Contact Info" (`#F9AD81`) + `ul` 2 `li` (pin icon +
     "1525 Boring Lane,<br>Los Angeles, CA"; phone icon + "+1
     (603)535-4592"). Then `col-lg-12` link row (Home · About · Rooms ·
     Facilities · News · Contact) + `div.copyright` (`background: #171717;
padding: 24px; margin-top: 30px`) — centered "Copyright © All rights
     reserved | This template is made with by Colorlib" (reword for
     Riviera).
- **Note:** inner pages exist in the original (about-us / rooms / services /
  blog / contact) — NOT required; single index page only, nav links can be
  dead anchors `#`. The hero is a static centered headline (no slider). The
  logo is an image asset — recreate as styled text ("Riviera" + "HOTEL &
  SPA" tagline).

## Implementation tasks (for the implementer stream)

1. `git fetch origin`; confirm `openspec/specs/template-riviera/spec.md`
   exists on main; claim with a `[~]` mark on TEMPLATES.md lines 388, 1001
   AND 1906.
2. Scaffold `apps/riviera` from the simplest existing app (copy pattern,
   rename package to `@free-react-templates/riviera`); register the
   workspace (`npm install` at root so `package-lock.json` updates; verify
   with `grep -c "free-react-templates/riviera" package-lock.json`); keep
   `injectUiSource()` in `vite.config.ts`.
3. TDD: write tests first (Vitest + Testing Library, 100% coverage)
   mirroring the spec's Gherkin scenarios, then implement:
   - `src/components/Header.tsx` — dark `#353535` absolute bar, text logo
     "Riviera / HOTEL & SPA", white nav (Home active · About · Rooms ·
     Pages ▾ · News · Contact, peach active + underline), peach
     "Make a Reservation" CTA, Pages dropdown (About Us / Rooms / Services),
     hamburger + `aria-expanded` on mobile.
   - `src/components/Hero.tsx` — full-bleed photo + centered 96px white
     "A Luxury Stay".
   - `src/components/BookingForm.tsx` — dark 47%-overlay card overlapping
     the hero: "Check Availability" + From/To date fields (calendar icons) +
     Adults/Children steppers + Room select + peach "Go"; zod validation,
     success + error states.
   - `src/components/Intro.tsx` — 2 columns: eyebrow + 48px heading + copy;
     right: copy + peach CTA.
   - `src/components/Facilities.tsx` — 2 full-width photo panels with
     titles, subtitles, icon feature lists, white-outline CTAs (second
     flipped).
   - `src/components/Guestbook.tsx` — "Guestbook" 60px title + 2 dated
     quote cards (stars, avatars, peach names, locations).
   - `src/components/VideoSection.tsx` — overlapping photos + white circular
     play button.
   - `src/components/About.tsx` — quote heading + copy + CTA + 3 stacked
     photos.
   - `src/components/NewsletterForm.tsx` — email validation, success +
     reset, error state (used in footer).
   - `src/components/Footer.tsx` — 3 columns (about+logo, newsletter,
     contact info), link row, copyright bar.
   - `src/App.tsx` — compose in order; `src/index.css` — `@theme` tokens.
4. Images: `https://picsum.photos/seed/riviera-<n>/<w>/<h>` (hero pool,
   facility panels, video backgrounds, about photos, testimonial avatars);
   icons from `lucide-react` (calendar, minus, plus, chevron-down, star,
   play, menu, x, map-pin, phone, send).
5. Verification: `npm run spec:validate`; `scripts/verify-app.sh riviera`
   (typecheck + lint + 100% coverage + build). Never touch shared files
   (package-lock only via `npm install`).
6. PR: branch `feat/template-riviera`, PR to main, description must state
   source (ColorLib "Europa"), preview URL, design tokens, what differs;
   merge immediately (`gh pr merge --squash --delete-branch`).
7. After merge: pull --rebase; mark TEMPLATES.md lines 388, 1001 AND 1906
   `[x]`, add surge URL + homepage; `npm run readme:status`; push.

# Ironpulse (ColorLib "TopGym") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-ironpulse` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "TopGym" — free gym / fitness club HTML template
  (source: https://colorlib.com/wp/template/topgym/). Listed in TEMPLATES.md
  under the Bootstrap category (line 515); duplicate rows at line 1204 under
  Business (365) and line 1881 under Health Fitness (72) — same template,
  ONE app only.
- **Preview REACHABLE (HTTP 200):** `https://preview.colorlib.com/theme/topgym/`.
  DOM fetched (`/tmp/topgym-preview.html`, 49,595 bytes) + stylesheet
  `css/style.css` (`/tmp/topgym-style.css`, 38,006 bytes) + TEMPLATES.md
  screenshot (`topgym-free-template.jpg`, 1200×946, viewed in the browser).
- **Aesthetic:** dark, high-contrast hard-gym look — black/dark-grey photo
  sections (hero, trainers, footer) with white text, white body sections
  between them, and a single vibrant electric-blue `#233EDE` accent used
  for EVERY CTA / play button / icon circle / card frame. Logo is a boxy
  stencil-style "TOP GYM" wordmark.
- **Sliders/menus are jQuery plugins in the source** (owl-carousel for the
  hero, slicknav for the mobile menu, jQuery for the search-overlay and
  set-bg background toggles) — implement with React state: a 3-slide hero
  slider with dot pagination + auto-advance, a hamburger mobile menu with
  the 6 nav entries, a full-screen search overlay toggled by the nav search
  icon.
- **Fonts:** single family — `"Roboto", sans-serif` (400/500/700/900)
  everywhere. Google Font — load via `<link>` in `index.html`.
- **Buttons:** `.primary-btn` = square (no radius), uppercase, 14px 700,
  letter-spacing 1.5px, padding 20px 50px, bg `#233EDE`, white text. The
  trainers section has a dark variant (`.trainer-btn`, bg `#212122`).
  `.play-btn` = 56px circle (`border-radius: 50%`) `#233EDE`; `.feature-icon`
  = 88px circle `#233EDE`.
- **Copy is placeholder/Lorem with a typo** ("Upcomming Classes") —
  paraphrase freely, FIX the typos, keep the same kinds: nav (Home / About
  us / Classes / Instructors / News / Contact), hero slides ("Be Fit.Top
  Gym" / "Be Fit.Top Trainer" / "Be Fit.Top Body"), features (Amazing
  Setting / Best Trainers / Diet Plans), services (Pilates / Free Lifting /
  Yoga / Spinning), trainers (Rachel Smith, Micheal Williams, James Brown —
  all "Aerobics Instructor"), classes (Gym Fitness 11:00–12:00, Pilates
  12:00–13:00, Spinning 13:00–14:00, Yoga 14:00–15:00, Gym Fitness
  15:00–16:00, Pilates 16:00–17:00), membership ("Membership Cards" + "25%
  Discount"), sign-up ("New" / "Personal Trainer" / "Sign up Now"), footer
  (6 links + subscribe form + 5 socials).
- **DOM oddity:** the "Upcomming Classes" title is misspelled in the source
  ("Upcomming") — the section _kind_ is the reference; implement as
  "Upcoming Classes".

## Structure (top → bottom, single page)

1. **Header** (`.header-section`, height 142px, `position: absolute`,
   transparent over the hero) — logo image left; centered nav Home / About
   us / Classes / Instructors / News / Contact (white 13px 500 uppercase);
   search icon (`fa fa-search`, white) at the right end of the nav list →
   opens the full-screen search overlay. Mobile: hamburger → dropdown
   (slicknav in source).
2. **Search overlay** (`.search-bar-wrap`, `position: fixed`, 100% × 100%,
   bg `#073B4C`, hidden until `.active`) — centered: h2 "Search" (white
   uppercase), input (`Type Keywords`, border `#ddd`), blue Search button
   (100px, bg `#233EDE`), close control top-right.
3. **Top social** (`.top-social`, absolute right edge, z-index 999) —
   vertical strip (121px, bg `#000`) with circular icon links (48px, radius
   50%, bg `#081624`, white icons). Screenshot shows FB/Twitter-style
   icons — 4–5 links (inline SVG brand icons; lucide-react removed brand
   icons).
4. **Hero slider** (`.hero-slider .slide-items`, owl-carousel) — 3
   `.single-slide` slides (height 895px, pt 343, centered, bg photos via
   `data-setbg`: `img/bg.jpg` / `bg-2.jpg` / `bg-3.jpg`): blue circular
   `.play-btn` (56px, links a YouTube promo — implement as a decorative
   play link), h1 "Be Fit.Top Gym" / "Be Fit.Top Trainer" / "Be Fit.Top
   Body" (white 130px 500, mb 45), blue `.primary-btn` "Read More"; dot
   pagination bottom-center (6px white dots, active dot gets a 26px ring);
   slides animate in on activation (play → h1 → button, 0.2–0.6s delays —
   approximate with CSS transitions).
5. **Features** (`.features-section.spad`, white, pt 95 / pb 90) — 3
   `.single-features` columns: `.features-img` photo + `.feature-text`
   centered: `.feature-icon` (88px blue circle, `margin-top: -34px`
   overlapping the photo) + h5 (18px 700 uppercase ls 1.5px `#353535`) + p
   (`#7b7b7b` 15px lh 30). Titles: Amazing Setting / Best Trainers / Diet
   Plans.
6. **Services** (`.services-section.spad`, bg `#212122`) — `.section-title`
   centered: span "Features" (12px 900 uppercase ls 6px `#233EDE`) + h2
   "Services" (white 48px 700 uppercase ls 6px); 4 `.single-service`
   columns (icon image mb 50 + h5 white 18px 700 uppercase + p `#7b7b7b`
   14.5px): Pilates / Free Lifting / Yoga / Spinning; below, centered
   `.service-btn .primary-btn` "see all the services" (lowercase in
   source — keep lowercase to match, or normalize; either is faithful).
7. **Trainers** (`.trainer-section.set-bg`, bg photo, pt 125 / pb 100) —
   `.section-title` with WHITE span "The Best" + h2 "Trainers" + `.trainer-btn`
   (dark `#212122` primary-btn, absolute right, "See All"); 3
   `.single-trainer`: `.trainer-img` photo (width 100%) + `.img-hover`
   (absolute blue `#233EDE` block, left 15px, with white `+` icon link) +
   `.trainer-text` (pt 48): h5 white 18px 700 uppercase name + span role
   (white 15px 400, opacity .6). Names: Rachel Smith / Micheal Williams /
   James Brown, all "Aerobics Instructor".
8. **Upcoming events** (`.upcoming-event-section.spad-2`, white, pt/pb 100) — 3 columns (each 503px tall):
   - `.upcoming-classes` — border 2px `#E5E7F3`, pl 45 / pt 67 / pb 45;
     `.up-title`: span "Next" (`#212122` 12px 900 ls 6px, opacity .6) + h5
     "Upcoming Classes" (`#212122` 18px 700 uppercase ls 1.5px);
     `ul.classes-time`: 6 rows (clock icon + class name + `<span>` time
     right-aligned; `#7b7b7b` 14px, mb 30): Gym Fitness 11:00–12:00 ·
     Pilates 12:00–13:00 · Spinning 13:00–14:00 · Yoga 14:00–15:00 · Gym
     Fitness 15:00–16:00 · Pilates 16:00–17:00.
   - `.membership-card.set-bg` — bg photo + thick `#233EDE` frame (border
     22/24/21/20px); `.membership-details` (pt 47 / pl 27): up-title
     "Next" + h5 "Membership Cards" (`#212122`); `.discount h1` "25%"
     (`#233EDE` 72px 700) + span "Discount" (15px 700).
   - `.member-sign-up.set-bg` — bg photo, pt 67 / pl 45 / pr 41, text
     left: up-title span "New" + h5 "Personal Trainer" (white, eyebrow
     opacity .6); p white 15px lh 30 (mb 42); centered `.member-signup-btn`
     with block `.primary-btn` "Sign up Now".
9. **Footer** (`.footer-section.set-bg`, bg photo, height 641px, pt 109,
   all centered) — `.footer-logo` image (mb 33); `.footer-menu` (mb 86):
   6 links (white 13px uppercase, inline, mr 37) Home / About us / Classes
   / Instructors / News / Contact; `.subscribe-form` (542px, mb 52):
   input transparent `border: 2px solid #fff`, height 73px, italic white
   placeholder "your Email" (opacity .6), blue "Sign Up" button (192px,
   bg `#233EDE`, absolute right); `.social-links` (mb 45): 5 white
   circular icons (mr 60); `.footer-icon-img` (mb 32); `.copyright`:
   "Copyright © <year> All rights reserved | This template is made with
   ♥ by **Component Dock**" (→ https://www.componentdock.com/, replaces
   the source's Colorlib credit; white 13px, opacity .5, credit link
   underlined).

## Implementation tasks (for the implementer stream)

- [ ] `cp -r` scaffold from the simplest existing app; rename package to
      `@free-react-templates/ironpulse`; `npm install` at repo root; CNAME +
      homepage `ironpulse.free.componentdock.com`
- [ ] `src/index.css` `@theme` tokens: brand `#233EDE`, dark `#212122`,
      ink `#353535`, muted `#7b7b7b`, line `#E5E7F3`, search `#073B4C`,
      strip `#081624`; Google Fonts `<link>` (Roboto 400/500/700/900)
- [ ] `src/data.ts` — nav links (6), hero slides (3), features (3),
      services (4), trainers (3), classes (6), footer links + socials (5)
- [ ] Components: `Navbar` (transparent absolute, desktop + hamburger mobile
      menu, search icon), `SearchOverlay` (full-screen `#073B4C` toggle),
      `TopSocial` (right-edge vertical strip), `Hero` (3-slide slider +
      dots + auto-advance, play button, "Read More"), `Features` (3 cards,
      blue circle icons), `Services` (dark, 4 columns + see-all button),
      `Trainers` (bg photo, 3 cards + hover block + See All button),
      `UpcomingEvents` (schedule box + membership card + sign-up box),
      `Footer` (centered, subscribe form + socials + Component Dock credit)
- [ ] Tests per section mirroring the spec Gherkin scenarios, 100%
      coverage (slider dot navigation, search overlay toggle, mobile menu
      toggle, subscribe form)
- [ ] Subject-screen picsum seeds (3 hero slides, 3 features, 3 trainers,
      membership-card + sign-up + trainer-section + footer backgrounds) —
      pixel metric + browser verify; prefer dark gym/athletic shots; pin
      seeds in PR
- [ ] `bash scripts/verify-app.sh ironpulse` green; PR with source, preview
      URL, tokens, deviations (React slider / hamburger / search overlay /
      Component Dock credit); squash-merge immediately

## Verification notes / pitfalls

- Desktop + mobile navs render duplicate links in the DOM — use
  `getAllByRole` and index the mobile one last (skill pitfall).
- jsdom applies the injected Tailwind CSS, so `hidden lg:flex` desktop nav
  lists are `display:none` and getByRole excludes them — query desktop-only
  links with `{ hidden: true }`; CSS `uppercase` does NOT change accessible
  names, query raw text ('Home'), not 'HOME'.
- `aria-current={cond}` renders `aria-current="false"` — use
  `aria-current={cond ? 'true' : undefined}`.
- The full-screen search overlay is `visibility: hidden; opacity: 0` until
  `.active` in the source — implement as a conditional render / `hidden`
  class toggled by state; the overlay is `role="dialog"`-style semantics
  with a close button (assert it opens AND closes).
- The hero's set-bg images load via jQuery `data-setbg` in the source —
  in React just use `<img>` / `background-image` directly.
- Hero slide animation (play → h1 → button staggered fade/slide-in) is
  owl-carousel's active-slide transition — approximate with CSS
  `transition-delay` classes on the active slide; tests should assert the
  active slide's content is visible.
- Gym/photos are arbitrary on picsum — screen seeds before pinning (see
  seed-screening method in the replication skill); dark, high-contrast
  shots (weights, running, dark scenes) read best against the dark
  overlays; membership/sign-up backgrounds need dark-ish photos for the
  white text to stay readable.
- The `.img-hover` blue block on trainer photos is `position: absolute`
  at the photo's left edge — recreate as an absolutely-positioned blue
  div with a `+` icon (lucide `Plus`).
- No `tel:` literals anywhere (secret-scan rewrites them) — the source
  has no phone number, so keep it that way.
- `getByText(/Ironpulse/)`-style queries can match multiple elements
  (logo vs copyright) — anchor with `/^Ironpulse$/` where the word
  repeats.
- The `classes-time` list icons are small clock images in the source —
  use lucide `Clock` (14px, `#7b7b7b`).
- Social icons: lucide-react removed brand icons — inline SVG paths
  (facebook / twitter / instagram / linkedin / youtube) for the 5 footer
  links and the right-edge strip.

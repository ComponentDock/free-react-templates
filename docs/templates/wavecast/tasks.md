# Wavecast (ColorLib Podcast) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream (stream 3). The spec
> folder `openspec/specs/template-wavecast/` is the claim marker —
> implementers start here.

## Design notes (replication findings)

- **Original:** ColorLib "Podcast" — podcast / audio landing website
  template (source: https://colorlib.com/wp/template/podcast/; listed TWICE
  in TEMPLATES.md — line 476 AND line 2276, both `- [ ]`, same slug →
  implement ONE app, mark BOTH rows `[x]` at bookkeeping).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/podcast/ (HTTP
  200, 30.2KB HTML + `css/style.css` 19.3KB + Bootstrap 4 + owl.carousel +
  mediaelement@4.2.7 + magnific-popup + jquery-ui + aos, extracted
  2026-08-12 during prep). Screenshot `podcast-free-template.jpg` (1200×946,
  AVIF) converted to PNG and viewed in the browser.
- **Visual design:** clean, minimalist, white podcast landing — bold black
  "Podcast." logo with a TEAL dot, dark-gray 900-weight hero headline over a
  flat vector illustration (two people at desks with laptops — one blue
  hair, framed pictures on wall), black audio player bars on white episode
  cards, circular avatars throughout, teal accents on links/buttons, a
  light-gray carousel band, a dark photo subscribe band, dark footer.
- **Palette (CSS-verified):** primary teal `#3ca59d` (logo dot, active/hover
  nav, dropdown hover bg, pagination active, links, form focus border,
  btn-primary); footer `#333333` bg with headings #fff, links `#999999`,
  body `#737373`; body text `#4d4d4d` (weight 200, 1.1rem, lh 1.7); light
  `#f4f5f9` / Bootstrap `#f8f9fa` (guest band); `#ccc` (counts, separators);
  `#efefef` (pagination border); dark `#25262a` (dropdown text); cover
  overlay `rgba(0,0,0,.4)`.
- **Fonts:** Bootstrap 4 default SYSTEM sans stack (no Google Fonts loaded):
  `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
Arial`. Weights: hero h1 900, section h2 bold, episode titles
  `font-weight-light`, guest names light h5. Do NOT add a display serif.
- **Buttons:** `.btn` uppercase 12px, padding 12–20px vertical; `.btn-primary`
  weight 300, letter-spacing .2em, teal bg; hover lifts -2px with shadow.
  Radius: Bootstrap 0.25rem.
- **Cards:** `.podcast-entry` bg-white, radius 4px, shadow
  `0 5px 40px -10px rgba(0,0,0,.1)`, image column 300px (cover), text
  padding 40px.

## Section order (1:1, LIVE DOM — comments stripped)

1. **Mobile menu** `.site-mobile-menu` — off-canvas, same links, hamburger
   toggler visible < lg.
2. **Header** `.site-navbar.py-4` (white): logo h1 "Podcast." (teal
   `.text-primary` dot); nav `.site-menu`: Home (active) / Dropdown
   (`has-children` → `.dropdown.arrow-top`: Menu One, Menu Two, Menu Three) /
   About / Contact / Login·Register. Links 15px #000, hover/active teal.
3. **Hero** `div.container.pt-5.hero`: left `.col-lg-4` — h1 `display-3`
   "Tell Your Story to the World" (40px !important, 900) + p "Join with us!
   Login or Register. Lorem ipsum dolor sit amet, consectetur adipisicing
   elit. Delectus, ex!"; right `.col-lg-8` — flat illustration
   `images/1x/asset-1.png` (two people at desks with laptops).
4. **Episodes** `.site-section`:
   - `.col-lg-3` sidebar `.featured-user`: h3 "Popular Podcaster" (14px
     uppercase); 6 entries (avatar 50px circle, name, count 12px #ccc):
     Claire Stanford 32,420 / Dianne Winston 12,381 / Borris Larry 9,291 /
     Garry Smith 3,291 / Gerson Stack 1,092 / Jenna Stone 911 podcasts.
   - `.col-lg-9`: 5 `.podcast-entry` cards — image (300px cover) + text
     (40px padding): h3 light title link "Episode 08: How To Create Web Page
     Using Bootstrap 4" (teal), byline "By Mike Smith / 16 September 2017 /
     1:30:20" (`/` = `.sep` #ccc, 5px margins), dark audio player bar
     (mediaelement). Episodes 08→04, same title pattern.
   - Same section, below the row: `.site-block-27` pagination — 40px
     circles, radius 50%, border 1px #efefef; 1 (active, teal fill/white) 2
     3 4 5 + next arrow.
5. **Featured Guests** `.site-section.bg-light.block-13`: centered h2 bold
   "Featured Guests"; `.nonloop-block-13.owl-carousel` — 6 white slides
   `.text-center.p-3.p-md-5.bg-white`: circular photo (w-50) + h3 light name
   - quote p. Names: Megan Smith, Brooke Cagle, Philip Martin, Steven
     Ericson, Nathan Dumlao, Brook Smith. Owl prev/next arrows centered below
     (30px black).
6. **Subscribe** `.site-blocks-cover.overlay.inner-page-cover` (bg
   `hero_bg_1.jpg`, overlay rgba(0,0,0,.4)): centered h2 "Subscribe" white +
   p white 1.2rem + `.site-block-subscribe` input-group: transparent input
   (white text, italic placeholder "Enter Email" rgba(255,255,255,.5),
   height 80px, 22px, focus border teal) + teal "Send" button.
7. **Footer** `.site-footer` (bg #333333, padding 4em 0): About Us (h3 white
   20px + p #737373) / Navigation (Podcasts, Services, About Us, Blog,
   Contact — #999999) / Subscribe (email input 43px + teal "Subscribe"
   submit). Copyright bar: "Copyright © All rights reserved | This template
   is made with ♥ by Colorlib" (Colorlib credited).

## Implementation tasks (TDD, in order)

- [ ] Scaffold `apps/wavecast` (copy simplest existing app; package
      `@free-react-templates/wavecast`; vite.config.ts with `injectUiSource()`;
      npm install at root so package-lock.json registers the workspace)
- [ ] Spec-driven tests first: `Navbar.test.tsx`, `Hero.test.tsx`,
      `Episodes.test.tsx`, `FeaturedGuests.test.tsx`,
      `SubscribeBand.test.tsx`, `Footer.test.tsx`, `App.test.tsx` (100%
      coverage; RTL user-event for menu toggle / carousel / forms)
- [ ] `@theme` tokens in `src/index.css`: `--color-primary: #3ca59d`,
      `--color-ink: #4d4d4d`, `--color-dark: #25262a`, `--color-footer:
    #333333`, `--color-muted: #ccc`, `--color-line: #efefef`, `--color-soft:
    #f8f9fa`; system sans font stack
- [ ] Navbar: logo "Wavecast." (teal dot), links + Dropdown submenu,
      Login / Register, mobile hamburger (aria-expanded, focus rings)
- [ ] Hero: headline + paragraph left, flat illustration right (composed
      graphic — NOT a random landscape photo)
- [ ] Episodes: sidebar (6 podcasters) + 5 cards (picsum
      `seed/wavecast-<n>` thumbs, title, byline with `/` separators, dark
      `<audio controls>` styled like the mediaelement bar) + round
      pagination
- [ ] FeaturedGuests: light band, carousel auto-advance + prev/next arrows
      (custom hook + timer, cleanup on unmount)
- [ ] SubscribeBand: bg image + rgba(0,0,0,.4) overlay, transparent input,
      teal Send; front-end email validation + success state
- [ ] Footer: 3 columns + copyright bar crediting Colorlib; subscribe form
      with validation
- [ ] Do NOT render a "Behind The Mic" team section (commented out in the
      reference)
- [ ] Gate: `bash scripts/verify-app.sh wavecast` from repo root (typecheck + lint + 100% coverage + build)
- [ ] Bookkeeping: mark BOTH Podcast rows (lines 476 + 2276) `[x]` with the
      wavecast surge URL; `npm run readme:status`; PR + immediate squash
      merge to main

## Pitfalls / notes

- The `preview.colorlib.com` page includes commented-out markup ("Behind The
  Mic" team section, extra copies of the audio players) — strip comments
  before reading the DOM; only the LIVE sections count.
- The screenshot shows duration "1:10:00"; the live DOM says "1:30:20" — use
  the DOM value.
- `.bg-light` custom rule `background:#ccc` in style.css is a quirk; the
  guest band reads as light gray — use #f8f9fa/#f4f5f9 for visual fidelity.
- No Google Fonts on the reference — keep the system sans stack; don't add a
  serif display font.
- Audio: don't pull mediaelement — a styled native `<audio controls>` (dark
  bar) matches the look with zero deps.
- Hero illustration is flat vector art; recreating it as an inline SVG /
  composed graphic keeps fidelity without copying the asset.

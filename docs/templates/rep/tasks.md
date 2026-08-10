# Rep (ColorLib Gymer) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-rep`.

## Design notes (replication findings)

- **Original:** ColorLib "Gymer" — fitness / gym template
  (source: https://colorlib.com/wp/template/gymer/).
  TEMPLATES.md has THREE copies of this item (lines 407, 1853, 2325 — mark
  EVERY copy `[x]` when done; dup-row trap: always grep the source slug
  before claiming).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/gymer/
  (HTTP 200, 31.5 KB rendered DOM, title "Gymer"). Stylesheet
  `css/style.css` (~18 KB) main, plus a custom-compiled `bootstrap.min.css`
  (27 KB — the `.btn-primary` definition lives here:
  `{color:#212529;background-color:#48d494;border-color:#48d494}`),
  owl.carousel, jquery-ui, fancybox, aos, YTPlayer (hero background video),
  flaticon/icomoon icon fonts. Fonts: Google Fonts `<link>`
  `Muli:300,400,700,900` — headings, body and nav all use Muli (h1/h2 w900,
  body w300). Cross-checked against the TEMPLATES.md screenshot
  (`gymer-free-template.jpg`, viewed in browser 1200×946) — designs match:
  gym-interior hero photo with dark overlay, centered white "Welcome To
  Gymer" headline, transparent navbar with green-outlined CONTACT pill,
  black stats strip below the fold. The demo brands itself "Gymer";
  recreation uses the NEW name **Rep**.
- **Visual design (from DOM + CSS tokens + screenshot):** dark, moody gym
  landing page — full-screen hero photo of a gym interior (treadmills,
  ellipticals, people working out) dimmed by a dark `#222` overlay; huge
  white "Welcome To Gymer" headline centered (~7rem geometric sans); top
  nav: logo left, white links with green active underline, green-bordered
  "CONTACT" pill right; on scroll the header turns solid white with black
  links. Below the fold a black strip with four stat columns (green icon,
  big white number, white label): 2,260 Members · 210 Daily Visitors · 887
  Health Program · 1,920 Heart Beat. Rest of the page stays on the black
  base with green accents: split about ("Step Up Your Fitness" green
  heading + Get In Touch button + photo with hard green offset shadow),
  classes image carousel (green tint + title/category on hover), tabbed
  schedule tables, three trainer cards with green hard shadows, six solid
  green service cards, a `#121212` contact form section, and a black footer
  with About / Links / Subscribe. Demo copy is placeholder lorem —
  paraphrase into fitness-themed copy.
- **Structure (1:1, section order):**
  1. Header (`header.site-navbar.py-4.js-sticky-header`, `position:
absolute`, width 100%, z-index 1999, over hero; wrapped in
     `.sticky-wrapper`): container-fluid (px 7rem) → flex: `.site-logo`
     left (w900, 1.3rem, white "Gymer"); nav right `.site-navigation`
     text-right — `.site-menu.main-menu` (d-none d-lg-block): Home /
     Classes / Schedule / Trainer / Services (links padding 5px 20px,
     white, `.active` `#48d494`); second `.site-menu-dark` with `li.cta`:
     Contact `<span class="rounded border border-primary">` (border
     `#48d494`, padding 10px 20px, uppercase 0.8rem w700 `#48d494`; hover
     bg `#48d494` white text). Mobile: hamburger toggler (`d-lg-none`),
     offcanvas `.site-mobile-menu` (300px right, white bg, shadow). Sticky
     (`.sticky-wrapper.is-sticky`): white bg + shadow, logo/links black,
     hover `#48d494`, active underline 2px `#48d494`, `.shrink` py 10px.
  2. Hero/intro (`div.intro-section#home-section`): height **100vh, min
     900px**, `:before` overlay bg **`#222`**; YouTube background video
     (YTPlayer `#bgndVideo`) — recreate as photo + overlay; centered
     col-lg-8 text-center: h1 "Welcome To Gymer" (**7rem w900 white**).
  3. Stats + About (`.site-section.section-1`, black): (a) counter row —
     4 `.counter` cols (col-lg-3): green flaticon icon (3rem) + `strong`
     2.5rem w700 white + 1rem label: **2,260 Members · 210 Daily Visitors
     · 887 Health Program · 1,920 Heart Beat**; (b) about row — left
     col-lg-5: h2 `.section-title` "Step Up Your Fitness" (**3rem
     `#48d494` w900**, max-width 450px, mb 1.8rem; 1.5rem ≤991px) + lorem p
     - `btn btn-primary py-3 px-4` "Get In Touch" (uppercase 12px w900 2px
       border, hover transparent + white border/text); right col-lg-6:
       about_1.jpg `.img-shadow` (hard shadow `10px 10px 0 0 #48d494`).
  4. Classes (`.site-section.section-2#classes-section`): h2
     `.section-title` "Classes" + intro p; owl carousel `nonloop-block-13`
     — 5 `a.work-thumb` cards (link → single.html): img (slide_0..4.jpg) +
     `.work-text` (absolute top/left 10%, hidden): h3 "Classes fitness name
     here" (1rem w900 white) + `.category` (0.8rem rgba(255,255,255,0.7));
     hover: overlay **rgba(72,212,148,0.8)**, scale(1.07), text fades in;
     categories: **Fitness / Cardio Vascular / Lose Weight / Cardio
     Vascular / Fitness**; dots 10px `#e6e6e6`, active `#48d494`.
  5. Schedule (`.site-section.section-2#schedule-section`): h2
     `.section-title` "Schedule" + intro p; `ul.nav-tabs.tab-list-custom`
     centered (**border-bottom 1px `#48d494`**; `.nav-link` radius 4px;
     `.active` bg `#48d494` white): **Monday / Tuesday / Wednesday /
     Thursday / Friday / Sunday**; each tab-pane: `table.table-bordered
.table-custom.table-striped` (td white, py 20px) — 5 rows: **Gym
     8:00am–10:00am John Doe · Meditation 10:00am–10:30am James Holmes ·
     Weight Lifting 1:00pm–2:30pm Ben Smith · Crossfit 3:00pm–3:45pm Craig
     Peters · Aerobics 5:00pm–5:30pm Paul Green** + `td.text-center` "Join
     Now" smoothscroll link → #contact-section.
  6. Trainers (`.site-section#trainer-section`): h2 `.section-title`
     "Trainers" + intro p; `row.large-gutters` — 3 `.person` cards
     (col-md-6 col-lg-4): img person_1..3.jpg `.img-fluid.mb-5` (hard green
     shadow) + h3 name + `p.opacity-7` role + lorem p: **James Holmes ·
     Kelly Green · Ben Smith** ("Aerobatics Trainer").
  7. Services (`.site-section#services-section`): h2 `.section-title` "Our
     Featured Services" + intro p; owl carousel `nonloop-block-14` — 6
     `.service` cards (padding 4rem / 2rem mobile, **bg `#48d494`**):
     flaticon icon `display-3 text-white mb-4` + h3 (1.5rem w700 white, mb
     1.5rem) + p (rgba(255,255,255,0.8)): **Weight Lifting (muscle) ·
     Meditation (stationary-bike) · Crossfit (banana) · Aerobics (heart) ·
     Gym (scale) · Circling (weight)**; dots same as classes.
  8. Contact (`.site-section.bg-dark#contact-section`, **bg `#121212`**):
     centered col-md-7: h2 `.section-title.mb-3` "Contact Us" + p mb-5;
     form: First name / Last name (col-md-6) · Subject · Email · textarea
     (rows 10, "Write your message here.") · submit `btn btn-primary py-3
px-5 btn-block` "Send Message"; `.form-control`: height 43px, radius
     **0**, bg none, border-width 2px, white text, focus border
     `#48d494`.
  9. Footer (`footer.footer-section`, padding **7em 0**, black): About Rep
     (col-md-4: h3 uppercase **0.9rem ls .1rem w900 white** + p) · Links
     (col-md-3 ml-auto: Home / Meditation / Gym / Aerobatics) · Subscribe
     (col-md-4: p + `d-flex` form: input `.rounded-0` + submit
     `btn.btn-primary.rounded-0` "Subscribe"); copyright bar (text-center):
     "Copyright © <year> All rights reserved | This template is made with
     <heart> by Colorlib" → credit Rep.
- **Design tokens extracted from the preview CSS (`css/style.css` +
  custom `bootstrap.min.css`):**
- Brand green **`#48d494`**: `.btn-primary` bg/border, `.section-title`
  color, active nav link, CTA span border + hover bg, sticky-header hover +
  active underline, `.service` card bg, `.work-thumb` hover overlay
  `rgba(72,212,148,0.8)`, `.tab-list-custom` bottom border + active tab bg,
  carousel active dot, `.form-control` focus border, image hard shadows
  (`10px 10px 0 0 #48d494`), counter icons.
- Black/dark: body bg `#000`; contact bg `#121212`; hero overlay `#222`;
  dropdown borders `#edf0f5`/hover `#f4f5f9`/text `#25262a`; headings
  white (`h1,h2,h3` → `#fff`).
- White `#fff`: hero h1, nav links (non-sticky), logo, counter numbers,
  table cells, section headings, footer text.
- Grays: body copy `gray` (w300 1.1rem lh 1.7); category
  rgba(255,255,255,0.7); service p rgba(255,255,255,0.8); intro p
  rgba(255,255,255,0.5); dots `#e6e6e6`.
- Fonts: **Muli** 300/400/700/900 (Google Fonts `<link>`); hero h1 7rem
  w900; section-title 3rem w900 (1.5rem ≤991px); body 1.1rem w300; logo
  1.3rem w900; footer h3 0.9rem uppercase ls .1rem w900; work-thumb h3 1rem
  w900; service h3 1.5rem w700; counter strong 2.5rem w700.
- Buttons: `.btn` uppercase 12px w900 **2px border**, no focus shadow;
  `.btn-primary` bg `#48d494`, hover transparent + white border/text; CTA
  span 10px 20px 0.8rem uppercase w700.
- Radii: form controls + subscribe input/button **0**; tab links **4px**;
  CTA span `rounded` (0.25rem); dots 50%; images no radius (hard shadows).
- Spacing: `.site-section` 5em 0 (4em ≤991px); footer 7em 0; counter
  strong mb 1rem; section-title mb 1.8rem; table td py 20px; service
  padding 4rem (2rem ≤991px); nav links padding 5px 20px; hero min-height
  900px.

## Implementation tasks

- [ ] Spec-first: `openspec/specs/template-rep/spec.md` already on main
      (prep). Open a `feat/template-rep` branch.
- [ ] Copy the simplest existing landing app, rename package to
      `@free-react-templates/rep`, run `npm install` at root so
      `package-lock.json` registers the workspace (grep
      `free-react-templates/rep`).
- [ ] Ensure `vite.config.ts` registers `injectUiSource()` (see
      docs/conventions.md) and app imports Button/ButtonLink/cn from
      `packages/ui` (knip trap — see repo memory notes).
- [ ] TDD: tests first per spec requirement, then implement:

1. `Navbar` — absolute over hero, logo "Rep" left, white nav links (Home /
   Classes / Schedule / Trainer / Services) with green active + green
   outlined Contact pill right; sticky white header on scroll
   (IntersectionObserver or scroll listener, cleaned up) with black links
   - green hover/underline; mobile hamburger toggling an offcanvas menu
     (desktop + mobile variants render duplicate links — use
     `getAllByRole`).
2. `Hero` — 100vh (min 900px) gym bg photo + dark `#222` overlay, centered
   white 7rem w900 "Welcome To Rep".
3. `Stats` — 4 counters (green lucide icon + 2.5rem white w700 number +
   1rem label): 2,260 Members / 210 Daily Visitors / 887 Health Program /
   1,920 Heart Beat.
4. `About` — split: left green 3rem "Step Up Your Fitness" heading +
   paragraph + green "Get In Touch" button (uppercase 12px w900 2px
   border; hover transparent + white border), right photo with `10px 10px
0 0` green hard shadow.
5. `Classes` — carousel of 5 photo cards: hover green tint overlay
   rgba(72,212,148,0.8) + scale 1.07 + title ("Classes fitness name
   here")/category text; categories Fitness / Cardio Vascular / Lose
   Weight / Cardio Vascular / Fitness; green active dots + accessible
   controls.
6. `Schedule` — 6 day tabs (Monday–Friday + Sunday; active = green bg,
   bottom border green) + per-day bordered table: 5 rows (Gym / Meditation
   / Weight Lifting / Crossfit / Aerobics with times + trainers) + "Join
   Now" links scrolling to contact.
7. `Trainers` — 3 cards (James Holmes / Kelly Green / Ben Smith): photo
   with green hard shadow, name, dimmed role "Aerobatics Trainer", bio.
8. `Services` — carousel of 6 green `#48d494` cards (white lucide icon +
   white 1.5rem title + light text): Weight Lifting, Meditation, Crossfit,
   Aerobics, Gym, Circling; green active dots.
9. `Contact` — `#121212` bg: heading + intro + form (First name / Last
   name / Subject / Email / textarea, radius-0 2px-border white inputs,
   full-width green "Send Message" button); zod validation + confirmation
   on valid submit.
10. `Footer` — black: About Rep blurb · Links (Home / Meditation / Gym /
    Aerobatics) · Subscribe (email input + green Subscribe button, confirm
    on submit) · copyright bar with author credit.

- [ ] Theme tokens in `@theme`: `--color-brand: #48d494`, black `#000`,
      dark `#121212`, white `#fff`, dot gray `#e6e6e6`.
- [ ] Muli (300/400/700/900) Google Fonts `<link>`s in index.html.
- [ ] Placeholders: `picsum.photos/seed/rep-<n>/<w>/<h>`; lucide-react
      icons (dumbbell, bicycle, leaf, heart for stats; heart/scale/weight
      etc. for services; menu, x for mobile toggle).
- [ ] No hero video (YouTube embed) — gym photo + `#222` overlay instead.
- [ ] Paraphrase demo copy: fitness-themed about text, class categories,
      trainer bios, service blurbs, footer blurb; keep the schedule table
      structure and footer columns.
- [ ] Verify: `scripts/verify-app.sh rep` (typecheck + lint + 100%
      coverage + build). Then push branch, open PR, squash-merge
      immediately (`gh pr merge --squash --delete-branch`).
- [ ] After merge: mark TEMPLATES.md Gymer lines 407, 1853 and 2325
      `[~]`→`[x]` with Surge URL
      `https://free-react-templates-rep.surge.sh` + homepage, run `npm run
    readme:status`.

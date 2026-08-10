# Summit (ColorLib Confer) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-summit` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Confer" — free Bootstrap 5 conference/event
  template with a dark navy + pink→indigo gradient aesthetic (source:
  https://colorlib.com/wp/template/confer/). Listed in TEMPLATES.md under
  Bootstrap (line 363; slug repeats at lines 947 and 1669 — one recreation
  covers all three dup rows).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/confer/`
  (HTTP 200, ~75KB HTML; title "Confer - Conference Event HTML Template").
  DOM + `style.css` (~273KB, Bootstrap 5 base + custom theme) extracted and
  analyzed. Screenshot `confer-free-template-1.jpg` viewed in browser:
  dark photo hero (speaker at podium) under blue/purple overlay, white
  uppercase headline right-aligned with a blue accent bar, pill "MORE
  INFORMATION" button; page alternates solid dark navy blocks and
  pink→blue gradient sections; pill magenta buttons; modern sans look.
- **Structure (1:1, section order from the DOM):**
  1. Header (`header.header-area`, fixed, `rgba(0,0,0,0.8)` → `#000`
     sticky + shadow): logo "Confer" (image in source → wordmark) + nav
     HOME (active) / PAGES (dropdown: Home, About Us, Speakers, Schedule,
     Tickets, Blog, Single Blog, Contact) / SPEAKERS / BLOG / CONTACT +
     right "GET TICKETS" outline pill (pink border/text). Mobile:
     white-bar hamburger.
  2. Hero (`section.welcome-area` > `div.welcome-slides` swiper, 2
     slides, full-viewport cover photo + dark overlay): slide 1 — giant
     white uppercase h2 "SCIENCE CONFERENCE" + h6 venue "SHANGRI-LA HOTEL,
     BANGKOK, BANGKOK, THAILAND" + "MORE INFORMATION" pill; slide 2 —
     small label "THE EVENT CONSISTENTLY" + h2 "OSHA COMPLIANCE" + meta
     row (calendar icon + "January 14, 2032", user icon + "Laura Green")
     - "VIEW MORE" and "GET TICKETS" pills. Circular prev/next arrows
       (46×46, `2px solid #9293bc`) + pagination dots + mouse scroll
       indicator (26×39, white border, animated dot, bottom 40px center).
  3. About + countdown (`section.about-us-countdown-area`, bg `#151853`):
     left — pink uppercase subtitle "ABOUT CONFERENCE" (`border-bottom:
2px solid #4b4d7b`), 40px white uppercase "WELCOME TO THE PROJECT
     MANAGEMENT", white paragraph, "INTERESTED" pill; right — "CONFERENCE
     DATE" + "COUNT EVERY SECOND UNTIL THE EVENT" + countdown: 5 boxes
     (62px/600 numbers, `2px solid rgba(255,255,255,0.15)`, labels
     Months/Days/Hours/Minutes/Seconds in `#5d5e8d` 18px).
  4. Speakers (`section.our-speaker-area`, photo bg + gradient overlay
     `linear-gradient(120deg, #df42b1 0%, #505add 100%)` opacity 0.9):
     "OUR SPEAKINGS" (white) + "WHO'S SPEAKING" (38px white); 6 cards
     (radius 10px): photo, name 20px white + role pink bottom-left
     overlay, 4 social icons top-right; "VIEW ALL SPEAKER" pill below.
  5. Schedule (`section.our-schedule-area`, bg `#151853`): "OUR
     TIMETABLE" + "SCHEDULE PLAN"; 3 tabs (MONDAY/TUESDAY/WEDNESDAY +
     date; inactive `#1f2371`/`#9293bc`, active `#5d5e8d`/white, `1px
solid #4c4f8d` separators, 18px 600 uppercase); per day 4 cards
     (`1px solid #444675`, radius 10px, padding 25px, hover pink border):
     90×90 thumb + white 20px title + "by Gary Armstrong / Ceo of Confer"
     - time/place row (pink icons) + "VIEW MORE" pink link; "DOWNLOAD
       SCHEDULE (PDF)" pill below (source typo "DOWLOAD" — fix).
  6. Tickets (`section.our-ticket-pricing-table-area`, photo bg + gradient
     overlay + jarallax): "CHOOSE A TICKET" + "TICKET PRICING"; 3 white
     cards (radius 10px, `padding: 0 40px 40px`, shadow `0 10px 30px
rgba(0,0,0,0.1)`, hover lift `translateY(-10px)` + stronger shadow):
     gradient `.ticket-plan` label (uppercase 13px, `border-radius: 0 0 8px
8px`) — 1 DAY PASS $59 / FULL PASS $99 (ACTIVE: bigger shadow +
     gradient label) / GROUP PASS $199; price 60px 700 `#111343` + "$" span
     24px `#5d5e8d` + "per person"/"for 3 people"; GET TICKETS pill; check
     feature lists (see spec for exact per-plan lists).
  7. Sponsors + testimonials (`section.our-sponsor-client-area`, bg
     `#151853`): "PARTNERS & SPONSORS" + "OFFICIAL SPONSOR"; 8 tiles
     (`1px solid #444675`, 25% width, 240→200px, centered logo
     placeholder); testimonial swiper (mt-100) — 3 slides, translucent
     cards `rgba(255,255,255,0.1)` radius 10px padding 40px 50px: quote +
     avatar + name/role + 80px gradient quote icon; prev/next + dots.
     WRITE 3 DISTINCT names (source repeats "Maria Hernandez" on slides 1
     and 3).
  8. Blog (`section.our-blog-area`, photo bg + gradient overlay): "OUR
     BLOG" + "LATEST NEWS"; 3 white cards: rounded thumb (hover zoom) +
     white body `padding: 30px 30px 50px` — title 20px 600 `#111343`
     (hover pink), post-meta (`#9293bc` 14px, hover pink; calendar +
     date, user + author), excerpt. WRITE 3 DISTINCT titles/excerpts/
     dates (source repeats lorem + "January 14, 2032" + "Laura Green").
  9. Contact (`section.contact-our-area`, bg `#151853`): "HAVE
     QUESTION?" + "CONTACT US" + 4 info rows (Address: 184 Main Collins
     Street / Phone: (226) 446 9371 / Email: confer@gmail.com / Website:
     www.confer.com); right form (`contact_input_area`): 2×2 inputs +
     textarea "Your Message *" — transparent bg, only `border-bottom: 1px
solid #dbdcf1`, focus `#111343`; "SEND MESSAGE" pill.
  10. Footer (`footer.footer-area`, bg `#111343`): 4 columns — About
      (logo + lorem + socials, hover `#5d5e8d`), Contact (4 lines),
      Workshops (OSHA Compliance, Microsoft Excel Basics, Forum Speaker
      Series, Tedx Moscow Conference), Gallery (6 thumbs); copyright bar
      `#9293bc` (paraphrase — no ColorLib) + Terms/Privacy links.
- **Design tokens (from `style.css`):**
  - Font: **Poppins** (400/500/600/700) for everything — uppercase
    headings letter-spaced 1px, nav, buttons, countdown, body.
  - Colors: pink `#df42b1` (+ dark `#c63fa4`), indigo `#505add`, gradient
    `linear-gradient(120deg, #505add 0%, #df42b1 100%)`; navies
    `#151853` / `#111343` / `#1f2371` / `#5d5e8d`; muted `#9293bc`,
    `#dbdcf1`; borders `#444675` / `#4c4f8d` / `#4b4d7b` /
    `rgba(255,255,255,0.15)`.
  - Shapes: `.confer-btn` pill 46px tall, 14px 500 uppercase,
    letter-spacing 0.5px, radius 23px, white on gradient; hover → white
    bg, `#111343` text, shadow `0 2px 40px 8px rgba(15,15,15,0.15)`.
    Cards radius 10px; ticket-plan `0 0 8px 8px`; hero arrows 46×46
    circles; countdown boxes width 20% `margin: 0 15px`.
  - Layout: sections `section-padding-100` (100px vertical; `-60`/`-0`
    variants); header fixed; hero full-viewport; sponsor tile 240px →
    200px; testimonial `padding: 40px 50px`; blog body `30px 30px 50px`.
- **Recreation decisions:** name **Summit** ("a conference of leaders" —
  fits a conference brand; single word, no collision with `apps/`,
  `openspec/specs/`, or `docs/templates/`). Wordmark "Summit" in Poppins
  700 uppercase. All images → `https://picsum.photos/seed/summit-<n>/<w>/<h>`
  (hero 1920×1080, speakers 400×400, schedule thumb 90×90, sponsor
  200×120, testimonial avatar 80×80, blog 600×400, gallery 100×100).
  Icons from `lucide-react` (calendar, user, check, quote, menu,
  chevron-left/right, map-pin, phone, mail, globe, arrow-right, socials).
  Countdown ticks toward a fixed future date; contact form validates
  (zod) with success state; testimonial + hero sliders cycle with
  prev/next + dots. Dark mode via `.dark` class (`dark:` variants) per
  repo conventions.

## Implementation task outline (for the implementer stream)

1. `apps/summit` scaffold: copy the simplest existing app (e.g.
   `apps/postie` or `apps/slice`), rename package to
   `@free-react-templates/summit`; `bun install` at root so
   `package-lock.json` registers the workspace (verify with
   `grep -c "free-react-templates/summit" package-lock.json`); vite.config.ts
   MUST keep `injectUiSource()`.
2. `index.html`: Google Fonts `<link>` for Poppins (400,500,600,700);
   title "Summit — Conference & Event".
3. `src/index.css`: `@theme` tokens — `--color-brand: #df42b1`,
   `--color-brand-deep: #c63fa4`, `--color-indigo: #505add`,
   `--color-navy: #151853`, `--color-navy-deep: #111343`,
   `--color-tab: #1f2371`, `--color-tab-active: #5d5e8d`,
   `--color-muted: #9293bc`, `--color-line: #444675`,
   `--color-form-line: #dbdcf1`; `--font-sans: Poppins`; `bg-brand-gradient`
   utility (120deg #505add → #df42b1) + `.bg-gradient-overlay` pattern
   (pseudo-element, opacity 0.9).
4. Components (one per section, colocated tests, 100% coverage):
   - `Header.tsx` — fixed transparent→solid dark on scroll, wordmark, nav
     with active state, Pages dropdown, GET TICKETS outline pill, mobile
     hamburger (aria-expanded).
   - `HeroSlider.tsx` — 2 slides (cover bg + overlay, headline, venue,
     pills, meta row), circular prev/next + dots, autoplay optional,
     mouse scroll indicator (CSS animated dot) linking to #about.
   - `AboutCountdown.tsx` — subtitle + heading + paragraph + INTERESTED
     pill; 5-box countdown ticking to a fixed target date (labels
     Months/Days/Hours/Minutes/Seconds).
   - `Speakers.tsx` — 6 photo cards (name/role overlay bottom-left, 4
     social icons top-right) + VIEW ALL SPEAKER pill.
   - `Schedule.tsx` — 3 day tabs (state switch) × 4 bordered cards
     (thumb 90×90, title, author, time/place, VIEW MORE) + DOWNLOAD
     SCHEDULE (PDF) pill.
   - `TicketPricing.tsx` — 3 white cards; FULL PASS active (gradient plan
     label + stronger shadow); check feature lists.
   - `Sponsors.tsx` — 8 bordered logo tiles + `Testimonials` carousel (3
     distinct slides, translucent cards, gradient quote icon, prev/next +
     dots).
   - `LatestNews.tsx` — 3 white cards (rounded thumb hover zoom, title,
     post-meta, excerpt).
   - `Contact.tsx` — 4 info rows + 2×2 form + textarea (underline style,
     focus dark) + SEND MESSAGE pill; zod validation + success state.
   - `Footer.tsx` — 4 columns (About / Contact / Workshops / Gallery) +
     copyright bar + Terms/Privacy links.
5. `App.tsx` composes in DOM order: Header → HeroSlider → AboutCountdown →
   Speakers → Schedule → TicketPricing → Sponsors+Testimonials →
   LatestNews → Contact → Footer.
6. Verify: `npm run verify:app summit` (typecheck + lint + vitest 100% +
   build). Full gate runs in CI on merge.
7. PR: `feat: Summit — conference & event template (ColorLib Confer)`; description
   must include source URL, preview URL, tokens used, renames, placeholder
   images. Merge immediately with `gh pr merge --squash --delete-branch`.
8. After merge: mark TEMPLATES.md lines 363, 947, 1669 `[~]`→`[x]` with
   surge URL (https://free-react-templates-summit.surge.sh) + homepage,
   run `npm run readme:status`, commit `chore: mark Summit (Confer) as
deployed with live Surge URL`.

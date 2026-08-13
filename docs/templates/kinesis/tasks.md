# Kinesis (ColorLib Dazko) — Tasks & Design Notes

> Prep artifacts prepared on `main`; implementation ships on
> `feat/template-kinesis`. Source: ColorLib "Dazko" — crossfit workout
> training center template (https://colorlib.com/wp/template/dazko/).
> Preview: https://preview.colorlib.com/theme/dazko/ (HTTP 200; ~97 KB
> HTML, `css/style.css` ~88 KB parsed).

## Design notes (replication findings)

- **Original:** ColorLib "Dazko" — crossfit gym website (Bootstrap 5 +
  tiny-slider + glightbox + AOS). Screenshot `dazko-free-template.jpg`
  (1200×946, AVIF) viewed in browser: dark full-viewport hero (woman
  lifting a barbell under dark overlay), left-aligned white italic
  uppercase headline, red "BOOK A TOUR NOW" button; below, white
  two-column about section (image left, text right) with red eyebrow.
- **Visual design:** high-contrast energetic crossfit brand — red
  `#e1193e` primary, dark `#030513`, white, with blue `#1425af`/`#1d2cb5`
  as a supporting accent (hover states, diagonal stripe bands, table
  header, trainer name plates). Body Open Sans 16px/1.8 gray; headings
  Roboto Condensed (hero h2 60px 700 italic uppercase; section h2 34px
  800 uppercase Open Sans; eyebrow `.subheading` 13px 700 uppercase red).
- **Signature motifs to preserve:**
  - SKEWED TABS everywhere: nav CTA (skew -25deg red tab), top-strip
    socials (24px red tiles, hover blue), class price badge (red + blue
    skew -20deg tab, hidden → slides in on hover), class title band
    (red text on `#030513` band with +20deg right tab, hover inverts),
    counter band red tab (skew -15deg), trainer name plate (blue, skew
    -15deg tab + dashed white inner border, hover reveal).
  - Diagonal blue stripe gradients: counter band (105deg, 41.41px
    154.55px) and video band overlay (123deg, 357.71px 550.82px).
  - Square buttons: `.btn` border-radius 0, 12px 600 uppercase
    letter-spacing 1px, shadow `0 24px 36px -11px rgba(0,0,0,.09)`;
    red bg → blue hover.
  - Hero slider nav = VERTICAL 20×2px bars on the right edge (active =
    red, 30px wide).
  - 60px circular video play button with red pulse-ring animation.
  - BMI section: pill tabs (red active / blue active) + dark navy panel
    `#0a113f`.
  - Schedule table: blue `#1425af` thead, red time column, zebra odd
    columns `#f4f6fc`.
- **Structure (1:1, section order, home page):**
  1. Top strip (`div.top-wrap`, absolute over hero): "Free Call" (red
     label) + phone "+1 234 456 78910" + 3 skewed social tiles
     (Twitter/Facebook/Instagram).
  2. Navbar (transparent absolute top 40px; `#030513` on mobile): brand
     "Kinesis Crossfit & Fitness", links Home/About/Trainers/Classes/
     Schedules/News/Contact (12px 700 uppercase ls 2px, active red with
     scaleX underline), red "Become A Member" CTA with skewed tab.
  3. Hero slider (100vh, 3 slides, `#030513` overlay .7): span
     "Crossfit" eyebrow + italic uppercase h2 60px + p + "Take A Tour
     Now" button; vertical bar nav right edge.
  4. About: eyebrow "Information About Us" + h2 "Kinesis A Crossfit
     Workout Training Center" + paragraph + image + 3 icon items (Men
     Fitness and Workout / Women Fitness and Workout / Personal
     Trainings).
  5. Counter band (blue stripes + red tab): 4 counters (Years of
     experienced / Fitness Trainers / Best Equipments / Satisfied
     Clients), 50px white numbers.
  6. CTA band: "Join Us Now" + "Join Us Our Free Workout Training With
     Kinesis" + button.
  7. Free fitness: 3 cards with SVG icons — Free Fitness Training / Tons
     of Cardio & Strength / No Commitment Memberships (fix source typo
     "No Commentment Memberships").
  8. Classes: eyebrow "Our Classes" + h2 + 6 cards ($100 price badge on
     hover; title band red-on-dark) + "View All Classes" link. Classes:
     Body Building, Weight Lifting, Cardio, Martial Arts, Yoga, Cycling.
  9. Pricing: 3 plans (Basic $49 / Beginner $79 / Premium $109) with 5
     check-list features + "Get Started" buttons. Fix typos
     (Convienient→Convenient, Traning→Training).
  10. Video band (blue stripes): 60px play circle w/ pulse + "Watch Our
      Stories" + "Members Success Stories" + video thumb + 2 success
      quotes (264→154 lbs; Sheryl Johnson).
  11. Schedules: table thead blue, red time column, 5 rows (8am-9am,
      10am-11am, 1pm-2pm [fix "1pm-2am"], 3pm-5pm, 7pm-9pm), zebra odd
      columns.
  12. Trainers: 4 cards with blue name plates (hover reveal): Aron
      Mighty, Alicia Brown, Anne Henderson, Bruce Grapler.
  13. Testimonials (`#f0f4f7` bg): "Happy People" carousel — quote +
      name + "Marketing Manager" position (source repeats one person;
      use 2-3 distinct).
  14. Blog: "Recent Blog" — cards with "Dec. 20, 2020 3 Comments" meta +
      title + excerpt + read-more (source repeats same title; vary).
  15. BMI: "Get Your Body Max Index" / "What is Your BMI", Standard /
      Metric pill tabs, panel `#0a113f`, Height + Weight inputs, submit.
  16. Footer (`#030513`): brand + blurb + red 40px social circles;
      Explore column (About Us / Trainers Team / Awesome Classes /
      Pricing Packages / Latest News); Our Contacts (address / phone /
      email with red icons); black bottom bar with Component Dock
      credit.

## Implementation tasks

- [ ] Scaffold `apps/kinesis` (copy simplest existing app, rename package
      to `@free-react-templates/kinesis`, `public/CNAME` =
      `kinesis.free.componentdock.com`, homepage
      `https://kinesis.free.componentdock.com`); `npm install` at root
      to register the workspace in package-lock.json.
- [ ] `index.html`: title "Kinesis — Dazko Template", Google Fonts
      Roboto Condensed (400/700) + Open Sans (400/600/700/800) link.
- [ ] `src/index.css`: `@theme` tokens — `--color-primary: #e1193e`
      (brand red), `--color-primary-hover: #1425af` (blue), `--color-
    stripe: #1d2cb5`, `--color-ink: #030513` (dark), `--color-heading:
    #011f39`, `--color-section: #f0f4f7`, fonts Roboto Condensed /
      Open Sans.
- [ ] `src/components/TopStrip.tsx`: absolute strip over hero — "Free
      Call" label (red) + phone + 3 skewed social tiles (inline SVG
      brand icons; lucide-react has NO brand icons).
- [ ] `src/components/Navbar.tsx`: transparent-over-hero navbar, brand
      "Kinesis Crossfit & Fitness", 7 links (uppercase 12px, active red
      underline), red "Become A Member" skewed-tab CTA, mobile collapse
      (dark `#030513`).
- [ ] `src/components/Hero.tsx`: 3-slide carousel (auto-advance +
      controls), per-slide eyebrow "Crossfit" + italic uppercase h2 +
      subtext + "Take A Tour Now" button; vertical bar nav on right
      edge; dark overlay over bg image (picsum seed — screen gym
      candidates per seed-screening method).
- [ ] `src/components/About.tsx`: eyebrow + heading + paragraph + image
      (picsum) + 3 icon list items.
- [ ] `src/components/CounterBand.tsx`: blue diagonal stripe bg +
      red skewed tab + 4 animated count-up counters.
- [ ] `src/components/CtaBand.tsx`: "Join Us Now" eyebrow + heading +
      red button.
- [ ] `src/components/Features.tsx`: 3 cards (icon + title + blurb).
- [ ] `src/components/Classes.tsx`: 6 image cards — hover-reveal $100
      price badge (red + blue tab), red-on-dark title band with skewed
      right tab, hover inversion; "View All Classes" link.
- [ ] `src/components/Pricing.tsx`: 3 plan cards (name, red 50px price,
      check-list, "Get Started" button).
- [ ] `src/components/VideoBand.tsx`: stripe overlay, pulsing play
      circle, heading, video thumb, 2 success quotes.
- [ ] `src/components/Schedules.tsx`: 8-col weekly table (blue thead,
      red time col, zebra).
- [ ] `src/components/Trainers.tsx`: 4 photo cards with blue name plates
      (desktop hover reveal, mobile always visible).
- [ ] `src/components/Testimonials.tsx`: `#f0f4f7` bg carousel (quote,
      name, position).
- [ ] `src/components/Blog.tsx`: 3-4 cards (meta, title, excerpt,
      read-more).
- [ ] `src/components/Bmi.tsx`: Standard/Metric pill tabs + dark navy
      panel with Height/Weight inputs + submit (client-side BMI compute
      optional; form must match layout).
- [ ] `src/components/Footer.tsx`: dark bg, brand + blurb + red social
      circles, Explore links, contacts (address/phone/email — build
      `tel:` href at runtime from a spaced display string, never a
      literal), black bottom bar with Component Dock link
      (https://www.componentdock.com/).
- [ ] `src/App.tsx` composition + `src/main.tsx` entry; MemoryStorage
      polyfill in `src/test/setup.ts` (copy from apps/cura — jsdom 30
      has no localStorage).
- [ ] Tests first (TDD) mirroring spec scenarios; 100% coverage; run
      `bash scripts/verify-app.sh kinesis`.
- [ ] PR description: source (ColorLib Dazko), preview URL, tokens
      (red `#e1193e`, blue `#1425af`/`#1d2cb5`, dark `#030513`, Roboto
      Condensed + Open Sans, square buttons, skewed tabs, stripes),
      what differs (wordmark, picsum placeholders, Component Dock
      credit, paraphrase, typo fixes, no asset copying).
- [ ] Post-merge bookkeeping: mark BOTH TEMPLATES.md Dazko rows (line
      570 and the dup row ~1834) `[x]` with the live URL,
      `npm run readme:status`.

## Pitfalls / notes

- The navbar and top strip are ABSOLUTE over the hero (nav top 40px,
  strip top 10px) — keep them out of normal flow so the hero starts at
  the very top of the page; on mobile the navbar becomes solid
  `#030513` and the strip hides.
- Slider nav is a vertical stack of thin bars on the right edge (not
  round dots) — active bar red and wider (30px vs 20px).
- Skewed tabs: Tailwind v4 compiles translate/rotate separately —
  reproduce skews with arbitrary properties, e.g.
  `[transform:skew(-25deg)]` on the tab element, and verify visually
  (transform-order trap, see skill).
- lucide-react has no brand icons — Twitter/Facebook/Instagram must be
  inline SVGs; probe every lucide export with the typeof check before
  importing.
- No `[~]`/`[x]` markers were set by the prep stream — implementer
  claims via the usual `[~]` push on `feat/template-kinesis`.
- No `colorlib` string anywhere in `apps/kinesis/*` — provenance lives
  only here, TEMPLATES.md, and the PR.
- Never write a literal `tel:+<digits>` URI in source (secret-scan
  masker rewrites it); compute from a spaced display string at runtime
  or render as plain text.
- Picsum seeds for gym/people photos need subject screening (see skill:
  verified people IDs 1027/64/823/996, concert 453) — pick a seed that
  provably renders a gym/fitness-appropriate scene and pin it in spec +
  tests + docs together.

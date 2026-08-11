# Zendo (ColorLib Meditative) — Tasks & Design Notes

> Recreation of ColorLib "Meditative"
> (https://colorlib.com/wp/template/meditative/, Bootstrap category) under
> the NEW name **Zendo** (a Zen meditation hall; single lowercase word, no
> collision with `apps/`, `openspec/specs/` or `docs/templates/` — verified
> 2026-08-11), per the monorepo naming mandate (never reuse the ColorLib
> source name).

## Design notes (replication findings)

- **Original:** ColorLib "Meditative" — free yoga / meditation studio
  website template, Bootstrap 4 based (Bootstrap category). The recreation
  brands itself **Zendo**. TEMPLATES.md lines 450, 1095 and 1866
  (3 duplicate `- [ ]` rows across category sections — prep stream leaves
  all alone; implementer must update ALL THREE at ship time).
- **Live preview DOM analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/meditative/` (HTTP 200, ~72.6 KB
  HTML + `css/style.css` ~77.8 KB — reachable, NO fallback needed). The
  TEMPLATES.md screenshot (`meditative-free-template.jpg`, 1200×946, viewed
  in browser) confirms the hero + class strip 1:1; lower sections verified
  from the live DOM + CSS.
- **Multi-page source:** index/about/trainer/classes/schedule/blog/contact
  are separate pages. Recreation = single-page index (nav links → `#`
  anchors), consistent with the monorepo pattern.
- **Visual design (screenshot + live render):** serene, mindful, spa-like.
  Full-width bright yoga-pose photo hero under a white overlay with
  centered elegant serif headline; soft salmon/dusty-pink accent on CTA,
  slider dots, schedule header; 4 circular class thumbnails; dark photo
  stats band; LIGHT footer. EB Garamond serif + Open Sans sans.
- **KEY DIFFERENCES vs other wellness/health preps — do NOT copy:** Medico,
  Clinica, Curale (medical), Prana/Mudra/Sattva/Shanti/Serenity
  (wellness-adjacent) are different designs. Zendo is the **yoga-studio
  variant**: pink `#ffb5b5` accent, EB Garamond + Open Sans, full-height
  hero slider with white-overlay photos, circular class thumbnails,
  pink-header schedule table, icon-split "Experience of Yoga", dark photo
  stats band, light footer.
- **Design tokens (from `css/style.css`, verified 2026-08-11):**
  - **Accent pink `#ffb5b5`** — `.btn.btn-primary` bg/border (white text;
    hover → transparent bg + pink text), `.bg-primary` override (schedule
    thead), nav active/hover, `navbar-brand span`, slider H1 + dots,
    link hover color.
  - **Dark ink `#2c396b`** (heading accents, testimony position) · body
    `#212529` · muted `#6c757d`.
  - Section bgs: white · `#f8f9fa` (bg-light: class types, recent posts) ·
    stats band photo + dark overlay · footer white + `rgba(0,0,0,0.05)`
    top border.
  - Fonts: **'EB Garamond', serif** (brand, headings, slider H1, class
    titles, testimony quotes) + **'Open Sans', sans-serif** (body,
    300/400/600/700). Source uses cf-fonts @font-face; recreation uses
    Google Fonts `<link>`.
  - Buttons: `.btn.btn-primary` solid pink radius ~4px padding px-4 py-3;
    `.btn.btn-white` white bg/black text/white border, hover border pink
    (hero "View our works").
  - Layout: **container max-width 1240px** (theme override), section
    padding 7em 0, hero full-height (`js-fullheight`), circles everywhere
    (class thumbs, schedule thumbs, avatars, service icons).
- **Recreation decisions:** Tailwind grid replaces Bootstrap-4 (no
  Bootstrap dep). owl-carousel hero (2 slides) + testimonials (5) →
  lightweight React carousels with pink dots / arrows (tests must be
  deterministic — no timer-driven assertions without fake timers +
  `act()`). Counter count-up via IntersectionObserver + rAF on scroll into
  view. Footer "Have a Questions?" message input is a form: validate +
  success message (documented addition — original is static). Icons from
  lucide-react (meditation → `Flower2`/`Sparkles`, ✕ → `X`, quote → `Quote`,
  chat → `MessageCircle`; brand socials as lucide `Facebook`/`Instagram`/
  `Twitter`). Placeholder images via
  `picsum.photos/seed/zendo-<n>/<w>/<h>` (2 hero, 4 class types, 1
  services, 6 classes, 7 schedule thumbs, 5 avatars, 3 blog, 8 gallery,
  1 counter bg). Fonts EB Garamond 400/500/600/700 + Open Sans
  300/400/600/700 via Google Fonts. Brand "Meditative" → "Zendo"
  everywhere; title "Zendo — Yoga & Meditation Studio Template".

## Task list (implementation order)

1. [ ] Scaffold app: copy the simplest existing app (e.g. `apps/guestly`),
       rename package to `@free-react-templates/zendo`, add workspace
       entry (root `npm install` so `package-lock.json` registers it).
2. [ ] `index.html`: title "Zendo — Yoga & Meditation Studio Template",
       Google Fonts `<link>`s for EB Garamond 400/500/600/700 + Open Sans
       300/400/600/700.
3. [ ] `src/index.css`: `@theme` tokens — accent pink `#ffb5b5`, dark ink
       `#2c396b`, `#f8f9fa` section bg, body `#212529`/muted `#6c757d`,
       EB Garamond + Open Sans font families.
4. [ ] `src/App.tsx`: compose sections in order — Navbar → Hero → ClassTypes
       → Experience → Classes → Timetable → Testimonials → Stats → Posts →
       Gallery → Footer.
5. [ ] `src/components/Navbar.tsx`: serif brand + uppercase dot-separated
       link row (Home About Trainer Classes Schedule Blog Contact),
       transparent over hero → white + shadow when scrolled, active pink;
       hamburger + slide-in panel <992px.
6. [ ] `src/components/Hero.tsx`: full-height slider, 2 slides (cover
       photos + white overlay), serif H1 + sans H3 + "View our works"
       outline button, pink dots, one slide visible at a time.
7. [ ] `src/components/ClassTypes.tsx`: `#f8f9fa` bg, 4 circular-image cards
       (Power Yoga / Community Class / Foundation Yoga / Prenatal Yoga) +
       "Learn more" links.
8. [ ] `src/components/Experience.tsx`: centered H2 "Experience of Yoga",
       8 icon items split 4+4 around a center image (left text-right /
       right text-left), each icon + H3 + paragraph.
9. [ ] `src/components/Classes.tsx`: centered H2 "Our Classes", 6 cards
       (Private & Group Lessons, Yoga for Pregnant, Yoga for Beginners,
       Yoga Barre, Yoga Core, Yoga Restore): image + centered H3 + date
       line ("Sept. 30, 2019 - 01:00pm - 03:00pm").
10. [ ] `src/components/Timetable.tsx`: centered H2 "Class Time Table",
        7-col bordered table, pink header (Mon–Sun), ✕ empty cells, class
        cells (round thumbnail + "Yoga training" + "7 am-6 am"), month nav
        row (‹ September … November ›); horizontal scroll on mobile.
11. [ ] `src/components/Testimonials.tsx`: H3 "Testimony" + H2 "Successful
        Stories", carousel of 5 quotes (Gabby Smith, Floyd Weather, James
        Dee, Lance Roger, Kenny Bufer — position "Customer"), quote icon,
        round avatars, arrows/dots.
12. [ ] `src/components/Stats.tsx`: cover photo + dark overlay, 4 count-up
        stats (2560 Happy Customers / 60 Yoga Classes / 50 Years of
        Experience / 100 Yoga Conducted), IntersectionObserver trigger.
13. [ ] `src/components/Posts.tsx`: `#f8f9fa` bg, centered H2 "Recent
        Posts", 3 cards (image, meta July. 14, 2019 · Admin · 3 Comments,
        H3 title, excerpt, "Read more").
14. [ ] `src/components/Gallery.tsx`: centered H2 "See the latest photos",
        8 tiles, hover overlay + Instagram icon.
15. [ ] `src/components/Footer.tsx`: light footer (white + top border),
        brand + blurb + social icons, Popular Links, Quick Links, "Have a
        Questions?" (address/phone/email + message input + white "send
        message" button with validation + success state), copyright bar
        "© <year> … made with ♥ by Zendo".
16. [ ] Mobile: hamburger nav <992px, grids stack (2-col tablet / 1-col
        phone), timetable scrolls horizontally.
17. [ ] Tests: colocated `*.test.tsx` per component, scenario-style `it`
        blocks mirroring the spec Gherkin (carousel/next-prev via
        user-event; count-up asserts final values; decorative imgs have no
        `img` role — use `querySelectorAll('img')`; duplicate nav links —
        use `getAllByRole` and index).
18. [ ] Gate: `scripts/verify-app.sh zendo` (typecheck + lint + vitest
        100% coverage + build); `npm run spec:validate` for
        `template-zendo`.
19. [ ] Ship: mark `[~]`→`[x]` in TEMPLATES.md (lines 450, 1095, 1866) +
        surge URL + `npm run readme:status`; PR description with source
        template, preview URL, tokens, differences (single-page index,
        sliders→React carousels, count-up, form validation addition,
        placeholder images).

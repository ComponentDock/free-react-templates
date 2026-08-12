# Thrust (ColorLib "Startup") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-thrust` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "StartUp" — free startup / digital-agency website
  template (source: https://colorlib.com/wp/template/startup-2/). Listed in
  TEMPLATES.md under **Bootstrap (216)** (line 503; duplicate rows at lines
  2089 and 2861 — same template, one app only).
- **Preview REACHABLE (HTTP 200):** `https://preview.colorlib.com/theme/startup-2/`
  returns HTTP 404, but the no-hyphen slug works:
  `https://preview.colorlib.com/theme/startup2/`. DOM fetched
  (`/tmp/startup2.html`, 32,498 bytes) + stylesheet `css/style.css`
  (`/tmp/startup2.css`, 144,147 bytes) + TEMPLATES.md screenshot
  (`startup2-free-template.jpg`, 1200×946, viewed in browser) + live preview
  browsed section by section (hero, services, about, portfolio, how-we-work,
  testimonial, footer). Screenshot cross-checks the DOM: dark workspace-photo
  hero, rocket-logo wordmark, "Say Hello" CTA, 78px white headline, violet
  pill "Visit Our Works", white services block with purple-outline icon
  cards.
- **Structure (top → bottom, single page):**
  1. Header — absolute over hero, transparent; logo (white wordmark "Thrust"
     - rocket glyph, source: img/logo.png) left; nav right: home, services,
       Portfolio, pages (dropdown: Portfolio details, about, elements), blog
       (dropdown: blog, single-blog), Contact — white 16px Muli 600 capitalize;
       "Say Hello" link far right (16px 600 white, 3px `#615CFD` underline via
       `::before`). Sticky on scroll: `.sticky` → fixed, bg `#1F1F1F`, shadow
       `0 3px 16px rgba(0,0,0,.1)`, slide-down transition. Mobile: slicknav
       hamburger → full-width dark panel. Simplify: one-level nav (Home,
       Services, Portfolio, Pages, Blog, Contact) without dropdowns, note in
       PR.
  2. Hero (`slider_area`) — single 900px-tall slide (500px mobile), cover
     bg image (img/banner/banner.png — dark workspace photo) + `.overlay`
     `#1F1F1F` opacity .8; content col-lg-10 left-aligned: h3 headline 78px
     white Roboto 400 lh 84px (50px/62px at 992px, 30px/35px at 767px),
     margin-bottom 54px; "Visit Our Works" `.boxed-btn3` pill. Use a dark
     picsum image + overlay; render the headline as an `h1` for semantics
     (style identical to the source h3).
  3. Services (`service_area`) — centered `section_title`: eyebrow span
     "Services" (14px 500 `#615CFD` capitalize), h3 40px `#1F1F1F` "With more
     than 20 years of experience we can deliver the best product design.";
     3-col grid (`col-xl-4`) of `.single_service` cards: purple-outline line
     icon (source: inline SVGs img/svg_icon/1-3.svg — recreate with
     lucide-react icons, e.g. `PenTool`/`Layers`, `Monitor`, `Smartphone`),
     h3 24px, p 16px `#727272`; card padding 48px 35px, border 2px `#E8E8E8`,
     radius 5px, centered; hover → border 2px `#615CFD`. Titles: "Graphic
     design", "Web design", "Mobile app".
  4. About band (`about_area`) — bg `#1F1F1F`; left 50% cover photo
     (`::before`, img/about/about.png — person typing on laptop); right
     col-lg-5 offset-lg-1 (`justify-content-end`), padding 160px 0:
     `.section_title.white_text` (white span "About Us" + white h3
     "Empowering individuals"), `mid_text` 16px `#C9C9C9`, `last_text` 18px
     `#C9C9C9` margin-bottom 44px, "About Us" `.boxed-btn3` pill.
  5. Portfolio (`portfolio_image_area`) — centered `section_title`
     "Featured Works" + intro p (16px `#727272`); grid: 1 tile `col-lg-8` +
     4 tiles `col-lg-4` (row of 5, masonry-ish 8+4+4 / 4+4); tile = cover
     image (img/portfolio/1-5.png), radius 5px, overflow hidden; hover panel
     `.portfolio_hover`: white bg, scale .9 → 1, opacity 0 → 1, centered:
     span 14px `#615CFD` "App Design", h3 24px 700 `#1F1F1F` (source repeats
     "Colorlib Mobile App" ×5 — paraphrase to 5 distinct titles), "View"
     `.boxed-btn3` pill.
  6. How we work (`how_we_work_area`) — left col-lg-5 `work_info`:
     `section_title` h3 "How we work", `mid_text` 18px `#1F1F1F` Muli,
     `last_p` paragraph; `video_watch` row: 60px violet circle play button
     (white fa-play → lucide `Play`), "Watch Video" span 20px Roboto
     `#1F1F1F` margin-left 20px (source href = YouTube video → use `#` +
     aria-label, no video). Right 50% cover photo rounded `20px 0 0 20px`
     (`::before`, img/work/work.png — person in VR headset).
  7. Team (`team_area`) — centered `section_title` "Our Creative Team" +
     intro p; 4-col grid (`col-lg-3`) of `.single_team`: square photo
     (img/team/1-4.png, radius 0), `.team_hover` overlay (opacity 0,
     translateY(10%) → 1/0 on hover, 0.3s): 3 social circles 40px radius 50%
     bg + border `#615CFD`, white fb/tw/ig glyphs, at bottom of photo;
     `team_title` below: h3 20px Roboto `#1F1F1F`, role p 16px Muli
     `#707070`. Members: Brandon Yeald — Founder & CEO, Calvin Anderson —
     Graphics Designer, Roman Solo — Wordpress Developer, Yeald Kin —
     Software Engineer.
  8. Testimonials (`testimonial_area`) — full-width cover photo
     (img/testmonial/banner.png — brick wall + blue sofa) + `#1F1F1F` overlay
     opacity .6, padding 160px 0; centered owl-carousel of 3 slides
     (`single_testmonial text-center`): quote svg (lucide `Quote`), p 24px
     white lh 32px (margins 35px/25px), author: 42px round photo, h3 16px
     white Roboto, span 14px white role. All 3 slides: "Robert Thomson" /
     "Business Owner" (source repeats; keep or vary names — implementer's
     choice, note in PR). Implement with React state + prev/next arrows
     (accessible), not owl.
  9. Contact (`get_in_tauch_area`) — padding 146px/160px; centered
     `section_title` "Get in Touch" + intro p; `touch_form` col-lg-8: row
     col-md-6 "Your Name" + col-md-6 "Email", full-width "Subject" input,
     full-width "Message" textarea, `.submit_btn` full-width `.boxed-btn3`
     "Send Message". Inputs: 50px, radius 30px, border 1px `#C9C9C9`,
     padding 20px 16px, Roboto 14px, placeholder `#707070`, margin-bottom
     25px.
  10. Footer — `footer_top` bg `#1F1F1F`, padding 100px/160px: col-lg-2
      logo, col-lg-7 inline links (About, Services, Portfolio, Pages, Blog,
      Contact — inline-block, margin-right 46px, white), col-lg-3 social
      circles (40px radius 50%, border 1px `#E7F9F9`, white glyphs; hover →
      bg + border `#615CFD`). `copy-right_text`: bg `#1F1F1F`, padding 25px,
      `footer_border` border-top 1px `#363636`, text 15px `#C9C9C9`
      "Copyright © <year> All rights reserved | This template is made with ♥
      by Colorlib" → MUST become "… | Made with ♥ by Component Dock" linking
      https://www.componentdock.com/.

## Implementation tasks (for the implementer stream)

1. Create app from a simple existing template: copy the smallest app
   folder, rename package to `@free-react-templates/thrust`, folder
   `apps/thrust`.
2. Read `openspec/specs/template-thrust/spec.md`; write tests first for
   every section (Vitest + RTL, 100% coverage enforced).
3. Implement sections in order: Navbar → Hero → Services → About → Portfolio
   → HowWeWork → Team → Testimonials → Contact → Footer → App composition.
4. Tokens in `src/index.css` `@theme`: `--color-brand: #615CFD`,
   `--color-ink: #1F1F1F`, `--color-muted: #727272`,
   `--color-faint: #707070`, `--color-line: #C9C9C9`; Roboto + Muli Google
   Fonts `<link>` in `index.html` (Roboto 400/500/700, Muli 300–800).
5. Pill buttons: `#615CFD` bg, white text, `rounded-full`, `px-8 py-3`,
   Muli 16px 500, capitalize; hover → transparent bg + 1px violet border +
   violet text. Form inputs: `h-[50px] rounded-full border border-[#C9C9C9]`
   with `#707070` placeholders.
6. Images: `https://picsum.photos/seed/thrust-<n>/<w>/<h>` for hero bg,
   about photo, 5 portfolio tiles, work photo, 4 team photos, testimonial
   author thumbnails + bg; icons from lucide-react (`PenTool`, `Monitor`,
   `Smartphone`, `Play`, `Quote`, `Facebook`, `Twitter`, `Instagram`,
   `Rocket` for the logo glyph).
7. Run `bash scripts/verify-app.sh thrust` (typecheck + lint + knip +
   fallow + 100% coverage tests + build). Fix root causes, re-run.
8. Visual QA: `npx vite preview` + browser; compare against live preview
   (`preview.colorlib.com/theme/startup2/`) — section order, violet/white/
   dark rhythm, pill buttons, 78px hero headline, sticky dark header.
9. Push `feat/template-thrust`, open PR with source/preview/tokens/diffs,
   merge immediately, `[~]` → `[x]` bookkeeping + surge URL +
   `npm run readme:status`.

## Fidelity notes / pitfalls

- Preview URL uses the NO-HYPHEN slug: `https://preview.colorlib.com/theme/startup2/`
  (`startup-2` 404s). Mention this in the PR so implementers/QA use the
  right URL.
- Hero button on the dark overlay is the violet pill (`.boxed-btn3`), NOT a
  white outline — check contrast: it sits on the 0.8-dark overlay, so it
  reads clearly. About/portfolio/contact buttons are the same pill.
- Buttons are `text-transform: capitalize` (not uppercase) — a common
  miss; keep "Visit Our Works" style casing.
- The source's section headings are 40px weight 400 (not bold 900 like many
  ColorLib themes) — keep the lighter weight + eyebrow span pairing.
- Header nav has dropdowns (pages/blog) in the source; the home page itself
  never needs them open — a flat nav is an acceptable simplification (note
  in PR). Keep the sticky dark header + mobile hamburger panel.
- Testimonials: source is an owl-carousel of 3 identical slides ("Robert
  Thomson" ×3). A React carousel with prev/next and 3 (slightly varied)
  quotes is fine; keep the brick-wall photo bg + dark overlay + white 24px
  quote styling.
- Portfolio: 5 tiles in an 8+4+4 / 4+4 grid. The source repeats the same
  title on all five — paraphrase to 5 distinct project titles but keep the
  "category span + title + View button" hover panel.
- Do NOT copy any assets: no images, no flaticon/icomoon font files, no
  CSS. All icons from lucide-react.
- Footer copyright: "This template is made with ♥ by Colorlib" → MUST read
  "Component Dock" and link https://www.componentdock.com/.
- The source loads fonts via `@import` in style.css (Muli 200–800, Roboto);
  implement via Google Fonts `<link>` in index.html (preconnect + link).

# Grit (ColorLib "Stamina") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-grit` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Stamina" — free gym/fitness website template
  (source: https://colorlib.com/wp/template/stamina/). Listed in
  TEMPLATES.md under **Bootstrap (216)** (line 502; duplicate rows at lines
  1179, 1879, 2361 — same template, one app only).
- **Preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/stamina/`. DOM fetched
  (`/tmp/stamina.html`, 72,691 bytes) + stylesheet `css/style.css`
  (`/tmp/stamina.css`, 20,960 bytes) + screenshot
  (`stamina-free-template.jpg`, 1200×946, viewed in browser). Screenshot
  cross-checks the DOM: dark dumbbell-rack hero, white centered headline
  "We Believe Little Things Matter", outline GET STARTED, red slanted hours
  bar + CONTACT US > button.
- **Structure (top → bottom, single page):**
  1. Header — sticky white bar: "Stamina" wordmark (dark ink) left; nav
     right: Home (active, red underline), Classes, Schedule, Trainer,
     Services, Contact. Mobile = full-screen dark overlay menu.
  2. Hero (`#home-section`) — full-width background video (YouTube
     `w-cRWOjlk8c`, autoplay muted, mb.YTPlayer) + `rgba(0,0,0,0.4)`
     overlay; centered: h1 "We Believe Little Things Matter" (white 3rem
     900), p.lead (white 1.4rem, max-width 700px), "Get Started" white
     outline button (2px border, hover = white bg / black text). Use a dark
     picsum image instead of video.
  3. Hours bar — red `#f23a2e` box, skew −12°, overlapping hero bottom
     (`translateY(-50%)`, max-width 700px): bold "Hours" + "Opening: 7:30am
     — Closing: 9:00pm" left; "Contact us" + arrow button (bg `#f89d13`)
     right. Content inside is unskewed.
  4. Features — eyebrow "Stay Healthy", h2 "Get A Perfect Body", intro p;
     carousel of 5 cards (source: owl-carousel `nonloop-block-14`) —
     `ftco-feature-1`: 70px red circle icon, h2 20px bold #000 (Be Fit,
     Join Club, Gym Fitness, Eat Vegie, Fruit Juices, Body Warmup), p
     #989898; hover: card bg red, icon bg white, text white. (6th card
     "Body Warmup" appears in the carousel; render all 6 for parity.)
  5. CTA band 1 — `.bgimg` parallax (bg_3.jpg, dark overlay), centered
     white: h2 "Every Step Counts", p.lead, red "Get Started" button.
  6. Classes — eyebrow "Fitness Class", h2 "Classes", intro p; 5 class
     cards (source renders the carousel twice — desktop + mobile duplicate;
     implement ONE carousel/row): thumbnail img + h2 link "Fitness Class
     Name #N" + "By Justin Daniel" + "30 minutes".
  7. CTA band 2 — `.bgimg` (bg_1.jpg): h2 "Your Fitness Partner Where Ever
     You Are", p.lead, red "Get Started" button.
  8. Schedule — eyebrow "Fitness Sched", h2 "Schedule", intro p; day tabs
     S M T W T F S (Bootstrap tabs; active = 2px red top border); each pane
     = 2-col grid (`col-lg-6`) of class-items: thumbnail + time span
     ("Sunday 7:30am - 9:00am") + h2 link + "By Justin Daniel", "30
     minutes". Cell borders #edf0f5; hover/active cell bg red.
  9. Trainers — eyebrow "Trainer", h2 "Our Trainers", intro p; 4-col grid
     (`col-lg-3`, 2-col tablet) of `.person` cards: photo, h3 name (Justin
     Daniel, Matthew Davidson ×3), p.position "Trainer", paragraph. Hover:
     bg red, name coral #ff7c67, text white.
  10. Services — eyebrow "Fitness Services", h2 "Services", intro p;
      3-col grid (`col-lg-4`) of 6 `ftco-feature-1` cards (same icon/text
      set as #4).
  11. Contact — `bg-light` section, eyebrow "Get In Touch", h2 "Contact
      Us", intro p; centered `col-md-7` form: First name + Last name,
      Subject, Email, textarea, "Send Message" submit (btn-primary,
      btn-block, py-3 px-5). Inputs 50px, radius 0, 2px border, focus
      border red.
  12. Hours bar 2 (bottom) — `schedule-wrap2`: red box skew +12°, absolute
      right:0, width 50% (90% mobile), same Hours + Contact CTA; floats
      over the contact/footer boundary.
  13. Footer — 3 cols: "About Grit" (col-md-4, paragraph), "Links"
      (col-md-3 ml-auto: Home, Classes, Schedule, Trainer), "Subscribe"
      (col-md-4: paragraph + inline email input + "Subscribe" red button);
      copyright bar MUST link https://www.componentdock.com/ ("Component
      Dock") — replaces the source's Colorlib credit.

## Implementation tasks (for the implementer stream)

1. Create app from a simple existing template: copy the smallest app
   folder, rename package to `@free-react-templates/grit`, folder
   `apps/grit`.
2. Read `openspec/specs/template-grit/spec.md`; write tests first for
   every section (Vitest + RTL, 100% coverage enforced).
3. Implement sections in order: Navbar → Hero → Hours bar → Features →
   CTA 1 → Classes → CTA 2 → Schedule → Trainers → Services → Contact →
   Footer → App composition.
4. Tokens in `src/index.css` `@theme`: `--color-brand: #f23a2e`,
   `--color-accent: #f89d13`, `--color-coral: #ff7c67`,
   `--color-ink: #25262a`, `--color-muted: #989898`; Muli Google Fonts
   link in `index.html` (300/400/700/900).
5. Buttons: uppercase, 12px, weight 900, 2px border. Form controls: 50px
   height, radius 0, 2px border. Skewed red boxes via `skew-x-[-12deg]`
   / `skew-x-[12deg]` on a wrapper with unskewed inner content
   (`skew-x-[12deg]` on inner) — match the source's `::before` pattern.
6. Images: `https://picsum.photos/seed/grit-<n>/<w>/<h>` for hero bg,
   class thumbs, trainer photos; lucide icons for feature/service cards
   (e.g. `Dumbbell`, `Flame`, `Apple`, `GlassWater`, `HeartPulse`,
   `Zap`) and the arrow glyphs.
7. Run `bash scripts/verify-app.sh grit` (typecheck + lint + knip +
   fallow + 100% coverage tests + build). Fix root causes, re-run.
8. Visual QA: `npx vite preview` + browser; compare against live preview
   (`preview.colorlib.com/theme/stamina/`) — section order, red/white
   rhythm, skewed hours bars, uppercase buttons, spacing.
9. Push `feat/template-grit`, open PR with source/preview/tokens/diffs,
   merge immediately, `[~]` → `[x]` bookkeeping + surge URL +
   `npm run readme:status`.

## Fidelity notes / pitfalls

- The hero uses a YouTube background video — do NOT copy it; use a dark
  picsum image (e.g. `https://picsum.photos/seed/grit-hero/1600/900`) with
  a `rgba(0,0,0,0.4)` overlay. Keep the centered white copy + outline
  button.
- The source renders the classes carousel twice in the DOM (desktop +
  mobile duplicate) — implement ONE set of 5 cards (carousel optional;
  a responsive row is an acceptable simplification, note it in the PR).
- The features carousel is an owl-carousel of 5–6 slides; a responsive
  grid of 6 cards is an acceptable simplification (note in PR) — keep the
  hover inversion behavior, it is the visual signature of these cards.
- Schedule tabs: source uses Bootstrap tabs (single letters S M T W T F S).
  Implement with React state; keep the red top border on the active tab and
  the red hover on day rows.
- Skewed boxes: the skew applies to the background only (`::before`), NOT
  the text — wrap content and unskew it.
- Do NOT copy any assets: no images, no flaticon/icomoon font files, no
  CSS. All icons from lucide-react.
- Footer copyright: "Copyright © <year> All rights reserved | Made with ♥
  by ..." → MUST read "Component Dock" and link
  https://www.componentdock.com/.
- Two trainer cards share the name "Matthew Davidson" in the source —
  keep it (or use distinct names; implementer's choice, note in PR).
- Section headings in the source are uppercase-only for eyebrows
  (`subheading` class, red) — replicate the eyebrow + 40px 900-weight h2
  pairing.

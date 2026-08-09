# Altar (ColorLib Wordpress Wedding Themes) — Tasks & Design Notes

> Recreation of the ColorLib "Wordpress Wedding Themes" category item
> (https://colorlib.com/wp/template/wordpress-wedding-themes/) under the
> NEW name **Altar** (the wedding altar — the ceremony focus of the design;
> single lowercase word, kebab-safe, no collision with `apps/`,
> `openspec/specs/`, `docs/templates/` or TEMPLATES.md — verified
> 2026-08-09), per the monorepo naming mandate (never reuse the ColorLib
> source name).

## Design notes (replication findings)

- **Original:** ColorLib "Wordpress Wedding Themes" — a _category_ item in
  the Beauty category (TEMPLATES.md line 235), not a demo-hosting template.
- **Source link behavior:** `https://colorlib.com/wp/template/wordpress-wedding-themes/`
  301-redirects to `https://colorlib.com/wp/wedding-planning-wordpress-themes/`
  (HTTP 200, 152 KB) — roundup article "10+ Best Wedding WordPress Themes
  for Planning & Photography 2026" by Julia Starlark (2026-03-24, "Theme
  Collections"). Lists 12 free wedding/event themes (Veil, Alanzo,
  PartyMaker, July Morison, Chroma, Royal Event, Love Story, Melania,
  Unica, HeartStar, Camelia, Plan My Day) — these are marketplace themes,
  NOT recreated; only the wedding content vocabulary (ceremony, party,
  photos, reservation) informs the recreation.
- **Item's own preview URL:** `https://preview.colorlib.com/theme/wordpress-wedding-themes/`
  → HTTP 404 (curl-verified 2026-08-09). Slug absent from the preview map.
  Per the replication fallback rule the **screenshot is the primary visual
  reference**.
- **LIVE SIBLING DEMO (structure + tokens):** `https://preview.colorlib.com/theme/wedding/`
  → HTTP 200 (curl-verified 2026-08-09). This is the live ColorLib
  "Wedding" demo — the same template family the category image depicts
  (hero "James & Julie are Getting Married" matches the screenshot's
  "Getting married!" copy). Full DOM (22.6 KB) + `css/main.css` (33 KB)
  fetched and analyzed. **Use this for section order + tokens.**
- **Screenshot:** `wedding-wordpress-themes.jpg` (1200×892, AVIF-served,
  converted to PNG via ffmpeg, viewed in browser): OLDER iteration of the
  wedding hero — couple walking down white stone stairs with confetti,
  white sans nav top-left ("Our story, Photos, When & Where, Events"),
  circular logo top-right, centered elegant SERIF white headline "Wedding
  WordPress Themes" + thinner "Getting married!" sub-line. Romantic,
  minimalist, photography-led. The implementer honors the photo-led hero
  (serif display headline allowed) but follows the live demo's section
  structure.
- **Visual design (live demo):** white header with utility strip; hero
  with dark maroon overlay; gradient accent (purple → periwinkle → cyan)
  on the countdown pills and the pill "CONFIRM NOW" button; light
  `#f9f9ff` Wedding Information section; dark-photo Reservation section;
  minimal centered footer.
- **Section order (1:1, verified from live DOM):**
  1. `.header-top` — phone + email left, centered logo, nav right
     (HOME · ABOUT US · GALLERY · PAGES ▾).
  2. `#home.banner-area` — full-screen (915px) hero, `.overlay-bg`
     (`opacity:.3`, `#7f3f3b`), centered white 72px/700 h1
     "James & Julie<br>are Getting Married".
  3. `.date-area` — `.date-section` (bg `ads-bg.png`, min-height 200px):
     white h3 "Wedding Day : 20 March 2018 at 19.00 pm" + countdown
     clock: 4 gradient pills (Days/Hours/Minutes/Seconds; number white,
     label grey `#777`).
  4. `#about.About-area` — carousel w/ prev/next triggers: "About the
     Sweet Cute Bride" / "About the Handsome Groom" (h1 + paragraphs +
     photo, 2-col alternating).
  5. `#gallery.gallery-area` — centered "Our Pre Wedding Photo Gallery"
     h1 + sub-paragraph + photo carousel (g1–g5+).
  6. `.info-area` (`#f9f9ff`, 120px pad) — "Wedding Information" + two
     `.single-info` rows: **Main Ceremony** and **Wedding Party**, each
     photo + description + Date/Time/Address lines.
  7. `#reservation.reservation-area` (bg `reservation.jpg`, cover, dark
     overlay, 120px pad) — white "Reservation Form" + form: Name, Email
     address, Meal Preferences (select), Number of guests (select),
     Notes (textarea), submit `.primary-btn` "CONFIRM NOW ➜".
  8. `.footer-area` — centered menu (Home · About us · Gallery ·
     Reservations), social icons (Facebook, Twitter, Dribbble, Behance),
     copyright + Colorlib credit (paraphrased).
- **Design tokens (from `css/main.css`, verified 2026-08-09):**
  - Brand gradient: `linear-gradient(0deg, #ca2fff 0%, #8e96f8 55%,
#53fff0 100%)` — `.primary-btn` bg AND `.clockinner span` (countdown
    pills).
  - Primary button: gradient bg, `border-radius: 25px` (pill),
    `line-height: 42px`, `padding: 0 60px 0 30px` (right pad for ➜
    arrow), white text, weight 500, border none, uppercase.
  - Body: `#777777`, Poppins 300 14px, line-height 1.625em.
  - Hero overlay: `#7f3f3b` at opacity .3 (`rgba(127,63,59,0.3)`).
  - Info section: `#f9f9ff`; section rhythm `padding: 120px 0`
    (`.section-gap`).
  - Hero h1: white 72px weight 700, centered.
  - Countdown pill shadow: `0 23px 34px -26px black`; label grey `#777`.
  - Form controls: transparent bg, `border-radius: 0`, 1px solid
    `#656463` border, white text 14px, padding 12px.
  - Font: Poppins (body 300 / headings 700); no Google Fonts import in
    main.css — add via `<link>` (Playfair Display or similar serif for
    the hero headline, honoring the screenshot iteration).
  - Header utility strip: `padding: 20px 0`.
- **Recreation decisions:** Tailwind grid (NO Bootstrap); single-page;
  hero + reservation photos = picsum seeds `altar-<n>` with the dark
  overlay; live countdown (days/hours/minutes/seconds to a fixed future
  date) replacing the static demo numbers; validated reservation form
  (name + email required, success state) — documented interactive
  additions; couple renamed (e.g. "Ella & Noah"); "PAGES ▾" dropdown
  omitted; article's comment form NOT recreated; social icons via inline
  SVG BrandIcon (lucide removed brand icons).
- **Similar-family preps to keep distinct:** (none currently in the
  Beauty/wedding space — check `docs/templates/` before implementing in
  case a sibling stream prepped another wedding-themed item).

## Tasks (implementation order, TDD)

1. Scaffold `apps/altar` (copy the simplest existing app, rename package
   to `@free-react-templates/altar`); `npm install` at root to register
   the workspace in `package-lock.json` (implementer's job — prep stream
   never touches the lockfile); verify `grep -c "free-react-templates/altar"`
   package-lock.json.
2. `index.html`: title "Altar — Wedding Event Template", Google Fonts
   `<link>` Poppins 300/500/700 (+ a serif display face for the hero,
   e.g. Playfair Display 700 — honor the screenshot's serif headline).
3. `src/index.css`: `@theme` tokens — `--color-accent-a: #ca2fff`,
   `--color-accent-b: #8e96f8`, `--color-accent-c: #53fff0`, body
   `#777777`, info bg `#f9f9ff`, overlay `rgba(127,63,59,0.3)`, form
   border `#656463`; Poppins body + serif display families.
4. Tests (red) → `App.tsx` + components:
   - `UtilityBar.tsx` — phone + email strip above the header.
   - `Header.tsx` — sticky white header, "Altar" wordmark, anchor nav
     (Home, About, Gallery, Reservation), mobile menu toggle.
   - `Hero.tsx` — full-screen section, picsum couple photo
     (`altar-1/1920/1080`), dark overlay, centered white serif headline
     "Ella & Noah are Getting Married".
   - `Countdown.tsx` — "Wedding Day : …" line + 4 gradient pills
     (days/hours/minutes/seconds) ticking to a fixed future date;
     labels grey.
   - `AboutSection.tsx` — carousel with bride/groom slides + prev/next.
   - `Gallery.tsx` — "Our Pre Wedding Photo Gallery" + responsive grid
     (≥5 picsum photos, seeds `altar-2..6`).
   - `WeddingInfo.tsx` — `#f9f9ff` section, Main Ceremony + Wedding
     Party rows (photo + description + Date/Time/Address).
   - `ReservationForm.tsx` — dark photo bg + overlay, name/email/meal
     preference/guest count/notes, gradient "Confirm Now" pill,
     validation + success state.
   - `Footer.tsx` — menu, social icons (BrandIcon), copyright + credit.
5. `scripts/verify-app.sh altar` → green (typecheck + lint + 100%
   coverage tests + build); `npm run spec:validate`.
6. PR description must include: source template (ColorLib "Wordpress
   Wedding Themes", `https://colorlib.com/wp/template/wordpress-wedding-themes/`),
   preview situation (item's own preview 404s; live sibling
   `https://preview.colorlib.com/theme/wedding/` analyzed + screenshot
   reference), design tokens (gradient `#ca2fff → #8e96f8 → #53fff0`,
   `#f9f9ff`, `rgba(127,63,59,0.3)`, Poppins + serif hero, pill button),
   what differs (Altar name, couple names, picsum placeholders, live
   countdown, validated form).
7. Ship: TEMPLATES.md `[~]` → `[x]` (line 235) + surge URL
   `https://free-react-templates-altar.surge.sh/` + `npm run readme:status`.

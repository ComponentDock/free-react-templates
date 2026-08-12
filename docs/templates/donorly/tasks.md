# Donorly (ColorLib Fundraiser) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-donorly`.

## Design notes (replication findings)

- **Original:** ColorLib "Fundraiser" — charity / donation website
  template (source: https://colorlib.com/wp/template/fundraiser/).
  TEMPLATES.md has TWO copies of this item (lines 404 and 1267 — mark
  BOTH `[x]` when done).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/fundraiser/
  (HTTP 200, ~25.8 KB, title "Fundraiser — Website Template by Colorlib").
  Stylesheets: `css/style.css` (25.4 KB) + a CUSTOMIZED
  `css/bootstrap.min.css` (`--primary:#00a651`, `--secondary:#21323b`,
  `.btn-primary` = `#00a651` — NOT Bootstrap blue) + owl.carousel /
  owl.theme.default / animate / jquery.fancybox / aos. Icon fonts:
  `fonts/icomoon` (icon-twitter, icon-facebook, icon-instagram,
  icon-linkedin, icon-menu, icon-close2, icon-clock-o, icon-room,
  icon-heart). Fonts via Cloudflare cf-fonts @font-face in an inline
  `<style>`: **Mansalva** (cursive display headings) + **Roboto** (body) —
  use Google Fonts `<link>`s in the recreation (load Roboto 300+400;
  body declares `font-weight: 300`).
- **Screenshot:** `fundraiser-free-template.jpg` — verified live in a
  browser (vision, 1200×946): green top strip (white links) over a dark
  blue-grey navbar with white lowercase wordmark; hero = children photo
  under dark overlay + white brush-script headline "Join The Movement To
  end Child Poverty" + green "Donate Now" button; below the hero three
  square photo tiles tinted red / yellow / green with white script titles.
- **Visual design:** charity aesthetic — white page, brand green `#00a651`
  (top bar, buttons, nav hover/active, dollar amounts, footer Subscribe,
  tile 3 tint, green overlay wash on the donate section), dark blue-grey
  `#21323b` (navbar + dark overlay `rgba(33,50,59,.9)` on Why Choose Us),
  body text `#364d59` weight 300, red `#dc3545` (badges, tile 1 tint,
  progress bars), yellow `#ffc107` (tile 2 tint), `#f8f9fa` light strip
  (CTA), white footer with `rgba(0,0,0,.5)` links. Mansalva for ALL
  display headings (hero H1 5rem/900, section titles, tile titles, Donate
  card title, CTA title), Roboto body.

## Design tokens (from css/style.css + live computed styles)

| Token           | Value                                                                                                                                                                                                                                        | Where                                                                                                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Brand green     | `#00a651`                                                                                                                                                                                                                                    | top bar bg, `.btn-primary` bg/border, nav hover + active, `text-primary` ($32,919), footer Subscribe button, tile 3 tint, `overlay-primary` wash `rgba(0,166,81,.9)` |
| Dark secondary  | `#21323b`                                                                                                                                                                                                                                    | navbar bg, Why-Choose-Us overlay `rgba(33,50,59,.9)`                                                                                                                 |
| Body text       | `#364d59` (weight 300, lh 1.7, 1rem)                                                                                                                                                                                                         | `body`                                                                                                                                                               |
| Danger red      | `#dc3545`                                                                                                                                                                                                                                    | `badge-danger` category chips, tile 1 tint, cause progress bar (`.custom-progress.bg-danger` — bg-danger !important WINS over the CSS green)                         |
| Warning yellow  | `#ffc107`                                                                                                                                                                                                                                    | tile 2 tint (`overlay-success:before` — class name is misleading: renders YELLOW, not green)                                                                         |
| Light grey      | `#f8f9fa` (`bg-light`)                                                                                                                                                                                                                       | CTA strip (`cta-20101 bg-light p-5`)                                                                                                                                 |
| Footer          | white bg (`.bg-white` !important beats `.site-footer` `#c9ccd4`), links `rgba(0,0,0,.5)`                                                                                                                                                     | `footer.site-footer.bg-white`, `footer-heading` 16px `#000`                                                                                                          |
| Fonts           | **'Mansalva', cursive** (display) + **'Roboto', sans-serif** (body)                                                                                                                                                                          | `.text-cursive` (!important) on hero H1 / h2.title / tile h3.h1 / Donate h3 / CTA h2; hero H1 5rem weight 900; body 1rem weight 300                                  |
| Buttons         | `.btn-primary`: bg `#00a651`, white text, border `#00a651`                                                                                                                                                                                   | hero: `py-3 px-4 rounded-0`; donate submit / CTA / footer Subscribe: plain                                                                                           |
| Overlays        | hero slides `:before` black opacity .3; `.bg-image.overlay:after` `rgba(33,50,59,.9)`; `.bg-image.overlay-primary:after` `rgba(0,166,81,.9)`; tiles `:before` solid color + `mix-blend-mode: screen` + opacity .9                            | hero (3 slides), Why Choose Us, Donate CTA, feature tiles                                                                                                            |
| Tiles           | 33.333% width, 300px height, `.text` absolute bottom-left 20px (white `span.meta` + Mansalva `h3.h1`)                                                                                                                                        | `feature-29192-wrap` (margin-top -20px, z-index 2, overlapping hero)                                                                                                 |
| Cause cards     | progress track 7px `#ccc`, bar `bg-danger` 7px with 4px right radius, caption white 12px bottom-right; badge `badge-danger py-1 small px-2 rounded`; h3 26px; divider `border-top border-light border-bottom py-2`; donor avatar 50px circle | `.cause.shadow-sm` ×3                                                                                                                                                |
| Feature numbers | 80px square, 2px solid white border, white 1.5rem number centered                                                                                                                                                                            | `.feature-29012 .number` ×4 (2×2 grid in Why Choose Us)                                                                                                              |
| Event cards     | date box `bg-primary p-3 rounded` 100px (white h3 "22" + small "Oct 2019"); meta `text-muted` clock + map-pin; h3 20px                                                                                                                       | `.event-29191` ×2 (image `img-fluid rounded` above)                                                                                                                  |
| Section rhythm  | `.site-section` 7rem padding (3rem < 992px); footer 4em 0; hero wrapper 100vh min 600px                                                                                                                                                      | all sections                                                                                                                                                         |
| Icons           | icomoon (source) → lucide/inline SVG: Twitter, Facebook, Instagram, Linkedin; Menu, X; Clock, MapPin; Heart                                                                                                                                  | top bar, mobile menu, event meta, footer, copyright                                                                                                                  |

## Tasks (implementation order)

1. Scaffold `apps/donorly` (copy simplest existing app; package
   `@free-react-templates/donorly`; `vite.config.ts` with
   `injectUiSource()`).
2. `npm install` at repo root (registers workspace in package-lock.json;
   verify `grep -c "free-react-templates/donorly" package-lock.json`).
3. `index.css` `@theme` tokens: `--color-primary: #00a651`,
   `--color-secondary: #21323b`, `--color-body: #364d59`,
   `--color-danger: #dc3545`, `--color-warning: #ffc107`,
   `--font-display: 'Mansalva', cursive`, `--font-body: 'Roboto',
sans-serif`. Add Mansalva + Roboto (300, 400) Google Fonts `<link>`s to
   `index.html`.
4. `TopBar.tsx` — `bg-primary` strip, hidden below md (`hidden md:block`):
   left links Home / Events / Become A Volunteer (white), right inline-SVG
   Twitter + Facebook icons.
5. `Navbar.tsx` — dark bar (`bg-secondary`, shadow, py-4): left lowercase
   white wordmark "Donorly"; right 5 links (Home, About Us, Our Causes,
   Blog, Contact — white, mx-4, py-5; hover + active `text-primary`);
   mobile (< 992px): hamburger (lucide `Menu`) + slide-in right panel
   (white) with same links + close (lucide `X`), aria-expanded.
6. `HeroSlider.tsx` — `h-[100vh] min-h-[600px]` wrapper, centered overlay
   box (max-w-[700px]): H1 Mansalva font-black text-5xl white "Join The
   Movement To end Child Poverty" + green "Donate Now" button (`rounded-none
px-4 py-3`); behind: 3-slide carousel (lucide ChevronLeft/ChevronRight
   or dots — source uses owl dots; state-driven, picsum ~1600×900 seeds
   donorly-hero-1..3) each with black/30 overlay.
7. `FeatureTiles.tsx` — strip overlapping hero (`-mt-5`/`-mt-20`, z-10,
   `md:flex`): 3 tiles (md:w-1/3 h-[300px], bg image + color overlay using
   `mix-blend-screen` bg color at 90%): tile 1 red `#dc3545` — meta
   "Livelihood" + Mansalva h1 "Livelihood"; tile 2 yellow `#ffc107` — meta
   "Health" + "Natural Remedies"; tile 3 green `#00a651` — meta "School" +
   "New Class Rooms"; `.text` absolute bottom-left 20px (white meta small +
   Mansalva title); stack full-width on mobile.
8. `Causes.tsx` — section (py-28): Mansalva "Latest Causes" title +
   subtitle; 3 cards (`shadow-sm`, md:grid-cols-3): image with absolute
   bottom progress wrap (caption "80% complete" white 12px bottom-right +
   7px track `bg-[#ccc]` with red `bg-danger` bar width 80%); body:
   red badge category (School / Health / Livelihood), 26px black title
   "Alias Odit Ipsam Quas Unde Obcaecati", "Donated" row + green
   "$32,919", donor row (50px circular picsum avatar donorly-person-1..3 +
   "James Smith").
9. `WhyChooseUs.tsx` — bg-image section + dark overlay (`bg-secondary/90`):
   Mansalva "Why Choose Us" + white paragraph; 2×2 grid (`md:grid-cols-2`)
   of 4 numbered features: 80px white-bordered number (Odit Reiciendis /
   Nisi Sint Explicabo / Accusamus Labore Necessitatibus / Consectetur
   Dolor Elit) + white h3 + white/70 paragraph.
10. `Events.tsx` — Mansalva "Latest Event" title; 2 cards (md:grid-cols-2):
    rounded image (picsum donorly-event-1..2); green date box (rounded,
    100px: "22" h3 white + "Oct 2019" small white); meta row (lucide Clock
    - "9:30 AM — 11:30 AM", lucide MapPin + "Ghana Africa", text-muted);
      20px black title link "Ratione Delectus Assumenda Rem Modi Quaerat
      Laborum".
11. `DonateForm.tsx` — bg-image section + green overlay (`bg-primary/90`):
    left rounded shadow image; right white card (`p-4 shadow`): Mansalva
    "Donate Now" + form (Name, Email, "Amount in dollar", green submit);
    zod validation + per-field errors + success message, no navigation.
12. `CtaStrip.tsx` — `bg-light` strip (`p-5`, md:flex justify-between):
    Mansalva "Helping the Homeless, Hungry, and Hurtings Children" + green
    "Donate Now" button.
13. `Footer.tsx` — white footer (py-16): About Us blurb + Features link
    list (About Us / Testimonials / Terms of Service / Privacy / Contact
    Us); Subscribe to Newsletter (transparent-bordered input + green
    Subscribe button, zod validation, success message); Follow Us (4
    inline-SVG socials); bottom bar: "Copyright © <year> All rights
    reserved | Made with <Heart> by **Component Dock**" — link
    https://www.componentdock.com/ (replaces source's ColorLib credit —
    REQUIRED by AGENTS.md, no colorlib strings in the app).
14. `App.tsx` — compose TopBar + Navbar + HeroSlider + FeatureTiles + main
    (Causes, WhyChooseUs, Events, DonateForm, CtaStrip) + Footer; document
    title "Donorly — Charity Template".
15. Tests: one describe per component, Gherkin-mirroring scenarios from
    spec.md; 100% coverage lines/functions/branches/statements.
16. Run `scripts/verify-app.sh donorly` (typecheck + lint + coverage
    tests + build) until green.
17. Update TEMPLATES.md lines 404 AND 1267 `[ ]` → `[x]` (BOTH copies)
    with surge URL + homepage after deploy; `npm run readme:status`;
    commit `feat: Donorly — charity template (ColorLib Fundraiser)`;
    PR → main → merge immediately.

## Fidelity gotchas

- **`.btn-primary` is green `#00a651`**, not Bootstrap blue — the
  preview's bootstrap.min.css is customized (`--primary:#00a651`). Same
  for `--secondary:#21323b` (navbar) and `--success:#00a651`.
- **Tile overlay class names LIE:** `overlay-success:before` renders
  YELLOW `#ffc107` and `overlay-warning:before` renders GREEN `#00a651`
  (swapped vs. Bootstrap semantics). Tile 1 (`overlay-danger`) is red
  `#dc3545`. All use `mix-blend-mode: screen`, opacity .9 over grayscale
  photos — replicate with a colored `mix-blend-screen` overlay on the
  placeholder image.
- **Cause progress bar is RED:** HTML is `class="custom-progress bg-danger"`
  — the CSS `.custom-progress { background:#00a651 }` loses to
  `bg-danger`'s `!important`, so the bar renders `#dc3545` on a `#ccc`
  track. Verify visually; do NOT use green here.
- **Logo color:** `.site-logo a { color:#00a651; text-transform:lowercase }`
  but the HTML link also has `text-white` — the `!important` white wins on
  the dark navbar. Render the wordmark white (lowercase); the green
  applies only in the source's sticky-white state (JS-driven —
  optional fidelity, keep the simple dark navbar).
- **Hero H1 is HUGE Mansalva:** `.box-92819 h1` = 5rem, weight 900,
  Mansalva. The overlay box is absolutely centered (`top/left 50% +
translate`) with max-width 700px over the 100vh (min 600px) carousel.
- **`heading-20219` / `cta-20101` have NO CSS rules** in any stylesheet —
  pure wrappers; the visual weight comes from `h2.text-cursive`
  (Mansalva). Don't hunt for missing styles.
- **`.site-section` padding is 7rem** (3rem < 992px) — the earlier 2.5em/5em
  rule at line 66 is overridden by the later 7rem rule.
- **Footer is WHITE:** `footer.site-footer.bg-white` — `.bg-white`
  !important beats `.site-footer { background:#c9ccd4 }`. Links are
  `rgba(0,0,0,.5)`; `footer-heading` 16px `#000`.
- **Top bar is desktop-only** (`d-none d-md-block`) and has NO search
  input — the screenshot's apparent search bar is a misread of the social
  icons; follow the DOM.
- **Nav links are white `!important`** with 15px margins and 20px vertical
  padding; hover + `.active` turn green `#00a651`. The source's
  sticky-wrapper JS flips the navbar to white bg + dark links on scroll —
  optional.
- **TWO TEMPLATES.md copies** (404, 1267): BOTH must be marked `[x]`.
- Footer credit: source says "This template is made with ♥ by Colorlib" →
  recreation MUST credit **Component Dock** (https://www.componentdock.com/)
  and contain no `colorlib` string anywhere in `apps/donorly`.

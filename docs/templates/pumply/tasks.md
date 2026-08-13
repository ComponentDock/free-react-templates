# Pumply (ColorLib Gymer) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-pumply`.

## Design notes (replication findings)

- **Original:** ColorLib "Gymer" — free responsive Bootstrap 4 gym / fitness
  website template (source: https://colorlib.com/wp/template/gymer/).
  TEMPLATES.md has THREE copies (line 407 — Bootstrap category, line 1853 —
  Health Fitness category, line 2325 — One Page category; mark ALL THREE
  `[x]` when done). All three rows use the correct screenshot
  `gymer-free-template.jpg`.
- **Demo DOM analyzed:** REACHABLE — `https://preview.colorlib.com/theme/gymer/`
  returns HTTP 200 (curl + browser, 2026-08-13, 31 KB HTML). Title: "Gymer —
  Website by Colorlib". This is a FULL-fidelity reference: section order,
  copy, buttons all taken from the live DOM. Token source: `css/style.css`
  (18 KB) + `css/bootstrap.min.css` (custom-compiled, carries
  `--primary:#48d494` and `.btn-primary`).
- **Visual design (browser vision confirmed):** modern, sleek, minimalist
  DARK aesthetic — the entire page sits on a black `#000` body. Neon-green
  `#48d494` is the single accent (section titles, active nav link, outlined
  CONTACT pill, buttons, counter icons, tab pills, carousel dots, photo
  offset shadows, Subscribe button). White text everywhere else. Contact
  section is darker `#121212`; hero fallback `#222` behind a muted YouTube
  video (recreate as a static dark photo). Big heavy headlines: hero h1
  7rem/900 white, section titles 3rem/900 green. Buttons are square-ish
  (4px radius, NO pills); `btn-primary` text is DARK `#212529` on green.
  Demo brands itself "Gymer" → recreation: **Pumply**.

## Design tokens (from the live stylesheets)

| Token          | Value                                                                                                                                                                                                                         | Where                                                                                                                                            |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Brand green    | `#48d494` (`--primary`; hover `#2fc781`)                                                                                                                                                                                      | `btn-primary` bg/border, section titles, active nav link, CTA border/text, counter icons, tab pill, dots active, photo shadows, Subscribe button |
| Button text    | `#212529` (DARK on green)                                                                                                                                                                                                     | `btn-primary` color; hover text white                                                                                                            |
| Page bg        | `#000` (body)                                                                                                                                                                                                                 | whole page dark                                                                                                                                  |
| Contact bg     | `#121212` (`.bg-dark` override in style.css)                                                                                                                                                                                  | Contact Us section                                                                                                                               |
| Hero fallback  | `#222` (`.intro-section:before`)                                                                                                                                                                                              | behind the YouTube video background                                                                                                              |
| Text           | white; body copy `gray` (CSS default) 300                                                                                                                                                                                     | headings/numbers/labels white; muted `rgba(255,255,255,0.8)` (services p)                                                                        |
| Section title  | 3rem / 900 / `#48d494` / max-width 450px (1.5rem mobile)                                                                                                                                                                      | `.section-title` — all sections                                                                                                                  |
| Hero h1        | 7rem / 900 / white / centered                                                                                                                                                                                                 | `intro-section h1`                                                                                                                               |
| Font           | **Muli** (300,400,700,900) — Google Fonts                                                                                                                                                                                     | `https://fonts.googleapis.com/css?family=Muli:300,400,700,900`                                                                                   |
| Buttons        | BS4 radius 4px; `btn-primary` dark text; large CTAs `py-3 px-4` (Get In Touch), `py-3 px-5 btn-block` (Send Message); `rounded-0` footer Subscribe row; CONTACT = outlined green border + green text, hover fills green/white | `.btn-primary`, `.cta a span`                                                                                                                    |
| Offset shadow  | `10px 10px 0 0 #48d494`                                                                                                                                                                                                       | `.img-shadow` (Step Up photo), `.person img` (trainer photos)                                                                                    |
| Carousel dots  | 10px circles `#e6e6e6`, active `#48d494`, centered, mt-30px; owl nav hidden                                                                                                                                                   | `.nonloop-block-13/14`                                                                                                                           |
| Work hover     | green overlay `rgba(72,212,148,0.8)` + `scale(1.07)`, white title + `rgba(255,255,255,0.7)` tag                                                                                                                               | `.work-thumb` (Classes)                                                                                                                          |
| Tabs           | `border-bottom: 1px solid #48d494`; active = green pill, white text, radius 4px                                                                                                                                               | `.tab-list-custom` (Schedule)                                                                                                                    |
| Table          | `table-bordered` (`#dee2e6`), `table-striped` (`rgba(0,0,0,0.05)` odd rows), white text, 20px row padding, NO thead                                                                                                           | Schedule                                                                                                                                         |
| Service cards  | `#48d494` bg, padding 4rem (2rem mobile), white icon (`display-3`) + h3 1.5rem/700, p `rgba(255,255,255,0.8)`                                                                                                                 | `.service`                                                                                                                                       |
| Footer         | h3 uppercase 0.9rem / letter-spacing .1rem / white / 900; links spaced 10px; padding 7em 0                                                                                                                                    | `.footer-section`                                                                                                                                |
| Navbar         | absolute over hero; logo 1.3rem/900 white; links white `padding 5px 20px`; sticky: white bg + shadow, black links, hover `#48d494`                                                                                            | `.site-navbar`, `.sticky-wrapper.is-sticky`                                                                                                      |
| Section rhythm | `.site-section` padding 5em 0 (4em mobile); header block `col-lg-6` (title + paragraph)                                                                                                                                       | —                                                                                                                                                |

## Structure (1:1 section order)

1. Navbar — "Pumply" wordmark (white, 900) + links Home / Classes / Schedule
   / Trainer / Services (white, anchor links) + outlined uppercase CONTACT
   button (green border + text) → `#contact-section`; mobile hamburger;
   sticky white state on scroll.
2. Hero (`#home-section`) — 100vh / min-height 900px, dark photo background
   over `#222` (recreates the YouTube video mood), centered white
   "Welcome To Pumply" h1 (7rem/900). No buttons.
3. Counters — 4 blocks: 2,260 Members / 210 Daily Visitors / 887 Health
   Program / 1,920 Heart Beat (green icon + white number + white label).
4. Step Up Your Fitness — left: green 3rem/900 title + copy + "Get In Touch"
   button; right: green-shadowed photo.
5. Classes — green title + copy; 5-card carousel (Fitness, Cardio Vascular,
   Lose Weight, Cardio Vascular, Fitness) with green hover overlay + title +
   tag; gray/green dots.
6. Schedule — 6 day tabs (Monday active; NOTE Sunday, not Saturday); bordered
   striped white-text table, 5 rows (Gym / Meditation / Weight Lifting /
   Crossfit / Aerobics × time × trainer) + green "Join Now" links; same rows
   every day.
7. Trainers — 3 cards: James Holmes / Kelly Green / Ben Smith; green offset
   shadow photo, "Aerobatics Trainer" role, copy; middle card `mt-5` offset
   on mobile.
8. Our Featured Services — 6 green cards: Weight Lifting / Meditation /
   Crossfit / Aerobics / Gym / Circling; white icon + title + copy; dots.
9. Contact Us — `#121212` bg, centered col-md-7; green "Contact Us" title +
   copy; form: First name + Last name row, Subject, Email, message textarea,
   "Send Message" full-width green button.
10. Footer — About Pumply / Links (Home, Meditation, Gym, Aerobatics) /
    Subscribe (rounded-0 input + green button); copyright bar with the
    mandatory Component Dock link (https://www.componentdock.com/) replacing
    the ColorLib credit.

## Tasks (implementation order)

1. Scaffold `apps/pumply` (copy the simplest existing app; package
   `@free-react-templates/pumply`; `vite.config.ts` with
   `injectUiSource()`).
2. `npm install` at repo root (registers workspace in package-lock.json;
   verify `grep -c "free-react-templates/pumply" package-lock.json`).
3. `index.css` `@theme` tokens: `--color-primary: #48d494`,
   `--color-primary-hover: #2fc781`, `--color-btn-text: #212529`,
   `--color-page: #000000`, `--color-contact: #121212`,
   `--color-hero-bg: #222222`, `--font-sans: 'Muli', sans-serif`.
4. `index.html`: Google Fonts `<link>` for Muli (300,400,700,900); document
   title "Pumply — Gym Template".
5. Components (in order): `Navbar` → `Hero` → `Counters` → `About`
   (Step Up Your Fitness) → `Classes` → `Schedule` → `Trainers` → `Services`
   → `Contact` → `Footer`; compose in `App.tsx`.
6. Data: counters (2,260 Members / 210 Daily Visitors / 887 Health Program /
   1,920 Heart Beat), class cards (5 × title + category), schedule rows
   (5 classes × 6 days, same rows), trainers (James Holmes / Kelly Green /
   Ben Smith), services (Weight Lifting, Meditation, Crossfit, Aerobics, Gym,
   Circling).
7. Icons: lucide-react for flaticon equivalents — Dumbbell (muscle), Bike
   (stationary-bike), Apple (banana), HeartPulse (heart), Scale (weight),
   Waves (circling), plus Menu for the hamburger.
8. Placeholders: picsum — hero dark workout scene (`pumply-hero` seed, keep
   it dark/gym-like), Step Up photo (`pumply-about`), class cards ×5
   (`pumply-class-N`), trainer photos ×3 (`pumply-trainer-N`, all distinct).
9. TDD per section; 100% coverage; verify with `scripts/verify-app.sh
pumply` (or `npm run verify:app`).
10. PR description: source (ColorLib Gymer, preview URL), tokens, dup-rows
    (mark lines 407/1853/2325 `[x]` after deploy), what differs (name,
    video→static photo, placeholders).

## Fidelity pitfalls to watch

- The page is DARK: body `#000`, NOT white. Every section sits on black.
- `btn-primary` text is DARK `#212529` on green `#48d494` (not white), hover
  flips to white on `#2fc781`.
- The hero background is a YouTube VIDEO — recreate as a static dark photo
  over `#222` (no video assets allowed; keep the mood).
- Schedule has SIX tabs but they are Mon/Tue/Wed/Thu/Fri/**Sunday** (no
  Saturday), and the table has NO thead — first row is Gym.
- The section titles (Classes, Schedule, Trainers, etc.) and copy sit in a
  `col-lg-6` block — NOT centered; content below spans full width.
- Two navs render duplicate links in the DOM (main menu + CTA) — use
  `getAllByRole` in tests if needed; the CONTACT item is a bordered span
  inside `li.cta`.
- The navbar is absolute over the hero (transparent); the sticky state is a
  white bar with black links — both states need coverage.
- Footer heading is "About Gymer" → "About Pumply" (no source name in app
  code), and the ColorLib credit is replaced by the Component Dock footer
  link per repo conventions.
- Trainer middle card has `mt-5` offset; large-gutters adds negative margins.
- Owl carousels have hidden navs and only dots; implement autoplay/loop
  matching the reference (Classes + Services).

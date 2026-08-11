# Template: Mission (Nonprofit / Charity)

## Purpose

Mission is a single-page nonprofit / charity website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Nonprofit" free template (source:
https://colorlib.com/wp/template/nonprofit/), built under a DIFFERENT name
(**Mission** — a mission-driven nonprofit word per the monorepo naming
mandate — never reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a warm, serious charity site: a transparent header over a
full-height photo hero (children photo with a deep-red treatment, serif
display headline + red solid CTA), an "Upcoming Cause" section whose white
panel overlaps the hero (cause title, Target/Raised amount boxes, photo with a
60% progress bar and circular % badge), a light-pink (`#FFF5F5`) About section
with a red stat badge over the photo, a 3-card services row (Pure Food &
Water / Medicine / Education), a Help slider of cause cards (Target/Raised +
Donate Now), a 4-person volunteers grid with hover social overlays, a red
"Become a Volunteer" CTA band on a photo background, and a dark-maroon
(`#450000`) footer with address/Navigation/Newsletter columns. Mission
recreates that structure 1:1 with matching layout, colors, typography, and
content kinds (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Nonprofit" is FORBIDDEN as the app
> name. **Mission** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-11). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Nonprofit". Listed in TEMPLATES.md under **Bootstrap
  (216)** (line 466). Free nonprofit/charity template.
- **Live preview DOM — REACHABLE (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/nonprofit/` returned HTTP 200 (25.7KB
  HTML). Stylesheets: `css/bootstrap.min.css`, `css/owl.carousel.min.css`,
  `css/magnific-popup.css`, `css/font-awesome.min.css`, `css/themify-icons.css`,
  `css/nice-select.css`, `css/flaticon.css`, `css/animate.css`,
  `css/slicknav.css`, `css/style.css` (55.8KB — token source),
  `css/responsive.css`. Structure, copy, and tokens below are from the live
  DOM + `style.css`. Screenshot (`nonprofit-free-template.jpg`, 1200×946,
  browser-verified 2026-08-11) confirms the aesthetic: hero photo of children
  heavily tinted deep red, white serif headline, red solid CTA, ghost white
  header CTA, diagonal hero-bottom edge into white content.
- **Visual design (screenshot + live DOM):** deep-red/maroon brand palette on
  a light theme. Transparent header (white nav text) over the hero photo; the
  hero carries a red overlay, big white serif H1, white sub-copy, and a solid
  `#A70000` "Join Us Today" button. Content sections are white / `#FFF5F5`
  (gray-bg); headings are `#450000` dark maroon in Playfair Display; kickers
  are small uppercase-ish `#A70000` spans with 2px letter-spacing; the
  volunteers CTA band is a solid `#A70000` block on a photo backdrop; the
  footer is solid `#450000` with gray `#BABABA`/`#B2B2B2` links.
- **Section order (1:1 from live DOM):**
  1. **Header** (`.header-area`, absolute/transparent over the hero; logo
     left, nav center, ghost CTA right) — logo "Non-Profit" with a
     leaf/heart-style mark; nav links **Home, About, Causes, Impact, Blog ▾
     [Blog, Single Blog], Pages ▾ [Causes Details, Elements], Contact**
     (white 16px Roboto, hover `#A70000`); right: ghost "Donate Now" button
     (`.donate_now a`: transparent, 1px white border, white text, padding
     14px 44px). Mobile: hamburger (slicknav in original; recreate with a
     toggleable menu, `aria-expanded`).
  2. **Hero** (`.slider_area.slider_bg_1`, height 1000px, cover photo
     `img/banner/1.png`) — `.slider_text`: H3 white, Playfair Display 900,
     80px/90px, "Support a Causes You Care About" [sic — paraphrase to
     "Support a Cause You Care About"]; paragraph 20px/32px white ("At Charity
     United we believe that all children in the world have the right to be
     cared for and the right to be protected" — paraphrase, same kind of
     content); CTA `.boxed-btn2` (solid `#A70000`, white, 17px 50px,
     capitalize) "Join Us Today", hover → white bg. Single slide observed in
     the live DOM; a simple non-rotating hero (or a 1–2 slide rotation) is
     faithful.
  3. **Upcoming Cause** (`.causes_area`, white bg, `margin-top: -130px`
     overlapping the hero, `padding-bottom: 115px`) — left `.causes_info`:
     kicker span "Upcoming Cause" (`#A70000`, 14px, letter-spacing 2px) + H3
     (Playfair Display, 46px/56px, `#450000`, weight 400) "Support Nahid for
     His pneumonia treatment"; `.target_rais_area` with 2 `.single_raise`
     boxes (label span 14px `#919191` above amount): "Target :" → h4
     **$2783**, "Raised :" → h4 **$1530** (h4: `#A70000` on `#FAF0F0`,
     Roboto 20px, padding 12px 26px); "Donate Now" link (`.boxed_btn3`:
     solid `#A70000`, white 20px, padding 9px 26px; hover → `#FAF0F0` bg +
     `#A70000` text). Right `.causes_thumb`: cause photo (desaturated in
     original) + `.custom_progress_bar`: 10px track (transparent), fill
     `.progress-bar` `#A70000` width **60%** (aria `aria-valuenow="60"`), and
     `.value_progress` — 60px circle `#A70000`, white bold "60%" label at the
     bar's right end.
  4. **About** (`.about_area.gray-bg` = `#FFF5F5`, padding 120px 0) — left
     `.about_thumb`: photo with centered `.served_over` badge (solid
     `#A70000`, padding 36px 32px, centered overlay): span 16px white caption
     - h3 46px white Roboto stat ("356728" in original — use an equivalent
       seeded stat, e.g. "42,113"); right `.about_right` (padding-left 37px):
       kicker "About Us" + H3 (Playfair 46px/56px `#450000`) "We've funded
       42,113 water projects for 9.6 million people around the world." +
       paragraph(s) `#4D4D4D`.
  5. **Services** (`.servce_area`) — centered `.section_title` (mb-60):
     kicker "We Work For" + H3 "We Serve For Peoples"; 3 `.single_serve`
     cards (padding 0 30px): **Pure Food & Water**, **Medicine**,
     **Education** — `.serve_icon` 98px circle `#FAF0F0` bg, 45px icon in
     `#A70000`, border-radius 50%, hover transition; card h3 24px `#450000`
     (margin-top 24px, margin-bottom 13px) + short paragraph.
  6. **Help** (`.help_area.gray-bg`, padding 120px 0) — left `.help_info`:
     kicker "Help Them" + H3 "They Needs your Help" [sic — paraphrase to
     "They Need Your Help"]; right `.help_slider_active.owl-carousel` with
     `.single_help_wrap` slides (2+): `.thumb` photo, `.help_content` h4
     cause title ("Help Yeati to continue her Primary Education"), and
     `.donate_amount` with 2 `.single_amount` blocks (margin-right 45px):
     span "Target :" + h4 $2783, span "Raised :" + h4 $1530; "Donate Now"
     link (`.boxed_btn3`). Carousel arrows/dots in original; recreate with a
     simple slide rotation + controls (`aria-live` per repo conventions).
  7. **Volunteers** (`.volunteers_area`) — centered `.section_title`
     (original reuses "We Work For / We Serve For Peoples"); 4
     `.single_volunteer` cards (col-xl-3 / col-md-6): `.thumb` photo with
     `.social_links` overlay sliding up on hover (translateY 0%;
     `.social_links ul li a`: white 20px icons), `.author_name` centered
     below (name h4 + role span): **Macau Wilium, Anila Miller, Rona Dana,
     Ledo Jonson** (paraphrase names as desired).
  8. **Become a Volunteer** (`.become_volunter.volunter_bg_1`, padding
     185px 0, cover photo `img/volunteers/bg.png`) — centered `.volunter_text`
     (solid `#A70000` block, padding 68px 95px): H3 46px white "Become a
     Volunteer", p 16px/28px `#E5E5E5` ("Your little help can change someone's
     life" style), buttons `.boxed-btn4` (transparent, 1px solid `#A70000`,
     `#A70000` text, 12px 44px, capitalize; hover → fill `#A70000` white):
     "Join With Us" + "Become a Donner" [sic → "Become a Donor"].
  9. **Footer** (`.footer`, bg `#450000`) — `.footer_top` (padding 145px 0
     129px), 4-col grid: (a) About/address widget (col-xl-3): contact lines
     "200, A-block, Green road, USA" / "+10 367 267 2678" /
     "contact@nonprofit.com" + `.socail_links` (social icons); (b)
     **Navigation** (col-xl-3): Home, Rooms, About, News (16px `#BABABA`,
     line-height 42px); (c) narrow col-xl-2 widget (sparse in live DOM —
     recreate as quick links or omit per judgment); (d) **Newsletter**
     (col-xl-4): H3, "Subscribe newsletter to get updates", form with email
     input + "Sign Up" button. `.copy-right_text` bar: "Copyright © All
     rights reserved | This template is made with ❤ by ColorLib" → paraphrase
     as "© <year> Mission. All rights reserved."
- **JS behaviors (original):** transparent header (white text) over the hero;
  slicknav mobile menu; owl-carousel on the Help slider (autoplay + arrows);
  progress bar animates in (wow slideInLeft); volunteer social overlay slides
  up on hover; hover color sweeps on buttons. Recreate: sticky/absolute
  header per the reference (white nav text over the hero), simple React state
  slide rotation for Help, CSS hover transitions, `aria-expanded` mobile
  toggle. Donate forms/links are presentational (no backend).
- **Typos in the original to paraphrase:** "Support a Causes" → "Support a
  Cause", "They Needs your Help" → "They Need Your Help", "Become a Donner" →
  "Become a Donor".

## Design tokens (verified from live stylesheet `css/style.css`)

- **Brand colors:**
  - `#A70000` — deep red: primary CTA bg (`.boxed-btn2`, `.boxed_btn3`),
    kicker spans, progress-bar fill, value badge, served_over badge,
    volunter_text band, icon color, nav hover, `.boxed-btn4` border/hover.
  - `#450000` — dark maroon: section headings, footer background, hero ghost
    button text/border (`.boxed-btn` variant on inner pages).
  - `#FAF0F0` — soft red-tinted off-white: `.single_raise` amount box bg,
    `.serve_icon` circle bg, `.boxed_btn3` hover bg.
  - `#FFF5F5` — light pink-gray: `.gray-bg` section backgrounds (About,
    Help).
  - `#4D4D4D` — body copy; `#919191` — small labels (Target/Raised,
    footer copyright); `#BABABA` / `#B2B2B2` — footer links / footer text;
    `#E5E5E5` — volunter_text paragraph.
- **Fonts:** headings **Playfair Display** (serif; H3 46px/56px weight 400;
  hero 80px weight 900; `#450000` except white on dark), body **Roboto**
  (nav 16px, amounts 20px, paragraphs 16px) — loaded via Google Fonts
  `<link>` in `index.html`.
- **Buttons:**
  - `.boxed-btn2` (hero CTA) — solid `#A70000`, white text, no radius
    (square), padding 17px 50px 16px, 16px Roboto, capitalize; hover → white
    bg.
  - `.boxed_btn3` (Donate Now) — solid `#A70000`, white 20px, padding
    9px 26px; hover → `#FAF0F0` bg + `#A70000` text.
  - `.boxed-btn4` (volunteer CTA on red band) — transparent, 1px solid
    `#A70000` border, `#A70000` text, padding 12px 44px, 16px, capitalize;
    hover → solid `#A70000` + white.
  - Header `.donate_now a` — transparent, 1px white border, white text,
    padding 14px 44px, capitalize.
- **Section titles:** `.section_title span` kicker — `#A70000`, 14px, weight
  400, letter-spacing 2px, block, margin-bottom 8px; `.section_title h3` —
  46px/56px, weight 400, `#450000`, Playfair Display.
- **Section backgrounds:** white content sections; `.gray-bg` `#FFF5F5`
  (About, Help); hero photo backdrop (`banner/1.png`) with red overlay
  treatment; volunteer CTA photo backdrop (`volunteers/bg.png`) under a solid
  `#A70000` `.volunter_text` block; footer solid `#450000`.
- **Spacing rhythm:** hero height 1000px; causes_area `margin-top: -130px`
  (panel overlaps hero) + `padding-bottom: 115px`; about/help padding
  120px 0; become_volunter padding 185px 0; footer_top padding
  145px 0 129px; `.volunter_text` padding 68px 95px; card title
  margin-top 24px / margin-bottom 13px.
- **Radii:** buttons square (0); `.serve_icon` circle 50%; `.value_progress`
  60px circle; progress track square.
- **Progress bar:** track height 10px, transparent; fill `#A70000` (width
  60% in the Upcoming Cause card); 60px circular `#A70000` badge with bold
  white "60%" at the bar's right end.
- **Placeholder images (never copy ColorLib assets):**
  - hero → `https://picsum.photos/seed/mission-hero/1920/1000` (children-style
    photo; red overlay via CSS)
  - causes thumb (Upcoming Cause) → `https://picsum.photos/seed/mission-cause/600/500`
  - about photo → `https://picsum.photos/seed/mission-about/600/500`
  - help slider slides → `https://picsum.photos/seed/mission-help-<n>/600/500` (n 1..2)
  - volunteers → `https://picsum.photos/seed/mission-vol-<n>/400/450` (n 1..4)
  - volunteer CTA backdrop → `https://picsum.photos/seed/mission-cta-bg/1920/600`
- **Icons:** lucide-react — `HeartHandshake`, `Droplets` (water), `Pill` /
  `Stethoscope` (medicine), `GraduationCap` (education), `Users`,
  `ArrowRight`, social icons (Facebook, Twitter/X, Instagram, etc.), logo mark
  (Heart/Leaf hybrid).

## Requirements

### Requirement: Transparent header with nav and ghost Donate Now button

The system SHALL render a transparent header (white nav text, no background)
at the top of the page: logo left, nav links centered, and a ghost
(white-outlined) "Donate Now" button right.

#### Scenario: Header layout

- **GIVEN** the Mission page is rendered
- **WHEN** the header is displayed
- **THEN** the header SHALL be a flex row with the logo on the left, the nav
  centered, and the "Donate Now" ghost button on the right
- **AND** the header SHALL be transparent (absolute over the hero) with white
  nav text, matching the reference

#### Scenario: Header content

- **GIVEN** the header is displayed
- **WHEN** the user inspects the nav
- **THEN** the nav SHALL show links: Home, About, Causes, Impact, Blog (with
  a dropdown: Blog, Single Blog), Pages (with a dropdown: Causes Details,
  Elements), Contact
- **AND** the "Donate Now" button SHALL be a ghost button (transparent bg,
  1px white border, white text) with `aria-label` and a working link

#### Scenario: Mobile nav

- **GIVEN** the Mission page is rendered on a viewport ≤768px
- **WHEN** the header is displayed
- **THEN** the nav links SHALL collapse into a toggleable menu button with
  `aria-expanded` (per repo accessibility conventions)

### Requirement: Full-height photo hero

The system SHALL render a full-height hero: cover photo backdrop with a red
overlay, a large white serif headline, a sub-paragraph, and a solid red CTA
button.

#### Scenario: Hero content

- **GIVEN** the hero is displayed
- **WHEN** the page loads
- **THEN** the hero SHALL show an H1 in Playfair Display (white, ~80px
  desktop, weight 900) e.g. "Support a Cause You Care About" (paraphrase of
  the original's "Support a Causes You Care About" typo), a white Roboto
  paragraph ("At Mission we believe every child has the right to be cared for
  and protected" style), and a solid `#A70000` "Join Us Today" button
  (`.boxed-btn2` shape: square, 17px 50px padding)
- **AND** the backdrop SHALL be a seeded placeholder photo with a deep-red
  overlay treatment, height ~1000px desktop (responsive on mobile)

### Requirement: Upcoming Cause panel with progress bar

The system SHALL render an "Upcoming Cause" section whose white panel overlaps
the hero (negative top margin): kicker + cause title, Target/Raised amount
boxes, a cause photo with a 60% progress bar and circular percentage badge,
and a Donate Now button.

#### Scenario: Cause panel content

- **GIVEN** the Upcoming Cause section is displayed
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the red kicker "Upcoming Cause" and an H3
  cause title (e.g. "Support Nahid for his pneumonia treatment")
- **AND** two amount boxes SHALL show "Target :" $2783 and "Raised :" $1530
  (red `#A70000` amount on `#FAF0F0` background, 12px 26px padding)
- **AND** a "Donate Now" button SHALL be present (solid `#A70000`, 20px,
  padding 9px 26px)
- **AND** the section SHALL overlap the hero above it with a negative top
  margin (`-mt-32`-style) per the reference

#### Scenario: Progress bar

- **GIVEN** the cause photo is displayed
- **WHEN** the user views the section
- **THEN** a 10px-tall progress bar SHALL show a `#A70000` fill at 60% with
  `aria-valuenow="60"` semantics
- **AND** a 60px circular `#A70000` badge SHALL display the bold white "60%"
  label at the bar's right end

### Requirement: About section with stat badge

The system SHALL render an About section on a `#FFF5F5` background: photo with
a centered red stat badge on the left, kicker + heading + paragraphs on the
right.

#### Scenario: About content

- **GIVEN** the About section is displayed
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the red kicker "About Us" and an H3
  (Playfair, `#450000`) e.g. "We've funded 42,113 water projects for 9.6
  million people around the world"
- **AND** a photo SHALL sit on the left with a centered solid `#A70000` badge
  (padding 36px 32px) showing a white span caption + a large white stat
  number
- **AND** paragraph text SHALL be `#4D4D4D` on the right

### Requirement: Services section

The system SHALL render a centered "We Serve For Peoples" section with 3
service cards: Pure Food & Water, Medicine, Education — each with a circular
icon and a short description.

#### Scenario: Service cards

- **GIVEN** the services section is displayed
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the red kicker "We Work For" and H3 "We
  Serve For Peoples"
- **AND** exactly 3 cards SHALL be present, each with a 98px circular
  `#FAF0F0` icon container (45px lucide icon in `#A70000`), an h3 title
  (24px, `#450000`), and a short paragraph
- **AND** the cards SHALL be in a responsive 1-col mobile / 3-col desktop
  grid

### Requirement: Help slider with cause cards

The system SHALL render a "They Need Your Help" section on a `#FFF5F5`
background: kicker + heading on the left, a rotating set of cause cards
(photo, title, Target/Raised amounts, Donate Now link) on the right.

#### Scenario: Help section content

- **GIVEN** the Help section is displayed
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the red kicker "Help Them" and H3 "They
  Need Your Help" (paraphrase of the original's typo "They Needs your Help")
- **AND** a slider SHALL contain at least 2 cause cards, each with a seeded
  photo, a cause title (e.g. "Help Yeati continue her primary education"),
  "Target :" / "Raised :" amount blocks ($2783 / $1530), and a "Donate Now"
  link

#### Scenario: Slider rotation

- **GIVEN** the Help slider has at least 2 slides
- **WHEN** the page loads
- **THEN** slides SHALL rotate automatically (interval) with prev/next
  controls and dots (or an accessible equivalent)
- **AND** the rotation SHALL be accessible (`aria-live` or equivalent per
  repo conventions)

### Requirement: Volunteers grid

The system SHALL render a centered volunteers section with 4 volunteer cards:
photo, social links overlay on hover, and a centered name/role caption.

#### Scenario: Volunteer cards

- **GIVEN** the volunteers section is displayed
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show a centered section title (kicker "We Work
  For" + H3 "We Serve For Peoples" — the original reuses the services title)
- **AND** 4 volunteer cards SHALL be present (1-col mobile / 4-col desktop),
  each with a seeded photo, name and role below (centered), and social icons
  (white, 20px) that slide up over the photo on hover/focus
- **AND** the overlay SHALL be keyboard-focusable (focus-within reveals it)

### Requirement: Become a Volunteer CTA band

The system SHALL render a "Become a Volunteer" CTA band: photo backdrop under
a solid `#A70000` centered block with heading, paragraph, and two outline
buttons.

#### Scenario: CTA band content

- **GIVEN** the volunteer CTA band is displayed
- **WHEN** the user scrolls to it
- **THEN** a solid `#A70000` centered block SHALL show H3 "Become a
  Volunteer" (46px, white), a short white-ish paragraph (`#E5E5E5`), and two
  outline buttons: "Join With Us" and "Become a Donor" (paraphrase of the
  original's "Become a Donner")
- **AND** the buttons SHALL be `.boxed-btn4`-shaped: transparent, 1px solid
  `#A70000` border, `#A70000` text, padding 12px 44px, hover → solid
  `#A70000` fill with white text

### Requirement: Footer

The system SHALL render a dark-maroon (`#450000`) footer with address/social,
Navigation, and Newsletter columns, plus a copyright bar.

#### Scenario: Footer content

- **GIVEN** the Mission page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL be present with: an address/about column (contact
  lines + social icons), a Navigation column (Home, Rooms, About, News), and
  a Newsletter column ("Subscribe newsletter to get updates" + email input +
  "Sign Up" button)
- **AND** a copyright bar SHALL sit at the bottom ("© <year> Mission. All
  rights reserved." style)

#### Scenario: Newsletter form

- **GIVEN** the Newsletter form is displayed
- **WHEN** the user submits an empty/invalid email
- **THEN** inline validation SHALL mark the field (presentational — no
  backend call)

### Requirement: Responsive behavior

The system SHALL adapt hero text size, section paddings, grids, and the
header for mobile viewports.

#### Scenario: Mobile layout (≤768px)

- **GIVEN** the Mission page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the hero H1 SHALL scale down (e.g. `text-4xl`/`text-5xl`) and
  remain readable over the backdrop
- **AND** section paddings SHALL reduce, grids SHALL collapse to one column,
  and the nav SHALL collapse into the mobile toggle

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-mission`
- [ ] `scripts/verify-app.sh mission` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with reference): transparent header (logo + nav + ghost Donate Now) → full-height photo hero (red overlay, serif H1 +
      Join Us Today) → Upcoming Cause panel overlapping the hero (Target/
      Raised boxes, photo + 60% progress bar + circular badge, Donate Now) →
      About (`#FFF5F5`, stat badge over photo) → Services (3 cards) → Help
      slider (cause cards w/ Target/Raised + Donate Now) → Volunteers (4
      cards, hover social overlay) → Become a Volunteer CTA band (red block + 2 outline buttons) → Footer (`#450000`: address/Navigation/
      Newsletter + copyright)
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#A70000` brand,
      `#450000` headings/footer, `#FAF0F0` amount-box/icon-circle,
      `#FFF5F5` gray-bg sections, `#4D4D4D` body, `#919191` labels;
      square buttons, 50% icon circles, 60px progress badge
- [ ] Fonts: Playfair Display (headings) + Roboto (body) via Google Fonts
      `<link>` in `index.html`, title "Mission — Nonprofit Template"
- [ ] Photos = seeded picsum (`mission-hero`, `mission-cause`,
      `mission-about`, `mission-help-<n>`, `mission-vol-<n>`,
      `mission-cta-bg`); icons from lucide-react — no copied assets
- [ ] Donate/newsletter forms presentational with inline validation; no
      backend calls
- [ ] Mobile nav accessible (`aria-expanded` on toggle); Help slider
      accessible (controls + `aria-live`)
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time (mark the "Nonprofit" row, line 466 —
      Bootstrap category)

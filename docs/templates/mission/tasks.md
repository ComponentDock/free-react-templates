# Mission (ColorLib Nonprofit) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Mission** (NEW name —
> the ColorLib source keeps its name "Nonprofit"). Implementation ships on
> `feat/template-mission` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Nonprofit" — free nonprofit/charity website template
  (source: https://colorlib.com/wp/template/nonprofit/). TEMPLATES.md row:
  line 466, **Bootstrap (216)** category.
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-11):**
  `https://preview.colorlib.com/theme/nonprofit/` (HTTP 200, 25.7KB HTML) +
  stylesheet `css/style.css` (55.8KB). Screenshot
  (`nonprofit-free-template.jpg`, 1200×946) browser-verified 2026-08-11.
- **Structure observed (1:1):** transparent header (logo left, nav center —
  Home / About / Causes / Impact / Blog ▾ [Blog, Single Blog] / Pages ▾
  [Causes Details, Elements] / Contact; ghost white-outlined "Donate Now"
  right) → full-height hero (`.slider_bg_1`, 1000px, photo of children with
  deep-red overlay; Playfair 900 80px H1 "Support a Causes You Care About"
  [sic]; 20px white p; solid `#A70000` "Join Us Today" `.boxed-btn2`) →
  **Upcoming Cause** panel (`.causes_area`, `margin-top:-130px` overlap onto
  hero; kicker "Upcoming Cause" + H3 "Support Nahid for His pneumonia
  treatment"; 2 `.single_raise` boxes — span label 14px `#919191` +
  amount h4 `#A70000` on `#FAF0F0` 12px/26px ($2783 / $1530); "Donate Now"
  `.boxed_btn3`; right: photo + 10px progress bar fill `#A70000` 60% with
  60px circular `#A70000` badge "60%") → **About** (`.gray-bg` `#FFF5F5`,
  padding 120px 0; left photo + centered `.served_over` `#A70000` badge
  (span + 46px white stat "356728"); right kicker "About Us" + H3 "We've
  funded 42,113 water projects for 9.6 million people around the world." +
  `#4D4D4D` paragraphs) → **Services** (centered kicker "We Work For" + H3
  "We Serve For Peoples"; 3 `.single_serve` cards — 98px circle `#FAF0F0`
  icon bg, 45px icon `#A70000`: Pure Food & Water / Medicine / Education) →
  **Help** (`.gray-bg`; left kicker "Help Them" + H3 "They Needs your Help"
  [sic]; right `.help_slider_active` owl-carousel of `.single_help_wrap`
  cards: photo, h4 cause title, Target/Raised amounts, Donate Now) →
  **Volunteers** (centered title — original REUSES "We Work For / We Serve
  For Peoples"; 4 cards: Macau Wilium / Anila Miller / Rona Dana / Ledo
  Jonson; social overlay slides up on hover) → **Become a Volunteer**
  (`.volunter_bg_1` photo backdrop, padding 185px 0; solid `#A70000`
  `.volunter_text` block 68px/95px: H3 white "Become a Volunteer", p
  `#E5E5E5`, 2 `.boxed-btn4` outline buttons "Join With Us" + "Become a
  Donner" [sic]) → **Footer** (`#450000`, footer_top 145px 0 129px:
  address/contact widget + social icons, Navigation (Home, Rooms, About,
  News), narrow col-xl-2 widget (sparse in DOM — optional), Newsletter
  ("Subscribe newsletter to get updates" + input + "Sign Up"); copyright bar
  "Copyright © All rights reserved … by ColorLib").
- **Tokens:** brand `#A70000` (CTAs, kickers, progress fill, badges, icon
  color, nav hover, volunteer band); headings/footer `#450000`; `#FAF0F0`
  amount boxes + icon circles; `#FFF5F5` gray-bg sections; body `#4D4D4D`;
  labels `#919191`; footer links `#BABABA`/`#B2B2B2`; `#E5E5E5` on the red
  band. Fonts: Playfair Display (headings, hero 900 / section 400) + Roboto
  (body/buttons). Buttons square (radius 0); icon circles 50%; progress badge
  60px circle.
- **Typos to paraphrase:** "Support a Causes" → "Support a Cause", "They
  Needs your Help" → "They Need Your Help", "Become a Donner" → "Become a
  Donor". Volunteer names and stats are placeholder copy anyway.
- **Placeholders:** seeded picsum — `mission-hero` (1920/1000),
  `mission-cause` (600/500), `mission-about` (600/500), `mission-help-<n>`
  (n 1..2, 600/500), `mission-vol-<n>` (n 1..4, 400/450), `mission-cta-bg`
  (1920/600). Red hero overlay via CSS (e.g. red-tinted gradient/overlay
  layer).
- **Icons:** lucide-react — `HeartHandshake`, `Droplets` (Pure Food &
  Water), `Stethoscope`/`Pill` (Medicine), `GraduationCap` (Education),
  `Users`, `ArrowRight`, social icons (Facebook, Twitter/X, Instagram,
  LinkedIn).

## Implementation tasks

1. **Scaffold** — `apps/mission` from the simplest existing app; rename
   package to `@free-react-templates/mission`; register in root
   `package.json` workspaces + lockfile (implementer handles lockfile, prep
   never touches it).
2. **Theme tokens** — add `#a70000` / `#450000` / `#faf0f0` / `#fff5f5` /
   `#4d4d4d` / `#919191` to `@theme`; Playfair Display + Roboto `<link>` in
   `index.html`.
3. **Components** (per section, TDD — tests first):
   - `Header` — transparent over hero, logo + nav (Blog/Pages dropdowns) +
     ghost "Donate Now", mobile toggle (`aria-expanded`).
   - `Hero` — 1000px photo backdrop + red overlay, serif H1, sub-copy,
     solid red "Join Us Today".
   - `UpcomingCause` — overlapping panel, kicker/H3, Target/Raised boxes,
     photo + 60% progress bar + circular badge, Donate Now.
   - `About` — `#FFF5F5` bg, photo + red stat badge, kicker/H3/paragraphs.
   - `Services` — 3 cards (Pure Food & Water / Medicine / Education) with
     98px circular icons.
   - `HelpSlider` — left heading, right rotating cause cards (Target/Raised
     - Donate Now), controls + `aria-live`.
   - `Volunteers` — 4 cards, hover/focus social overlay, centered names.
   - `VolunteerCta` — red block on photo backdrop, H3 + 2 outline buttons.
   - `Footer` — `#450000`, address/social, Navigation, Newsletter form
     (validation, presentational), copyright bar.
4. **Compose** `App`/page in reference order; wire the negative-margin
   overlap for the causes panel.
5. **Verify** — `scripts/verify-app.sh mission` (typecheck + lint + vitest
   100% coverage + build), then PR → immediate squash merge per pipeline.
6. **Ship bookkeeping** — mark Nonprofit `[~]`→`[x]` (line 466) + surge URL +
   `npm run readme:status`; PR description must list source template,
   preview URL, tokens, typo paraphrases, placeholder images.

# Template: Grithaus (Health & Fitness / Gym)

## Purpose

Grithaus is a modern fitness-gym landing page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free
"Fitnessgym" template design, built under a DIFFERENT name (**Grithaus** —
"grit" + "haus", a boutique strength-gym brand; single lowercase word,
kebab-case-safe, no collision with `apps/`, `openspec/specs/template-*` or
`docs/templates/`; verified with `grep -ril grithaus` = 0 hits repo-wide)
per the monorepo naming mandate (never reuse the ColorLib source name),
with the monorepo stack: Vite (latest) · React 19 · Tailwind CSS 4 ·
TypeScript (strict).

- **Source slug**: `fitnessgym`
- **ColorLib page**: https://colorlib.com/wp/template/fitnessgym/
- **Live preview**: https://preview.colorlib.com/theme/fitnessgym/
  (HTTP 200, ~38 KB HTML + `style.css` ~41 KB — both fetched and parsed;
  preview slug matches the TEMPLATES.md slug, no alias)
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/fitnessgym-free-template.jpg
  (AVIF, top-fold browser mock — decoded and inspected)
- **Package**: `@free-react-templates/grithaus`
- **Deploy target**: `grithaus.free.componentdock.com`

### Why this row needs a fresh build (prep-stream context)

`grep -c 'wp/template/fitnessgym/' TEMPLATES.md` = **2** (lines 397 and
1846). Both rows are currently marked `[x]` and credit the `vigor` app, but
`openspec/specs/template-vigor/spec.md` names ColorLib **Endurance** as its
source — `fitnessgym` is therefore a false `[x]` (bucket 2,
APP-WRONG-DESIGN, in `docs/row-multiplicity.md`; measured copy evidence
`row-excl / spec-excl` = `0 / 33`). The prep stream writes the spec only:
the implementer re-opens BOTH rows `[x]` → `[ ]` on its
`feat/template-grithaus` branch before building, and marks both `[x]` with
`https://grithaus.free.componentdock.com` after merge. Do not touch `vigor`.

## Design reference (replication findings)

- **Original:** ColorLib "Fitnessgym" — a single-page gym / fitness-club
  template. Page title: "Fitness Gym - A Modern Fitness Gym Template".
  Signature look: full-bleed dark athletic photography, a **lime-green →
  green gradient** brand accent, UPPERCASE 13px bold white nav over the
  hero, a gradient "Call: +34 586 778 8892" button in the header, a 3-slide
  full-height hero with a huge **light-weight (400) 100px** white headline,
  outlined green buttons, an overlapping **4-photo team collage** with dark
  name plates, a fixed-attachment parallax pricing band, and a dark
  footer over a photo.
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/fitnessgym/`
  — Bootstrap 4 + classy-nav (nav) + owl.carousel (hero slider +
  footer testimonial slider) + wow.js/animate.css (fade-in) + font-awesome
  + magnific-popup. NOT Tailwind. Section order in the DOM:
  `header-area` → `hero-area` (3 `single-hero-slide`) → `fitness-adds-area`
  (2 promo banners) → `about-us-area` → `meet-the-experts-area` →
  `fitness-services-area` → `fitness-pricing-table-area` →
  `fitness-working-hours-area` (+ `our-newsletter-area` in the same row) →
  `footer-area`.
- **Screenshot note:** the TEMPLATES.md image is the top fold only, shown
  inside a browser chrome mock. Visible: dark gym photo (athlete from
  behind, blonde hair, black crop top) as the hero background with a dark
  wash; a white filled logo pill with a thin green glow at top-left;
  UPPERCASE white nav (HOME, PAGES ▾, MEGA MENU ▾, ABOUT US, NEWS, CONTACT)
  and a green-gradient "CALL: +34 586 778 8892" button at top-right;
  headline "Get fit & healthy." in a very light 100px white face; two-line
  white bold 14px sub-paragraph; a green-outlined "GET A MEMBERSHIP" button;
  numeric slider pagination "01. 02. 03." bottom-left (active index green);
  below the fold, two promo banners — a blue "25% Discount" block with a
  photo and a brick-wall photo with a green "Fitness Class" label.
  Everything below the fold is corroborated by the live DOM/CSS.
- **Copy:** all body copy in the preview is lorem ipsum. Paraphrase into
  real gym copy (memberships, trainers, classes, opening hours) while
  keeping the same _kind_ of content per block and the same headline
  skeleton (e.g. hero #1 headline stays the short punchy claim).

## Design tokens (from preview stylesheet `style.css`)

- **Fonts:** one family only — `"Open Sans", sans-serif` (Google Fonts
  import `Open+Sans:300,400,600,700,800`). Body 14px / line-height 2 /
  weight 400; `p` color `#838383`; headings `#101214`, weight 700,
  line-height 1.3. Hero h2 overrides to weight **400**.
- **Brand green (primary):** `#38b143` — section label text, buttons,
  service icon circles, price, footer social hover, working-hours hover,
  `::selection`-ish accents, service card hover title.
- **Brand lime (secondary / gradient start):** `#b6e358`; gradient-label
  variant `#b3e258`. Gradients in the source:
  `linear-gradient(to right, #b6e358, #38b143)` (buttons `.btn-3`,
  `.menu-btn`, service-icon hover) and
  `linear-gradient(to right, #b3e258, #39b143)` (section label text, via
  `background-clip: text`). Expose `--color-brand: #38b143`,
  `--color-lime: #b6e358`, `--color-ink: #101214`,
  `--color-body: #838383` in `@theme`.
- **Ink / dark:** `#101214` (headings, dark overlay bg, price-table hover
  button bg, team name plate bg); `#141414` (hero-adjacent dark accents).
- **Section overlay (dark sections):** `rgba(5, 11, 37, 0.85)` (`.bg-overlay
  ::after`) over a photo — used by the experts band, pricing band and
  footer.
- **Hero overlay:** `rgba(0, 0, 0, 0.3)` on each `single-hero-slide::after`.
- **Muted / borders:** `#838383` (body), `#bebebe` (footer testimonial
  quote), `#5c6077` (bottom copyright), `#eaeaea` (newsletter input
  border), `#f0f2f8` / `#eef3f6` (light card bg, inner pages), `#ffffff`.
- **Buttons (`.fitness-btn`):** `display: inline-block; min-width: 200px;
  height: 45px; border-radius: 10px; padding: 0 30px; font-size: 14px;
  font-weight: 700; text-transform: uppercase; line-height: 39px;
  border: 3px solid #38b143; color: #38b143` (outline variant, default) →
  hover/focus fills `#38b143` with white text. Variants:
  `.btn-2` filled green/white, hover `#101214` bg + border;
  `.btn-3` lime→green gradient, `#101214` text, no border, hover white
  text; `.menu-btn` (header CTA) gradient + `#101214` text, hover white;
  `.btn-white` white bg, hover green. Radius is a tight **10px** (not a
  pill) — keep it for every button.
- **Section rhythm:** `.section-padding-100-0` = `padding-top: 100px;
  padding-bottom: 0`; inner blocks carry `mb-100` (100px) instead of bottom
  padding. Section heading block = `h6` (14px UPPERCASE, gradient text,
  `margin-bottom: 0`) stacked over `h2` (36px, weight 600) — `.white`
  variant makes h2 white; block `margin-bottom: 60px`.
- **Hero:** `.single-hero-slide` full width, height **880px** desktop
  (650px / 600px / 550px at the table/phone breakpoints), background-image
  cover + `rgba(0,0,0,.3)` overlay, content vertically centred in a
  `col-lg-9`; h2 100px (48/36/30px responsive) weight 400 white; p 14px,
  weight 600, white, `margin-bottom: 40px`; owl dots replaced by numeric
  pagination bottom-left (active = green).
- **Header:** `.fitness-main-menu` 85px tall, transparent over the hero
  (nav links `#ffffff`, 13px, UPPERCASE, weight 700, `padding: 0 7px`,
  hover `#38b143`); on scroll the nav gains a `#101214` background. Wordmark
  is an image logo in a white pill; the header CTA is
  `.fitness-btn.menu-btn.ml-30` (gradient, 30px left margin).
- **Services:** 3-column grid (`col-12 col-sm-6 col-lg-4`), 6 items; each
  row = 77×77px green (`#38b143`) circle with a white line icon
  (`border-radius: 50%`, `margin-right: 20px`) beside a 20px `h4`, then a
  paragraph (`margin-top: 15px`); hover → icon becomes lime→green gradient
  with `box-shadow: 0 5px 30px rgba(0,0,0,.15)` and the `h4` turns
  `#38b143`.
- **Pricing:** band with `background-attachment: fixed` (parallax) + dark
  overlay; 3 white `single-price-table` cards (`col-12 col-md-6 col-lg-4`)
  each = top photo, `padding: 40px` content, price 36px weight 600 green
  with a 14px italic grey `/ Month` suffix, 22px `h5` title (30px vertical
  margin), 3 `price-data` bullets (8px green circle icon, 15px gap,
  `#838383` text), then an outline `Enroll Now` button.
- **Working hours:** 7-row list; each row flex space-between, 16px weight
  600 `#838383`, bottom border, hover green; Sunday value "Closed".
- **Newsletter:** inputs 55px tall, `3px solid #eaeaea`, radius 10px,
  `padding: 0 40px`, italic placeholder `#838383`, focus border
  `#38b143`; helper note 13px italic grey; white `Subscribe` button.
- **Footer:** photo + `rgba(5,11,37,.85)` overlay, 4 widgets (brand +
  blurb + 6 social links, testimonial slider, Classes links, Contact
  block); testimonial quote 13px italic `#bebebe`, author 13px weight 600
  green; bottom bar `padding: 40px 0`, centred 12px weight 600 `#5c6077`.
- **Shapes to preserve:** 10px-radius buttons, 77px icon circles, 10px
  radius inputs, overlapping absolutely-positioned team collage (4 photos
  at 40%/30%/30%/30% widths, staggered bottoms, name plates scaled 0.6 for
  the three smaller ones), fixed-attachment pricing band.

## Requirements

### Requirement: Navbar (transparent over hero)

The header SHALL be 85px tall and transparent over the hero, with a
wordmark pill on the left, UPPERCASE 13px/700 white nav links, and a
gradient call button on the right. Links: Home, Pages (dropdown: Home,
About Us, Services, News, Contact), Mega Menu (presentational), About Us,
News, Contact. On scroll past the hero the bar SHALL take a `#101214`
background. Below the desktop breakpoint the links SHALL collapse behind a
burger toggler into a slide-in panel.

#### Scenario: Desktop navbar

- **GIVEN** the Grithaus app is rendered at desktop width
- **WHEN** the page loads
- **THEN** the navbar SHALL show the Grithaus wordmark on the left
- **AND** SHALL show the links Home, Pages, Mega Menu, About Us, News, Contact in UPPERCASE white 13px bold
- **AND** SHALL show the call button "Call: +34 586 778 8892" with the lime→green gradient fill

#### Scenario: Pages dropdown

- **GIVEN** the desktop navbar is rendered
- **WHEN** the user activates "Pages"
- **THEN** a submenu SHALL open listing Home, About Us, Services, News, Contact
- **AND** activating it again SHALL close the submenu

#### Scenario: Scroll background

- **GIVEN** the page is scrolled down past the hero
- **WHEN** the user inspects the header
- **THEN** the header SHALL render on the dark `#101214` background
- **AND** SHALL return to transparent when scrolled back to the top

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrower than the desktop breakpoint
- **WHEN** the user activates the burger toggler
- **THEN** a mobile menu panel SHALL open with `aria-expanded` reflecting the state
- **AND** activating the toggler again SHALL close it

### Requirement: Hero slider (3 slides)

The hero SHALL be a full-height slider of three slides (880px desktop,
650/600/550px at smaller breakpoints), each a background photo with a
`rgba(0,0,0,0.3)` overlay, holding an h2 (100px, weight 400, white), a
14px/600 white paragraph, and an outlined green button. Slide buttons:
"Get a membership" (slide 1), "Read More" (slides 2 and 3). Numeric
pagination SHALL render bottom-left and switch slides; a 6-second autoplay
is optional but must not break tests.

#### Scenario: Slide content

- **GIVEN** the hero slider is rendered
- **WHEN** the page loads
- **THEN** the active slide SHALL show the h2 "Get fit & healthy."
- **AND** SHALL show a supporting paragraph and a green-outlined "Get a membership" button
- **AND** the h2 SHALL render at 100px with weight 400 in white

#### Scenario: Slide navigation

- **GIVEN** the hero slider is showing slide 1
- **WHEN** the user selects pagination "02"
- **THEN** slide 2 SHALL become active and show "Long life Fitness."
- **AND** slide 3 SHALL show "Fitness wonder."

### Requirement: Promo banners

Directly under the hero a two-column strip SHALL render two promo banners:
a blue "25% Discount" offer card and a photo card badged "Fitness Class".
Both SHALL be links (href preserved as `#` anchors) and stack on mobile.

#### Scenario: Banner pair

- **GIVEN** the promo strip is rendered
- **WHEN** the user scrolls below the hero
- **THEN** two banners SHALL render side by side on desktop
- **AND** the first SHALL advertise "25% Discount" and the second "Fitness Class"

### Requirement: About section

A section SHALL open with the label "Grithaus" (14px UPPERCASE gradient
text) over the h2 "Why choose Grithaus?" (36px/600), then a
`col-lg-8` block holding two side-by-side paragraphs, a button pair
("Get a membership" outline + "Find out more" filled `btn-2`), and a
`col-lg-4` portrait image pulled up by 50px.

#### Scenario: About content

- **GIVEN** the about section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the label "Grithaus" and the h2 "Why choose Grithaus?"
- **AND** SHALL show two paragraphs of body copy
- **AND** SHALL show the buttons "Get a membership" and "Find out more"
- **AND** SHALL show a portrait image in the right column

### Requirement: Experts band (4-photo collage)

A dark band (photo background + `rgba(5,11,37,0.85)` overlay) SHALL show
the white heading "Ask the experts" with the "Grithaus" label, an
italic white paragraph in a `col-lg-3` column, and a `col-lg-9` collage of
four absolutely-positioned trainer photos (40%/30%/30%/30% widths, bottom
offsets −50/−60/−100px, 500px tall, `overflow: hidden`) each with a dark
`#101214` name plate (name 22px UPPERCASE italic white, role 14px
UPPERCASE italic green). Trainers: Julia Smith, Mick Hamilton, Jack Black,
Criss James — all "Personal trainer" except Criss James ("Fitness trainer").

#### Scenario: Collage and plates

- **GIVEN** the experts band is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the h2 "Ask the experts" in white
- **AND** SHALL render four trainer photos in an overlapping collage
- **AND** each photo SHALL carry a dark name plate with a name and a role
- **AND** the roles SHALL read "Personal trainer" ×3 and "Fitness trainer" ×1

### Requirement: Services (6-part grid)

A 3-column grid SHALL render six service items, each a 77px green circle
icon beside a 20px `h4` title with a paragraph underneath. Titles: Business
School, Fitness Pro, Yoga Courses, Diet Specialists, Swimming Pool,
Spinning Class. On hover the circle icon SHALL take the lime→green gradient
plus a soft shadow and the title SHALL turn `#38b143`.

#### Scenario: Six services

- **GIVEN** the services section is rendered
- **WHEN** the user scrolls to it
- **THEN** six service items SHALL render in a 3-column grid (2 rows)
- **AND** each item SHALL show a 77px circular icon, a title, and a paragraph
- **AND** the titles SHALL be Business School, Fitness Pro, Yoga Courses, Diet Specialists, Swimming Pool, Spinning Class

### Requirement: Pricing (3 plans on a parallax band)

A band with a fixed-attachment photo and dark overlay SHALL hold three
white plan cards, each with a top photo, a 36px green price with an italic
`/ Month` suffix, a 22px plan title, three feature lines with green dot
icons, and an outlined "Enroll Now" button. Plans: $50 Woman Fitness Class,
$70 Spinning Class + BONUS, $90 All Inclusive Gym.

#### Scenario: Plan cards

- **GIVEN** the pricing band is rendered
- **WHEN** the user scrolls to it
- **THEN** three plan cards SHALL render
- **AND** the prices SHALL be $50, $70 and $90, each followed by "/ Month"
- **AND** each card SHALL show three feature lines and an "Enroll Now" button
- **AND** the band background SHALL use `background-attachment: fixed`

### Requirement: Working hours + newsletter (two columns)

A two-column row SHALL pair (a) a "Working Hours" block — label "Fitness
Gym" + h2 "Working Hours" above a 7-row list (Monday 16:00-20:00; Tuesday,
Wednesday, Thursday 12:00-20:00; Friday 15:00-21:00; Saturday 10:00-20:00;
Sunday Closed) whose rows highlight green on hover — and (b) a "Our
Newsletter" block with the same label pattern, a name input, an email
input, an italic helper note, and a white "Subscribe" button. Submitting
SHALL validate both fields and show an inline confirmation.

#### Scenario: Opening hours list

- **GIVEN** the working-hours block is rendered
- **WHEN** the user reads the list
- **THEN** seven rows SHALL render, Monday through Sunday
- **AND** Sunday SHALL read "Closed"
- **AND** the other rows SHALL show their time ranges

#### Scenario: Newsletter validation

- **GIVEN** the newsletter form is rendered
- **WHEN** the user submits with an empty name or an invalid email
- **THEN** per-field validation messages SHALL appear and no success message SHALL render
- **AND** when both fields are valid, a confirmation message SHALL render

### Requirement: Footer (4 widgets + attribution)

The footer SHALL sit on a photo with a `rgba(5,11,37,0.85)` overlay and hold
four widgets: (1) brand wordmark, blurb, and six social links (Pinterest,
Facebook, Twitter, Dribbble, Behance, Instagram — inline SVG brand glyphs,
white → `#38b143` hover); (2) a "testimonials" slider with italic 13px
`#bebebe` quotes and green 13px author names; (3) a "Classes" list
(Bodybuilding Class, Fitness Class, Yoga Courses, Dumbbell Class, Spinning
Class, Kangoo Jump Class); (4) a "Contact" block with address, phone
(+53 345 7953 32453) and email. The bottom bar SHALL carry a centred
copyright line whose outbound link goes to https://www.componentdock.com/
(branded "Component Dock") — the source's ColorLib credit is REPLACED.

#### Scenario: Footer widgets

- **GIVEN** the footer is rendered
- **WHEN** the user scrolls to it
- **THEN** the brand, testimonials, Classes and Contact widgets SHALL render
- **AND** SHALL show six social links
- **AND** the Classes list SHALL hold six entries

#### Scenario: Component Dock attribution

- **GIVEN** the footer bottom line
- **WHEN** the user inspects it
- **THEN** the line SHALL link to https://www.componentdock.com/ branded "Component Dock"
- **AND** no colorlib.com string SHALL appear anywhere under `apps/grithaus`

### Requirement: Composition & interactions

The page SHALL render in this exact order: navbar → hero slider → promo
banners → about → experts → services → pricing → working hours + newsletter
→ footer. All interactivity (dropdown, mobile panel, hero slider,
testimonial slider, newsletter form, scroll header state) SHALL be
client-side React state derived per `docs/conventions.md` (no
`set-state-in-effect` violations; animation fallbacks derive during
render). Shared primitives SHALL come from `packages/ui` (`Container`,
`Button`/`ButtonLink`, `SectionHeading` if present) with `cn()` for
overrides.

#### Scenario: Section order

- **GIVEN** the Grithaus app is rendered
- **WHEN** the page is inspected top to bottom
- **THEN** the sections SHALL appear in the order: navbar, hero, promo banners, about, experts, services, pricing, working hours + newsletter, footer

## Implementation notes (rebranding + fidelity calls)

The reference's own brand is "Fitness Gym"; the recreation is branded
**Grithaus**, so the section labels read "Grithaus" and the about heading
reads "Why choose Grithaus?". Two structural fidelity calls: the reference
renders **no section heading** above the services grid or inside the pricing
band (both start straight into their grids), and the recreation matches that
— the bands are labelled for assistive tech via `aria-label`. The footer's
"testimonials" / "Classes" / "Contact" widget titles stay lowercase, as in
the reference.

## Verification checklist

- [ ] Structure + order matches the preview 1:1 (navbar → hero slider →
      promo banners → about → experts → services → pricing →
      hours + newsletter → footer).
- [ ] Tokens in `@theme`: `--color-brand: #38b143`, `--color-lime: #b6e358`,
      `--color-ink: #101214`, `--color-body: #838383`; dark-overlay band
      `rgba(5,11,37,0.85)`; hero overlay `rgba(0,0,0,0.3)`.
- [ ] Buttons reproduce the 10px radius / 45px height / 3px border /
      UPPERCASE 14px 700 recipe, including the outline default, the filled
      green (`btn-2`), the lime→green gradient (`btn-3`, header CTA) and the
      white newsletter button.
- [ ] Single font family Open Sans (300–800) loaded via Google Fonts
      `<link>`; hero h2 renders weight 400 at 100px on desktop.
- [ ] Hero = 3 slides with numeric pagination (01/02/03) and the correct
      per-slide button labels; header turns `#101214` on scroll.
- [ ] Experts collage reproduces the overlapping absolute layout (4 photos,
      staggered bottoms, `overflow: hidden`, 500px) with dark name plates.
- [ ] Services grid is 6 items in 3 columns with 77px green circles and the
      gradient hover; icons from `lucide-react` (Dumbbell, Flame, PersonStanding,
      Salad, Waves, Bike …).
- [ ] Pricing band uses a fixed-attachment background (`bg-fixed`) and three
      white cards with 40px padding and green dot feature rows.
- [ ] Working hours rows highlight green on hover; newsletter validates name
      + email, shows per-field errors and a success message.
- [ ] Footer: 4 widgets, 6 social links (inline SVG brand glyphs — lucide
      dropped brand icons), 6 Classes entries, Contact block, and the
      Component Dock link on the bottom bar.
- [ ] No `colorlib.com` / `preview.colorlib.com` string anywhere under
      `apps/grithaus` (provenance lives here + TEMPLATES.md + the PR).
- [ ] Placeholder imagery uses
      `https://picsum.photos/seed/grithaus-<n>/<w>/<h>` (hero ×3, promo ×2,
      about portrait, team ×4, plan photos ×3, footer band).
- [ ] `public/CNAME` = `grithaus.free.componentdock.com`;
      `"homepage"` = `https://grithaus.free.componentdock.com`.
- [ ] Tests written first (TDD), 100% lines/functions/branches/statements,
      per-app gate green (`scripts/verify-app.sh grithaus`), lockfile
      registers the workspace (`npm install` at the root).
- [ ] On the implementer's branch: both TEMPLATES.md rows (lines 397 and
      1846) re-opened `[ ]` before the build, then `[x]` with
      `https://grithaus.free.componentdock.com` after merge +
      `npm run readme:status`; the `vigor` app and its spec stay untouched.

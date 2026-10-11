# Template: Modkit (UI Kit Showcase)

## Purpose

Modkit is a component-showcase UI kit page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Next
Ui Kit" template (a purple/indigo Bootstrap 4 UI kit demo — hero + 17
component showcase bands), built under a different name with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The reference is a LONG single-page component catalog with NO site navbar:
an 80vh hero (foggy mountain photo under an 80% indigo→violet gradient)
with a bold white headline, a lorem subtitle, and a teal "See Here" CTA
anchoring to the kit — followed, 1:1 in order, by the showcase bands
Alerts, Badge, Buttons, Carousel, Dropdowns, Forms, Modal, Navbar,
Pagination, Typography, Images, Popovers, Tooltips, Checkboxes/Radios/
Toggle Buttons, Sliders, Tabs, and Progress Bar, then a light-gray
centered footer whose attribution line links Component Dock instead of
the source.

Every showcase band shares one rhythm: a `.site-section` (7rem vertical
padding) whose header row is a narrow `col-md-7` column with an h2
carrying a 2px INDIGO LEFT ACCENT BAR (the kit's signature heading
treatment) plus a `lead` description paragraph, then the demo rows. Demo
groups sit in light-gray Bootstrap-docs style panels where the source
wraps them (`.bd-example`).

The design is anchored by one signature color — indigo `#5753C9` — on
the hero gradient, heading accent bars, primary buttons/alerts/pagination
active states, focused input borders, and checked controls, supported by
a full contextual palette (secondary `#6c757d`, success `#00ad6c`, danger
`#ef3536`, warning `#ffb800`, teal info `#12d0da`). The hero CTA is the
TEAL info color, not the indigo. Typography is Work Sans throughout,
unusually LIGHT for headings (weight 300, navy `#394a6d`) over a
gray/300 body at 1.7 line-height (the hero h1 alone is bold). Buttons are
uppercase 0.9rem with soft COLORED drop shadows (`0 5px 15px -5px
rgba(<color>, .8)`) that fade on hover; the pill form (`.btn-pill`,
radius 50px) is the round button variant. Sections breathe at 7rem.

## Design reference (replication findings)

- **Original:** ColorLib "Next Ui Kit" — free Bootstrap 4 UI kit on a
  purple/indigo design (source: https://colorlib.com/wp/template/next-ui-kit/).
  Listed in TEMPLATES.md `## Ui Kit (8)` at line 3024; slug appears
  exactly once. NOTE: the theme preview slug is **`next`**, not
  `next-ui-kit` — `https://preview.colorlib.com/theme/next-ui-kit/`
  returns HTTP 404, while `https://preview.colorlib.com/theme/next/` is
  HTTP 200 and serves the kit (title "Next &mdash; UI Kit Template by
  Colorlib", h1 "Next UI Kit"). Same short-slug pattern as Buildex
  (`theme/buildex/`). The demo brand "Next"/"Next UI Kit" is NEVER reused
  in app files — hence the NEW name **modkit**.
- **Live preview URL:** https://preview.colorlib.com/theme/next/
  (HTTP 200, 67,775 bytes HTML, verified 2026-10-11; theme stylesheet
  `css/style.css`, 17,474 bytes). HTML saved to `/tmp/next-preview.html`;
  theme CSS saved to `/tmp/next-style.css`. The preview DOM is
  authoritative for section order and copy.
- **Screenshot:** `next-free-template.jpg`
  (`https://colorlib.com/wp/wp-content/uploads/sites/2/next-free-template.jpg`,
  reviewed visually 2026-10-11) confirms the hero treatment: a foggy
  mountain/forest photo under a heavy purple/indigo gradient wash;
  centered bold white h1 "Next UI Kit" near the top; two lines of white
  lorem subtitle; a small-rounded TEAL button "SEE HERE"; then a white
  section whose h2 "Alerts" carries a thin indigo vertical accent bar at
  its left edge, a gray `lead` description, and a light-gray demo panel
  holding stacked solid-color alert bars (indigo primary, gray secondary,
  green success, ...).
- **Stylesheets in the reference:** `fonts/icomoon/style.css`,
  `css/bootstrap.min.css`, Font Awesome 4.3 (maxcdn CDN),
  `css/nouislider.min.css`, `css/bootstrap-datetimepicker.css`,
  `css/style.css` (theme — canonical tokens; Bootstrap 4 compiled in).
  Bootstrap grid/JS, font-awesome, icomoon, nouislider, datetimepicker,
  and jQuery are NEVER copied: recreation uses Tailwind grid + flex,
  React-state tabs/carousel/dropdowns/modals/toggles/popovers/tooltips/
  alerts/pagination, lucide-react icons, native `<input type="range">` /
  `<input type="datetime-local">`, and static styled slider demos. Work
  Sans loads via Google Fonts `<link>` in `index.html` (weights 300–700).
- **Key theme rules (verified in style.css):**
  - Signature indigo `#5753C9`: `.alert.alert-primary { background:
    #5753C9 }`, `.heading-21921:before { background: #5753C9 }` (2px left
    accent bar), `.form-control:focus { border-color: #5753C9 }`,
    `.custom-pagination.pagination-primary .page-item.active .page-link
    { background-color: #5753C9 }`, hero gradient midpoint; the primary
    button/alert/pagination family
  - Hero gradient overlay: `.bg-image.gradient-1:before { opacity: .8;
    background-image: linear-gradient(315deg, #3D4E81 0%, #5753C9 48%,
    #6E7FF3 100%) }` over `images/slider_2.jpg` (foggy mountain scene);
    `.bg-image { height: 80vh; background-size: cover; background-position:
    center center }`
  - Font: `body { line-height: 1.7; color: gray; font-weight: 300;
    font-family: "Work Sans", sans-serif }`
  - Headings: `h1–h6 { font-weight: 300 !important; color: #394a6d;
    line-height: 1.5 }` — hero h1 EXCEPTED (font-weight-bold white per
    markup `h1.font-weight-bold.mb-0.text-white`)
  - Buttons: `.btn { transition: .3s all ease; font-size: 0.9rem;
    position: relative; text-transform: uppercase }`; per-color soft
    shadow `0 5px 15px -5px rgba(<color>, 0.8)` that fades to 0.1 alpha
    on hover (primary `rgba(87,83,201,.8)`, secondary `rgba(108,117,125,.8)`,
    success `rgba(0,173,108,.8)`, danger `rgba(239,53,54,.8)`, warning
    `rgba(255,184,0,.8)`, info `rgba(18,208,218,.8)`); `.btn.btn-pill {
    border-radius: 50px }`; sizes `.btn-sm 12px` / `.btn-md 14px` /
    `.btn-lg 16px` (lg padding `.875rem 1.2rem`)
  - Alerts: `.alert { border-radius: 0; padding-top: 20px; padding-bottom:
    20px }` (markup adds `rounded border-0 py-3` — small ~4px corners win
    via Bootstrap's `!important` rounded utility), solid fills with white
    text: primary `#5753C9`, secondary `#6c757d`, success `#00ad6c`,
    danger `#ef3536`, warning `#ffb800`, info `#12d0da` (+ Bootstrap
    light/dark); dismissible variant keeps a white × close
  - Badges: `.badge { text-transform: uppercase; font-size: 10px;
    padding: 4px 8px; font-weight: 600 }`; tinted contextual fills —
    color at 0.1 alpha bg + colored text (warning/info at 0.5 alpha bg);
    pill variant rounded-full
  - Section headings: `.heading-21921 { padding-left: 10px; line-height:
    1; margin: 0 0 1.5rem 0 }` with `:before` a `width: 2px; height: 100%;
    background: #5753C9` left accent bar
  - Sections: `.site-section { padding: 7rem 0 }`; footer band is
    `site-section bg-light`
  - Forms: `.form-control { font-size: .9rem }`; focus `border-color:
    #5753C9` with NO ring; `.form-control.form-pill { border-radius: 30px }`;
    `.form-control-shadow { background: #fff; box-shadow: 0 1px 2px 0
    rgba(0,0,0,0.08) }`
  - Pagination: `.custom-pagination.pagination-primary/-secondary/-info`
    — active page-link filled with the variant color, white text, soft
    shadow `0 2px 5px 0 rgba(<color>, 0.2)`
  - Progress: `.progress-20102 { height: 7px; border-radius: 0;
    margin-bottom: 30px }` (markup adds `rounded`)
  - Popover: `border: none; padding: 10px; box-shadow: 0 5px 30px -5px
    rgba(0,0,0,0.4)`; header transparent, weight 400, `#6c757d`; no
    arrow. Tooltip: white `.tooltip-inner`, black text, `box-shadow:
    0 2px 10px 0 rgba(0,0,0,0.5)`, max-width 200px, padding 4px 10px
  - Modal: `.modal-content` borderless, `box-shadow: 0 10px 50px -10px
    rgba(0,0,0,0.3)`, square corners (`rounded-0`), header WITHOUT bottom
    border, 30px horizontal padding on header/body
  - Navbar demos: `navbar-dark` white uppercase `.8rem`/400 nav items
    (padding 15px 10px), hover/active `background-color:
    rgba(255,255,255,0.2)`; per-color tinted bar shadow `0 2px 5px -2px
    rgba(<color>, 0.5)`; dropdown menus borderless, `.8rem`, `box-shadow:
    0 0 30px 0 rgba(0,0,0,0.2)`; the dark bars include a search input
    (transparent, white underline, placeholder white) with a 40px round
    white search button
  - Carousel: `.carousel .carousel-heading { color: #fff }` — slide
    caption h5s are white over the slide image
- **Content map (preview DOM):** hero `.site-section.bg-image.gradient-1`
  — h1 "Next UI Kit" (bold white), lorem subtitle ("Lorem ipsum dolor sit
  amet, consectetur adipisicing elit. Esse iure possimus cum illum ab
  accusantium, aliquid, delectus tempora." — paraphrasable), teal
  "See Here" button → `#start`; each showcase band = h2.heading-21921 +
  `p.lead` in `col-md-7`, then demo rows:
  1. **Alerts** ("Provide contextual feedback messages for typical user
     actions..." lead): eight solid contextual alerts (Primary /
     Secondary / Success / Danger / Warning / Info / Light / Dark —
     "A simple primary alert—check it out!" kind of copy), then "With
     Icon + Shadow" (info alert, icon + "Info:" prefix, flex row, drop
     shadow), then "Dismissing" (shadowed primary + secondary alerts with
     white × close)
  2. **Badge**: "Contextual Variations" (Primary…Dark uppercase tinted
     badges) + "Pill badges" (same colors, pill shape)
  3. **Buttons**: "Example" (plain "Button" + "With Icon" icon+label),
     "Example" (Default / Secondary / Info / Danger / Warning / Success
     SOLID), "Button outline" (same six, outlined), "Button Pill" (same
     six, `.btn-pill` outlined pills with px-4), "Sizes" (primary
     btn-sm / btn-md / btn-lg)
  4. **Carousel**: 3 image slides with captions ("First slide label" /
     "Nulla vitae elit libero, a pharetra augue mollis interdum." kind,
     "Second slide label", "Third slide label"), 3 indicator dots, prev /
     next controls
  5. **Dropdowns**: four "Dropdown button" toggles (color variants) each
     opening Action / Another action / Something else here
  6. **Forms**: "Input" (Name "Full name", Email, "Datetime Picker"
     field) + "Input Shadow" (Username / Email / Password with the
     shadowed input style)
  7. **Modal**: "Launch Demo Modal" button → centered modal "Modal title"
     + × close + "Mist enveloped the ship three hours out from port..."
     lorem body paragraphs (paraphrasable)
  8. **Navbar**: six stacked `navbar-dark px-4 mb-4` bar demos with
     tinted backgrounds — bg-primary, bg-success, bg-info, bg-danger,
     bg-secondary, bg-transparent — each "Brand" + links (Home /
     Features / Pricing, some with "Link", "Disabled", "Dropdown link"
     → Action / Another action / Something else here); the transparent
     bar carries the white underline search input + round search button
  9. **Pagination**: three `custom-pagination` rows (Prev / 1 / 2 / 3 /
     Next style) in pagination-primary `#5753C9`, pagination-secondary
     `#6c757d`, pagination-info `#12d0da`
  10. **Typography**: labeled samples Heading 1–6 all rendering
      "Almost before we knew it, we had left the ground." + "Paragraph" +
      "Quote" + colored text rows (Muted / Primary / Info / Success /
      Warning / Danger text)
  11. **Images**: four columns over one shared image — "Rounded Raised
      Image" (`img-raised` shadow), "Rounded Image", "Circle Image",
      "Thumbnail Image" (bordered)
  12. **Popovers**: "Popover on top / right / bottom / left" buttons
  13. **Tooltips**: "Tooltip on top / right / bottom / left" buttons
  14. **Checkboxes, Radios, Toggle Buttons**: three col-md-4 groups —
      "Checkboxes" (Unchecked / Checked / Unchecked (Disabled) / Checked
      (Disabled)), "Radioboxes" (Radio is on / Radio is off / Radio is on
      (Disabled) / Radio is off (Disabled)), "Toggle Switch" ("Toggle this
      switch element" / "Checked switch element")
  15. **Sliders**: nouislider range demos (NEVER copied — native range or
      static styled tracks)
  16. **Tabs**: two `bg-light p-4` panels (col-md-6), each a white
      tab-card with a horizontal pill nav (Profile / Messages / Settings;
      one "tab-secondary" accent variant) + lorem pane copy ("Mist
      enveloped the ship..." kind — paraphrasable)
  17. **Progress Bar**: left column — four 7px bars at 25% (success) /
      50% (info) / 75% (warning) / 100% (danger); right column — labeled
      skill rows: pill badge label + right-aligned bold percentage over a
      bar (e.g. "WordPress" 94% primary, "HTML5" 85% warning; the third
      source label is the demo brand and MUST be paraphrased)
  18. **Footer**: `site-section bg-light` centered single line —
      "Copyright © <year> All rights reserved | This template is made
      with ♥ by Colorlib" — the recreation links
      `https://www.componentdock.com/` ("Component Dock") instead

## Design tokens

| Token | Value | Where |
| --- | --- | --- |
| brand/primary | `#5753C9` | heading accent bars, primary buttons/alerts, active pagination, focused inputs, checked controls, hero gradient mid |
| secondary | `#6c757d` | secondary buttons/alerts/pagination, popover header text |
| success | `#00ad6c` | success buttons/alerts, 25% progress |
| danger | `#ef3536` | danger buttons/alerts, 100% progress |
| warning | `#ffb800` | warning buttons/alerts, 75%/85% progress |
| info / teal | `#12d0da` | hero CTA "See Here", info buttons/alerts, info pagination |
| heading navy | `#394a6d` | h1–h6 text (weight 300) |
| gradient dark | `#3D4E81` | hero gradient start (315deg) |
| gradient light | `#6E7FF3` | hero gradient end (315deg) |
| body text | `gray` (weight 300) | body, `lead` copy |
| light band | `#f8f9fa` (bg-light) | footer band, tab demo panels, demo panels |
| hero overlay | `linear-gradient(315deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%)` at `.8` opacity | over hero photo |
| font family | `"Work Sans", sans-serif` (Google Fonts 300–700) | everywhere |
| button type | uppercase, 0.9rem, transition .3s; radius default; pill 50px | all buttons |
| button shadow | `0 5px 15px -5px rgba(<color>, .8)` → `.1` on hover | all colored buttons |
| alert shape | small rounded (~4px), no border, `py-3`/20px vertical | alerts |
| input | .9rem, focus border `#5753C9` no ring; pill variant 30px; shadow variant `0 1px 2px rgba(0,0,0,.08)` | forms |
| section rhythm | `.site-section` `7rem 0`; hero 80vh | layout |
| heading accent | 2px `#5753C9` left bar, 10px left padding, lh 1 | every band h2 |
| progress bar | 7px tall, no/minimal radius, 30px gap | progress |
| popover | borderless, 10px pad, `0 5px 30px -5px rgba(0,0,0,.4)` | popovers |
| tooltip | white bg, black text, `0 2px 10px rgba(0,0,0,.5)`, 200px max | tooltips |
| modal | borderless square, `0 10px 50px -10px rgba(0,0,0,.3)`, 30px x-padding | modal |
| navbar demo | dark bars, uppercase .8rem items, hover `rgba(255,255,255,.2)`, bar shadow `0 2px 5px -2px rgba(<color>,.5)` | navbar band |

## Requirements

### Feature: Hero

An 80vh photographic hero under an 80% indigo→violet gradient wash: bold
white headline, lorem subtitle, teal CTA anchoring to the kit.

#### Scenario: Hero renders as in the reference
- **Given** the page loads
- **When** the hero renders
- **Then** the band is 80vh tall with a cover/center photo (picsum seeded
  `modkit-hero`, a foggy mountain/landscape scene per the screenshot)
- **And** the photo sits under the `linear-gradient(315deg, #3D4E81 0%,
  #5753C9 48%, #6E7FF3 100%)` overlay at ~0.8 opacity
- **And** the centered content shows the BOLD white h1 "Modkit UI Kit."
  (the source headline kind "Next UI Kit" — the demo brand is never
  reused)
- **And** a white two-line lorem subtitle below (paraphrasable — same
  kind: one sentence of placeholder marketing copy)
- **And** a teal `#12d0da` uppercase button "See Here" (small rounded
  corners, `px-4 py-3`, white text) anchoring to `#start`

### Feature: Alerts showcase

The first white band: contextual feedback messages in three demo groups.

#### Scenario: Alert groups render as in the reference
- **Given** the alerts band renders
- **When** the demo groups are visible
- **Then** the band header shows the h2 "Alerts" with the indigo left
  accent bar and the `lead` copy kind "Provide contextual feedback
  messages for typical user actions..." (paraphrasable)
- **And** the first group renders EIGHT solid alerts (Primary `#5753C9` /
  Secondary `#6c757d` / Success `#00ad6c` / Danger `#ef3536` / Warning
  `#ffb800` / Info `#12d0da` / Light / Dark) with white text (dark text
  on Light), small rounded corners, no border, "A simple <color>
  alert—check it out!" kind of copy
- **And** the "With Icon + Shadow" group renders a shadowed INFO alert as
  a flex row (lucide icon + "Info:" prefix + message)
- **And** the "Dismissing" group renders shadowed primary + secondary
  alerts each with a white × close button that dismisses it (React
  state)
- **And** the alerts sit in a light-gray demo panel like the screenshot
  (`#f8f9fa`-family background with padding)

### Feature: Badge showcase

Uppercase tinted badges in two shapes.

#### Scenario: Badge variants render as in the reference
- **Given** the badge band renders
- **When** the groups are visible
- **Then** the header shows "Badge" + indigo accent bar
- **And** "Contextual Variations" renders the eight badge colors
  (Primary…Dark) as uppercase 10px/600 badges with 4px/8px padding and
  the kit's tinted treatment (color at 0.1-alpha background + colored
  text; warning/info at 0.5-alpha background)
- **And** "Pill badges" renders the same eight colors with pill
  (rounded-full) shape

### Feature: Buttons showcase

Five demo groups covering default, solid colors, outlines, pills, sizes.

#### Scenario: Button variants render as in the reference
- **Given** the buttons band renders
- **When** the groups are visible
- **Then** the header shows "Buttons" + indigo accent bar
- **And** "Example" renders a plain uppercase "Button" and a "With Icon"
  button (lucide icon + label)
- **And** the second "Example" renders SOLID Default/primary, Secondary,
  Info, Danger, Warning, Success buttons
- **And** "Button outline" renders the same six colors as outlined
  variants
- **And** "Button Pill" renders the same six colors as outlined pill
  buttons (radius 50px, `px-4`)
- **And** "Sizes" renders primary buttons in btn-sm (12px) / btn-md
  (14px) / btn-lg (16px, `.875rem 1.2rem` padding)
- **And** every colored button carries its per-color soft shadow
  (`0 5px 15px -5px rgba(<color>, .8)`, fading to 0.1 alpha on hover)
  and uppercase 0.9rem text

### Feature: Carousel showcase

A three-slide image carousel with captions and controls.

#### Scenario: Carousel renders as in the reference
- **Given** the carousel band renders
- **When** the slideshow is visible
- **Then** the header shows "Carousel" + indigo accent bar
- **And** three image slides render (picsum seeded `modkit-slide-1..3`)
  each with a bottom caption: white h5 `.carousel-heading` ("First slide
  label" / "Second slide label" / "Third slide label") + a one-line
  lorem subtitle (paraphrasable)
- **And** three indicator dots show the active slide and are clickable
- **And** prev/next arrow controls move between slides (React state —
  Bootstrap JS never copied)

### Feature: Dropdowns showcase

Four color-variant dropdown buttons.

#### Scenario: Dropdown demos render as in the reference
- **Given** the dropdowns band renders
- **When** the demos are visible
- **Then** the header shows "Dropdowns" + indigo accent bar
- **And** four "Dropdown button" toggles render in the kit color variants
- **And** each opens a menu listing Action / Another action / Something
  else here (React state, click toggles, aria-expanded; borderless menu
  with `0 0 30px rgba(0,0,0,0.2)` shadow)

### Feature: Forms showcase

Two demo groups: plain inputs and shadowed inputs.

#### Scenario: Input groups render as in the reference
- **Given** the forms band renders
- **When** the groups are visible
- **Then** the header shows "Forms" + indigo accent bar
- **And** "Input" renders labeled fields Name (placeholder "Full name"),
  Email, and "Datetime Picker" — the datetime field is a native
  `<input type="datetime-local">` (the source's datetimepicker plugin is
  never copied)
- **And** "Input Shadow" renders Username / Email / Password fields with
  the shadowed style (`0 1px 2px 0 rgba(0,0,0,0.08)`, white bg)
- **And** all inputs are 0.9rem with a `#5753C9` focus border and no
  focus ring
- **And** submit is prevented (no-op in the recreation)

### Feature: Modal showcase

A launch button opening a centered dialog.

#### Scenario: Modal demo renders as in the reference
- **Given** the modal band renders
- **When** the demo is visible
- **Then** the header shows "Modal" + indigo accent bar
- **And** a "Launch Demo Modal" button opens a centered modal (React
  state) with the title "Modal title", a × close (aria-label), and two
  lorem body paragraphs ("Mist enveloped the ship..." kind —
  paraphrasable)
- **And** the modal content is square-cornered and borderless with the
  `0 10px 50px -10px rgba(0,0,0,0.3)` shadow, a header without bottom
  border, and 30px horizontal padding
- **And** ×, backdrop click, and Escape dismiss the modal; focus moves
  into the dialog on open and returns to the trigger on close

### Feature: Navbar showcase

Six stacked dark navbar demos with tinted backgrounds.

#### Scenario: Navbar variants render as in the reference
- **Given** the navbar band renders
- **When** the variants are visible
- **Then** the header shows "Navbar" + indigo accent bar
- **And** six `navbar-dark` bars render stacked with `px-4` gutters and
  mb-4 gaps, backgrounds: primary `#5753C9`, success `#00ad6c`, info
  `#12d0da`, danger `#ef3536`, secondary `#6c757d`, transparent
- **And** each bar shows a "Brand" wordmark plus the reference's link
  mix (Home / Features / Pricing; variants with "Link", "Disabled", and
  a "Dropdown link" opening Action / Another action / Something else
  here)
- **And** nav items are uppercase ~0.8rem/400 white with 15px/10px
  padding and `rgba(255,255,255,0.2)` hover/active backgrounds
- **And** each tinted bar carries its `0 2px 5px -2px rgba(<color>, 0.5)`
  shadow
- **And** the transparent bar includes the search treatment: transparent
  input with white underline + white placeholder, and a 40px round white
  search button (lucide Search icon)
- **And** navbar dropdowns are React state (aria-expanded), borderless
  with the `0 0 30px rgba(0,0,0,0.2)` shadow

### Feature: Pagination showcase

Three color-variant pagination rows.

#### Scenario: Pagination variants render as in the reference
- **Given** the pagination band renders
- **When** the rows are visible
- **Then** the header shows "Pagination" + indigo accent bar
- **And** three `custom-pagination` rows render (Prev / 1 / 2 / 3 / Next
  style, page counts may vary 1–3 or 5–8 per the source) in primary
  `#5753C9`, secondary `#6c757d`, and info `#12d0da`
- **And** the active page is filled with the variant color + white text
  + soft `0 2px 5px 0 rgba(<color>, 0.2)` shadow
- **And** clicking a page/Prev/Next updates the active page (React
  state)

### Feature: Typography showcase

The full type scale plus text-color samples.

#### Scenario: Type scale renders as in the reference
- **Given** the typography band renders
- **When** the samples are visible
- **Then** the header shows "Typography" + indigo accent bar
- **And** labeled samples Heading 1–6 each render "Almost before we knew
  it, we had left the ground." at descending sizes in the kit's light
  heading style (weight 300, `#394a6d`, lh 1.5)
- **And** a "Paragraph" sample and a "Quote" sample render (lorem kind —
  paraphrasable)
- **And** colored text rows render: Muted / Primary `#5753C9` / Info
  `#12d0da` / Success `#00ad6c` / Warning `#ffb800` / Danger `#ef3536`
  text samples

### Feature: Images showcase

Four shape variants of one shared image.

#### Scenario: Image variants render as in the reference
- **Given** the images band renders
- **When** the variants are visible
- **Then** the header shows "Images" + indigo accent bar
- **And** four centered columns render over ONE shared placeholder image
  (picsum seeded `modkit-img-1`, w-75 sizing): "Rounded Raised Image"
  (rounded + drop shadow), "Rounded Image", "Circle Image", "Thumbnail
  Image" (bordered thumbnail)

### Feature: Popovers showcase

Four directional popover toggles.

#### Scenario: Popover demos render as in the reference
- **Given** the popovers band renders
- **When** the demos are visible
- **Then** the header shows "Popovers" + indigo accent bar
- **And** four buttons render — Popover on top / on right / on bottom /
  on left — each toggling a popover card (React state) with a title
  (weight 400, `#6c757d`) and body copy kind
- **And** popover cards are borderless, 10px padded, shadowed
  (`0 5px 30px -5px rgba(0,0,0,0.4)`), without an arrow

### Feature: Tooltips showcase

Four directional tooltip triggers.

#### Scenario: Tooltip demos render as in the reference
- **Given** the tooltips band renders
- **When** the demos are visible
- **Then** the header shows "Tooltips" + indigo accent bar
- **And** four buttons render — Tooltip on top / on right / on bottom /
  on left — each revealing a tooltip on hover/focus
- **And** tooltips are white with black text, `0 2px 10px 0
  rgba(0,0,0,0.5)` shadow, max-width 200px, 4px/10px padding
  (aria-describedby wired)

### Feature: Checkboxes, radios, toggles showcase

Three control-family demo columns.

#### Scenario: Control variants render as in the reference
- **Given** the controls band renders
- **When** the columns are visible
- **Then** the header shows "Checkboxes, Radios, Toggle Buttons" + indigo
  accent bar
- **And** "Checkboxes" renders Unchecked / Checked / Unchecked (Disabled)
  / Checked (Disabled)
- **And** "Radioboxes" renders Radio is on / Radio is off / Radio is on
  (Disabled) / Radio is off (Disabled) in one radio group (plus the
  disabled group)
- **And** "Toggle Switch" renders "Toggle this switch element" and
  "Checked switch element" switch rows
- **And** checked/toggled states use the kit accent `#5753C9`; toggles
  are real `<input type="checkbox" role="switch">` (or button-role
  switches with `aria-checked`) that flip on click

### Feature: Sliders showcase

Range-slider demos (native, no plugin).

#### Scenario: Slider demos render as in the reference
- **Given** the sliders band renders
- **When** the section is visible
- **Then** the header shows "Sliders" + indigo accent bar
- **And** at least one styled range slider renders (native
  `<input type="range">` with kit-accent track/thumb, or static styled
  track demos) — the source's nouislider plugin is NEVER copied

### Feature: Tabs showcase

Two tab-card panels with pill navigation.

#### Scenario: Tab panels render as in the reference
- **Given** the tabs band renders
- **When** the panels are visible
- **Then** the header shows "Tabs" + indigo accent bar
- **And** two `bg-light` padded panels render side by side (col-md-6),
  each containing a white tab-card with a horizontal pill nav —
  Profile / Messages / Settings (one panel uses the secondary
  `#6c757d`-family accent, per the source's `tab-secondary`)
- **And** each tab shows lorem pane copy ("Mist enveloped the ship..."
  kind — paraphrasable), switched by React state
- **And** the active pill reflects `aria-selected` state

### Feature: Progress bar showcase

Two progress demo columns: colored bars and labeled skill bars.

#### Scenario: Progress demos render as in the reference
- **Given** the progress band renders
- **When** the columns are visible
- **Then** the header shows "Progress Bar" + indigo accent bar
- **And** the left column renders four 7px bars at 25% (success
  `#00ad6c`) / 50% (info `#12d0da`) / 75% (warning `#ffb800`) / 100%
  (danger `#ef3536`)
- **And** the right column renders labeled skill rows: a pill badge
  label + right-aligned bold percentage over a matching bar — "WordPress"
  94% (primary) and "HTML5" 85% (warning) at minimum
- **And** any remaining source label that is the demo brand ("Colorlib")
  is paraphrased to a generic skill name (e.g. "UI Design")
- **And** bar fills render at their target widths (CSS or React state —
  no plugin)

### Feature: Footer

A light-gray centered footer whose attribution links Component Dock.

#### Scenario: Footer renders as in the reference
- **Given** the footer renders
- **When** the footer is visible
- **Then** it is a `bg-light` (`#f8f9fa`) band with `.site-section`
  padding and a single centered line: "Copyright © <current year> All
  rights reserved | Made with <heart icon> by Component Dock"
- **And** the heart glyph renders (lucide Heart, small, warm accent)
- **And** the attribution links `https://www.componentdock.com/` branded
  "Component Dock" — never ColorLib, "Colorlib", "Next", or the source
  slug

### Feature: Design tokens & typography

The recreation exposes the reference palette and Work Sans as Tailwind 4
`@theme` tokens.

#### Scenario: Theme tokens match the reference palette
- **Given** the app's `src/index.css` theme
- **When** the tokens are declared
- **Then** the palette includes: primary `#5753C9`, secondary `#6c757d`,
  success `#00ad6c`, danger `#ef3536`, warning `#ffb800`, info/teal
  `#12d0da`, heading navy `#394a6d`, gradient stops `#3D4E81` /
  `#5753C9` / `#6E7FF3` (as `--gradient-hero: linear-gradient(315deg,
  #3D4E81 0%, #5753C9 48%, #6E7FF3 100%)`), light band `#f8f9fa`
- **And** Work Sans (300–700) loads via Google Fonts `<link>` in
  `index.html`; body renders weight 300 with lh 1.7, headings weight 300
  `#394a6d` lh 1.5 (hero h1 bold white)
- **And** colored buttons carry per-color soft shadows
  (`0 5px 15px -5px rgba(<color>, .8)`, fading on hover), uppercase
  0.9rem labels; pill buttons radius 50px
- **And** inputs focus to a `#5753C9` border with no ring; section
  rhythm is 7rem top/bottom (80vh hero)

## Verification checklist

- [ ] Section order 1:1 with the preview DOM: hero (80vh gradient photo)
      → Alerts → Badge → Buttons → Carousel → Dropdowns → Forms → Modal
      → Navbar → Pagination → Typography → Images → Popovers → Tooltips
      → Checkboxes/Radios/Toggle Buttons → Sliders → Tabs → Progress Bar
      → bg-light footer
- [ ] Every showcase band uses the header row pattern: h2 with the 2px
      `#5753C9` left accent bar (10px left padding) + `lead` paragraph
      in a narrow (col-md-7) column, then demo rows
- [ ] Indigo `#5753C9` is the single brand color: heading accent bars,
      primary buttons/alerts, active pagination, focused input borders,
      checked controls, hero gradient midpoint — while the hero CTA is
      the TEAL `#12d0da` info color
- [ ] Hero: photo (picsum `modkit-hero`) under `linear-gradient(315deg,
      #3D4E81 0%, #5753C9 48%, #6E7FF3 100%)` at .8 opacity, 80vh; bold
      white h1 "Modkit UI Kit."; white lorem subtitle; teal "See Here"
      button → `#start`
- [ ] Alerts: eight solid contextual variants (white text), "With Icon +
      Shadow" info alert (flex row), "Dismissing" group with working ×
      closes; light-gray demo panel like the screenshot
- [ ] Badge: 8 tinted uppercase badges + pill variants (0.1-alpha fills;
      warning/info 0.5)
- [ ] Buttons: Example (Button + With Icon), six solid colors, six
      outlines, six outlined pills (radius 50px), sm/md/lg sizes;
      per-color soft shadows fade on hover; uppercase 0.9rem
- [ ] Carousel: 3 picsum slides (`modkit-slide-1..3`) with white caption
      h5 + lorem line, 3 clickable dots, prev/next controls (React
      state)
- [ ] Dropdowns: 4 "Dropdown button" toggles → Action / Another action /
      Something else here (aria-expanded)
- [ ] Forms: "Input" (Name/Email/Datetime Picker — native
      datetime-local) + "Input Shadow" (Username/Email/Password); focus
      border `#5753C9`, no ring; submit prevented
- [ ] Modal: "Launch Demo Modal" → square borderless modal, "Modal
      title" + × + 2 lorem paragraphs; × / backdrop / Escape close;
      focus managed
- [ ] Navbar: six stacked dark bars (primary/success/info/danger/
      secondary/transparent) with Brand + Home/Features/Pricing +
      Dropdown link variants; uppercase .8rem items, rgba(255,255,255,.2)
      hover, per-color `0 2px 5px -2px` shadows; transparent bar has the
      white underline search + round search button
- [ ] Pagination: three variant rows (primary/secondary/info), active
      page filled + soft shadow, clickable (React state)
- [ ] Typography: Heading 1–6 "Almost before we knew it..." scale
      (weight 300 `#394a6d`), Paragraph + Quote, Muted/Primary/Info/
      Success/Warning/Danger text rows
- [ ] Images: Rounded Raised / Rounded / Circle / Thumbnail over ONE
      shared picsum image (`modkit-img-1`)
- [ ] Popovers: 4 directional toggles, borderless shadowed cards, no
      arrow; Tooltips: 4 directional triggers, white/black shadowed
      tooltips (aria-describedby)
- [ ] Controls: checkboxes/radios/toggles with checked + disabled
      variants; switches flip with `aria-checked`; checked state `#5753C9`
- [ ] Sliders: native/styled range demos only — no nouislider copy
- [ ] Tabs: two bg-light panels with Profile/Messages/Settings pill navs
      (one secondary accent), React state switching, aria-selected
- [ ] Progress: 4 bars (25/50/75/100% in success/info/warning/danger) +
      labeled skill rows ("WordPress" 94%, "HTML5" 85%, third label
      paraphrased — never "Colorlib"); 7px bars
- [ ] Footer: bg-light centered "Copyright © <year> All rights reserved |
      Made with <heart> by Component Dock" linking
      `https://www.componentdock.com/`
- [ ] All images are `picsum.photos/seed/modkit-*` placeholders; icons
      from `lucide-react`; no copied assets or CSS; no Bootstrap JS,
      nouislider, datetimepicker, font-awesome/icomoon fonts, or jQuery
- [ ] Zero `colorlib` / "Next" / "Next UI Kit" demo-brand references
      anywhere in `apps/modkit` (comments included)
- [ ] App folder `apps/modkit`, package
      `@free-react-templates/modkit`, `homepage`
      `https://modkit.free.componentdock.com`, `public/CNAME`
      `modkit.free.componentdock.com`, lockfile registers the workspace
- [ ] `vite.config.ts` keeps `injectUiSource()`; tests at 100% coverage;
      `scripts/verify-app.sh modkit` passes

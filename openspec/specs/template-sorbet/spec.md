# Template: Sorbet (UI Kit)

## Purpose

Sorbet is a component-showcase UI kit page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Smash"
template (a colorful sky-blue Bootstrap 4 UI kit demo — photographic
sunset hero with overlapping feature cards + 15 component showcase
bands + carousel + login card + download CTA), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The reference is a LONG single-page component catalog WITH a site
navbar: a transparent dark navbar floating over a 600px sunset-photo
hero whose bold white uppercase headline sits above an avatar byline;
three white feature cards straddle the hero's bottom edge into the
first `bg-light` band (colored round icon badge + card title + blurb +
colored "Go somewhere" button). Below, "Basic Elements" opens the
showcase bands in 1:1 order: Buttons, Inputs, Checkboxes, Radio
Buttons, Toggle Buttons, Sliders + Badges, Progress bars + Paginations,
Navigations (4 navbar demos incl. one on a photo backdrop), Navigation
Pills (tab panels), Notifications (4 alerts), Typography (h1–h6 +
paragraph), Images (rounded / circle / circle-raised with caption),
then "Javascripts Components": Modals, Datetimepickers, Popovers,
Tooltip, Accordion/Collapse — followed by a 3-slide photo carousel
with outline-white pill CTAs, a "Completed with examples" copy band, a
photo-backed "Card Login" signup band (social icon circles + username +
password + terms checkbox + white CTA), a plain "Do you like this UI
Kit?" download band (large primary button), and a light-gray footer
whose attribution line links Component Dock instead of the source.

The design is anchored by one signature color — sky blue `#64c4ed` —
on primary buttons/badges, focused input borders, checked fill-checkbox
controls, the active pagination item, and the hero card 1 icon/button,
supported by a full contextual palette (success green `#64e291`,
danger coral `#eb7070`, warning amber `#fec771`, info `#03A9F4`,
secondary warm gray `#696464`, rose `#e83e8c` for the 6th badge). The
three hero cards rotate the palette (info blue / success green /
warning amber icon + button). Typography is "Open Sans", Arial,
sans-serif throughout (16px / 1.8, body gray `#777777`), headings
weight 500 (`.heading-section` 28px) over `#212529`, with the hero
headline alone at 50px/700 uppercase white. Buttons default to ~.25rem
corners with a 40px pill variant (`.btn-round`) and circle icon
buttons; cards are borderless with a soft `0 11px 30px -9px
rgba(0,0,0,0.05)` shadow. Sections breathe at `3em 0`, alternating
white / `bg-light` (`#f8f9fa`).

## Design reference (replication findings)

- **Original:** ColorLib "Smash" — free Bootstrap 4 UI kit on a
  sky-blue design (source: https://colorlib.com/wp/template/smash/).
  Listed in TEMPLATES.md `## Ui Kit (8)` at line 3026; slug appears
  exactly once (there is no duplicate `- [ ]` line for it). NOTE: the
  template title "Smash" and the demo copy "We are Smash Free UI Kit."
  / "Get Smash Free UI Kit" are NEVER reused in app files — hence the
  NEW name **sorbet**.
- **Live preview URL:** https://preview.colorlib.com/theme/smash/
  (HTTP 200, 71,172 bytes HTML, verified 2026-10-11; theme stylesheet
  `css/style.css`, 108,583 bytes; plus compiled Bootstrap-era vendor
  CSS). HTML saved to `/tmp/smash-preview.html`; theme CSS saved to
  `/tmp/smash-style.css`. The preview DOM is authoritative for section
  order and copy. Unlike the sibling kits (buildex→`theme/buildex`,
  regen→`theme/regen`), this preview uses the FULL slug
  `theme/smash/` directly.
- **Screenshot:** `smash-free-template.jpg`
  (`https://colorlib.com/wp/wp-content/uploads/sites/2/smash-free-template.jpg`,
  reviewed visually 2026-10-11) confirms the hero treatment: a warm
  sunset photo (orange sky over fields and a lake) with NO gradient
  overlay; centered BOLD white uppercase headline "BOOTSTRAP 4 UI KIT";
  a small circular avatar + "Designed by: Colorlib.com" byline; three
  white cards overlapping the hero's bottom edge into the light band —
  each with a colored circular icon badge (blue / green / amber), a
  "Card title treatment" h5, a gray blurb, and a matching colored
  "Go somewhere" button; below, "Basic Elements" and the Buttons band
  (Default Button outline, Filled Button solid, Round Button pill
  outline, Button With Icon + heart circle, Simple Button link text;
  then colored text links Primary…Dark).
- **Stylesheets in the reference:** `css/open-iconic-bootstrap.min.css`,
  `css/animate.css`, `css/owl.carousel.min.css`,
  `css/owl.theme.default.min.css`, `css/magnific-popup.css`,
  `css/aos.css`, `css/ionicons.min.css`,
  `css/bootstrap-datetimepicker.min.css`, `css/nouislider.css`,
  `css/flaticon.css`, `css/icomoon.css`, `css/style.css` (theme —
  canonical tokens), plus a compiled Bootstrap 4 grid. NONE of these
  are copied: recreation uses Tailwind grid + flex, React-state
  tabs/carousel/dropdowns/modals/toggles/popovers/tooltips/alerts/
  pagination/accordion, lucide-react icons (Facebook, Twitter, Instagram,
  Cloud/Download, Heart, ChevronDown, Search replace
  ionicons/icomoon/flaticon glyphs), native `<input type="range">` /
  `<input type="datetime-local">`, and placeholder images from picsum.
  "Open Sans" loads via Google Fonts `<link>` in `index.html`.
- **Key theme rules (verified in style.css / preview DOM):**
  - Signature sky blue `#64c4ed` (56 occurrences): `.btn-primary{background:#64c4ed;
border:1px solid #64c4ed;color:#fff}` (hover darker `#36b3e8` /
    `#1faae5`, active `#0286c2`), `.badge-primary{background-color:#64c4ed;
color:#212529}` (note DARK text on primary), `.fill-checkbox{--color:#64c4ed}`
    (custom checkbox/radio/toggle accent), `.blockquote small{text-transform:
uppercase;color:#64c4ed}`, focused/valid input borders;
    `.btn-outline-primary{color:#64c4ed;border-color:#64c4ed}`
    (outline borders 2px)
  - Palette: success `#64e291` (hover `#39da73`, dark text), danger
    `#eb7070` (`#e54343`, white text), warning `#fec771` (`#feb33e`,
    dark text), info `#03A9F4` (white text), secondary `#696464`
    (white text), rose `#e83e8c` (badge-only 6th color)
  - Hero: `.hero-wrap{height:600px;background-size:cover;background-
position:top center}` (sunset photo `images/bg_1.jpg`, NO overlay);
    `.hero-wrap .text h2{font-weight:700;color:#fff;font-size:50px;
text-transform:uppercase}`; byline = circular `images/person.jpg`
    avatar + "Designed by: <brand>"
  - Navbar: `.ftco-navbar-light{background:transparent!important;
position:absolute;top:30px;z-index:3}` floating over the hero
    (dark text/icons on the photo); on scroll it gains `background:#000`
    — recreation may keep it simple (absolute transparent + dark
    wordmark/icon treatment)
  - Font: `body{font-family:"Open Sans",Arial,sans-serif;font-size:16px;
line-height:1.8;font-weight:400;color:#777777}` (headings inherit
    the family; `h1{34px/500}`, `.heading-section{28px/500}` over
    `#212529`)
  - Buttons: base `.btn` 400 weight `#212529` text, default radius
    .25rem; `.btn-round{border-radius:40px}` (pill); `.btn-fab` +
    `.btn-icon{width:40px;height:40px;border-radius:50%}` circle
    icon buttons (white bg on the login card); `.btn-white{background:
#fff;border:1px solid #fff;color:#000}` (navbar Download, login
    Get Started); `.btn-outline-*` 2px borders in palette colors;
    `.btn-link` colored text links; hero-card buttons btn-info /
    btn-success / btn-warning
  - Forms: Bootstrap-style `.form-control` (1rem, `#495057` text,
    `#fff` bg, .25rem radius); success variant green border ("Success"
    placeholder), error variant red border ("Error Input"); icon input
    (ionicons); `.fill-checkbox` custom checkbox/radio/switch with
    `--color:#64c4ed` (gray `#aaa` when disabled)
  - Badges: `.badge` pill (`badge-pill`), `p-2 px-3`, SOLID
    contextual fills — Primary `#64c4ed` (dark text), Info `#03A9F4`,
    Success `#64e291` (dark text), Warning `#fec771` (dark text),
    Danger `#eb7070`, Rose `#e83e8c`
  - Progress: `.progress{height:1rem;background:#e9ecef;border-radius:.25rem}`
    with palette bars at 40% / 60% / 70% (primary) + 35% (success) +
    20% (warning) + 30% (danger)
  - Pagination: standard rectangular page links (`« 1 2 3 4 5 »` and
    "Previous 1…7 Next" rows), active item filled primary — clickable
    React state
  - Cards: `.card{border:none;box-shadow:0px 11px 30px -9px rgba(0,0,0,0.05)}`
    — the three hero cards overlap the hero/band boundary (negative
    margin / pull-up)
  - Accordion: `.myaccordion .btn{width:100%;color:#000;font-size:20px;
text-transform:capitalize;letter-spacing:0}` (borderless, chevron
    toggles)
  - Carousel: `.slider-text{height:750px}` full-bleed photo slides with
    white uppercase-ish h2 + `btn-outline-white btn-round` pill CTA +
    prev/next controls
  - Sections: `.ftco-section{padding:3em 0}`; `.ftco-section-2{padding:6em 0}`
    (wide bands: pills, JS components, login, CTA, footer); bands
    alternate white / `bg-light` `#f8f9fa`; photo bands: hero
    (`bg_1.jpg` sunset), Transparent-navbar demo (`bg_1.jpg` 400px
    backdrop), Images (3× `person.jpg` portraits), login band
    (`bg_2.jpg`)

## Design tokens

| Token                | Value                                                                                                                                                | Where                                                                                                                       |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| brand/primary        | `#64c4ed`                                                                                                                                            | primary buttons/badges, focused inputs, fill-checkbox accents, active pagination, hero card 1 icon/button, blockquote small |
| primary button label | `#212529` (dark, hover fill `#42b7e9`)                                                                                                               | `.btn.btn-primary` fills — the base `.btn` sets the dark label; white labels apply to info/danger/rose only                 |
| primary hover/active | `#36b3e8` / `#1faae5` / `#0286c2`                                                                                                                    | button hover/active states                                                                                                  |
| success              | `#64e291` (hover `#39da73`)                                                                                                                          | success buttons/badges/progress, hero card 2 icon/button                                                                    |
| danger               | `#eb7070` (`#e54343`)                                                                                                                                | danger buttons/badges/progress, error input border                                                                          |
| warning              | `#fec771` (`#feb33e`)                                                                                                                                | warning buttons/badges/progress, hero card 3 icon/button                                                                    |
| info                 | `#03A9F4`                                                                                                                                            | info buttons/badges/alert, hero card 1 button                                                                               |
| secondary            | `#696464`                                                                                                                                            | secondary buttons/links (warm gray)                                                                                         |
| rose                 | `#e83e8c`                                                                                                                                            | 6th "Rose" badge only                                                                                                       |
| heading text         | `#212529`                                                                                                                                            | h1–h6, `.heading-section` (28px/500)                                                                                        |
| body text            | `#777777`                                                                                                                                            | body 16px/1.8/400, blurbs                                                                                                   |
| input text           | `#495057`                                                                                                                                            | form controls                                                                                                               |
| muted/disabled       | `#aaa`                                                                                                                                               | disabled fill-checkbox                                                                                                      |
| light band           | `#f8f9fa` (bg-light)                                                                                                                                 | alternating showcase bands, footer                                                                                          |
| card shadow          | `0 11px 30px -9px rgba(0,0,0,0.05)` (border: none)                                                                                                   | feature cards, login card                                                                                                   |
| font family          | `"Open Sans", Arial, sans-serif` (Google Fonts)                                                                                                      | everywhere                                                                                                                  |
| hero type            | 50px / 700 / uppercase / `#fff`                                                                                                                      | hero h2 (`.hero-wrap .text h2`)                                                                                             |
| button shape         | default .25rem; `.btn-round` 40px pill; circle 40px icon buttons                                                                                     | all buttons                                                                                                                 |
| button white         | `#fff` bg, `#000` text                                                                                                                               | navbar Download, login Get Started                                                                                          |
| badge                | solid pill `p-2 px-3`; primary/success/warning dark text, info/danger/rose white                                                                     | badges                                                                                                                      |
| progress             | 1rem tall in the base `.progress` rule, **5px in this demo** (the preview sets `style="height: 5px"` on every bar), `.25rem` radius, `#e9ecef` track | progress bars                                                                                                               |
| fill-checkbox        | accent `#64c4ed`; disabled `#aaa`                                                                                                                    | checkboxes, radios, toggles                                                                                                 |
| accordion btn        | 20px capitalize, black, borderless + chevron                                                                                                         | accordion                                                                                                                   |
| section rhythm       | `.ftco-section` `3em 0`; `.ftco-section-2` `6em 0`                                                                                                   | layout                                                                                                                      |
| hero photo           | sunset over fields/lake (picsum seeded `sorbet-hero`)                                                                                                | hero                                                                                                                        |
| login band photo     | landscape backdrop (picsum seeded `sorbet-signup`)                                                                                                   | login band                                                                                                                  |
| carousel photos      | 3 full-bleed slides (picsum seeded `sorbet-slide-1..3`)                                                                                              | carousel                                                                                                                    |
| portrait             | person photo (picsum seeded `sorbet-person`)                                                                                                         | images band, hero byline avatar                                                                                             |

## Requirements

### Feature: Navbar

A transparent navbar floating over the hero photo: brand wordmark,
social icon links, a "Components" dropdown, and a white pill Download
button.

#### Scenario: Navbar renders as in the reference

- **Given** the page loads
- **When** the navbar renders
- **Then** it floats absolutely over the hero photo (transparent
  background, dark wordmark/icons against the bright sky)
- **And** the brand wordmark shows "Sorbet" (the source brand is never
  reused)
- **And** three social icon links (Facebook, Twitter, Instagram —
  lucide icons, `aria-label`ed) sit beside a "Components" dropdown
  trigger (React state, `aria-expanded`) with items "All Components",
  "Documentation", "Download"
- **And** a white pill Download button (`.btn-white` + Cloud/Download
  icon, blue label text) sits at the right

### Feature: Hero

A 600px photographic sunset hero: bold uppercase white headline and a
small avatar byline.

#### Scenario: Hero renders as in the reference

- **Given** the page loads
- **When** the hero renders
- **Then** the band is 600px tall with a cover/top-center photo (picsum
  seeded `sorbet-hero`, a warm sunset over fields and a lake per the
  screenshot) and NO gradient overlay
- **And** the centered content shows the 50px/700 uppercase white
  headline "Bootstrap 4 UI Kit"
- **And** below it a byline: small circular avatar (picsum
  `sorbet-person`) + "Designed by: Component Dock" — the source
  attribution is replaced and links `https://www.componentdock.com/`

### Feature: Feature cards band

Three white cards overlapping the hero's bottom edge into the first
`bg-light` band, one per palette accent.

#### Scenario: Feature cards render as in the reference

- **Given** the hero is followed by the first light band
- **When** the cards render
- **Then** three equal white cards (borderless, `0 11px 30px -9px
rgba(0,0,0,0.05)` shadow) straddle the hero/band boundary
- **And** each card has a colored circular icon badge on top (left
  aligned): info-blue, success-green, warning-amber (lucide icons,
  e.g. Target/Settings/Heart)
- **And** each card shows an h5 title "Card title treatment" (same
  kind: card title), a gray blurb paragraph (paraphrasable lorem-kind
  copy), and a colored "Go somewhere" button matching the badge
  (btn-info / btn-success / btn-warning)

### Feature: Basic Elements heading

The showcase opens with a plain section title.

#### Scenario: Heading renders

- **Given** the feature cards band ends
- **When** the next section renders
- **Then** it shows the h1 "Basic Elements" (34px/500 `#212529`) with
  no other content

### Feature: Buttons showcase

Five button styles in a row plus colored text links.

#### Scenario: Button styles render as in the reference

- **Given** the buttons band renders
- **When** the demo row is visible
- **Then** the row shows "Default Button" (outline primary, 2px
  `#64c4ed` border), "Filled Button" (solid `#64c4ed`, white text),
  "Round Button" (outline primary pill, radius 40px), "Button With
  Icon" (solid primary + heart icon) beside a 40px primary circle icon
  button (heart), and "Simple Button" (primary `btn-link` text)
- **And** below, seven colored text links render: Primary link
  (`#64c4ed`), Secondary link (`#696464`), Success link (`#64e291`),
  Danger link (`#eb7070`), Warning link (`#fec771`), Info link
  (`#03A9F4`), Dark link (`#212529`)

### Feature: Inputs showcase

Four labeled input states: default, valid, invalid, and icon-adorned.

#### Scenario: Input states render as in the reference

- **Given** the inputs band renders
- **When** the field row is visible
- **Then** it renders four text inputs with placeholders "Default",
  "Success", "Error Input", and "With Ionicons Icons"
- **And** the "Success" input shows the green valid border, the "Error
  Input" shows the red invalid border, and the icon input shows a
  leading lucide icon
- **And** typing works (controlled or uncontrolled native inputs) and
  focus rings/borders follow the `#64c4ed` primary

### Feature: Checkboxes & radios showcase

Custom fill-style checkboxes and radios in checked, unchecked, and
disabled states.

#### Scenario: Checkbox variants render as in the reference

- **Given** the checkboxes band renders
- **When** the checkbox group renders
- **Then** four checkboxes labeled "Unchecked", "Checked", "Disabled
  Unchecked", "Disabled Checked" render with the `#64c4ed` fill accent
  (`#aaa` when disabled), and clicking toggles the enabled ones

#### Scenario: Radio variants render as in the reference

- **Given** the radios group renders
- **When** the radio rows render
- **Then** four radios labeled "Radio is off", "Radio is on",
  "Disabled Radio is off", "Disabled radio is on" render in one group
  (the "on" one selected), and selecting a different enabled radio
  moves the selection

### Feature: Toggle Buttons showcase

Switch-style toggles in on and off states.

#### Scenario: Toggles render as in the reference

- **Given** the toggles group renders
- **When** the switches render
- **Then** a "Toggle is on" switch renders ON (accent `#64c4ed`) with
  the "ON" thumb text and a "Toggle is Off" switch renders OFF
- **And** clicking a switch flips it (React state, `role="switch"` +
  `aria-checked`)

### Feature: Sliders & badges showcase

Range sliders beside the six pill badges.

#### Scenario: Sliders and badges render as in the reference

- **Given** the sliders/badges band renders
- **When** the content renders
- **Then** a "Sliders" heading with two draggable range sliders
  (native `<input type="range">`, styled with the primary accent)
- **And** a "Badges" heading with six solid pill badges (`p-2 px-3`):
  Primary `#64c4ed`, Info `#03A9F4`, Success `#64e291`, Warning
  `#fec771`, Danger `#eb7070`, Rose `#e83e8c` (primary/success/warning
  with dark text; info/danger/rose white text)

### Feature: Progress bars & pagination showcase

Six labeled progress bars and two pagination rows.

#### Scenario: Progress bars render as in the reference

- **Given** the progress/pagination band renders
- **When** the progress group renders
- **Then** three primary bars labeled "40% Complete", "60% Complete",
  "70% Complete" render at those widths, followed by "35% Complete
  (success)" green, "20% Complete (warning)" amber, and "30% Complete
  (danger)" coral
- **And** bars are 1rem tall with `#e9ecef` tracks and .25rem radius

#### Scenario: Paginations render as in the reference

- **Given** the pagination group renders
- **When** the two rows render
- **Then** row one is `« 1 2 3 4 5 »` and row two is "Previous 1 2 3 4
  5 6 7 Next" with the active item filled `#64c4ed` (white text)
- **And** clicking a page item moves the active state (React state)

### Feature: Navigations showcase

Four navbar demos in brand colors, one on a photo backdrop.

#### Scenario: Navbar variants render as in the reference

- **Given** the navigations band renders
- **When** the demo navbars render
- **Then** four stacked navbars render labeled "Primary Color", "Info
  Color", "Danger Color", "Transparent"
- **And** each shows links "Discover" (current), "Profile", "Settings"
  with a dropdown (React state, `aria-expanded`) — the Info variant
  adds a social-icon drop item (Facebook/Twitter/Instagram), the
  Danger variant adds "Dropdown header" + "Separated link" +
  "One more separated link"
- **And** the Transparent navbar sits on a 400px photo backdrop
  (picsum `sorbet-hero` crop or seeded `sorbet-navbg`) with a
  dropdown of its own

### Feature: Navigation pills showcase

Tab-style pills with switching content panels.

#### Scenario: Pills render as in the reference

- **Given** the pills band renders (`bg-light`, `.ftco-section-2`)
- **When** the tabs render
- **Then** pills "Home" (active), "Profile", "Messages" render and
  clicking switches the panel below (React state, `aria-selected`)
- **And** each panel shows a lorem-kind paragraph (paraphrasable:
  "Far far away, behind the word mountains…" same kind)

### Feature: Notifications showcase

Four dismissible alerts in the contextual palette.

#### Scenario: Alerts render as in the reference

- **Given** the notifications band renders
- **When** the alerts render
- **Then** four alerts render labeled "Info alert:", "Success Alert:",
  "Warning Alert:", "Error Alert:" each with a message line
  (paraphrasable, same kind of friendly copy)
- **And** each alert is dismissible — the × closes it (React state)

### Feature: Typography showcase

The full type scale with sample copy.

#### Scenario: Type scale renders as in the reference

- **Given** the typography band renders
- **When** the scale renders
- **Then** headings 1–6 render "Header <n> Thinking in textures"
  (`#212529`, weight 500, h1 34px)
- **And** a "Paragraph" sample follows (paraphrasable long-ish
  leadership quote, same kind)

### Feature: Images showcase

Three photo treatments with a caption, over a light band.

#### Scenario: Image variants render as in the reference

- **Given** the images band renders (`bg-light`)
- **When** the image row renders
- **Then** three variants render labeled "Rounded Image", "Circle
  Image", "Circle Raised" (circle + shadow lift), each showing the
  same portrait (picsum `sorbet-person`) with the caption "Clyde Ford"

### Feature: Javascript components showcase

Interactive demos: modal, datetime picker, popovers, tooltips,
accordion.

#### Scenario: JS component demos render as in the reference

- **Given** the JS components band renders (`bg-light`,
  `.ftco-section-2`)
- **When** the demos render
- **Then** "Modals" shows a "Launch demo modal" button opening a
  centered modal (h5 "Modal title", lorem paragraph, × close, "Close"
  and "Save changes" buttons; Escape + backdrop close, focus managed)
- **And** "Datetimepickers" shows a labeled "Datetime picker" using a
  native `<input type="datetime-local">` (no library copied)
- **And** "Popovers" shows four triggers "On top" / "On right" / "On
  bottom" / "On left" opening shadowed popover cards in those
  directions (React state)
- **And** "Tooltip" shows the same four direction triggers with
  tooltips (`aria-describedby`)
- **And** "Accordion/Collapse" shows two borderless 20px-capitalize
  toggles "Collapse Menu 1" and "Collapse Menu 2" (chevron, one open
  at a time or independent — React state, `aria-expanded`) each
  revealing a lorem paragraph

### Feature: Carousel showcase

Three full-bleed photo slides with outline-white pill CTAs.

#### Scenario: Carousel renders as in the reference

- **Given** the carousel band renders (`ftco-no-pt ftco-no-pb`)
- **When** the slider renders
- **Then** three photo slides (picsum `sorbet-slide-1..3`) show white
  h2 headlines — "This is Carousel Bootstrap Enjoy Free UI Kit.", "We
  are Sorbet Free UI Kit.", "Get Sorbet Free UI Kit" (the source brand
  is never reused) — each with an outline-white pill button "See all
  components" (`btn-outline-white btn-round`, 2px white border)
- **And** prev/next controls move between slides (React state)

### Feature: Examples band

A centered copy band introducing pre-built example pages.

#### Scenario: Examples copy renders as in the reference

- **Given** the carousel ends
- **When** the examples band renders (`.ftco-section-2`)
- **Then** the heading "Completed with examples" renders above a
  centered paragraph (paraphrasable, same kind: "The kit comes with
  three pre-built pages to help you get started faster…")

### Feature: Login card band

A photo-backed signup band with a floating login card.

#### Scenario: Login card renders as in the reference

- **Given** the examples band ends
- **When** the signup band renders (`.ftco-section-2 section-signup`,
  photo backdrop picsum `sorbet-signup`)
- **Then** a white card shows the h4 "Card Login", three 40px white
  circle social icon buttons (Facebook, Twitter, Instagram —
  `aria-label`ed), a "Username" text input and a "Password..." password
  input, a `#64c4ed` fill-checkbox "I Agree to the terms and
  conditions.", and a white "Get Started" button (`.btn-white`)
- **And** the form validates (zod + controlled state per conventions)
  and blocks submit until username/password are present and the terms
  checkbox is checked

### Feature: Download CTA band

A plain band with a large primary download button.

#### Scenario: CTA renders as in the reference

- **Given** the login band ends
- **When** the CTA band renders (`.ftco-section-2`, plain background —
  no photo)
- **Then** the heading "Do you like this UI Kit?" renders above a large
  solid primary button "Download, it's free!" (`btn-primary btn-lg`)

### Feature: Footer

A light footer with the attribution line.

#### Scenario: Footer renders as in the reference

- **Given** the CTA band ends
- **When** the footer renders (`bg-light`, `.ftco-section-2`)
- **Then** it shows "Copyright © <year> All rights reserved" and an
  attribution line "This template is made with ♥ by Component Dock"
  where "Component Dock" links `https://www.componentdock.com/`
  (the source attribution is replaced)

### Feature: Design tokens & typography

The recreation exposes the reference palette and Open Sans as Tailwind
4 `@theme` tokens.

#### Scenario: Theme tokens match the reference palette

- **Given** the app's `src/index.css` theme
- **When** the tokens are declared
- **Then** the palette includes: primary `#64c4ed`, success `#64e291`,
  danger `#eb7070`, warning `#fec771`, info `#03A9F4`, secondary
  `#696464`, rose `#e83e8c`, heading `#212529`, body `#777777`, input
  `#495057`, light band `#f8f9fa`
- **And** "Open Sans" (400–700) loads via Google Fonts `<link>` in
  `index.html`; body renders 16px/1.8 weight 400 `#777777`, headings
  weight 500 `#212529` (hero h2 50px/700 uppercase white)
- **And** buttons use default .25rem corners, pills radius 40px,
  circles 40px; cards are borderless with `0 11px 30px -9px
rgba(0,0,0,0.05)`; badges are solid pills `p-2 px-3`
- **And** section rhythm is `3em 0` (wide bands `6em 0`), alternating
  white / `#f8f9fa`; hero is 600px cover/top-center with no overlay

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/sorbet/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/sorbet/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Section order 1:1 with the preview DOM: navbar (transparent over
      hero) → hero (600px sunset photo) → 3 overlapping feature cards
      (bg-light) → "Basic Elements" h1 → Buttons → Inputs → Checkboxes
      → Radio Buttons → Toggle Buttons → Sliders + Badges → Progress
      bars + Paginations → Navigations (4 navbar demos, last on photo)
      → Navigation Pills (bg-light, ftco-section-2) → Notifications →
      Typography → Images (bg-light) → Javascripts Components (Modals,
      Datetimepickers, Popovers, Tooltip, Accordion/Collapse —
      bg-light, ftco-section-2) → Carousel → "Completed with examples"
      (ftco-section-2) → Card Login band (photo, ftco-section-2) →
      "Do you like this UI Kit?" CTA (ftco-section-2) → bg-light
      footer
- [ ] Sky blue `#64c4ed` is the single brand color: filled/outline
      primary buttons, primary badge (dark text), focused input
      borders, fill-checkbox accents, active pagination, hero card 1
      icon/button, blockquote-style small accents
- [ ] Hero: sunset photo (picsum `sorbet-hero`) at 600px
      cover/top-center with NO overlay; 50px/700 uppercase white
      headline "Bootstrap 4 UI Kit"; avatar byline (picsum
      `sorbet-person`) "Designed by: Component Dock" linking
      `https://www.componentdock.com/`
- [ ] Feature cards: three borderless shadowed cards straddling the
      hero edge; circular icon badges info/green/amber; h5 "Card title
      treatment" + blurb + matching "Go somewhere" buttons
      (btn-info/btn-success/btn-warning)
- [ ] Buttons: Default (outline) / Filled (solid) / Round (pill
      outline) / With Icon (solid + heart) + 40px circle heart button /
      Simple (link); seven colored text links Primary…Dark
- [x] Inputs: "Default" / "Success" (green) / "Error Input" (red) /
      "With Ionicons Icons" (leading lucide icon)
- [ ] Checkboxes/radios: fill-style `#64c4ed`, checked + disabled
      variants, working toggling/selection
- [ ] Toggles: ON ("ON" thumb) and OFF switches, `role="switch"` +
      `aria-checked`, click flips
- [ ] Sliders: two native range inputs (no nouislider copy)
- [ ] Badges: six solid pills — Primary/Info/Success/Warning/Danger/
      Rose (`#e83e8c`), `p-2 px-3`
- [ ] Progress: 40/60/70% bars (primary / info / warning per the
      preview's bar classes) + a stacked track carrying 35% success,
      20% warning and 30% danger; 5px tall in the demo (the base
      `.progress` rule is 1rem), `#e9ecef` track, `sr-only` labels
- [ ] Pagination: two rows (`« 1 2 3 4 5 »` and Previous/1…7/Next),
      active filled `#64c4ed`, clickable React state
- [ ] Navigations: four labeled navbars (Primary/Info/Danger/
      Transparent) with Discover (current)/Profile/Settings + working
      dropdowns (`aria-expanded`); Info adds social drop items, Danger
      adds dropdown header + separated links; Transparent on 400px
      photo backdrop
- [ ] Pills: Home/Profile/Messages tabs switching lorem panels
      (React state, `aria-selected`)
- [ ] Notifications: four labeled alerts (Info/Success/Warning/Error)
      with working × dismiss
- [x] Typography: Header 1–6 "Thinking in textures" (weight 500
      `#212529`) + Paragraph sample (paraphrased)
- [ ] Images: Rounded / Circle / Circle Raised (shadow) over ONE
      shared picsum portrait (`sorbet-person`) with "Clyde Ford"
      caption
- [ ] JS components: modal (Launch demo modal → centered modal,
      Escape/backdrop/× close, "Close"/"Save changes"); native
      datetime-local picker; 4-direction popovers; 4-direction
      tooltips (`aria-describedby`); 2-item accordion (20px
      capitalize, chevron, `aria-expanded`)
- [ ] Carousel: 3 picsum slides (`sorbet-slide-1..3`) with white h2
      headlines ("…Enjoy Free UI Kit." / "We are Sorbet Free UI Kit." /
      "Get Sorbet Free UI Kit") + outline-white pill "See all
      components"; prev/next controls (React state)
- [x] Examples band: "Completed with examples" + centered
      paraphrasable paragraph
- [ ] Login card: photo backdrop (picsum `sorbet-signup`), "Card
      Login" h4, 3 white circle social icon buttons, Username +
      Password inputs, `#64c4ed` terms fill-checkbox, white "Get
      Started" button; zod-validated, submit blocked until valid
- [x] CTA: "Do you like this UI Kit?" + large primary "Download, it's
      free!" (no photo background)
- [ ] Footer: bg-light "Copyright © <year> All rights reserved | Made
      with ♥ by Component Dock" linking
      `https://www.componentdock.com/`
- [ ] All images are `picsum.photos/seed/sorbet-*` placeholders;
      icons from `lucide-react`; no copied assets or CSS; no Bootstrap
      JS, owl.carousel, magnific-popup, aos, nouislider,
      datetimepicker, ionicons/flaticon/icomoon fonts, or jQuery
- [x] Zero `colorlib` / "Smash" / "Smash Free UI Kit" demo-brand
      references anywhere in `apps/sorbet` (comments included)
- [x] App folder `apps/sorbet`, package
      `@free-react-templates/sorbet`, `homepage`
      `https://sorbet.free.componentdock.com`, `public/CNAME`
      `sorbet.free.componentdock.com`, lockfile registers the
      workspace
- [ ] `vite.config.ts` keeps `injectUiSource()`; tests at 100% coverage;
      `scripts/verify-app.sh sorbet` passes
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

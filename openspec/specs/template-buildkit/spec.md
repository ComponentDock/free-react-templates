# Template: Buildkit (Component UI Kit Showcase)

## Purpose

Buildkit is a component-showcase UI kit page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Buildex
Ui Kit" template (a tools/workshop-themed Bootstrap 4 UI kit demo), built
under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The reference is a LONG single-page component catalog: a transparent navbar
over a full-height dark industrial hero (welding photo under a heavy
overlay) with a light-weight white headline, a subtitle, and a violet pill
CTA — followed, 1:1 in order, by a "Basic Elements" intro and the kit's
showcase bands: Buttons (styles/sizes/colors/links/disabled/dropdowns/block),
Inputs (floating-label forms), Checkboxes / Radio Buttons / Toggle Buttons,
Sliders, Progress bars, Paginations (light-gray band), Menus, Navigations,
Navigation Tabs + Badges (light band), Notifications (four solid-color
alerts), Typography (H1–H6 scale + paragraph + quote), Images (rounded/
circle/raised variants), Javascripts Components (Modals, Datetimepickers,
Popovers, Tooltips; light band), a SOLID-VIOLET Bootstrap-Carousel band,
a "Completed with examples" intro, a photographic signup/cards band (Card
Login with a violet gradient header + three feature cards), and a white
centered footer whose attribution line links Component Dock instead of the
source.

The design is anchored by one signature color — violet `#6b48ff` — on every
primary button, active pagination circle, checked control, focused input
border, link button, navbar scrolled-active state, the carousel band, and
the login card's `(-45deg, #6a48ff → #b4a3ff)` gradient. Typography is
Open Sans throughout, unusually LIGHT for headings (weight 300, slate
`#3c4858`) over a 16px/300 body `#777777` with generous 1.8 line-height.
Buttons are material-style: soft drop shadows, and the pill form (`.btn-round`,
radius 40px) is the hero/CTA shape. Sections breathe at 4em (6em for the
`ftco-section-2` bands).

## Design reference (replication findings)

- **Original:** ColorLib "Buildex Ui Kit" — free Bootstrap 4 UI kit on a
  tools design (source: https://colorlib.com/wp/template/buildex-ui-kit/).
  Listed in TEMPLATES.md `## Ui Kit (8)` at line 3021; slug appears exactly
  once. NOTE: the theme preview slug is **`buildex`**, not `buildex-ui-kit`
  — `https://preview.colorlib.com/theme/buildex-ui-kit/` returns HTTP 404,
  while `https://preview.colorlib.com/theme/buildex/` is HTTP 200 and serves
  the kit (title "Buildex - Free Bootstrap 4 Template by Colorlib"). The
  product page references `preview.colorlib.com/#buildex` and
  `preview.colorlib.com/downloads/free/buildex-ui-kit.zip`. This "Buildex"
  UI kit is DISTINCT from the separate ColorLib "Consto" construction
  landing template, already recreated in-repo as `apps/buildex`
  (`openspec/specs/template-buildex/`) — hence the NEW name **buildkit**.
- **Live preview URL:** https://preview.colorlib.com/theme/buildex/
  (HTTP 200, 87,836 bytes HTML, verified 2026-10-01; theme stylesheet
  `css/style.css`, 107,043 bytes). HTML saved to `/tmp/buildex-preview.html`;
  theme CSS saved to `/tmp/buildex-style.css`. The preview DOM is
  authoritative for section order and copy.
- **Screenshot:** `buildex-free-template.jpg`
  (`https://colorlib.com/wp/wp-content/uploads/sites/2/buildex-free-template.jpg`,
  80,497 bytes JPEG, reviewed visually 2026-10-01) confirms the hero
  treatment: dark industrial welding/workshop photo under a heavy dark
  wash; navbar "Buildex Kit." wordmark + uppercase COMPONENTS dropdown +
  DOWNLOAD links left, facebook/twitter/instagram icons right (demo brand —
  never reused); centered huge white light-weight h1 "Buildex UI Kit.";
  subtitle "Free Bootstrap 4 UI Kit on Tools Design."; violet pill CTA
  "Download Tools" with a cloud icon; white "Basic Elements" section with a
  large light-weight slate heading below.
- **Stylesheets in the reference:** `css/open-iconic-bootstrap.min.css`,
  `css/animate.css`, `css/owl.carousel.min.css` + `owl.theme.default`,
  `css/magnific-popup.css`, `css/aos.css`, `css/ionicons.min.css`,
  `css/bootstrap-datetimepicker.min.css`, `css/nouislider.css`,
  `css/flaticon.css`, `css/icomoon.css`, `css/style.css` (theme — canonical
  tokens; Bootstrap 4 compiled in). Bootstrap grid/JS, owl carousel,
  magnific-popup, animate/AOS, ionicons/icomoon/flaticon/open-iconic icon
  fonts, datetimepicker, nouislider, and jQuery are NEVER copied:
  recreation uses Tailwind grid + flex, React-state tabs/carousel/dropdowns/
  modals/toggles, lucide-react icons, native `<input type="range">` /
  `<input type="datetime-local">`, and static styled slider demos. Open Sans
  loads via Google Fonts `<link>` in `index.html` (weights 300–700).
- **Key theme rules (verified in style.css):**
  - Signature violet: `.btn.btn-primary { background: #6b48ff; border: 1px
    solid #6b48ff; color: #fff }`; hover `#4c22ff`, active/pressed
    `#4215ff`; focus ring `0 0 0 0.2rem rgba(129, 99, 255, 0.5)`;
    `.bg-primary { background: #6b48ff }`; `.btn-link { color: #6b48ff }`;
    `.form-control:focus { border-color: #6b48ff }`;
    `.ftco-navbar-light.scrolled .nav-item.active > a { color: #6b48ff }`;
    pagination active/hover `#6b48ff` white
  - Login-card gradient: `.card.card-login { background: #6a48ff;
    background: linear-gradient(-45deg, #6a48ff 0%, #b4a3ff 100%) }` — the
    violet→lilac diagonal gradient; `.form-login .card-header` transparent,
    `.card-title` white
  - Font: `body { font-family: "Open Sans", Arial, sans-serif; font-size:
    16px; line-height: 1.8; font-weight: 300; color: #777777 }`
  - Headings: `h1–h5 { line-height: 1.4; color: #3c4858; font-weight: 300 }`
    (h6 stays default darker); hero h1 white 80px weight 400 (40px
    mobile); hero h4 24px weight 300 `rgba(255,255,255,0.9)`
  - Hero: `.hero-wrap` full-height photo (source `images/bg_3.jpg`, welding
    scene) + `.overlay { opacity: .8; background: #000 }`; recreation uses
    a picsum placeholder + `bg-black/80` overlay
  - Buttons: material-style — `box-shadow: 0px 10px 20px -6px rgba(0,0,0,
    0.12)`, hover/active `0px 12px 20px -6px rgba(0,0,0,0.21)`, outline
    none; base padding `12px 18px`; `.btn.btn-round { border-radius: 40px }`
    (the pill CTA shape — hero "Download Tools"); `.btn.btn-white {
    background: #fff; border: 1px solid #fff; color: #000 }` (carousel
    "See all components" on the violet band); `.btn.btn-link` transparent,
    no shadow (the "Simple" style); `.btn-sm` / `.btn-lg` size variants;
    block-level buttons stretch full width
  - Color row palette (Pick your color; verified hexes where noted):
    Primary `#6b48ff`, Secondary gray `#696464`-family, Success `#38cd8b`,
    Danger `#f2395f`, Warning `#f89647`, Info `#29cded`, Light `#f8f9fa`,
    Dark slate — solid + outline pairs
  - Alerts (rendered solid variants): `.alert.alert-info { background:
    #29cded }`, `.alert.alert-success { #38cd8b }`, `.alert.alert-warning
    { #f89647 }`, `.alert.alert-danger { #f2395f }` — white text on the
    solid fill
  - Form controls: `.form-control { height: 48px !important; background:
    #fff; color: #777777; font-size: 16px; font-weight: 300; border-radius:
    4px }`; `.form-group { position: relative; margin-bottom: 1.5rem }`
    with a right-side icon slot (`top: 50%; right: 15px`) — the
    floating-label input pattern; helper text below ("We'll never share
    your email with anyone else.")
  - Pagination variants: `.pagination-1` — 50×50px WHITE circles,
    `color: rgba(0,0,0,0.4)`, hover/active `#6b48ff` + white;
    `.pagination-2` — transparent circles, active `#6b48ff` + white +
    `0px 10px 27px -20px rgba(0,0,0,0.33)` shadow
  - Badges: `padding: .25em .4em; font-size: 75%; font-weight: 700;
    border: 1px solid #000; border-radius: 0.25rem`
  - Cards: radius `0.25rem`, border `rgba(0,0,0,0.125)`; `.form-login
    .social-line .btn-icon` — 40×40px round WHITE buttons (margin 0 2px)
    with `#6b48ff` icons (facebook/twitter/googleplus)
  - Sections: `.ftco-section { padding: 4em 0 }`; `.ftco-section-2 { padding:
    6em 0 }`; `#paginations`, `#navigationTabs`, `#javascriptsComponents`
    use `bg-light { background-color: #f8f9fa }`; `#carousel` is
    `bg-primary` (`#6b48ff`) with white `.slider-text h2`; the signup band
    is `section-signup page-header img` — a photographic background
    (`images/bg_2.jpg` in source) with the cards laid over it
  - Navbar: `ftco-navbar-light` transparent `position: absolute; top: 10px`
    over the hero, navbar-dark (brand + links white); nav-link 14px,
    weight 300, `text-transform: uppercase`, `color: #fff`, icons 20px
    white; `.scrolled` → `position: fixed; background: #fff; box-shadow: 0
    0 10px rgba(0,0,0,0.1)` with the active item turning `#6b48ff`;
    mobile toggler labeled "Menu" with aria-expanded
  - Footer: white, `border-top: 1px solid rgba(0,0,0,0.04)`, centered
    single line: "Copyright © <year> All rights reserved. This template is
    made with <heart glyph> by Colorlib" — the recreation's footer links
    `https://www.componentdock.com/` ("Component Dock") instead
  - Deviation to document: `body { min-width: 992px !important }` — the
    source pins a desktop-only width; the recreation is RESPONSIVE instead
    (Tailwind breakpoints; carousel/dropdowns/tabs adapt)
- **Content map (preview DOM):** navbar brand "Buildex Kit." (demo brand —
  never reused), nav "Components" dropdown (All Components / Documentation)
  + "Download" + 3 social icon links; hero "Buildex UI Kit." / "Free
  Bootstrap 4 UI Kit on Tools Design." / "Download Tools"; "Basic Elements"
  intro; Buttons — Pick your style (Default / Round / With Icon / Simple),
  Pick your size (Small Size / Regular Size / Large Size), Pick your color
  (Primary, Secondary, Success, Danger, Warning, Info, Light, Dark — solid
  + outline), Links (Primary/Secondary/Success/Danger/Warning/Info/Dark
  links), Disabled Buttons, Buttons with Dropdown ("Dropdown button" ×3 →
  Action / Another action / Something else here), Block Level Buttons
  (Block Level info / Block Level success); Inputs — "With Floating Label"
  form groups + helper text; Checkboxes (Unchecked / Checked / Disabled
  variants), Radio Buttons ("Radio os off" [sic] / "Radio is on"), Toggle
  Buttons (on/off); Sliders; Progress bars (60% / 90% / 70% / 50% / 40%
  plus skill bars labeled HTML 60%, WordPress 80%, WordPress 95% —
  labels paraphrasable); Paginations (« 1–5 » circle style + Previous 1–7
  Next style); Menu (Menu / Discover (current) / Profile / Settings) +
  Menu with Icons dropdown (Dropdown header: Action / Another action /
  Something else here / Separated link / One more separated link);
  Navigations (seven navbar pattern variants); Navigation Tabs (Home /
  Profile / Messages + lorem panes) + Badges; Notifications (Info / Success
  / Warning / Error alerts with the kit's quirky demo copy — paraphrase
  ok, keep the same KIND); Typography (Header 1–6 "Thinking in textures"
  + "Small Tag" headers + Paragraph + Quote); Images (Rounded Image /
  Circle Image / Rounded Raised / Circle Raised); Javascripts Components
  (Modals — "Launch demo modal" → Modal title / body / Close / Save
  changes; Datetimepickers — "Datetime picker"; Popovers + Tooltips — On
  top / On right / On bottom / On left); Carousel ("This is Carousel
  Bootstrap Enjoy Free UI Kit." / "Buildex Free UI Kit." / "Enjoy Free UI
  Kit made by Buildex." — demo copy paraphrasable — each with "See all
  components"); "Completed with examples" + intro paragraph about three
  pre-built pages; signup cards band — "Card Login" (violet gradient
  header, white title "Card Login", social icon line, login inputs,
  "Get Started" button) + "Default Featured" card ("Special title
  treatment" + supporting text + "Go somewhere") + "Card with footer"
  (same title treatment + footer "2 days ago"); footer "Copyright © All
  rights reserved / This template is made with <heart> by <Colorlib>" —
  the demo brand "Buildex"/"Buildex Kit." appears NOWHERE in app files.

## Requirements

### Feature: Navbar

A transparent navbar floating over the hero: brand wordmark left, uppercase
icon links (Components dropdown, Download) beside it, social icons right;
white-on-photo until the page scrolls, then fixed white with a shadow.

#### Scenario: Header renders as in the reference
- **Given** the page loads on a desktop viewport
- **When** the navbar renders over the hero
- **Then** the bar is TRANSPARENT, absolutely positioned ~10px from the
  top, full width, over the hero photo
- **And** the left side shows the wordmark "buildkit." in white
  (the source demo brand "Buildex Kit." is never reused; the recreation
  brand is "buildkit")
- **And** the links are uppercase 14px weight-300 white with 20px white
  icons: "Components" with a layers icon opening a dropdown (items "All
  Components" → anchor `#buttons`, "Documentation" → anchor `#typography`,
  each with an icon) and "Download" with a cloud-download icon (anchor
  `#signup`)
- **And** the right side shows three social icon links (facebook, twitter,
  instagram — lucide icons, white, aria-labels)
- **And** on viewports below `lg` the links collapse behind a "Menu"
  toggler button (aria-expanded reflecting state) that toggles the link
  list — matching the source's mobile toggler
- **And** once the page is scrolled past the hero, the navbar becomes
  fixed at the top with a WHITE background + `0 0 10px rgba(0,0,0,0.1)`
  shadow and the active section's nav link turns violet `#6b48ff`

### Feature: Hero

A full-height dark industrial hero: light-weight white headline, subtitle,
violet pill CTA.

#### Scenario: Hero renders as in the reference
- **Given** the page loads
- **When** the hero renders
- **Then** the background is a dark industrial/workshop photo (picsum
  seeded `buildkit-hero`, e.g. a welding/tools scene), cover/center,
  full viewport height, under an 80%-black overlay (`bg-black/80` per CSS
  `.overlay { opacity: .8 }`)
- **And** the centered content shows the white h1 "Buildkit UI Kit." at
  ~80px, font-weight 400 (40px on mobile)
- **And** a subtitle below at ~24px weight 300
  `rgba(255,255,255,0.9)`: "A free UI kit on tools & workshop design."
  (same kind of copy as the source subtitle, paraphrasable; the demo
  "Bootstrap 4" phrasing is not required)
- **And** a violet pill button `#6b48ff` (radius 40px, white text,
  material shadow, 12px/18px padding) "Download Kit" with a
  lucide CloudDownload icon, anchoring to `#buttons`

### Feature: Basic Elements intro

The first white section: a large light-weight heading introducing the kit.

#### Scenario: Intro renders as in the reference
- **Given** the hero renders
- **When** the first white section is visible
- **Then** the section has 4em vertical padding on white
- **And** it shows the h1 "Basic Elements" in slate `#3c4858`, weight 300,
  left-aligned in the container (matching the screenshot)

### Feature: Buttons showcase

The `#buttons` section demonstrating every button style, size, color,
link, disabled, dropdown, and block variant.

#### Scenario: Button variants render as in the reference
- **Given** the buttons section renders
- **When** the showcase is visible
- **Then** the section header shows "Buttons" (h2) with the sub-groups:
  "Pick your style", "Pick your size", "Pick your color", "Links",
  "Disabled Buttons", "Buttons with Dropdown", "Block Level Buttons"
- **And** "Pick your style" renders Default / Round (pill radius 40px) /
  With Icon (icon + label) / Simple (transparent `.btn-link` style, no
  shadow) buttons in violet primary
- **And** "Pick your size" renders Small Size / Regular Size / Large Size
  rows
- **And** "Pick your color" renders solid + outline pairs for Primary
  `#6b48ff`, Secondary gray, Success `#38cd8b`, Danger `#f2395f`, Warning
  `#f89647`, Info `#29cded`, Light, Dark
- **And** buttons carry the material drop shadow (`0 10px 20px -6px
  rgba(0,0,0,0.12)`, deeper on hover)
- **And** "Links" renders colored link buttons (violet `#6b48ff` primary
  link + the palette family), transparent, no shadow
- **And** "Disabled Buttons" renders a non-interactive disabled variant
- **And** "Buttons with Dropdown" renders three dropdown buttons whose
  menus list "Action / Another action / Something else here" (React-state
  dropdown, click toggles, aria-expanded)
- **And** "Block Level Buttons" renders full-width buttons (Block Level
  info, Block Level success)

### Feature: Inputs showcase

The `#inputs` section: floating-label form groups.

#### Scenario: Floating-label inputs render as in the reference
- **Given** the inputs section renders
- **When** the forms are visible
- **Then** the section header shows "Inputs" + "With Floating Label"
- **And** each form group is a 48px-tall white input (radius 4px, 16px
  weight 300, `#777` text) with a floating label that shifts on focus and
  the border turning violet `#6b48ff` on focus
- **And** helper text renders below the field: "We'll never share your
  email with anyone else." (paraphrasable kind of copy)
- **And** submit is prevented (no-op in the recreation)

### Feature: Checkboxes, radios, toggles

The `#checkRadios` section demonstrating the three input-control families.

#### Scenario: Control variants render as in the reference
- **Given** the checkRadios section renders
- **When** the controls are visible
- **Then** three sub-groups render: "Checkboxes" (Unchecked / Checked /
  Disabled Unchecked / Disabled Checked), "Radio Buttons" ("Radio os off"
  [sic source label — paraphrase ok] / "Radio is on" / disabled
  variants), "Toggle Buttons" (Toggle is on / Toggle is off)
- **And** checked/toggled states use the kit accent (violet `#6b48ff` or
  the kit green `#38cd8b` per the screenshot's toggle treatment — match
  the screenshot)
- **And** toggles are real `<input type="checkbox" role="switch">` or
  button-role switches with `aria-checked` reflecting state, flipped by
  click

### Feature: Sliders

The unnamed section between checkRadios and progressbar: range-slider
demos.

#### Scenario: Slider demos render as in the reference
- **Given** the sliders section renders
- **When** the section is visible
- **Then** the header shows "Sliders"
- **And** at least one styled range slider renders (native
  `<input type="range">` with kit-accent track/thumb styling, or static
  styled track demos) — the source uses the nouislider plugin, which is
  NEVER copied; React-state or native inputs only

### Feature: Progress bars

The `#progressbar` section: percentage bars + labeled skill bars.

#### Scenario: Progress bars render as in the reference
- **Given** the progressbar section renders
- **When** the bars are visible
- **Then** the header shows "Progress bars"
- **And** a first row renders five percentage bars at 60% / 90% / 70% /
  50% / 40% (violet fill on a light track, percentage label)
- **And** a second group renders skill bars with h6 labels — e.g. "HTML"
  60%, "WordPress" 80%, "WordPress" 95% (labels paraphrasable; keep the
  label-over-bar pattern)
- **And** bar fills animate or render at their target widths on mount
  (React state or CSS transition — no plugin)

### Feature: Paginations

The `#paginations` section on a light-gray band: two pagination styles.

#### Scenario: Pagination variants render as in the reference
- **Given** the paginations section renders
- **When** the band is visible
- **Then** the section background is `#f8f9fa` (bg-light)
- **And** the header shows "Paginations"
- **And** variant 1 renders « / 1 / 2 / 3 / 4 / 5 / » as 50px WHITE
  circles (`rgba(0,0,0,0.4)` numbers) where the active/hover page is
  `#6b48ff` with white text
- **And** variant 2 renders Previous / 1–7 / Next as transparent circles
  where the active page is `#6b48ff` + white with a soft shadow
- **And** clicking a page number updates the active state (React state)

### Feature: Menus

The `#menus` section: navbar-style menu + icon dropdown.

#### Scenario: Menu demos render as in the reference
- **Given** the menus section renders
- **When** the demos are visible
- **Then** the header shows "Menu" with a light navbar-style menu:
  "Menu" / "Discover" (marked current) / "Profile" / "Settings"
- **And** a "Menu with Icons" demo shows a "Menu" trigger opening a
  dropdown headed "Dropdown header" with items "Action / Another action /
  Something else here / Separated link / One more separated link"
  (React-state dropdown; separated items divider-styled)

### Feature: Navigations

The `#navigations` section: multiple navbar pattern variants stacked.

#### Scenario: Navigation variants render as in the reference
- **Given** the navigations section renders
- **When** the variants are visible
- **Then** the header shows "Navigations"
- **And** seven light navbar variants render stacked (px-0, full-width
  rows per the preview's seven `<nav class="navbar px-0 navbar-expand-lg
  navbar-light">` blocks), each demonstrating a pattern: brand + links,
  brand + dropdown + right links, centered links, and dropdown items with
  "Dropdown header" groups — match the preview's variety 1:1 in count and
  kind (paraphrase link labels; keep the icon/caret/dropdown treatments)

### Feature: Navigation tabs + badges

The `#navigationTabs` section on a light band: tab set + badge showcase.

#### Scenario: Tabs and badges render as in the reference
- **Given** the navigationTabs section renders
- **When** the band is visible
- **Then** the background is `#f8f9fa` (bg-light)
- **And** "Navigation Tabs" renders a tab bar Home / Profile / Messages
  with panes of lorem copy ("Far far away, behind the word mountains..."
  kind — paraphrasable), active tab styled with the kit accent, switching
  driven by React state
- **And** a "Badges" sub-section renders badge variants (bordered
  `1px solid #000`, radius 0.25rem, 75% size, 700 weight; the kit's
  badge color set — match the screenshot/preview)

### Feature: Notifications

The `#notifications` section: four solid-color alerts.

#### Scenario: Alert variants render as in the reference
- **Given** the notifications section renders
- **When** the alerts are visible
- **Then** the header shows "Notifications"
- **And** four alerts render with the kit's quirky demo copy kinds —
  Info ("You've got some friends nearby..." kind), Success ("Yuhuuu! You
  got your album..." kind), Warning (the footer-copyright joke kind),
  Error ("Damn man! You screwed up the server..." kind) — paraphrase
  fine, keep the same KIND and voice
- **And** the fills are the SOLID kit colors with white text: info
  `#29cded`, success `#38cd8b`, warning `#f89647`, danger `#f2395f`

### Feature: Typography

The `#typography` section: the full type scale, small-tag headers,
paragraph, and quote.

#### Scenario: Type scale renders as in the reference
- **Given** the typography section renders
- **When** the samples are visible
- **Then** the header shows "Typography"
- **And** Header 1–6 render the same sample text kind ("Thinking in
  textures") at descending sizes, in the kit's light heading style
  (`#3c4858` weight 300, lh 1.4)
- **And** a "Small Tag" header sample renders an h2 with an inline
  `<small>` subtitle ("Use "small" tag for the headers" kind)
- **And** a Paragraph sample (the "leader of a company..." demo lorem
  kind — paraphrase ok) and a Quote sample render
- **And** optional left-margin note styling per the source's `.typo
  padding-left: 25%` treatment if it matches the screenshot (implementer
  judges; do not block on it)

### Feature: Images

The `#images` section: image shape variants.

#### Scenario: Image variants render as in the reference
- **Given** the images section renders
- **When** the variants are visible
- **Then** the header shows "Images"
- **And** four sub-groups render: "Rounded Image" (rounded corners),
  "Circle Image" (full circle), "Rounded Raised" (rounded + shadow),
  "Circle Raised" (circle + shadow) — each an image placeholder
  (picsum seeded `buildkit-img-*`)

### Feature: Javascripts components

The `#javascriptsComponents` section on a light band: modal, datetime
picker, popovers, tooltips.

#### Scenario: JS component demos render as in the reference
- **Given** the javascriptsComponents section renders
- **When** the demos are visible
- **Then** the background is `#f8f9fa` (bg-light)
- **And** "Modals" renders a "Launch demo modal" violet button opening a
  React-state modal: title "Modal title" with a close ×, the "Far far
  away..." lorem body (paraphrasable), "Close" + "Save changes" footer
  buttons; backdrop click / × / Close dismiss it; focus is moved into the
  modal and returned on close
- **And** "Datetimepickers" renders a "Datetime picker" label + native
  `<input type="datetime-local">` styled like the kit inputs (the source
  uses the datetimepicker plugin — never copied)
- **And** "Popovers" renders four violet buttons — On top / On right /
  On bottom / On left — each toggling a popover card (React state) with
  title + body copy kind
- **And** "Tooltip" renders the same four directional buttons showing
  hover/focus tooltips (CSS/React, aria-describedby)

### Feature: Carousel band

The `#carousel` section: a solid-violet band with a fading carousel.

#### Scenario: Carousel renders as in the reference
- **Given** the carousel section renders
- **When** the band is visible
- **Then** the section background is the solid violet `#6b48ff`
  (`bg-primary`, `ftco-section-2` → 6em vertical padding)
- **And** the header shows "Bootstrap Carousel" (paraphrasable — e.g.
  "Carousel") with three slides in a fading carousel (React state +
  timer): slide copy kinds "This is Carousel Bootstrap Enjoy Free UI
  Kit." / "Buildex Free UI Kit." / "Enjoy Free UI Kit made by Buildex."
  — the demo brand "Buildex" in slide copy is paraphrased to the
  recreation brand or generic kit copy, NEVER kept as "Buildex"
- **And** each slide shows a white h2 over the violet band
- **And** each slide carries a WHITE button "See all components"
  (white bg, black text, pill/round shape per `.btn-white`)
- **And** carousel indicators/dots show the active slide and are
  clickable (React state)

### Feature: Completed with examples

A white `ftco-section-2` intro band before the cards.

#### Scenario: Examples intro renders as in the reference
- **Given** the section renders
- **When** the band is visible
- **Then** the centered header shows "Completed with examples" + a
  paragraph (paraphrasable) about the kit shipping with pre-built pages
  you can change text/images in

### Feature: Signup cards band

A photographic band with the login card + three feature cards.

#### Scenario: Card Login renders as in the reference
- **Given** the signup band renders
- **When** the band is visible
- **Then** the section background is a photo (picsum seeded
  `buildkit-signup-bg`) — the source overlays cards on `images/bg_2.jpg`
- **And** the left column renders the "Card Login" card with the
  `linear-gradient(-45deg, #6a48ff, #b4a3ff)` violet→lilac background,
  white centered card title "Card Login", a social line of three 40px
  round WHITE icon buttons (facebook, twitter, google-plus-ish — lucide
  stand-ins, violet icons), white-styled inputs, and a "Get Started"
  button
- **And** login submit is prevented (no-op)

#### Scenario: Feature cards render as in the reference
- **Given** the signup band renders
- **When** the cards are visible
- **Then** three white cards render: "Default Featured" ("Special title
  treatment" h5 + supporting lead-in text "With supporting text below as
  a natural lead-in..." kind + "Go somewhere" button), "Special title
  treatment" (same pattern), and "Card with footer" (same title
  treatment + a card footer line "2 days ago")
- **And** cards use radius 0.25rem with the kit's soft shadow treatment
  and stack/resize responsively (col-md-4 on desktop per the source)

### Feature: Footer

A white centered footer whose attribution links Component Dock.

#### Scenario: Footer renders as in the reference
- **Given** the footer renders
- **When** the footer is visible
- **Then** it is a white bar with a subtle top border
  (`rgba(0,0,0,0.04)`), `ftco-section-2` padding, and a single centered
  line: "Copyright © <current year> All rights reserved. Made with
  <heart icon> by Component Dock"
- **And** the heart glyph renders (lucide Heart, small, warm accent)
- **And** the attribution links `https://www.componentdock.com/`
  branded "Component Dock" — never ColorLib, "Colorlib", or the source
  slug

### Feature: Design tokens & typography

The recreation exposes the reference palette and Open Sans as Tailwind 4
`@theme` tokens.

#### Scenario: Theme tokens match the reference palette
- **Given** the app's `src/index.css` theme
- **When** the tokens are declared
- **Then** the palette includes: primary violet `#6b48ff`, primary hover
  `#4c22ff`, primary active `#4215ff`, login gradient stops `#6a48ff` /
  `#b4a3ff`, success `#38cd8b`, danger `#f2395f`, warning `#f89647`,
  info `#29cded`, heading slate `#3c4858`, body `#777777`, light band
  `#f8f9fa`, hero overlay `rgba(0,0,0,0.8)`, input border/focus
  `#6b48ff`, button shadow `0 10px 20px -6px rgba(0,0,0,0.12)`
- **And** Open Sans (300–700) loads via Google Fonts `<link>` in
  `index.html`; body renders 16px/300 with lh 1.8, headings weight 300
  `#3c4858`
- **And** primary CTAs are pills (radius 40px via `.btn-round` kind —
  `rounded-full`), 12px/18px padding, material shadow; the secondary
  CTA is `.btn-white` (white bg, black text)
- **And** form inputs are 48px tall, radius 4px, weight 300, `#777` text
  with violet focus border
- **And** section rhythm is 4em top/bottom (6em for the `ftco-section-2`
  bands: carousel, examples, signup, footer)
- **And** pagination circles are 50px, active `#6b48ff`

## Verification checklist

- [ ] Section order 1:1 with the preview DOM: transparent navbar → dark
      industrial hero → Basic Elements intro → Buttons → Inputs →
      Checkboxes/Radios/Toggles → Sliders → Progress bars → Paginations
      (bg-light) → Menus → Navigations (7 variants) → Navigation Tabs +
      Badges (bg-light) → Notifications → Typography → Images →
      Javascripts Components (bg-light) → Carousel (bg-primary) →
      Completed with examples → signup cards band (photo bg) → white
      footer
- [ ] Violet `#6b48ff` is the single brand color: primary buttons,
      active pagination, focused input borders, link buttons, navbar
      scrolled-active link, carousel band, login-card gradient
      `(-45deg, #6a48ff → #b4a3ff)`
- [ ] Typography is Open Sans-only: body 300/16px `#777777` lh 1.8,
      headings 300 `#3c4858` lh 1.4, hero h1 white ~80px weight 400,
      hero subtitle 24px/300 white-90
- [ ] Navbar is transparent over the hero (absolute top), white links +
      uppercase 14px/300, social icons right; "Menu" toggler with
      aria-expanded below lg; scrolled state = fixed white + soft shadow
      + violet active link
- [ ] Hero: dark photo (picsum `buildkit-hero`) + black/80 overlay,
      centered white "Buildkit UI Kit." + subtitle + violet pill
      "Download Kit" + CloudDownload icon
- [ ] Buttons: every sub-group present (style/size/color/links/disabled/
      dropdown/block); pill variant radius 40px; material shadows; color
      pairs in the kit palette; dropdowns are React-state with
      aria-expanded; block buttons full-width
- [ ] Inputs: floating-label 48px radius-4px inputs, violet focus
      border, helper text under the field, submit prevented
- [ ] Controls: checkboxes/radios/toggles with checked+disabled variants;
      switches flip on click with aria-checked
- [ ] Sliders: native/styled range demos only — no nouislider copy
- [ ] Progress: five percentage bars (60/90/70/50/40) + skill bars with
      labels (HTML/WordPress kind)
- [ ] Paginations: two variants, 50px circles, active/hover `#6b48ff`;
      pages clickable (React state)
- [ ] Menus: Menu/Discover/Profile/Settings row + icon dropdown with
      "Dropdown header" group; Navigations renders SEVEN stacked navbar
      variants
- [ ] Navigation Tabs: Home/Profile/Messages with lorem panes, React
      state switching; Badges sub-section bordered-black radius-0.25rem
      style
- [ ] Notifications: four SOLID alerts (info `#29cded`, success
      `#38cd8b`, warning `#f89647`, danger `#f2395f`) with white text
      and the quirky demo-copy kinds
- [ ] Typography: H1–H6 "Thinking in textures" scale, small-tag header,
      paragraph + quote samples
- [ ] Images: rounded / circle / rounded-raised / circle-raised groups
      (picsum `buildkit-img-*`)
- [ ] Javascripts: modal (title/×/body/Close/Save changes, focus
      managed), datetime-local input, 4 popover buttons + 4 tooltip
      buttons (On top/right/bottom/left)
- [ ] Carousel: solid `#6b48ff` band, 3 fading slides with WHITE
      "See all components" buttons, clickable dots; slide copy never
      says "Buildex"
- [ ] Completed with examples: centered heading + pre-built-pages
      paragraph
- [ ] Signup band: photo background; Card Login with violet→lilac
      gradient, white title, 3 round white social buttons, login form
      (submit prevented); 3 feature cards (Default Featured / Special
      title treatment / Card with footer "2 days ago")
- [ ] Footer: white, centered, "Copyright © <year> All rights reserved.
      Made with <heart> by Component Dock" linking
      `https://www.componentdock.com/`
- [ ] All images are `picsum.photos/seed/buildkit-*` placeholders; icons
      from `lucide-react`; no copied assets or CSS; no Bootstrap JS,
      owl carousel, magnific-popup, animate/AOS, nouislider,
      datetimepicker, ionicons/icomoon/flaticon/open-iconic fonts, or
      jQuery
- [ ] The page is RESPONSIVE (the source's `body { min-width: 992px }`
      desktop pin is intentionally NOT replicated)
- [ ] Zero `colorlib` / "Buildex" / "Buildex Kit." demo-brand references
      anywhere in `apps/buildkit`
- [ ] App folder `apps/buildkit`, package
      `@free-react-templates/buildkit`, `homepage`
      `https://buildkit.free.componentdock.com`, `public/CNAME`
      `buildkit.free.componentdock.com`, lockfile registers the workspace
- [ ] `vite.config.ts` keeps `injectUiSource()`; tests at 100% coverage;
      `scripts/verify-app.sh buildkit` passes

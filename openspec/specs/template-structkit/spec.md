# Template: Structkit (UI Kit)

## Purpose

Structkit is a component-showcase UI kit page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Structure
Ui Kit" template (a clean, red-accented Bootstrap 4 UI kit demo), built under
a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The reference is a LONG single-page component catalog: a dark navbar over a
full-height hero (night mountain photo under a red→black gradient wash) with
a boxed white wordmark, a subtitle, and a designer-credit row — followed, 1:1
in order, by a "Basic Elements" intro and the kit's showcase bands: Buttons
(styles/sizes/colors/links/disabled/dropdowns/block), Inputs (floating
labels), Checkboxes / Radio Buttons / Toggle Buttons, Sliders, Badges,
Progress bars, Paginations, Menu / Menu with Icons, Navigations (color
variants), Navigation Pills + Navigation Tabs, Notifications (four solid
alerts), Typography (H1–H6 scale + paragraphs), Images (rounded/circle/
raised), Javascripts Components (Modals, Datetimepickers, Popovers,
Tooltips), a photographic Carousel band with white pill CTAs, a "Completed
with examples" intro, a Cards showcase (Styles / Image Round / image /
Profile), and a white centered footer whose attribution line links Component
Dock instead of the source.

The design is anchored by one signature color — Material red `#f44336` — on
every link, primary button, hero overlay, and active state. Typography is
Montserrat throughout (body 16px/1.8 weight 400 `#777777`; headings weight
400, line-height 1.4, `#2c2c2c`). Buttons are flat solid fills; the pill form
(`.btn-round`, radius 40px) and the circular icon button (`.btn-fab`) are the
signature shapes. Sections breathe at 4em (6em for the footer's
`ftco-section-2` band).

## Design reference (replication findings)

- **Original:** ColorLib "Structure Ui Kit" — free Bootstrap 4 UI kit on a
  structure design (source: https://colorlib.com/wp/template/structure-ui-kit/,
  product page screenshot `structure-ui-kit.jpg`). Listed in TEMPLATES.md
  `## Ui Kit (8)` at line 3027; slug appears exactly once. NOTE: the theme
  preview slug is **`structure`**, not `structure-ui-kit` —
  `https://preview.colorlib.com/theme/structure-ui-kit/` returns HTTP 404,
  while `https://preview.colorlib.com/theme/structure/` is HTTP 200 and serves
  the kit (title "Structure - Free Bootstrap 4 Template by Colorlib"). The
  demo brand "Structure." / "Structure Free UI Kit." is NEVER reused in app
  files — the recreation's wordmark is "Structkit.".
- **Live preview URL:** https://preview.colorlib.com/theme/structure/
  (HTTP 200, 76,479 bytes HTML; theme stylesheet `css/style.css`, 117,970
  bytes). HTML saved to `/tmp/pv-structure.html`; theme CSS saved to
  `/tmp/struct-style.css`. The preview DOM is authoritative for section order
  and copy.
- **Screenshot:** `structure-ui-kit.jpg`
  (`https://colorlib.com/wp/wp-content/uploads/sites/2/structure-ui-kit.jpg`,
  reviewed visually) confirms the hero treatment: night mountain/milky-way
  photo under a heavy red gradient wash; navbar "Structure." wordmark + white
  links (Components dropdown, Download, Premium) + facebook/twitter/instagram
  icons; centered white wordmark "STRUCTURE" inside a thin white OUTLINED BOX;
  subtitle "Free Bootstrap 4 UI Kit on Structure Design."; a 50px round
  designer avatar + "Designed by: …" credit; a red circular scroll-down button
  straddling the hero's bottom edge; below, a white "Basic Elements" band and
  red pill buttons ("Default / Round / ♥ With Icon / ♥ / Simple", then
  "Small / Regular / Large" sizes).
- **Stylesheets in the reference:** `css/open-iconic-bootstrap.min.css`,
  `css/animate.css`, `css/owl.carousel.min.css` + `owl.theme.default`,
  `css/magnific-popup.css`, `css/aos.css`, `css/ionicons.min.css`,
  `css/bootstrap-datetimepicker.min.css`, `css/nouislider.css`,
  `css/flaticon.css`, `css/icomoon.css`, `css/style.css` (theme — canonical
  tokens; Bootstrap 4 compiled in). Bootstrap grid/JS, owl carousel,
  magnific-popup, animate/AOS, ionicons/icomoon/flaticon/open-iconic icon
  fonts, datetimepicker, nouislider, and jQuery are NEVER copied:
  recreation uses Tailwind grid + flex, React-state tabs/carousel/dropdowns/
  modals/toggles/popovers, lucide-react icons, native `<input type="range">` /
  `<input type="datetime-local">`, and static styled slider demos. Montserrat
  loads via Google Fonts `<link>` in `index.html` (weights 300–700).

### Design tokens (verified in `css/style.css`)

- Signature red: `.btn-primary { color: #fff; background-color: #f44336;
  border-color: #f44336 }`; `a { color: #f44336 }` (all links, including
  link-style buttons); the stylesheet's darker reds `#ea1c0d`, `#d2190b`,
  `#e63333` serve hover/press and danger states (focus ring analogous,
  `rgba(244,67,54,0.5)`).
- Color palette (Pick your color row, verified hexes):
  Primary `#f44336` (white text) · Success `#64e291` (text `#212529`) ·
  Danger `#e63333` (white text) · Warning `#f1bc31` (text `#212529`) ·
  Info `#03A9F4` (white text) · Light `#f8f9fa` · Dark `#343a40` ·
  Secondary gray `#696464`-family · `.btn-white { background: #fff;
  border: 1px solid #fff; color: #000 }`. Hover/active shades in the
  stylesheet: success `#39da73`, info `#0286c2`, warning `#e0a60f`, danger
  `#cd1919`.
- Text: body `#777777`; headings h1–h5 `{ line-height: 1.4; color: #2c2c2c;
  font-weight: 400 }`; strong text `#212529`; muted `#6c757d`; generic
  `span { color: #bfbfbf }`; borders `#dee2e6` / `#e9ecef`.
- Font: `body { font-family: "Montserrat", Arial, sans-serif; font-size:
  16px; line-height: 1.8; font-weight: 400; color: #777777 }` — Montserrat
  everywhere (brand 20px/400).
- Buttons: flat solid fills (no material shadow), base padding `12px 18px`;
  `.btn.btn-round { border-radius: 40px }` (the pill — hero CTA and "Round"
  style); `.btn-fab` circular icon-only button (heart sample); `btn-sm` /
  `btn-lg` size variants; `.btn-link` transparent no-border (the "Simple"
  style); block-level buttons stretch full width.
- Radii: pill 40px (round buttons) · badges/pagination/cards `0.25rem` ·
  avatars/circles `50%` (designer avatar 50×50px).
- Hero: `.hero-wrap` full-height (`height: 800px`, `background-size: cover`)
  photo (`images/bg_1.jpg`, night mountains) + `.overlay { opacity: .6;
  background: linear-gradient(to bottom, red 0%, red 44%, #1f0000 100%) }`;
  recreation uses a picsum placeholder + a red→near-black gradient overlay
  (`from-red-600 via-red-600 to-[#1f0000]`, opacity 0.6). Hero wordmark:
  large white text inside a thin white outlined box (screenshot); subtitle
  white; credit row `rgba(255,255,255,0.8)`.
- Scroll button: `.mouse-icon.rounded-circle.bg-danger` — red circle with a
  light down-arrow, straddling the hero's bottom edge.
- Sections: `.ftco-section { padding: 4em 0 }`; `.ftco-section.ftco-section-2
  { padding: 6em 0 }` (footer band). Light bands use `bg-light`
  (`#f8f9fa`) where the source uses them.
- Navbar: `navbar-dark` over the hero; brand "Structure." 20px/400 white;
  nav links uppercase 14px with 20px icons (icon color
  `rgba(255,255,255,0.6)`); "Premium" is a white CTA chip (`.btn-white`
  treatment — white bg, red text); mobile toggler labeled "Menu" with
  `aria-expanded`; `.scrolled` state → `position: fixed; background: #fff;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.1)`.
- Badges: `padding: .25em .4em; font-size: 75%; font-weight: 700;
  border-radius: 0.25rem` — variants Primary / Info / Success / Warning /
  Danger / Rose (pink).
- Form controls: `.form-control` standard height, `#495057` text, white
  bg, `#dee2e6` border; focus border `#f44336`; the inputs band uses the
  floating-label pattern ("With Floating Label").
- Cards: white, radius `0.25rem`, border `rgba(0,0,0,0.125)`.
- Deviation to document: `body { min-width: 992px !important }` — the source
  pins a desktop-only width; the recreation is RESPONSIVE instead (Tailwind
  breakpoints; dropdowns/tabs/carousel adapt).

### Content map (preview DOM, in order)

navbar brand "Structure." (demo brand — never reused), "Components" dropdown
(All Components / Documentation) + "Download" + "Premium" CTA + 3 social icon
links (facebook/twitter/instagram); hero wordmark "Structure" (boxed) /
"Free Bootstrap 4 UI Kit on Structure Design." / designer avatar + credit
(the person's name is NOT copied — placeholder credit); red circular
scroll-down; "Basic Elements" intro; Buttons — Pick your style (Default /
Round / With Icon / icon-only FAB / Simple), Pick your size (Small Size /
Regular Size / Large Size), Pick your color (Primary, Success, Danger,
Warning, Info, Light, Dark — solid + outline), Links (per-color link
buttons), Disabled Buttons, Buttons with Dropdown (Action / Another action /
Something else here), Block Level Buttons (block info / block warning);
Inputs — "With Floating Label" form groups; Checkboxes (Unchecked / Checked /
Disabled / Unchecked Disabled), Radio Buttons ("Radio is off" / "Radio is
on" / disabled — source typo "os off" paraphrased), Toggle Buttons ("Toggle
is on" ON / "Toggle is Off"); Sliders (nouislider demos → native range);
Badges (Primary / Info / Success / Warning / Danger / Rose); Progress bars
(40% / 60% / 70% "Complete" + 35% success / 20% warning / 30% danger);
Paginations (« 1–5 » page links + active); Menu (Menu / Discover (current) /
Profile / Settings) + Menu with Icons (icon list + "Dropdown header" menu:
Action / Another action / Something else here / Separated link / One more
separated link); Navigations (colored navbar variants — Primary / Success /
Info / Danger / Info — each with Discover / Profile / Settings, some with
dropdowns and a facebook/twitter/instagram row); Navigation Pills + Tabs
(Home / Profile / Messages with lorem panes); Notifications (Info / Success
/ Warning / Error alerts with the kit's quirky demo copy — paraphrase ok,
keep the same KIND); Typography (Header 1–6 + small-tag headers + paragraph
samples); Images (Rounded Image / Circle Image / Circle Raised, captioned
with a person name — placeholder name in the recreation); Javascripts
Components (Modals — "Launch demo modal" → Modal title / body / Close / Save
changes; Datetimepickers — "Datetime picker"; Popovers + Tooltips — On top /
On right / On bottom / On left); Carousel (three slides, each with a white
pill "See all components" CTA: "This is Carousel Bootstrap Enjoy Free UI
Kit." / "Structure Free UI Kit." / "Enjoy Free UI Kit made by Structure." —
demo copy paraphrasable, demo brand never reused); "Completed with examples"
intro (three pre-built pages copy — paraphrase); Cards — Cards Styles
(plain), Cards with Image Round ("Special title treatment" + supporting text
+ "Go somewhere"), Cards with image ("Card title" + supporting text), Cards
Profile; footer "Copyright © <year> All rights reserved | This template is
made with ♥ by Colorlib" — the recreation's footer links
https://www.componentdock.com/ ("Component Dock") instead.

## Requirements

### Feature: Navbar

A dark/transparent navbar over the hero: brand wordmark left, icon links
(Components dropdown, Download, Premium CTA) beside it, social icons right;
white-on-photo until the page scrolls, then fixed white with a shadow.

#### Scenario: Header renders as in the reference
- **Given** the page loads on a desktop viewport
- **When** the navbar renders over the hero
- **Then** the bar overlays the hero photo with white brand text "Structkit."
  (20px) on the left
- **And** the right side shows, in order: a "Components" dropdown trigger
  (apps icon + caret), a "Download" link (cloud icon), a "Premium" CTA chip
  (white background, red text), and facebook/twitter/instagram icon links
  with aria-labels
- **And** the "Components" dropdown opens with "All Components" and
  "Documentation" items

#### Scenario: Mobile toggler
- **Given** a viewport below the lg breakpoint
- **When** the user taps the "Menu" toggler
- **Then** the toggler exposes `aria-expanded` and reveals the nav links

#### Scenario: Scrolled state
- **When** the page scrolls past the hero top
- **Then** the navbar becomes fixed with a white background and
  `0 0 10px rgba(0,0,0,0.1)` shadow

### Feature: Hero

A full-height photographic hero under a red→black gradient wash with a
centered wordmark, subtitle, designer credit, and a scroll-down button.

#### Scenario: Hero renders as in the reference
- **Given** the page loads on a desktop viewport
- **When** the hero renders
- **Then** the band is full viewport height (~800px desktop) with a
  placeholder photo (`https://picsum.photos/seed/structkit-hero/...`)
- **And** a red→near-black gradient overlay (red 0% → red 44% → `#1f0000`
  100%) sits at ~0.6 opacity over the photo
- **And** the centered stack shows the white wordmark "STRUCTKIT" inside a
  thin white outlined box, then the subtitle "Free Bootstrap 4 UI Kit on
  Structure Design." (paraphrase ok, same kind)
- **And** a credit row shows a 50px circular avatar (placeholder image) and
  a "Designed by: <placeholder name>" line at `rgba(255,255,255,0.8)` —
  the source's person credit is NOT copied

#### Scenario: Scroll-down button
- **Then** a red circular button (danger bg, light down-arrow icon,
  aria-label) straddles the hero's bottom edge and scrolls to the elements
  band on activation

### Feature: Basic Elements intro

#### Scenario: Section heading band
- **When** the user scrolls below the hero
- **Then** a white band shows the heading "Basic Elements" before the
  component showcases, matching the reference order

### Feature: Buttons

The buttons showcase: styles (Default / Round / With Icon / FAB / Simple),
sizes, the full color palette (solid + outline), link buttons, disabled
states, dropdown buttons, and block-level buttons.

#### Scenario: Pick your style
- **Given** the Buttons section renders
- **When** the user views the "Pick your style" row
- **Then** it shows five red primary examples in order: "Default" (base
  radius), "Round" (pill, 40px radius), "With Icon" (pill with a heart
  icon + label), an icon-only circular FAB (heart icon, aria-label), and
  "Simple" (transparent link-style button in `#f44336`)

#### Scenario: Pick your size
- **Then** the "Pick your size" row shows Small / Regular / Large buttons
  (`btn-sm` / base / `btn-lg`)

#### Scenario: Pick your color
- **Then** the "Pick your color" rows show Primary, Success, Danger,
  Warning, Info, Light, Dark as solid buttons AND as outline variants, with
  the verified token colors (see Design tokens)

#### Scenario: Links, disabled, dropdowns, block level
- **Then** link-style buttons appear per color, disabled buttons render
  non-interactive (with `disabled` semantics)
- **And** dropdown buttons open menus with "Action / Another action /
  Something else here"
- **And** block-level buttons stretch the full container width (info and
  warning samples)

### Feature: Inputs

#### Scenario: Floating-label inputs
- **When** the Inputs band renders
- **Then** it shows "With Floating Label" form groups: a floating label
  above/over each text input, focus border `#f44336`, and helper text where
  the reference shows it

### Feature: Selection controls (checkboxes, radios, toggles)

#### Scenario: Checkbox states
- **Then** the Checkboxes area shows Unchecked, Checked, and Disabled
  (checked + unchecked) variants, controlled by React state

#### Scenario: Radio states
- **Then** the Radio Buttons area shows off / on / disabled radios in one
  named group

#### Scenario: Toggle switches
- **Then** the Toggle Buttons area shows an on toggle (labeled ON) and an
  off toggle, flipping state on click

### Feature: Sliders

#### Scenario: Range sliders
- **When** the Sliders band renders
- **Then** it shows styled range sliders (native `<input type="range">`)
  with red thumbs/tracks matching `#f44336`

### Feature: Badges

#### Scenario: Badge palette
- **Then** the Badges row shows Primary, Info, Success, Warning, Danger,
  and Rose badges (75% font-size, bold, `0.25rem` radius)

### Feature: Progress bars

#### Scenario: Progress values
- **Then** the Progress bars show determinate bars at 40%, 60%, 70%
  ("Complete" labels) plus a success bar at 35%, a warning bar at 20%, and
  a danger bar at 30%

### Feature: Paginations

#### Scenario: Pagination list
- **Then** a pagination renders « previous, numbered pages 1–5, next »,
  with the active page highlighted in `#f44336` (white text)

### Feature: Menus

#### Scenario: Menu list
- **Then** the Menu column shows "Menu" with items Menu / Discover
  (marked current) / Profile / Settings

#### Scenario: Menu with icons
- **Then** the Menu with Icons column shows an icon-prefixed list and a
  "Dropdown header" menu with Action / Another action / Something else here
  / Separated link / One more separated link

### Feature: Navigations

#### Scenario: Colored navbar variants
- **Then** the Navigations area shows navbar patterns in Primary, Success,
  Info, Danger colors (matching the kit palette), each with Discover /
  Profile / Settings links; the ones with dropdowns open Action / Another
  action / Something else here; one includes a facebook/twitter/instagram
  icon row

### Feature: Navigation pills and tabs

#### Scenario: Pills
- **Then** the Navigation Pills row shows Home / Profile / Messages with the
  active pill filled `#f44336`

#### Scenario: Tabs
- **Then** the Navigation Tabs component switches panes on click (Home /
  Profile / Messages), each pane showing the sample paragraph copy

### Feature: Notifications

#### Scenario: Alert variants
- **Then** four alerts render in order: Info (blue), Success (green),
  Warning (yellow), Error (red), each solid-filled with dismissible
  semantics and the kit's quirky demo copy (paraphrase ok, same kind)

### Feature: Typography

#### Scenario: Type scale
- **Then** headers 1 through 6 render in Montserrat (`#2c2c2c`, weight 400,
  line-height 1.4) with the sample headline treatment
- **And** small-tag headers (small caps label + larger text) and paragraph
  samples in `#777777` render below

### Feature: Images

#### Scenario: Image shapes
- **Then** three image examples render in order: Rounded Image, Circle
  Image, Circle Raised (circle + drop shadow), each with a caption line
  (placeholder person name — the source caption name is not copied)

### Feature: Javascripts components

#### Scenario: Modal
- **When** the user clicks "Launch demo modal"
- **Then** a dialog opens with a modal title, body paragraph, and Close /
  Save changes actions; it traps focus and closes on Close or overlay click

#### Scenario: Datetime picker
- **Then** the Datetimepickers band shows a "Datetime picker" control
  (native `<input type="datetime-local">` styled to match)

#### Scenario: Popovers and tooltips
- **Then** Popovers show on top / right / bottom / left triggers revealing
  popover cards, and Tooltip triggers show tooltips in the same four
  directions

### Feature: Carousel

#### Scenario: Slideshow band
- **When** the carousel band renders
- **Then** it shows three slides, each with a headline ("This is Carousel
  Bootstrap Enjoy Free UI Kit." / "Structure Free UI Kit." / "Enjoy Free UI
  Kit made by Structure." — paraphrased, demo brand replaced by Structkit)
  and a white pill "See all components" button (`#fff` bg, red text)
- **And** the slides advance on a timer and via next/prev controls
  (React-state carousel; no owl-carousel)

### Feature: Completed with examples intro

#### Scenario: Intro copy
- **Then** a "Completed with examples" heading and intro paragraph
  (three pre-built pages copy — paraphrased) render before the cards

### Feature: Cards

#### Scenario: Card showcase
- **Then** the Cards area renders in order: "Cards Styles" (plain card),
  "Cards with Image Round" (round image, "Special title treatment" title,
  supporting text, "Go somewhere" link/button), "Cards with image" ("Card
  title" + supporting text), and "Cards Profile" (profile card layout)
- **And** card radii are `0.25rem` with `rgba(0,0,0,0.125)` borders and
  placeholder images (`https://picsum.photos/seed/structkit-N/...`)

### Feature: Footer

#### Scenario: Footer renders with Component Dock attribution
- **When** the footer band renders
- **Then** it is a centered white band (`ftco-section-2` rhythm, ~6em) with
  "Copyright © <year> All rights reserved" and a "made with ♥ by" line
- **And** the attribution links `https://www.componentdock.com/` branded
  "Component Dock" (no source attribution, no external template links)

## Verification checklist

- [ ] `openspec/specs/template-structkit/` is the spec of record; no
      implementation exists without it
- [ ] New app folder `apps/structkit`, package
      `@free-react-templates/structkit`; name differs from the ColorLib
      source ("Structure" / "Structure Ui Kit") and collides with nothing
- [ ] Section order matches the preview DOM 1:1 (navbar → hero → Basic
      Elements → buttons → inputs → checkboxes/radios/toggles → sliders →
      badges → progress → pagination → menus → navigations → pills/tabs →
      notifications → typography → images → JS components → carousel →
      examples intro → cards → footer)
- [ ] Tokens in `@theme`: primary `#f44336` (+ hover/press shades),
      success `#64e291`, info `#03A9F4`, warning `#f1bc31`, danger `#e63333`,
      dark `#343a40`, light `#f8f9fa`, heading `#2c2c2c`, body `#777777`,
      hero overlay gradient (`#1f0000` end stop)
- [ ] Montserrat via Google Fonts `<link>` (weights 300–700)
- [ ] No ColorLib references anywhere in `apps/structkit` (code, comments,
      READMEs) — provenance lives only in this spec, TEMPLATES.md, the PR
- [ ] Demo brand "Structure." never reused; wordmark is "Structkit."
- [ ] Footer links `https://www.componentdock.com/` ("Component Dock")
- [ ] Placeholder images only (`https://picsum.photos/seed/structkit-N/…`);
      icons from `lucide-react`; no copied assets
- [ ] Responsive recreation (documented deviation from the source's
      `min-width: 992px` pin)
- [ ] TDD: Vitest + Testing Library tests mirroring the scenarios;
      100% lines/functions/branches/statements coverage
- [ ] `scripts/verify-app.sh structkit` passes (typecheck + lint + knip +
      fallow + coverage + build)
- [ ] `public/CNAME` = `structkit.free.componentdock.com`;
      `"homepage"` = `https://structkit.free.componentdock.com`
- [ ] `npm install` at repo root registers the workspace in
      `package-lock.json` before commit

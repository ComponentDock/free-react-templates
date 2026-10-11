# Sorbet — design notes

Recreation of ColorLib **"Smash"** (free Bootstrap 4 UI kit on a
sky-blue design — photographic sunset hero with three overlapping
feature cards + 15 component showcase bands + carousel + login card +
download CTA).
Source: https://colorlib.com/wp/template/smash/ · Preview analyzed:
https://preview.colorlib.com/theme/smash/ (HTTP 200, 71,172 bytes HTML
+ 108,583 bytes `css/style.css` + compiled Bootstrap-era vendor CSS;
2026-10-11; saved to `/tmp/smash-preview.html`, `/tmp/smash-style.css`).
NOTE: this preview uses the FULL slug `theme/smash/` directly (unlike
Buildex/Regen/Next, which use short slugs). Screenshot reviewed:
`smash-free-template.jpg` (warm sunset hero, bold white uppercase
"BOOTSTRAP 4 UI KIT", avatar byline, three white cards straddling the
hero edge with blue/green/amber circle icons and matching "Go
somewhere" buttons, then "Basic Elements" → Buttons band). The demo
brand "Smash" / "Smash Free UI Kit" (navbar brand + carousel slides)
is NEVER reused in app files — hence the new name **sorbet**. The
preview is a classic Colorlib build: compiled Bootstrap 4 +
open-iconic + ionicons + flaticon + icomoon + owl.carousel +
magnific-popup + aos + nouislider + bootstrap-datetimepicker + jQuery.

## Structure order (1:1 with preview DOM)

1. Navbar — `.ftco-navbar-light` transparent, absolute top 30px over
   the hero. Brand "Smash" (→ "Sorbet"), social icon links
   (Facebook/Twitter/Instagram), "Components" dropdown (All Components
   / Documentation / Download), white pill Download button
   (`btn-white` + cloud icon, blue label). On scroll the reference bar
   turns black — optional nicety, not required.
2. Hero — `.hero-wrap` 600px, `background-size:cover; background-
   position:top center`, sunset photo (`images/bg_1.jpg` → picsum
   `sorbet-hero`), NO overlay. Centered `.text` h2 "Bootstrap 4 UI
   Kit" (`font-weight:700; font-size:50px; text-transform:uppercase;
   color:#fff`) + byline: circular `images/person.jpg` avatar +
   "Designed by: Colorlib.com" (→ "Designed by: Component Dock",
   links https://www.componentdock.com/).
3. Feature cards — `ftco-section bg-light`; three `.card`s (border:
   none, `box-shadow:0 11px 30px -9px rgba(0,0,0,.05)`) pulled UP to
   overlap the hero's bottom edge. Each: colored 40px+ circular icon
   badge (info `#03A9F4` / success `#64e291` / warning `#fec771`),
   h5 "Card title treatment", gray blurb (Duden lorem — paraphrasable),
   matching colored "Go somewhere" button (`btn-info` / `btn-success` /
   `btn-warning`).
4. "Basic Elements" — `ftco-section goto-here pb-0`, plain h1 (34px
   /500 `#212529`).
5. Buttons — `ftco-section`. Row: "Default Button" (`btn-outline-
   primary`, 2px `#64c4ed`), "Filled Button" (`btn-primary` solid
   `#64c4ed`, white text), "Round Button" (`btn-outline-primary
   btn-round` pill 40px), "Button With Icon" (`btn-primary` + heart)
   + `btn-primary btn-fab btn-round` 40px heart circle, "Simple
   Button" (`btn-primary btn-link` text). Below: seven colored text
   links Primary `#64c4ed` / Secondary `#696464` / Success `#64e291`
   / Danger `#eb7070` / Warning `#fec771` / Info `#03A9F4` / Dark
   `#212529`.
6. Inputs — four `.form-control` demos: "Default", "Success" (green
   valid border), "Error Input" (red invalid border), "With Ionicons
   Icons" (leading icon → lucide). Body text on inputs `#495057`.
7. Checkboxes — `.fill-checkbox` customs (`--color:#64c4ed`, disabled
   `#aaa`): Unchecked / Checked / Disabled Unchecked / Disabled
   Checked. Click toggles.
8. Radio Buttons — same fill style: Radio is off / Radio is on /
   Disabled Radio is off / Disabled radio is on. One radio group.
9. Toggle Buttons — `.fill-checkbox` switches: "Toggle is on" (ON,
   thumb shows "ON") / "Toggle is Off". `role="switch"`.
10. Sliders + Badges — "Sliders": two native range inputs (styled
    primary — no nouislider). "Badges": six `badge badge-pill p-2
    px-3` — Primary `#64c4ed` (dark text), Info `#03A9F4` (white),
    Success `#64e291` (dark), Warning `#fec771` (dark), Danger
    `#eb7070` (white), Rose `#e83e8c` (white).
11. Progress bars + Paginations — bars 1rem tall on `#e9ecef`:
    "40% Complete" / "60% Complete" / "70% Complete" (primary),
    "35% Complete (success)" `#64e291`, "20% Complete (warning)"
    `#fec771`, "30% Complete (danger)" `#eb7070`. Paginations: row 1
    `« 1 2 3 4 5 »`, row 2 "Previous 1 2 3 4 5 6 7 Next"; active item
    filled `#64c4ed`.
12. Navigations — `ftco-section ftco-no-pb ftco-no-pt`, four
    `navbar px-0 navbar-expand-lg navbar-light` demos:
    - "Primary Color": Discover (current) / Profile / Settings + a
      dropdown (Action / Another action / Something else here)
    - "Info Color": same links + dropdown with Facebook/Twitter/
      Instagram items
    - "Danger Color": dropdown with "Dropdown header" + Action /
      Another action / Something else here / Separated link / One more
      separated link
    - "Transparent": on a 400px `images/bg_1.jpg` photo backdrop
      (picsum `sorbet-navbg` or hero crop), links + dropdown
    All dropdowns are React state with `aria-expanded`.
13. Navigation Pills — `ftco-section-2 bg-light`. Pills Home
    (active) / Profile / Messages switch a lorem panel ("Far far away,
    behind the word mountains…" — paraphrasable). `aria-selected`.
14. Notifications — four alerts: "Info alert:" (info `#03A9F4`),
    "Success Alert:" (`#64e291`), "Warning Alert:" (`#fec771`),
    "Error Alert:" (`#eb7070`), each with friendly message copy
    (paraphrasable; source names like "The Weeknd" should be
    re-worded) and a working × dismiss.
15. Typography — "Header 1…6 Thinking in textures" (weight 500
    `#212529`; h1 34px) + "Paragraph" sample (leadership quote —
    paraphrasable).
16. Images — `ftco-section bg-light`. "Rounded Image" / "Circle
    Image" / "Circle Raised" (circle + shadow lift) over ONE shared
    portrait (`images/person.jpg` → picsum `sorbet-person`) with
    "Clyde Ford" caption.
17. Javascripts Components — `ftco-section-2 bg-light`:
    - Modals: "Launch demo modal" → centered modal (h5 "Modal title",
      Duden lorem, ×, "Close" / "Save changes"); Escape + backdrop
      close, focus managed
    - Datetimepickers: labeled "Datetime picker" — native
      `<input type="datetime-local">`
    - Popovers: "On top" / "On right" / "On bottom" / "On left"
      triggers → shadowed popover cards (React state)
    - Tooltip: same four direction triggers (white/black shadowed,
      `aria-describedby`)
    - Accordion/Collapse: `.myaccordion` — "Collapse Menu 1" /
      "Collapse Menu 2" borderless 20px capitalize buttons +
      chevron + Duden lorem panel (`aria-expanded`)
18. Carousel — `ftco-section ftco-no-pt ftco-no-pb`,
    `.slider-text` 750px full-bleed photo slides (picsum
    `sorbet-slide-1..3`):
    - "This is Carousel Bootstrap Enjoy Free UI Kit."
    - "We are Smash Free UI Kit." (→ "We are Sorbet Free UI Kit.")
    - "Get Smash Free UI Kit" (→ "Get Sorbet Free UI Kit.")
    Each with `btn-outline-white btn-round` "See all components"
    (2px white border pill) + carousel-control prev/next (React
    state).
19. Completed with examples — `ftco-section-2`, centered
    heading "Completed with examples" + paragraph ("The kit comes with
    three pre-built pages to help you get started faster…" —
    paraphrasable).
20. Card Login — `ftco-section-2 section-signup page-header img` over
    `images/bg_2.jpg` (picsum `sorbet-signup`). White card: h4 "Card
    Login", three `btn-icon` 40px white circle social buttons
    (Facebook/Twitter/Instagram), "Username" text + "Password..."
    password inputs, `fill-checkbox` "I Agree to the terms and
    conditions." (`--color:#64c4ed`), `btn-white` "Get Started".
    Form: zod + controlled state, submit blocked until valid.
21. CTA — `ftco-section-2`, plain background (NO photo): h2
    "Do you like this UI Kit?" + `btn-primary btn-lg` "Download,
    it's free!".
22. Footer — `ftco-section-2 bg-light`: "Copyright © <year> All
    rights reserved | This template is made with ♥ by Colorlib"
    (→ "by Component Dock" linking https://www.componentdock.com/).

## Section-by-section fidelity notes

- **Palette mapping** (`@theme`): `--color-primary:#64c4ed` (hover
  `#36b3e8`/`#1faae5`, active `#0286c2`), success `#64e291` (hover
  `#39da73`), danger `#eb7070` (`#e54343`), warning `#fec771`
  (`#feb33e`), info `#03A9F4`, secondary `#696464`, rose `#e83e8c`,
  heading `#212529`, body `#777777`, input text `#495057`, light band
  `#f8f9fa`. Note the DARK text on primary/success/warning fills
  (`color:#212529`) — an unusual but distinctive detail; keep it on
  buttons AND badges.
- **Type**: "Open Sans" 400–700 via Google Fonts. Body 16px/1.8
  `#777777`; h1 34px/500; `.heading-section` 28px/500; hero h2
  50px/700 uppercase white. Buttons are default case (no uppercase).
- **Shapes**: buttons .25rem default, `.btn-round` 40px pill, circle
  40px icon buttons; badges pill `p-2 px-3`; progress 1rem/.25rem;
  cards borderless + `0 11px 30px -9px rgba(0,0,0,.05)`; accordion
  buttons 20px capitalize borderless.
- **Controls**: checkboxes/radios/toggles share the `.fill-checkbox`
  accent (`#64c4ed` filled square/circle/switch); recreate with styled
  native inputs + `aria-checked`/`aria-selected` semantics.
- **Rhythm**: `.ftco-section{padding:3em 0}`, wide bands
  `.ftco-section-2{padding:6em 0}`; bands alternate white/bg-light
  roughly every band (see structure order for the exact bg-light
  positions: #3, #13, #16, #17, #22).
- **Photo bands**: hero (sunset), Transparent-navbar demo (400px
  backdrop), Images (portrait ×3), Login (`bg_2.jpg` landscape).
  Everything else is flat white/light. The CTA band is NOT photo
  (the source's `person.jpg`/`bg_2.jpg` styles sit on hero byline,
  images, nav demo, and signup only).
- **Never copied**: all vendor CSS/JS/fonts; icons become lucide-react
  (Facebook, Twitter, Instagram, Cloud/Download, Heart, chevrons,
  Search, Target/Settings for card icons); images become
  `https://picsum.photos/seed/sorbet-<n>/<w>/<h>` (deterministic).
- **Copy policy**: paraphrase lorem/marketing copy but keep kinds
  (headline + blurb + CTA); drop third-party names ("The Weeknd") from
  alert copy; replace "Colorlib.com"/"Colorlib" attribution with
  "Component Dock" linking https://www.componentdock.com/; the demo
  brand "Smash" becomes "Sorbet" everywhere.

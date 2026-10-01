# Buildkit — design notes

Recreation of ColorLib **Buildex Ui Kit** (free Bootstrap 4 UI kit on a
tools/workshop design). Source: https://colorlib.com/wp/template/buildex-ui-kit/
· Preview analyzed: https://preview.colorlib.com/theme/buildex/ (HTTP 200,
87,836 bytes HTML + 107,043 bytes `css/style.css`; 2026-10-01; saved to
`/tmp/buildex-preview.html`, `/tmp/buildex-style.css`). NOTE the theme slug
is `buildex` — the product-slug path `theme/buildex-ui-kit/` 404s; the
product page references `preview.colorlib.com/#buildex` +
`downloads/free/buildex-ui-kit.zip`. Screenshot reviewed:
`buildex-free-template.jpg` (80,497 bytes JPEG; dark welding hero, "Buildex
Kit." navbar, violet "Download Tools" pill — demo brand NEVER reused).
This "Buildex" UI kit is DISTINCT from ColorLib "Consto", already recreated
as `apps/buildex` — hence the new name **buildkit**. The preview is a
classic Colorlib build: compiled Bootstrap 4 + ionicons/icomoon/flaticon
icon fonts + owl carousel + nouislider + datetimepicker + jQuery.

## Structure order (1:1 with preview DOM)

1. Navbar — `ftco-navbar-light`: TRANSPARENT, `position: absolute; top:
   10px`, navbar-dark over the hero. Left: brand "Buildex Kit." (→
   recreation "buildkit.") + "Components" dropdown (icon; items All
   Components / Documentation, each with icon) + "Download" (cloud icon);
   right: facebook/twitter/instagram icon links. Links: 14px, weight 300,
   UPPERCASE, white, 20px icons. Scrolled → `position: fixed; background:
   #fff; box-shadow: 0 0 10px rgba(0,0,0,0.1)`, active item `#6b48ff`.
   Mobile: "Menu" toggler (oi-menu icon) + aria-expanded.
2. Hero — `hero-wrap js-fullheight img`, background `images/bg_3.jpg`
   (welding/workshop scene) + `.overlay { opacity: .8; background: #000 }`.
   Centered text: h1 "Buildex UI Kit." white 80px weight 400 (40px
   mobile); h4 "Free Bootstrap 4 UI Kit on Tools Design." 24px weight 300
   `rgba(255,255,255,0.9)`; violet pill "Download Tools" (ionicons
   cloud-download). Recreation: picsum `buildkit-hero`, brand "Buildkit
   UI Kit.", pill "Download Kit" + lucide CloudDownload.
3. Basic Elements — `ftco-section pb-0`: h1 "Basic Elements" (slate
   `#3c4858`, weight 300) on white. The kit's intro.
4. Buttons (`#buttons`) — h2 "Buttons" with sub-groups: Pick your style
   (Default / Round / With Icon / Simple), Pick your size (Small / Regular
   / Large), Pick your color (Primary, Secondary, Success, Danger,
   Warning, Info, Light, Dark — solid + outline), Links (7 colored link
   buttons), Disabled Buttons, Buttons with Dropdown (3 × "Dropdown
   button" → Action / Another action / Something else here), Block Level
   Buttons (Block Level info / Block Level success). Theme rules:
   `.btn.btn-primary { background: #6b48ff }` hover `#4c22ff` active
   `#4215ff`; material shadow `0 10px 20px -6px rgba(0,0,0,0.12)` hover
   `0 12px 20px -6px rgba(0,0,0,0.21)`; `.btn.btn-round { border-radius:
   40px }`; `.btn.btn-white` white/black; `.btn.btn-link` transparent
   no-shadow (the "Simple" style); `.btn-link { color: #6b48ff }`.
5. Inputs (`#inputs`) — "With Floating Label" form groups: 48px inputs
   (`height: 48px; background: #fff; color: #777777; font-weight: 300;
   border-radius: 4px`), `.form-group { position: relative; margin-bottom:
   1.5rem }` with right-side icon slot; helper text "We'll never share
   your email with anyone else."; focus border `#6b48ff`.
6. Checkboxes / Radio Buttons / Toggle Buttons (`#checkRadios`) —
   Unchecked/Checked/Disabled pairs; "Radio os off" [sic] / "Radio is on";
   Toggle on/off switches.
7. Sliders (unnamed section) — nouislider demos (plugin NEVER copied;
   recreate with native `<input type="range">` styled with kit accent, or
   static styled tracks).
8. Progress bars (`#progressbar`) — five percentage bars 60% / 90% / 70%
   / 50% / 40% + skill bars with h6 labels (HTML 60%, WordPress 80%,
   WordPress 95% — labels paraphrasable).
9. Paginations (`#paginations`, `bg-light #f8f9fa`) — "Paginations":
   variant 1 « / 1–5 / » as 50×50px white circles
   (`color: rgba(0,0,0,0.4)`; active/hover `#6b48ff` white); variant 2
   Previous / 1–7 / Next as transparent circles (active `#6b48ff` +
   `0 10px 27px -20px rgba(0,0,0,0.33)` shadow).
10. Menus (`#menus`) — light navbar-style row: Menu / Discover (current) /
    Profile / Settings; "Menu with Icons" dropdown under "Dropdown
    header": Action / Another action / Something else here / Separated
    link / One more separated link.
11. Navigations (`#navigations`) — SEVEN `navbar px-0 navbar-expand-lg
    navbar-light` variants stacked (brand+links, dropdown+right links,
    centered, "Dropdown header" groups, caret toggles). Match the count
    and kind; paraphrase link labels.
12. Navigation Tabs + Badges (`#navigationTabs`, bg-light) — "Navigation
    Tabs": Home / Profile / Messages with "Far far away, behind the word
    mountains..." lorem panes; "Badges" sub-section (`border: 1px solid
    #000; border-radius: 0.25rem; padding: .25em .4em; font-size: 75%;
    font-weight: 700`).
13. Notifications (`#notifications`) — four SOLID alerts, white text:
    `.alert.alert-info { background: #29cded }`, `.alert.alert-success {
    #38cd8b }`, `.alert.alert-warning { #f89647 }`, `.alert.alert-danger
    { #f2395f }`. Quirky demo copy kinds (friends nearby / Yuhuuu album /
    footer-copyright warning / screwed-up server) — paraphrase ok.
14. Typography (`#typography`) — "Header 1"–"Header 6" all reading
    "Thinking in textures" in the light heading style (`#3c4858` weight
    300 lh 1.4); "Small Tag" h2-with-`<small>`; Paragraph + Quote samples
    ("leader of a company...nucleus" lorem — paraphrase ok). Source's
    `.typo { padding-left: 25% }` note treatment optional (implementer
    judges against screenshot).
15. Images (`#images`) — Rounded Image / Circle Image / Rounded Raised /
    Circle Raised groups (picsum `buildkit-img-*`).
16. Javascripts Components (`#javascriptsComponents`, bg-light) — Modals
    ("Launch demo modal" → Modal title / × / lorem body / Close / Save
    changes), Datetimepickers ("Datetime picker" → native
    datetime-local), Popovers + Tooltips (On top / On right / On bottom /
    On left each). Plugins never copied — React state + CSS.
17. Carousel (`#carousel`, `bg-primary #6b48ff`, `ftco-section-2`) —
    "Bootstrap Carousel": 3 fading slides ("This is Carousel Bootstrap
    Enjoy Free UI Kit." / "Buildex Free UI Kit." / "Enjoy Free UI Kit
    made by Buildex." — paraphrase, drop "Buildex"), each with white h2 +
    WHITE button "See all components"; clickable indicators.
18. Completed with examples (`ftco-section-2`, white) — centered h2 +
    paragraph about three pre-built pages ("The kit comes with three
    pre-built pages..." kind — paraphrase).
19. Signup/cards band (`ftco-section-2 section-signup page-header img`,
    background `images/bg_2.jpg` — photographic) — LEFT col-md-4: "Card
    Login" — `.card.card-login { background: linear-gradient(-45deg,
    #6a48ff 0%, #b4a3ff 100%) }`, transparent header, white card-title
    "Card Login", `.social-line` of three 40×40 round WHITE btn-icons
    (facebook/twitter/googleplus — violet icons), inputs + "Get Started";
    RIGHT: three white cards — "Default Featured" and "Special title
    treatment" (h5 "Special title treatment" + lead-in lorem + "Go
    somewhere" button) and "Card with footer" (same + footer "2 days
    ago").
20. Footer (`ftco-section ftco-section-2`, white, `border-top: 1px
    solid rgba(0,0,0,0.04)`) — centered line: "Copyright © All rights
    reserved / This template is made with <heart icon> by Colorlib" →
    recreation: "... by Component Dock" linking
    `https://www.componentdock.com/`.

## Design tokens (verified in style.css)

- Primary violet: `#6b48ff` (btn-primary, bg-primary, pagination active,
  focus borders, btn-link, navbar scrolled-active); hover `#4c22ff`;
  active `#4215ff`; focus ring `rgba(129, 99, 255, 0.5)`.
- Login gradient: `linear-gradient(-45deg, #6a48ff 0%, #b4a3ff 100%)`.
- Kit palette (solid alerts / color row): success `#38cd8b`, danger
  `#f2395f`, warning `#f89647`, info `#29cded`; light band `#f8f9fa`;
  secondary/link gray `#696464`-family.
- Font: `"Open Sans", Arial, sans-serif` — body 300/16px `#777777`
  lh 1.8; headings h1–h5 300 `#3c4858` lh 1.4; hero h1 white 80px/400.
  Load Open Sans 300–700 via Google Fonts.
- Buttons: padding 12px 18px; shadow `0 10px 20px -6px rgba(0,0,0,0.12)`
  → `0 12px 20px -6px rgba(0,0,0,0.21)` on hover; `.btn-round` radius
  40px (hero CTA pill); `.btn-white` white/black; `.btn-link` transparent
  no-shadow; sm/lg size variants; block-level full width.
- Inputs: 48px height, radius 4px, weight 300 `#777777`, focus border
  `#6b48ff`; form-group mb 1.5rem with right icon slot (floating label).
- Pagination circles: 50×50px; variant 1 white bg
  `rgba(0,0,0,0.4)` text; variant 2 transparent; active/hover `#6b48ff`
  white (+ shadow on variant 2).
- Badges: `1px solid #000`, radius 0.25rem, 75% size, 700 weight.
- Cards: radius 0.25rem, border `rgba(0,0,0,0.125)`; social-line icons
  40px round white with violet glyphs.
- Rhythm: `.ftco-section` 4em 0; `.ftco-section-2` 6em 0; bg-light bands
  alternate (`#f8f9fa`); carousel/signup/footer are `ftco-section-2`.
- Hero overlay `rgba(0,0,0,0.8)`; hero photo full-height.
- Navbar scrolled: fixed white + `0 0 10px rgba(0,0,0,0.1)`.
- Deviation: source pins `body { min-width: 992px !important }` — the
  recreation is RESPONSIVE instead (documented in spec).

## Fidelity notes for the implementer

- Section order is fixed by the preview DOM (listed above) — do not
  reorder or drop sections. This is a LONG page (~20 bands); componentize
  one file per section in `src/components/`.
- The two signature moves: (1) violet `#6b48ff` is the ONLY brand color
  — every CTA, active state, focus border, and the carousel band + login
  gradient; (2) light-weight Open Sans headings (300, slate) over a
  light 16px/300 body — the "airy kit catalog" look, not a bold corporate
  heading style.
- Buttons: pill (rounded-full) is the CTA shape (hero, dropdowns' primary
  actions), but the "Pick your style" row must show Default / Round /
  With Icon / Simple distinctly — Simple = transparent, no shadow.
- The demo brand "Buildex" / "Buildex Kit." appears NOWHERE in
  `apps/buildkit` — wordmark "buildkit.", headline "Buildkit UI Kit.",
  carousel slide copy paraphrased without "Buildex".
- Icons → lucide-react only: Layers (Components), CloudDownload
  (Download/hero CTA), Facebook/Twitter/Instagram (navbar + login card),
  Menu (toggler), Heart (footer), ChevronLeft/Right + dots (carousel),
  X (modal close), icons on dropdown items/tabs/badges as needed. No
  ionicons/icomoon/flaticon/open-iconic.
- Images → `picsum.photos/seed/buildkit-*` (hero, signup-bg, img-1..n,
  avatar if any). No copied assets.
- Interactions are React state: navbar mobile menu + scrolled state,
  Components dropdown, button dropdowns, checkbox/radio/toggle controls,
  pagination active page, tabs, modal open/close with focus management,
  popovers/tooltips, carousel autoplay + dots. Everything else is static
  markup; all form submits prevented.
- Plugins NEVER copied: Bootstrap JS (dropdowns/modal/carousel/tabs —
  reimplement in React), owl carousel, magnific-popup, animate/AOS,
  nouislider (→ native range), datetimepicker (→ datetime-local), jQuery.
- Provenance (`colorlib`, `buildex-ui-kit`, "Buildex") lives ONLY in this
  spec, the design notes, the tasks file, and TEMPLATES.md — never in app
  files. Footer links Component Dock.

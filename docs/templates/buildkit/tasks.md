# Buildkit — implementation tasks

Recreation of ColorLib "Buildex Ui Kit" (tools/workshop UI kit showcase).
Spec: `openspec/specs/template-buildkit/spec.md`. New name: **buildkit**
(source slug `buildex-ui-kit`, theme preview slug `buildex` — never reuse
either in app files; demo brand "Buildex"/"Buildex Kit." is also never
reused). Design notes: `docs/templates/buildkit/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/buildkit`
- [ ] Rename package to `@free-react-templates/buildkit`; set
      `"homepage": "https://buildkit.free.componentdock.com"`
- [ ] `public/CNAME` = `buildkit.free.componentdock.com`
- [ ] Run `npm install` at repo root; verify lockfile registers
      `@free-react-templates/buildkit`
      (`grep -c "free-react-templates/buildkit" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy pattern)
- [ ] Google Fonts `<link>` for Open Sans 300–700 in `index.html`
- [ ] `@theme` tokens in `src/index.css`: primary `#6b48ff`, hover
      `#4c22ff`, active `#4215ff`, gradient stops `#6a48ff` / `#b4a3ff`
      (as `--gradient-login: linear-gradient(-45deg, #6a48ff 0%, #b4a3ff
      100%)`), success `#38cd8b`, danger `#f2395f`, warning `#f89647`,
      info `#29cded`, heading `#3c4858`, body `#777777`, light band
      `#f8f9fa`, overlay `rgba(0,0,0,0.8)`, btn shadow `0 10px 20px -6px
      rgba(0,0,0,0.12)`

## Sections (component order in `App.tsx`)

- [ ] `Navbar.tsx` — transparent absolute bar over hero (~top 10px);
      "buildkit." wordmark left; "Components" dropdown (Layers icon → All
      Components `#buttons` / Documentation `#typography`) + "Download"
      (CloudDownload → `#signup`), uppercase 14px/300 white + 20px icons;
      facebook/twitter/instagram icons right (aria-labels); "Menu"
      toggler below lg (aria-expanded) toggling the link list; scrolled
      state → fixed white + `shadow-[0_0_10px_rgba(0,0,0,0.1)]`, active
      section link `#6b48ff`
- [ ] `Hero.tsx` — full-viewport photo (picsum `buildkit-hero`) +
      `bg-black/80` overlay; centered: white h1 "Buildkit UI Kit."
      ~80px/400 (40px mobile), subtitle 24px/300 white/90 "A free UI kit
      on tools & workshop design.", violet rounded-full "Download Kit"
      pill (12px/18px padding, btn shadow) + CloudDownload icon →
      `#buttons`
- [ ] `BasicElements.tsx` — white section (4em padding): h1 "Basic
      Elements" slate `#3c4858` weight 300, left-aligned
- [ ] `ButtonsShowcase.tsx` — `#buttons`: "Buttons" + "Pick your
      style" (Default / Round rounded-full / With Icon / Simple
      transparent), "Pick your size" (sm/md/lg), "Pick your color"
      (solid + outline × Primary `#6b48ff`, Secondary gray, Success,
      Danger, Warning, Info, Light, Dark), "Links" (colored btn-link
      row), "Disabled Buttons", "Buttons with Dropdown" (3 React-state
      dropdowns → Action / Another action / Something else here,
      aria-expanded), "Block Level Buttons" (full-width info + success);
      all carry the material shadow
- [ ] `InputsShowcase.tsx` — `#inputs`: "Inputs" + "With Floating
      Label" form groups (48px radius-4px inputs, floating label,
      violet focus border, icon slot right, helper text "We'll never
      share your email with anyone else."); submit prevented
- [ ] `ControlsShowcase.tsx` — `#checkRadios`: "Checkboxes" (Unchecked/
      Checked/Disabled variants), "Radio Buttons" (on/off + disabled),
      "Toggle Buttons" (on/off — real switch role + aria-checked,
      click flips)
- [ ] `SlidersShowcase.tsx` — unnamed band: "Sliders" + native
      `<input type="range">` styled with kit accent (NO nouislider) —
      one styled slider demo minimum
- [ ] `ProgressShowcase.tsx` — `#progressbar`: "Progress bars" — 5
      percentage bars 60/90/70/50/40% (violet fill, light track) + skill
      bars labeled HTML 60% / WordPress 80% / WordPress 95% (labels
      paraphrasable); widths via state/CSS transition on mount
- [ ] `PaginationsShowcase.tsx` — `#paginations` bg-light `#f8f9fa`:
      "Paginations" — variant 1 «/1–5/» 50px white circles (active
      `#6b48ff`), variant 2 Previous/1–7/Next transparent circles
      (active `#6b48ff` + soft shadow); click sets active (React state)
- [ ] `MenusShowcase.tsx` — `#menus`: "Menu" light navbar row (Menu /
      Discover (current) / Profile / Settings) + "Menu with Icons"
      dropdown ("Dropdown header": Action / Another action / Something
      else here / Separated link / One more separated link)
- [ ] `NavigationsShowcase.tsx` — `#navigations`: "Navigations" —
      SEVEN stacked light navbar variants (px-0): brand+links,
      dropdown+right links, centered links, "Dropdown header" groups —
      match the preview's count and kind; paraphrase labels
- [ ] `TabsBadgesShowcase.tsx` — `#navigationTabs` bg-light:
      "Navigation Tabs" — Home / Profile / Messages tabs with lorem
      panes (React state; active tab kit-accent) + "Badges" sub-section
      (`border border-black rounded-[0.25rem] text-xs font-bold`)
- [ ] `NotificationsShowcase.tsx` — `#notifications`: "Notifications" —
      4 SOLID alerts, white text: info `#29cded` / success `#38cd8b` /
      warning `#f89647` / danger `#f2395f`, quirky demo-copy kinds
      (paraphrase)
- [ ] `TypographyShowcase.tsx` — `#typography`: "Typography" — Header
      1–6 "Thinking in textures" (slate `#3c4858` weight 300), Small
      Tag header (h2 + small), Paragraph + Quote samples (lorem kind)
- [ ] `ImagesShowcase.tsx` — `#images`: "Images" — Rounded Image /
      Circle Image / Rounded Raised / Circle Raised groups (picsum
      `buildkit-img-1..n`, rounded / rounded-full / + shadow variants)
- [ ] `JsComponentsShowcase.tsx` — `#javascriptsComponents` bg-light:
      "Javascripts Components" — Modals ("Launch demo modal" → React
      modal: title + × / lorem body / Close + Save changes; backdrop +
      × + Close dismiss; focus moved in and restored) + Datetimepickers
      ("Datetime picker" + native datetime-local styled like kit inputs)
      + Popovers (On top/right/bottom/left violet buttons → toggle
      popover cards) + Tooltip (same 4 buttons, hover/focus tooltips,
      aria-describedby)
- [ ] `CarouselBand.tsx` — `#carousel` bg `#6b48ff` (6em padding):
      "Carousel" header + 3 fading slides (React state + timer) — slide
      copy paraphrased WITHOUT "Buildex" — each: white h2 + WHITE button
      "See all components"; clickable dots, active state
- [ ] `ExamplesIntro.tsx` — white `ftco-section-2`: centered h2
      "Completed with examples" + paragraph (pre-built-pages kind,
      paraphrased)
- [ ] `SignupBand.tsx` — photo band (picsum `buildkit-signup-bg`):
      LEFT col-md-4 "Card Login" — `--gradient-login` background, white
      centered title, social-line of 3 round WHITE 40px icon buttons
      (Facebook/Twitter/Google-ish lucide stand-ins, violet glyphs),
      inputs + "Get Started" (submit prevented); RIGHT 3 white cards —
      "Default Featured" / "Special title treatment" (h5 + lead-in lorem
      + "Go somewhere" button) / "Card with footer" (same + footer "2
      days ago"); stack on mobile
- [ ] `Footer.tsx` — white, `border-t border-black/5`, centered
      6em-padding line: "Copyright © <year> All rights reserved. Made
      with <Heart icon class text-rose-500> by
      [Component Dock](https://www.componentdock.com/)" — never ColorLib

## Tests (TDD — red first, 100% coverage)

- [ ] Per-component tests mirroring the spec's Gherkin scenarios
      (query by role/text; `user-event` for all interactions)
- [ ] Navbar: "Menu" toggler below lg (`aria-expanded`), Components
      dropdown opens/closes, scrolled-state class applied on scroll
- [ ] ButtonsShowcase: dropdowns toggle (aria-expanded), pagination-like
      states per showcase — dropdown action items visible when open
- [ ] ControlsShowcase: checkbox/radio/toggle states flip on click
      (`aria-checked`)
- [ ] PaginationsShowcase: clicking a page number moves the active
      `#6b48ff` circle
- [ ] TabsBadgesShowcase: tab switch swaps visible pane
- [ ] JsComponentsShowcase: modal opens on "Launch demo modal", closes on
      × / "Close" / backdrop; popovers toggle
- [ ] CarouselBand: dots click switches slides; autoplay advances state
- [ ] Footer contains the Component Dock link; no `colorlib` / `buildex`
      string anywhere in the app (grep gate)

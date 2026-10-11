# Modkit — implementation tasks

Recreation of ColorLib "Next Ui Kit" (purple/indigo UI kit showcase).
Spec: `openspec/specs/template-modkit/spec.md`. New name: **modkit**
(source slug `next-ui-kit`, theme preview slug `next` — never reuse
either in app files; demo brand "Next"/"Next UI Kit" is also never
reused). Design notes: `docs/templates/modkit/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/modkit`
- [ ] Rename package to `@free-react-templates/modkit`; set
      `"homepage": "https://modkit.free.componentdock.com"`
- [ ] `public/CNAME` = `modkit.free.componentdock.com`
- [ ] Run `npm install` at repo root; verify lockfile registers
      `@free-react-templates/modkit`
      (`grep -c "free-react-templates/modkit" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy pattern)
- [ ] Google Fonts `<link>` for Work Sans 300–700 in `index.html`
- [ ] `@theme` tokens in `src/index.css`: primary `#5753C9`, secondary
      `#6c757d`, success `#00ad6c`, danger `#ef3536`, warning `#ffb800`,
      info `#12d0da`, heading `#394a6d`, gradient stops `#3D4E81` /
      `#5753C9` / `#6E7FF3` (as `--gradient-hero: linear-gradient(315deg,
      #3D4E81 0%, #5753C9 48%, #6E7FF3 100%)`), light band `#f8f9fa`,
      btn shadow `0 5px 15px -5px rgba(<color>, .8)` per color

## Sections (component order in `App.tsx`)

- [ ] `Hero.tsx` — 80vh band, picsum `modkit-hero` cover photo under the
      `--gradient-hero` overlay at .8 opacity; centered bold white h1
      "Modkit UI Kit.", white lorem subtitle, teal `#12d0da` "See Here"
      button (small rounded, px-4 py-3, uppercase) → `#start`
- [ ] `AlertsShowcase.tsx` (`#start`) — header row (h2 "Alerts" with
      accent bar + lead); 8 solid alerts (Primary…Dark, white text,
      "A simple <color> alert—check it out!" kind) in a light-gray demo
      panel; "With Icon + Shadow" (icon + "Info:" info alert, flex,
      shadow); "Dismissing" (primary + secondary, white × close works)
- [ ] `BadgeShowcase.tsx` — "Contextual Variations" (8 uppercase tinted
      badges: 0.1-alpha bg + colored text, warning/info 0.5-alpha) +
      "Pill badges" (same colors)
- [ ] `ButtonsShowcase.tsx` — Example ("Button" + "With Icon"),
      six solid (Default/Secondary/Info/Danger/Warning/Success), six
      `btn-outline-*`, six outlined `.btn-pill` (radius 50px, px-4),
      Sizes (sm 12px / md 14px / lg 16px); uppercase 0.9rem; per-color
      soft shadow fading on hover
- [ ] `CarouselShowcase.tsx` — 3 picsum slides (`modkit-slide-1..3`),
      caption h5 white ("First/Second/Third slide label") + lorem line,
      3 dots (clickable) + prev/next; React-state cycling only
- [ ] `DropdownsShowcase.tsx` — 4 "Dropdown button" toggles (color
      variants) → Action / Another action / Something else here;
      borderless menu `0 0 30px rgba(0,0,0,0.2)` shadow; aria-expanded
- [ ] `FormsShowcase.tsx` — "Input": Name ("Full name"), Email, Datetime
      Picker = native `<input type="datetime-local">`; "Input Shadow":
      Username / Email / Password (shadow `0 1px 2px rgba(0,0,0,0.08)`);
      focus border `#5753C9`, no ring; submit prevented
- [ ] `ModalShowcase.tsx` — "Launch Demo Modal" → centered modal
      "Modal title" + × + 2 lorem paragraphs ("Mist enveloped the
      ship..." kind); square borderless content, `0 10px 50px -10px
      rgba(0,0,0,0.3)` shadow; × / backdrop / Escape close; focus
      managed
- [ ] `NavbarShowcase.tsx` — six stacked `navbar-dark` bars (px-4,
      mb-4): bg-primary/success/info/danger/secondary/transparent with
      per-color `0 2px 5px -2px rgba(<color>, .5)` shadows; "Brand" +
      Home/Features/Pricing (+ "Link"/"Disabled" variants + "Dropdown
      link" → Action/Another action/Something else here); uppercase
      .8rem/400 white items, 15px/10px padding, hover
      `rgba(255,255,255,0.2)`; transparent bar: white underline search
      input + 40px round white search button (lucide Search)
- [ ] `PaginationShowcase.tsx` — 3 `custom-pagination` rows
      (Prev/1/2/3/Next) in primary/secondary/info; active page filled +
      `0 2px 5px 0 rgba(<color>, .2)` shadow; clickable (React state)
- [ ] `TypographyShowcase.tsx` — labeled Heading 1–6 samples all "Almost
      before we knew it, we had left the ground." (weight 300 `#394a6d`,
      lh 1.5) + Paragraph + Quote + Muted/Primary/Info/Success/Warning/
      Danger text rows
- [ ] `ImagesShowcase.tsx` — ONE picsum image (`modkit-img-1`) in 4
      columns: Rounded Raised (shadow) / Rounded / Circle / Thumbnail
      (bordered)
- [ ] `PopoversShowcase.tsx` — Popover on top/right/bottom/left; borderless
      10px-pad card, `0 5px 30px -5px rgba(0,0,0,0.4)` shadow, no arrow;
      header weight 400 `#6c757d`
- [ ] `TooltipsShowcase.tsx` — Tooltip on top/right/bottom/left; white
      tooltip, black text, `0 2px 10px rgba(0,0,0,0.5)` shadow, max-w
      200px, 4px/10px pad; aria-describedby
- [ ] `ControlsShowcase.tsx` — 3 columns: Checkboxes (Unchecked/Checked/
      Disabled ×2), Radioboxes (Radio is on/off + disabled group),
      Toggle Switch ("Toggle this switch element"/"Checked switch
      element"); checked = `#5753C9`; switches flip with aria-checked
- [ ] `SlidersShowcase.tsx` — native `<input type="range">` styled with
      kit accent (or static styled tracks); no nouislider
- [ ] `TabsShowcase.tsx` — two `bg-light p-4` panels (col-md-6), each a
      white tab-card with horizontal pill nav Profile/Messages/Settings
      (one `tab-secondary` `#6c757d` accent) + lorem pane ("Mist
      enveloped the ship..." kind); React state + aria-selected
- [ ] `ProgressShowcase.tsx` — left: 4 bars 25% success / 50% info /
      75% warning / 100% danger; right: pill-badge label + bold right
      percentage rows — "WordPress" 94% (primary), "HTML5" 85%
      (warning), third row generic (source label is the demo brand —
      paraphrase, e.g. "UI Design"); `.progress-20102` 7px bars
- [ ] `Footer.tsx` — `bg-light` (`#f8f9fa`) centered line: "Copyright ©
      <year> All rights reserved | Made with <Heart> by Component Dock"
      linking `https://www.componentdock.com/` (REQUIRED; never
      ColorLib)

## Finish

- [ ] Shared header-row helper for the band pattern (h2 + 2px `#5753C9`
      left accent bar + lead paragraph) — colocated in `apps/modkit` or
      reuse `packages/ui` if a fitting component exists
- [ ] TDD: one `describe` per component, scenario-style `it` blocks
      mirroring the spec; 100% coverage (lines/functions/branches/
      statements)
- [ ] No `colorlib` / "Next" / "Next UI Kit" strings anywhere in
      `apps/modkit` (comments included)
- [ ] `scripts/verify-app.sh modkit` passes; PR description includes
      source template, preview URL, design tokens, renames

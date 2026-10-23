# Template: Debut (Coming Soon)

## Purpose

Debut is a coming-soon / launch page in the free-react-templates monorepo.
It is an original React recreation of the ColorLib free "Coming Soon 1"
template (source slug `comingsoon_01` — a two-column split coming-soon page:
a white subscription panel beside a full-height night-photo panel with a live
countdown), built under a different name with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

- **Source:** https://colorlib.com/wp/template/comingsoon_01/
- **Preview:** https://preview.colorlib.com/theme/comingsoon_01/ returns
  HTTP 404 (verified 2026-10-11). The ColorLib template page exposes only
  `https://preview.colorlib.com/#comingsoon_01` and a downloadable source zip
  (`https://preview.colorlib.com/downloads/free/comingsoon_01.zip`, HTTP 200,
  448,688 B, 18 entries). Replication used that official source zip
  (index.html + css/style.css) as the DOM/CSS reference, plus the screenshot.
  **Re-verified 2026-10-11** when this prep was re-created (the previous prep
  files were dropped from main by an implementer bookkeeping commit,
  `02ae6a323`): `theme/comingsoon_01/` still returns HTTP 404, the source zip
  still returns HTTP 200 / 448,688 B, and every token in
  [Design tokens](#design-tokens) below was re-extracted live from that zip's
  `css/style.css`. No implementation exists for this item
  (`apps/debut` absent, TEMPLATES.md line 3032 still `- [x]`).
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-1.jpg
- **New name:** `debut` (apps/debut, `@free-react-templates/debut`)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

The reference is a single full-viewport screen, not a scrolling site. A white
left panel (max-width 650px, min-height 100vh) carries the logo, a two-line
headline ("Our website is **Coming Soon**, follow us for update now!"), a
name + email subscription form, and three round social buttons pinned to the
bottom. The right 71% of the viewport is a full-height photograph under a
heavy black overlay (`rgba(0,0,0,0.8)`), clipped from the left panel by a
diagonal skewed edge (a white block rotated `skewX(156deg)`), and hosts a
`js-tilt` 2×2 countdown of four translucent outlined circles
(Days / Hours / Minutes / Seconds).

The whole design is one green accent (`#57b846`) on white: the Subscribe
button fill and the input focus ring. Everything else is neutral — charcoal
headline `#555555` (Poppins), gray body/placeholder `#999999` (Lato),
light-gray input borders `#e6e6e6`. Brand socials keep their own hues
(Facebook `#3b5998`, Twitter `#1da1f2`, YouTube `#cd201f`) and darken to
`#555555` on hover.

## Design reference (replication findings)

- **Original:** ColorLib "Coming Soon 1" (source:
  https://colorlib.com/wp/template/comingsoon_01/). Listed in TEMPLATES.md
  `## Uncategorized (15)` at line 3032; slug appears exactly once (no
  duplicate `- [x]` line). The demo brand "Coming Soon 1" / logo "CO." is
  NEVER reused in app files — hence the NEW name **debut**.
- **Preview URL:** https://preview.colorlib.com/theme/comingsoon_01/ →
  HTTP 404. Fallback (documented): the official source zip
  `https://preview.colorlib.com/downloads/free/comingsoon_01.zip` (HTTP 200,
  448,688 B) was downloaded and extracted to `/tmp/cs01x/comingsoon_01/`
  (`index.html`, 5,168 B; `css/style.css`, 12,745 B; `js/snippet.js`,
  3,970 B). Reference artifacts: `/tmp/cs01.zip`, `/tmp/cs01x/`,
  `/tmp/cs01.png` (converted screenshot). Research date: 2026-10-11. The
  source HTML/CSS is authoritative for section structure, copy, and tokens.
- **Screenshot:** `coming-soon-1.jpg` (reviewed visually 2026-10-11) confirms
  the layout: a white left panel with the "CO." logo (green dot), the two-line
  headline, two rounded inputs ("Your Name", "Email Address"), a full-width
  green "Subscribe" button, a small gray spam note, and three round social
  buttons at the bottom-left; on the right, a full-height starry-night desert
  photograph (cactus silhouettes) under a dark overlay, separated from the
  white panel by a diagonal edge, with a 2×2 grid of four thin white-outlined
  circles ("35 DAYS", "17 HOURS", "59 MINUTES", "57 SECONDS") centred on it.
- **Stylesheets in the reference:** a single `css/style.css` (no framework,
  no jQuery, no CDN — the snippet is self-contained). It carries a small
  Bootstrap-4-style reboot (resets) followed by the snippet's own namespaced
  utility classes. The recreation uses Tailwind 4 (which resets itself) +
  React state; the reboot and all source class names are NEVER copied.
- **Key theme rules (verified in style.css):**
  - Brand green `#57b846`: `.bg1{background-color:#57b846}` (Subscribe
    button) and `.focus-input100{border:2px solid #57b846}` (input focus
    ring); hover darken `.hov1:hover{background-color:#555555}`
  - Social fills: `.bg3{#3b5998}` Facebook, `.bg4{#1da1f2}` Twitter,
    `.bg5{#cd201f}` YouTube; `.how1:hover{background-color:#555555}`
  - Layout: `.size1{width:100%;min-height:100vh}` (page);
    `.size2{height:100%;width:71%}` (photo panel);
    `.size3{max-width:650px;min-height:100vh}` (form panel);
    `.where1{position:absolute;top:0;right:0;z-index:-1}` (photo panel pinned
    right); `.where2{padding:50px 50px 150px 320px}` (countdown area padding);
    `.wsize2{max-width:380px}` (countdown grid)
  - Diagonal divider: `.overlay1::before{background-color:rgba(0,0,0,0.8)}`
    is the overlay; `.overlay1::after{right:100%;width:10000px;height:100%;
background-color:#fff;transform:skewX(156deg);transform-origin:bottom
right}` is the white diagonal wedge clipping the photo's left edge
  - Countdown circle: `.size6{width:155px;height:155px}` +
    `.bor2{border:1px solid rgba(255,255,255,0.3);border-radius:50%}`
  - Countdown number: `.l2-txt1{font-family:Lato-Bold;font-size:40px;
line-height:1;color:#fff}`; label `.s2-txt4{font-family:Lato-Regular;
font-size:12px;line-height:1;color:#fff;text-transform:uppercase}`
  - Headline: `.m1-txt1{font-family:Poppins-Regular;font-size:24px;
line-height:1.5;color:#555555}` with `.m1-txt2` (Poppins-Bold, same
    size/color) for the word "Coming Soon"
  - Inputs: `.wrap-input100{width:100%;height:50px;border:2px solid #e6e6e6;
border-radius:5px;background:#fff}`; `.input100` transparent,
    `input.input100{padding:0 22px}`; placeholder `.placeholder0` `#999999`;
    `.s2-txt1{font-family:Lato-Bold;font-size:15px;color:#555555}`
  - Button: `.size4{width:100%;height:50px}` + `.bor1{border-radius:5px}` +
    `.s2-txt2{font-family:Lato-Bold;font-size:15px;color:#fff}` +
    `.trans-04{transition:all .4s}`
  - Socials: `.size5{width:36px;height:36px}` + `.how1{border-radius:50%;
font-size:22px;color:#fff}`
  - Note text: `.s2-txt3{font-family:Lato-Regular;font-size:14px;
color:#999999}`
  - Validation bubble: `.alert-validate::before{content:attr(data-validate);
border:1px solid #c80000;color:#c80000;font-family:Poppins-Regular;
font-size:14px;border-radius:2px}` + `::after` a FontAwesome `\f12a`
    warning glyph — recreation uses a lucide-react `AlertCircle` instead
  - Fonts (source, self-hosted `@font-face`): Poppins-Regular / Poppins-Bold
    (headline) and Lato-Regular / Lato-Bold (everything else) — recreation
    loads Poppins + Lato from Google Fonts via `<link>` in `index.html`
- **Content map (source DOM):** `.size1.bg0` wrapper →
  `.flex-c-m.bg-img1.size2.where1.overlay1.where2.respon2` (photo panel,
  `background-image:url(images/bg01.jpg)`) containing
  `.wsize2.flex-w.flex-c-m.cd100.js-tilt` with four
  `.flex-col-c-m.size6.bor2` count progress cells — each a `span.days|hours|
minutes|seconds` (`.l2-txt1`) over a label `span` (`.s2-txt4`:
  Days/Hours/Minutes/Seconds); and
  `.size3.flex-col-sb.flex-w.p-l-75.p-r-75.p-t-45.p-b-45.respon1` (form panel)
  containing `.wrap-pic1` (logo `img`), a `.p-t-50.p-b-60` block with
  `p.m1-txt1` headline + `form.contact100-form.validate-form` (two
  `.wrap-input100.validate-input` rows — `input.input100` "Your Name" and
  "Email Address" + a `.focus-input100` span) + a `.w-full` `button.flex-c-m
.s2-txt2.size4.bg1.bor1.hov1.trans-04` "Subscribe" + `p.s2-txt3` spam note,
  and a `.flex-w` footer row of three `a.flex-c-m.size5.bg3|bg4|bg5.how1`
  social circles (facebook / twitter / youtube icons). `js/snippet.js` drives
  the countdown (config `{D:35,h:18,m:0,s:0}`, DOM starts 35/17/50/39), the
  form validation, and a tilt effect on `.js-tilt`.

## Design tokens

| Token                               | Value                                                             | Where                                   |
| ----------------------------------- | ----------------------------------------------------------------- | --------------------------------------- |
| brand green                         | `#57b846`                                                         | Subscribe button fill, input focus ring |
| hover gray                          | `#555555`                                                         | Subscribe / social hover background     |
| headline text                       | `#555555`                                                         | `.m1-txt1` / `.m1-txt2` (Poppins 24px)  |
| input text                          | `#555555`                                                         | `.s2-txt1` (Lato-Bold 15px)             |
| muted / placeholder                 | `#999999`                                                         | `.placeholder0`, `.s2-txt3` note        |
| base body text                      | `#666666` (over `#212529` reboot)                                 | page text                               |
| input border                        | `#e6e6e6`                                                         | 2px, radius 5px                         |
| error red                           | `#c80000`                                                         | validation bubble border/icon           |
| overlay                             | `rgba(0,0,0,0.8)`                                                 | photo panel darkening                   |
| photo panel divider                 | `#fff`, `skewX(156deg)`                                           | diagonal wedge                          |
| countdown circle                    | `155px`, `1px solid rgba(255,255,255,0.3)`, radius 50%            | four circles                            |
| countdown number / label            | `#fff` — Lato-Bold 40px / Lato-Regular 12px uppercase             | circles                                 |
| social Facebook / Twitter / YouTube | `#3b5998` / `#1da1f2` / `#cd201f`                                 | round icon buttons                      |
| social button                       | 36px circle, 22px icon, white                                     | `.size5`/`.how1`                        |
| font family                         | Poppins (headline) + Lato (body), Google Fonts                    | everywhere                              |
| radii                               | 5px (inputs, button), 50% (socials, countdown)                    | shapes                                  |
| page                                | `min-height:100vh`; form panel `650px`/`100vh`; photo panel `71%` | layout                                  |
| transition                          | `all .4s`                                                         | button, focus ring, socials             |

<!-- ref-reverify:2026-10-22 -->

## Live reference restored (2026-10-22)

The prep recorded this ColorLib preview as unreachable, so its tokens were — **re-probed 2026-10-23: the demo serves** (measured record below)

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/cs/comingsoon_01/index.html` — HTTP 200, 5,236 B, title `Coming Soon 1`.
>
> Sheet: `https://colorlib.com/etc/cs/comingsoon_01/css/style.css?v=232f3841` (12,745 B).
> Faces it actually declares: `Lato-Bold`, `Poppins-Bold`, `Segoe UI`, `Roboto`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->
read off the TEMPLATES.md screenshot and the docs brief says "screenshot
only". **Re-probed 2026-10-22** the reference answers **HTTP 200**, so the
live DOM and CSS are authoritative for token values — `docs/replication.md`:
*CSS values are canonical over screenshots*. The screenshot stays the layout
target.

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://colorlib.com/etc/cs/comingsoon_01/index.html` | HTTP 200 · 5,238 B · title `Coming Soon 1` |
| stylesheet | `https://colorlib.com/etc/cs/comingsoon_01/css/style.css?v=232f3841` | HTTP 200 · 12,745 B · sha256 `3da56f909e07` |

**Live palette** (hex × occurrences across the sheets): `#c80000`×3,
`#57b846`×2.

## Requirements

### Feature: Split layout

The page is one full-viewport split: a white form panel on the left and a
full-height photo panel on the right, clipped by a diagonal white edge.

#### Scenario: Page splits into form and photo panels

- **Given** the page loads at desktop width
- **When** the layout renders
- **Then** the left panel is a white column, max-width 650px,
  `min-height:100vh`, with 45px/75px padding, holding the logo, headline,
  form, and socials stacked with space-between
- **And** the right panel fills the remaining width (~71%), is pinned to the
  right, and is `min-height:100vh`
- **And** the photo is a cover/center background (picsum seeded
  `debut-hero`, a dark night-sky/desert scene per the screenshot) under a
  `rgba(0,0,0,0.8)` overlay
- **And** a white diagonal wedge (`skewX(156deg)`, origin bottom-right)
  visually separates the photo panel's left edge from the white form panel
- **And** below the `lg` breakpoint the panels stack: the photo panel sits
  above the form panel full-width with a top diagonal edge, and the form
  panel is centered at max-width 650px

### Feature: Subscription form

The left panel's headline, name + email form, green Subscribe button, and
spam note.

#### Scenario: Form renders and validates as in the reference

- **Given** the form panel renders
- **When** it is visible
- **Then** the logo sits top-left (recreation: a "debut." wordmark with a
  green dot — the source "CO." logo image is never copied)
- **And** the headline reads "Our website is **Coming Soon**, follow us for
  update now!" with the phrase "Coming Soon" in a bold accent (Poppins;
  same kind of copy, paraphrasable)
- **And** two inputs render — "Your Name" and "Email Address" — each 50px
  tall, 2px `#e6e6e6` border, radius 5px, `Lato-Bold` text, 22px horizontal
  padding, `#999999` placeholder
- **And** the focused input shows a 2px `#57b846` ring that animates in
  (scale 1.1×1.2 → 1, `transition .4s`)
- **And** a full-width "Subscribe" button renders (50px tall, radius 5px,
  `#57b846` fill, white `Lato-Bold` 15px label) darkening to `#555555` on
  hover
- **And** below it a small `#999999` note reads "And don't worry, we hate
  spam too! You can unsubscribe at anytime." (same kind; paraphrase ok)
- **And** submitting with an empty name or an invalid email shows a red
  `#c80000` validation bubble (lucide `AlertCircle` + message) above the
  offending field, cleared on focus; a valid submit is accepted (React state,
  no navigation)

### Feature: Social buttons

Three round brand-colored social links pinned to the panel bottom.

#### Scenario: Socials render as in the reference

- **Given** the form panel renders
- **When** the footer row is visible
- **Then** three 36px round buttons render in order — Facebook `#3b5998`,
  Twitter `#1da1f2`, YouTube `#cd201f` — each with a white 22px icon
- **And** each darkens to `#555555` on hover (`transition .4s`)
- **And** each is a real `<a>` with an accessible label (the source hrefs are
  `#`; use `#` placeholders with `aria-label`)

### Feature: Countdown

Four translucent circles over the photo panel showing a live countdown.

#### Scenario: Countdown renders and ticks

- **Given** the photo panel renders
- **When** the countdown is visible
- **Then** four circles render in a 2×2 grid (max-width 380px, centred),
  each 155px with a `1px solid rgba(255,255,255,0.3)` border and radius 50%
- **And** each circle shows a large white number (Lato-Bold 40px) above an
  uppercase white label (Lato-Regular 12px) — Days, Hours, Minutes, Seconds
- **And** the values update once per second toward a target end date
  (recreation: an end date a fixed number of days ahead — the source config
  is `D:35,h:18`), zero-padded to two digits for hours/minutes/seconds
- **And** the grid responds to pointer movement with a subtle 3D tilt like
  the source `js-tilt` (implemented in React, no jQuery/tilt.js)

### Feature: Design tokens & typography

The recreation exposes the reference palette and fonts as Tailwind 4
`@theme` tokens.

#### Scenario: Theme tokens match the reference

- **Given** the app's `src/index.css` theme
- **When** the tokens are declared
- **Then** the palette includes: brand `#57b846`, hover `#555555`, headline
  `#555555`, muted `#999999`, input border `#e6e6e6`, error `#c80000`,
  overlay `rgba(0,0,0,0.8)`, Facebook `#3b5998`, Twitter `#1da1f2`,
  YouTube `#cd201f`
- **And** Poppins (headline) and Lato (body) load via Google Fonts `<link>`
  in `index.html`
- **And** shapes are radius 5px (inputs, button) and 50% (socials,
  countdown circles); transitions are `.4s`

### Feature: Footer attribution

A single Component Dock attribution, per the monorepo rule.

#### Scenario: Attribution links Component Dock

- **Given** the page renders
- **When** the attribution is visible
- **Then** it reads a Component-Dock attribution (e.g. "Made with ♥ by
  Component Dock") linking `https://www.componentdock.com/` branded
  "Component Dock" — never ColorLib, "Colorlib", "Coming Soon 1", or the
  source slug

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/debut/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/debut/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] Layout 1:1 with the reference: white form panel (max-width 650px,
      min-height 100vh) + full-height photo panel (~71%, right-pinned) under
      a `rgba(0,0,0,0.8)` overlay, separated by a white `skewX(156deg)`
      diagonal wedge; stacks below `lg`
- [x] Brand green `#57b846` is the single accent: Subscribe fill + input
      focus ring; hover darkens to `#555555`
- [x] Form panel: "debut." wordmark (green dot); headline "Our website is
      **Coming Soon**, follow us for update now!" (Poppins, bold accent on
      "Coming Soon"); name + email inputs (50px, 2px `#e6e6e6`, radius 5px,
      `#999999` placeholder, animated `#57b846` focus ring); full-width
      "Subscribe" button (50px, radius 5px, `#57b846` → `#555555` hover);
      `#999999` spam note; three 36px round socials (Facebook `#3b5998` /
      Twitter `#1da1f2` / YouTube `#cd201f` → `#555555` hover)
- [x] Form validation: empty name / invalid email → red `#c80000` bubble
      (lucide `AlertCircle` + message) above the field, cleared on focus;
      valid submit accepted (React state, no navigation)
- [x] Countdown: four 155px circles (`1px solid rgba(255,255,255,0.3)`,
      radius 50%) in a 2×2 grid (max-width 380px); white Lato-Bold 40px
      numbers above uppercase Lato-Regular 12px labels (Days/Hours/Minutes/
      Seconds); live 1-second tick toward a target date, zero-padded;
      pointer-tilt effect (React, no jQuery/tilt.js)
- [x] Headline Poppins; body/inputs/countdown Lato — both via Google Fonts
      `<link>`; radii 5px / 50%; transitions `.4s`
- [x] All images are `picsum.photos/seed/debut-*` placeholders; icons inline —
      the three brand marks are self-contained SVG paths (`svg` +
      `currentColor`) because the icon library dropped brand glyphs, and
      `AlertCircle` / `Heart` come from `lucide-react` (replacing the source
      FontAwesome `fa-facebook|fa-twitter|fa-youtube-play|f12a`); no copied
      assets, fonts files, or CSS; no jQuery, no tilt.js, no Bootstrap
- [x] Component Dock attribution links `https://www.componentdock.com/`
- [x] Zero `colorlib` / "Coming Soon 1" / "CO." source-brand references
      anywhere in `apps/debut` (comments included)
- [x] App folder `apps/debut`, package `@free-react-templates/debut`,
      `homepage` `https://debut.free.componentdock.com`, `public/CNAME`
      `debut.free.componentdock.com`, lockfile registers the workspace
- [x] `vite.config.ts` keeps `injectUiSource()`; tests at 100% coverage;
      `scripts/verify-app.sh debut` passes
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Implementation notes

- **Components:** `ComingSoon` (page shell: white panel + absolute, right-pinned
  photo panel), `Countdown` (photo panel: seeded cover, `rgba(0,0,0,0.8)`
  overlay, `skewX(156deg)` white wedge on wide screens and a folded wedge under
  the panel once stacked), `Logo`, `Headline`, `SubscribeForm`, `Socials`
  (+ inline `BrandIcons`), `Attribution`; hooks `useCountdown` (1 s tick,
  clamped at zero) and `useTilt` (pointer tilt, disabled under
  `prefers-reduced-motion: reduce`); `lib/forms.ts` (zod `subscribeSchema` +
  `fieldErrors`, per the monorepo form contract).
- **Deviations (documented):** the photo panel uses the deterministic
  placeholder `https://picsum.photos/seed/debut-cover/1600/1200`, so the scene
  differs from the source's night-sky photograph though the treatment (dark
  overlay + diagonal edge) is identical; the 155px countdown circles keep that
  size at desktop and scale down on narrow viewports instead of overflowing;
  the Component Dock attribution line is added to the panel's bottom group
  because the monorepo requires it and the source has no footer band;
  validation bubbles use `lucide-react`'s `AlertCircle` rather than the source
  FontAwesome glyph.
- **Verification:** 36 Vitest tests (12 files) at 100%
  statements/branches/functions/lines; `scripts/verify-app.sh debut` passes
  (typecheck + lint + coverage + build); `openspec validate template-debut`
  passes.

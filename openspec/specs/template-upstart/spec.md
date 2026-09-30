# Template: Upstart (Startup / Design Agency)

## Purpose

Upstart is a design-studio startup website template (quote-hero with CTA
card, services grid, alternating case-study rows, testimonials, widget
footer) in the free-react-templates monorepo. It is an original React
recreation of the ColorLib free "Started" startup/design-agency website
template (source: https://colorlib.com/wp/template/started/ — minimalist
white one-pager: large Oswald pull-quote hero over a book photo, bordered
"We're Available For Work" CTA card, 3-column services, 2 alternating
full-height case-study halves, 3-up testimonials, 4-widget footer), built
under a DIFFERENT name (Upstart — an early-stage venture; single lowercase
word), per the monorepo naming mandate (never reuse the ColorLib source
name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

- **Source slug:** `started`
- **Source:** https://colorlib.com/wp/template/started/
- **Preview (LIVE, verified 2026-09-30 by direct fetch):**
  **https://preview.colorlib.com/theme/started/**
  (HTTP 200, 17,941 bytes, `<title>Started &mdash; Colorlib Website
  Template</title>`)
- **Preview CSS:** `css/style.css` (14,223 bytes, hand-written template
  block — carries BOTH fonts and all tokens) + `css/bootstrap.min.css`
  (base layout only; the template body rule lives in style.css, NOT
  bootstrap). Supporting source CSS (jquery.fancybox, jquery-ui,
  owl.carousel, animate, aos) only serves jQuery behaviors — reimplement
  in React, do NOT ship.
- **Source scripts:** jQuery + fancybox + owl.carousel + aos — no sliders
  or lightboxes on the home page itself; the home page is static except
  the mobile off-canvas menu + dropdown. Reimplement menu/dropdown in
  React state; do NOT ship jQuery.
- **Icons:** flaticon SVG images (`images/flaticon/svg/001.svg` etc.) for
  the 3 service icons + icomoon glyph font for nav hamburger/social —
  **REPLACE with lucide-react** (e.g. `Menu`, `X`, `ChevronDown`,
  `Smartphone`, `ShoppingCart`, `MonitorCheck`, `Facebook`, `Twitter`,
  `Instagram`, `Linkedin`, `Youtube`), do not ship icon fonts or flaticon
  assets.
- **Fonts:** **Oswald** (headings `h1, h2, h3, h5, .site-logo`; weights
  200/400/500/700 — source uses 400/500/700, logo bold 700, hero quote
  ~400) + **Roboto Mono** (ALL body copy, nav links, lists; 400). Load
  **Google Fonts `<link>`** in `index.html`. Body rule:
  `font-family: 'Roboto Mono', monospace; font-size: 1rem; line-height:
  1.7; color: #999999`.
- **Assets:** hero background (source `images/hero_2.jpg` — design-book
  product photo), case-study photos (`images/work_1.jpg`, `work_2.jpg`),
  hero author avatar + testimonial avatars (`images/person_1..3.jpg`) —
  use `https://picsum.photos/seed/upstart-<n>/<w>/<h>` placeholders
  (e.g. `upstart-hero`, `upstart-work-1..2`, `upstart-person-1..3`),
  never source assets.
- **Screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/started-free-template.jpg
  (visually analyzed 2026-09-30; matches the live preview top: white
  page, black wordmark "Started" + right-aligned nav, pull-quote hero
  with round avatar over a gray book-photo band, bordered CTA card with
  black "Hire Us Now" button, 3 indigo line-icon service columns, start
  of a light-gray case-study band with big black heading "kMix Design").
- **TEMPLATES.md:** "## Sports"-adjacent S-section, line 2862
  (`- [ ] **Started**`). Slug `started` appears exactly ONCE in
  TEMPLATES.md (distinct from "Thestartup" at line 2865 — that item is
  already prepped under other names; do not conflate).
- **Naming check:** "upstart" collides with nothing in `apps/`,
  `openspec/specs/`, or `docs/templates/` (verified 2026-09-30); not a
  ColorLib source name.

## Design tokens

(extracted from the live preview stylesheet `css/style.css` + verified
against the screenshot; CSS values are canonical)

| Token | Value | Notes |
|-------|-------|-------|
| Heading font | `"Oswald", sans-serif` (Google Fonts 400/500/700; logo 700) | applied to `h1, h2, h3, h5, .site-logo`, hero blockquote |
| Body font | `"Roboto Mono", monospace` (Google Fonts 400) | 1rem, line-height 1.7 — body copy, nav links, service lists, footer |
| Body color | `#999999` | page background `#fff`; paragraph text muted gray |
| Brand accent | `#434ba4` (periwinkle indigo) | nav-link hover, dropdown active link, mobile-menu hover, service icon tint (source flaticon SVGs are this indigo — recolor lucide icons with it) |
| Ink | `#000` | all headings, logo, CTA button fill, `.cta-box` border, footer widget headings + copyright, hero quote |
| Light section bg | `#f8f9fa` | case-study (work) band background behind the two `.half` rows (screenshot: gray band under the services) |
| Nav link color | `rgba(0, 0, 0, 0.6)` | `letter-spacing: .05em`; active link `#000`; hover `#434ba4` |
| Widget body | `rgba(0, 0, 0, 0.5)` | footer paragraph text |
| Social icon gray | `#ccc` | footer social glyphs |
| Buttons (`.contact-now`) | black `#000` fill, white text, `padding: 10px 20px`, square corners (no radius), no shadow | hero CTA "Hire Us Now" — sits absolute bottom-left INSIDE the cta-box, flush to its border |
| Hero quote | Oswald ~3rem, `line-height: 1.0`, black, max-width 500px, absolute left 8% overlapping the photo top; decorative `”` glyph 4rem at left −40px; author row: 50px round avatar + cite (Roboto Mono, normal style) | `.site-hero` has `margin-top: 10rem` |
| Hero photo | `.bg-img` height 500px, `background-size: cover`, center | design-book product photo |
| CTA box | absolute right 8%, max-width 300px, `border: 2px solid #000`, white bg, `padding: 30px 30px 70px` (bottom padding clears the overlapping button); `h2` 26px, margin-bottom 30px | "We're Available For Work" card |
| Section rhythm | `.site-section { padding: 3em 0 }`; `.half { margin-bottom: 50px; min-height: 500px }`; `.half-content { padding: 40px }`; footer `padding: 7rem 0`, font-size 14px | |
| Work headings | `.half-content h3` 40px black, margin-bottom 30px | "kMix Design", "Dieter Rams" |
| Service cards | `.service { text-align: center; padding: 20px }`; icon img 60px, margin-bottom 30px; `h3` 20px black, margin-bottom 10px; list items black, centered | 3-up on desktop (col-lg-4) |
| Testimonials | `.testimonial img` 80px round (`border-radius: 50%`), margin-bottom 30px; `h3` 20px black; role `span` muted; blockquote quoted lorem | 3-up (col-lg-4) |
| Circles (`50%`) | avatars only (hero author 50px, testimonials 80px) | EVERYTHING else square — no border-radius on buttons, cards, boxes |
| Dropdowns | white bg, white arrow-top caret, black links, hover/active `#434ba4`; min-width 200px; items 5px 20px padding, `text-transform: none` | nav "Services" |
| Mobile menu | off-canvas slide-in from right (`translateX`), logo + close X top, stacked links 20px padding / 20px font, hover `#434ba4`; hamburger = icomoon `icon-menu` glyph → lucide `Menu` | `aria-expanded` on the toggle |

## Section inventory (DOM order, home page)

1. **Navbar** (`site-navbar` + `site-navigation text-right`) — Oswald
   700 wordmark "Started" (25px black) left; right-aligned Roboto Mono
   links: Home, Portfolio, Services ▾ (dropdown: Web Design, WP
   Development, Front End, Sub Menu ▾), About, Contact. Links
   rgba(0,0,0,0.6) + .05em letter-spacing; hover/active `#434ba4`/`#000`.
   Mobile: hamburger → off-canvas slide-in menu.
2. **Hero** (`site-hero`, margin-top 10rem) — `.bg-img` 500px cover
   photo (design-book shot); absolutely positioned Oswald blockquote top
   left 8% overlapping the photo: "Design is not just what it looks like
   and feels like. Design is how it works." with the big `”` glyph +
   author row (50px round avatar + "Steve Jobs" cite); absolutely
   positioned `.cta-box` top right 8%: 2px black border card, h2 "We're
   Available For Work", lorem blurb, black "Hire Us Now" link-button
   flush at the card's bottom-left corner.
3. **Services** (`.site-section`, white) — 3 equal columns (col-lg-4):
   indigo line icon (60px), h3 title, muted blurb, black centered list:
   (a) Mobile Application — Andriod Development, iOS Development, React
   Native; (b) E-Commerce — WooCommerce, Shopify Integration, BigCommerce;
   (c) Web Application — React Web App, Vue JS Web App, Angular Web App.
4. **Work / case studies** (`.site-section` on `#f8f9fa`) — two full
   `.half` rows (min-height 500px), 50/50 image+content halves,
   ALTERNATING: (a) image LEFT (picsum `upstart-work-1`) + content right:
   h3 40px "kMix Design", blurb, "Client: JUVINLE Corp. / Date: 2020",
   "View Case Study" link; (b) content left + image RIGHT (`order-md-2`,
   picsum `upstart-work-2`): h3 "Dieter Rams", blurb, "Client: XYZ Inc.
   / Date: 2019", "View Case Study".
5. **Testimonials** (`.site-section`, white) — 3 columns: 80px round
   avatar, h3 name, muted "Co-Founder" role, quoted blockquote lorem —
   Steve Jobs / John Doe / John Smith (source uses `person_1..3.jpg`).
6. **Footer** (`.footer`, white, padding 7rem 0, 14px) — 4 widgets
   (col-lg-3): "About Us" + blurb (rgba(0,0,0,0.5)); "Navigation"
   (Home, Services, About, Contact); "Work" (Dieter Rams, kMix Design);
   "Social" (Facebook, Twitter, Instagram, Linkedin, Youtube — icon span
   + label rows, icons `#ccc`). Centered copyright bar: "Copyright © All
   rights reserved | This template is made with ♥ by Colorlib" —
   **replace attribution with the Component Dock link**
   ("Made with Component Dock" → https://www.componentdock.com/).

Notes: `portfolio.html`, `about.html`, `contact.html` are separate source
pages — out of scope; keep nav/footer links as anchors on the single home
page. No carousel, slider, counter, or form exists on the source home
page — do not invent one.

## Gherkin requirements

### Requirement: Navbar renders wordmark, right-aligned menu and Services dropdown

#### Scenario: Desktop navigation
```
Given the user visits the Upstart home page
Then a white navbar is displayed with the wordmark "Started" (Oswald 700, 25px, black) on the left
And the right-aligned menu links are "Home", "Portfolio", "Services", "About", "Contact" in Roboto Mono with .05em letter-spacing and color rgba(0,0,0,0.6)
And "Home" is the active link, colored black #000
And "Services" shows a chevron-down glyph indicating a dropdown
```

#### Scenario: Services dropdown
```
Given the desktop navbar is visible
When the user hovers (or keyboard-focuses) "Services"
Then a white dropdown opens (arrow-top caret) with items "Web Design", "WP Development", "Front End", "Sub Menu" (nested chevron)
And dropdown links are black and turn brand indigo #434ba4 on hover/active
```

#### Scenario: Link hover state
```
Given the navbar is visible
When the user hovers any nav link
Then the link color becomes #434ba4
```

### Requirement: Mobile off-canvas menu

#### Scenario: Menu toggle
```
Given the viewport is mobile-sized
Then the inline nav links are hidden and a hamburger icon button is shown
When the user activates the hamburger
Then an off-canvas menu slides in from the right with the "Started" wordmark, a close (X) button, and stacked links "Home", "Portfolio", "Services" (collapsible sub-items), "About", "Contact"
And the toggle exposes aria-expanded=true
When the user activates the close button
Then the menu slides out and aria-expanded returns to false
```

### Requirement: Hero shows pull-quote over photo with bordered CTA card

#### Scenario: Hero quote and photo
```
Given the hero is visible
Then a 500px-tall cover photo band (picsum placeholder upstart-hero) is displayed
And an absolutely positioned Oswald blockquote (≈3rem, line-height 1.0, max-width 500px, left 8%, overlapping the photo top) reads "Design is not just what it looks like and feels like. Design is how it works."
And a decorative right-double-quote glyph (4rem, offset left −40px) marks the quote
And an author row shows a 50px round avatar with the cite "Steve Jobs" (normal font-style, Roboto Mono)
```

#### Scenario: CTA box
```
Given the hero is visible
Then a bordered card (2px solid #000, max-width 300px, right 8%, overlapping the photo top) shows the Oswald h2 "We're Available For Work" (26px) and a muted lorem blurb
And a black button "Hire Us Now" (white text, padding 10px 20px, square corners) is flush at the card's bottom-left corner
```

### Requirement: Services grid lists three disciplines

#### Scenario: Three service columns
```
Given the services section is visible on white
Then three equal columns are displayed (stacked on mobile)
And each column shows a 60px indigo (#434ba4) line icon, a 20px black Oswald title, a muted blurb, and a centered black list
And column 1 is "Mobile Application" with items "Andriod Development", "iOS Development", "React Native" (source spelling kept as paraphrase-tolerant content; implementer may correct to "Android Development")
And column 2 is "E-Commerce" with items "WooCommerce", "Shopify Integration", "BigCommerce"
And column 3 is "Web Application" with items "React Web App", "Vue JS Web App", "Angular Web App"
```

### Requirement: Alternating case-study rows

#### Scenario: First case study (image left)
```
Given the work section is visible on the #f8f9fa band
Then the first row is a 50/50 split (min-height 500px) with a cover photo (picsum upstart-work-1) on the LEFT and content on the RIGHT
And the content shows the 40px black Oswald heading "kMix Design", a lorem blurb, the meta lines "Client: JUVINLE Corp." and "Date: 2020", and a "View Case Study" link
```

#### Scenario: Second case study (image right)
```
Given the work section is visible
Then the second row mirrors the first: content LEFT, cover photo (picsum upstart-work-2) RIGHT
And the content shows the heading "Dieter Rams", a lorem blurb, "Client: XYZ Inc.", "Date: 2019", and a "View Case Study" link
```

### Requirement: Testimonials render three quoted cards

#### Scenario: Testimonial cards
```
Given the testimonials section is visible on white
Then three columns are displayed (stacked on mobile)
And each card shows an 80px round avatar, a 20px black Oswald name, a muted role "Co-Founder", and a quoted lorem blockquote
And the names are "Steve Jobs", "John Doe", and "John Smith"
```

### Requirement: Footer renders four widgets and Component Dock attribution

#### Scenario: Footer content
```
Given the footer is visible
Then it renders on white with ~7rem vertical padding and 14px text
And widget 1 shows "About Us" with a blurb (rgba(0,0,0,0.5) text)
And widget 2 shows "Navigation": "Home", "Services", "About", "Contact"
And widget 3 shows "Work": "Dieter Rams", "kMix Design"
And widget 4 shows "Social": "Facebook", "Twitter", "Instagram", "Linkedin", "Youtube" with icon glyphs (#ccc)
And the centered copyright bar shows "Copyright © All rights reserved" plus a "Component Dock" attribution link to https://www.componentdock.com/ (replacing the source "made with ♥ by Colorlib" line)
```

### Requirement: Global fidelity and provenance rules

#### Scenario: Design tokens applied
```
Given the rendered page
Then the heading font is Oswald and the body font is Roboto Mono (Google Fonts), applied site-wide
And the brand accent #434ba4 appears on nav hover, dropdown active, and the service icons
And the hero CTA button is black/white/square, the cta-box has a 2px black border, and only avatars use border-radius (50%)
And case-study rows sit on the #f8f9fa band with 50/50 alternating halves
```

#### Scenario: No ColorLib provenance in app code
```
Given the apps/upstart source tree
Then no file (code, comments, CSS notes, README) references ColorLib or preview.colorlib.com
And provenance lives only in openspec/specs/template-upstart/, TEMPLATES.md, and the PR description
And the footer links https://www.componentdock.com/ as "Component Dock"
```

#### Scenario: Placeholder assets only
```
Given the rendered page
Then all images are deterministic picsum.photos/seed/upstart-* placeholders
And icons come from lucide-react (no flaticon/icomoon assets, no icon fonts)
And no source template assets or CSS files are copied
```

## Verification checklist

- [ ] `openspec/specs/template-upstart/spec.md` exists on main (this file) —
      prep claim marker; implementers skip items whose spec is missing.
- [ ] Implementation lives in `apps/upstart` (package
      `@free-react-templates/upstart`, CNAME
      `upstart.free.componentdock.com`, homepage set, lockfile registered
      via root `npm install`, `injectUiSource()` in `vite.config.ts`).
- [ ] Section order matches the source 1:1: navbar (wordmark + right menu
      + Services dropdown) → hero (pull-quote over 500px photo + bordered
      CTA card) → 3-column services → 2 alternating case-study halves on
      the #f8f9fa band → 3-up testimonials → 4-widget white footer +
      copyright bar.
- [ ] Tokens: Oswald + Roboto Mono via Google Fonts; accent `#434ba4`;
      black headings/buttons/borders; body `#999999`; band `#f8f9fa`;
      square corners except 50% avatars; hero quote 3rem/1.0 with `”`
      glyph; cta-box 2px `#000` border with flush black button.
- [ ] Interactions: Services dropdown on hover/focus; mobile off-canvas
      menu with `aria-expanded` + close button; no invented sliders,
      forms, or carousels.
- [ ] No ColorLib strings anywhere in `apps/upstart`; footer links
      Component Dock; picsum placeholders only; lucide-react icons tinted
      `#434ba4`.
- [ ] TDD: tests mirror the Gherkin scenarios above per component;
      `scripts/verify-app.sh upstart` green (typecheck + lint + 100%
      coverage + build).
- [ ] PR description records: source slug `started`, preview URL, design
      tokens, and placeholder-image notes.

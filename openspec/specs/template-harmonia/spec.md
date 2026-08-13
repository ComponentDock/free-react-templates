# Template: Harmonia (Music Streaming App Landing / SaaS)

## Purpose

Harmonia is a music streaming app landing page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Musiclab"
template design (see TEMPLATES.md — appears 2×: line 606 (Bootstrap 5) and
line 2271 (Music); both rows point to the same source and are `- [ ]` — one
prep covers both, mark ALL `[x]` when done; verified with
`grep -c 'wp/template/musiclab/' TEMPLATES.md` = 2), built under a DIFFERENT
name (Harmonia — music-themed, "harmony"; single lowercase word, no collision
with `apps/` or existing spec folders; verified: no `apps/harmonia`, no
`template-harmonia` spec, no `docs/templates/harmonia`, no grep hit in
`package-lock.json` or any app/spec/docs file) per the monorepo naming
mandate (never reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/musiclab/ (Bootstrap 5 + Music
categories — preview page title "Music Labe").

Preview URL: https://preview.colorlib.com/theme/musiclab/ (HTTP 200, ~32 KB
HTML + `assets/css/style.css` ~96 KB fetched and parsed — the preview slug
matches the TEMPLATES.md slug, no alias).

## Design reference (replication findings)

- **Original:** ColorLib "Musiclab" — a dark-heroed SaaS landing page for a
  music streaming app ("MUSIC LAB"). Dark charcoal gradient hero
  (`#161a1a → #262929`) with centered caption + two pill CTA buttons and a
  full-width desktop-app mockup screenshot; light `#F5F7F9`/white feature
  sections below; a 2-card pricing band; a testimonial carousel; and a dark
  `#262929` footer. Signature accent: a purple→blue gradient
  `#ca42f2 → #6a42f2 → #4294f2 → #42b5f2` used on ALL primary buttons.
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/musiclab/
  (HTTP 200, ~32 KB HTML; `assets/css/style.css` ~96 KB parsed for tokens).
  Stack: Bootstrap 5 + slick (hero + testimonial carousels) + Font Awesome /
  themify icon fonts, NOT Tailwind. All interactivity must be recreated
  client-side in React (carousel: simple index-cycling slides; dropdown menu
  via click state).
- **Screenshot note:** `musiclab-colorlib-template.jpg` (1200×946, viewed in
  the browser): dark charcoal/black hero; "MUSIC LAB" white wordmark with a
  small purple gradient icon top-left; centered white nav (Home, Features,
  Pricing, Download, Blog, Contact); gradient "Sign Up" pill top-right; big
  white bold headline "Open the world of music. It's all here."; gradient
  "DOWNLOAD FOR DESKTOP" pill + bordered translucent "DOWNLOAD FOR MOBILE"
  pill; below, a large realistic desktop-app mockup (music library UI,
  "Popular in this week", "Featured episodes", podcast album art) with a
  smaller vertical phone mockup beside it; the fold cuts into a white section
  (top of a rounded purple phone-mockup card visible). The footer is not
  visible in the screenshot (DOM + CSS confirm dark `#262929`).

## Design tokens (from preview stylesheet `style.css`)

- **Font:** `"Inter", sans-serif` everywhere (Google Fonts import, weights
  200–900). Body 16px; paragraphs 16px/300/1.6; footer pera 14px.
- **Brand gradient (signature, all primary buttons):**
  `linear-gradient(to right, #ca42f2 0%, #6a42f2 39%, #4294f2 75%, #42b5f2 100%, #7db9e8 100%)`
  → put in `@theme` as `--color-brand-*` stops or a `bg-gradient` utility.
- **Theme blue:** `#42B5F2` (section-tittle caption span, scrollUp button,
  submenu hover). **Price blue:** `#4294F2` (pricing card amount, pricing
  button outline on card hover).
- **Dark:** `#262929` (headings, pricing-card hover background, footer
  `footer-wrapper` background). Hero/nav/submenu dark gradient:
  `linear-gradient(to bottom, #161a1a 0%, #262929 99%)`.
- **Text:** `#262929` headings; `#6D6D6D` body copy + pricing feature text;
  `#97A7AF` muted (hero sub-caption, footer links/pera, hovered-card
  features); `#8F8F8F` small feature-card captions.
- **Section backgrounds:** `#F5F7F9` (`section-bg` — about-2 band + pricing
  band), `#F1FBFF` (`gray-bg`), white sections elsewhere; white pricing
  cards with `1px solid #DDE4E8` border, `border-radius: 8px`, padding
  `30px 31px`.
- **Accent orange:** `#F15B43` (header Sign In button hover background).
- **Buttons:** pill `border-radius: 30px`, uppercase, 14px, weight 500,
  white text. Hero: padding `17px 35px`; pricing: padding `13px 76px`.
  Variant A (`btn_01`): brand-gradient fill. Variant B (`btn_001`, hero
  "Download For Mobile"): ghost — `rgba(255,255,255,0.1)` fill, white text,
  hover → brand-gradient. Pricing card button on card hover → transparent
  with `1px solid #4294F2` outline, blue text.
- **Section titles (`.section-tittle`):** caption `span` 16px `#42B5F2`
  capitalize above the title; `h2` 38px/700/`#262929`/
  `letter-spacing: -0.04em`, margin-bottom 30px.
- **Hero caption:** sub-caption `span` 18px `#97A7AF` ("Intuitive.
  Powerful. Runs everywhere"); `h1` 52px/700/white/
  `letter-spacing: -0.05em`/line-height 1.2.
- **Pricing card inner:** `.card-mid` (name 600 `#262929` + amount `h4`
  24px/700 `#4294F2` with 16px "month" suffix) separated by `1px #DDE4E8`
  bottom border; feature rows 16px/600 `#6D6D6D` with dark check icons
  (`#262929`), 15px gaps. Hover: card flips to `#262929`, name + icons
  white, features `#97A7AF`, mid border `rgba(221,228,232,0.2)`.
- **Navbar:** dark gradient, links 16px/400 white `capitalize`, hover
  `#97A7AF`; `Sign In` = `btn_01` gradient pill (padding 17px 30px).
- **Footer:** bg `#262929`; column `h4` 20px/600 white; links 16px/600
  `#97A7AF` (hover underline); pera `#97A7AF` 14px/1.8; social icon row
  (Facebook / LinkedIn / Instagram).

## Requirements

### Requirement: Navbar (dark sticky header + Sign In pill)

The system SHALL render a fixed/sticky navbar on a dark `#161a1a→#262929`
gradient containing the "Harmonia" brand wordmark (white, small gradient
glyph), the six nav links Home, Features, Pricing, Download, Blog, Contact,
and a "Sign In" pill button with the brand-gradient fill. On narrow
viewports the links SHALL collapse behind a toggle.

#### Scenario: Desktop navbar

- **GIVEN** the Harmonia app is rendered at desktop width
- **WHEN** the page loads
- **THEN** the navbar SHALL show the "Harmonia" brand wordmark
- **AND** SHALL show the six nav links Home, Features, Pricing, Download,
  Blog, Contact
- **AND** SHALL show a "Sign In" pill button with the brand-gradient fill
- **AND** the navbar SHALL sit on the dark `#161a1a → #262929` gradient

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrower than the desktop breakpoint
- **WHEN** the user activates the menu toggler
- **THEN** the nav SHALL expand into a collapse panel with `aria-expanded`
  reflecting the open state
- **AND** activating the toggler again SHALL collapse the panel

### Requirement: Hero (dark gradient + app mockup)

The hero SHALL be a dark section (`slider-bg1` gradient) with centered
content: a `#97A7AF` sub-caption line ("Intuitive. Powerful. Runs
everywhere."), an `h1` headline ("Open the world of music. It's all here."),
two pill buttons — "Download For Desktop" (gradient fill) and "Download For
Mobile" (translucent ghost, white border) — and a full-width desktop-app
mockup image below the caption.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL show the sub-caption "Intuitive. Powerful. Runs
  everywhere."
- **AND** SHALL show the h1 headline "Open the world of music. It's all
  here."
- **AND** SHALL show the two download buttons in order (gradient Desktop
  pill, then ghost Mobile pill)

#### Scenario: Hero mockup image

- **GIVEN** the hero section is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL show a full-width desktop-app mockup placeholder
  image below the caption

#### Scenario: Button variants

- **GIVEN** the two hero download buttons
- **WHEN** the user inspects their styles
- **THEN** the "Download For Desktop" button SHALL use the brand-gradient
  fill
- **AND** the "Download For Mobile" button SHALL use a translucent
  `rgba(255,255,255,0.1)` ghost style with a white border, visually distinct
  from the gradient button

### Requirement: Personalized Mixes (white about band)

A white feature band SHALL be introduced by a small icon above the section
title, an `h2` ("Listen to a personalized mix of tracks"), three numbered
feature rows (icon + text, e.g. pick-your-genre / curated daily mixes /
made-for-you playlists), and a rounded-corner feature image (`about1.png` →
placeholder).

#### Scenario: About band content

- **GIVEN** the "Personalized Mixes" section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the section icon above the title
- **AND** SHALL show the h2 "Listen to a personalized mix of tracks"
- **AND** SHALL show exactly three numbered feature rows, each pairing a
  leading icon with a short descriptive paragraph
- **AND** SHALL show the feature image

### Requirement: Your Music, Your Way (`#F5F7F9` about band)

A light `#F5F7F9` band SHALL render an `h2` (preview copy is leftover
generic text "We are tender heart charity foundation." — paraphrase to a
music-appropriate headline, same section shape: heading + 3 icon feature
rows + `about2.png` feature image on the other side), mirroring the first
about band with the image/text side flipped.

#### Scenario: Flipped about band

- **GIVEN** the "Your Music, Your Way" section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL render on the `#F5F7F9` background
- **AND** SHALL show the h2, three icon feature rows, and the second
  feature image
- **AND** the layout SHALL mirror the first about band with the image and
  text sides flipped

### Requirement: Great Stuffs (features grid + photo strip)

A white band SHALL render an `h2` ("Get ready for seamless online music")
and a grid of four feature cards, each a bold title + short caption:
"Offline mode." / "Save and listen anywhere.", "High quality audio." /
"Enjoy the full range of sound.", "No ads." / "Enjoy nonstop music.",
"Unlimited skips." / "Just tap skip." — followed by a 4-image photo strip
(`onlinemusic1–4.png` → placeholders).

#### Scenario: Feature cards

- **GIVEN** the "Great Stuffs" section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the h2 "Get ready for seamless online
  music"
- **AND** SHALL show exactly four feature cards with the titles and captions
  listed above
- **AND** card titles SHALL be 600-weight `#262929` with `#8F8F8F` captions

#### Scenario: Photo strip

- **GIVEN** the "Great Stuffs" section is rendered
- **WHEN** the user scrolls to the bottom of it
- **THEN** the section SHALL show four gallery placeholder images below the
  cards

### Requirement: Pricing (two cards + dark hover)

A `#F5F7F9` band SHALL render an `h2` ("Listen free or subscribe to
MusicLab Premium.") and two white pricing cards (border `#DDE4E8`, radius
8px). The preview DOM duplicates the SAME card twice ("MusicBox Free",
`$0.00`, month; features: Online listening, Regular audio, With
advertising, 30 skips per day; "Get Free" pill). The heading promises a
Free vs Premium choice — recreate the two-card structure with a Free card
exactly per the DOM and a Premium card (e.g. "MusicBox Premium" plan name
with matching feature kind: high quality audio / no ads / unlimited skips)
so the two cards differ; keep the same card anatomy (name, amount +
"/month", 4 feature rows, pill CTA). Hovering a card SHALL flip it to the
dark `#262929` treatment with a `#4294F2` outline CTA.

#### Scenario: Two pricing cards

- **GIVEN** the Pricing section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the h2 "Listen free or subscribe to
  MusicLab Premium."
- **AND** SHALL show exactly two pricing cards, each with a plan name, an
  amount with a "/month" suffix, four feature rows with check icons, and a
  "Get Free"-style pill button
- **AND** the two cards SHALL render different plan names (Free vs Premium)

#### Scenario: Card hover treatment

- **GIVEN** a pricing card in its default white state
- **WHEN** the user hovers over it
- **THEN** the card SHALL flip to the dark `#262929` background
- **AND** the plan name and check icons SHALL become white
- **AND** the feature text SHALL become `#97A7AF`
- **AND** the CTA SHALL become a transparent button with a `#4294F2` outline

### Requirement: Testimonials (carousel)

A light section SHALL render an `h2` ("Customers are loving MusicLab") and a
cycling carousel of three testimonial slides; each slide SHALL have a
founder photo, a quote (e.g. "OMG! I cannot believe that I have got a brand
new landing page after getting @MusicLab…"), and a name + role line ("CEO
at Creativelab"). Only one slide SHALL be visible at a time; controls SHALL
advance through the slides client-side.

#### Scenario: Testimonial slide

- **GIVEN** the Testimonials section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the h2 "Customers are loving MusicLab"
- **AND** SHALL show one testimonial slide with a founder photo, a quote,
  and a name + role line
- **AND** only one slide SHALL be visible at a time

#### Scenario: Carousel navigation

- **GIVEN** the Testimonials carousel is showing the first slide
- **WHEN** the user activates the next control
- **THEN** the carousel SHALL advance to the next slide (client-side index
  cycling through the three slides)
- **AND** the controls SHALL carry accessible aria-labels

### Requirement: Footer (dark, link columns, Component Dock)

A dark `#262929` footer SHALL render the brand logo + about paragraph +
social icon links (Facebook, LinkedIn, Instagram — inline SVG brand icons),
three link columns — Quick Links (Work, Services, Products, Tips & Tricks),
Support (Home, About, Services, Blog, Contact), Navigation (Work, Services,
Products, Tips & Tricks) — and a copyright line that SHALL link
`https://www.componentdock.com/` branded "Component Dock" (replacing the
ColorLib attribution per the monorepo convention).

#### Scenario: Footer content

- **GIVEN** the footer section is rendered
- **WHEN** the user scrolls to the bottom of the page
- **THEN** the footer SHALL show the brand blurb and the three social icon
  links
- **AND** SHALL show the three link columns Quick Links, Support, and
  Navigation with the links listed above
- **AND** SHALL show a copyright line
- **AND** SHALL link `https://www.componentdock.com/` branded "Component
  Dock"

### Requirement: Composition

The page SHALL render sections in the order: Navbar → Hero → Personalized
Mixes → Your Music, Your Way → Great Stuffs → Pricing → Testimonials →
Footer. All images SHALL use deterministic `picsum.photos` placeholders, the
brand token set SHALL live in `@theme`, and no ColorLib asset, URL, or name
SHALL appear in any app file (provenance lives only in this spec,
TEMPLATES.md, and the PR).

#### Scenario: Section order

- **GIVEN** the Harmonia app is rendered
- **WHEN** the user scrolls through the full page
- **THEN** the sections SHALL appear in the order Navbar, Hero, Personalized
  Mixes, Your Music, Your Way, Great Stuffs, Pricing, Testimonials, Footer

#### Scenario: Provenance hygiene

- **GIVEN** the implemented `apps/harmonia` folder
- **WHEN** the user greps it for ColorLib references
- **THEN** the grep SHALL return zero hits for `colorlib` (no source name,
  URL, or asset in any app file)

## Assets

- Placeholder images:
  `https://picsum.photos/seed/harmonia-hero/1200/700` (hero desktop-app
  mockup), `https://picsum.photos/seed/harmonia-about1/600/500` and
  `-about2/600/500` (feature images), `harmonia-music1..4/400/300`
  (great-stuffs photo strip), `harmonia-founder1..3/100/100` (testimonial
  avatars — use verified person seeds per skill notes, e.g. picsum
  `id/1027`, `id/64`, `id/823`, see replication skill; verify subjects
  before shipping).
- Icons: `lucide-react` for UI glyphs; social brand icons are NOT in
  lucide-react — use inline SVG (simple-icons paths) for Facebook,
  LinkedIn, Instagram. Verify every lucide export with
  `node -e "console.log(typeof require('lucide-react').<Icon>)"` before
  importing.
- Font: Google Fonts `Inter` via `<link>` in `index.html`.

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec (OpenSpec format).
- [ ] App scaffolded as `apps/harmonia` (package
      `@free-react-templates/harmonia`), lockfile registered
      (`grep -c 'free-react-templates/harmonia' package-lock.json` = 1),
      `public/CNAME` = `harmonia.free.componentdock.com`, `homepage` =
      `https://harmonia.free.componentdock.com`.
- [ ] All eight sections render in the composition order above; each
      requirement's scenarios are implemented as tests.
- [ ] Design tokens in `@theme`: brand gradient stops (`#ca42f2`, `#6a42f2`,
      `#4294f2`, `#42b5f2`, `#7db9e8`), `#262929` dark, `#F5F7F9` section-bg,
      `#97A7AF` muted, `#6D6D6D` body, `#4294F2` price blue; Inter font
      loaded in `index.html`.
- [ ] Buttons are 30px-radius pills, uppercase 14px/500; primary uses the
      brand gradient; hero ghost button translucent with white border.
- [ ] Pricing card hover flips to dark `#262929` with `#4294F2` outline CTA.
- [ ] Testimonial carousel cycles 3 slides client-side; only one visible at
      a time; controls accessible (aria-labels).
- [ ] Mobile nav collapses behind a toggle with `aria-expanded`.
- [ ] Footer links Component Dock (`https://www.componentdock.com/`).
- [ ] No ColorLib string in `apps/harmonia/**` (grep `colorlib` → 0 hits).
- [ ] `scripts/verify-app.sh harmonia` passes: typecheck + lint + knip +
      fallow + vitest 100% coverage + build.
- [ ] Both TEMPLATES.md Musiclab rows (lines 606, 2271) marked `[x]` with
      `harmonia.free.componentdock.com` after deploy.

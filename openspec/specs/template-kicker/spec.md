# Template: Kicker (Magazine / News Homepage)

## Purpose

Kicker is a magazine / news homepage in the free-react-templates monorepo. It
is an original React recreation of the ColorLib free "Megasis" template
design (see TEMPLATES.md — appears 2×: lines 604 and 2202; both rows point to
the same source and are `- [ ]` — one prep covers both, mark ALL `[x]` when
done; verified with `grep -c 'wp/template/megasis/'` = 2), built under a
DIFFERENT name (Kicker — a journalism term for the short attention-grabbing
line above a headline, which is exactly the red category tag this template
renders above every story; single lowercase word, no collision with `apps/`
or existing spec folders; verified: no `apps/kicker`, no `template-kicker`
spec, no `docs/templates/kicker`) per the monorepo naming mandate (never
reuse the ColorLib source name), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/megasis/ (Bootstrap 5 + Magazine
categories — the page title is "Magazine News").
Preview URL: https://preview.colorlib.com/theme/megasis/ (HTTP 200, ~32 KB
HTML + `assets/css/style.css` ~236 KB fetched and parsed — the preview slug
matches the TEMPLATES.md slug, no alias).

## Design reference (replication findings)

- **Original:** ColorLib "Megasis" — a bold, high-contrast magazine/news
  homepage. A two-row header (top utility row: red wordmark logo left, "Sign
  in" link + social icons right; bottom sticky row: logo + category nav +
  mobile hamburger) over a stark white canvas. The hero is a split layout:
  one large feature story left (photo, red "Technology" kicker tag, huge
  serif headline, "by <author>" byline) and three stacked smaller stories
  right. Below: a "Arts & Culture" section (red top rule + "See All" link +
  3-card grid with a video card), a "Science Update" 4-card grid, a DARK
  (#131313) "Video Gallery" split section with a pulsing white play button,
  a "Science Update" slick carousel of 5 cards + a centered ad strip, a
  light-grey (#F3F3F3) newsletter ("Subscribe to the newsletter" + underline
  email input + red "Send Now" button + disclaimer), and a dark 4-column
  footer (About, Categories, Categories, Quick Links) with a bottom
  copyright bar. Every story is an image + red category kicker + bold serif
  headline + byline; hover turns headlines red.
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/megasis/
  (HTTP 200, ~32 KB HTML; `assets/css/style.css` ~236 KB parsed for tokens).
  The site is Bootstrap 5 + slick (bottom carousel) + slicknav (mobile menu)
  - owl.carousel + magnific-popup (video lightbox) + Font Awesome +
    themify-icons + nice-select, NOT Tailwind. All interactivity must be
    recreated client-side in React.
- **Screenshot note:** `megasis-colorlib-template.jpg` (1200×946, viewed in
  the browser): bold RED "MEGASIS" wordmark + small geometric icon top-left;
  top row right has "Sign In" + social icons (fb, twitter, instagram,
  youtube, vimeo — the DOM is authoritative; no search icon in the DOM);
  category nav bar below (Home, Page, Science, Technology, Beauty, Health,
  Arts & Culture, Opinion, Videos, Gallery). Hero: left big feature photo
  (James-Webb-style telescope mirror honeycomb), red "Technology" tag, large
  bold serif headline "The world's first fitness influencer was a Victorian
  strongman", grey "by Pete Sariya" byline; right rail: 3 stacked stories
  (person at screen, VR headset, facial treatment photos). Below: "Arts &
  Culture" black bold heading + "See All" link; 3-column card grid with red
  tags (Health / Culture / Video). Stark white background, near-black text,
  dark-red accent; serif headlines (Shippori Mincho feel) + clean sans nav /
  tags (Chivo). The live rendered page + parsed stylesheet are the
  authoritative reference.

### Design tokens (extracted from `assets/css/style.css`)

- **Brand red:** `#C70D0D` — `.btn` fill, `.search-form a` "Send Now" fill,
  `.properties-caption span` + `.trend-top-cap span` category kickers,
  `.video-icon a` play icon color, ALL headline hover colors (`.trend-top-cap
h2 a:hover`, `.whats-right-cap h4 a:hover`, `.properties-caption h3
a:hover`, `.properties-caption p a:hover`), `.video-icon a:hover`
  background. Hover pattern: black/ink text → red.
- **Ink / near-black:** `#131313` — headlines (`.trend-top-cap h2 a` 44px,
  `.whats-right-cap h4 a`, `.properties-caption h3 a` 30px), `.section-tittle
h2`, `.section-tittle` top border (4px solid `#131313`), `.main-menu ul li
a` (18px 700 Chivo), `.header-btn`, `.header-social a`, `.trend-top-cap p`
  byline, `.input-form input` text + 2px bottom border. Also the DARK
  section/footer background: `.whats-news-area.whats-news-area2` and
  `.footer-wrapper` are `background: #131313`.
- **Footer text:** `#C2C5DB` — `.footer-area .footer-tittle ul li a` +
  `.footer-copy-right p` (16px Chivo 300/400).
- **Light backgrounds:** `#F3F3F3` — `.subscribe-area` (padding 80px 0 70px);
  `#F9F9FF` appears in the stylesheet (preview canvas tint, optional);
  `#DFDFDF` — `.header-btn` right border divider.
- **White on dark:** `#fff` — `.whats-right-cap2 h4 a`, `.trend-top-cap2 h2
a` (30px), `.section-tittle2 h2` + `a`, `.trend-top-cap2 p`,
  `.video-icon a` circle bg; `.whats-right-cap2 span` = rgba(255,255,255,.5).
- **Fonts (Google Fonts `<link>` in index.html):** `"Chivo", sans-serif` —
  nav, category kickers, headings (h2/h3/h4), section titles, buttons,
  inputs, footer; `"Shippori Mincho", serif` — BODY text (body default 16px)
  and `.btn` (the classic serif headline feel comes from headings set in
  Chivo 700 + serif body copy).
- **Buttons:** `.btn` — red `#C70D0D` fill, white text, `border-radius: 5px`,
  padding `30px 43px`, 20px 500 Shippori Mincho (used on inner pages; the
  homepage's red CTA is "Send Now"): `.search-form a` — red fill, white,
  Chivo 20px, `padding: 13px 31px`, block. `.header-btn` "Sign in" —
  transparent, ink text, `border-right: 1px solid #DFDFDF`, margin-right 25px.
- **Section titles:** `.section-tittle` — `border-top: 4px solid #131313`,
  `padding-top: 30px`; `h2` — Chivo 700 30px ink, margin-bottom 10px; "See
  All" link `.section-tittle a` — ink, Chivo 700, underlined. Dark variant
  `.section-tittle2`: white h2 + white link.
- **Cards:** `.technology-post` → `.technology-wrapper` (4s ease hover
  transition) → `.properties-img` (relative; `img` width 100%) +
  `.properties-caption` (padding-top 20px): `span` kicker — red, Chivo 700,
  14px, capitalize; `h3 a` — 30px 700 lh 1.4 (responsive 23/20/18px),
  margin-bottom 15px; `p` byline — ink 16px 700 ("by <author>").
- **Hero split:** `.trend-top-cap h2 a` — ink, 44px 700, lh 1.1,
  `margin-right: 120px`, letter-spacing -.5px; `.trend-top-cap span` — red
  Chivo 700 16px; `.trend-top-cap p` — ink 16px 700. Rail: `.whats-right-cap`
  (padding-left 18px) `h4 a` — 22px 700 lh 1.4.
- **Video icon:** `.video-icon a` — white 90×90 circle (`border-radius:
50%`), red play (font-size 30px, offset right 2px); `::after` pulsing ring
  (`border: 63px solid rgba(255,255,255,.2)`, radius 50%); hover →
  background red + white icon.
- **Newsletter:** `.subcrition-tittle h2` — Chivo 700 44px ink; `.input-form
input` — Chivo 18px, 60px tall, transparent bg, `border: 0`,
  `border-bottom: 2px solid #131313`, padding `9px 33px 9px 0`;
  `.search-form a` red "Send Now" (see Buttons); `.pera` disclaimer text
  centered, padding-top 10px.
- **Footer:** `.footer-wrapper` bg `#131313`; `.footer-padding` 100px 0;
  `.footer-tittle h4` — white 20px 400, margin-bottom 22px; links `#C2C5DB`
  16px Chivo 400; `.footer-border` — `border-top: 1px solid
rgba(255,255,255,.1)`, padding 33px 0 20px; `.footer-copy-right p` —
  `#C2C5DB` 16px Chivo 300 lh 2: "Copyright © <year> All rights reserved |
  This template is made with ♥ by Colorlib" — the Colorlib credit is
  REPLACED with the mandatory Component Dock link.
- **Navbar:** `.main-menu ul li a` — ink Chivo 18px 700, padding 15px 42px;
  "Page" has a hover submenu (Blog, Blog Details, Post Details, Category,
  Element, Contact); mobile: `d-none d-lg-block` desktop nav + slicknav
  hamburger (`.mobile_menu d-block d-lg-none`) with client-side collapse.

### Section structure (from the live DOM, top to bottom)

1. `header.header-area` — `.main-header`:
   - `.header-top` (container-fluid, padding 0 88px): left `.logo` (red
     wordmark img), right `.header-info-right`: `.header-btn` "Sign in"
     (border-right divider) + `.header-social` icons (facebook, instagram,
     twitter, youtube, vimeo).
   - `.header-bottom.header-sticky` (padding 0 88px): `.logo2` + `.main-menu
d-none d-lg-block`: Home, Page ▾ (submenu: Blog, Blog Details, Post
     Details, Category, Element, Contact), Science, Technology, Beauty,
     Health, Arts & Culture, Opinion, Videos, Gallery; `.mobile_menu
d-block d-lg-none` (hamburger → collapse panel).
2. `section.whats-news-area.mt-20.pb-30` (container-fluid, padding 0 88px):
   - LEFT `col-xxl-7 col-xl-6 col-lg-6` — `.single-slider` → `.trending-top
mb-30`: `.trend-top-img` (photo) + `.trend-top-cap`: red span
     "Technology", h2 44px "The world's first fitness influencer was a
     Victorian strongman", byline "by Pete Sariya".
   - RIGHT `col-xxl-5 col-xl-6 col-lg-6` — 3× `.whats-right-single.mb-20`
     (img + `.whats-right-cap`: red span "Technology", h4 22px): "Needs to
     Rename the James Webb Space Telescope", "These striking photos capture
     the future of human flight", "Exploring the origins of punk across
     America with Kid Karate".
3. `section.technology-area` (container-fluid, padding 0 88px; row):
   - MAIN `col-xl-10` — `.section-tittle.mb-30` (4px ink top rule): h2 "Arts
     & Culture" + "See All" link; row of 3 `.technology-post.mb-30`
     (col-lg-4): `.properties-img` (photo; middle card has `.video-icon`
     play) + `.properties-caption`: red span (Health / Culture / video), h3
     30px headline, byline. Headlines: "Substituting 'follow your passion'
     with 'find your purpose'", "Ibuprofen should not be used for managing
     symptoms", "Fearing corona recession, France announces".
   - SIDEBAR `col-xl-2` — `.google-add.f-right.d-none.d-xl-block` (ad
     banner placeholder).
4. `section.technology-area.mb-30` — `.section-tittle`: h2 "Science Update"
   - "See All"; row of 4 `.technology-post.mb-30` (col-lg-3): red span + h3
     30px: "26 last-minute holiday gifts that are still thoughtful and
     unique", "The Amex Business Platinum vs. the Amex Business Gold", "Lights
     that warn planes of obstacles were exposed to Open Internet",
     "Substituting 'follow your passion' with 'find your purpose'" + bylines.
5. `section.whats-news-area.whats-news-area2.pt-20.pb-30` (DARK bg
   `#131313`):
   - `.section-tittle.section-tittle2.mb-30`: white h2 "Video Gallery" +
     white "See All" link.
   - LEFT `col-xxl-7` — `.trending-top.mb-30`: `.trend-top-img` (video
     thumbnail) + `.video-icon` (pulsing white play) + `.trend-top-cap
trend-top-cap2`: white h2 30px "The world's first fitness influencer
     was a Victorian strongman".
   - RIGHT `col-xxl-5` — 3× `.whats-right-single.mb-20` (video thumbnails
     `video-gallery2/3/4.jpg`): `.whats-right-cap.whats-right-cap2`: span
     rgba(255,255,255,.5) + white h4 22px: the same three rail headlines
     (VARY the copy).
6. `section.technology-area.mt-60.mb-60` — `.section-tittle`: h2 "Science
   Update" + "See All"; `.technology-active` (slick carousel) of 5
   `.technology-post.technology-post2` cards (col-lg-3, margin 0 12px):
   image + red span + h3 + byline; below: `.googl-add2.text-center` (centered
   ad strip placeholder).
7. `div.subscribe-area.section-bg` (bg `#F3F3F3`, padding 80px 0 70px,
   centered col-7/8/9): `.subcrition-tittle.text-center.mb-40`: h2 44px
   "Subscribe to the newsletter" + p "Get a weekly digest of our most
   important stories direct to your inbox."; form `.search-box`: `.input-form
input` (placeholder "Enter your mail", underline style) + `.search-form`
   red "Send Now" link; `.pera.text-center.pt-10`: "Place some disclaimer
   text here about how subscriber's email, Privacy Policy and all that."
8. `footer.footer-wrapper` (bg `#131313`): `.footer-area.footer-padding`
   (100px 0): row of 4 `.single-footer-caption.mb-50` (col-xl-3):
   (1) About — Our Story, Mission, About Us, News; (2) Categories — Work,
   Services, Products, Tips & Tricks; (3) Categories — Work, Services,
   Products, Tips & Tricks; (4) Quick Links — Privacy Policy, Privacy
   Statement, Use of cookies, International Editions.
   `.footer-bottom-area` → `.footer-border` (top border rgba(255,255,255,.1),
   padding 33px 0 20px): `.footer-copy-right.text-center`: "Copyright ©
   <year> All rights reserved | This template is made with ♥ by
   <Component Dock link>" — Colorlib credit REPLACED.
9. `div#back-top` (scroll-to-top button, optional).

## Requirements

### Requirement: Header (utility row + sticky nav + mobile menu)

The system SHALL render a two-row header: a top utility row with the brand
and sign-in/social cluster, and a sticky bottom row with the category nav
and a responsive mobile menu.

#### Scenario: Header top row

- **GIVEN** the Kicker app is rendered
- **WHEN** the page loads
- **THEN** the top row SHALL show the brand wordmark (red, text-based — no
  image assets) on the left
- **AND** SHALL show a "Sign in" link (ink text, right border divider
  `#DFDFDF`) followed by social icons (facebook, instagram, twitter,
  youtube, vimeo) on the right

#### Scenario: Sticky nav row

- **GIVEN** the header is rendered at desktop width
- **WHEN** the page loads
- **THEN** the bottom row SHALL show the brand mark and the nav links Home,
  Page (with a dropdown: Blog, Blog Details, Post Details, Category,
  Element, Contact), Science, Technology, Beauty, Health, Arts & Culture,
  Opinion, Videos, Gallery (ink, Chivo 18px 700)
- **AND** the row SHALL stick to the top on scroll

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrower than the desktop breakpoint
- **WHEN** the user opens the hamburger toggle
- **THEN** the nav SHALL be shown in a collapse panel with an
  `aria-expanded` toggle and all category links SHALL remain usable

### Requirement: Hero split (feature story + rail)

The system SHALL render a split hero: one large feature story on the left
and three stacked stories on the right.

#### Scenario: Feature story

- **GIVEN** the hero is rendered
- **WHEN** the page loads
- **THEN** the left column SHALL show a story photo with a red "Technology"
  kicker, the 44px bold headline "The world's first fitness influencer was
  a Victorian strongman", and a "by <author>" byline
- **AND** the headline SHALL turn red `#C70D0D` on hover

#### Scenario: Right rail

- **GIVEN** the hero is rendered
- **WHEN** the page loads
- **THEN** the right column SHALL show three stacked story cards, each with
  a thumbnail, a red kicker, and a 22px bold headline (VARY the copy from
  the demo: "Needs to Rename the James Webb Space Telescope", "These
  striking photos capture the future of human flight", "Exploring the
  origins of punk across America with Kid Karate")

### Requirement: Arts & Culture grid

The system SHALL render a section with a top-rule title, a "See All" link,
and a three-card story grid with a video card.

#### Scenario: Section title

- **GIVEN** the Arts & Culture section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show a 4px ink top rule with the bold "Arts &
  Culture" heading and an underlined "See All" link to the right

#### Scenario: Story cards

- **GIVEN** the Arts & Culture grid is rendered
- **WHEN** the user scrolls to it
- **THEN** the grid SHALL show three cards (photo, red category kicker —
  Health/Culture/video, 30px bold headline, byline), one of which SHALL have
  a centered pulsing white play button over its photo
- **AND** card headlines SHALL turn red on hover
- **AND** at desktop width a placeholder ad banner SHALL sit to the right of
  the grid (hidden below xl)

### Requirement: Science Update grid

The system SHALL render a four-card story grid under a "Science Update"
title.

#### Scenario: Science cards

- **GIVEN** the Science Update grid is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the "Science Update" title with a "See
  All" link and four cards, each with a photo, a red kicker, a bold
  headline, and a byline (VARY the demo copy — e.g. "26 last-minute holiday
  gifts that are still thoughtful and unique")

### Requirement: Video Gallery (dark section)

The system SHALL render a dark `#131313` section with a white "Video
Gallery" title, a feature video card with a pulsing play button, and three
video rail stories.

#### Scenario: Dark section layout

- **GIVEN** the Video Gallery section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL have a `#131313` background with a white
  "Video Gallery" title and a white "See All" link
- **AND** the left column SHALL show a video thumbnail with a pulsing white
  play button (white 90px circle, red play icon, soft pulsing ring) and a
  white 30px headline
- **AND** the right column SHALL show three stacked video stories with white
  22px headlines and muted `rgba(255,255,255,.5)` kickers

### Requirement: Science Update carousel

The system SHALL render a horizontally scrollable carousel of story cards
with prev/next arrows, plus a centered ad strip below.

#### Scenario: Carousel

- **GIVEN** the bottom Science Update section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the "Science Update" title with a "See
  All" link and a carousel of at least 5 cards (photo, red kicker, bold
  headline, byline) that advances with prev/next arrows (arrows positioned
  above the track, right-aligned)
- **AND** a centered placeholder ad strip SHALL sit below the carousel

### Requirement: Newsletter

The system SHALL render a light-grey newsletter section with an underline
email input and a red "Send Now" button.

#### Scenario: Subscribe form

- **GIVEN** the newsletter section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the 44px bold heading "Subscribe to the
  newsletter", the copy "Get a weekly digest of our most important stories
  direct to your inbox.", an email input (60px tall, transparent, 2px ink
  bottom border, placeholder "Enter your mail"), and a red "Send Now" button
- **AND** the disclaimer line ("Place some disclaimer text here…") SHALL
  render below the form
- **AND** submitting SHALL NOT navigate away (client-side success state)

### Requirement: Footer

The system SHALL render a dark four-column footer with a bottom copyright
bar.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** the footer SHALL show four link columns on a `#131313`
  background: About (Our Story, Mission, About Us, News), Categories (Work,
  Services, Products, Tips & Tricks), Categories (Work, Services, Products,
  Tips & Tricks), Quick Links (Privacy Policy, Privacy Statement, Use of
  cookies, International Editions) — white 20px headings, `#C2C5DB` links
- **AND** the bottom bar SHALL show the copyright line with the current
  year and a "made with" credit linking Component Dock
  (https://www.componentdock.com/) — the Colorlib credit is replaced

## Verification checklist

- [ ] Spec validates: `npm run spec:validate`
- [ ] TDD: tests written before implementation; `npm run test:coverage` at
      100% lines/functions/branches/statements (per-app gate via
      `scripts/verify-app.sh kicker`)
- [ ] Design tokens from this spec applied in `@theme` (brand red
      `#C70D0D`, ink `#131313`, footer text `#C2C5DB`, light `#F3F3F3`,
      divider `#DFDFDF`)
- [ ] Chivo (400/600/700) + Shippori Mincho (body 16px serif) loaded via
      Google Fonts `<link>` in index.html
- [ ] Section structure + order matches the live DOM 1:1 (header utility
      row → sticky nav → hero split → Arts & Culture grid (+sidebar ad) →
      Science Update grid → Video Gallery dark section → Science Update
      carousel (+ad strip) → newsletter → footer)
- [ ] Placeholder images via `https://picsum.photos/seed/kicker-<n>/<w>/<h>`
      (hero feature, 3 rail thumbs, 3 culture cards, 4 science cards, 5
      carousel cards, 3 video thumbs, ad placeholders); NO assets copied
      from ColorLib
- [ ] Category kickers: red `#C70D0D`, Chivo 700 14px, capitalize; ALL
      headline hovers → red
- [ ] Section titles: 4px ink top rule + bold 30px heading + underlined
      "See All" link; dark variant white
- [ ] Video cards: white 90px circle play button with red icon + soft
      pulsing ring (hover → red bg, white icon)
- [ ] Newsletter: 60px transparent input with 2px ink bottom border, red
      "Send Now" button, disclaimer line, client-side success state
- [ ] Footer: `#131313` bg, 4 columns (About / Categories / Categories /
      Quick Links), `#C2C5DB` links, bottom bar with Component Dock link
- [ ] Header: red text wordmark, "Sign in" link + 5 social icons (inline SVG
      brand paths — lucide-react removed brand icons), sticky nav with
      dropdown (Page ▾) + mobile hamburger collapse
- [ ] Icons from lucide-react (Play, Menu, ArrowUp, ChevronLeft/Right for
      carousel) + inline SVG for socials; verify every lucide export with
      the typeof probe; NO fontawesome / themify / flaticon icon fonts
- [ ] Interactivity client-side only: sticky header, mobile menu, carousel
      with arrows, video lightbox (optional — links can be plain), back-top
      button (optional), newsletter validation (no jquery/slick/slicknav/
      owl/magnific-popup/nice-select)
- [ ] Demo-repeated content varied (rail headlines, culture/science/video
      card titles + bylines) — same kinds of content, no duplicated strings
- [ ] No colorlib.com / preview.colorlib.com strings in any app file
- [ ] TEMPLATES.md: mark BOTH megasis rows `[x]` (lines 604, 2202) + surge
      URL + readme:status when shipped
- [ ] Deploy check: merged PR → Deploy to Surge.sh workflow green + surge
      URL (kicker.free.componentdock.com) returns 200

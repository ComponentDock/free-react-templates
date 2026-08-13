# Propel (ColorLib Express) — Tasks & Design Notes

> Prep artifacts prepared on `main`; implementation ships on
> `feat/template-propel`. Source: ColorLib "Express" — clean corporate
> business / startup one-pager
> (https://colorlib.com/wp/template/express/).
> Preview: https://preview.colorlib.com/theme/express/ (HTTP 200;
> 28,772-byte HTML, `css/style.css` ~57 KB parsed; screenshot
> `express-free-template.jpg` 1200×946 viewed in the browser).
> TEMPLATES.md rows: line 579 + dups at 1005 and 1379.

## Design notes (replication findings)

- **Original:** ColorLib "Express" — light, corporate business one-pager
  ("We are here to grow your business"). Bootstrap 5 + tiny-slider + AOS +
  glightbox (video lightbox) + jQuery. No Tailwind.
- **Screenshot vs live DOM:** they MATCH — full-bleed photo hero (team
  around a laptop) under a dark overlay, white pill CTA + "Watch the video"
  link, white navbar over the photo, centered "Startup" heading, alternating
  media rows, white numbered service cards, blog rows, white contact form.
- **Visual design:** light and corporate — white sections on white, brand
  blue #0e49b5 used sparingly (buttons, logo dot, check icons, footer
  links), dark photo hero with 60% black overlay, Montserrat headings +
  Open Sans body. Pill buttons (radius 30px) uppercase 12px/700 with .1rem
  letter-spacing.
- **Signature motifs to preserve:**
  - NAVBAR (absolute over hero, padding 20px 0): white "Propel." logo
    (Montserrat 24px/700, blue dot) left; menu right — Home (active),
    Dropdown (nested submenu: Menu One, Menu Two → Sub Menu One/Two/Three,
    Menu Three), Services, About, Blog, Contact Us; links
    rgba(255,255,255,0.7) 14px, white hover/active; mobile burger →
    solid drawer (past templates shipped transparent mobile menus — user
    tests on phone, make it solid + tappable).
  - HERO (`div.hero.overlay`, 100vh / min-height 700px, bg photo + overlay
    rgba(0,0,0,0.6)): centered h1 50px/700 white (38px ≤991px), lead
    `text-white-50`, white pill "See our services" (hover → blue bg) +
    white "Watch the video" link → glightbox video modal (source:
    youtube.com/watch?v=mwtbEGNABWU).
  - STARTUP section (`div.section`, padding 7rem): centered h2 34px bold +
    lead; row 1: left `.box` (white, padding 40px: lead + paragraph +
    `ul.circle-style` 3 links #4a4a4a) + right img rounded + white
    "Learn more" `btn-arrow`; row 2: left img rounded + right
    `h3.heading-2` 24px "Best Company" + paragraph + white "Learn more"
    `btn-arrow`. `btn-arrow` = padding-right 40px with backspace icon
    (right 20px, rotated 180°).
  - SERVICES (`div.section.pt-0`): heading "Services" + paragraph; `row
g-1 align-items-stretch` with 5 EQUAL `.service` cards (white, padding
    30px 30px 90px): `.number` "Service .01"–".05" (#ccc 12px uppercase
    bold, mb 30px) + h3 18px bold (Web Design / Graphic Design / Web
    Application / Expert Copywriting / Creative Branding — each has a
    `<br>` split) + arrow icon absolute bottom-left rotated 180°; hover
    lift (top -5px, .3s).
  - BLOG POSTS (`div.section.pt-0`): centered heading + paragraph; 2 rows
    (`col-lg-12`) of `.feature-media d-block d-lg-flex` pairs: image div
    25% (bg img_1..4.jpg) + `.text` white padding 30px — h3 20px/700 link,
    `.post-meta` #999 ("by Syrgey • 23 Aug 2020"), paragraph, underlined
    "Learn more" (`a.more`); image order alternates (`order-2` row 2).
    SOURCE REPEATS ONE TITLE 4× — ship 4 DISTINCT titles.
  - CONTACT (`div.section`): centered heading + paragraph; `form.row.g-3
.bg-white.p-4.p-md-5`: Name/Email/Subject 3-col row + textarea
    ("Write your message") + blue submit "Send message".
  - HALF-CONTENT ×2 (`div.half-content d-block d-lg-flex`, children 50%):
    panel 1 img left + `.text` right (padding 10%): h2 fw-bold "Start
    Your Business" + paragraph + `ul.list-check.primary` (3 items, blue
    #0e49b5 20px check icons) + blue "Learn more"; panel 2 img right
    (`order-lg-2`) + text left "Grow Your Business". Mobile: children
    100%, img fixed height 400px, text padding 40px.
  - FOOTER (`div.site-footer`, bg #efefef, 14px #888, padding 70px 0): 4
    cols — "About Foundation." (16px/700 #000 h3 + paragraph + blue dot;
    "Connect" social row: instagram/twitter/facebook/linkedin/pinterest/
    dribbble), "Links" (About us/Services/News/Careers/Contact), "Company"
    (same 5), "Contact" (address "43 Raymouth Rd. Baltemoer, London 3910",
    2 phones, email); footer-bottom centered copyright → Component Dock
    credit.
  - PRELOADER after footer: `#overlayer` + `.loader` spinner-border
    text-primary — optional nicety, cheap to keep.
- **Tokens (from css/style.css):** brand blue `#0e49b5` (23 uses — btn-primary
  bg, .text-primary dot, .list-check.primary checks, footer a), hover
  `#0c3e9a`, active `#0b3a91`; text `#212529`, muted `#6c757d`; grays
  `#f8f9fa` / `#efefef` (footer bg) / `#f0f0f0`; micro-grays `#ccc`
  (service number), `#999` (post-meta), `#777` (footer links), `#888`
  (footer text), `#4a4a4a` (circle-style links); fonts Montserrat (headings
  300/700) + Open Sans (body); buttons pill radius 30px, padding 15px 30px,
  uppercase 12px/700, letter-spacing .1rem; hero overlay rgba(0,0,0,0.6);
  section padding 7rem; heading 34px / heading-2 24px; `.box` padding 40px;
  service card padding 30px 30px 90px; feature-media 25/75 split, text
  padding 30px; half-content text padding 10%; footer padding 70px 0.

## Tasks (implementation order)

1. Scaffold `apps/propel` from the simplest existing app; rename package to
   `@free-react-templates/propel`; `public/CNAME` =
   `propel.free.componentdock.com`; homepage
   `https://propel.free.componentdock.com`; `npm install` at root so the
   lockfile registers the workspace (verify with
   `grep -c "free-react-templates/propel" package-lock.json`).
2. `src/index.css` `@theme` tokens (see spec): brand `#0e49b5`, brand-hover
   `#0c3e9a`, brand-active `#0b3a91`, ink `#212529`, muted `#6c757d`,
   footer-bg `#efefef`, smoke `#f8f9fa`, fog `#f0f0f0`, service-num `#ccc`,
   meta `#999`, footer-link `#777`, footer-text `#888`, bullet `#4a4a4a`;
   Montserrat (300/700) + Open Sans `<link>` in `index.html`; register
   `injectUiSource()` in `vite.config.ts` (copy from any app).
3. Header (absolute, transparent over hero): white "Propel." logo + nav +
   accessible mobile drawer (solid bg, tappable); dropdown/nested submenu
   via a details/summary or state-based disclosure.
4. Hero (100vh, picsum seed `propel-hero-1` — screen for an office/team
   subject before pinning; dark overlay): headline + lead + white pill CTA
   - "Watch the video" → video modal (YouTube embed or styled modal).
5. Startup section: centered heading + lead; row 1 box (bullet list,
   circle-style) + image + btn-arrow; row 2 image + "Best Company" +
   btn-arrow.
6. Services: 5 equal cards (Service .01–.05, Web Design / Graphic Design /
   Web Application / Expert Copywriting / Creative Branding, arrow icon,
   hover lift).
7. Blog Posts: 4 post cards in 2 alternating rows (picsum seeds
   `propel-img-1..4` — screen for workspace/blog subjects; 4 DISTINCT
   titles + authors + dates).
8. Contact: 3-col form (Name/Email/Subject) + textarea + blue submit.
9. Half-content ×2 ("Start Your Business" img-left / "Grow Your Business"
   img-right, check lists, blue buttons) → Footer (4 columns + social row +
   Component Dock credit).
10. Tests first (TDD) mirroring the spec scenarios; 100% coverage;
    `bash scripts/verify-app.sh propel` green; PR + immediate squash
    merge; then bookkeeping.

## Pitfalls / notes

- The source repeats content everywhere — recreate with DISTINCT values:
  one blog title ×4 rows, "Learn more" buttons ×many (fine to keep as a
  pattern), two phone numbers identical. Never ship the repeated filler
  titles.
- Brand blue `#0e49b5` is the ONLY accent — don't invent a second color.
  Bootstrap's default `#0d6efd` must NOT appear (the template overrides
  `.btn-primary` to `#0e49b5`).
- Signature button hover: `.btn-white` white→blue bg swap on hover, `.btn`
  uppercase 12px/700 with .1rem letter-spacing, radius 30px. Keep the pill
  shape — it is the template's identity.
- Hero overlay is `rgba(0,0,0,0.6)` over the photo (`.hero.overlay:before`)
  — nav links sit over it at rgba(255,255,255,0.7).
- Service card arrow icon (backspace, rotated 180°) sits absolute
  bottom-left (left 30px / bottom 30px) — replicate with a lucide icon
  (probe exports: `ArrowLeft`/`CornerDownLeft`/`Undo2` may exist; use the
  typeof check before importing).
- Social icons: lucide-react has no reliable brand set — probe
  Instagram/Twitter/Facebook/Linkedin/Dribbble/Pinterest exports; any that
  throw "Element type is invalid" → inline SVG fallback.
- Footer address "43 Raymouth Rd. Baltemoer, London 3910" and
  `info@mydomain.com` are ColorLib placeholders — paraphrase to similar
  fictional values. Never write a literal `tel:+<digits>` URI in source
  (secret-scan masker rewrites it); render phone as plain text.
- jsdom 30 has no localStorage — copy the MemoryStorage polyfill from
  `apps/cura/src/test/setup.ts` into the new app if anything touches it.
- No `[~]`/`[x]` markers were set by the prep stream — implementer claims
  via the usual `[~]` push on `feat/template-propel`.
- No `colorlib` string anywhere in `apps/propel/*` — provenance lives only
  here, TEMPLATES.md, and the PR.
- TEMPLATES.md lists "Express" THREE times (lines 579, 1005, 1379) —
  bookkeeping must mark ALL three rows `[x]` with the same live URL.
- Blog post-meta format: "by Syrgey • 23 Aug 2020" — keep author + date
  pattern with paraphrased names/dates.

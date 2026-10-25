# Template: Paperline (Portfolio — Personal Résumé / CV)

## Purpose

Paperline is a single-page personal résumé and portfolio site in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free **"Resume"** design, built under a DIFFERENT name (**Paperline** —
one lowercase word, the printed sheet a CV is set on, the register this design
sells: a thin/light display face over a blue-periwinkle gradient, cards and
bars laid out like a typeset page; single word, kebab-case-safe, no collision
with `apps/`, `openspec/specs/template-*`, `docs/templates/`, any bold name in
`TEMPLATES.md`, or any substring in the repository — `git grep -il paperline
origin/main` = **0 hits**, and the name is not a ColorLib slug:
`colorlib.com/wp/template/paperline/`, `preview.colorlib.com/theme/paperline/`
and `preview.colorlib.com/theme/bootstrap/paperline/` all return **404**), with
the monorepo stack: Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript
(strict).

- **Source slug**: `resume`
- **ColorLib page**: https://colorlib.com/wp/template/resume/
- **Live preview**: https://preview.colorlib.com/theme/resume/
  (HTTP 200, **28,886 B** HTML, sha256
  `cc2e8ddfff3763a87274c2bfcca3b5f2fef1e98a4e06f98c09a8f0fad9c9e76a`; served
  `<title>` = **"Resume"**). Its sheet is `css/main.css` (**32,634 B**, sha256
  `3c52be276033537b90b959a9f14a1db2168f503c486efc1cf2d1d06b1f53fe1e`) and the
  page script `js/main.js` (**3,246 B**, sha256
  `fc730b44d6c9817893b331594db3ee01d9f30d10bed8e81fec13b6b066ce2a39`).
  `css/bootstrap.css` there is a **13,070 B** partial Bootstrap **4.0.0-beta**
  build (its banner reads `Bootstrap v4.0.0-beta` and the file begins at the
  `@media print` block — utility/grid layers only, no components); the page also
  links `css/linearicons.css`,
  `css/font-awesome.min.css`, `css/magnific-popup.css`,
  `css/owl.carousel.css`. Vendor scripts: jQuery 2.2.4, Popper 1.11.0,
  Bootstrap, `jquery.ajaxchimp`, `jquery.magnific-popup`, `parallax.min.js`,
  `owl.carousel.min.js`, `jquery.sticky`.
  `theme/bootstrap/resume/` is **404**, `theme/bb/resume/` is **404**, so the
  slug-only path IS the live design. `/downloads/free/resume.zip` is **404**
  (9-byte `text/plain` body) — **there is no archive**, so the live render is
  the only DOM/CSS reference for this slug.
- **Screenshot**:
  https://colorlib.com/wp/wp-content/uploads/sites/2/resume-free-website-template.jpg
  (served **AVIF**, **1200×935** decoded, converted with PIL and inspected: a
  browser-free top-fold shot — the blue→periwinkle gradient hero, a cut-out
  portrait at the left whose own background has already dissolved into that
  gradient, and on the right three tiers of white type: a **thin** "Hi, I'm",
  a **bold uppercase** "ETTA JENNINGS", a **thin** "Art Director", a small
  lorem paragraph, and a white **pill** "LET US TALK". Below the fold line the
  first services band is already visible: a centred "Have a Look at my
  Services" heading over a two-column icon/title/blurb grid. It is a faithful
  picture of the live hero; every band below it was measured in the live DOM,
  not read off the card.)
- **Package**: `@free-react-templates/paperline`
- **Deploy target**: `paperline.free.componentdock.com`
- **Design category**: Portfolio / personal résumé & CV (single page)

### Why this row needs a fresh build (prep-stream context)

`grep -c 'wp/template/resume/' TEMPLATES.md` = **2** — line **2422**
(`## Personal (53)`, heading at line 2377) and line **2724**
(`## Resume (20)`, heading at line 2708), both `- [x] **Resume**` and both
pointing at the **`resume`** app. But that app recreates a DIFFERENT ColorLib
design: its own spec (`openspec/specs/template-resume/spec.md`) names ColorLib
**"Personalportfolio"** — `apps/resume`'s hero reads "I'm Designer Harper F.
Watson", its accent is coral-red **#ec5b53**, its headings are navy
**#000a2d** in **Rufina** over a **Rubik** body, and its footer is **#080827**.
None of that exists on the `resume` design (blue-periwinkle gradient, Poppins,
`#8490ff`, grey footer). So both Resume rows are a false `[x]` (bucket 2,
**APP-WRONG-DESIGN**, in `docs/row-multiplicity.md` §2; measured exclusive-copy
evidence `row-excl / spec-excl` = **0 / 17** — the two pages share no exclusive
wording at all). No spec on main claims `wp/template/resume/` — verified with
`grep -rl 'wp/template/resume/' openspec/specs --include=spec.md` = **0 files**,
and `preview.colorlib.com/theme/resume` appears in **0** specs/docs files.

The name collision is the textbook shape this bucket describes: ColorLib ships
a design literally called *Resume*, an app was given that invented name for a
different design, and the row pointer then matched the row to the subdomain by
name (`villa`, `summit`, `glamour`, `vigor`, `nova`, `amplify` all repeated it).
This is the **last** slug in §2.

**The prep stream never moves markers.** The implementer re-opens rows 2422 and
2724 on its `feat/` branch, builds `apps/paperline`, and flips them to `[x]`
with the `paperline.free.componentdock.com` link after merge.

### Naming checks (all re-run 2026-10-25)

| check | result |
|---|---|
| `git grep -il paperline origin/main` | **0 hits** (no path, spec, doc, app or note) |
| `ls apps/ \| grep -x paperline` | no match |
| `ls openspec/specs \| grep -x template-paperline` | no match |
| bold name in `TEMPLATES.md` | none (0 case-insensitive hits for the token) |
| `colorlib.com/wp/template/paperline/` | **404** |
| `preview.colorlib.com/theme/paperline/` | **404** |
| `preview.colorlib.com/theme/bootstrap/paperline/` | **404** |

## Design reference (replication findings)

### What the reference is

A **flat, gradient-led résumé page** in one geometric sans face (**Poppins**):
a single diagonal-ish gradient built from **`#62bdfc` (sky) → `#8490ff`
(periwinkle)** that paints the hero, the sticky bar, every primary button, the
skill bars, the feature-card hover state and the "Hire Me" pill. The page is
otherwise near-monochrome: near-black **`#222222`** headings (weight 600),
**`#777777`** body copy (weight 300, 14 px / 1.625), and a **`#f9f9ff`** tint
used as the alternation surface (About band, Projects band, feature cards).
Radii only appear on the two pill buttons (**25 px**), the hero CTA (**20 px**)
and the skill bars (**10 px**); every card, image, input and the footer are
square. The hero is the only large imagery besides four project photos and a
white résumé card.

### DOM skeleton (live preview `index.html`, document order)

```
body
├── section.banner-area#home                 (gradient)
│   ├── header.default-header                (absolute, 56 px, gradient image)
│   │   └── nav.navbar.navbar-expand-lg
│   │       ├── a.navbar-brand > img (127×30 wordmark + 4-diamond mark)
│   │       ├── button.navbar-toggler (only < 992 px)
│   │       └── #navbarSupportedContent > ul.navbar-nav
│   │           ├── Home #home · Service #service · About #about
│   │           ├── Projects #project · Contact #contact
│   │           └── li.dropdown > "Pages" > .dropdown-menu (gradient)
│   │               ├── Generic  → generic.html   (live, 200)
│   │               └── Elements → elements.html  (live, 200)
│   └── .container > .row.align-items-center
│       ├── .col-lg-6.banner-right > img.header-img.png (546×767, ALPHA cut-out)
│       └── .col-lg-6.banner-left
│           ├── h1.text-white ("Hi, I'm" <br> <span>Etta Jennings</span> <br> "Art Director")
│           ├── p.text-white
│           └── a.header-btn "Let Us Talk"
├── section.service-area#service.section-gap
│   ├── .title (h1 + p, centred, 8-col)
│   └── .row > 4 × .single-service.col-lg-6  (icon img + .dec > h4>a + p)
├── section.about-area#about.section-gap      (bg #f9f9ff)
│   ├── .title
│   └── .row
│       ├── .col-lg-6.about-left
│       │   ├── p
│       │   ├── h4.pb-40 "Tools Expertness"
│       │   └── 5 × .skillbar[data-percent] > .skill-bar-percent + .skillwrap > .skillbar-bar[style=width]
│       └── .col-lg-6.about-right > .myself-wrap
│           ├── img.about-img.jpg (458×340)
│           └── .desc (35 px pad, centred): h4 name · p role · p phone · p email · a.talk-btn "Hire Me"
├── section.qualification-area.pt-100.pb-80
│   ├── .title
│   └── .row
│       ├── .col-lg-6.qty-left  : 2 × .single-qly (h3 company · p dates · h4 role · p) + .btm-border
│       └── .col-lg-6.qty-right : 3 × .single-qly (h4 degree · p Session · p Result) + .btm-border ×2
├── section.project-area#project.section-gap  (bg #f9f9ff)
│   ├── .title
│   └── .row
│       ├── .col-lg-6.project-left : 2 × .single-project (img l1/l3 + h4>a + p)
│       └── .col-lg-6.project-right: 2 × .single-project (h4>a + p + img l2/l4)  ← image BELOW text
├── section.feature-area.pt-100               (no bottom padding)
│   ├── .title
│   └── .row > 6 × .col-lg-4 > .single-feature (lnr icon + h4>a + p)
├── section.contact-area#contact.section-gap
│   ├── .title
│   └── form.form-area#myForm (action="mail.php", 2 cols)
│       ├── left : input[name=name] · input[name=email] · input[name=subject]
│       └── right: textarea[name=message] · button.primary-btn "Send Message" + span.lnr-arrow-right
│                 + .alert-msg
└── footer.footer-area.section-gap            (bg #222222)
    ├── .col-lg-5 : .single-footer-widget "About Us" + p + p.footer-text (runtime year)
    ├── .col-lg-5 : .single-footer-widget "Newsletter" + #mc_embed_signup form (email + gradient arrow button + honeypot)
    └── .col-lg-2 : .single-footer-widget "Follow Us" + 4 × a > i.fa (facebook, twitter, dribbble, behance)
```

### Band table — measured `getBoundingClientRect` (1440×900 and 390×844)

| # | band | 1440 top / height | 390 top / height | background |
|---|---|---|---|---|
| 1 | `.banner-area` | 0 / **915** | 0 / **745** | gradient `#62bdfc → #8490ff` |
| 2 | `.service-area` | 915 / **864** | 745 / **1482** | transparent (`#fff`) |
| 3 | `.about-area` | 1,779 / **1,012** | 2,227 / **1,622** | **`#f9f9ff`** |
| 4 | `.qualification-area` | 2,790 / **735** | 3,849 / **1,242** | transparent |
| 5 | `.project-area` | 3,525 / **1,633** | 5,091 / **2,643** | **`#f9f9ff`** |
| 6 | `.feature-area` | 5,159 / **634** | 7,734 / **1,443** | transparent |
| 7 | `.contact-area` | 5,792 / **672** | 9,177 / **955** | transparent |
| 8 | `footer.footer-area` | 6,464 / **432** | 10,132 / **767** | **`#222222`** |
| — | document | **6,897** | **10,898** | `scrollWidth == clientWidth` (1,440 / 390) |

Container content width **1,110 px** at 1440 (x = 165), i.e. a 1,140 px
Bootstrap container with 15 px gutters. Band paddings are the sheet's own:
`.section-gap{padding:120px 0}`, `.qualification-area` 100/80, `.feature-area`
100 top only, footer 100 top / 120 bottom.

### Hero geometry (1440)

- `.banner-right img` **546×767** at **(150, 148)** — `img/header-img.png` is
  an **RGBA cut-out** (`getchannel('A').getextrema() == (0, 255)`), i.e. the
  portrait has no backdrop of its own: the page gradient shows through it.
  `.banner-right{margin-top:100px}` produces the 148 px offset under the
  56 px absolute header.
- `.banner-left` x **720**, content **540** wide (735 → 1,275):
  `h1` 36 px/**100** white at y **331** (130 tall, `line-height:1em`, `span`
  uppercase **700** 51 px tall), `p` 14/300 white at y **501** (68 tall),
  `a.header-btn` **165×38** at y **601**.
- At 390: banner **745**; portrait **156×219** centred (x 117, y 118,
  `.banner-right img{width:40%}` ≤800 px); `h1` **40 px** at y 367 centred;
  paragraph 91 tall; CTA 165×38 centred at y 674.
- `h1` size ladder (all in `@media (max-width)` blocks, later rules win):
  base **36** → ≤1199 **45** → ≤991 **36** (and `.banner-left{text-align:center}`,
  `<br>` hidden) → ≤414 **40**. Measured: 36 px at 1440 and 40 px at 390.

### Anchors and inner pages (LT axis)

The live `index.html` holds **30 anchors**: **21 dead `href="#"`**, **5 in-page**
(`#home`, `#service`, `#about`, `#project`, `#contact`), **1 brand**
(`index.html`, byte-identical to the directory URL — a no-op, never a 404),
**2 dropdown destinations** (`generic.html`, `elements.html`, both **200**) and
**1 external** (`https://colorlib.com`, the CC-BY credit — replaced by the
Component Dock credit in the recreation). The 21 dead anchors: 4 service titles,
4 project titles, 6 feature titles, "Let Us Talk", "Hire Me", 4 footer social
circles and the footer "Pages" dropdown toggle.

Inner-page inventory (probed 2026-10-25):

| page | status | bytes | what it holds |
|---|---|---|---|
| `generic.html` | **200** | 23,696 | "The Generic Page" `h2` banner, the same 6-feature grid, an "Elaboration about Generic Page" `h3` block, and the 4-service grid — a content demo, not a second layout |
| `elements.html` | **200** | 41,786 | "The Elements Page" `h1`/`h2`: text samples, sample buttons, block quotes, table, two image galleries, heading scale, lists, form elements — the component sheet |
| `about.html`, `services.html`, `contact.html`, `projects.html`, `blog.html`, `single.html` | **404** (9 B) | — | do not exist — the top-level nav is a genuine in-page anchor nav |

So this is a **true single page** (only two ColorLib demo sheets ride along);
the recreation does not invent sections from other pages.

### Runtime behaviour (`js/main.js`, 3,246 B)

- `$(".default-header").sticky({topSpacing:0})` — the header becomes
  `position:fixed; top:0` inside a `.sticky-wrapper.is-sticky` once scrolled.
  `.is-sticky .default-header{background-color:#fff}` sets a white
  background-**color**, but the group rule at the top of the sheet also sets
  the gradient as background-**image** on `.default-header`, and the image
  paints over the colour: the stuck bar keeps the **blue→periwinkle gradient**
  with white nav labels. Verified by screenshot at `scrollY = 1400` (a
  gradient bar, not a white one) and by `getComputedStyle` at 900 and 2000
  (`position:fixed`, `background-color: rgb(255,255,255)`,
  `background-image: linear-gradient(0deg, rgb(98,189,252), rgb(132,144,255))`).
- Smooth scroll for `a[href*="#"]` (excluding `#` and `#0`): 1,000 ms
  `animate({scrollTop: target.offset().top - 50})` — a **50 px offset** that
  clears the 56 px sticky bar approximately.
- `magnificPopup` bound to `.img-pop-up` / `.play-btn` and Owl bound to
  `.active-works-carousel` / `.active-gallery`: **none of those elements exist
  on this page** — dead bindings, no carousel anywhere in the design.
- `$(".fullscreen").css("height", windowHeight)` — no `.fullscreen` element
  either (the sheet only styles `.banner-area .fullscreen`); the hero height
  is content-driven (915 px measured), **not** a 700 px or 100 vh panel.
- `ajaxChimp()` on `#mc_embed_signup form` — the newsletter posts to a
  Mailchimp list and prints a `.info.valid/.error` line.
- **No skill-bar animation**: `.skillbar-bar` widths are static inline styles
  (85 / 80 / 40 / 70 / 75 %). Do not invent a count-up.
- The footer year is written at runtime by `document.write(new Date().getFullYear())`.

### Source defects and deliberate deltas

| # | source behaviour | recreation |
|---|---|---|
| 1 | Hero portrait is a 546×767 **transparent PNG cut-out** whose edges dissolve into the gradient | Do **not** copy the asset. Use a placeholder portrait (`https://picsum.photos/seed/paperline-hero/546/767`) and fade its lower/outer edges into the gradient with `mask-image: radial-gradient(120% 100% at 50% 40%, #000 55%, transparent 100%)` so the cut-out illusion survives — record it as an adaptation |
| 2 | Footer credit is a ColorLib link with a runtime year | Keep the copyright line + runtime year, replace the credit with a `https://www.componentdock.com/` "Component Dock" link (house rule) |
| 3 | Contact form posts to `mail.php` (dead endpoint, no handler in the package) | Reproduce the 4 fields + native `required` + email `pattern`, submit locally, show a success line in `.alert-msg`; no network call |
| 4 | Newsletter posts to Mailchimp with a hidden honeypot and prints `.info` feedback | Local email capture with the same input/arrow-button shape, validation, and the same inline feedback line |
| 5 | `Pages` dropdown points at the two live demo sheets | Single-page build: keep the dropdown slot, but its two entries become **Experience** (`#qualification`, the section the top nav does not expose) and **Features** (`#feature`). Do not link to non-existent routes |
| 6 | Hero copy is one `h1` whose middle line is a `span` (uppercase 700, thin 100 around it) | Same single `h1` with the same three lines and the same weight contrast — not three headings |
| 7 | Project photos are 4 stock illustrations in a staggered mosaic; right column puts the image **below** the title/blurb | Reproduce the staggered order exactly (`img → title → text`, then `title → text → img`); `img:hover{transform:scale(.9)}` |
| 8 | Service/project/feature titles are `href="#"` | Real in-page targets or buttons that do nothing harmful; no dead `#` anchors in the recreation |

Do **not** write "preview unreachable" anywhere: the live preview, both live
inner pages and the stylesheet were all fetched in this run (byte counts and
sha256 above). There is simply **no archive**.

### Visual design (screenshot `resume-free-website-template.jpg`, 1200×935 AVIF)

A single bright gradient fills the whole top fold — sky `#62bdfc` on the left
fading into periwinkle `#8490ff` on the right — and the portrait's own
background has already been dissolved into it, so the woman reads as if she
were printed on the gradient. The copy block sits on the right third:
"Hi, I'm" in **thin** white 36 px, "**ETTA JENNINGS**" in bold uppercase
(52 px-ish cap height, letterforms of Poppins 700), "Art Director" thin again,
then a two-line lorem paragraph at ~70 % opacity, then a **white pill**
165×38 with 2 px-ish tracking reading "LET US TALK". There is no visible
header bar in the card (the bar is transparent over the gradient), no box, no
shadow. Below the fold the first band is white with a centred 36 px/600
near-black heading and a 14 px grey subtitle, then a 2×2 grid whose marks are
**flat multi-colour illustrations** (a browser window, a typewriter, a CMYK
rosette, a thumbs-up) rather than line icons — the only saturated colour in an
otherwise 3-grey page, apart from the gradient itself.

### Sibling comparison (why the existing `resume` app is not this design)

| | `apps/resume` (ColorLib **Personalportfolio**) | ColorLib **resume** (this brief → Paperline) |
|---|---|---|
| hero | full-height photo slider, dark navy overlay | 915 px gradient band with a cut-out portrait |
| accent | coral **#ec5b53** | gradient **#62bdfc → #8490ff** |
| headings | **Rufina** serif, navy **#000a2d** | **Poppins** 600, **#222222** |
| body | Rubik | Poppins 300, 14 px |
| footer | **#080827** | **#222222** |
| band count | 9 (header, slider, about, services, portfolio tabs, CTA band, testimonials, contact, footer) | 8 (hero+header, services, about, qualifications, projects, features, contact, footer) |

Nothing ports between them; do not open `apps/resume` as a starting point.

## Design tokens (from `css/main.css` + live computed styles)

| token | value | where it is used |
|---|---|---|
| `--brand-from` | **`#62bdfc`** | gradient stop 0 % (renders `rgb(98,189,252)`) |
| `--brand-to` | **`#8490ff`** | gradient stop 100 % (renders `rgb(132,144,255)`) |
| `--gradient` | `linear-gradient(0deg, #62bdfc 0%, #8490ff 100%)` | `.banner-area`, `.default-header`, `.primary-btn`, `.talk-btn`, `.skillbar-bar`, `.click-btn`, `.dropdown-menu`, `.single-feature:hover`, `.single-service a:hover`, `.footer-social a:hover i` |
| `--accent` | **`#8490ff`** | `.genric-btn.primary-border`, `.footer-text a/ i`, accent text |
| `--ink` | **`#222222`** | h1–h6, `.footer-area` background |
| `--body` | **`#777777`** | body copy, footer paragraphs, `.skill-bar-percent` |
| `--surface-tint` | **`#f9f9ff`** | About band, Projects band, `.single-feature` cards |
| `--surface-card` | `#ffffff` | `.myself-wrap`, `.skillwrap`, inputs |
| `--footer-field` | **`#191919`** | footer newsletter input |
| `--social-icon` | `#cccccc` | 4 footer social icons |
| `--rule` | `#ddd` (70 % wide, 1 px) | `.btm-border` dividers in Qualifications |
| `--track-border` | `#bababa` (1 px) | `.skillwrap` outline |
| `--field-border` | `rgba(0,0,0,.15)` (1 px) | `.common-input` / `.common-textarea` |
| `--on-brand` | `#fff` | hero type, button labels |
| `--radius-pill` | **25 px** | `.primary-btn`, `.talk-btn` |
| `--radius-cta` | **20 px** | `.header-btn` (hero "Let Us Talk") |
| `--radius-bar` | **10 px** | `.skillwrap` / `.skillbar-bar` |
| `--radius-card` | **0** | cards, inputs, images, footer fields |
| `--font` | `"Poppins", sans-serif` | everything (one family) |
| `--body-size` | `14px / 1.625em` (22.75 px) weight **300** | body copy |
| `--h1` / `--h3` / `--h4` / `--h6` | **36 / 24 / 18 / 18 px**, weight **600**, `line-height 1.2em` | section titles use `h1`; qualifications use `h3`; cards use `h4`; footer widget titles use `h6` |
| `--hero-h1` | **36 px**, weight **100**, `line-height:1em`, white; `span` **700 uppercase** | hero only (40 px at ≤414) |
| `--section-pad` | **120 px** (`.section-gap`); qualifications 100/80; features 100 top only | band rhythm |
| `--skillbar` | track 540×16 (2 px pad + 1 px `#bababa`), fill **10 px** gradient, `radius 10 px`; label right-aligned 14 px/400, `margin-bottom:10px` | About band |
| `--shadow` | **none** anywhere (the `.header-btn` shadow is `0 20px 20px rgba(0,0,0,.1)` — the only shadow on the page) | — |

## Requirements

### Requirement: Page shell and document head

Paperline SHALL render **one page** whose bands appear in the source's order —
hero (with the header overlaid) → services → about → qualifications →
projects → features → contact → footer — inside a document with `<html
lang="en">`, a `<title>` and meta description written for **Paperline**, and it
SHALL carry no ColorLib provenance in any app file.

#### Scenario: Bands render in the source order at 1440

- **GIVEN** Paperline is rendered at 1440×900
- **WHEN** the page has loaded
- **THEN** the eight bands SHALL appear in the order header+hero → services → about → qualifications → projects → features → contact → footer
- **AND** the document height SHALL be within ±5 % of the reference's **6,897 px**
- **AND** exactly one `h1` SHALL be the hero headline at the top of the page, with the five section titles using `h2` semantics but the source's 36 px/600 visual size
- **AND** the header SHALL overlay the hero (`position:absolute`, 56 px tall, 0 px in flow)

#### Scenario: No ColorLib provenance in app files

- **GIVEN** the built app's source and bundle
- **WHEN** either is searched (case-insensitive) for `colorlib`, `preview.colorlib.com`, the source URL or the words "resume template" as provenance
- **THEN** no match SHALL be found anywhere in `apps/paperline`
- **AND** the footer SHALL link `https://www.componentdock.com/` reading "Component Dock"

#### Scenario: Single-page navigation is complete and honest

- **GIVEN** the five top-level navigation affordances (Home, Service, About, Projects, Contact)
- **WHEN** each is activated
- **THEN** the matching section (`#home`, `#service`, `#about`, `#project`, `#contact`) SHALL scroll into view with the source's ~1,000 ms easing and a **50 px** offset
- **AND** every anchor on the page SHALL resolve to an existing section or an external URL — **zero** dead `href="#"` anchors (the source has 21)
- **AND** the "Pages" dropdown SHALL expose **Experience** (`#qualification`) and **Features** (`#feature`), never a link to a route that does not exist

### Requirement: Hero band with the full-bleed gradient

Paperline SHALL paint the hero with the source's `linear-gradient(0deg,
#62bdfc 0%, #8490ff 100%)` across the full band, overlay the header on it, and
place a portrait on the left and the three-tier name block on the right.

#### Scenario: Hero renders at 1440

- **GIVEN** Paperline is rendered at 1440×900
- **WHEN** the hero is measured
- **THEN** the band SHALL be **915 px** tall (±2 %) with the gradient as its `background-image`
- **AND** the portrait SHALL be **546×767** with its top at **y ≈ 148** and its left edge at **x ≈ 150**
- **AND** the copy column SHALL start at **x ≈ 735** and be **540 px** wide
- **AND** the `h1` SHALL be **36 px, weight 100, `line-height:1em`, white**, with the middle line in a `span` at **weight 700 uppercase**
- **AND** the paragraph SHALL be 14 px/300 white and the CTA **165×38** at **radius 20 px**, white fill, **8 px 40 px** padding, uppercase 14 px/600 near-black label

#### Scenario: Portrait dissolves into the gradient

- **GIVEN** the source's portrait asset is a transparent cut-out, which must not be copied
- **WHEN** the placeholder portrait is rendered
- **THEN** its edges SHALL fade into the gradient (CSS `mask-image`, no visible rectangle)
- **AND** the gradient SHALL remain visible on all four sides of the portrait at both 1440 and 390

#### Scenario: Hero stacks on mobile

- **GIVEN** a 390×844 viewport
- **WHEN** the hero renders
- **THEN** the band SHALL be **745 px** tall (±3 %)
- **AND** the portrait SHALL be **≈156×219**, centred above the copy
- **AND** the `h1` SHALL be **40 px** and the whole copy block centred
- **AND** `scrollWidth` SHALL equal `clientWidth` (no horizontal overflow)

### Requirement: Sticky header with the gradient bar

The header SHALL be absolute and transparent over the hero at scroll 0 and
SHALL become a fixed, gradient-filled bar with white labels once the page
scrolls, matching the source's `jquery.sticky` + `.is-sticky` behaviour.

#### Scenario: Header sticks with the gradient, not a white bar

- **GIVEN** the page is scrolled to 1,400 px
- **WHEN** the header is inspected
- **THEN** it SHALL be `position:fixed; top:0` and **56 px** tall
- **AND** its visible fill SHALL be the `#62bdfc → #8490ff` gradient (the source sets `background-color:#fff` but its gradient `background-image` paints over it — reproduce the painted result, not the declared colour)
- **AND** the five nav labels SHALL stay white 14 px/600 uppercase at **20 px** padding and remain readable (measured contrast identical to the source)

#### Scenario: Mobile menu

- **GIVEN** a 390 px viewport
- **WHEN** the menu toggle is activated
- **THEN** the nav SHALL expand to a **≈327 px** panel with 15 px vertical item padding
- **AND** `aria-expanded` SHALL flip and every label SHALL stay white on the hero gradient
- **AND** the panel SHALL close on `Escape` and on selecting an item, returning focus to the toggle

### Requirement: Services band with four illustrated cards

Paperline SHALL render a centred title block and four service cards in a 2×2
grid, each with a flat illustration, a title link and a blurb.

#### Scenario: Services grid at 1440

- **GIVEN** the services band is in view at 1440
- **WHEN** it is measured
- **THEN** the band SHALL be **864 px** tall with **120 px** top and bottom padding
- **AND** the heading SHALL be **36 px/600 `#222222`** with a **14 px/300 `#777777`** subtitle 10 px below it
- **AND** the four cards SHALL be two 570 px columns and **216 px** tall each, icon block **60 px** high
- **AND** each title SHALL be **18 px/600** near-black, each blurb 14 px/300 `#777777`

#### Scenario: Title hover highlight

- **GIVEN** a service title in the idle state
- **WHEN** it is hovered
- **THEN** its background SHALL switch to the `#62bdfc → #8490ff` gradient (the source's `.single-service a:hover`)
- **AND** the label SHALL remain legible against the gradient

#### Scenario: Placeholder marks instead of copied illustrations

- **GIVEN** the source's four PNG illustrations (browser, typewriter, CMYK rosette, thumbs-up)
- **WHEN** the cards are built
- **THEN** no source asset SHALL be copied; the recreation SHALL use icons from `lucide-react` (a monitor, a typewriter/keyboard, a palette or layers, a thumbs-up) at the same **≈60 px** optical size
- **AND** each icon SHALL keep the source's flat multi-colour treatment or a documented monochrome substitute

### Requirement: About band with the skill bars and the résumé card

Paperline SHALL render the About band on `#f9f9ff` with a five-bar skills
column on the left and a white résumé card on the right.

#### Scenario: Skills column

- **GIVEN** the About band is in view at 1440
- **WHEN** the left column is measured
- **THEN** the band SHALL be **1,012 px** tall on **`#f9f9ff`**
- **AND** each of the five bars SHALL show a right-aligned **14 px/400 `#777777`** label with `margin-bottom:10px` above a **540×16** track (white, 1 px `#bababa`, **radius 10 px**, 2 px padding) containing a **10 px** gradient fill
- **AND** the widths SHALL be **85 / 80 / 40 / 70 / 75 %** (After Effects, Photoshop, Illustrator, Sublime, Sketch), static — no animation in the source

#### Scenario: Résumé card

- **GIVEN** the right column is measured
- **WHEN** the card renders
- **THEN** it SHALL be **458×610** with a **458×340** photo and a **35 px** padded centred description
- **AND** it SHALL show the name (18 px/600), the role, a phone line, an e-mail line, and a **192×49** "Hire Me" pill at **radius 25 px** filled with the gradient
- **AND** the pill SHALL invert to transparent with a 1 px dark border on hover (the source's `.talk-btn:hover`)

### Requirement: Qualifications band with experience and education columns

Paperline SHALL render the qualifications band as two centred columns —
experience on the left (two entries) and education on the right (three
entries) — separated by hairline rules.

#### Scenario: Two columns, five entries

- **GIVEN** the band is in view at 1440
- **WHEN** it is measured
- **THEN** the band SHALL be **735 px** tall with **100 px** top and **80 px** bottom padding
- **AND** each entry SHALL be centred with **30 px** vertical padding
- **AND** experience SHALL read Spondonit (July 2015 to Present, Creative Content Developer) and Codepixar (May 2013 to Present, UI/UX Designer) with **24 px/600 uppercase** company names
- **AND** education SHALL list Masters in Graphics & Fine Arts (2010-11, 3.78), Bachelor in Graphics & UI/UX (2006-09, 3.40) and Diploma in Fine Arts & Printing (2003-06, 4.94) with bold "Session"/"Result" labels
- **AND** the dividers SHALL be **1 px `#ddd` at 70 % width**, centred, between entries (two on the right)

### Requirement: Projects band with the staggered mosaic

Paperline SHALL render four project entries in a two-column staggered mosaic
whose left column puts the image first and whose right column puts the image
last.

#### Scenario: Mosaic order and geometry

- **GIVEN** the projects band is in view at 1440
- **WHEN** each entry is inspected
- **THEN** the band SHALL be **1,633 px** tall on **`#f9f9ff`**
- **AND** left entries SHALL render image (540×330) → title → blurb with a **100 px** bottom gap, right entries SHALL render title → blurb → image
- **AND** every title SHALL be 18 px/600 near-black and every blurb 14 px/300 `#777777`
- **AND** images SHALL scale to **0.9** on hover (the source's `transform:scale(.9)`), not zoom in

### Requirement: Features band with six hover cards

Paperline SHALL render six feature cards in a 3×2 grid on `#f9f9ff` tiles that
flip to the gradient with white text on hover.

#### Scenario: Feature grid and hover

- **GIVEN** the features band is in view at 1440
- **WHEN** a card is measured
- **THEN** the band SHALL be **634 px** tall with **100 px** top padding and **no** bottom padding
- **AND** each card SHALL be **≈350×171** with **30 px 30 px 15 px** padding on **`#f9f9ff`**, square corners, no shadow
- **AND** each card SHALL show a 20 px icon + 18 px/600 title on one row, then a 14 px/300 blurb
- **AND** on hover the card background SHALL become the gradient and the title, icon and blurb SHALL turn white

### Requirement: Contact band with the four-field form

Paperline SHALL render the contact band with a centred title and a two-column
form (name / e-mail / subject on the left, message + submit on the right).

#### Scenario: Form fields match the source

- **GIVEN** the contact band is in view at 1440
- **WHEN** the form is inspected
- **THEN** the band SHALL be **672 px** tall with **120 px** padding
- **AND** the fields SHALL be **540×47** with **15 px** padding, **12 px** Poppins text, white fill, a 1 px `rgba(0,0,0,.15)` border and **0 radius**
- **AND** the placeholders SHALL read "Enter your name", "Enter email address", "Enter your subject" and a message area **540×180**
- **AND** the submit SHALL be **193×44**, gradient fill, **radius 25 px**, `14 px/500` white "Send Message" with the arrow glyph inset **30 px** from the right, moving to **20 px** on hover

#### Scenario: Validation and submit feedback

- **GIVEN** an empty form
- **WHEN** submit is pressed
- **THEN** the browser-level `required` constraints SHALL block it and the invalid field SHALL receive focus
- **AND** the e-mail field SHALL enforce the source's pattern `[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$`
- **AND** a valid submit SHALL show a success message in the existing feedback slot without any network request

### Requirement: Footer with three widgets and the Component Dock credit

Paperline SHALL close the page with the dark footer carrying the About,
Newsletter and Follow Us widgets.

#### Scenario: Footer at 1440

- **GIVEN** the footer is in view at 1440
- **WHEN** it is measured
- **THEN** the footer SHALL be **432 px** tall on **`#222222`** with **100 px** top and **120 px** bottom padding
- **AND** the three widgets SHALL occupy 5 / 5 / 2 of 12 columns
- **AND** each widget title SHALL be **18 px/600 white** and each paragraph 14 px/300 `#777777`
- **AND** the newsletter input SHALL be **≈304×37** on **`#191919`** with a **40×37** gradient arrow button flush to its right edge
- **AND** the four social icons SHALL be `#cccccc`, turning gradient-filled on hover
- **AND** the copyright line SHALL render the current year at runtime and carry the "Component Dock" link

### Requirement: Responsive behaviour, motion and accessibility

Paperline SHALL reflow cleanly at 1440 / 1199 / 991 / 800 / 414 / 390 and
SHALL honour reduced-motion preferences.

#### Scenario: No horizontal overflow at any breakpoint

- **GIVEN** viewports of 1440, 1199, 991, 800, 414 and 390 px
- **WHEN** the page is rendered
- **THEN** `document.documentElement.scrollWidth` SHALL equal `clientWidth` at every width
- **AND** the hero copy SHALL centre below 991 px with the `<br>` line breaks dropped, as the source does
- **AND** the portrait SHALL cap at 40 % width below 800 px

#### Scenario: Keyboard and screen-reader access

- **GIVEN** keyboard-only navigation
- **WHEN** the page is traversed
- **THEN** every interactive element SHALL be reachable in DOM order with a visible focus ring
- **AND** the icon-only social links SHALL carry `aria-label`s
- **AND** the decorative illustrations SHALL use empty `alt`/`aria-hidden`

#### Scenario: Reduced motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** the page is used
- **THEN** the smooth-scroll animation SHALL become an instant jump and hover transitions SHALL be disabled

## Verification checklist

- [ ] `apps/paperline` exists, package `@free-react-templates/paperline`,
      `homepage` and `public/CNAME` = `paperline.free.componentdock.com`
- [ ] Eight bands in source order; one hero `h1`; document height ≈6,897 px at
      1440 (±5 %)
- [ ] Hero band **915 px** with `linear-gradient(0deg,#62bdfc,#8490ff)`;
      portrait 546×767 at (150,148), masked into the gradient
- [ ] Hero `h1` 36 px weight 100 with the 700-uppercase middle line; 40 px and
      centred at 390
- [ ] Hero CTA 165×38, radius 20, white fill, 8 px 40 px, uppercase 14/600
- [ ] Header absolute at 0 px, fixed + **gradient** bar when scrolled (not a
      white bar); 56 px tall; white 14/600 uppercase labels at 20 px padding
- [ ] Mobile menu opens ~327 px, white labels, `aria-expanded`, closes on
      Escape with focus return
- [ ] Services: 864 px band, 2×2 of 570 px cards, 60 px marks, gradient title
      hover
- [ ] About: `#f9f9ff`, five static bars 85/80/40/70/75 %, 540×16 tracks with
      10 px gradient fills; 458×610 résumé card with 192×49 gradient pill
- [ ] Qualifications: 735 px band, 2 + 3 entries, 30 px entry padding,
      1 px `#ddd` rules at 70 % width
- [ ] Projects: `#f9f9ff`, 1,633 px band, staggered image-first /
      image-last order, `scale(.9)` image hover
- [ ] Features: six 350×171 `#f9f9ff` cards, 30/30/15 padding, gradient +
      white hover
- [ ] Contact: 540×47 fields (12 px text, 15 px padding, 0 radius), 540×180
      textarea, 193×44 gradient submit with the arrow inset 30 → 20 px
- [ ] Contact submit validated (required + e-mail pattern) with a local success
      message and **no** network call
- [ ] Footer: `#222222`, 432 px, 5/5/2 widgets, `#191919` field, 40×37 gradient
      arrow, `#cccccc` socials, runtime year, Component Dock credit link
- [ ] `scrollWidth === clientWidth` at 1440 / 1199 / 991 / 800 / 414 / 390
- [ ] Zero dead `href="#"` anchors (the source has 21; the recreation has none)
- [ ] `prefers-reduced-motion` disables smooth scroll and hover transitions
- [ ] No `colorlib`/`preview.colorlib.com` string in `apps/paperline` (source or
      bundle); Poppins 100/300/400/500/600/700 loaded via Google Fonts
      (`css2?family=Poppins:wght@100;300;400;500;600;700&display=swap` → 200)
- [ ] `openspec validate template-paperline --type spec` passes
- [ ] `scripts/verify-app.sh paperline` green (typecheck, lint, 100 % coverage,
      build)
- [ ] Rows 2422 / 2724 flipped to `[x]` with the
      `paperline.free.componentdock.com` link **after** merge (implementer's job)

# Upstart (ColorLib Started) — Design Notes

> Replication research for **Upstart** (NEW name) — recreation of ColorLib
> **Started** (slug `started`). Research done 2026-09-30 by the prep
> stream; implementers should not need to re-fetch the preview.

## Source mapping

- **ColorLib item:** "Started" (TEMPLATES.md line 2862). Slug `started`
  appears exactly ONCE in TEMPLATES.md — distinct from "Thestartup"
  (line 2865, already prepped under other names). Category: startup /
  design-agency one-pager.
- **Source URL:** https://colorlib.com/wp/template/started/
- **Preview URL — REACHABLE (verified 2026-09-30 by direct fetch):**
  **`https://preview.colorlib.com/theme/started/`**
  (HTTP 200, 17,941 bytes, `<title>Started &mdash; Colorlib Website
  Template</title>`).
- **Preview CSS:** `css/style.css` (14,223 bytes, hand-written template
  block — carries BOTH font families and every token below) +
  `css/bootstrap.min.css` (base grid/utilities only; the body font rule
  is in style.css, NOT bootstrap — unusual for these templates, verified
  in the fetched file). Supporting source CSS (jquery.fancybox,
  jquery-ui, owl.carousel, animate, aos) only serves jQuery behaviors —
  reimplement in React, do not ship.
- **Source scripts:** jQuery + fancybox + owl + aos. The HOME page has
  NO slider/lightbox behavior — only the mobile off-canvas menu and the
  nav dropdown are interactive. Reimplement both with React state; do
  not ship jQuery.
- **Icons:** flaticon SVG images (`images/flaticon/svg/001.svg`,
  `002.svg`, `003.svg` — indigo outline glyphs) for the 3 service icons;
  icomoon glyph font (`icon-menu`, `icon-close2`, `icon-facebook`,
  `icon-twitter`, …) for hamburger/social. — REPLACE with lucide-react
  (Smartphone, ShoppingCart, MonitorCheck for services; Menu, X,
  ChevronDown; Facebook, Twitter, Instagram, Linkedin, Youtube), tinted
  `#434ba4` for services, `#ccc` for footer socials. Do not ship icon
  fonts or flaticon assets.
- **Fonts:** **Oswald** — `h1, h2, h3, h5, .site-logo`; weights 400/500/
  700 (source loads 200–700; 400/500/700 suffice — logo 700, hero quote
  400, section headings 500/700 as needed). **Roboto Mono** 400 — body
  copy, nav links, service lists, footer (1rem / line-height 1.7 /
  `#999999`). Load via Google Fonts `<link>` in `index.html`.
- **Assets (all placeholder — never copy source files):**
  - hero band `images/hero_2.jpg` (design-book product photo, 500px
    cover) → `https://picsum.photos/seed/upstart-hero/1920/500`
  - case studies `images/work_1.jpg`, `work_2.jpg` →
    `picsum.photos/seed/upstart-work-1/960/700`, `.../upstart-work-2/960/700`
  - avatars `images/person_1.jpg` (hero author + testimonial 1),
    `person_2.jpg`, `person_3.jpg` →
    `picsum.photos/seed/upstart-person-1/160/160` (etc., round crops)
- **Naming check:** "upstart" collides with nothing in `apps/`,
  `openspec/specs/`, or `docs/templates/` (verified 2026-09-30); not a
  ColorLib source name.

## Screenshot analysis (`started-free-template.jpg`, 1200x946,
2026-09-30)

Minimalist white-page design studio / startup site. Screenshot shows the
viewport top:

- **Navbar** (white): bold black wordmark "Started" left; right-aligned
  gray menu HOME / PORTFOLIO / SERVICES ▾ / ABOUT / CONTACT (monospace
  letterforms, .05em tracking).
- **Hero**: large black Oswald pull-quote top-left with an oversized
  `”` glyph — "Design is not just what it looks like and feels like.
  Design is how it works." — author row below: small round avatar +
  "Steve Jobs". The quote overlaps the top of a wide light-gray photo
  band showing a design book ("Dieter Rams: As Little Design as
  Possible") lying at an angle. Right side: white card with 2px black
  border — bold "We're Available For Work" heading, monospace lorem
  blurb, black "Hire Us Now" button flush at the card's bottom-left
  corner.
- **Services row**: three centered columns on white — indigo outline
  icons (phone / storefront / browser window), black titles "Mobile
  Application", "E-Commerce", "Web Application", muted monospace blurbs,
  centered black capability lists (Android/iOS/React Native ·
  WooCommerce/Shopify/BigCommerce · React/Vue/Angular).
- **Below**: a light-gray band begins with a dark product photo left and
  the large black heading "kMix Design" right (first case-study row).
  Footer not visible in the crop; DOM confirms 4-widget white footer.

Everything matches the live DOM + `style.css` (tokens below canonical).

## Live DOM structure (verbatim skeleton)

```
div.site-wrap
  div.site-mobile-menu (off-canvas: header + wordmark + close X + body links)
  div.site-navbar
    div.container → div.site-logo "Started" (Oswald 700)
                  + nav.site-navigation.text-right
                    ul.site-menu
                      li "Home" (active)
                      li "Portfolio"
                      li.has-children "Services" → ul.dropdown.arrow-top
                          li "Web Design" · "WP Development" · "Front End"
                          li.has-children "Sub Menu" → (nested)
                      li "About" · li "Contact"
  main
    div.site-hero (margin-top: 10rem)
      div.container
        div.bg-img (background-image hero_2.jpg, height 500px, cover)
          blockquote
            p "Design is not just what it looks like and feels like. Design is how it works."
            div.author → img person_1.jpg (50px, radius 50%) + cite "Steve Jobs"
          div.cta-box (absolute right 8%, max-width 300px, border 2px solid #000, padding 30px 30px 70px)
            h2 "We're Available For Work"
            p (lorem)
            a.contact-now "Hire Us Now" (absolute bottom-left, bg #000, color #fff, padding 10px 20px)
    div.site-section (services; padding 3em 0; white)
      div.container → div.row
        div.col-6.col-md-6.col-lg-4 → a.service (text-center, padding 20px)
            img flaticon/svg/001.svg (60px) · h3 "Mobile Application" · p (lorem)
            ul.services-list → "Andriod Development" · "iOS Development" · "React Native"
        (×3: 002.svg "E-Commerce" — WooCommerce / Shopify Integration / BigCommerce;
              003.svg "Web Application" — React Web App / Vue JS Web App / Angular Web App)
    div.site-section (work; bg #f8f9fa)
      div.container
        div.half.d-md-flex.d-block.align-items-stretch (min-height 500px)
          a.img (work_1.jpg, 50% width, cover; FIRST = image LEFT)
          div.half-content.align-self-center (padding 40px)
            h3 "kMix Design" (40px, black)
            p (lorem)
            p → "Client:" JUVINLE Corp. · "Date:" 2020
            a "View Case Study"
        div.half.d-md-flex.align-items-stretch
          a.img.order-md-2 (work_2.jpg; order-md-2 = image RIGHT)
          div.half-content.align-self-center
            h3 "Dieter Rams" · p (lorem) · "Client:" XYZ Inc. · "Date:" 2019 · a "View Case Study"
    div.site-section (testimonials; white)
      div.container → div.row
        div.col-6.col-md-6.col-lg-4 → div.testimonial
            img person_N.jpg (80px, radius 50%)
            div → h3 "Steve Jobs" / "John Doe" / "John Smith" + span "Co-Founder"
            blockquote "&ldquo;lorem&rdquo;"
  div.footer (white, padding 7rem 0, font-size 14px)
    div.container → div.row.footer-inner
      col-lg-3 → div.widget h3 "About Us" + p (rgba(0,0,0,0.5) lorem)
      col-lg-3 → div.widget h3 "Navigation" ul.links → Home · Services · About · Contact
      col-lg-3 → div.widget h3 "Work" ul.links → Dieter Rams · kMix Design
      col-lg-3 → div.widget h3 "Social" ul.social → Facebook · Twitter · Instagram · Linkedin · Youtube (icon spans #ccc)
    div.copyright (text-center, black) "Copyright © All rights reserved | This template is made with ♥ by Colorlib"
      → REPLACE attribution with Component Dock link
```

## CSS token extract (`css/style.css`, canonical values)

```
body { font-family: 'Roboto Mono', monospace; font-size: 1rem;
       line-height: 1.7; font-weight: 400; color: #999999; }
h1, h2, h3, h5, .site-logo { font-family: 'Oswald', sans-serif; }
.site-navbar .site-logo a { font-size: 25px; font-weight: 700; color: #000; }
.site-menu > li > a { letter-spacing: .05em; color: rgba(0,0,0,0.6); }
.site-menu > li > a:hover { color: #434ba4; }
.site-menu .active > a { color: #000; }
.dropdown a { color: #000; } .dropdown .active > a,
.dropdown a:hover { color: #434ba4; }        /* white panel, arrow-top caret */
.site-hero { margin-top: 10rem; }
.site-hero .bg-img { height: 500px; background-size: cover; center center; }
.site-hero blockquote { position: absolute; top: 0; left: 8%;
  max-width: 500px; margin-top: -100px; line-height: 1.0;
  color: #000; font-family: 'Oswald', sans-serif; }
.site-hero blockquote:before { content: "”"; font-size: 4rem;
  position: absolute; left: -40px; }
.site-hero blockquote > p { font-size: 3rem; }
.site-hero blockquote .author img { width: 50px; border-radius: 50%; margin-right: 10px; }
.site-hero .cta-box { position: absolute; right: 8%; max-width: 300px;
  margin-top: -100px; padding: 30px 30px 70px 30px;
  border: 2px solid #000; color: #000; background: #fff; }
.site-hero .cta-box h2 { font-size: 26px; margin-bottom: 30px; }
.site-hero .cta-box .contact-now { position: absolute; bottom: 0; left: 0;
  padding: 10px 20px; color: #fff; background: #000; }
.site-section { padding: 3em 0; }
.service { text-align: center; padding: 20px; }
.service img { width: 60px !important; margin-bottom: 30px; }   /* icons → lucide 60px #434ba4 */
.service h3 { color: #000; font-size: 20px; margin-bottom: 10px; }
.service .services-list li { color: #000; }
.half { margin-bottom: 50px; min-height: 500px; }
.half .img, .half .half-content { width: 50%; }
.half .img { background-size: cover; center center; }            /* row 2: order-md-2 → right */
.half .half-content { padding: 40px; }
.half .half-content h3 { font-size: 40px; color: #000; margin-bottom: 30px; }
.work band background: #f8f9fa (verified in screenshot; section sits on the gray band)
.testimonial img { width: 80px; border-radius: 50%; margin-bottom: 30px; }
.testimonial h3 { font-size: 20px; color: #000; }
.footer { font-size: 14px; padding: 7rem 0; }
.widget h3 { font-size: 20px; color: #000; margin-bottom: 20px; }
.widget p { color: rgba(0,0,0,0.5); }
.widget .links li { margin-bottom: 15px; } .widget .links li a { color: #000; }
.widget .social icon spans { color: #ccc; }
.copyright { color: #000; }
.site-mobile-menu a:hover { color: #434ba4; }  /* off-canvas: translateX slide-in */
```

## Section-by-section fidelity notes

1. **Navbar** — wordmark "Started" is OUR brand text in Oswald 700 (do
   NOT recreate the source logo asset). Desktop: right-aligned menu,
   Services dropdown with 3 items + nested "Sub Menu" (chevron). Mobile:
   hamburger → off-canvas panel sliding from the right (wordmark + close
   X + stacked links, 20px padding, 20px font). Hover/focus anywhere →
   `#434ba4`.
2. **Hero** — the signature layout: quote overlaps photo top-left
   (absolute, −100px margin-top on both overlays), photo band 500px
   cover. The `”` glyph hangs left of the quote (−40px). cta-box
   overlaps photo top-right with the button flush at bottom-left of the
   card (bottom padding 70px reserves the space). Paraphrase copy is
   fine — keep the quote/author/heading/blurb/button KINDS.
3. **Services** — exactly 3 columns, centered, 60px icons tinted
   `#434ba4`; list items black, no bullets visible in screenshot
   (plain centered lines). Keep the "Andriod" typo out — "Android
   Development" is acceptable per replication.md paraphrase rules.
4. **Work** — gray `#f8f9fa` band, two alternating 50/50 rows (image
   left → image right via `order-md-2` semantics). Meta lines "Client:"
   / "Date:" are bold labels + values on separate lines; "View Case
   Study" is a plain text link (black). Images: cover, min-height
   500px rows.
5. **Testimonials** — 3-up; quote marks are part of the blockquote text
   in source (`&ldquo;…&rdquo;`); role line is a plain muted span
   under the name.
6. **Footer** — WHITE footer (unlike most ColorLib templates — do not
   darken it). Generous 7rem vertical padding, 4 equal widgets, then a
   centered copyright bar. Replace "made with ♥ by Colorlib" with the
   Component Dock line + https://www.componentdock.com/ link. Footer
   links are plain black; hover → `#434ba4` for consistency with nav.
7. **Out of scope** — Portfolio/About/Contact pages, "View Case Study"
   single pages, "Sub Menu" dropdown children beyond one level. Keep all
   such links as `#` anchors on the single-page home recreation.

## Naming rationale

**Upstart** — a new early-stage venture; single lowercase word; distinct
from the source name "Started" and from "Thestartup" (a different
ColorLib item, already prepped elsewhere). Verified zero collisions in
`apps/`, `openspec/specs/`, `docs/templates/` on 2026-09-30.

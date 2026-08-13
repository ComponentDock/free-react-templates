# Fiscal (ColorLib Financier) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-fiscal`.

## Source mapping

- **ColorLib item:** "Financier" (TEMPLATES.md — appears 3×: lines 581,
  1381, 1752; all three rows point to the same source, one prep covers all;
  verified with `grep -c 'wp/template/financier/'` = 3).
- **Source URL:** https://colorlib.com/wp/template/financier/
- **Preview URL:** https://preview.colorlib.com/theme/financier/ — **HTTP 200,
  live** (confirmed 2026-08-13, ~26 KB HTML + live browser render). Do not
  redo this lookup.
- **Preview CSS:** https://preview.colorlib.com/theme/financier/css/style.css
  (~60.8 KB — Bootstrap 5.2 compiled with theme overrides appended) + vendor
  sheets (tiny-slider, AOS, glightbox, flatpickr) + icon fonts (icomoon,
  flaticon). Site is jQuery + tiny-slider + AOS + glightbox — NOT Tailwind.

## Reference research (done — do not redo)

### Screenshot (`financier-free-templatel.jpg`, 1200×946; verified via browser vision)

Hero with a left-to-right blue → cyan gradient, white bold headline "We Help
Grow Your Business", white subtext, a solid blue pill "Contact us" button and
a "Watch the video" link; right side a photo of a professional woman at a
desk (rounded-corner image). Transparent navbar over the hero: "Financier"
logo in white, centered links (Home, Solutions, Services, About, Contact Us),
phone "123-489-9381" with a phone icon at the right. Below the fold: white
services area with three columns (light blue icons, "On Time Service"
headings) and an "OUR SERVICES" section heading in blue uppercase. Clean
corporate-SaaS aesthetic: white sections, light-gray alternating bands,
single bright-blue accent + blue gradient.

### Live DOM (primary reference — section order verified against fetched HTML, parsed CSS, and live render)

1. **Navbar** `nav.site-nav`
   - Transparent, `position: absolute; top: 40px; z-index: 9; width: 100%`,
     floats over the hero; `.site-nav h1/.h1` 24px.
   - Brand: `<a class="logo">Financier<span>.</span></a>` white Work Sans →
     recreate as "Fiscal.".
   - `ul.site-menu` links 14px rgba(255,255,255,.7) → white hover/active:
     Home, Solutions (`.has-children` dropdown: Menu One, Menu Two,
     Dropdown → Sub Menu One / Two / Three), Services, About, Contact Us.
   - Right: `<a><span class="icon-phone"></span> 123-489-9381</a>` (white).
   - Mobile: `div.site-mobile-menu` full-screen overlay panel + close button
     (`site-mobile-menu-close`); `.menu-bg-wrap` background.
2. **Hero** `div.hero.overlay`
   - `height: 100vh; min-height: 780px` (auto + 4rem padding < 992px).
   - Background: `linear-gradient(to right, #4facfe 0%, #00f2fe 100%)`;
     `.hero.overlay:before` (rgba(0,0,0,.4)) has `display: none`.
   - `div.row.align-items-center.justify-content-between`:
     - Left `div.col-lg-5`: `h1.heading.text-white.mb-3` (50px/700; 40px
       < 992px) "We Help Grow Your Business" — **rendered WHITE** (base
       rule `.hero .heading { color:#000 }` is overridden by the
       `text-white` utility; the live render wins); `p.text-white.mb-5.w-75`
       Blind-Text copy; `a.btn.btn-primary.me-4` "Contact us" + glightbox
       link "Watch the video" (href youtube.com/watch?v=mwtbEGNABWU&t=12s).
     - Right `div.img-wrap`: hero photo (img_6.jpg; shadow
       `0 15px 30px rgba(0,0,0,.1)`).
3. **Services** `section.section.sec-services`
   - `.section` padding 7rem 0; centered `h2.heading` "Our Services"
     (`text-transform: uppercase; font-size: 30px; font-weight: bold`) +
     lead paragraph.
   - Grid of 6 `div.service` cards: `padding: 40px; background: #fff;
box-shadow: 0 10px 30px rgba(0,0,0,.05); margin-bottom: 50px`.
     - Icon: `[class^="flaticon-"]` 50px, circle bg = gradient
       `#4facfe → #00f2fe` via `:before`.
     - `h3` 18px #000 "On Time Service" + Blind-Text paragraph +
       `a.btn.btn-outline-primary.py-2.px-4` "Read more".
4. **CTA band** `section.section.sec-cta.overlay`
   - `background-size: cover; background-position: 100% center;` inline bg
     image `images/img_4.jpg`; `:before` overlay `rgba(0,0,0,.5)`.
   - White `h2.heading` "Wanna Talk To Us?" (uppercase) + white paragraph +
     `a.btn.btn-primary` "Contact us".
5. **Portfolio** `section.section.sec-portfolio.bg-light.pb-5`
   - Centered uppercase heading "Our Portfolio" + lead paragraph.
   - `div.post-slider` (tiny-slider, `data-aos=fade-up`): 5+ `div.post-entry`
     slides — image + `h5` caption "Behind the word mountains" + paragraph.
   - Prev/Next `a.btn.btn-primary.py-2`; tns dots 7px circles, active =
     #0099e5.
6. **Testimonials** `section.section.sec-testimonial.bg-light`
   - Centered uppercase heading "Testimonials" + longer lead paragraph.
   - `div.testimonial-slider` (tiny-slider): 3 `div.testimonial-half.d-lg-
flex.bg-white` slides, each 50/50: `.img` cover-photo half + `.text`
     half `padding: 90px` (30px < 992px): `blockquote p` 18px 'Georgia'
     serif italic #000 + `.author` "John Campbell" + span "CEO &
     Co-founder"; tns dots.
7. **News** `section.section.sec-news`
   - Centered uppercase heading "Latest News" + lead paragraph (white bg).
   - `div.post-slider-wrap` (tiny-slider) of 3 `div.post-entry` cards:
     `img.card-img-top`, `.date` "Jan 20, 2021" (uppercase,
     `letter-spacing: .05rem`), `h5` title link "Behind the word mountains",
     paragraph, "Read more" link (h5 hover → #0099e5 underline).
8. **Footer** `footer.site-footer`
   - `background: #efefef; font-size: 14px; color: #888; padding: 70px 0`.
   - 3 `div.col-lg-4` widgets, h3 12px/700/uppercase #0099e5, links #777
     (hover #000 + blue underline `a:before`):
     - "Contact": `<address>` 43 Raymouth Rd. Baltemoer, London 3910 +
       `ul.links`: tel:+1(123)-456-7890 ×2, mailto:info@mydomain.com — each
       li carries a 44px #0099e5 circle icon (`.contact-info i`).
     - "Sources": two `ul.float-start.links` × 6 (About us, Services,
       Vision, Mission, Terms, Privacy / Partners, Business, Careers, Blog,
       FAQ, Creative).
     - "Links": 3 links (Our Vision, About us, Contact us) + `ul.social`: 6
       circular icons (40px, bg #ccc, border-radius 40%, hover → #0099e5
       white): icon-instagram, icon-twitter, icon-facebook, icon-linkedin,
       icon-pinterest, icon-dribbble.
   - Bottom bar `div.row.mt-5` col-12 text-center: "Copyright © <year> All
     rights reserved | This template is made with <heart> by ColorLib" →
     replace with Component Dock attribution.

## Design tokens (from CSS — verified in stylesheet)

| Token        | Value                                                                 | Used on                                                                                                          |
| ------------ | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| primary      | `#0099e5`                                                             | links, btn-primary bg, outline-btn text, footer h3, contact-info icons, social hover, tns dots, post title hover |
| gradient     | `#4facfe → #00f2fe`                                                   | hero bg, service icon circles                                                                                    |
| secondary    | `#52565e`                                                             | --bs-secondary                                                                                                   |
| ink          | `#212529` / `#000`                                                    | body text; service h3; blockquote                                                                                |
| muted        | `#6c757d`                                                             | lead copy                                                                                                        |
| light        | `#f8f9fa` / `#fafafa`                                                 | portfolio + testimonial bg; features bg                                                                          |
| footer       | `#efefef` bg, `#888` text, `#ccc` social                              | footer                                                                                                           |
| overlay      | `rgba(0,0,0,.5)`                                                      | CTA band                                                                                                         |
| font-heading | Work Sans                                                             | h1–h6, logo                                                                                                      |
| font-body    | Roboto                                                                | body                                                                                                             |
| font-quote   | Georgia (italic)                                                      | testimonial blockquote                                                                                           |
| button       | padding 10px 30px, radius 30px, 14px, .3s transition                  | all .btn                                                                                                         |
| shadow       | 0 10px 30px rgba(0,0,0,.05) card; 0 15px 30px rgba(0,0,0,.1) hero img | services, hero                                                                                                   |

## Implementation task outline

1. Scaffold `apps/fiscal` from the simplest existing app (copy + rename
   package to `@free-react-templates/fiscal`); `npm install` at root so the
   lockfile registers the workspace; set `public/CNAME` = `fiscal.free.
componentdock.com` and homepage `https://fiscal.free.componentdock.com`.
2. `@theme` tokens: brand (#0099e5), gradient stops (#4facfe, #00f2fe),
   secondary, muted, light band, footer colors; font families Work Sans
   (headings) + Roboto (body) via Google Fonts link in `index.html`.
3. Components (one per section, colocated tests, TDD, 100% coverage):
   - `Navbar` — transparent absolute top, white links, Solutions dropdown
     (nested), phone block, mobile slide-over (state + aria-expanded,
     Escape/outside-click close).
   - `Hero` — gradient bg, white 50px h1, w-75 subtext, primary pill +
     video link (target=_blank), right image.
   - `Services` — uppercase heading + 6 cards (gradient icon circle, h3,
     copy, outline pill Read more).
   - `CtaBand` — bg image + rgba(0,0,0,.5) overlay, white heading/copy,
     primary pill.
   - `Portfolio` — bg-light, state carousel, Prev/Next pills, dots,
     caption slides (fiscal-2..6 picsum seeds).
   - `Testimonials` — bg-light, carousel of 3 split slides (photo half +
     90px-padded quote half, Georgia italic, author/role).
   - `News` — carousel of 3 post cards (image, uppercase spaced date,
     title link, excerpt, Read more).
   - `Footer` — 3 widgets + social circles + copyright bar with Component
     Dock link.
4. `App.tsx` composes all sections; title "Fiscal — Finance Template".
5. Verify: `npm run verify:app -- fiscal`; then PR
   `feat/template-fiscal` → squash merge to main.

## Fidelity pitfalls (learned during prep)

- **Hero heading color:** base CSS says `#000`, but the markup's `text-white`
  utility wins in the live render — implement WHITE. The screenshot also
  shows white.
- Section headings render UPPERCASE via `text-transform` — use `uppercase`
  class, keep copy in sentence case.
- Nav dropdown + mobile menu markup appear twice in the DOM (desktop +
  mobile) — the visible one is the `.site-nav` absolute nav.
- `style.css` = Bootstrap compiled + custom theme appended; custom rules
  (`.hero`, `.service`, `.sec-cta`, `.testimonial-half`, `.site-footer`,
  `.post-entry`) are in the appended section.
- Footer copyright has an inline `document.write(year)` — use
  `new Date().getFullYear()` in React.
- No ColorLib strings in app code; footer attribution → Component Dock.

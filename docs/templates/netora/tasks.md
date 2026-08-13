# Netora (ColorLib Itlock) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-netora`.

## Source mapping

- **ColorLib item:** "Itlock" (TEMPLATES.md — appears 2×: lines 592 and
  1064; both rows point to the same source, one prep covers all; verified
  with `grep -c 'wp/template/itlock/'` = 2).
- **Source URL:** https://colorlib.com/wp/template/itlock/
- **Preview URL:** https://preview.colorlib.com/theme/itlock/ — **HTTP 200,
  live** (confirmed 2026-08-13, ~27 KB HTML; screenshot browsed visually
  too). Do not redo this lookup.
- **Preview CSS:** https://preview.colorlib.com/theme/itlock/assets/css/style.css
  (~72 KB, parsed for tokens) — also imports bootstrap.min.css,
  owl.carousel.min.css, slick.css, slicknav.css, animate.min.css,
  magnific-popup.css, fontawesome-all.min.css, themify-icons.css,
  nice-select.css (all assets/css/). Site is jQuery + Bootstrap + slick/owl
  carousels — **NOT Tailwind**. Fonts: "Fira Sans" (headings) + "Rubik"
  (body/buttons) — add Google Fonts `<link>`s in index.html; do NOT copy
  font files.

## Reference research (done — do not redo)

### Screenshot (`itlock-colorlib-template.jpg`, 1200×946)

Browsed visually in the browser. Corporate tech-blue one-pager: white
two-tier header (top strip with socials + search, then padlock logo +
"ITLOCK" wordmark, centered nav, blue-outline "Free Quote" button + phone
on the right); hero = developer-at-screen photo with heavy blue→cyan
gradient overlay (left 74%), left-aligned white "Best IT Solution in your
city" + white "Find Out More" button; deep-navy "Satisfaction Guaranteed"
band (person-check icon, white heading, "Learn More" button right); then
white/`#f9f9ff` "INDUSTRY WE OFFER" section with 4 flat light-blue-icon
category cards. The live preview DOM + parsed stylesheet are the
authoritative reference; the screenshot confirms palette + layout.

### Design tokens (from `assets/css/style.css`)

| Token          | Value                                                      | Use                                                                          |
| -------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Brand blue     | `#316EC2`                                                  | `.btn` bg, `.btn_01` border+text (+hover fill), section labels, links, icons |
| Navy band      | `#0E1B50`                                                  | `.want-wrapper2` "Satisfaction Guaranteed" band bg                           |
| Navy deep      | `#003072`                                                  | about-area `.wrapper-border` (Insights band), `.cat-cap h5`, footer h4       |
| Navy           | `#1f2b7b`                                                  | blog/case card titles, headings                                              |
| Body text      | `#4C526E`                                                  | paragraphs, blurbs, footer pera                                              |
| On-navy sub    | `#C6C9D9`                                                  | band paragraph text (Satisfaction + Insights)                                |
| Section bg     | `#f9f9ff`                                                  | `.section-bg` categories area                                                |
| Card bg        | `#F3F8FF`                                                  | `.single-cat` industry cards                                                 |
| Testimonial bg | `#EBF0F8`                                                  | `.popular-directorya-area`                                                   |
| Slider bg      | `#F2F4F8`                                                  | `.slider-area`                                                               |
| Border light   | `#D3D5E2`                                                  | header-top border-bottom, footer-border top                                  |
| Stars          | `#f4e700` (yellow)                                         | testimonial `.fa-star` ratings                                               |
| Hero overlay   | horizontal gradient `rgba(0,133,161,0.8)` → deep cyan/blue | `.hero-overly::before` — width 74%, left 0, over hero photo                  |
| Card hover     | `0 20px 30px rgba(35,47,85,0.1)`                           | `.single-cat:hover` shadow                                                   |
| Fonts          | "Fira Sans" (headings) + "Rubik" (body)                    | serif-ish tech headings · geometric body                                     |

Radii: **0 on ALL buttons** (`.btn`, `.btn_01`, `.btn_01.btn_wnat`,
`.hero-btn`, `.visit-btn`, newsletter submit) and **0 on all cards**; 50%
only on back-top scroll button (optional). `.btn` padding 30px 52px
(`visit-btn` 29px 38px), `.btn_01` 10px 34px, `.hero-btn` 27px 34px
(uppercase 14px). h1 72px/500 ls -2.5px; h2 38px/500 ls -2px;
section-tittle p 18px `#4C526E`; footer-tittle h4 20px/400 `#003072`.

## Implementation tasks

1. Scaffold `apps/netora` from the simplest existing app (e.g. `apps/findly`
   or `apps/cura`); rename package to `@free-react-templates/netora`;
   `public/CNAME` = `netora.free.componentdock.com`; `"homepage"` =
   `https://netora.free.componentdock.com`. Footer MUST link
   https://www.componentdock.com/ — no ColorLib mentions in any app file.
2. `@theme` tokens: `--color-brand: #316EC2`, `--color-navy-band:
#0E1B50`, `--color-navy-deep: #003072`, `--color-navy: #1f2b7b`,
   `--color-body: #4C526E`, `--color-on-navy: #C6C9D9`, `--color-section:
#f9f9ff`, `--color-card: #F3F8FF`, `--color-testi: #EBF0F8`,
   `--color-line: #D3D5E2`, `--color-star: #f4e700`; font-heading Fira
   Sans, font-body Rubik (Google Fonts links in index.html).
3. Sections (top → bottom, match 1:1):
   1. Header — top bar: "Now Hiring: ... 1st Line IT Support Engineer?"
      left + socials (FB/X/LinkedIn/YouTube inline SVG) + search field
      right (border-bottom `#D3D5E2`, margin 0 88px). Main bar: "NETORA"
      wordmark (padlock icon → lucide Lock), links Home · About · Services
      · Case Study · Blog (dropdown: Blog, Blog Details, Elements) ·
      Contact; outline "Free Quote" (btn_01 pattern, hover fills blue);
      "Have any Question? Call: 10 (78) 837 3647" with Headphones icon.
      Mobile: hamburger + collapsible menu (getAllByRole indexing in tests
      — mobile menu last).
   2. Hero — 750px, picsum tech/office bg + cyan→blue gradient overlay
      (left 74% — implement as an absolutely-positioned gradient div,
      `linear-gradient(to right, rgba(0,133,161,0.8), rgba(0,52,104,0.8))`);
      h1 72px/500 white "Best IT Solution" + span "in your city";
      subtext; white-outline uppercase "Find Out More". Client-side slide
      state if >1 slide (source: slick slider).
   3. Satisfaction band — `#0E1B50` bg, flex row: person-check icon
      (lucide UserCheck), Fira Sans 30px white "Satisfaction Guaranteed",
      `#C6C9D9` paragraph, white-outline "Learn More" right.
   4. Industry We Offer — bg `#f9f9ff`; centered label "Industry We Offer"
      - h2 "Managed IT services customized for your industry" + subtitle;
        4 cards (bg `#F3F8FF`, padding 50px 25px 33px, radius 0, hover
        shadow): lucide icons Server / ShoppingCart / Plane / Building2,
        20px/500 `#003072` titles (Industries & Manufacturing, Retail &
        Commerce, Logistics & Travel, Finance & Services — source repeats
        one placeholder title; paraphrase per-icon), blurb, "Find Out More"
      - ArrowRight.
   5. About — split: image panel left (picsum office/team), right: label
      "About Us", h2 "Build your amazing website with Netora", 2
      paragraphs, solid blue "Learn More" (visit-btn padding 29px 38px).
   6. Services — centered label "Services" + h2 "We design apps & websites
      that lead in their space" + subtitle; 3 photo cards (picsum):
      Managed IT services / Backup and recovery / Cyber security + blurb +
      "Learn More".
   7. Insights band — bg `#003072` (wrapper-border): white h2 "Insights to
      help you do what you do better, faster and more profitably." + light
      paragraph + white-outline "Learn More" + picsum image beside.
   8. Brand logos — "We work with global brands" + 4 grayscale text/logo
      placeholders in a strip (source: brand1-4.png marquee; use styled
      text logos, no copied assets).
   9. Our Case Study — centered label "Our Case Study" + h2 "We work with
      global brands"; 3 photo cards tagged "Netora" (source "UniCode"):
      Complexities of modern markets / Backup and recovery / Cyber
      security + blurb + "Learn More".
   10. Testimonials — bg `#EBF0F8`; centered label "Testimonial" + h2
       "Love from our client"; carousel (≥2 slides, client-side state):
       h3 "Brilliant work", paraphrased quote, 5 × `#f4e700` stars,
       avatar (picsum), name "Barb Ackuee".
   11. Footer — "Subscribe Newsletter" (h4 `#003072` 20px/400, blurb,
       email input placeholder "Enter your email" + submit arrow/button,
       client-side confirmation), "Quick Links" (My Account, Online
       Catalog, Contact, Terms & Conditions), "Services" (Medium
       Enterprise, Large Enterprise, Education, Government, Health Care),
       "Contact Us" (Support Ticket, FAQ, Contact Us); 4 socials (FB, IG,
       LinkedIn, YouTube inline SVG). Copyright bar (border-top
       `#D3D5E2`): "© 2026 Netora — All rights reserved" + required
       Component Dock link.
4. Images: `https://picsum.photos/seed/netora-<n>/<w>/<h>` everywhere;
   screen seeds with browser_vision (hero should read as a tech/office
   scene for the gradient overlay; testimonial avatar a portrait — use the
   verified portrait IDs from the replication skill, e.g. 1027/64/823).
   Never copy ColorLib assets.
5. TDD: write tests first (header top bar + nav + dropdown + mobile menu,
   hero + overlay + CTA + slide nav, satisfaction band, industry cards +
   hover shadow, about split, services cards, insights band, brand strip,
   case cards, testimonial slider + stars, footer + newsletter + Component
   Dock link, composition), 100% coverage. Desktop + mobile nav duplicates
   with `getAllByRole` indexing; decorative `<img alt="">` strips via
   `container.querySelectorAll('img')`. MemoryStorage polyfill (from
   apps/cura/src/test/setup.ts) only if the app uses localStorage. Probe
   every lucide import with the typeof check (brand glyphs undefined).
6. Verify: `npm run verify:app -- netora`; full gate runs in CI on merge.
7. PR: `feat: Netora — IT solutions template (ColorLib Itlock)`, include
   source URL, preview URL, token list, and what differs (renames, picsum
   placeholders `netora-<n>`, Google Fonts links, lucide icons + inline-
   SVG socials, slick/owl → client-side state, paraphrased copy incl.
   industry card titles, "UniCode" tag → "Netora", tel: literals computed
   at runtime from spaced display strings).
8. Bookkeeping after merge: mark both TEMPLATES.md Itlock rows (lines 592, 1064) `[x]` + `netora` URL + `npm run readme:status`.

## Reference

- Preview HTML: /tmp/itlock.html (27 KB)
- Stylesheet: /tmp/itlock.css (72 KB, parsed for tokens)
- Screenshot: browsed at
  https://colorlib.com/wp/wp-content/uploads/sites/2/itlock-colorlib-template.jpg

# Gardenly (ColorLib Gardening) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-gardenly`.

## Source mapping

- **ColorLib item:** "Gardening" (TEMPLATES.md — appears 3×: lines 587,
  1025, and 2108; all rows point to the same source, one prep covers all;
  verified with `grep -c 'wp/template/gardening/'` = 3).
- **Source URL:** https://colorlib.com/wp/template/gardening/
- **Preview URL:** https://preview.colorlib.com/theme/gardening/ — **HTTP 200,
  live** (confirmed 2026-08-13, ~33 KB HTML; browsed visually too). Do not
  redo this lookup.
- **Preview CSS:** https://preview.colorlib.com/theme/gardening/assets/css/style.css
  (~73.5 KB, minified, one line) — also imports animate.min.css,
  bootstrap.min.css, fontawesome-all.min.css, magnific-popup.css,
  nice-select.css, owl.carousel.min.css, slick.css, slicknav.css,
  themify-icons.css (all assets/css/). Site is jQuery + owl.carousel + slick
  - slicknav + nice-select + wow + magnific-popup — **NOT Tailwind**. Font:
    `"Barlow", sans-serif` (15 rules in style.css; no Google Fonts link in the
    HTML — add the Google Fonts `<link>` in index.html).

## Reference research (done — do not redo)

### Screenshot (`gardening-colorlib-template.jpg`, 1200×946)

Browsed visually in the browser. Thin white top bar (contact info); white
header with logo, menu links, search + cart icons, green "Get Free Quote"
pill; full-width hero photo of a lush green lawn with a dirt path, centered
white headline "We provide best gardening service" + sub-line + white "View
Our Services" button + white slider dots; mint background categories row
with 6 line-icon cards (Landscaping, Planting, Watering, Fence, Removing,
Lawn Mowing); centered promo line "Check out our list of service for your
garden and get free quote" with a green link; dark-forest-green about band
("We have been designing gardens since 1990" left / "Our Mission" right).
The screenshot shows a small white pill badge over the hero headline and a
cart icon in the header that are NOT in the live DOM — skip them. The live
preview DOM + parsed stylesheet are the authoritative reference.

### Design tokens (from `assets/css/style.css`)

| Token            | Value                  | Use                                                          |
| ---------------- | ---------------------- | ------------------------------------------------------------ |
| Primary green    | `#00880F`              | buttons, icons, links, search icon, submit, footer accents   |
| Hover sweep pink | `#e6115f`              | `.btn::before` hover sweep (implement as hover fill)         |
| Forest green     | `#305534`              | about band bg, headings, footer text, white-pill button text |
| Muted sage       | `#66816A`              | paragraphs, form borders/text                                |
| Pale sage-gray   | `#C9D6CB`              | grid/border lines, section-tittle2 p color                   |
| Mint tint        | `#EFF6F0`              | categories bg, slider-area bg, commitment column bg          |
| Near-black plum  | `#301A22`              | nav links                                                    |
| Eyebrow blue     | `#7EA0FF`              | section-tittle span (unused on page — optional)              |
| Coral            | `#FF6162`              | form-tittle label span                                       |
| Bright green     | `#12C426`              | promo-link hover                                             |
| Hero overlay     | `rgba(48,85,52,0.2)`   | over hero photo                                              |
| Project overlay  | `rgba(48,85,52,0.7)`   | project hover overlay                                        |
| Font             | `"Barlow", sans-serif` | everywhere                                                   |

Button shapes: green pill radius 30–35px (`.btn` 22px 32px / `.btn_01` 17px
35px / `.header-btn` 10px 22px / `.view2` full-width); white pill radius
30px (`.btn_1` 14px 34px, text `#305534`). Inputs: 55px, radius 25px, 1px
solid `#66816A`, text `#66816A` (textarea 131px). Cards: radius 5px. Headings:
hero h1 60px/500, section h2 48px/600, testimonial/form h2 38px/600, service
title 24px/600, category title 22px/500, footer h4 20px/700. Slider dots:
white 7px circles, active = 23px white ring.

## Implementation checklist

1. Scaffold `apps/gardenly` (copy the simplest existing app; package
   `@free-react-templates/gardenly`; CNAME `gardenly.free.componentdock.com`;
   homepage `https://gardenly.free.componentdock.com`).
2. `@theme` tokens: `garden-green #00880F`, `forest #305534`, `sage
#66816A`, `sage-pale #C9D6CB`, `mint #EFF6F0`, `plum #301A22`, pink
   `#e6115f`, coral `#FF6162`; overlay helpers for `rgba(48,85,52,0.2)` and
   `rgba(48,85,52,0.7)`.
3. Barlow via Google Fonts `<link>` in index.html.
4. Sections (order matters — match the preview 1:1):
   1. Header top bar (hidden below sm): phone / email / hours + social.
   2. Sticky navbar: wordmark "Gardenly", links Home/Services/About/
      Projects/Blog/Contact, circular search icon, green "Get Free Quote"
      pill; mobile slide-down menu.
   3. Hero: 700px, photo + `rgba(48,85,52,0.2)` overlay, h1 "We provide
      best gardening service", p sub-line, white pill "View Our Services",
      white dots (active 23px ring). Single slide OK (source repeats copy).
   4. Categories (mint `#EFF6F0`): 6 cards — Landscaping, Planting,
      Watering, Fence, Removing, Lawn Mowing — lucide icons, distinct
      blurbs; hover white fill + green underline + shadow; promo line with
      green "get free quote" anchor → #quote.
   5. About (forest `#305534`): 2 garden photos, white h2 "We have been
      designing gardens since 1990" + 20px `#C9D6CB` p; right: 2 distinct
      "Our Mission" blocks.
   6. Services: 3 cells (container-fluid, `#C9D6CB` borders): green icon +
      24px title + 20px sage blurb; e.g. Landscape Design, Garden
      Maintenance, Irrigation Systems; hover green shadow.
   7. Feature Projects: h2 + 4 cards; hover reveals `rgba(48,85,52,0.7)`
      overlay + white 28px title + "View" link; distinct project names.
   8. Visit/quote band (flex 3 columns): left photo (33% × 600px); middle
      mint commitment column — "Our Commitment" 38px h2 + quote + founder
      (avatar, "Reuben Sandwich", "CEO of Gardening") with carousel
      controls; right white form column — coral label + "Get Free Quote"
      h2 + name/email/select/message + full-width green "Sent Request".
      Client-side validation only; scroll-margin for the #quote anchor.
   9. Footer (photo bg, `#305534` text): wordmark + tagline + circular
      social icons; Services links (Lawn removal, Landscaping, Planting,
      Watering); Navigation links; Contact us (paraphrased email/address/
      phone); copyright bar crediting Component Dock.
5. TDD: write tests first (navbar, hero, categories, about, services,
   projects, commitment, form validation, footer, composition), 100%
   coverage. Remember the MemoryStorage polyfill for jsdom if the app uses
   localStorage (copy from apps/cura/src/test/setup.ts).
6. Verify: `npm run verify:app -- gardenly`; full gate runs in CI on merge.
7. PR: `feat: Gardenly — gardening service template (ColorLib Gardening)`,
   include source URL, preview URL, token list, and what differs (renames,
   picsum placeholders `gardenly-<n>`, Barlow Google Font, lucide icons,
   paraphrased copy, no cart icon / hero badge from the screenshot).
8. Bookkeeping after merge: mark all 3 TEMPLATES.md Gardening rows
   `[x]` + `gardenly` URL + `npm run readme:status`.

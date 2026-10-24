# Cargonaut — Design Notes

Reference: **Logistico** — https://colorlib.com/wp/template/logistico/
Live preview: https://preview.colorlib.com/theme/logistico/ (HTTP 200, 31,440 B, page title `Transportion`, read 2026-10-24 with `curl -4`)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/logistico-free-template.jpg
Token authority: `theme/logistico/css/style.css` (188,257 B, sha256 `6536708da6829a653a33cb45a799acc9d07bab239261b1ca650001b893d6c7d5`)
Spec: `openspec/specs/template-cargonaut/spec.md`
Shipped: https://cargonaut.free.componentdock.com

A freight-forwarding page in orange and navy. Photographic hero under a 50% navy wash, three
transport pillars on white, a pale-blue service grid, a dark secure call-out, a two-column "why
choose us", a counter strip, one white rounded testimonial card over a photograph, then a
near-black estimate band carrying a six-field quote form and two location cards, and a four-column
white footer.

Provenance note: row **2966** was marked `[x]` with `[logistico]`, but `apps/logistico`'s copy is
ColorLib **Thelogistico**'s (`docs/spec-row-mismatch.md`, verdict `ROW-POINTER`, 19 exclusive hits
vs 1 for `logistico`). Thelogistico already ships as `logistix`, so `apps/logistico` is a surplus
duplicate (`UNLINKED`) and the Logistico design — preview title "Transportion" — had never been
built. `measure-reference-tokens.py --slug logistico` reports `rebuilt: False`, so the live demo
is the original build. This run re-claims the row and ships the design as **Cargonaut**
(`cargonaut` ≠ `logistico`, rule 5 holds).

## Document order

| #   | band            | ground                                                | content                                                                                                                                                       |
| --- | --------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | top bar         | `#fff`, 1px `#eaeaea` bottom hairline                 | email `info@docmed.com` · phone `1601-609 6780` · solid **Get Free Quote**                                                                                    |
| 2   | main header     | `#fff`                                                | wordmark; nav `home · Services · about · pages · Contact`; `pages` → `service details`, `elements`, `blog`, `single-blog`                                     |
| 3   | hero            | photograph + `#001d38` at 50%, 700px                  | kicker "For Personal & Business"; 60px/600 white headline "Global Logistic Service For Business"; solid **Our Services**                                      |
| 4   | pillars         | `#fff`, `120px 0`                                     | `Transportation` · `Live Monitoring` · `Worldwide Service`; orange icon, 24px title, blurb, `padding-right: 65px`                                             |
| 5   | services        | `#f5fbff`, `120px 0`                                  | centred "Services We Offer"; 2×2 cards: `Ocean Freight`, `Land Transport`, `Air Freight`, `Ocean Freight` (the reference repeats the first card)              |
| 6   | secure call-out | photograph + `#001d38` at 70%, `138px 0`              | "100% secure and safe" + blurb left; solid phone button `+10 672 457 356` right                                                                               |
| 7   | why choose      | `#fff`, `120px 0 72px`                                | photo left (5 cols); "Why Choose Us?", intro, three ticked reasons, outline **About Us** right (6 cols)                                                       |
| 8   | counters        | dark strip (`padding-top: 12px`, inner `70px 0 40px`) | `42+` Countries Covered · `97+` Business Success · `2342` Happy Client · `3245` Business Done                                                                 |
| 9   | testimonials    | photograph ground, `122px 0`                          | one white `10px`-radius card, `50px 60px 66px` padding: quote, avatar, `Robert Thomson` / `Business Owner`, carousel arrows                                   |
| 10  | estimate        | photograph + `#001d38` at 94%, `120px 0`              | left (4 cols) "Get free Estimate" + blurb + phone button; right (8 cols) six fields in a 2-column grid + outline **Send Estimate**; below, two location cards |
| 11  | footer          | `#fff`, `100px`/`110px` padding                       | Services · Company · Industries · Subscribe; copyright bar                                                                                                    |

## Tokens

| token            | value                                                    | where the reference paints it                                                                                                        |
| ---------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| brand            | `#ff3414`                                                | `.boxed-btn3` background, `.boxed-btn` border/colour, `.btn.btn-link:after`, section-title rules, link hovers (42 declarations)      |
| brand soft       | `#fd8e5e`                                                | gradient partner recorded in the sheet's `gradient-editor/#FF3414+0,fd8e5e+100` note                                                 |
| navy             | `#001d38`                                                | `.slider_area::before` (.5), `.contact_action_area::before` (.7), `.Estimate_area.overlay:before` (.94), counter and footer headings |
| body             | `#596672`                                                | `.single_location p`, paragraph defaults                                                                                             |
| muted            | `#727272`                                                | `.section_title p`                                                                                                                   |
| service          | `#f5fbff`                                                | `.service_area` background                                                                                                           |
| mist             | `#f9f9ff`                                                | light panels (27 declarations)                                                                                                       |
| hairline         | `#eaeaea`                                                | `.header-top_area` bottom border                                                                                                     |
| face             | `Poppins`                                                | 8 declarations; Google Fonts `<link>`, never the shipped woff                                                                        |
| solid button     | square, `18px 42px`, 16px/500                            | `.boxed-btn3` — hover: transparent ground, `#ff3414` border + text                                                                   |
| outline button   | square, `18px 44px`, 14px/400, `3px` tracking, uppercase | `.boxed-btn` — hover: fills `#ff3414`                                                                                                |
| testimonial card | `10px` radius, `50px 60px 66px`                          | `.testmonial_active`                                                                                                                 |
| hero             | `700px`, cover, centred                                  | `.single_slider`                                                                                                                     |
| type scale       | 60 / 46 / 30 / 24 / 20 / 16 px                           | `.slider_text h3`, `.section_title h3`, `.Estimate_area .Estimate_info h3`, `.single_location h3`, `.single_testmonial p`, body      |

Bootstrap-reboot colours in the sheet (`#007bff`, `#6c757d`) are **not painted** anywhere in this
design; the recreation never uses them.

## Assets

Every image is a deterministic placeholder (`picsum.photos/seed/cargonaut-*`); the reference's
`img/` tree (hero sliders, service thumbs, about shot, counter and testimonial grounds, logo,
favicons) is not copied. Icons come from `lucide-react`; the reference ships `font-awesome`,
`themify` and `flaticon` subsets, none of which are copied.

## Behaviour

- Mobile navigation is a disclosure; `Pages` is a CSS-only hover/focus dropdown.
- Testimonials step with wrap-around; no autoplay.
- The estimate form validates name + contact number at submit and shows either an alert or a
  confirmation, never both.
- The footer subscribe field validates the same way, then names the address in its confirmation.

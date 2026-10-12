# Locale — design notes

Recreation of ColorLib **Gricklo** (https://colorlib.com/wp/template/gricklo/)
as `apps/locale` (`@free-react-templates/locale`), deployed to
https://locale.free.componentdock.com.

## Why this template had to be rebuilt

`TEMPLATES.md` listed the design twice as done, both rows pointing at
`findly.free.componentdock.com`. No app recreated it: the folder that held it
was overwritten when the name was reused for a different design (the
travel-services search form, later renamed `spotly`) and then deleted as
"stale". The linked domain still serves that other design's build. This run
re-created the design under the unused name `locale` and corrected the rows.

## Reference record

The live preview could not be read this run — `colorlib.com` and
`preview.colorlib.com` both return Cloudflare **Error 1106** ("the owner of this
website has banned your IP address"; 403, 17 bytes) for the page, its
stylesheet, the source zip and the checklist screenshot — and the Wayback
Machine has no snapshot of `theme/gricklo/`. The reference used is this
repository's own earlier recreation of the same design (`073c05c69`), which
records the source stylesheet's tokens and the section order, plus the
screenshot URL named in `TEMPLATES.md`. Re-check the palette against the live
preview when the ban lifts.

## Tokens

| Token        | Value     | Role                                                          |
| ------------ | --------- | ------------------------------------------------------------- |
| `brand`      | `#4DB7FE` | primary blue: buttons, links, active states, star accents      |
| `deep`       | `#304CBB` | active pill fill, button hover sweep                           |
| `navy`       | `#1A213D` | headings, labels, the translucent nav bar and dropdown surface |
| `ink`        | `#140C40` | search input text                                              |
| `orange`     | `#FF6F00` | rating stars and review count                                  |
| `section`    | `#F1F6F9` | interest grid, how-it-works, quote card                        |
| `footerbg`   | `#F1FBFF` | footer wrapper                                                 |
| `muted`      | `#6B5A5A` | section subtext                                                |
| `footertext` | `#A4A6AE` | footer body copy                                               |
| `roletext`   | `#68696E` | testimonial role                                               |
| `socials`    | `#677F8B` | contact + social glyphs                                        |
| `edge`       | `#DEE0E5` | hairline borders                                               |

Type: **Work Sans** for display, **Mulish** for body, both via Google Fonts
`<link>`s. The shared `Button`/`ButtonLink` `primary` skin is re-pointed to
`brand` through the `--color-primary-*` scale.

## Structure

Navigation (brand + inline search + 5 links, two of them dropdown parents +
Sign In + Add Listing) → hero (photo cover, headline, two-field search, five
category pills) → Top Destination (six circular cities) → interests (2 / tall
centre / 2) → Popular Things To do (four-card window of five, arrows + dots) →
find-more CTA band → How It Work? (three steps) → People talking about (two
slides) → footer (blurb + socials, Navigation, Services, newsletter, Component
Dock credit).

## Fidelity notes and deviations

- Rebranding only: the source's own brand strings and the copy that named it
  (testimonial quote, footer blurb, copyright) now read "Locale". Headings,
  labels, placeholders, the count line and the listing data are unchanged from
  the recorded reference copy.
- All photography is `picsum.photos` placeholders; no source asset is copied.
- Nav dropdowns are CSS-only (`group-hover` + `group-focus-within`) so the same
  surface answers hover and keyboard focus without JavaScript state.
- The folded panel mounts its rows only while open — a shut panel holds no
  focusable duplicates of the bar.
- Carousel dots are the source's small round controls; they double as jump
  controls and mark the current window start with `aria-current`.

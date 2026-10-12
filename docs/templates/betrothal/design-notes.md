# Betrothal — design notes (section-by-section fidelity)

Recreation of ColorLib **"Dreamwed"** (source slug `dreamwed`) — a romantic
single-page wedding / save-the-date template. Every note below is taken from the
**live preview** `https://preview.colorlib.com/theme/dreamwed/` and its
stylesheet `css/style.css`, cross-checked against the TEMPLATES.md screenshot.

## Reference files read (2026-10-12)

| Thing | URL | Result |
| --- | --- | --- |
| ColorLib page | `https://colorlib.com/wp/template/dreamwed/` | **200** — source article for the template |
| Preview (live DOM) | `https://preview.colorlib.com/theme/dreamwed/` | **200**, 34,516 B, `<title>Dream \| Template</title>` |
| Preview HTML stability (re-checked 2026-10-12) | strip the preview host's injected `<style type="text/css" media="print" onload=…>` `@font-face` block | 🔎 the **raw page digest is request-unstable** — Cloudflare reorders that block's font rules per request, so 3 consecutive fetches gave 3 digests at an identical **34,516 B**. ⚠️ The raw **byte count is request-signature-dependent too** (re-measured 2026-10-12): the same host appends an extra **361 B** Cloudflare Insights beacon `<script type="module" src="https://static.cloudflareinsights.com/beacon.min.js/…">` before `</body>` for some client signatures, so a fetch whose headers differ from a plain `curl -sS <url>` sees **34,877 B** (python `urllib` + a Chrome UA) — cite **neither** a raw page hash **nor** the raw size. The canonical handle — sha256 of the page after removing **both** the injected `@font-face` block **and** that beacon script — is **23,164 B**, sha256 `9ec3a0e9d497db6902fafc2bb242e3f8320d667dcd5d9f85f0cfe6cdab71fd86`, and it is byte-identical across `curl -sS`, `curl -A <chrome UA>` and `urllib` with a Chrome UA (3 profiles × 3 fetches, 2026-10-12); a client that additionally sends `Accept`/`Accept-Language` gets a further **416 B** Cloudflare first-party Google-tag script (`google_tags_first_party` / `/s9cc/`) that this handle does not strip, so always state the measurement basis (`curl -sS`) next to the number |
| Stylesheet | `…/dreamwed/css/style.css` | **200**, 30,285 B — brand colour, fonts, buttons, section backgrounds |
| Supporting CSS | `css/bootstrap.min.css`, `css/elegant-icons.css`, `css/nice-select.css`, `css/owl.carousel.min.css`, `css/slicknav.min.css` | referenced by the preview (framework + icon + carousel + mobile-nav) |
| Screenshot | `https://colorlib.com/wp/wp-content/uploads/sites/2/dreamwed-free-template.jpg` | **200**, served **AVIF** despite the `.jpg` name, 69,828 B → converted to PNG and inspected visually |

## Visual design (from the screenshot + live preview)

- **Aesthetic:** elegant, romantic, bright. A **clean white page** with a single
  warm **ochre/gold accent `#d48f4c`** used sparingly for emphasis (eyebrows,
  active nav underline, buttons, ornaments). Generous whitespace, centred
  composition, soft diffuse shadows on white cards.
- **Type:** **"Arima Madurai", cursive** for display/headings (the wordmark and
  the hero couple names read as a rounded display serif), **"Work Sans",
  sans-serif** for body and UI. Headings are near-black `#353535`.
- **Signature motif:** each section heading is a small **uppercase gold
  eyebrow** over a **dark serif H2**, followed by a small **gold wave ornament
  image** (`img/icon/icon_2.png`) that divides the title from the body copy.
  The hero uses the same idea as a gold flourish under the couple names.
- **Buttons:** **square (no border-radius)**. Filled: `background:#d48f4c;
  color:#fff; font-weight:700; padding:14px 35px 10px; font-size:15px`.
  Outline: `border:1px solid #d48f4c; color:#353535; background:transparent`.
- **Header:** centred. A small gold **ring** icon sits above the wordmark;
  the nav is a single centred row below it with the active item underlined in
  gold. A search icon sits at the end of the row.
- **Cards/forms:** white with `box-shadow: 0px 5px 30px rgba(53,53,53,0.06)`
  (forms) or `0px 5px 35px rgba(53,53,53,0.06)` (time cards).

## Structure (source document order)

```
header.header                       (centred logo + centred nav + search)
section.hero.spad.set-bg            (bg photo hero-bg.jpg + scrim)
section.story.spad                  ("Save The Date" / "Our Story Wedding" + 2 circular portraits + centre photo)
section.countdown.spad              (date + 4 countdown items)
section.gallery                     (bg-photo section-title + 8-image grid, 4 cols × 2)
section.event.spad                  ("Wedding Events" + owl-carousel of event items)
section.rsvp.set-bg                 (bg photo rsvp.jpg + white form card + text block)
section.wedding-time.spad           ("Location & Time" / "Where & When" + 3 white cards)
footer.footer.spad                  (closing heading + logo + social + copyright bar)
```

## Section-by-section fidelity notes

1. **Header.** Centred stack: ring mark → wordmark → centred nav row. Nav items
   Home · Wedding Plans · Photo Album · Blog · Pages (dropdown: Story, Gallery,
   Rsvp, Guestbook, Blog Details) + a search toggle. The current/active item is
   gold `#d48f4c` with an underline. Reproduce the centred composition (not a
   left-logo/right-nav bar). Collapse to a mobile menu below the small
   breakpoint (the source uses `slicknav`; use an accessible disclosure instead).
2. **Hero.** `section.hero.spad.set-bg` with `hero-bg.jpg` as the background and
   a dark scrim. Centred white copy: a small uppercase **date line**, the
   **couple names** in a large display serif separated by an interpunct
   (`⚭`-style), a **gold flourish ornament**, a short paragraph, then the
   **square gold R.S.V.P button**. Placeholder photo:
   `picsum.photos/seed/betrothal-1/1920/1080`.
3. **Story.** `section-title` — eyebrow "Save The Date", H2 "Our Story Wedding",
   gold wave ornament, lead paragraph. Below: a three-column row — **two
   circular portraits** (`story__pic`, 200×200, `border-radius:50%`) each with a
   name + a short blurb + small social icons (`story__social`), flanking a
   **large centre photo** (`story__large__pic`). Placeholders: portraits
   `seed/betrothal-3` and `seed/betrothal-4` (300×300), centre
   `seed/betrothal-2/800/1000`.
4. **Countdown.** Centred `section-title` with the wedding date, then four
   `countdown__item` blocks — **Days · Hours · Minutes · Seconds**. The source
   runs a jQuery countdown; a static render (or a small `setInterval`) is fine —
   no dependency.
5. **Gallery.** Full-bleed band. The `section-title.set-bg` uses
   `gallery-title.jpg` as a background photo (eyebrow "Our Gallery" + H2 "Let's
   Save Your Best Moments" + wave ornament). Below: an **8-image grid** in
   **4 columns × 2 rows** (`col-lg-3 col-md-6 col-sm-6 p-0`, edge-to-edge),
   items `border-radius:5px` with a hover overlay `gallery__text`
   `rgba(53,53,53,0.7)`. Placeholders `seed/betrothal-<5..12>/600/800`.
6. **Events.** Centred `section-title` "Wedding Events", then an `owl-carousel`
   slider of `event__item`s — each a **circular icon** (`event__item__icon`,
   77×75) + a **time** + a **title** + a **blurb**. Source items: 07:00 The
   Church · 08:00 Ceremony Wedding · 13:00 Wedding Party · 16:00 Cake Cutting ·
   16:00 Photography. Implement as an accessible scroll-snap row or list — do
   **not** add a carousel dependency.
7. **RSVP.** `section.rsvp.set-bg` over `rsvp.jpg`. Split band: left a white
   `rsvp__form` card (`padding:80px 50px 85px`, shadow `0px 5px 30px
   rgba(53,53,53,0.06)`) with a **Name** input, an **Email** input, two
   `nice-select` dropdowns (guest count e.g. "2 Guest", event e.g. "All Event")
   and an **"I Am Attending"** button; right an `rsvp__text` block with an
   eyebrow + H2 **"Are You Attending?"** + paragraph. Own equivalents; the form
   must not post to an external service.
8. **Wedding Time.** Centred `section-title` — eyebrow "Location & Time", H2
   "Where & When", lead. Then three white `wedding__time__item` cards (shadow
   `0px 5px 35px rgba(53,53,53,0.06)`) — **Ceremony** 11:00 AM – 14:00 PM ·
   **Wedding Party** 16:00 – 20:00 · **Photography** 20:00 – 23:00, each with an
   address ("40 Baria Sreet 133/2 NY City, US"). Own titles/times/address.
9. **Footer.** Centred: a closing heading ("Come to attend our marriage
   ceremony"), a logo mark, a small social row, and a copyright bar
   ("© <year> … All rights reserved | This template is made with … by
   Colorlib"). The recreation drops the Colorlib credit, keeps the computed
   current year, and adds the repo-required `https://www.componentdock.com/`
   ("Component Dock") link.

## Type and colour tokens

| Token | Value | Where |
| --- | --- | --- |
| Brand accent (ochre/gold) | **`#d48f4c`** | buttons, active nav underline, eyebrows, ornaments |
| Ink / body text | **`#353535`** | headings + body copy |
| Surface | **`#ffffff`** | page + card backgrounds |
| Card shadow | **`rgba(53, 53, 53, 0.06)`** (`0px 5px 30px` / `0px 5px 35px`) | forms + time cards |
| Gallery overlay | **`rgba(53, 53, 53, 0.7)`** | `gallery__text` hover overlay |
| Heading font | **`"Arima Madurai", cursive`** | wordmark, H2s, hero names |
| Body font | **`"Work Sans", sans-serif`** | body, nav, buttons, form fields |
| Buttons | filled `#d48f4c`/`#fff`, `padding:14px 35px 10px`, `font-weight:700`; outline `1px solid #d48f4c`, ink `#353535` | all CTAs |
| Radii | gallery items **`5px`**; story portraits **`50%`**; buttons **square** | — |
| Section backgrounds | white for Story/Countdown/Event/Wedding Time; background-photo + overlay for Hero (`hero-bg.jpg`), Gallery title (`gallery-title.jpg`), RSVP (`rsvp.jpg`) | — |

## Deltas to record in the PR

- New name **betrothal** and own brand wordmark, couple names, dates, nav
  labels, blurbs, event items, location/time values and footer copy (none of
  "Dreamwed"/"Dream", `Irenne & Jenkins`, `Irenne Steele`/`Georgia Jenkins`,
  `September 19th, 2020`, `Sunday 19 March, 2019`, the source nav labels, or the
  placeholder blurb reused).
- Placeholder photography via `https://picsum.photos/seed/betrothal-<n>/<w>/<h>`
  for the hero, story portraits + centre photo, the eight gallery images, the
  gallery-title and RSVP background bands (no ColorLib asset copied).
- Replaced the source's jQuery + `owl.carousel` + `nice-select` + `slicknav`
  machinery with accessible, dependency-light components (accessible dropdowns,
  a scroll-snap/list events row, a disclosure mobile menu, associated form
  labels).
- Added the repo-required `https://www.componentdock.com/` ("Component Dock")
  footer link; dropped the "made with … by Colorlib" credit.
- Placeholder hero/gallery/RSVP bands supplied as seeded picsum images under a
  matching dark scrim (the source ships fixed `.jpg` backgrounds).

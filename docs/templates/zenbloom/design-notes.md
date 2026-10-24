# Zenbloom — Design Notes

- **Source slug:** `yogabest`
- **ColorLib name:** Yogabest (yoga studio landing, Bootstrap 4 build)
- **Listing:** https://colorlib.com/wp/template/yogabest/
- **Preview:** https://preview.colorlib.com/theme/yogabest/ — HTTP 200, 44,489 B,
  sha256 `bfafd5c31693f96e…` (measured 2026-10-24); page title
  `Yogabest - Free Bootstrap 4 Template by Colorlib`
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/yogabest-colorlib-template.jpg
  (1,200 × 946)
- **New name:** zenbloom · **Category:** Yoga studio / wellness landing
- **Spec:** `openspec/specs/template-zenbloom/spec.md`
- **App:** `apps/zenbloom/` (TopBar · Navbar · Hero · Services · About · Features ·
  Counter · Classes · Testimonials · Schedule · Trainers · Blog · Footer)

Rewrite status: this brief replaced a **Yogafun** description on 2026-10-24 — the
neighbouring sibling in the same family, a different design (and, per the earlier
prep note, a different sheet). Docs-source drift caught it
(`scripts/verify-docs-source.py`, `DOCS-STALE` `brief=yogafun`); the spec, the
`TEMPLATES.md` row (`line 1892`) and the shipped app all recreate `yogabest`.
Values below re-measured from the live reference that day; the sheet hash
(`e4172187ba7f…`) is unchanged since the 2026-10-23 pass, so the earlier token
work still holds.

## Reference identity (measured 2026-10-24)

| Artefact | Bytes | sha256 (head) |
| --- | --- | --- |
| `/theme/yogabest/` (index) | 44,489 | `bfafd5c31693f96e…` |
| `theme/yogabest/css/style.css` | 82,521 | `e4172187ba7f952b…` |
| `css/owl.carousel.min.css`, `owl.theme.default.min.css`, `animate.css`, `magnific-popup.css`, `flaticon.css` + Bootstrap 4 & Font Awesome via CDN | supporting sheets | — |

The page is a large one-pager: **115** anchors, **44** inline
`background-image` declarations and only **1** `<img>` — this design paints
photography through CSS everywhere (hero, services, about, features, counters,
testimonials, CTA). **No form** on the home page. Sibling pages exist
(`about.html`, `trainer.html`, `classes.html`, `schedule.html`, `blog.html`,
`contact.html`); Zenbloom recreates the **home page only**.

## Design tokens (from `css/style.css`, canonical over the screenshot)

| Role | Value | Evidence in the sheet |
| --- | --- | --- |
| Brand green | `#6cae22` (60 declarations) | icons, kickers, counters, buttons, active states |
| Green tint | `#9acb56` (9) | gradients / hover fills |
| Paper | `#fff` (80) | page and card beds |
| Ink | `#000000` (19) · `#212529` (8, Bootstrap default) | headings on light bands |
| Neutrals | `#6c757d` (10) · `#dee2e6` (8) · `#007bff` (10, Bootstrap link) | muted copy, rules, default links |
| Typeface | **Poppins** (`"Poppins", Arial, sans-serif`, 3 rules) + **Reenie Beanie** (`"Reenie Beanie", cursive`, 7 rules) | body/labels vs the handwritten script kickers |
| Hero | `.hero-wrap{width:100%;height:900px;background-size:cover}` + angular clip (`.degree-right`) | the skewed hero signature |
| Radii | `50%` (23 — avatars, play button, social dots) · `0.25rem` (9) · `4px` / `5px` (cards, inputs) | radii census |
| Alternating bands | white and `bg-light` (`#f8f9fa`) | `.ftco-section` vs `.ftco-section.bg-light` |

Palette census, most-used first: `#fff` ×80, `#6cae22` ×60, `#000000` ×19,
`#6c757d` ×10, `#007bff` ×10, `#9acb56` ×9. **One green over white/black** — no
second brand hue appears above nine uses. (`#f96d00`, cited by an earlier spec
pass as an "accent orange", has **0** occurrences in the live sheet; treat it as
an app-side addition, not a source token.)

## Visual design (from the TEMPLATES.md screenshot)

A thin dark **top bar** with phone, e-mail and four round social dots, then a
transparent **navbar** over a green-tinted yoga photo. The hero is the design's
set piece: a full-height photo with the bottom-right corner **cut at an angle**
(so white intrudes diagonally), a handwritten green script kicker
(`Welcome to Yogabest` in Reenie Beanie), a large light-weight white Poppins
headline `Yoga Enhances Your Life`, a short paragraph and a round green
**play button** for the intro video. Screenshot samples cluster on olive/green
(`#4a5434`, `#78814c`, `#a3a991`) plus white — the photo is the colour. Below it:
a white band with three icon cards, a split about block ("Life in Divine Yoga"),
a dark photo band with four equal feature cards, a counter row, a six-card
classes grid, a testimonial slider over a photo, a schedule table, four trainer
portraits, three blog cards and a dark footer.

## Section order (as the reference renders)

1. **Top bar + navbar** — phone, e-mail, 4 social dots; dark transparent nav with
   logo, `Home / About / Trainer / Classes / Schedule / Blog / Contact`.
2. **Hero** — `.hero-wrap.degree-right` (900px): script kicker, `h1`, paragraph,
   play button.
3. **Services** — `.ftco-services.bg-light`: three icon cards
   (`Outdoor Activites`, `Experienced Trainers`, `Happy Environment`).
4. **About** — `.ftco-about.img` split: photo left, "Life in Divine Yoga" +
   blockquote ("I am standing on my own altar, The Poses are my prayers") +
   "This is how we work on our clients, Watch video".
5. **Features** — `.ftco-services.img` on a photo: `Control Your Body To Free
   Your Soul` + four cards (`Body & Mind Balance`, `Healthy Daily Life`,
   `Improves your flexibility`, + one more).
6. **Counters** — `.ftco-counter.img`: four animated figures.
7. **Classes** — `h2` "Yogabest Classes" + six cards
   (`Private & Group Lessons`, `Yoga for Pregnant`, `Yoga for Beginners`,
   `Yoga Barre`, `Yoga Core`, `Yoga Restore`).
8. **Testimonials** — `.testimony-section.bg-light`: `h2` "What They Are Saying"
   over a photo with a quote column, five slides.
9. **Schedule** — `h2` "Yogabest Schedule" + a weekly table inside
   `.table-wrap` (horizontal scroll on mobile).
10. **Trainers** — `h2` "The Best Trainer For You" + four portraits
    (Elizabeth Nelson, Scarlett Torres, Victoria Wright, Stella Perry).
11. **Blog** — `.bg-light`: `h2` "Recent Post" + three cards ("Treat Your Body
    Like A Temple" repeated).
12. **Footer** — `.ftco-footer`: brand + socials, `Recent Blog`, `Explore`,
    `Have a Questions?` columns.

## Section-by-section fidelity notes

**Top bar + navbar.** The top bar is the only dark strip above the hero
(phone/e-mail left, round social dots right). The navbar is transparent over the
photo and turns solid on scroll; links are white, small, tracked.

**Hero.** Full-bleed photo, 900px tall on desktop, with the **diagonal cut** at
the bottom-right — that angle is the design's identity; reproduce it with a
clipped pseudo-element or `clip-path`, not a straight edge. Kicker is script
(Reenie Beanie) in brand green; headline is Poppins, light weight, white, two
lines; the round green play button carries a white triangle.

**Services.** Three equal cards on `bg-light`: thin green line icon, bold title,
muted blurb. No borders — the cards float on the band's tint.

**About.** Photo left, copy right (or reversed on mobile). The blockquote is set
in italic Poppins and prefixed by a green quote glyph; the video link is a small
green underlined label.

**Features.** Dark photo band with white `h2` centred and four translucent cards
in a row; each card is icon + title + one-line blurb.

**Counters.** Four columns on a photo, big green numerals with muted captions;
the source animates them up on scroll.

**Classes.** Six cards, three per row: photo, title, meta line (level/duration),
and a green "join now" style link.

**Testimonials.** Photo band left, quote column right — avatar circle, quote,
name, role; five slides with dots.

**Schedule.** A plain table: time rows × weekday columns, header row in green,
hairline dividers, no zebra. It scrolls horizontally under `md`.

**Trainers.** Four portraits with name + role beneath, square photos, green
role text.

**Blog.** Three cards: photo, date/meta, title, `read more`.

**Footer.** Dark ground with four columns (brand + socials, recent posts, explore
links, contact). Replace the source credit with the Component Dock line.

## Source → React adaptation

| Source | Source element | React equivalent |
| --- | --- | --- |
| top bar + `.ftco-navbar-light` | contact strip + transparent nav | `TopBar`, `Navbar` |
| `.hero-wrap.degree-right` | 900px photo hero with angled cut | `Hero` (clip-path) |
| `.ftco-services.bg-light` | three icon cards | `Services` |
| `.ftco-about.img` | split about + blockquote + video link | `About` |
| `.ftco-services.img` | photo band + four cards | `Features` |
| `.ftco-counter.img` | four counters | `Counter` |
| classes grid | six class cards | `Classes` |
| `.testimony-section` | quote slider over photo | `Testimonials` |
| `.table-wrap` | weekly schedule table | `Schedule` |
| trainer grid | four portraits | `Trainers` |
| `.bg-light` blog band | three post cards | `Blog` |
| `.ftco-footer` | four widget columns | `Footer` (Component Dock credit) |

## Placeholder images / fonts

`https://picsum.photos/seed/zenbloom-<n>/<w>/<h>` for every photo band (hero,
about, features, counters, testimonials, class cards, trainers, blog).
**Poppins** and **Reenie Beanie** come from Google Fonts via `<link>` — the two
families the sheet names. Icons from `lucide-react`; the source's flaticon set is
not copied.

## App deltas (as shipped in `apps/zenbloom/`)

- The palette is a green ramp around `#6cae22` (`--color-sage-400`) plus an
  **ember ramp** around `#f96d00` (`--color-ember-400`) used for CTA hovers and
  the loader. The ember hue is **not** in the live sheet (0 occurrences) — it is
  an app-side accent; when the app is next touched, either drop it or keep it
  deliberately as a secondary accent.
- The hero keeps the angled cut and the script kicker; the play button opens no
  video (no third-party embed), so it is decorative.
- Counters render final values (no scroll animation); the testimonial slider
  ships as a static set at desktop width.
- All photography is picsum placeholders; the flaticon glyphs are replaced by
  `lucide-react`.

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer SHALL link
  [Component Dock](https://www.componentdock.com/). That is the only attribution
  line the recreation carries.
- **Provenance ban.** No file under `apps/zenbloom/` may name the source
  designer, carry a `colorlib.com` URL, or reuse the source template's name —
  code, comments, CSS, markup, metadata and filenames included (AGENTS.md
  rule 5).
- **Deploy identity.** `apps/zenbloom/public/CNAME` =
  `zenbloom.free.componentdock.com` and the package `homepage` =
  `https://zenbloom.free.componentdock.com`.

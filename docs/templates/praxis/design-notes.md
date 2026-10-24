# Praxis — Design Notes

- **Source slug:** `drpro`
- **ColorLib name:** Drpro — "Dr PRO — Plastic Surgery Clinic in Los Angeles and Miami"
- **Listing:** https://colorlib.com/wp/template/drpro/
- **Preview:** https://preview.colorlib.com/theme/drpro/ — HTTP 200, 33,004 B,
  sha256 `ea346c2932a25de2…` (measured 2026-10-24); page title
  `Dr PRO — Plastic Surgery Clinic in Los Angeles and Miami`
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/drpro-free-template-1.jpg
  (1,200 × 946)
- **New name:** praxis · **Category:** Health / clinic landing
- **Spec:** `openspec/specs/template-praxis/spec.md`
- **App:** `apps/praxis/` (Navbar · Hero · Intro · WhyChooseUs · CtaBanner ·
  Services · ParallaxDiscount · Newsletter · Footer)

Rewrite status: this brief replaced a **ColorLib University** description on
2026-10-24 — a completely different design (education landing with search hero,
course cards and counters). Docs-source drift caught it
(`scripts/verify-docs-source.py`, `DOCS-STALE` `brief=university`); the spec, the
`TEMPLATES.md` row (`line 1841`, repeated at `line 2235`) and the shipped app all
recreate `drpro`. Every value below was re-measured from the live reference that
day.

## Reference identity (measured 2026-10-24)

| Artefact | Bytes | sha256 (head) |
| --- | --- | --- |
| `/theme/drpro/` (index) | 33,004 | `ea346c2932a25de2…` |
| `theme/drpro/styles/index.min.css` | 27,955 | `fa25231de59718e2…` |
| `theme/drpro/kit/form.min.css` (551 B, `247ff50c3051…`), `kit/icons.min.css`, `kit/sliders.min.css`, `styles/bootstrap.min.css` | supporting sheets | — |

**This demo is a 3.0.0 rebuild**: every asset carries `?v=3.0.0`, and the page
pulls `vendor/swiper/14.3.0`, `vendor/jarallax/3.1.0` and
`vendor/fontawesome/7.3.1` — i.e. the current release of the same design, not the
2018 original. The home page holds **40** anchors, **3** `<img>`, **6** inline
`background-image` declarations, **2** forms and **13** form controls (11
inputs, 2 selects). Sibling pages (`about.html`, `services.html`, `blog.html`,
`contact.html`) exist; Praxis recreates the **home page only**.

## Design tokens (from `styles/index.min.css`, canonical over the screenshot)

| Role | Value | Evidence in the sheet |
| --- | --- | --- |
| Brand teal | `#57ccc3` (21 declarations) | links, service icons, hover fills, section rules |
| Brand pink | `#fd556d` (9) | primary pill buttons, accents |
| Ink | `#404040` (23) · `#000` | headings, hero `h1` |
| Muted text | `#a09f9f` (6) · `#a5a5a5` (body) · `#a6abb2` (`.section_subtitle`) | body copy and section kickers |
| Surfaces | `#fff` (41) · `#e6ebf1` (4) · `#ffffffbf` (3) · `#f0f0f0` (screenshot hero panel) | page, cards, translucencies |
| Warm accent | `#ffa07f` (2) | secondary tint — **not** the brand colour |
| Footer | `#26292d` | `.footer{background:#26292d}` |
| Typeface | **Montserrat** (12 declarations; body 14px/400) | `body{font-family:Montserrat,sans-serif;…;color:#a5a5a5}` |
| Buttons | `.button` — height 46px, `border-radius: 20px`, uppercase, 14px **600**, padding `0 40px 0 36px`, line-height 42px | `.button`, `.button a` |
| Section kicker | 18px, weight 500, `#a6abb2`, `line-height: .75` | `.section_subtitle` |
| Radii | `20px` buttons · `19px`/`24px` cards · `7px` inputs · `50%` socials | radii census |

Palette census, most-used first: `#fff` ×41, `#404040` ×23, `#57ccc3` ×21,
`#fd556d` ×9, `#a09f9f` ×6, `#e6ebf1` ×4. The design is **teal + pink on white
and near-black**, with photographic hero panels.

## Visual design (from the TEMPLATES.md screenshot)

Thin white masthead: `Dr PRO` logo with a two-line lockup ("DR PRO / Plastic
Surgery"), centred nav (`HOME · ABOUT US · SERVICES · NEWS · CONTACT`), a phone
number, a **pink pill** `MAKE AN APPOINTMENT`, and circular social buttons on the
right edge. The hero is a split: a `#f0f0f0` panel on the left holding a small
teal kicker (`#1 Plastic Surgery Clinic`), a very large `#404040` `h1`
"Love the new you", a muted paragraph, then a **pink filled pill** `READ MORE`
next to a **teal outline pill**, with three small dots underneath (it is a
3-slide slider); a portrait photograph fills the right half. Below, a white band
kickers "This is Dr Pro" over "Welcome to our Clinic" with a teal pill CTA, then
image/parallax bands. Screenshot samples: `#f0f0f0` panel, `#d5dbd8` neutral,
`#a88d86` skin/warm tones — no strong colour block appears until the pill buttons.

## Section order (as the reference renders)

1. **Header** — `.header`: logo lockup, `Home / About us / Services / News /
   Contact`, phone link `tel:`, `Make an Appointment` pill, circular socials
   (Instagram · Facebook · X).
2. **Hero slider** — 3 slides, each `h1.home_title` "Love the new you" +
   `.home_text` paragraph + `.button_1` (`read more`) + `.button_2`
   (`make an appointment`) + `home_slider_custom_dot` bullets.
3. **Intro / appointment** — "Welcome to our Clinic" block with the
   `#appointment` form: name, e-mail, phone, **treatment** select, **doctor**
   select, date, submit (11 inputs + 2 selects across the page).
4. **Why choose us?** — image + three `why_list` items (title + text) over a
   `jarallax` parallax photograph.
5. **Our Services** — six `service` cards (`col-xl-4 col-md-6`): icon, title,
   text.
6. **Discount / parallax band** — second `parallax_background` block.
7. **Newsletter** — e-mail field + submit.
8. **Footer** — `.footer` on `#26292d`: about + logo, contact, locations, nav
   columns (`col-lg-3 footer_col` ×4), then `.footer_bar` with the copyright and
   inline nav.

## Section-by-section fidelity notes

**Header.** The logo is a two-line text lockup, not an image. Nav is uppercase
small caps; the appointment CTA is a **pink pill** and the socials are circular
outline buttons flush to the right. The header is transparent over the hero and
turns white on scroll (`trans_400` transition).

**Hero.** A 3-slide Swiper with custom dot bullets (not arrows). Each slide is a
split: text left on the neutral panel, photograph right. The two CTAs differ in
kind — filled pink pill (`read more`), outlined teal pill (`make an
appointment`, anchor `#appointment`). Headline is the page's largest type and
stays sentence case.

**Appointment form.** Sits directly under the welcome copy, inside the same band:
name, e-mail, phone as underline/input fields; *treatment* and *doctor* as
selects; a native date field; one submit. The `required` attribute is on every
field in the source — keep the form unsubmittable until filled, and never
navigate on submit.

**Why choose us?** Image left, three ranked rows right (title + two-line blurb),
over a parallax photo band with a dark wash. On mobile the list stacks under the
image.

**Services.** Six equal cards, three per row at `xl`, two at `md`: small
teal icon, bold title, muted body. No card border — separation is whitespace.

**Discount band.** A full-bleed parallax photograph with a large numeral
treatment (the source's promotional band) and an outline pill CTA. It is a
marketing band, not a data section.

**Newsletter.** Single inline e-mail field plus a pill button on a white band.

**Footer.** Four columns on `#26292d`, white headings, muted links; the last row
is a bar with copyright and a small inline nav. Replace the source credit with
the Component Dock line.

## Source → React adaptation

| Source | Source element | React equivalent |
| --- | --- | --- |
| `.header` | logo lockup, nav, phone, pink pill, socials | `Navbar` |
| `.home_*` + Swiper | 3-slide split hero with custom dots | `Hero` (slider state) |
| Intro block + `#appointment` form | welcome copy + 6-field appointment form | `Intro` |
| `.why_*` + jarallax | image + 3 ranked rows on parallax | `WhyChooseUs` |
| `.service_col` ×6 | six service cards | `Services` |
| promotional band | parallax photo + outline pill | `CtaBanner` / `ParallaxDiscount` |
| newsletter form | e-mail + submit | `Newsletter` |
| `.footer` + `.footer_bar` | 4 columns + bar | `Footer` |

## Placeholder images / fonts

`https://picsum.photos/seed/praxis-<n>/<w>/<h>` for the three hero portraits, the
why-choose-us image and both parallax bands. **Montserrat** comes from Google
Fonts via `<link>` (the sheet's only family). Icons from `lucide-react`; the
source's Font Awesome 7 subset and its inline SVG slider chrome are not copied.

## App deltas (as shipped in `apps/praxis/`)

- **Brand colour differs.** The app themes on **coral** `#ffa07f`
  (`--color-coral-400`) with a 50–900 ramp, taken from the two secondary
  occurrences in the sheet, rather than the sheet's dominant **teal `#57ccc3`**
  and **pink `#fd556d`**. An implementer touching this app should re-point
  `--color-brand` at the teal and use the pink for primary CTAs; the layout
  below already matches.
- The hero ships as a single static split (no 3-slide swiper); dots are not
  rendered.
- The appointment form is one block (`Intro`) with name/e-mail/phone/treatment/
  doctor/date, native date input instead of the source's picker; there is no
  success page — submission is prevented.
- Section order shipped: Hero → Intro → WhyChooseUs → CtaBanner → Services →
  ParallaxDiscount → Newsletter → Footer. The source's discount band sits
  *after* the services, matching this order; the `CtaBanner` is an added
  appointment phone strip.
- All photography is picsum placeholders.

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer SHALL link
  [Component Dock](https://www.componentdock.com/). That is the only attribution
  line the recreation carries.
- **Provenance ban.** No file under `apps/praxis/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/praxis/public/CNAME` =
  `praxis.free.componentdock.com` and the package `homepage` =
  `https://praxis.free.componentdock.com`.

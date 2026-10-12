# Nuptials — design notes (replication findings)

Source of record: TEMPLATES.md line 3105 **Wedding** —
https://colorlib.com/wp/template/wedding/ · preview
https://preview.colorlib.com/theme/wedding/ · screenshot
`wedding-free-wedding-website-template.jpg`.

> Provenance caution: the "Wordpress Wedding Themes" roundup entry
> (TEMPLATES.md lines 235 / 3109) is a separate item and is already shipped as
> `wedlock`; its preview slug 404s. Do not re-claim those lines for Nuptials.

## Evidence captured (2026-10-12, re-verified)

| Artifact | Result |
| --- | --- |
| `GET https://preview.colorlib.com/theme/wedding/` | HTTP 200, 22,649 bytes, `<title>Wedding</title>` |
| Preview HTML stability (re-checked 2026-10-12) | 🔎 the **raw page digest is request-unstable** — the preview host injects a `<style media="print">` `@font-face` block and reorders its rules per request (3 fetches → 3 digests at an identical **22,649 bytes**). ⚠️ The raw **byte count is request-signature-dependent too** (re-measured 2026-10-12): the host also appends an extra **361 B** Cloudflare Insights beacon `<script type="module" src="https://static.cloudflareinsights.com/beacon.min.js/…">` before `</body>` for some client signatures, so a fetch whose headers differ from a plain `curl -sS <url>` sees **23,010 bytes** — cite **neither** a raw hash **nor** the raw size. Canonical handle (strip the injected block **and** the beacon script): **16,120 B**, sha256 `b45c9e08ee1416e14088932f63fe1a2076a6f4d16e87f23efe39c5a6226af176`, byte-identical across `curl -sS`, `curl -A <chrome UA>` and `urllib` with a Chrome UA (3 profiles × 3 fetches); a client that additionally sends `Accept`/`Accept-Language` gets a further **416 B** Cloudflare first-party Google-tag script (`google_tags_first_party` / `/s9cc/`) that this handle does not strip — state the measurement basis (`curl -sS`) next to any such number |
| `GET .../theme/wordpress-wedding-themes/` | HTTP 404 (roundup entry, not this template) |
| `GET .../theme/wedding/css/main.css` | HTTP 200, 33,049 bytes |
| Screenshot | `wedding-free-wedding-website-template.jpg` (AVIF 1200x935) → converted with ImageMagick to PNG and inspected visually |

Vendor CSS referenced by the preview (`bootstrap.css`, `font-awesome.min.css`,
`linearicons.css`, `owl.carousel.css`, `magnific-popup.css`, `nice-select.css`,
`availability-calendar.css`) is ignored — every token below comes from
`main.css`.

## Section map (1:1, in DOM order)

1. `header` — contact topbar (phone "+880 1234 654 953", "support@colorlib.com")
   + centered logo + nav: Home, About us, Gallery, Pages ▾ (Generic, Elements).
2. `section.banner-area.relative` — full-screen hero, `background: url(../img/header-bg.jpg)`
   cover, `.overlay-bg { opacity:.3; background-color:#7f3f3b }`, centered white
   H1 "James & Julie are Getting Married" (72px / weight 700). The screenshot
   shows the purple gradient wash over the right half of the photo.
3. `section.About-area.pt-100.pb-60` — owl-carousel, **two slides**:
   "About the Sweet Cute Bride" (`img/about.png`) and "About the Handsome
   Groom" (`img/about2.png`). `h1 { font-weight:100 }` with `h1 span { font-weight:600 }`
   (the bold word). Prev/next: `.carousel-trigger` at `right:80px`, 40px white
   squares, 1px `#eee` border.
4. `section.date-area` — centered strip: "Wedding Day : 20 March 2018 at 19.00 pm".
5. `section.gallery-area.pt-100#gallery` — H1 "Our Pre Wedding Photo Gallery" +
   lead paragraph; `.single-gallery.active-gallery-carusel` slider with six
   images (g1–g6). **No `isotope`/`data-filter` markup anywhere in the page** —
   the gallery is a slider, not a filterable grid.
6. `section.countdown-area.pt-100` — four values: 29 Days / 22 Hours / 23
   Minutes / 52 Seconds (static text in the reference DOM). `.clockinner1`
   carries a soft drop shadow.
7. `section.section-gap.info-area` — `background-color:#f9f9ff`. "Wedding
   Information" paragraph + two cards: "Main Ceremony" and "Wedding Party"
   (`img/info1.jpg`, `img/info2.jpg`), each with meta: Date: Friday, 20 March
   2018 · Time: 19.00 · Address: 56/8, West Panthapath.
8. `section.reservation-area.section-gap.relative` — `background: url(../img/reservation.jpg)`
   cover. "Reservation Form" + intro copy, meal-preferences select (Meal 1/2/3),
   number-of-guests selector (data-value 1/2/3), `input[name=name]`,
   `input[name=email]`, `textarea[name=message]`, submit button "Confirm now"
   (pill, gradient). Inputs: `border-radius:0; background-color:transparent;
   border:1px solid #656463;` white text; textarea 150px.
9. `footer` — links Home / About us / gallery / reservations + copyright line
   (paraphrase it; the repo convention replaces attribution with a
   "Component Dock" link to https://www.componentdock.com/).

## Design tokens (from `main.css`)

- Brand purple: **#c931ff** (25 declarations — accents, hovers, active nav).
- Primary gradient (buttons, hero/section washes): **linear-gradient(0deg, #ca2fff 0%, #8e96f8 55%, #53fff0 100%)** (6 occurrences).
- Neutrals: body text **#222222**, muted **#777777**, light wash **#f9f9ff**
  (28 declarations — info area + alternating bands), borders **#f1f1f1** / **#eee**.
- Hero overlay: **#7f3f3b** at 0.3 opacity (warm brown wash under the purple gradient).
- Accent swatches present in the sheet (secondary palette): #4cd3e3, #f4e700,
  #f44a40, #38a4ff, #73fbaf, #a367e7.
- Font: **"Poppins", sans-serif** (Google Fonts) for headings and body;
  hero H1 72px/700 white; `.About-area h1` weight 100 with a 600-weight span
  (and the reservation fields at 200), so the `<link>` must request the whole
  `100;200;300;400;500;600;700` set the reference host injects — a `400;500;700`
  link would render the thin treatments at 400.
- Buttons: pill (`border-radius:25px`), white text, gradient fill, line-height
  42px, padding 0 30px.
- Radii in use: 25px (buttons), 20px (cards), 8.5px/8px/3px (misc), 0 (form fields).
- Form fields: transparent background, 1px #656463 border, radius 0.

## Recreation deltas (intentional, documented for the PR)

- Placeholder imagery: `https://picsum.photos/seed/nuptials-<n>/<w>/<h>` — no
  ColorLib assets copied; Poppins loaded via Google Fonts `<link>`; icons from
  `lucide-react`.
- Chrome: repo-standard Navbar (site name, Home link, dark-mode toggle) and
  Footer (Component Dock link) replace the ColorLib topbar/attribution.
- Countdown: renders a live timer; tests assert the static/test-safe values.
- Reservation + contact forms are client-side only (no backend).
- The "Pages ▾" dropdown (Generic/Elements) is not recreated — those were
  ColorLib's own demo pages, out of scope for a single-page template.

## Implementer quick-start

1. `npm run spec:validate` for `template-nuptials` (spec is the claim marker).
2. Copy the simplest multi-section app (`apps/aurora`) → `apps/nuptials`,
   rename the package to `@free-react-templates/nuptials`, set
   `public/CNAME` to `nuptials.free.componentdock.com` and `homepage`
   accordingly; keep `injectUiSource()` in `vite.config.ts`.
3. TDD in spec order: Navbar → Hero → About (slider) → DateStrip → Gallery
   (slider) → Countdown → InfoCards → Reservation → Footer → App composition.
4. Gate: `scripts/verify-app.sh nuptials` (typecheck + lint + 100% coverage +
   build); full `npm run gate` runs in CI.
5. Bookkeeping on main after merge: mark TEMPLATES.md line 3105 `[x]` with the
   surge URL, regenerate README status.

# JobBoard — Design Notes

Source: ColorLib **Jobboard** — `https://colorlib.com/wp/template/jobboard/`
Live preview: `https://preview.colorlib.com/theme/jobboard/` (HTTP 200, 25,563 B, re-read 2026-10-24)
Served title: `JobBoard — Website Template by Colorlib`
Sheets (token authority): `css/style.css` 37,406 B · `css/custom-bs.css` 36,236 B
Shipped: https://jobboard.free.componentdock.com

A job-board landing page: lime-on-white, Nunito throughout — hero with a three-field
search bar over a photo, a trending-keyword chip row, a stats band on the same photo
overlay, a job-card grid, a "Looking For A Job?" CTA, a client-logo row, a testimonial
carousel, a mobile-app band and a four-column footer.

Provenance note (2026-10-24): this brief and `openspec/specs/template-jobboard/spec.md`
were corrected together. Both previously recorded ColorLib "Careers" and its royal blue
`#1644ba`; the app has never rendered that design — its copy is Jobboard's and its palette
is Jobboard's lime `#89ba16` (measured: 20 declarations in `style.css`, 21 in
`custom-bs.css`; the sheets' other frequent literals are `#212529`, `#6c757d`, `#f8f9fa`,
`#fff568`, `#7f848c`). `verify-spec-row-mismatch.py` adjudicated the app's own strings
(`SPEC-STALE`, `docs/spec-row-mismatch.md` main `268627962`). The folder equals the source
slug, so the naming audit reports this app as a rule-5 rename candidate — that rename is the
rename stream's call, not the prep stream's.

## Design tokens (reference, measured)

| token | value | role |
| --- | --- | --- |
| brand | `#89ba16` | lime — `.btn-primary` fill/border, links, accents (20 + 21 declarations) |
| brand text | `#212529` | ink on lime buttons; also the sheet's default heading ink |
| highlight | `#fff568` | `.btn-warning` — badge/highlight pill (6) |
| text | `#343a40` | body ink (7) |
| muted | `#7f848c` / `#6c757d` | `.btn` default colour, meta rows (6 / 12) |
| surface | `#f8f9fa` | alternating bands, `.btn-light` (2 / 7) |
| card | `#ebeef0` | search/select field fills (4) |
| border | `#dee2e6` / `#eee` / `#ccc` | card and input borders |
| face | `"Nunito", sans-serif` | declared 4× in `custom-bs.css`; load via Google Fonts `<link>` |
| radii | `0.25rem` buttons, `7px` / `4px` cards and pills | theme sheet |
| buttons | solid lime, ink text, `0.25rem`, no shadow | `.btn-primary` |
| overlay | dark photo overlay (`.section-hero.overlay`, `.overlay-primary`) | hero, stats, CTA, mobile-app bands share it |

`apps/jobboard/src/index.css` expresses the brand as a full lime scale
(`--color-lime-400: #89ba16`, 500 `#7aa814`, 600 `#62850f`, tint 50 `#f7fae8` … 900 `#2a3a08`)
plus `--font-sans: 'Nunito', …`; there is no `--color-brand` token. That is an app-side
expression of the same measured brand, not a second palette.

## Document order (reference, re-read 2026-10-24)

| # | reference section | app band |
| --- | --- | --- |
| 1 | `header.site-navbar` — "JobBoard" wordmark, links (Home, About, Job Listings, Pages, Services, Blog, Contact), "Post a Job" + "Log In" | `Navbar` |
| 2 | `section.home-section.section-hero.overlay.bg-image` — "The Easiest Way To Get Your Dream Job" + search bar (title, region, type) | `Hero` |
| 3 | trending keyword chips — "Trending Keywords:" | `TrendingKeywords` |
| 4 | stats band on the photo overlay — "JobBoard Site Stats", "43,167 Job Listed", four counters | `StatsCounter` |
| 5 | `section.site-section` — job cards (Product Designer, Digital Marketing Director, Back-end Engineer (Python), Senior Art Director …) | `JobListings` |
| 6 | CTA band on the photo overlay — "Looking For A Job?" | `CtaBanner` |
| 7 | `section.site-section.py-4` — "Company We've Helped" + client logo row | `CompanyLogos` |
| 8 | `section.bg-light.testimony-full` — `owl-carousel` blockquote carousel ("Soluta quasi cum delectus…", "— Corey Woods, @Dribbble") | **not in the app** |
| 9 | mobile-app band on the photo overlay — "Get The Mobile Apps" + App Store / Play Store buttons (`href="#"` in the reference) | `MobileAppCta` |
| 10 | `footer.site-footer` — Search Trending · Company · Support · Contact Us + social row + back-to-top | `Footer` |

## Section-by-section fidelity

- **Navbar** — white bar sitting `mt-3` over the hero, wordmark left, seven links, two
  buttons right; collapses to a drawer below `lg`.
- **Hero** — full-bleed photo with the dark overlay; headline then a single flex row: text
  field ("Job title, Company…"), two selects ("Select Region", "Select Job Type") and the
  lime submit. Field fills `#ebeef0`.
- **Stats** — the same photo overlay reused; ink text on it is white, the numbers large,
  four counters in one row; the reference animates them on scroll-enter.
- **Job listings** — white band, three-column card grid; each card carries company, title,
  type, location, salary and a bookmark/apply control.
- **CTA** — overlay band, "Looking For A Job?" plus a lime button.
- **Company logos** — light band, "Company We've Helped", a wrap row of greyscale logos
  that regain colour on hover.
- **Testimonials** — `bg-light` band whose `owl-carousel` rotates a centred blockquote with
  the cite beneath. **The app ships no such band**: this is a documented app-side omission
  (`verify-app-fidelity.py` class), not a prep error — do not "fix" the brief by inventing
  tokens for it.
- **Mobile-app band** — overlay band, copy at the left, a cutout figure and a composite
  badge image at the right; the reference's two badges point at `#`.
- **Footer** — four columns (Search Trending, Company, Support, Contact Us), a social row,
  a back-to-top control and the credit line the recreation replaces with Component Dock.

## Source → React adaptation

| reference mechanism | recreation |
| --- | --- |
| Bootstrap 4 grid (`container-fluid`, `row`, `col-*`) | Tailwind grid/flex with the same breakpoints |
| `.btn-primary` lime + `0.25rem` | `bg-lime-400 text-[#212529] rounded-[0.25rem]` |
| `.overlay-primary` photo band | one overlay component reused by hero, stats, CTA and mobile-app bands |
| `owl-carousel` testimonial rotation | omitted with the band (see above) |
| `icon-*` icon font | `lucide-react` equivalents |
| photos (`images/hero_1.jpg`, logo tiles) | seeded `picsum.photos` placeholders |
| counters animation (`IntersectionObserver` in the theme JS) | `IntersectionObserver` + `requestAnimationFrame` count-up |
| `href="#"` links on badges and footer lists | in-page anchors / plain text, never dead `href="#"` |

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer SHALL link [Component Dock](https://www.componentdock.com/);
  it is the only attribution line the recreation carries.
- **Provenance ban.** No file under `apps/jobboard/` may name the source designer, carry a
  `colorlib.com` URL, or reuse the source template's name (AGENTS.md rule 5).
- **Deploy identity.** `apps/jobboard/public/CNAME` = `jobboard.free.componentdock.com` and
  the package `homepage` = `https://jobboard.free.componentdock.com`.

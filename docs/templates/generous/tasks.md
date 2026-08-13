# Generous (ColorLib Giving) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-generous`.

## Design notes (replication findings)

- **Original:** ColorLib "Giving" — free responsive Bootstrap 4 non-profit /
  charity website template (source:
  https://colorlib.com/wp/template/giving/). TEMPLATES.md has THREE copies
  (line 406 — Bootstrap category, line 1269 — Charity category, line 1298 —
  Church category; mark ALL THREE `[x]` when done). All three rows use the
  CORRECT screenshot `giving-free-template.jpg`.
- **Demo DOM analyzed:** REACHABLE — `https://preview.colorlib.com/theme/giving/`
  returns HTTP 200 (curl, 2026-08-11, 67 KB). Title: "Givig - Non-profit
  Free Bootstrap 4 Template by Colorlib" (source typo — brand renders as
  "GIVING"). This is a FULL-fidelity reference: section order, copy, buttons
  all taken from the live DOM. Token source: `css/style.css` (58 KB) +
  Bootstrap 4 utility classes (`bg-dark`, `bg-success`, `bg-warning`,
  `bg-light`).
- **Visual design:** warm charity aesthetic — mint/teal green `#79ccab`
  brand (buttons, links, icons, second overlay), success green `#28a745`
  (first overlay + fundraiser progress), dark `#343a40` navbar, white page
  with `#fafafa` light sections, dark gray `#404040` footer. Headlines +
  brand in the rounded handwritten **Gaegu** over Poppins body. Hero =
  100vh slider with left headline + right photo (NO buttons in the slide —
  "Make Donation Now" / "We Need Volunteers" are feature-row titles).
  Demo brands itself "GIVING" → recreation: **Generous**.

## Design tokens (from the live stylesheets)

| Token          | Value                                                                                                                                                             | Where                                                                                                                                                |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Brand mint     | `#79ccab` (hover `#5dc19a`, border `#54be94`)                                                                                                                     | `btn-primary` bg/border, feature-row icons + "Learn More" links, footer link hover, `.overlay-color-2` overlay                                       |
| Success green  | `#28a745`                                                                                                                                                         | `.overlay-color` overlay (featured donate), fund-raiser progress fills (`bg-success`)                                                                |
| Warning yellow | `#ffc107`                                                                                                                                                         | featured-donate progress fill (`bg-warning`)                                                                                                         |
| Dark navbar    | `#343a40` (Bootstrap `bg-dark`)                                                                                                                                   | navbar bg; links `rgba(255,255,255,.5)` → hover `.75` → active white                                                                                 |
| Button text    | `#212529` (dark on green)                                                                                                                                         | `btn-primary` text color                                                                                                                             |
| Light section  | `#fafafa` (`.bg-light` override)                                                                                                                                  | Latest Donations person cards (`person-donate`), Latest News (`site-section bg-light`)                                                               |
| Footer bg      | `#404040`                                                                                                                                                         | footer; white text; headings Gaegu 20px uppercase letter-spacing .1em; link hover `#79ccab`                                                          |
| Fonts          | Poppins + Gaegu (cursive)                                                                                                                                         | Google Fonts `<link>`s in index.html; Gaegu: navbar brand 30px uppercase .1em, hero heading 80px desktop/40px mobile, footer headings 20px uppercase |
| Hero           | 100vh slides, black overlay opacity .4, left `col-md-7` Gaegu heading, photo right; bar dots (40×2px white, opacity .3/1) + arrows bottom-right                   | `.block-31` / `.block-30`                                                                                                                            |
| Buttons        | BS4 `.btn` radius 4px; `btn-primary` mint bg + dark `#212529` text; large CTAs `py-3 px-5` (Donate Now, Read The Full Story); `btn-hover-white` variant; no pills | `.btn-primary`, `.btn-hover-white`                                                                                                                   |
| Overlays       | `.overlay-color` green `#28a745`, `.overlay-color-2` mint `#79ccab`, both opacity .9 over photo; white headings weight 900                                        | `.featured-donate`, `.featured-section`                                                                                                              |
| Progress bars  | `.custom-progress` thin (height .2rem) white track; fill `bg-success` (fundraisers) or `bg-warning` (featured); "$X raised of $Y" caption below                   | `.custom-progress(-success)`                                                                                                                         |
| Person cards   | `person-donate text-center bg-light pt-4`, 100px circular avatars, `donate-amount` flex row (label + amount)                                                      | Latest Donations                                                                                                                                     |
| Section rhythm | `.site-section` padding 4em 0; centered headings (Top Fundraisers, Latest Donations, Latest News); About Us has right links (Join Volunteer, Blog)                | —                                                                                                                                                    |
| Footer layout  | 4-col: About Us (copy + social), Blog (recent posts), Contact Info (`block-23`: address/phone/email/hours), bottom copyright "made with ♥ by Colorlib"            | `.footer`                                                                                                                                            |

## Tasks (implementation order)

1. Scaffold `apps/generous` (copy the simplest existing app; package
   `@free-react-templates/generous`; `vite.config.ts` with
   `injectUiSource()`).
2. `npm install` at repo root (registers workspace in package-lock.json;
   verify `grep -c "free-react-templates/generous" package-lock.json`).
3. `index.css` `@theme` tokens: `--color-primary: #79ccab`,
   `--color-success: #28a745`, `--color-warning: #ffc107`,
   `--color-ink: #212529`, `--color-mist: #fafafa`,
   `--color-footer: #404040`, `--font-sans: 'Poppins', sans-serif`,
   `--font-script: 'Gaegu', cursive`.
4. `index.html`: Google Fonts `<link>` for Poppins + Gaegu; document title
   "Generous — Charity Template".
5. Components (in order): `Navbar` → `Hero` → `FeatureRow` → `FeaturedDonate`
   → `Fundraisers` → `Donations` → `FeaturedSection` → `LatestNews` →
   `AboutUs` → `Footer`; compose in `App.tsx`.
6. Data: fundraisers (6× "Children Needs Food", "$8,100 raised of $30,000"),
   donors (Jean Smith $1,150 / Christine Charles $150 / Albert Sluyter $534 /
   Andrew Holloway $2,500), posts (Be A Volunteer Today / You May Save The
   Life of A Child / Children That Needs Care), mini-cards (Give Meal A Day /
   Free Education For African Children / Join As A Volunteers).
7. Icons: lucide-react for features/social-adjacent (e.g. HeartHandshake,
   Users, BriefcaseMedical) — brand social icons as inline SVG (lucide
   removed brand glyphs). Contact icons: MapPin, Phone, Mail, Clock.
8. Placeholders: picsum — hero photos pinned to verified warm/people scenes
   (`picsum.photos/id/64`, `id/823`, `id/996`; the arbitrary
   `generous-hero-N` seeds rendered an airport-tarmac scene); featured /
   fundraiser ~600×400, avatars 100×100, thumbs ~150×100 (all distinct).
9. TDD per section; 100% coverage; verify with `scripts/verify-app.sh
generous` (or `npm run verify:app`).
10. PR description: source (ColorLib Giving, preview URL), tokens, dup-rows
    (mark lines 406/1269/1298 `[x]` after deploy), what differs (name,
    placeholders).

## Fidelity pitfalls to watch

- Hero has NO buttons — the three "…" headings below the hero are the
  feature row (Medical Mission / Make Donation Now / We Need Volunteers).
- `btn-primary` text is DARK `#212529` on mint, not white.
- Latest Donations and Latest News sit on `#fafafa`, other sections white.
- Fundraiser progress fills are green `#28a745`; the featured-donate one is
  yellow `#ffc107`.
- Navbar brand is Gaegu uppercase with letter-spacing .1em (not Poppins).
- Desktop + mobile navs render duplicate links in the DOM — use
  `getAllByRole` in tests and index the mobile one last.
- Text queries: split amounts so the regex target is a direct text node
  (e.g. `<p>Donated</p>` + `<span>$1,150</span>`), per the price-token
  pitfall (Roadly).

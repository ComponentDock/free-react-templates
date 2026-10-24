# Spec ↔ row mismatch — does the spec name the design its row says it ships?

Two records claim which ColorLib design an app recreates:

- the **spec** — `openspec/specs/template-<name>/spec.md`, whose `## Purpose`
  names the source design and usually links `colorlib.com/wp/template/<slug>/`;
- the **row** — `TEMPLATES.md`, `[colorlib](https://colorlib.com/wp/template/<slug>/)`
  on the line that links `<name>.free.componentdock.com`.

Nothing compared them. `scripts/verify-provenance-grammar.py` reports the
disagreement as one counted note (`SPEC-ROW-MISMATCH`) and moves on; rule 5
(`audit-naming.mjs`) only asks whether the folder differs from the **quoted**
source name. So an app could carry a spec for design A, a row for design B and a
body built from design C, and every audit would stay quiet. This axis reads that
note.

```
python3 scripts/verify-spec-row-mismatch.py            # offline census
python3 scripts/verify-spec-row-mismatch.py --network  # adjudicate the drift
python3 scripts/verify-spec-row-mismatch-controls.py   # 18/18 (6 GATE)
```

## What it measures

Every spec lands in exactly one offline bucket:

| bucket     | meaning                                                                 |
| ---------- | ----------------------------------------------------------------------- |
| `AGREE`    | the spec's source slug is on at least one row that links the app         |
| `DRIFT`    | it is not — flag `SPEC-ROW-MISMATCH`                                     |
| `PREP`     | no `apps/<folder>`: nothing ships, so there is no row claim to compare   |
| `UNLINKED` | the app is not on any row (no such case today)                           |
| `NO-SLUG`  | the spec names no resolvable source slug — flag `SPEC-SLUG-UNRESOLVED`   |

Notes: `ROW-MULTI` (rows for ≥2 different designs link this app),
`SLUG-OWNER` (the spec's slug has rows, and they link a *different* app),
`NO-ROW-SLUG` (the slug appears on no row), `NO-APP`.

`--network` adjudicates each `DRIFT` case: the app's own copy (string literals
and JSX text under `apps/<name>/src`) is searched in the rendered body of the
spec's design and of the row's design, and the winner names the stale record:

| verdict      | meaning                                                     | fix belongs to      |
| ------------ | ----------------------------------------------------------- | ------------------- |
| `SPEC-STALE` | the app matches the row's design, not the spec's             | prep (`spec.md`)    |
| `ROW-POINTER`| the app matches the spec's design, not the row's             | implementer / rows  |
| `BOTH-STALE` | the app matches a third design in the same family            | both                |
| `UNRESOLVED` | no candidate carries the copy (rebuild, re-skin, twin demos) | prep, by hand       |

## Census (re-measured 2026-10-24s, main after PR #1865 — the two `fitnessgym` rows now point at the built `grithaus` app, so that design left §2 of `docs/row-multiplicity.md`)

|                                    | count |
| ---------------------------------- | ----: |
| specs                              | 3,237 |
| apps                               | 1,711 |
| `AGREE`                            | 1,704 |
| `DRIFT`                            | **3** |
| `PREP` (spec-only)                 | 1,526 |
| `ROW-MULTI` apps                   | 33    |
| `SLUG-OWNER` subjects              | 6     |

The chain that got here: `19` row-mismatch subjects measured, `17` after the
row-map fix below, `15` after the two provenance corrections below, then `13` on the
2026-10-24 re-read, `12` after the `bistro` rewrite (spec `accordion-02` → `allfood`), `11`
after the `concertina` rewrite (spec `accordion-05` → `accordion-16`; census
`AGREE=1692 DRIFT=11` at that commit), `10` after the `formwell` rewrite (spec
`contact-form-v15` → `contact-form-08`; census `AGREE=1693 DRIFT=10`), `9` after the `prose`
rewrite (spec `blogger` → `author`; census `AGREE=1694 DRIFT=9`), `8` after #1858 re-pointed
both `spark` rows to the rebuilt `flint` (`AGREE=1695 DRIFT=8`), `7` after the `vellum` rewrite
(spec `accordion-16` → `readit`; census `AGREE=1696 DRIFT=7`), `6` after the `zenith` rewrite
(spec `bootstrap-buttons-05` → `saasify`; census `AGREE=1697 DRIFT=6` at that commit, apps `1704`),
and `5` after the Givehope design was built as **`alms`** and row 1270 re-pointed to it
(`AGREE=1698 DRIFT=5`, apps `1705`), and `4` after the accordion-19 design was built as
**`clasp`** and row 658 re-pointed to it (`AGREE=1699 DRIFT=4`, apps `1706`, specs `3,231`), and `3`
after the Logistico design was rebuilt as **`cargonaut`** and row 2966 re-pointed to it
(`AGREE=1700 DRIFT=3`, apps `1707`, specs `3,232`), and the Dreamrs design — whose three rows
credited `skyline` while that app recreates Rooftop — was built as **`manorly`** (PR #1862) and its
rows 106 / 1967 / 2587 re-pointed (`AGREE=1701 DRIFT=3`, apps `1,708`, specs `3,233`, `ROW-MULTI`
35, `SLUG-OWNER` 6), and the Shopmax design — whose three rows credited `bazaar` while that app
recreates Store — was built as **`drapely`** (PR #1863) and its rows 230 / 1602 / 1730 re-pointed
(`AGREE=1702 DRIFT=3`, apps `1,709`, specs `3,236`, `ROW-MULTI` 34, `SLUG-OWNER` 6), and the Juli
design — whose two rows credited `petal` while that app recreates Florist — was built as
**`saffron`** (PR #1864) and its rows 266 / 2402 re-pointed (`AGREE=1703 DRIFT=3`, apps `1,710`,
specs `3,237`, `ROW-MULTI` 33, `SLUG-OWNER` 6), and the Fitnessgym design — whose two rows credited
`vigor` while that app recreates Endurance — was built as **`grithaus`** (PR #1865) and its rows
397 / 1846 re-pointed (`AGREE=1704 DRIFT=3`, apps `1,711`, specs `3,237`, `PREP` 1,526, `ROW-MULTI`
33, `SLUG-OWNER` 6). `dreamrs`, `shopmax`, `juli` and `fitnessgym` therefore leave
`docs/row-multiplicity.md` §2, which now counts **14** designs with no app.

## The 3 remaining drift cases (adjudicated against the live previews)

| app | verdict | spec says | row says | copy found on the winner |
| --- | --- | --- | --- | --- |
| `bellows` | `BOTH-STALE` → `accordion-01` | accordion-15 | accordion-03 | "Accordion #01", "Spa Therapies", "Face Treatments" |
| `cirrus` | `UNRESOLVED` | cloudtemplate | saas | — (app copy is fintech; neither demo carries it) |
| `sudsy` | `ROW-POINTER` | carwash | sparkleclean | "Your car will look as your new one", "We have an application" |

Three of the ten were **spec-side** (`prose`, `vellum`, `zenith`): the spec described a design the
app does not render, and in all three the body (token table, section list, Requirements) was the
other design's too — only `jobboard` and `medical` were provenance-only. `prose`, `vellum` and
`zenith` are now fixed, so **no** spec-side case remains: the three left are one **row pointer**
(`sudsy`), one **both-stale** (`bellows`) and one still **unresolved** (`cirrus`). `logistico` left
the table when the Logistico design was rebuilt as **`cargonaut`** (PR #1861) and row 2966
re-pointed: the app called `logistico` renders Thelogistico's copy at 19 exclusive hits vs 1, and
Thelogistico already ships as `logistix`, so `apps/logistico` joined the `UNLINKED` surplus class.
`spark` left this table when #1858 re-pointed both of its rows to the rebuilt `flint`, `givehope`
left it when the design was rebuilt as `alms` and row 1270 re-pointed — `apps/givehope` is a
surplus duplicate of `givemore` (Bcharity) — and `stride` left it when the accordion-19 design it
was falsely credited with was actually built as **`clasp`** (PR #1860). All four surplus apps
(`spark` → `flowly`, `givehope` → `givemore`, `stride` → `grit`, `logistico` → `logistix`) are the
census's `UNLINKED` class: complete, deployed, `TEMPLATES.md`-less duplicates of a design that
already ships.

## Fixed so far

| app | was | now | why it was safe |
| --- | --- | --- | --- |
| `clasp`(new) + row 658 | ColorLib "Accordion 19" credited to `apps/stride`, whose copy is Stamina's — so the accordion-19 design was never built | ColorLib "Accordion 19" built as **`clasp`** (`apps/clasp`), measured lime `#72c02c` on `#fff`, hairline `#f9f9f9`, Roboto, one band (heading · 3-row list · credit) | row 658 (`## Bootstrap Accordions (20)`) was a false `[x]`: `--network` scored stride's copy 19 exclusive hits for stamina vs 0 for accordion-19 (`ROW-POINTER`), and stamina already ships as `grit`, so stride became the census's third `UNLINKED` surplus duplicate. The design was rebuilt from `theme/bac/accordion-19/` (page 4,272 B, sheet 9,070 B sha `3a36f9f4…`, `snippet.js` 4,219 B sha `18856670…`, `rebuilt: False`); spec `template-clasp` + `docs/templates/clasp/` written with it and row 658 re-pointed (PR #1860) |
| `alms`(new) + row 1270 | ColorLib "Givehope" credited to `apps/givehope`, an app whose copy is Bcharity's (already shipped as `givemore`, row 1253) — so the Givehope design was never built | ColorLib "Givehope" rebuilt as **`alms`** (`apps/alms`), measured yellow `#f7ca44` on `#fff`/`#fafafa`, `#404040` footer, Dosis/Overpass, the ten reference bands (nav · hero · counter + intro · features · fundraisers · donations · success story · news · volunteer form · footer) | the new app's copy is Givehope's own ("Served Over", "Children in 150 Countries", "Latest Fundraisers", "Latest Donations", "We have raised $100,000"); tokens re-measured from `theme/givehope/css/style.css` (23,189 B, sha `48b382c5…`); spec `template-alms` + `docs/templates/alms/` written with it and row 1270 re-pointed to `alms` (PR #1859), leaving `apps/givehope` as the second `UNLINKED` surplus duplicate |
| `jobboard` | ColorLib "Careers", tokens `#1644ba`/Nunito, Careers sections | ColorLib "Jobboard", measured lime `#89ba16`, the nine reference bands, Requirements aligned to the app | the app's copy is Jobboard's; the row already said `jobboard`; tokens re-measured from `css/style.css` + `custom-bs.css` |
| `medical` | ColorLib "Medical Wordpress Themes" (a round-up article, no demo) | ColorLib "Medical" | the body, tokens and section order were already measured from `/theme/medical/`; only the name was wrong |
| `ledger` | ColorLib "Accounting", green `#1BA12D`/Montserrat, accounting sections | ColorLib "Daren", measured red `#ef1313` + `"Source Serif Pro"` display face, the eight Daren bands | the app's copy is Daren's (`Creative & Design`, `Search Objects`, `LOADING MORE`); **both** spec and `docs/templates/ledger/` were rewritten, tokens re-measured from `theme/daren/css/style.css` (123,435 B, sha `427b90d0…`) |
| `bistro` | ColorLib "Accordion 02", warm-cream `#fcf8f2`/amber `#d4a373`, an "Our Specialties" Breakfast–Lunch–Dinner–Drink–Wine accordion | ColorLib "Allfood", measured orange `#ff5600` (+ sweep `#e74d00`), Josefin Sans/Poppins, the ten reference bands (hero · about · menu mosaic · about 2 · booking · services · subscribe · blog · footer) | the app's copy is Allfood's (`About Our Restaurant`, `Delicious Food`, `Best Chef`, `Quality Food`, `Our Recnet News`); **both** spec and `docs/templates/bistro/` were rewritten, tokens re-measured from `theme/allfood/assets/css/style.css` (58,090 B, sha `8e1b11a8…`). Two rows (330 `## Bootstrap`, 2666 `## Restaurant`) link `bistro` for this one design — `ROW-MULTI`, no pointer to move, no rename (`bistro` ≠ `allfood`) |
| `concertina` | ColorLib "Accordion 05" (Poppins, mint `#75d6d1`, a seven-band marketing page) | ColorLib "Accordion 16", measured lime `#72c02c` on `#efefef`, `#f9f9f9` 40px pills, one band | the app's copy is Accordion 16's (`Bootstrap Accordion #6`, `How to download and register`, `How to link your paypal and bank account` — each 1 hit in a16, 0 in a05); **both** spec and `docs/templates/concertina/` were rewritten, tokens re-measured from `theme/bac/accordion-16/css/style.css` (9,013 B, sha `e61cfd1c…`). No row moved (`[concertina]` already sat on row 655, `## Bootstrap Accordions (20)`), no rename |
| `prose` | ColorLib "Blogger" (`/theme/blogger/`, `css/main.css` 46 KB, Poppins, `#69B4FD` + a `45deg #62bdfc → #8490ff` gradient), a blog/magazine landing: likes/comments hero, "Latest News from all categories" carousel, Travel grid, Fashion grid, Blogger Team carousel, newsletter footer | ColorLib "Author", measured `#17b978` on white, Raleway/Open Sans, `#263b5e` heading ink, 47 anchors (28 dead `#`, 7 nav, 8 chapter deep links), the eleven reference bands (hero · publishers · about · counters · chapters · services · reviews · books · author · contact · footer) | the app's copy is Author's (`Best Seller Book Of The Week` 1/0, `About The Book` 1/0, `What's Inside The Book` 1/0, `Kinds Words From Customers` 1/0, `My Other Books` 1/0, `Clue Of The Wooden Cottage` 1/0, `Franklin Henderson` 2/0 against blogger); the section copy the OLD spec prescribed is in neither page (`"Latest News from all categories"` 0 hits in the live blogger demo), which is why this one was a body rewrite and not a rename. **Both** spec and `docs/templates/prose/` were rewritten, tokens re-measured from `theme/author/css/style.css` (62,455 B, sha `a39d7506…`). Row **2291** (`## One Page (91)`) already said `author`, no rename (`prose` ≠ `author`) |
| `formwell` | ColorLib "Contact Form V15" (`/template/contact-form-v15/`, demo `etc/cf/ContactFrom_v15/`, 12,176 B sheet, Poppins + `#57b846`), a map-`iframe` page behind a banner card with "Contact Us" / "Feel free to drop us a line below!" and Phone + underline fields | ColorLib "Contact Form 08", measured green `#71a95a` (+ hover `#5a8947`), 5px radii, 50px borderless white fields under `0 8px 19px -13px rgba(0,0,0,.09)`, 83.33% card with a 58.33% form column on a photo ground, 12px/600 uppercase labels | the app's copy is contact-form-08's (`Get in touch with us` 1/0, `Email Address` 1/0, `Send Message` 1/0, `Subject` 2/0 against v15); **both** spec and `docs/templates/formwell/` were rewritten, tokens re-measured from `theme/bootstrap/contact-form-08/css/style.css` (14,838 B, sha `2e795975…`, plus `snippet.js` 2,687 B sha `dd02a14f…`); the zip's two files hash identically, so the archive is the live twin. Row **1411** already said `contact-form-08`, no rename (`formwell` ≠ `contact-form-08`) |
| `spark` (rows 626 + 1177) | ColorLib "Spark" credited to `apps/spark`, a 25→0 copy match for **Appco** | the Spark design rebuilt as **`flint`** (`apps/flint`); both rows re-pointed at it | the app's own copy is Appco's at 25 exclusive hits vs 0 for Spark (`--network --only spark`), and Appco is already shipped as `flowly` (row 56). `apps/spark` therefore leaves the DRIFT bucket and becomes the census's first `UNLINKED` app — a surplus duplicate of `flowly`, the `bellows`/`pleat` shape, not a second ship of Spark. Fidelity measured from `theme/spark/css/style.css` (60,200 B, sha `d463cfe0…`, teal `#367f7c`) |
| `vellum` | ColorLib "Accordion 16" (`/theme/bac/accordion-16/`, lime `#72c02c`, one accordion band) | ColorLib "Readit", measured gold `#ffd369` + the `45deg #f200ff → #ffba42` hero wash at `.8`, Poppins, the five reference bands (navbar · gradient hero · nine magazine rows · five-page pagination · four-column `#222831` footer) | the app's copy is Readit's (`Hello! Welcome to` 1/0, `Build a website in minutes with Adobe Templates` 9/0, `latest News` 1/0, `Have a Questions?` 1/0, `203 Fake St. Mountain View…` 1/0); **both** spec and `docs/templates/vellum/` were rewritten, tokens re-measured from `theme/readit/css/style.css` (65,873 B, sha `925bebf2…`) and `js/main.js` (6,101 B, sha `62bfa488…`). One row (282, `## Blog (60)`) links `vellum` for this design — no pointer to move, no rename (`vellum` ≠ `readit`) |
| `zenith` | ColorLib "Bootstrap Buttons 05" (`/template/bootstrap-buttons-05/`, indigo `#4f46e5`, Inter, a button gallery: solid/outline/ghost variants, shape and size demos, a live prop playground) | ColorLib "Saasify", measured violet `#7c3aed` (+ `#6d28d9` hover, `#8b5cf6` mid, `#5b21b6` deep) with a cyan `#06b6d4` gradient endpoint, Inter 5.2.8, one hashed Astro sheet, the seven reference bands (navbar · hero + stats + dashboard · six features · three tiers + billing switch · three testimonials · gradient CTA · `#111827` footer) | the app's copy is Saasify's (`Active users` 1/0, `Uptime SLA` 1/0, `Everything you need to ship faster` 1/0 against bootstrap-buttons-05); **both** spec and `docs/templates/zenith/` were rewritten, tokens re-measured from `theme/saasify/_astro/Base.D0NGrHY1.css` (46,802 B, sha `4c1d7758…`). Two rows (158 `## Astro (48)`, 2929 `## Tailwind Css (48)`) list the same design and both link `zenith` — the same slug twice, so no `ROW-MULTI`, no pointer to move, no rename (`zenith` ≠ `saasify`) |

Both corrections make the rule-5 audit **louder, not quieter**: the folders
`apps/jobboard` and `apps/medical` now normalise to their own source slug, so
`verify-provenance-grammar.py` lists them among the `RULE5` violations (it read
8 `RULE5` + 1 `RULE5-HIDDEN` before this run; `justlaw` was renamed to `lexon`
concurrently, and the two corrections replace it: 9 + 1 after). That is the
correct reading of the repo — the wrong spec was hiding two unchanged source
names. Renaming is the rename stream's call, not the prep stream's.

## Queue (docs-only, in order of yield)

1. **No spec rewrites left.** All seven spec-side cases are closed — `ledger`→daren,
   `bistro`→allfood, `concertina`→accordion-16, `formwell`→contact-form-08, `prose`→author,
   `vellum`→readit and `zenith`→saasify landed 2026-10-24, spec **and** docs each time. The census now
   reads `AGREE=1699 DRIFT=4` with **zero** `SPEC-STALE` subjects; what remains is row-pointer,
   both-stale and unresolved work, which belongs to the implementer/rename stream (items 2–5).
   The family-demo prefixes still matter for anyone re-reading those designs: `accordion-*` is
   `/theme/bac/`, `bootstrap-buttons-*` is `/theme/bb/`, `contact-form-*` is `/theme/bootstrap/`,
   and the four-page business themes resolve from the bare slug (`/theme/saasify/`,
   `/theme/author/`, `/theme/readit/`).
2. **Two row pointers left** (implementer/rename stream) — the rows below credit the
   app with a design it does not recreate, so they are false `[x]`s and their
   designs are, in fact, unshipped:

   | row | line | links | which recreates |
   | --- | ---: | --- | --- |
   | ~~Givehope~~ | ~~1270~~ | ~~`alms`~~ | — **fixed**: the design was built as `alms` and row 1270 re-pointed to it |
   | Logistico | 2966 | `logistico` | thelogistico |
   | ~~Spark~~ | ~~626~~ | ~~`spark`~~ | appco — **fixed**: rows 626/1177 now link `flint`, which recreates Spark |
   | ~~Accordion 19~~ | ~~658~~ | ~~`stride`~~ | stamina — **fixed**: the design was built as `clasp` (PR #1860) and row 658 re-pointed to it |
   | Sparkleclean | 1178 · 2937 | `sudsy` | carwash |

   `apps/spark` and `apps/logistico` also collide with a *different* design's
   slug — the `itkol` shape from `docs/provenance-grammar.md`. `Sparkleclean` needs
   no rebuild: `gleam` already ships that design (row 166) and `sudsy` is a
   duplicate of `washbox` (Carwash), so row 1178 only needs re-pointing.
3. **One duplicate app pair** — `bellows` and `pleat` both recreate
   `accordion-01`; the `accordion-01` row links `pleat`, and `bellows` sits on
   the `accordion-03` row while rendering accordion-01's price list.
4. **Two unresolved** — `btnspark` (both candidates are button galleries with no
   own prose; decide from the screenshot) and `cirrus` (the app is a
   fintech/investment landing; neither CloudTemplate nor SaaS carries a single
   one of its strings, so its true source is a third design).
5. **34 `ROW-MULTI` apps** — every one of these is linked from two different
   designs' rows, so at least one row per pair credits an app with a design it
   cannot ship: `amplify(uza/amplify) atelier(ashion/design)
   batterly(cakes/cake) counsel(ariclaw/whisper)
   depot(warehouse/depot) domicile(occupy/homespace) dossier(jackco/alias)
   feast(foodblog/flatter) gallery(portfolio-wordpress-themes/reopen)
   glamour(look/glamour) glint(prodent/glint) groove(hnband/colorlib-regform-35)
   imagine(creative-agency-2/imagine) inkwell(axole/contact-form-v11)
   ironpulse(topgym/crossbody) landing(landing-page-wordpress-themes/landing)
   learnly(academia/academics) lodgely(colorlib-booking-16/sogo)
   mortar(buildream/grunt) nova(colorlib-error-404-19/nova)
   orbit(colorlib-error-404-10/orbit) petal(juli/florist)
   pleat(accordion-01/accordion-13) pulse(saita/pulse)
   reachout(contact-form-13/contact-form-16) resume(personalportfolio/resume)
   roost(realtors/stayhome) skyline(dreamrs/rooftop) stave(accordion-14/musico)
   studio(carousel-20/studio) summit(confer/summit) verdant(neos/alazea)
   vigor(fitnessgym/endurance/vigor) villa(layal/villa) voyage(passport/voyage)`.
   Several pairs are near-duplicate ColorLib listings (`cakes`/`cake`,
   `academia`/`academics`); the adjudication above is per pair, not per app name,
   so this is its own axis.
6. **Two surplus preps of a design that already shipped** — `openspec/specs/template-reachpad/`
   and `openspec/specs/template-formspot/` both name **`contact-form-08`**, the design row 1411
   already ships as `formwell`. Neither has an `apps/<name>` folder and neither appears in
   `TEMPLATES.md`, so they are duplicate stock rather than competing claims (the census reports
   them as `NO-APP`): no implementer should build them, and the only decision is whether to delete
   them or keep them as inventory.

## Pits that cost iterations

- **The row's link TEXT is not the app name.** Rows carry `[Atelier]`, `[Villa]`,
  `[Landing]`, and the pre-fix regex required the text to equal the subdomain, so
  `atelier`, `landing` and `villa` read as "no row links this app" and were
  reported as drift they were not (19 → 17). Match the **subdomain**, ignore the
  label — the same fix went into `verify-provenance-grammar.py`.
- **One shared phrase is not provenance.** Every accordion demo carries "behind
  the word mountains"; a raw count crowned `accordion-03` for `bellows` (which is
  `accordion-01`). Only copy that matches exactly ONE candidate scores, and a
  verdict needs ≥ 2 exclusive hits (`MIN_EVIDENCE`).
- **A single hit is a coincidence.** With a floor of 1, `cirrus` "matched"
  CloudTemplate on the phrase "Website Hosting". It is a fintech app.
- **A tie refuses.** contact-form-08 and -09 are twins ("Get in touch with us" in
  both); with the exclusive rule `formwell` breaks the tie on "Full Name" /
  "Email Address", but when nothing separates two designs the verdict is
  `UNRESOLVED`, never a coin flip.
- **Family demos live under a prefix.** `accordion-*` is `/theme/bac/`,
  `bootstrap-buttons-*` is `/theme/bb/`, `contact-form-*` is
  `/theme/bootstrap/`, `contact-form-v15` is `/etc/cf/ContactFrom_v15/index.html`.
  The slug-only ladder resolves none of them.
- **Only the bootstrap families ship archives.** `downloads/free/<slug>.zip`
  exists for `accordion-01`, `contact-form-08`, `contact-form-v15`,
  `bootstrap-buttons-*` and 404s for `bcharity`, `givehope`, `allfood`, `author`,
  `ashion`, `design`, `landing`, `cloudtemplate`, `saas` — so the un-versioned
  twin is not a fallback for business themes.
- **Round-up slugs have no demo.** `medical-wordpress-themes`,
  `landing-page-wordpress-themes`, `wordpress-wedding-themes` are articles whose
  "template" is a screenshot. A spec citing one is not wrong about the artwork it
  was commissioned from, but it cannot be a fidelity reference — name the demo.
- **`-p2` has no `node_modules`**, so `npm run spec:validate` cannot run there;
  the structural gate used here is `## Purpose` + `## Requirements` + at least one
  `#### Scenario:` per edited spec, plus the heading count unchanged elsewhere.

## The docs layer of a drift case (found 2026-10-24 while rewriting `ledger`)

A corrected spec is not a corrected prep. `ledger`'s spec was rewritten, but its
`docs/templates/ledger/tasks.md` still said "follows the SPEC" while quoting the
*other* design, and its `design-notes.md` wrote a token table in the shape
`## Design tokens (`apps/<name>/src/index.css` `@theme`)` whose values belonged to
the discarded palette. Implementers read the brief first; a spec-only fix leaves
the misdirection in place. `ledger` therefore had spec **and** docs rewritten
together, and its jobboard-style sibling shows the residual:

- `docs/templates/jobboard/design-notes.md:86` defines `--color-brand: #1644ba;`
  (Careers blue) and `:14`/`:24`/`:52` prescribe it for buttons and card accents,
  while `openspec/specs/template-jobboard/spec.md:37` measures Jobboard's lime
  `#89ba16`. The brief is now the wrong design's brief.
- `docs/templates/jobboard/tasks.md:3` says the spec records `careers` — it records
  `jobboard`.

`verify-docs-drift.py` cannot see this class: it flags a dead-reference claim and a
hex the spec's `#old → #new` delta line supersedes, and a provenance-only rewrite
carries no such delta line (731 flags corpus-wide, none of them `jobboard`). The
missing axis is **docs-source vs spec-source**: parse the source slug out of
`docs/templates/<app>/` (the `Source`/`Reference` line and any
`colorlib.com/wp/template/<slug>/` URL) and compare it with the spec's `Source
slug:` — a mismatch is the same `SPEC-STALE` finding one layer down. Until it
ships, treat any drift fix as **two artefacts**: `spec.md` *and*
`docs/templates/<app>/`.

Both briefs were corrected in this run: `ledger` (with its spec) and `jobboard`
(brief only — its spec was already right). The jobboard brief prescribed Careers'
blue `#1644ba` in a `@theme` block and Careers' copy anchors ("Job Board
Statistics", "Featured Jobs", "Top Companies Hiring", "Ready to Start?") where the
live reference renders "JobBoard Site Stats", "Company We've Helped" and "Looking
For A Job?"; it also omitted the reference's testimonial carousel band, which the
app legitimately does not ship. The remaining six rewrites in the queue must carry
their briefs with them.

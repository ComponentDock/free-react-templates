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

## Census (measured 2026-10-24f, main `47b990932`; re-measured 2026-10-24g after the `concertina` rewrite, and again 2026-10-24h after the `formwell` rewrite)

|                                    | count |
| ---------------------------------- | ----: |
| specs                              | 3,228 |
| apps                               | 1,703 |
| `AGREE`                            | 1,693 |
| `DRIFT`                            | **10** |
| `PREP` (spec-only)                 | 1,525 |
| `ROW-MULTI` apps                   | 36    |
| `SLUG-OWNER` subjects              | 20    |

The chain that got here: `19` row-mismatch subjects measured, `17` after the
row-map fix below, `15` after the two provenance corrections below, then `13` on the
2026-10-24 re-read, `12` after the `bistro` rewrite (spec `accordion-02` → `allfood`), `11`
after the `concertina` rewrite (spec `accordion-05` → `accordion-16`; census
`AGREE=1692 DRIFT=11` at that commit), and `10` after the `formwell` rewrite (spec
`contact-form-v15` → `contact-form-08`; census `AGREE=1693 DRIFT=10`).

## The 10 remaining drift cases (adjudicated against the live previews)

| app | verdict | spec says | row says | copy found on the winner |
| --- | --- | --- | --- | --- |
| `bellows` | `BOTH-STALE` → `accordion-01` | accordion-15 | accordion-03 | "Accordion #01", "Spa Therapies", "Face Treatments" |
| `cirrus` | `UNRESOLVED` | cloudtemplate | saas | — (app copy is fintech; neither demo carries it) |
| `givehope` | `ROW-POINTER` | bcharity | givehope | "Bless others with your gift", "Become A Volunteer" |
| `logistico` | `ROW-POINTER` | thelogistico | logistico | "We Give You Complete Control", "of Your Shipments" |
| `prose` | `SPEC-STALE` | blogger | author | "Best Seller Book Of The Week", "About The Book" |
| `spark` | `ROW-POINTER` | appco | spark | "App Landing Page", "Easy to Customize" |
| `stride` | `ROW-POINTER` | stamina | accordion-19 | "We Believe Little Things Matter", "Stay Healthy" |
| `sudsy` | `ROW-POINTER` | carwash | sparkleclean | "Your car will look as your new one", "We have an application" |
| `vellum` | `SPEC-STALE` | accordion-16 | readit | "Hello! Welcome to", "Build a Website in Minutes…" |
| `zenith` | `SPEC-STALE` | bootstrap-buttons-05 | saasify | "Active users", "Uptime SLA", "Everything you need to ship faster" |

Three of the ten are **spec-side** (`prose`, `vellum`, `zenith`): the spec describes a design the
app does not render, and in all three the body (token table, section list, Requirements) is the
other design's too — only `jobboard` and `medical` were provenance-only. Five are **row pointers**
(`givehope`, `logistico`, `spark`, `stride`, `sudsy`), one is **both-stale** (`bellows`) and one is
still **unresolved** (`cirrus`).

## Fixed so far

| app | was | now | why it was safe |
| --- | --- | --- | --- |
| `jobboard` | ColorLib "Careers", tokens `#1644ba`/Nunito, Careers sections | ColorLib "Jobboard", measured lime `#89ba16`, the nine reference bands, Requirements aligned to the app | the app's copy is Jobboard's; the row already said `jobboard`; tokens re-measured from `css/style.css` + `custom-bs.css` |
| `medical` | ColorLib "Medical Wordpress Themes" (a round-up article, no demo) | ColorLib "Medical" | the body, tokens and section order were already measured from `/theme/medical/`; only the name was wrong |
| `ledger` | ColorLib "Accounting", green `#1BA12D`/Montserrat, accounting sections | ColorLib "Daren", measured red `#ef1313` + `"Source Serif Pro"` display face, the eight Daren bands | the app's copy is Daren's (`Creative & Design`, `Search Objects`, `LOADING MORE`); **both** spec and `docs/templates/ledger/` were rewritten, tokens re-measured from `theme/daren/css/style.css` (123,435 B, sha `427b90d0…`) |
| `bistro` | ColorLib "Accordion 02", warm-cream `#fcf8f2`/amber `#d4a373`, an "Our Specialties" Breakfast–Lunch–Dinner–Drink–Wine accordion | ColorLib "Allfood", measured orange `#ff5600` (+ sweep `#e74d00`), Josefin Sans/Poppins, the ten reference bands (hero · about · menu mosaic · about 2 · booking · services · subscribe · blog · footer) | the app's copy is Allfood's (`About Our Restaurant`, `Delicious Food`, `Best Chef`, `Quality Food`, `Our Recnet News`); **both** spec and `docs/templates/bistro/` were rewritten, tokens re-measured from `theme/allfood/assets/css/style.css` (58,090 B, sha `8e1b11a8…`). Two rows (330 `## Bootstrap`, 2666 `## Restaurant`) link `bistro` for this one design — `ROW-MULTI`, no pointer to move, no rename (`bistro` ≠ `allfood`) |
| `concertina` | ColorLib "Accordion 05" (Poppins, mint `#75d6d1`, a seven-band marketing page) | ColorLib "Accordion 16", measured lime `#72c02c` on `#efefef`, `#f9f9f9` 40px pills, one band | the app's copy is Accordion 16's (`Bootstrap Accordion #6`, `How to download and register`, `How to link your paypal and bank account` — each 1 hit in a16, 0 in a05); **both** spec and `docs/templates/concertina/` were rewritten, tokens re-measured from `theme/bac/accordion-16/css/style.css` (9,013 B, sha `e61cfd1c…`). No row moved (`[concertina]` already sat on row 655, `## Bootstrap Accordions (20)`), no rename |
| `formwell` | ColorLib "Contact Form V15" (`/template/contact-form-v15/`, demo `etc/cf/ContactFrom_v15/`, 12,176 B sheet, Poppins + `#57b846`), a map-`iframe` page behind a banner card with "Contact Us" / "Feel free to drop us a line below!" and Phone + underline fields | ColorLib "Contact Form 08", measured green `#71a95a` (+ hover `#5a8947`), 5px radii, 50px borderless white fields under `0 8px 19px -13px rgba(0,0,0,.09)`, 83.33% card with a 58.33% form column on a photo ground, 12px/600 uppercase labels | the app's copy is contact-form-08's (`Get in touch with us` 1/0, `Email Address` 1/0, `Send Message` 1/0, `Subject` 2/0 against v15); **both** spec and `docs/templates/formwell/` were rewritten, tokens re-measured from `theme/bootstrap/contact-form-08/css/style.css` (14,838 B, sha `2e795975…`, plus `snippet.js` 2,687 B sha `dd02a14f…`); the zip's two files hash identically, so the archive is the live twin. Row **1411** already said `contact-form-08`, no rename (`formwell` ≠ `contact-form-08`) |

Both corrections make the rule-5 audit **louder, not quieter**: the folders
`apps/jobboard` and `apps/medical` now normalise to their own source slug, so
`verify-provenance-grammar.py` lists them among the `RULE5` violations (it read
8 `RULE5` + 1 `RULE5-HIDDEN` before this run; `justlaw` was renamed to `lexon`
concurrently, and the two corrections replace it: 9 + 1 after). That is the
correct reading of the repo — the wrong spec was hiding two unchanged source
names. Renaming is the rename stream's call, not the prep stream's.

## Queue (docs-only, in order of yield)

1. **Three spec rewrites** — `prose`→author, `vellum`→readit, `zenith`→saasify
   (`ledger`→daren, `bistro`→allfood, `concertina`→accordion-16 and
   `formwell`→contact-form-08 landed 2026-10-24, spec **and** docs). Each needs the
   provenance *and* the body rewritten from the winner's live DOM (the token tables
   currently carry the other design's palette), plus `docs/templates/<app>/` — a corrected
   spec with a stale brief still misdirects the implementer. One app per run.
   The family demos live under a prefix: `vellum`'s readit is `/theme/readit/`,
   `zenith`'s saasify is `/theme/saasify/`, `prose`'s author is `/theme/author/` — the
   slug-only ladder resolves those three (the landed `formwell` needed the
   `/theme/bootstrap/` prefix, which the ladder cannot resolve).
2. **Five row pointers** (implementer/rename stream) — the rows below credit the
   app with a design it does not recreate, so they are false `[x]`s and their
   designs are, in fact, unshipped:

   | row | line | links | which recreates |
   | --- | ---: | --- | --- |
   | Givehope | 1270 | `givehope` | bcharity |
   | Logistico | 2966 | `logistico` | thelogistico |
   | Spark | 626 | `spark` | appco |
   | Accordion 19 | 658 | `stride` | stamina |
   | Sparkleclean | 1178 | `sudsy` | carwash |

   `apps/spark` and `apps/logistico` also collide with a *different* design's
   slug — the `itkol` shape from `docs/provenance-grammar.md`.
3. **One duplicate app pair** — `bellows` and `pleat` both recreate
   `accordion-01`; the `accordion-01` row links `pleat`, and `bellows` sits on
   the `accordion-03` row while rendering accordion-01's price list.
4. **Two unresolved** — `btnspark` (both candidates are button galleries with no
   own prose; decide from the screenshot) and `cirrus` (the app is a
   fintech/investment landing; neither CloudTemplate nor SaaS carries a single
   one of its strings, so its true source is a third design).
5. **36 `ROW-MULTI` apps** — every one of these is linked from two different
   designs' rows, so at least one row per pair credits an app with a design it
   cannot ship: `amplify(uza/amplify) atelier(ashion/design)
   batterly(cakes/cake) bazaar(shopmax/store) counsel(ariclaw/whisper)
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

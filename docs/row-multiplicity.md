# Row multiplicity — 2,857 rows, 1,646 designs, one product each

`TEMPLATES.md` carries **2,857 rows over 1,646 ColorLib slugs**: ColorLib
cross-posts one design into several of its own categories, so the checklist
lists the same design more than once. That is bookkeeping — *as long as every
row for one slug credits the same app*. Nothing in the repo read that. The
app-side scanners walk APPS (`verify-spec-row-mismatch.py`: does this app's spec
name a slug that a row credits to it?) and the catalogue scanners walk catalogue
KEYS (`verify-catalog-collisions.py`, `verify-sibling-pairs.py`). The rows of one
slug, compared with each other, were unread — and two implementer streams work
two rows of one design independently, which is how one design gets built twice.

This is the census of that axis. It is read-only and it changes no marker.

```sh
python3 scripts/verify-row-multiplicity.py                 # offline census
python3 scripts/verify-row-multiplicity.py --network       # + copy evidence (~2 min)
python3 scripts/verify-row-multiplicity.py --only glint,cakes,villa
python3 scripts/verify-row-multiplicity.py --json /tmp/rm.json
python3 scripts/verify-row-multiplicity.py --self-test     # 8/8
python3 scripts/verify-row-multiplicity-controls.py        # 15/15 (4 GATE)
```

Measured state (`main` after PR #1871, which shipped `dockyard` and re-pointed the three
`depot` rows; offline census):

```
rows 2,857 · slugs 1,646 · multi-row slugs 775 · extra rows 1,211 · flags 92
  CONSISTENT   683   one app, and its spec claims the slug
  SPEC-STALE    15   one app, whose spec does NOT claim the slug
  DUPLICATE     73   >=2 apps, >=2 of them claiming the slug
  ROW-POINTER    4   >=2 apps, exactly ONE claims the slug
  SLUG-ORPHAN    0   no app claims the slug
  SINGLE-ROW   871   the complement (out of scope: one row cannot disagree)
  note STEM-SHARED 19  specs that also claim a sibling of the same stem
```

All 775 multi-row slugs carry the same screenshot URL on every one of their
rows (`775/775`), so multiplicity is a listing habit, not a screenshot
collision — the rows really do point at one visual design.

## The buckets, and the one that is not a defect

`CONSISTENT` (683) is the healthy case, and the reason the axis needed a
measurement before a fix: the overwhelming majority of repeated rows are
correct. The other buckets are three different defects that need three different
fixes — rows, apps, and spec lines respectively.

### 1. DUPLICATE — one design, two shipped apps (73 slugs / 190 rows / 163 apps)

Rows for one slug credit two or three different apps, and each of those apps'
own spec claims that slug. 64 of the 73 are **CONFIRMED** by copy: both apps
reproduce phrases of the SAME live preview and share at least two matched
phrases *with each other* (a shared match is the strong form — two apps
independently landing on the same sentences). E.g. `solarshift`: `helios` and
`sunflux` both carry "Power Your Home With Clean Energy", 44 shared phrases.

That is the headline: **64 ColorLib designs were built twice** (142 apps, 167
rows). It is not a stale pointer — both specs name the same source and both apps
render it. One app per design is the repo's own rule (AGENTS.md §5), so the
marketplace owner has to choose per slug (keep / retire / rebrand); the prep
stream cannot.

| slug | rows (lines) | apps | shared phrases |
|---|---|---|---|
| `solarshift` | 3 (164,1173,2935) | helios, sunflux | helios+sunflux:44 |
| `solestyle` | 3 (165,1605,2936) | treadly, lacecraft | treadly+lacecraft:26 |
| `automotive` | 2 (178,899) | motorly, veloce | motorly+veloce:26 |
| `autorepair` | 3 (179,900,2949) | torquely, fixcraft | torquely+fixcraft:32 |
| `autoroad` | 3 (180,901,2950) | roadly, highway | roadly+highway:27 |
| `hvac` | 2 (185,1048) | clutch, aeroworks | clutch+aeroworks:15 |
| `barber` | 2 (190,2015) | crewcut, shave | crewcut+shave:38 |
| `akame` | 3 (210,1447,1697) | gilded, shearglow | gilded+shearglow:13 |
| `hotel` | 3 (418,1046,1912) | lodge, grandstay | lodge+grandstay:6 |
| `industries` | 3 (422,1056,1951) | millwright, cogwork | millwright+cogwork:28 |
| `schmidt` | 4 (624,2427,2563,2727) | clearpoint, lenscape, craftwork | clearpoint+lenscape:2, clearpoint+craftwork:2, lenscape+craftwork:4 |
| `banker` | 3 (905,1744,2292) | bankcraft, treasury, banknote | bankcraft+treasury:19, bankcraft+banknote:24, treasury+banknote:26 |
| `bobsled` | 4 (914,1450,2018,2294) | glissade, glider, kinetic, artwave | glissade+glider:14, glissade+kinetic:25, glissade+artwave:19, glider+kinetic:16, glider+artwave:16, kinetic+artwave:21 |
| `boxus` | 4 (917,1452,2022,2296) | musecraft, pixelcraft, vertex, boxpulse | musecraft+pixelcraft:4, musecraft+vertex:17, musecraft+boxpulse:16, pixelcraft+vertex:4, pixelcraft+boxpulse:3, vertex+boxpulse:15 |
| `create` | 3 (962,2307,2509) | forgeit, makely, forgehub | forgeit+makely:39, forgeit+forgehub:50, makely+forgehub:39 |
| `design` | 2 (975,2035) | sketch, atelier | sketch+atelier:6 |
| `digilab` | 4 (976,2036,2313,2512) | digiview, byteops | digiview+byteops:9 |
| `durg` | 2 (987,1946) | citadel, industrix | citadel+industrix:12 |
| `evento` | 3 (1005,1679,2048) | soiree, gathr | soiree+gathr:14 |
| `florist` | 2 (1020,1580) | petal, bloomfield | petal+bloomfield:40 |
| `inds` | 3 (1054,1351,1949) | forgepoint, millstone | forgepoint+millstone:12 |
| `locksmith` | 2 (1083,1589) | keycraft, keyforge | keycraft+keyforge:14 |
| `safario` | 3 (1157,2084,2995) | expedio, dune | expedio+dune:18 |
| `security` | 2 (1161,1396) | bulwark, fortify | bulwark+fortify:14 |
| `services` | 2 (1162,2564) | fulcrum, servhub | fulcrum+servhub:24 |
| `sportify` | 3 (1179,1879,2089) | prowess, fitlane | prowess+fitlane:7 |
| `store` | 2 (1190,1606) | bazaar, bodega | bazaar+bodega:14 |
| `theinterior` | 2 (1202,1987) | cosyhaus, chamfer | cosyhaus+chamfer:4 |
| `thelook` | 2 (1204,2479) | lookcraft, gaze | lookcraft+gaze:4 |
| `unearth` | 2 (1216,2371) | stratum, digger | stratum+digger:11 |
| `watch` | 3 (1226,1612,2100) | wristly, ticktock, bezel | wristly+ticktock:14, wristly+bezel:13, ticktock+bezel:20 |
| `whitespace` | 3 (1230,1498,2578) | cleanpage, blankslate, airy | cleanpage+blankslate:14, cleanpage+airy:15, blankslate+airy:13 |
| `work` | 2 (1236,2579) | repertoire, taskflow | repertoire+taskflow:16 |
| `mimosan` | 2 (1279,1303) | gracecraft, alleluia | gracecraft+alleluia:3 |
| `advent` | 2 (1289,1667) | nave, liturgy | nave+liturgy:34 |
| `lawfirm` | 3 (1387,1760,2123) | chambers, statutory, docket | chambers+statutory:16, chambers+docket:12, statutory+docket:19 |
| `five-star` | 3 (1469,2051,2395) | brushwork, artful, crafty | brushwork+artful:5, brushwork+crafty:6, artful+crafty:5 |
| `rea` | 2 (1490,2555) | revive, redawn | revive+redawn:4 |
| `sun` | 2 (1492,2570) | solaris, daybreak | solaris+daybreak:2 |
| `myhome` | 2 (1549,2603) | roofmark, homeward | roofmark+homeward:7 |
| `karma` | 2 (1585,1716) | mercato, strider | mercato+strider:12 |
| `malefashion` | 2 (1591,1719) | silkthread, threadline | silkthread+threadline:23 |
| `shop` | 2 (1601,1729) | shopcraft, boutiquehaus | shopcraft+boutiquehaus:16 |
| `eventalk` | 3 (1676,2047,2320) | meetuply, festpoint | meetuply+festpoint:3 |
| `mona` | 3 (1723,2411,2721) | canvas-gallery, vizier | canvas-gallery+vizier:23 |
| `foodfun` | 2 (1786,2681) | feastly, forkful | feastly+forkful:4 |
| `steakshop` | 2 (1792,2702) | carnivor, grillmark | carnivor+grillmark:5 |
| `medcare` | 2 (1863,2240) | carepath, medwell | carepath+medwell:29 |
| `archs` | 2 (1964,2290) | pillar, archcraft | pillar+archcraft:29 |
| `author` | 3 (2014,2291,2380) | pageturn, prose, penman | pageturn+prose:14, pageturn+penman:23, prose+penman:19 |
| `ronin` | 3 (2082,2425,2560) | drifter, velox | drifter+velox:19 |
| `thestartup` | 2 (2093,2865) | nascent, boostly | nascent+boostly:8 |
| `clyde` | 4 (2302,2389,2507,2713) | draftly, palette, clydson | draftly+palette:2, draftly+clydson:2, palette+clydson:2 |
| `cvportfolio` | 4 (2310,2391,2511,2714) | credence, cvfolio | credence+cvfolio:5 |
| `elit` | 2 (2318,2448) | lens, lumier | lens+lumier:10 |
| `jackson` | 3 (2331,2399,2524) | craftline, jockford | craftline+jockford:25 |
| `meal` | 2 (2339,2689) | taster, supper | taster+supper:17 |
| `niko` | 3 (2345,2412,2535) | spectra, forger | spectra+forger:7 |
| `skater` | 4 (2359,2428,2565,2841) | ollie, cruiser | ollie+cruiser:6 |
| `calvin` | 3 (2386,2505,2710) | boldcraft, pixelate, calypso | boldcraft+pixelate:8, boldcraft+calypso:5, pixelate+calypso:5 |
| `louie` | 3 (2405,2457,2719) | photosnap, photomuse | photosnap+photomuse:8 |
| `unfold` | 2 (2431,2575) | reveal, unfurl | reveal+unfurl:28 |
| `mostudio` | 2 (2458,2533) | lumiere, shotlab | lumiere+shotlab:7 |
| `signup-form-02` | 2 (2659,2816) | joinbox, regmint | joinbox+regmint:8 |

Nine of the 73 do **not** reach that evidence bar. They are reported, not fixed:

| slug | rows (lines) | apps | verdict | why |
|---|---|---|---|---|
| `the-grand-azure` | 3 (168,1933,2939) | seacliff, azurepeak | UNRESOLVED | preview-not-live |
| `the-hustle-hour` | 3 (169,2218,2940) | airwave, micdrop, soundbite | UNRESOLVED | preview-not-live |
| `accordion-12` | 2 (650,651) | plisse, creel | ONE-SIDED | no shared phrase: plisse+creel:0 |
| `classic` | 2 (936,1369) | acumen, linnet | UNRESOLVED | no shared phrase: acumen+linnet:0 |
| `classy-ads` | 3 (937,1315,2142) | classily, adnest, classipost | UNRESOLVED | preview-not-live |
| `halo` | 3 (1035,2055,2519) | glowlens, beacon, snaplens | UNRESOLVED | one shared phrase only: glowlens+beacon:1, glowlens+snaplens:1, beacon+snaplens:1 |
| `dinomuz` | 2 (1463,2037) | zephyrine, reimagine | UNRESOLVED | one shared phrase only: zephyrine+reimagine:1 |
| `reopen` | 2 (2080,2556) | reprise, gallery | UNRESOLVED | one shared phrase only: reprise+gallery:1 |
| `satner` | 3 (2426,2561,2726) | smithy, kael | UNRESOLVED | one shared phrase only: smithy+kael:1 |

### 2. APP-WRONG-DESIGN — the row is a false `[x]` (8 slugs / 18 rows)

One app is credited by the rows of a design it does not recreate, and its own
copy matches the design its spec names far better. The test compares EXCLUSIVE
phrases only (see "Identity" below), so each pair is `row-excl / spec-excl`:

| slug | rows (lines) | app | its spec says | row-excl / spec-excl |
|---|---|---|---|---|
| `nova` | 2 (608,1871) | nova | `colorlib-error-404-19` | 0 / 2 |
| `glamour` | 3 (1028,1583,1712) | glamour | `look` | 0 / 36 |
| `publishing-company` | 2 (1146,2076) | pressline | `publishingcompany` | 0 / 8 |
| `summit` | 2 (1193,1688) | summit | `confer` | 1 / 52 |
| `vigor` | 2 (1222,1884) | vigor | `endurance` | 0 / 34 |
| `villa` | 2 (1939,3014) | villa | `layal` | 1 / 21 |
| `amplify` | 3 (2287,2379,2496) | amplify | `uza` | 1 / 23 |
| `resume` | 2 (2422,2724) | resume | `personalportfolio` | 0 / 17 |

Those **8** ColorLib designs have **no app**, while their rows say `[x]`. Ten have left this
table: PR #1862 built `dreamrs` as **`manorly`** (rows 106 / 1967 / 2587), PR #1863 built
`shopmax` as **`drapely`** (rows 230 / 1602 / 1730), PR #1864 built `juli` as **`saffron`**
(rows 266 / 2402), PR #1865 built `fitnessgym` as **`grithaus`** (rows 397 / 1846), PR #1866
built `topgym` as **`stryve`** (rows 515 / 1206 / 1883), PR #1867 built `realtors` as
**`landly`** (rows 485 / 1149 / 2608), PR #1868 built `buildream` as **`amberline`**
(rows 553 / 1339), PR #1869 built `jackco` as **`portray`** (rows 593 / 2398 / 2523), PR #1870 built `ariclaw` as
**`barstone`** (rows 896 / 2116) and PR #1871 built `depot` as **`dockyard`**
(rows 974 / 2312 / 2959) — the bucket is now **8 slugs / 18 rows**. The
recurring shape is a name collision — an app was given the invented name of
*another* ColorLib design (`villa`, `summit`, `glamour`, `vigor`, `nova`,
`orbit`, `depot`, `resume`, `amplify`, `imagine` are all ColorLib slugs that also
name a shipped app), and the row pointer then matched the row to the subdomain by
name. One of the 9 is thin and needs a human eye first: `nova` (2 exclusive
phrases — the error page it ships barely has copy, and the copy it does carry
matches the 404 design it names).

### 3. SPEC-PROVENANCE-STALE — the row is right, the spec line is not (3 slugs)

Same measurement, opposite direction: the app's copy matches the ROW's design
more than the design its spec names, so the `**Source:**` line in the spec is
the stale record. Every ratio here is under the 2× margin and both sides are
siblings that share copy blocks, so these are **verify-before-editing** items —
they are not flipped by this census.

| slug | rows (lines) | app | its spec says | row-excl / spec-excl |
|---|---|---|---|---|
| `ashion` | 3 (342,1566,1700) | atelier | `design` | 29 / 9 |
| `academia` | 2 (548,1621) | learnly | `academics` | 64 / 35 |
| `occupy` | 2 (1115,1764) | domicile | `homespace` | 17 / 13 |

### 4. ROW-POINTER — a stale subdomain on the extra rows (4 slugs)

Rows for one slug split across apps and only one app claims the design; the
other rows point at an app that ships something else:

| slug | rows (lines) | claimer | the other rows credit | verdict |
|---|---|---|---|---|
| `sparkleclean` | 3 (166,1178,2937) | gleam | sudsy | CONFIRMED |
| `cakes` | 2 (921,1777) | crumbs | batterly | CONFIRMED |
| `glint` | 5 (1029,2053,2325,2452,2516) | lumen | glint | CONFIRMED |
| `saas` | 2 (1156,2083) | nimbus | cirrus | UNRESOLVED |

```
sparkleclean  1178, 2937 -> sudsy   (ships carwash);  166 -> gleam is correct
cakes          921       -> batterly (ships cake);  1777 -> crumbs is correct
glint         2053, 2325, 2452, 2516 -> glint (ships prodent); 1029 -> lumen is correct
saas          1156       -> cirrus  (spec: cloudtemplate, UNRESOLVED); 2083 -> nimbus
```

`glint` is the worst single row in the corpus: **five** rows, four on the wrong
app.

### SPEC-STALE — unresolved (4)

| slug | rows (lines) | app | its spec says | reason |
|---|---|---|---|---|
| `axole` | 3 (243,550,2381) | inkwell | `contact-form-v11` | copy-too-generic |
| `portfolio-wordpress-themes` | 3 (478,1488,2553) | gallery | `reopen` | row-preview-not-live |
| `imagine` | 3 (1052,2056,2329) | imagine | `creative-agency-2` | copy-too-generic |
| `orbit` | 3 (2351,2540,2722) | orbit | `colorlib-error-404-10` | copy-too-generic |

## The unresolved tail (13 slugs) — reported, never invented away

| bucket | slugs | why it is unresolved |
|---|---|---|
| DUPLICATE | 8 | preview not live at any known family prefix (3), or the apps share only one matched phrase, so copy is no evidence (5) |
| SPEC-STALE | 4 | row preview dead (`portfolio-wordpress-themes`), or the app carries too little distinctive copy to score (`axole`, `imagine`, `orbit`) |
| ROW-POINTER | 1 | `saas`: neither app reproduces `theme/saas/`, and `cirrus`'s own design (`cloudtemplate`) yields one phrase |

A decayed preview does not make a duplicate claim false — it makes it
unmeasured, which is why these stay in a table with their reason instead of
being counted as flags.

## Identity is exclusive copy, not a hit count

The first cut scored raw phrase hits and it was wrong in both directions: every
ColorLib theme carries the same boilerplate ("Read more", "Get Started", "Email
Address"), so a raw count crowned the wrong sibling. `villa`'s app looked like a
1-hit match on `theme/villa`; with boilerplate removed it carries **21** phrases
that only `theme/layal` has. A phrase counts for a candidate only when it appears
in **that** body and in none of the other bodies fetched for the same comparison;
`MIN_EVIDENCE = 2` such phrases is the floor and the larger side must be `2×` the
other (`MARGIN`). A dead preview never wins a comparison by scoring 0 — it only
leaves that side unmeasured, which is why `juli` still reads APP-WRONG-DESIGN
from the live side alone.

## Queue (owner: rename / implementer streams — not the prep stream)

1. **Re-point the 8 stale rows** in §4 (`sudsy`→`gleam` ×2, `batterly`→`crumbs`,
   `glint`→`lumen` ×4, and `saas` once the tail is adjudicated). `TEMPLATES.md`
   only; no marker flips, no app edits.
2. **Re-open the 11 designs** left in §2: their rows are `[x]` and no app recreates
   them. Point the rows at an app that does, or build them — and stop naming apps
   after ColorLib slugs, which is what created the class.
3. **Decide the 64 duplicates** in §1: one product per design. The table names
   both apps per slug, so the choice is a decision, not a search.
4. **Fix the 3 spec provenance lines** in §3 after a human read.

## Limits — what this census does not claim

* Single-row slugs (871) are out of scope by construction: a design with one row
  cannot disagree with itself. A wrong pointer there is
  `verify-spec-row-mismatch.py`'s subject.
* The copy test is paraphrase-sensitive — an app whose text was rewritten from
  scratch scores low even when it is a faithful recreation, which is why 13
  slugs are UNRESOLVED rather than "clean". A low score is never turned into a
  flag.
* Duplicates are measured as *one source design built twice*, not as "two
  unwanted apps": after the product decision one of each pair IS the product.
* The 404 family needs its own demo path (`colorlib.com/etc/404/<slug>/`); the
  preview portal 404s for those slugs. `preview_url()` encodes that exception.

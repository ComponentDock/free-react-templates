# Template: Kilter (Medical — chiropractic clinic whose product is an honest prognosis)

## Purpose

A **clinic that sells the end of treatment**. The `h1` is a two-line argument — *"Back pain is common."* /
*"Living with it is optional"* — where the second line is a **gradient span that rewrites itself** every three
seconds (*"Living with it is optional"* → *"Guessing at it is not"* → *"So is putting up with it"*). Under it:
three CTAs (filled green, outlined white, a round play chip labelled *Watch Demo*) and a **four-figure fact row**
separated by a hairline (`£65` first assessment · `45 min` · `3–6` typical sessions · `8` years in Clifton), then a
full-width **1024 × 512 treatment-room photograph** in a 16 px card with `shadow-2xl`.

Everything below the hero is the same argument in a different shape: a **counter strip**, **four condition cards**
that each print *what it usually feels like* / *how we approach it* / **a typical course in sessions**, a dark
**first-visit timeline** of four timed steps (`15 / 15 / 10 / 5 min`) that ends by saying one new patient in twelve
leaves with a referral, **three practitioners** with registration numbers, **three fee cards** (no packages, no
prepaid blocks, the first card the emphasised one), a **three-slide testimonial carousel**, a **five-question FAQ**,
and a gradient closing band. No form on the home page; the closing band is two buttons.

The palette is **sage green on paper white with a terracotta accent**: `primary` runs `#f4f7f4` → `#25362a` with
`#40664a` as the brand fill (every CTA, every chip on cream) and `#25362a` as the dark band; `accent` is terracotta
`#c2704f` with `#e8a88a` on the dark band and `#874736` for the "typical course" values; text is Tailwind's
`#111827` / `#4b5563` / `#6b7280` greys. **One typeface**: DM Sans, in weights 400 / 500 / 600 / 700. Shape is
generous and quiet: **8 px** buttons, **16 px** cards and image, full-round chips, pills and avatars, one soft
shadow (`0 4px 16px -4px rgb(0 0 0/.1)`), and a **80 → 112 px** band rhythm.

Recreation of the ColorLib "Upright" design (https://colorlib.com/wp/template/upright/, live preview
https://preview.colorlib.com/theme/upright/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript application.
Invented name: **Kilter** → `apps/kilter`, `@free-react-templates/kilter`,
`https://kilter.free.componentdock.com`.

- **Source slug:** `upright`
- **ColorLib category (breadcrumb):** *Medical Website Templates* → `https://colorlib.com/wp/cat/medical/`;
  the product page also tags it **Astro** and **Tailwind CSS**
- **New name rationale:** `kilter` is a single lowercase word meaning *alignment* — "knocked out of kilter" is what
  a chiropractor puts right — and it is the design's own subject without being the source's name. Zero repo hits:
  `ls apps/`, `openspec/specs/`, `docs/templates/` and a full-tree `git grep -il kilter` are all empty (`plumb`,
  the other alignment word, is taken by `apps/plumb`). The reference never uses the word; it calls itself
  *Upright*, *Upright Clinic* and *uprightclinic.co.uk*.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-25)

Every row of `TEMPLATES.md` is `[x]` (2,883 rows, open `- [ ]` **0**, `[~]` **0**) and every row already owns a
spec, so the prep queue comes from `docs/catalog-coverage.md` — the **42 standalone designs** on ColorLib's own
listing that the checklist never recorded. This is row **`upright`** of 42 (*preview 200, 75,500 B*): the row
**immediately after `trace-developer`** (prepped earlier as Devfolio) and **before `voltway`** — the second of the
three remaining unprepped slugs (`trace-developer`, `upright`, `voltway`).

`upright` has **no** `apps/`, `openspec/specs/` or `docs/templates/` entry on `origin/main` (verified with
`git ls-tree -r --name-only origin/main | grep -E 'upright/'` → no hit).

The implementer appends this line when it claims the template — under **`## Medical`** (currently
`## Medical (32)`, bump to **33**), alphabetically **after *Remedic*** (`remedic`) and **before
*Wordpress Dentist Themes*** (`wordpress-dentist-themes`), i.e. **line 2284 on `43e599e90`**. Re-read the section
before pasting; a concurrent stream may have inserted rows above it.

```markdown
- [x] **Upright** — [colorlib](https://colorlib.com/wp/template/upright/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/upright-template.jpg) · [kilter](https://kilter.free.componentdock.com)
```

**Screenshot URL note:** this design does **not** follow the `<slug>-free-template.jpg` pattern — `upright.jpg`,
`upright-free-template.jpg` and `upright-featured.jpg` are all **404**; the only working product shot is
`…/sites/2/upright-template.jpg` (with a `-1024x807` derivative). Use that URL above.

## Reference readings (2026-10-25, `curl -4` + Playwright/Chromium)

| what                       | value                                                                                                        |
| -------------------------- | ------------------------------------------------------------------------------------------------------------ |
| preview HTML               | **200**, **75,500 B**, `text/html` — an **Astro** build (`_astro/Base.*.css`), not the old `css/main.css` kit   |
| stylesheet                 | `https://preview.colorlib.com/theme/upright/_astro/Base.Bj-fneVh.css` — **200, 62,981 B**                       |
| scripts                    | `ClientRouter…js` (Astro view transitions) + `Base.astro…BLoalVWc.js` — **200, 16,233 B** (all behaviour)        |
| product page               | `https://colorlib.com/wp/template/upright/` — **200, 111,290 B**, `<h1>Upright</h1>`                            |
| product shot               | `…/sites/2/upright-template.jpg` — **200, 77,686 B**, **2,400 × 1,892**, AVIF bytes behind a `.jpg` name        |
| preview screenshot (mine)  | `/tmp/prep-upright/live-1440-full.png` — 1440 × **9,021** full page; band crops `band-*.png`                     |
| document height            | **9,021** px at 1440 · **9,699** at 768 · **13,370** at 390                                                     |
| `body.scrollWidth`         | **1,440 / 768 / 390** — no horizontal overflow anywhere                                                         |
| inner pages                | `/about/`, `/pricing/`, `/contact/`, `/blog/`, `/terms/`, `/privacy/`, `/elements/` — all **200**               |

Every number in this spec is measured, not inferred: `getComputedStyle` at 1440/768/390 for type, colour, radius,
padding and shadow; `getBoundingClientRect` for band heights; the compiled sheet for the two colour ramps,
because Tailwind 4 inlines the theme colours as literals and ships **no `--color-primary-*` custom properties**.

## Page structure (measured with `getBoundingClientRect`, Playwright/Chromium)

Band order is fixed; the heights are the 1440 / 768 / 390 reality and the tolerance for the port is ±8 %.

| # | band                                                     | 1440 | 768 | 390 | ground |
| - | -------------------------------------------------------- | ---: | --: | --: | ------ |
| — | sticky header (`h-16` → `lg:h-20` + 1 px border)           |   81 |  65 |  65 | `#fff/80` + `blur-lg` |
| 1 | hero (`py-20 lg:py-32`)                                    | 1437 | 1137 | 1248 | `linear-gradient(#f4f7f4 → #fff)` + two blurred blobs |
| 2 | counter strip (`py-16 lg:py-20`, `border-y`)               |  238 |  218 |  338 | `#f9fafb` |
| 3 | `#conditions` (`py-20 sm:py-28`)                           | 1224 | 1338 | 2153 | white |
| 4 | `#first-visit` (dark)                                      | 1184 | 1314 | 1744 | `#25362a` |
| 5 | `#team`                                                    | 1217 | 1149 | 2736 | white |
| 6 | `#appointments` (fees)                                     |  984 | 1614 | 1678 | `#f4f7f4` |
| 7 | `#testimonials`                                            |  768 |  742 |  794 | `#f9fafb` |
| 8 | `#faq`                                                     |  820 |  756 |  840 | white |
| 9 | `#contact` (gradient)                                      |  500 |  420 |  512 | `linear-gradient(135°, #40664a → #2c4132)` |
| 10 | footer                                                    |  568 |  946 | 1262 | `#111827` |
| — | mobile CTA bar (`lg:hidden`)                               |    0 |   69 |   69 | `#fff` |

Widths: the hero's text column is `max-w-4xl` (**896** at 1440), the hero image `max-w-5xl` (**1024 × 512**);
`#conditions`, `#team` and `#appointments` are `max-w-6xl` (**1152** with `lg:px-8` → 1,088 content);
`#first-visit` steps are `max-w-5xl` (**960**); `#testimonials` / `#faq` headers are `max-w-3xl` (**768**) inside the
80 rem `container` (1,216 content at 1440).

## Design tokens (measured from `Base.Bj-fneVh.css`, 62,981 B + `getComputedStyle` at 1440 px)

> **Delivery note for the implementer:** the compiled sheet contains **no `--color-primary-*` / `--color-accent-*`**
> properties — Tailwind 4 inlined every theme colour as a literal hex in the utilities. Both ramps below were
> reconstructed by parsing every `bg-` / `text-` / `border-` / `ring-` / `from-` / `divide-` rule that mentions
> `primary-*` or `accent-*` (including the `/15`, `/30`, `/60` opacity forms), then confirmed against the rendered
> page. Declare them in the app's own `@theme`.

### `primary` — sage green (the brand)

| step | hex       | used for                                                                                              |
| ---- | --------- | ------------------------------------------------------------------------------------------------------ |
| 50   | `#f4f7f4` | **the hero ground gradient start**, **the `#appointments` band**, `#first-visit` body ink, `border-primary-50` none |
| 100  | `#e4ece5` | **every light eyebrow chip** (`bg-primary-100`), avatar discs, `border-primary-100` course rules, time-pill ink |
| 200  | `#c9d9cc` | **condition / fee card borders** (`border-primary-200`), `#first-visit` lede + step body ink               |
| 300  | `#a3bfa8` | **dark-mode chip ink** (`dark:text-primary-300`)                                                          |
| 400  | `#769d7e` | **testimonial stars**, the hero blob tint, `text-primary-400` in dark mode, the `to-` end of `text-gradient` |
| 500  | `#55805f` | `bg-primary-500` (the hero chip's pulse dot), the focus ring (`outline: 2px #55805f`)                      |
| 600  | `#40664a` | **every filled CTA**, the `.btn-primary` fill, the hero's primary button + its 25 % shadow colour, `#contact` gradient start, the counter figures |
| 700  | `#35513c` | **CTA hover**, the step time pills (`bg-primary-700`), the hero chip label (`text-primary-700`), the contact CTA label |
| 800  | `#2c4132` | **the emphasised fee card**, the `#contact` gradient end, `dl` term ink in the condition cards             |
| 900  | `#25362a` | **the `#first-visit` band ground**                                                                        |

### `accent` — terracotta (the one warm note)

| step | hex       | used for                                                                                     |
| ---- | --------- | --------------------------------------------------------------------------------------------- |
| 50   | `#fdf5f1` | **the `#conditions` closing callout ground**                                                    |
| 300  | `#e8a88a` | **the four step numbers** (`01`–`04`) on the dark band, the fee-card ticks on the emphasised card |
| 400  | `#dc8560` | **the emphasised fee card's 2 px ring** (`ring-2 ring-accent-400`), `dark:text-accent-400`         |
| 500  | `#c2704f` | **the `#appointments` eyebrow chip**, the callout's 4 px left rule (`border-l-4`)                 |
| 700  | `#874736` | **every "typical course" value**, the practitioner role lines                                     |
| 900  | `#7b3306` | only in `dark:bg-accent-900/20` (the callout's dark ground) — inferred from the `/20` oklab       |

### Greys — stock Tailwind, exactly these jobs

| token             | hex       | job                                                                       |
| ----------------- | --------- | --------------------------------------------------------------------------- |
| `gray-50`         | `#f9fafb` | **counter strip** and **`#testimonials`** ground                              |
| `gray-100`        | `#f3f4f6` | FAQ icon discs (`bg-gray-100`)                                                |
| `gray-200`        | `#e5e7eb` | header bottom border, hero stat rule, `divide-y` in the FAQ, hero image ring   |
| `gray-300`        | `#d1d5db` | hero secondary button border, footer body ink (`text-gray-300`)                |
| `gray-400`        | `#9ca3af` | footer links + contact lines, lede under a dark-ground heading                  |
| `gray-500`        | `#6b7280` | "Typical course" label, footer legal ink, FAQ field labels                     |
| `gray-600`        | `#4b5563` | **every body paragraph** (ledes, card `dd`, notes)                              |
| `gray-700`        | `#374151` | hero secondary button label, the callout's text                                  |
| `gray-900`        | `#111827` | **every heading**, `body` ink, the footer ground                                |
| `gray-950`        | `#030712` | **dark-mode page ground**                                                       |

### Type

| role                | size / line / weight / tracking                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------- |
| `h1`                | 36 → **48** (`sm:text-5xl`) → **60** (`lg:text-6xl`) / 40 → 48 → **60** / **700** / tracking-tight (**−0.9 → −1.2 → −1.5 px**) |
| hero lede           | **20** (`sm:text-xl`) / **28** / 400 `#4b5563`, `max-w-2xl`                                        |
| `h2` (light bands)  | 30 → **36** (`sm:text-4xl`) / 40 / **600** / **−0.9 px**                                            |
| `h2` (social bands) | 30 → **36** / 40 / **700** — `#testimonials`, `#faq` (identical classes, `font-bold` instead of `semibold`) |
| `#contact` `h2`     | 30 → 36 → **48** (`lg:text-5xl`) / 48 / **700** / **−1.2 px**, white                                 |
| `h3` (card titles)  | **20** / 28 / **600** (`text-xl font-semibold`)                                                     |
| band lede           | **16** / 24 / 400 `#4b5563` (conditions, team) · **18** / 28 / 400 (`#testimonials`, `#faq`)          |
| card body (`dd`)    | **14** / 22.75 (`leading-relaxed`, 1.625) / 400 `#4b5563`                                            |
| eyebrow chip        | **12** / 16 / **600** uppercase **+0.6 px** (`tracking-wider`) — `#2c4132` on `primary-100`, white on `accent-500` |
| step number         | **24** / 32 / **600** `#e8a88a`                                                                      |
| step time pill      | **12** / 16 / **600** `#e4ece5` on `#35513c`, radius full, `2.5px 10px`                               |
| price               | **30** / 36 / **600** `tabular-nums` + a **14** `#c9d9cc` "· 45 minutes"                             |
| counter figure      | **36** (`text-4xl`) → **48** (`lg:text-5xl`) / **700** `#40664a`                                     |
| counter label       | **14** / 20 / **500** `#6b7280`                                                                      |
| testimonial quote   | **18** / 28 / **500** `#111827`                                                                       |
| FAQ question        | **18** / 28 / **600** `#111827`                                                                       |
| footer column head  | **14** / 20 / **600** uppercase **+0.7 px** (`tracking-wider`) white                                 |
| nav label           | **14** / 20 / **500** `#4b5563`, hover `#111827`                                                      |

> **The `font-serif` trap.** The reference loads **Source Serif 4** as an `@font-face` set and marks nearly every
> heading `font-serif`, but the compiled utility is **`.font-serif { }` — an empty rule** (the Tailwind theme has no
> `--font-serif`, so the declaration was dropped). Measured: `#conditions h2`, the step numbers `01`–`04` and the
> prices all compute to **`"DM Sans", system-ui, sans-serif`**. Reproduce the **measured** result — DM Sans
> everywhere — and delete the dead utility; do not ship a serif heading, and do not load Source Serif 4.

### Shape, shadow, rhythm

| token            | value                                                                                             |
| ---------------- | --------------------------------------------------------------------------------------------------- |
| `--radius-lg`    | **8 px** — every button and CTA, nav CTA, footer newsletter input/button, cookie buttons              |
| `--radius-xl`    | **12 px** — emitted, not visible on the home page                                                      |
| `--radius-2xl`   | **16 px** — condition cards, fee cards, team photos, testimonial cards, hero image, step-list shell, both callouts |
| full radius      | eyebrow chips, step time pills, avatars, the hero chip, the FAQ icon disc, back-to-top                 |
| `shadow-soft`    | `0 4px 16px -4px rgb(0 0 0 / .1)` — testimonial cards                                                  |
| `shadow-2xl`     | `0 25px 50px -12px rgb(0 0 0 / .25)` — the hero image card + `ring-1 ring-gray-200`                    |
| header shadow    | `shadow-lg` past **50 px** of scroll (class toggled, height unchanged)                                  |
| hero blobs       | two `blur-3xl` circles — `500 × 500` `primary-200/50` (top centre, `-top-40`), `400 × 400` `primary-100/40` (top right) — **`animate-hero-float` 8 s / 10 s** `translate(±30px) scale(1.05)` |
| container        | `max-width: 80rem`; `px-4` → `sm:px-6` → `lg:px-8` (**1,216** content at 1440)                          |
| band rhythm      | `py-20` (**80**) → `sm:py-28` (**112**); `#testimonials` / `#faq` / `#contact` use `lg:py-28`; the counter strip `py-16` → `lg:py-20`; the hero `lg:py-32` (**128**) |
| breakpoints used | `sm 640` · `md 768` (team 3-up) · `lg 1024` (nav, mobile CTA off, hero 60 px) · `xl 1280` (container 80 rem) |

## Content inventory (verbatim copy; paraphrase the brand, never the operational detail)

The reference is a fictional Bristol clinic. Keep every **argument and number** (fees, minutes, session counts,
the one-in-twelve referral rate) — they *are* the design — and change only what identifies the brand.

**Renamed for the recreation:** brand **Upright → Kilter**; address "44 Whiteladies Road, Bristol, BS8 2NH" →
**"Studio 3, 210 Whiteladies Road, Bristol, BS8 2XS"**; phone `0117 428 9930` → **`0117 496 0123`**
(`tel:+441174960123`); email `reception@uprightclinic.co.uk` → **`reception@kilter.example`**; the three
practitioners become **Dr Naomi Feld** (clinic director), **Dr Peter Osei**, **Ayesha Rahim** (keep the third name:
it is the therapist, not the brand) — keep their registration formats (`GCC 04-11982`, `GCC 04-16447`,
`BASRaT 8841`), qualification years (2011 / 2017 / 2019) and "special interest" lines verbatim. The three
testimonials keep their substance with new patient names (**Rachel Adeyemi → Priya Menon**, **Tom Braithwaite →
Callum Reid**, **Sofia Lund → Marta Nowak**) and their Bristol districts (Redland / Clifton / Bedminster).

### Header (81 px)

Logo (three short vertical bars + wordmark) · nav **What we treat · Your first visit · Practitioners ·
Appointments · About · Fees · Blog · Contact** (14/500 `#4b5563`) · moon/sun toggle (`aria-label="Toggle dark
mode"`) · filled CTA **Book an assessment** (8 px radius, `#40664a`, white 14/500, `px-5 py-2.5`, hidden below
`sm`) · burger below `lg`. Mobile panel repeats the eight labels at `block py-3 text-base font-medium` plus a
full-width CTA.

### Hero

- Chip: a **pulsing dot** (`animate-ping` ring + solid dot) + **"GCC registered · Bristol · Since 2016"**
- `h1`: **"Back pain is common."** `<br>` then the gradient typewriter span
- Lede: *"A chiropractic clinic on Whiteladies Road treating back pain, sciatica, neck pain and headaches. We will
  tell you at the first assessment whether we can help, how long it is likely to take, and when you would be better
  off elsewhere."*
- CTAs: **Book an assessment** (arrow glyph) · **What happens first** (outline, → `#first-visit`) ·
  **Watch Demo** (round 48 px play chip + label)
- Fact row (4 cells, `border-t`): **£65** / First assessment · **45 min** / Assessment length · **3–6** /
  Typical sessions · **8** / Years in Clifton

### Counter strip (animated, 2 s, ease-out, IO threshold .5)

**3–6** Sessions in a typical course · **45 min** First assessment · **2,400** Patients seen since 2016 ·
**100%** GCC registered practitioners

### `#conditions` — "The four things people mostly come in with"

Eyebrow **What we treat**; lede *"Written plainly, including what a realistic course of treatment looks like rather
than an open-ended plan."* Four cards, each `h3` + two `dt/dd` pairs + a **Typical course** footer:

1. **Lower back pain** — *"A deep ache across the lower back, often worse after sitting, with a stiff and reluctant
   first ten minutes in the morning."* / *"Assessment to rule out anything needing referral, then a mix of joint
   mobilisation, soft tissue work and specific loading exercise you do between visits."* → **4–6 sessions**
2. **Sciatica and referred leg pain** — *"Pain travelling from the back or buttock down the leg, sometimes with pins
   and needles. Often worse on coughing or sitting."* / *"Careful neurological assessment first, because genuine
   nerve involvement changes the plan. Treatment is usually slower and more graded than for simple back pain."* →
   **6–10 sessions**
3. **Neck pain and headaches** — *"A tight band at the base of the skull, pain turning the head one way, headaches
   that begin at the neck and settle behind one eye."* / *"Manual therapy to the neck and upper back combined with a
   genuinely dull conversation about screen height, which is usually the actual cause."* → **3–5 sessions**
4. **Postural and desk-related pain** — *"Aching between the shoulder blades by mid-afternoon, easing at weekends
   and returning by Tuesday."* / *"Hands-on work gives short-term relief; the durable fix is a workstation change and
   a short daily routine. We will be honest that the second matters more."* → **2–4 sessions**

Closing callout (terracotta left rule): *"Chiropractic is not a treatment for everything. If your symptoms suggest
something outside our scope — or something that needs imaging or a GP — we will say so at the assessment and refer
you on. That happens with roughly one in twelve new patients, and there is no charge beyond the assessment."*

### `#first-visit` (dark) — "Exactly what happens, so nothing is a surprise"

Eyebrow **Your first visit** (terracotta); lede *"Most people who have never seen a chiropractor are nervous about
the same three things. This is the whole appointment, start to finish."* Four steps, each **number · time pill ·
title · body**:

1. **01 · 15 min · We talk, at length** — *"History of the problem, what makes it better and worse, previous
   injuries, your work and sleep, and any medication. This is the part that most determines whether treatment will
   help, and it is not a formality."*
2. **02 · 15 min · Physical examination** — *"Movement testing, orthopaedic and neurological tests as needed. You
   stay clothed; we may ask you to change into shorts and a t-shirt, and there is a private space to do so."*
3. **03 · 10 min · An honest explanation** — *"What we think is going on, in plain language, and whether
   chiropractic is the right answer. If imaging or a GP referral is more appropriate, we say so here rather than
   starting a course of treatment."*
4. **04 · 5 min · Treatment, if appropriate** — *"If it is suitable and you are happy to proceed, we will usually
   begin treatment in the same appointment. You will be told what we are about to do before we do it, every time."*

Closing note (tinted panel): *"You are not committing to a course of treatment by booking an assessment. Roughly one
new patient in twelve leaves with a referral elsewhere rather than a treatment plan, and that is a good outcome
rather than a failed appointment."*

### `#team` — "Who you will see"

Eyebrow **Practitioners**; lede *"Both practitioners are registered with the General Chiropractic Council, which is
a legal requirement to use the title in the UK."* — **fix the count** ("Both" → "All three, or both chiropractors
and their therapist, are registered…", see defects). Three cards, 4/5 photograph + name + role + bio + `dl`:

| name | role | bio | `dl` |
| ---- | ---- | --- | ---- |
| **Dr Naomi Feld** | Doctor of Chiropractic, clinic director | *"Trained at AECC and has practised in Bristol since 2014. Particular interest in graded return to activity after a disc episode, and a low tolerance for open-ended treatment plans."* | Registration **GCC 04-11982** · Qualified **2011** · Special interest **Sciatica and disc-related pain** |
| **Dr Peter Osei** | Doctor of Chiropractic | *"Former physiotherapy assistant, retrained in chiropractic in 2017. Runs the clinic's desk-assessment sessions and is unreasonably enthusiastic about monitor height."* | **GCC 04-16447** · 2017 · Neck pain and headaches |
| **Ayesha Rahim** | Sports rehabilitation therapist | *"Works alongside both chiropractors on the exercise side of treatment, which is the part that determines whether the problem stays away after the course finishes."* | **BASRaT 8841** · 2019 · Loading and return to sport |

Foot note: *"You can verify any registration on the GCC's public register. We publish our numbers because it takes
thirty seconds to check and there is no reason not to."*

### `#appointments` — "Fees, in full"

Eyebrow **Appointments** (terracotta); lede *"No packages, no prepaid blocks and no discount for buying ten
sessions in advance."* Three cards, **the first emphasised** (dark `#2c4132`, `ring-2 #dc8560`):

1. **Initial assessment** — *"Everyone, first time. Includes treatment if appropriate."* — **£65** · 45 minutes —
   Full history and physical examination / Orthopaedic and neurological testing / A plain-language explanation of
   findings / Treatment in the same visit where suitable / Referral onward if that is the right answer
2. **Follow-up treatment** — *"Subsequent visits within an active course."* — **£42** · 20 minutes — Review of
   progress since the last visit / Manual therapy and soft tissue work / Exercise progression / Written home
   programme updates
3. **Extended review** — *"Returning patients after six months, or a new problem."* — **£55** · 30 minutes —
   Re-examination of the original complaint / Assessment of any new symptoms / Updated plan or discharge /
   Workstation advice where relevant

Note: *"We do not sell treatment plans up front. You pay per visit, and if you want to stop after two sessions
because it is not helping, that is a completely reasonable thing to do and you will not be talked out of it."* →
**Book an assessment**.

### `#testimonials` — "What people say"

Eyebrow **Patients** (`primary-100`, 14/500); lede *"Collected after discharge rather than during a course of
treatment."* Three white cards, five `#769d7e` stars each, 18/500 quote, 48 px avatar disc with the initial,
name + district:

1. *"I was told at the assessment that I probably needed a GP rather than a chiropractor. They charged me for the
   assessment and nothing else. I have sent three people here since."* — **Priya Menon**, Redland
2. *"Six sessions and a set of exercises I actually do. Nobody tried to sell me a block of twenty."* —
   **Callum Reid**, Clifton
3. *"The desk assessment changed more than the treatment did, which is apparently what they had been telling me all
   along."* — **Marta Nowak**, Bedminster

### `#faq` — "The things people are too polite to ask"

Eyebrow **Questions**; lede *"Mostly about safety, cost and whether it works."* Five exclusive accordions:

1. **Does the adjustment hurt?** — *"Usually not. The popping sound is gas releasing from a joint, not anything
   breaking or clicking back into place. Some people feel mild soreness for a day afterwards, similar to after
   unfamiliar exercise. You will be told what is about to happen before it happens, every time."*
2. **How many sessions will I need?** — *"For simple back pain, typically four to six. Sciatica often takes longer.
   We give you an expected number at the assessment and review it after three visits — if you are not improving by
   then, continuing is not the answer."*
3. **Do I need a referral or a scan?** — *"No referral is needed. Most back pain does not need imaging, and scanning
   everyone finds incidental changes that are present in plenty of people with no pain at all. If your presentation
   genuinely warrants imaging, we will arrange it."*
4. **Is chiropractic safe?** — *"Serious adverse events are rare, and the assessment exists partly to identify the
   small number of people for whom manual treatment is not appropriate. If you have particular risk factors we will
   discuss them with you rather than proceeding quietly."*
5. **Do you offer memberships or maintenance plans?** — *"No. We treat a problem, discharge you, and are happy to see
   you again if something else comes up. Ongoing maintenance care is not well supported by evidence and we would
   rather not sell it."*

### `#contact` — the closing gradient band

**Book an assessment, not a course of treatment** · *"Forty-five minutes, sixty-five pounds, and an honest answer
about whether we can help."* → **Book an assessment** (white 8 px button, `#35513c` label, arrow) ·
**See what happens first** (2 px `white/30` outline, phone glyph). Decoration: two `white/10 blur-3xl` circles and a
**radial-dot grid** overlay (`radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, `background-size: 40px`).

### Footer (`#111827`, `pt-16 lg:pt-24`)

- **Brand column (4/12)** — wordmark, *"GCC-registered chiropractic clinic in Bristol — back pain, sciatica, neck
  pain and headaches, with honest expectations about what treatment can and cannot do."*, three 40 px social
  chips (X / Instagram / LinkedIn, `bg-gray-800`, radius 8), then `Studio 3, 210 Whiteladies Road, Bristol, BS8 2XS`
  · `0117 496 0123` · `reception@kilter.example`
- **Three link columns (5/12)** — **Spaces** (see defects: replace with a clinic column), **Company** (About, Blog),
  **Support** (Contact, Terms)
- **Newsletter (3/12)** — **Stay Updated** + *"Occasional notes on posture, movement and what the evidence actually
  says — no more than monthly."* + email input (`rounded-lg border-gray-700 bg-gray-800`, `Enter your email`) and a
  **Subscribe** button (`#40664a`, `px-4 py-2.5`)
- **Bottom bar** — `© 2026 Kilter. All rights reserved.` left; **Privacy Policy · Terms of Service · Style Guide**
  right. **Add the required `Made with Component Dock` link → `https://www.componentdock.com/`** (repo rule 5 — the
  reference has no such line).

### Chrome

Preloader (white full-screen, 40 px spinner `border-4 border-gray-200 border-t-primary-600`) · skip link
(*"Skip to content"* → `#main-content`) · 2 px scroll-progress bar (`#40664a`, `z-[60]`) · sticky mobile CTA bar
(*Call Now* + *Book a Tour* — see defects) · cookie dialog (`role="dialog"`, *"We use cookies to enhance your
experience. By continuing to visit this site you agree to our use of cookies."*, **Decline** / **Accept All**) ·
back-to-top disc.

## Inner-page inventory (the reference is a seven-page site; the recreation is one app)

| page      | `h1`                 | content that matters for the port                                                        |
| --------- | -------------------- | ------------------------------------------------------------------------------------------ |
| `/`       | — (hero)             | everything above                                                                             |
| `/about/` | *About Upright*      | *"Treatment with an end date"*, three commitments, a registration table, closing CTA          |
| `/pricing/` | *Fees*             | re-uses the home page's `#appointments`, `#first-visit`, `#faq` and `#contact` bands verbatim |
| `/contact/` | *Book an appointment* | **the only real form**: *Request an appointment* (Full Name, Email, phone, *"Tell us roughly what is going on…"*) + *The clinic* details |
| `/blog/`  | *Insights & Updates* | filter chips (All / Treatment / Explained / Prevention / Safety / How we work) + dated cards |
| `/terms/`, `/privacy/`, `/elements/` | — | legal pages + a style guide; not part of the tier-1 recreation                     |

Single-page adaptation: the eight nav labels collapse to in-page anchors — *What we treat* → `#conditions`,
*Your first visit* → `#first-visit`, *Practitioners* → `#team`, *Appointments* → `#appointments`, *Fees* →
`#appointments`, *Contact* → `#contact`, *About* → `#first-visit` (the "how we work" argument), *Blog* →
`#testimonials`? **No** — do not invent an anchor for *Blog*; render it as a `<button>` that is visually present but
`aria-disabled` and non-navigating is worse than omitting it. Recommended: keep **six** nav labels
(What we treat · Your first visit · Practitioners · Appointments · About · Contact) and drop *Fees*/*Blog* (Fees
duplicates Appointments; Blog has no single-page counterpart). Record this in the PR.

## Interaction inventory (the whole of `Base.astro…BLoalVWc.js`, 16,233 B)

| behaviour            | rule                                                                                              |
| -------------------- | -------------------------------------------------------------------------------------------------- |
| theme                | first paint reads `localStorage.theme`, else `prefers-color-scheme`; toggle flips `.dark` on `<html>` and writes `theme` |
| preloader            | removed on `window.load` (+ 300 ms fade)                                                             |
| scroll progress      | `width = scrollY / (scrollHeight − innerHeight) * 100 %`, passive listener                            |
| header shadow        | `shadow-lg` past **50 px**                                                                           |
| nav active state     | IO with `rootMargin: -20% 0px -70% 0px` over the four section ids; matching link gets `.nav-active` (`#111827`, weight 600; white in dark) |
| anchor scroll        | every `a[href^="#"]` scrolls to `target.top − header.height − 20` (preventDefault)                    |
| reveal               | elements whose top > 80 % viewport start `opacity 0, translateY(20px)`; IO threshold .1, `rootMargin 0 0 -10% 0`; transitions 0.6 s ease-out with per-element `data-delay` (0–500 ms); **skipped entirely under `prefers-reduced-motion`** |
| counters             | IO threshold .5, 2,000 ms, cubic ease-out (`1 − (1 − p)³`), suffix-aware (`%`, `+`, decimals, `$…K/M`) |
| typewriter           | cycles `["Living with it is optional","Guessing at it is not","So is putting up with it"]` every 3,000 ms with a 300 ms `opacity`/`translateY(10px)` swap |
| hero blobs           | `animate-hero-float` 8 s / `animate-hero-float-reverse` 10 s, `translate(30px,-20px) scale(1.05)` at 33 % |
| carousel             | 3 slides ≥ 1024, 2 ≥ 640, else 1; autoplay **5 s**; pause on `mouseenter`; dots built only when pages > 1 |
| FAQ                  | exclusive: opening one closes the others; `max-height` 0 → `scrollHeight`, `opacity` 0 → 1, 300 ms; plus icon rotates **45°** |
| video modal          | click builds a `fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm` overlay with a 16:9 iframe; Esc or backdrop closes |
| back-to-top          | visible past **300 px** (`opacity 1`, `translateY(0)`), smooth scroll to top                          |
| cookie               | slides up **1,500 ms** after load unless `localStorage['cookie-consent']`; Decline → `essential`, Accept → `accepted`; node removed after 300 ms |
| smooth scroll        | `html { scroll-behavior: smooth }`                                                                    |

## Screenshot analysis (`upright-template.jpg`, 2,400 × 1,892, AVIF payload)

The product shot is **browser-chrome + the hero only**: a safari-style frame on a white page, the sticky bar with the
bar-glyph logo and eight muted-grey labels, the moon icon, and a filled sage **Book an assessment** pill at the top
right; then the centred hero on the `#f4f7f4 → #fff` wash — the pill badge with its pulsing dot, the two-line
headline in near-black with the **green gradient** on line two, three lines of grey lede, the filled green CTA with
its arrow glyph beside the white outlined "What happens first" and the round play chip, the 4-cell fact row separated
by a hairline, and the wide rounded photograph (a clinic reception, blue-grey tiled wall, pale oak desk) sitting in a
16 px card with a deep soft shadow. Lower bands were inspected on the live page instead (crops `band-conditions`,
`band-firstvisit`, `band-team`, `band-appointments`, `band-testimonials`, `band-faq`, `band-footer`): the four
condition cards read as **paper cards on white with a 1 px sage border and no shadow**; the dark band is the only
place terracotta appears at scale; the fee cards put the **dark card first** with a 2 px terracotta ring; the
testimonial cards are the only elements with `shadow-soft`.

## Reference defects (fix in the recreation; do not reproduce)

1. **Footer "Spaces" column is coworking leftovers** — Hot Desk / Dedicated Desk / Private Office / Meeting Rooms,
   all pointing at `#spaces`, an id that does not exist on any page. Replace with a clinic column (**What we treat**,
   **Your first visit**, **Practitioners**, **Fees**) or drop the column.
2. **Sticky mobile CTA contradicts the page** — *"Book a Tour"* and `tel:5556789012` (a US placeholder) while the
   clinic's real number is `0117 428 9930`. Use **Book an assessment** → `#contact` and **Call** →
   `tel:+441174960123`, and keep it one line above the cookie banner so the two never stack.
3. **Dead newsletter form** — `data-newsletter-form` has **no handler** in the bundle and no `action`; submitting
   does nothing. Give it client-side validation plus a success message (the bundle already has a toast helper).
4. **`.font-serif` compiles to an empty rule** while `Source Serif 4` is `@font-face`-loaded and never applies.
   Ship DM Sans for every heading and drop the serif font files.
5. **Malformed JSON-LD** — `{"@context":"https://***@type":"Organization", …}` is not valid JSON and has no
   `@type`. Do not copy it; if JSON-LD ships, emit valid `Organization`/`MedicalBusiness`.
6. **The `h1` rewrites itself every 3 s.** A heading that mutates is hostile to screen readers and to Ctrl+F. Keep
   the first phrase static in the `<h1>` and run the rotation on a decorative `<span aria-hidden="true">` beside it,
   or on the same `<span>` with a static `<span class="sr-only">` alternative. Under `prefers-reduced-motion` show
   only the first phrase.
7. **Gradient text on the dark-mode hero** — `.text-gradient` hardcodes `#40664a → #769d7e`, which drops to ~2.7:1
   on `#030712`. In dark mode use `primary-400 → primary-300` (or plain `#a3bfa8`) to keep AA.
8. **"Both practitioners" while three people are listed** — the team lede counts two, the grid shows three. Say
   *"Both chiropractors are registered with the General Chiropractic Council…"* and let the therapist's own card
   carry BASRaT.
9. **Three testimonials, three visible slides** — at ≥1024 the carousel has nothing to move, so the prev/next/dots
   never render. Either add a fourth testimonial (so ≥1024 has a second page) or make ≥1024 a static 3-up grid and
   keep the carousel only below `lg`.
10. **`Watch Demo` opens a Rickroll** (`youtube.com/embed/dQw4w9WgXcQ`). Replace with a neutral placeholder clip or
    drop the modal and keep the chip as a link to `#first-visit`.
11. **Preloader ignores reduced motion** (only the reveal respects it) and, with JS disabled, never leaves the
    screen. Ship it with a `noscript`-safe fallback or drop it.
12. **Two `h2` weight systems** — `600` on conditions/first-visit/team/fees, `700` on testimonials/FAQ/contact.
    It is measurable in the reference, so keep it; do not "normalise" it.
13. **`data-nav-link` on links that are not sections** — *About*, *Fees*, *Blog*, *Contact* never receive
    `.nav-active` because the observer only tracks `conditions`, `first-visit`, `team`, `appointments`. With six
    in-page labels, either track all six ids or none.

## Requirements

### Feature: Page shell and chrome

#### Scenario: Landmarks and skip link

- **GIVEN** the page is loaded
- **THEN** the first focusable element is *"Skip to content"* targeting `#main-content`, `sr-only` until focused
  and then a `#40664a` pill at `left-4 top-4`
- **AND** the document has exactly one `<h1>`, one `<main id="main-content">`, one `<header>` and one `<footer>`
- **AND** the `h1` lives in the hero band, not inside a card or a section header

#### Scenario: No horizontal overflow at any audited width

- **GIVEN** widths 320 / 390 / 768 / 1024 / 1280 / 1440
- **THEN** `body.scrollWidth === documentElement.clientWidth` at every one of them, and `window.scrollTo(200, 0)`
  leaves `window.scrollX === 0`
- **AND** the hero photograph scales to its container (`w-full`, `h-auto`) and never forces a scroll

#### Scenario: Fixed chrome

- **THEN** the scroll-progress bar is **2 px** tall, `#40664a`, `fixed top-0` at `z-[60]`, width = scroll fraction
- **AND** the back-to-top disc is **48 × 48**, full radius, `#40664a` white glyph, fixed `bottom-6 right-6`,
  `opacity: 0` and `pointer-events: none` below **300 px** of scroll, and scrolling to top is smooth
- **AND** the cookie dialog is `role="dialog"` `aria-label="Cookie consent"`, slides up **1,500 ms** after load
  unless `localStorage['cookie-consent']` is set, offers **Decline** (`essential`) and **Accept All** (`accepted`),
  then removes itself
- **AND** the mobile CTA bar is `lg:hidden`, fixed to `bottom-0`, **69 px** high, and the cookie dialog stacks
  **above** it (never overlaps it)

#### Scenario: Theme

- **GIVEN** no stored choice
- **WHEN** the OS prefers dark
- **THEN** `.dark` is on `<html>` at first paint and the page ground is `#030712` with `#f3f4f6` ink
- **AND** clicking the header toggle flips the class and writes `localStorage.theme`, and the sun icon replaces the
  moon

#### Scenario: Reduced motion

- **WHEN** `prefers-reduced-motion: reduce` is set
- **THEN** no reveal transitions, no blob float, no typewriter rotation (first phrase only), no counter animation
  (final values render immediately) and `scroll-behavior: auto`

### Feature: Header

#### Scenario: Header at 1440

- **THEN** the header is **81 px** (80 + 1 px border), `position: sticky`, `top: 0`, `z-50`, ground `#fff` at
  **80 %** with `backdrop-filter: blur(16px)`, bottom border 1 px `#e5e7eb`
- **AND** the logo is an original three-bar mark + *Kilter* wordmark, never the source SVG
- **AND** the nav labels are 14/20 **500** `#4b5563` with `gap: 32px`, `hover:text-gray-900`, and one label carries
  `.nav-active` (`#111827`, 600) as its section crosses the viewport
- **AND** the CTA is **8 px** radius, `#40664a`, white 14/500, `8px 20px`, `hover:#35513c`

#### Scenario: Header shadow

- **WHEN** the page scrolls past 50 px
- **THEN** `shadow-lg` is added to the header and removed again above 50 px; the height and layout shift by nothing

#### Scenario: Nav collapses below `lg`

- **GIVEN** a 390 px viewport
- **THEN** the nav and the header CTA are `display: none`, a burger with `aria-label="Open menu"` and
  `aria-expanded="false"` is visible
- **WHEN** the burger is pressed
- **THEN** `aria-expanded` becomes `"true"`, the panel expands below the bar with six `py-3 text-base` labels and a
  full-width filled CTA, and the glyph swaps to an X

### Feature: Hero

#### Scenario: Hero at 1440

- **THEN** the band is **1,437 ± 8 %** px tall on a `linear-gradient(#f4f7f4 → #fff)` with two blurred
  `primary` circles behind it (`aria-hidden`), and no horizontal overflow
- **AND** the chip reads **GCC registered · Bristol · Since 2016** at 14/20 **500** `#35513c` on `#f4f7f4`, full
  radius, `6px 16px`, with a 8 px dot whose ring animates
- **AND** the `h1` is **60 / 60 / 700**, tracking **−1.5 px**, max width **896**, and line two is a gradient
  `#40664a → #769d7e` (`background-clip: text`)
- **AND** the lede is **20 / 28** `#4b5563` in a **672** column
- **AND** the primary CTA is **229 × 48**, 8 px radius, `#40664a`, with the arrow glyph; the secondary is white with
  a 1 px `#d1d5db` border and `#374151` label; the third control is a 48 px round `#40664a` play chip + *Watch Demo*
- **AND** the fact row is a 4-column grid inside **896** with `border-t #e5e7eb` and `padding-top: 40px`: values
  30/36 **700** `#111827`, labels 14 `#6b7280`

#### Scenario: The rotating second line

- **THEN** the visible phrase advances every **3,000 ms** through *Living with it is optional* → *Guessing at it is
  not* → *So is putting up with it*, each swap being a 300 ms `opacity` + `translateY(10px)` transition
- **AND** the `h1`'s accessible name does not change with the animation (static text for AT, `aria-hidden` on the
  rotating span)
- **AND** with reduced motion the first phrase only

#### Scenario: Hero image

- **THEN** a 16:8 photograph sits in a **1,024 × 512** shell, 16 px radius, `shadow-2xl`, `ring-1 #e5e7eb`, centred
  at `max-w-5xl`, `loading="eager"`, and is a placeholder image (never a copied asset)

#### Scenario: Hero stacks below `lg`

- **GIVEN** 390 px
- **THEN** the `h1` is **36 / 40** with **−0.9 px** tracking, the CTAs stack full-width-ish in a column, the fact row
  becomes 2 × 2, and the image keeps its 16:8 ratio

### Feature: Counter strip

#### Scenario: Counters animate once

- **THEN** four cells (`3–6`, `45 min`, `2,400`, `100%`) sit on `#f9fafb` between `border-y #e5e7eb`, **238 px** at
  1440, 4-up from `sm` and 2-up below
- **AND** each value counts up over **2,000 ms** with a cubic ease-out when it is 50 % visible, then stops observing
- **AND** without `IntersectionObserver` or with reduced motion the **final value renders on first paint** (no
  `setState`-in-effect, per `docs/conventions.md`)
- **AND** the labels are 14/20 **500** `#6b7280`: *Sessions in a typical course · First assessment · Patients seen
  since 2016 · GCC registered practitioners*

### Feature: `#conditions` — the four cards

#### Scenario: The band at 1440

- **THEN** the band is **1,224 ± 8 %** px on white, content **1,088** wide, eyebrow **What we treat** on
  `#e4ece5`/`#2c4132`
- **AND** the `h2` is **36 / 40 / 600**, tracking **−0.9 px**, in a **672** column, and the lede is 16 `#4b5563`
- **AND** the grid is **2 columns** from `sm` with `gap: 20px`, starting **48 px** below the lede

#### Scenario: A condition card

- **THEN** it is `#fff` with a 1 px `#c9d9cc` border, **16 px** radius, `24px` padding, and **no shadow**
- **AND** the title is 20/28 **600**; the two `dt` are 14/600 `#2c4132`; the two `dd` are 14/22.75 `#4b5563`
- **AND** the footer rule is `border-t #e4ece5`, `padding-top: 12px`, label 14 `#6b7280` + value 14/**600** `#874736`
- **AND** the session counts are exactly **4–6 / 6–10 / 3–5 / 2–4 sessions** in that card order

#### Scenario: The closing callout

- **THEN** a 16 px-radius panel spans **1,088 × 78**, ground `#fdf5f1`, `border-left: 4px #c2704f`,
  `padding: 16px 20px`, 14/22.75 `#374151`, containing the "one in twelve" referral paragraph

### Feature: `#first-visit` — the dark timeline

#### Scenario: The band at 1440

- **THEN** the ground is `#25362a` with `#f4f7f4` ink, **1,184 ± 8 %** tall, content **960** wide
- **AND** the eyebrow is on `#c2704f` with white 12/600 uppercase; the `h2` is white 36/600, the lede `#c9d9cc`
- **AND** the four rows form one 16 px-radius shell whose rows touch through **1 px gaps** (`space-y-px`), each row
  `#2c4132` at 60 % with `24px` padding

#### Scenario: A step row

- **THEN** `01`–`04` are 24/32 **600** `#e8a88a`, the time pill is `#35513c` 12/600 `#e4ece5` (full radius,
  `2.5px 10px`), the title 20/28 **600** white and the body 16/26 `#c9d9cc`
- **AND** from `sm` the number+time column is a fixed **160 px** column beside the text; below `sm` they sit inline
  above it
- **AND** the four durations are exactly **15 / 15 / 10 / 5 min** and their titles are *We talk, at length* ·
  *Physical examination* · *An honest explanation* · *Treatment, if appropriate*

#### Scenario: The closing note

- **THEN** a 16 px-radius panel on `rgba(194,112,79,.15)` with a 1 px `rgba(220,133,96,.3)` ring and `24px 28px`
  padding holds the "you are not committing to a course" paragraph in `#e4ece5`

### Feature: `#team`

#### Scenario: The band at 1440

- **THEN** the band is **1,217 ± 8 %** px on white in a **1,152** container; the header block is centred,
  `max-w-2xl`, eyebrow **Practitioners**, `h2` 36/600, lede 16 `#4b5563`
- **AND** the grid is **3 columns** from `md` with `gap: 32px`

#### Scenario: A practitioner card

- **THEN** the photograph is **4:5** (341 × 427 at 1440), 16 px radius, on `#e4ece5`, `loading="lazy"`, a
  placeholder image
- **AND** the name is 20/28 **600**, the role 14 `#874736`, the bio 14/22.75 `#4b5563`
- **AND** the `dl` has `border-t #e4ece5`, `padding-top: 16px`, three rows of `label → value` with the label 14
  `#6b7280` left and the value 14/**600** right (`Registration` in `font-mono` 12/600)
- **AND** the foot note about verifying registration is present under the grid

### Feature: `#appointments` — the fee cards

#### Scenario: The band at 1440

- **THEN** the ground is `#f4f7f4`, height **984 ± 8 %**, content **1,152**, header centred with the **Appointments**
  chip on `#c2704f`
- **AND** the grid is **3 columns** from `lg` with `gap: 24px`, each card `24px`-ish (`p-7`) with 16 px radius
- **AND** card 1 is `#2c4132` with `#f4f7f4` ink and a **2 px `#dc8560` ring**; cards 2 and 3 are white with a 1 px
  `#c9d9cc` border and `#111827` ink
- **AND** the ticks are 16 px (`h-4 w-4`): `#e8a88a` on the dark card, `#40664a` on the light ones

#### Scenario: Prices and lists

- **THEN** the three prices are **£65 · 45 minutes**, **£42 · 20 minutes**, **£55 · 30 minutes** in that order, the
  amount 30/36 **600** `tabular-nums`
- **AND** the feature counts are **5 / 4 / 4** and each list is separated from the price by a 1 px rule
  (`#35513c` on the dark card, `#e4ece5` on the light ones)
- **AND** the closing note is 14/22.75 `#4b5563` centred in **768**, and the CTA below it is the filled 8 px button
  **Book an assessment**

### Feature: `#testimonials`

#### Scenario: The band at 1440

- **THEN** the ground is `#f9fafb`, height **768 ± 8 %**, header centred in **768** with the **Patients** chip on
  `#e4ece5`
- **AND** the `h2` is **36 / 700** (the one difference from the 600 headings) and the lede **18 / 28** `#4b5563`
- **AND** the cards are white, 16 px radius, `32px` padding, `shadow-soft`, **320 px** tall, with five 20 px
  `#769d7e` stars, an 18/28 **500** quote in `#111827`, a **48 px** `#e4ece5` avatar disc with a `#40664a` initial,
  and name 16/**600** + district 14 `#6b7280`

#### Scenario: The carousel

- **GIVEN** ≥ 1024 px
- **THEN** three slides are visible and the track advances every **5,000 ms**, pausing on hover
- **AND** dots/prev/next exist only when there is more than one page — with three slides and three visible, no
  control renders (see defect 9: either add a fourth quote or go static at `lg`)
- **GIVEN** 768 px two slides, **GIVEN** 390 px one slide at a time
- **AND** the track uses `transform: translateX()` with a 500 ms ease-out transition and respects reduced motion
  (no autoplay)

### Feature: `#faq`

#### Scenario: The band at 1440

- **THEN** the ground is white, height **820 ± 8 %**, header centred in **768**, eyebrow **Questions**, `h2` 36/700
- **AND** five rows in **768** separated by `1px #e5e7eb`, each `24px` vertical padding

#### Scenario: Opening a question

- **WHEN** a question is pressed
- **THEN** its panel animates `max-height 0 → scrollHeight` and `opacity 0 → 1` over 300 ms, its icon rotates **45°**,
  and any other open panel closes first (exclusive accordion)
- **AND** the button exposes `aria-expanded` and the panel is `aria-hidden` while closed — or the markup is a native
  `<details>`/`<summary>` that keeps the same visual behaviour
- **AND** the five questions and answers are the ones in the content inventory, in that order

### Feature: `#contact` — the closing band

#### Scenario: The band at 1440

- **THEN** the ground is `linear-gradient(135°, #40664a → #2c4132)`, **500 ± 8 %** tall with `112px` block padding
- **AND** two `white/10 blur-3xl` circles and a 40 px radial-dot grid sit behind the content at `aria-hidden`
- **AND** the `h2` is **48 / 48 / 700**, tracking **−1.2 px**, white, centred in **768**; the sub-line is 18/28
  `#e4ece5` in **576**
- **AND** the primary button is white, 8 px radius, `16px 32px`, `#35513c` label + arrow; the secondary is a 2 px
  `rgba(255,255,255,.3)` outline with a phone glyph, white label

### Feature: Footer

#### Scenario: Footer at 1440

- **THEN** the ground is `#111827`, height **568 ± 8 %**, `padding-top: 96px`, inside the **1,216** container
- **AND** the 12-column grid is **4 / 5 / 3** with `gap: 32px`: brand (logo 40 px, `max-w-xs` blurb `#9ca3af`,
  three 40 px social chips on `#1f2937` with 8 px radius, address/phone/email lines 14 `#9ca3af`) · three link
  columns with 14/600 uppercase `tracking-wider` white heads · newsletter
- **AND** the newsletter input is 8 px radius, 1 px `#374151`, `#1f2937` ground, `10px 16px`; the **Subscribe**
  button is `#40664a` 14/500
- **AND** the bottom bar is separated by `border-t #1f2937`, `padding-block: 32px`, copyright 14 `#6b7280` left and
  three legal links right

#### Scenario: Required Component Dock link

- **THEN** the footer contains a visible link **Made with Component Dock** → `https://www.componentdock.com/`, in the
  bottom bar or the brand column, styled as the other footer links
- **AND** no file under `apps/kilter/` contains the strings `colorlib`, `Upright` or `uprightclinic`

#### Scenario: Newsletter submits

- **WHEN** a valid email is submitted
- **THEN** the input clears and a confirmation appears; an invalid address blocks submit and shows a message
- **AND** nothing is sent over the network (no backend)

### Feature: Responsive parity

#### Scenario: Measured heights per width

- **THEN** at 768 px the header is **65**, hero **1,137**, counters **218**, conditions **1,338**,
  first-visit **1,314**, team **1,149**, fees **1,614**, testimonials **742**, FAQ **756**, contact **420**,
  footer **946** (±10 %)
- **AND** at 390 px they are **65 / 1,248 / 338 / 2,153 / 1,744 / 2,736 / 1,678 / 794 / 840 / 512 / 1,262** (±10 %)
- **AND** the document heights are ≈ **9,021 / 9,699 / 13,370** for 1440 / 768 / 390

### Feature: Content and brand parity

#### Scenario: The rename

- **THEN** every occurrence of the source brand is gone — wordmark, `title`, `meta description`, JSON-LD, footer
  copyright, email domain and phone number
- **AND** the page keeps the source's *arguments* verbatim: the fees (£65/£42/£55), the durations (45/20/30), the
  four session ranges, the four step durations, the one-in-twelve referral rate and the five FAQ answers

#### Scenario: One typeface, two colours

- **THEN** exactly one webfont family is loaded (**DM Sans**, 400/500/600/700) and every heading computes to it
- **AND** no element uses a serif family; no Source Serif 4 file is fetched

#### Scenario: Accessibility floor

- **THEN** every interactive element is reachable by keyboard with a visible `2px #55805f` outline at 2 px offset
- **AND** the burger has `aria-expanded`, the theme toggle `aria-pressed`, icon-only buttons an `aria-label`, and the
  FAQ buttons `aria-expanded`
- **AND** every decorative blob, dot grid, star row and social glyph is `aria-hidden`
- **AND** text meets **4.5:1**: `#4b5563` on white (7.5:1), `#6b7280` on white (4.8:1), `#f4f7f4` on `#25362a`
  (11.9:1), white on `#40664a` (6.4:1), `#35513c` on `#f4f7f4` (8.4:1)

## Verification checklist

- [ ] `scripts/verify-app.sh kilter` green: typecheck · lint · **100 % coverage** · build
- [ ] `npm run spec:validate` passes for `template-kilter`
- [ ] `body.scrollWidth === clientWidth` at 320 / 390 / 768 / 1024 / 1280 / 1440
- [ ] Band heights within ±8 % of the table above at 1440, 768 and 390
- [ ] Both colour ramps declared in `apps/kilter/src/index.css` `@theme` (`primary` 50–900, `accent` 50–900) and used
      through Tailwind classes — no raw hex in components except the two gradients
- [ ] `--radius-lg` 8 px / `--radius-2xl` 16 px and `--shadow-soft: 0 4px 16px -4px rgb(0 0 0 / .1)` in `@theme`
- [ ] One `<h1>`; the rotating phrase is `aria-hidden` with a static alternative; no heading text mutates for AT
- [ ] Counters render final values without `IntersectionObserver` (jsdom test asserts `3–6`, `45 min`, `2,400`,
      `100%`)
- [ ] `prefers-reduced-motion` disables reveal, blobs, typewriter, counters, autoplay and smooth scroll
- [ ] Dark mode: no band keeps a light ground; gradient text keeps ≥ 4.5:1 (defect 7 fixed)
- [ ] FAQ is exclusive and keyboard operable; the answer panel is not in the tab order while closed
- [ ] Footer carries **Made with Component Dock** → `https://www.componentdock.com/`
- [ ] No `colorlib.com` / `preview.colorlib.com` / `Upright` string anywhere under `apps/kilter/`
      (`grep -ri -E 'colorlib|upright' apps/kilter` → empty)
- [ ] Imports use `packages/ui` (`Button`, `ButtonLink`, `Card`, `Badge`, `cn`) before new primitives; `injectUiSource()`
      present in `vite.config.ts`
- [ ] `public/CNAME` = `kilter.free.componentdock.com`; `homepage` = `https://kilter.free.componentdock.com`;
      `npm install` at the root so `package-lock.json` registers the workspace
- [ ] `TEMPLATES.md`: `## Medical (32)` → **(33)**, row inserted after *Remedic* / before
      *Wordpress Dentist Themes*, then filled with the live Surge URL after deploy
- [ ] `npm run readme:status` after the row lands

## Implementation notes for the port (not requirements)

- Copy `apps/mandrel` as the scaffold — it already ships `components/Chrome.tsx` (Preloader, SkipLink,
  ScrollProgress, CookieStrip, BackToTop), `lib/theme.ts`, `lib/useScrollState.ts`, `components/ui.tsx`
  (`Container`, `ActionLink`, `Pill`, `Logo`) and a `content.ts` that holds every string. Rename the package to
  `@free-react-templates/kilter`.
- Suggested component split: `Header`, `Hero`, `Counters`, `Conditions`, `FirstVisit`, `Team`, `Fees`, `Testimonials`,
  `Faq`, `ContactBand`, `Footer`, plus `Chrome`.
- Put the four condition objects, the four steps, three practitioners, three fee cards, three quotes and five FAQs
  in `content.ts` as typed arrays — the tests then assert counts and copy from one place.
- Hero and team images: `https://picsum.photos/seed/kilter-<n>/<w>/<h>` (`kilter-1` 1200×600 for the hero,
  `kilter-2..4` 500×625 for the portraits). Never copy the Unsplash URLs or the logo SVG.
- Counters must derive their final value in render when `IntersectionObserver` is missing (`docs/conventions.md`
  §Effects) — jsdom has no IO, so a `setState`-in-effect version fails both the coverage and the react-compiler
  lint rules.
- Typewriter: keep the phrase in state with `setInterval` in an effect that clears on unmount, and skip the interval
  entirely under reduced motion; the `h1` renders a static `<span class="sr-only">Living with it is optional</span>`
  plus the `aria-hidden` rotating span.
- The two gradients are the only places a raw colour is allowed: `linear-gradient(#f4f7f4, #fff)` (hero) and
  `linear-gradient(135deg, #40664a, #2c4132)` (contact) — express them as `from-primary-50 to-white` and
  `from-primary-600 to-primary-800` so dark mode can flip them.

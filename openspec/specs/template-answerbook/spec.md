# Template: Answerbook (Directory — a Q&A archive whose product is the accepted answer)

## Purpose

A **forum front page that has to prove the place is alive**, built the way a reference book is built: rows of
real threads with vote/answer/view counts, a tag index where every tag has a maintainer, a leaderboard ranked by
*accepted* answers rather than post volume, and an archive argument stated in the copy — *"Ask once, get a checked
answer, and leave something behind that still works for the next person in three years."*

The page is **teal on white with an amber accent**, set in **one face, Space Grotesk**, with monospace reserved for
every numeral, tag, eyebrow and code-like label. That mono/sans split is the whole typographic idea: *numbers and
labels are machine data; sentences are human*. The hero leads with a **gradient typewriter** — `h1` line 1 is fixed
(*"Someone has already"*), line 2 rewrites itself every 3 s through *"solved this" → "hit this exact error" →
"written it up properly"* in a teal→`#2dd4bf` background-clip gradient — under a pulsing **status pill**
(*61,400 questions answered and still findable*), two CTAs, a ghost *Watch Demo* with a round teal play chip, a
**four-figure fact row** on a hairline, and a **1024 × 512 screenshot** of the product in a 16 px card.

Below the fold the page argues the same point four different ways, and each argument is a different **layout device**:
a **four-figure counter strip** that animates 0 → 61,400 on scroll; a **thread list** of five rows whose left rail is
a 144 px stat column with the answer count printed as a filled teal chip; an **eight-card tag grid** where each card
ends in a hairline-separated figure row (*4,210 questions* · *+38 today*); a **four-step timeline** with a gradient
connector rule running behind 48 px bordered number squares; a **five-row leaderboard table** with mono right-aligned
figures and rank discs (amber for 1st, silver for 2nd, bronze for 3rd, grey for 4–5); three quote cards in a carousel;
five exclusive accordions; and a **teal gradient closing band** (`primary-600 → primary-800`, 40 px dot grid, two
blurred white discs) over a `#111827` footer with four columns, a newsletter field and a Component Dock credit.

Recreation of the ColorLib "Threadline" design (https://colorlib.com/wp/template/threadline/, live preview
https://preview.colorlib.com/theme/threadline/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript application.
Invented name: **Answerbook** → `apps/answerbook`, `@free-react-templates/answerbook`,
`https://answerbook.free.componentdock.com`.

- **Source slug:** `threadline`
- **ColorLib category (breadcrumb):** *Directory Website Templates* → `https://colorlib.com/wp/cat/directory/`;
  the product page also tags it **Astro**, **Bootstrap Templates**, **Business**, **Directory**, **Tailwind CSS**
- **New name rationale:** `answerbook` is a single lowercase compound — *answer* + *book* — and it names the design's
  own thesis (an archive you can consult) without touching the source word. `threadline` itself is **unusable**: the
  word already belongs to `apps/threadline`, which recreates a different ColorLib design (**Malefashion**,
  `TEMPLATES.md` line 1,743), and `threadcraft` is taken too. Zero repo hits: `git grep -il answerbook origin/main`
  prints nothing, and `apps/`, `openspec/specs/template-answerbook`, `docs/templates/answerbook` do not exist. The
  candidate is **not a ColorLib design either** — `https://colorlib.com/wp/template/answerbook/`,
  `https://preview.colorlib.com/theme/answerbook/` and `https://preview.colorlib.com/theme/bootstrap/answerbook/`
  all answer **404** (probed 2026-10-25). Free names still unused if a later forum/Q&A slug needs one: `askwell`,
  `answerlane`, `askstead`, `keepanswer`, `repute` (all zero-hit; `forum`, `colloquy`, `colloquium`, `conclave`,
  `confab`, `quill`, `lexicon`, `synod` are already apps). Note that the design's own label is *Threadline* and its
  content is developer Q&A — the marketing blurb on the product page (*"category boards and a moderation policy"*)
  does **not** describe the rendered page; the DOM is the authority.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-25)

Every row of `TEMPLATES.md` is `[x]` (2,884 rows; open `- [ ]` **0**), and every row already owns a spec, so the
prep queue comes from `docs/catalog-coverage.md` — the **42 standalone designs** on ColorLib's own listing that the
checklist never recorded. `threadline` is one of them, catalogued as *"app exists (other design); orphan prep (other
design)"*: the word is an app name, but that app is a different design, so the design itself had no spec until now.
It is the **41st of 42** in table order (`voltway` → Sparkwell was #40), leaving **`zephyr`** as the last unprepped
catalogue slug.

`threadline` has **no** `openspec/specs/` or `docs/templates/` entry on `origin/main` (`git grep -l
'wp/template/threadline/' openspec/specs docs/templates` → empty) and no `apps/answerbook`.

The implementer appends this line when it claims the template — under **`## Directory`** (currently
`## Directory (33)`, bump to **34**), alphabetically **after *Royalestate*** (`homefront`) and **before
*Travelers*** (`jetpath`), i.e. between **lines 1,574 and 1,575** on `7b2e863da`. Re-read the section before pasting;
a concurrent stream may have inserted rows above it.

```markdown
- [x] **Threadline** — [colorlib](https://colorlib.com/wp/template/threadline/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/threadline-template.jpg) · [answerbook](https://answerbook.free.componentdock.com)
```

**Screenshot URL note:** the product shot is `…/sites/2/threadline-template.jpg` — **200, 67,182 B, 2,400 × 1,892**,
and it is an **AVIF container behind a `.jpg` extension** (`file` says *ISO Media, AVIF*; `PIL` opens it, so convert
before viewing). `threadline-free-template.jpg`, `threadline-featured.jpg` and `threadline.jpg` do **not** exist
(all 404). The shot is a **browser-framed hero only** — it stops at the 1024 × 512 photo, so the eight bands below
the fold come from the live preview alone.

## Reference readings (2026-10-25, `curl -4` + Playwright/Chromium)

| what                      | value                                                                                                        |
| ------------------------- | ------------------------------------------------------------------------------------------------------------ |
| preview HTML              | **200**, **77,618 B**, `text/html` — an **Astro** build (`_astro/Base.*.css`), not the old `css/main.css` kit |
| stylesheet                | `https://preview.colorlib.com/theme/threadline/_astro/Base.D_epE37E.css` — **200, 65,700 B**, sha256 `ea127342f39e…` |
| stylesheet read-back      | `--spacing: .25rem`, `--radius-lg .5rem`, `--radius-xl .75rem`, `--radius-2xl 1rem`; `--font-mono` = system stack |
| scripts                   | `Base.astro_astro_type_script_index_0_lang.BLoalVWc.js` **200, 16,233 B** (all behaviour) + `ClientRouter…CYDbzu1r.js` **200, 16,357 B** |
| product page              | `https://colorlib.com/wp/template/threadline/` — **200, 111,910 B**, `<h1>Threadline</h1>`, title *"Threadline - Forum Website Template 2026 - Colorlib"* |
| product shot              | `…/sites/2/threadline-template.jpg` — **200, 67,182 B**, **2,400 × 1,892**, AVIF-in-`.jpg`                     |
| preview screenshot (mine) | `/tmp/threadline/full-revealed.png` — 1440 × **8,060** full page; `/tmp/threadline/live-dark.png` (dark mode)   |
| document height           | **8,060** px at 1440 · **8,419** at 768 · **10,822** at 390                                                   |
| `scrollWidth`             | **1,440 / 768 / 390** — equals the viewport at every step, `scrollX` stays 0 after `scrollTo(200,0)` (no overflow anywhere) |
| inner pages               | `/about/` 31,080 B · `/blog/` 36,601 · `/contact/` 29,746 · `/elements/` 50,415 · `/pricing/` 40,820 · `/privacy/` 31,876 · `/terms/` 30,630 — all **200**; **trailing slash only** (`/about` → **308**); `/index.html` is byte-identical to `/` (77,618) |
| fonts                     | **Space Grotesk** only (`400 / 500 / 600 / 700`), plus the **system monospace stack** — no third face         |
| reveal animations         | **27** `[data-animate]` elements; **22** of them start at `opacity: 0` — a full-page screenshot without a scroll pass shows blank bands |
| anchors                   | **57** total — `#tags` ×10, `#questions` ×8, `/contact` ×7, `#spaces` ×4 (**dead on all 8 pages**), `/about` ×3, `/pricing` ×3, `/blog` ×3, `#` ×3 (**dead**), `#leaderboard` ×2, `#how-it-works` ×2, `#contact` ×2, `/terms` ×2, `/` ×2, `#main-content` ×1, `/privacy` ×1, `/elements` ×1, `tel:` ×2, `mailto:` ×1 |
| interactive state         | **1** `aria-expanded` (the mobile menu button), **1** `<form>` (the footer newsletter, no handler), **0** `<details>`, **1** `<table>`, **4** `<img>`, **37** inline `<svg>` |

Every number below is measured, not inferred: `getComputedStyle` at 1440/768/390 for type, colour, radius, padding
and shadow; `getBoundingClientRect` for band heights; the compiled sheet for the colour ramps, because Tailwind 4
inlines theme colours as literals and ships **no `--color-primary-*` custom properties**.

## Design tokens

### Colour

The theme is **Tailwind `teal` renamed `primary`**, **Tailwind `amber` renamed `accent`**, and stock Tailwind `gray`
for everything neutral. Read back out of the compiled sheet:

| token              | value     | where the reference uses it                                                     |
| ------------------ | --------- | ------------------------------------------------------------------------------- |
| `primary-50`       | `#f0fdfa` | hero wash top (`from-primary-50 to-white`), every eyebrow chip fill             |
| `primary-100`      | `#ccfbf1` | quote-section pill, testimonial avatar fill, hero blob at 40 %                  |
| `primary-200`      | `#99f6e4` | hero status pill border, gradient rule start, hero blob at 50 %                 |
| `primary-400`      | `#2dd4bf` | typewriter gradient end, star rating fill, step border, ping dot                |
| `primary-500`      | `#14b8a6` | ping core, step square border (`border-primary-500`), focus ring                |
| `primary-600`      | `#0d9488` | **brand fill** — every primary button, answered chip, closing-band gradient start, progress bar |
| `primary-700`      | `#0f766e` | eyebrow text, tag-chip text, rank figures, hover fill                           |
| `primary-800`      | `#115e59` | closing-band gradient end                                                       |
| `accent-100`       | `#fef3c7` | *Tags* / *How it works* eyebrow chip fill                                       |
| `accent-300`       | `#fcd34d` | gradient timeline rule end, bounty chip in dark mode                            |
| `accent-400`       | `#fbbf24` | **rank-1 disc**, bounty text                                                    |
| `accent-800`       | `#92400e` | *Tags* / *How it works* eyebrow text                                            |
| `gray-50`          | `#f9fafb` | counter strip, tags band, how-it-works band, testimonials band                  |
| `gray-100`         | `#f3f4f6` | question tag chips, FAQ `+` disc, rank 4–5 disc, mobile *Call Now* fill          |
| `gray-200`       | `#e5e7eb` | header rule, card borders, every hairline, hero-photo ring                      |
| `gray-300`         | `#d1d5db` | secondary-button border, rank-2 silver disc, carousel dots (inactive)           |
| `gray-400`         | `#9ca3af` | footer blurb, footer column links                                               |
| `gray-500`         | `#6b7280` | vote/view labels, table headings, footnote lines, copyright                     |
| `gray-600`         | `#4b5563` | body copy, nav labels, ledes, question body                                     |
| `gray-700`         | `#374151` | secondary-button label, question tag text, newsletter input rule                |
| `gray-800`         | `#1f2937` | footer social tiles, dark-mode cards                                            |
| `gray-900`         | `#111827` | headings, **footer band**, dark-mode surfaces                                   |
| `gray-950`         | `#030712` | dark-mode page background (`html.dark`)                                         |

Semantic extras: `amber-700 #b45309` + `amber-50` on the **rank-3** disc (`bg-amber-700 text-amber-50`, stated
directly in Tailwind amber, not `accent`); `#0d9488` at 25 %/30 % for button shadows; `white/10` for the closing
band's blurred discs.

**Missing token, by omission:** the rank-1 disc carries `text-accent-950`, but **no `accent-950` exists** in the
compiled sheet — the badge computed to `rgb(17, 24, 39)` (inherited `gray-900`) on `rgb(251, 191, 36)`. Ship
`accent-950: #451a03` and use it (see defect 8).

### Type (Space Grotesk + system mono)

| role                | size / line-height                          | weight | tracking  | colour                        |
| ------------------- | ------------------------------------------- | ------ | --------- | ----------------------------- |
| `h1`                | 60 / 60 (`sm:` 48, base 36 / 40)            | 700    | −1.5 px   | `#111827`                     |
| hero lede           | 20 / 28 (`sm:text-xl`)                      | 400    | —         | `#4b5563`                     |
| hero fact figure    | 36 / 40 (`lg:text-4xl`)                     | 700    | —         | `#111827`                     |
| hero fact label     | 14 / 20                                     | 400    | —         | `#4b5563`                     |
| counter figure      | 48 / 48 (`text-4xl lg:text-5xl`)            | 700    | —         | `#0d9488`                     |
| counter label       | 14 / 20                                     | 500    | —         | `#4b5563`                     |
| `h2`                | 36 / 40 (base 30 / 36)                      | 700    | −0.9 px   | `#111827`                     |
| closing `h2`        | 48 / 48 (`lg:text-5xl`)                     | 700    | −1.2 px   | `#ffffff`                     |
| section lede        | 16 / 24                                     | 400    | —         | `#4b5563`                     |
| eyebrow chip        | 12, mono, uppercase                         | 600    | 0.6 px    | `#0f766e` on `#f0fdfa`; `#92400e` on `#fef3c7` |
| nav label           | 14 / 20                                     | 500    | —         | `#4b5563` → `#111827` hover / active 600 |
| question `h3`       | 16 / 22                                     | 600    | —         | `#111827`                     |
| question body       | 14 / 20, clamped to 2 lines                 | 400    | —         | `#4b5563`                     |
| question tag chip   | 12, mono                                    | 400    | —         | `#374151` on `#f3f4f6`, 4 px  |
| question stat       | 14, mono, `tabular-nums`                    | 600    | —         | `#111827` / white on `#0d9488` |
| tag card title      | 14, mono                                    | 600    | —         | `#0f766e` on `#f0fdfa`, 4 px  |
| tag card figure row | 12, mono, `tabular-nums`                    | 400    | —         | `#6b7280`, delta in `#0d9488`  |
| step `h3`           | 18 / 28                                     | 600    | —         | `#111827`                     |
| step number         | 14, mono                                    | 700    | —         | `#0f766e` in a 48 px square   |
| step footnote       | 12, mono                                    | 400    | —         | `#6b7280` on white, 4 px      |
| table heading       | 12, mono, uppercase                         | 500    | 0.6 px    | `#6b7280`                     |
| table figure        | 14, mono, `tabular-nums`                    | 400/600 | —        | `#111827`; reputation `#0f766e` |
| quote               | 18 / 28                                     | 500    | —         | `#111827`                     |
| FAQ question        | 18 / 28                                     | 600    | —         | `#111827`                     |
| FAQ answer          | 16 / 24                                     | 400    | —         | `#4b5563`                     |
| footer column head  | 14 / 20, uppercase                          | 600    | 0.7 px    | `#ffffff`                     |
| button label        | 16 / 24 (`btn-primary` 14 / 20)             | 500    | —         | white / `#374151` / `#0f766e`  |

### Shape, shadow, layout

- **Buttons:** 8 px radius. Hero/closing CTAs are `16px 24px` (`px-6 py-3`) at 16 px / 500; the closing band's are
  `16px 32px` (`px-8 py-4`). `.btn-primary` (section headers) is smaller: `20px 10px` at **14 px**, `#0d9488`, with
  `shadow-lg shadow-primary-600/25`, hover `#0f766e` + `shadow-xl`. Secondary = white, 1 px `#d1d5db`, `#374151`,
  `bg-gray-50` on hover. Closing band: white fill with `#0f766e` label, and a `2px border-white/30` outline button
  that fills `white/10` on hover.
- **Cards:** question rows `12px`, 1 px `#e5e7eb`, 20 px padding, hover border `primary-300`; tag cards `12px`,
  1 px border, 20 px padding, hover border `primary-400` + `shadow-sm`; quote cards `16px`, 32 px padding,
  `shadow-soft` (`0 4px 16px -4px rgb(0 0 0/.1)`); testimonial avatars and rank discs are full circles (48 px and
  28 px), member initials are 36 px `rounded-lg` squares on a `primary-500 → primary-700` gradient.
- **Hero photo:** 16 px radius, 1 px ring `#e5e7eb`, `shadow-2xl` (`0 25px 50px -12px rgb(0 0 0/.25)`), 1024 × 512
  (2:1), `max-w-5xl`.
- **Steps:** 48 px squares, 12 px radius, **2 px** `primary-500` border, white fill, mono 14 / 700; a 1 px
  `linear-gradient(primary-200 → primary-400 → accent-300)` rule runs behind them at `top: 24px` (`md+` only).
- **Widths:** hero `max-w-4xl` copy / `max-w-5xl` photo; questions + how-it-works `max-w-6xl`; tags `max-w-7xl`;
  leaderboard `max-w-4xl`; testimonials / FAQ / closing `max-w-3xl`; footer 12-column grid (brand 4 + links 5 +
  newsletter 3). Gutters `16px` below `lg`, `32px` at `lg`.
- **Rhythm:** hero `py-20 lg:py-32` (128 px); counter strip `py-16 lg:py-20` with `border-y`; every band after it
  `py-20 sm:py-28` (**112 px**); footer `pt-16 lg:pt-24`. Measured band heights at 1440: header **81** ·
  hero **1,409** · counters **238** · questions **1,270** · tags **873** · how-it-works **664** ·
  leaderboard **870** · testimonials **768** · FAQ **820** · closing **500** · footer **568**.

## Chrome (shared family behaviour, all present in this build)

Skip link to `#main-content`; **2 px** teal scroll-progress bar (`#scroll-progress`, width = scroll %) fixed at
`z-[60]`; sticky header that gains `shadow-lg` past 50 px; dark-mode toggle writing `localStorage.theme` and toggling
`html.dark` (no flash on reload — the class is re-applied before first paint); mobile nav panel; sticky mobile CTA
bar (69 px, `lg:hidden`); cookie dialog (`role="dialog"`, slides up after **1.5 s**, `localStorage["cookie-consent"]`
= `accepted` / `essential`, then removed); back-to-top disc (48 px, `opacity 0 → 1` + `translateY(16px) → 0`, not
`display`). Reveal engine: any element whose top is below 80 % of the viewport starts at `opacity: 0;
translateY(20px)` and is un-observed on first intersection (threshold 0.1, rootMargin `0 0 -10% 0`), with a
`prefers-reduced-motion: reduce` early-return that disables the whole thing. `data-parallax` offsets (0.15 / −0.1)
drift the two hero blobs; `animate-hero-float` / `-reverse` are 8 s / 10 s mirrored keyframes.

## Content inventory (source copy; keep the numbers, rename the brand)

**Header** — wordmark *Threadline* (three-bar glyph); nav *Questions · Tags · Leaderboard · How it works · About ·
Plans · Blog · Contact*; moon toggle; teal *Ask a Question*.

**Hero** — status pill (ping dot) *61,400 questions answered and still findable*; `h1` *"Someone has already"* +
rotating *solved this / hit this exact error / written it up properly*; lede *Threadline is a question and answer
forum built around the archive. Ask once, get a checked answer, and leave something behind that still works for the
next person in three years.*; buttons *Ask a Question*, *Browse questions*, play chip *Watch Demo*; facts `61.4k`
Questions · `94%` With an answer · `2.1k` Tags · `18 min` Median first answer; photo alt *"A Threadline question
thread with an accepted answer"*.

**Counter strip** — `61,400` Questions asked · `94%` Answered · `18 min` Median first answer · `71%` Answers marked
accepted (all four animate from `0`).

**Questions** — chip *Newest*; `h2` *Open questions right now*; lede *Sorted by need rather than by recency —
unanswered and bountied questions surface first.*; button *Ask a Question*. Five rows:
1. **46** votes · **3** answers · 4.1k views · Accepted — *Why does my migration lock the table only in production?*
   — *Same schema, same version, same row count in staging. In production the migration takes a full table lock for
   about forty seconds and I cannot reproduce it anywhere else.* — `databases` `migrations` `postgres` — asked 2 hours ago
2. **88** · **7** · 12.4k · **+150 bounty** · Accepted — *Correct way to version an API when only one field changes
   type* — *A whole new version feels heavy for a single field going from string to integer, but I have consumers I
   cannot contact. What is the least disruptive route?* — `api-design` `versioning` — asked 6 hours ago
3. **31** · **0** · 890 views — *Is there a reason to keep using a queue when the job takes 40ms?* — *We inherited a
   service where every job goes through a broker. Most now finish in well under a tenth of a second and the broker is
   the slowest part of the path.* — `architecture` `queues` `performance` — asked Yesterday
4. **124** · **11** · 31.7k · Accepted — *How do you test a function whose only job is to call three others?* —
   *Mocking all three feels like testing the mocks. Not testing it at all feels wrong. Where do people actually draw
   this line in practice?* — `testing` `mocking` — asked 2 days ago
5. **57** · **2** · 3.3k · **+75 bounty** — *Rate limiting per user or per key when a user can hold many keys?* —
   *Per key is easy and gameable. Per user is fair and hard to implement across regions without a shared counter.
   Has anyone landed somewhere sensible?* — `rate-limiting` `distributed-systems` — asked 3 days ago

**Tags** — chip *Tags*; `h2` *Every question lives under a tag someone maintains*; lede *Tags are curated, not
crowdsourced into chaos. Each has a maintainer, a written scope and a synonym list.* Eight cards:
`postgres` 4,210 questions +38 · `api-design` 3,180 +24 · `testing` 2,940 +19 · `architecture` 5,620 +51 ·
`performance` 2,110 +16 · `distributed-systems` 1,780 +12 · `rate-limiting` 640 +7 · `migrations` 1,290 +11.
Blurbs: *Query planning, migrations, locking and everything that only breaks at scale.* / *Versioning, pagination,
error shapes and the contracts you cannot take back.* / *Where the line sits between useful coverage and testing your
own mocks.* / *Boundaries, queues, monoliths and the cost of undoing a decision later.* / *Profiling before optimising,
and the measurements that actually justify a rewrite.* / *Consistency, clocks, retries and the failure modes that only
appear on a bad day.* / *Fairness, burst handling and counting accurately across more than one region.* /
*Zero-downtime schema changes and the rollbacks you hope never to run.*

**How it works** — chip *How it works*; `h2` *Ask, answer, accept, repeat*; lede *Four steps, and the third is the one
most forums skip.* (a) *Ask something answerable* — *The editor nudges you for what you tried and what constraint
rules out the obvious fix. Questions with both get answered roughly three times faster.* — `median 18 min to first
answer`; (b) *Get answers, not opinions* — *Answers are votable and every claim can be challenged in comments. Wrong
answers get corrected in public rather than quietly deleted.* — `94% of questions get one`; (c) *Accept the one that
worked* — *Only the person who asked can accept. It credits the answerer, closes the loop, and marks the thread as
safe for the next reader.* — `71% acceptance rate`; (d) *The archive does the rest* — *Accepted answers are indexed,
linked from their tags and surfaced when a similar question is typed. Most value here is delivered to people who
never post.* — `68% of traffic is search`.

**Leaderboard** — chip *This quarter*; `h2` *The people whose answers keep getting accepted*; lede *Reputation here
comes from answers marked correct by the person who asked, not from post volume.* Columns `# · Member · Known for ·
Accepted · Reputation`; rows `IK Ines Kowalski, 96 days active, Postgres, migrations, 412, 48.2k` · `RD Rafael
Duarte, 41 days active, Distributed systems, 355, 39.7k` · `MT Mei Tanaka, API design, versioning, 288,
31.4k` · `OB Oliver Bennett, Testing strategy, 231, 24.9k` · `SM Sofia Marchetti, Performance profiling, 187, 19.6k`.
Footnote *Reputation resets its quarterly ranking but never its total. Accepted counts exclude self-answers.*

**Testimonials** — pill *Why people ask here*; `h2` *A forum that ages well*; lede *The test of a Q&A site is whether
a three-year-old thread is still worth reading.* Three 5-star quotes: *"I found an accepted answer from 2029 that
solved a lock contention issue exactly. The follow-up comments even flagged what changed in a later version."* —
Rafael Duarte, Platform engineer; *"The editor pushing me to say what I had already tried is mildly annoying and has
halved the time it takes to get a useful reply."* — Mei Tanaka, API lead; *"Wrong answers get corrected instead of
deleted, which means you can see the reasoning. That is worth more than a tidy thread."* — Oliver Bennett, Staff
engineer.

**FAQ** — pill *Questions about questions*; `h2` *Before you post*; lede *The moderation and reputation rules people
ask about most.* Five items: *Why was my question closed?* — *Almost always because it asks several things at once or
has no answerable form. Closed questions are editable and reopen automatically once a moderator or three
high-reputation members agree the edit fixed it.*; *How does reputation actually work?* — *You gain reputation when an
answer is upvoted and considerably more when it is accepted by the asker. You cannot gain reputation from
self-accepted answers, and reputation is never purchasable.*; *What is a bounty for?* — *Bounties move reputation from
your account to whoever answers a question that has gone quiet. They are the main tool for unsticking hard questions
and they cannot be refunded once placed.*; *Can I delete a question after it is answered?* — *Not once it has an
accepted answer. The archive is the point of the site, and deleting a solved thread takes value from everyone who
would have found it later.*; *Do you allow AI-generated answers?* — *Only if you disclose it and have verified the
answer yourself. Unverified generated answers are removed on sight, because an answer nobody checked is worse than no
answer.*

**Closing band** — `h2` *Ask the question you have been avoiding*; *Free to read and free to ask. Plans exist for
teams that want a private space with the same mechanics.*; white *Ask a Question* + outlined *See team plans*.

**Footer** — blurb *A question and answer forum where good answers stay findable — tags, reputation and accepted
answers, without the noise.*; socials Twitter / Instagram / LinkedIn; *88 Kingsway, Manchester, M1 4BT*;
*(555) 703-4412*; *team@threadline.dev*; columns **Spaces** (Hot Desk · Dedicated Desk · Private Office · Meeting
Rooms), **Company** (About · Blog), **Support** (Contact · Terms); **Stay Updated** — *One digest a week: the best
answers, new tags worth following and the questions still open.* + email field + *Subscribe*; bottom *© 2026
Threadline. All rights reserved.* + *Privacy Policy · Terms of Service · Style Guide*.

## Requirements

### Requirement: Document shell and chrome

The application SHALL render a branded shell around every band: a skip link to the main content as the first
focusable element, a 2 px teal scroll-progress bar, a back-to-top control that fades rather than toggles `display`,
and a reveal engine that is a hard no-op when the visitor asks for reduced motion.

#### Scenario: The page loads with a branded shell

- **GIVEN** the app is served at the site root
- **THEN** the document title contains "Answerbook"
- **AND** the first focusable element is a skip link to `#main-content`
- **AND** a 2 px teal progress bar tracks scroll position and reads 0 % at the top of the page

#### Scenario: Back to top

- **GIVEN** the visitor has scrolled past the hero
- **THEN** a 48 px round "Back to top" button is visible bottom-right, animated with `opacity` and `translateY`
- **WHEN** the visitor activates it
- **THEN** the window returns to the top and the button fades out again

#### Scenario: Reveal engine respects reduced motion

- **GIVEN** the browser reports `prefers-reduced-motion: reduce`
- **THEN** every section renders at full opacity with no transform
- **AND** no reveal observer or timer is created

### Requirement: Sticky header with section tracking

The header SHALL be sticky, translucent and 80 px tall at desktop, carrying the wordmark, in-page anchors, a dark-mode
toggle and the primary call to action, and it SHALL mark exactly one active section as the visitor scrolls.

#### Scenario: Sticky translucent header

- **GIVEN** the viewport is 1440 px wide
- **THEN** the header is 80 px tall plus a 1 px `#e5e7eb` rule, sticky at the top, white at 80 % with a backdrop blur
- **AND** it shows the Answerbook wordmark, five in-page anchors and a teal "Ask a Question" button
- **AND** it gains a shadow only once the page has scrolled past 50 px

#### Scenario: Active section is marked

- **GIVEN** the visitor scrolls to the thread list
- **THEN** the "Questions" link is the only nav link rendered at 600 weight in `#111827`
- **AND** the other links stay at 14 px / 500 in `#4b5563`

#### Scenario: Header anchors reach their sections

- **WHEN** the visitor activates the "Tags" link
- **THEN** the page scrolls to the tag grid, offset by the header height plus 20 px
- **AND** every in-page anchor resolves to an element id that exists in the document

#### Scenario: Mobile navigation

- **GIVEN** the viewport is 390 px wide
- **THEN** the anchor row is hidden and a menu button with `aria-expanded="false"` is shown
- **WHEN** the visitor toggles the menu
- **THEN** a full-width panel below the bar lists the same anchors
- **AND** the icon becomes a close cross and `aria-expanded` becomes `"true"`

#### Scenario: Dark-mode toggle

- **WHEN** the visitor activates the moon button
- **THEN** the `html` element gains the `dark` class and the page switches to the dark palette
- **AND** the choice is stored under the `localStorage` key `theme` and survives a reload without a flash
- **AND** the control carries a screen-reader label describing the action

### Requirement: Hero with rotating gradient headline

The hero SHALL present a status pill, a two-line `h1` whose second line rotates through three phrases in a teal
gradient, a lede, three controls, a four-figure fact row and a 2:1 product image, and it SHALL fall back to a static
phrase when motion is reduced.

#### Scenario: Rotating headline

- **GIVEN** the page has loaded
- **THEN** the `h1` reads "Someone has already" followed by one of "solved this", "hit this exact error" or
  "written it up properly"
- **AND** the rotating phrase is rendered as gradient text from `#0d9488` to `#2dd4bf`
- **AND** the phrase advances at least once every 6 seconds and never renders empty

#### Scenario: Reduced motion or missing timers

- **GIVEN** the browser reports `prefers-reduced-motion: reduce`, or interval timers are unavailable
- **THEN** the `h1` renders "solved this" statically with no fade

#### Scenario: Hero content

- **THEN** the status pill shows a pulsing dot and the text "questions answered and still findable"
- **AND** the lede is capped at 26 rem and reads as one paragraph
- **AND** the controls are a filled "Ask a Question", an outlined "Browse questions" and a ghost "Watch Demo"
- **AND** the fact row shows four figures separated by a hairline: questions, answered share, tag count, median time
- **AND** the product image is a 2:1 card with a 16 px radius, a 1 px ring and a large soft shadow

#### Scenario: Demo dialog

- **WHEN** the visitor activates "Watch Demo"
- **THEN** a dialog opens containing a local 16:9 placeholder panel and a labelled close control
- **AND** pressing Escape closes it and focus returns to the trigger

### Requirement: Animated counter strip

The counter strip SHALL animate four figures from zero to their final values once, and SHALL print the final display
string — including units — only when the count completes.

#### Scenario: Four figures animate once

- **GIVEN** the strip scrolls into view
- **THEN** the four figures count up to 61,400 / 94% / 18 min / 71% in about two seconds
- **AND** the completed strings are exactly "61,400", "94%", "18 min" and "71%"
- **AND** "18 min" never renders a bare "7" mid-count, because the unit arrives with the final frame

#### Scenario: No observer available

- **GIVEN** `IntersectionObserver` or `requestAnimationFrame` is unavailable
- **THEN** the four final values render immediately

### Requirement: Thread list with a stat rail

The questions band SHALL render five thread rows, each with a left stat rail (votes, answers, views), optional bounty
and accepted marks, a title, a two-line body, tag chips and a relative timestamp, and each row SHALL be a single
clickable link that does not swallow its tags.

#### Scenario: Five threads with a stat rail

- **THEN** five rows render in source order with the figures 46/3/4.1k, 88/7/12.4k, 31/0/890, 124/11/31.7k and
  57/2/3.3k
- **AND** the answer count is a filled `#0d9488` chip whenever it is non-zero, and a plain chip on the row with zero
- **AND** the bounty chips read "+150" and "+75"
- **AND** each row shows its tag chips in monospace and its timestamp right-aligned in grey

#### Scenario: Rows are links

- **WHEN** the visitor activates a row title
- **THEN** the destination resolves in-page and the row shows a visible focus ring
- **AND** the whole card is covered by a stretched link pseudo-element rather than an overlay element

### Requirement: Curated tag grid

The tag grid SHALL present eight tags in a responsive one/two/four column layout, each with a monospace tag chip, a
one-sentence scope and a hairline figure row.

#### Scenario: Eight tag cards

- **THEN** eight cards render in 1 column at 390 px, 2 at 768 px and 4 at 1440 px
- **AND** each card ends in a hairline row reading "N questions" in grey and "+N today" in teal
- **AND** both figures are monospace with tabular numerals

#### Scenario: Tag counts are the source numbers

- **THEN** the seven-day totals are 4210, 3180, 2940, 5620, 2110, 1780, 640 and 1290
- **AND** the deltas are 38, 24, 19, 51, 16, 12, 7 and 11

### Requirement: Four-step process timeline

The process band SHALL render four numbered steps connected by a gradient rule at tablet widths and wider, each step
carrying a monospace footnote.

#### Scenario: Four-step timeline

- **THEN** four steps render, each with a 48 px bordered number square labelled "01" to "04", a title and a body
- **AND** from 768 px upward a 1 px gradient rule runs behind the squares at `top: 24px`
- **AND** each number square sits above the rule
- **AND** below 768 px the steps stack with no connector

#### Scenario: Footnotes

- **THEN** the four footnotes read "median 18 min to first answer", "94% of questions get one",
  "71% acceptance rate" and "68% of traffic is search"
- **AND** each is rendered in monospace inside a small white chip

### Requirement: Leaderboard table

The leaderboard SHALL be a real table with five ranked members, rank discs, monospace right-aligned figures and an
optional activity line, and it SHALL collapse a column rather than overflow the page at narrow widths.

#### Scenario: Five ranked rows

- **THEN** a `table` renders with the columns "#", "Member", "Known for", "Accepted" and "Reputation"
- **AND** rank discs are amber for first, silver for second, bronze for third and grey for fourth and fifth
- **AND** figures are monospace with tabular numerals and right-aligned
- **AND** only the reputation column is teal

#### Scenario: Narrow viewport

- **GIVEN** the viewport is 390 px wide
- **THEN** the "Known for" column is hidden while the other four remain
- **AND** any remaining overflow is contained by the table's own scroll container, never by the page

### Requirement: Testimonial carousel

The testimonial band SHALL show three quotes with working controls at every width where fewer than three fit, and
SHALL NOT present controls that cannot move the track.

#### Scenario: Three quotes

- **THEN** three cards render, each with five stars, a quote, an initial avatar and a name plus role line
- **AND** at 1440 px all three are visible and no dead arrows or empty dot row are rendered
- **AND** at 768 px two are visible and at 390 px one, with previous/next buttons and dot indicators that work

#### Scenario: Autoplay

- **THEN** the carousel advances every five seconds and pauses while the pointer is over it
- **AND** it does not advance when `prefers-reduced-motion: reduce` is set

### Requirement: Exclusive FAQ accordion

The FAQ SHALL render five exclusive disclosures that report their state to assistive technology.

#### Scenario: Five exclusive items

- **THEN** five questions render as buttons with `aria-expanded="false"` and `aria-controls` pointing at their panels
- **WHEN** the visitor opens the third question
- **THEN** only that answer is visible and its button reports `aria-expanded="true"`
- **AND** the plus icon rotates 45 degrees and the panel animates to its measured height

#### Scenario: Opening a second item

- **GIVEN** one answer is open
- **WHEN** the visitor opens another question
- **THEN** the first answer closes and its `aria-expanded` returns to `"false"`

### Requirement: Gradient closing band

The closing band SHALL use a teal gradient with a dot grid and two blurred discs, and SHALL offer two keyboard
reachable calls to action.

#### Scenario: Gradient call to action

- **THEN** the band uses a gradient from `#0d9488` to `#115e59` with a 40 px dot grid at 10 % opacity
- **AND** two blurred white discs sit at the top-right and bottom-left corners
- **AND** it shows a white heading, one paragraph, a white filled button and an outlined button
- **AND** both buttons are reachable by keyboard with visible focus rings

### Requirement: Footer with a working newsletter

The footer SHALL be a `#111827` band with brand copy, three link columns and a newsletter form that validates input.

#### Scenario: Footer content

- **THEN** the footer background is `#111827` with `#9ca3af` copy
- **AND** it shows a brand blurb, three social links, a postal address, one valid `tel:` link and one `mailto:` link
- **AND** it shows three link columns plus a newsletter column

#### Scenario: Newsletter validation

- **WHEN** the visitor submits an empty or malformed address
- **THEN** an inline error appears and no success message is shown
- **WHEN** the visitor submits a valid address
- **THEN** the form shows a confirmation and clears the input

#### Scenario: Component Dock attribution

- **THEN** the footer contains a link to `https://www.componentdock.com/` labelled "Component Dock"

### Requirement: No provenance leakage

The shipped application SHALL NOT name the source design or reference ColorLib in any file.

#### Scenario: The shipped app is brand-clean

- **THEN** no file under `apps/answerbook` contains "colorlib", "Threadline" or the preview URL
- **AND** the wordmark, document title, meta description, copyright line and email domain are all "Answerbook"
- **AND** every image is a picsum placeholder seeded `answerbook-<n>` or a local asset

### Requirement: Responsive and accessible

The page SHALL fit the viewport at every tested width and SHALL expose correct semantics for every interactive
element.

#### Scenario: No horizontal overflow

- **GIVEN** viewport widths 1440, 1024, 768 and 390
- **THEN** document `scrollWidth` equals the viewport width at every step
- **AND** `scrollTo(200, 0)` leaves `scrollX` at 0

#### Scenario: Heading order

- **THEN** the document has exactly one `h1`, one `h2` per band and `h3` elements only inside cards and steps

#### Scenario: Interactive affordances

- **THEN** every icon-only control carries an `aria-label`
- **AND** every disclosure reports `aria-expanded`
- **AND** every button, link and input has a visible focus ring
- **AND** eyebrow, tag-chip, rank and table colours keep at least 4.5:1 against their backgrounds

## Known defects in the reference (do not reproduce)

1. **The footer's first column belongs to another template.** It reads **"Spaces"** with *Hot Desk · Dedicated Desk ·
   Private Office · Meeting Rooms* — a coworking menu — and all four link to `#spaces`, an id that exists on **none**
   of the eight pages (probed 2026-10-25). Ship a **Community** column (*Ask a question · Tags · Leaderboard ·
   Guidelines*) pointing at real anchors.
2. **"Book a Tour" again.** The sticky mobile bar's right-hand button is a coworking leftover; ship **"Ask a
   question"** → `#contact`, and keep *Call Now* only if a real number exists.
3. **Two different, partly malformed phone numbers.** The footer's `tel:` is `tel:(555) 703-4412` (spaces and
   parentheses are invalid in a URI) while the mobile bar dials `tel:5556789012`. Ship one E.164-style number,
   consistent in both places.
4. **Three social links are dead `href="#"`.** Ship real destinations or drop them.
5. **The newsletter form does nothing.** No `action`, no handler anywhere in the 16 kB behaviour bundle (the string
   `newsletter` never appears) and the email input has **no `name`**, so submitting reloads the page and discards the
   address. Implement R12's validation, or remove the field.
6. **The FAQ accordion has no accessibility state.** Five buttons, **zero** `aria-expanded` / `aria-controls`, and no
   `aria-hidden` on the collapsed panels — the answer is only visually hidden by `max-height: 0; opacity: 0`. It does
   open correctly (max-height → measured `scrollHeight`, icon `rotate(45deg)`, exclusivity enforced), so the repair is
   attributes plus focus order, not behaviour.
7. **The carousel cannot move at desktop.** The script reads `slidesPerView = 3` at ≥1024 px and the section has
   exactly **three** slides, so `maxIndex = 0`: the arrows are force-hidden with an inline `display: none` and the dot
   row is built with `l()+1 = 1` dots — i.e. **none**. At 768 px (2 per view, 2 dots) and 390 px (1 per view,
   3 dots) it works. Ship real controls at every width, or drop the carousel at `lg` and show three static cards.
8. **`text-accent-950` is a colour that does not exist.** The rank-1 disc's class list names it; the compiled sheet
   has no such utility, so the digit computed to the inherited `#111827` on `#fbbf24`. Either ship `accent-950`
   (`#451a03`) in `@theme` or use `text-gray-900` deliberately.
9. **Two identical `#f9fafb` bands touch with no separator.** *Tags* (873 px) and *How it works* (664 px) both open
   with `sm:py-28` and no rule, so they read as one 1,537 px block despite being different arguments. Put a hairline
   between them (or alternate the backgrounds) and note the change.
10. **"Watch Demo" is a rick-roll.** `data-video-modal` opens `https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1`
    inside a `fixed inset-0 z-[100] bg-black/80` overlay with no dialog role. Use a local 16:9 placeholder.
11. **Most links leave a one-pager.** Of the 57 anchors, 7 go to `/contact`, 3 to `/about`, 3 to `/pricing`, 3 to
    `/blog`, 2 to `/terms`, 1 each to `/privacy` and `/elements`; the question titles and all tag cards link back to
    their own section (`#questions` ×8, `#tags` ×10). For a single-page recreation, every CTA must resolve in-page
    and inner-page destinations must be dropped or replaced by section anchors.

## Verification checklist

- [ ] `openspec/specs/template-answerbook/spec.md` is the only spec for this app; `npm run spec:validate` passes
- [ ] `apps/answerbook` exists, package renamed `@free-react-templates/answerbook`, `public/CNAME` =
      `answerbook.free.componentdock.com`, `homepage` = `https://answerbook.free.componentdock.com`
- [ ] `npm install` at the repo root; `grep -c "free-react-templates/answerbook" package-lock.json` ≥ 1
- [ ] Space Grotesk loaded via one Google Fonts `<link>` (400/500/600/700); monospace from the system stack
- [ ] `src/index.css` `@theme` carries the `primary` (50–800) and `accent` (100/300/400/800/950) ramps plus
      `--shadow-soft: 0 4px 16px -4px rgb(0 0 0 / .1)` and the 8 / 12 / 16 px radii
- [ ] Nine bands in source order: hero · counters · questions · tags · how-it-works · leaderboard · testimonials ·
      FAQ · closing band · footer
- [ ] Hero: gradient typewriter (3 phrases, reduced-motion safe), status pill with ping, 4 facts, 1024 × 512 placeholder
- [ ] Counters land on 61,400 / 94% / 18 min / 71% with a static fallback when IntersectionObserver is absent
- [ ] Five question rows with the exact figures (46/3/4.1k, 88/7/12.4k/+150, 31/0/890, 124/11/31.7k, 57/2/3.3k/+75)
- [ ] Eight tag cards with 4,210/3,180/2,940/5,620/2,110/1,780/640/1,290 and their deltas
- [ ] Four steps with the gradient connector at ≥768 px and the four mono footnotes
- [ ] Leaderboard renders as a `<table>` with five rows, rank discs amber/silver/bronze/grey, mono right-aligned figures
- [ ] Carousel: three quotes, working controls at 390 and 768, all three visible at 1440 with no dead arrows
- [ ] Accordion: five items, one open at a time, `aria-expanded` + `aria-controls` correct, plus icon rotates
- [ ] Closing band gradient + two buttons; footer with three columns, validated newsletter, Component Dock link
- [ ] Dark mode works on every band (toggle adds `.dark`, persists via `localStorage.theme`, no flash on reload)
- [ ] `scripts/verify-app.sh answerbook` green: typecheck, lint, 100 % coverage tests, build
- [ ] No `colorlib` / `Threadline` string under `apps/answerbook`; picsum seeds `answerbook-*`
- [ ] `TEMPLATES.md` row appended under `## Directory` between *Royalestate* and *Travelers* (count 33 → 34),
      only at claim time

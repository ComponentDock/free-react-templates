# Template: Sparkwell (Construction — electrical contractor whose product is a certificate)

## Purpose

A **trade site that sells a document**. The `h1` is a two-line promise whose second line *rewrites itself* every
few seconds — *"Electrical work that"* / **"passes inspection" → "comes with the paperwork" → "a surveyor will
accept"** — set in a **blue gradient** (`#2563eb → #60a5fa`). Under it: a pale pill of credentials (*NICEIC approved
· Part P · 24-hour emergency line*), a lede naming the services, **three controls** (filled blue *Book an EICR*,
outlined white *See certificate prices*, a round play chip *Watch Demo*) and a **four-figure fact row** separated by
a hairline (`24/7` · `90 min` · `6,100+` · `18`). A **1024 × 512 photograph** closes the hero in a 16 px card with
`shadow-2xl` and a 1 px grey ring.

The page then argues the same point three ways. A **hazard-striped yellow emergency band** (`#facc15`, 45° black/
yellow stripes across its top edge) with a phone number the size of a heading and three response-time promises.
A **grey counter strip** whose four figures animate from `0` on scroll. A **2 × 2 certificate grid** that prices
four documents (`£180` / *Included* / `£45` / `£3.50 per item`) and defines *who needs it* + *what it covers* in a
`dl`, under an amber left-rule note. Then the page's centre of gravity: a **near-black band** (`#030712`) listing
**eight warning signs** as rows tagged by urgency — red *Stop using it* / yellow *Book this week* / grey *Mention at
next visit*. Then four **compliance cards** whose only colour is a 36 px yellow square and a monospaced standard
code, **three testimonial cards** in a carousel (5 stars, initial-avatars), a **five-question accordion**, and a
**blue gradient closing band** (`primary-600 → primary-800`, dot grid, two blurred discs) with a white button.
The footer is `#111827` with **three link columns plus a newsletter column**.

The palette is **Tailwind blue on white with a yellow accent**, used literally: `primary` is blue (`#2563eb` fills,
`#eff6ff` wash, `#1d4ed8` emphasis, `#1e40af` gradient end), `accent` is yellow (`#facc15` band, `#fde047` on the
band, `#fefce8` note tint), text is Tailwind's `#111827` / `#4b5563` / `#6b7280`, rules are `#e5e7eb`, and the two
dark bands are `#030712` and `#111827`. **One typeface**: Inter, 400 / 500 / 600 / 700, plus the **monospace stack**
for certificate codes (`EICR`, `BS 7671`) and footer code footnotes. Shape is engineering-clean: **8 px** buttons,
**16 px** cards and hero photo, 4–6 px chips and code tags, full-round pills and avatars, three shadows (`soft`
`0 4px 16px -4px rgb(0 0 0/.1)` on quote cards, a blue-tinted `shadow-lg` on every filled button, `shadow-2xl` on
the hero photo), and a **80 → 128 px** hero rhythm with **112 px** section padding after it.

Recreation of the ColorLib **"Voltway"** design (https://colorlib.com/wp/template/voltway/, live preview
https://preview.colorlib.com/theme/voltway/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript application.
Invented name: **Sparkwell** → `apps/sparkwell`, `@free-react-templates/sparkwell`,
`https://sparkwell.free.componentdock.com`.

- **Source slug:** `voltway`
- **ColorLib category (breadcrumb):** *Construction Website Templates* → `https://colorlib.com/wp/cat/construction/`;
  the product page also tags it **Astro**, **Bootstrap Templates**, **Construction**, **Home Services**, **Industrial**,
  **Tailwind CSS**
- **New name rationale:** `sparkwell` is a single lowercase compound of *spark* (the trade's own word for an
  electrician) and *well* (a source) — it is the design's subject without being the source's name, and it reads as a
  firm name rather than a description. Zero repo hits: `ls apps/`, `openspec/specs/`, `docs/templates/` and a
  full-tree `git grep -il sparkwell` are all empty; `conduit` is taken (`apps/conduit`), and `voltway` itself is the
  source name so it is unusable. The reference calls itself *Voltway* / *voltway.co.uk* only.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-25)

Every row of `TEMPLATES.md` is `[x]` (2,883 rows; open `- [ ]` **0**, `[~]` **0**) and every row already owns a spec,
so the prep queue comes from `docs/catalog-coverage.md` — the **42 standalone designs** on ColorLib's own listing
that the checklist never recorded. This is row **`voltway`** of 42 (*preview 200, 71,946 B*) — the **last** of the
three remaining unprepped slugs (`trace-developer` → Devfolio, `upright` → Kilter at `cdabad507`, then `voltway`).
With it prepped, all 42 standalone designs are either shipped, name-taken, or prepped.

`voltway` has **no** `apps/`, `openspec/specs/` or `docs/templates/` entry on `origin/main` (verified with
`git ls-tree -r --name-only origin/main | grep -E 'voltway'` → no hit; `grep -rl 'wp/template/voltway/'
openspec/specs docs/templates` → empty).

The implementer appends this line when it claims the template — under **`## Construction`** (currently
`## Construction (29)`, bump to **30**), alphabetically **after *Vertex*** (`derrick`) and **before *Webuilder***
(`hammerly`), i.e. **line 1380 on `cdabad507`**. Re-read the section before pasting; a concurrent stream may have
inserted rows above it.

```markdown
- [x] **Voltway** — [colorlib](https://colorlib.com/wp/template/voltway/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/voltway-template.jpg) · [sparkwell](https://sparkwell.free.componentdock.com)
```

**Screenshot URL note:** the product shot is `…/sites/2/voltway-template.jpg` — **200, 295,228 B, 2,400 × 1,892**
(a `-1024x807` derivative and an `.avif` twin exist). Unlike some catalogue-gap designs, `voltway-free-template.jpg`
and `voltway-featured.jpg` do **not** exist. The shot is a **browser-framed hero only** — it stops at the 1024 × 512
photo, so every band below the fold comes from the live preview alone (see the readings table).

## Reference readings (2026-10-25, `curl -4` + Playwright/Chromium)

| what                      | value                                                                                                       |
| ------------------------- | ----------------------------------------------------------------------------------------------------------- |
| preview HTML              | **200**, **71,946 B**, `text/html` — an **Astro** build (`_astro/Base.*.css`), not the old `css/main.css` kit |
| stylesheet                | `https://preview.colorlib.com/theme/voltway/_astro/Base.kJsPHWid.css` — **200, 62,740 B**                     |
| scripts                   | `Base.…BLoalVWc.js` **200, 16,233 B** (all behaviour) + `ClientRouter.…CYDbzu1r.js` **200, 16,357 B**         |
| product page              | `https://colorlib.com/wp/template/voltway/` — **200, 111,429 B**, `<h1>Voltway</h1>`, title *"Voltway - Electrician Website Template 2026"* |
| product shot              | `…/sites/2/voltway-template.jpg` — **200, 295,228 B**, **2,400 × 1,892** JPEG                                 |
| preview screenshot (mine) | `/tmp/voltway-full.png` — 1440 × **8,090** full page; `/tmp/voltway-hero.png` (1440 × 1,000)                  |
| document height           | **8,090** px at 1440 · **8,733** at 768 · **11,523** at 390                                                   |
| `scrollWidth`             | **1,440 / 768 / 390** except **401 at 390** — an 11 px overflow from the testimonial track (defect 4)         |
| inner pages               | `/about/` 36,755 B · `/pricing/` 44,359 B · `/blog/` 42,471 B · `/contact/` 35,469 B · `/terms/` · `/privacy/` · `/elements/` — all **200** |
| fonts                     | **Inter** only, served from the preview host's `/cf-fonts/` — no second face anywhere                        |

Every number below is measured, not inferred: `getComputedStyle` at 1440/768/390 for type, colour, radius, padding
and shadow; `getBoundingClientRect` for band heights; the compiled sheet for the two colour ramps, because Tailwind 4
inlines theme colours as literals and ships **no `--color-primary-*` custom properties**.

## Design tokens

### Colour

| token                | value     | where the reference uses it                                                    |
| -------------------- | --------- | ------------------------------------------------------------------------------ |
| `primary-50`         | `#eff6ff` | hero wash top (`from-primary-50 to-white`), hero chip fill                      |
| `primary-100`        | `#dbeafe` | eyebrow chips, testimonial avatar fill                                         |
| `primary-200`        | `#bfdbfe` | hero chip border, drifting blob (`/50`)                                        |
| `primary-300`        | `#93c5fd` | chip text in dark mode                                                         |
| `primary-400`        | `#60a5fa` | typewriter gradient end, dark-mode counters/links, ping dot                     |
| `primary-500`        | `#3b82f6` | ping core dot                                                                  |
| `primary-600`        | `#2563eb` | **brand fill** — every primary button, progress bar, back-to-top, `from` of the closing band |
| `primary-700`        | `#1d4ed8` | chip text, certificate code tags, prices, closing-band button text, hover      |
| `primary-800`        | `#1e40af` | eyebrow text, closing-band gradient end                                        |
| `primary-900`        | `#1e3a8a` | dark-mode tints (`bg-primary-900/40`, `/50`)                                   |
| `accent-50`          | `#fefce8` | amber note bar under the certificate grid                                      |
| `accent-300`         | `#fde047` | emergency pill text on `#030712`                                               |
| `accent-400`         | `#facc15` | **emergency band fill**, compliance icon squares, hazard stripe                 |
| `accent-900`         | `#713f12` | dark-mode note tint (`/20`)                                                    |
| `gray-50`            | `#f9fafb` | counter strip, compliance band, testimonial band                               |
| `gray-100`           | `#f3f4f6` | FAQ icon disc, `dl` hairline                                                   |
| `gray-200`           | `#e5e7eb` | header rule, certificate card border (2 px), hero-photo ring                    |
| `gray-300`           | `#d1d5db` | secondary-button border                                                        |
| `gray-400`           | `#9ca3af` | warning-sign body text on the dark band, footer copy                            |
| `gray-500`           | `#6b7280` | card footnotes ("Valid 5 years")                                               |
| `gray-600`           | `#4b5563` | body copy, nav labels, ledes                                                    |
| `gray-700`           | `#374151` | secondary-button label                                                         |
| `gray-800`           | `#1f2937` | footer newsletter input fill                                                   |
| `gray-900`           | `#111827` | headings, footer band, cookie/back-to-top chrome                               |
| `gray-950`           | `#030712` | **warning-signs band**, emergency phone button, dark-mode page                 |

Semantic: `red-600 #dc2626` for *Stop using it*; severity pills are 11 px / 700 / uppercase on a 4 px radius.

### Type (Inter)

| role                | size / line-height | weight | tracking | colour     |
| ------------------- | ------------------ | ------ | -------- | ---------- |
| `h1`                | 60 / 60 (48 @ 768, 36 @ 390) | 700 | −1.5 px | `#111827` |
| hero lede           | 20 / 28            | 400    | —        | `#4b5563`  |
| `h2`                | 30 / 36 (`sm:` 36) | 700    | −0.75 px | `#030712`  |
| section lede        | 16 / 24 (`text-lg` 18 / 28 in FAQ) | 400 | — | `#4b5563` |
| eyebrow chip        | 12                 | 700    | 0.6 px, uppercase | `#1e40af` on `#dbeafe` |
| hero credential pill| 14                 | 500    | —        | `#1d4ed8` on `#eff6ff`, 1 px `#bfdbfe` |
| fact figure         | 36 / 40 (`lg:` 36) | 700    | —        | `#111827`  |
| fact label          | 14                 | 400    | —        | `#4b5563`  |
| counter figure      | 36 (`lg:` 48)      | 700    | —        | `#2563eb`  |
| card `h3`           | 18                 | 700    | —        | `#111827`  |
| card `dt`           | 14                 | 600    | —        | `#111827`  |
| card `dd`           | 14 / 20            | 400    | —        | `#4b5563`  |
| certificate price   | 24, tabular-nums   | 700    | —        | `#1d4ed8`  |
| certificate code    | 12, mono           | 700    | —        | white on `#1d4ed8` |
| warning `h3`        | 16                 | 600    | —        | `#ffffff`  |
| warning body        | 14 / 23            | 400    | —        | `#9ca3af`  |
| compliance code     | 14, mono           | 700    | —        | `#1d4ed8`  |
| compliance note     | 12, mono           | 400    | —        | `#6b7280`, over a 1 px rule |
| quote               | 18 / 28            | 500    | —        | `#111827`  |
| FAQ question        | 16 (`text-lg` 18)  | 600    | —        | `#111827`  |
| footer column head  | 14                 | 600    | 0.7 px, uppercase | `#ffffff` |
| nav label           | 14                 | 500    | —        | `#4b5563`  |
| button label        | 16                 | 500    | —        | white / `#374151` |

### Shape, shadow, layout

- **Buttons:** 8 px radius, `12px 24px` padding, 16 px / 500. Primary = `#2563eb` + `shadow-lg shadow-primary-600/25`,
  hover `#1d4ed8` + `shadow-xl`. Secondary = white, 1 px `#d1d5db`, `#374151` label. Emergency phone = **12 px**
  radius, `16px 28px`, 18 px / 700, `#030712` fill. Closing-band buttons = 8 px, `16px 32px`, white fill (blue-700
  label) and 1 px `white/40` outline.
- **Cards:** certificate cards `16px`, **2 px** `#e5e7eb`, 24 px padding, no shadow, hover border → `primary-400`.
  Compliance cards `16px`, **1 px** border, 24 px padding, with a 36 px `accent-400` square at 8 px radius floating
  top-right. Quote cards `16px`, 32 px padding, `shadow-soft`.
- **Hero photo:** 16 px radius, 1 px ring `#e5e7eb`, `0 25px 50px -12px rgb(0 0 0/.25)`, 1024 × 512 (2:1), `max-w-5xl`.
- **Widths:** container `1280px` with `32px` gutters at `lg` (`16px` below); hero copy `max-w-4xl`; certificate band
  `max-w-6xl` / lede `max-w-2xl`; FAQ + testimonial + closing copy `max-w-3xl`; bottom note bar full band width.
- **Rhythm:** hero `py-20 lg:py-32`; counter strip `py-16 lg:py-20` with `border-y`; emergency `py-12`; every band
  after it `py-20 sm:py-28` (**112 px**); footer `pt-16 lg:pt-24`. Measured band heights at 1440:
  hero **1,409** · emergency **474** · counters **238** · certificates **1,178** · warning signs **1,316** ·
  compliance **719** · testimonials **768** · FAQ **820** · closing band **500** · footer **587**.

## Chrome (shared family behaviour, all present in this build)

Preloader (`#preloader`, white, 40 px `animate-spin` ring with a blue top border, fades out 300 ms after `load`);
skip link to `#main-content`; 2 px blue scroll-progress bar; sticky header; dark-mode toggle; mobile nav panel;
sticky mobile CTA bar (call + book); cookie dialog (`#cookie-consent`); back-to-top disc. The reference's own
`animate-hero-float` keyframes (`0 0 scale(1) → translate/scale drift → 0 0 scale(1)`, 8 s and 10 s, mirrored) and
its `data-parallax` offsets (`0.15` / `-0.1`) drive the two hero blobs.

## Content inventory (source copy; keep the numbers, rename the brand)

**Header** — wordmark `Voltway` (bolt glyph); nav *Emergency · Certificates · Warning signs · Compliance · About ·
Prices · Blog · Contact*; moon toggle; primary `Book an EICR`.

**Hero** — pill *NICEIC approved · Part P · 24-hour emergency line*; `h1` *Electrical work that* + rotating
*passes inspection / comes with the paperwork / a surveyor will accept*; lede *Domestic and commercial electrical
contractors across Tyne and Wear. EICR testing, consumer unit replacement, landlord certificates and fault finding —
every job certified and lodged, every time.*; buttons *Book an EICR*, *See certificate prices*, play chip
*Watch Demo*; facts `24/7` Emergency line · `90 min` Average response · `6,100+` Certificates issued · `18` Years
NICEIC approved; photo alt *"A Voltway electrician testing a consumer unit"*.

**Emergency band** — pill *24-hour emergency line*; `h2` *No power, burning smell, or a tripping RCD that will not
reset*; *A qualified electrician answers this number at any hour. If it is genuinely unsafe we will tell you what to
isolate before we arrive.*; `0800 118 4422`; SLA rows *08:00 – 18:00 weekdays → Within 90 minutes*, *18:00 – 23:00 and
weekends → Within 2 hours*, *23:00 – 08:00 → Within 3 hours*; note *We charge an emergency call-out of £120 between
18:00 and 08:00 and at weekends, which is stated before we set off, never added afterwards. If the fault turns out to
be your supplier's responsibility rather than your installation, we will tell you and there is no charge.*

**Counter strip** — `6,100` Certificates issued and lodged · `90 min` Average daytime response · `18` Years NICEIC
approved · `100%` Notifiable work certified.

**Certificates** — eyebrow *Certification*; `h2` *Which certificate you actually need*; lede *Four documents get
confused constantly, usually by people being sold the wrong one. Here is what each is for.* Four cards:
`EICR` / Electrical Installation Condition Report / **£180** / *Valid 5 years* / who: *Landlords, every five years by
law. Homeowners, roughly every ten, or before selling.* / covers: *An inspection and test of the existing
installation, reporting faults by code. C1 is immediately dangerous, C2 is potentially dangerous, C3 is an
improvement recommendation only.*
`EIC` / Electrical Installation Certificate / **Included** / *With the work* / who: *Anyone having new circuits, a
rewire or a consumer unit installed.* / covers: *Certifies new work against BS 7671. Issued by whoever did the work —
if a contractor cannot issue one, they should not be doing the job.*
`MEIWC` / Minor Electrical Installation Works Certificate / **£45** / *With the work* / who: *Additions that do not
create a new circuit — an extra socket, a replacement fitting.* / covers: *Confirms the alteration is safe and tested.
Cheaper and quicker than a full EIC, and still notifiable in certain rooms.*
`PAT` / Portable Appliance Testing / **£3.50 per item** / *Typically annual* / who: *Employers, landlords of furnished
lets, and anyone hiring out equipment.* / covers: *Inspection and testing of plug-in appliances, with a register and
labels. Not a legal requirement in itself but the standard way of meeting one.*
Note: *Prices are for a standard three-bedroom domestic property with a single consumer unit. Larger properties and
commercial premises are quoted per circuit after a look at the installation. We lodge every certificate with the
scheme provider, and a copy reaches you by email the same day.*

**Warning signs (dark band)** — pill *Do not wait*; `h2` *What your installation is telling you*; lede *Sorted by how
quickly it needs dealing with rather than how alarming it sounds.* Eight rows, each `severity` + title + 1–2
sentences: **Stop using it** — *A burning or fishy smell near sockets or the consumer unit* (*Overheating plastic
gives off a distinctive fishy smell before anything visibly burns. This is the one genuine emergency on this list.*);
*Scorch marks or discolouration around a socket* (*Indicates arcing behind the faceplate, usually from a loose
terminal. It will not improve on its own and it is a fire risk.*); *An RCD that trips and will not reset* (*Something
on that circuit has a genuine earth fault. Repeated resetting is not a fix and can mask a dangerous condition.*).
**Book this week** — *A fuse box with rewirable fuses rather than breakers* (*Pre-1980s installations often have no
RCD protection at all. Not immediately dangerous, but well below current standards and usually flagged as C2 on an
EICR.*); *Sockets that feel warm to the touch* (*Warmth under load can be normal for a high-draw appliance. Warmth
with nothing plugged in is a loose connection.*); *No RCD protection on socket circuits* (*Required for new work since
2008. Retrofitting is usually a consumer unit change, and it is the single biggest safety improvement in most older
homes.*). **Mention at next visit** — *Lights dimming when an appliance starts* (*A brief dip when a shower or kettle
starts is normal. A sustained one suggests a supply or loading issue worth investigating.*); *Two-pin sockets or
cloth-covered cable in the loft* (*Genuinely old wiring. Often still functional but rarely compliant, and it dates the
installation for an EICR.*). Foot note: *If you have anything in the first category, switch that circuit off at the
consumer unit and ring us. Isolating a circuit is free, safe, and far cheaper than the alternative.*

**Compliance** — eyebrow *The rules*; `h2` *What we work to*; lede *Four standards decide whether electrical work in
a UK home is legal. Any contractor should be able to name all four.* Cards (code / subtitle / body / mono footnote):
`BS 7671` The Wiring Regulations — *The technical standard all fixed electrical installation work is designed and
tested against. Currently the 18th edition with amendments.* — *18th ed. · Amd 2*.
`Part P` Building Regulations — *Makes most domestic electrical work notifiable to building control. Registered
contractors self-certify rather than paying for a separate inspection.* — *England & Wales*.
`EICR` Five-yearly landlord duty — *Private landlords in England must hold a satisfactory report renewed every five
years, and supply a copy to tenants within 28 days.* — *Mandatory since 2020*.
`NICEIC` Scheme membership — *Annual assessment of our work, premises, test equipment calibration and paperwork by an
independent assessor. This is what lets us self-certify.* — *Approved 18 years*.

**Testimonials** — eyebrow *What clients say*; `h2` *Mostly from letting agents*; lede *The people who care most about
paperwork arriving on time.* Three 5-star quotes: *"EICRs come back the same day with the codes explained in English.
Our previous contractor took a fortnight and a chasing email."* — Sarah Nkemelu, Lettings manager, 140 properties;
*"They quoted a consumer unit change, found the earthing was inadequate, and told us before starting rather than
after."* — Graham Ellis, Homeowner, Jesmond; *"Rang at half eleven on a Sunday with a dead ring main. Someone
answered, talked me through isolating it, and arrived inside two hours."* — Priya Sandhu, Homeowner, Gosforth.

**FAQ** — pill *Questions*; `h2` *What people ask about certificates*; lede *Mostly landlords, and mostly about
codes.* Five items: *My EICR came back unsatisfactory. What does that mean?* — *It means at least one C1 or C2 code was
recorded. C1 is immediately dangerous and needs making safe on the day. C2 is potentially dangerous and must be
remedied for the report to become satisfactory. C3 is an improvement recommendation and does not make a report
unsatisfactory on its own.* · *Can the same firm do the report and the remedial work?* — *Yes, and most do. If you
would rather not, we will issue the report and you are free to take it elsewhere — there is no obligation and we will
not price the remedials into the inspection.* · *How long does an EICR take?* — *Two to three hours for a typical
three-bedroom house. Power is off for parts of it, so plan around anything that must stay running. We will tell you
which circuits and for roughly how long before we start.* · *Do I need to be there?* — *Someone with authority to
grant access does, and we need access to the consumer unit and every room. For tenanted properties we are happy to
arrange directly with the tenant.* · *Is a landlord certificate the same as an EICR?* — *Yes — "landlord certificate"
is the common name for a satisfactory EICR. There is no separate document, and anyone selling you one as an extra is
selling you something you already have.*

**Closing band** — `h2` *Book an EICR or ring the emergency line*; *Certificates lodged and emailed the same day.
Emergency call-outs answered by a qualified electrician, not a call centre.*; buttons *Book an EICR* (white) and
*Check the warning signs* (outline).

**Footer** — dark logo + *NICEIC approved electrical contractor — EICR testing, consumer units, landlord certificates
and a genuine 24-hour emergency line.*; `12 Fenwick Industrial Estate, Newcastle upon Tyne, NE6 2HL`;
`0800 118 4422`; `office@voltway.co.uk`; columns **Spaces** (Hot Desk · Dedicated Desk · Private Office · Meeting
Rooms — see defect 1), **Company** (About · Blog), **Support** (Contact · Terms), **Stay Updated** (*Landlord
certificate reminders and plain-English notes on what changed in the wiring regulations.* + email input + Subscribe);
bottom bar *© 2026 Voltway. All rights reserved.* + Privacy Policy · Terms of Service · Style Guide + social icons.

## Requirements

### R1 — Chrome and document shell

*As a visitor the page must feel like a finished product site, not a mock.*

```gherkin
Scenario: The page loads with a branded shell
  Given the app is served at the site root
  Then the document title contains "Sparkwell"
  And a skip link to #main-content is the first focusable element
  And the preloader disappears without trapping the page when JavaScript has already finished loading
  And a 2 px blue progress bar tracks scroll position

Scenario: Back to top
  Given the visitor has scrolled more than 300 px
  Then a 48 px round blue "Back to top" button is visible bottom-right
  And activating it returns the window to the top
```

### R2 — Header

```gherkin
Scenario: Sticky translucent header
  Given the viewport is 1440 px wide
  Then the header is 80 px tall, sticky, white at 80 % with a backdrop blur and a 1 px #e5e7eb rule
  And it shows the Sparkwell wordmark, five in-page anchors and a blue "Book an EICR" button

Scenario: Header anchors reach their sections
  When the visitor activates "Warning signs"
  Then the page scrolls to the section whose heading is "What your installation is telling you"
  And every anchor has a matching section id in the document

Scenario: Mobile navigation
  Given the viewport is 390 px wide
  Then the links are hidden and a menu button with aria-expanded="false" is shown
  When the visitor toggles the menu
  Then a full-width panel below the bar lists the same links and aria-expanded is "true"

Scenario: Dark-mode toggle
  When the visitor activates the moon button
  Then the html element gains the "dark" class, the page switches to the dark palette and the control is labelled for screen readers
```

### R3 — Hero

```gherkin
Scenario: Rotating headline
  Given IntersectionObserver and requestAnimationFrame exist
  Then the h1 reads "Electrical work that" followed by one of "passes inspection", "comes with the paperwork", "a surveyor will accept"
  And the rotating phrase is styled with the blue gradient text treatment
  And the phrase cycles at least once every 6 seconds and never leaves the heading empty

Scenario: Reduced motion or no animation APIs
  Given the browser reports prefers-reduced-motion: reduce, or the animation APIs are missing
  Then the h1 renders the first phrase statically

Scenario: Hero controls
  Then "Book an EICR" is a blue filled button with an arrow icon
  And "See certificate prices" is an outlined button
  And "Watch Demo" is a round play chip that opens a dialog

Scenario: Fact row and photograph
  Then four facts read 24/7 Emergency line, 90 min Average response, 6,100+ Certificates issued, 18 Years NICEIC approved
  And a 2:1 photograph is shown in a 16 px card with a 1 px ring and a large shadow
  And the photograph is a placeholder image seeded from the template name, never a copied asset

Scenario: Video dialog
  When the visitor activates "Watch Demo"
  Then a modal dialog opens with a 16:9 placeholder panel
  And Escape closes it and focus returns to the trigger
```

### R4 — Emergency band

```gherkin
Scenario: Hazard band
  Then a #facc15 band with a 45-degree black and yellow stripe rule across its top edge sits directly under the hero
  And it shows a dark pill labelled "24-hour emergency line", a heading, one paragraph, a phone button and three response times

Scenario: Phone link
  Then the phone button is a tel: link labelled with the number
  And the three service windows read "08:00 – 18:00 weekdays / Within 90 minutes", "18:00 – 23:00 and weekends / Within 2 hours", "23:00 – 08:00 / Within 3 hours"

Scenario: Call-out charge is disclosed
  Then a sentence on the band states the out-of-hours call-out charge before the visitor calls
```

### R5 — Counter strip

```gherkin
Scenario: Four animated figures
  Given the strip scrolls into view
  Then the figures count from 0 to 6,100, 90 min, 18 and 100% once each
  And the final values are exactly what the labels describe

Scenario: Counters without IntersectionObserver
  Given IntersectionObserver is unavailable
  Then the final values render immediately and no state-update warning is logged
```

### R6 — Certificate grid

```gherkin
Scenario: Four priced documents
  Then the section shows an eyebrow "Certification", the heading "Which certificate you actually need" and one lede paragraph
  And four cards are laid out two per row at 1440 px and one per row below 1024 px
  And each card shows a monospaced code tag, its full name, a price, a validity line, and "Who needs it" plus "What it covers"
  And the prices read £180 / Included / £45 / £3.50 per item

Scenario: Price note
  Then an amber note bar with a 4 px yellow left rule follows the grid and explains the quoting basis
```

### R7 — Warning signs (dark band)

```gherkin
Scenario: Eight severity-tagged rows
  Then the band background is #030712 and all text on it is white or #9ca3af
  And eight rows are listed, each with a severity pill, a title and a body sentence
  And the pills are "Stop using it" (red, 3 rows), "Book this week" (yellow, 3 rows) and "Mention at next visit" (grey, 2 rows)
  And rows are one per line at 1440 px with the pill in a fixed left column

Scenario: Closing instruction
  Then a note after the rows tells the visitor to isolate the circuit and call
```

### R8 — Compliance cards

```gherkin
Scenario: Four standards
  Then four cards read BS 7671 / Part P / EICR / NICEIC with a subtitle, a body and a monospaced footnote each
  And every card carries a 36 px yellow square at its top-right corner
  And the codes are set in the monospace stack in #1d4ed8
```

### R9 — Testimonial carousel

```gherkin
Scenario: Three quotes in a carousel
  Then three quote cards each show five stars, the quote, an initial avatar and a name plus role line
  And at 1440 px one card is visible at a time with previous/next circular buttons
  And the buttons are hidden below 1024 px where the track scrolls instead
  And dot indicators show which quote is active and are buttons with accessible names

Scenario: Keyboard
  Then the carousel is reachable by keyboard and each control reports its state
```

### R10 — FAQ accordion

```gherkin
Scenario: Five exclusive items
  Then five questions render as buttons with aria-expanded="false"
  When the visitor opens the third question
  Then only that answer is visible, its button reports aria-expanded="true" and the plus icon has rotated
  When the visitor opens another question
  Then the previously open answer closes
```

### R11 — Closing band

```gherkin
Scenario: Gradient call to action
  Then the band uses a blue gradient from #2563eb to #1e40af with a faint dot grid and two blurred discs
  And it shows a white heading, one paragraph, a white filled button and an outlined button
  And both buttons are keyboard reachable with visible focus rings
```

### R12 — Footer

```gherkin
Scenario: Footer content
  Then the footer background is #111827 with #9ca3af copy
  And it shows the brand blurb, a postal address, a tel: link and a mailto: link
  And it shows three link columns plus a newsletter column with an email input and a Subscribe button

Scenario: Newsletter validation
  When the visitor submits an empty or malformed address
  Then an inline error is shown and no success message appears
  When the visitor submits a valid address
  Then the form shows a confirmation and the input is cleared

Scenario: Component Dock attribution
  Then the footer links to https://www.componentdock.com/ labelled "Component Dock"
```

### R13 — No provenance leakage

```gherkin
Scenario: The shipped app is brand-clean
  Then no file under apps/sparkwell contains "colorlib", "Voltway" or the preview URL
  And the wordmark, document title, meta description, copyright line and email domain are all "Sparkwell"
  And every image is a picsum placeholder seeded "sparkwell-<n>" or a local asset
```

### R14 — Responsive and accessible

```gherkin
Scenario: No horizontal overflow
  Given viewport widths 1440, 1024, 768 and 390
  Then document scrollWidth equals the viewport width at every step

Scenario: Heading order
  Then the document has exactly one h1 and section h2s, with card h3s nested beneath them

Scenario: Interactive affordances
  Then every icon-only control carries an aria-label
  And focus-visible rings are visible on every button, link and input
```

## Known defects in the reference (do not reproduce)

1. **Footer column is another template's.** The first column reads **"Spaces"** with *Hot Desk · Dedicated Desk ·
   Private Office · Meeting Rooms* — a coworking site's menu. Ship a **Service** column instead (*EICR · Consumer
   units · Landlord certificates · PAT*) and note the change in the PR.
2. **"Book a Tour"** in the sticky mobile CTA bar is the same leftover. Ship **"Book an EICR"**.
3. **Two nav labels are dead ends for a one-pager.** *About* and *Blog* open inner pages with no in-page target, and
   *Prices* opens `/pricing` which prices nothing. Ship five anchors (*Emergency · Certificates · Warning signs ·
   Compliance · Contact*) and put *About · Blog · Terms* in the footer only.
4. **11 px horizontal overflow at 390 px** (`scrollWidth` 401): the carousel track is a fixed `358px × 3` flex row
   inside `overflow-hidden`, but the `.container` gutter and slide padding push it out. The recreation must clip or
   scroll-snap the track and keep `scrollWidth == 390`.
5. **"Watch Demo" embeds a third-party YouTube video** (`data-video-modal` → `…/embed/dQw4w9WgXcQ`). Do not embed:
   use a local 16:9 placeholder panel in the dialog.
6. **The product screenshot is hero-only** (2,400 × 1,892, ends at the hero photo), so the eight bands below the fold
   have no screenshot to check against — the live preview at `/tmp/voltway-full.png` is the only full-page reference.

## Verification checklist

- [ ] `openspec/specs/template-sparkwell/spec.md` is the only spec for this app; `npm run spec:validate` passes
- [ ] `apps/sparkwell` exists, package renamed `@free-react-templates/sparkwell`, `public/CNAME` =
      `sparkwell.free.componentdock.com`, `homepage` = `https://sparkwell.free.componentdock.com`
- [ ] `npm install` at the repo root; `grep -c "free-react-templates/sparkwell" package-lock.json` ≥ 1
- [ ] Inter loaded via one Google Fonts `<link>` (400/500/600/700); monospace from the system stack; no other face
- [ ] `src/index.css` `@theme` carries the `primary` and `accent` ramps from the token table plus `--shadow-soft`
- [ ] Nine bands in source order: hero · emergency · counters · certificates · warning signs · compliance ·
      testimonials · FAQ · closing band · footer
- [ ] Hero gradient text, typewriter (reduced-motion safe), four facts, 1024 × 512 placeholder photo
- [ ] Emergency band has the stripe rule, the tel: link and the three service windows
- [ ] Counters land on 6,100 / 90 min / 18 / 100% with a static fallback when IntersectionObserver is absent
- [ ] Four certificate cards with code tags, prices and a `dl` of who/covers; amber note bar below
- [ ] Dark band with eight severity-tagged rows, correct pill colours and per-severity counts (3 / 3 / 2)
- [ ] Four compliance cards with the yellow square and mono footnotes
- [ ] Carousel: three quotes, prev/next ≥1024 px, dots, no overflow at 390 px
- [ ] Accordion: five items, one open at a time, `aria-expanded` correct
- [ ] Closing band gradient + two buttons; footer with three columns, newsletter that validates, Component Dock link
- [ ] Dark mode works on every band (toggle adds `.dark`, no flash on reload)
- [ ] `scripts/verify-app.sh sparkwell` green: typecheck, lint, 100 % coverage tests, build
- [ ] No `colorlib` / `Voltway` string under `apps/sparkwell`; picsum seeds `sparkwell-*`
- [ ] `TEMPLATES.md` row appended under `## Construction` after *Vertex* (count 29 → 30), only at claim time

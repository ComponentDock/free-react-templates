# Affiance — implementation tasks

Recreation of ColorLib **"Twohearts"** (source slug `twohearts`) — a romantic
one-page wedding site on a **white page** with a **mauve-pink brand `#d291bc`**,
a **Rochester** script display face over **Source Sans Pro** body text, and a
signature **brand-pink countdown bar pulled up `-50px` over the hero's bottom
edge** (`#cb7fb1` first cell). Section order: **header (transparent over hero) →
hero → countdown → about bride & groom → love story timeline → greetings →
family & friends → when & where → invitation/RSVP → gallery → footer**.

Preview: `https://preview.colorlib.com/theme/twohearts/` (**HTTP 200**,
34,593 B, `<title>Twohearts - Free Bootstrap 4 Template by Colorlib</title>`).
Stylesheet `css/style.css` (**HTTP 200**, 67,294 B, sha256
`892b1f4a01d30757357ea8ccc9ff093ff3a454eedc98ed2ee2d7c5f4218798e3`). Screenshot
`twohearts-free-template.jpg` (HTTP 200, **AVIF**, 87,689 B, 1200×946 →
converted to PNG and inspected).

Spec: `openspec/specs/template-affiance/spec.md`. New name: **affiance** (an
archaic marriage pledge/betrothal — single lowercase word, no `apps/` collision;
keeps the Wedding family's naming run: lensly · vows · nuptial · knot · wedlock ·
nuptials · betrothal · trousseau · paperie · **affiance**). Never reuse the
source slug `twohearts`, the name "Twohearts", the nav labels, the couple names
`Leonardo & Marianna`, the people names (`Mark Tomy`, `John Henceworth`,
`Rey Cooper`, `Robert Chan`, `Rose Jones`, `Mary Dell`, `Alicia Brean`,
`Angel Worth`), the event date `Saturday, 28, 2019`, the time
`02:00 pm-10:00 pm`, the address `203 Fake St. Mountain View, San Francisco,
California, USA`, the column headings `Links`/`Services`/`Have a Questions?`,
the string `Colorlib`, or any copy verbatim.

Design notes: `docs/templates/affiance/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/affiance`
- [ ] Rename package to `@free-react-templates/affiance`; set
      `"homepage": "https://affiance.free.componentdock.com"`
- [ ] `public/CNAME` = `affiance.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/affiance`
      (`grep -c "free-react-templates/affiance" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy the pattern from an
      existing app — Tailwind v4.3 drops relative `@source` paths)
- [ ] Google Fonts `<link>` in `index.html`:
      `https://fonts.googleapis.com/css2?family=Rochester&family=Source+Sans+Pro:wght@300;400;600;700&display=swap`
      (Rochester = script display/headings/names/countdown numbers; Source Sans
      Pro = body/UI/nav). Both verified on Google Fonts (HTTP 200). Icons:
      `lucide-react` (`Menu`, `X`, `ChevronDown`, `Plus`, `MapPin`, `Phone`,
      `Mail`, `ArrowUp`)
- [ ] `@theme` tokens in `src/index.css`: `--color-brand: #d291bc`,
      `--color-brand-cell: #cb7fb1` (countdown "Save the Day" cell),
      `--color-tint: #f0d9e8` (bride/groom photo frame),
      `--color-band: #f8f9fa` (light bands), `--color-ink: #212529`,
      `--color-muted: #6c757d`, `--color-scrim: rgba(0,0,0,0.4)`,
      `--radius-bar: 4px`, `--radius-pill: 2px`; fonts
      `--font-script: "Rochester", cursive` and
      `--font-body: "Source Sans Pro", sans-serif`
- [ ] `src/components/` split: `Header.tsx` (transparent-over-hero navbar),
      `Hero.tsx`, `Countdown.tsx`, `BrideGroom.tsx`, `LoveStory.tsx`,
      `Greetings.tsx`, `FamilyFriends.tsx`, `WhenWhere.tsx`, `RsvpForm.tsx`,
      `Gallery.tsx`, `Footer.tsx`, plus `SectionHeading.tsx` (dashed subheading
      pill + script title) and `RingsBadge.tsx` (inline-SVG two-rings, decorative)

## Section heading (`SectionHeading`, `RingsBadge`) (TDD)

- [ ] Red: `SectionHeading` asserts a dashed-border `#d291bc` uppercase
      subheading pill (`letter-spacing:2px`, `font-weight:900`) above a Rochester
      script title; `RingsBadge` is decorative only (`aria-hidden`, no text)
- [ ] Green: small **inline SVG** two-rings badge (hero) and a reusable heading
      component used by every band. **No ColorLib asset copied**

## Header (`Header`) (TDD)

- [ ] Red: asserts a transparent navbar floating over the hero — bold uppercase
      white "Affiance" wordmark left, eight uppercase white links (Home, Groom &
      Bride, Our Story, Greetings, Bridesmaid & Groomsmen, When & Where, RSVP,
      Gallery) right, each anchoring its section
- [ ] Green: `<Header>` — transparent at the top, a solid/scrolled state once
      past the hero; a keyboard-operable mobile menu below the desktop
      breakpoint
- [ ] Guard: `aria-expanded` on the mobile toggle; no `href="#"` dead anchors

## Hero (`Hero`) (TDD)

- [ ] Red: asserts a full-bleed photo under a `rgba(0,0,0,.4)` overlay, a round
      brand-pink two-rings badge, the couple names in Rochester script white, and
      a white 2 px-radius pill holding an uppercase 7 px-letter-spaced `#d291bc`
      tagline
- [ ] Green: `<Hero>` with own couple names/tagline; placeholder
      `picsum.photos/seed/affiance-1/1920/1080`
- [ ] Guard: assert the scrim keeps the text legible and the badge is
      `aria-hidden`

## Countdown (`Countdown`) (TDD)

- [ ] Red: asserts a `#d291bc` bar (radius 4 px, shadow
      `0 10px 32px -19px rgba(0,0,0,.15)`, pulled up `-50px`) with five 20 %
      cells split by a `1px solid rgba(255,255,255,.05)` hairline — a `#cb7fb1`
      script "Save the Day" cell then four white Rochester 40 px numbers with
      uppercase labels (Days, Hours, Minutes, Seconds)
- [ ] Green: `<Countdown>` counting to a configured date, updating once per
      second (cleanup on unmount), zero-padded two-digit cells
- [ ] Guard: assert cleanup of the interval, no layout shift between ticks, and
      the numbers are announced accessibly

## About Bride & Groom (`BrideGroom`) (TDD)

- [ ] Red: asserts a centred dashed `#d291bc` subheading pill + Rochester script
      "Bride & Groom" title, then two alternating rows — a **400 × 400 photo with
      a 15 px `#f0d9e8` solid frame** beside a text column with a script name and
      a muted paragraph
- [ ] Green: `<BrideGroom>` with own names/copy; placeholders
      `picsum.photos/seed/affiance-<2..3>/800/800`
- [ ] Guard: assert the photo alternates sides on desktop, stacks on mobile, and
      the 15 px frame token is applied

## Love Story (`LoveStory`) (TDD)

- [ ] Red: asserts a parallax photo band (subheading + script "Timeline of
      Love" title) with four alternating timeline entries (43 % panels), each
      with a date, a script heading, a paragraph and a **120 px circular photo
      badge** with an inset dashed `rgba(255,255,255,.5)` ring
- [ ] Green: `<LoveStory>` with own milestones; placeholders
      `picsum.photos/seed/affiance-<4..7>/240/240`
- [ ] Guard: assert the parallax is disabled under `prefers-reduced-motion`,
      the entries alternate, and the timeline is read in order by a screen reader

## Greetings (`Greetings`) (TDD)

- [ ] Red: asserts a `#f8f9fa` band with a subheading + script "Sweet Messages"
      title and a carousel of message cards (avatar, paragraph, name + role),
      inactive items at reduced opacity
- [ ] Green: `<Greetings>` — a CSS scroll-snap / transform carousel (**no new
      dependency**; avoid owl), pausable and keyboard-operable
- [ ] Guard: assert reduced-motion disables auto-advance and all cards are
      reachable without animation

## Family & Friends (`FamilyFriends`) (TDD)

- [ ] Red: asserts a subheading + script "Family & Friends" title and eight
      people cards (circular portrait, name, Groomsmen/Bridesmaid caption) that
      reflow from a wide row to a smaller grid
- [ ] Green: `<FamilyFriends>` with own names; placeholders
      `picsum.photos/seed/affiance-<8..15>/300/300`
- [ ] Guard: assert eight cards, circular portraits, and captions are
      associated with each card

## When & Where (`WhenWhere`) (TDD)

- [ ] Red: asserts a `#f8f9fa` band with a subheading + script "When & Where"
      title and two columns (The Ceremony / The Reception), each with date, time,
      two-line address, phone and a **See Map** link
- [ ] Green: `<WhenWhere>` with own events/venues; the **See Map** link opens a
      keyless map (OpenStreetMap embed or `...&output=embed`) in a new tab
- [ ] Guard: assert the map URL contains no API key and the link has
      `rel="noreferrer"` + an accessible label

## RSVP form (`RsvpForm`) (TDD)

- [ ] Red: asserts a fixed photo band + light overlay, an "Invitation"
      subheading and a 60 px Rochester script "Will You Attend?" title, then a
      Name field, an email field, a **Guest** select (Guest, 1–5) with a chevron
      affordance, a 2-row Message textarea and a brand-pink "I am attending"
      submit
- [ ] Green: `<RsvpForm>` with controlled inputs, a real keyboard-accessible
      `<select>` styled to match, `preventDefault` submit and a local
      confirmation (the source posts nowhere — `action="#"`)
- [ ] Guard: assert every field has an associated `<label>` (`htmlFor`/`id`),
      required-field validation, no navigation on submit

## Gallery (`Gallery`) (TDD)

- [ ] Red: asserts a full-width, no-gutter grid (~300 px tiles), 4 columns
      desktop reflowing to fewer below, where hover/focus reveals a `#d291bc`
      wash + a 70 px white circle with a plus glyph
- [ ] Green: `<Gallery>` using `picsum.photos/seed/affiance-<16..23>/600/600`;
      the plus affordance opens a `<dialog>`-based lightbox (**no new
      dependency**)
- [ ] Guard: assert the grid has no gutters, the overlay appears on hover and
      focus, and the lightbox is keyboard-operable with a labelled close control

## Footer (`Footer`) (TDD)

- [ ] Red: asserts a `#d291bc` band (`padding:7em 0`) with the wordmark + a short
      blurb + a social row, then three columns — **Links**, **Services** and
      **Have a Questions?** (street address, phone, e-mail); headings 20 px / 700
      uppercase white, links white with a hover treatment; a copyright line
      with **exactly one** `https://www.componentdock.com/` link branded
      "Component Dock" (new tab, `rel="noreferrer"`) plus the computed current
      year
- [ ] Green: `<Footer />` (the source's copyright credits Colorlib — the
      Component Dock link is the required repo replacement per AGENTS.md rule 5)
- [ ] Guard: assert the three columns, the copyright year, and the single
      Component Dock link

## Page shell

- [ ] Red: asserts banner / main / contentinfo landmarks and the document title
      "Affiance — Wedding Template"
- [ ] Green: `<App>` composing Header + 9 sections + Footer
- [ ] Guard: assert one `<h1>` (the hero couple names) and ordered headings

## Quality gates

- [ ] `scripts/verify-app.sh affiance` green (typecheck + lint + knip + fallow +
      vitest **100 %** lines/functions/branches/statements + build)
- [ ] `npm run spec:validate` green
- [ ] Grep the app for `colorlib`, `Colorlib`, `twohearts`, `Twohearts`, the nav
      labels, `Leonardo`, `Marianna`, the people names (`Mark Tomy`,
      `John Henceworth`, `Rey Cooper`, `Robert Chan`, `Rose Jones`, `Mary Dell`,
      `Alicia Brean`, `Angel Worth`), `Saturday, 28, 2019`, `02:00 pm-10:00 pm`,
      `203 Fake St`, `Have a Questions?` → **zero** hits (comments included)
- [ ] No copied assets: no `style.css`, no Bootstrap/jQuery/owl.carousel /
      stellar / waypoints / magnific-popup / animate bundles, no
      `bg_1.jpg` / `bg_2.jpg` / `bg_3.jpg` / `groom.jpg` / `bride.jpg` /
      `couple-*.jpg` / `person_*.jpg` / `gallery-*.jpg` / `flaticon` fonts, no
      Google Maps API key
- [ ] PR description lists: source template + slug, preview URL, design tokens
      used (brand `#d291bc`, countdown cell `#cb7fb1`, tint `#f0d9e8`, band
      `#f8f9fa`, scrim `rgba(0,0,0,.4)`, radii 4 px / 2 px / 50 %, shadow
      `0 10px 32px -19px rgba(0,0,0,.15)`, fonts Rochester + Source Sans Pro)
      and every delta (own name/brand/couple/copy, picsum photography, SVG
      two-rings badge, Component Dock footer link, accessible dropdown/select/
      lightbox, keyless map links)
- [ ] Squash-merge the PR, then mark the TEMPLATES.md `Twohearts` item `[x]`
      with the live `https://affiance.free.componentdock.com` URL + homepage and
      run `npm run readme:status`

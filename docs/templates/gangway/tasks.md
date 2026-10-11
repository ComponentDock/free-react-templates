# Gangway — implementation tasks

Recreation of ColorLib **"Website Menu V09"** (source slug `website-menu-09` — the
Website Menus family's **job-board / dashboard variant**: one transparent
dark-on-photo bar holding a **wordmark pinned at `left:5%`**, a **centred** `xl`-only
nav list (`left:50%` + `translateX(-50%)`) with **two** dropdowns, and a **CTA pair**
pinned at `right:5%` — an **outline-white** secondary and a **filled green
`#89ba16`** primary — over a **`100vh` full-bleed background image**, plus a
**`300 px` off-canvas drawer** (`right:0`, `translateX(110%) → 0`, `.2s
cubic-bezier(.66,.2,.48,.9)`, `z-index:2000`) that is a **JS clone of the same nav
list** with per-row `36 × 36` round disclosure arrows expanding `cl-collapse`
sub-lists, all under a **`rgba(0,0,0,.5)` veil** (`body:before`). The source has **no
content sections, no footer, no sticky chrome and no utility bar**;
`body{height:200vh}` exists only as scroll room.

Three tiers by width: **<992 px** → wordmark + hamburger only (both CTAs hidden, two
drawer-only action rows appear in the drawer); **992–1199.98 px** → wordmark + both
CTAs + hamburger, nav list hidden; **≥1200 px** → wordmark + centred nav list + both
CTAs, hamburger hidden. Type is **Quicksand (400/700 declared; the archive's `600`
files are unreferenced; a dead `Roboto` stack sits in the normalize)**. Shape
language is **square except `4px`** on the CTA pair and **`50%`** on the drawer
arrows. Preview: the slug-only path
`https://preview.colorlib.com/theme/website-menu-09/` returns **HTTP 404** — the
**live preview** is `https://preview.colorlib.com/theme/bootstrap/website-menu-09/`
(**HTTP 200**, 5,100 B, `<title>Website Menu #9</title>`; its `css/style.css?v=53272927`
21,239 B and `js/snippet.js?v=ff3415b3` 2,525 B are **sha256-identical** to the
snippet archive `https://preview.colorlib.com/downloads/free/website-menu-09.zip`,
HTTP 200, 650,682 B — the un-versioned source copy). Screenshot:
`website-menu-09.jpg` (HTTP 200, AVIF, 1200×972, 126,459 B) — a browser-chrome mock of
the live preview: `BRAND` uppercase and wide-tracked at the left, the six labels
centred (`Home` solid, the rest ~50 % white, two with chevrons), and the
`+ Post a Job` outline + `Log In` green pair at the right, over a full-bleed
cinderblock-wall photo of three people.

Spec: `openspec/specs/template-gangway/spec.md`. New name: **gangway** (the plank and
opening in a vessel's side you step aboard through — for a bar whose whole point is
its two boarding calls-to-action plus the drawer of remaining routes). Never reuse
the source slug `website-menu-09`, the name "Website Menu 09", the "Brand" wordmark,
the **17 source labels** (`Home`, `About`, `Job Listings`, `Job Single`,
`Post a Job`, `Pages`, `Services`, `Service Single`, `Blog Single`, `Portfolio`,
`Portfolio Single`, `Testimonials`, `Frequently Ask Questions`, `Gallery`, `Blog`,
`Contact`, `Log In`), the `cl-` utility namespace, the `\e313`/`\f078` icon-font
glyphs, the inline SVG data URIs, the self-hosted Quicksand woff2 files, or any copy
verbatim. Design notes: `docs/templates/gangway/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/gangway`
- [ ] Rename package to `@free-react-templates/gangway`; set
      `"homepage": "https://gangway.free.componentdock.com"`
- [ ] `public/CNAME` = `gangway.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/gangway`
      (`grep -c "free-react-templates/gangway" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy the pattern from an existing
      app — Tailwind v4.3 drops relative `@source` paths)
- [ ] Google Fonts `<link>` in `index.html`:
      `https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap`
      (the source's self-hosted 400/700 subsets and its 424 B icon-font subset are
      never copied; the variable face covers the `500` the sheet asks for on `h3`).
      Icons: `lucide-react` (`Menu`, `X`, `Plus`, `Lock`, `ChevronDown`,
      `ChevronUp`).
- [ ] `@theme` tokens in `src/index.css`: `--color-brand: #89ba16`,
      `--color-brand-hover: #90c317`, `--color-ink: #212529`,
      `--color-flyout-ink: #343a40`, `--color-flyout-wash: #ebeef0`,
      `--color-label: rgba(255,255,255,.5)`, `--color-label-current: #fff`,
      `--color-overlay: rgba(0,0,0,.5)`, `--color-arrow-hover: #f8f9fa`,
      `--color-close-hover: #dee2e6`,
      `--shadow-flyout: 0 2px 20px -2px rgba(0,0,0,.2)`,
      `--shadow-drawer: -10px 0 20px -10px rgba(0,0,0,.1)`,
      `--radius-btn: 4px`, `--ease-drawer: cubic-bezier(.66,.2,.48,.9)`,
      `--font-sans: "Quicksand", …` (design-token notes only — no provenance
      comments)

## Header shell + image band (TDD)

- [ ] Tests first: the band renders as a `100vh` region with a `cover`,
      `center center`, `no-repeat` background; the header is absolutely positioned
      `w-full z-[1999]` with `top-[2rem]` **and** `mt-4` (**48 px** total offset), a
      transparent surface, and **no sticky/fixed variant**
- [ ] `Hero` band component: `100vh` full-bleed background image
      (`https://picsum.photos/seed/gangway-hero/1920/1080`), no scrim, no CTA (the
      source has none)
- [ ] `Header`: container `w-full mx-auto px-[15px] xl:px-28` (`7rem` = 112 px at
      ≥1200 px), inner row `flex flex-wrap -mx-[15px]`, and the row is **allowed to
      collapse** — the wordmark and CTA columns are `absolute` above 768 px and
      return to flow below it (`relative`)
- [ ] Tests: the header floats over the band, the container has **no max-width**, and
      the row measures **0** at ≥768 px / **50 px** below (assert the layout quirk
      instead of "fixing" it)

## Wordmark, centred nav and CTA pair (TDD)

- [ ] Wordmark column: `absolute left-[5%] w-1/2 max-w-1/2 px-[15px]`; anchor =
      own brand text, `text-[1.5rem] uppercase tracking-[.2rem] text-white
      leading-9 font-normal`, a link to the top of the page (never "Brand")
- [ ] `Nav` driven by **one** `navItems` data structure rendered twice (desktop list
      + drawer) — `nav` pinned `absolute left-1/2 -translate-x-1/2 z-[5]`, list
      `hidden xl:block` with **eight** entries: six nav rows (two `hasChildren` in
      positions 3 and 4) plus **two action rows** that render `hidden` at ≥992 px
      (`lg:hidden`) and only ever show inside the drawer
- [ ] Labels `text-[16px] font-normal p-5` in flow (`inline-block` rows, measured
      **64 px**), inactive `text-[rgba(255,255,255,.5)]`, `hover`/`focus` `text-white`,
      current row `text-white` + `aria-current="page"` — and the current row keeps its
      **20 px** padding (the source's `.cl-active{padding:5px 20px}` is dead code)
- [ ] Dropdown parents: `pr-5` + a `lucide-react` `ChevronDown` at `top-1/2 right-0
      -translate-y-1/2` (`16 px`), `cursor-pointer`
- [ ] `CtaPair`: an outline-white secondary (`border-2 border-white text-white
      bg-transparent`, ≈131 × 40 px) and a filled primary (`bg-brand border-brand
      text-white`, ≈96 × 38 px), both `px-3 py-1.5 text-base leading-6 rounded-[4px]`
      with a leading `8 px`-gap `Plus` / `Lock` icon, **`hidden lg:inline-block`**
      (no CTAs below 992 px), hover/focus inverting to `bg-white text-black` and
      `bg-brand-hover border-brand-hover` over `.15s ease-in-out`, both pointing at
      real targets
- [ ] Tests: exactly **two** CTA anchors and eight list items; the CTA pair is
      `display:none` below 992 px; the nav list is `display:none` below 1200 px while
      the hamburger is the opposite; hover/focus assertions on both CTA surfaces

## Dropdown flyouts (TDD)

- [ ] Tests first: hovering the parent opens the flyout and sets
      `aria-expanded="true"`; `Escape` closes it and returns focus to the parent; an
      outside click closes it; `ArrowDown` on the parent opens it and focuses the
      first row
- [ ] `Flyout`: `absolute top-full left-0 min-w-[200px] bg-white rounded-none p-0
      mt-5 group-hover:mt-0 border-t-2 border-brand
      shadow-[0_2px_20px_-2px_rgba(0,0,0,.2)] transition-[opacity,visibility,margin]
      duration-200`, open state `mt-0 visible opacity-100` — square corners, no
      padding, the green hairline on top
- [ ] Flyout rows: **two** in the first flyout and **eight** in the second, of the
      source's *kinds* with own labels, `block px-5 py-[9px] text-[16px]
      leading-[1.4] text-flyout-ink`, hover/focus **`bg-flyout-wash text-ink`** (the
      source's grey wash — never a blue fill), active row `bg-flyout-wash
      text-brand`, and a long label is allowed to **wrap inside the 200 px box**
- [ ] Real disclosure: `aria-haspopup`/`aria-expanded`/`aria-controls` on the parent,
      which stays a real link; open on hover **and** click; `ArrowDown`/`ArrowUp`
      between rows; `Escape` returns focus; one flyout at a time; flip to `right:0`
      instead of overflowing at 1024 px
- [ ] The source's third-level rules (`\e315` caret, `left:100%; top:0`) are
      **dropped** — no nested `hasChildren` exists in either flyout
- [ ] Tests: keyboard-only traversal, `Escape` focus return, viewport containment,
      and **zero** dead `href="#"` anywhere

## Off-canvas drawer (TDD)

- [ ] Tests first: the hamburger is a real `button` with
      `aria-expanded`/`aria-controls` and an accessible label, visible below 1200 px
      and hidden at ≥1200 px; activating it adds the open state and moves focus into
      the panel
- [ ] `Drawer`: `fixed right-0 top-0 w-[300px] h-screen pt-5 bg-white z-[2000]
      shadow-[-10px_0_20px_-10px_rgba(0,0,0,.1)]`, `translate-x-[110%]` closed →
      `translate-x-0` open over `.2s cubic-bezier(.66,.2,.48,.9)`; a **real overlay
      element** `bg-black/50 z-[1002]` fading `.3s` (the source's `body:before` veil —
      **live code in this variant, unlike `-08`**); assert the header (`z-[1999]`)
      stays **above** the veil
- [ ] Strip: `px-5` with a **30 px `X`** (`lucide-react`) at `mt-2`, `cursor-pointer`,
      hover `text-[#dee2e6]` — a real `button` that closes the drawer; body:
      `px-5 pb-[150px] h-[calc(100vh-52px)] overflow-y-scroll` (measured 748 px at an
      800 px viewport)
- [ ] Drawer list: **the same `navItems` data** rendered into the panel (one
      component, two render targets — never a DOM clone, never a second
      hand-maintained list); **eight 50 px top rows** (`py-[10px] px-5 text-[20px]`,
      `#212529`, current row **`#000`**, hover **brand green** + no underline) and
      **44 px sub-rows** (`pl-10 pr-5 py-[10px] text-[16px]`, hover brand green); no
      third level
- [ ] Disclosure arrows: a real `button`, `absolute right-0 top-[10px] w-9 h-9
      rounded-full hover:bg-[#f8f9fa]`, with a **12 px** chevron rotating
      `0° → -180°` (`.3s all ease`) and `aria-expanded` toggling a sub-list that is
      `hidden` until opened (the source's `span[role=button]` is **not focusable** —
      fix that)
- [ ] Dismissal paths: the `✕`, the hamburger, an **outside click**, **`Escape`**, a
      **resize above the mobile range** (the source's strict `innerWidth > 768` —
      normalise to a breakpoint and document it) and **choosing a destination**
      (delta); every path resets `aria-expanded` on all toggles and returns focus to
      the opener
- [ ] Tests: each dismissal path, no stale transform/state after resize, no focus
      trap, and **no horizontal overflow at 320 px** (`scrollWidth === innerWidth`)

## Materialised sections (TDD)

- [ ] Tests first: each of the **13 destinations** (wordmark/current, about,
      job-listings parent, two job pages, post-a-job action, pages parent, its eight
      children, blog, contact, login) has a matching `id` or route
- [ ] Labelled sections of the same *kinds* with own copy —
      `#home` intro, openings grid, role detail, post-a-job form block, services,
      service detail, article single, portfolio grid, portfolio detail,
      testimonials, FAQ, gallery, blog list, contact block, account panel —
      `scroll-margin-top` ≥ header height on every target
- [ ] Imagery from `https://picsum.photos/seed/gangway-<n>/<w>/<h>`; the page is
      longer than the viewport so it reads like the source's `body{height:200vh}`
      with real content instead of blank filler
- [ ] Tests: **zero** dead `href="#"` links remain anywhere in the app

## Footer + attribution (TDD)

- [ ] Tests first: exactly one `https://www.componentdock.com/` link branded
      "Component Dock" (new tab, `rel="noreferrer"`) and a computed current year
- [ ] Minimal strip below the last section: dark surface with a translucent 1 px top
      hairline — a documented delta, since the source has no footer

## Quality gates

- [ ] Accessibility: real `button`s with `aria-expanded`/`aria-controls` for the
      hamburger, the `✕` and every drawer arrow; disclosure semantics on the dropdown
      parents; `aria-current="page"` on the current row; the overlay `aria-hidden`;
      focus moved into and returned from the drawer; visible `focus-visible` rings
      everywhere (the source cancels its own `.cl-btn:focus` ring — restore it);
      `Escape` closes the flyout and the drawer
- [ ] `prefers-reduced-motion: reduce` collapses the drawer `.2s`, the flyout `.2s`,
      the veil `.3s`, the arrow `.3s` and the button `.15s` transitions
- [ ] Shape language: **`4px`** on the CTA pair and **`50%`** on the drawer arrows
      only — square flyouts, square drawer, no pills anywhere
- [ ] Zero `colorlib` / "Website Menu 09" / `website-menu-09` strings in
      `apps/gangway` (comments included); none of the source's 17 labels, its "Brand"
      wordmark or its two flyout label sets reused
- [ ] No copied assets: no `style.css`, no `snippet.js`, no `quicksand-*.woff2`, no
      `icomoon-subset.woff2`, no `hero_1.jpg`, no inline SVG data URI, no `cl-`
      utility classes, no jQuery/Bootstrap
- [ ] Documented deltas recorded in the PR: new name + wordmark and own labels, the
      dropdowns promoted to real hover+click keyboard disclosures, a real `button`
      hamburger and focusable drawer arrows, a restored visible focus ring, focus
      management on drawer open/close, the drawer closing on destination choice, the
      `innerWidth > 768` resize rule normalised, the dead `Roboto` stack /
      `site-navbar-target` / `aligin-items-center` / `border-width-2` /
      nested-submenu / `600`-weight-font leftovers dropped, reduced-motion handling,
      the added hover/focus colour for inactive labels only if the source's
      half-white → white pair is kept as-is, and the added footer
- [ ] `scripts/verify-app.sh gangway` green (typecheck + lint + knip + fallow +
      vitest 100 % + build); `npm run spec:validate` green
- [ ] `public/CNAME` + `homepage` set; `package-lock.json` registers the workspace;
      footer attribution present
- [ ] Squash-merge the PR, then mark the TEMPLATES.md `Website Menu 09` item `[x]`
      with the live `https://gangway.free.componentdock.com` URL + homepage and run
      `npm run readme:status`

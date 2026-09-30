# Pitchside (ColorLib Specer) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-pitchside`. Recreation name: **Pitchside** (NEW
> name — the ColorLib source keeps its name "Specer").
>
> Full replication research (preview DOM skeleton, CSS tokens, screenshot
> analysis, section-by-section fidelity notes) lives in
> `design-notes.md` in this folder — read it first. The OpenSpec
> requirements are in `openspec/specs/template-pitchside/spec.md`.

## Quick facts

- **ColorLib item:** "Specer" (TEMPLATES.md line 2843, "## Sports (9)").
  Slug `specer` appears exactly ONCE in TEMPLATES.md.
- **Preview URL — REACHABLE (verified 2026-09-30):**
  `https://preview.colorlib.com/theme/specer/`
  (HTTP 200, 69,789 bytes, `<title>Specer | Template</title>`).
- **Preview CSS:** `css/style.css` (43,869 bytes).
- **Key tokens:** Roboto (300/400/500/700), brand red `#dd1515`, dark
  `#151618`, light `#f2f2f2`, sport tags `#0054a6`/`#e3ce1e`, social
  rows `#506eaa`/`#55acee`/`#dd4b39`.
- **Sections in DOM order:** Header (solid red bar) → Hero (700px,
  centered, red CTA) → Trending news strip → Match section (Next Match +
  Recent Results tables) → Soccer feed (4-up cards) → Latest News +
  Club Ranking sidebar → Hot Videos → Popular Post + Follow Us + Vote
  widget → Footer.
- **Naming check:** "pitchside" collides with nothing in `apps/` or
  `openspec/specs/` (verified 2026-09-30).

## Task outline (for the implementer)

- [ ] Scaffold `apps/pitchside` from the simplest existing app; package
      `@free-react-templates/pitchside`; CNAME
      `pitchside.free.componentdock.com`; homepage set; `npm install` at
      repo root (lockfile registration); `injectUiSource()` in
      `vite.config.ts`; copy the standard app layout
      (`main.tsx`/`App.tsx`/`components/`/`index.css`/`test/setup.ts`).
- [ ] `index.html`: Google Fonts Roboto 300/400/500/700 `<link>`.
- [ ] `src/index.css` `@theme` tokens: `--color-brand: #dd1515`,
      `--color-dark: #151618`, `--color-light: #f2f2f2`,
      `--color-muted: #636363`, `--color-meta: #ababab`, plus sport-tag
      (`#0054a6`, `#e3ce1e`) and social-row (`#506eaa`, `#55acee`,
      `#dd4b39`) variants.
- [ ] Components (TDD, one describe per component):
      - `Header` — solid #dd1515 bar; white ball-glyph wordmark
        "PITCHSIDE"; uppercase white links (Home, Club, Schedule,
        Results, Sport ▾, Pages ▾, Contact Us); white underline on
        hover/active; white dropdown panels (Blog, Blog Details);
        search icon button; mobile hamburger + panel (aria-expanded).
      - `Hero` — 700px, centered: picsum night-stadium photo + dark
        overlay, date line, headline, square #dd1515 "More Details"
        button (padding 14px 36px 12px, letter-spacing 1px).
      - `TrendingStrip` — #151618 bar, red 32% "Trending News" title
        block, headline slider (state-driven), square prev/next arrows
        (keyboard accessible).
      - `MatchSection` — dark low-poly picsum bg; two columns: "Next
        Match" (3 VS rows) + "Recent Results" (3 "1 : 2" rows); rows bg
        rgba(21,22,24,0.9); flag + team + center label/score/date.
      - `SoccerFeed` — 4× 405px cards; red top-left tags; bottom white
        titles + pipe meta.
      - `LatestNews` — red-bar title + filter pills (hover #dd1515); 5
        left-news cards (240px photo + red tag + #151618 title + red-icon
        meta + #636363 excerpt).
      - `ClubRanking` — "Club Ranking" heading + points table
        (Pos/Team/P/W/L/PTS with flag images).
      - `HotVideos` — dark section; cards with white top title +
        duration chip (rgba(0,0,0,0.7)); hover-revealed centered play
        button; state-driven modal (close button + Escape, aria).
      - `PopularPost` — 5× 240px overlay cards; sport-colored tags
        (red default / #0054a6 / #e3ce1e); white bottom titles.
      - `FollowUs` — 3 brand-colored social rows (#506eaa/#55acee/#dd4b39)
        with icon + name + fan count.
      - `VoteWidget` — 290px picsum bg; bold question; controlled radio
        options (14px white circle radios).
      - `Footer` — dark photo treatment; wordmark + description;
        circular social icons (aria-labels, hover #dd1515); "Top Club" +
        "Recent News" widgets; copyright bar with Component Dock link
        (https://www.componentdock.com/, branded "Component Dock").
- [ ] Images: all `picsum.photos/seed/pitchside-*` (see design-notes
      for the seed list); icons: lucide-react only (no Font Awesome);
      no jQuery/owl/magnific.
- [ ] Zero ColorLib/preview.colorlib.com strings anywhere in app files
      (comments included).
- [ ] Tests per component mirroring the spec's Gherkin scenarios;
      coverage 100% lines/functions/branches/statements;
      `scripts/verify-app.sh pitchside` green; PR `feat/template-pitchside`.

## Coordination notes

- Spec folder `openspec/specs/template-pitchside/` is this item's prep
  marker — implementers skip items whose spec folder exists on main.
- Do NOT touch `TEMPLATES.md` from the prep stream; the implementer
  flips `- [ ] **Specer**` → `[~]`/`[x]` with the surge URL at
  claim/ship time.
- Do NOT copy Striker's (Soccer) structure — the two sports templates
  differ (see "Differences" in design-notes.md).

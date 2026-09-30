# Matchday (ColorLib Sportsteam) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-matchday`. Recreation name: **Matchday** (NEW
> name — the ColorLib source keeps its name "Sportsteam").
>
> Full replication research (preview DOM skeleton, CSS tokens, screenshot
> analysis, section-by-section fidelity notes) lives in `design-notes.md`
> in this folder — read it first. The OpenSpec requirements are in
> `openspec/specs/template-matchday/spec.md`.

## Quick facts

- **ColorLib item:** "Sportsteam" (TEMPLATES.md line 2844, "## Sports (9)").
  Slug `sportsteam` appears exactly ONCE in TEMPLATES.md.
- **Preview URL — REACHABLE (verified 2026-09-30):**
  `https://preview.colorlib.com/theme/sportsteam/`
  (HTTP 200, 30,526 bytes, `<title>Sports Team</title>`).
- **Preview CSS:** `styles/main_styles.css` (27,889 bytes) +
  `styles/responsive.css` (6,807 bytes).
- **Key tokens:** Roboto (300/400/500/700/900), brand orange `#ffa54b`,
  navy `#161d4a` (header rgba(22,29,74,0.75)), list rows `#242b56`,
  footer `#0a1123`/`#070d1d`, news band `#d7d9e5`, LIVE `#ff0410`,
  VS `#d80033` + `#191339` stroke.
- **Sections in DOM order:** Fixed header (top bar + split nav around
  overhanging crest) → full-viewport hero slider (countdown chip + skewed
  team chips + giant VS + orange Next square) → breaking-news strip →
  latest results (white, mirrored score blocks) → navy events/games band →
  parallax milestone counters → player of the month (asymmetric photo
  overlap) → latest news grid (`#d7d9e5`) → orange CTA strip → dark footer
  with newsletter + Component Dock attribution.
- **Naming check:** "matchday" collides with nothing in `apps/` or
  `openspec/specs/` (verified 2026-09-30).

## Task outline (for the implementer)

- [ ] Scaffold `apps/matchday` from the simplest existing app; package
      `@free-react-templates/matchday`; CNAME
      `matchday.free.componentdock.com`; homepage set; `npm install` at
      repo root (lockfile registration); `injectUiSource()` in
      `vite.config.ts`; copy the standard app layout
- [ ] `@theme` tokens in `src/index.css`: brand `#ffa54b`, navy `#161d4a`,
      navy-deep `#0a1123`, bar `#070d1d`, row `#242b56`, mist `#d7d9e5`,
      live `#ff0410`, vs `#d80033`; Roboto 300–900 via Google Fonts
      `<link>` in `index.html`
- [ ] `Header.tsx` — fixed translucent navy + 3px orange bottom border;
      top bar (GET Tickets | Shop, LIVE badge + ticker, Sign up / Sign in);
      split nav around overhanging crest (own "MATCHDAY FC" badge — inline
      SVG or picsum, NOT the source tiger); scrolled compaction; mobile
      hamburger + staggered fullscreen menu (aria-expanded)
- [ ] `Hero.tsx` — full-viewport slider (React state, 2+ slides, picsum
      backgrounds + dark overlay); orange number chip + navy countdown
      chip ("N days until the next match"); skewed home/away chips +
      rotated outlined VS; orange 92px Next square (hover navy, keyboard
      focusable)
- [ ] `BreakingNews.tsx` — 78px strip: orange title block + navy rotating
      headline (state; aria-hidden on the rotating region)
- [ ] `LatestResults.tsx` — centered title/subtitle/league line; two
      mirrored blocks (picsum photo 262px, 72px score, team name, blurb)
      with thin vertical divider; orange "See More Info" button (navy
      fill-on-hover bar)
- [ ] `UpcomingLatest.tsx` — navy band, two columns: event rows (photo,
      title, date, See More) + game rows (crest | league · score · date |
      crest), all `#242b56` 110px strips with 3px gaps; decorative absolute
      player photo behind bottom-left
- [ ] `Milestones.tsx` — parallax band (picsum + dark overlay), 4 lucide
      counters (Team players, Trophies, Medals, Kicks/Match) counting up
      once in view (IntersectionObserver; cleanup on unmount)
- [ ] `PlayerOfMonth.tsx` — section title + subtitle; navy 71×71 number
      chip + 60px orange name; two bio paragraphs; two picsum photos
      bottom-anchored to the left half of the viewport (absolute,
      `calc(50vw + 55px)`, first with right margin)
- [ ] `LatestNews.tsx` — `#d7d9e5` band; 3 cards: picsum photo + white
      75×75 date badge (orange day + uppercase month) + title (hover
      orange) + excerpt; hover shadow `0 16px 38px rgba(9,9,9,0.33)`
- [ ] `CtaStrip.tsx` — orange bg + 1px white hairline borders; text with
      navy uppercase span ("FOOTBALL CLUB?"); navy button with white
      fill-on-hover
- [ ] `Footer.tsx` — `#0a1123`: crest + contact list (Address / Phone /
      E-mail, orange labels) + newsletter (navy input, orange Submit,
      italic disclaimer) + footer nav; `#070d1d` bar with copyright +
      Component Dock link; NO ColorLib references anywhere in the app
- [ ] TDD: tests mirroring the spec's Gherkin scenarios per component;
      `scripts/verify-app.sh matchday` green (typecheck + lint + 100%
      coverage + build)
- [ ] PR `feat/template-matchday` with source mapping, preview URL, design
      tokens, and placeholder-image notes in the description

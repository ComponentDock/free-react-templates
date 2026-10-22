# Quill (ColorLib Blogger) — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-quill` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Blogger" — blogging/magazine template
  (source: https://colorlib.com/wp/template/blogger/).
- **Preview analyzed (HTTP 200):** https://preview.colorlib.com/theme/blogger/
  — live DOM fetched, `css/main.css` parsed for tokens; screenshot
  `blogger-free-blogging-website-template.jpg` (in TEMPLATES.md) used as
  visual cross-check (river-cruise hero photo, white layout, blue accent).
- **Visual design:** clean light magazine/blog layout. White navbar with
  soft shadow + uppercase blue-hover links; full-screen photo hero with
  dark overlay and white bold headline; centered section titles with
  lorem subtext; black date chips; `#f9f9ff` alternating sections; dark
  `#222222` footer with newsletter + Instagram grid. Primary accent
  `#69B4FD` + brand gradient `#62bdfc → #8490ff` on buttons and hovers.
- **Structure (1:1, section order):**
  1. Navbar: logo ("Quill"), links Home / News / Travel / Fashion / Team /
     Pages (dropdown: Single, Category, Search, Archive, Generic,
     Elements), dark-mode toggle.
  2. Hero banner: fullscreen bg image + overlay, h1 "A Discount Toner
     Cartridge Is Better Than Ever.", bottom meta bar — left: "15 Likes" /
     "02 Comments"; right: avatar + "Mark wiens" + "12 Dec, 2017 11:21 am".
  3. Category area: "Latest News from all categories" + subtext; 3 cards
     (image, black date chip "Jan 2018", title); up/down carousel arrows
     on the right.
  4. Travel area (`#f9f9ff`): "Hot topics from Travel Section"; 2-col ×
     2-row media cards — date box (dark, big day number + "Jan 2018"),
     image, h4 title, meta-bottom (Comments).
  5. Fashion area: "Fashion News This Week"; 4-col grid (image, black date
     chip, title, meta) + Load More outline button.
  6. Team area (`#f9f9ff`): "About Blogger Team" + blurb; team cards with
     image hover overlay `rgba(105,180,253,0.7)` revealing uppercase name +
     role; name/role below image.
  7. Footer (`#222222`): "Top Products" links; Newsletter (rounded input,
     Subscribe pill button); Instagram feed 2×2 grid; footer-bottom:
     copyright + "made with Colorlib" + social chips (`#111111`, gradient
     hover).
- **Design tokens (from `css/main.css`):**
  - Font: **"Poppins", sans-serif** — body 300/14px/1.625em; headings
    600, `#222`.
  - Primary **#69B4FD**; brand gradient 45deg **#62bdfc → #8490ff**
    (primary-btn, overlay, footer-social hover, gradient-text hovers).
  - Body `#777` on `#fff`; alt section bg `#f9f9ff`; footer bg `#222222`;
    social chips `#111111`; date chips `#000`.
  - `.primary-btn`: pill (radius 25px), uppercase, 500, padding 30px/60px
    - arrow that slides right on hover. `.load-more`: outline, hover → 1px
      `#69B4FD` border + blue text.
  - Section padding 120px; centered titles + subtext.
- **Recreation name:** Quill (NEW name, differs from ColorLib "Blogger").
  App folder `apps/quill`, package `@free-react-templates/quill`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/quill-<n>/<w>/<h>`: hero 1920×1080, cards 800×600,
  team 400×500, insta 200×200); lucide-react icons (Heart, MessageCircle,
  ArrowRight, socials); Poppins via Google Fonts `<link>` in `index.html`;
  `#69B4FD` + gradient + `#f9f9ff` in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn). Remember:
  `vite.config.ts` MUST register `injectUiSource()`.

## Tasks

- [x] Write `openspec/specs/template-quill/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above, incl. newsletter form
      validation).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/quill` (copy a section-rich landing app pattern, e.g.
      Aurora; rename package to `@free-react-templates/quill`; run
      `npm install` at root so `package-lock.json` registers it).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage: Navbar (with Pages
      dropdown), Hero, Category (3 cards + carousel controls), Travel
      (2×2 media cards), Fashion (4 cards + Load More), Team (hover
      overlay), Footer (newsletter form validation).
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow
      → spec:validate (or `scripts/verify-app.sh quill` in FAST_MODE).
- [ ] Push `feat/template-quill`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL
      (https://quill.free.componentdock.com) + homepage; run
      `npm run readme:status`; push.

## Reference re-verification — 2026-10-22 (prep stream)

The spec now exists: `openspec/specs/template-quill/spec.md` (written after the app
shipped — `quill` was one of the 10 TEMPLATES.md rows that never produced a spec).
What changed since the notes above were written:

- **The preview was rebuilt by ColorLib.** `https://preview.colorlib.com/theme/blogger/`
  now serves a 2026 refresh: Bootstrap **5.3.8**, extra `css/modern.min.css` overrides,
  plus `kit/*.min.css` helpers. Copy was rewritten ("A slower morning beside the Danube.",
  eyebrow chips, footer "Join the list" form, `© 2026 Blogger`), and the page title is
  now `Travel, style & everyday curiosity | Blogger`.
- **The skeleton is unchanged.** Live DOM still exposes `section#home.banner-area`,
  `section#news.category-area`, `section#travel.travel-area`,
  `section#fashion.fashion-area`, `section#team.team-area`, `footer.footer-area` — the
  same six bands + navbar this app implements. Section order is 1:1.
- **Tokens are still authoritative in `css/main.min.css`** (42,109 B): Poppins 300 /
  14 px / 1.625em body on `#777`; `#69b4fd` (35 declarations), `#222` (40), `#f9f9ff`
  (35), `#eee` (15), `#111` chips, `45deg` gradient `#62bdfc → #8490ff` (6);
  `.primary-btn` pill radius `25px` (`padding: 0 60px 0 30px`, uppercase 500);
  `.load-more` outline → `1px solid #69B4FD` hover; `.section-gap` 120 px;
  `.team-area` `#f9f9ff` with `#69b4fdb3` hover overlay; `.footer-area` `#222`
  (`padding-top: 100px`); newsletter input radius `20px`.
- **Fetching gotcha:** `preview.colorlib.com` (and `colorlib.com`) are reachable only
  over **IPv4** from this host — plain `curl` stalls on IPv6, so use `curl -4`.
- No app code change is implied: `apps/quill` already matches the classic build
  (hero copy "A Discount Toner Cartridge Is Better Than Ever.", Poppins, `#69b4fd`
  palette). The 2026 live copy is recorded in the spec as the live variant only.

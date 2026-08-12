# Vocare (ColorLib Skillhunt) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-vocare`.

## Design notes (replication findings)

- **Original:** ColorLib "Skillhunt" —
  `https://colorlib.com/wp/template/skillhunt/` (Job Board Template).
  TEMPLATES.md lines **496, 1166, 2005** — THREE duplicate rows, all
  `- [ ]`; mark ALL THREE `[x]` when done. Recreation uses the NEW name
  **Vocare** (Latin "to call" — apt for a job board; single word, no
  collision with `ls apps/` or spec folders; "vocare" appears nowhere in
  TEMPLATES.md).
- **Preview URL:** `https://preview.colorlib.com/theme/skillhunt/` — **HTTP
  200** (55.7 KB), analyzed live in a browser (structure, computed styles).
  Stylesheet: `css/style.css` (81.7 KB: bootstrap 4 + custom ftco rules).
  Font **"Source Sans Pro"** (300/400/600/700) loaded via inline cf-fonts
  `@font-face` in the head — recreate with a Google Fonts `<link>`.
- **Screenshot / visual design** (`skillhunt-free-template.jpg`, verified via
  browser vision): white navbar links + blue "Post a Job" + orange "Want a
  Job" pills over a blue→purple gradient hero (faint blurred laptop photo);
  white headline + 3 stat counters; white search bar with Find a Job (white)
  / Find a Candidate (orange) tabs and a blue Search button; 6 white category
  cards overlapping the hero bottom (2nd card orange/active); "JOB
  CATEGORIES" subheading below. Colorful corporate-recruitment aesthetic.
- **Sections (from the live DOM, in order):** transparent navbar (absolute
  over hero; scrolled → fixed white) → gradient hero (lead line + h1 +
  3 counters + tabbed search widget) → 6-card overlapping top-category strip
  → Top Categories (4×4 list) → gradient services band (4 cards) → Featured
  Jobs (9 stacked job-post cards on `#f8f9fa`) → Testimonials (5 cards) →
  Latest Candidates (6 cards on `#206dfb`) → Blog (4 cards on `#f8f9fa`) →
  Newsletter band (solid `#206dfb`, orange Subscribe) → white footer (4
  widget columns + Have a Questions? + copyright).
- **Notable quirks:**
  - The footer is **WHITE on the live page** — `.ftco-bg-dark {#3c312e}`
    (line 2559) is overridden by the later `.ftco-footer {background:#fff}`
    (line 2562; same specificity). Verified via computed styles. Do NOT
    build a dark footer.
  - Original typos to fix in the recreation (note in PR): "Eassiest" →
    Easiest, "Canditates" → Candidates, "Subcribe" → Subscribe, "Garphic" →
    Graphic (placeholder).
  - Testimonials, candidates and featured jobs are owl carousels in the
    original — the recreation can render them as static grids/rows (simpler,
    same visual).
  - All card links point to `#` / dead pages — render as non-navigating
    elements or `href="#"` anchors.
  - The original counter numbers animate on load (jquery.animateNumber,
    `data-number` 46 / 450 / 80000) — render the final values statically.
  - Navbar CTA buttons: "Post a Job" = `#206dfb`, "Want a Job" = `#fdab44`.
  - Lucide has no brand icons (Facebook/Twitter/Instagram) — footer social
    circles need inline SVG brand paths.
- **Tokens:** brand `#206dfb`; gradient `#207dff → #a16ae8` (hero overlay +
  services band); accent `#fdab44` (Want a Job, inactive tab, active
  category card, numbers, newsletter submit); peach `#ffefdb` (category
  borders/hover bg, heart circle); `#fffaf5` (number badges); `#f8f9fa`
  (light sections); footer white with `rgba(0,0,0,…)` text; body text
  `#999999`, headings black; font Source Sans Pro; buttons radius 5px;
  sections `padding: 6em 0`.

## Build order (implementer)

1. **Scaffold** — copy the simplest existing app (e.g. `apps/altruist`),
   rename package to `@free-react-templates/vocare`, add Google Fonts
   Source Sans Pro 300/400/600/700 link, set `@theme` tokens:
   `--color-brand: #206dfb`, `--color-accent: #fdab44`,
   `--color-peach: #ffefdb`, `--color-cream: #fffaf5`,
   `--color-mist: #f8f9fa`.
2. **Navbar** — absolute over hero (top 20px), transparent; brand "Vocare"
   white; links Home(active)/Browse Jobs/Candidates/Blog/Contact (hover
   `#fdab44`); CTAs "Post a Job" (`#206dfb`) + "Want a Job" (`#fdab44`),
   radius 5px. Scroll handler → fixed white + shadow, active link `#206dfb`.
   Mobile: solid black bg, collapsed menu with the same links (white
   `rgba(255,255,255,0.7)`).
3. **Hero** — 800px (900px ≤991px) section, bg image
   (`picsum vocare-hero`) under `rgba(0,0,0,.8)` + gradient overlay
   `#207dff → #a16ae8`; centered lead + h1 "The Easiest Way to Get Your New
   Job" (54px white, 40px mobile); 3 counters (icon + 30px white number +
   label: 46 Countries / 450 Companies / 80000 Active Employees).
4. **Search widget** — two tabs (Find a Job active white / Find a Candidate
   `#fdab44`); form 1: keyword (placeholder "eg. Graphic, Web Developer",
   briefcase icon), category select, location (map-pin), blue Search; form 2:
   name ("eg. Adam Scott", user icon), category select, location, Search.
   Inputs white, border `rgba(0,0,0,0.1)`, 14px, padding-left 30px, icons
   `#d9d9d9`. Forms must not navigate (preventDefault).
5. **Top category strip** — white `category-wrap`, `margin-top: -70px`
   (≥992px), shadow `0 3px 14px -4px rgba(0,0,0,0.1)`; 6 cards (icon 40px
   `#206dfb`, h3 20px, "143 Open position"); 2nd card `.active` orange
   `#fdab44` with white text/icon; hover → `#206dfb`.
6. **Top Categories** — centered subheading "Job Categories" (12px
   uppercase `#206dfb` ls 2px) + h2 "Top Categories" (38px); 4 columns × 4
   rows from the spec's list (16 categories with counts); row: name 22px
   `#1a1a1a`, border-bottom `#ffefdb`, orange count badge on `#fffaf5`,
   arrow `#fdab44` on hover; hover → `#206dfb` text on `#ffefdb`.
7. **Services** — gradient `#207dff → #a16ae8` band; 4 cards (icon 60px
   white + h3 18px 700 white + gray-white p) with the spec's titles.
8. **Featured jobs** — `bg-light #f8f9fa`; subheading "Recently Added Jobs"
   - h2 "Featured Jobs Posts For This Week"; 9 white cards (badge + 28px
     title + company + "Western City, UK" + heart circle `#ffefdb` + blue
     "Apply Job"); use the spec's badge/company/title pattern.
9. **Testimonials** — subheading "Testimonial" + h2 "Happy Clients"; 5 white
   cards (quote, 80px circle photo, name 20px, position `#cccccc`).
10. **Latest candidates** — `#206dfb` band; subheading "Candidates" + h2
    "Latest Candidates" white; 6 cards (180px circle photo, name 20px white,
    uppercase location).
11. **Blog** — `bg-light`; subheading "Our Blog" + h2 "Recent Blog"; 4 cards
    (250px cover image, meta date/Admin/comments, 18px title).
12. **Newsletter** — solid `#206dfb` band (4em padding), white h2 "Subscribe
    to our Newsletter" + short paragraph; white email input (radius
    `5px 0 0 5px`) + orange `#fdab44` "Subscribe" (radius `0 5px 5px 0`).
13. **Footer** — WHITE bg, 4 widget columns + "Have a Questions?" contact
    widget (address / phone / email) + centered copyright row with the
    Component Dock credit link. Brand column "Vocare Jobboard" + 3 circular
    social icons (inline SVG, bg `rgba(0,0,0,0.05)`, icon `#206dfb`).
14. **Seed screening (IMPORTANT)** — picsum seeds: hero
    (`seed/vocare-hero/1600/900` — needs a work/tech-friendly scene),
    testimonial + candidate headshots (`vocare-t1..5`, `vocare-c1..6` —
    portrait orientation), blog images (`vocare-b1..4` — office/tech
    subjects). Verify each renders a suitable subject (per
    docs/replication.md: curl + pixel metric, then browser-verify top
    picks); pin verified seeds and record the map in the PR.
15. **Tests** — one `describe` per component mirroring the spec scenarios
    (navbar render + scroll + mobile, hero + counters + tab switching, top
    strip active card, categories 16 rows, services 4 cards, jobs 9 cards,
    testimonials 5, candidates 6, blog 4, newsletter, footer + Component
    Dock link, page composition + document title); 100% coverage enforced.

## Fidelity calls for the implementer

- **Carousels:** original testimonials/candidates/featured jobs are owl
  carousels (draggable). Rendering them as static rows is an acceptable
  fidelity call — note it in the PR. If implementing a carousel, use a
  lightweight custom scroll/snap or a small lib; prefer no new dependency.
- **Counter animation:** original animates 0 → 46/450/80000 on load. Static
  final values are fine; a small `useEffect` count-up is a nice-to-have.
- **Search forms:** original submits to `#` (no backend). preventDefault and
  optionally show a client-side "no results" note; keep inputs accessible
  (labels via aria-label or visible labels).
- **Typos:** fix "Eassiest/Canditates/Subcribe/Garphic" in the recreation
  (documented deviation).
- **Footer social icons:** lucide-react has no brand icons — use inline SVG
  brand paths (simple-icons style) in the 40px circles.
- **Navbar scroll behavior:** the `scrolled` class is JS-driven; implement
  with a `useEffect` scroll listener (cleanup on unmount), toggle fixed +
  white bg + shadow.
- **Picsum hero seed:** pick a seed that provably renders a work/laptop/
  office scene (per the seed-screening method in
  `skills/research/colorlib-template-replication`) — the original bg_1.jpg
  is a blurred hands-on-laptop photo under the gradient.

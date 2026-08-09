# Caritas (ColorLib Amor) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Caritas** (NEW name —
> the ColorLib source keeps its name "Amor"). Implementation ships on
> `feat/template-caritas` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Amor" — free charity / non-profit website template
  (source: https://colorlib.com/wp/template/amor/). TEMPLATES.md row: line
  331, **Bootstrap (216)** category. Note: the preview page `<title>` is
  "Charity" and the source folder is `183_Charity_html` — it IS a charity
  theme despite the "Amor" name.
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-09):**
  `https://preview.colorlib.com/theme/amor/` (HTTP 200, 36KB) + stylesheet
  `css/style.css` (181KB). Screenshot (`amor-free-template.jpg`, 1200×946)
  browser-verified 2026-08-09.
- **Structure observed (1:1):** navbar (logo left; nav Home / about / Causes /
  Pages ▾ [Event, Elements] / blog ▾ [blog, Single blog] / Contact; purple
  "learn more" right) → hero `.banner_part` (photo bg `banner_img.png`,
  height 950px; centered H1 "Help The Children in Need" 80px white + lorem +
  white "Start Donation" `.btn_2`; below it `.banner_video` thumbnail
  `banner_video.png` with centered play button) → `.service_part` (left H2
  "We are CharityPress Funding Network Worldwide."; right 2×2 grid of 4 icon
  boxes: Donation / Adopt A Child / Become A Volunteer / Donation, each icon +
  H4 + lorem + colored link) → `.about_us` (left `about_us_img` w/ "2000
  since" badge; right H2 "About Believe" + Frost & Sullivan lorem + 3
  counters 50k/25k/100k Total Volunteer / Successed Mission / Total
  Collection; centered `.btn_3` "learn more" below) → `.passion_part` ("Our
  Causes"; 3 cards: photo + icon + 75% skill bar + H5 + "read more") →
  `.intro_video_bg` (photo `intro_video_bg.png` height 480px + purple
  gradient overlay opacity 0.7; white H2 "Please raise your hand & Save
  world" + "Become a Volunteer") → `.event_part` ("Upcoming Event"; 4
  `.single_event` rows bg #fafafa radius 46px: thumb + H5 "Volunteeer Idea
  2020" + "Seed the life upon you are creat.") → `.blog_part` ("Blog Post"; 3
  cards: photo + H4 + meta + read-more) → `.client_part` ("Who Donate us" +
  one-liner + 5-logo owl-carousel) → `.footer_part` bg #faf4ff (4 cols:
  footer logo + tagline + Working Hours Mon–Fri 8AM–6PM / Sat–Sun 8AM–12PM +
  socials; "Causes" links list; "our Gallery" 8-image grid; "Newsletter"
  email form) + copyright bar.
- **Design tokens:** brand purple **#8d00ff** (button text/borders); signature
  gradient **#7f00ff → #e100ff → #7f00ff** (filled buttons + hovers);
  secondary gradient **#9300ff → #d500ff** (CTA overlay, opacity 0.7);
  headings **#060606**; cards **#fafafa**; footer **#faf4ff**; font **Roboto**
  (300/400/500/700) for body AND headings (Playfair Display is imported by
  the original but unused — h1–h6 resolve to Roboto); `.btn_2` = white bg +
  purple text/border, asymmetric radius (border-bottom-right 20px +
  border-top-left 20px), uppercase 700 16px padding 13.5px 40px, hover →
  gradient fill white text; `.btn_3` = gradient fill + white text, same
  radius, hover flips corners; cards radius 50px 0 50px 0; event rows 46px
  top-left/bottom-right; `.section_padding` 140px 0 (70px mobile); hero
  height 950px.
- **Design approach:** purple/magenta gradient charity theme. Paraphrase the
  original's lorem + quirky copy ("Volunteeer Idea 2020" → "Volunteer Idea
  2020", "Successed Mission" → "Successful Mission", "Who Donate us" →
  "Who Donated to Us" style) while keeping the same content kinds. Photo
  backdrops for hero + CTA band; lavender footer.
- **Placeholders:** seeded picsum — `caritas-hero` (1920/950),
  `caritas-video` (800/500), `caritas-about` (700/600), `caritas-cause-<n>`
  (n 1..3, 600/400), `caritas-event-<n>` (n 1..4, 220/160),
  `caritas-blog-<n>` (n 1..3, 600/400), `caritas-gallery-<n>` (n 1..8,
  200/200). Client logos = styled text wordmarks (or seeded picsum).
- **Icons:** lucide-react — `HeartHandshake`, `Baby`, `HandHeart`/`Heart`,
  `HandCoins`, `Play`, `Calendar`, `Users`, `Clock`, `Mail`, `ArrowRight`,
  `Facebook`, `Twitter`, `Globe`, `Linkedin` (Behance substitute),
  `ChevronDown` (nav dropdowns).

## Implementation tasks

1. **Scaffold** — `apps/caritas` from the simplest existing app; rename
   package to `@free-react-templates/caritas`; register in root
   `package.json` workspaces + lockfile (implementer handles lockfile, prep
   never touches it).
2. **Theme tokens** — add `#8d00ff` / `#7f00ff` / `#e100ff` / `#d500ff` /
   `#9300ff` / `#fafafa` / `#faf4ff` / `#060606` to `@theme`; Roboto `<link>`
   in `index.html`.
3. **Components** (per section, TDD — tests first):
   - `Header` — logo, nav w/ Pages + blog dropdowns, learn-more button,
     mobile toggle (`aria-expanded`).
   - `Hero` — photo + purple overlay, H1, Start Donation btn, video play
     block.
   - `Services` — H2 + 4 icon boxes (2×2 grid).
   - `About` — since badge + H2 + counters (count-up on scroll) +
     learn-more btn.
   - `Causes` — 3 cards w/ 75% progress bars.
   - `CtaBand` — photo + overlay, white H2 + Become a Volunteer btn.
   - `Events` — 4 rows (thumb + title + desc).
   - `BlogSection` — 3 cards.
   - `Clients` — "Who Donate us" + 5 logo placeholders.
   - `Footer` — 4 columns + newsletter form (inline validation) +
     copyright.
4. **Compose** `App`/page in reference order.
5. **Verify** — `scripts/verify-app.sh caritas` (typecheck + lint + vitest
   100% coverage + build), then PR → immediate squash merge per pipeline.
6. **Ship bookkeeping** — mark Amor `[~]`→`[x]` (line 331) + surge URL +
   `npm run readme:status`; PR description must list source template,
   preview URL, tokens, paraphrases, placeholder images.

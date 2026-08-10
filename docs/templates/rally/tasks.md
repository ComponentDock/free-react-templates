# Rally (ColorLib "Eventure") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-rally` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Eventure" — event/conference template
  (source: https://colorlib.com/wp/template/eventure/). Listed in
  TEMPLATES.md (Bootstrap section, line 389; duplicate at line 1681 in the
  Event section — mark EVERY copy `[x]` when done).
- **Live preview:** https://preview.colorlib.com/theme/eventure/ — reachable.
  HTML saved at `/tmp/eventure.html` (27.6 KB), stylesheet at
  `/tmp/eventure-style.css` (73 KB). Screenshot `eventure-free-template.jpg`
  (1200×946) reviewed via browser vision: dark crowd-photo hero, white
  headline, white countdown strip, purple accents.
- **Brand:** purple-gradient conference site. Demo brand "Eventure"
  ("International Digital Business Event").
- **Fonts:** Heebo (headings — 36px bold uppercase section titles, timer
  numbers, footer titles) + Roboto (body, buttons 500 13px, timer labels
  14px).

### Design tokens

| Token        | Value                                 | Used for                                                  |
| ------------ | ------------------------------------- | --------------------------------------------------------- |
| gradient-a   | `#141da2`                             | nav bar, schedule tab bar, price button gradient start    |
| gradient-b   | `#9b5cf6`                             | gradient end (same as CTA gradient mid stop)              |
| cta-start    | `#2c28b1`                             | primary CTA / Get Tickets gradient start + mid-stop reuse |
| accent       | `#6247ea`                             | price-card hover border, hover price color, link accents  |
| cyan         | `#4cd3e3`                             | secondary accent (icon/social hover)                      |
| blue         | `#38a4ff`                             | secondary accent                                          |
| yellow       | `#f4e700` / `#f8b600`                 | secondary accent (gold)                                   |
| heading      | `#222222`                             | headings, timer numbers, nav text                         |
| body         | `#777777`                             | paragraphs, timer labels, meta                            |
| section bg   | `#f9f9ff` (team), `#fafcff` (pricing) | section backgrounds                                       |
| footer       | `#04091e`                             | dark navy footer                                          |
| ghost border | `#7a8186`                             | hero ghost button border                                  |

### Buttons

- **Ghost (hero):** `rgba(255,255,255,0.1)` bg, 1px `#7a8186` border,
  5px radius, `padding: 0 30px; line-height: 50px`, Roboto 500 13px white.
- **Primary / Get Tickets:** `linear-gradient(to right, #2c28b1 0%, #9b5cf6
51%, #2c28b1 100%)`, `background-size: 200% auto` (animated slide on
  hover), `padding: 0 35px; line-height: 50px`, 5px radius, Roboto 500 13px.
- **Pricing:** `linear-gradient(0deg, #141da2 0%, #9b5cf6 100%)`,
  `border-bottom-left/right-radius: 10px`, `line-height: 50px`, Roboto 500
  12px; default `opacity: 0; margin-bottom: -50px` → `opacity: 1` on card
  hover.

### Section-by-section fidelity notes (in DOM order)

1. **Header** (`header_area` + `.main_menu`): absolute over hero →
   fixed purple gradient bar on scroll (translateY slide). White wordmark
   left (recreate as styled text — asset `img/logo.png` NOT copied).
   Uppercase links HOME · ABOUT · SPEAKERS · PAGES · SCHEDULE · VENUE ·
   PRICING · ELEMENTS · BLOG (`.nav-item { margin-right: 45px }`). Right:
   "Get Tickets" gradient CTA (`.tickets_btn`, `margin-left: 195px`) +
   search icon (lucide `Search`). Mobile hamburger + stacked panel with
   aria-expanded. Inner pages (Blog / Blog Details / Elements / Contact)
   NOT recreated — dead anchors `#` ok.
2. **Hero** (`home_banner_area`): `min-height: 900px`, flex center,
   full-bleed photo bg + dark overlay. Eyebrow line → h1 uppercase white
   "International Digital Business Event" → lorem p → ghost "View More
   Details" button. (Screenshot: crowd photo, hands raised.)
3. **Countdown** (`event_time_area`): white card overlapping hero bottom
   (`margin-top: -90px`, `max-width: 944px`, radius 5, shadow
   `0 8px 30px 0 rgba(153,153,153,0.1)`, `padding: 45px 0 50px`). Left
   `.event_text` (h3 "Next Event will Start in" + p, `padding-left: 65px`);
   right 4× 25% `.timer__section` columns: number 36px Heebo bold `#222`,
   label 14px Roboto `#777` capitalized. IMPLEMENTATION: live ticking
   countdown to a fixed future date (setInterval + cleanup; wrap updates in
   act() in tests).
4. **Welcome** (`welcome_area.pad_btm`): photo left (`welcome-1.jpg` →
   picsum), right: h2 "Welcome to Rally", 2 paragraphs, "View More Details"
   link with purple hover.
5. **Speakers** (`team_area.p_120`, bg `#f9f9ff`): centered `.main_title`
   (h2 36px Heebo bold `#222` uppercase + lorem p `#777`, mb 75px), 4-up
   `.team_item` grid. Card: `.team_img` photo (dark `:before` overlay
   opacity 0→1 on hover) + white `.hover` social bar slides `bottom: -70px →
0` on hover; name h4 + role p below; name → gradient text
   `#2c28b1 → #9b5cf6` on hover. Names: Ethel Davis — Managing Director
   (Sales) ×4 (vary names/roles for realism).
6. **Schedule** (`event_schedule_area.p_120`): title "Event Schedule";
   gradient tab bar (`#141da2 → #9b5cf6`, radius 5, overflow hidden) with
   Day 01 / 02 / 03 tabs. Panels: `.media` rows = thumbnail
   (`schedule-1.jpg` → picsum seed) + h5 time "09.00 am" + h4 talk title
   ("Opening Ceremony", etc.) + p "Speech by: Mark weins". ~12 rows per day
   in the original; 4–6 realistic rows per day is fine.
7. **Venue/Map** (`home_map_area`): info block — h3 "California, United
   States", p "Santa monica bullevard", rows "Monday to Wednesday" /
   "17-19 June, 218", "support@colorlib.com" / "Send us your query
   anytime!"; map panel ~420px (OpenStreetMap iframe or styled placeholder).
8. **Pricing** (`price_area.p_120`, bg `#fafcff`): title "Ticket Pricing";
   4 `.price_item` cards: Basic/£39 · Starter/£59 · Business/£79 ·
   Enterprise/£99, subtitle (Individuals/Freelancers, Small/Medium/Large
   Companies). `.price_text` padding 75px 45px; price h2 36px gradient text
   (background-clip) + `span "/mo"` 14px Roboto 300 `#777`. Feature rows:
   RAM 1–8 GB · Core CPU 1–8 · SSD Storage 20–100 GB · Transfer 1–2 TB ·
   Network In 40–100 Gb. Hover: card border `#6247ea`, price + span
   `#6247ea`, gradient `.price_btn` "Get Started" slides up (opacity 0→1).
9. **Footer** (`footer-area`, bg `#04091e`): 4 columns —
   1. Top Products (Managed Website · Manage Reputation · Power Tools ·
      Marketing Service), 2) Newsletter ("You can trust us. we only send promo
      offers, not a single spam." + email input + subscribe button with
      validation), 3) Instagram Feed (8-thumbnail flex grid), 4) social icons.
      `.footer_title` 18px Heebo bold uppercase white mb 28px. Bottom bar:
      "© 2026 Rally. All rights reserved." + reworded "Made with ❤" line (no
      ColorLib credit).

### Implementation task list

- [ ] Scaffold `apps/rally` (copy simplest existing app; package
      `@free-react-templates/rally`; `npm install` at root so the lockfile
      registers the workspace; grep -c in package-lock.json).
- [ ] Spec → tests (red) → components (green), 100% coverage.
- [ ] `index.html`: Google Fonts `<link>` for Heebo + Roboto; title "Rally —
      Event Template".
- [ ] `index.css` `@theme`: tokens above (gradient stops, accent, section
      bgs, footer, font families).
- [ ] Components: `Header` (scroll-aware gradient bar, hamburger), `Hero`,
      `Countdown` (live timer), `Welcome`, `Speakers`, `Schedule` (tabbed),
      `Venue` (map placeholder), `Pricing` (hover reveal), `Footer`
      (newsletter validation, instagram grid, socials).
- [ ] Images: `picsum.photos/seed/rally-<n>/<w>/<h>` (banner, welcome,
      speakers ×4, schedule thumbs, instagram ×8); lucide-react icons.
- [ ] Responsive: 320px → 1920px (grids stack, countdown card stacks,
      mobile menu).
- [ ] `scripts/verify-app.sh rally` (typecheck + lint + coverage + build).
- [ ] PR: branch `feat/template-rally`, description with source template,
      preview URL, tokens, what differs; merge immediately
      (`gh pr merge --squash --delete-branch`).
- [ ] Post-merge: mark BOTH TEMPLATES.md rows (389 + 1681) `[x]` with
      surge URL + homepage, `npm run readme:status`, push.

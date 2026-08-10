# Ripply (ColorLib "Drimo") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-ripply` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Drimo" — Free Unique Landing Page Website
  Template (source: https://colorlib.com/wp/template/drimo/). Listed in
  TEMPLATES.md under **Bootstrap (216)** (line 378; duplicate rows at
  line 982 under Business (365), line 1462 under Creative (55), line
  2037 under Landing Page (96) and line 2232 under Medical (32) — same
  template, one app only).
- **Preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/drimo/`. DOM fetched
  (`/tmp/drimo-preview.html`, 11.5 KB portal) + main demo
  (`/tmp/drimo-demo.html`, 57.6 KB, `drimo/index.html`) + stylesheets
  (portal `css/style.css` 6.9 KB; demo `drimo/css/style.css` 312 KB
  bundled) + screenshot (`drimo-free-multi-purpose-template.jpg`,
  1200×946, viewed in browser). All references verified live.
- **Portal vs. demo:** `/theme/drimo/` is a demo-gallery portal (hero
  with typed subtitles + "Home onepage Demos" 11-item grid + "Drimo
  Blog Page Demos" 4-item grid + footer). The flagship template page is
  `drimo/index.html` — "Drimo - App Landing Page Template" (OnePage -
  01). **Build the main demo 1:1**, not the portal gallery.
- **Visual design:** soft-pastel app-landing one-pager. Hero: smooth
  lavender → sky-blue gradient (dotted circle outlines), giant white
  wordmark, white pill buttons, diagonal slashed bottom edge (portal
  screenshot); the demo hero is a full-cover slider with the "OnTouch"
  wordmark + white "SIGN UP" pills + water-ripple effect. Signature
  gradient family `#d6c3fc → #acc4fc → #98c5fc` (purple → blue);
  light-periwinkle `#EFF1FF` for choose-us / pricing / FAQ / footer /
  video bands; install band on light gradient `#ede6fd → #d2e6fd`;
  Poppins body, Montserrat buttons/prices.
- **Structure (1:1 from drimo/index.html):**
  1. Header `header.main_header_area` → `nav.navbar.navbar-default`
     (transparent): logo image → text wordmark "Ripply"; right-aligned
     uppercase Poppins 14px `#424242` links — Home (active), FETURES,
     About, SCREENSHOT, Price, Blog, Contact + search icon; hover =
     gradient pill (`#d6c3fc→#acc4fc→#98c5fc`) + white rounded fill
     (radius 13px); mobile burger.
  2. Hero `section.main_slider_area` → Revolution slider → recreate as
     simple accessible carousel or static hero: cover bg image
     (`slider-1.png`), giant white wordmark "OnTouch", white pill
     `slider_btn` "SIGN UP" (radius 23.5px, Poppins 16px, #6b6d6f,
     shadow `0 4px 12.35px 0.65px rgba(0,0,0,0.09)`); 2 slider layers
     in DOM.
  3. Features `section.app_feature_area#feature` (white, 100px 0):
     "POWERFUL APPS FETURES" + 5 icon cards ("Unique Design" ×5 in
     DOM — vary titles).
  4. Choose us `section.choose_us_area` (`#EFF1FF`, min-height 770px,
     margin-top 90px): "WHY CHOOSE US ?" + 4 items (Top Rated, Fetured
     App, Easy To Share, Best Apps).
  5. Satisfaction `section.satisfaction_area#about` (padding 100px 0
     0): "AIM CLIENT SATISFACTION" + 3 bullets (Easy To Use, 24/7
     Support, Well Documentation) + testimonial "Mr. Jonathon Smith".
  6. Video `section.video_area` (`#EFF1FF`, margin-top 350px): video
     thumbnail + play button.
  7. Install app `section.install_app_area` (gradient `#ede6fd →
#d2e6fd`): "NOW INSTALL AVAILABLE ON" + "Create Your Apps
     Galary" + 2 paragraphs + `gradient_bg_btn` "Android" (200×55,
     radius 27.5px, Montserrat 18px) + `gradient_bor_btn` "App Store".
  8. Screenshots `section.app_screen_area#screenshot` (white, padding
     100px 0 240px): phone-frame screenshot carousel/grid.
  9. Pricing `section.price_table_area#price` (`#EFF1FF`, 100px 0):
     "PRICING TABLE"; 3 white cards `price_item` (BASIC $00 / PREMIUM
     $50 / EXCLUSIVE $90): `price_header` `#d8cafc` (featured middle
     card: gradient `#dacafc→#9bccfc`), plan pill (white, radius
     17.5px), price Montserrat 50px bold white, "/month" 18px 300; 4
     features each (Poppins 14px #6b6d6f: Free Useable, Easily Can
     Useable 10GB, Free Secuirity Service, Dedicated Useable Account);
     `price_btn` "PURCHASE NOW" (gradient `#dacafc→#9bccfc`, radius
     17.5px, 14px uppercase); middle card featured (shadow `0 0 20px
rgba(0,0,0,0.14)`, padding-bottom 60px).
  10. Team `section.team_members_area` (white, 100px 0): "TEAM MEMBER"
      - 4 cards (photo, name e.g. "ROBERTO PE", role — vary).
  11. FAQ `section.question_area` (`#EFF1FF`, 100px 0): "FREE QUENTLY
      ASKED QUESTION" (typo — fix to "FREQUENTLY ASKED QUESTION") + 4
      accordion items (same lorem question ×4 in DOM — vary).
  12. Blog `section.latest_blog_area#blog` (white, 100px 0): "LATEST
      NEWS FROM BLOG" + 2 cards ("Ontouch App news from blog", "On
      Graphics Design Post").
  13. Footer `footer.footer_area#contact` (`#EFF1FF`, margin-top
      100px): `subscrib_area` — "SUBSCRIPTION NOW" + email input-group
      - "SEND" button; widgets — "App Home" (Home, About, Features,
        Price, Screenshot, Download), "Support" (FAQ, Help, Offer,
        Contact), "Contact Us" form (name, phone, email, subject,
        message, full-width "SEND NOW").

## Implementation tasks (for the implementer stream)

1. Scaffold `apps/ripply` from the simplest existing app; rename
   package to `@free-react-templates/ripply`; register
   `injectUiSource()` in `vite.config.ts`.
2. TDD: write Vitest + Testing Library tests first (100% coverage
   enforced) for each section, then implement:
   - Header/navbar (wordmark, links, hover pill, mobile menu)
   - Hero (wordmark, subtitle, SIGN UP pills; carousel controls if
     slider)
   - Features (5 icon cards)
   - Choose us (4 items, #EFF1FF)
   - Satisfaction (3 bullets + testimonial)
   - Video panel
   - Install band (Android/App Store pills, gradient bg)
   - Screenshots (phone-frame panels)
   - Pricing (3 cards, featured middle)
   - Team (4 cards)
   - FAQ accordion (4 items)
   - Blog (2 cards)
   - Footer (subscription + widgets + contact form)
3. Styling: Tailwind v4 `@theme` tokens — brand gradient
   `linear-gradient(to right, #d6c3fc, #acc4fc, #98c5fc)`, price
   gradient `#dacafc → #9bccfc`, install gradient `#ede6fd →
#d2e6fd`, section bg `#EFF1FF`, price header `#d8cafc`, text
   `#424242` / `#6b6d6f`; Google Fonts Poppins + Montserrat.
4. Images: seeded picsum (`picsum.photos/seed/ripply-<n>/<w>/<h>`);
   icons from lucide-react; logo = text wordmark.
5. Run `bash scripts/verify-app.sh ripply` (typecheck + lint + knip +
   fallow + 100% coverage tests + build). Fix root causes, re-run.
6. Visual QA: `npx vite preview` + browser, compare against the
   reference (preview DOM/CSS + screenshot) — section order, gradient
   language, pill buttons, spacing rhythm.
7. Push `feat/template-ripply`, open PR with source/preview/tokens/
   diffs, merge immediately, `[~]` → `[x]` bookkeeping + surge URL +
   `npm run readme:status`.

## Fidelity notes / pitfalls

- The hero's diagonal slashed bottom edge (portal) vs. cover-slider
  (demo): follow the DEMO (drimo/index.html) — that is the template
  page being recreated.
- Price card floats: use flexbox/grid, not `float: left; width:
calc(100%/3)`.
- FAQ + team + features copy is repeated placeholder text in the DOM —
  vary it; keep the same content kinds.
- lucide-react has no brand icons; none are needed for this template
  (no social row in the main demo footer), but the search icon and
  arrows are `Search`, `ChevronLeft/Right/Down`.
- jsdom 30: no `localStorage` in tests — irrelevant here (no dark
  mode), but keep `window.*` prefixed if any storage is used.
- Nav renders desktop links; mobile menu panel duplicates them — use
  `getAllByRole` and index the mobile one last in tests.

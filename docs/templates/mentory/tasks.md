# Mentory (ColorLib "Tutor") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-mentory` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Tutor" — education / tutorial website template
  (source: https://colorlib.com/wp/template/tutor/). Listed in TEMPLATES.md
  (Education section, line 521; duplicate at line 1655 — mark EVERY copy
  `[x]` when done).
- **Preview URL:** https://preview.colorlib.com/theme/tutor/ (title "Tutor —
  Free Website Template by Colorlib"; reachable via curl AND browser). Fetched:
  `/tmp/tutor-prep/preview.html` (25 KB), `/tmp/tutor-prep/style.css` (22 KB),
  `/tmp/tutor-prep/bootstrap.min.css` (Bootstrap 4.3.1, re-themed with
  `#0779e4`), `/tmp/tutor-prep/brand.css` (brand icon font CSS with tile
  colors). Screenshot `tutor-free-template.jpg` (1200×946, viewed in browser).
  Preview DOM is authoritative for section order/copy; screenshot confirms
  navbar-over-hero, desk-photo hero, featured cards, course tiles. The
  screenshot's meta ("17.5k" views) predates the live DOM ("1hr 24m") —
  follow the DOM.
- **Demo brand in the preview is "Tutor"** → rename to **Mentory** (mentor +
  tutorial-hub vibe; logo = styled text "Mentory", never a copied asset).
- **Visual design:** clean light editorial education layout. Transparent
  navbar over a full-height workspace-desk photo (0.3 black overlay), centered
  white "The Hub Of Tutorials". Featured band `#f8f9fa` with white cards
  overlapping the hero bottom (-150px): one big card (260px thumb, "Tutorial"
  eyebrow, "Learning React Native", brand icons, meta "1hr 24m · Advanced ·
  Jun 18, 2020") + three small cards (80px thumbs). "Choose Course" (white):
  caption "Tutorial Courses" + blue 30px 700 h2; six brand-icon tiles
  (Illustrator · Photoshop · Angular · JavaScript · React · Vue; grey
  `#f8f9fa` → white hover flip). "Tutorials" (grey): search form ("Search
  subjects" + blue Search) + "Share:" social squares; four white tutorial
  cards (250px thumbs, brand icons, meta, blue uppercase "View" buttons);
  five-circle pagination (50px, active `#0779e4`); sidebar of three
  horizontal-thumb cards. "Student Reviews" (grey): three white cards with 4px
  blue bottom borders, amber stars (4 filled + 1 outline), quotes, 50px
  circular avatars, name + role. Footer: LIGHT (white bg — no background rule
  in CSS; links `rgba(0,0,0,0.5)` hover black; headings #000): About Us +
  lorem + four blue social circles; four link columns (Quick Links /
  Resources / Support / Company — same five links each); copyright bar with a
  divider + Component Dock credit.
- **Fonts:** single family `"Raleway"` for everything (body 300, headings
  300, section h2 700, hero strong 900, buttons 700, letter-spacing on
  eyebrows/buttons). Load via Google Fonts `<link>` in `index.html`
  (weights 300/700/900).
- **Structure (1:1 from the preview DOM):**
  1. Navbar `header.site-navbar.light.site-navbar-target` — `position:
absolute; top: 0; width: 100%; z-index: 9; padding: 1rem`; transparent;
     logo left ("Mentory", 1.7rem, strong 900); links right: Home (active,
     white 2px underline) · Tutorials · Testimonials · Blog · About · Contact
     (white, `margin: 0 15px; padding: 20px 0`). Sticky variant optional:
     white bg, shadow `4px 0 20px -5px rgba(0,0,0,0.2)`, links `#000`, logo
     `#0779e4`. Mobile: off-canvas right panel (300px white, shadow) with
     hamburger + close, `aria-expanded`.
  2. Hero `div.site-section-cover.overlay` — bg image (desk/workspace photo),
     `::before` `rgba(0,0,0,0.3)`; height `calc(100vh - 196px)` min 577px
     (mobile `calc(70vh - 196px)` min 400px); centered `h1` "The <strong>Hub
     </strong> Of <strong>Tutorials</strong>" — 3rem white line-height 1,
     strong 900.
  3. Featured `div.site-section.bg-light.pb-0` — `row.align-items-stretch.
overlap` (`margin-top: -150px`): `col-lg-8` `.box.h-100` (white, 20px
     padding, shadow `0 15px 30px rgba(0,0,0,0.05)`; `d-flex`: `.img` fixed
     260px, mr 50px; `.text`: `.category` "Tutorial" (11px uppercase 700 ls
     .1rem), `h3` "Learning React Native" (#000 link), lorem p, brand icons
     (react + javascript), `.meta` "1hr 24m · Advanced · Jun 18, 2020"
     `#a6a6a6`); `col-lg-4` three `.box.small.h-100` (`.img` fixed 80px, mr
     20px; `.text h3` 16px; each with "Tutorial" category).
  4. Choose Course `div.site-section` (white) — `heading.mb-4`: `.caption`
     "Tutorial Courses" (12px uppercase 700 ls .2rem) + `h2` "Choose Course"
     (30px 700 `#0779e4`); six `col-lg-2` `.course` links: `padding: 20px
10px; background: #f8f9fa; color: #0779e4; border-radius: 4px;
text-align: center`; `span.wrap-icon` 40px brand glyph + `h3` 18px
     `#ccc`; hover → white bg + `box-shadow: 0 5px 10px rgba(0,0,0,0.1)` +
     `h3` `#000`. Tile brand colors: Illustrator `#ff7c00`, Photoshop
     `#00c8ff`, Angular `#dd0031`, JavaScript `#f7df1e`, React `#61dafb`,
     Vue `#4fc08d`.
  5. Tutorials `div.site-section.bg-light` — top row: left `form.search-form`
     (`input[type=search]` placeholder "Search subjects": height 55px, bg
     `#efefef`, focus `#e2e2e2` + blue border; + `input[type=submit].btn.btn-
primary.px-4` "Search"), right "Share:" + three 40px white `.social-item`
     squares (facebook/twitter/linkedin; hover blue). `heading.mb-4`:
     `.caption` "Latest" + `h2` "Tutorials". Left `col-lg-8`: four
     `.tutorial-item` cards (white, 20px padding, radius 4px, shadow `0 10px
20px rgba(0,0,0,0.1)`; `.img-wrap` fixed 250px mr 30px; `h3` 20px #000;
     lorem; brand icons; meta; `.btn.btn-primary.custom-btn` "View" — 12px
     700 uppercase ls .1rem): "Learning React Native" (react+javascript),
     "Learning Angular 101" (angular+javascript), "Learning Photoshop"
     (photoshop), "Advance Illustrator" (illustrator). `.custom-pagination`:
     five 50px circles (radius 50%, white bg, 20px), active span `#0779e4`
     white ("1"; 2–5 links). Right `col-lg-4`: three `.box-side` (white, 20px
     padding, radius 4px, shadow `0 10px 20px rgba(0,0,0,0.1)`; full-width
     horizontal image mb 20px; `h3` 20px — "Learning React Native" ×3).
  6. Reviews `div.site-section.bg-light` — centered `col-lg-7` heading:
     `.caption` "Testimonials" + `h2` "Student Reviews"; three `col-lg-4
.testimonial-2`: white, radius 7px, padding 30px, `border-bottom: 4px
solid #0779e4`, shadow `0 15px 30px rgba(0,0,0,0.1)`; `h3.h5` title
     ("Excellent Teacher!" / "Best Video Tutorial!" / "Easy to Understand!");
     5 stars `text-warning` `#ffc107` (4 `icon-star` + 1 `icon-star-o`);
     blockquote lorem; `.v-card`: 50px circular avatar + `.author-name`
     (name d-block: Mike Fisher / Jean Stanley / Katie Rose; role `#ccc`:
     "Owner, Ford" / "Traveler" / "Customer").
  7. Footer `footer.site-footer` — `padding: 4em 0` (8em desktop); LIGHT
     (no bg rule): `col-lg-3` About Us (`h2.footer-heading.mb-4` 16px #000 +
     lorem "Far far away, behind the word mountains..." + `ul.social` four
     40px blue circles white icons: facebook/instagram/twitter/linkedin);
     `col-lg-8.ml-auto` four `col-lg-3` columns "Quick Links" / "Resources" /
     "Support" / "Company" (each: About Us · Testimonials · Terms of Service ·
     Privacy · Contact Us, `li` mb 10px); bottom `row.pt-5.mt-5.text-center` +
     `div.border-top.pt-5` — border `rgba(255,255,255,0.1)` (INVISIBLE →
     use subtle grey `#e9ecef`, document in PR) + copyright "© 2026 Mentory.
     All rights reserved. | Made with Component Dock" linking
     `https://www.componentdock.com/` (replaces Colorlib credit).
- **Note:** inner pages exist in the original (tutorials/testimonials/blog/
  about/contact/tutorial-single) — NOT required; single index page only, nav
  links can be dead anchors `#` or scroll targets. Brand/social glyphs are
  icomoon font assets — never copy; use inline SVGs (simple-icons paths);
  lucide-react removed brand icons. The search form's icon span is empty in
  the source (`<span class="icon-"></span>`) — no icon needed.

## Implementation tasks (for the implementer stream)

1. `git fetch origin`; confirm `openspec/specs/template-mentory/spec.md`
   exists on main; claim with a `[~]` mark on TEMPLATES.md lines 521 AND 1655.
2. Scaffold `apps/mentory` from the simplest existing app (copy pattern,
   rename package to `@free-react-templates/mentory`); register the
   workspace (`npm install` at root so `package-lock.json` updates; verify
   with `grep -c "free-react-templates/mentory" package-lock.json`); keep
   `injectUiSource()` in `vite.config.ts`.
3. TDD: write tests first (Vitest + Testing Library, 100% coverage)
   mirroring the spec's Gherkin scenarios, then implement:
   - `src/components/Navbar.tsx` — absolute transparent bar over hero, text
     logo "Mentory", six white links (Home active + underline), off-canvas
     mobile menu with `aria-expanded`.
   - `src/components/Hero.tsx` — full-bleed workspace photo + 0.3 overlay +
     centered 3rem white "The Hub Of Tutorials" (900-weight Hub/Tutorials).
   - `src/components/Featured.tsx` — grey band, overlap -150px: one big card
     (260px thumb, category label, title, lorem, brand icons, meta) + three
     small cards.
   - `src/components/ChooseCourse.tsx` — caption + blue h2 + six brand-icon
     tiles with hover flip (inline SVG brand marks + brand colors).
   - `src/components/Tutorials.tsx` — search form (validation on submit,
     success/error states) + Share row; four tutorial cards with View
     buttons; five-circle pagination; three sidebar thumbnails.
   - `src/components/Reviews.tsx` — three white cards: titles, 4+1 amber
     stars, quotes, circular avatars, names/roles.
   - `src/components/Footer.tsx` — about + lorem + social circles; four link
     columns; divider + copyright with Component Dock link.
   - `src/App.tsx` — compose in order; `src/index.css` — `@theme` tokens.
4. Images: `https://picsum.photos/seed/mentory-<n>/<w>/<h>` (hero, featured/
   tutorial/sidebar thumbnails, testimonial avatars). HERO SEED IS
   SUBJECT-CRITICAL (desk/workspace with laptop) — screen candidates first
   (curl 480x270 + browser_vision at full res, per the
   colorlib-template-replication skill), pin the verified seed, and update
   spec/docs/tests together. Icons: inline SVG brand marks (simple-icons) for
   course tiles + socials; lucide for generic UI (search, menu, x, star).
5. Verification: `npm run spec:validate`; `scripts/verify-app.sh mentory`
   (typecheck + lint + 100% coverage + build). Never touch shared files
   (package-lock only via `npm install`).
6. PR: branch `feat/template-mentory`, PR to main, description must state
   source (ColorLib "Tutor"), preview URL, design tokens, what differs;
   merge immediately (`gh pr merge --squash --delete-branch`).
7. After merge: pull --rebase; mark TEMPLATES.md lines 521 AND 1655 `[x]`,
   add surge URL + homepage; `npm run readme:status`; push.

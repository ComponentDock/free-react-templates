# Parish (ColorLib "Vineyard") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-parish` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Vineyard" — church website template
  (source: https://colorlib.com/wp/template/vineyard/). Listed in
  TEMPLATES.md line 526 (Bootstrap section); dup row at line 1306 — same
  source, ONE implementation (line 526 is the claim row; mark BOTH `[x]`
  after merge).
- **Preview URL:** https://preview.colorlib.com/theme/vineyard/ (title
  "Vineyard - Free Bootstrap 4 Template by Colorlib"). Fetched:
  `/tmp/vineyard.html` (43 KB), `/tmp/vineyard.css` (70 KB), screenshot
  `/tmp/vineyard-shot.jpg` (AVIF, viewed in browser — cropped below the
  ministries section; the preview DOM is authoritative for the rest).
- **Demo brand in the preview is "Vineyard"** → rename to **Parish**
  (single-word church fit; text logo "Parish" + "Christian Church"
  beside it — the source logo is text, not an image, so no asset issue).
- **Visual design:** modern church landing. Signature elements: the mint
  green `#aee6bf` accent everywhere (links, nav hover, 100px circular
  service icons, counter numbers, subheadings, primary buttons, footer
  links), Barlow Condensed headings (uppercase, letter-spaced) on Poppins
  body, the mountain-photo hero with `#2f994f` 20% mint overlay and
  right-aligned content + white circular play button, the 4-up stats
  counter with mint numbers, the `#f8f9fa` sermons/events bands, and the
  near-black `#171717` footer. Buttons are 3px-radius; mint solid hover
  flips to transparent with mint text.
- **Font:** `"Barlow Condensed"` (headings) + `"Poppins"` (body/UI) —
  both on Google Fonts; load via `<link>` in `index.html`.
- **Brand colors:** mint `#aee6bf` (accent), `#2f994f` (hero overlay at
  opacity .2), headings `rgba(0,0,0,0.8)`, body `#999999`, light section
  bg `#f8f9fa`, footer `#171717`, footer text `rgba(255,255,255,0.7)`.
- **Structure (1:1 from the preview DOM):**
  1. Navbar `nav.navbar.ftco_navbar` — transparent, absolute over the
     hero (top 20px; mobile: solid `#000`); brand "Parish" +
     "Christian Church"; links HOME (active) · ABOUT · MINISTRIES ·
     SERMONS · EVENTS · BLOG · CONTACT (12px uppercase 600, ls 1px,
     white, hover mint); mobile toggler "Menu".
  2. Hero `div.hero-wrap.js-fullheight` — 800px, bg mountain photo
     (`images/bg_1.jpg`), `.overlay` `#2f994f` opacity .2; right-
     aligned `col-md-8` content: 70px white play circle + "Watch our
     latest sermons", `h1` 50px white uppercase Barlow ls 3px "Loving
     God, Loving Others, Serving God With All Your Heart", `h3`
     "Submit your presence to the creator of the universe" (18px
     Poppins).
  3. Ministries `section.ftco-section.ftco-no-pt.ftco-no-pb` — left
     col: SIX `.services` rows — Daily Prayers (active white circle:
     Church Community) · Teaching · Helpers · Wedding · Events — 100px
     mint circle + 16px uppercase title + lorem; right col: tall photo
     (hands + "HOLY SCRIPTURES" book).
  4. Counter `section.ftco-counter` — left: cross-on-wall photo with
     100px white circular video play link; right: `h2` "We are church
     that believes in Jesus Christ" + para + 4 stats (70000 Members ·
     1000 Pastors · 100000 Donation · 100 Churches; Barlow 28px 600
     mint numbers, 14px labels). Static numbers OK (count-up optional).
  5. Sermons `section.ftco-section.bg-light` — subheading "Experience
     God's Presence" + h2 "Sermon for Today"; image left; right:
     "Lord is Sufficient for all of our needs", meta (Sermon from:
     Felix Gonner · Categories: God, Pray · On Sunday 13 Jan, 2019),
     para, mint "Watch Sermons" (play) + black "Download Sermons"
     (download).
  6. Instagram `section.instagram.ftco-section.ftco-no-pt.ftco-no-pb`
     — 4 square tiles (insta-1..4); hover overlay = 50px mint circle +
     Instagram icon (inline SVG).
  7. Testimony `section.testimony-section.img` (bg_3.jpg + overlay) —
     white heading "Inspirational Testimony"; testimonials: 130px
     circular user photo + 40px white quote badge + quote + name
     "John Cooper" (Barlow uppercase) + "Member". Static single or
     simple carousel (jsdom-safe).
  8. Events `section.ftco-section.ftco-no-pt.bg-light` — 3 cards
     (event-1..3.jpg): "How To Recover The Cutting Edge", meta
     (calendar "Monday, 8:00 Am - Tuesday, 8:00 Pm" · MapPin "Spring
     Church" · Building2 "203 Fake St. Mountain View, San Francisco,
     California, USA"), mint "Read more". **SOURCE QUIRK:** heading
     ("Events" / "Upcoming Events") sits BELOW the cards in the DOM —
     put it ABOVE (documented deviation, matches all other sections).
  9. Blog `section.ftco-section` — "Our Blog" / "Recent Blog"; 3
     entries: meta (Aug 5, 2019 · Admin · chat 3), title "Know About
     Our God Who Created This Universe", photo, excerpt.
  10. Footer `footer.ftco-footer.ftco-bg-dark.ftco-section`
      (`#171717`, 7em/4em padding) — 4 columns: "Parish Church"
      (blurb + 3 × 50px social circles: Twitter/Facebook/Instagram
      inline SVG), "About" (7 links + chevrons), "Connect" (7 links),
      "Service Hours" ("Services Hours" h4 + 2 service times).
      Copyright bar: "© 2026 Parish. All rights reserved." + "Made
      with ❤" → **Component Dock link** (mandatory).
- **Note:** inner pages exist in the original (about / ministry /
  sermons / events / blog / contact) — NOT required; single index page
  only. Nav links become scroll anchors or dead anchors `#`. Hero
  play/video links point at the original's YouTube/Vimeo or `#` (no
  copied media). No `tel:` literals anywhere.

## Implementation tasks (for the implementer stream)

1. `git fetch origin`; confirm `openspec/specs/template-parish/spec.md`
   exists on main; claim with a `[~]` mark on TEMPLATES.md line 526.
2. Scaffold `apps/parish` from the simplest existing app (copy pattern,
   rename package to `@free-react-templates/parish`); register the
   workspace (`npm install` at root so `package-lock.json` updates;
   verify with `grep -c "free-react-templates/parish" package-lock.json`);
   keep `injectUiSource()` in `vite.config.ts`.
3. TDD: write tests first (Vitest + Testing Library, 100% coverage)
   mirroring the spec's Gherkin scenarios, then implement:
   - `src/components/Navbar.tsx` — transparent-over-hero nav (solid black
     on mobile), text brand "Parish Christian Church", uppercase links
     (Home active · About · Ministries · Sermons · Events · Blog ·
     Contact, white, mint hover), "Menu" hamburger + `aria-expanded`.
   - `src/components/Hero.tsx` — 800px mountain photo + `#2f994f` 20%
     overlay; right-aligned: white play circle + "Watch our latest
     sermons", 50px condensed uppercase headline, subheadline.
   - `src/components/Ministries.tsx` — 6 icon rows (mint circles;
     Church Community white circle) + right tall photo.
   - `src/components/Counter.tsx` — left photo + white circular play,
     right heading/para + 4 mint-number stats.
   - `src/components/Sermons.tsx` — `#f8f9fa` band, image + title +
     meta + mint Watch / black Download buttons.
   - `src/components/InstagramStrip.tsx` — 4 tiles + hover mint
     instagram overlay.
   - `src/components/Testimony.tsx` — bg photo + overlay, white
     heading, member testimonial cards.
   - `src/components/Events.tsx` — heading ABOVE 3 cards (deviation),
     calendar/pin/building meta, mint "Read more".
   - `src/components/Blog.tsx` — heading + 3 entries with meta rows.
   - `src/components/Footer.tsx` — 4 columns + social circles + "Made
     with ❤" Component Dock link (mandatory) + copyright.
   - `src/App.tsx` — compose in order; `src/index.css` — `@theme`
     tokens (mint `#aee6bf`, overlay `#2f994f`, headings
     `rgba(0,0,0,0.8)`, body `#999999`, light `#f8f9fa`, footer
     `#171717`).
4. Images: `https://picsum.photos/seed/parish-<n>/<w>/<h>` (hero
   mountains — SCREEN the seed for a mountain/landscape subject first;
   book photo, cross photo, sermon photo, 4 insta tiles, 2+ testimonial
   portraits, 3 event photos, 3 blog photos); icons from `lucide-react`
   (play, download, calendar, map-pin, building-2, quote,
   message-square, heart-handshake, church, book-open, gem, megaphone,
   menu, x); brand social icons as inline SVGs (lucide has none).
5. Verification: `npm run spec:validate`; `scripts/verify-app.sh parish`
   (typecheck + lint + 100% coverage + build). Never touch shared files
   (package-lock only via `npm install`).
6. PR: branch `feat/template-parish`, PR to main, description must state
   source (ColorLib "Vineyard"), preview URL, design tokens, what
   differs (rename, placeholder images, paraphrased copy, events heading
   moved above cards); merge immediately
   (`gh pr merge --squash --delete-branch`).
7. After merge: pull --rebase; mark TEMPLATES.md line 526 `[x]` AND the
   dup row at line 1306 `[x]`, add surge URL
   `https://parish.free.componentdock.com` + homepage;
   `npm run readme:status`; push.

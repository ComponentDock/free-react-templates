# Hoops (ColorLib Basketball) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-hoops` by an implementer stream.

## Design notes

- **Original:** ColorLib "Basketball" — free basketball club website template
  (source: https://colorlib.com/wp/template/basketball/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/basketball/`
  (HTTP 200, 43.8KB) + stylesheet `css/style.css` (135.5KB). Full rendered DOM
  extracted; structure below is from the DOM + CSS tokens. Screenshot
  `basketball-free-template.jpg` confirms: white header with top bar (logo +
  phone `+02 213 - 256 (365)` + bordered REGISTER button), cream hero with an
  illustrated winding road + 3 rolling basketballs + skyline silhouette +
  birds + faint hoop sketch, "DEFEND & DOMINATE" headline (DEFEND orange,
  DOMINATE black), orange LEARN MORE button, geometric sans headings.
- **Structure observed (1:1):** header (top bar + nav: Home / About us / team
  / gallery / Pages dropdown (Elements, Single blog) / blog / Contact +
  social icons) → hero slider (swiper, 800px tall, bg `img/banner_bg.png`,
  H1 `<span>Defend &</span><br>Dominate`, grey copy, `btn_1` "LEARN MORE") →
  about ("About us" label + "Welcome to Basketball School" + 2 paragraphs +
  "READ MORE" `btn_2` + image) → upcoming events ("Upcoming Event" label +
  "Land Morning Blessed"; 2 cards: date block 15/jun, time 12:00 AM - 12:30
  AM, "Sandis peter", copy, "View Details") → learn about (photo band
  `learn_about_bg.png`, white "free tutorial" + "Learn About Basketball") →
  recreational program (mirror split: "Recreational Program" + lorem H2 +
  2 paragraphs + READ MORE) → player info (cream #fff7ef band, slider ×2
  identical: photo, "Jequline Dodge", "Swords Club" badge, bio) → gallery
  ("Our Gallery" + "Latest Player Showcase"; 8 items w/ hover overlay text
  like "Swords Club vs Uknights Club") → blog ("From The Blog" + "Latest News
  & Update"; 4 cards: thumb, "12 march, 2019" meta, H5 title, excerpt) →
  social connect ("Social Media" + "Follow Us Instagram"; 6 image tiles w/
  hover + social icons) → footer (cream #fff7ef; Top Products / Quick Links /
  Features / Resources columns + Newsletter widget + copyright).
- **Design tokens:** brand orange **#ff8b23** (52 uses; buttons, "Defend &"
  accent, hovers) + light-orange button underline **#fdcb9e**; `.btn_1` =
  orange, padding 13px 35px, 12px uppercase, `border: 2px solid transparent`;
  `.btn_2` = padding 13px 47px, `border-bottom: 4px solid #fdcb9e`; section
  titles **#2a2a2a** 36px/700; body muted **#8a8a8a** / **#999999**; section
  bgs: header #fff, player + footer **#fff7ef**, learn-about photo band w/
  white text; fonts **Open Sans** (body/nav) + **Playfair Display** (serif
  headings) via Google Fonts. (#415094/#4cd3e3/#38a4ff/#f4e700 are
  `_elements.scss` demo buttons only — NOT home-page brand.)
- **Recreation name:** Hoops. App folder `apps/hoops`, package
  `@free-react-templates/hoops` (no collision with `ls apps/` or existing
  spec folders).
- **Design approach:** light sporty theme with orange accents; hero = seeded
  picsum photo slider + two-tone "Defend & Dominate" headline (orange first
  phrase) + uppercase orange CTA; about + recreational splits with image and
  read-more button; upcoming events row with date-block cards; learn-about
  photo band with white heading; player slider (photo + name + club badge +
  bio); 8-item gallery grid with hover overlay captions; 4 blog cards with
  date meta; 6-tile Instagram-style social strip; footer with 4 link columns
  - newsletter (success-state form); all images picsum-seeded
    (`picsum.photos/seed/hoops-N/w/h`); Google Fonts via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks. Social icons:
  lucide-react dropped brand icons — use inline SVG brand icons
  (GitHub/X/LinkedIn per repo standard; original had generic social icons).
- Newsletter form: swap to success message on submit unmounts the input —
  test with `queryByLabelText(...)` absent (not input value).
- Hero slider: repo Navbar pattern may use a simple fade/slide; the original
  is a swiper carousel — a CSS/state-based slider is fine (no new deps).

## Tasks

- [x] Write `openspec/specs/template-hoops/spec.md` (Gherkin
      requirements + scenarios + replication findings) — DONE on main (this
      prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/hoops` (copy `apps/aurora`; rename package to
      `@free-react-templates/hoops`; `npm install` at root to register the
      workspace in package-lock.json).
- [ ] TDD: tests first for Navbar, Hero, About, UpcomingEvents, LearnAbout,
      Recreational, Player, Gallery, Blog, SocialStrip, Footer, App
      composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Gate: `npm run verify:app -- hoops` (typecheck → lint → vitest 100% →
      build).
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.

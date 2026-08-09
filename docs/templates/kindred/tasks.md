# Kindred (ColorLib Aspiration) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-kindred` by an implementer stream.

## Design notes

- **Original:** ColorLib "Aspiration" — free charity/ NGO website template
  (source: https://colorlib.com/wp/template/aspiration/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/aspiration/`
  (HTTP 200, 39.1KB) + stylesheet `css/style.css` (69.0KB). Full rendered DOM
  extracted; structure below is from the DOM + CSS tokens. Screenshot
  `aspiration-free-template.jpg` (1200×946) confirms: dark nav bar, split hero
  (left half blue-tinted photo, right half natural photo, centered white
  uppercase headline "GIVE A HAND TO MAKE THE BETTER WORLD" + circular play
  button), white "Aspiration Charity" card + solid-blue "Donation so far"
  panel with $380,000 and a black "Donate now" button.
- **Structure observed (1:1):** navbar (brand left; Home / About us /
  Services / Causes / Blog / Contact right; transparent over hero, white on
  scroll) → hero (full-screen photo, blue overlay left half opacity .4, h1
  "Give A Hand To Make The Better World" uppercase 7vw letter-spacing 5px,
  circular play button) → volunteer split (left photo card "Aspiration
  Charity" + "Join now" btn-primary; right solid-blue panel "Donation so
  far" + $380,000 animated + copy + "Donate now" btn-black) → services
  (4 icon cards: Help & Support [address copy], Adoption, Volunteering,
  Education; uppercase h3, 60px blue icons; hover/active → solid blue bg
  white text) → foundation grants (bg-light; subheading "Foundation Grants
  Projects", h2 "Gifts into Service Project that Change"; striped 65% bar
  height 50px; 65% + Collected $380,000 / Goal $600,000 + "Donate now") →
  volunteer band (photo bg + overlay; centered "Become a Volunteer") →
  causes ("Our Priorities"; 3 cards: Clean water for South Sudan 70%, Home
  for Asias Child 75%, Education for Asian School 40%; each photo + blurb +
  "$3,800 to go" + striped bar) → intro row (big number 380000 + "Waterless
  Drinking in Africa" + "Start Donation"; quote h4 in border-r block) →
  counter band (photo bg + overlay; 705 Days in Campaign / 809 Dedicated
  Donors / 335 Winning Awards / 35 Fun Raised, white 50px numbers) → blog
  ("Recent Blog"; 1 large entry + 3 thumb entries; meta Sept. 04, 2019 /
  Admin / chat 3) → sponsorship heading (centered h1) → success stories
  (bg-light; left photo; right "Success Stories" carousel: Fernando Obiga,
  Jeffrey Blatch, Henry Ford, Jeff Chan, Michael Bubble — all Businessman)
  → footer (photo bg + blue overlay .8; 4 widgets: brand + blurb + social
  twitter/facebook/instagram; Information: Donation/Privacy/Terms Condition;
  Links: Home/Who we are/Causes/Blog/Contact; Have a Questions?: address
  203 Fake St., phone +2 392 3929 210, email info@yourdomain.com; copyright).
- **Design tokens:** brand **#0028ff** (vivid blue — nav hover, brand
  underline, hero overlay opacity .4 left-half, footer overlay opacity .8,
  .bg-primary, .btn-primary, service icon color + hover/active card bg,
  heading span + subheading accents); buttons radius **3px**, shadow
  `0 24px 36px -11px rgba(0,0,0,0.09)`, `.btn-primary` #0028ff / white text,
  hover transparent + blue border/text, `.btn-black` #000; fonts **Oswald**
  (headings, 700, uppercase; section h2 50px) + **Work Sans** (body) via
  Google Fonts; section bgs: transparent nav → white on scroll, hero photo +
  blue overlay .4, volunteer right col #0028ff, grants/testimony **#f8f9fa**,
  photo bands with overlay, footer photo + blue overlay .8; striped progress
  bars (recreate in #0028ff); container max-width 1180px.
- **Recreation name:** Kindred. App folder `apps/kindred`, package
  `@free-react-templates/kindred` (no collision with `ls apps/` or existing
  spec folders).
- **Design approach:** light theme with vivid blue accents; hero = full-bleed
  seeded picsum photo + blue left-half overlay band + centered uppercase
  headline + circular play button; volunteer split = left photo card ("Join
  now") + right solid blue panel with animated donation number + black
  "Donate now"; services = 4 lucide-icon cards (HeartHandshake, Baby, Users,
  BookOpen) hover→blue; grants = bg-light panel with striped 65% progress +
  Collected/Goal + Donate now; volunteer band = photo band with "Become a
  Volunteer"; causes = 3 photo cards with "$3,800 to go" + striped progress
  (70/75/40%); intro row = big number + label + "Start Donation" + quote
  block; counter = photo band with 4 animated stats; blog = 1 large + 3
  thumb entries with meta row; sponsorship centered headline; success stories
  = photo + quote carousel (5 authors, Businessman role); footer = blue-tinted
  band with brand/social, Information, Links, Have a Questions? widgets; all
  images picsum-seeded (`picsum.photos/seed/kindred-N/w/h`); Google Fonts via
  `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks. Social icons:
  lucide-react dropped brand icons — use inline SVG brand icons
  (GitHub/X/LinkedIn per repo standard; original had Twitter/Facebook/
  Instagram).
- Animated numbers (donation total, counter stats) can be simple static
  renders with `aria-label`s — animation is a nice-to-have, not required for
  fidelity; keep tests deterministic.

## Tasks

- [x] Write `openspec/specs/template-kindred/spec.md` (Gherkin
      requirements + scenarios + replication findings) — DONE on main (this
      prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/kindred` (copy `apps/aurora`; rename package to
      `@free-react-templates/kindred`; `npm install` at root to register the
      workspace in package-lock.json).
- [ ] TDD: tests first for Navbar, Hero, Donation split (volunteer), Services,
      Grants, Volunteer band, Causes, Intro row, Counter, Blog, Sponsorship
      headline, Success Stories, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Gate: `npm run verify:app -- kindred` (typecheck → lint → vitest 100% →
      build).
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.

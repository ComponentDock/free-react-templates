# Sattva (ColorLib Yogalax) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-sattva` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Yogalax" — yoga/wellness studio marketing template
  (source: https://colorlib.com/wp/template/yogalax/). Listed in TEMPLATES.md
  under Beauty (line ~236), Fashion (line ~1737) and Health Fitness (line
  ~1893) — one recreation covers all three checklist rows.
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/yogalax/`
  (HTTP 200). DOM + `css/style.css` (~70KB) extracted and analyzed. This is a
  single-page site (navbar links Home / Classes / Schedule / About / Blog /
  Contact; Schedule is a separate page in the original — recreate as anchor or
  omit, keep the nav item).
- **Visual design (from screenshot `yogalax-free-template.jpg` + DOM):** airy
  minimal wellness aesthetic. Hero split layout: soft pink gradient
  (brand pink `#d291bc` → white) on the left with thin-sans headline "Do Yoga
  today for a better tomorrow" + pill CTA "15 Day Free Trial"; lifestyle photo
  of a woman in lotus pose (hands in prayer) on the right. Below: "Why You
  Should Go To Yoga" intro with a photo of a woman in a backbend; rounded white
  cards on light-gray sections; pink accents everywhere (buttons, price
  numbers, active nav, dots); solid-pink footer.
- **Structure (1:1, section order from the DOM):**
  1. Navbar: transparent over hero, brand "Sattva" (uppercase, letter-spacing
     2px, pink lotus/flower icon), links Home / Classes / Schedule / About /
     Blog / Contact; scrolled → fixed white + shadow; dark-mode toggle.
  2. Hero: full-height, background yoga photo + 45° pink gradient overlay on
     the left ~68% (opacity .3), h1 "Do Yoga today for a better tomorrow"
     (80px, weight 200), pill CTA "15 Day Free Trial" (white border; hover →
     white bg, black text).
  3. Intro (Why You Should Go To Yoga): photo on the left (picsum), right side
     heading + intro paragraph + 5 benefit items (Yoga boosts brain power /
     helps you to breathe better / improves your strength / helps you to
     focus / helps give meaning to your day).
  4. Services (`bg-light`): 4 cards — Healthy Lifestyle, Body & Mind Balance,
     Meditation Practice, Edeology — each with a flaticon-style icon
     (lucide-react: Flower2, Brain, Wind, Sparkles) + blurb.
  5. Classes: subheading "Yoga Classes" + h2 "Choose Your Level & Focus" + 6
     cards — Group Lessons, Yoga For Beginners, Yoga For Pregnant, Yoga For
     Couples, Bikram Yoga, Yoga Barre.
  6. Pricing (`bg-light`): subheading "Pricing Tables" + h2 "Membership Cards"
     - 3 white cards (shadow 0 24px 48px -13px rgba(0,0,0,.05)): Year Card
       $449 (For 1 Year), Monthly Card $200 (For 1 Month), Weekly Card $85 (For
       1 Week); price number 60px weight 500 pink; feature list (Enjoy All The
       Features, Onetime Access To All Club, Group Trainer, Book A Group Class,
       Fitness Orientation — trim per tier like the original); "Get Started"
       pill button.
  7. Testimonials: subheading "Testimony" + h2 "Successful Stories" + carousel
     of 5 slides (quote icon, text, avatar, name, position).
  8. Counter: dark photo bg (parallax), 4 stats — 5000 Happy Customers, 4560
     Yoga Workshops, 570 Years of Experience, 900 Lesson Conducted — each with
     pink icon in a diamond (rotated square border, hover fills pink) + 50px
     white number.
  9. Blog (`bg-light`): subheading "Blog" + h2 "Recent Posts" + 3 post cards
     (date block 31/27/25 December 2018, title "Young Women Doing Yoga" →
     vary titles, excerpt).
  10. Gallery: subheading "Gallery" + h2 "See the latest photos" + 4-photo
      grid (picsum, hover overlay).
  11. Footer: solid pink `#d291bc`, brand + lotus icon, address ("203 Fake St.
      Mountain View, San Francisco, California, USA" → generic placeholder),
      circular social icons (Facebook / Twitter/X / Instagram), copyright bar.
- **Design tokens (from `css/style.css`):**
  - Font: **Work Sans** (100–300 weights; headings 200–300; brand uppercase
    letter-spacing 2px). Google Fonts `<link>`.
  - Colors: brand pink **`#d291bc`** (primary — buttons, footer bg, active
    nav, price numbers, dots); cyan accent `#78d5ef` / hover `#56caeb` /
    active `#4ac7ea` (Bootstrap btn-primary); text `#000` headings, `#212529`
    body, `#4d4d4d` cards, `#999999` muted, `#b3b3b3` subheadings; light
    sections `#f8f9fa`; footer text `rgba(255,255,255,.7)`.
  - Buttons: pill `border-radius: 30px`, uppercase, weight 600,
    letter-spacing 1px; primary pink bg + white text; hover transparent +
    pink border.
  - Section rhythm: `padding: 7em 0` (~py-24/28); alternating white /
    `#f8f9fa` backgrounds.
- **Recreation decisions:** new name **Sattva** (Sanskrit for balance/purity —
  fits a yoga brand; no collision with `apps/` or existing spec folders).
  Placeholders via `https://picsum.photos/seed/sattva-<n>/<w>/<h>`; icons from
  lucide-react (Flower2 for lotus, Brain, Wind, Dumbbell, Target, Heart, plus
  social icons); Work Sans via Google Fonts `<link>`; brand pink `#d291bc` in
  `@theme`; pill buttons via rounded-full; repo-standard Navbar (dark-mode
  toggle) + Footer chrome; no assets copied. Reuse `packages/ui` (Button,
  ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-sattva/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/sattva` (copy the simplest app; rename package to
      `@free-react-templates/sattva`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate (local per-app gate in FAST_MODE).
- [ ] Push `feat/template-sattva`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: mark the three Yogalax rows in TEMPLATES.md (Beauty /
      Fashion / Health Fitness) `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).

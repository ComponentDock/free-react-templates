# Groom (ColorLib Barcut) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-groom` by an implementer stream.

## Design notes

- **Original:** ColorLib "Barcut" — free barber/salon website template
  (source: https://colorlib.com/wp/template/barcut/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/barcut/`
  (HTTP 200, 42.3KB) + stylesheet `css/main.css` (76.2KB). Full rendered DOM
  extracted; structure below is from the DOM + CSS tokens. Screenshot
  `barcut-free-template.jpg` confirms: white header with centered scissor
  logo, full-bleed warm barber photo hero, gold accents, serif headings.
- **Structure observed (1:1):** header (centered logo; left: Home/about/
  barbers/gallery; right: pricing/barbers/gallery/pages/blog/contact) → hero
  slider (3 photos + dark overlay, h1 "For All Occasion HairStyle is a Must
  Try Fashion", copy, circular gold play button + "Watch Intro Video") →
  about ("We Believe that Interior beauty Lasts Long" + copy + Learn More
  gold button; right photo + small dashed-gold-border photo bottom-right) →
  services ("What We Can Do for You": Stylish Hair Cutting, Quality Gel
  Shave, Beard Trimming, Executive Wash — 4 image cards) → catalogue
  (photo bg + white tab panel "Select Your Style", "Shaveing" label, 4 icon
  tabs w/ copy + "View Gallery..." link) → team ("We Have All Famous
  Barbers": Peter Baker, Nancy Holmes, Gavin Hansen) → testimonials (photo
  bg + black overlay .6, Fanny Spencer quote slider with thumbnails) →
  pricing ("Choose Your Package": Basic/Premium/Luxury Hair Cut & Shave
  $79/$89/$99, 5 features each, gold "Order Now") → blog ("Latest From Blog":
  4 items with thumb + meta (13th Dec / 15 / 04) + title "Portable Fashion
  for women" + excerpt) → footer (black; About Me, Newsletter w/ gold arrow
  submit, Follow Me social, copyright).
- **Design tokens:** brand gold **#ba9236** + gradient **#fdc136** (button
  gradient `linear-gradient(90deg, #ba9236 0%, #fdc136 100%)`), dashed-border
  gold **#b89035**; section bgs: header #fff, hero photo + overlay
  rgba(0,0,0,0.3), about card rgba(255,255,255,0.8), catalogue photo bg,
  testimonials black overlay .6, price cards **#f9f9f9**, footer **#000000**;
  fonts **Playfair Display** (serif headings) + **Roboto** (sans body) via
  Google Fonts; gold uppercase buttons.
- **Recreation name:** Groom. App folder `apps/groom`, package
  `@free-react-templates/groom` (no collision with `ls apps/` or existing
  spec folders).
- **Design approach:** light theme with gold accents; hero = seeded picsum
  photo slider (3 slides) + headline + circular play button; about split with
  dashed gold border accent image; services 4 picsum image cards; catalogue
  tab panel over a dark photo band; team cards; testimonial band; pricing
  cards on #f9f9f9 with gold CTA; blog items with meta row; footer with About
  Me / Newsletter (success-state form) / Follow Me social; all images
  picsum-seeded (`picsum.photos/seed/groom-N/w/h`); Google Fonts via
  `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks. Social icons:
  lucide-react dropped brand icons — use inline SVG brand icons
  (GitHub/X/LinkedIn per repo standard; original had Facebook/Twitter/
  Dribbble/Behance).
- Newsletter form: swap to success message on submit unmounts the input —
  test with `queryByLabelText(...)` absent (not input value).

## Tasks

- [x] Write `openspec/specs/template-groom/spec.md` (Gherkin
      requirements + scenarios + replication findings) — DONE on main (this
      prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/groom` (copy `apps/aurora`; rename package to
      `@free-react-templates/groom`; `npm install` at root to register the
      workspace in package-lock.json).
- [ ] TDD: tests first for Navbar, Hero, About, Services, Catalogue, Team,
      Testimonials, Pricing, Blog, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Gate: `npm run verify:app -- groom` (typecheck → lint → vitest 100% →
      build).
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.

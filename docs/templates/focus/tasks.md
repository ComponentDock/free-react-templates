# Focus (ColorLib Snapshot) — Tasks & Design Notes

> Prep artifacts committed on `main` (prep stream). Implementation ships
> later on `feat/template-focus` (implementer stream).

## Design notes (replication findings)

- **Original:** ColorLib "Snapshot" — dark, cinematic photography / film
  production studio one-page template (source:
  https://colorlib.com/wp/template/snapshot/; Bootstrap 4, jQuery, Owl
  Carousel, Magnific Popup, AOS). License CC BY 3.0.
- **Preview REACHABLE:** `https://preview.colorlib.com/theme/snapshot/` —
  DOM fetched (50KB HTML, 58KB `css/style.css`) + visually inspected via
  browser. Screenshot in TEMPLATES.md matches.
- **Visual design:** near-black charcoal page (`#191a1c`), full-bleed hero
  photo of a film crew behind a camera rig with a 50% black overlay, white
  centered type, muted taupe brand accent (`#9d8f8f`) for eyebrows/links/
  active dots, ghost-outline uppercase CTA. Signature feature: fixed
  vertical dot-nav rail on the right edge with scroll-spy. Gallery of 12
  photos in a tight 3-col grid with lightbox. Dark panels (`#202224`) for
  contact boxes + form.

### Branding decisions

- New name: **Focus** (camera focus / craft of photography). Source brand
  "SNAPSHOT Photographer / San Francisco" → "FOCUS Photographer /
  San Francisco".
- Copy: keep the same _kind_ of content, paraphrase text (lorem-style
  blurb, section headings, testimonial names can be changed).
- Placeholders: `https://picsum.photos/seed/focus-<n>/<w>/<h>`; icons from
  lucide-react (camera, film, clapperboard, video, map-pin, phone, mail,
  globe, quote, arrow-left/right, x).

## Implementation task outline (for the implementer)

Order follows the visual stack (top of page → footer). Build one app
`apps/focus` (copy simplest existing app; rename package to
`@free-react-templates/focus`).

1. **Scaffold + shell**
   - [ ] Copy base app → `apps/focus`; rename package, set homepage
         `https://focus.free.componentdock.com` + `public/CNAME`
   - [ ] index.html: title "Focus — Photographer / San Francisco", Google
         Fonts links (Noto Sans 300/400/500/700, Noto Serif 400/700)
   - [ ] Tailwind `@theme`: `--color-brand: #9d8f8f`; base bg `#191a1c`;
         text colors; body font Noto Sans; serif utility for accents
   - [ ] `public/CNAME` = `focus.free.componentdock.com`
2. **Fixed right-edge dot navigation** (signature — get it right)
   - [ ] Fixed rail `top-1/2 right-[50px] -translate-y-1/2`, `right-5` on
         mobile; 6 labels: Home, About, Services, Gallery, Testimony,
         Contact
   - [ ] Dot marker: 5px circle, `border-white/50`; active/hover: fill
         brand + 15px brand ring (scale-in transition)
   - [ ] Scroll-spy (IntersectionObserver) sets active dot; smooth scroll
         on click
3. **Hero** (`#home`)
   - [ ] Full-viewport `h-screen` bg image (picsum seed) + `bg-black/50`
         overlay
   - [ ] Centered: eyebrow "FOCUS · Photographer / San Francisco" (brand,
         uppercase, tracking-widest), H1 "We Make Something Great" (62px,
         uppercase), blurb, ghost CTA "Contact Us" (border-white/20,
         uppercase 10px, tracking-wider, text grey → brand hover) scrolling
         to `#contact`
4. **About** (`#about`)
   - [ ] 2-col: left stacked portrait images (tall + smaller overlapping,
         framed accent); right: eyebrow "About Us", H2 "Focus is A Creative
         Direction, Photography Agency", 2 paragraphs, animated counter
         "0 Project complete" (count-up on in-view), pull quote "— Lucy Lee"
5. **Services** (`#services`)
   - [ ] Centered eyebrow/H2 "Photography Services" + blurb
   - [ ] 3 cards (grid md:grid-cols-3, stack on mobile): Movies &
         Advertising Videos · Clip & Music Videos · Short Film Productions —
         lucide icon (circle), title, blurb
6. **Gallery** (`#work`)
   - [ ] Centered H2 "Selected Projects" + blurb
   - [ ] 12 tiles, `grid-cols-3` no-gutter (`gap-0`), caption overlay
         "Nature Beautiful Work" bottom-left; hover zoom
   - [ ] Lightbox on click (full-size image, close on X/overlay)
7. **Testimony** (`#testimonial`)
   - [ ] Centered H2 "Testimony" + sub "Our satisfied customer says"
   - [ ] Carousel ≥2 slides: avatar (picsum person seed), quote (Noto
         Serif), name + role; prev/next arrows + dots
8. **Contact** (`#contact`)
   - [ ] Centered H2 "Contact Me" + blurb
   - [ ] 4 info boxes (`bg-[#202224]`): Address, Contact Number, Email
         Address, Website — icon + label + value
   - [ ] Form: name/email/subject/message on `#202224` panel, required
         validation, success state (no backend)
9. **Footer**
   - [ ] Copyright line + social circles (lucide icons)
   - [ ] "Component Dock" link → https://www.componentdock.com/ (mandatory)
10. **Tests + gate**
    - [ ] Vitest + Testing Library, 100% coverage (copy MemoryStorage
          polyfill from apps/cura/src/test/setup.ts if jsdom lacks it)
    - [ ] `scripts/verify-app.sh focus` green; PR with source slug + preview
          URL + tokens; merge immediately

## Fidelity checklist

- Section order 1:1 (Hero → About → Services → Gallery → Testimony →
  Contact → Footer)
- Fixed right dot-nav with scroll-spy = the template's signature; do not
  drop it for a top navbar
- Tokens: `#9d8f8f` brand · `#191a1c` page · `#202224` panels ·
  `#9da1a5` muted text · white headings · Noto Sans + Noto Serif
- Ghost CTA: square corners, 1px white/20 border, uppercase 10px
- Gallery: 3-col no-gutter, lightbox, captions
- NO ColorLib assets/names in app code; footer Component Dock link

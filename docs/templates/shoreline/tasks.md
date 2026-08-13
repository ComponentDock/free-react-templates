# Shoreline (ColorLib Ocheandeview) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-shoreline`.

## Design notes (replication findings)

- **Original:** ColorLib "Ocheandeview" — a luxury ocean-view HOTEL/RESORT
  one-pager (page title "Hotel | Template"; source:
  https://colorlib.com/wp/template/ocheandeview/, appears 2× in
  TEMPLATES.md — line 610 Bootstrap 5 (89) + line 1920 Hotel (38); mark ALL
  `[x]` when done). The app name MUST differ from the source — hence
  **Shoreline** (single lowercase word, the beach/ocean-edge concept of an
  ocean-view resort; no collision with `apps/`, `openspec/specs/`, or
  `docs/templates/` — verified 2026-08-13).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/ocheandeview/
  (HTTP 200, ~28 KB HTML; `assets/css/style.css` ~110 KB parsed for tokens).
  Stack: Bootstrap 5 + slick (clients/testimonial carousels) + owl.carousel
  (instagram) + gijgo (date pickers) + nice-select + magnific-popup (video
  lightbox) + themify/fontawesome icons — recreate ALL interactivity
  client-side in React (accessible carousel/select/date-input patterns, no
  jQuery libs).
- **Screenshot:** `ocheandeview-colorlib-template.jpg` (1200×946, viewed in
  browser): transparent header ("Ochean de View" logo left; "Call Us:
  10(88) 267 354" + beige "Book Now" + hamburger right) over a full-screen
  soft-focus photo of a hotel room (crisp white linens, dark wooden
  headboard, bedside lamp, sheer-curtained window; moody charcoal/dark-wood
  tones). Centered huge white elegant serif headline "Ochean de View"
  (Didot/Bodoni-like) + lighter italic sans tagline. At the hero's bottom a
  solid EARTHY OLIVE/TAN bar (#85856D) with booking fields + dark "Check
  Availability" button. Below: stark white "The shelter is the Outcome of
  the" + lorem copy, video band, cream (#ECECDC) quote carousel, alternating
  white about cards, full-width photo band, testimonials, instagram
  squares, light off-white footer.
- **Visual design (DOM + CSS tokens + screenshot):** BRAND OLIVE `#85856D`
  (50 uses) — booking bar bg, `.btn_01` outline (hover fills `#B8B8A0`),
  `.btn_2` hover text. PRIMARY SAGE `#B8B8A0` (41 uses) — `.btn` pill
  (Cormorant 18px/500, padding 22px 32px, radius 35px; hover coral `#ec583a`
  sweep via ::before) + `.btn_1` (Book Now: 16px 41px, hover inverts to
  white bg + sage text). DARK INK `#3C3A34` — booking CTA bg (70px tall,
  Raleway 600 20px), hero overlay rgba(60,58,52,0.7), sticky header #0a0a0a.
  OFF-WHITE `#FAFAF8` — `.section-bg` (Videos, About) + footer. CREAM
  `#ECECDC` — clients-testimonial band. Text: `#686865` (footer/section
  paras), `#656565` (about-caption paras 20px), `#212025` (about pera).
  GOLD `#C6A16E` — carousel chevrons (hover `#AFAF9F`); video play `#F04506`
  on white circle (100px, radius 50%, ripple ring rgba(255,255,255,0.3));
  instagram hover overlay `#010a44` @ 30%. Fonts: **Cormorant Garamond**
  (serif display — hero h1 144px/500, section h2 79px/500/lh 1.1, booking
  labels 22px/600, footer links 24px/300) + **Raleway** (sans body —
  booking CTA 600/20px, footer paras 18px). Section rhythm: section-padding
  120px 0, top-padding 120px, testimonial-padding 100px/180px, video-area
  650px, slider-height1 980px min-height (all responsive down ~420/300px).

## Section-by-section fidelity notes (build order)

1. **Preloader** — optional but in source: full-screen centered spinner +
   logo (`.preloader-circle`). Simple: brand monogram pulse, then fade out
   on mount (or omit; note the deviation).
2. **Header** — transparent/absolute over hero (`bg-transparent absolute
top-0 z-10 w-full`); LEFT logo (text brand "Shoreline" — serif);
   RIGHT: "Call Us: 10(88) 267 354" (`hidden lg:inline`, phone href computed
   at runtime from a spaced string — NO literal tel:), sage "Book Now"
   button (`bg-[#B8B8A0] px-[41px] py-4`, hover invert), hamburger
   (two-line `aria-expanded` toggle). Off-canvas: fixed full-screen panel
   (dark) with close ×, nav links Home / Rooms / About / Gallery / Blog
   (dropdown: Blog Details, Elements) / Contact, plus phone + email +
   social icons. Sticky on scroll: `fixed` + `bg-[#0a0a0a]`. Desktop nav:
   the source hides the inline nav (off-canvas only) — keep links reachable
   via the menu; do NOT add a desktop link bar that isn't in the source.
3. **Hero** — `min-h-[980px]` (md 680, sm 500, xs 420) photo bg (picsum
   seed — SCREEN the seed: needs a moody hotel-room/beach photo; verify
   white serif text stays readable over `bg-black/70` overlay
   `rgba(60,58,52,0.7)`); bounce down-arrow (`animate-bounce` custom keyframe
   or Tailwind animate-bounce) linking `#booking`; h1 "Shoreline" —
   `font-[Cormorant_Garamond] text-[144px]` responsive clamp, white, 500;
   tagline p "A chance to go offline and get in touch with nature." —
   white 50px font-light (clamp down on mobile).
4. **Booking bar** — `bg-[#85856D]` band (slightly overlapping or directly
   below hero); 4 columns (md: 2×2): Check In + Check Out date inputs,
   Guest select (Number of guest/Adult/Child/Older), dark CTA "Check
   Availablity" (`bg-[#3C3A34] text-white h-[70px] font-[Raleway] text-xl
font-semibold w-full` + search icon). Labels Cormorant 22px/600 white;
   inputs transparent, `border-b-2 border-white/50`, italic white
   placeholders, h-[47px], radius 0. Dates: native `<input type="date">`
   styled transparent, or custom popover — keep it simple + testable.
5. **Video teaser** — `bg-[#FAFAF8] pt-[120px]`; row: left h2 "The shelter
   is the Outcome of the Dream" (`font-[Cormorant_Garamond] text-[79px]`
   responsive), right two paras (`text-[#686865] text-xl`); below: full
   width video band `h-[650px]` (picsum) with centered play button —
   `size-[100px] rounded-full bg-white` + `text-[#F04506]` play icon +
   ripple ring (absolute inset ring animation). Source opens a YouTube
   modal; recreation: link with `aria-label` (inert/dead) or a lightweight
   modal — simplest is a dead anchor styled the same.
6. **Clients testimonial** — `bg-[#ECECDC]`; carousel of 6 quote cards
   (room photo + quote; center scale 1, sides 0.8 — the scale effect is
   optional polish); prev/next arrow buttons: white rect `w-[116px] h-[68px]`
   - gold `#C6A16E` chevrons (hover `#AFAF9F`); dots below. Under the
     slider: row — left h2 "Pampering Included", right resort paragraph
     (paraphrase). Carousel: React state (index + translate), `role="region"`
   - `aria-roledescription="carousel"`, arrow buttons `aria-label`.
7. **About** — `bg-[#FAFAF8]`; h2 "Joyful experiences for you and your
   family"; THREE alternating rows (image/caption, caption/image, image/
   caption): captions "A world-class restaurant", "Swimming Pool", "Party
   Center" + short para each. Desktop: white caption card overlapping the
   image (`lg:-ml-[100px]` on the caption column — source uses
   `left:-100px` on a white card; z-10; `p-[76px_50px_41px_63px]`); mirrored
   row uses `lg:-mr-[100px]`/order swap. Mobile: stack, no overlap.
8. **Company strip** — full-bleed `w-full` photo band (picsum,
   `container-fluid p-0` equivalent = no horizontal padding).
9. **Testimonials** — centered h2 "Hear what our past guests have to say"
   (`pt-[100px] pb-[180px]`); carousel of 3 slides: quote p + founder row
   (round img + name + role "Designer at Shoreline"); dots.
10. **Instagram** — full-bleed row of 5 square tiles (picsum, aspect
    square); hover: `bg-[#010a44]/30` overlay + white instagram icon
    (inline SVG).
11. **Footer** — `bg-[#FAFAF8]`; grid: col1 brand (logo text "Shoreline")
    - about para (`text-[#686865] text-lg`); col2 h4 "The Hotel"
      (`text-[#686865] text-[25px] font-semibold`) + Cormorant 24px/300 links
      Rooms · The Spa · Experiences · Offers · Contact (dead `#` anchors);
      col3 h4 phone "10 (78) 273 3563" + email link (mailto) + social icons
      (inline SVG: instagram, facebook, linkedin). Bottom bar: border-t +
      centered copyright: "© {year} All rights reserved | Made with ❤ at
      Component Dock" — MUST link https://www.componentdock.com/.
12. **Scroll-up** — fixed bottom-right double-chevron "Go to Top" button;
    on click `window.scrollTo({top: 0, behavior: 'smooth'})` (test with
    `window.scrollTo` spy).

## Build/task outline (implementer)

- [ ] Scaffold `apps/shoreline` (copy simplest existing app; package
      `@free-react-templates/shoreline`; `npm install` at root to register
      workspace + lockfile; `public/CNAME` = `shoreline.free.componentdock.com`,
      homepage = `https://shoreline.free.componentdock.com`)
- [ ] `index.html`: title "Shoreline — Beachfront Hotel & Resort", Google
      Fonts links (Cormorant Garamond 300–600 + Raleway 300–700)
- [ ] `src/index.css`: `@theme` tokens (olive `#85856D`, sage `#B8B8A0`,
      ink `#3C3A34`, paper `#FAFAF8`, cream `#ECECDC`, muted `#686865`,
      gold `#C6A16E`, coral sweep `#ec583a`, play `#F04506`)
- [ ] Components (TDD, 100% coverage): Preloader, Header (+OffCanvasMenu),
      Hero, BookingBar, VideoTeaser, ClientsCarousel, AboutRows,
      CompanyStrip, Testimonials, InstagramStrip, Footer, ScrollUp
- [ ] Data module (`src/data.ts`): nav links, booking options, carousel
      slides (6 quotes), about rows (3), testimonials (3), footer links —
      all placeholder copy paraphrased from the source kinds; phone as
      spaced string, href built at runtime
- [ ] Picsum seeds: screen hero + video-bg + about + rooms + instagram
      seeds (pixel-metric/browser check; hero must keep white text
      readable under overlay)
- [ ] Icons: lucide-react (calendar, users, search, play, chevrons, x,
      menu) + inline SVG brand icons (instagram/facebook/linkedin)
- [ ] `scripts/verify-app.sh shoreline` green; visual QA of the built
      bundle (hero overlay, booking bar overlap, about-card overlap,
      carousels)
- [ ] PR: mention source Ocheandeview, preview URL, tokens, renames,
      placeholder images; footer Component Dock link; then bookkeeping —
      mark BOTH TEMPLATES.md rows `[x]` + surge URL + `npm run readme:status`

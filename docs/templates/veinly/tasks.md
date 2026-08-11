# Veinly (ColorLib Miners) — Tasks & Design Notes

> Recreation of ColorLib "Miners" — free Bootstrap mining-company template
> (https://colorlib.com/wp/template/miners/) under the NEW name **Veinly**
> (a mineral vein is where miners dig — a semantic echo of the source name
> without reusing it; single lowercase word, no collision with `apps/`,
> `openspec/specs/` or `docs/templates/` — verified 2026-08-11), per the
> monorepo naming mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Miners" — page title "Miners &mdash; Colorlib
  Website Template". TEMPLATES.md category: **Bootstrap (216)**, first
  occurrence at line 453 (`- [ ]`, source NOT shipped anywhere). DUP-ROW
  TRAP: the `miners` slug also appears at lines 1099 (Business 365), 1350
  (Construction 29) and 2341 (One Page 91) — all `- [ ]` rows of the same
  template; ONE implementation covers all four rows (mark all `[x]` at
  bookkeeping). The recreation brands itself **Veinly**.
- **Live preview DOM analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/miners/` (HTTP 200, ~30 KB HTML +
  `css/style.css` ~22 KB + customized `css/bootstrap.min.css` ~30 KB; the
  preview is REACHABLE). Screenshot `miners-free-template.jpg` (1200×946,
  viewed in browser) matches the live DOM 1:1.
- **Visual design:** industrial corporate landing. Dark moody hero photo
  (underground mine shaft, `rgba(0,0,0,0.7)` overlay), LEFT-aligned large
  bold white headline "Best Miners In The World", light-grey lorem line,
  coral-outline "Get in touch" button, hero slider arrows + dots. Navbar:
  coral "MINERS" logo, 7 links, solid coral "Get Quote" button right.
  Below: white Investors row (2 mineral/rock photo tiles + "Our Investors"
  heading + outline button), CORAL `#dd6b4d` stats band (video block with
  play button overlapping from above + 4 big white counters), white team
  row (3 bordered rounded cards + social icons), white press row, light
  `#f8f9fa` testimonials (4 white quote cards), white blog row (2 cards),
  light contact row (form + "Call Us" info), dark `#333333` footer.
  Signature **coral `#dd6b4d`** accent; Nunito geometric sans-serif; 4px
  button rounding.
- **Section order (1:1, verified from live DOM):**
  1. Off-canvas mobile menu (`div.site-mobile-menu`): close toggler +
     body cloned from `ul.js-clone-nav` — the 7 nav links.
  2. Navbar (`header.site-navbar.js-sticky-header`, padding 1rem, z-index
     1999; sticky → `background: #fff` + shadow `4px 0 20px -5px
rgba(0,0,0,0.2)`, brand `#dd6b4d`): brand `a.site-logo` (uppercase
     1.2rem weight 900, line-height 0) "Veinly" with `text-primary`
     (coral) span; centered `ul.site-menu` 7 anchor links (Home /
     Investors / About Us / Press / Testimonials / Blog / Contact →
     `#home-section` etc.; `#000` links, margin 0 15px, padding 20px 0,
     `border-bottom: 2px solid transparent`, hover/active coral); right
     `div.toggle-button`: solid coral "Get Quote" `btn.btn-primary` (opens
     #exampleModal) + hamburger `site-menu-toggle` (d-lg-none).
  3. Hero (`div#home-section`): `div.owl-carousel.slide-one-item` with TWO
     slides `div.site-section-cover.overlay.img-bg-section` (bg hero_1.jpg
     / hero_2.jpg, cover; `:before` overlay `rgba(0,0,0,0.7)`; row 100vh /
     min 700px, ≤991px 70vh / 400px): `col-md-12.col-lg-7` — h1 "Best
     Miners In The World" (4.5rem white lh 1; 2rem ≤991px), lorem p (18px
     `#999999`, max-width 400px), coral-outline "Get in touch"
     `btn-outline-primary.border-w-2.btn-md`. Owl nav arrows 2rem
     `rgba(255,255,255,0.4)` → `#fff` hover, left/right 20px; dots
     centered bottom -30px.
  4. Investors (`div.site-section.block__73694#investors-section`, white):
     `container-fluid` > row no-gutters — TWO `col-6.col-lg-3.block__73422`
     tiles (inline bg image hero_2.jpg / hero_1.jpg, cover + fixed
     attachment; ≤991px height 400px) + `col-lg-6.p-lg-5`: "Our Investors"
     (block-heading-1, 3rem coral), lorem, outline "Get in touch" button.
  5. Stats band (`div.site-section.bg-primary#about-section`, **coral
     `#dd6b4d`**): `figure.block-img-video-1` (`margin-top: -10rem` —
     overlaps the section above; `a.popup-vimeo` → vimeo.com/45830194,
     `span.icon` play circle over img hero_1.jpg) + FOUR
     `block-counter-1` (`col-md-6.mb-4.col-lg-0.col-lg-3`): `span.number`
     white 4rem pb-20 mb-20, `span[data-number]` 15 / 392 / 39332 / 53500
     - `span.caption` (block, lh 1) "Year of Experience" / "Number of
       Engineers" / "Number of Employees" / "Number of Golds".
  6. Team (`div.site-section#team-section`, white): "Our Leadership"
     (block-heading-1) + THREE `block-team-member-1.text-center.rounded`
     (`col-lg-4.col-md-6.mb-4.mb-lg-0`; padding 30px, border 1px `#e9ecef`):
     img person_1/2/3.jpg, h3 name (Jean Smith / Bob Carry / Ricky
     Fisher), role (Mining Expert / Project Manager / Engineer), lorem,
     `block-social-1` icons (facebook / twitter / instagram / linkedin).
  7. Press (`div.site-section#press-section`, white): `col-lg-4` —
     block-heading-1 eyebrow span "Press Releases" + h2 "Press"; `col-lg-8`
     `ul.list-unstyled` — THREE `li.mb-4`: `h2.h4` title link (black,
     hover coral) "How To Invest In Mining Industry", `span.d-block.
text-secondary` "Apr 19, 2019", lorem excerpt.
  8. Testimonials (`div.site-section.bg-light.block-13#testimonials-
section`, **`#f8f9fa`**): centered block-heading-1 eyebrow
     "Testimonial" + h2; `div.owl-carousel.nonloop-block-13` — FOUR
     `block-testimony-1.text-center` (padding 20px): `blockquote` (white
     bg, padding 30px, italic 18px, `#000`, Georgia serif), img avatar
     (person_4/2/1/3.jpg), name (Ricky Fisher / Ken Davis / Mellisa
     Griffin / Robert Steward).
  9. Blog (`div.site-section#blog-section`, white): "Our Blog" +
     TWO `col-lg-6` cards: img (hero_2.jpg / hero_3.jpg), h2 title link
     "How to Invest In Mining Industry", meta "January 18, 2019 By James
     Cooper", lorem, "Read More".
  10. Contact (`div.site-section.bg-light#contact-section`, `#f8f9fa`):
      "Contact Us" + `col-lg-6` form (2× col-md-6 inputs then 2× col-md-12:
      placeholders "First name" / "First name" [SOURCE BUG — use Last
      name] / "Email address" / textarea "Write your message." rows 10;
      submit `input.btn.btn-block.btn-primary.text-white.py-3.px-5` value
      "Send Message") + `col-lg-4.ml-auto` info: "Need to know more on
      details? Call Us +1 392 3929 482" + lorem.
  11. Footer (`footer.site-footer`, **`#333333`**, padding 4em 0; headings
      16px white; links `#999999`): "About Us" + lorem; "Features"
      `ul.list-unstyled` (About Us / Press Releases / Testimonials / Terms
      of Service / Privacy / Contact Us); "Subscribe to Newsletter"
      (`div.input-group.mb-3`: input + appended button "Subscribe") +
      "Follow Us" (`block-social-1`: facebook / twitter / instagram /
      linkedin / heart); bottom `border-top` (rgba(255,255,255,0.1))
      copyright bar (own credit line, no Colorlib link).
  12. Modal (`div.modal.fade#exampleModal`): "Get A Quote" title + close ×
      - `modal-body.p-5` form identical to contact (First name / Last name
        / Email address / "Write your message." / "Send Message").
- **Design tokens (from `css/style.css` + `css/bootstrap.min.css`,
  verified 2026-08-11):**
  - Brand coral **`#dd6b4d`**: `.btn-primary` bg (Get Quote, Send
    Message), `.btn-outline-primary` (coral text/border), `.bg-primary`
    (stats band), `.text-primary` (logo span), `block-heading-1 h2`,
    nav link hover/active, sticky brand.
  - Buttons: `.btn` radius **0.25rem (4px)**, padding .375rem .75rem,
    transition none; `.btn-md` 8px 20px; outline = 2px coral border
    (`border-w-2`); submits `btn-block` + `py-3 px-5`.
  - Section bgs: white default; `bg-light` **`#f8f9fa`** (standard
    Bootstrap — testimonials + contact); stats band coral `#dd6b4d`;
    footer `#333333`; hero overlay `rgba(0,0,0,0.7)`.
  - Font **Nunito** (Google Fonts; body `#939393`, 1rem); testimonial
    quotes Georgia/serif italic 18px `#000`.
  - block-heading-1: eyebrow uppercase 12px ls .1em bold `#b8b8b8`; h2
    3rem coral.
  - Hero h1 4.5rem white lh 1 (2rem ≤991px); hero p 18px `#999999`
    max-width 400px; hero rows 100vh/min 700px (70vh/400px ≤991px).
  - Counter numbers 4rem white pb-20 mb-20; captions block lh 1.
  - Team cards padding 30px border 1px `#e9ecef` rounded; testimonial
    blockquote white bg padding 30px.
  - Navbar padding 1rem; brand 1.2rem uppercase weight 900 lh 0; links
    `#000 !important` hover coral; sticky white bg + shadow
    `4px 0 20px -5px rgba(0,0,0,0.2)`, brand coral.
  - Footer `#333333` padding 4em 0, headings 16px white, links `#999999`,
    bottom border rgba(255,255,255,0.1).
  - Section padding: `.site-section` 7rem 0.
- **Recreation decisions:** Tailwind grid (NO Bootstrap/owl-carousel/
  fancybox/magnific-popup); sticky navbar transparent over hero → white +
  shadow on scroll; hero 2-slide slider (arrows + dots; auto-advance
  optional) with dark overlay and coral-outline CTA (link to
  #contact-section); investors 2 tiles + content; stats band on coral bg
  with overlapping video block (circular play button,
  `aria-label="Play video"`, inert or placeholder link — no embed) and 4
  counters rendering FINAL values statically (15/392/39332/53500; count-up
  animation optional + fake-timer-safe); team 3 bordered cards; press 3
  items; testimonials static 4-col grid of white quote cards (source uses
  an owl carousel — static grid is the documented simplification); blog 2
  cards; contact form fixes the source's duplicated "First name"
  placeholder (First name + Last name); quote modal reuses the contact
  form; footer dark with own credit line (no Colorlib link). Placeholder
  images `picsum.photos/seed/veinly-<n>/<w>/<h>` (hero ×2 with DARK
  mine-adjacent seeds — check the seed renders a dark/underground-ish
  scene, see picsum pitfall in the replication skill; investors tiles ×2,
  video block, team ×3, testimonials ×4, blog ×2); icons via
  `lucide-react`; social icons as inline SVG brand icons (lucide removed
  brand icons); title "Veinly — Mining Company Template";
  "Miners" → "Veinly" everywhere.

## Tasks (implementation order, TDD)

1. Scaffold `apps/veinly` (copy simplest existing app, rename package to
   `@free-react-templates/veinly`); `npm install` at root to register the
   workspace in `package-lock.json` (implementer's job — prep stream never
   touches the lockfile); verify `grep -c "free-react-templates/veinly"
package-lock.json`. Copy `vite.config.ts` `injectUiSource()` pattern
   (see docs/conventions.md).
2. `index.html`: title "Veinly — Mining Company Template", Google Fonts
   `<link>` Nunito.
3. `src/index.css`: `@theme` tokens — brand coral `#dd6b4d`, light section
   bg `#f8f9fa`, footer bg `#333333`, hero overlay `rgba(0,0,0,0.7)`, body
   text `#939393`, heading coral; Nunito font-family.
4. Tests (red) → `App.tsx` + components:
   - `Navbar.tsx` — brand "Veinly" (uppercase bold, coral accent), 7
     anchor links, solid coral "Get Quote" button, hamburger → off-canvas
     menu with close control; sticky → white bg + shadow + coral brand
     (house pattern: scroll event + `act()`).
   - `HeroSlider.tsx` — 2 slides (bg photo + `rgba(0,0,0,0.7)` overlay,
     left-aligned "Best … In The World" h1, lorem line, coral-outline
     "Get in touch" → #contact-section), prev/next arrows + dots
     (aria-labels; assert slide switching).
   - `Investors.tsx` — 2 photo tiles + "Our Investors" 3rem coral heading
     - paragraph + outline button.
   - `StatsBand.tsx` — coral `#dd6b4d` bg; video block (image + circular
     play button `aria-label="Play video"`) overlapping upward; 4
     counters (15 / 392 / 39332 / 53500 + captions).
   - `Team.tsx` — "Our Leadership" + 3 bordered rounded cards (photo,
     name, role, blurb, social row — inline SVG brand icons).
   - `Press.tsx` — eyebrow "Press Releases" + "Press" h2 + 3 title/date/
     excerpt items.
   - `Testimonials.tsx` — `#f8f9fa` bg, "Testimonial" heading, 4 white
     italic serif quote cards (avatar + name).
   - `Blog.tsx` — "Our Blog" + 2 image post cards (title, meta "January
     18, 2019 By James Cooper", excerpt, "Read More").
   - `Contact.tsx` — `#f8f9fa` bg, "Contact Us", form (First name / Last
     name / Email address / message + full-width solid coral "Send
     Message"; per-field validation, success state swaps out the form —
     assert `queryByLabelText` absent after submit) + "Call Us +1 392
     3929 482" info column. NOTE tel: redaction pitfall — build the phone
     href at runtime from a spaced string (see replication skill).
   - `Footer.tsx` — `#333333`; "About Us" + paragraph, "Features" link
     list (6 links), "Subscribe to Newsletter" (email input + Subscribe
     button), "Follow Us" socials, copyright bar (own credit).
   - `QuoteModal.tsx` — "Get A Quote" modal opened by navbar "Get Quote",
     same fields as contact, close control; test open/close.
   - Decorative photo strips have NO `img` role in the a11y tree — query
     with `container.querySelectorAll('img')`.
5. `scripts/verify-app.sh veinly` → green; `npm run spec:validate`.
6. PR description must include: source template (ColorLib Miners,
   `https://colorlib.com/wp/template/miners/`), live preview URL analyzed
   (`https://preview.colorlib.com/theme/miners/`), design tokens
   (`#dd6b4d`, `#f8f9fa`, `#333333`, `#939393`, Nunito, Georgia quotes),
   what differs (Veinly name, picsum placeholders, static testimonial grid
   vs owl carousel, fixed "First name"→"Last name" placeholder bug, no
   vimeo embed / fancybox / Colorlib footer link, reworded copy).
7. Ship: mark ALL FOUR `miners` TEMPLATES.md rows `[x]` (lines 453, 1099,
   1350, 2341) + surge URL + `npm run readme:status`; deploy URL
   `https://free-react-templates-veinly.surge.sh/`.

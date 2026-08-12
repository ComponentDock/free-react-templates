# Smelter (ColorLib Braxit) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-smelter` by an implementer stream.

## Design notes

- **Original:** ColorLib "Braxit" — free industrial/manufacturing website
  template. Source: https://colorlib.com/wp/template/braxit/. New name:
  **smelter** (an industrial furnace — fits the manufacturing theme; single
  lowercase word, no collision with `ls apps/` or existing specs). Braxit
  appears once in TEMPLATES.md (line 352, Bootstrap section, first unchecked
  without a prep — the claim).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/braxit/`
  (HTTP 200, 73KB) + stylesheet `assets/css/style.css` (198KB). Full rendered
  DOM extracted; structure below is from the DOM + CSS tokens. Screenshot
  `braxit-free-template.jpg` (1200×946) confirms: dark navy top bar (phone,
  email, "Free Quote" white button), white nav with centred links + search
  icon, full-width hero photo (white modern architecture in sunset light)
  with bold white headline "Market leading Manufacturer", orange/red
  `#ff3514` "Learn More" arrow button + circular video-play button, light
  two-column about with big stats (454 m / 127 / 20) and an orange overlay
  box "20 Years of experience" on the crane photo, then white/light-grey
  content sections (image cards, features, numbered projects, CTA,
  testimonial, contact form, blog, map, footer).
- **Structure observed (1:1):**
  1. `header.header-area`: `div.header-top` (dark navy `#140c40`): phone
     `+880 278 367 367` + email `brexitsupport@gmail.com` (left); `a.boxed-btn`
     "Free Quote" (right, white bg red text). `div.header-bottom
.header-sticky` (white): logo img → text logo "Smelter"; `ul.nav`:
     **Home, About, Services, Project, Blog (dropdown: Blog, Blog Details,
     Element), Pages (dropdown: Project Details, Services Details, Element),
     Contact**; search icon (mobile: hamburger).
  2. `div.slider-area` (765px, `h1_hero.png` cover, fixed attachment): 2
     `div.single-slider.slider-height` slides: `h1` "Market leading
     **Manufacturer**" (70px/700/white) + `p` "The right candidate may
     exist, but talented people" + `a.btn` "Learn More" (gradient
     `linear-gradient(to left, #FF3514, #d62d12, #FF3514)`, arrow icon slides
     right on hover). `div.video-icon`: white translucent circle + red play
     triangle.
  3. `div.about-low-area.section-padding40`: `div.section-tittle` `span`
     "About Us" (red kicker) + `h2` "We have all your needs, from micro
     macro" + paragraph; stats: **454 m Delivery Packages · 127 Countries
     Covered · 20 Years of experience**; right image (crane at port) +
     orange overlay box "20 Years of experience".
  4. `div.gallery-area` (container-fluid p-0, 3 cols): 3 `div.single-gallery`
     image cards (bg imgs gallery1/2/3.png) with hover `thumb-content-box`:
     `h3` "Mechanical Engineering" ×3 + paragraph + "Learn More" link.
  5. `div.categories-area.section-padding40.gray-bg` (`#f5f9fb`): centered
     `span` "Features" + `h2` "To increase productivity and cost
     effectiveness on the market." + 4 `div.single-cat` cards (icon +
     `h5` + paragraph): **Quality, Reliablity, Experience, Manufacturing**.
  6. `div.service-area.section-bg` (bg `section_bg01.png`): 3
     `div.single-main` numbered project cards (`span` "01."/"02."/"03." +
     `h4` title + paragraph + `a` "View More"): **01. Building Yead, 02.
     Meghna Bridge, 03. Kalis Vadru**; each also has a
     `span.transparrent-btn` showing the adjacent project name (02./03.) —
     decorative, can drop or keep as static chip.
  7. `section.wantToWork-area.gray-bg` (`wants-wrapper.w-padding2`): `h2`
     "Up to 40% Off" + paragraph + `a.btn.w-btn` "Learn More" (arrow).
  8. `div.contact-form.testimonial-area.section-padding40.mb-40`: `span`
     "Testimonial" + `h2` "Some amazing words from our clients" + carousel
     (2 slides): blockquote + author "- Micky Mouse, Business Man".
  9. `div.wants-wrapper` (inside contact area): `h2` "Need to make an
     enquiry?" + paragraph + "Learn More" button.
  10. `div.form-wrapper`: `h2` "Drop your message" + form: **Your Name**,
      **Email**, **Phone no.**, **Topic** select (Topic one / Topic Two /
      Topic Three), **Message** textarea + `a.btn` "Send Message".
  11. `div.home-blog-area.pb-bottom`: `span` "From News" + `h2` "News &
      Media center" + paragraph + `a.all-btn` "View All" (underlined red) +
      2 `div.home-blog-single` cards: image, date "22 Apr 2020", `h3` title
      ("We might track your usage patterns to see" / "The massive stadium
      screens at the MCG"), excerpt.
  12. `div.Map-area`: Google Maps embed → static map placeholder in
      recreation.
  13. `section.wantToWork-area` (2nd, after map, `w-padding3`): logo + 2
      buttons `a.btn` (filled) + `a.btn2` (outlined red) both "Learn More".
  14. `footer` (`#f5f9fb`, 4 `div.single-footer-caption`): **Company**
      (Why choose us, Review, Customers, Blog, Carrier); **Production**
      (Technology, Products, Quality, Sales geography); **Contact Us**
      (Address: 789/A green avenue Dhanmondi, Dhaka; Phone: +10 783 3674
      356; Email: company@gmail.com); **Newsletter** ("Subscribe our
      newsletter to get updates about our services" + email + Subscribe).
      `div.footer-bottom-area` (`#140c40`): copyright → repo-standard credit
      - social icons (twitter, facebook, globe, instagram).
- **Design tokens:**
  - Font: **Muli** (Google Fonts `@import` in style.css, weights 300–900);
    load via `<link>` in index.html.
  - Brand red-orange **#ff3514**: gradient buttons (`#FF3514 → #d62d12`),
    section kickers, `.btn2` outline text, `.all-btn` underline, slider
    arrows (#ff1313).
  - Dark navy **#140c40**: header-top, footer-bottom.
  - Heading ink **#072366**: `h2` (40px/800), hero.
  - Body grey **#999999/#888888/#a3a3a3**; neutrals **#fff/#f5f9fb** (gray-bg
    - footer)/**#f9f9ff/#f0e9ff**.
  - Buttons: `.btn` radius 0, capitalize, padding 10px 65px 10px 31px
    (`w-btn`: 18px 65px 18px 33px), white text, weight 700, right-arrow icon
    slides right on hover. `.boxed-btn`: white bg red text 18px 44px, hover
    flips. `.btn2`: transparent red text. `.all-btn`: underline + letter-spacing
    on hover.
  - Cards shadow `0px 22px 57px 0px rgba(34,41,72,0.05)`; section-padding40;
    footer-padding 160px 0 120px.
- **Implementation notes:**
  - Hero uses `background-attachment: fixed` on the original — approximate
    with a plain cover bg (fixed attachment is janky on mobile) or keep the
    parallax feel; note in PR.
  - The two hero slides carry identical copy in the original; a carousel with
    the same content twice is faithful — or simplify to one slide (note in
    PR).
  - "20 Years of experience" appears both as a stat AND as the orange overlay
    badge on the image — keep both like the original.
  - The gallery cards' hover overlay covers the image with a semi-transparent
    panel (title + blurb + link) — implement with group-hover utilities.
  - Projects section: numbered chips 01/02/03 + transparent adjacent-name
    chips are decorative; keep the numbered style, drop the duplicate chip if
    it complicates layout.
  - Contact form: zod validation (name, email, phone, topic select, message);
    block submit until valid; per-field errors.
  - Map: static placeholder (grey panel with a MapPin icon or a picsum map-ish
    image) — no Google Maps iframe dependency.
  - Footer newsletter: email input + subscribe button (no backend).
  - Images: `picsum.photos/seed/smelter-N/w/h` (hero ~1600×765, about
    ~600×450, gallery 3×~500×380, blog 2×~370×230, map ~1600×400). Fonts via
    `<link>`; icons lucide-react (ArrowRight, Play, Search, BadgeCheck,
    ShieldCheck, Award, Factory, MapPin, Phone, Mail, social icons).

## Tasks

- [ ] Scaffold app (copy simplest existing app; rename package
      `@free-react-templates/smelter`; `npm install` at root before
      committing so lockfile registers the workspace).
- [ ] Register `injectUiSource()` in `vite.config.ts` (see
      docs/conventions.md).
- [ ] TDD red: write section tests first (Header, Hero, About, Gallery,
      Features, Projects, CtaStrip, Testimonials, EnquiryCallout,
      ContactForm, Blog, MapSection, Footer, App composition) mirroring the
      spec scenarios.
- [ ] Theme tokens in `index.css` `@theme`: brand `#ff3514` (+ gradient
      stops `#d62d12`), navy `#140c40`, ink `#072366`, greys, `#f5f9fb`, font
      Muli.
- [ ] Header: navy top bar (phone/email + Free Quote button) + white sticky
      nav, dropdowns (Blog, Pages), search icon, mobile hamburger.
- [ ] Hero: full-bleed industrial bg, 70px white headline + accent word,
      sub-line, gradient Learn More arrow button, circular play button,
      slide carousel.
- [ ] About: kicker + heading + copy + stats (454m/127/20) + image with
      orange overlay badge.
- [ ] Gallery: 3 image cards with hover overlay (title + blurb + link).
- [ ] Features: grey 4-card grid (Quality, Reliability, Experience,
      Manufacturing).
- [ ] Projects: numbered 01/02/03 cards + View More on image background.
- [ ] Offer CTA strip: "Up to 40% Off" + arrow button.
- [ ] Testimonials: carousel with quote + author.
- [ ] Enquiry callout: "Need to make an enquiry?" + button.
- [ ] Contact form: 5-field validated form + "Send Message".
- [ ] Blog: header + View All + 2 post cards (date chip, title, excerpt).
- [ ] Map: static placeholder between blog and final CTA.
- [ ] Final CTA: logo + filled + outlined red buttons.
- [ ] Footer: 4 columns + newsletter + dark bottom bar with social icons +
      repo-standard credit.
- [ ] App.tsx composition + document title "Smelter — Industrial &
      Manufacturing".
- [ ] `npm run verify:app -- smelter` green (typecheck, lint, 100% coverage,
      build) — FAST_MODE gate; full `npm run gate` runs in CI/nightly.
- [ ] PR to main (branch `feat/template-smelter`), squash-merge immediately,
      mark `[x]` + surge URL + homepage + `npm run readme:status` (AGENTS.md
      rule 7).

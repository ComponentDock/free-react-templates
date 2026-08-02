# Stallion (Colorlib Horse Club) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Vista PR (#4) awaits review.
> Implementation ships later on `feat/template-stallion`.

## Design notes (replication findings)

- **Original:** ColorLib "Horse Club" — horse club / riding consultancy
  (source: https://colorlib.com/wp/template/horse-club/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/horseclub/
  (HTTP 200; note the live-preview slug is `horseclub`, NOT `horse-club` —
  the latter 404s). Full rendered DOM + `css/main.css` (51.9KB) extracted.
- **Visual design (from DOM + CSS tokens):** full-screen dark hero over a
  horses photo with a centered white headline; pink-red brand color
  (`#f6214b`) with an orange→red gradient (`#f45622` → `#f53e54`) accenting
  the top bar, hero CTA, circular pricing badges, gallery hover overlay, and
  booking submit button; light-gray (`#f9f9ff`) pricing section; dark
  booking section over a photo with testimonials in white text and orange
  star ratings.
- **Structure (1:1, section order):**
  1. Top bar: email `info@horseclub.com` + phone `+880 123 12 658 439`.
  2. Navbar: logo "Horse Club"; links Home, About, Service, Training,
     Events, Pricing, Blog, Contact (demo also has dropdown extras).
  3. Hero (`banner-area`): full-screen bg image + dark overlay
     (rgba(0,0,0,.7)), kicker "Introducing Horse Club", h1 "Inter relation
     Between Horse & Rider", gradient **Book Consultancy** button.
  4. About-video (`about-video-area`): left video thumbnail with play button
     (YouTube link in original), right kicker "Brand new app to blow your
     mind", h1 "We've made a life that will change you", lorem paragraph,
     **Get Started Now** button (`primary-btn`).
  5. Features (`feature-area`): 6 tiles — **Expert Technicians, Professional
     Service, Great Support, Technical Skills, Highly Recommended, Positive
     Reviews** — each with an icon, title, and lorem blurb.
  6. Home-about (`home-about-area`): left image (about-img.png), right kicker
     - h1 "We've made a life that will change you", longer lorem,
       **Get Started Now**.
  7. Pricing (`price-area` bg `#f9f9ff`): "Choose the best plan that suits
     you" + 4 cards — **01 Basic £199.00**, **02 Economy £299.00**,
     **03 Premium £399.00**, **04 Enterprise £499.00** — each with a circular
     gradient number badge (140px, 30px ring of `#f9f9ff`), "For the
     individuals", feature list (Secure Online Transfer, Unlimited Styles for
     interface, Reliable Customer Service), and **Purchase** button.
  8. Booking (`booking-area`, bg image + rgba(0,0,0,.8) overlay): left
     testimonial carousel (Fannie Rowe, Hulda Sutton — 5-star ratings, orange
     checked stars, white text), right **Appointment Form**: Your name, Email
     Address, Phone Number, Date & time, Message textarea + gradient submit
     (`btn-lg`).
  9. Latest blog (`latest-blog-area`): "Latest News from our Blog" + 2 posts
     (img b1/b2.jpg, h4 "Portable latest Fashion for young women", lorem,
     date "31st January, 2018", category Travel Life style).
  10. Gallery (`gallery-area`): 6-image carousel (g1–g6.jpg) with gradient
      hover overlay + caption.
  11. Footer: **About Us** (lorem), **Contact Us** (lorem + 2 phone numbers),
      **Newsletter** ("You can trust us. we only send offers, not a single
      spam." + email input + subscribe) + social icons (facebook, twitter,
      dribbble, behance) + copyright.
- **Design tokens extracted from `css/main.css`:**
  - Primary **`#f6214b`** (pink-red) — `.primary-btn`, hover accents.
  - Gradient **`linear-gradient(0deg, #f45622 0%, #f53e54 100%)`** — top-bar
    spans, hero `.genric-btn`, `.package-no` circles, `.booking-right .btn-lg`,
    `.single-gallery .thumb div` overlay.
  - Font: **"Poppins", sans-serif** (Google Fonts via `<link>` at
    implementation).
  - Light section bg `#f9f9ff`; dark text `#222222`; muted `#777777`.
  - Banner overlay rgba(0,0,0,.7); booking overlay rgba(0,0,0,.8).
  - Cards: white bg, `border-radius: 5px`.
  - Buttons: uppercase, white text, line-height 42px, padding 0 30px; hover →
    transparent bg + white border.
  - Testimonial stars: orange (`checked`).
- **Recreation name:** Stallion (horse-theme, distinct from "Horse Club" and
  all existing names). App folder `apps/stallion`, package
  `@free-react-templates/stallion`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/stallion-<n>/<w>/<h>`); lucide-react icons (replaces
  FontAwesome/Linearicons); Poppins via Google Fonts; forms prevent default
  (no backend); brand red + gradient in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-stallion/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/stallion` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/stallion`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-stallion`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).

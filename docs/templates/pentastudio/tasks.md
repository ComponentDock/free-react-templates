# PentaStudio (ColorLib "Five Star") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-pentastudio` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Five Star" — free art/crafting agency HTML template
  (source: https://colorlib.com/wp/template/five-star/). Listed in TEMPLATES.md
  line 1469 under Bootstrap (216); duplicate row under Business category.
- **Preview REACHABLE (HTTP 200):** `https://preview.colorlib.com/theme/five-star/`.
  DOM fetched (`/tmp/fivestar-preview.html`, 19,836 bytes) + stylesheet
  `css/main.css` (`/tmp/fivestar-main.css`, 33,235 bytes) + TEMPLATES.md
  screenshot (`five-star-art-crafting-website-template.jpg`).
- **Aesthetic:** Clean, modern creative-agency look with a bold red accent.
  White header, darkened hero banner with red heading, photo thumbnails
  alongside descriptive text, a dark carousel section with white card,
  light `#f9faff` service sections, a red-tinted video section, a contact
  section with dark form, and a dark `#222` footer. Single vibrant red
  `#f5204b` accent used for every CTA, heading, icon, and hover state.
  Single font: Poppins everywhere. Buttons are pill-shaped (20px radius).
- **jQuery plugins in the source** (owl-carousel for the experience carousel,
  jQuery ajaxchimp for newsletter, jQuery for hamburger toggle) — implement
  with React state: a React carousel for the 3 experience slides, a hamburger
  toggle for mobile nav.
- **Font:** Single family — `"Poppins", sans-serif` (Google-imported, weights
  300/400/500/600). Loaded via inline `<style>` in the source; use a
  `<link>` in `index.html` instead.
- **Buttons:** `.primary-btn` = transparent bg, `1px solid #eee` border,
  `#f5204b` text, `border-radius: 20px` (pill), uppercase, 500 weight,
  `padding: 0 30px`, `line-height: 40px`. Hover: `#f5204b` bg, white text.
  `.white-bg` variant: white bg (used in contact form and newsletter).
- **Copy is placeholder/Lorem** — paraphrase freely, keep the same content
  kinds: nav (Home / Generic / Elements), hero ("Crafting Best Experience"
  / "Art and Crafting / Acting and Philosophy"), experience ("From the root
  of experience We dig out the best talent"), services (4× "Vector
  Illustration"), video (same heading + description), services-2 (3× "Vector
  Illustration"), contact (Address / Email / Phone), footer (About Agency
  links / Newsletter / Instafeed).
- **Source typos:** "exprience" (experience), "Messege" (Message) — fix all
  typos in the React recreation.
- **Video overlay tint:** The `.video-area` overlay uses `rgba(245,32,75,0.75)`
  (brand red at 75% opacity) — unique and distinctive, recreate faithfully.
- **Instafeed:** 8 small images in a 25%-width grid (4 per row) in the footer
  — use picsum thumbnails.

## Structure (top → bottom, single page)

1. **Header** (`.default-header`, white bg) — logo image left; `.main-menubar`
   right: nav links (Home / Generic / Elements) hidden on mobile, hamburger
   `.menu-bar` icon (Linearicons `lnr-menu`). Mobile: hamburger → dropdown
   toggle (jQuery in source → React state).
2. **Hero** (`.banner-area`, bg photo + `.overlay` with `rgba(0,0,0,0.75)`,
   `.fullscreen` height) — centered: h1 "Crafting Best Experience" (60px
   Poppins 600, `#f5204b`, responsive 40px on mobile) + p subtitle (white
   16px "Art and Crafting / Acting and Philosophy").
3. **Experience** (`.exprience-area`, `.section-gap` = 120px padding, white bg)
   — row: 2 `.exprience-thumb` columns (col-3 each, `min-height: 400px`,
   bg cover photos) + `.exprience-content` (col-6, padding 20px 0 30px):
   h2 "From the root of experience We dig out the best talent" (36px `#222`)
   + h6 subtitle (16px 400 `#222`, mb-20) + p paragraph (mb-30) +
   `.primary-btn` "View Details".
4. **Carousel** (`.carousel-area`, `.section-gap`, bg photo + `.overlay` with
   `rgba(0,0,0,0.25)`) — right-aligned (col-lg-6/col-md-9): white card
   (`.active-exprience-carousel .item`, `background: #fff`, `padding:
   100px 60px`, responsive 50px 15px on mobile): h3 (36px `#f5204b`,
   line-height 1.25em, mb-20) + p (mb-0). 3 carousel items, one visible
   at a time. `.carousel-trigger` (absolute right, outside card): next +
   prev buttons (40px square, white bg, `border: 1px solid #eee`; hover:
   `#f5204b` bg, white text, `lnr-arrow-right` / `lnr-arrow-left` icons).
   Implement as React state carousel.
5. **Services 1** (`.service-area`, bg `#f9faff`, padding 90px 0 120px) —
   4 `.single-service` columns: `.icon` (130px square, white bg, `border-radius:
   3px`) with centered Linearicons icon (36px `#f5204b` 600) + `.desc` (mt-30,
   text-center): h4 (18px 500, mb-10) + p (mb-0). Titles: all "Vector
   Illustration" (placeholder). 4-col → 2-col → 1-col on mobile.
6. **Video** (`.video-area`, `.section-gap`, bg photo + `.overlay` with
   `rgba(245,32,75,0.75)`) — 2-column: left (col-lg-6/col-md-5): `.video-wrap`
   (bg photo, dark overlay `rgba(0,0,0,0.75)`, `box-shadow: 0.872px 9.962px
   30px rgba(0,0,0,0.3)`, centered `.play-btn` image — implement as a
   decorative play button/link); right (col-lg-6/col-md-7): `.video-content`
   (padding 60px 60px 60px 30px): h3 white (36px, mb-20) + p white (mb-0).
   Same heading as carousel: "From the root of experience We dig out the
   best talent".
7. **Services 2** (`.service-area-2`, padding 90px 0 120px, white bg) —
   3 `.single-service` columns (col-md-4): horizontal layout (`d-flex
   justify-content-between align-items-center`): `.icon` (90px square,
   `#f9faff` bg, `border-radius: 3px`) with Linearicons icon (36px `#f5204b`)
   + `.desc` (ml-20, text-left): h4 (18px 500) + p (mb-0).
8. **Contact** (`.contact-area`, `.section-gap`, bg `#f9faff`) — 2-column:
   left (col-lg-5): 3 `.single-address` blocks, each with `.icon` (60px
   square, white bg, `border-radius: 3px`, Linearicons icon 24px `#222`;
   hover: bg `#f5204b`, icon white) + `.desc` (ml-30): h5 (16px 500) +
   p/a links. Address / Email Address (2 email links) / Phone Number (2
   phone links — omit `tel:` literals, use dummy numbers or text). Right
   (col-lg-6 ml-auto / col-md-7): `.contact-form` (bg `#222`, padding
   40px 30px): name input + email input + textarea (`.common-textarea`,
   height 150px, resize none) + "Send Message" button (`.primary-btn
   white-bg`, ml-auto). Inputs: transparent bg, `border: 1px solid
   rgba(111,117,152,0.3)`, line-height 48px, `#777` text.
9. **Footer** (`.section-gap`, bg `#222222`) — 3-column widget area:
   - About Agency (col-lg-3/col-sm-6): h6 (white uppercase 500, mb-20) +
     `.footer-nav` list (4 items: Managed Website / Manage Reputation /
     Power Tools / Marketing Service; white, hover `#f5204b`)
   - Newsletter (col-lg-6/col-sm-6): h6 + p (white, mb-0) +
     `.subscription` form: email input (60% width, `#f9f9ff` bg,
     `border-radius: 25px`, line-height 40px) + "Get Started" button
     (`.primary-btn white-bg`)
   - Instafeed (col-lg-3/col-sm-6): h6 + `.instafeed` grid (8 images,
     25% width each, 4 per row, margin 5px each)
   Footer bottom bar (`.footer-bottom`, padding-top 40px): copyright text
   (white, heart icon `#f5204b`, "Component Dock" link →
   https://www.componentdock.com/) + 4 `.footer-social` icon links (30px
   squares, `#111` bg, white icons; hover: `#f5204b` bg). Icons: inline SVG
   for Facebook / Twitter / Dribbble / Behance.

## Implementation tasks (for the implementer stream)

- [ ] `cp -r` scaffold from the simplest existing app; rename package to
      `@free-react-templates/pentastudio`; `npm install` at repo root; CNAME +
      homepage `pentastudio.free.componentdock.com`
- [ ] `src/index.css` `@theme` tokens: brand `#f5204b`, body `#777`,
      heading `#222`, surface `#f9faff`, dark `#222`, dark-alt `#111`;
      Google Fonts `<link>` in `index.html`: Poppins (300/400/500/600)
- [ ] `src/data.ts` — nav links (3), hero text, experience content,
      carousel items (3), services (4), video content, services-2 (3),
      contact addresses (3 with types), contact form labels, footer
      widgets (About Agency links 4, newsletter, instafeed 8 images),
      social links (4)
- [ ] Components: `Header` (white, logo + 3 nav links + hamburger mobile
      toggle), `Hero` (bg photo + 75% black overlay, centered red heading +
      white subtitle), `Experience` (2 photo thumbs + text + "View Details"
      button), `ExperienceCarousel` (React state carousel, 3 items, white
      card right-aligned, prev/next arrow buttons), `Services` (4 centered
      icon cards on light bg), `VideoSection` (red-tinted overlay, video
      thumbnail with play button left + white text right), `Services2`
      (3 horizontal icon+text cards), `Contact` (3 address blocks with
      hover + dark contact form), `Footer` (3-col widgets + copyright
      with Component Dock link + social icons)
- [ ] Tests per section mirroring the spec Gherkin scenarios, 100%
      coverage (carousel navigation, mobile menu toggle, form interactions,
      address hover states)
- [ ] Subject-screen picsum seeds (hero, 2 experience thumbs, carousel bg,
      video bg + thumbnail, 8 instafeed images) — prefer creative/agency
      shots; pin seeds in PR
- [ ] `bash scripts/verify-app.sh pentastudio` green; PR with source,
      preview URL, tokens, diffs (name, placeholder images, React carousel
      instead of owl-carousel, React hamburger instead of jQuery, lucide
      icons replacing Linearicons, Component Dock footer credit);
      squash-merge immediately

## Verification notes / pitfalls

- Desktop + mobile navs may render duplicate links in the DOM — use
  `getAllByRole` and index the mobile one last (skill pitfall).
- jsdom applies injected Tailwind CSS, so `hidden lg:flex` desktop nav
  lists are `display:none` and `getByRole` excludes them — query desktop-only
  links with `{ hidden: true }`; CSS `uppercase` does NOT change accessible
  names, query raw text ('Home'), not 'HOME'.
- `aria-current={cond}` renders `aria-current="false"` — use
  `aria-current={cond ? 'true' : undefined}`.
- The video section overlay uses `rgba(245,32,75,0.75)` (brand red at 75%
  opacity) — this is the unique tint. The video-wrap inside has a separate
  dark overlay `rgba(0,0,0,0.75)` — these are two nested overlays.
- The carousel trigger buttons are positioned `right: -100px` (outside the
  card on desktop) — on screens below 1199px they move to `right: 110%`.
  Implement with responsive Tailwind classes or CSS.
- The `.exprience-thumb` photos have `min-height: 400px` with `background-size:
  cover` — ensure the container doesn't collapse on short images.
- The contact form is inside a dark `#222` container — inputs have transparent
  backgrounds with subtle borders (`rgba(111,117,152,0.3)`). The "Send
  Message" button uses `.primary-btn white-bg` (white bg, red text).
- The newsletter subscription input has `border-radius: 25px` (pill shape)
  and `background: #f9f9ff` — different from the regular inputs.
- The instafeed is an 8-image grid at 25% width each — use 8 small picsum
  thumbnails. The source has `margin: 5px` on each image.
- No `tel:` literals anywhere (secret-scan rewrites them) — the source
  has phone numbers in the contact section; use dummy numbers or text.
- Social icons: source uses Font Awesome 4.7 (fa-facebook, fa-twitter,
  fa-dribbble, fa-behance) — replace with inline SVG paths (lucide-react
  removed brand icons).
- The hamburger menu uses Linearicons (`lnr-menu`) — replace with a
  lucide-react `Menu` icon or inline SVG.
- `getByText(/PentaStudio/)`-style queries can match multiple elements
  (logo vs copyright) — anchor with `/^PentaStudio$/` where the word
  repeats.
- Source has a typo "Messege" in the textarea placeholder — fix to "Message".
- Source has "exprience" in class names and section comments — use correct
  spelling "experience" in React component/section names.

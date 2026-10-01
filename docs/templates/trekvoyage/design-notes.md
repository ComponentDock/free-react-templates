# Trekvoyage — design notes

Recreation of ColorLib **Travel2** (travel agency landing template).
Source: https://colorlib.com/wp/template/travel2/ ·
Preview analyzed: https://preview.colorlib.com/theme/travel2/
(HTTP 200, 27,890 bytes HTML + 33,805 bytes `css/style.css` — note this
theme serves `style.css`, NOT `main.css`; 2026-10-01; saved to
`/tmp/travel2-preview.html`, `/tmp/travel2-style.css`).
Screenshot reviewed: `travel2-free-template.jpg` (hero treatment
authoritative; demo brand "Travel." in the screenshot is NEVER reused).
The preview is an Untree.co-style build (`untree_co-section` classes).

## Structure order (1:1 with preview DOM)

1. Navbar — `position: absolute` (NOT fixed; scrolls away), transparent
   over the hero, 20px vertical padding. Wordmark "Travel." (Playfair
   24px white) left; links right at 14px `rgba(255,255,255,0.7)` → white
   on hover: Home, Dropdown ▾, Services, About, Contact Us. Dropdown =
   white panel `min-width: 180px`, shadow `0 2px 10px -2px
   rgba(0,0,0,0.1)`, black links → `#08d9d6` on hover: Elements (group
   label), Menu One, Menu Two ▸ (Sub Menu One, Sub Menu Two, Sub Menu
   Three), Menu Three. Mobile: burger → white 300px off-canvas panel
   from the right (shadow `-10px 0 20px -10px rgba(0,0,0,0.1)`), black
   links indented 20/40/60px per level, teal hover/active, circular
   collapse arrows.
2. Hero — 100vh, min-height 670px. Slider of 5 photos (source:
   slider-1..5.jpg) crossfading via `.active { opacity: 1 }`, object-fit
   cover; light overlay `rgba(0,0,0,0.2)` via `:before`. Centered intro
   (max-width 800px): white Playfair h1 "Travel to the most beautiful
   places in the world, like " + `<span class="typed-words">` typewriter
   (typed.js loaded; no init list found in custom.js — the ColorLib
   screenshot shows "…Sahara Desert" mid-type with cursor). Teal pill
   `btn btn-primary` "Contact us" (hover `#09ede9`); AOS fade-up in the
   source → optional CSS fade in recreation.
3. Search availability card — white `.form` card overlapping the hero
   bottom: `margin-top: -50px`, `padding: 30px`, shadow `0 0 30px 0
   rgba(0,0,0,0.1)`, centered col-lg-10. Four equal fields: Destination
   `<select>` (Peru, Japan, Thailand, Brazil, United States, Israel,
   China, Russia), daterange text input, "Enter # of People" text input,
   full-width teal pill `btn btn-primary btn-block` "Search". Fields:
   2px `#e9ecef` border, 45px height, 16px font; focus border
   `#08d9d6`, no glow.
4. Popular Destination — centered Playfair h2.section-title with the
   80×4px `#08d9d6` underline (centered via `left: 50%; translateX(-50%)`).
   Owl carousel (3-up) of `media-thumb` cards: photo + text ALWAYS
   overlaid top-left 10%/10% (white h3 1rem/900 + `.location` .8rem
   `rgba(255,255,255,0.7)`). Cards: The White City / Santorini, Greece;
   Byodo-In Temple Ahuimanu / United States; Kaafu Atoll / Maldives.
   Hover: image `scale(1.07)` + teal wash `rgba(8,217,214,0.8)` fades in.
   Source fancybox gallery on click → skip (or no-op).
5. Special offers & Discounts — centered h2.section-title + grey blurb
   ("Far far away…" lorem pattern). 4-up `media-1` cards (col-lg-3):
   photo with 4px radius; flex row h3 20px black link LEFT + `.price`
   RIGHT (`#08d9d6` 18px/700, `sup` $ 16px/400); location line under
   with room icon, `rgba(170,170,170,0.8)`. Content: Kaafu Atoll $520
   Maldives; The White City $520 Greece; Byodo-In Temple $750 United
   States; Arabische Emiraten $520 Dubai (keep the German name as-is).
6. "We Travel Not To Escape Life But for Life not to Escape Us." — split
   section. Left col-lg-5: `h2.title-with-bg text-lg-right overlap-right`
   — Playfair 50px (40px mobile) white, `<span>` with solid `#08d9d6`
   background + `box-shadow: 0.5em 0 0 #08d9d6, -0.5em 0 0 #08d9d6`
   bleed; overlaps right `right: -30px; top: 20px`. Below: col-lg-8
   right-aligned paragraphs (Vokalia/Consonantia blurb + Duden river
   blurb) + teal pill "Get started". Right col-lg-6: photo (img_1.jpg)
   with centered `video-play-button` (teal circle, hover `#09f2ee`,
   white triangle) linking a YouTube video via fancybox in the source →
   recreation: decorative/no-op button.
7. Counter band — `untree_co-section count-numbers bg-primary py-5`:
   solid `#08d9d6`, 70px padding. 4 counters (col-lg-3): white Playfair
   numbers 3rem (2.5rem mobile) counting up from 0 with comma separator
   on waypoint scroll (jQuery animateNumber in source →
   IntersectionObserver in recreation): 9,313 # of Travels; 8,492 # of
   Clients; 100 # of Employees; 120 # of Countries. Captions
   `rgba(255,255,255,0.8)`.
8. Our Services — centered Playfair h2.section-title + grey blurb. Row:
   LEFT col-lg-4 `feature-img-bg` photo (300px tall, margin-bottom
   30px); RIGHT 2×2 grid of `feature-1` cards — `#f8f9fa`, 30px
   padding, min-height ~50%, margin-bottom 30px; Playfair h3 1.2rem/700
   + grey blurb ("Even the all-powerful Pointing has no control about
   the blind texts." pattern). Cards: Easy & Free Transport, Delicious
   Food, Swimming Pool, Playground.
9. CTA band — `py-5 bg-primary`: solid `#08d9d6`, centered white
   Playfair h2 "Plan your travel now and get in touch with us.", white
   lead paragraph at `.text-white-opacity` (0.7), white 2px outline
   bold pill "Get in touch" (hover: white bg + `#08d9d6` text). Source
   links `booking.html` → recreation no-op/#.
10. Footer — LIGHT `#f8f9fa` (`.inner.first` padding-top 80px,
    padding-bottom 70px), text `#888` 14px. Widgets (col-lg-4/2/2/4):
    About (blurb + `social` row: 30px `#08d9d6` circles, white icons
    [source: twitter, instagram], shadow `0 5px 10px -2px
    rgba(0,0,0,0.2)`); Pages (Blog, About, Contact); Resources (Blog,
    About, Contact); Contact (info@Colorlib [→ paraphrase], +1 222 212
    3819, 43 Raymouth Rd. Baltemoer, London 3910 [→ paraphrase]).
    Widget h3: Lato 14px/700 black. Links `#999` → black hover. Bottom
    bar: copyright "…made with ♥ by Colorlib" → recreation links
    Component Dock; right: Terms, Privacy.

## Design tokens (from style.css)

| Token                 | Value                                  | Usage |
| --------------------- | -------------------------------------- | ----- |
| turquoise (primary)   | `#08d9d6`                              | all CTA buttons, section-title underline, offer prices, counter + CTA bands (`bg-primary`), footer social circles, card hover wash base, accordion/dropdown active, select focus |
| primary hover         | `#09ede9`                              | `.btn-primary:hover` |
| alt teal              | `#09f2ee`                              | play-button hover |
| hero overlay          | `rgba(0, 0, 0, 0.2)`                  | `.hero .slides.overlay:before` |
| card hover wash       | `rgba(8, 217, 214, 0.8)`              | `.media-thumb:after` on hover |
| light grey            | `#f8f9fa`                              | feature cards, footer bg, mobile-menu arrow border |
| input border          | `#e9ecef` (2px)                        | form controls + selects (45px, 16px) |
| footer text/links     | `#888` / `#999` → `#000` hover        | footer body + links |
| offer location grey   | `rgba(170, 170, 170, 0.8)`             | `.media-1 .loc` |
| dark social           | `#303030`                              | `.social-icons` dark circles (unused on this page; token completeness) |
| white translucent     | `rgba(255, 255, 255, 0.7)` / `0.8`    | nav links / counter captions |
| fonts                 | `"Lato", sans-serif` body 14px; `"Playfair Display", serif` all h1–h4 | Google Fonts `<link>` in index.html |
| buttons               | pill `border-radius: 30px`, 12px/30px padding, 14px | `.btn`; primary teal → `#09ede9`; outline-white 2px → white bg + teal text |
| section rhythm        | `padding: 70px 0`                      | `.untree_co-section`; bands use `py-5` |
| section underline     | 80×4px `#08d9d6`                       | `.section-title:before` (centered when `.text-center`) |
| form card             | shadow `0 0 30px 0 rgba(0,0,0,0.1)`, `margin-top: -50px` | search card overlap |
| dropdown shadow       | `0 2px 10px -2px rgba(0,0,0,0.1)`      | nav dropdown panel |
| footer social shadow  | `0 5px 10px -2px rgba(0,0,0,0.2)`      | 30px teal circles |
| title-with-bg         | 50px (40px mobile) Playfair, teal span via `box-shadow: 0.5em 0 0 / -0.5em 0 0` bleed | split-block headline |
| counters              | 3rem (2.5rem mobile) white, comma-separated count-up | counter band |
| media-thumb hover     | `img scale(1.07)` + teal wash fade     | destination cards |
| offer cards           | img `border-radius: 4px`; h3 20px; price 18px/700 + sup 16px | `.media-1` |
| feature cards         | `#f8f9fa`, 30px padding, h3 1.2rem/700 | `.feature-1` |
| selection             | `::selection { background: #000; color: #fff }` | global |

## Fidelity notes / recreation decisions

- **Name:** `trekvoyage` (single lowercase word). Never reuse the source
  slug `travel2` or the screenshot demo brand "Travel." in app files.
- **Assets:** hero slider photos, destination/offer/service/about
  photos → `https://picsum.photos/seed/trekvoyage-<n>/<w>/<h>`
  (deterministic per template). No copied images, fonts, or CSS.
- **Icons:** icomoon + flaticon in the source → `lucide-react`
  (MapPin for offer locations, Twitter/X + Instagram for footer
  socials, Menu/X for the burger, Play triangle for the play button,
  ChevronDown for the dropdown caret, ChevronLeft/Right carousel arrows).
- **JS/jQuery:** slider crossfade → React state/CSS; owl carousel →
  React-state carousel; typed.js → small React typewriter (cycling
  "Sahara Desert" + 3–4 same-kind words, blinking cursor; static first
  word acceptable); waypoints/animateNumber counters →
  IntersectionObserver count-up; fancybox → no-op; daterangepicker →
  plain text input (or `type="text"` with placeholder in the same
  visual slot).
- **Bootstrap:** do not import Bootstrap; implement the 12-col rhythm
  with Tailwind (container, grid, gap) matching visual proportions.
- **Copy:** paraphrase freely but keep the same *kind* of content
  (headline + typewriter word + CTA; card title + price + location;
  service title + blurb; footer widget heading + links/contact data).
  Keep "Arabische Emiraten" as in the source. Fix nothing that changes
  the visual rhythm.
- **Footer attribution:** replace the source's Colorlib credit with the
  mandatory Component Dock link (`https://www.componentdock.com/`,
  branded "Component Dock"). Light footer stays light — do NOT darken it
  to match other travel templates.
- **No `colorlib` strings anywhere in `apps/trekvoyage`** — provenance
  lives only in this spec, `docs/templates/trekvoyage/`, and
  TEMPLATES.md.

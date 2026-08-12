# Shred (ColorLib Slim2) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-shred`.

## Design notes (replication findings)

- **Original:** ColorLib "Slim2" —
  `https://colorlib.com/wp/template/slim2/` (Fitness / Gym Template).
  TEMPLATES.md lines **498, 1167, 1876** — THREE duplicate rows, all
  `- [ ]`; mark ALL THREE `[x]` when done. Recreation uses the NEW name
  **Shred** (fitness "shred" = lean-muscle connotation; single word, no
  collision with `ls apps/` or spec folders).
- **Preview URL:** `https://preview.colorlib.com/theme/slim2/` — **HTTP 200**
  (72.8 KB), analyzed live in a browser (structure + computed styles).
  Stylesheet: `css/style.css` (83 KB: bootstrap 4 + custom ftco rules).
  **The slim2 preview is text/CSS-identical to the sibling "Slim" preview**
  (`/theme/slim/`, similarity 1.0, same `style.css` md5, same `images/` set)
  — ColorLib ships the same design under both slugs. If the implementer of
  "Tonic" (the Slim recreation) has already shipped, the Shred implementation
  may look similar — that is EXPECTED and correct: the sources are different
  catalog entries and must produce two separate apps (Slim rows 497/1875/2358
  vs Slim2 rows 498/1167/1876). Do NOT copy Tonic's app; build Shred from
  this spec + the slim2 preview.
  Font **"Nunito Sans"** (200–900) loaded via inline cf-fonts `@font-face`
  in the head — recreate with a Google Fonts `<link>`.
- **Screenshot / visual design** (`slim2-free-template.jpg`, verified via
  browser vision): split hero — white left half with the dark light-weight
  headline "Get A Perfect Body Figure", small coral "WELCOME TO THE CLUB"
  eyebrow and a salmon pill "Join with us" button; right half a photo of a
  woman in teal leggings walking stairs; huge vertical "STRENGTH" word +
  thin coral rectangle outline as graphic accents; navbar links with the
  active one underlined coral. Below: coral promo band with 3 white-icon
  cards (Free Lesson / 35% Discount / Free Testing), white titles/text.
  Modern fitness-club aesthetic, coral-on-white with black accents.
- **Sections (from the live DOM, in order):** transparent dark navbar
  (absolute over hero; scrolled → solid black) → hero carousel (2 slides:
  eyebrow + 44px light-black h1 + copy + coral pill "Join with us" +
  oversized rotated keyword) → coral promo band (#fe7878 band, #fe9191
  cards: Free Lesson / 35% Discount / Free Testing, "Read more →") →
  Fitness Program (bg #f8f9fa, **coral vertical tab strip** of 8 programs +
  switchable panes with "Learn More") → "Get a Perfect Body" services
  (subheading "Sexy & Healthy", 5 icon services) → Training Schedule (bg
  #ffdddd, 7 day tabs + coach cards w/ time + quote + 120px circular photo)
  → counter band (divider.jpg bg, "We're Functioning for Almost N Years") →
  coral testimonials ("What Client Says", #232931 overlay, Jeff
  Freshman/Artist) → Our Coaches (4 circular-photo cards + social circles) →
  Blog (3 cards on #f8f9fa) → Contact Me (info list + form) → map (Google
  embed → placeholder) → Gallery ("See the latest photos" + photo strip) →
  black footer (About / Links / Services / Have a Questions? + copyright).
- **Notable quirks:**
  - Footer is **BLACK** (`#000000`, computed) — do NOT build a white footer.
  - Original typos to fix in the recreation (note in PR): footer "Cocahes" →
    Coaches, "Yoa" → Yoga, schedule card "Basic Exercies for Begginer" →
    "Basic Exercises for Beginners". Hero slide-2 eyebrow "Welcome to Club"
    (missing "the") — keep or normalize to "Welcome to the Club".
  - The hero keyword accent is an `h3` at 100px rotated 180°
    (`transform: matrix(-1,0,0,-1,0,0)`) — white over the photo, black over
    the white area (screenshot). Recreation: a rotated oversized word
    ("STRENGTH" / "WORKOUT").
  - The hero is an owl carousel with 2 slides — rendering both slides
    statically (or with a simple fade/auto-rotate) is an acceptable
    fidelity call.
  - **Fitness Program is a TABBED section, not a static card grid**: coral
    `.nav-link-wrap` (bg #fe9191) with 8 nav-pill tabs (icon + 20px white
    label, active arrow) on the left; the active pane (heading + 2 lorem
    paragraphs + "Learn More") on the right. Implement with React tab state.
  - Schedule day tabs switch coach cards via Bootstrap pills JS — React
    state.
  - Counter "0 Years" animates on load (jquery.animateNumber) — render the
    final value statically (e.g. "40 Years").
  - Contact form has no backend — preventDefault + client-side success
    message.
  - All card/internal links point to `#` — render as non-navigating elements
    or `href="#"`.
  - Lucide has no brand icons (Facebook/Twitter/Instagram) — footer/coach
    social circles need inline SVG brand paths.
- **Tokens:** brand coral `#fe9191` (btn-primary, icons, accents, active
  nav, program tab strip bg), darker `#fe7878` (promo band bg, hover); black
  `#000000` (navbar/footer, headings); `#f8f9fa` (program + blog light
  bands); `#ffdddd` (schedule band); testimonial section `#fe9191` with
  `#232931` overlay (opacity 0.7); body text `#999999`; font Nunito Sans
  (hero h1 weight 300, 44px); buttons pill radius 30px, padding 16px 48px,
  shadow `0 24px 36px -11px rgba(0,0,0,0.09)`; section headings: subheading
  uppercase coral + h2 40px weight 600 black (28px mobile); program tabs
  20px white on coral; schedule day tabs white bg, black 22px weight 600,
  padding 28px 30px; coach card 120px circular photo (top-center), time bold
  coral; coaches photo 200px circle, position uppercase coral; footer white
  text on `#000`.

## Build order (implementer)

1. **Scaffold** — copy the simplest existing app (e.g. `apps/altruist`),
   rename package to `@free-react-templates/shred`, add Google Fonts Nunito
   Sans 300/400/600/700/800/900 link, set `@theme` tokens:
   `--color-brand: #fe9191`, `--color-brand-dark: #fe7878`,
   `--color-ink: #000000`, `--color-mist: #f8f9fa`, `--color-blush: #ffdddd`,
   `--color-overlay: #232931`.
2. **Navbar** — absolute over hero (top 0), transparent; brand "Shred"
   white; links Home(active)/Programs/Services/Schedule/About/Coaches/Blog/
   Contact (white, hover coral). Scroll handler → solid black `#000`.
   Mobile: solid black bg, collapsed menu with the same links.
3. **Hero** — full-bleed split layout (white text column left + fitness
   photo column right; bg photo per slide is the composite — build the split
   natively): coral uppercase eyebrow "Welcome to the Club" (slide 2:
   "Welcome to Club"), h1 "Get A Perfect Body Figure" (slide 2: "Pain is
   Temporary But Glory is Forever"; 44px, weight 300, black), lorem
   paragraph, coral pill "Join with us"; oversized rotated keyword
   ("STRENGTH" / "WORKOUT") accent. Two slides; simple fade or static.
4. **Promo band** — `#fe7878` band, 3 cards bg `#fe9191`: white icon
   (dumbbell, percent/badge-percent, footprints/sneaker), white h3 (Free
   Lesson / 35% Discount / Free Testing), gray paragraph, "Read more →".
5. **Fitness Program** — `bg #f8f9fa`, centered subheading + h2 "Fitness
   Program" + intro; LEFT: coral vertical tab strip (`#fe9191`) with 8 tabs
   (icon + 20px white label): Fitness Program (active), Fit & Healthy,
   Muscle Building, Bikini & Body, Cardio Exercise, Power Yoga, Aerobics
   Program, Crossfit Program; RIGHT: active pane = h2 heading + two lorem
   paragraphs + coral "Learn More" link. Tab click swaps the pane.
6. **Services** — white section: subheading "Sexy & Healthy" (uppercase
   coral) + h2 "Get a Perfect Body" + intro; 5 icon services (icon + h3 +
   text): Make Your Body Harmonic, Weight Loss Program, Group Personal
   Trainings, Optimal Diet Selection, Individual Training Programs.
7. **Training Schedule** — `bg #ffdddd`; subheading "Schedule" + h2
   "Training Schedule" + intro; left: 7 day tabs (white bg, black 22px
   weight 600, padding 28px 30px: Monday Fitness Program … Sunday Crossfit
   Program); right: 3 coach cards per day — 120px circular photo
   (top-center), `<span>` time "08:00AM - 10:00AM" (bold coral), h2 class
   title (Basic Exercise / Yoga Program / Body Building / Cardio Classes /
   Basic Exercises for Beginners …), description, trainer quote "— Anthony
   Miller, Cardio Expert" / "— Jason Davis, Body Building" / "— Mark Harlem,
   Health Expert" / "— Nikki Valdez, Yoga Expert" / "— Troy Watson, Boxing
   Trainer" / "— Greg Mueller, Dance Expert" / "— Jesh Stone, Muscle
   Expert". Day tab click swaps the cards.
8. **Counter band** — bg image (picsum shred-divider) + overlay; subheading
   "A Few Words About Us"; h2 "We're Functioning for Almost 40 Years"
   (number coral); two lorem paragraphs; optional about image (picsum
   shred-about).
9. **Testimonials** — section bg `#fe9191` with dark `#232931` overlay
   (opacity ~0.7); subheading "Read testimonials" + h2 "What Client Says";
   quote cards (lorem quote + 80px circle photo + name "Jeff Freshman" +
   position "Artist").
10. **Coaches** — subheading + h2 "Our Coaches"; 4 `.staff` cards: 200px
    circular photo, h3 name (Lloyd Wilson / Rachel Parker / Ian Smith /
    Alicia Henderson), uppercase coral position (e.g. Body Builder, Fitness
    Coach, Cardio Expert, Yoga Instructor), social icon circles (inline SVG
    brand icons).
11. **Blog** — `bg #f8f9fa`; subheading + h2 "Our Blog"; 3 cards: image,
    meta row (date · Admin · comment count), 18px black title.
12. **Contact** — subheading "Contact" + h2 "Contact Me" + intro; info list
    (icon + label + value): Address 198 West 21th Street Suite 721 New York
    NY 10016 · Contact Number +1235 2355 98 · Email Address
    info@yoursite.com · Website yoursite.com; form: Your Name / Your Email /
    Subject / Message textarea / coral pill "Send Message" (py-3 px-5);
    preventDefault + success message.
13. **Map** — full-width placeholder block (light gray with a map-pin icon
    or a muted grid) where the original embeds Google Maps; note the
    fidelity call in the PR.
14. **Gallery** — h3 "Gallery" + h2 "See the latest photos"; strip of 4+
    photos (picsum shred-g1..4).
15. **Footer** — BLACK `#000` bg, white text, `padding: 6em 0`; columns:
    About Shred. (brand + lorem + 3 round social icons), Links (Home, About,
    Services, Coaches, Schedule, Contact — fix "Cocahes"), Services (Gym
    Fitness, Crossfit, Yoga, Aerobics — fix "Yoa"), Have a Questions?
    (203 Fake St. Mountain View, San Francisco, California, USA / +2 392
    3929 210 / info@yourdomain.com); centered copyright row: "Copyright ©
    <year> All rights reserved" + credit linking to
    `https://www.componentdock.com/` ("Component Dock").
16. **Seed screening (IMPORTANT)** — picsum seeds: hero slides
    (`shred-hero1`, `shred-hero2` — MUST render fitness/workout subjects),
    trainer thumbs (`shred-s1..4`), about (`shred-about`), testimonial faces
    (`shred-t1..4`), coach headshots (`shred-c1..4` — portrait), blog images
    (`shred-b1..3`), gallery (`shred-g1..4`). Verify each renders a suitable
    subject (per docs/replication.md: curl + pixel metric, then
    browser-verify top picks); pin verified seeds and record the map in the
    PR. Consider `https://picsum.photos/id/<n>/<w>/<h>` for verified
    fitness/warm subjects.
17. **Tests** — one `describe` per component mirroring the spec scenarios
    (navbar render + scroll + mobile, hero slide 1 + slide 2, promo 3 cards,
    program tab strip 8 tabs + pane switch, services 5, schedule tabs + card
    swap, counter band, testimonials, coaches 4, blog 3, contact info + form
    submit success, gallery, footer + Component Dock link, page composition +
    document title); 100% coverage enforced.

## Fidelity calls for the implementer

- **Hero carousel:** owl carousel in the original — two static slides (or a
  simple auto-fade) is acceptable; note it in the PR.
- **Hero keyword accent:** 100px rotated word; the exact color/position
  (white over photo vs black over white area) is a visual call — match the
  screenshot's split layout.
- **Counter animation:** static final value ("40 Years") is fine; a small
  count-up `useEffect` is a nice-to-have.
- **Map:** Google Maps embed → styled placeholder (no external iframe
  needed; keep it dependency-free).
- **Typos:** fix "Cocahes" → Coaches, "Yoa" → Yoga, "Basic Exercies for
  Begginer" → "Basic Exercises for Beginners"; normalize slide-2 eyebrow to
  "Welcome to the Club" (documented deviations).
- **Program tab strip + schedule tabs:** simple React state (no new
  dependency) — active tab swaps the visible pane/cards.
- **Contact form:** no backend — preventDefault, show a client-side success
  message, keep inputs accessible (visible labels or aria-labels).
- **Social icons:** lucide-react has no brand icons — inline SVG brand paths
  in the circles (simple-icons style).
- **Sibling-template note:** "Tonic" recreates the other ColorLib entry
  "Slim" from the SAME design. If Tonic is already merged when Shred
  ships, expect visual similarity — that is correct; do not share app code
  between the two apps (they are separate catalog items, separate apps).
- **Picsum hero seeds:** pick seeds that provably render fitness/workout
  scenes (per the seed-screening method in
  `skills/research/colorlib-template-replication`) — the original bg_1/bg_2
  are gym/fitness photos.

# Convoke (ColorLib Wemeet) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-convoke`.

## Design notes (replication findings)

- **Original:** ColorLib "Wemeet" — conference / design-event landing page
  (source: https://colorlib.com/wp/template/wemeet/). TEMPLATES.md has TWO
  rows: line 532 (category Bootstrap) and line 1690 (category Events) — mark
  BOTH `[x]` when done. No other spec on main maps to this slug
  (grep-checked before prepping).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/wemeet/
  (HTTP 200, 30,702 bytes; title "wemeet"). Master stylesheet
  `css/style.css` (134,261 bytes) fully extracted; libs: Bootstrap 4 grid,
  Owl Carousel, Isotope, jQuery countdown, SlickNav (mobile nav),
  magnific-popup, themify-icons + flaticon icon fonts. Font **Poppins**
  (300–900) via Google Fonts (load via `<link>` in index.html).
- **Screenshot:** `wemeet-free-template.jpg` (viewed in browser) — full-bleed
  hero of sweeping multi-color gradient waves (yellow/orange → magenta/
  purple → cyan/blue), stark white bold headline "Digital Design Conference
  2019 NYC", huge faint "CONFERENCE" watermark, white-bordered transparent
  "Add To Your Calendar" CTA, white nav with solid white "Buy Ticket"
  button. Cross-checks the live DOM + CSS analysis. Demo brands itself
  "Wemeet"; recreation uses the NEW name **Convoke**.
- **Visual design (from DOM + CSS tokens + live browser render):** the whole
  identity hangs on a **rainbow gradient** — `linear-gradient(to right,
#ff9600 0%, #fe531e 26%, #c022a5 57%, #1bb8f9 100%)` (speaker social
  hover, event `double_line` divider) — plus two outlined button variants
  over white/light sections:
  - **Gradient brand** `#ff9600 → #fe531e → #c022a5 → #1bb8f9` (orange →
    red → magenta → cyan): social hover fills, schedule divider line.
  - Hero: bg image `banner_1.png` (fluid gradient waves — recreate with CSS
    gradients, e.g. Tailwind `bg-[linear-gradient(120deg,#ff9600,#fe531e,#c022a5,#1bb8f9)]`),
    white h1 90px/700 (mobile 36px), watermark "CONFERENCE" (large, faint).
  - Buttons (`.boxed-btn-*`, Poppins):
    - `boxed-btn-white` — transparent bg, 2px solid #fff border, white text,
      padding 16px 43px, weight 500, capitalize; hover: white bg + black
      text. Used for: Buy Ticket, Add to your Calendar, Book Now ($150).
    - `boxed-btn-red` — white bg, 2px solid #FF0000 border, #FF0000 text,
      padding 16px 44px, weight 500; hover: #FF0000 bg + white text. Used
      for: Learn More.
  - Section titles: `.section_title h3` 46px/500 (mobile 26px); uppercase
    subheading 15px/500 `#c9c9c9`, mb 22px.
  - FAQ: question h5 22px/400 `#1F1F1F`; card-body padding `0 0 40px 76px`;
    card borders `#f0e9ff`-family light purple-gray tint.
  - Body text `#707070` (16px/28px); light tints `#f9f9ff`, `#fbf9ff`;
    neutrals `#131313`, `#1f1f1f`.
  - Spacing: hero pt 300/pb 100 (mobile 140/30); speakers 100px; event
    padding-bottom 120px + `double_line` (gradient 10px-high divider, pt
    100px, mb 100px); faq 100px; footer_top 145/129px over `footer_bg_1.png`
    wave-top image.
- **Section order (1:1, from live demo DOM):**
  1. Header (`main-header-area`, sticky): brand "Wemeet" left; nav right:
     home / Schedule / blog (dropdown: blog, single-blog, elements) /
     Speakers / Venue / Contact; "Buy Ticket" (boxed-btn-white). Mobile:
     hamburger (SlickNav) menu.
  2. Hero (`slider_area slider_bg_1`): "CONFERENCE" watermark; h1 white
     "Digital Design Conference" + "2019 NYC"; "Add to your Calendar"
     (boxed-btn-white).
  3. Countdown strip (`countDOwn_area`, hero bottom): location-pin icon +
     "City Hall, New York City"; alarm-clock icon + "12-15 Sep 2019"; live
     countdown `#clock` (jQuery countdown → React).
  4. Welcome (`about_area`): "Welcome To" subheading + "The Biggest Design
     Conference of the Year 2019" + paragraph + "Learn More"
     (boxed-btn-red).
  5. Speakers (`speakers_area`): "Speakers" title; 4 cards — Jonson Miller
     (Creative Director), Albert Jackey (Product Designer), Marked Macau
     (UI/UX Designer), Kelvin Cooper (Art Director); hover overlay socials
     (gradient fill).
  6. Event schedule (`event_area`): "Event Schedule"; day tabs "08 Sep 2019"
     / "09 Sep 2019"; per day 3 rows — speaker photo, name, time
     ("10-11 am", "12-1.00 pm", "2.30-4.00 pm"), blurb; gradient
     `double_line` divider.
  7. Register (`resister_book resister_bg_1`): "Register Now to Book" +
     "Your Presence" + "Book Now ($150)" (boxed-btn-white) over
     `resister.png` bg.
  8. Brands (`brand_area`): 6 grayscale logos (`img/barnd/1..6.png`), hover
     restores contrast.
  9. FAQ (`faq_area`): "Frequently Ask" + 4 accordion items (WordPress
     hosting? / advantages over shared? / Where the Venue? / attend from
     Asia?).
  10. Footer (`footer footer_bg_1`): "Follow Us" (FB/Twitter/IG/Youtube),
      "Links" (Schedule, Speakers, Contact, Venue), "Venue" (200, D-block,
      Green lane USA · edumark@contact.com · +10 367 467 8934); copyright
      bar (drop Colorlib credit, paraphrase).
- **Seeds for picsum placeholders (approx 20):** convoke-1..4 speaker
  portraits (use the verified person-photo IDs from the replication skill:
  e.g. `https://picsum.photos/id/1027/400/400`, `/id/64`, `/id/823`,
  `/id/996` — or seeded `convoke-s1..4` if ids conflict), convoke-5..7
  schedule thumbnails, convoke-8 hero gradient fallback (not needed if CSS
  gradient), convoke-9..14 brand wordmarks (grayscale SVG wordmarks instead
  of images is fine and simpler).
- **lucide-react icon map:** location → `map-pin`, clock/date → `alarm-clock`
  (or `clock`), socials → inline SVG brand icons (facebook, twitter/x,
  instagram, youtube — lucide dropped brand icons), nav → `menu`,
  chevrons → `chevron-down` (dropdown), calendar CTA → `calendar-plus` or
  `calendar`, ticket → `ticket`.

## Implementation order (suggested)

1. Scaffold `apps/convoke` from the simplest existing app; rename package to
   `@free-react-templates/convoke`; register in the root lockfile via the
   repo's usual add-workspace flow (implementer's job, NOT prep).
2. `@theme` tokens: gradient stops — orange `#ff9600`, red `#fe531e`,
   magenta `#c022a5`, cyan `#1bb8f9`; red `#FF0000`; ink `#1f1f1f` /
   `#131313`; body `#707070`; subheading `#c9c9c9`; light tints `#f9f9ff`,
   `#fbf9ff`, `#f0e9ff`; font `Poppins`. Gradients as Tailwind arbitrary
   values (`bg-[linear-gradient(120deg,#ff9600,#fe531e,#c022a5,#1bb8f9)]`).
3. Components (one per section, in `apps/convoke/src/components/`):
   `Header` (sticky + burger + Buy Ticket), `Hero` (gradient bg + watermark
   - headline + calendar CTA), `EventInfo` (location/date + countdown timer
     with useEffect), `Welcome`, `Speakers` (4 cards + hover socials),
     `Schedule` (2 day tabs + 3 talks each), `Register` (book band),
     `Brands` (6 grayscale logos), `Faq` (accordion, 4 items), `Footer`
     (3 cols + copyright bar).
4. TDD per component: tests first, 100% coverage via
   `scripts/verify-app.sh convoke` (typecheck + lint + vitest + build).
   Countdown test: use fake timers (`vi.useFakeTimers()`) inside `act()`.
5. PR description: source template + preview URL + tokens + what differs
   (rename, picsum seeds, lucide icons, React countdown instead of jQuery,
   CSS-gradient hero instead of copied banner image, grayscale SVG brand
   wordmarks, neutral copyright credit).
6. After deploy: mark TEMPLATES.md lines **532 AND 1690** `[x]` + surge URL,
   `npm run readme:status`, conventional commit.

## Verification

- [ ] `scripts/verify-app.sh convoke` (typecheck + lint + 100% coverage tests + build)
- [ ] Spec scenarios all implemented (`openspec/specs/template-convoke/spec.md`)
- [ ] Visual pass vs live demo `https://preview.colorlib.com/theme/wemeet/`
- [ ] TEMPLATES.md lines 532 + 1690 both `[x]`

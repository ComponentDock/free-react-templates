# Maverick (ColorLib Clark) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-maverick`.

## Design notes (replication findings)

- **Original:** ColorLib "Clark" —
  `https://colorlib.com/wp/template/clark/` (Bootstrap category). TEMPLATES.md
  lines **359, 2299, 2386, 2710** — FOUR duplicate rows, all `- [ ]`; mark ALL
  FOUR `[x]` when done. Recreation uses the NEW name **Maverick** (single
  word, no collision with `ls apps/` or spec folders).
- **Preview URL:** `https://preview.colorlib.com/theme/clark/` — **HTTP 200**
  (39.9 KB), analyzed live. Stylesheet: `css/style.css` (72.8 KB, all custom
  tokens) + bootstrap/owl/flaticon/icomoon deps. Owl carousel drives the hero
  only; counters animate on scroll; navbar gains a `.scrolled` black fixed
  state.
- **Screenshot / visual design** (`clark-free-template.jpg`, verified via
  browser vision of the live render): solid black portfolio. Hero: "HELLO!"
  amber uppercase, white headline with amber highlighted span, cutout
  portraits (man with glasses/beard) top-right + bottom-left, solid amber
  pill "HIRE ME" + white-outline ghost "MY WORKS". Everything below stays
  black with amber accents: About Me split (portrait left, info list right,
  "120 Project complete" amber counter, amber "Download CV"), Resume 2-col
  cards with amber dates, Services cards with amber icons, Skills amber
  progress bars, Projects masonry tiles with black hover overlay, Blog
  cards, photo-backed counters, amber hire-me band, contact info boxes +
  white form panel, black footer.
- **Font:** Poppins (weights 100–900, served via cf-fonts in the original →
  Google Fonts `<link>` in the recreation).
- **Notable quirks:** the services card "Phtography" is misspelled in the
  original — recreate it as "Photography". The hero is a carousel of 2
  slides; a static two-slide grid is acceptable on desktop. Contact form has
  no backend — client-side validation + success state. Blog links point to
  `single.html` in the original — use in-page anchors. The `.ftco-hireme`
  band overlaps the counter section by -70px on desktop.

## Build order (implementer)

1. **Scaffold** — copy the simplest existing app (e.g. `apps/altruist`),
   rename package to `@free-react-templates/maverick`, add Google Fonts
   Poppins link, set `@theme` tokens: `--color-brand: #ffbd39`,
   `--color-ink: #000000`, `--color-card: rgba(255,255,255,0.1)`.
2. **Header** — transparent over hero → fixed black on scroll; brand
   "Maverick"; links Home/About/Resume/Services/Skills/Projects/My
   Blog/Contact; amber underline active/hover; mobile hamburger menu.
3. **Hero** — 750px black, subheading "Hello!", h1 with amber span, h2,
   "Hire me" amber pill + "My works" ghost pill, portrait right (picsum
   seed maverick-1 / maverick-2 for slide 2).
4. **About** — portrait left; "About Me" heading; lorem; info list
   (Name/Date of birth/Address/Zip code/Email/Phone); "120 Project
   complete" counter; "Download CV" amber pill.
5. **Resume** — watermark "Resume"; 6 cards 2-col (3 education + 3
   experience, amber date + white title + amber uppercase institution);
   centered "Download CV" below.
6. **Services** — 6 cards 3-col (Web Design, Photography, Web Developer,
   App Developing, Branding, Product Strategy); amber 60px lucide icons;
   hover → amber bg / white icon / black title.
7. **Skills** — 6 bars: Photoshop 90, jQuery 85, HTML5 95, CSS3 90,
   WordPress 70, SEO 80 (10px track `#1a1a1a`, amber fill).
8. **Projects** — masonry: [4-col tile][8-col tile] / [8-col: 2 stacked][
   4-col: 2 stacked]; hover black 0.9 overlay + centered title/category.
9. **Blog** — 3 cards: 350px image, meta (June 21, 2019 · Admin · 3),
   title link, excerpt.
10. **Counter band** — photo bg + dark overlay; 4 `#191919` boxes: Awards,
    Complete Projects, Happy Customers, Cups of coffee; count-up on
    scroll (IntersectionObserver + rAF, test with fake timers).
11. **Hire-me band** — amber over photo; "I'm Available for freelancing";
    -70px overlap on desktop.
12. **Contact** — 4 info boxes (Address/Contact Number/Email
    Address/Website, 100px circular icons) + white form panel
    (Name/Email/Subject/Message + amber "Send Message") + photo left.
13. **Footer** — About + social circles (inline-SVG twitter/facebook/
    instagram — lucide has no brand icons), Links, Services, Have a
    Questions?, copyright bar with credit line.
14. **Composition + tests** — one page, section order
    header → hero → about → resume → services → skills → projects → blog →
    counters → hire-me → contact → footer; title "Maverick — Freelance
    Web Designer"; 100% coverage.

## Test notes

- Nav links render twice (desktop + mobile) — use `getAllByRole` and index
  the mobile one last.
- Anchor `getByText(/^Maverick$/)` for the brand — the footer copyright
  line also contains the word.
- Counter animation: assert the final number after advancing timers.
- Contact form: assert `queryByLabelText`-style absence of the input after
  the success swap (form unmounts the inputs).
- Photos: `https://picsum.photos/seed/maverick-<n>/<w>/<h>` — deterministic.

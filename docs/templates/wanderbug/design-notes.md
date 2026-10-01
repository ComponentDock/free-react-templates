# Wanderbug — design notes

Recreation of ColorLib **Tralive** (Travel tour & events template).
Source: https://colorlib.com/wp/template/tralive/ ·
Preview analyzed: https://preview.colorlib.com/theme/tralive/
(HTTP 200, 30,976 bytes HTML + 61,287 bytes `assets/css/style.css`,
2026-10-01). Screenshot reviewed:
`tralive-free-template.jpg` (hero treatment authoritative).

## Structure order (1:1 with preview DOM)

1. Navbar (sticky white on scroll) — logo left; Josefin Sans navy links
   Home · Events · About · Blog (dropdown) · Contact; yellow phone CTA.
2. Hero — centered navy h1 with yellow highlighter underline on the second
   line, navy subtext, navy gradient "Explore Destinations" button.
3. Hero bus band — full-bleed flat beach illustration (~880px) with the
   yellow retro camper bus bottom-right (gentle nudge animation).
4. Upcoming Events — periwinkle eyebrow + navy h2; 4 destination cards
   (image / name / periwinkle price / date + duration), 3-up carousel.
5. About CTA — split: illustration left; "About Us" eyebrow, navy h2
   "Get ready for real time adventure", paragraph, yellow
   "Book Your Destination" button right.
6. Testimonials — h2 "What customers say" over cover bg; slider with
   quote, circular founder portrait, name.
7. FAQ — eyebrow "FAQ", h2 "Full range of travel service"; 4-item
   accordion with periwinkle `btn-link` titles.
8. Video CTA — ~560px rounded (20px) cover band; play icon + white
   "Watch our last tour".
9. Instagram strip — full-bleed 6-image row; yellow hover overlay + icon.
10. Footer — navy gradient; brand+social / Navigation / Services /
    Contact Us columns; centered copyright with Component Dock link.

## Design tokens (from theme style.css)

| Token            | Value                                             | Usage |
| ---------------- | ------------------------------------------------- | ----- |
| navy             | `#00095e` (+ gradient end `#0c0c1f`)              | headings, hero h1, nav links, hero button gradient, submenu bg |
| indigo           | `#1f2b7b`                                         | bold/secondary accents |
| periwinkle       | `#7ea0ff`                                         | section eyebrows, card prices, FAQ link titles, nav hover underline, copyright heart |
| yellow           | `#ffc800`                                         | header phone button, hero highlighter bar, social hover, copyright link, instagram overlay `rgba(255,200,0,0.6)` |
| footer gradient  | `linear-gradient(135deg, #1a2d6d 0%, #0c1534 100%)` | footer bg |
| body grey        | `#677f8b`                                         | paragraphs |
| footer text      | `#8a8fbe`                                         | footer blurb |
| light panel      | `#f9f9ff`                                         | light section bg |
| card shadow      | `rgba(0,9,94,0.06)`                               | event card caption |
| fonts            | Josefin Sans 300–700 (headings/nav, 500–700 used); Roboto 300–900 (body/buttons 500) | Google Fonts `<link>` |
| radii            | buttons 5px; cards 5px (image top / caption bottom); video band 20px; circles (portraits, social hover) | |

## Section-by-section fidelity notes

- **Navbar:** wordmark = new name "wanderbug"; phone number kept verbatim
  (+10 (67) 678 2567). Dropdown kept but may drop to a reduced item set.
  Sticky behavior = white bg + shadow + tighter link padding (39px→20px).
- **Hero:** keep copy "Lifelong memories just a few seconds away" /
  "Let's start your journey with us, your dream will come true" (same kind
  of content; paraphrase allowed). Highlighter = yellow bar behind the
  `<dd>` phrase, 11px tall at ~58% height, z-index behind text. CTA navy
  gradient → yellow on hover. Illustration: picsum placeholder seeded
  `wanderbug-hero` (never copy the bus PNG); bus = small illustration or
  picsum cutout with CSS nudge (±100px/10s alternate).
- **Upcoming Events:** 4 cards as in DOM (Mega Turkey, Finlande,
  Spitzberg, Mega Turkey — keep the duplicate name, it's in the
  reference); price $1200 periwinkle; date pill "12 Jan - 18 Jan" +
  "5 Days". Carousel on small screens via React state (no owl-carousel).
- **About CTA:** illustration left / caption right; eyebrow "About Us"
  periwinkle; yellow button with navy-gradient hover overlay (`.btn`
  pattern).
- **Testimonials:** reference shows identical quote/name twice ("Let's
  start your journey…" / Mark Anthony) — vary quotes slightly for a
  believable slider; keep circular portrait + name under the quote.
- **FAQ:** periwinkle collapsible titles with the reference's playful
  copy; single-open accordion; `button` + `aria-expanded`.
- **Video:** no magnific-popup / YouTube popup — play button is decorative
  CTA with aria-label; band keeps 20px radius + cover bg.
- **Instagram:** 6 slots, images cycled like the reference (instra1..6
  pattern); yellow `rgba(255,200,0,0.6)` overlay + white icon on hover.
- **Footer:** 4 columns in reference order; contact block keeps address +
  email + yellow phone; copyright swaps Colorlib attribution for
  "Component Dock" → https://www.componentdock.com/ (per repo rules);
  heart glyph periwinkle, link yellow.

## Assets policy

- Icons: lucide-react (Phone, Play, Instagram, ChevronLeft/Right,
  Menu/X, social stand-ins) — never themify/fontawesome fonts.
- Images: `https://picsum.photos/seed/wanderbug-<n>/<w>/<h>` only.
- Fonts: Google Fonts `<link>` for Josefin Sans + Roboto.
- No ColorLib strings anywhere in app files; provenance stays in this
  folder + the spec + the PR.

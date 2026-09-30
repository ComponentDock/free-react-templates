# Sideline (ColorLib Sportz) — Design Notes

> Replication research for **Sideline** (NEW name) — recreation of ColorLib
> **Sportz** (slug `sportz`). Research done 2026-09-30 by the prep stream;
> implementers should not need to re-fetch the preview.

## Source mapping

- **ColorLib item:** "Sportz" (TEMPLATES.md line 2845; section "## Sports
  (9)"). Slug `sportz` appears exactly ONCE in TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/sportz/
- **Preview URL — REACHABLE (verified 2026-09-30 by direct fetch):**
  **`https://preview.colorlib.com/theme/sportz/`**
  (HTTP 200, 55,944 bytes, `<title>Sportz &mdash; Colorlib Sports Team
  Template</title>`).
- **Preview CSS:** `css/bootstrap.min.css` (customized — `.btn-primary` /
  `.bg-primary` overridden to `#f23a2e`) + `css/style.css` (23,032 bytes).
- **Source scripts:** jQuery + owl.carousel (hero slider + highlights
  carousel), stellar parallax, magnific-popup (Vimeo), jQuery countdown —
  REIMPLEMENT in React (state sliders / CSS scroll-snap; `useEffect`
  countdown; `background-attachment: fixed`; modal or link for video). Do
  not ship jQuery/owl/magnific/stellar.
- **Icons:** icomoon glyph fonts — REPLACE with lucide-react.
- **Fonts:** Mukta 300/400/700 (preview self-hosts via cf-fonts; use a
  Google Fonts `<link>`).
- **Assets:** all via `https://picsum.photos/seed/sideline-<n>/<w>/<h>`
  placeholders; never source assets. The source logo is a red shield PNG
  ("sportz") — recreate our own inline-SVG shield badge with the "Sideline"
  wordmark.
- **Naming check:** "sideline" collides with nothing in `apps/` or
  `openspec/specs/` (verified 2026-09-30). Avoid reusing sibling sports
  names already claimed: Swish, kickoff, slugger, cruiser, Hoopside,
  striker, pitchside, matchday, upstart.

## Screenshot analysis (`sportz-free-template.jpg`, 2026-09-30)

Soccer/football club + sports-magazine site, black/red identity on white:

- **Utility top row** (white): social icons (Facebook, Instagram, Twitter,
  LinkedIn) left; email + phone right.
- **Navbar** (solid black): red shield logo badge at left overhanging the
  bar; right-aligned uppercase white menu — HOME (red/active, dropdown),
  NEWS (dropdown), MATCHES, TEAM, ABOUT, CONTACT.
- **Hero**: full-bleed action photo (soccer match, dark treatment); a
  translucent BLACK box holds the white bold headline "Russia's World Cup
  Championship"; a red square READ MORE button (uppercase, wide tracking)
  below it; white prev/next chevrons bottom-center; three photo cards
  overlap the hero's bottom edge.
- **Feature cards**: 3 equal photo cards overlapping the hero; text hidden
  until hover (reveal + zoom + dark overlay in CSS).
- **Matches** (light gray band): left "Next match" panel — countdown,
  home/away square thumbs + uppercase names around a muted "vs", league
  line "Brazil Premier League — Round 10", score "3:2", "10 September /
  7:30 AM"; right "Latest Matches" — pill tabs Match 1/2/3 over fixture
  rows (team + league — score — team + league); a rounded YELLOW-overlay
  parallax promo banner below.
- **Highlights** (red parallax band): "More Game Highlights" + play button;
  dated cards ("May 20th 2018 / World Cup Championship / lorem") — white
  text boxes with a short red top accent bar, pulled up over card photos.
- **Latest News** (white): 3 post cards — image, black bold title ("RealMad
  vs Striker Who Will Win?"), uppercase "By … • Sep 25, 2018", excerpt.
- **Footer** (`#333`): About blurb · Recent Blog (3 links) · Quick Menu
  (Home, Matches, News, Team, About Us, Privacy Policy, Contact Us,
  Membership) · Follow Us + Watch Video + Subscribe Newsletter (input +
  Send); copyright "© year All rights reserved | … made with ♥ by Colorlib"
  → **replace attribution with the Component Dock link**.

## CSS token reference (from the live preview styles)

```
Brand red ......... #f23a2e   (btn-primary, bg-primary, active nav, logo,
                               overlay-primary rgba(242,58,46,0.9),
                               block-12 accent bar 80px×4px)
Yellow accent ..... #eec60a   rgba(238,198,10,0.9) — overlay-success override
Hero overlay ...... rgba(0,0,0,0.4)
Light section ..... #f8f9fa   (bg-light — matches band)
Dropdown .......... #edf0f5 bg / #25262a hover-text / #f4f5f9 hover-bg
Footer ............ #333333 bg, #fff headings, #999999 links→#fff, #737373 copy
Navbar ............ #000 (bg-black), uppercase white menu, #f23a2e active
Body .............. #333333 · .text-black #000 · muted #999999 · card p #ccc
Buttons ........... square (rounded-0), uppercase, 300 weight, .2em tracking,
                   0.2s transition; hero py-3 px-5 / cards px-4 py-2
Section padding ... 5em 0 (2.5em mobile)
Hero .............. ~800px desktop / 300px mobile; chevrons 30px, pad 20px,
                   disabled opacity .2
Feature cards ..... margin-top -70px; hover: -10px lift + shadow
                   0 10px 40px -5px rgba(0,0,0,0.4) + bg scale 1.1 +
                   rgba(0,0,0,0.9) overlay + text reveal
Highlights cards .. .text top -100px over image; .text-inner white box,
                   shadow 0 0 20px -5px rgba(0,0,0,0.3), heading 20px
```

## Section-by-section fidelity notes (structure order)

1. **Header/Navbar** — two stacked rows: white utility bar (social left,
   contact right) then black nav. Dropdown panels `#edf0f5`, nested "Sub
   Menu" under Home. Mobile: hamburger → fullscreen dark overlay menu.
2. **HeroSlider** — 3 photographic slides (picsum `sideline-hero-*`), dark
   0.4 overlay, translucent black headline box + red READ MORE, white
   chevrons bottom-center; React state (or scroll-snap); autoplay optional.
3. **FeatureCards** — 3-col, -70px overlap onto hero, z-index above hero;
   reveal-on-hover/focus with zoom; ensure touch/mobile shows text without
   hover.
4. **Matches** (`bg-light`) — left NextMatch panel: useEffect countdown
   (days/hrs/min/sec), square thumbs + uppercase names + "vs", league
   line, score, date/time. Right LatestMatches: ARIA pill tabs
   (Match 1/2/3), fixture rows "Team — league | score | Team — league".
   Below: PromoBanner — rounded, picsum bg + yellow 0.9 overlay, fixed
   background.
5. **HighlightsBand** — #f23a2e over picsum bg with red 0.9 overlay,
   `background-attachment: fixed`; centered white h2 + play button
   (lucide Play, aria-label; modal/lightbox or external link); carousel of
   block-12-style cards (date meta, white text box, red accent bar).
6. **NewsGrid** — white; 3 post-entry cards (image, h5 title link, uppercase
   byline/date, excerpt; title → #f23a2e on hover).
7. **Footer** — #333333, 4 columns (About / Recent Blog / Quick Menu /
   Follow Us + Watch Video + Subscribe Newsletter); newsletter input +
   Send; copyright bar with Component Dock link; zero ColorLib strings.

## Content paraphrase guidance

- Hero headline: keep the "championship/fixture" flavor — e.g.
  "Continental Cup Championship" (source: "Russia's World Cup Championship").
- Team names: invent club-style names (e.g. Sea Hawks → "Harbor Hawks",
  Patriots → "Founders FC"); league line "Premier League — Round 10";
  keep score "3:2" and "10 September / 7:30 AM" rhythm.
- News titles: sports-desk style ("Continental Final — Who Will Win?").
- Byline pattern: "By <author> • <Month D, YYYY>".

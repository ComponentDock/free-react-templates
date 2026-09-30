# Matchday (ColorLib Sportsteam) — Design Notes

> Replication research for **Matchday** (NEW name) — recreation of ColorLib
> **Sportsteam** (slug `sportsteam`). Research done 2026-09-30 by the prep
> stream; implementers should not need to re-fetch the preview.

## Source mapping

- **ColorLib item:** "Sportsteam" (TEMPLATES.md line 2844; section "## Sports
  (9)"). Slug `sportsteam` appears exactly ONCE in TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/sportsteam/
- **Preview URL — REACHABLE (verified 2026-09-30 by direct fetch):**
  **`https://preview.colorlib.com/theme/sportsteam/`**
  (HTTP 200, 30,526 bytes, `<title>Sports Team</title>`).
- **Preview CSS:** `styles/main_styles.css` (27,889 bytes) +
  `styles/responsive.css` (6,807 bytes) — Bootstrap 4.1.2 base +
  hand-written template block.
- **Source scripts:** jQuery 3.3.1 + OwlCarousel 2.3.4 (home slider +
  breaking-news ticker) — REIMPLEMENT in React (state sliders / CSS
  scroll-snap; `useEffect` countdown). Do not ship jQuery/owl.
- **Icons:** Font Awesome 4.7.0 glyph fonts — REPLACE with lucide-react.
- **Fonts:** Roboto via Google Fonts `<link>` (300, 400, 500, 700, 900).
- **Assets:** all via `https://picsum.photos/seed/matchday-<n>/<w>/<h>`
  placeholders; never source assets. The source reuses ONE hero photo
  (`images/index.jpg`) as inline background on every slider slide, the
  milestones parallax band, and the footer side image — replicate the dark
  photographic treatment with a picsum seed + dark overlay.
- **Naming check:** "matchday" collides with nothing in `apps/` or
  `openspec/specs/` (verified 2026-09-30).

## Screenshot analysis (`sportsteam-free-template.jpg`, 2026-09-30)

Sports-club (American football) site with a heavy navy/orange identity.
Screenshot shows the viewport-height top of the page:

- **Top utility bar** (dark navy): left "GET Tickets | Shop" (orange pipes,
  first link orange); right: red "LIVE" badge + white ticker text + "Sign
  up / Sign in".
- **Main header** (translucent navy over hero, orange 3px underline):
  uppercase white nav split LEFT (HOME in orange/active, ABOUT THE CLUB,
  MEDIA) and RIGHT (TICKETS, NEWS, CONTACT) around a large club crest
  (tiger badge "CHAMPIONS TIGERS EST 1999") that overhangs below the
  header line.
- **Hero**: dark smoky stadium/football-player photo (navy-black
  treatment). Center-left: orange square chip with white "2" (navy top
  border) attached to a navy chip "days until the next match" in white
  bold. Below: navy skewed chip "The Tigers" + giant red "VS" with navy
  outline, rotated slightly, + orange skewed chip "The Bears". Orange
  square "Next" button at right edge.
- **Breaking-news strip**: orange left block "Breaking News" (navy bold
  text) + navy strip with white rotating headline.
- **White band starts**: centered bold uppercase "LATEST RESULTS", gray
  "GREAT WIN IN FINALS", small league date line — matches CSS exactly.

Rest of page (from live DOM + CSS, screenshot is viewport-height only):
white results band → navy events/games band → parallax counters → white
player-of-the-month → light `#d7d9e5` news grid → orange CTA strip → very
dark footer with newsletter. Tokens extracted from `main_styles.css` are
canonical (orange `#ffa54b`, navy `#161d4a`, rows `#242b56`, footer
`#0a1123`/`#070d1d`, news band `#d7d9e5`, LIVE `#ff0410`, VS `#d80033`
with `#191339` stroke, Roboto).

## Live DOM structure (verbatim skeleton)

```
div.super_container
  header.header (fixed, rgba(22,29,74,0.75), border-bottom 3px #ffa54b)
    .header_content
      .header_bar (absolute top, rgba(28,36,93,0.75), 40px)
        .header_bar_content
          ul.header_links: GET Tickets | Shop
          .header_bar_right .header_live: [LIVE badge #ff0410] + ticker | Sign up / Sign in
      .main_nav_container_outer
        .logo_container (crest overhangs below header; scrolled → 170px)
        .main_nav ul: Home | About the Club | Media  (left of crest)
                      Tickets | News | Contact      (right of crest)
    .menu (fullscreen mobile overlay rgba(10,17,35,0.55))
      .menu_nav ul: Home | About Us | The Team | News | Contact  (24px/900 uppercase, staggered)
      .menu_user_area: Sign up | Sign in
      .menu_links: GET Tickets | Shop
  div.home_slider_container (100vh)
    .owl-carousel.home_slider
      .home_slide (inline background-image photo)
        .home_container
          .home_text: [orange number chip 109x143] + navy chip "2 days until the next match" (white 60px/700)
          .next_match: .next_match_home (skew37deg navy "The Tigers")
                       .vs (118px/900 rotate(-7deg), #d80033 fill, 3px #191339 stroke)
                       .next_match_guest (skew37deg orange "The Bears")
    .home_slider_nav (92px orange square "Next", hover navy)
  div.breaking_news (78px)
    .breaking_news_title (34.48%, #ffa54b, navy 30px/500 "Breaking News")
    .breaking_news_content (65.52%, #161d4a)
      .breaking_news_slider (white 18px/300 rotating slides)
  div.results (#FFFFFF, padding 92/100)
    .section_title h1 "latest results" (centered, 36px/700 uppercase #050505)
    .results_title "great win in finals" (24px/700 #888888)
    .results_subtitle "Mon 25 Sept, Champions League" (16px/500 #b5b5b5)
    .results_container
      .result (50%, text-right): .team_image (262px) | .result_num (72px/700) .result_team (36px/700 #888888) .result_text
      divider 2x132px #dddfe2
      .result (50%, text-left): mirrored
    .button.results_button "See More Info"
  div.upcoming_latest (#161d4a, padding 92/100)
    .container .row
      .col-xl-6  .section_title.light h1 "upcoming events" + .section_subtitle "What's next this month"
                 .custom_list_a ul: li (110px #242b56, 3px gaps)
                   .custom_list_image | .custom_list_title + .custom_list_date | .custom_list_link "See More"   (x3-4)
      .col-xl-6  .section_title.light h1 "latest games" + .section_subtitle "Results"
                 .custom_list_b ul: li (110px #242b56)
                   .team_logo + .team_name | center(league 12px #777b95 · score 30px white · date 11px) | .team_name + .team_logo   (x4)
    .upcoming_image (absolute decorative player photo, bottom-left, z-index -1)
  div.milestones (parallax-window min-height 400px, dark photo bg)
    .container .row: .milestone_col ×4
      .milestone: .milestone_icon (62px) .milestone_content
        .milestone_counter (48px/500 #ffa54b) .milestone_title (18px white) .milestone_subtitle (11px #737791)
        → Team players | Trophies | Medals | Kicks/Match
  div.player (#FFFFFF)
    .container .row
      .col-xl-6 .player_content (padding 104/81)
        .section_title h1 "player of the month" + subtitle "What's next this month"
        .player_name_container: .player_num (71x71 #161a42, white 48px "83") .player_name (60px/500 #ffa54b "Michael Smith")
        .player_text (2 bio paragraphs)
      .player_images (absolute left, bottom, width calc(50vw + 55px)): .player_image ×2 (first margin-right 40px)
  div.news (#d7d9e5, padding 100/61)
    .section_title h1 "latest news"
    .news_row: .news_post ×3
      .news_post_image + .news_post_date (75x75 white badge: day 36px #ffa54b · month 12px uppercase)
      .news_post_content: .news_post_title (24px/700, hover #ffa54b) .news_post_text (excerpt)
      hover: box-shadow 0 16px 38px rgba(9,9,9,0.33)
  div.cta (#ffa54b, 1px white top/bottom borders, padding 64/56)
    .cta_text "Would you like to join our <span>FOOTBALL CLUB?</span>" (42px white; span #161d4a 600 uppercase)
    .cta_button.button "See More Info" (navy, white fill on hover)
  div.footer_container (#0a1123)
    .footer_image (absolute right player photo)
    .footer_contact_info: .footer_logo (crest) .footer_contact_list
      Address / Phone / E-mail  (labels 18px/500 #ffa54b; values 15px #d7d9e5)
    .newsletter (padding 168/113)
      .newsletter_title "Subscribe to newsletter" (24px #ffa54b)
      .newsletter_form: .newsletter_input (#161d4a, 56px, placeholder #d7d9e5) + .newsletter_button "Submit" (#ffa54b 107x56)
      .newsletter_text (italic disclaimer 12px rgba(136,136,136,0.41))
    .footer_bar (#070d1d, 57px): copyright + [Component Dock link — REPLACES "made by Colorlib"] | .footer_nav (Home | The Team | Tickets | News | Contact)
```

## Section-by-section fidelity notes

1. **Header** — fixed; keep the translucent navy + 3px orange underline
   signature. The crest MUST overhang below the header (absolute, centered,
   `top: -60px`); on scroll it shrinks/drops. Split nav around the crest is
   the distinctive layout — do not flatten to a normal left-logo nav. Top
   bar keeps the LIVE red badge + ticker; replace "Sign up/Sign in" with
   plain links if no auth (fine to keep as visual links).
2. **Hero slider** — the countdown chip + skewed team chips + giant
   outlined VS is the hero signature. Skew via `transform: skew(37deg)`
   outer + `skew(-37deg)` inner. VS: `rotate(-7deg)`, red fill, navy
   text-stroke (`-webkit-text-stroke: 3px #191339`). "Next" is a square,
   not an arrow circle. 2 slides minimum to prove the slider works.
3. **Breaking-news strip** — exactly 78px tall; orange block left with
   navy text is inverted from most templates (orange as BACKGROUND). Keep.
4. **Latest results** — white band; centered heading stack; two mirrored
   blocks around a thin vertical divider; photos bottom-aligned at 262px.
5. **Navy events/games band** — this two-column dark band is unique: event
   rows and game rows share the same 110px `#242b56` strip language. Games
   rows: 37/26/37 column split, centered league/score/date stack. Keep the
   decorative absolute player photo behind bottom-left (low-key overlap).
6. **Milestones** — parallax band (dark photo) with 4 counters; count-up
   on view via IntersectionObserver, cleanup on unmount.
7. **Player of the month** — white; number chip + HUGE orange name is the
   focal point; photos bottom-anchored to the left half of the viewport
   (absolute, `calc(50vw + 55px)`), text column left, photos overlap
   right — this asymmetric overlap is the signature; replicate it.
8. **News grid** — `#d7d9e5` band; white date badges overlap the photo
   bottom-left; hover shadow. Standard 3-up.
9. **CTA strip** — orange bg with white hairline borders top/bottom;
   navy uppercase span inline in the sentence; navy button.
10. **Footer** — newsletter lives INSIDE the footer top (not a separate
    band); contact list with orange labels; footer bar darker navy.
    Attribution: Component Dock link ONLY.

## Pitfalls

- The source reuses `#161d4a` for many roles (header, chips, ticker,
  input, button) — tokenize once (`--color-navy`) instead of scattering.
- `.vs` text-stroke needs `-webkit-text-stroke`; provide a fallback
  (navy text-shadow) for browsers without it.
- `upcoming_image` decorative photo uses `z-index: -1` — ensure the navy
  band still paints above page background but below content.
- OwlCarousel slides: implement with React state + CSS transitions; do not
  add a carousel dependency.
- Header crest overhang: the fixed header must not clip it (no
  `overflow: hidden` on header; z-index care with hero content).

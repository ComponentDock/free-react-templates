# Dunkly (ColorLib Basketball) — Tasks & Design Notes

> **SUPERSEDED (2026-08-12):** this prep duplicates ColorLib "Basketball",
> which shipped as **Swish** (`apps/swish`, PR #307, live at
> https://free-react-templates-swish.surge.sh) while this prep was running.
> Both TEMPLATES.md Basketball rows (Blog + Sports sections) are marked `[x]`
> with the swish URL. DO NOT implement Dunkly — delete this folder on the
> next main-tree cleanup. The notes below remain valid as a fidelity
> reference for the shipped app if any fix-ups are needed.

> Prep artifacts prepared on `main` by the prep stream (stream 3). The spec
> folder `openspec/specs/template-dunkly/` is the claim marker —
> implementers start here.

## Design notes (replication findings)

- **Original:** ColorLib "Basketball" — basketball school / sports club
  website template (source: https://colorlib.com/wp/template/basketball/;
  listed twice in TEMPLATES.md — Blog section AND Sports section — both rows
  are the same source slug; implement ONE app, mark both rows `[x]` at
  bookkeeping).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/basketball/ (HTTP
  200, full rendered DOM, 43.7KB + `css/style.css` 135.5KB + Bootstrap 4 +
  animate + owl.carousel + swiper + themify-icons + flaticon +
  magnific-popup, extracted 2026-08-12 during prep). Screenshot
  `basketball-free-template.jpg` (1200×946, AVIF) converted to PNG and viewed
  in the browser.
- **Visual design:** warm, clean, motivational athletic aesthetic — white nav
  over a soft cream hero, big bold headline with the first line in orange
  ("DEFEND &") and the second in heavy black ("DOMINATE"), an illustrated
  hero scene (floating basketballs + uphill winding road + skyline silhouette
  - faint hoop), orange square CTA buttons, cream alternating sections, dark
    charcoal event cards with white-ringed date boxes, a dark slider band, a
    gallery with hover overlays, blog cards with date badges, dark footer bar.
- **Palette (CSS-verified):** primary orange `#ff8b23` (buttons, kickers,
  hero h1 span, hovers); peach `#fdcb9e` (btn_2 bottom border);
  cream `#fff7ef` (about/player_info/blog/footer bg); hero fallback
  `#f0eed4`; heading charcoal `#2a2a2a`; hero black `#000`; darks
  `#454545` (event cards) / `#303030` (copyright bar, social band) /
  `#8a8a8a` (muted text, date badge); eyebrow `#666666`.
- **Fonts:** Playfair Display (headings + italic kickers), Open Sans 900
  (hero h1 only), Roboto (body + date month span). Google Fonts @import:
  `Open+Sans:800|Playfair+Display:400,400i,900|Roboto:300,400,500`.
- **Buttons:** square (no radius), 12px uppercase white; btn_1 padding
  13px 35px (hover white bg/orange text); btn_2 padding 13px 47px with 4px
  `#fdcb9e` bottom border.
- **Structure (1:1, section order):**
  1. Header — top info bar (phone "+02 213 - 256 (365)", REGISTER button);
     `.main_menu` white nav (border-top 1px #eee, navbar padding 20px 0):
     logo `img/Logo.png` (basketball line icon + "Basketball COLLEGE TEAM"),
     links Home / About us / team / gallery / Pages (dropdown) / blog /
     Contact, social icons right; hamburger on mobile.
  2. Hero `.banner_part` (height 800px, flex center, bg `banner_bg.png`
     cover; mobile bg #f0eed4): h5 eyebrow (14px uppercase Playfair 600
     #666), h1 "Defend & Dominate" (80px lh 1 uppercase Open Sans 900 #000,
     "Defend" in orange span), paragraph, btn_1 "learn more".
  3. About `.about_part` (bg #fff7ef): h4 "About us" (orange italic 20px),
     h2 "Welcome to Basketball School" (25px), 2 paragraphs, btn_1
     "read more", right photo `about.png`.
  4. Upcoming Event `.upcoming_event.section_padding`: tittle h4 "Upcoming
     Event" + h2 "Land Morning Blessed" (36px/700); TWO `.upcoming_event_1`
     cards (bg #454545): event photo + `.upcoming_event_text` date box
     (bg #454545, 271px wide, padding 35px 22px, margin 10px, ring
     `0 0 0 10px rgba(255,255,255,.5)`): h3 "15" (28px/700 white) + span
     "jun" (50%, Roboto 400), time "12:00 AM - 12:30 AM", "Sandis peter",
     description, btn_2 "View Details".
  5. Learn About `.learn_about.section_padding` (bg `learn_about_bg.png`
     cover + #000): h4 "free tutorial" + h2 "Learn About Basketball"
     (white); swiper slide carousel (`slider_content_1/2.png`) + 4 thumbs
     (`slide_thumb_1..4.png`).
  6. Recreational Program `.about_part.recreational_part` (margin-bottom
     130px): photo `recreational.png` left, text right (`about_text`
     padding-left 110px): h4 "Recreational Program", h2 "Deep which above
     behold an woter set a herb dry days." (placeholder copy).
  7. Player Info `.player_info.section_padding` (bg #fff7ef): h3 "Jequline
     Dodge" (20px/700), long paragraph, "Swords Club", photo
     `player_info.png` (+ `club_logo.png` badge).
  8. Gallery `.gallery_part` (padding-top 130px, light): h4 "Our Gallery" +
     h2 "Latest Player Showcase"; 8 `.single_gallery_item` tiles; hover
     `:after` overlay bg #000 scale(.7)→1 opacity 0→1 with white 20px title
     "Face is had place image" + orange underline.
  9. Blog `.blog_part.section_padding` (bg #fff7ef): h4 "From The Blog" +
     h2 "Latest News & Update"; 4 cards: photo, date "12 march, 2019", h5
     title "Dictumst iaculis mauris egestas Nibh netus mauris suscipit."
     (20px/700, hover orange), "Sports news", "2 Comments".
  10. Social `.social_connect_part` (padding-top 130px): h4 "Social Media" +
      h2 "Follow Us Instagram"; 6 square insta thumbs, hover overlay with
      social icon (dark #303030 band).
  11. Footer `.footer-area.section_padding` (bg #fff7ef): 4 link columns —
      Top Products (Managed Website, Manage Reputation, Power Tools,
      Marketing Service), Quick Links (Jobs, Brand Assets, Investor
      Relations, Terms of Service), Features (same 4), Resources (Guides,
      Research, Experts, Agencies); Newsletter widget ("You can trust us. we
      only send promo offers," + subscribe input/button).
  12. Copyright `.copyright_part` (bg #303030, padding 26px 0): "Copyright ©
      All rights reserved | This template is made with by Colorlib".

## Implementation tasks (suggested order, TDD)

1. Scaffold `apps/dunkly` (copy the simplest existing app; rename package to
   `@free-react-templates/dunkly`; register workspace, update vitest setup
   per repo pattern).
2. `index.html`: title "Dunkly — Basketball School Template", Google Fonts
   `<link>` (Open Sans 800, Playfair Display 400/400i/900, Roboto 300/400/500).
3. `@theme` tokens in the app CSS: `--color-brand` #ff8b23, `--color-peach`
   #fdcb9e, `--color-cream` #fff7ef, `--color-charcoal` #2a2a2a, `--color-ink`
   #000, `--color-event` #454545, `--color-night` #303030, `--color-muted`
   #8a8a8a; heading font Playfair Display, body Roboto, hero font Open Sans.
4. Header: top info bar + nav (desktop + mobile hamburger) — test both nav
   states (desktop/mobile duplicate links → `getAllByRole`).
5. Hero: 800px band, cream bg + photo/illustration, eyebrow, split-color
   uppercase h1, paragraph, "Learn More" button. NOTE: the source hero is an
   ILLUSTRATION (road/basketballs/skyline) — a real basketball action photo
   with a cream overlay or a composed graphic works; verify the chosen
   picsum seed renders a basketball/action scene before pinning it (see
   seed-screening method in the replication skill).
6. About section (cream, kicker + heading + 2 paragraphs + button + photo).
7. Upcoming events: 2 dark cards with white-ringed date box (day + month
   stack), time, speaker, description, "View Details" (4px peach bottom
   border).
8. Learn About: dark band, white heading, auto-advancing photo carousel +
   thumbnail rail (no swiper dep needed — simple index state + interval;
   use fake timers with `act()` in tests).
9. Recreational program split.
10. Player info (name, bio, club, photo + badge).
11. Gallery: 8 tiles with hover overlay (title + orange underline) — test
    with `fireEvent.mouseEnter` or assert the overlay markup exists.
12. Blog: 4 cards (photo, date, title hover orange, category, comments).
13. Instagram strip: 6 thumbs with hover overlay.
14. Footer: 4 link columns + newsletter form (success state on submit) +
    dark copyright bar with ColorLib credit.
15. Composition + document title; run `scripts/verify-app.sh dunkly` until
    green (typecheck + lint + 100% coverage + build), then PR + immediate
    squash merge per FAST_MODE, bookkeeping on BOTH Basketball rows
    (Blog line + Sports line) with the surge URL.

## Fidelity notes / pitfalls

- Kicker h4s are Playfair Display ITALIC 20px orange — don't make them bold
  sans.
- The hero h1 span colors only ONE part orange (the source has "Defend &"
  orange, "DOMINATE" black) — check the source span split and mirror it.
- Buttons are SQUARE (no rounded corners) — Tailwind default radius must be
  overridden.
- Event date box: white ring comes from `box-shadow 0 0 0 10px
rgba(255,255,255,.5)` + 10px margin, not a border.
- The "Features" and "Quick Links" columns share identical links in the
  source — keep them as-is (faithful), don't "fix" the duplication.
- Blog date badge: source shows "12 march, 2019" text under the image (home
  variant), NOT the rounded #8a8a8a badge (that badge is the inner-page
  variant) — match the home layout.
- Gallery hover overlay reveals the title — decorative images have no img
  role; query with `container.querySelectorAll('img')` where needed.
- Keep the ColorLib credit line in the copyright bar ("made with by
  Colorlib") — required for template licensing attribution.

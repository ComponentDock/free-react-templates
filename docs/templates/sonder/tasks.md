# Sonder (ColorLib Philosophy) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-sonder`.

## Source mapping

- **ColorLib item:** "Philosophy" (TEMPLATES.md — FOUR copies, lines 280,
  1723, 2417, 2989; mark ALL `[x]` when done).
- **Source URL:** https://colorlib.com/wp/template/philosophy/
- **Preview URL:** https://preview.colorlib.com/theme/philosophy/
  (HTTP 200, 51 KB DOM — live, analyzed 2026-08-08).

## Reference research (done — do not redo)

### Screenshot (`philosophy-free-lifestyle-blog-website-template.jpg`, 1200×941; verified via vision)

Dark charcoal header block (~40% of viewport) with a featured-post layout:
one large image post left (musician; green "MUSIC" tag; serif title; John
Doe · December 29, 2017), two smaller stacked posts right (camera lens /
"MANAGEMENT" tag; dark abstract / "LIFESTYLE" tag). Below: light grey
(`#f4f4f4`) row of blog cards (lamp post "Just a Standard Format Post",
a text-only quote card, tulips "10 Interesting Facts About Caffeine", dark
flowers "No Sugar Oatmeal Cookies"). Serif headlines, sans body, thin top
bar with social icons left + SEARCH right, centered logo, uppercase small
menu. Footer not visible in the shot.

### Live DOM (primary reference — matches the screenshot)

Section order: `s-pageheader--home` (header: logo + social FB/X/IG/Pinterest

- search; nav: Home, Categories ▾ [Lifestyle, Health, Family, Management,
  Travel, Work], Blog ▾ [Video, Audio, Gallery, Standard], Styles, About,
  Contact) → `.featured` (1 big + 2 small posts) → `s-content` masonry grid +
  `pgn` pagination → `s-extra` (Popular Posts + Tags) → `s-footer`.

* Featured big: "Music" pill, "What Your Music Preference Says About You
  and Your Personality.", John Doe, Dec 29 2037, avatar, bg photo.
* Featured small: "Management" / "The Pomodoro Technique Really Works."
  (Dec 27) and "LifeStyle" / "Throwback To The Good Old Days.".
* Masonry cards (mixed formats): standard image posts + ONE quote card
  ("Good design is making something intelligible and memorable. Great
  design is making something memorable and meaningful." — Esther Banks).
  Titles: Just a Standard Format Post., 10 Interesting Facts About
  Caffeine., No Sugar Oatmeal Cookies., Key Benefits Of Family Photography.,
  Workspace Design Trends and Ideas., Visiting Theme Parks Improves Your
  Health. Dates Dec 15 / Dec 10 2037. Tags per card (Design, Photography,
  Health, Cooking, Lifestyle, Family, Work, Management, Music,
  Relationship, Travel, Vacation).
* Pagination: Prev / 1 / 2 (current) / 3 / 4 / 5 / Next.
* Popular Posts: 2-col mini cards, thumb + title + "By John Doe on Dec 19,
  2037".
* Tags cloud: Salad, Recipe, Places, Tips, Friends, Travel, Exercise,
  Reading, Running, Self-Help, Vacation.
* Footer: Quick Links (Home, Blog, Styles, About, Contact, Privacy Policy),
  Archives (Jan–Dec subset), Social (Facebook, Instagram, Twitter,
  Pinterest, LinkedIn), "Our Newsletter" + blurb + email + Send
  (`#0054a5`), bottom bar "© Copyright Philosophy 2038" + Colorlib credit +
  back-to-top.

## Design tokens (from preview css/main.min.css)

- Brand blue `#0054a5` — links, focus borders, primary button hover,
  newsletter Send button.
- Dark charcoal `#111` (pageheader bg + diagonal repeating-gradient
  lines), `#151515` / `#19191b` (footer, overlays).
- Light grey `#f2f2f2` (masonry section bg); white `#fff` (s-extra, text on
  dark); black `#000` (headings, primary buttons).
- Meta greys `#767676` / `#727272` / `#656565`.
- Category pill: `#01aef0` bg, white text, uppercase bold 1.1rem,
  letter-spacing .2rem, padding 0 1.5rem.
- Tag chips: `#e2e2e2` bg, uppercase bold 1.3rem, letter-spacing .2rem,
  radius 3px.
- `<mark>` highlight: `#ffd900` bg / `#000` text (decorative).
- Fonts: headings `librebaskerville-bold` (serif); body/nav/buttons
  `metropolis-*` (sans). Google Fonts substitute: Libre Baskerville +
  Poppins (or system sans) — document substitution in PR.
- Buttons: uppercase, letter-spacing .3rem, height 5.4rem, padding 0 3rem,
  radius 3px, border .2rem solid; default `#c5c5c5` → hover `#b8b8b8`;
  primary `#000`/white → hover `#0054a5`.

## Implementation outline (section order 1:1)

1. **Page header** — `#111` bg with subtle diagonal line texture (CSS
   repeating-linear-gradient); top row: logo "Sonder" left, brand social
   icons (FB, X, IG, Pinterest) left/center, search icon + input right;
   nav below: Home, Categories ▾, Blog ▾, Styles, About, Contact (uppercase
   small); dropdowns on hover/focus; mobile hamburger menu.
2. **Featured posts** — 3 cards on dark bg: big left (bg photo 800×1000,
   cyan category pill, serif h2 title, avatar + author + date), two small
   right (photos 800×500 each).
3. **Masonry blog grid** — `#f2f2f2`; CSS columns or JS-free masonry
   (columns-2/3); 6–8 cards: image posts (picsum thumb 600×400, date, serif
   title, excerpt, tag chips, author) + one quote card (large quotation
   mark, quote text, attribution).
4. **Pagination** — Prev / 1–5 / Next; current page (2) highlighted; links
   are anchors (single page).
5. **Popular posts + Tags** — white `s-extra`: left "Popular Posts"
   2-col grid (thumb 150×150, title, By author on date), right "Tags" chip
   cloud.
6. **Footer** — dark `#151515`; 3 link columns (Quick Links, Archives,
   Social) + "Our Newsletter" (blurb, email input, `#0054a5` Send,
   validation + success state); bottom bar: "© Copyright Sonder 2038" +
   paraphrased ColorLib credit + back-to-top.
7. **Composition** — skip link, `<main>`, banner/contentinfo landmarks,
   document title "Sonder — Lifestyle Blog Template".

## Fidelity notes

- Match the live DOM: dark header + featured block, light masonry grid,
  white popular/tags strip, dark footer. Section order 1:1.
- Serif headings (Libre Baskerville), sans body, `#0054a5` brand blue,
  `#01aef0` category pills, `#e2e2e2` tag chips, uppercase small nav.
- Never use "Philosophy" as the brand; brand is "Sonder".
- Placeholders: `picsum.photos/seed/sonder-<n>/<w>/<h>` (deterministic).
- Icons: lucide-react (Search, Menu, X, ArrowUp, Mail, Calendar, User,
  Quote); brand icons via inline SVG BrandIcon in packages/ui (lucide
  removed brand icons).
- Newsletter + search: client-side only; pagination decorative.

## Commit + PR conventions

- Prep commit (this): `docs: prep Sonder (ColorLib Philosophy) spec +
research`.
- Implementation branch: `feat/template-sonder`; PR title: `feat: Sonder —
lifestyle blog website template (ColorLib Philosophy)`.
- PR body: source URL, preview URL (200), tokens, differences (rename,
  placeholders, single-page anchors, font substitution), TEMPLATES.md
  four-copy note (lines 280 / 1723 / 2417 / 2989).
- After merge: surge URL `https://free-react-templates-sonder.surge.sh`,
  TEMPLATES.md `[x]` on ALL FOUR copies, `npm run readme:status`.

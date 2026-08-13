# Skylark (ColorLib Flyplane) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-skylark`.

## Source mapping

- **ColorLib item:** "Flyplane" (TEMPLATES.md — appears 2×: lines 582,
  2982; both rows point to the same source, one prep covers all; verified
  with `grep -c 'wp/template/flyplane/'` = 2).
- **Source URL:** https://colorlib.com/wp/template/flyplane/
- **Preview URL:** https://preview.colorlib.com/theme/flyplane/ — **HTTP 200,
  live** (confirmed 2026-08-13, ~49 KB HTML fetched + parsed). Do not redo
  this lookup.
- **Preview CSS:** https://preview.colorlib.com/theme/flyplane/css/style.css
  (~53.9 KB — theme CSS; brand tokens verified in it) + vendor sheets
  (bootstrap.min, font-awesome, elegant-icons icon font, barfiller,
  magnific-popup, nice-select, slick, datepicker.min, owl.carousel.min,
  slicknav.min). Site is jQuery + owl-carousel + slick + slicknav +
  nice-select + datepicker — NOT Tailwind.

## Reference research (done — do not redo)

### Screenshot (`flyplane-free-template.jpg`, 1200×946; verified via browser vision)

Full-width hero photo from inside a plane cockpit overlooking mountains;
centered white headline "Let's Make Your Best Trip Ever", white subtext, a
white "DISCOVER NOW" button; a white search widget overlaid on the hero
bottom (Where / Date / Guests fields + blue "SEARCH PLANE" button). Thin
dark top strip with contact info (address, phone, email) + social icons
right; white navbar below with "FlyPlane" logo (blue airplane icon) and
uppercase links HOME, PAGES, BLOG, ABOUT US, CONTACTS. Below: "Special
Offers" section with three destination photo cards. Adventurous,
premium-travel aesthetic: white sections, high-quality photography, single
periwinkle-blue accent (#4657F0) on white/navy.

### Live DOM (primary reference — section order verified against fetched HTML + parsed CSS)

1. **Header** `header.header`
   - `position: absolute; top: 0; width: 100%` (floats over hero).
   - `div.header__top` — white 15px text over the dark hero photo: left
     `ul.header__top__widget li` ×3 — pin icon + "84 Forest Ave, Lake
     Grove, New York"; phone icon + "(+12) 345-678-91012"; mail icon +
     "contact.colorlib@gmail.com"; right `div.header__top__social` — 4
     icon links (facebook, twitter, youtube, skype), white, margin-right
     30px.
   - `div.header__options` — `background: #ffffff; padding-left: 30px`:
     logo `div.header__logo` left (img/logo.png → recreate as text/SVG
     "Skylark"), `nav.header__menu` right (`text-align: right`): links
     15px/800/uppercase #1D2A3B, `padding: 33px 30px 26px`; Home (active),
     Pages ▾ (`ul.dropdown` width 150px white: Places, Places Details,
     Blog Details), Blog, About Us, Contacts. Active + hover: bg
     `rgba(29,42,59,0.1)` + `a:after` bottom bar (opacity 1).
   - Mobile: `div.canvas__open` hamburger + slicknav slide menu.
2. **Hero** `section.hero.spad.set-bg` (bg `img/hero.jpg`,
   `padding-top: 315px; padding-bottom: 235px`)
   - `div.hero__text` (max-width 750px, centered, margin 0 auto):
     `h2` 75px/700 white, line-height 85px "Let's Make Your Best Trip
     Ever" (60px/76px < 992px); `p` 20px/30px white (copy: plan and book
     your perfect trip…); `a.primary-btn` "Discover Now" — `background:
#ffffff; color: #1D2A3B !important; padding: 14px 32px 12px;
font-weight: 700; letter-spacing: 2px; text-transform: uppercase`.
3. **Filter search** `div.filter-search` (`margin-top: -60px` — overlaps
   hero bottom)
   - `form.filter__form` — `background: #ffffff; box-shadow: 0 20px 30px
rgba(29,42,59,.1)`; responsive padding 40px 50px on mobile.
   - 3 `div.filter__item` + submit:
     - "Where": `h5` label; `div.filter__item__input` — input 38px,
       `border: none; border-bottom: 1px solid rgba(29,42,59,.1)`,
       15px, #1D2A3B, placeholder "Center Point, Lo…"; right-aligned
       `span.icon_pin` #4657F0 (absolute right 0 top 10px).
     - "Date": same, placeholder "09th March, 2021", `span.icon_calendar`
       #4657F0, `data-toggle="datepicker"` → plain input in React.
     - "Guests": `select` options 05 / 06 / 04 / 08 (nice-select).
     - `button[type=submit]` "Search Plane" — `background: #4657F0;
color: #fff; font-weight: 700; letter-spacing: 2px;
text-transform: uppercase; border: none; padding: 10px`.
4. **Special Offers** `section.hotPlaces.spad`
   - Header row: `div.section-title` (col-lg-7) h2 50px/700 #1D2A3B
     "Special Offers", `padding-bottom: 30px`, `:before` 80×6px #4657F0
     bottom-left; (col-lg-5) intro paragraph 20px.
   - 3 `div.places__item.hotPlaces__item` (col-lg-4/6/12 responsive):
     `box-shadow: 0 20px 30px rgba(29,42,59,.1); margin-bottom: 30px`;
     `div.places__item__pic` photo; `div.places__item__text` (`padding:
22px 35px 20px 25px; position: relative`): `h4 a` 20px/700 #1D2A3B
     "Known monument in the black hills of south" (mb 8px); `p` 13px with
     `span` pin #4657F0 15px + "Lake Grove, New York"; `div.price` "$120"
     — 13px/700 #4657F0, `background: rgba(70,87,240,.1)`, `padding: 6px
12px 3px`, absolute `right: 35px; bottom: 20px`.
5. **Our Benefit** `section.benefit.spad` (`background: #f4f8fb`)
   - Left `div.benefit__content` (col-lg-6): section-title h2 "Our
     Benefit" + paragraph; `div.row` 2×2 `div.benefit__item`: `h4` 700
     #1D2A3B (mb 15px) with icon img (`margin-right: 8px; top: -4px`) +
     p: **Personal Schedule**, **Luxury Interiors**, **Safe &
     Confidential**, **Professional Crew**.
   - Right `div.benefit__pic` (col-lg-6): 2×2 grid of 4 photos
     (`div.benefit__pic__item img`, min-width 100%).
6. **Feature Places** `section.feature.spad`
   - Centered `div.section-title.center_title` (h2 `:before` centered via
     `right: 0; margin: 0 auto`) h2 "Feature Places" + centered paragraph.
   - `div.feature__slider.owl-carousel` of 5+ `div.feature__item`
     (col-lg-3): `div.feature__item__pic` photo; `div.feature__item__text`
     — `background: #fff; text-align: center; width: calc(100% - 60px);
margin: -30px 30px 0; position: relative; z-index: 1; padding: 20px
25px; box-shadow: 0 20px 25px rgba(29,42,59,.1)`:
     - `div.rating` "4.5" 15px/700 #1D2A3B + `i.fa-star` #F9B71C +
       `span` "(120k Rating)".
     - `h5 a` — pin #4657F0 + destination + `fa-long-arrow-right`:
       "Phuket, Thailand", "Positano, Italy", "Bali, Indonesia" (+
       repeats to fill the carousel).
7. **Destination Gallery** `section.gallery.spad.set-bg`
   (`height: 682px`, bg `img/gallery/gallery-bg.jpg`)
   - Centered `div.gallery__title`: section-title h2 "Destination
     Gallery" + paragraph.
   - `div.gallery__pic__slider` (slick): `div.gallery__pic__item.set-bg`
     slides, each `h1` 130px/700 white uppercase `letter-spacing: 8px`
     country name: America, Slovakia, Canada, Japan, Italy, Singapore,
     China, Australia, Austria, Bangladesh, Spain.
   - `div.gallery__controls` — `background: #ffffff; padding: 0 70px;
position: absolute; left: 0; right: 0; bottom: 0`; 11
     `div.gallery__controls__item` h5 20px/700 #1D2A3B (`padding: 50px
22px 45px; margin-right: 26px; cursor: pointer`) — country names
     (active state distinct; clicking switches the slide).
8. **News Latest** `section.latest.spad`
   - Left `div.latest__left` (col-lg-4): section-title h2 "News Latest";
     3 `a.latest__recent__item` rows: thumb `img` (lr-1..3.jpg) +
     `div.latest__recent__item__text`: `ul li` "Travel" / "By Admin" +
     `h5` 20px/700 #1D2A3B (line-height 30px) "The point of using Lorem
     psum is that it has...".
   - Right `div.latest__content` (col-lg-8): 2 `div.blog__item`
     (col-lg-6): photo + `div.blog__item__text`: `div.blog__date` "Oct
     28, 2020" (white 13px/700, letter-spacing 2px, `padding: 8px 16px
6px; top: -16px`, absolute over image) + `ul li` Travel / By Admin +
     `h5 a` title link.
9. **Footer** `footer.footer.spad` (`background: #191B26; padding: 80px 0`)
   - Centered `div.footer__text` (col-lg-7): `div.footer__logo` + about
     paragraph ("Nullam ultrices tortor non diam…"); `div.footer__social`
     — 4 `a` 55px white circles (`height/width 55px, line-height 60px,
background: #ffffff, border-radius: 50%`, 20px #747E8C icons,
     margin-right 11px, hover → blue); `div.footer__nav` — inline links
     (Home, Pages, Blog, About Us, Contacts, `margin-right: 60px`);
     `p.footer__copyright` white — original "made with ❤ by Colorlib" →
     replace with Component Dock attribution (copyright year via
     `new Date().getFullYear()`).

## Design tokens (from CSS — verified in stylesheet)

| Token      | Value                                                                      | Used on                                                                                       |
| ---------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| ink/navy   | `#1D2A3B`                                                                  | headings, menu links, card titles, rating, hero button text, inputs, gallery controls         |
| primary    | `#4657F0`                                                                  | section-title bar (80×6px), field icons, price badge text, Search Plane button, location pins |
| badge wash | `rgba(70,87,240,.1)`                                                       | price badge background                                                                        |
| star       | `#F9B71C`                                                                  | feature rating star                                                                           |
| muted      | `#747E8C`                                                                  | footer social icons                                                                           |
| light band | `#f4f8fb`                                                                  | benefit section background                                                                    |
| footer     | `#191B26` bg, white text                                                   | footer                                                                                        |
| nav wash   | `rgba(29,42,59,.1)`                                                        | active/hover menu link background                                                             |
| input line | `rgba(29,42,59,.1)` bottom border                                          | filter form inputs                                                                            |
| font       | "Nunito Sans", sans-serif                                                  | body + headings (400/700/800)                                                                 |
| button     | uppercase, 700, letter-spacing 2px, radius 0                               | primary-btn (white bg/#1D2A3B, 14px 32px); search btn (#4657F0/white, padding 10px)           |
| shadow     | `0 20px 30px rgba(29,42,59,.1)` form/cards; `0 20px 25px` feature text box | filter form, places cards, feature cards                                                      |
| radius     | 0 (sharp); 50% social circles                                              | buttons/cards; footer socials                                                                 |

## Implementation task outline

1. Scaffold `apps/skylark` from the simplest existing app (copy + rename
   package to `@free-react-templates/skylark`); `npm install` at root so the
   lockfile registers the workspace; set `public/CNAME` =
   `skylark.free.componentdock.com` and homepage
   `https://skylark.free.componentdock.com`.
2. `@theme` tokens: ink (#1D2A3B), primary (#4657F0), star (#F9B71C),
   muted (#747E8C), light band (#f4f8fb), footer bg (#191B26); font family
   Nunito Sans (400/700/800) via Google Fonts link in `index.html`.
3. Components (one per section, colocated tests, TDD, 100% coverage):
   - `Header` — absolute top bar (contact info + 4 socials) + white options
     bar (logo, uppercase menu, Pages dropdown with aria-expanded +
     Escape/outside-click close, mobile slide-over).
   - `Hero` — full-width bg photo, centered white 75px h1 (responsive),
     white subtext, white primary-btn "Discover Now".
   - `FilterSearch` — white form overlapping hero bottom (negative top
     margin, shadow): Where + Date + Guests (select 05/06/04/08) + blue
     "Search Plane" submit; plain controlled inputs; submit handler.
   - `SpecialOffers` — title row (h2 + 80×6px primary bar + intro) + 3
     destination cards (photo, title, pin+location, blue price badge).
   - `Benefit` — #f4f8fb band: 2×2 benefit items (icon, h4, p) + 2×2 photo
     grid (skylark-5..8 seeds).
   - `FeaturePlaces` — centered title; state carousel of 5+ cards
     (photo + overlapping white text box: rating w/ yellow star,
     destination link w/ pin + arrow), Prev/Next + dots.
   - `Gallery` — bg photo section; state slider of 11 slides (huge white
     uppercase country names, skylark-14..24) + white controls bar that
     switches slides.
   - `NewsLatest` — left: 3 recent-post rows (thumb + Travel/By Admin +
     title); right: 2 blog cards (photo + date badge + meta + title).
   - `Footer` — #191B26, logo + about, 4 white social circles, inline nav,
     copyright bar with Component Dock link.
4. `App.tsx` composes all sections; title "Skylark — Travel Template".
5. Verify: `npm run verify:app -- skylark`; then PR
   `feat/template-skylark` → squash merge to main.

## Fidelity pitfalls (learned during prep)

- Hero button text is #1D2A3B on WHITE (inverted vs. the blue search
  button) — both are uppercase with letter-spacing 2px.
- The filter search form overlaps the hero via `margin-top: -60px` — keep
  it as one component rendered right after the hero.
- The gallery controls bar is `position: absolute; bottom: 0` inside the
  682px gallery section — the slide names repeat in both the big slider
  and the controls bar.
- Menu active/hover uses a translucent `rgba(29,42,59,.1)` bg + bottom
  underline, not a colored text change.
- Icons come from the "elegant-icons" icon font (pin, phone, mail,
  calendar, socials) — map to lucide-react equivalents.
- `gallery-bg.jpg` and `hero.jpg` are background images via
  `data-setbg` — use CSS `background-image` (picsum seeds).
- Footer copyright uses `document.write(year)` — use
  `new Date().getFullYear()` in React.
- No ColorLib strings in app code; footer attribution → Component Dock.

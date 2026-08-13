# Template: Landmark (Real Estate Template)

## Purpose

Landmark is a real-estate listing one-pager in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Konato"
template design (see TEMPLATES.md — appears 2×: lines 598 and 2598; both rows
point to the same source and are `- [ ]` — one prep covers both, mark ALL
`[x]` when done; verified with `grep -c 'wp/template/konato/'` = 2), built
under a DIFFERENT name (Landmark — a real-estate term, fitting the property
theme; single lowercase word, no collision with `apps/` or existing spec
folders) per the monorepo naming mandate (never reuse the ColorLib source
name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

Source: https://colorlib.com/wp/template/konato/ (Bootstrap 5 category;
`<title>Real Estate</title>`).
Preview URL: https://preview.colorlib.com/theme/konato/ (HTTP 200, ~42 KB
HTML + `assets/css/style.css` ~86 KB fetched and parsed — the preview slug
matches the TEMPLATES.md slug, no alias).

## Design reference (replication findings)

- **Original:** ColorLib "Konato" — a bright, professional REAL ESTATE
  one-pager. A dark-navy top bar (`#004274`) carries the logo, nav, a "Call
  Us" phone link and a "Sign In" button; a white bottom header row holds a
  property-search form (keyword input + Rent / Bed / Bath selects + Search).
  The hero is a full-width photo slider (owl-carousel) with a dark navy
  gradient overlay (`.hero-overly`, `rgba(25,40,57,…)`), white eyebrow
  ("3 Bed - 2 Bath - 2200 Sq Ft"), a big white h1 ("Light House NY"), a
  lorem paragraph, a white price ("$ 3,272", 40px) and a solid sky-blue
  "View Property" button (`.btn`, radius 4px, hover sweeps to `#004274`).
  Then two white property-listing carousels ("Display Latest & Featured
  Properties" and "Properties for Sale", slick carousel with arrows) of
  cards (photo, blue price, type heading, blurb, and a pricing row with
  bed/bath/building icons: "2 Bedroom" · "2 Bedroom" · "1050 Sq Ft"), a
  solid-blue "How we help people?" services band (`#00A0EB` bg + image,
  white text, 3 icon cards: Sell home or office / Rent home or office /
  Find next), a light-gray "Explore by Property Type" band (`#F2F4F8`, left
  heading + "View All Property" button, 4 icon category cards: Home &
  Appartment / Vila / Studio / Office), an "Our Agents" carousel (4 photo
  cards with social icons + name + "Real Estate Agent"), a split
  "Subscribe Newsletter" band (left panel `#004274` navy with white text +
  underline input + blue Subscribe button, right panel a photo bg), and a
  light footer (brand + pera + 4 social icons, 4 link columns Navigation /
  Services / Support / Contact Us, copyright bar). The brand is SKY BLUE
  `#00AEFF` (buttons, links, prices, hover states, preloader ring) on a
  white/`#F2F4F8` canvas with dark-navy `#004274` header and accents.
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/konato/
  (HTTP 200, ~42 KB HTML; `assets/css/style.css` ~86 KB parsed for tokens).
  The site is jQuery + Bootstrap 5 + Owl Carousel (hero slider) + Slick
  (property + agent carousels) + NiceSelect, NOT Tailwind. All interactivity
  must be recreated client-side in React.
- **Screenshot note:** `konato-free-template.jpg` (1200×946, viewed in the
  browser): dark blue header bar with "Konato" logo (location-pin icon),
  centered nav (Home, Property, About, Blog, Contact), "Call Us: +10 (31)
  356 3276" and a "Sign In" button; below it a white search bar (keyword
  field + Rest/Bed/Bath dropdowns + dark blue "Search" button). Hero: a
  scenic waterfront property photo (rustic stone boathouse on a lake with
  mountains), dark overlay, white text on the left, blue "View Property"
  button. Below: white "Display Latest & Featured Properties" section with a
  row of property cards (photo top, blue price, bold type, gray blurb) and
  carousel arrows. The LIVE rendered preview was ALSO verified in the
  browser (a11y snapshot: header nav + search form, hero caption, both
  property carousels, services band, property-type band, agents carousel,
  newsletter form, footer columns). The live rendered page + parsed
  stylesheet are the authoritative reference.

### Section structure (from the live DOM, top to bottom)

1. `div#preloader-active` — preloader: `#f7f7f7` full-screen layer with a
   spinner circle (1px ring, `border-top-color:#00AEFF`), fades out on load
   (recreate as a brief client-side preloader or omit — decorative).
2. `div.header-area > div.main-header`:
   - `div.header-top` (bg `#004274`): left `div.logo` (brand wordmark with
     a location-pin icon — recreate "Landmark" text logo), center
     `div.main-menu > ul#navigation`: Home, Property, About, Blog (with
     `ul.submenu`: Blog Details, Elements), Contact — links white 18px,
     hover `#00AEFF` + 3px blue underline sweep; right: "Call Us: +10 (78)
     356 3276" link (`header-btn2`) + "Sign In" button.
   - `div.header-bottom` (white): `form.search-box`: `div.input-form`
     (keyword `input` "Enter Keyword.." + search icon), 3 `div.select-form`
     selects (Rent / Rent 1–4, Bed / Bed 1–4, Bath / Bath 1–4 —
     nice-select styling: border `#BECCD6`, radius 4px, height 45px, text
     `#192839`), and a blue "Search" button (`.submit-btn`, radius 35px).
3. `section.slider-area` — hero slider (`.slider-active` owl carousel,
   prev/next arrows): `div.single-slider.slider-bg1.hero-overly` (bg photo
   `h1_hero1.jpg`-style + dark navy gradient overlay, `slider-height`
   full-height, flex-centered): `div.hero-caption` — `span` eyebrow "3 Bed
   - 2 Bath - 2200 Sq Ft" (white 18px), `h1` "Light House NY" (white 60px
     weight 500), `p` lorem (white), `span.price` "$ 3,272" (white 40px),
     `a.btn.hero-btn` "View Property" (blue, padding 25px 30px).
4. `section.latest-items.section-padding` — "Display Latest & Featured
   Properties": centered `div.section-tittle` (h2 38px weight 500
   `#192839` + p 18px weight 300 `#656565`); `div.items-active` slick
   carousel with prev/next arrow buttons of 4 `div.single-cat` property
   cards: `div.cat-img` (photo `items1.jpg`), `div.cat-cap` →
   `div.cap-top` (`span` price "$ 6,728" `#00AEFF` 16px + `h5` type link
   "Appartment" / "Office" / "Classic home" 22px + `p` blurb) +
   `div.pricing` row of 3 `div.single` (icon + label: bed "2 Bedroom",
   bath "2 Bedroom", building "1050 Sq Ft" — labels `#192839` 14px).
5. `section.services-area.section-img-bg2` (solid `#00A0EB` + bg image
   `section-bg1.jpg`, white text): centered `div.section-tittle.section-
tittle2` h2 "How we help people?" (white); 3 `div.single-cat.text-
center` service cards (`div.cat-icon` with `services1-3.svg` + `div.
cat-cap` h5 white link + p white): "Sell home or office" / "Rent home
   or office" / "Find next".
6. `section.latest-items.section-padding` — "Properties for Sale": same
   section-tittle + same 4-card property carousel (demo repeats the same
   cards — VARY listing names/prices/photos).
7. `section.categories-area.section-bg` (`#F2F4F8`): row — left
   `div.section-tittle.section-tittle3` (col-4): h2 "Explore<br> by
   Property Type" + p + `a.btn.mt-30` "View All Property"; right: 4
   `div.single-cat.text-center` category cards (`cat-icon` with
   `property1-4.svg` + `h5` link): "Home & Appartment" / "Vila" /
   "Studio" / "Office".
8. `div.team-area.section-padding` — "Our Agents": centered section-tittle
   (h2 "Our Agents" + p); `div.team-active` slick carousel (arrows) of 4
   `div.single-team.text-center` cards: `div.team-img` (photo `team1-4.
jpg`) + `div.team-social` (3 icon links: facebook-f, twitter, globe →
   inline SVG) + `div.team-caption` (h3 name + p "Real Estate Agent").
   Demo agents: Buster Hyman (repeats as carousel loop dup), Holly Graham,
   Nick R. Bocker, Jimmy Changa — VARY.
9. `div.visit-tailor-area` (bg `#004274` navy — the LATER rule in the live
   stylesheet wins over the `#F2F4F8` one; verified via computed style):
   left `div.tailor-details` (33–50%): h2 "Subscribe Newsletter" (white),
   p (white), `div.subscribe-now`: `input` "Enter your email" (transparent
   bg, white text, `border-bottom:2px solid #BECCD6`) + `button.
submit-btn2` "Subscribe" (`#00AEFF`, radius 4px, padding 10px 30px);
   right `div.tailor-offers` (bg photo `subscribe-img.jpg`, cover, height
   414px, width 50%).
10. `footer` — `div.footer-area.footer-padding`: brand logo + `div.footer-
pera` p (lorem) + `div.footer-social` (4 icon links: instagram,
    facebook, twitter, linkedin); 4 columns `div.footer-tittle`: h4
    "Navigation" (Home, About, Services, Blog, Contact), h4 "Services"
    (Drone Mapping, Real State, Commercial, Construction), h4 "Support"
    (same 4 links), h4 "Contact Us" (Drone Mapping, contact@carwash.com,
    10 (87) 738-3940 — display strings); `div.footer-bottom-area` (bg
    `#F2F6F9`) copyright bar — "Colorlib" credit replaced with the
    mandatory Component Dock link (https://www.componentdock.com/).

### Content (for copy paraphrase)

- Brand: "Landmark" (logo in header-top + footer logo area).
- Header: nav Home, Property, About, Blog (Blog Details, Elements),
  Contact; "Call Us: +10 (78) 356 3276"; "Sign In".
- Search bar: keyword placeholder "Enter Keyword.."; selects Rent, Bed,
  Bath (each with 4 options); "Search" button.
- Hero slider (1 slide in the demo DOM, owl carousel supports several):
  eyebrow "3 Bed - 2 Bath - 2200 Sq Ft"; h1 "Light House NY"; price
  "$ 3,272"; "View Property".
- Featured properties: "Display Latest & Featured Properties" + 4 cards
  (price "$ 6,728", types Appartment / Office / Classic home, "2 Bedroom"
  · "2 Bedroom" · "1050 Sq Ft").
- Services: "How we help people?"; Sell home or office / Rent home or
  office / Find next.
- For sale: "Properties for Sale" + 4 cards (VARY names/prices).
- Property types: "Explore by Property Type" + "View All Property";
  Home & Appartment / Vila / Studio / Office.
- Agents: "Our Agents"; Buster Hyman, Holly Graham, Nick R. Bocker, Jimmy
  Changa — "Real Estate Agent".
- Newsletter: "Subscribe Newsletter" + "Enter your email" + "Subscribe".
- Footer: brand pera, social icons, Navigation / Services / Support /
  Contact Us columns, copyright bar + Component Dock link.

## Design tokens

| Token     | Value                 | Usage                                                                                                                                                                                   |
| --------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| brand     | `#00AEFF`             | sky blue: `.btn` bg, `.submit-btn2` bg, prices (`.cap-top span`, hero `.price` is white), links, nav hover color + underline, preloader ring, section eyebrow span, footer link accents |
| navy      | `#004274`             | dark navy: `.header-top` bar bg, `.visit-tailor-area` (newsletter) bg, `.btn::before` hover sweep, `.number a` links                                                                    |
| ink       | `#192839`             | headings h1–h6 (Jost, weight 500), select text, pricing labels                                                                                                                          |
| body-text | `#545454`             | body copy `p` (Jost, 16px, line-height 1.4, weight 300)                                                                                                                                 |
| muted     | `#5E5E5E` / `#656565` | card blurbs / section-tittle p (18px 300) / input placeholders / footer text                                                                                                            |
| light     | `#F2F4F8`             | `section-bg` (Explore-by-Property-Type band); newsletter base (overridden by navy)                                                                                                      |
| line      | `#BECCD6`             | search input/select borders (1px, radius 4px), newsletter input bottom border                                                                                                           |
| blue-bg   | `#00A0EB`             | services band solid background (with `section-bg1.jpg` photo)                                                                                                                           |
| footer-bg | `#F2F6F9`             | footer bottom/copyright bar                                                                                                                                                             |
| font      | "Jost"                | everything (300–900 via Google Fonts `@import`; use `<link>` in index.html)                                                                                                             |

Radii: BUTTONS ARE 4px (`border-radius:4px` — `.btn`, `.submit-btn2`,
search inputs/selects). `.submit-btn` (full-width Search) is 35px pill.
Hero h1 60px / weight 500; section-tittle h2 38px / weight 500. Spacing:
`.section-padding` = 100px top / 90px bottom. `.btn` padding 22px 32px,
font 18px weight 400; `.hero-btn` padding 25px 30px; `.submit-btn2`
padding 10px 30px, font 18px. Hero overlay: linear gradient of
`rgba(25,40,57,0.6)→rgba(29,39,59,0.1)` (dark navy, left-weighted).

## Requirements

### Requirement: Header (top bar + search)

The system SHALL render a dark-navy `#004274` top bar with a brand logo,
primary navigation, a call-us link and a Sign In button, plus a white
search row beneath it.

#### Scenario: Top bar content

- **GIVEN** the Landmark app is rendered
- **WHEN** the page loads
- **THEN** the top bar SHALL have a `#004274` background with the brand
  "Landmark" (logo with a location-pin icon) on the left
- **AND** SHALL show nav links Home, Property, About, Blog, Contact in
  white 18px (hover `#00AEFF` + blue underline)
- **AND** SHALL show a "Call Us: +10 (78) 356 3276" link and a "Sign In"
  button on the right

#### Scenario: Search form

- **GIVEN** the header is rendered
- **WHEN** the user looks at the white bottom row
- **THEN** SHALL be a keyword input ("Enter Keyword.." with a search
  icon), three selects (Rent, Bed, Bath — each with 4 options), and a
  blue "Search" button
- **AND** the inputs SHALL use 1px `#BECCD6` borders with 4px radius

### Requirement: Hero slider

The system SHALL render a full-width hero photo slider with a dark navy
overlay, an eyebrow, a title, a price, and a View Property button.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **WHEN** the user is at the top of the page
- **THEN** the hero SHALL show a full-width property photo with a dark
  navy gradient overlay
- **AND** SHALL contain the eyebrow "3 Bed - 2 Bath - 2200 Sq Ft", the
  h1 "Light House NY" (white 60px), a lorem paragraph, the price
  "$ 3,272" (white 40px), and a blue "View Property" button (radius 4px)

#### Scenario: Slide navigation

- **GIVEN** the hero slider has multiple slides
- **WHEN** the user clicks a next/prev arrow or a pagination dot
- **THEN** the visible slide SHALL change (client-side carousel)

### Requirement: Featured properties

The system SHALL render a "Display Latest & Featured Properties" carousel
with four property cards.

#### Scenario: Property cards

- **GIVEN** the featured-properties section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section-tittle SHALL read "Display Latest & Featured
  Properties" with a subtitle paragraph
- **AND** four cards SHALL render in a carousel (with prev/next arrows),
  each with a photo, a blue price (e.g. "$ 6,728"), a type heading
  (Appartment / Office / Classic home), a blurb, and a pricing row of
  three items (bed + "2 Bedroom", bath + "2 Bedroom", building +
  "1050 Sq Ft")

#### Scenario: Carousel navigation

- **GIVEN** the property carousel has multiple cards
- **WHEN** the user clicks the carousel arrows
- **THEN** the visible cards SHALL scroll to the next/previous set

### Requirement: Services band

The system SHALL render a solid-blue "How we help people?" band with
three icon service cards.

#### Scenario: Service cards

- **GIVEN** the services section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL have a `#00A0EB` blue background with a
  white heading "How we help people?"
- **AND** three cards SHALL render (icon + title + blurb): "Sell home or
  office", "Rent home or office", "Find next" — all white text

### Requirement: Properties for sale

The system SHALL render a second "Properties for Sale" carousel with four
property cards (same card pattern, varied listings).

#### Scenario: For-sale cards

- **GIVEN** the for-sale section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section-tittle SHALL read "Properties for Sale"
- **AND** four property cards SHALL render in a carousel (vary the
  listing names, prices and photos from the featured section — the demo
  repeats the same cards)

### Requirement: Property types band

The system SHALL render a light-gray "Explore by Property Type" band with
a heading, a View All Property button, and four icon category cards.

#### Scenario: Category cards

- **GIVEN** the property-types section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL have a `#F2F4F8` background with the heading
  "Explore by Property Type", a paragraph, and a "View All Property"
  blue button
- **AND** four category cards SHALL render (icon + title): "Home &
  Appartment", "Vila", "Studio", "Office"

### Requirement: Agents carousel

The system SHALL render an "Our Agents" carousel with four agent photo
cards.

#### Scenario: Agent cards

- **GIVEN** the agents section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section-tittle SHALL read "Our Agents"
- **AND** four cards SHALL render in a carousel (with arrows), each with
  a photo, three social icon links (Facebook, Twitter, Globe — inline
  SVG, NO fontawesome), a name, and the role "Real Estate Agent" (vary
  the 4 agent names)

### Requirement: Newsletter band

The system SHALL render a split subscribe band with a dark-navy text
panel and a photo panel.

#### Scenario: Subscribe form

- **GIVEN** the newsletter section is rendered
- **WHEN** the user scrolls to it
- **THEN** the left panel SHALL have a `#004274` navy background with the
  white heading "Subscribe Newsletter", a paragraph, an email input
  ("Enter your email", white text, bottom border `#BECCD6`), and a blue
  "Subscribe" button (radius 4px)
- **AND** the right panel SHALL be a cover photo (`subscribe-img.jpg`
  equivalent — use a picsum seed)

#### Scenario: Subscribe submit

- **GIVEN** the user enters an email and clicks Subscribe
- **WHEN** the form is submitted
- **THEN** the form SHALL show a success state (no backend)

### Requirement: Footer

The system SHALL render a footer with a brand column, four link columns,
and a copyright bar linking Component Dock.

#### Scenario: Footer columns

- **GIVEN** the footer is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** SHALL be a brand block (logo + pera + 4 social icons:
  Instagram, Facebook, Twitter, Linkedin — inline SVG) followed by four
  columns: "Navigation" (Home, About, Services, Blog, Contact),
  "Services" and "Support" (Drone Mapping, Real State, Commercial,
  Construction), and "Contact Us" (Drone Mapping, contact@carwash.com,
  10 (87) 738-3940 — display strings)

#### Scenario: Copyright bar

- **GIVEN** the footer bottom bar
- **WHEN** rendered
- **THEN** SHALL show the copyright line
- **AND** SHALL link https://www.componentdock.com/ ("Component Dock") —
  replaces the Colorlib credit; NO Colorlib string in app code

## Verification checklist

- [ ] Spec validates: `npm run spec:validate`
- [ ] TDD: tests written before implementation; `npm run test:coverage` at
      100% lines/functions/branches/statements (per-app gate via
      `scripts/verify-app.sh landmark`)
- [ ] Design tokens from this spec applied in `@theme` (brand `#00AEFF`,
      navy `#004274`, ink `#192839`, body-text `#545454`, muted `#5E5E5E`,
      light `#F2F4F8`, line `#BECCD6`, blue-bg `#00A0EB`,
      footer-bg `#F2F6F9`)
- [ ] Jost (300–900) loaded via Google Fonts `<link>` in index.html
- [ ] Section structure + order matches the live DOM 1:1 (header-top →
      search row → hero slider → featured properties → services → for-sale
      → property types → agents → newsletter → footer)
- [ ] Placeholder images via `https://picsum.photos/seed/landmark-<n>/<w>/<h>`
      (hero bg, 8 property photos, 4 agent photos, newsletter photo);
      NO assets copied from ColorLib
- [ ] Buttons radius 4px (`.btn`, `.submit-btn2`); Search pill 35px;
      search inputs 4px radius with `#BECCD6` border
- [ ] Icons from lucide-react or inline SVG (search icon, bed/bath/
      building pricing icons, service icons, category icons, social brand
      paths — Facebook/Instagram/Twitter/Linkedin are REMOVED from
      lucide-react; use inline SVG). Verify every lucide export with the
      typeof probe; NO fontawesome / themify / icon fonts
- [ ] Interactivity client-side only: hero slider, both property
      carousels, agents carousel (no jquery/owl/slick/nice-select)
- [ ] Footer phone/email rendered as display strings; any `tel:`/`mailto:`
      hrefs computed at runtime from spaced literals (tel-literal
      redaction pitfall — NEVER write `tel:+...` literals in source)
- [ ] Demo-repeated content varied (property listings, agent names)
      — same kinds of content, no duplicated strings
- [ ] Newsletter panel bg is `#004274` navy (the LATER live stylesheet
      rule wins over `#F2F4F8` — verified via computed style)
- [ ] Footer links Component Dock (https://www.componentdock.com/)
- [ ] No colorlib.com / preview.colorlib.com strings in any app file
- [ ] TEMPLATES.md: mark BOTH konato rows `[x]` (lines 598 and 2598) +
      surge URL + readme:status when shipped
- [ ] Deploy check: merged PR → Deploy to Surge.sh workflow green + surge
      URL (landmark.free.componentdock.com) returns 200

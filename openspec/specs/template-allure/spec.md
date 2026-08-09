# Template: Allure (Beauty — Model Agency)

## Purpose

Allure is a single-page fashion model agency website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Modelo" design (see TEMPLATES.md, Beauty category), built
under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a high-fashion editorial agency page with a
purple/black/white identity: a fixed near-black header ("Modelo." logo; Home
/ About us / Models / News / Contact nav with purple active blocks; a big
purple "Submit your portfolio" block bottom-right; a fullscreen hamburger
menu), a vertical fixed social rail (Facebook / Twitter / Instagram), a
full-screen hero slider of purple-graded editorial model portraits
("Show Stopper." 130px headline + "Jessica Smith. 22. Model." subtitle, 01-03
square indicators, a white Previous/Next box), a white "Model Management"
intro with three animated counters (173 Models @ The Agency / 2190 Modeling
Contracts / 25 Model Recruitors), a masonry "See the Models." grid (rotated
-90° section title on a black band, All/Female/Male/Children isotope filters,
a purple "+" see-all square, nine mixed-size model tiles with a black hover
overlay showing name + "View Portfolio"), a "Model of the week." split block
(photo slider left, right: "Samantha Smith" title, lorem, an Age/Height/
Shoes/Hair/Eyes stat list, an underlined "View Full Profile" link and a
purple "Bookings" button), a black "Contact us." block with a Name/E-mail/
Message form + "Send Message" button, and a white footer (logo "Modelo." +
"Model Agency" tagline, copyright, and four office columns: Milan, Paris,
New York, London). Allure recreates that structure section-for-section with
matching layout, colors, typography, and content types (no ColorLib assets
copied).

## Design reference (replication findings)

- **Original:** ColorLib "Modelo" — free model agency website template
  (source: https://colorlib.com/wp/template/modelo/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/modelo/`
  (HTTP 200, 21.3KB) + stylesheets `styles/main_styles.css` (22.5KB),
  `styles/responsive.css`, `plugins/OwlCarousel2-2.3.4/owl.carousel.css`,
  `plugins/Isotope/…`, `plugins/font-awesome-4.7.0/…`,
  `styles/bootstrap-4.1.2/bootstrap.min.css`. The rendered DOM is the
  reference below; the TEMPLATES.md screenshot (`modelo-free-template.jpg`,
  1200×946) confirms the visual design: dark-mode hero with a vivid purple
  color grade on an editorial close-up portrait (round reflective
  sunglasses), huge white "Show Stopper." headline, purple "Submit your
  portfolio" header CTA, vertical social rail, white content sections with
  rotated (-90°) section titles, masonry models grid, black contact block.
- **Section order (1:1):**
  1. `header` (fixed, `background: #0b0208`, `border-bottom: solid 2px
#5b0857`, z-index 100): `header_content` 152px — `logo_container`
     (absolute left, padding-left 142px) = text logo `Modelo<span>.</span>`
     (HelveticaNeueLTProBd 36px white, span #690772; recreates as "Allure.");
     `main_nav` (centered; `ul li:not(:last-of-type) margin-right: 26px`;
     `li.active, li:hover background: #690772`; `a` 15px white, line-height
     32px, padding 0 13px/11px) = Home, About us, Models, News, Contact;
     `submit_button` (absolute right/bottom, 391×130px, `background:
#690772`, text-align center) = "Submit your portfolio" CTA; `hamburger`
     (fa fa-bars) opens fullscreen `menu` (fixed; `menu_close` fa-times;
     `menu_nav` links "Home<span>.</span>" etc. with purple dots;
     `menu_submit` "Submit your portfolio").
  2. `social_bar` (separate fixed vertical rail, left side of viewport;
     links Roboto 24px/700, `color: #121212`, hover `#690772`): Facebook,
     Twitter, Instagram.
  3. `home` (full-screen `home_slider` owl carousel, 3 identical
     `home_slider_item`s): `background_image` = `images/index.jpg`
     (purple-graded editorial model portrait; picsum placeholder); centered
     `home_content`: `home_title` "Show Stopper." (130px, white, line-height
     1. - `home_subtitle` "Jessica Smith. 22. Model." (24px white);
          `home_slider_custom_dots` (01 / 02 / 03 square indicators, bottom-left);
          `slider_nav_container` (absolute right/bottom, 389×128px, `background:
#FFFFFF`): `slider_prev` "Previous" + `slider_next` "Next" (each 50%,
          64px, 18px, `color: #505050`, hover `#690772`; prev `border-right: solid
2px #dcdce1`).
  4. `intro` (white, padding 105px 0 134px): `row row-eq-height` —
     `intro_image` (col-xl-2, `images/intro.png`) + `intro_content`
     (col-xl-10): `intro_title` h1 "Model Management" (`color: #121212`,
     span `#690772`); `intro_text` (2 lorem paragraphs); `milestones_container`
     (margin-top 69px): 3 `milestone`s (flex-grow 1) — `milestone_counter`
     72px HelveticaNeueLTProBd `#690772` (data-end-value: 173 "Models @ The
     Agency", 2190 "Modeling Contracts", 25 "Model Recruitors") +
     `milestone_title` 18px `#121212`.
  5. `models` section: `section_title_container` (d-flex, 80% width, 277px
     high black band `background: #000000`, padding-left 80px / right 115px)
     — `section_title` h1 "See the Models<span>.</span>" (948×98px white
     block, `transform: rotate(-90deg)` origin top-left; span `#690772`);
     `isotope_filtering_container ml-auto` (ul `isotope_filtering`): All
     (active) / Female / Male / Children — `li.active, li:hover background:
#751b7e`; `see_all_models_link` (absolute bottom/right, 152×152px,
     `background: #751b7e`): "+" link (60px white, line-height 140px) →
     `models.html`. `models_container`: 9 `model` tiles (float left;
     `model_big`/`model_wide` 40%, `model_small`/`model_tall` 20%),
     images `model_1.jpg`…`model_9.jpg`; hover `model_overlay` (absolute,
     `rgba(0,0,0,0.85)`, opacity 0→1): `model_name` 30px white bold +
     `model_link` "View Portfolio" 18px `rgba(255,255,255,0.53)` (original
     repeats "Alicia Williams" on all 9 tiles — paraphrase into 9 distinct
     model names).
  6. `week_model` (white, padding-top 113px): `section_title_container`
     (justify-content-end) — `section_title` h1 "Model of the week<span>.</span>"
     (same rotated black-band treatment); `model_slider_container` (absolute
     top 0, left calc(-((100vw-1170px)/2)), width ≈44.6vw, 3 slides
     `week_model_1..3.jpg`) with `model_nav_container` (Previous/Next, same
     white box pattern); `week_model_content` (col-lg-6 offset-xl-1,
     padding-top 101px): `week_model_title` "Samantha Smith" (36px bold
     `#121212`); `week_model_text` lorem; `model_list` (margin-top 45px; li
     margin-bottom 25px; label col 137px `#121212`, value `#949494`): Age 20,
     Height 1.79m / 5'10", Shoes 38, Hair brown, Eyes brown; `week_model_link`
     (margin-top 51px): "View Full Profile" (16px `#121212`, underline via
     1px `::after`); `week_model_button` (margin-top 48px) `.button`
     "Bookings" (200×71px, `background: #751b7e`, white bold 16px, hover
     `background: #121212`).
  7. `contact` (80% width black block `background: #000000`):
     `contact_content` (padding 101px 97px 95px): `contact_title`
     "Contact us<span>.</span>" (60px white bold, span `#751871`);
     `contact_form_container` (max-width 1029px, margin-top 64px): form —
     Name input + E-mail input (`contact_input`: 62px, `border: solid 1px
#ffe5e5`, transparent bg, white text, placeholder 12px `#a4a4a4`,
     focus/hover `border: solid 1px #751b7e`) side by side, Message textarea
     (`contact_textarea` 184px), `contact_form_button button` "Send Message"
     (purple, hover `background: #FFFFFF; color: #121212`).
  8. `footer` (white, padding-top 112px; `footer_image` = `images/footer.jpg`
     absolute right/bottom): `footer_container` (80%, padding-bottom 142px):
     left 25% = `footer_logo_container` ("Modelo<span>.</span>" 36px
     `#121212` span `#751b7e`; "Model Agency" tagline 16px `#cecfd1`;
     `copyright` 12px `#616161` — original "Copyright © All rights reserved |
     This template is made with by Colorlib" → replace with repo-standard
     footer credit); right 75% = 4 `footer_col`s (25% each):
     `footer_title` 20px `#121212` = Milan / Paris / New York / London;
     `footer_list` (margin-top 33px; 14px `#777777`): street address, city,
     phone (+34 5667 77833 repeated).
- **Design tokens extracted from `styles/main_styles.css`:** see token list
  below; the rotated section title (white h1 rotated -90° on a black 80%-wide
  band) is the signature editorial device to replicate.
- **Recreation decisions:** repo-standard fixed dark header (#0b0208, purple
  bottom border) with "Allure." text logo (white, purple period), 5 nav links
  with purple active/hover blocks, purple "Submit your portfolio" header CTA,
  hamburger → fullscreen menu; vertical social rail (Facebook, Twitter,
  Instagram); full-screen hero slider (3 purple-graded picsum portraits,
  "Show Stopper." + "Jessica Smith. 22. Model." — paraphrase to a distinct
  model + tagline, 01/02/03 indicators, white Previous/Next box); white intro
  with "Model Management." title, lorem, 3 animated counters (173 / 2190 /
  25); masonry models grid (9 tiles, mixed 20%/40% widths, isotope-style
  All/Female/Male/Children filtering, black hover overlay name + "View
  Portfolio", purple "+" see-all square, rotated "See the Models." title);
  "Model of the week." split block (photo slider + stat list + "View Full
  Profile" link + purple "Bookings" button); black "Contact us." block with
  Name/E-mail/Message form; white footer with logo/tagline/copyright + 4
  office columns; all images picsum-seeded
  (`picsum.photos/seed/allure-N/w/h`); Google Fonts Roboto + Poppins (bold
  headings, standing in for the proprietary HelveticaNeueLTPro) via `<link>`;
  icons via lucide-react; counters animate on scroll into view.

Allure lives in `apps/allure` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Design tokens

- **Brand purple: `#690772`** — logo period, nav active/hover block, section
  title span, intro title span, milestone counters, social rail hover,
  slider-nav hover, "Submit your portfolio" CTA block.
- **Deep purple: `#751b7e`** — isotope filter active/hover, "+" see-all
  square, `.button` "Bookings"/"Send Message" bg, contact input focus border.
- **Dark purples: `#0b0208`** (header bg), **`#5b0857`** (header bottom
  border 2px), **`#751871`** (contact title span).
- **Near-black `#121212`** — body headings/text, button hover bg, footer
  logo/title; **`#000000`** — section-title band, contact block.
- **White `#ffffff`** — sections, footer bg, slider-nav box, rotated titles.
- **Greys:** `#505050` slider nav text · `#616161` copyright · `#777777`
  footer list · `#949494` stat values · `#a4a4a4` placeholders · `#cecfd1`
  footer tagline · `#dcdce1` nav divider.
- **Fonts:** HelveticaNeueLTProBd/Md (headings/buttons, proprietary → use
  **Poppins** 700/500 from Google Fonts) + **Roboto** (body, social rail,
  already on Google Fonts). Sizes: logo 36px, hero title 130px, hero subtitle
  24px, section h1 60px, milestone counter 72px, model name 30px, week model
  title 36px, contact title 60px, footer title 20px.
- **Buttons:** square (no radius), white bold text; header CTA 391×130px
  purple; `.button` 200×71px purple → hover black.
- **Spacing rhythm:** header 152px; intro padding 105/134px; section-title
  band 80% × 277px (padding 0 80px/115px); model-list li gap 25px; footer
  padding-top 112px, container padding-bottom 142px.

## Requirements

### Requirement: Header / navigation

The system SHALL render a fixed dark header with a text logo, primary
navigation, and a portfolio CTA.

#### Scenario: Header content

- **GIVEN** the Allure page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show the site name "Allure" in bold white type with a
  purple period, on the left
- **AND** it SHALL show uppercase nav links Home, About us, Models, News,
  and Contact
- **AND** the active or hovered nav link SHALL get a purple (#690772)
  background block
- **AND** it SHALL show a purple "Submit your portfolio" call-to-action block
  at the bottom right
- **AND** the header SHALL have a dark purple bottom border (#5b0857)

#### Scenario: Mobile menu

- **GIVEN** the header is displayed on a narrow viewport
- **WHEN** the user activates the hamburger button
- **THEN** a fullscreen menu SHALL open showing the nav links (with purple
  periods) and the "Submit your portfolio" link
- **AND** activating the close control SHALL close the menu

### Requirement: Social rail

The system SHALL render a fixed vertical social rail with three social links.

#### Scenario: Social links

- **GIVEN** the page is rendered
- **WHEN** the social rail is displayed
- **THEN** it SHALL show Facebook, Twitter, and Instagram links in bold
  dark type
- **AND** hovering a link SHALL color it the brand purple (#690772)

### Requirement: Hero slider

The system SHALL render a full-screen hero slider with a photo background,
an oversized headline, a subtitle, slide indicators, and prev/next controls.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a full-screen purple-graded model portrait
  background
- **AND** it SHALL show the headline "Show Stopper." in very large white
  type (≈130px)
- **AND** it SHALL show a subtitle line with a model name and stats
  (e.g. "Jessica Smith. 22. Model.") in white
- **AND** it SHALL show square slide indicators numbered 01, 02, 03
- **AND** it SHALL show a white Previous/Next control box at the bottom right

#### Scenario: Hero slide advance

- **GIVEN** the hero slider is displayed
- **WHEN** the user clicks Next/Previous or the slider advances
- **THEN** the slide SHALL change (photo + copy) and the active indicator
  SHALL update

### Requirement: Intro and milestones

The system SHALL render a white intro section with a title, descriptive text,
and three animated counters.

#### Scenario: Intro content

- **GIVEN** the page is rendered
- **WHEN** the intro section is displayed
- **THEN** it SHALL show the heading "Model Management" in dark type with a
  purple accent
- **AND** it SHALL show one or two descriptive paragraphs
- **AND** it SHALL show three milestones with large purple counters —
  173 "Models @ The Agency", 2190 "Modeling Contracts", 25 "Model
  Recruitors" — and dark titles

#### Scenario: Counter animation

- **GIVEN** the milestones are on screen
- **WHEN** they scroll into view
- **THEN** the counters SHALL animate from 0 up to their target values

### Requirement: Models grid

The system SHALL render a masonry models grid with a rotated section title,
category filters, a see-all link, and hover overlays.

#### Scenario: Grid content

- **GIVEN** the page is rendered
- **WHEN** the models section is displayed
- **THEN** it SHALL show the rotated (-90°) title "See the Models." on a
  black band
- **AND** it SHALL show All / Female / Male / Children filter buttons, the
  active one with a deep-purple (#751b7e) background
- **AND** it SHALL show a purple square "+" see-all link
- **AND** it SHALL show nine model photo tiles in mixed sizes (20% / 40%
  widths) with distinct model names

#### Scenario: Hover overlay

- **GIVEN** a model tile is displayed
- **WHEN** the user hovers over it
- **THEN** a near-black overlay SHALL appear with the model's name in bold
  white and a "View Portfolio" link

#### Scenario: Filtering

- **GIVEN** the models grid is displayed
- **WHEN** the user clicks a category filter (e.g. Female, Male, Children)
- **THEN** the grid SHALL show only tiles of that category and the clicked
  filter SHALL become active

### Requirement: Model of the week

The system SHALL render a split block with a photo slider on the left and a
featured-model profile on the right.

#### Scenario: Profile content

- **GIVEN** the page is rendered
- **WHEN** the model-of-the-week section is displayed
- **THEN** it SHALL show the rotated title "Model of the week." on a black
  band
- **AND** it SHALL show a photo slider (with Previous/Next controls) on the
  left
- **AND** it SHALL show the model's name (e.g. "Samantha Smith"), a
  description paragraph, and a stat list: Age 20, Height 1.79m / 5'10",
  Shoes 38, Hair brown, Eyes brown
- **AND** it SHALL show an underlined "View Full Profile" link and a purple
  "Bookings" button

### Requirement: Contact form

The system SHALL render a black contact block with a title and a working
contact form.

#### Scenario: Contact content

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL show the heading "Contact us." in large white type with a
  purple accent
- **AND** it SHALL show Name and E-mail inputs side by side, and a Message
  textarea
- **AND** inputs SHALL show a purple border on focus/hover
- **AND** it SHALL show a "Send Message" submit button that turns white with
  dark text on hover

#### Scenario: Form submission

- **GIVEN** the contact form is displayed
- **WHEN** the user fills the required fields and submits
- **THEN** the form SHALL submit without a page reload (or show a success
  state)

### Requirement: Footer

The system SHALL render a white footer with a logo/tagline block, a copyright
line, and four office columns.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the "Allure." logo with the tagline "Model Agency"
- **AND** it SHALL show a copyright bar with the repo-standard footer credit
- **AND** it SHALL show four office columns — Milan, Paris, New York, London
  — each with a street address and phone number

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Allure app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header, social rail, hero, intro,
  models grid, model of the week, contact, and footer inside the main
  landmark in the original's order
- **AND** the document title SHALL be "Allure — Model Agency"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- allure` passes: typecheck → lint → vitest
      (100% coverage) → build.
- [ ] Section order matches the original 1:1 (header → social rail → hero →
      intro → models grid → model of the week → contact → footer).
- [ ] Design tokens applied: brand purple #690772, deep purple #751b7e,
      header #0b0208 + border #5b0857, near-black #121212, black #000000
      bands, white sections, grey scale (#505050/#616161/#777777/#949494/
      #a4a4a4/#cecfd1/#dcdce1), Roboto + Poppins fonts, square buttons
      (391×130 CTA, 200×71 `.button`), 130px hero title, rotated -90°
      section titles on black bands.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Modelo), preview URL, tokens,
      and renames.

# Template: Manorly (Real-estate agency & property showcase)

## Purpose

A city real-estate agency landing page: a white translucent header over a full-bleed aerial
photograph washed red-to-indigo, a left-aligned hero headline, a two-column "about us" band with a
counter row, a filterable project portfolio on a lavender ground, a four-card service grid that
closes on a red "Services" call-out, a four-card luxury-apartment gallery, three blog teasers, and a
near-black four-column footer with a newsletter form.

Recreation of the ColorLib **"Dreamrs"** design (https://colorlib.com/wp/template/dreamrs/,
live preview https://preview.colorlib.com/theme/dreamrs/) as a React 19 + Vite + Tailwind CSS 4 +
TypeScript single-page application.

* **Source slug:** `dreamrs`
* **ColorLib page:** https://colorlib.com/wp/template/dreamrs/ (catalog entry; screenshot
  `https://colorlib.com/wp/wp-content/uploads/sites/2/dreamrs-free-template.jpg`)
* **Live preview:** https://preview.colorlib.com/theme/dreamrs/ — HTTP 200, 36,309 B, page
  `<title>` **"Real_state || Home"** (read 2026-10-24 with `curl -4`; the host is IPv4-only here)
* **New name:** `manorly` (apps/manorly, `@free-react-templates/manorly`) — one lowercase word
  evoking a manor/estate agency; differs from the source slug and has no collision in `apps/`,
  `openspec/specs/`, `docs/templates/` or `TEMPLATES.md`
* **Deploy target:** https://manorly.free.componentdock.com (`apps/manorly/public/CNAME`,
  `homepage` in `apps/manorly/package.json`)
* **Category:** TEMPLATES.md `## Architecture (33)`, rows **106**, **1967**, **2587** — all three
  rows list this slug

### Why this row had to be re-implemented

Rows 106, 1967 and 2587 read `[x] … [Skyline]`, but `apps/skyline` recreates a different design:
its spec (`openspec/specs/template-skyline/spec.md`) names **Rooftop** ("Rooftop" heading, gold
restaurant palette) and its body carries that restaurant's copy. The row-multiplicity census
(`docs/row-multiplicity.md` §2, `python3 scripts/verify-row-multiplicity.py --network`) scored
skyline's copy 5 exclusive hits for `dreamrs` against 16 for `rooftop`, verdict
`APP-WRONG-DESIGN` — so the Dreamrs design (preview title "Real_state") had **never been built**
and its three rows were false `[x]`s. No spec names `dreamrs`
(`grep -rl 'template/dreamrs' openspec/specs/` → empty), which is the second confirmation that
this design is unclaimed.

`measure-reference-tokens.py --slug dreamrs` walks the live demo's own stylesheets; the landing
page is served from the theme build (`css/style.css` 171,589 B), so this is the original demo and a
mismatch with the recreation would be drift, not a redesign.

## Reference readings (2026-10-24, `curl -4`)

| artefact                                         |   bytes | sha256                                                             |
| ------------------------------------------------ | ------: | ------------------------------------------------------------------ |
| `theme/dreamrs/` page (DOM authority)            |  36,309 | — (page bodies are request-unstable; bytes only)                    |
| `theme/dreamrs/css/style.css` (token authority)  | 171,589 | `f924622caf81533c161556f6ced1b63ad6e6a349d9b22b587f82d1fec1f1d30b` |
| `theme/dreamrs/css/bootstrap.min.css` (grid)     |       — | —                                                                  |
| `theme/dreamrs/css/owl.carousel.min.css`         |     260 | —                                                                  |
| `theme/dreamrs/css/animate.css`                  |  55,909 | —                                                                  |
| screenshot (catalog thumbnail, 1200×946)         |       — | shows header + hero; the live DOM is the authority for the rest    |

The page is a Bootstrap 4 build: `bootstrap.min.css`, `animate.css`, `owl.carousel.min.css`,
`themify-icons.css`, `flaticon.css`, `magnific-popup.css`, `fontawesome/css/all.min.css`, then the
theme's own `style.css`. **Zero** of those files (or their images/fonts) are copied; the recreation
uses `packages/ui` primitives, `lucide-react` icons and `picsum.photos` placeholders.

## Design tokens (measured from `css/style.css`, 171,589 B)

Sheet census, theme sheet only: `#fff`×69, `#ff3334`×61, `#f9f9ff`×27, `#000`×14, `#f0e9ff`×13,
`#999999`×9, `#415094`×7, `#4cd3e3`×7, `#f4f4f4`×5, `#2c2c2c`×5, `#f73347`×3. Radii:
`3px`×7, `50%`×6, `8px`×6.

| Token                     | Value                                                                        | Evidence in the reference                                                                                   |
| ------------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Brand (primary chromatic) | `#ff3334`                                                                    | `.btn_1:hover`, `.section_tittle h2::after`, `.portfolio_area … h2 span`, `.footer_part` accents — 61 uses |
| Brand deep (hero wash)    | `#f73347`                                                                    | `.banner_part:before { background: linear-gradient(5deg, #f73347 0%, rgba(18,1,248,.2) 100%) }`             |
| Ink                       | `#000`                                                                       | headings, `.section_tittle h2`                                                                              |
| Footer ground             | `#030305`                                                                    | `.footer_part { background-color: #030305 }`                                                                |
| Mist                      | `#f9f9ff`                                                                    | light panels (27 declarations)                                                                              |
| Panel grey                | `#f4f4f4`                                                                    | `.service_part .single_service_text { background-color: #f4f4f4 }`, `.btn_1` resting ground                 |
| Muted copy                | `#999999`                                                                    | paragraph copy (9 declarations)                                                                              |
| Typeface (only face)      | `Poppins`, `sans-serif`                                                      | 5 `font-family` declarations; loaded from Google Fonts, never the shipped woff                              |
| Buttons                   | `19px 40px`, 16px/700, uppercase, `#f4f4f4` ground, `5px` radius             | `.btn_1`; hover flips to `#ff3334`/white and the radius grows to `50px`                                     |
| Section label rule        | 24px/700 title + 180×1px rule, keyword span in `#ff3334`                     | `.about_part`, `.portfolio_area`, `.service_part`, `.project_gallery`, `.blog_part` `.section_tittle h2`     |
| Service card              | `#f4f4f4`, `35px` padding, icon top-left                                    | `.service_part .single_service_text`                                                                        |
| Hero                      | `900px` tall, `background-size: cover`, overlay gradient                     | `.banner_part { height: 900px }`, `.banner_part:before`                                                     |
| Header                    | absolute over the hero, `#fff` at `opacity: .9`                              | `.main_menu:after`                                                                                          |
| Section rhythm            | `100px 0` (`.section-padding`), gallery `70px 0 50px`, footer `130px 0 25px` | `.section-padding`, `.project_gallery`, `.footer_part`                                                       |

`#f0e9ff`, `#415094` and `#4cd3e3` come from the bundled Bootstrap kit's `.genric-btn` /
`.blog_right_sidebar` widgets and are **never painted** on this landing page; the recreation does
not use them.

## Reference document order (eight bands)

| #   | band       | detail                                                                                                                                                                                                 |
| --- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1   | header     | logo mark + wordmark left; nav `Home · about · Services · blog ▾ · pages ▾ · Contact us`, where `blog` opens `blog`/`Single blog` and `pages` opens `Project`/`Apartment`/`Elements`; white bar at 90% |
| 2   | hero       | 900px aerial city photograph under the red→indigo gradient; eyebrow "Dream", 60px+ white headline "Proparties / Now In City", one-sentence blurb, no call to action                                      |
| 3   | about      | `100px 0`; photograph left, right: label "about us", "Hello City We are leader in **proparties.**", lorem paragraph, **learn More** button, counter row `100 project · 300 clients · 150 member`        |
| 4   | portfolio  | label "our project", "Hello City We are leader in **Projects.**"; tabs `Architecture · Interior · Exterior · Drafting Landing`; ten project cards each with an `Exclusive Project`/`new Project` badge and the caption "Etiam tortor aliquet habitant" |
| 5   | services   | label "our services"; four `#f4f4f4` cards — `house Planning`, `house Build`, `Design& Build`, `Design& Build` (the reference repeats the third card) + lorem blurb                                  |
| 6   | services CTA | red call-out: "Hello City We are leader in **Services.**", lorem paragraph, **learn more** button                                                                                                      |
| 7   | gallery    | "Luxuries **Apartment**"; four property cards — `Home Apartment`, `Detached House For Sale`, `04` beds, `03` baths, `2400 sqft`, a `like` heart                                                       |
| 8   | blog       | label "our blog"; three teasers — category `Apartment` / `March 20, 2019`, title, `2 comment` · `0 like` (later cards `Mar 12`)                                                                        |
| 9   | footer     | `#030305`; four columns — About Us, Contact Info (address / phone / email), Important Link, Newsletter (field + button) — and a copyright bar                                                         |

## Requirements

### Requirement 1: Header

The app SHALL render a header over the hero with the Manorly mark and wordmark, five primary
navigation links (`Home`, `About`, `Services`, `Blog`, `Contact Us`) and two disclosures —
`Blog` (items `Blog`, `Single Blog`) and `Pages` (items `Project`, `Apartment`, `Elements`).

#### Scenario: Visitor opens and closes a navigation disclosure

- **GIVEN** the header is rendered
- **WHEN** the visitor activates the `Pages` control
- **THEN** the control reports `aria-expanded="true"` and the three page links appear
- **AND** activating it a second time reports `aria-expanded="false"` and removes them

#### Scenario: Visitor opens the mobile navigation

- **GIVEN** the header is rendered at any viewport
- **WHEN** the visitor activates the menu control
- **THEN** the control reports `aria-expanded="true"` and a navigation landmark named "Mobile" lists
  the same links
- **AND** following a link inside it closes the panel again

### Requirement 2: Hero

The app SHALL render a full-bleed hero at least 700px tall whose aerial photograph sits under the
reference's `5deg #f73347 → rgba(18,1,248,.2)` gradient, with the eyebrow "Dream", a level-1
headline "Properties Now In City" and one supporting sentence.

#### Scenario: Visitor lands on the page

- **GIVEN** the page has loaded
- **WHEN** the hero is in view
- **THEN** the headline is the only `h1` on the page
- **AND** the backdrop image carries descriptive alternative text and the wash is decorative

### Requirement 3: About with counters

The app SHALL render a two-column about band — photograph with a brand-red frame on the left; on the
right the label "about us", the heading "Hello City We are leader in properties.", a paragraph, a
`Learn More` call to action, and three counters: `100` project, `300` clients, `150` member.

#### Scenario: Visitor reads the agency credentials

- **GIVEN** the about band is rendered
- **WHEN** the visitor scans it
- **THEN** a level-2 heading contains the word "leader" and the word "properties" is emphasised in
  the brand red
- **AND** exactly three counter values and their labels are present

### Requirement 4: Filterable project portfolio

The app SHALL render a portfolio band with four category controls (`Architecture`, `Interior`,
`Exterior`, `Drafting Landing`) and ten project cards, each carrying a `Exclusive Project` or
`New Project` badge and the caption "Etiam tortor aliquet habitant".

#### Scenario: Visitor filters the portfolio

- **GIVEN** the portfolio shows every project
- **WHEN** the visitor activates the `Interior` filter
- **THEN** only the projects classified Interior remain visible, the control reports
  `aria-pressed="true"` and the visible count is announced

#### Scenario: Visitor returns to another category

- **GIVEN** the portfolio shows only the Interior projects
- **WHEN** the visitor activates the `Architecture` filter
- **THEN** the Interior projects are replaced by the Architecture ones and the previous control
  reports `aria-pressed="false"`

### Requirement 5: Services grid

The app SHALL render a services band with the label "our services" and four cards on `#f4f4f4` —
`House Planning`, `House Build`, `Design & Build`, `Design & Build` (the reference repeats the third
card) — each with a brand-red `lucide-react` icon and a one-sentence blurb.

#### Scenario: Visitor compares the four services

- **GIVEN** the services band is rendered
- **WHEN** the visitor counts the cards
- **THEN** four cards appear, two of them titled "Design & Build"

### Requirement 6: Services call-out

The app SHALL render a brand-red band with the heading "Hello City We are leader in Services.", a
supporting paragraph and a `Learn more` call to action pointing at the services grid.

#### Scenario: Visitor follows the call-out

- **GIVEN** the call-out is rendered
- **WHEN** the visitor activates "Learn more"
- **THEN** the link targets the services band anchor

### Requirement 7: Property gallery

The app SHALL render a gallery titled "Luxuries Apartment" holding four property cards, each with a
placeholder photograph, `Home Apartment` over `Detached House For Sale`, the stats `04` beds, `03`
baths, `2400 sqft`, and a heart control that toggles between "Like" and "Liked".

#### Scenario: Visitor likes a property

- **GIVEN** a gallery card renders its heart in the resting state
- **WHEN** the visitor activates it
- **THEN** the control reports `aria-pressed="true"` and reads "Liked"
- **AND** activating it again returns it to "Like"

### Requirement 8: Blog teasers

The app SHALL render three blog teasers, each with the category `Apartment`, a publication date, a
level-3 title and its comment/like counts, headed by the label "our blog".

#### Scenario: Visitor scans the news

- **GIVEN** the blog band is rendered
- **WHEN** the visitor reads it
- **THEN** exactly three level-3 titles are present and each teaser names the Apartment category

### Requirement 9: Footer and Component Dock credit

The app SHALL render a near-black (`#030305`) four-column footer — About Us, Contact Info,
Important Link, Newsletter — whose newsletter field validates that an address was given before
confirming, and a copyright bar that links **Component Dock** at `https://www.componentdock.com/`.

#### Scenario: Visitor subscribes with and without an address

- **GIVEN** the footer is rendered
- **WHEN** the visitor submits the newsletter form empty
- **THEN** an alert asks for an email address and no confirmation appears
- **AND** submitting a filled field replaces the alert with a confirmation naming that address

#### Scenario: Visitor follows the marketplace credit

- **GIVEN** the copyright bar is rendered
- **WHEN** the visitor reads it
- **THEN** a link labelled "Component Dock" points at `https://www.componentdock.com/`
- **AND** no attribution link to another site is present

### Requirement 10: Accessibility

The app SHALL use semantic landmarks (`header`, `nav`, `main`, `section`, `footer`), label every
form control, expose toggle state with `aria-expanded`/`aria-pressed`, name every icon-only control
with `aria-label`, and mark decorative imagery `aria-hidden` with an empty `alt`.

#### Scenario: Assistive technology reads the page

- **GIVEN** the page is rendered
- **WHEN** a screen reader walks the landmarks
- **THEN** one `header`, one `main`, one `footer` and the named sections are announced
- **AND** every icon-only control exposes an accessible name

## Deliberate deviations from the reference

- **Placeholder imagery.** Every photograph is a deterministic `picsum.photos` seed
  (`manorly-hero`, `manorly-about`, `manorly-project-1…10`, `manorly-gallery-1…4`,
  `manorly-blog-1…3`); no asset is downloaded.
- **Icons.** `lucide-react` (`Menu`, `X`, `ChevronDown`, `Heart`, `Home`, `Hammer`, `PencilRuler`,
  `Building2`, `BedDouble`, `Bath`, `Maximize`, `MessageCircle`) replaces the themify/flaticon/
  font-awesome subsets.
- **Logo.** The reference ships a raster logo; the recreation draws an inline hexagon-and-house SVG
  mark that inherits the brand colour.
- **Copy.** The reference's lorem ipsum is kept as content-type filler, and its typo "Proparties" is
  corrected to "Properties"; the section headings keep the reference's "Hello City We are leader in
  …" shape so the design reads the same.
- **Footer links.** The reference's shop widget list (`WHMCS-bridge`, `Search Domain`, …) is
  replaced with the template's own site links; the contact details are the recreation's own.
- **Census.** The reference's four service cards repeat "Design& Build"; the recreation keeps the
  repeat deliberately (fidelity) and adds nothing.
- **Naming and provenance.** "Dreamrs" never appears in `apps/manorly` — the app is Manorly, and the
  ColorLib provenance lives only here, in `TEMPLATES.md` and in the pull request.

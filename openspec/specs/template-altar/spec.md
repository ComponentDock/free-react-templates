# Template: Altar (Wedding Event Website Template)

## Purpose

Altar is a single-page wedding event website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Wordpress Wedding Themes" category design (see TEMPLATES.md line
235), built under a different name with the monorepo stack: Vite + React 19

- Tailwind CSS 4 + TypeScript (strict), 100% Vitest coverage.

## Design reference (replication findings)

- **Original:** ColorLib "Wordpress Wedding Themes" (Beauty category item,
  TEMPLATES.md line 235). NEW name **Altar** (the wedding altar — the
  ceremony focus of the design; single lowercase word, kebab-safe, no
  collision with `apps/`, `openspec/specs/`, `docs/templates/` or
  TEMPLATES.md — verified 2026-08-09).
- **Source link behavior:** `https://colorlib.com/wp/template/wordpress-wedding-themes/`
  does NOT resolve to a demo — it 301-redirects to
  `https://colorlib.com/wp/wedding-planning-wordpress-themes/` (HTTP 200,
  152 KB), the roundup article "10+ Best Wedding WordPress Themes for
  Planning & Photography 2026" by Julia Starlark (published March 24, 2026,
  category "Theme Collections", 0 comments).
- **Preview URL:** `https://preview.colorlib.com/theme/wordpress-wedding-themes/`
  returns HTTP 404 "Not Found". This item is a category page, not a
  demo-hosting template — per the replication fallback rule, the
  **screenshot is the primary visual reference**.
- **Live sibling demo (structure + tokens):** `https://preview.colorlib.com/theme/wedding/`
  (HTTP 200, curl-verified 2026-08-09) is the live ColorLib "Wedding" demo —
  the same template family the category image depicts (its hero headline
  "James & Julie are Getting Married" matches the screenshot's "Getting
  married!" copy). Full DOM + `css/main.css` (~33 KB) fetched and analyzed;
  used below for section order and design tokens.
- **Screenshot:** `wedding-wordpress-themes.jpg` (1200×892, served as AVIF
  by ColorLib; converted to PNG via ffmpeg and viewed in a browser via
  vision). It shows the hero of the wedding demo (an OLDER iteration than
  the live one):
  - full-screen wedding photograph: couple (bride in a textured
    knee-length lace/beaded dress with a pink-and-white bouquet and blue
    heels, groom in a grey suit with a light blue shirt) walking down white
    stone stairs, colourful confetti (pink, blue, gold) falling, guests'
    heads in the foreground;
  - nav links in small white sans-serif at the TOP LEFT: "Our story",
    "Photos", "When & Where", "Events";
  - circular white logo (stylized "M"/floral motif) at the TOP RIGHT;
  - centered hero copy: large elegant high-contrast SERIF headline (White
    `#ffffff`, resembles Playfair Display) "Wedding WordPress Themes" with
    a thinner sub-headline "Getting married!" below;
  - white text only over the photo — romantic, sophisticated, minimalist,
    photography-led wedding aesthetic; no visible brand colour other than
    white on photo.
  - The live demo (Poppins sans-serif, James & Julie, gradient accents)
    represents the template's current design; the implementer follows the
    LIVE demo's structure and tokens (verifiable) and keeps the
    screenshot's elegant photo-led hero treatment.
- **Live page structure (from the `/theme/wedding/` demo DOM, HTTP 200):**
  1. `.header-top` utility strip — phone "+880 1234 654 953" + email
     "support@colorlib.com" left, centred logo, right nav
     HOME · ABOUT US · GALLERY · PAGES ▾ (GENERIC, ELEMENTS).
  2. `#home` `.banner-area` — full-screen hero (`height: 915px`), dark
     overlay (`overlay-bg`, `opacity: .3`, `background-color: #7f3f3b`),
     centered `h1` white 72px 700: "James & Julie<br>are Getting Married".
  3. `.date-area` — `.date-section` band (bg image `ads-bg.png`,
     `min-height: 200px`): white h3 "Wedding Day : 20 March 2018 at 19.00
     pm" + countdown clock: Days/Hours/Minutes/Seconds, each number in a
     GRADIENT pill (`#ca2fff → #8e96f8 → #53fff0`, rounded, shadow
     `0px 23px 34px -26px black`), grey "Days/Hours/..." labels.
  4. `#about` `.About-area` — carousel (prev/next arrow triggers): slides
     "About the Sweet Cute Bride" and "About the Handsome Groom" — h1 +
     paragraph(s) left, photo right (2-col, image + text alternating
     layout).
  5. `#gallery` `.gallery-area` — centered heading "Our Pre Wedding Photo
     Gallery" + sub-paragraph + photo carousel (g1–g5 + more images).
  6. `.info-area` (`background-color: #f9f9ff`, `padding: 120px 0`) —
     "Wedding Information" heading + sub-paragraph, then two
     `.single-info` rows (photo + text):
     - **Main Ceremony** — paragraph + "Date: Friday, 20 March 2018" /
       "Time: 19.00" / "Address: 56/8, West Panthapath.";
     - **Wedding Party** — paragraph + same Date/Time/Address lines.
  7. `#reservation` `.reservation-area` (bg photo `reservation.jpg`
     cover, dark overlay, 120px padding) — white "Reservation Form"
     heading + sub-paragraph + form: **Name**, **Email address** (text
     inputs, transparent bg, 1px solid `#656463` border, white text),
     **Meal Preferences** select, **Number of guests** select, **Notes**
     textarea, submit button "CONFIRM NOW ➜" — `.primary-btn` gradient
     pill (see tokens).
  8. `.footer-area` — centered footer menu (Home · About us · Gallery ·
     Reservations), social icons (Facebook, Twitter, Dribbble, Behance),
     copyright line + Colorlib credit (paraphrased).
- **Visual design:** romantic modern wedding site — full-bleed photo hero
  with centered white headline, white header, gradient accent for buttons
  - countdown, light `#f9f9ff` info section, photo-led gallery and
    ceremony cards, dark-photo reservation section, minimal footer. Sans
    (Poppins) with 700-weight headings; the older screenshot iteration used
    an elegant serif hero headline.

## Design tokens (from `css/main.css` of the live demo + screenshot)

| Token           | Value                                                                                                                                                                  | Where                                                                         |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Brand gradient  | `linear-gradient(0deg, #ca2fff 0%, #8e96f8 55%, #53fff0 100%)` (purple → periwinkle → cyan)                                                                            | `.primary-btn` bg, `.clockinner span` (countdown number pills)                |
| Primary button  | gradient bg, `border-radius: 25px` (pill), `line-height: 42px`, `padding: 0 60px 0 30px`, white text, weight 500, no border, uppercase text via `text-uppercase` class | "CONFIRM NOW ➜" submit button                                                 |
| White           | `#ffffff`                                                                                                                                                              | header/hero text, date-band h3, reservation heading, button text, footer text |
| Body text       | `#777777`, Poppins 300, 14px, line-height 1.625em                                                                                                                      | paragraphs everywhere                                                         |
| Hero overlay    | `rgba(127, 63, 59, 0.3)` (`#7f3f3b` at opacity .3)                                                                                                                     | full-screen hero + reservation photo overlay (overlay-bg)                     |
| Info section bg | `#f9f9ff`                                                                                                                                                              | `.info-area` (Wedding Information)                                            |
| Section rhythm  | `padding: 120px 0` (`.section-gap`)                                                                                                                                    | info + reservation + footer sections                                          |
| Hero headline   | `h1` white 72px weight 700, centered, line break "James & Julie / are Getting Married"                                                                                 | banner                                                                        |
| Countdown pill  | gradient bg, rounded (pill), shadow `0 23px 34px -26px black`; number white large, label grey `#777`                                                                   | `.clockinner span` + `.smalltext`                                             |
| Form control    | transparent bg, `border-radius: 0`, `border: 1px solid #656463`, white text, 14px, padding 12px                                                                        | Name, Email, Notes fields on the dark reservation section                     |
| Font            | "Poppins", sans-serif (body 300; headings 700; no Google Fonts import in main.css — add via `<link>` per replication rules)                                            | all text                                                                      |
| Header          | white header, dark text links, centered logo, utility strip with phone + email                                                                                         | `.header-top` (padding 20px 0)                                                |
| Accent greys    | `#f1f1f1`, `#eee`, `#cccccc` (utilities/borders)                                                                                                                       | misc surfaces                                                                 |

## Recreation decisions

- Single-page wedding event website template in the style of the live
  "Wedding" demo (the category image's template family): this is what
  "Wordpress Wedding Themes" means as a template type. The roundup article
  is a blog page, not a theme; its 12-entry list (Veil, Alanzo,
  PartyMaker, July Morison, Chroma, Royal Event, Love Story, Melania,
  Unica, HeartStar, Camelia, Plan My Day) is NOT recreated — it only
  informs the wedding-content vocabulary (ceremony, party, photos,
  reservation).
- Brand name "Altar" replaces the demo's couple names/logo; the source
  words "James & Julie" become original couple names (e.g. "Ella & Noah").
  "Colorlib"/"support@colorlib.com" never appear as contact info.
- Single-page structure (matches the live demo top-to-bottom):
  1. Utility strip — phone + email left, logo centered, nav right
  2. Header — "Altar" wordmark/logo, nav (Home, About, Gallery,
     Reservation); sticky white
  3. Hero — full-screen couple photo, dark overlay, centered white serif
     headline "Ella & Noah are Getting Married" (screenshot's elegant
     serif treatment honored; live demo is Poppins 700 — implementer picks
     serif display font for the hero, Poppins elsewhere, and notes it)
  4. Date/countdown band — "Wedding Day" line + gradient countdown pills
     (days/hours/minutes/seconds)
  5. About — carousel of two slides: bride ("About the Bride") and groom
     ("About the Groom"), photo + text
  6. Gallery — "Our Pre Wedding Photo Gallery" + responsive photo grid
     (carousel optional; grid acceptable per gallery section)
  7. Wedding Information — two rows: Main Ceremony + Wedding Party (photo
     - description + Date/Time/Address lines)
  8. Reservation — dark photo section, "Reservation Form", validated form
     (name, email, meal preference, guest count, notes) with gradient
     "Confirm Now" pill button + success state
  9. Footer — menu, social icons, copyright + paraphrased credit
- Photos → seeded picsum placeholders
  (`picsum.photos/seed/altar-<n>/<w>/<h>`); hero + reservation photos
  additionally darkened with the `rgba(127,63,59,0.3)` overlay; no assets
  copied.
- Icons → lucide-react (ArrowRight, ArrowLeft, Phone, Mail, Menu, X,
  Facebook/Twitter/etc. via inline SVG BrandIcon from packages/ui — lucide
  removed brand icons; verify exports before use).
- Gradient → Tailwind `bg-gradient-to-r from-[#ca2fff] via-[#8e96f8]
to-[#53fff0]` (or `@theme` tokens `--color-accent-a/b/c`), used on the
  primary button + countdown pills.
- Countdown: live countdown to a fixed future date (e.g. 30 days from
  render) with days/hours/minutes/seconds, or static values per the demo —
  implementer picks the interactive live countdown (documented choice;
  source is static).
- The header "PAGES ▾" dropdown (Generic/Elements) is demo furniture —
  omit; keep the 4 anchor links.
- Comment form from the article ("Leave a Reply") is NOT recreated — blog
  furniture, not theme furniture.

Altar lives in `apps/altar` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Utility strip + sticky header

The system SHALL render a top utility strip and a sticky white header with
the "Altar" wordmark and a navigation menu.

#### Scenario: Utility strip content

- **GIVEN** the Altar page is rendered
- **WHEN** the page loads
- **THEN** a thin strip SHALL appear above the header
- **AND** it SHALL show a phone line and an email address (paraphrased,
  e.g. "+1 555-0123" and "hello@altar.example")

#### Scenario: Header content

- **GIVEN** the Altar page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show the wordmark "Altar" centered or left
- **AND** it SHALL show the links Home, About, Gallery, and Reservation
- **AND** each link SHALL scroll to its section
- **AND** the header SHALL stay fixed at the top on scroll with a white
  background

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on a small screen
- **WHEN** the user opens the mobile menu
- **THEN** the menu SHALL list every nav link
- **AND** the user SHALL be able to close it

### Requirement: Full-screen hero with overlay

The system SHALL render a full-screen hero with a couple photo, a dark
overlay, and a centered white headline.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **WHEN** it is displayed
- **THEN** it SHALL show a full-width background photo (seeded placeholder)
- **AND** it SHALL apply the dark overlay `rgba(127,63,59,0.3)` over the
  photo
- **AND** it SHALL show a centered large white headline with the couple's
  names and "are Getting Married"

### Requirement: Wedding date band with countdown

The system SHALL render a wedding-date band with a live countdown in
gradient pills.

#### Scenario: Countdown display

- **GIVEN** the date band is rendered
- **WHEN** it is displayed
- **THEN** it SHALL show a white line with the wedding date (e.g.
  "Wedding Day : 20 March 2027 at 19.00")
- **AND** it SHALL show four gradient pills labelled Days, Hours, Minutes,
  and Seconds
- **AND** each pill SHALL show the corresponding countdown number
- **AND** the numbers SHALL tick down over time (live countdown)

### Requirement: About carousel

The system SHALL render an "About the couple" section with two alternating
slides (bride and groom).

#### Scenario: Bride and groom slides

- **GIVEN** the about section is rendered
- **WHEN** it is displayed
- **THEN** it SHALL show a slide with the heading "About the Bride", a
  photo, and supporting paragraphs
- **AND** the user SHALL be able to switch to the "About the Groom" slide
  via next/prev controls
- **AND** each slide SHALL pair the text with a photo in a two-column
  layout

### Requirement: Photo gallery

The system SHALL render a "Pre Wedding Photo Gallery" section.

#### Scenario: Gallery grid

- **GIVEN** the gallery section is rendered
- **WHEN** it is displayed
- **THEN** it SHALL show the heading "Our Pre Wedding Photo Gallery" with
  a sub-paragraph
- **AND** it SHALL show a responsive grid (or carousel) of at least 5
  placeholder photos

### Requirement: Wedding information rows

The system SHALL render the "Wedding Information" section with two event
rows: Main Ceremony and Wedding Party.

#### Scenario: Ceremony and party details

- **GIVEN** the information section is rendered
- **WHEN** it is displayed
- **THEN** it SHALL show the heading "Wedding Information" on the
  light `#f9f9ff` background
- **AND** it SHALL show a "Main Ceremony" row with a photo, a description,
  and Date / Time / Address lines
- **AND** it SHALL show a "Wedding Party" row with a photo, a description,
  and Date / Time / Address lines

### Requirement: Reservation form

The system SHALL render a reservation form on a dark photo background.

#### Scenario: Form fields and validation

- **GIVEN** the reservation section is rendered
- **WHEN** it is displayed
- **THEN** it SHALL show the white heading "Reservation Form" over the
  darkened photo background
- **AND** it SHALL show fields for Name, Email address, Meal Preferences,
  Number of guests, and Notes
- **AND** submitting with missing name/email SHALL show validation errors
- **AND** submitting a valid form SHALL show a success message

#### Scenario: Confirm button

- **GIVEN** the reservation form is rendered
- **WHEN** the confirm button is displayed
- **THEN** it SHALL be a gradient pill button labelled "Confirm Now"
- **AND** hovering it SHALL keep the gradient (or brighten it) per the
  source's transition

### Requirement: Footer

The system SHALL render a minimal centered footer.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** it is displayed
- **THEN** it SHALL show centered links Home, About, Gallery, and
  Reservations
- **AND** it SHALL show social icons (Facebook, Twitter, Dribbble,
  Behance)
- **AND** it SHALL show a copyright line with the current year and a
  paraphrased design credit

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-altar`
- [ ] `apps/altar` implements every section above in the given order
- [ ] Design tokens match: gradient `#ca2fff → #8e96f8 → #53fff0`,
      `#f9f9ff` info bg, `rgba(127,63,59,0.3)` overlays, Poppins,
      pill button (radius 25px)
- [ ] 100% line/function/branch/statement coverage via
      `scripts/verify-app.sh altar`
- [ ] PR description lists: source template + preview URL analyzed
      (`https://preview.colorlib.com/theme/wedding/` — live sibling;
      item's own preview 404s), screenshot reference, tokens, and what
      differs (Altar name, couple names, picsum photos, live countdown,
      validated form)

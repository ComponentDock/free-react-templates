# Template: Kindfund (Charity / Nonprofit Template)

## Purpose

Kindfund is a single-page charity / nonprofit website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Charifit" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Charifit" — charity / donation website template
  (source: https://colorlib.com/wp/template/charifit/).
- **Preview URL:** https://preview.colorlib.com/theme/charifit/
  (HTTP 200, ~39.4 KB rendered DOM, title "Charifit — ColorLib Website Template").
  Stylesheets: `css/style.css` (150 KB) + `css/bootstrap.min.css` +
  owl.carousel / magnific-popup / font-awesome / themify-icons / nice-select /
  flaticon / gijgo / animate / slicknav. Fonts via Google Fonts in the head:
  **Open Sans** (body, 19 usages) + **Yeseva One** (headings/brand, 5 usages)
  — recreate with Google Fonts `<link>`s. jQuery + Bootstrap JS drive the
  sticky navbar, mobile slide-in menu, hero slider, count-up counters, and
  video popup.
- **Screenshot:** `charifit-free-template.jpg` (TEMPLATES.md line 1255) —
  green-tinted charity template with a hero banner, reasons section, video
  area, popular causes with progress bars, counter stats, volunteer profiles,
  news/blog posts, donation form, and footer.
- **Visual design (from DOM + CSS tokens + live computed styles):** clean
  charity aesthetic — white/light-grey page, near-black text `#222222`,
  **brand green `#3CC78F`** (logo area, bradcam overlay, counter background,
  button fills, cause progress bars, footer accent), accent orange `#ff5e13`
  (secondary CTA, some links), light lavender backgrounds `#f9f9ff` /
  `#f0e9ff` (alternating sections), deep navy `#191d34` / `#415094` (some
  headings, footer), light teal `#4cd3e3` (secondary accent), muted grey
  `#7a7b7c` / `#999999` (body text, meta). **Open Sans** 16px body with
  `#Yeseva One` display headings; buttons 5–7px radius; counters are
  white-on-green large numbers; `.bradcam_area` uses `background: #3CC78F`
  at 0.8 opacity over a background image; `.latest_activites_area` uses
  `rgba(60, 199, 143, 0.06)` light green wash. The demo brands itself
  "Charifit"; recreation uses the NEW name **Kindfund**.

- **Structure (1:1, section order):**
  1. **Top bar** `div.header-top_area` — phone `+1 (454) 556-5656` and email
     `Yourmail@gmail.com` on left, social media icons on right; light grey
     background.
  2. **Navbar** `div.header-area > div.main-header-area` — logo left, nav
     links right: **Home** / **About** / **Blog** / **Pages** / **Elements**
     / **Cause** / **Contact**; "Donate Now" CTA button (`book_btn`); sticky
     on scroll. Mobile: hamburger slide-in menu.
  3. **Hero/Slider** `div.slider_area > div.single_slider.slider_bg_1` —
     full-width background image with overlay, headline text: "Get Started
     Today. Help the children When They Need" + subtext + "Learn More" CTA
     button. 742px height on desktop, 500px on mobile.
  4. **Reasons** `div.reson_area.section_padding` — section title "Reason of
     Helping" centered; THREE feature cards in a row: "Collecting Fund"
     (icon + description + "Read More" link), "Blood Camp", "Friendly
     Volunteer"; each with thumbnail image and text. Below: "Watch Our Latest
     Activities" text block with video background.
  5. **Latest Activities** `div.latest_activites_area` — video background
     section with overlay `rgba(60, 199, 143, 0.06)`, content on the right
     side: "Watch Our Latest Activities" heading + description paragraph +
     "Donate Now" button.
  6. **Popular Causes** `div.popular_causes_area.section_padding` — section
     title "Popular Causes" centered; THREE cause cards with: image, progress
     bar (red `#FF4F42` background, green `#3CC78F` fill, percentage text),
     "Raised: $5,000.00 / Goal: $9,000.00", title, description, "Read More"
     link. Causes: "Help us to Send Food", "Clothes For Everyone", "Water For
     All Children".
  7. **Counter/Stats** `div.counter_area` — background image with green
     overlay `#3CC78F` at 0.6 opacity; FOUR stat boxes in a row: white
     circle icons, large white numbers (count-up animation, default 120),
     captions (likely: Total Donations, Volunteers, Projects, Happy Faces).
     7px border-radius on boxes.
  8. **Volunteer** `div.our_volunteer_area.section_padding` — section title
     "Our Volunteer" centered; THREE team member cards: photo, name (Sakil
     Khan / Emran Ahmed / Sabbir Ahmed), role (Donner/Volunteer); each card
     with hover overlay.
  9. **News/Blog** `div.news__area.section_padding` — section title "News &
     Updates" centered; THREE blog post cards: image, date/category meta,
     title, excerpt, "Read More" link.
  10. **CTA/Newsletter** — dark background section with "Pure Water Is More
      Essential" heading + "Make a Donation" form: donation amount buttons
      ($25 / $50 / $100 / $200), name/email input fields, "Donate Now"
      submit button.
  11. **Footer** `footer.footer` — light green-tinted background `#F3FCF8`,
      FOUR columns: About text + social links, Services links (Donate,
      Sponsor, Fundraise, Volunteer, Partner, Jobs), Contacts (phone, email,
      address), Top News (two recent posts with thumbnail + date). Copyright
      bar at bottom.

## Design tokens (from css/style.css + live computed styles)

| Token            | Value                           | Where                                                                 |
|------------------|---------------------------------|-----------------------------------------------------------------------|
| Brand green      | `#3CC78F`                       | `.bradcam_area` overlay bg, counter bg, btn fills, progress bars, footer accent, logo |
| Accent orange    | `#ff5e13`                       | Secondary CTAs, some links, hover states                               |
| Light lavender   | `#f9f9ff`                       | Alternating section backgrounds                                        |
| Pale purple      | `#f0e9ff`                       | Additional section bg tint                                             |
| Deep navy        | `#191d34` / `#415094`           | Heading text, footer elements, some section titles                     |
| Light teal       | `#4cd3e3`                       | Secondary accent color                                                 |
| Muted grey       | `#7a7b7c` / `#999999` / `#888888` | Body text, meta text, secondary text                              |
| Near-black       | `#222222`                       | Primary heading text                                                   |
| White            | `#fff`                          | Page background, button text on green, counter text                    |
| Red (progress)   | `#FF4F42`                       | Cause progress bar background (empty portion)                          |
| Body font        | `"Open Sans", sans-serif`       | All body text, 16px                                                    |
| Display font     | `"Yeseva One", cursive`         | Section headings, footer titles                                        |
| Button radius    | 5–7px                           | `.btn_1`, CTA buttons                                                  |
| Card radius      | 7px                             | Counter boxes, some cards                                              |
| Circle radius    | 50%                             | Avatar images, icon containers                                         |

## Gherkin requirements

### Feature: Kindfund — Charity Nonprofit Website Template

#### Scenario: Top bar displays contact information
  - GIVEN the user visits the Kindfund homepage
  - WHEN the page loads
  - THEN the top bar shows a phone number and email address
  - AND social media icon links are visible on the right side

#### Scenario: Navbar navigation
  - GIVEN the user is on any section of the Kindfund homepage
  - WHEN the user scrolls down
  - THEN the navbar becomes sticky at the top of the viewport
  - WHEN the user clicks a nav link (Home, About, Blog, Pages, Elements, Cause, Contact)
  - THEN the page scrolls to the corresponding section

#### Scenario: Hero section with CTA
  - GIVEN the user visits the Kindfund homepage
  - WHEN the hero section is visible
  - THEN a headline about helping children is displayed
  - AND a "Learn More" call-to-action button is present
  - AND the hero has a full-width background image with overlay

#### Scenario: Reasons section displays three features
  - GIVEN the user scrolls to the "Reason of Helping" section
  - WHEN the section is visible
  - THEN three feature cards are displayed: Collecting Fund, Blood Camp, Friendly Volunteer
  - AND each card has a thumbnail image, title, description, and "Read More" link

#### Scenario: Latest Activities section with video background
  - GIVEN the user scrolls to the Latest Activities section
  - WHEN the section is visible
  - THEN a video background with green-tinted overlay is displayed
  - AND the section contains a heading, description paragraph, and "Donate Now" button

#### Scenario: Popular Causes with progress bars
  - GIVEN the user scrolls to the "Popular Causes" section
  - WHEN the section is visible
  - THEN three cause cards are displayed
  - AND each card shows a progress bar with percentage and dollar amounts (Raised / Goal)
  - AND each card has a title, description, and "Read More" link

#### Scenario: Counter stats section
  - GIVEN the user scrolls to the counter/stats section
  - WHEN the section is visible
  - THEN four stat boxes are displayed with count-up animated numbers
  - AND each box has a white circular icon, large white number, and caption
  - AND the section has a green overlay background

#### Scenario: Volunteer section
  - GIVEN the user scrolls to the "Our Volunteer" section
  - WHEN the section is visible
  - THEN three team member cards are displayed
  - AND each card shows a photo, name, and role
  - AND cards have a hover overlay effect

#### Scenario: News and Updates section
  - GIVEN the user scrolls to the "News & Updates" section
  - WHEN the section is visible
  - THEN three blog post cards are displayed
  - AND each card has an image, date/category meta, title, excerpt, and link

#### Scenario: Donation form
  - GIVEN the user scrolls to the "Make a Donation" section
  - WHEN the section is visible
  - THEN donation amount buttons are displayed ($25, $50, $100, $200)
  - AND name and email input fields are present
  - AND a "Donate Now" submit button is visible

#### Scenario: Footer content
  - GIVEN the user scrolls to the footer
  - WHEN the footer is visible
  - THEN four columns are displayed: About + social, Services links, Contacts, Top News
  - AND a copyright line with "Component Dock" attribution is present
  - AND the footer background is light green-tinted `#F3FCF8`

#### Scenario: Responsive layout
  - GIVEN the user views Kindfund on a mobile device (< 768px)
  - WHEN the page loads
  - THEN the navbar collapses into a hamburger menu
  - AND the hero section height reduces to ~500px
  - AND cards stack vertically in a single column
  - AND the counter stats wrap into a 2×2 grid

## Verification checklist

- [ ] Spec reviewed; all sections from the original DOM mapped 1:1
- [ ] Design tokens match the extracted CSS values (brand green `#3CC78F`, fonts Open Sans + Yeseva One)
- [ ] Section order matches: top bar → navbar → hero → reasons → latest activities → popular causes → counter → volunteer → news → donation form → footer
- [ ] All CTAs present: "Learn More" (hero), "Read More" (reasons, causes, news), "Donate Now" (activities, donation form)
- [ ] Progress bars on cause cards with percentage + dollar amounts
- [ ] Count-up animation on stat numbers
- [ ] Sticky navbar with scrollspy
- [ ] Mobile hamburger menu
- [ ] Responsive breakpoints: desktop (3-col), tablet (2-col), mobile (1-col)
- [ ] Footer has Component Dock attribution link
- [ ] No ColorLib references in any app code
- [ ] 100% test coverage on all components
- [ ] `npm run verify:app kindfund` passes

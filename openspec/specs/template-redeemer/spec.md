# Template: Redeemer (Church / Religious)

## Purpose

Redeemer is a single-page church & religious community website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Salvation" design (see TEMPLATES.md — Church section, line 1305,
first unchecked item whose prep did not exist on main), built under the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a modern Bootstrap 5 church website: a dark top bar (location +
social icons), a dark navbar with "Salvation" brand and nav links (Home, About,
Ministries, Sermons, Events, Blog, Contact) plus a Donate CTA, a full-viewport
hero slider (2 slides with atmospheric photos and centered white headlines:
"Transforming Lives / Total Surrender to God" and "Welcome to Salvation Church /
Perfect Church For Imperfect People" + "Become A Volunteer" CTA), a 3-card
services section (Worship, Connect, God's Love) on white, a "Connect, Grow and
Serve with Us" section on light grey with CTA, a crimson-blue counter/stats
banner ("We're on a mission to help all your problems" + 4 stats), a "Watch and
Listen to our Sermons" section with sermon cards (video play + outline buttons),
a "Transform Lives" testimony section, a "Latest news from our blog" section
with blog cards, a "Latest Events" section with event listings, a "Galleries"
photo gallery section, and a dark footer (4 columns: brand, Latest News, Quick
Links, Have a Questions?). Redeemer recreates that structure section-for-section
with matching layout, colors, typography, and content types (no ColorLib assets
copied).

## Design reference (replication findings)

- **Original:** ColorLib "Salvation" — free church/religious website template
  (source: https://colorlib.com/wp/template/salvation/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/salvation/`
  (HTTP 200, 42KB) + stylesheet `css/style.css` (89KB) plus Bootstrap 5 base,
  Swiper CSS, GLightbox CSS, AOS CSS, Flaticon icons, Font Awesome 7.1.0. The
  rendered DOM is the reference below; the TEMPLATES.md screenshot
  (`salvation-free-template.jpg`) confirms the visual design: a modern church
  site with a dark hero, crimson-red accent buttons, clean white sections, and a
  dark footer. Palette: white/light-grey sections, near-black headings,
  crimson-red #ce0f3d primary buttons, Bootstrap blue #007bff counter section,
  dark overlay #00043c, dark footer #1a1a1a, pink accent #ff4d6d.
- **Section order (1:1):**
  1. Top bar (`div.wrap`): location (map marker icon + address) left, social
     media icons (Facebook, Twitter, Instagram, Dribbble) right; dark background.
  2. Navbar (`nav.navbar.navbar-dark.bg-dark`): brand "Salvation" left, nav
     links right — Home (active), About, Ministries, Sermons, Events, Blog,
     Contact, Donate (CTA button with `data-bs-toggle="modal"`). Mobile:
     hamburger toggler → collapsed menu.
  3. Hero slider (`section.hero-wrap > .home-slider.swiper`): 2 slides, each
     with full-viewport `data-bg` image + `.overlay` (dark navy #00043c, 40%
     opacity), centered white text — Slide 1: "Transforming Lives" (h2) +
     "Total Surrender to God" (h1) + lorem paragraph + "Become A Volunteer"
     primary button; Slide 2: "Welcome to Salvation Church" (h2) + "Perfect
     Church For Imperfect People" (h1) + description + CTA. Swiper navigation
     arrows.
  4. Services section (`section.ftco-section.ftco-no-pb.ftco-no-pt`): white bg,
     3-column card layout — **Worship**, **Connect**, **God's Love** — each
     with icon, title (h3), description paragraph.
  5. Ministries section (`section.ftco-section.ftco-no-pt.ftco-no-pb.bg-light`):
     light grey bg, centered heading "Connect, Grow and Serve with Us" + ministry
     cards/grid + CTA button.
  6. Counter/stats banner (`section.ftco-counter.bg-primary`): Bootstrap blue
     #007bff bg, white text — centered uppercase heading "We're on a mission to
     help all your problems" + 4 counter stats (col-md-6 col-lg-3) with numbers
     and labels.
  7. Sermons section (`section.ftco-section`): white bg, centered heading "Watch
     and Listen to our Sermons" + sermon cards — each with thumbnail, title,
     description, play button (`.btn.btn-primary` solid crimson) + "Watch
     Later" (`.btn.btn-primary.btn-outline-primary`).
  8. Testimony section (`section.ftco-section.testimony-section`): heading
     "Transform Lives" + testimonial cards/quotes.
  9. Blog section (`section.ftco-section`): centered heading "Latest news from
     our blog" + blog entry cards (`.blog-entry.align-self-stretch`) — each
     with image, title, excerpt, "Read more" link.
  10. Events section (`section.ftco-section.ftco-no-pt`): heading "Latest
      Events" + event listings (`.event-wrap.d-md-flex`) — each with date,
      title, time, description, CTA button.
  11. Gallery section (`section.ftco-section.ftco-no-pb.ftco-no-pt`): heading
      "Galleries" + photo grid with GLightbox links (`.glightbox.img.gallery`).
  12. Footer (`footer.footer`): dark bg (#1a1a1a), 4 columns — brand
      description, Latest News links, Quick Links, Have a Questions? (contact
      form or info) + social icons + copyright bar.

- **Design tokens:**
  - Font: **Poppins** (weights 300–800 via cf-fonts in head — load via
    `<link>` in index.html). Body default sans-serif.
  - Primary brand crimson-red **#ce0f3d**: `.btn.btn-primary` bg/border,
    solid white text, padding ~6px 24px. Hover keeps same bg with darker
    border. This is the site-specific override of Bootstrap's #007bff.
  - Bootstrap blue **#007bff**: counter/stats section background
    (`.ftco-counter.bg-primary`), standard Bootstrap utility. Hover #0069d9.
  - Hero overlay: **#00043c** (very dark navy) at 40% opacity over hero
    background images.
  - Footer dark: **#1a1a1a**. Footer heading color: white.
  - Link hover accent: **#ff4d6d** (pink-red).
  - Section backgrounds: **#fff** (white), **bg-light** (#f8f9fa, light grey).
  - Top bar: dark background with white/light text.
  - Navbar: Bootstrap `.bg-dark` (#343a40), `.navbar-dark` white links.
  - Body text: near-black (#212529 / #333). Headings: near-black.
  - Buttons `.btn`: **border-radius: 0** (sharp/square corners), flat. Primary
    solid crimson red, outline primary with crimson border.
  - Icon set: Font Awesome 7.1.0 (via CDN), Flaticon (custom CSS).
  - Swiper for hero carousel, GLightbox for gallery, AOS for scroll animations.
  - Spacing: Bootstrap `.ftco-section` ~3em vertical padding;
    `.ftco-no-pt`/`.ftco-no-pb` for tight sections.

## Gherkin requirements

### Feature: Redeemer Church Template

  Scenario: Navbar displays all navigation links
    Given the user loads the page
    Then the navbar shows links: Home, About, Ministries, Sermons, Events, Blog, Contact
    And a "Donate" CTA button is visible

  Scenario: Hero slider shows two slides
    Given the user loads the page
    Then the hero section displays a full-viewport slider
    And slide 1 shows "Transforming Lives" heading and "Total Surrender to God" subheading
    And slide 2 shows "Welcome to Salvation Church" heading and "Perfect Church For Imperfect People" subheading
    And each slide has a "Become A Volunteer" or equivalent CTA button
    And navigation arrows are visible

  Scenario: Services section shows three cards
    Given the user scrolls to the services section
    Then 3 service cards are displayed: Worship, Connect, God's Love
    And each card has an icon, title, and description

  Scenario: Ministries section displays on light background
    Given the user scrolls to the ministries section
    Then the section has a light grey background
    And the heading reads "Connect, Grow and Serve with Us"
    And a CTA button is present

  Scenario: Counter section shows stats on blue background
    Given the user scrolls to the counter section
    Then the section has a blue (#007bff) background
    And 4 stat counters are displayed with numbers and labels
    And the heading reads "We're on a mission to help all your problems"

  Scenario: Sermons section shows sermon cards
    Given the user scrolls to the sermons section
    Then the heading reads "Watch and Listen to our Sermons"
    And sermon cards are displayed with thumbnails, titles, descriptions
    And each card has a play button and a "Watch Later" outline button

  Scenario: Testimony section displays
    Given the user scrolls to the testimony section
    Then the heading reads "Transform Lives"
    And testimonial content is displayed

  Scenario: Blog section shows latest posts
    Given the user scrolls to the blog section
    Then the heading reads "Latest news from our blog"
    And blog entry cards are displayed with images, titles, and excerpts

  Scenario: Events section shows upcoming events
    Given the user scrolls to the events section
    Then the heading reads "Latest Events"
    And event listings are displayed with dates, titles, and descriptions

  Scenario: Gallery section shows photo grid
    Given the user scrolls to the gallery section
    Then the heading reads "Galleries"
    And a photo grid with lightbox links is displayed

  Scenario: Footer displays with four columns
    Given the user scrolls to the footer
    Then the footer has a dark background (#1a1a1a)
    And 4 columns are shown: brand info, Latest News, Quick Links, Have a Questions?
    And social media icons are displayed
    And a Component Dock link is present in the footer

  Scenario: Mobile responsive layout
    Given the user views the page on a mobile viewport
    Then the navbar collapses to a hamburger menu
    And sections stack vertically
    And the hero slider remains full-viewport

  Scenario: Donate modal opens
    Given the user clicks the "Donate" CTA in the navbar
    Then a donation modal opens with the heading "Make a Difference Today"
    And donation amount options are displayed
    And a submit button is present

## Verification checklist

- [ ] Spec matches preview DOM section order 1:1
- [ ] Design tokens captured: fonts (Poppins), brand crimson (#ce0f3d),
      counter blue (#007bff), overlay (#00043c), footer (#1a1a1a),
      accent (#ff4d6d), sharp button corners (border-radius: 0)
- [ ] All sections from the original are represented in Gherkin scenarios
- [ ] No ColorLib asset references in app code (provenance in spec only)
- [ ] New name "redeemer" differs from ColorLib source "salvation"
- [ ] Footer will link Component Dock
- [ ] Screenshot visual design noted and tokens cross-referenced

# Template: Vesper (Church)

## Purpose

Vesper is a church / ministry landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Christian"
design (https://colorlib.com/wp/template/christian/), built under the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. "Vesper" (an evening
prayer service) is a NEW original name — the ColorLib source name is never
reused in app code.

The original is a classic church site ("Christian", Bootstrap 5): a transparent
navbar (cross + "Christian" in a Great Vibes script logo, uppercase Open Sans
links Home / About / Sermons / Events / Causes / Blog / Pastor / Contact, plus
a dropdown of ministry links) over a full-height photo hero of a white church
building (subtle black overlay, spaced-caps kicker "CHRISTIAN CHURCH", Lora
serif H1 "Following Jesus wherever we are" with "Jesus" in gold #ffd615, a
solid gold "Be part of us" button + white-outline "Read more" button); an
about split (church-interior photo left, "Welcome to Christian Church" copy
right); a four-stat counter band (Members / Pastors / Donation / Churches);
a gold-icon service grid (Christian Church Services: Daily Prayers, Continous
Teaching, Set of Sermons, Wedding, Community Helpers...); a light-grey
3-slide sermons carousel (photo, title, "by pastor: Jerry Simon", Watch +
Download buttons); a photo-band "Upcoming Events" heading; a light-grey list of
6 events (time, "Sharing Our Faith & Gospel", pastor + address, Join Us); a
causes grid (Health care Food / Restored the Old City Church / Save Childern
For Hunger with progress bars + Donate Now!); a dark photo band "Donation so
far $ 0" with the John 3:16 verse (big gold quote mark) and a Donate button; a
3-card blog section; a 4-card pastor team (Lloyd Wilson, Rachel Parker, Ian
Smith, Alicia Henderson); a contact section (Contact Me + Address / Contact
Number / Email Address / Website columns + a bg-light contact form) and a
Leaflet map; a 6-image photo gallery with lightbox hover; and a dark
(#1b1919) four-column footer (brand + About links + Connect links + Service
Hours) with a Component Dock copyright bar. Vesper recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Christian" — free church/ministry website Bootstrap 5
  template (source: https://colorlib.com/wp/template/christian/; listed in the
  "Bootstrap 5 (89)" section of TEMPLATES.md with duplicate rows in "Church
  (22)" and "One Page (91)"). This spec covers the single source `christian`;
  the three `- [ ]` rows share ONE implementation.
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/christian/`
  (HTTP 200, ~47.8KB) + stylesheet `css/style.css` (~325KB, minified). The
  rendered DOM is the reference below; the TEMPLATES.md screenshot
  (`christian-free-template.jpg`, 1200×946) confirms the visual design:
  transparent nav with script logo over a church-building photo hero (dark
  overlay, spaced-caps "CHRISTIAN CHURCH" kicker, serif headline with "JESUS"
  in gold, solid gold + white-outline buttons, carousel dots), and the about
  split below (church interior photo left, copy right). The screenshot only
  shows the top of the page; everything below is from the DOM + CSS.
- **Section order (1:1):**
  1. Navbar (`nav.navbar.navbar-expand-lg.navbar-dark.ftco_navbar.bg-dark
ftco-navbar-light.site-navbar-target`, id `ftco-navbar`): transparent at
     the top (white text over the hero); on scroll it becomes `ftco-navbar-
light`: white background + shadow + dark text. Left: cross icon + brand
     "Christian" in the Great Vibes script font. Right: uppercase Open Sans
     links Home / About / Sermons / Events / Causes / Blog / Pastor / Contact,
     plus a dropdown listing the ministry links (Staff, Beliefs, History,
     Mission, Wedding & Funerals, Jobs & Internship, Fellowships, Home Groups,
     Recovery Groups, Memberships, Children & Students, Volunteer, Counseling,
     Assistance).
  2. Hero (`section.hero-wrap.hero-wrap-2.js-fullheight`, id `home-section`,
     data-bg `images/bg_1.jpg`): height 600px, cover photo of a modern white
     church building with a cross (grey sky), subtle black overlay
     (`::before`, opacity 0.25), centered content (`slider-text
js-fullheight align-items-center justify-content-center`): uppercase
     spaced-caps kicker span "Christian Church", H1 "Following Jesus wherever
     we are" (Lora serif; `<span>Jesus</span>` wrapped in gold #ffd615), a
     white lorem paragraph ("Far far away, behind the word mountains ..."),
     and two buttons: "Be part of us" (solid gold #ffd615, white text) +
     "Read more" (transparent, 1px white border, white text). NOTE: the
     screenshot shows two carousel dots but the preview DOM renders a static
     single-slide hero (`hero-wrap-2` is the static variant) — implement a
     static full-height hero (a 2-slide slider is optional, not required).
  3. About (`section.ftco-section.ftco-no-pt.ftco-no-pb.ftco-about-section`,
     id `about-section`): split section — LEFT church-interior photo
     (`images/about.jpg`); RIGHT: H3 "Welcome to Christian Church" ("Christian"
     in gold), two paragraphs of copy. NO button in this section (verified in
     DOM).
  4. Counter band (`section.ftco-counter`, id `section-counter`): plain
     (white) band with four animated counters (count-up in the source; DOM
     renders 0 placeholders): Members / Pastors / Donation / Churches.
     Recreation may render static numbers or a simple count-up hook.
  5. Services (`section.ftco-section.ftco-services-2`, id `services-section`):
     centered H2 "Christian Church Services" + icon-card grid — gold 60px icon
     - 20px w500 title + copy: Daily Prayers, Continous Teaching, Set of
       Sermons, Wedding, Community Helpers (5 cards observed in the DOM; the
       source grid holds 6 — add one more church-appropriate item, e.g.
       Baptism, to complete the 3×2 grid).
  6. Sermons (`section.ftco-section.bg-light`, id `sermons-section`): light
     grey background; H2 "Christian Church Sermons" + a 3-slide carousel
     (slides duplicated in the DOM for the loop): each slide = sermon photo
     (`images/sermon-1..6.jpg`), H2 title "Let the Sunset Inspire You" /
     "Developing Spiritual Mentality" / "Let the Bible Motivate You", speaker
     H3 "Jerry Simon", meta ("Services · by pastor · March 15, 2030"), and
     two buttons: "Watch" (solid gold) + "Download" (outline). Use a simple
     index-based slider with prev/next (no owl.carousel dependency).
  7. Events heading band (`section.ftco-intro.img`, id `events-section`,
     data-bg `images/bg_3.jpg`): photo band, height 500px, black overlay
     opacity 0.3, content aligned top-center (padding-top 80px): kicker span
     "Events" + white H2 "Upcoming Events".
  8. Events list (`section.ftco-section.bg-light.ftco-event`): six event
     cards — time span "8:30am - 11:30am", H3 "Sharing Our Faith & Gospel",
     "by pastor: Jerry Simon", address "203 Fake St. Mountain View, San
     Francisco, California, USA", and a "Join Us" button (source event photos
     `images/event-1..6.jpg`).
  9. Causes (`section.ftco-section.ftco-causes.ftco-no-pb`, id
     `causes-section`): H2 "Causes Needs Our Help" + four cause cards
     (`images/cause-1..4.jpg`): "Health care, Food" (progress 40% in DOM),
     "Restored the Old City Church", "Save Childern For Hunger" — each with a
     progress bar and a "Donate Now!" button.
  10. Daily verse (`section.ftco-daily-verse.img`, data-bg `images/bg_4.jpg`):
      photo band, black overlay opacity 0.6; centered: H2 "Donation so far
      $ 0", a 100px gold quote mark (#ffd615), H3 "16 For God so loved the
      world, that he gave his only begotten Son, that whosoever believeth in
      him should not perish, but have everlasting life.", H4 "Bible: John
      3:16 KJV", and a "Donate now!" button.
  11. Blog (`section.ftco-section.bg-light`, id `blog-section`): H2 "Read the
      Latest Blog" + three blog cards (`images/image_1..3.jpg`): H3 "Why Lead
      Generation is Key for Business Growth" + paragraph + "Read More". NOTE:
      the titles are BASE-TEMPLATE LEFTOVERS (generic business titles);
      paraphrase to church-relevant items (e.g. "A Message of Hope for Our
      Community", "Finding Faith in Daily Life") keeping the 3-card layout.
  12. Pastor (`section.ftco-section.ftco-no-pb`, id `pastor-section`): H2
      "Church Pastor" + four pastor cards (`images/staff-1..4.jpg`): Lloyd
      Wilson, Rachel Parker, Ian Smith, Alicia Henderson (name + role + social
      icons).
  13. Contact (`section.ftco-section.contact-section.ftco-no-pb`, id
      `contact-section`): H2 "Contact Me" + four info columns (icon + label +
      value): Address "198 West 21th Street, Suite 721 New York NY 10016",
      Contact Number "+ 1235 2355 98", Email Address "info@yoursite.com",
      Website "yoursite.com"; below, a `bg-light p-4 p-md-5 contact-form`
      card: Your Name / Your Email / Subject inputs + Message textarea +
      "Send Message" submit (solid gold btn, `py-3 px-5`). Form is
      client-validated and non-functional in the recreation.
  14. Map (`section.ftco-section.ftco-no-pt.ftco-no-pb`): a Leaflet map
      (`id="map"`, leaflet.css loaded in the head). Recreation: avoid the
      leaflet dependency — render a static styled map placeholder panel (pin
      icon + address) and note the deviation in the PR.
  15. Gallery (`section.ftco-gallery.ftco-section.ftco-no-pb.mb-4`): H2
      "Christian Church Photo Gallery" + six gallery images
      (`images/gallery-1..4.jpg` + 2 more) with a lightbox hover effect
      (glightbox in the source; recreation can use a simple click-to-zoom
      dialog or hover overlay only).
  16. Footer (`footer.ftco-footer.ftco-bg-dark.ftco-section`): background
      #1b1919, padding 7em 0; four columns — (a) brand "Christian Church"
      (cross + Great Vibes script) + blurb + `ftco-footer-social` icons; (b)
      "About" links: Staff, Beliefs, History, Mission, Wedding & Funerals,
      Jobs & Internship; (c) "Connect" links: Fellowships, Home Groups,
      Recovery Groups, Memberships, Children & Students, Volunteer,
      Counseling, Assistance; (d) "Service Hours" lines: "Saturday Prayer
      Meeting: 10:00 am to 11:30 am", "Sunday Service: 8:30 am to 11:30 am"
      (2+ rows). `footer-bottom-area` copyright bar: "Copyright ©2026 All
      rights reserved | This template is made with by Colorlib" → attribution
      becomes the Component Dock link.
- **Design tokens:**
  - Brand gold **#ffd615** (theme-color meta; 66× in style.css) — hero
    "Jesus" span, `.btn-primary` fill (bg #ffd615, 1px #ffd615 border, white
    text), service icons (60px), daily-verse quote mark + text, footer
    heading accents (uppercase #ffd615), contact accents.
  - Secondary blue **#033fff** — `.btn-secondary` / `.cta-colored` nav pill /
    `.block-27` pagination (minor accent; primary brand stays gold).
  - Dark **#1b1919** (footer bg); black overlays: hero `::before` opacity
    0.25, events band 0.3, daily-verse band 0.6; text **#212529** / #000,
    muted **#6c757d**.
  - Light section backgrounds **#f8f9fa** / **#f2f2f2** (`bg-light` on
    sermons, events, blog; contact form card `bg-light`).
  - Fonts (Google Fonts): **Open Sans** (300/400/600/700) body + nav
    (uppercase links), **Lora** (400/700 + italics) headings (serif, e.g.
    hero H1), **Great Vibes** (script) brand logo.
  - Buttons: Bootstrap default radius (`.btn` ~0.375rem; large CTAs
    `--bs-border-radius-lg`); `.btn-primary` solid gold fill + white text;
    hero "Read more" transparent with 1px white border; sermon "Download"
    gold-outline transparent variant.
  - Sections: `.ftco-section` padding 7em 0 (112px; 6em variant); hero
    `hero-wrap-2` height 600px; events band height 500px (padding-top 80px);
    footer padding 7em 0.
  - Rhythm: kicker spans uppercase with wide letter-spacing; section H2 in
    Lora serif; numbered/dated meta in small grey text.
- **Recreation approach:** light theme with gold #ffd615 accents; hero =
  full-width seeded picsum photo of a church/architecture + subtle black
  overlay + spaced-caps kicker + Lora H1 with "Jesus" in gold + solid gold
  CTA + outlined CTA; counters band with four animated/static stats; gold
  lucide-react icon service grid (Sun/Moon for Daily Prayers, BookOpen for
  Teaching, Mic for Sermons, Heart for Wedding, Users for Community
  Helpers); 3-slide sermons slider with Watch/Download buttons; photo band +
  6 event cards; 4 cause cards with progress bars + Donate CTAs; dark daily-
  verse photo band (gold quote mark + John 3:16); blog cards; 4 pastor
  cards; contact info columns + form; static map placeholder; 6-image
  gallery; dark 4-column footer; all images picsum-seeded
  (`picsum.photos/seed/vesper-N/w/h`); Google Fonts via `<link>`.

## Requirements

### Requirement: Header

The system SHALL render a transparent navigation bar that becomes a fixed
white bar with a shadow on scroll.

#### Scenario: Transparent navbar

- **GIVEN** the Vesper app is rendered
- **WHEN** the page is at the top
- **THEN** the navbar SHALL be transparent over the hero with white links
- **AND** it SHALL show the brand "Vesper" with a cross icon in a script font
- **AND** it SHALL show navigation links (Home, About, Sermons, Events,
  Causes, Blog, Pastor, Contact)
- **AND** it SHALL show a dropdown of ministry links (Staff, Beliefs,
  History, Mission, Wedding & Funerals, Jobs & Internship, Fellowships, ...)

#### Scenario: Scrolled navbar

- **WHEN** the page scrolls
- **THEN** the navbar SHALL become fixed with a white background, a shadow
  and dark text

### Requirement: Hero

The system SHALL render a full-width photo hero with an overlay, headline,
subtext and two call-to-action buttons.

#### Scenario: Hero content

- **GIVEN** the Vesper app is rendered
- **WHEN** the hero displays
- **THEN** it SHALL show a full-width church-photo background with a subtle
  dark overlay
- **AND** it SHALL show an uppercase spaced-caps kicker ("Vesper Church" or
  similar), an H1 headline ("Following Jesus wherever we are") with the
  word "Jesus" in gold `#ffd615`, and a supporting paragraph
- **AND** it SHALL show a solid gold (`#ffd615`) button "Be part of us" and
  a white-outlined button "Read more"

### Requirement: About section

The system SHALL render a split about section with a photo and copy.

#### Scenario: About split

- **GIVEN** the Vesper app is rendered
- **WHEN** the about section displays
- **THEN** it SHALL show a church-interior photo on one side
- **AND** it SHALL show the heading "Welcome to Vesper Church" (brand word
  in gold) with body copy on the other side

### Requirement: Counter band

The system SHALL render a band with four statistics.

#### Scenario: Statistics

- **GIVEN** the Vesper app is rendered
- **WHEN** the counter band displays
- **THEN** it SHALL show four counters: Members, Pastors, Donation and
  Churches

### Requirement: Services grid

The system SHALL render a centered icon grid of church services.

#### Scenario: Service cards

- **GIVEN** the Vesper app is rendered
- **WHEN** the "Christian Church Services" section displays
- **THEN** it SHALL show the centered H2 "Christian Church Services"
- **AND** it SHALL show a grid of service cards, each with a gold icon, a
  title (e.g. "Daily Prayers", "Continous Teaching", "Set of Sermons",
  "Wedding", "Community Helpers") and a short description

### Requirement: Sermons carousel

The system SHALL render a light-background carousel of sermon slides with
Watch and Download actions.

#### Scenario: Sermon slide

- **GIVEN** the Vesper app is rendered
- **WHEN** the sermons section displays
- **THEN** it SHALL show the H2 "Christian Church Sermons" on a light grey
  background
- **AND** it SHALL show sermon slides, each with a photo, a title, a speaker
  ("by pastor: ..."), a date, and "Watch" + "Download" buttons
- **AND** prev/next controls SHALL navigate between slides

### Requirement: Events section

The system SHALL render a photo heading band and a list of event cards.

#### Scenario: Events heading band

- **GIVEN** the Vesper app is rendered
- **WHEN** the events section displays
- **THEN** a photo band with a dark overlay SHALL show the kicker "Events"
  and the H2 "Upcoming Events"

#### Scenario: Event cards

- **WHEN** the events list displays
- **THEN** it SHALL show event cards, each with a time (e.g. "8:30am -
  11:30am"), a title (e.g. "Sharing Our Faith & Gospel"), a pastor and
  address line, and a "Join Us" button

### Requirement: Causes section

The system SHALL render a grid of cause cards with progress and Donate
actions.

#### Scenario: Cause cards

- **GIVEN** the Vesper app is rendered
- **WHEN** the "Causes Needs Our Help" section displays
- **THEN** it SHALL show the H2 "Causes Needs Our Help"
- **AND** it SHALL show cause cards, each with a photo, a title (e.g.
  "Health care, Food", "Restored the Old City Church", "Save Children For
  Hunger"), a progress bar and a "Donate Now!" button

### Requirement: Daily verse band

The system SHALL render a dark photo band with a donation counter, a Bible
verse and a Donate button.

#### Scenario: Verse band

- **GIVEN** the Vesper app is rendered
- **WHEN** the daily verse band displays
- **THEN** it SHALL show a photo background with a strong dark overlay
- **AND** it SHALL show the H2 "Donation so far $ 0", a large gold quote
  mark, the John 3:16 verse and the citation "Bible: John 3:16 KJV"
- **AND** it SHALL show a "Donate now!" button

### Requirement: Blog section

The system SHALL render three blog cards on a light background.

#### Scenario: Blog cards

- **GIVEN** the Vesper app is rendered
- **WHEN** the "Read the Latest Blog" section displays
- **THEN** it SHALL show the H2 "Read the Latest Blog"
- **AND** it SHALL show three blog cards, each with a photo, a title, a
  short paragraph and a "Read More" link (titles paraphrased to
  church-relevant topics — the source ships generic business titles)

### Requirement: Pastor section

The system SHALL render a team grid of four pastors.

#### Scenario: Pastor cards

- **GIVEN** the Vesper app is rendered
- **WHEN** the "Church Pastor" section displays
- **THEN** it SHALL show the H2 "Church Pastor"
- **AND** it SHALL show four pastor cards, each with a photo, a name and a
  role

### Requirement: Contact section

The system SHALL render contact info columns and a contact form.

#### Scenario: Contact info

- **GIVEN** the Vesper app is rendered
- **WHEN** the "Contact Me" section displays
- **THEN** it SHALL show the H2 "Contact Me"
- **AND** it SHALL show four info items: Address, Contact Number, Email
  Address and Website with the corresponding values

#### Scenario: Contact form

- **WHEN** the contact form displays
- **THEN** it SHALL show a light-background form card with Name, Email,
  Subject and Message fields
- **AND** it SHALL show a "Send Message" submit button (solid gold,
  client-validated, non-functional)

#### Scenario: Map placeholder

- **WHEN** the map area displays
- **THEN** it SHALL render a static map placeholder panel (pin icon +
  address) — the source uses a Leaflet map; the recreation avoids the
  leaflet dependency (deviation noted in the PR)

### Requirement: Gallery

The system SHALL render a photo gallery with hover/zoom interaction.

#### Scenario: Gallery grid

- **GIVEN** the Vesper app is rendered
- **WHEN** the "Vesper Church Photo Gallery" section displays
- **THEN** it SHALL show the gallery heading and a grid of six photos
- **AND** photos SHALL show a hover overlay with a zoom icon

### Requirement: Footer

The system SHALL render a dark four-column footer with attribution.

#### Scenario: Footer columns

- **GIVEN** the Vesper app is rendered
- **WHEN** the footer displays
- **THEN** it SHALL have a dark (`#1b1919`) background with white text
- **AND** it SHALL show the brand with a blurb and social icons
- **AND** it SHALL show an "About" link list (Staff, Beliefs, History,
  Mission, Wedding & Funerals, Jobs & Internship)
- **AND** it SHALL show a "Connect" link list (Fellowships, Home Groups,
  Recovery Groups, Memberships, Children & Students, Volunteer, Counseling,
  Assistance)
- **AND** it SHALL show a "Service Hours" list (e.g. "Saturday Prayer
  Meeting: 10:00 am to 11:30 am", "Sunday Service: 8:30 am to 11:30 am")
- **AND** the copyright bar SHALL link to `https://www.componentdock.com/`
  (Component Dock attribution)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Vesper app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Header in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Vesper — Church Template"

## Verification checklist

- [ ] `openspec/specs/template-vesper/spec.md` exists on main with the full
      section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/vesper/tasks.md` exists on main with design notes and
      the implementation task outline.
- [ ] Fidelity: section order matches the Christian preview DOM 1:1 (navbar →
      hero → about → counters → services → sermons → events band → events
      list → causes → daily verse → blog → pastor → contact → map → gallery →
      footer).
- [ ] Tokens used in the app: gold `#ffd615`, secondary blue `#033fff`,
      footer bg `#1b1919`, light bgs `#f8f9fa`/`#f2f2f2`, black overlays
      (hero 0.25, events 0.3, verse 0.6); Open Sans body + Lora headings +
      Great Vibes logo via Google Fonts `<link>`; Bootstrap-radius buttons
      (solid gold primary, outlined variants).
- [ ] No ColorLib references in `apps/vesper` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] All images picsum-seeded (`picsum.photos/seed/vesper-N/w/h`); hero +
      events-band + verse-band background seeds screened for a
      church/architecture subject (see tasks.md verified picsum IDs).
- [ ] Implementer gate: `scripts/verify-app.sh vesper` (typecheck + lint +
      100% coverage tests + build) and `npm run spec:validate`.

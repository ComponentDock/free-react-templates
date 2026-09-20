# Template: GalaFlow (Concert / Event)

## Purpose

Recreation of ColorLib **Eventro** — a conference/event landing page template.

- **ColorLib source:** https://colorlib.com/wp/template/eventro/
- **Live preview:** https://preview.colorlib.com/theme/eventro/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/eventro-free-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **New name:** `galaflow` (never reuse the source name "eventro")

## Design Tokens (extracted from live preview CSS)

| Token                       | Value                                  | Notes                                                  |
| --------------------------- | -------------------------------------- | ------------------------------------------------------ |
| Brand / Primary             | `#FDE449`                              | Bright yellow — buttons, accents, back-top             |
| Secondary / Dark            | `#302072`                              | Deep purple — headings, header btn bg, hover, dropdown |
| Text headings               | `#302072`                              | Deep purple — h1-h6                                    |
| Body text                   | `#79709D`                              | Muted purple-gray — paragraphs                         |
| Link text                   | `#635c5c`                              | Gray — anchor base                                     |
| Background (light sections) | `#F6F7FF`                              | `.section-bg1` — light purple-white                    |
| Background (blue)           | `#0154F7`                              | `.section-bg2` — bright blue                           |
| Background (dark)           | `#000000`                              | `.black-bg`                                            |
| Font — Headings             | `"Oswald"`                             | sans-serif, weights 200-700                            |
| Font — Body                 | `"Roboto"`                             | sans-serif, weights 300-900                            |
| Button primary              | `#FDE449` bg, `#302072` text           | Rounded 5px, Roboto font, animated underline hover     |
| Button hover                | `#302072` bg with scaleX animation     | White text, purple sweep from left                     |
| Header button               | `#302072` bg, `#FDE449` text           | Rounded 5px, Roboto, 17px                              |
| Video button                | Transparent, `#fff` border, 5px radius | Play icon + "Watch Video"                              |
| Scroll-to-top               | `#FDE449` circle, 50px                 | White icon                                             |
| Section title               | 60px Oswald, `#302072`, uppercase      | With `#FDE449` underline on hover                      |
| Subtitle span               | 20px Oswald, `#140C40`, uppercase      | Letter-spacing 0.05em                                  |

## Section Structure (in order)

1. **Navbar** — Transparent header over hero. Logo left, centered nav links (Home, About, Programs, Speakers, Blog dropdown, Contact), "Buy Ticket" button right (`#302072` bg, `#FDE449` text). Sticky on scroll with white bg.
2. **Hero Slider** — Full-viewport slider (2 slides). Each: bg image with dark overlay, date span "12 Jan-20 Jan 2020" in `#FDE449`, large heading "Business Conference" (120px Oswald white), description text, two CTAs: "Join Now" yellow button + "Watch Video" outlined button with play icon. Decorative vertical text "Innovative" rotated -90deg on right edge.
3. **About Conference** — White bg, centered section title "About the Conference" (60px Oswald). Two-column: left has about image, right has "Fully innovative conference" subtitle, description paragraph, two info items (location icon + address, clock icon + time) in flex layout.
4. **The New Era** — White bg, two-column: left has section title "The New Era of Tech Companies", two description paragraphs, "Join Now" button; right has about image.
5. **Subscribe** — Background image (parallax), right-aligned subscribe card: heading "We have top executive & start up here", description, email input + "Subscribe" button.
6. **Program Schedule** — White bg, centered section title "Program Details" with description. Tabs (4 tabs: 12 Jan, 13 Jan, 14 Jan, 15 Jan). Each tab: 3 program entries with speaker image, title, description, time, speaker name.
7. **Our Speakers** — Light purple bg (`#F6F7FF`), centered section title "Our Speakers" with description. 4-column grid of 4 speaker cards. Each: portrait image with purple gradient overlay on hover, social icons (Facebook, Twitter, LinkedIn) revealed on hover, name + position below.
8. **Book Your Seat** — Background image with overlay, centered content: heading "Book your seat", description text, "Buy Ticket" yellow button.
9. **Footer** — Dark bg (`#302072`). 3-column: about text + social icons, quick links, newsletter form. Copyright bar at bottom. Component Dock link added per convention.

## Requirements

### Requirement: Navbar displays correctly

Users SHALL see a transparent navbar with logo, navigation links, and a "Buy Ticket" button that becomes sticky with white background on scroll.

#### Scenario: Navbar renders with all elements

- **WHEN** the page loads
- **THEN** the logo "GalaFlow" is visible
- **AND** navigation links "Home", "About", "Programs", "Speakers", "Blog", "Contact" are present
- **AND** a "Buy Ticket" button is visible in the header

#### Scenario: Navbar becomes sticky on scroll

- **WHEN** the user scrolls past 50px
- **THEN** the navbar background changes from transparent to white
- **AND** text colors adjust for contrast

#### Scenario: Mobile menu toggle works

- **WHEN** the user is on a mobile device
- **THEN** a hamburger menu button is visible
- **AND** clicking it opens the mobile navigation menu
- **AND** clicking a link closes the menu

### Requirement: Hero slider renders

Users SHALL see a full-viewport hero slider with two slides that auto-advance every 5 seconds.

#### Scenario: Hero displays first slide

- **WHEN** the page loads
- **THEN** a full-viewport image slider is displayed
- **AND** the date "12 Jan – 20 Jan 2020" is visible in yellow
- **AND** the heading "Business Conference" is displayed in large white text
- **AND** a "Join Now" yellow button is present
- **AND** a "Watch Video" outlined button with play icon is present

#### Scenario: Hero auto-advances slides

- **WHEN** 5 seconds pass
- **THEN** the slider advances to the next slide
- **AND** the heading changes to "Tech Summit 2020"

#### Scenario: Slide indicators work

- **WHEN** the user clicks a slide indicator button
- **THEN** the corresponding slide is displayed

### Requirement: About Conference section renders

Users SHALL see the About section with a two-column layout containing conference information.

#### Scenario: About section displays correctly

- **WHEN** the About section is in view
- **THEN** the section title "About the Conference" is visible
- **AND** an about image is displayed on the left
- **AND** the subtitle "Fully Innovative Conference" is visible
- **AND** location info shows "San Francisco Convention Center, CA"
- **AND** time info shows the conference dates

### Requirement: The New Era section renders

Users SHALL see The New Era section with a two-column layout and a call-to-action button.

#### Scenario: New Era section displays correctly

- **WHEN** the New Era section is in view
- **THEN** the section title "The New Era of Tech Companies" is visible
- **AND** description paragraphs are displayed
- **AND** a "Join Now" button is present

### Requirement: Subscribe section renders

Users SHALL see a subscribe section with a background image and an email subscription form.

#### Scenario: Subscribe section displays correctly

- **WHEN** the Subscribe section is in view
- **THEN** a background image with parallax is displayed
- **AND** the heading "We have top executive & start up here" is visible
- **AND** an email input field is present
- **AND** a "Subscribe" button is present

### Requirement: Program Schedule renders with tabs

Users SHALL see a tabbed program schedule with 4 date tabs and 3 program entries per tab.

#### Scenario: Program Schedule displays correctly

- **WHEN** the Program Schedule section is in view
- **THEN** the section title "Program Details" is visible
- **AND** 4 date tabs are displayed (12 Jan, 13 Jan, 14 Jan, 15 Jan)
- **AND** the first tab is active by default showing 3 program entries

#### Scenario: Tab switching works

- **WHEN** the user clicks a different date tab
- **THEN** the program entries update to show that day's schedule
- **AND** each entry shows a speaker image, title, description, time, and speaker name

### Requirement: Speakers section renders

Users SHALL see a speakers section with a 4-column grid of speaker cards with hover effects.

#### Scenario: Speakers section displays correctly

- **WHEN** the Speakers section is in view
- **THEN** the section title "Our Speakers" is visible
- **AND** 4 speaker cards are displayed in a row
- **AND** each card shows a portrait image and name/position

#### Scenario: Speaker hover reveals social icons

- **WHEN** the user hovers over a speaker card
- **THEN** social icons (Facebook, Twitter, LinkedIn) are revealed with a purple gradient overlay

### Requirement: Book Your Seat section renders

Users SHALL see a call-to-action section with a background image and a ticket purchase button.

#### Scenario: Book Your Seat section displays correctly

- **WHEN** the Book Your Seat section is in view
- **THEN** a background image with overlay is displayed
- **AND** the heading "Book Your Seat" is visible
- **AND** a "Buy Ticket" yellow button is present

### Requirement: Footer renders

Users SHALL see a dark purple footer with three columns and a copyright bar.

#### Scenario: Footer displays correctly

- **WHEN** the Footer is in view
- **THEN** a dark purple footer is displayed
- **AND** social media icons are present
- **AND** quick links are listed
- **AND** a newsletter form with email input is present
- **AND** a Component Dock attribution link is present pointing to https://www.componentdock.com/

## Verification Checklist

- [ ] All 9 sections render in the correct order
- [ ] Design tokens match: `#FDE449` primary yellow, `#302072` secondary purple, `#79709D` body text
- [ ] Fonts: Oswald for headings, Roboto for body (loaded via Google Fonts)
- [ ] Buttons: `#FDE449` yellow bg with `#302072` text
- [ ] Hero: full-viewport slider, 120px heading, yellow date, two CTAs
- [ ] About: two-column with image + info items (location, clock)
- [ ] Program Schedule: tabbed interface with 4 date tabs
- [ ] Speakers: 4-col grid, hover-reveal social icons
- [ ] Footer: dark purple bg, 3-col layout, newsletter form
- [ ] No references to ColorLib in app code
- [ ] `public/CNAME` contains `galaflow.free.componentdock.com`
- [ ] `homepage` in package.json set to `https://galaflow.free.componentdock.com`

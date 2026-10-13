# Template: Cognocourse (Online Course Platform)

## Purpose

Cognocourse is a single-page online course marketplace/landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Elearn" free template (source:
https://colorlib.com/wp/template/elearn/), built under a DIFFERENT name
(**Cognocourse**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 single-page education landing with:
- A top bar with contact info + register/login links
- A full-width header with logo "learn" + 5-item nav + search toggle
- A hero slider (OwlCarousel) with centered logo, heading "Complete Online Courses", subtitle, and two CTA buttons
- A featured course section (split: left text + right image)
- A courses carousel (3 cards with search bar above)
- A milestones section (parallax background, 4 animated counters)
- A grouped 3-column section: Why Choose Us (accordions) | Upcoming Events (list) | Latest News (post list)
- A video section (embedded YouTube)
- A "Join Our Platform Today" CTA section
- A 4-column footer (about/logo, quick menu, useful links, contact)

**Replication source:** https://preview.colorlib.com/theme/elearn/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/elearn-free-template.jpg

## Design Tokens (extracted from preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| Font family | `Montserrat` (Google Fonts) | All text |
| Brand primary | `#ff8a00` (orange) | Buttons, active nav, active indicators, link hover, tag bg, milestones section accent |
| Brand hover | `#ffae00` (golden orange) | Button hover state |
| Brand dark | `#ff6600` (deep orange) | Button arrow bg, news title hover |
| Dark bg | `#2c2b31` (near-black) | Top bar, menu overlay, tag hover bg, hamburger menu |
| Heading color | `#44425a` (dark navy-purple) | All h1-h6, footer titles |
| Body text | `#6c6a74` (muted gray) | Body copy, footer list links |
| Inline link hover | `#ffa07f` (salmon) | p > a border-bottom, hover bg |
| Text selection | `#ff8a00` bg / white text | ::selection |
| Page background | `#FFFFFF` | Page bg, join section |
| Button style | Orange `#ff8a00` rounded rect bg, white text, arrow suffix with `#ff6600` bg | CTA buttons throughout |
| Button radius | ~4px (Bootstrap-style slight rounding) | .button elements |
| Copyright text | `#b3b3b3` | Footer copyright |
| Section spacing | ~90px top/bottom padding on major sections | Consistent rhythm |

## Section Order (from preview DOM)

1. **Navbar** — Top bar (dark `#2c2b31` bg, white text, contact info + register/login) → Main nav (white bg, logo "learn" + 5 nav items + search icon) → Search panel (hidden, toggled)
2. **HeroSlider** — Full-width carousel, 3 slides, centered content: small logo image, heading "Complete Online Courses", subtitle paragraph, two orange CTA buttons ("learn more" + "see all courses" with arrow icons). Background image with dark overlay.
3. **FeaturedCourse** — 2-col split: left = tag badge ("Featured") + price ("$35") + title "Online Literature Course" + description + author avatar + name + sales count; right = background image
4. **Courses** — Section title "Choose your course" + subtitle + search form (course + level inputs + orange search button) + 3-column course cards (each: image, tag badge, price, title, description, author avatar + name + sales)
5. **Milestones** — Parallax background image, 4-column stat counters: 1,548 Online Courses / 7,286 Students / 257 Teachers / 39 Countries — white text, animated count-up, SVG icons
6. **GroupedSections** — 3-column layout:
   - Col 1: "Why Choose Us?" — 4 accordions (expand/collapse FAQ items)
   - Col 2: "Upcoming Events" — 5 events (date badge in orange outline + title + location)
   - Col 3: "Latest News" — 4 news posts (thumbnail + date + title + author)
7. **Video** — Embedded YouTube video player with poster image
8. **JoinCTA** — "Join Our Platform Today" heading + subtitle + centered orange "register now" button
9. **Footer** — 4-column: About (logo + text + social icons + copyright), Quick Menu links, Useful Links, Contact Us (address + phone + email). Dark bg `#2c2b31`.

## Requirements

### Feature: Cognocourse — Online Course Platform Landing Page

#### Scenario: Page loads with all sections rendered

- **GIVEN** the user navigates to the Cognocourse page
- **THEN** the page title is "Cognocourse"
- **AND** the navbar is visible with logo "learn"
- **AND** the nav contains links: Home, About Us, Courses, News, Contact
- **AND** the hero slider section is visible
- **AND** the featured course section is visible
- **AND** the courses section is visible
- **AND** the milestones section is visible
- **AND** the grouped sections (events, news, FAQ) are visible
- **AND** the video section is visible
- **AND** the join CTA section is visible
- **AND** the footer is visible

#### Scenario: Navbar displays contact information

- **GIVEN** the user views the top bar
- **THEN** the phone number is displayed
- **AND** the email address is displayed
- **AND** "Register" and "Login" links are visible

#### Scenario: Navbar search toggle

- **GIVEN** the user clicks the search icon in the nav
- **THEN** a search panel slides open with a text input and search button
- **WHEN** the user clicks the search icon again
- **THEN** the search panel closes

#### Scenario: Hero slider displays content

- **GIVEN** the hero slider is visible
- **THEN** the heading reads "Complete Online Courses"
- **AND** a descriptive subtitle paragraph is shown
- **AND** two CTA buttons are visible: "learn more" and "see all courses"
- **AND** both buttons have an orange background with arrow icons

#### Scenario: Featured course shows details

- **GIVEN** the featured course section is visible
- **THEN** a "Featured" tag badge is displayed
- **AND** the price shows "$35"
- **AND** the course title is "Online Literature Course"
- **AND** an author name and avatar are shown
- **AND** a sales count is displayed

#### Scenario: Courses section search form

- **GIVEN** the courses section is visible
- **THEN** a search form with "Course" and "Level" input fields is shown
- **AND** an orange "search course" button is present

#### Scenario: Courses carousel shows cards

- **GIVEN** the courses section is visible
- **THEN** at least 3 course cards are displayed
- **AND** each card has an image, tag, price, title, description, author, and sales count

#### Scenario: Milestones section displays stats

- **GIVEN** the milestones section is visible
- **THEN** 4 stat items are shown
- **AND** each stat has an icon, a counter number, and a label
- **AND** the labels are: "Online Courses", "Students", "Teachers", "Countries"
- **AND** the background is a parallax image

#### Scenario: Why Choose Us accordions work

- **GIVEN** the "Why Choose Us?" section is visible
- **THEN** 4 accordion items are displayed
- **WHEN** the user clicks an accordion header
- **THEN** the accordion expands to show its content paragraph
- **AND** clicking the same header again collapses it

#### Scenario: Upcoming Events list

- **GIVEN** the "Upcoming Events" section is visible
- **THEN** at least 4 events are listed
- **AND** each event has a date badge (day + month) and a title with location

#### Scenario: Latest News posts

- **GIVEN** the "Latest News" section is visible
- **THEN** at least 3 news posts are shown
- **AND** each post has a thumbnail image, date, title, and author name

#### Scenario: Video section renders

- **GIVEN** the video section is visible
- **THEN** a video player element is present
- **AND** it has a poster image

#### Scenario: Join CTA section

- **GIVEN** the join section is visible
- **THEN** the heading reads "Join Our Platform Today"
- **AND** a subtitle paragraph is shown
- **AND** an orange "register now" button with arrow icon is centered below

#### Scenario: Footer layout

- **GIVEN** the footer is visible
- **THEN** 4 columns are displayed: About, Quick Menu, Useful Links, Contact Us
- **AND** the About column has the logo, description text, and social icons
- **AND** the Contact Us column shows address, phone, and email
- **AND** the copyright text is present
- **AND** a "Component Dock" link is included (per project requirements)

#### Scenario: Footer Component Dock link

- **GIVEN** the user views the footer
- **THEN** a link to "https://www.componentdock.com/" is present
- **AND** the link text references "Component Dock"

#### Scenario: Responsive layout

- **GIVEN** the user views the page on a mobile viewport (< 768px)
- **THEN** the hamburger menu icon is visible
- **AND** the nav items are hidden behind the hamburger toggle
- **AND** the 3-column sections stack vertically
- **AND** course cards stack vertically
- **AND** footer columns stack vertically

## Verification Checklist

- [ ] All 9 sections render in correct order
- [ ] Navbar: logo, 5 nav items, search toggle, top bar info
- [ ] Hero: heading, subtitle, 2 CTA buttons with arrows
- [ ] Featured course: tag, price, title, description, author, sales
- [ ] Courses: search form, 3+ cards with all details
- [ ] Milestones: 4 stats with animated counters, parallax bg
- [ ] Grouped sections: accordion expand/collapse, events list, news posts
- [ ] Video: player element with poster
- [ ] Join CTA: heading, subtitle, register button
- [ ] Footer: 4 columns, social icons, contact info, copyright
- [ ] Footer: Component Dock link present
- [ ] Mobile responsive: hamburger nav, stacked layouts
- [ ] Color tokens match: `#ff8a00` brand orange, `#2c2b31` dark, `#44425a` headings, `#6c6a74` body
- [ ] Font: Montserrat loaded from Google Fonts
- [ ] Buttons: orange bg, white text, arrow icon suffix
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)

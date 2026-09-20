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

## Gherkin Requirements

### Feature: Cognocourse — Online Course Platform Landing Page

#### Scenario: Page loads with all sections rendered
- Given the user navigates to the Cognocourse page
- Then the page title is "Cognocourse"
- And the navbar is visible with logo "learn"
- And the nav contains links: Home, About Us, Courses, News, Contact
- And the hero slider section is visible
- And the featured course section is visible
- And the courses section is visible
- And the milestones section is visible
- And the grouped sections (events, news, FAQ) are visible
- And the video section is visible
- And the join CTA section is visible
- And the footer is visible

#### Scenario: Navbar displays contact information
- Given the user views the top bar
- Then the phone number is displayed
- And the email address is displayed
- And "Register" and "Login" links are visible

#### Scenario: Navbar search toggle
- Given the user clicks the search icon in the nav
- Then a search panel slides open with a text input and search button
- When the user clicks the search icon again
- Then the search panel closes

#### Scenario: Hero slider displays content
- Given the hero slider is visible
- Then the heading reads "Complete Online Courses"
- And a descriptive subtitle paragraph is shown
- And two CTA buttons are visible: "learn more" and "see all courses"
- And both buttons have an orange background with arrow icons

#### Scenario: Featured course shows details
- Given the featured course section is visible
- Then a "Featured" tag badge is displayed
- And the price shows "$35"
- And the course title is "Online Literature Course"
- And an author name and avatar are shown
- And a sales count is displayed

#### Scenario: Courses section search form
- Given the courses section is visible
- Then a search form with "Course" and "Level" input fields is shown
- And an orange "search course" button is present

#### Scenario: Courses carousel shows cards
- Given the courses section is visible
- Then at least 3 course cards are displayed
- And each card has an image, tag, price, title, description, author, and sales count

#### Scenario: Milestones section displays stats
- Given the milestones section is visible
- Then 4 stat items are shown
- And each stat has an icon, a counter number, and a label
- And the labels are: "Online Courses", "Students", "Teachers", "Countries"
- And the background is a parallax image

#### Scenario: Why Choose Us accordions work
- Given the "Why Choose Us?" section is visible
- Then 4 accordion items are displayed
- When the user clicks an accordion header
- Then the accordion expands to show its content paragraph
- And clicking the same header again collapses it

#### Scenario: Upcoming Events list
- Given the "Upcoming Events" section is visible
- Then at least 4 events are listed
- And each event has a date badge (day + month) and a title with location

#### Scenario: Latest News posts
- Given the "Latest News" section is visible
- Then at least 3 news posts are shown
- And each post has a thumbnail image, date, title, and author name

#### Scenario: Video section renders
- Given the video section is visible
- Then a video player element is present
- And it has a poster image

#### Scenario: Join CTA section
- Given the join section is visible
- Then the heading reads "Join Our Platform Today"
- And a subtitle paragraph is shown
- And an orange "register now" button with arrow icon is centered below

#### Scenario: Footer layout
- Given the footer is visible
- Then 4 columns are displayed: About, Quick Menu, Useful Links, Contact Us
- And the About column has the logo, description text, and social icons
- And the Contact Us column shows address, phone, and email
- And the copyright text is present
- And a "Component Dock" link is included (per project requirements)

#### Scenario: Footer Component Dock link
- Given the user views the footer
- Then a link to "https://www.componentdock.com/" is present
- And the link text references "Component Dock"

#### Scenario: Responsive layout
- Given the user views the page on a mobile viewport (< 768px)
- Then the hamburger menu icon is visible
- And the nav items are hidden behind the hamburger toggle
- And the 3-column sections stack vertically
- And course cards stack vertically
- And footer columns stack vertically

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

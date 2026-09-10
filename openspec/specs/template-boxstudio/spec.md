# Template: Boxstudio (Creative Digital Agency)

## Purpose

Recreation of ColorLib "Boxus" — a creative digital agency single-page template
with sticky navbar, hero banner, services slider, portfolio grid, about/timeline,
team members, news/stories, video offer, skills progress bars, contact form, and
footer.

- **ColorLib source:** https://colorlib.com/wp/template/boxus/
- **Preview URL:** https://preview.colorlib.com/theme/boxus/ (returned 404 at prep
  time; design captured from screenshot + live HTML/CSS fetched from preview server)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `boxstudio` (apps/boxstudio, @free-react-templates/boxstudio)

## Design tokens

Extracted from preview HTML (`https://preview.colorlib.com/theme/boxus/`) and
`style.css` fetched from the same origin.

| Token                  | Value                                         | Usage                                                           |
| ---------------------- | --------------------------------------------- | --------------------------------------------------------------- |
| Font family (headings) | `Montserrat` (weights 400, 700)               | Headings, section titles, logo text                             |
| Font family (body)     | `Roboto` (weights 300, 400, 700, 900)         | Body copy, descriptions, navigation                             |
| Font family (accent)   | `PT Serif` (weight 400)                       | Accent/quote text in about section                              |
| Primary / brand        | `#221c5a` (deep indigo/navy)                  | Navbar bg, section number badges, primary backgrounds           |
| Primary dark           | `#23214c` (slightly lighter indigo)           | Heading text, dark surface accents                              |
| Accent pink            | `#ee87a4` / `#e54b76` / `#e64b77` / `#E74C78` | CTA buttons, hover states, accent highlights                    |
| Accent green           | `#32DB8A` / `#55B286`                         | Skill bars, secondary accent, success states                    |
| Accent gold            | `#e3a436`                                     | Highlight accent, timeline markers                              |
| Muted purple           | `#5b5881` / `#8e8da9`                         | Subtitles, secondary text, muted captions                       |
| Gray                   | `#9a9a9a`                                     | Utility text, copyright                                         |
| Body text dark         | `#191919`                                     | Primary body copy                                               |
| White                  | `#fff`                                        | Card backgrounds, text on dark surfaces                         |
| Section padding        | `100px 0`                                     | Standard vertical rhythm between sections                       |
| Border radius          | None defined (sharp corners, flat design)     | Buttons, cards, images — square or minimal radius               |
| Background images      | `demo-images/background_img_*.jpg`            | Hero, video, contact section backgrounds (warm office/abstract) |

### Visual design (from screenshot + live HTML)

The screenshot shows a macOS browser frame mockup containing the template:

- **Navbar:** Sticky top bar, dark indigo (`#221c5a`) background, "Boxus" logo
  text left, horizontal nav links (Home, Services, Portfolio, About, News, Video,
  Skills, Contact) in white, hamburger on mobile.
- **Hero section:** Full-width background image (warm-toned office/creative desk),
  dark overlay, centered white headline "We Craft Awesome Web And Graphic Design
  Solutions", subtitle text, "Contact" CTA button.
- **Services section:** White/light background, numbered section title "Services",
  8 service cards in a horizontal slider (Branding, Mobile Apps, Web, Graphic,
  Services, PSD, HTML, PHP), each with title + lorem description.
- **Portfolio section:** Light background, numbered "Portfolio" title, filterable
  grid of portfolio items with thumbnail images, "PSD MOCKUP" label, "Smart Watch"
  title, "LOAD MORE" button.
- **About/Crafters section:** White background, "CRAFTERS" section number + "About"
  title, paragraph text, vertical timeline with career entries (2001-2016) with
  date markers and company names.
- **Team section:** Team members with circular photos, names (Robert Williams,
  John Doe, John Doe), roles.
- **News/Stories section:** Numbered "STORIES" title, blog post cards.
- **Video/Offer section:** Full-width background image, dark overlay, numbered
  "05 OFFER" with "Video" title, descriptive text, CTA.
- **Skills section:** White background, "EXPERTISE" number + "Skills" title,
  paragraph, horizontal progress bars (HTML 81%, CSS 93%, PSD 72%, DESIGN 99%)
  with green fill.
- **Contact section:** Background image, dark overlay, numbered "07 Contact",
  description text, contact form (name, email, subject, message), contact info.
- **Footer:** Copyright bar at bottom.

Overall aesthetic: bold, creative agency feel — deep indigo primary, pink/green/gold
accent palette, numbered section badges, flat design with background image overlays,
Montserrat headings, Roboto body, warm photography throughout.

## Section structure (top to bottom)

1. **Navbar** — Sticky top navigation, dark indigo (`#221c5a`) background. Logo
   "Boxstudio" left. Nav links: Home, Services, Portfolio, About, News, Video,
   Skills, Contact. Hamburger toggle on mobile.

2. **Hero** — Full-width with background image (`picsum.photos/seed/boxstudio-hero`),
   dark overlay (`rgba(34, 28, 90, 0.85)`), centered content: large white
   headline "We Craft Awesome Web And Graphic Design Solutions", subtitle text
   about creative design, "Contact" CTA button (pink `#e54b76` bg, white text,
   sharp corners).

3. **Services** — White background, 100px vertical padding. Left-aligned numbered
   section badge ("01") + heading "Services". Right-aligned: horizontal slider/grid
   of 8 service cards, each with icon, uppercase title (Branding, Mobile Apps, Web,
   Graphic, Services, PSD, HTML, PHP) + short description. Prev/next arrows.

4. **Portfolio** — Light background, numbered "02" + "Portfolio" heading. Filterable
   grid of portfolio items: thumbnail image, overlay label "PSD MOCKUP", title
   "Smart Watch". "LOAD MORE" CTA button. Items in 3-column grid.

5. **About** — White background, numbered "CRAFTERS" / "03" + "About" heading.
   Left: paragraph text. Right: vertical timeline with year markers (2001-2016)
   and company/studio entries connected by vertical line with dot markers.

6. **Team** — Light gray background, numbered "04" + "Team" heading. 3 team member
   cards in a row: circular photo, name (Robert Williams, John Doe, John Doe),
   role/title.

7. **News/Stories** — White background, numbered "05" + "STORIES" heading. Blog
   post cards with thumbnail, date, title, excerpt.

8. **Video/Offer** — Full-width background image, dark overlay, numbered "05 OFFER"
   - "Video" heading. Descriptive paragraph text, centered.

9. **Skills/Expertise** — White background, numbered "EXPERTISE" / "06" + "Skills"
   heading. Description paragraph. 4 horizontal progress bars with labels and
   percentages: HTML (81%), CSS (93%), PSD (72%), DESIGN (99%). Green fill bars.

10. **Contact** — Background image, dark overlay, numbered "07" + "Contact" heading.
    Description text. Contact form: Name, Email, Subject, Message fields + Submit
    button. Contact info: address, phone, email.

11. **Footer** — Dark background. Copyright: "© 2018 All rights reserved. |
    Boxus Template by [author]". Links to social icons.

## Gherkin requirements

### Feature: Boxstudio creative agency template

Scenario: Navbar displays and sticks on scroll
Given the user loads the page
When the user scrolls down
Then the navbar remains fixed at the top of the viewport
And all nav links (Home, Services, Portfolio, About, News, Video, Skills, Contact) are visible

Scenario: Hero section shows headline and CTA
Given the user is on the homepage
Then the hero displays the headline "We Craft Awesome Web And Graphic Design Solutions"
And a "Contact" CTA button is visible
And the background image is visible with a dark overlay

Scenario: Services section shows all 8 service cards
Given the user scrolls to the Services section
Then 8 service cards are displayed: Branding, Mobile Apps, Web, Graphic, Services, PSD, HTML, PHP
And each card has a title and description text

Scenario: Portfolio grid loads with items
Given the user scrolls to the Portfolio section
Then portfolio items are displayed in a grid layout
And each item shows a thumbnail image, category label, and title
And a "LOAD MORE" button is visible

Scenario: About timeline shows career history
Given the user scrolls to the About section
Then a vertical timeline is displayed with year markers from 2001 to 2016
And each timeline entry has a year range and company/studio name

Scenario: Team section shows member cards
Given the user scrolls to the Team section
Then 3 team member cards are displayed
And each card has a circular photo, name, and role

Scenario: Skills progress bars animate
Given the user scrolls to the Skills section
Then 4 progress bars are visible: HTML, CSS, PSD, DESIGN
And HTML shows 81%, CSS shows 93%, PSD shows 72%, DESIGN shows 99%

Scenario: Contact form renders with all fields
Given the user scrolls to the Contact section
Then the form displays Name, Email, Subject, and Message fields
And a Submit button is visible

Scenario: Footer displays copyright
Given the user scrolls to the bottom
Then the footer shows a copyright notice
And a link to Component Dock is present

Scenario: Mobile responsive layout
Given the user views the page on a 375px wide viewport
Then the navbar collapses to a hamburger menu
And sections stack vertically in single column
And service cards stack vertically
And team cards stack vertically
And the contact form is full-width

## Verification checklist

- [ ] Spec reviewed and matches original Boxus layout from preview HTML/CSS
- [ ] All 11 sections present in order (navbar through footer)
- [ ] Design tokens match: Montserrat headings, Roboto body, indigo/pink/green palette
- [ ] Services slider/grid has all 8 items with correct titles
- [ ] Portfolio grid with filter labels and LOAD MORE button
- [ ] About timeline with year markers
- [ ] Team cards with circular photos
- [ ] Skills progress bars with correct percentages
- [ ] Contact form with all 4 fields
- [ ] Footer links to Component Dock
- [ ] Mobile responsive: hamburger nav, stacked sections
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] 100% test coverage
- [ ] Spec folder: openspec/specs/template-boxstudio/spec.md
- [ ] Docs folder: docs/templates/boxstudio/tasks.md

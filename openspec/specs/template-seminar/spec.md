# Seminar — Conference & Workshop Event Landing Page

Recreation of ColorLib "Workshop" (https://colorlib.com/wp/template/workshop/).

## Design Tokens (from preview CSS)

- **Font:** Roboto Mono (monospace) via Google Fonts
- **Background:** #232531 (dark charcoal)
- **Text:** #cfcfd1 (light gray)
- **Primary accent:** #ff5733 (red-orange)
- **Section heading underline gradient:** linear-gradient(to right, #c70039, #ff5733 70%)
- **Section heading color:** #fff
- **Link/interactive color:** #ff5733
- **Footer background:** #1b1d24 (darker charcoal)
- **Button:** uppercase, letter-spacing 0.2em, no border-radius, gradient background

## Sections (in order)

1. **Navbar** — Brand "Seminar" (white with orange accent). Nav links: Home, About, Speakers, Schedule, News. CTA button: "Buy Tickets".
2. **Hero** — Full-width dark section with background image. Overlay text: "Conference 2024" subtitle, "Web Design Conference 2024" heading, "September 6th-7th, Portland, Oregon" date, "Buy Tickets" CTA button with gradient.
3. **Speakers** — Section heading "Speakers" with description. 4 speaker cards in alternating layout (image left/right). Each: photo, name, role, bio, social links.
4. **Programs/Schedule** — Section heading "Programs". Timeline items with time, session title, speaker name. Border rows.
5. **Sponsors** — Section heading "Sponsors". 6 sponsor logo placeholders in 3-column grid. "Be a Sponsor" CTA.
6. **News/Blog** — Section heading "News". 3 blog cards: image, title, author, excerpt. "More Blog Posts" CTA.
7. **Footer** — Dark (#1b1d24). 3-column: About Event, Quick Links, Connect with Us. Copyright with Component Dock link.

## Scenarios

Feature: Seminar template renders correctly

Scenario: Page loads with all sections
Given the user opens the Seminar template
Then the Navbar is visible with brand "Seminar"
And the Hero section shows conference heading
And the Speakers section lists 4 speakers
And the Programs section shows schedule items
And the Sponsors section shows 6 sponsor logos
And the News section shows 3 blog posts
And the Footer contains a Component Dock link

Scenario: Navigation links work
Given the user is on the Seminar template
When the user clicks a nav link
Then the page scrolls to the corresponding section

Scenario: Mobile menu toggle
Given the user is on a mobile viewport
When the user clicks the hamburger menu
Then the mobile navigation menu opens

Scenario: Buy Tickets CTA
Given the user is on the Seminar template
When the user clicks "Buy Tickets"
Then the page scrolls to the contact/ticket section

Scenario: Footer contains Component Dock link
Given the user scrolls to the footer
Then the footer contains a link to componentdock.com
And the link text mentions "Component Dock"

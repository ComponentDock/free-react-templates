# Template: Krypton (Digital Agency)

## Purpose

Krypton is a single-page digital agency landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Labs" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a digital agency template with a hero slider (full-width images with dark overlay, headline, subtitle, CTA), services/features grid, about section with stats, portfolio grid with filters, team member cards, testimonials with author info, blog cards, a contact form, and a multi-column footer with newsletter. Krypton recreates that structure section-for-section with matching layout, colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

Preview URL: https://preview.colorlib.com/theme/labs/ (404 — unreachable at prep time; falling back to screenshot + ColorLib template page meta description)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/labs-digital-agency-website-template.jpg

### Design Tokens

| Token            | Value             | Notes                                                    |
| ---------------- | ----------------- | -------------------------------------------------------- |
| Primary / accent | `#6420b1`         | Deep purple — used for CTAs, highlights, section accents |
| Secondary accent | `#5d80c0`         | Medium blue — navigation, secondary elements             |
| Text dark        | `#1a1a2e`         | Near-black for headings                                  |
| Text body        | `#555`            | Medium gray for body text                                |
| Background light | `#f8f9fa`         | Off-white section backgrounds                            |
| Background alt   | `#fdf2ee`         | Warm peach/pink tint on some sections                    |
| White            | `#ffffff`         | Cards, content areas                                     |
| Dark overlay     | `rgba(0,0,0,0.5)` | Hero slider text backdrop                                |
| Font heading     | Poppins           | Google Fonts                                             |
| Font body        | Roboto            | Google Fonts                                             |

## Requirements

### Requirement: Navigation bar

The template SHALL display a sticky navigation bar with the brand name "Krypton" on the left, navigation links (Home, About, Services, Portfolio, Blog, Contact) in the center, a CTA button on the right, a dark mode toggle, and a hamburger menu on mobile.

#### Scenario: Desktop navigation renders correctly

- **WHEN** the user visits the homepage on a desktop viewport
- **THEN** the logo "Krypton" is displayed on the left
- **AND** navigation links Home, About, Services, Portfolio, Blog, Contact are visible
- **AND** a "Get Started" CTA button links to the contact section
- **AND** a dark mode toggle button is present

#### Scenario: Mobile navigation hamburger toggle

- **WHEN** the user views on a mobile viewport
- **THEN** the navigation links are hidden
- **AND** a hamburger menu button is visible
- **AND** clicking the hamburger opens a mobile navigation panel
- **AND** clicking a link in the mobile panel closes it

#### Scenario: Dark mode toggle

- **WHEN** the user clicks the dark mode toggle
- **THEN** the html element receives the "dark" class
- **AND** clicking again removes the "dark" class

### Requirement: Hero slider

The template SHALL display a full-width hero slider with background images, dark overlay, headline, subtitle, and CTA buttons. The slider auto-advances every 5 seconds and supports manual navigation via arrow buttons and dot indicators.

#### Scenario: Hero displays initial slide

- **WHEN** the user visits the homepage
- **THEN** a full-width hero section is displayed
- **AND** the heading "We Are Digital Agency" is shown
- **AND** "Our Services" and "View Portfolio" CTA buttons are present

#### Scenario: Slider auto-advances

- **WHEN** 5 seconds elapse without user interaction
- **THEN** the hero transitions to the next slide
- **AND** the heading changes accordingly

#### Scenario: Manual slide navigation

- **WHEN** the user clicks the next or previous arrow button
- **THEN** the slider advances or goes back one slide
- **WHEN** the user clicks a dot indicator
- **THEN** the slider jumps to that slide

### Requirement: Services section

The template SHALL display a services section with a heading and 4 service cards in a responsive grid, each with an icon, title, and description.

#### Scenario: Services render all cards

- **WHEN** the user scrolls to the services section
- **THEN** the heading "Our Services" is displayed
- **AND** 4 cards are shown: Strategy & Research, UI/UX Design, Web Development, Digital Marketing
- **AND** each card has an icon, title, and description text

### Requirement: About section

The template SHALL display an about section with company description and 3 stat counters (projects, clients, awards).

#### Scenario: About section content

- **WHEN** the user scrolls to the about section
- **THEN** the heading "About Our Agency" is shown
- **AND** a company description paragraph is displayed
- **AND** stat counters "450+" (Projects), "200+" (Clients), "35+" (Awards) are visible

### Requirement: Portfolio section

The template SHALL display a portfolio section with filterable project thumbnails. Clicking a filter shows only items in that category.

#### Scenario: Portfolio shows all items

- **WHEN** the user scrolls to the portfolio section
- **THEN** the heading "Our Portfolio" is shown
- **AND** 6 project thumbnails are displayed
- **AND** filter buttons "All", "Design", "Development", "Marketing" are visible

#### Scenario: Portfolio filtering

- **WHEN** the user clicks the "Design" filter
- **THEN** only Design-category items are shown (2 items)
- **WHEN** the user clicks "All"
- **THEN** all 6 items are shown again

### Requirement: Team section

The template SHALL display a team section with member cards showing photo, name, role, and social links.

#### Scenario: Team members display

- **WHEN** the user scrolls to the team section
- **THEN** the heading "Meet Our Team" is shown
- **AND** 4 team member cards are displayed with names, roles, and social link icons

### Requirement: Testimonials section

The template SHALL display a testimonials section with 3 client testimonial cards showing quote, author photo, name, and company.

#### Scenario: Testimonials render correctly

- **WHEN** the user scrolls to the testimonials section
- **THEN** the heading "What Clients Say" is shown
- **AND** 3 testimonial cards are displayed with quotes and author info

### Requirement: Blog section

The template SHALL display a blog section with 3 recent post cards showing thumbnail, date, title, excerpt, and a "Read More" link.

#### Scenario: Blog posts display

- **WHEN** the user scrolls to the blog section
- **THEN** the heading "Latest News" is shown
- **AND** 3 blog post cards are displayed
- **AND** each card has a "Read More" link

### Requirement: Contact form

The template SHALL display a contact form with name, email, subject, and message fields that validate required fields and clear on submit.

#### Scenario: Contact form fields

- **WHEN** the user scrolls to the contact section
- **THEN** the heading "Get In Touch" is shown
- **AND** form fields Name, Email, Subject, Message, and a "Send Message" button are present

#### Scenario: Form submission clears fields

- **WHEN** the user fills all fields and clicks "Send Message"
- **THEN** all form fields are cleared

### Requirement: Footer

The template SHALL display a footer with brand name, contact info, quick links, newsletter form, and a link to Component Dock.

#### Scenario: Footer content

- **WHEN** the user scrolls to the footer
- **THEN** the brand "Krypton" is displayed
- **AND** contact information (address, phone, email) is shown
- **AND** quick navigation links are listed
- **AND** a newsletter subscription form with "Subscribe" button is present
- **AND** a link to https://www.componentdock.com/ labeled "Component Dock" is shown
- **AND** the copyright year matches the current year

#### Scenario: Newsletter form clears on submit

- **WHEN** the user enters an email and clicks "Subscribe"
- **THEN** the email field is cleared

### Requirement: Responsive behavior

The template SHALL be fully responsive, adapting layout for mobile viewports.

#### Scenario: Mobile layout

- **WHEN** the user views on a mobile viewport
- **THEN** the navigation collapses to a hamburger menu
- **AND** service cards stack vertically
- **AND** portfolio grid adjusts to fewer columns
- **AND** team cards stack vertically
- **AND** contact form is full-width

### Requirement: No ColorLib references

The template SHALL NOT contain any references to ColorLib in app source code, comments, or assets.

#### Scenario: Clean app code

- **WHEN** inspecting any file under apps/krypton/
- **THEN** no strings containing "colorlib" or "ColorLib" appear in source code or comments

### Requirement: Component Dock branding

The template SHALL link to https://www.componentdock.com/ branded as "Component Dock" in the footer.

#### Scenario: Footer link

- **WHEN** the user views the footer
- **THEN** a link to https://www.componentdock.com/ with text "Component Dock" is present

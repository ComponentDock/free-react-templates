# Template: DataVyn (Digital Agency Landing)

## Purpose

DataVyn is a single-page digital-agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Datarc" design (see TEMPLATES.md), built under the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a dark-themed digital agency landing page with an indigo
gradient hero banner, an about section on light background, services on dark
bg, a filterable portfolio grid, a studio CTA band, a team/pricing cards
section, a blog row, a contact section, a newsletter CTA, and a dark footer.
DataVyn recreates that structure section-for-section with matching layout,
colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Datarc" — digital agency website template
  (source: https://colorlib.com/wp/template/datarc/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/datarc/`
  (HTTP 200, 39.5KB) + stylesheet `css/main.css` (19.7KB). The rendered DOM is
  the reference below; the TEMPLATES.md screenshot
  (`datarc-digital-agency-free-website-template.jpg`) confirms the visual
  design (dark indigo gradient hero, light gray sections, dark studio band,
  purple CTA, black footer).
- **Section order (1:1):**
  1. Header/navbar: logo + nav (Home, Services, Portfolio, Team, Blog, Contact)
     + search icon + social icons (Facebook, Twitter, LinkedIn).
  2. Hero (`banner-area`, fullscreen with overlay gradient): "We work hard,
     we result perfect" subtitle + "Crafting Digital Agency Experiences"
     headline + "Explore Us" button.
  3. About (`gray-bg`): "About Our Digital Agency" subtitle + heading
     ("Plantronics with its GN Netcom wireless headset creates the next
     generation…") + "Addiction Whit Gambling" / "Headset No Longer Wired" /
     "Life Advice Looking At Window" tab-style items.
  4. Services (`title-bg`, dark `#222` bg): "We ensure perfect quality Digital
     products for you" heading + 4 feature cards (Unique Design, Appropriate
     UX, Perfect Visual, Different Layout).
  5. Portfolio (`protfolio`, filter tabs): "Remarkable Works" subtitle +
     "We have gained reliability to serve you best" heading + filter menu
     (All, Web Design, UI/UX Design, Mobile App, Web Development) + image
     grid with hover overlay ("Creative Tangerine" cards).
  6. Studio CTA (`studio-area`, dark overlay bg): "We create top class designs"
     subtitle + "A Digital Studio Crafting Tech Business" heading +
     paragraph + "Start Business" button.
  7. Team/Pricing (`pb-150`): "Creative People" subtitle + "Team work builds
     trust and trust builds growth" heading + 4 member cards (Ethel Davis,
     Rodney Cooper, Dora Walker, Lena Keller) with role labels.
  8. Blog (`gray-bg`): "Latest From Blog" subtitle + "Publish what you want to
     not requires social" heading + 4 blog post cards (image, date/author
     meta, title, excerpt, "Details" link).
  9. Contact (`gray-bg`): same heading as blog section + address/contact info
     (Physical Address, Web Contact) + contact form (name, email, subject,
     message fields + "Send Message" button).
  10. CTA banner (`cta-area`, purple `#3d4191`): "Not yet convinced with our
      quality?" + "Explore Services" button.
  11. Footer: 4-column layout (About Agency blurb, Navigation Links,
      Newsletter with email input, Copyright bar at bottom).

- **Design tokens extracted from `css/main.css`:**
  - Brand color: **#3c408f** / **#3d4191** / **#404598** (indigo family —
    CTA area background, banner overlay gradient end).
  - Hero overlay gradient: `linear-gradient(to right, rgba(60,60,143,0.95) → rgba(91,97,207,0.95))`.
  - Accent/highlight: **#00ff8c** (bright green — primary button border,
    hover states).
  - Text: `#222222` headings, `#333333` subheadings, `#777777` body.
  - Section backgrounds: `#f9f9ff` (gray-bg light lavender), `#222222`
    (title-bg/services dark), `#eee` (dividers).
  - Font: **"Poppins"** (sans-serif, weights 300/500/600) via Google Fonts.
  - Primary button: `border-radius: 20px`, transparent bg, `border: 1px solid #00ff8c`,
    uppercase text, `padding: 0 40px`.
  - CTA area: `background: #3d4191`, `padding: 60px 0`.
  - Team member avatars: `border-radius: 50%`.
  - Footer: dark background (inherited from body `#222222`), white headings.

- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero uses a seeded picsum photo with the
  indigo gradient overlay; about section with tab-style feature list; services
  as 4-column icon cards on dark bg; portfolio as filterable image grid with
  hover overlay; studio CTA band; team cards with circular avatar initials;
  blog cards with seeded photos; contact form with address info; newsletter
  CTA banner; 4-column footer with newsletter input. All images
  picsum-seeded, icons lucide-react (no assets copied).

DataVyn lives in `apps/datavyn` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "DataVyn", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Renders site name and home link

    Given the page is loaded
    When I look at the navigation bar
    Then I see the text "DataVyn" as the site name
    And I see a "Home" link

#### Scenario: Dark mode toggle is present

    Given the page is loaded
    When I look at the navigation bar
    Then I see a dark-mode toggle button

#### Scenario: Clicking home link scrolls to top

    Given the page is loaded
    When I click the "Home" link
    Then the page scrolls to the top

### Requirement: Hero banner

The system SHALL render a full-screen hero banner with an indigo gradient
overlay, a subtitle, a headline, and a call-to-action button.

#### Scenario: Hero content is visible

    Given the page is loaded
    When I look at the hero section
    Then I see the subtitle "We work hard, we result perfect"
    And I see the headline "Crafting Digital Agency Experiences"
    And I see an "Explore Us" button

#### Scenario: Hero covers the viewport

    Given the page is loaded
    When I look at the hero section
    Then it spans the full width of the viewport
    And it has an indigo gradient overlay

### Requirement: About section

The system SHALL render an about section with a centered title block on a light
background.

#### Scenario: About section displays content

    Given the page is loaded
    When I scroll to the about section
    Then I see the subtitle "About Our Digital Agency"
    And I see a descriptive heading paragraph

### Requirement: Services section

The system SHALL render a services section on a dark background with a heading
and four feature cards.

#### Scenario: Services section content

    Given the page is loaded
    When I scroll to the services section
    Then I see the heading "We ensure perfect quality Digital products for you"
    And I see 4 feature cards with titles "Unique Design", "Appropriate UX",
      "Perfect Visual", "Different Layout"

#### Scenario: Services section has dark background

    Given the page is loaded
    When I look at the services section
    Then the section background is dark (#222222)

### Requirement: Portfolio section

The system SHALL render a portfolio section with a filter menu and an image
grid with hover overlays.

#### Scenario: Portfolio filter menu

    Given the page is loaded
    When I scroll to the portfolio section
    Then I see filter buttons: "All", "Web Design", "UI/UX Design",
      "Mobile App", "Web Development"

#### Scenario: Portfolio heading

    Given the page is loaded
    When I look at the portfolio section
    Then I see the subtitle "Remarkable Works"
    And I see the heading "We have gained reliability to serve you best"

#### Scenario: Portfolio grid displays images

    Given the page is loaded
    When I look at the portfolio grid
    Then I see image cards with hover overlay showing text

### Requirement: Studio CTA band

The system SHALL render a studio call-to-action section with a dark overlay
background, white text, and a button.

#### Scenario: Studio CTA content

    Given the page is loaded
    When I scroll to the studio section
    Then I see the subtitle "We create top class designs"
    And I see the heading "A Digital Studio Crafting Tech Business"
    And I see a "Start Business" button

### Requirement: Team section

The system SHALL render a team section with a heading and four team member
cards with circular avatars.

#### Scenario: Team heading

    Given the page is loaded
    When I scroll to the team section
    Then I see the subtitle "Creative People"
    And I see the heading "Team work builds trust and trust builds growth"

#### Scenario: Team member cards

    Given the page is loaded
    When I look at the team section
    Then I see 4 team member cards
    And each card has a name: "Ethel Davis", "Rodney Cooper", "Dora Walker",
      "Lena Keller"

#### Scenario: Team avatars are circular

    Given the page is loaded
    When I look at team member avatars
    Then they have border-radius 50% (circular shape)

### Requirement: Blog section

The system SHALL render a blog section with a heading and four blog post
cards on a light background.

#### Scenario: Blog content

    Given the page is loaded
    When I scroll to the blog section
    Then I see the subtitle "Latest From Blog"
    And I see the heading "Publish what you want to not requires social"
    And I see 4 blog post cards

#### Scenario: Blog cards have metadata

    Given the page is loaded
    When I look at a blog card
    Then I see an image, date, author, title, excerpt, and "Details" link

### Requirement: Contact section

The system SHALL render a contact section with address info and a contact form
on a light background.

#### Scenario: Contact info

    Given the page is loaded
    When I scroll to the contact section
    Then I see "Physical Address" with address text
    And I see "Web Contact" with phone numbers

#### Scenario: Contact form

    Given the page is loaded
    When I look at the contact form
    Then I see fields for name, email, subject, and message
    And I see a "Send Message" submit button

### Requirement: CTA banner

The system SHALL render a purple call-to-action banner with text and a button.

#### Scenario: CTA banner content

    Given the page is loaded
    When I scroll to the CTA banner
    Then I see the text "Not yet convinced with our quality?"
    And I see an "Explore Services" button
    And the section background is indigo/purple (#3d4191)

### Requirement: Footer

The system SHALL render a footer with About, Navigation, Newsletter, and
copyright sections. The footer MUST link to `https://www.componentdock.com/`.

#### Scenario: Footer columns

    Given the page is loaded
    When I look at the footer
    Then I see an "About Agency" column with a description
    And I see a "Navigation Links" column with links
    And I see a "Newsletter" column with an email input

#### Scenario: Footer links to Component Dock

    Given the page is loaded
    When I look at the footer
    Then I see a link to "https://www.componentdock.com/" labeled
      "Component Dock"

### Requirement: Responsive layout

The system SHALL be responsive across mobile, tablet, and desktop viewports.

#### Scenario: Mobile navigation

    Given the viewport is 375px wide
    When I look at the navigation
    Then it adapts to mobile layout

#### Scenario: Sections stack vertically on mobile

    Given the viewport is 375px wide
    When I look at multi-column sections
    Then columns stack vertically

## Verification checklist

- [ ] Hero section renders with indigo gradient overlay
- [ ] About section on light lavender bg (#f9f9ff)
- [ ] Services section on dark bg (#222222)
- [ ] Portfolio filter tabs work (show/hide grid items)
- [ ] Studio CTA band with dark overlay and white text
- [ ] Team cards with circular avatars
- [ ] Blog cards with image, meta, and details link
- [ ] Contact form with address info
- [ ] CTA banner purple (#3d4191)
- [ ] Footer with 4 columns + Component Dock link
- [ ] Primary buttons: border-radius 20px, #00ff8c border
- [ ] Font: Poppins (Google Fonts)
- [ ] Dark mode toggle functional
- [ ] All images use picsum.photos seeded URLs
- [ ] No ColorLib references in app code

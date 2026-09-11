# Template: LineCraft (Creative Agency Landing)

## Purpose

LineCraft is a single-page creative agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Design" design (see TEMPLATES.md), built under the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a clean, minimalist creative agency template with a centered
navbar, a hero section with headline and feature icons, an achievements stats
bar, a "How it works" three-step process section, a testimonials carousel, a
blog posts grid, and a two-column footer with social links. LineCraft
recreates that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Design" — creative agency website template
  (source: https://colorlib.com/wp/template/design/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/design/`
  (HTTP 200, 24.6KB) + stylesheet `css/style.css` (27.8KB). The rendered DOM
  is the reference below; the TEMPLATES.md screenshot
  (`design-free-template.jpg`) confirms the visual design (clean white
  background, blue primary accent, centered layout, minimalist aesthetic).
- **Section order (1:1):**
  1. Navbar (`site-nav`, centered): "Design" logo + centered nav (Home,
     Dropdown, Inner Page, Contact us) + "Free Templates" CTA button (right-aligned).
  2. Hero (`hero`): "Create, Code, and Published." headline + paragraph +
     "Get Started" blue button + 2 feature cards below (High Quality × 2
     with flaticon icons: square + blueprint).
  3. Achievements stats bar (`achievements`, 4 columns): "99.55%" Ratings
     4.9 · "98,000+" Happy Customers · "99.99%" Server Up time · "1M+"
     Love by our customers. Each with a description paragraph.
  4. How it works (`how-it-works`): "How it works" subtitle + "Far far away"
     heading + 3-step process (1. Create an account · 2. Create new orders ·
     3. Ship and track), each with an icon, description, and curved arrow
     connector SVG between steps.
  5. Testimonials (`testimonial-section`): carousel of testimonial cards
     with author photo, blockquote, name ("Adam Aderson"), and role.
  6. Blog (`blog-entries-section`): "Blog" subtitle + "Latest Blog Posts"
     heading + 5 post entries (date, title, excerpt) in a responsive grid.
  7. Footer (`site-footer`): two-column layout — left: About blurb +
     "Connect with us" social icons (Facebook, Twitter, Instagram, Dribbble,
     LinkedIn); right: Navigations (Home, Shop, About, Press, Blog, Contact,
     Support, Privacy, FAQ, Careers, Process, About Us). Copyright bar at
     bottom with Component Dock link.

- **Design tokens extracted from `css/style.css`:**
  - Primary color: **#1264fa** (blue — buttons, links, accents).
  - Hover: **#2671fa** (lighter blue).
  - Dark text: **#303030** headings, **#7b7b7b** body.
  - Light backgrounds: **#f8f9fa**, **#f9f9f9**, **#e9ecef** (borders).
  - Section backgrounds: white `#fff` default, light gray for alternating.
  - Font: **"Montserrat"** (sans-serif, weights 300/400/700) via Google Fonts.
  - Buttons: `.btn-primary` blue bg (#1264fa), standard Bootstrap radius.
  - Hero: clean white background, no overlay.
  - Feature icons: flaticon icons in round icon-wrap containers.
  - Testimonials: centered card with author photo, blockquote, name.
  - Blog posts: date label + title link + excerpt, no images.
  - Footer: dark background (#303030 or similar), light text.

- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero uses clean white bg with headline
  and "Get Started" button; feature icons use lucide-react instead of
  flaticon; achievements as a 4-column stat bar; how-it-works as 3 steps
  with icons (curved arrows can be simplified to straight arrows or dots);
  testimonials as a simple card carousel; blog as text-only post cards;
  footer with about, social links, and navigation. All images
  picsum-seeded, icons lucide-react (no assets copied).

LineCraft lives in `apps/linecraft` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a centered navigation bar with the site name "LineCraft"
and nav links.

#### Scenario: Renders site name and navigation

    Given the page is loaded
    When I look at the navigation bar
    Then I see the text "LineCraft" as the site name
    And I see navigation links: "Home", "About", "Contact"

#### Scenario: CTA button in nav

    Given the page is loaded
    When I look at the navigation bar
    Then I see a "Get Started" or similar CTA button

#### Scenario: Dark mode toggle

    Given the page is loaded
    When I look at the navigation bar
    Then I see a dark-mode toggle button

### Requirement: Hero section

The system SHALL render a hero section with a headline, description, and
call-to-action button, plus two feature cards below.

#### Scenario: Hero content

    Given the page is loaded
    When I look at the hero section
    Then I see the headline "Create, Code, and Published."
    And I see a descriptive paragraph
    And I see a "Get Started" button

#### Scenario: Feature cards

    Given the page is loaded
    When I look below the hero text
    Then I see 2 feature cards with icons and titles

### Requirement: Achievements stats

The system SHALL render a stats section with 4 achievement metrics.

#### Scenario: Stats display

    Given the page is loaded
    When I scroll to the achievements section
    Then I see 4 stat cards: "99.55%" Ratings, "98,000+" Happy Customers,
      "99.99%" Server Up time, "1M+" Love by our customers

### Requirement: How it works

The system SHALL render a three-step process section with icons and
descriptions.

#### Scenario: Steps content

    Given the page is loaded
    When I scroll to the "How it works" section
    Then I see the subtitle "How it works"
    And I see 3 steps: "Create an account", "Create new orders",
      "Ship and track"

#### Scenario: Step icons

    Given the page is loaded
    When I look at the steps
    Then each step has an icon above its title

### Requirement: Testimonials

The system SHALL render a testimonials section with author photos, quotes,
and names.

#### Scenario: Testimonial content

    Given the page is loaded
    When I scroll to the testimonials section
    Then I see testimonial cards with a photo, blockquote, author name,
      and role

### Requirement: Blog section

The system SHALL render a blog section with post entries.

#### Scenario: Blog heading

    Given the page is loaded
    When I scroll to the blog section
    Then I see the subtitle "Blog"
    And I see the heading "Latest Blog Posts"

#### Scenario: Blog posts

    Given the page is loaded
    When I look at the blog entries
    Then I see multiple post entries with date, title, and excerpt

### Requirement: Footer

The system SHALL render a footer with About, Social, and Navigation sections.
The footer MUST link to `https://www.componentdock.com/`.

#### Scenario: Footer columns

    Given the page is loaded
    When I look at the footer
    Then I see an "About" section with a description
    And I see social media icons (Facebook, Twitter, Instagram, etc.)
    And I see a "Navigations" section with link lists

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
    Then it adapts to mobile layout with a hamburger menu

#### Scenario: Sections stack on mobile

    Given the viewport is 375px wide
    When I look at multi-column sections
    Then columns stack vertically

## Verification checklist

- [ ] Centered navbar with "LineCraft" logo and nav links
- [ ] Hero with headline, description, and "Get Started" button
- [ ] 2 feature cards below hero with icons
- [ ] 4-column achievements stats bar
- [ ] "How it works" 3-step process with icons
- [ ] Testimonials carousel with author photos
- [ ] Blog section with post entries
- [ ] Footer with About, Social, Navigation + Component Dock link
- [ ] Primary blue (#1264fa) for buttons and links
- [ ] Font: Montserrat (Google Fonts)
- [ ] Dark mode toggle functional
- [ ] All images use picsum.photos seeded URLs
- [ ] No ColorLib references in app code

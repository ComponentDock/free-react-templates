# Template: Labsy (Digital Agency Landing)

## Purpose

Labsy is a single-page digital agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Digilab" design (see TEMPLATES.md), built under the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a feature-rich digital agency template with a split-screen
hero (text left, image right) with vertical "Welcome" text, a tabbed services
section, a parallax image band, a projects grid, an about section with
counters, a green stats bar, a process section, a clients/partners section,
an FAQ accordion, a testimonials carousel, a blog section, a contact section,
and a multi-column footer. Labsy recreates that structure section-for-section
with matching layout, colors, typography, and content types (no ColorLib
assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Digilab" — digital agency website template
  (source: https://colorlib.com/wp/template/digilab/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/digilab/`
  (HTTP 200, 60.9KB) + stylesheet `css/style.css` (323.7KB, includes
  Bootstrap 5). The rendered DOM is the reference below; the TEMPLATES.md
  screenshot (`digilab-free-template.jpg`) confirms the visual design (green
  accent, dark hero, split-screen layout).
- **Section order (1:1):**
  1. Navbar (`navbar`, fixed): "DigiLab" logo + centered nav (Home, Services,
     Projects, About, Process, Clients, FAQ, Testimony, Blog, Contact).
  2. Hero (`home-section hero`): split-screen — left: vertical "Welcome to
     DigiLab" text + slider with "Small Details Make A Big Impression" +
     "Strategic Design And Technology Agency" slides + "Get in touch" button;
     right: background image with overlay.
  3. Services (`ftco-services bg-light`): vertical pills tabs (Business
     Strategy, Research, Data Analysis, UI Design, UX Design, Technology,
     Creative) with tab content showing icon + heading + description +
     "Learn More" button.
  4. Parallax band (`ftco-section-2 img`): full-width background image with
     overlay.
  5. Projects (`ftco-project bg-light`): "Our Projects" heading + 6-item
     project grid with hover overlay cards.
  6. About (`ftco-counter img`): split — left: background image; right:
     "Welcome to digilab" subtitle + "We Are Digital Agency" heading +
     paragraphs + "20 Years of experience" counter badge.
  7. Stats bar (`ftco-stats bg-primary`, green): 4-column stats — 500 Happy
     Clients, 850 Projects Completed, 20 Years Experience, 24 Awards Won.
  8. Process (`ftco-process`): "Our Process" subtitle + "How We Work" heading
     + 4 steps (Discovery, Planning, Execution, Delivery) with step numbers,
     icons, titles, and descriptions.
  9. Clients (`ftco-clients bg-light`): "Our Partners" subtitle + "Trusted
     By Industry Leaders" heading + 6 client logo placeholders.
  10. FAQ (`ftco-faq`): "Frequently Asked Questions" heading + accordion
      with 5 questions.
  11. Testimonials (`testimony-section`): "Happy Clients" heading +
      carousel of testimonial cards with author photos, quotes, names, and
      roles.
  12. Blog (`bg-light`): "Blog" subtitle + "Our Blog" heading + 3 blog cards
      with background images, date (day/month/year), title, excerpt, and
      "Read More" button.
  13. Contact (`contact-section`): "Contact Us" heading + 4-column info
      (Address, Contact Number, Email, Website) + contact form.
  14. Footer (`ftco-footer`): 4-column layout — About DigiLab + social icons,
      Links, Services, Have a Questions? (newsletter input). Copyright bar.

- **Design tokens extracted from `css/style.css`:**
  - Primary color: **#31de79** (green — buttons, accents, stats bar).
  - Button gradient: `linear-gradient(135deg, #9ff669 0%, #31de79 100%)`.
  - Dark text: **#1a1a1a** headings, **#666** body.
  - Section backgrounds: `#f8f9fa` (bg-light), white default, `#31de79`
    (stats bar green).
  - Font: **system-ui** stack (Bootstrap 5 default sans-serif).
  - Buttons: `.btn-primary` green gradient, `border: 1px solid #31de79`.
  - Hero: split-screen with background image + overlay, vertical text
    "Welcome to DigiLab".
  - Tabs: vertical pill-style navigation.
  - Process: numbered steps with icons and descriptions.
  - Testimonials: centered cards with circular author photos.
  - Footer: dark background with 4 columns.

- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero as split-screen with background
  photo; services as tabbed interface; projects as grid cards; about section
  with counter; green stats bar; 4-step process; client logos as placeholder
  boxes; FAQ as accordion; testimonials as cards; blog as image cards; contact
  form with info columns. All images picsum-seeded, icons lucide-react (no
  assets copied).

Labsy lives in `apps/labsy` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a fixed navigation bar with the site name "Labsy"
and nav links.

#### Scenario: Renders site name and navigation

    Given the page is loaded
    When I look at the navigation bar
    Then I see the text "Labsy" as the site name
    And I see navigation links

#### Scenario: Dark mode toggle

    Given the page is loaded
    When I look at the navigation bar
    Then I see a dark-mode toggle button

### Requirement: Hero section

The system SHALL render a split-screen hero with text on the left and a
background image on the right.

#### Scenario: Hero content

    Given the page is loaded
    When I look at the hero section
    Then I see the headline "Small Details Make A Big Impression"
    And I see a "Get in touch" button

#### Scenario: Hero layout

    Given the page is loaded
    When I look at the hero section
    Then the left column has text content
    And the right column has a background image

### Requirement: Services tabs

The system SHALL render a tabbed services section with vertical pills.

#### Scenario: Service tabs

    Given the page is loaded
    When I scroll to the services section
    Then I see tab buttons: "Business Strategy", "Research", "Data Analysis",
      "UI Design", "UX Design", "Technology", "Creative"

#### Scenario: Active tab content

    Given the page is loaded
    When I click a service tab
    Then the corresponding content panel shows an icon, heading,
      description, and "Learn More" button

### Requirement: Projects grid

The system SHALL render a projects section with a heading and grid cards.

#### Scenario: Projects heading

    Given the page is loaded
    When I scroll to the projects section
    Then I see the heading "Our Projects"

#### Scenario: Project cards

    Given the page is loaded
    When I look at the projects grid
    Then I see project cards with hover overlay effects

### Requirement: About section

The system SHALL render an about section with a split layout and counter.

#### Scenario: About content

    Given the page is loaded
    When I scroll to the about section
    Then I see the subtitle "Welcome to digilab"
    And I see the heading "We Are Digital Agency"
    And I see a "20 Years of experience" counter

### Requirement: Stats bar

The system SHALL render a green stats bar with 4 metrics.

#### Scenario: Stats display

    Given the page is loaded
    When I scroll to the stats bar
    Then I see: "500" Happy Clients, "850" Projects Completed,
      "20" Years Experience, "24" Awards Won

### Requirement: Process section

The system SHALL render a 4-step process section with numbered steps.

#### Scenario: Process steps

    Given the page is loaded
    When I scroll to the process section
    Then I see 4 steps: "Discovery", "Planning", "Execution", "Delivery"
    And each step has a number, icon, title, and description

### Requirement: Clients section

The system SHALL render a clients/partners section with logo placeholders.

#### Scenario: Clients heading

    Given the page is loaded
    When I scroll to the clients section
    Then I see the heading "Trusted By Industry Leaders"

### Requirement: FAQ section

The system SHALL render a FAQ section with an accordion.

#### Scenario: FAQ content

    Given the page is loaded
    When I scroll to the FAQ section
    Then I see the heading "Frequently Asked Questions"
    And I see expandable accordion items

### Requirement: Testimonials

The system SHALL render a testimonials section with author photos and quotes.

#### Scenario: Testimonials content

    Given the page is loaded
    When I scroll to the testimonials section
    Then I see the heading "Happy Clients"
    And I see testimonial cards with photos, quotes, names, and roles

### Requirement: Blog section

The system SHALL render a blog section with image cards.

#### Scenario: Blog heading

    Given the page is loaded
    When I scroll to the blog section
    Then I see the heading "Our Blog"

#### Scenario: Blog cards

    Given the page is loaded
    When I look at the blog entries
    Then I see 3 blog cards with background images, dates, titles,
      excerpts, and "Read More" buttons

### Requirement: Contact section

The system SHALL render a contact section with info columns and a form.

#### Scenario: Contact info

    Given the page is loaded
    When I scroll to the contact section
    Then I see the heading "Contact Us"
    And I see columns for Address, Contact Number, Email, Website

#### Scenario: Contact form

    Given the page is loaded
    When I look at the contact section
    Then I see a contact form with input fields and a submit button

### Requirement: Footer

The system SHALL render a footer with About, Links, Services, and Questions
sections. The footer MUST link to `https://www.componentdock.com/`.

#### Scenario: Footer columns

    Given the page is loaded
    When I look at the footer
    Then I see "About Labsy" with social icons
    And I see "Links" with navigation
    And I see "Services" with service list

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

## Verification checklist

- [ ] Fixed navbar with "Labsy" logo and nav links
- [ ] Split-screen hero with headline and "Get in touch" button
- [ ] Tabbed services section with 7 tabs
- [ ] Projects grid with hover overlay cards
- [ ] About section with split layout and counter
- [ ] Green stats bar with 4 metrics
- [ ] 4-step process section with numbered steps
- [ ] Clients/partners section with logo placeholders
- [ ] FAQ accordion with expandable items
- [ ] Testimonials carousel with author photos
- [ ] Blog section with 3 image cards
- [ ] Contact section with info and form
- [ ] Footer with 4 columns + Component Dock link
- [ ] Primary green (#31de79) for buttons and accents
- [ ] Button gradient: #9ff669 → #31de79
- [ ] Font: system-ui sans-serif stack
- [ ] Dark mode toggle functional
- [ ] All images use picsum.photos seeded URLs
- [ ] No ColorLib references in app code

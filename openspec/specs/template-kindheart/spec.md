# Template: Kindheart (Charity / Nonprofit Template)

## Purpose

Kindheart is a single-page charity / nonprofit website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Charilife" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Charilife" — charity / nonprofit website template
  (source: https://colorlib.com/wp/template/charilife/).
- **Preview URL:** https://preview.colorlib.com/theme/charilife/
  (HTTP 200, ~48 KB rendered DOM, title "Charilife Charity").
  Stylesheets: `css/main.css` (50 KB) + `css/bootstrap.css` + font-awesome.
  Fonts via Google Fonts: **Lora** serif (headings, buttons) + **Roboto**
  sans-serif (body, weight 300).
- **Visual design:** warm charity aesthetic — light grey page background
  `#ececec` on feature/cause/event/blog/CTA sections, white card backgrounds,
  near-black headings `#15181d`, brand coral-red `#ff573d` (primary accent,
  buttons, links, highlights, section title spans), dark overlay backgrounds
  `rgba(21,24,29,0.7)` on hero and call-to-action, dark footer `#15181d`.
  Lora serif 36–48px headings, Roboto 14px body at weight 300.
  Rectangular primary buttons with 2px border-radius.
- **Structure (1:1, section order):**
  1. Navbar — logo, nav links (Home, About, Causes, Event, Pages dropdown,
     Blog dropdown, Contact), transparent on hero, sticky with dark bg
  2. Hero/Banner — parallax background image, dark overlay, headline
     "Save the African children", subtext "More charity. More better life.",
     white "Join us" CTA button
  3. About Area — two-column: left = "We Are A Non-profit Organization"
     heading + body copy + "Read more" CTA + brand carousel; right = video
     play button over background image; gradient image bg on far right
  4. Features Area — "How Could You Help" section title, three feature cards
     with icon + title + description + "Learn more" link (Give Donation,
     Give Inspiration, Become Volunteer)
  5. Popular Causes — "Popular Causes" section title, three cause cards with
     image, tag, description, raised/goal amounts, "donate" button, donor
     count
  6. Call-to-Action — dark blue overlay background, "Need your help?" top
     text, "Volunteer Needed At Your Area" headline, description, "Sign up"
     CTA
  7. Upcoming Events — "Upcoming Event" section title, 2×2 grid of event
     cards each with image, date badge, title, description, countdown
     (Days/Hours/Minutes), "Learn More" link
  8. Blog — "Latest From Our Blog" sidebar text on left, two blog cards on
     right with image, category/date tags, title, comments/views count
  9. Instagram — "Follow Us" section title, horizontal carousel of 5 images
     with Instagram icon overlay on hover
  10. Newsletter CTA — "Subscribe now" top text, "Subscribe Now And Receive
      The Weekly Newsletter" headline, name + email form inputs, "Subscribe"
      button
  11. Footer — dark `#15181d` background, three columns: About Us + copyright,
      Quick Links, Contact Us (address, phone, email); Component Dock link

## Requirements

### Requirement: Navbar

The navbar SHALL be transparent over the hero, sticky on scroll with a dark background, and contain navigation links with dropdown menus and a mobile hamburger toggle.

#### Scenario: Desktop navbar with links and dropdowns

- **WHEN** the user views the page on desktop
- **THEN** the navbar shows a logo, all navigation links (Home, About, Causes, Event, Pages, Blog, Contact)
- **AND** Pages and Blog have dropdown menus that appear on hover
- **AND** the active link is highlighted in coral-red `#ff573d`

#### Scenario: Sticky navbar on scroll

- **WHEN** the user scrolls past the hero
- **THEN** the navbar becomes sticky with a dark `#15181d` background and shadow

#### Scenario: Mobile navbar toggle

- **WHEN** the user is on mobile viewport (< 992px)
- **THEN** the navbar collapses into a hamburger icon
- **AND** tapping the toggle reveals the navigation links vertically

### Requirement: Hero / Banner

The hero SHALL display a full-width parallax background image with a dark overlay, a headline, subtext, and a "Join us" CTA button.

#### Scenario: Hero renders with overlay and CTA

- **WHEN** the user visits the homepage
- **THEN** a full-width hero banner is visible with a dark overlay
- **AND** a headline "Save the African children" is displayed
- **AND** the subtext "More charity. More better life." appears below the headline
- **AND** a white "Join us" button with right-arrow icon is visible

### Requirement: About Area

The about area SHALL show a two-column layout with organization description, a brand carousel, and a video play button over a background image.

#### Scenario: About section renders

- **WHEN** the user scrolls to the About section
- **THEN** the heading "We Are A Non-profit Organization" is visible
- **AND** body copy text describes the organization
- **AND** a "Read more" coral-red CTA button is present
- **AND** a brand partner carousel is displayed below the text
- **AND** a video play button with pulsing border animation is visible on the right

### Requirement: Features Area

The features area SHALL display three feature cards in a 3-column grid, each with an icon, title, description, and "Learn more" link.

#### Scenario: Three feature cards visible

- **WHEN** the user scrolls to the "How Could You Help" section
- **THEN** three feature cards are displayed side by side
- **AND** each card has an icon, a title ("Give Donation", "Give Inspiration", "Become Volunter"), a description, and a "Learn more" link
- **AND** the section title has "Could" highlighted in coral-red

### Requirement: Popular Causes

The popular causes section SHALL display three cause cards in a 3-column grid, each with an image, category tag, description, raised/goal amounts, a "donate" button, and a donor count.

#### Scenario: Three cause cards rendered

- **WHEN** the user scrolls to the "Popular Causes" section
- **THEN** three cause cards are displayed side by side
- **AND** each card has a top image, an "Education" tag, a title, raised/goal amounts, a "donate" button, and a heart icon with donor count
- **AND** the section title has "Popular" highlighted in coral-red

#### Scenario: Cause card hover effect

- **WHEN** the user hovers over a cause card
- **THEN** the card gains a subtle shadow
- **AND** the card image scales up slightly

### Requirement: Call-to-Action

The call-to-action SHALL display a full-width section with a dark overlay background, a headline, description, and a "Sign up" CTA button.

#### Scenario: CTA section renders

- **WHEN** the user scrolls to the "Volunteer Needed" section
- **THEN** a dark overlay background is visible
- **AND** "Need your help?" appears as coral-red top text
- **AND** the headline "Volunteer Needed At Your Area" is displayed
- **AND** a "Sign up" coral-red CTA button with arrow icon is present

### Requirement: Upcoming Events

The events section SHALL display a 2×2 grid of event cards, each with an image, date badge, title, description, countdown timer, and "Learn More" link.

#### Scenario: Four event cards in grid

- **WHEN** the user scrolls to the "Upcoming Event" section
- **THEN** four event cards are displayed in a 2×2 grid
- **AND** each card has a left image with a date badge overlay and a right content area with title, description, countdown (Days/Hours/Minutes), and "Learn More" link
- **AND** the section title has "Upcoming" highlighted in coral-red

### Requirement: Blog Section

The blog section SHALL show a sidebar introductory text on the left and two blog post cards on the right.

#### Scenario: Blog section renders

- **WHEN** the user scrolls to the blog section
- **THEN** a left column with "Latest From Our Blog" heading, description, and "Show more" link is visible
- **AND** two blog cards appear on the right, each with an image, category/date tags, a title, and comment/view counts
- **AND** the blog background is light grey `#ececec`

### Requirement: Instagram Section

The instagram section SHALL display a "Follow Us" heading and a horizontal carousel of 5 images with an Instagram icon overlay on hover.

#### Scenario: Instagram carousel visible

- **WHEN** the user scrolls to the Instagram section
- **THEN** the "Follow Us" section title is displayed with "Follow" in coral-red
- **AND** 5 Instagram images are shown in a horizontal slider
- **AND** hovering an image reveals a semi-transparent dark overlay with an Instagram icon

### Requirement: Newsletter CTA

The newsletter section SHALL display a heading, description, and a subscription form with name, email, and submit button.

#### Scenario: Newsletter form renders

- **WHEN** the user scrolls to the newsletter section
- **THEN** "Subscribe now" appears as coral-red top text
- **AND** the heading "Subscribe Now And Receive The Weekly Newsletter" is visible
- **AND** a form with name input, email input, and "Subscribe" button is present
- **AND** the section background is light grey `#ececec`

### Requirement: Footer

The footer SHALL include three columns (About Us, Quick Links, Contact Us) on a dark background, with a "Made with Component Dock" attribution link.

#### Scenario: Footer renders all sections with CD link

- **WHEN** the user scrolls to the footer
- **THEN** the footer background is dark `#15181d`
- **AND** three columns are displayed: About Us with copyright, Quick Links, Contact Us
- **AND** a "Made with Component Dock" link to https://www.componentdock.com/ is present
- **AND** contact information includes address, phone number, and email

### Requirement: Responsive layout

The layout SHALL be responsive on mobile devices with hamburger menu, stacked cards, and single-column layouts.

#### Scenario: Mobile responsive layout

- **WHEN** the user views Kindheart on a mobile device (< 768px)
- **THEN** the navbar collapses into a hamburger menu
- **AND** feature cards, cause cards, and event cards stack vertically
- **AND** the blog sidebar moves above the blog cards
- **AND** the newsletter form inputs stack vertically

## Verification checklist

- [ ] Spec reviewed; all sections from the original DOM mapped 1:1
- [ ] Design tokens match the extracted CSS values
- [ ] Section order matches: navbar → hero → about → features → popular causes → CTA → events → blog → instagram → newsletter → footer
- [ ] Footer has Component Dock attribution link
- [ ] No ColorLib references in any app code
- [ ] 100% test coverage on all components
- [ ] `npm run verify:app kindheart` passes

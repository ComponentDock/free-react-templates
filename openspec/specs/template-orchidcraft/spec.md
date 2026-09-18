# Template: Orchidcraft (Creative Agency Landing)

## Purpose

Orchidcraft is a creative agency / corporate landing page template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Rango" free template (source:
https://colorlib.com/wp/template/rango/), built under a DIFFERENT name
(**Orchidcraft**), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a Bootstrap 4 + OwlCarousel + Slick slider + ScrollMagic
parallax page with a transparent-to-opaque header, full-viewport hero
slider, icon boxes, vertical testimonial slider, horizontal services
carousel, features grid, call-to-action, newsletter subscription form,
and a dark-purple multi-column footer. It targets creative agencies,
corporate businesses, and marketing firms.

## Provenance

- **Original:** ColorLib "Rango"
- **Slug:** rango
- **Preview URL:** https://preview.colorlib.com/theme/rango/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/rango-free-template.jpg
- **Note:** Preview reachable (HTTP 200). HTML DOM + CSS extracted for
  section structure and design tokens.

## Design Tokens

| Token                | Value                              | Usage                                         |
| -------------------- | ---------------------------------- | --------------------------------------------- |
| Primary              | `#452b78` (deep purple)            | Buttons, footer bg, feature accents, nav bg   |
| Accent               | `#ff6b09` (orange)                 | Logo span, links, hover highlights, slider nav|
| Light accent         | `#ffa07f` (salmon)                 | Link underline, text a:hover                  |
| Selection bg         | `#ffd9bf`                          | ::selection background                        |
| Dark background      | `#1b0b32` / `#1b0d37`             | Header scrolled bg, footer bg                 |
| Purple medium        | `#301b55`                          | Search button active                          |
| Purple light         | `#d6cbed`                          | Service slider bg, feature section bg         |
| Purple accent light  | `#9878e2` / `#9c83ce`             | Slider navigation, feature accents            |
| Body font            | Poppins (300–900)                  | Body text, headings                           |
| Button font          | Roboto (300–900)                   | CTA buttons                                   |
| Body text            | `#6e6e6e` / `#909090`             | Paragraphs, descriptions                      |
| Headings             | `#28262d`                          | h1–h6                                         |
| White                | `#FFFFFF`                          | Page bg, hero text, button text on fill       |
| Services bg          | `#fafbfb`                          | Services section background                   |
| Button style         | Transparent bg, colored text       | Fills bg on hover, text turns white           |
| Button radius        | Rounded (circular service icons)   | Service item icon containers are 50% radius   |

## Requirements

### Requirement: Page renders all sections in correct order

The template SHALL render the following sections top-to-bottom: Header,
Hero Slider, Icon Boxes, Vertical Slider Section, Services Carousel,
Features, Call to Action, Text Line, Newsletter, Footer.

#### Scenario: All sections are visible on page load

- **WHEN** the app loads
- **THEN** the Header is visible with the Orchidcraft logo and navigation
- **AND** the Hero section displays a full-viewport slider with centered text
- **AND** the Icon Boxes section shows a title, CTA, and 4 feature items
- **AND** the Vertical Slider Section shows an image and rotating testimonials
- **AND** the Services section displays a horizontal carousel of 6+ service cards
- **AND** the Features section shows a 3-column layout with center image
- **AND** the Call to Action section has a heading and paragraph
- **AND** the Text Line section shows an image alongside text and a CTA
- **AND** the Newsletter section has a subscription form
- **AND** the Footer contains social icons, link columns, and the Component Dock link

### Requirement: Header transitions from transparent to opaque on scroll

The Header SHALL start transparent (over the hero) and become a solid dark
purple when the user scrolls past the hero area.

#### Scenario: Header becomes opaque after scrolling

- **GIVEN** the page is loaded at the top
- **WHEN** the user scrolls past the hero section
- **THEN** the header background changes from transparent to a solid dark purple (`#1b0b32` at ~92% opacity)
- **AND** the header remains fixed at the top of the viewport

### Requirement: Hero section has a parallax background with slider

The Hero section SHALL display a full-viewport parallax background image
with centered text content and left/right navigation arrows.

#### Scenario: Hero text is centered over the parallax image

- **WHEN** the app loads
- **THEN** the hero section occupies the full viewport height
- **AND** centered text (logo tagline + "Get your freebie template now!") is visible
- **AND** left and right chevron navigation arrows are present

### Requirement: Icon Boxes section displays feature highlights

The Icon Boxes section SHALL show a 3-column layout with a heading + CTA
on the left and 4 feature items (2 per column) on the right.

#### Scenario: Icon boxes are visible with correct content

- **WHEN** the user scrolls to the Icon Boxes section
- **THEN** a heading "Build your entire website in minutes" is visible
- **AND** a "discover more" CTA button is displayed
- **AND** 4 icon box items are rendered (Great team, Modern Design, Online Marketing, Easy to use)

### Requirement: Vertical Slider Section shows rotating testimonials

The Vertical Slider Section SHALL display a left image and a right-side
vertical auto-rotating testimonial slider with person info.

#### Scenario: Vertical slider rotates testimonials

- **WHEN** the Vertical Slider Section is in view
- **THEN** a large image is displayed on the left
- **AND** a testimonial heading, paragraph, and person info (name + title) are visible on the right
- **AND** the testimonial content rotates automatically

### Requirement: Services carousel displays service cards

The Services section SHALL render a horizontal OwlCarousel of service
cards, each with an icon, title, description, and "discover more" CTA.

#### Scenario: Services carousel renders multiple cards

- **WHEN** the user scrolls to the Services section
- **THEN** a section title "We take care of your business" with subtitle "Explore our services" is visible
- **AND** at least 6 service cards are displayed in the carousel
- **AND** each card has an icon, title, paragraph, and CTA button
- **AND** left/right navigation arrows control the carousel

### Requirement: Features section has 3-column layout

The Features section SHALL display a 3-column layout with feature items
on the left and right columns and a centered image with CTA buttons.

#### Scenario: Features layout renders correctly

- **WHEN** the Features section is in view
- **THEN** the heading "Modern features" is visible
- **AND** the left column shows 2 features (Responsive, Clean code)
- **AND** the center column shows a features image and "discover more" CTA
- **AND** the right column shows 2 features (Retina ready, Great team)
- **AND** CTA buttons are present in both feature columns

### Requirement: Call to Action section has background image

The CTA section SHALL display a parallax background image with a heading
and paragraph text overlay.

#### Scenario: CTA content is visible

- **WHEN** the user scrolls to the CTA section
- **THEN** the heading "We love our customers" is visible
- **AND** a paragraph of descriptive text is shown
- **AND** a decorative image is displayed on the right

### Requirement: Text Line section shows image + text side by side

The Text Line section SHALL render an image on the left and text content
with a CTA on the right.

#### Scenario: Text line layout renders correctly

- **WHEN** the user scrolls to the Text Line section
- **THEN** an image is visible on the left
- **AND** the heading "We integrate the future" is displayed
- **AND** a paragraph and "discover more" CTA button are present

### Requirement: Newsletter subscription form

The Newsletter section SHALL display a subscription form with an email
input field and a "subscribe" button.

#### Scenario: Newsletter form is functional

- **WHEN** the user scrolls to the Newsletter section
- **THEN** the heading "Subscribe to our newsletter" is visible
- **AND** an email input with placeholder text is rendered
- **AND** a "subscribe" button is present

### Requirement: Footer contains navigation columns and social links

The Footer SHALL display the logo, social media icons, and 4 link
columns (Services/Additionals, Menu, About Us, Community).

#### Scenario: Footer renders all columns

- **WHEN** the user scrolls to the Footer
- **THEN** the Orchidcraft logo is displayed
- **AND** social media icon links are present (Pinterest, Facebook, Twitter, Dribbble, Behance, LinkedIn)
- **AND** link columns for Services, Menu, About Us, and Community are visible
- **AND** a "Component Dock" link is present in the footer
- **AND** a copyright notice is displayed

### Requirement: Navigation links scroll to sections

The Header nav SHALL provide links that smoothly scroll to corresponding
page sections.

#### Scenario: Clicking a nav link scrolls to the target

- **WHEN** the user clicks a navigation link
- **THEN** the page smoothly scrolls to the corresponding section

### Requirement: Mobile hamburger menu toggle

The Header SHALL show a hamburger menu on mobile viewports that toggles
a slide-in mobile navigation menu.

#### Scenario: Toggling the mobile menu

- **GIVEN** the viewport is mobile-sized
- **WHEN** the user clicks the hamburger icon
- **THEN** a mobile menu slides in from the right
- **AND** clicking a link or close button dismisses the menu

### Requirement: Footer links to Component Dock

The Footer SHALL include a link to https://www.componentdock.com/
branded as "Component Dock".

#### Scenario: Component Dock link is present

- **WHEN** the user views the footer
- **THEN** a link to componentdock.com is visible
- **AND** the link text includes "Component Dock"

## Verification Checklist

- [ ] All 10 sections render in the correct order
- [ ] Header transitions from transparent to opaque on scroll
- [ ] Hero parallax background and slider navigation work
- [ ] Icon Boxes render 4 feature items with correct headings
- [ ] Vertical Slider auto-rotates testimonials
- [ ] Services carousel scrolls horizontally with nav arrows
- [ ] Features 3-column layout renders correctly
- [ ] CTA section has background image with text overlay
- [ ] Text Line section shows image + text side by side
- [ ] Newsletter form renders email input + subscribe button
- [ ] Footer has social icons, 4 link columns, and Component Dock link
- [ ] Mobile hamburger menu toggles correctly
- [ ] Nav links scroll to corresponding sections
- [ ] No ColorLib references in app code
- [ ] 100% test coverage on all components

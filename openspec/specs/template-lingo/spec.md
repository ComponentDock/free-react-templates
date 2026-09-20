# Template: Lingo (Language Learning Website)

## Purpose

Lingo is a multi-section language learning website in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Lingua" free
template (source: https://colorlib.com/wp/template/lingua/), built under a
DIFFERENT name (**Lingo**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Requirements

### Requirement: Header navigation

The system SHALL render a header with a top bar (phone number, language
dropdown, social icons), a main navigation bar with 6 links (Home, Courses,
Instructors, Events, Blog, Contact), a search icon, and a hamburger menu
for mobile.

#### Scenario: Desktop header renders all navigation elements

- **GIVEN** the Lingo app is rendered on a desktop viewport
- **THEN** a top bar SHALL display a phone number, language selector, and
  social media icon links (Facebook, Twitter, Instagram)
- **AND** a main nav bar SHALL display the logo "Lingo" and 6 navigation
  links: Home, Courses, Instructors, Events, Blog, Contact
- **AND** a search icon button SHALL be visible

#### Scenario: Mobile hamburger menu toggles

- **GIVEN** the Lingo app is rendered on a mobile viewport
- **WHEN** the user clicks the hamburger menu button
- **THEN** a mobile menu SHALL appear with the 6 navigation links stacked
- **WHEN** the user clicks a navigation link in the mobile menu
- **THEN** the mobile menu SHALL close
- **WHEN** the user clicks the hamburger button again
- **THEN** the mobile menu SHALL close

### Requirement: Hero section

The system SHALL render a dark-background hero section with a centered
headline, subtitle, and CTA button.

#### Scenario: Hero displays correctly

- **GIVEN** the Lingo app is rendered
- **THEN** a section with a dark background image SHALL be displayed
- **AND** the heading "Learn Languages Easily" SHALL be visible
- **AND** a subtitle about language learning SHALL be present
- **AND** a "Get Started" CTA button SHALL link to the courses section

### Requirement: Courses section

The system SHALL render a courses section with a 3-column grid of course
cards showing image, title, instructor, language, description, student
count, rating, and free/paid badge.

#### Scenario: Courses display 3 cards

- **GIVEN** the Lingo app is rendered
- **THEN** a section titled "Our Courses" SHALL be displayed
- **AND** 3 course cards SHALL be rendered in a responsive grid
- **AND** each card SHALL show an image, title, instructor name, language
  tag, description, student count, and star rating
- **AND** free courses SHALL display a golden "Free" badge
- **AND** paid courses SHALL display an indigo "Paid" badge

### Requirement: Instructors section

The system SHALL render an instructors section with a 3-column grid of
instructor cards showing circular photo, name, title, bio, and social icons.

#### Scenario: Instructors display 3 team members

- **GIVEN** the Lingo app is rendered
- **THEN** a section titled "Meet Our Team" SHALL be displayed
- **AND** 3 instructor cards SHALL be rendered
- **AND** each card SHALL show a circular photo, name, "Teacher" title,
  bio text, and social media icon links

### Requirement: Registration section

The system SHALL render a taupe-background registration section with a
form (4 fields: name, email, phone, subject) and a countdown timer area.

#### Scenario: Registration form renders all fields

- **GIVEN** the Lingo app is rendered
- **THEN** a taupe-background section titled "Courses For Free" SHALL
  be displayed
- **AND** a form with 4 input fields (Name, Email, Phone, Subject)
  SHALL be present
- **AND** a "Register Now" submit button SHALL be visible
- **AND** a countdown timer area with 4 time units SHALL be shown

#### Scenario: Registration form accepts input

- **GIVEN** the registration form is displayed
- **WHEN** the user types into the Name field
- **THEN** the field SHALL accept the typed text
- **WHEN** the user clicks "Register Now"
- **THEN** the form SHALL submit (prevent default)

### Requirement: Events section

The system SHALL render an events section with a 3-column grid of event
cards showing image, date badge (day + month), title, and category tag.

#### Scenario: Events display 3 upcoming events

- **GIVEN** the Lingo app is rendered
- **THEN** a section titled "Upcoming Events" SHALL be displayed
- **AND** 3 event cards SHALL be rendered
- **AND** each card SHALL show an image, date badge with day number and
  month abbreviation, title, and category tag

### Requirement: Blog section

The system SHALL render a blog section with a split layout: left side
has 6 category cards, right side has a featured post.

#### Scenario: Blog displays categories and featured post

- **GIVEN** the Lingo app is rendered
- **THEN** a section titled "From Our Blog" SHALL be displayed on the
  left side
- **AND** 6 blog category cards SHALL be shown (Travel Tips, Language
  Hacks, Cultures, Fashion, Cooking, Hobbies)
- **AND** a featured blog post with image, "Languages" category tag,
  title, and description SHALL be shown on the right side

### Requirement: Footer

The system SHALL render a dark footer with newsletter subscribe, 3 columns
(About Us, Help & Support, Privacy & Terms), social icons, and a copyright
bar linking to Component Dock.

#### Scenario: Footer renders all elements

- **GIVEN** the Lingo app is rendered
- **THEN** a dark footer SHALL be displayed
- **AND** a newsletter subscribe input with submit button SHALL be present
- **AND** columns for About Us, Help & Support, and Privacy & Terms
  SHALL be shown with link lists
- **AND** social media icon links (Facebook, Twitter, Instagram) SHALL
  be present
- **AND** a copyright bar SHALL be at the bottom
- **AND** the footer SHALL contain a link to https://www.componentdock.com/
  branded as "Component Dock"

### Requirement: Responsive layout

The system SHALL be responsive across desktop and mobile viewports.

#### Scenario: Mobile responsive behavior

- **GIVEN** the Lingo app is rendered on a 375px viewport
- **THEN** the hamburger menu icon SHALL be visible
- **AND** course cards SHALL stack vertically
- **AND** instructor cards SHALL stack vertically
- **AND** event cards SHALL stack vertically
- **AND** the blog section SHALL stack vertically

### Requirement: Design tokens

The system SHALL use the extracted design tokens from the original template.

#### Scenario: Brand colors match source

- **GIVEN** the Lingo app is rendered
- **THEN** the primary brand color SHALL be deep indigo `#2e21df`
- **AND** the secondary brand color SHALL be warm taupe `#937c6f`
- **AND** the accent color SHALL be golden yellow `#f9cf0e`
- **AND** the dark background SHALL be `#252525`
- **AND** the light background SHALL be `#f1f1f1`
- **AND** the primary font SHALL be Poppins
- **AND** the secondary font SHALL be Montserrat

### Requirement: No ColorLib references in app code

The system SHALL NOT contain any references to ColorLib in application
source files, comments, or data.

#### Scenario: No colorlib strings in apps

- **GIVEN** the lingo app source code
- **THEN** no file under apps/lingo/ SHALL contain the string "colorlib"
  or "ColorLib" in any form (including comments)

### Requirement: Component Dock footer link

The system SHALL link to https://www.componentdock.com/ in the footer,
branded as "Component Dock".

#### Scenario: Footer links to Component Dock

- **GIVEN** the Lingo app is rendered
- **THEN** the footer SHALL contain a link with href
  "https://www.componentdock.com/" and text "Component Dock"
- **AND** the link SHALL open in a new tab (target="_blank")

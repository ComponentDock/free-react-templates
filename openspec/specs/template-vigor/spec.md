# Template: Vigor (Crossfit Gym Landing)

## Purpose

Vigor is a single-page fitness/crossfit gym template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Endurance" free
template (source: https://colorlib.com/wp/template/endurance/), built under a
DIFFERENT name (**Vigor**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Design tokens captured from the original:

- Brand primary: `#fcd307` (yellow CTA buttons)
- Brand secondary: `#fd5f00` (orange)
- Dark sections: `#1a1a2e` / `#111` with black 50% overlays
- Light sections: `#f8f9fa`
- Typeface: Roboto (Google Fonts via `<link>`)
- Rounded CTA buttons with yellow bg, transparent on hover with yellow border
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Vigor lives in `apps/vigor` and uses shared components from `packages/ui`.

## Requirements

### Requirement: Navigation bar

The system SHALL render a dark navbar with the brand name "Vigor" flanked by
decorative bars, and navigation links (Home, About, Programs, Trainers, Pricing,
Blog, Contact). The navbar SHALL include a hamburger toggle that opens a mobile
menu on small screens.

#### Scenario: Brand name is visible

Given I visit the Vigor page
Then I see the brand name "Vigor" in the navigation bar

#### Scenario: Navigation links are present

Given I visit the Vigor page
Then the navbar contains links for Home, About, Programs, Trainers, Pricing, Blog, Contact

#### Scenario: Mobile menu toggle

Given I visit the Vigor page on mobile
When I click the menu toggle button
Then the navigation menu expands
And I can see the navigation links

### Requirement: Hero section

The system SHALL render a full-height hero section with two slides. Each slide
SHALL have a background image, a dark overlay (black 50% opacity), a large
uppercase heading, and a subheading. The first slide reads "Crossfit is for
Everyone" and the second reads "Crossfit Gym".

#### Scenario: Hero headings are visible

Given I visit the Vigor page
Then I see the hero heading "Crossfit is for"
And I see the highlighted text "Everyone"
And I see the subheading "Shape your body"

### Requirement: About section

The system SHALL render a split-layout about section with a video placeholder
image on the left (with a play button), thumbnail images below, and text content
on the right including the heading "Welcome to Vigor Crossfit Gym" and a "Join
us" CTA button.

#### Scenario: About heading is visible

Given I visit the Vigor page
Then I see "Welcome to Vigor Crossfit Gym"

#### Scenario: Join us button exists

Given I visit the Vigor page
Then I see a "Join us" button

### Requirement: Services section

The system SHALL render a services section on a light background with a centered
heading "Kick your feet up" and four service cards (Analyze Your Goal, Work Hard
On It, Improve Your Performance, Achieve Your Perfect Body) each with an icon
and description.

#### Scenario: All four services are displayed

Given I visit the Vigor page
Then I see service cards for "Analyze Your Goal", "Work Hard On It",
"Improve Your Performance", and "Achieve Your Perfect Body"

### Requirement: Gym Classes section

The system SHALL render a dark-background gym classes section with heading "What
You Get From Vigor Membership" and five class cards (Muscle Sculpt, Fat Burn,
Cycling, Pilates & Stretching, Boxing).

#### Scenario: All five classes are displayed

Given I visit the Vigor page
Then I see class cards for "Muscle Sculpt", "Fat Burn", "Cycling",
"Pilates & Stretching", and "Boxing"

### Requirement: Pricing section

The system SHALL render a pricing section on a light background with heading
"Membership Plans" and three pricing tiers (One Day Training, Pay Every Month,
1 Year Membership) each with a price, feature list, and "Get Started" CTA.

#### Scenario: Three pricing tiers are shown

Given I visit the Vigor page
Then I see pricing plans for "One Day Training", "Pay Every Month", and "1 Year Membership"
And each plan has a "Get Started" button

### Requirement: Testimonies section

The system SHALL render a testimonies section with heading "Successful Stories"
and three customer testimonials with quotes, names, roles, and profile images.

#### Scenario: Testimonials are displayed

Given I visit the Vigor page
Then I see testimonials from "Gabby Smith", "John Doe", and "Jane Wilson"

### Requirement: Appointment section

The system SHALL render a dark-background appointment section with heading "Book
Your Session" and a form with fields for name, email, date, time, and message.
On submit, it SHALL show a thank-you message.

#### Scenario: Form submits successfully

Given I visit the Vigor page
When I fill in the name, email, and message fields
And I click "Send Message"
Then I see a thank-you message

### Requirement: Blog section

The system SHALL render a blog section on a light background with heading
"Latest Articles" and three blog post cards with images, titles, dates, authors,
and comment counts.

#### Scenario: Three blog posts are shown

Given I visit the Vigor page
Then I see three blog post cards

### Requirement: Counter section

The system SHALL render a counter section with a dark background image overlay
and four statistics: Trainers (1,200), Members (8,500), Programs (45), Awards
(120).

#### Scenario: Stats are displayed

Given I visit the Vigor page
Then I see statistics for Trainers, Members, Programs, and Awards

### Requirement: Footer

The system SHALL render a dark footer with four columns: About Us (with social
icons), Services (links), Contact info (address, phone, email), and a "More
Templates" section linking to Component Dock. The footer bottom SHALL include a
copyright line with a link to https://www.componentdock.com/.

#### Scenario: Component Dock link is present

Given I visit the Vigor page
Then the footer contains a link to https://www.componentdock.com/
And the link text reads "More templates at Component Dock"

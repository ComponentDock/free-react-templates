# Template: Assembly (Conference / Event)

## Purpose

Recreation of ColorLib "Convention" template.
- Source: https://colorlib.com/wp/template/convention/
- Preview: https://preview.colorlib.com/theme/convention/
- Stack: React 19, Vite, Tailwind CSS 4, TypeScript
- New name: `assembly` (apps/assembly, @free-react-templates/assembly)

## Design tokens (extracted from preview stylesheet)

- Fonts: "Barlow" (body), "Barlow Condensed" (headings, subheadings) via Google Fonts
- Primary blue: #007bff (buttons, links)
- Purple accent: #423ead (team section overlay top half)
- Pink/magenta: #ed03be (focus ring accents)
- Dark surfaces: #232429, #1e1f23, #141b25, #000
- Light section bg: #f8f9fa (bg-light), #f4f5f9
- Gray text: #6c757d (secondary), #495057, #212529 (primary text)
- Border radius: 0.25rem default (Bootstrap), 30px for specific pill shapes
- Buttons: rounded 0.25rem, blue bg, white text, hover darken
- Navbar: dark bg (#232429), white text, transparent on scroll

## Gherkin requirements

### Scenario: Top bar displays contact info and CTA
Given the page loads
Then a top bar shows phone number and email
And social media icons (Facebook, Twitter, Instagram, Dribbble) appear
And a "Buy Ticket" button is visible

### Scenario: Navbar navigation
Given the page loads
Then a dark navbar displays "Assembly" as brand
And nav links: Home, About, Pricing, Schedule, Speakers, Blog, Contact
And the navbar is responsive with a hamburger toggle

### Scenario: Hero section with countdown
Given the page loads
Then a full-width hero with background image and dark overlay appears
And heading reads "Biggest Developer Conference 2021"
And location and date are shown below the heading
And a countdown timer displays days, hours, minutes, seconds

### Scenario: About section
Given the hero section is visible
Then an about section shows an image on the left
And "Welcome to Convention" subheading with description text on the right
And a "Year Established" stat badge with calendar icon

### Scenario: Counter stats
Given the about section is visible
Then a parallax counter section shows 4 stat blocks
And stats include: Places (301), Events (102), Photos (1050), Speakers (61)
And each stat has an icon and animated number

### Scenario: Schedule section with day tabs
Given the counter section is visible
Then a schedule section with light background appears
And 4 day tabs (Day 01-04) control visible content
And each day shows 3 session cards with speaker image, time, title, description, speaker name and position

### Scenario: Speakers section
Given the schedule section is visible
Then a speakers section with purple overlay header appears
And 5 speaker cards show staff image, name, position, and social icons on hover

### Scenario: Gallery section
Given the speakers section is visible
Then an 8-image gallery grid (4x2) displays event photos
And clicking an image opens a lightbox popup

### Scenario: Testimonials carousel
Given the gallery section is visible
Then a testimonials section with light background appears
And a carousel shows quote text, star rating, user image, name, and position

### Scenario: Blog section
Given the testimonials section is visible
Then 3 blog cards show featured image, date, author, comment count, title, and excerpt

### Scenario: Registration CTA
Given the blog section is visible
Then a CTA section with background image displays "Book Your Tickets Now"
And a registration form with First Name, Last Name, Phone, Price select, and Register Now button

### Scenario: Footer
Given the registration section is visible
Then a footer shows 5 columns: logo+social, Explore links, Info links, Buy Ticket CTA, Contact info
And a black copyright bar at the bottom replaces Colorlib attribution with Component Dock link

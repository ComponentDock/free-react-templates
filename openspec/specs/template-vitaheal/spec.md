# Spec: Vitaheal (Medical & Healthcare Center)

## Purpose

Recreation of ColorLib **Health** (`https://colorlib.com/wp/template/health/`, preview: `https://preview.colorlib.com/theme/health/`). A full-width medical/healthcare landing page with hero, service info boxes, appointment booking, CTA banner, services grid, departments carousel, FAQ accordion, latest news, and a comprehensive footer. Built with React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens (extracted from preview)

| Token         | Value                     | Usage                                 |
| ------------- | ------------------------- | ------------------------------------- |
| Primary green | `#32c69a`                 | Buttons, nav active, links, selection |
| Coral accent  | `#ffa07f` / `#FF6347`     | Button hover, link hover borders      |
| Body text     | `#a5a5a5` / `#929191`     | Paragraphs, muted text                |
| Heading text  | `#404040` / `#4c4c4c`     | Headings, titles                      |
| Background    | `#FFFFFF`                 | Page background                       |
| Font family   | Montserrat (Google Fonts) | All text                              |
| Light band    | `#f9f9ff`                 | Section alternating backgrounds       |

## Sections (in order)

1. **Header** — Top bar with logo "health+" (we use "Vitaheal+"), links (Help Desk, Emergency Services, Appointment), phone number. Main nav: Home, About Us, Services, News, Contact + search icon.
2. **Hero** — Full-width background image overlay, headline "Medical Services that you can trust", description text, "Read More" CTA button.
3. **Info Boxes** — 3-column row: Free Consultations (image + text + link), Emergency Care (image + text + link), Make an Appointment (form with Department/Doctor selects, Name, Phone, submit button).
4. **CTA Banner** — Parallax background, "Make an appointment with one of our professional Doctors." headline, subtitle, "Call Now" CTA button.
5. **Services** — "Our Services" heading, 6 icon boxes in 3-col grid (Cardiology, Gastroenterology, Medical Lab, Dental Care, Surgery, Neurology) + "Read More" button.
6. **Departments** — "Our Departments" heading, horizontal scrollable cards (Neonatology, Dentistry, Orthopedics, Laboratory) with images and "Read More" links.
7. **FAQ & News** — Left column (7-col): FAQ accordion with 3 items. Right column (5-col): Latest News with 3 blog post previews.
8. **Footer** — 4-column: About (logo, description, social icons), Quick Contact (form), Opening Hours (schedule list). Bottom bar with nav links + phone + "Made with Component Dock" credit.

## Requirements

### Requirement: Header displays navigation and contact info

Users SHALL see a top bar with the Vitaheal+ logo, quick links (Help Desk, Emergency Services, Appointment), and a phone number. Below, a sticky nav bar with Home, About Us, Services, News, Contact links and a search icon.

#### Scenario: Top bar renders all elements

- GIVEN the page loads
- WHEN the header renders
- THEN the logo "Vitaheal+" is visible
- AND the quick links "Help Desk", "Emergency Services", "Appointment" are present
- AND the phone number "+34 586 778 8892" is displayed

#### Scenario: Main navigation renders all links

- GIVEN the header renders
- WHEN the user views the main navigation
- THEN links for Home, About Us, Services, News, Contact are present
- AND a search icon button is visible

### Requirement: Hero section with headline and CTA

Users SHALL see a full-width hero with a background image overlay, a headline "Medical Services that you can trust", descriptive text, and a "Read More" call-to-action button.

#### Scenario: Hero renders headline and CTA

- GIVEN the page loads
- WHEN the hero section renders
- THEN the heading "Medical Services that you can trust" is visible
- AND the "Read More" button links to the services section

### Requirement: Info boxes with consultation, emergency, and appointment

Users SHALL see three info boxes: Free Consultations (image + text + link), Emergency Care (image + text + link), and Make an Appointment (form with Department, Doctor selects, Name input, Phone input, and submit button).

#### Scenario: Info boxes render all three cards

- GIVEN the page loads
- WHEN the info section renders
- THEN "Free Consultations" heading is visible
- AND "Emergency Care" heading is visible
- AND "Make an Appointment" heading is visible

#### Scenario: Appointment form has required fields

- GIVEN the appointment form renders
- WHEN the user views the form
- THEN a Department select is present
- AND a Doctor select is present
- AND a Name text input is present
- AND a Phone text input is present
- AND a "Make an Appointment" submit button is present

### Requirement: CTA banner with appointment prompt

Users SHALL see a parallax-background CTA section with "Make an appointment with one of our professional Doctors." headline and a "Call Now" button.

#### Scenario: CTA renders headline and button

- GIVEN the page loads
- WHEN the CTA section renders
- THEN the headline about making an appointment is visible
- AND the "Call Now" button is present

### Requirement: Services section with 6 service icons

Users SHALL see a "Our Services" section with 6 service items in a 3-column grid: Cardiology, Gastroenterology, Medical Lab, Dental Care, Surgery, Neurology — each with an icon, title, and description.

#### Scenario: All 6 services render

- GIVEN the page loads
- WHEN the services section renders
- THEN 6 service items are visible
- AND each has a title and description
- AND a "Read More" button is at the bottom

### Requirement: Departments carousel

Users SHALL see an "Our Departments" section with horizontally scrollable department cards (Neonatology, Dentistry, Orthopedics, Laboratory), each with an image and "Read More" link.

#### Scenario: Departments render with images

- GIVEN the page loads
- WHEN the departments section renders
- THEN 4 department cards are visible
- AND each has a title and a "Read More" link

### Requirement: FAQ accordion and Latest News

Users SHALL see a FAQ section with 3 expandable accordion items on the left, and a Latest News section with 3 blog post previews on the right.

#### Scenario: FAQ accordion toggles

- GIVEN the FAQ section renders
- WHEN the user clicks an accordion header
- THEN the corresponding answer panel toggles visibility

#### Scenario: Latest News shows 3 posts

- GIVEN the page loads
- WHEN the news section renders
- THEN 3 blog post previews are visible
- AND each has a title, author, date, and comment count

### Requirement: Footer with about, contact form, hours, and bottom bar

Users SHALL see a footer with: about section (logo, description, social icons), quick contact form (Name, Email, Message, Send button), opening hours schedule, and a bottom bar with nav links, quick links, phone number, and "Made with Component Dock" credit linking to https://www.componentdock.com/.

#### Scenario: Footer renders all columns

- GIVEN the page loads
- WHEN the footer renders
- THEN the Vitaheal+ logo is in the about section
- AND social media icons are present
- AND the contact form has Name, Email, Message fields and Send button
- AND opening hours are listed for Monday-Sunday

#### Scenario: Footer bottom bar has Component Dock link

- GIVEN the footer renders
- WHEN the user views the bottom bar
- THEN a link to componentdock.com with text "Component Dock" is present

## Tech Stack

- React 19 + Vite + Tailwind CSS 4 + TypeScript
- packages/ui: Button, ButtonLink, Card, cn()
- lucide-react for icons (Heart, Stethoscope, etc.)
- picsum.photos for placeholder images
- Google Fonts: Montserrat
- No external dependencies beyond existing stack

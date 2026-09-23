# Template: Tribunal (Law Firm)

## Purpose

Recreation of ColorLib **Theorder** (`https://colorlib.com/wp/template/theorder/`).
Preview URL: `https://preview.colorlib.com/theme/theorder/`.
Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript (strict).
New name: **Tribunal** (`apps/tribunal`, `@free-react-templates/tribunal`).

## Design Tokens

- **Font:** Rubik (Google Fonts), weights 300–700.
- **Brand Accent:** Orange `#F96D00`.
- **Dark Backgrounds:** Navbar/Hero `#212529`, Footer `#1a1a2e`.
- **Section Backgrounds:** White `#ffffff`, Light gray `#f8f9fa`.
- **Body Text:** `#333333`, Muted `#6c757d`.
- **Heading Color:** `#1a1a2e` (dark).

## Requirements

### Requirement: Header displays brand and navigation

The header shall display the brand name "Tribunal" with a scale icon, and navigation links for Home, Practice Areas, Won Cases, Blog, About, and Contact. It shall be sticky and responsive with a hamburger menu on mobile.

#### Scenario: User views the navigation bar

- **GIVEN** the Tribunal application is loaded
- **THEN** the navbar displays the brand "Tribunal"
- **AND** navigation links for Home, Practice Areas, Won Cases, Blog, About, and Contact are visible

#### Scenario: User toggles mobile menu

- **GIVEN** the page is loaded on a mobile viewport
- **WHEN** the user clicks the hamburger menu button
- **THEN** the mobile navigation menu opens
- **AND** the button label changes to "Close menu"

### Requirement: Hero section displays law firm headline

The hero section shall display a full-height background image with dark overlay, the heading "The Greatest Law Firm You Can Trust", descriptive subtext, and a "Read More" button linking to the practice areas section.

#### Scenario: User views the hero section

- **GIVEN** the Tribunal application is loaded
- **THEN** the hero section displays the heading "The Greatest Law Firm You Can Trust"
- **AND** a descriptive subtext paragraph is visible
- **AND** a "Read More" button is displayed

### Requirement: Stats counter displays firm metrics

The stats counter shall display 4 metric items: 1,000 Qualified Lawyers, 12,000 Trusted Clients, 10,000 Won Cases, and 12,921 Honors & Awards, each with an associated icon.

#### Scenario: Stats are displayed correctly

- **GIVEN** the StatsCounter section is visible
- **THEN** the count "1,000" is displayed with label "Qualified Lawyers"
- **AND** the count "12,000" is displayed with label "Trusted Clients"
- **AND** the count "10,000" is displayed with label "Won Cases"
- **AND** the count "12,921" is displayed with label "Honors & Awards"

### Requirement: About section displays firm history

The about section shall display a placeholder image with a play button overlay on the left, and the heading "Founded in 1856, Our Agency has over 175 lawyers" with two descriptive paragraphs on the right.

#### Scenario: About section renders correctly

- **GIVEN** the About section is visible
- **THEN** the heading "Founded in 1856, Our Agency has over 175 lawyers" is displayed
- **AND** two paragraphs of descriptive text are present
- **AND** a placeholder image is displayed

### Requirement: Practice areas section displays 6 service cards

The practice areas section shall display 6 cards in a 3×2 grid, each with an icon, title, and description. The areas are: Case Investigation, Personal Injury, Legal Counseling, Civil Litigation, Business Law, and Insurance Defense.

#### Scenario: All practice areas are listed

- **GIVEN** the Practice Areas section is visible
- **THEN** the heading "What We Do" is displayed
- **AND** cards for "Case Investigation", "Personal Injury", "Legal Counseling", "Civil Litigation", "Business Law", and "Insurance Defense" are present

### Requirement: Testimonials section displays client quotes

The testimonials section shall display a background image with dark overlay, the heading "Testimonials", and 3 testimonial cards each with a quote, author name, and author role.

#### Scenario: Testimonials render correctly

- **GIVEN** the Testimonials section is visible
- **THEN** the heading "Testimonials" is displayed
- **AND** 3 testimonial cards are rendered with quotes and author information

### Requirement: Team section displays attorney profiles

The team section shall display 3 attorney cards, each with a name, role, and photo placeholder. The attorneys are: Myla Smith (Counsel), Aldin Powell (Head of International Practice), and Clarice Clark (Managing Partner, Attorney).

#### Scenario: Attorney cards are displayed

- **GIVEN** the Team section is visible
- **THEN** the heading "Our Attorneys" is displayed
- **AND** Myla Smith is listed with title "Counsel"
- **AND** Aldin Powell is listed with title "Head of International Practice"
- **AND** Clarice Clark is listed with title "Managing Partner, Attorney"

### Requirement: Contact form captures user inquiry

The contact form shall display the heading "Free Legal Consultation" and fields for Name, Email, Subject, and Message, plus a "Send Message" button. Submitting with all fields filled shows a thank-you confirmation.

#### Scenario: Form renders all fields

- **GIVEN** the Contact Form section is visible
- **THEN** the heading "Free Legal Consultation" is displayed
- **AND** input fields for Name, Email, Subject, and Message are present

#### Scenario: Successful form submission

- **GIVEN** the Contact Form section is visible
- **WHEN** the user fills all required fields and clicks "Send Message"
- **THEN** a thank-you confirmation message is displayed
- **AND** the form fields are hidden

### Requirement: Blog section displays article previews

The blog section shall display 3 blog cards, each with a featured image, date, title, and author/comment metadata.

#### Scenario: Blog cards are displayed

- **GIVEN** the Blog section is visible
- **THEN** the heading "Our Blog" is displayed
- **AND** 3 blog cards are rendered with titles, dates, and images

### Requirement: Footer displays site links and Component Dock attribution

The footer shall display 4 columns: About Tribunal (links), Communities (links), Contact Information (address, phone, email), Opening Hours. It shall include a copyright line and a link to Component Dock.

#### Scenario: Footer renders all columns

- **GIVEN** the page footer is rendered
- **THEN** "About Tribunal" column with navigation links is visible
- **AND** "Communities" column is visible
- **AND** "Contact Information" with address, phone, and email is visible
- **AND** "Opening Hours" with schedule is visible

#### Scenario: Footer contains Component Dock attribution

- **GIVEN** the page footer is rendered
- **THEN** it contains a link to `https://www.componentdock.com/` with text "Component Dock"

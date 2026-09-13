# Template: JobVane (Job Board / Recruitment)

## Purpose

Recreation of ColorLib's **Jobpply** template
(preview: https://preview.colorlib.com/theme/jobpply/).

JobVane is a job board / recruitment marketplace single-page website with a
blue hero feature bar, category browsing, job listings, recruitment agencies,
testimonials, candidate profiles, newsletter subscription, and a dark footer.
Built with React 19, Vite, Tailwind CSS 4, and TypeScript.

Source slug: `jobpply`
Preview URL: https://preview.colorlib.com/theme/jobpply/

## Design tokens

Extracted from the ColorLib preview stylesheet (`css/style.css`):

| Token            | Value                            | Notes                                                                 |
| ---------------- | -------------------------------- | --------------------------------------------------------------------- |
| Brand primary    | `#007bff`                        | Bootstrap blue, used on `.bg-primary`, `.btn-primary`                 |
| Accent / CTA     | `#6c63ff`                        | Vibrant violet-purple, used on navbar CTA button, parallax section bg |
| CTA colored bg   | `#6c63ff`                        | Navbar "Want a Job" button background                                 |
| Text primary     | `#212529`                        | Near-black body text                                                  |
| Body background  | `#fff`                           | White                                                                 |
| Light section bg | `#f8f9fa`                        | Off-white for alternating sections                                    |
| Dark footer bg   | `#343a40`                        | Dark gray for footer (`.ftco-bg-dark`)                                |
| Font family      | `Nunito Sans`, Arial, sans-serif | Google Font — rounded sans-serif                                      |
| Icons            | lucide-react in React version    |
| Button radius    | `0.25rem` (Bootstrap default)    | Standard rounded corners                                              |
| Section padding  | `4rem 0` (`.ftco-section`)       | Consistent vertical rhythm                                            |

## Requirements

### Requirement: Navigation bar

The navbar SHALL display the brand text "JobVane", navigation links (Home, About, Candidates, Blog, Contact), and two CTA buttons (Post a Job, Want a Job).

#### Scenario: Navbar renders with brand and links

- **WHEN** the page loads
- **THEN** the navbar displays "JobVane" as brand text
- **AND** navigation links include "Home", "About", "Candidates", "Blog", "Contact"
- **AND** two CTA buttons are visible: "Post a Job" and "Want a Job"

#### Scenario: Navbar becomes opaque on scroll

- **WHEN** the page is scrolled past the hero
- **THEN** the navbar background changes from transparent to white

#### Scenario: Mobile hamburger toggle

- **WHEN** the viewport is mobile width and the hamburger button is clicked
- **THEN** the mobile nav toggles open/closed

### Requirement: Feature highlight bar

The feature bar SHALL display 4 feature cards on a blue (#007bff) background.

#### Scenario: Four features render

- **WHEN** the feature bar is visible
- **THEN** 4 feature cards are displayed on a blue background
- **AND** each card has an icon, heading, and description
- **AND** headings are "Search Millions of Jobs", "Easy To Manage Jobs", "Top Careers", "Search Expert Candidates"

### Requirement: Job categories

The categories section SHALL display category cards with open position counts.

#### Scenario: Categories render with counts

- **WHEN** the categories section is visible
- **THEN** the heading reads "Top Categories"
- **AND** 4 category items are displayed in a grid
- **AND** each category shows a name and open position count

### Requirement: Specialism search

The specialism section SHALL display a background image with an overlay and heading.

#### Scenario: Specialism section renders

- **WHEN** the specialism section is visible
- **THEN** the heading reads "Browse Job by Specialism"
- **AND** a background image with overlay is displayed
- **AND** descriptive text is shown below the heading

### Requirement: Job listings

The hot jobs section SHALL display job listing cards and a sidebar with recruitment agencies.

#### Scenario: Job cards render

- **WHEN** the Hot Jobs section is visible
- **THEN** the heading reads "Hot Jobs"
- **AND** job listing cards are displayed with title, type badge, location, and company

#### Scenario: Sidebar shows recruitment agencies

- **WHEN** the Hot Jobs section is visible
- **THEN** a sidebar displays "Top Recruitments"
- **AND** agency cards show company image, name, and open positions count

### Requirement: Client testimonials

The testimonials section SHALL display a carousel of testimonial cards.

#### Scenario: Testimonial carousel renders

- **WHEN** the testimonials section is visible
- **THEN** the heading reads "Happy Clients"
- **AND** testimonial cards show a user photo, quote, name, and star rating
- **AND** the carousel advances through testimonials

### Requirement: Candidate profiles

The candidates section SHALL display candidate profile cards on a blue background.

#### Scenario: Candidate carousel renders

- **WHEN** the candidates section is visible
- **THEN** the heading reads "Latest Candidates"
- **AND** candidate cards show a photo, name, and location
- **AND** the section has a blue (#007bff) background

### Requirement: Newsletter subscription

The newsletter section SHALL display an email input and subscribe button on a purple background.

#### Scenario: Newsletter form renders

- **WHEN** the newsletter section is visible
- **THEN** the heading reads "Subscribe to our Newsletter"
- **AND** an email input field and subscribe button are displayed
- **AND** the section has a purple (#6c63ff) background

### Requirement: Footer

The footer SHALL display 4 columns with social icons, employer links, worker links, and contact info, and MUST link to Component Dock.

#### Scenario: Footer renders with columns

- **WHEN** the footer is visible
- **THEN** it displays 4 columns: About + social, Employers links, Workers links, Contact info
- **AND** social icons include Facebook, Twitter, Instagram
- **AND** contact info shows address, phone, and email

#### Scenario: Footer links to Component Dock

- **WHEN** the footer is visible
- **THEN** a link to "https://www.componentdock.com/" is present
- **AND** the link text mentions "Component Dock"

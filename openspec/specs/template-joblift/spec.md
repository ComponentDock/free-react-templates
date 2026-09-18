# Template: Joblift (Directory / Job Portal)

## Purpose

Recreation of ColorLib's "Comport" template as a React 19 + Vite + Tailwind 4 + TypeScript job portal / directory website.

- **Source**: ColorLib "Comport" — https://colorlib.com/wp/template/comport/
- **Preview**: https://preview.colorlib.com/theme/comport/
- **Stack**: Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category**: Directory / Job Portal

## Design tokens

Extracted from the live preview's stylesheets (`assets/css/style.css`).

### Fonts

| Role               | Font family          | Weights           |
| ------------------ | -------------------- | ----------------- |
| Headings / Display | Poppins, sans-serif  | 500, 600, 700    |
| Body / UI          | Open Sans, sans-serif| 400, 600          |

Use Google Fonts `<link>` for Poppins and Open Sans.

### Colors

| Token               | Hex / Value           | Usage                                         |
| ------------------- | --------------------- | --------------------------------------------- |
| primary accent      | `#ff9902`             | Brand orange — buttons, highlights, spinner    |
| text primary        | `#222`                | Headings, body text, menu links                |
| text muted          | `#777`                | Body text, captions, secondary content         |
| background          | `#FFFFFF` (white)     | Main page background                           |
| light section bg    | `#f9f9f9`             | Feature cards, category cards, job rows, search bg, newsletter bg, footer widget bg |
| search/form bg      | `#ff9902`             | Search bar background (orange)                 |
| feature card bg     | `#f9f9f9`             | Feature area cards (gray), hover → white       |
| category card bg    | `#f9f9f9`             | Category grid cards, border `#eee`             |
| job row bg          | `#f9f9f9`             | Job listing rows, hover → white                |
| job type badges     | `#00afed` (blue), `#cc2229` (red), `#0088cc` (teal), `#2dc100` (green) | Job type tag colors |
| footer bg           | `#04091e`             | Very dark navy footer background               |
| footer text         | `#FFFFFF`             | Footer headings, links                         |
| overlay (newsletter)| `rgba(1,2,12,0.6)`   | Dark overlay on newsletter bg image             |
| download btn hover  | `#ff9902`             | Download area button hover accent              |
| social icon hover bg| `#ff9902`             | Footer social icon circle on hover             |

### Border radius

| Element                | Radius        |
| ---------------------- | ------------- |
| Buttons (template-btn) | `3px`         |
| Search input           | `5px`         |
| Category/job cards     | none          |
| News image cards       | `5px`         |
| Search form            | none (rectangular orange bar) |

## Requirements

### Requirement: Navbar

The system SHALL render a top navbar with the brand "Joblift", navigation links (Home, About Us, Category, Blog, Contact, Pages), and Log In / Sign Up buttons. The navbar SHALL be white with dark text. On mobile, a hamburger toggle (orange background `#ff9902`) SHALL show/hide the collapsible nav.

#### Scenario: Desktop navbar content
- **GIVEN** the page is loaded on a desktop viewport
- **THEN** the navbar SHALL display the brand "Joblift" with a logo icon
- **AND** show navigation links: Home, About Us, Category, Blog, Contact, Pages
- **AND** show Log In and Sign Up buttons on the right

#### Scenario: Mobile menu toggle
- **GIVEN** the page is rendered on a mobile viewport
- **WHEN** the user taps the hamburger toggle (orange `#ff9902` background)
- **THEN** the mobile menu SHALL open showing all nav links
- **AND** the toggle icon SHALL change state (3 bars to X)

### Requirement: Hero section

The system SHALL render a split hero: left half is a background image of professionals in an office, right half is white with the heading "FIND YOUR DREAM **JOB** WITH COMPORT" (the word "JOB" in accent orange `#ff9902`), descriptive paragraph text, and an "EXPLORE NOW →" secondary link.

#### Scenario: Hero content
- **GIVEN** the page is loaded on desktop
- **THEN** the hero SHALL display a split layout (image left, text right)
- **AND** the heading SHALL contain "FIND YOUR DREAM" on line 1, "JOB" (orange) on line 2, "WITH COMPORT" on line 3
- **AND** a paragraph of descriptive text below the heading
- **AND** an "EXPLORE NOW →" link (secondary button style, uppercase)

#### Scenario: Hero responsive
- **GIVEN** the page is rendered on a mobile viewport
- **THEN** the hero SHALL stack vertically (image on top, text below)
- **AND** the heading font size SHALL scale down

### Requirement: Search bar

The system SHALL render a search form bar overlapping the bottom of the hero section, with an orange `#ff9902` background. The form SHALL contain two dropdowns ("All Category", "Select Location"), a text input ("Search Keyword"), and a "FIND JOB" button (dark background `#111`).

#### Scenario: Search form content
- **GIVEN** the search bar is visible
- **THEN** the form SHALL have two select dropdowns and one text input
- **AND** the "FIND JOB" button SHALL be dark background (`#111`) with white text

#### Scenario: Search form layout
- **GIVEN** the search bar is visible
- **THEN** the form elements SHALL be laid out horizontally (flexbox)
- **AND** on mobile, the form SHALL stack vertically

### Requirement: Features section

The system SHALL render a 3-column feature area with light gray `#f9f9f9` cards. Each card SHALL have a heading (e.g. "UX/UI Designer", "Web Designer", "Accounting and Finance"), a short description, and an "EXPLORE NOW →" secondary link. Cards SHALL have a hover shadow effect.

#### Scenario: Feature cards
- **GIVEN** the features section is visible
- **THEN** three feature cards SHALL be displayed in a 3-column grid
- **AND** each card SHALL have a title, description text, and "EXPLORE NOW →" link
- **AND** cards SHALL have gray background `#f9f9f9` with hover → white + shadow

### Requirement: Categories section

The system SHALL render a "Find job by category" section with a centered heading and an 8-card grid (2 rows × 4 columns). Each category card SHALL have an icon/image, a category name, and "250 open job" count. Cards SHALL have a light gray background with a subtle border.

#### Scenario: Category grid
- **GIVEN** the categories section is visible
- **THEN** the heading "Find job by category" SHALL be centered
- **AND** 8 category cards SHALL be displayed in a 4-column grid
- **AND** each card SHALL show an icon, category name, and job count

#### Scenario: Category hover
- **GIVEN** the user hovers over a category card
- **THEN** the card SHALL transition to white background with a shadow effect
- **AND** the border SHALL become transparent

### Requirement: Browse Jobs section

The system SHALL render a "Browse recent jobs" section with tabbed filtering (Recent, Full Time, Part Time, Intern). Each job row SHALL display a job title, location, category, deadline, a job image, and two buttons ("full time" type badge and "apply" button). Jobs SHALL be in light gray rows with hover shadow.

#### Scenario: Job tabs
- **GIVEN** the jobs section is visible
- **THEN** four tabs SHALL be rendered: Recent, Full Time, Part Time, Intern
- **AND** the "Recent" tab SHALL be active by default
- **AND** clicking a tab SHALL switch the visible job list

#### Scenario: Job row layout
- **GIVEN** the Recent tab is active
- **THEN** multiple job rows SHALL be displayed vertically
- **AND** each row SHALL have job title, location info (icon + text), category (icon + text), deadline (icon + text), a job image, and two action buttons
- **AND** rows SHALL have gray background `#f9f9f9` with hover → white + shadow

### Requirement: Newsletter section

The system SHALL render a newsletter section with a background image, dark overlay `rgba(1,2,12,0.6)`, white heading "Get job information daily", subtitle, an email input, and a "SUBSCRIBE NOW" orange button.

#### Scenario: Newsletter content
- **GIVEN** the newsletter section is visible
- **THEN** the heading "Get job information daily" SHALL be displayed in white
- **AND** an email input and "SUBSCRIBE NOW" button SHALL be centered
- **AND** the background SHALL be a dark image with overlay

### Requirement: Employee / Testimonials section

The system SHALL render a "Happy employee" section with a carousel of testimonial slides. Each slide SHALL have an employee photo (left, with hover overlay revealing name/company) and a quote with a quotation mark icon (right).

#### Scenario: Testimonial content
- **GIVEN** the employee section is visible
- **THEN** at least 2 testimonial slides SHALL be rendered
- **AND** each slide SHALL have a photo on the left and a quote on the right
- **AND** hovering the photo SHALL reveal name and company with orange overlay

### Requirement: Blog / News section

The system SHALL render a "Company latest news" section with 3 blog cards. Each card SHALL have a background image, date + category tags, and a linked title.

#### Scenario: Blog cards
- **GIVEN** the news section is visible
- **THEN** 3 blog cards SHALL be displayed in a 3-column grid
- **AND** each card SHALL have an image, date/category metadata, and a linked headline

### Requirement: Download App section

The system SHALL render a split download section: left side has heading "Download the app your mobile today", description, App Store and Play Store download buttons; right side has a phone mockup image.

#### Scenario: Download content
- **GIVEN** the download section is visible
- **THEN** the heading SHALL read "Download the app your mobile today"
- **AND** two download buttons SHALL be shown (App Store, Play Store)
- **AND** a phone mockup image SHALL appear on the right half

### Requirement: Footer

The system SHALL render a dark navy footer (`#04091e`) with 3 widget columns: "top products" (link list), "newsletter" (email form), "instagram feed" (8 small images). Below: copyright line with a Component Dock link, and 4 social icon circles (Facebook, Twitter, Dribbble, Behance).

#### Scenario: Footer content
- **GIVEN** the footer is visible
- **THEN** the background SHALL be dark navy `#04091e`
- **AND** the footer SHALL contain "top products", "newsletter", and "instagram feed" widgets
- **AND** the copyright line SHALL link to "https://www.componentdock.com/" branded as "Component Dock"
- **AND** 4 social icons SHALL be displayed on the right

#### Scenario: Social icon hover
- **GIVEN** the footer is visible
- **WHEN** the user hovers over a social icon
- **THEN** the icon SHALL change to white text on orange `#ff9902` background

## Verification checklist

- [ ] Spec is valid: `npm run spec:validate`
- [ ] All sections from the original template are present (Navbar, Hero, Search, Features, Categories, Jobs, Newsletter, Testimonials, Blog, Download, Footer)
- [ ] Design tokens match: orange `#ff9902`, footer navy `#04091e`, light bg `#f9f9f9`
- [ ] Fonts: Poppins (headings), Open Sans (body)
- [ ] No references to ColorLib in app code (provenance only in spec/TEMPLATES.md/PR)
- [ ] Footer links to Component Dock
- [ ] Responsive: mobile hamburger, stacked hero, stacked search
- [ ] Placeholder images via `picsum.photos/seed/...`

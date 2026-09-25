# Template: CvFolio (CV / Resume)

## Purpose

Recreation of ColorLib "Cvportfolio" — a boxed CV/portfolio/resume single-page
template with a yellow accent, profile photo, portfolio grid, and work experience.

- **ColorLib source:** https://colorlib.com/wp/template/cvportfolio/
- **Preview URL:** https://preview.colorlib.com/theme/cvportfolio/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens (from live preview CSS)

| Token             | Value                                        | Usage                                 |
| ----------------- | -------------------------------------------- | ------------------------------------- |
| Brand primary     | `#FFA804` / `#FFAD01`                        | Header bar, accent underline, links   |
| Brand secondary   | `#FFA600`                                    | `.font-yellow` class (role headings)  |
| Heading color     | `#333`                                       | Body text, h1–h6                      |
| Paragraph color   | `#777`                                       | Body copy                             |
| Muted text        | `#999` / `#666`                              | Subheadings, filter links             |
| Social icon bg    | `#887392` (purple)                           | Social icons before hover             |
| Social icon hover | `#FFA804`                                    | Social icons after hover (scale anim) |
| Font family       | Poppins (400–700)                            | Body and headings                     |
| Button radius     | 4px                                          | Download CV button                    |
| Section underline | 10px tall × 50px wide, 5px radius, `#FFA804` | Section heading accent                |
| Social icon shape | 35px circle, 20px border-radius              | Pill icons                            |
| Profile photo     | 200×200px, 100% border-radius                | Circular profile image                |
| Header background | `#FFAD01`                                    | Rounded top bar (border-radius 5px)   |
| Card bg           | `#fff`                                       | Intro card overlay on hero image      |
| Section padding   | 100px top/bottom                             | Between major sections                |

## Section structure (from live DOM)

1. **Header** — absolute-positioned top bar with 3 info columns (address, phone,
   email) and a "Download CV" button; yellow `#FFAD01` background with rounded
   corners.
2. **Intro / Profile** — centered profile photo (circle), name, job title,
   personal info list (DOB, email, marital status), social icons row.
3. **Portfolio** — section heading + filter tabs (ALL / WEB DESIGN / BRANDING /
   GRAPHIC DESIGN) + masonry-style grid of portfolio images (3 columns, some
   items span 2 stacked images).
4. **About Me** — section heading + descriptive paragraph + 4 radial progress
   bars (HTML5 & CSS3 97%, Web Design 78%, Java 67%, PHP 97%).
5. **Work Experience** — section heading + 2 experience entries each with job
   title, company, date range, description, and bullet list.
6. **Education** — section heading + education entries with degree, institution,
   graduation info.
7. **Counter / Stats** — animated number counters (if present in the full DOM).
8. **Footer** — bottom section with Component Dock link.

## Requirements

### Requirement: Header contact bar

The template SHALL display a yellow header bar with contact information and a Download CV button.

#### Scenario: Header displays contact information

- **WHEN** the page is loaded
- **THEN** a header bar is visible at the top
- **AND** the header contains address, phone, and email columns
- **AND** a "Download CV" button is visible in the header
- **AND** the header background is yellow (#FFAD01)

#### Scenario: Header is fixed above hero content

- **WHEN** the page is loaded
- **THEN** the header sits above the hero background image

### Requirement: Intro / Profile section

The template SHALL display a profile section with a circular photo, name, job title, personal info, and social icons.

#### Scenario: Profile displays name and job title

- **WHEN** the page is loaded
- **THEN** the intro section shows a circular profile photo
- **AND** a name heading is displayed
- **AND** a job title subtitle is displayed

#### Scenario: Personal info list is shown

- **WHEN** the page is loaded
- **THEN** a list of personal details (DOB, email, marital status) is visible

#### Scenario: Social icons row is interactive

- **WHEN** the page is loaded
- **THEN** 5 social icons are displayed (Pinterest, LinkedIn, Instagram, Facebook, Twitter)
- **AND** hovering an icon transitions its background to yellow (#FFA804)

### Requirement: Portfolio section

The template SHALL display a portfolio section with filter tabs and a masonry grid of images.

#### Scenario: Portfolio heading with accent underline

- **WHEN** the page is loaded
- **THEN** a "Portfolio" heading is displayed with "MY WORK" subtitle
- **AND** a yellow accent bar appears above the heading

#### Scenario: Filter tabs are rendered

- **WHEN** the page is loaded
- **THEN** filter tabs are shown: ALL, WEB DESIGN, BRANDING, GRAPHIC DESIGN
- **AND** "ALL" is the active/default filter

#### Scenario: Portfolio grid shows images

- **WHEN** the page is loaded
- **THEN** a masonry-style grid of portfolio images is displayed
- **AND** items are arranged in 3 columns
- **AND** some items show 2 stacked images side by side

### Requirement: About Me section

The template SHALL display an About Me section with a paragraph and 4 radial progress bars.

#### Scenario: About me content and skill bars

- **WHEN** the page is loaded
- **THEN** an "About me" heading is displayed with "PROFESSIONAL PATH" subtitle
- **AND** a descriptive paragraph is shown
- **AND** 4 radial progress bars are displayed (HTML5, Web Design, Java, PHP)

### Requirement: Work Experience section

The template SHALL display a Work Experience section with a dark background and experience entries.

#### Scenario: Experience entries are listed

- **WHEN** the page is loaded
- **THEN** a "Work Experience" heading is displayed with "PREVIOUS JOBS" subtitle
- **AND** 2 experience entries are shown
- **AND** each entry has a job title, company, date range, description, and bullet list
- **AND** company names are styled in yellow accent color

### Requirement: Education section

The template SHALL display an Education section with degree and institution entries.

#### Scenario: Education entries are listed

- **WHEN** the page is loaded
- **THEN** an "Education" heading is displayed with "ACADEMIC CAREER" subtitle
- **AND** education entries show degree, institution, and graduation info

### Requirement: Footer

The template SHALL display a footer with a link to Component Dock.

#### Scenario: Footer contains Component Dock link

- **WHEN** the page is loaded
- **THEN** a footer is visible at the bottom
- **AND** it links to https://www.componentdock.com/

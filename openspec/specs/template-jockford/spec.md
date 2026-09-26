# Spec: Jockford

> Recreation of ColorLib "Jackson" (https://colorlib.com/wp/template/jackson/)
> Preview: https://preview.colorlib.com/theme/jackson/
> Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/jackson-free-personal-resume-website-template.jpg

## Purpose

Jockford is a personal resume/portfolio website template with a fixed left sidebar navigation, full-height hero slider, and single-page scrollable sections. It features a clean, modern, professional aesthetic with a blue accent color, icon cards, progress bars, accordion, timeline, and filterable portfolio grid.

## Design Tokens

| Token                | Value                         | Usage                                |
| -------------------- | ----------------------------- | ------------------------------------ |
| Brand primary        | `#0066ff`                     | Buttons, links, active states, icons |
| Brand hover          | `#0052cc`                     | Button hover                         |
| Body text            | `#1a1a1a`                     | Primary text, headings               |
| Text secondary       | `#555555`                     | Descriptions, secondary text         |
| Text muted           | `#888888`                     | Timestamps, labels                   |
| Background           | `#ffffff`                     | Main background                      |
| Background secondary | `#f8f9fa`                     | Section alternating bg               |
| Background tertiary  | `#f1f3f5`                     | Skill bars background                |
| Border               | `#e5e7eb`                     | Cards, dividers                      |
| Font family          | `Inter, sans-serif`           | All text (weights 300–700)           |
| Border radius sm     | `6px`                         | Small elements                       |
| Border radius md     | `10px`                        | Cards                                |
| Border radius lg     | `14px`                        | Modals                               |
| Border radius full   | `9999px`                      | Pills, avatars                       |
| Shadow sm            | `0 1px 3px rgba(0,0,0,0.06)`  | Subtle elevation                     |
| Shadow md            | `0 4px 16px rgba(0,0,0,0.08)` | Card hover                           |
| Shadow lg            | `0 8px 30px rgba(0,0,0,0.1)`  | Floating elements                    |
| Transition fast      | `150ms ease`                  | Micro-interactions                   |
| Transition base      | `250ms ease`                  | State changes                        |

## Requirements

### Requirement: Sidebar Navigation

The template SHALL render a fixed left sidebar (~250px) with a circular avatar, author name, role, navigation links, social icons, dark mode toggle, and footer text.

#### Scenario: Sidebar displays author info

- **WHEN** the page loads
- **THEN** a circular avatar image is displayed
- **THEN** the author name "Ford Jock" is shown
- **THEN** the role "UI/UX Designer" is displayed

#### Scenario: Sidebar navigation links

- **WHEN** the sidebar is visible
- **THEN** navigation links are rendered: Home, About, Services, Skills, Education, Experience, Work, Blog, Contact
- **WHEN** the user clicks a navigation link
- **THEN** the page scrolls to the corresponding section

#### Scenario: Sidebar social links

- **WHEN** the sidebar is visible
- **THEN** social media icon links are displayed: Facebook, Twitter, Instagram, LinkedIn

#### Scenario: Dark mode toggle

- **WHEN** the user clicks the dark mode toggle button
- **THEN** the page theme switches to dark colors
- **WHEN** the user clicks the toggle again
- **THEN** the page theme switches back to light colors

#### Scenario: Mobile sidebar toggle

- **WHEN** the viewport is mobile-sized
- **THEN** the sidebar is hidden off-screen
- **WHEN** the user clicks the hamburger menu button
- **THEN** the sidebar slides in from the left

### Requirement: Hero Section

The template SHALL render a full-viewport-height hero section with a background image, dark gradient overlay, headline, subtitle, and CTA buttons.

#### Scenario: Hero displays headline and CTAs

- **WHEN** the page loads
- **THEN** the hero section fills the full viewport height
- **THEN** the headline "Hi! I'm Ford" is displayed
- **THEN** the subtitle "I am a Designer" is shown
- **THEN** a "Download CV" button is visible
- **THEN** a "View Portfolio" button is visible

#### Scenario: Hero slide navigation

- **WHEN** the hero section is displayed
- **THEN** navigation dots are visible for slide switching
- **WHEN** the user clicks a navigation dot
- **THEN** the corresponding slide is displayed

### Requirement: About Section

The template SHALL render an About section with a heading, bio paragraph, 4 stat cards, and a "Hire me" button.

#### Scenario: About section content

- **WHEN** the user scrolls to the About section
- **THEN** the heading "Who Am I?" is displayed
- **THEN** a bio paragraph is shown
- **THEN** 4 stat cards are displayed: Graphic Design (45), Web Design (32), Software (28), Application (18)
- **THEN** a "Hire me" button is visible

### Requirement: Services Section

The template SHALL render a Services section with 6 service cards in a grid layout.

#### Scenario: Services section content

- **WHEN** the user scrolls to the Services section
- **THEN** the heading "Here are some of my expertise" is displayed
- **THEN** 6 service cards are displayed with icons, titles, and descriptions

### Requirement: Skills Section

The template SHALL render a Skills section with 6 animated progress bars.

#### Scenario: Skills section content

- **WHEN** the user scrolls to the Skills section
- **THEN** the heading "My Skills" is displayed
- **THEN** 6 skill progress bars are displayed: Photoshop (90%), JavaScript (85%), HTML5 (95%), CSS3 (88%), WordPress (75%), SEO (70%)
- **WHEN** the skill bars enter the viewport
- **THEN** the progress bars animate to their target width

### Requirement: Education Section

The template SHALL render an Education section with 5 collapsible accordion items.

#### Scenario: Education accordion interaction

- **WHEN** the user scrolls to the Education section
- **THEN** the heading "Education" is displayed
- **THEN** 5 education items are shown as accordion entries
- **WHEN** the user clicks an education item
- **THEN** the item expands to show a description paragraph
- **WHEN** the user clicks the same item again
- **THEN** the item collapses and the description is hidden

### Requirement: Experience Section

The template SHALL render an Experience section with a centered vertical timeline and 5 entries alternating sides.

#### Scenario: Experience timeline content

- **WHEN** the user scrolls to the Experience section
- **THEN** the heading "Work Experience" is displayed
- **THEN** 5 timeline entries are shown: Full Stack Developer, Front End Developer, System Analyst, Creative Designer, UI/UX Designer
- **THEN** entries alternate sides on the timeline

### Requirement: Work / Portfolio Section

The template SHALL render a Work section with filter tabs and a 2-column portfolio grid with hover overlays.

#### Scenario: Portfolio filtering

- **WHEN** the user scrolls to the Work section
- **THEN** the heading "Recent Work" is displayed
- **THEN** filter tabs are shown: All, Graphic Design, Web Design, Software, Apps
- **WHEN** the user clicks a filter tab
- **THEN** only portfolio items matching the selected category are displayed

#### Scenario: Portfolio hover overlay

- **WHEN** the user hovers over a portfolio item
- **THEN** a dark overlay with action icons (share, view, heart) is displayed

### Requirement: Blog Section

The template SHALL render a Blog section with 1 featured card and 2 standard cards.

#### Scenario: Blog content

- **WHEN** the user scrolls to the Blog section
- **THEN** the heading "From the Blog" is displayed
- **THEN** 3 blog cards are shown
- **THEN** the first card is featured (larger layout)
- **THEN** each card has a title, excerpt, and category

### Requirement: Contact Section

The template SHALL render a Contact section with 3 contact info items and a contact form.

#### Scenario: Contact content

- **WHEN** the user scrolls to the Contact section
- **THEN** the heading "Contact" is displayed
- **THEN** 3 contact info items are shown with icons: email, address, phone
- **THEN** a contact form is displayed with name, email, message fields, and a submit button

### Requirement: Footer

The template SHALL render a footer with copyright text, Component Dock attribution link, and social media links.

#### Scenario: Footer content

- **WHEN** the user scrolls to the footer
- **THEN** copyright text is displayed
- **THEN** a "Made with ❤ by Component Dock" link pointing to https://www.componentdock.com/ is shown
- **THEN** social media icon links are present

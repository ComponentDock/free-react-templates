---
name: FooterDusk
description: Recreation of ColorLib Bootstrap Footer 19 — purple gradient footer with four-column layout, about/contact info, latest news cards, link list, Instagram grid, and email subscribe form
colorlib: https://colorlib.com/wp/template/bootstrap-footer-19/
preview: https://preview.colorlib.com/theme/bft/bootstrap-footer-19/
---

## Purpose

FooterDusk recreates the ColorLib Bootstrap Footer 19 template as a React + Tailwind CSS component. It features a dark purple gradient (#2a1a5e → #5126a7) footer split into four equal columns: About (with address, phone, email, and email subscribe form), Latest News (two blog post cards with thumbnails and metadata), Information (link list), and Instagram (3x2 image grid). The design uses Poppins font, pink/magenta (#fe59d7) accent links and icon circles, white headings, and a lighter pink (#fe8ce3) submit button.

## Design Tokens

| Token                    | Value                  | Usage                                  |
| ------------------------ | ---------------------- | -------------------------------------- |
| Footer background        | #2a1a5e → #5126a7 (45deg gradient) | Main footer background (deep purple gradient) |
| Accent/link color        | #fe59d7                | All links, heading icon circles        |
| Submit button bg         | #fe8ce3                | Subscribe form submit button           |
| Heading color            | #fff                   | All footer headings                    |
| Heading font-size        | 22px                   | Footer section headings                |
| Icon circle size         | 40x40px                | Heading icon badge (border-radius 50%) |
| Icon circle border       | 1px solid #fe59d7      | Heading icon badge border              |
| Body text                | rgba(255,255,255,0.3)  | Paragraphs, muted text                 |
| Link list text           | rgba(255,255,255,0.5)  | Navigation links, news headings        |
| News meta text           | rgba(255,255,255,0.3)  | Blog post metadata                     |
| Subscribe input bg       | rgba(0,0,0,0.05)       | Subscribe email input background       |
| Subscribe input border   | 2px solid #fe8ce3      | Subscribe email input border           |
| Subscribe input font     | 16px                   | Subscribe email input font size        |
| Submit button size       | 52x52px                | Subscribe form submit button           |
| Submit button text       | #fff                   | Submit button icon color               |
| Instagram image height   | 100px                  | Instagram grid thumbnail height        |
| Border-top color         | rgba(255,255,255,0.1)  | Separator above copyright              |
| Font                     | Poppins (Google Fonts) | All text                               |
| Font weights             | 300, 400, 500, 600, 700, 800, 900 | Various elements           |

## Requirements

### Requirement: Footer renders with purple gradient background and four-column layout
The footer element SHALL use the semantic `<footer>` tag with `role="contentinfo"` and apply a purple gradient background from #2a1a5e (bottom-left) to #5126a7 (top-right) at 45 degrees. It SHALL be split into four equal-width columns.

#### Scenario: Footer renders with correct gradient background
- **WHEN** the Footer component is rendered
- **THEN** a `<footer>` element with `role="contentinfo"` is present
- **AND** it has a purple gradient background from #2a1a5e to #5126a7

#### Scenario: Footer has four-column layout
- **WHEN** the Footer component is rendered
- **THEN** four columns are visible side by side
- **AND** each column occupies approximately 25% width

### Requirement: About column displays contact info and email subscribe form
The first column SHALL display an "About" heading with a pink circular icon, contact details (address, phone, email) with pin/phone/send icons, and an email subscription form with a text input and a pink submit button with a send icon.

#### Scenario: About column renders heading with icon circle
- **WHEN** the Footer component is rendered
- **THEN** an "About" heading is visible
- **AND** a circular icon badge (40x40px, 50% border-radius, #fe59d7 border and color) precedes the heading text

#### Scenario: About column renders contact details
- **WHEN** the Footer component is rendered
- **THEN** an address line with a pin icon is visible
- **AND** a phone number with a phone icon is visible
- **AND** an email address with a send icon is visible

#### Scenario: About column renders email subscribe form
- **WHEN** the Footer component is rendered
- **THEN** an email subscription form is present
- **AND** a text input with placeholder "Enter email address" is visible
- **AND** the input has a semi-transparent dark background and 2px #fe8ce3 border
- **AND** a pink (#fe8ce3) submit button with a send icon is present

### Requirement: Latest News column displays blog post cards
The second column SHALL display a "Latest News" heading with an icon circle, followed by two blog post cards. Each card has a thumbnail image, a heading, and metadata (date, author, comment count).

#### Scenario: Latest News column renders heading with icon
- **WHEN** the Footer component is rendered
- **THEN** a "Latest News" heading is visible with a circular icon badge

#### Scenario: Latest News column renders two blog post cards
- **WHEN** the Footer component is rendered
- **THEN** two blog post cards are visible
- **AND** each card has a thumbnail image on the left
- **AND** each card has a heading link on the right
- **AND** each card shows date, author, and comment count metadata

### Requirement: Information column displays link list
The third column SHALL display an "Information" heading with an icon circle, followed by a vertical list of navigation links: About, Products, Blog, Contact, Help & Support.

#### Scenario: Information column renders heading and links
- **WHEN** the Footer component is rendered
- **THEN** an "Information" heading is visible with a circular icon badge
- **AND** five links are listed: About, Products, Blog, Contact, Help & Support

### Requirement: Instagram column displays image grid
The fourth column SHALL display an "Instagram" heading with an Instagram icon circle, followed by a 3x2 grid of Instagram image thumbnails. Each thumbnail is a linked image placeholder.

#### Scenario: Instagram column renders heading and image grid
- **WHEN** the Footer component is rendered
- **THEN** an "Instagram" heading is visible with a circular Instagram icon badge
- **AND** a 3x2 grid of six image thumbnails is displayed
- **AND** each thumbnail is approximately 100px tall with rounded corners

### Requirement: Copyright bar displays at footer bottom
The footer SHALL display a copyright row below the four columns, separated by a subtle white border-top. The left side shows the current year and "All rights reserved" text. The right side shows a "Made with ♥ by Component Dock" attribution link.

#### Scenario: Copyright bar renders correctly
- **WHEN** the Footer component is rendered
- **THEN** the copyright text with the current year is displayed
- **AND** a link to "Component Dock" with href "https://www.componentdock.com/" is present
- **AND** the link opens in a new tab with `target="_blank"` and `rel="noreferrer"`

### Requirement: Email subscribe form prevents default submission
The subscribe form SHALL prevent default form submission when the submit button is clicked.

#### Scenario: Form submission is prevented
- **WHEN** the user clicks the subscribe submit button
- **THEN** the form's default submission is prevented

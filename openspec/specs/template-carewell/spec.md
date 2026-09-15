# Template: Carewell (Nonprofit / Charity)

## Purpose

Carewell is a single-page nonprofit/charity website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Kare" charity website template design (see TEMPLATES.md),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

- **Source slug**: `kare`
- **Preview URL**: https://preview.colorlib.com/theme/kare/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/kare-free-template.jpg
- **New name**: `carewell`
- **Package**: `@free-react-templates/carewell`
- **Deploy target**: `carewell.free.componentdock.com`
- **Category**: Nonprofit / Charity

## Design Tokens

Extracted from the live preview at https://preview.colorlib.com/theme/kare/ and its stylesheet `css/style.css`.

### Brand Colors

| Token                | Value                    | Usage                                          |
| -------------------- | ------------------------ | ---------------------------------------------- |
| `--color-brand`      | `#ea2c58` (hot pink-red) | Primary buttons, links, progress bars, accents |
| `--color-brand-gold` | `#f8b600`                | Accent highlights, funding badges              |
| `--color-brand-cyan` | `#4cd3e3`                | Secondary accent, icon colors                  |
| `--color-brand-blue` | `#38a4ff`                | Info/accent color                              |

### Neutrals

| Token                  | Value     | Usage                          |
| ---------------------- | --------- | ------------------------------ |
| `--color-text-primary` | `#222222` | Body text, headings            |
| `--color-text-muted`   | `#777777` | Secondary text, descriptions   |
| `--color-bg-alt`       | `#f9f9ff` | Section alternating background |
| `--color-border`       | `#eeeeee` | Card borders, dividers         |

### Typography

- **Font family**: `Roboto, sans-serif` (Google Fonts)
- Standard Bootstrap-based sizing

### Button Styles

- Primary buttons: `background: #ea2c58`, white text, no border-radius (sharp/square edges), `padding: 15px 30px`
- Secondary buttons: white background with border, `#ea2c58` hover fill

## Section Structure (from live DOM)

Order as found on the preview page:

1. **Navbar** — "Carewell" branding, nav links (Home, Causes, Events, About, Blog, Contact), "Donate Now" CTA button
2. **Hero** — Full-width background image with dark overlay, headline + description + "Donate Now" CTA
3. **DonationStats** — 4 stat boxes: Total Donation, Fund Raised, Highest Donation, Total Donors
4. **MajorCauses** — Heading + description, 3 cause cards with image, progress bar, amounts, title, description, "Donate Here" link
5. **MakeDonation** — "Make a Donation Today" heading, preset amount buttons ($10, $50, $100, $250), USD label, "Donate Now" submit
6. **ClientsLogos** — Logo carousel (6 greyscale partner logos)
7. **SupportCampaign** — "Support a Campaign or Fundraiser" heading, campaign cards with funding progress
8. **ExperienceDonation** — Parallax background with dark overlay, heading, description, "Make Donation Now" CTA
9. **AboutNewsletter** — About card with avatar, newsletter signup form, social media links
10. **Footer** — Copyright, Component Dock link

## Requirements

### Requirement: Navbar renders brand and navigation

Users SHALL see "Carewell" brand name, navigation links (Home, Causes, Events, About, Blog, Contact), and a "Donate Now" CTA button in the navbar.

#### Scenario: Desktop navbar renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar displays brand "Carewell"
- **AND** links Home, Causes, Events, About, Blog, Contact are visible
- **AND** a "Donate Now" button is visible with brand color background

#### Scenario: Mobile navbar toggles on hamburger click

- **WHEN** the user clicks the hamburger toggle
- **THEN** navigation links become visible in mobile menu

#### Scenario: Mobile menu closes when link clicked

- **WHEN** the user clicks a navigation link in mobile menu
- **THEN** the mobile menu closes

#### Scenario: Mobile Donate Now closes menu

- **WHEN** the user clicks Donate Now in mobile menu
- **THEN** the mobile menu closes

### Requirement: Hero displays headline and CTAs

Users SHALL see a full-width hero section with a background image, dark overlay, heading text, description, and two CTA buttons.

#### Scenario: Hero renders headline and buttons

- **WHEN** the hero section is visible
- **THEN** the heading "Together We Can Change Lives" is displayed
- **AND** a description paragraph is shown
- **AND** a "Donate Now" button links to #donate
- **AND** a "View Activity" button links to #causes

### Requirement: DonationStats shows four stat boxes

Users SHALL see four stat boxes with icons, values, and labels.

#### Scenario: Four stat boxes are displayed

- **WHEN** the donation stats section is visible
- **THEN** four stat boxes are shown with Total Donation, Fund Raised, Highest Donation, Total Donors
- **AND** each box shows a numeric value and a label

### Requirement: MajorCauses displays cause cards

Users SHALL see a section titled "Our Major Causes" with cause cards containing images, progress bars, amounts, titles, descriptions, and "Donate Here" links.

#### Scenario: Three cause cards with progress bars

- **WHEN** the causes section is visible
- **THEN** three cause cards are displayed
- **AND** each card has an image, progress bar with aria-valuenow, raised/total amounts, title, description, and "Donate Here" link

### Requirement: MakeDonation renders donation form

Users SHALL see a donation form with preset amount buttons, USD label, and a submit button.

#### Scenario: Four preset amounts are shown

- **WHEN** the donation section is visible
- **THEN** buttons for $10, $50, $100, $250 are displayed
- **AND** a "USD" label is shown
- **AND** a "Donate Now" submit button is present

#### Scenario: Amount selection highlights button

- **WHEN** the user clicks a preset amount button
- **THEN** that button is highlighted with brand color

### Requirement: ClientsLogos displays partner logos

Users SHALL see a row of greyscale partner logos.

#### Scenario: Six logos are displayed

- **WHEN** the clients section is visible
- **THEN** six partner logos are shown with alt text

### Requirement: SupportCampaign shows campaign cards

Users SHALL see a section with campaign cards showing funding progress.

#### Scenario: Three campaign cards with progress

- **WHEN** the support section is visible
- **THEN** three campaign cards are displayed
- **AND** each card shows name, raised/total amounts, and progress bar

### Requirement: ExperienceDonation displays parallax CTA

Users SHALL see a parallax background section with heading, description, and CTA button.

#### Scenario: Parallax section renders heading and CTA

- **WHEN** the experience section is visible
- **THEN** the heading "Experience How Your Donation Can Reach" is displayed
- **AND** a "Make Donation Now" CTA button links to #donate
- **AND** a dark overlay covers the background image

### Requirement: AboutNewsletter shows about card and newsletter

Users SHALL see an about card with avatar and a newsletter signup form with social links.

#### Scenario: About card and newsletter form render

- **WHEN** the about/newsletter section is visible
- **THEN** an about card with avatar image and "Create Fundraising Today" heading is shown
- **AND** a newsletter form with email input and "Subscribe" button is present
- **AND** social media links (Facebook, Twitter, YouTube, Email) are displayed under "Follow Us"

#### Scenario: Newsletter form submission

- **WHEN** the user enters an email and clicks Subscribe
- **THEN** the form submission is handled (preventDefault)

### Requirement: Footer links to Component Dock

Users SHALL see a footer with copyright text and a link to Component Dock.

#### Scenario: Footer content

- **WHEN** the user scrolls to the footer
- **THEN** copyright text with "Carewell" is displayed
- **AND** a link to https://www.componentdock.com/ labeled "Component Dock" is present
- **AND** the link opens in a new tab

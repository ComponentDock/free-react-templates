# Template: Reachbox (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form 07** — a dark-themed two-column contact
card with a form on the left and contact information on the right, set against a
light gray page background.

- **Source slug:** `contact-form-07`
- **Source URL:** https://colorlib.com/wp/template/contact-form-07/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-07/ (404 at
  time of prep — design tokens extracted from screenshot)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Requirements

### Requirement: Page layout

The page renders a centered dark card on a light gray background with a page
title above it.

#### Scenario: Page title displayed

- **WHEN** I visit the Reachbox page
- **THEN** the page title "Contact Form #07" is displayed centered above the card

#### Scenario: Dark card rendered

- **WHEN** I visit the Reachbox page
- **THEN** I see a centered card with a dark charcoal background and rounded
  corners on a light gray background

### Requirement: Two-column card

The card is split into two columns: form on the left, contact info on the right.

#### Scenario: Two-column layout

- **WHEN** I visit the Reachbox page
- **THEN** the card has two columns side by side

#### Scenario: Form on left

- **WHEN** I visit the Reachbox page
- **THEN** the left column contains the contact form

#### Scenario: Contact info on right

- **WHEN** I visit the Reachbox page
- **THEN** the right column contains contact information

### Requirement: Contact form (left column)

The left column contains a form with underline-style inputs and a submit button.

#### Scenario: Form heading

- **WHEN** I visit the Reachbox page
- **THEN** the left column contains a "Write us" heading in white

#### Scenario: Name input

- **WHEN** I visit the Reachbox page
- **THEN** I see a Name input field with placeholder text

#### Scenario: Email input

- **WHEN** I visit the Reachbox page
- **THEN** I see an Email input field with placeholder text

#### Scenario: Subject input

- **WHEN** I visit the Reachbox page
- **THEN** I see a Subject input field with placeholder text

#### Scenario: Message textarea

- **WHEN** I visit the Reachbox page
- **THEN** I see a Message textarea with placeholder text and a tall height
  suitable for multi-line input

#### Scenario: Underline input style

- **WHEN** I visit the Reachbox page
- **THEN** all form inputs have a bottom border only (underline style) with no
  full border box

#### Scenario: Send Message button

- **WHEN** I visit the Reachbox page
- **THEN** I see a "Send Message" button with an orange background and white text

#### Scenario: Send Message button style

- **WHEN** I visit the Reachbox page
- **THEN** the Send Message button has rounded corners (approximately 4px radius)

### Requirement: Contact information panel (right column)

The right column displays contact details with icons.

#### Scenario: Info heading

- **WHEN** I visit the Reachbox page
- **THEN** the right column contains a "Contact information" heading in white

#### Scenario: Info subtext

- **WHEN** I visit the Reachbox page
- **THEN** I see "We're open for any suggestion or just to have a chat" below
  the heading

#### Scenario: Address displayed

- **WHEN** I visit the Reachbox page
- **THEN** I see a map pin icon and text "Address: 198 West 21th Street, Suite
  721 New York NY 10016"

#### Scenario: Phone displayed

- **WHEN** I visit the Reachbox page
- **THEN** I see a phone icon and text "Phone: + 1235 2355 98"

#### Scenario: Email displayed

- **WHEN** I visit the Reachbox page
- **THEN** I see an email/send icon and text "Email: info@yoursite.com"

#### Scenario: Website displayed

- **WHEN** I visit the Reachbox page
- **THEN** I see a globe icon and text "Website: yoursite.com"

#### Scenario: Icon style

- **WHEN** I visit the Reachbox page
- **THEN** each contact info item has a white/light icon on the dark background

### Requirement: Footer

The page footer links to Component Dock.

#### Scenario: Component Dock link

- **WHEN** I visit the Reachbox page
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text references Component Dock

## Design tokens

| Token            | Value                    | Notes                                        |
| ---------------- | ------------------------ | -------------------------------------------- |
| Brand orange     | `#F5A623`                | Send Message button background                |
| Page background  | `#F5F5F5`                | Light gray page background                   |
| Card surface     | `#2D2D2D`                | Dark charcoal card background                |
| Text primary     | `#FFFFFF`                | White text on dark card                      |
| Text secondary   | `#AAAAAA`                | Lighter gray for subtext, placeholders       |
| Text on orange   | `#FFFFFF`                | Button text                                  |
| Input border     | `#555555`                | Subtle gray underline on inputs              |
| Font — headings  | Montserrat (sans-serif)  | "Write us", "Contact information"            |
| Font — body      | Montserrat (sans-serif)  | Labels, contact info, button                 |
| Button radius    | 4px                      | Slight rounding                              |
| Button bg        | Brand orange `#F5A623`   | —                                            |
| Button text      | White                    | —                                            |
| Input style      | Underline (no border)    | Bottom border only, no full border/box       |
| Card shadow      | Subtle drop shadow       | Soft shadow on card edges                    |
| Card radius      | ~8px                     | Rounded corners on the card                  |

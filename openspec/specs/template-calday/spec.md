# Template: CalDay — Dual Interactive Calendar

## Purpose

Recreation of ColorLib "Calendar 03" (https://colorlib.com/wp/template/calendar-03/)
as "CalDay" — a dual side-by-side interactive calendar component built with
React 19, Tailwind CSS 4, and TypeScript.

## Requirements

### Requirement: Two calendars render side by side

Users SHALL see two independent calendar panels displayed in a two-column layout
on desktop and stacked on mobile.

#### Scenario: Page loads with two calendars

- **WHEN** the page loads
- **THEN** I see two calendar panels
- **AND** each panel has its own month/year header

### Requirement: Calendar navigation is independent

Each calendar SHALL maintain its own month state so navigating one does not
affect the other.

#### Scenario: Navigate one calendar independently

- **GIVEN** both calendars show the same month
- **WHEN** I click "next month" on the left calendar
- **THEN** the left calendar advances one month
- **AND** the right calendar still shows the original month

### Requirement: Month navigation via chevrons

Each calendar SHALL have left and right chevron buttons to navigate between months.

#### Scenario: Previous month navigation

- **GIVEN** a calendar showing August 2026
- **WHEN** I click the left chevron
- **THEN** the calendar shows July 2026

#### Scenario: Next month navigation

- **GIVEN** a calendar showing August 2026
- **WHEN** I click the right chevron
- **THEN** the calendar shows September 2026

#### Scenario: Year rollover

- **GIVEN** a calendar showing December 2024
- **WHEN** I click the right chevron
- **THEN** the calendar shows January 2025

### Requirement: Today is visually highlighted

Today's date cell SHALL have a purple (#bd83ce) background with white text
and include "(today)" in its accessible label.

#### Scenario: Today highlighting

- **GIVEN** the page loads
- **WHEN** I look at today's date cell
- **THEN** it has a purple background
- **AND** the text color is white
- **AND** the accessible label includes "(today)"

### Requirement: Correct grid for each month

The date grid SHALL show the correct number of days with proper leading blanks
for the first day of the month.

#### Scenario: Blank cells before the 1st

- **GIVEN** a month that starts on Wednesday
- **WHEN** the calendar renders
- **THEN** there are 3 blank cells before day 1

#### Scenario: Correct day count

- **GIVEN** a month with 31 days
- **WHEN** the calendar renders
- **THEN** there are 31 date buttons

### Requirement: Weekday header row

Each calendar SHALL display a row of weekday abbreviations (Sun–Sat) above the date grid.

#### Scenario: Weekday abbreviations

- **GIVEN** the page loads
- **THEN** I see Sun, Mon, Tue, Wed, Thu, Fri, Sat in order

### Requirement: Footer links to Component Dock

The page footer SHALL contain a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link

- **GIVEN** the page loads
- **WHEN** I look at the footer
- **THEN** I see "More templates at Component Dock"
- **AND** the link points to https://www.componentdock.com/

### Requirement: Accessible navigation buttons

Navigation buttons SHALL have descriptive aria-labels.

#### Scenario: Accessible labels

- **GIVEN** the page loads
- **THEN** each navigation button has an aria-label
- **AND** each date cell has an aria-label with the date and month

## Design Tokens

| Token           | Value                                 |
| --------------- | ------------------------------------- |
| Font family     | Lato (300, 400, 700) via Google Fonts |
| Accent/today    | #bd83ce (purple)                      |
| Past date color | #d5d5d5                               |
| Future color    | #111111                               |
| Heading color   | #000000                               |
| Chevron color   | #cccccc                               |
| Hover border    | #ededed                               |
| Calendar shadow | 0px 4px 26px -22px rgba(0,0,0,0.14)   |
| Day cell height | 68px                                  |
| Header height   | 55px                                  |
| Calendar max-w  | 585px                                 |

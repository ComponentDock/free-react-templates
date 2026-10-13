# Template: Cascade (UI Snippet — Notification Dropdown)

## Purpose

Recreation of ColorLib "Dropdown V15" — a modern notification dropdown snippet
with a bell icon, badge count, and a scrollable list of notification items.

- **Source:** [ColorLib Dropdown 15](https://colorlib.com/wp/template/dropdown-15/)
- **Preview:** https://preview.colorlib.com/theme/bootstrap/dropdown-15/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/dropdown-15.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)

## Design tokens (from live preview CSS)

| Token                 | Value                        | Source                              |
|-----------------------|------------------------------|-------------------------------------|
| Body font             | "Roboto", sans-serif         | `css/style.css` body, h1-h6        |
| Secondary font        | "Poppins" (used elsewhere)   | Preview HTML head (Cloudflare CDN)  |
| Body text color       | `#b3b3b3`                    | `css/style.css` p                  |
| Heading weight        | 700 (bold)                   | `css/style.css` h1-h6              |
| Dropdown link color   | `#888`                       | `.dropdown-link`                    |
| Badge background      | `#007bff`                    | `.number`                           |
| Badge text            | `#fff`                       | `.number`                           |
| Badge size            | 24×24 px, border-radius 50%  | `.number`                           |
| Badge border          | 2px solid `#fff`             | `.number`                           |
| Notification bg       | `#fff`                       | `.dropdown-menu`                    |
| Notification shadow   | `0 15px 30px 0 rgba(0,0,0,0.2)` | `.dropdown-menu`                 |
| Notification max-w    | 380 px                       | `.dropdown-menu`                    |
| Item font-size        | 14 px                        | `.custom-notifications > li`        |
| Item color            | `#bfbfbf`                    | `.custom-notifications > li > a`    |
| Item padding          | 20 px                        | `.custom-notifications > li > a`    |
| Unread background     | `#fffaef`                    | `.custom-notifications > li.unread` |
| Hover background      | `#f9f9f9`                    | `li > a:hover`                      |
| Title font-size       | 12 px, uppercase, bold       | `.title`                            |
| Avatar size           | 40 px, border-radius 50%     | `.img img`                          |
| Scroll height         | 200 px                       | `.custom-notifications`             |
| Separator             | 1px solid `#efefef`          | `.custom-notifications` border      |
| Content padding       | 7rem 0                       | `.content`                          |

## Visual design (from screenshot)

Clean white background. A bell icon (font icon) with a circular blue badge
showing "5". Clicking the bell opens a white card (shadow, rounded) with a
"Notifications" title (uppercase, small, bold) and a "Mark all as read" link
aligned right. Below is a scrollable list of 5 notification items, each with a
circular avatar photo (40px), bold name, and light gray action text. The first
two items have a warm yellow unread background (`#fffaef`). At the bottom a
"View All" link centers below the list. The whole component sits in a centered
column (`col-md-5`).

## Requirements

### Feature: Notification dropdown snippet

#### Scenario: Bell icon renders with badge count

- **GIVEN** the component is mounted
- **WHEN** I look at the bell icon area
- **THEN** I see a bell icon (lucide Bell)
- **AND** I see a circular badge with the text "5"

#### Scenario: Badge styling matches source

- **GIVEN** the component is mounted
- **WHEN** I inspect the badge
- **THEN** its background is #007bff
- **AND** its text color is #fff
- **AND** its border-radius is 50%
- **AND** its border is 2px solid #fff

#### Scenario: Dropdown opens on bell click

- **GIVEN** the dropdown is closed
- **WHEN** I click the bell icon
- **THEN** the dropdown panel appears with animation (opacity fade)
- **AND** the bell icon aria-expanded is true

#### Scenario: Dropdown closes on bell click again

- **GIVEN** the dropdown is open
- **WHEN** I click the bell icon
- **THEN** the dropdown panel disappears
- **AND** the bell icon aria-expanded is false

#### Scenario: Dropdown closes on outside click

- **GIVEN** the dropdown is open
- **WHEN** I click outside the dropdown area
- **THEN** the dropdown panel disappears

#### Scenario: Notification list header

- **GIVEN** the dropdown is open
- **WHEN** I inspect the header
- **THEN** I see "Notifications" text (uppercase, bold, 12px)
- **AND** I see "Mark all as read" link aligned right

#### Scenario: Notification items render

- **GIVEN** the dropdown is open
- **WHEN** I count the notification items
- **THEN** there are 5 items

#### Scenario: Each notification item structure

- **GIVEN** the dropdown is open
- **WHEN** I look at any notification item
- **THEN** it has a circular avatar image (40px)
- **AND** it has a bold name
- **AND** it has a gray action description

#### Scenario: Unread items highlighted

- **GIVEN** the dropdown is open
- **WHEN** I look at unread items
- **THEN** their background is #fffaef

#### Scenario: Hover state on items

- **GIVEN** the dropdown is open
- **WHEN** I hover over a notification item
- **THEN** the item background becomes #f9f9f9

#### Scenario: Scrollable list

- **GIVEN** the dropdown is open
- **GIVEN** there are more than 4 visible items
- **WHEN** I look at the notification list
- **THEN** its max height is 200px with overflow-y scroll

#### Scenario: View All link

- **GIVEN** the dropdown is open
- **WHEN** I look at the bottom of the dropdown
- **THEN** I see a centered "View All" link

#### Scenario: Dropdown max width

- **GIVEN** the dropdown is open
- **WHEN** I measure the dropdown width
- **THEN** it is at most 380px

#### Scenario: Accessibility — keyboard

- **GIVEN** the dropdown is open
- **WHEN** I press Escape
- **THEN** the dropdown closes

## Verification checklist

- [ ] Bell icon with badge renders correctly
- [ ] Badge uses #007bff background, white text, circular
- [ ] Dropdown opens/closes on bell click with animation
- [ ] Dropdown closes on outside click
- [ ] "Notifications" header (uppercase, bold) + "Mark all as read"
- [ ] 5 notification items with avatars, names, descriptions
- [ ] Unread items have #fffaef background
- [ ] Hover state shows #f9f9f9 background
- [ ] Scrollable list (max-height 200px)
- [ ] "View All" link centered at bottom
- [ ] Dropdown max-width 380px
- [ ] Keyboard: Escape closes dropdown
- [ ] ARIA: aria-expanded, aria-haspopup on bell button
- [ ] Accessibility: semantic button, not div
- [ ] No references to ColorLib in source code

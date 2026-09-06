# Spec: Pings — Notifications Dropdown

> Recreation of ColorLib Dropdown 15 (https://colorlib.com/wp/template/dropdown-15/)

## Purpose

Pings is a single-page UI-component demo template showcasing a notifications
dropdown menu. A bell icon with a badge count triggers a dropdown panel listing
notification items with avatars and text descriptions, some marked as unread.
The design uses Bootstrap-style dropdown mechanics with smooth opacity/margin
transitions.

## Design Reference

### Layout Structure

- Page heading: "Dropdown" centered, font-size 20px, color #212529
- Content centered in a Bootstrap container with 7rem vertical padding
- Bell icon (30px) with a circular blue badge (#007bff) showing count "5"
- Dropdown menu: white background, max-width 380px, 10px padding, shadow
- Title bar: "Notifications" (uppercase, 12px, bold) + "Mark all as read" link
- Notification list: scrollable (200px height), bottom border
- 5 notification items: 40px circular avatar + bold name + description text
- Unread items: light yellow background (#fffaef)
- "View All" link centered at bottom

### Design Tokens (extracted from preview CSS)

- **Font family:** "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
- **Body text color:** #b3b3b3
- **Heading color:** #212529
- **Bell icon color:** #888
- **Badge background:** #007bff (Bootstrap primary blue)
- **Badge text:** #fff, 13px, 24x24px circle, 2px white border
- **Menu shadow:** 0 15px 30px 0 rgba(0, 0, 0, 0.2)
- **Menu max-width:** 380px
- **Menu transition:** 0.3s margin/opacity/visibility ease
- **Menu hidden:** opacity 0, visibility hidden, margin-top 0
- **Menu visible:** opacity 1, visibility visible, margin-top 10px
- **Title font:** 12px, uppercase, bold
- **Notification item font:** 14px
- **Notification text color:** #bfbfbf
- **Notification hover bg:** #f9f9f9
- **Unread background:** #fffaef
- **Avatar:** 40px width, border-radius 50%
- **Divider:** 1px solid #efefef
- **Link transitions:** 0.3s all ease
- **"Mark all as read" / "View All" links:** small font, color inherits

## Requirements

### Requirement: Page renders with heading and footer

Users SHALL see a page titled "Dropdown" with a "Pings" branded footer
linking to Component Dock.

#### Scenario: Heading is visible

- **WHEN** the page loads
- **THEN** the heading "Dropdown" is visible
- **AND** the footer shows "Pings"
- **AND** the footer has a link to componentdock.com

### Requirement: Bell icon with badge count

Users SHALL see a bell icon with a circular blue badge showing the
notification count.

#### Scenario: Badge displays count

- **WHEN** the page loads
- **THEN** a bell icon is visible
- **AND** a badge with the number "5" is displayed on the bell icon

### Requirement: Toggle opens notifications dropdown

Users SHALL be able to open and close the notifications dropdown by clicking
the bell icon.

#### Scenario: Click opens dropdown

- **WHEN** I click the bell icon
- **THEN** the notifications panel is visible
- **AND** the heading "Notifications" is shown
- **AND** the "Mark all as read" link is shown

#### Scenario: Click closes dropdown

- **GIVEN** the dropdown is open
- **WHEN** I click the bell icon again
- **THEN** the notifications panel is hidden

### Requirement: Notification items displayed

Users SHALL see a list of notification items with avatars, names, and
descriptions.

#### Scenario: Five notifications shown

- **WHEN** the dropdown is open
- **THEN** five notification items are visible
- **AND** each item has an avatar image
- **AND** each item has a bold name and description text

### Requirement: Unread items highlighted

Users SHALL see unread notification items with a distinct background color.

#### Scenario: Unread styling applied

- **WHEN** the dropdown is open
- **THEN** unread items have a light yellow background (#fffaef)
- **AND** read items have the default background

### Requirement: View All link

Users SHALL see a "View All" link at the bottom of the notification list.

#### Scenario: View All visible

- **WHEN** the dropdown is open
- **THEN** a "View All" link is visible at the bottom of the list

# Template: DropNet (Bootstrap Dropdowns)

> Recreation of ColorLib Dropdown 18 (https://colorlib.com/wp/template/dropdown-18/)
> Preview URL: https://preview.colorlib.com/theme/bootstrap/dropdown-18/
> Category: Bootstrap Dropdowns (profile dropdown snippet)

## Purpose

Provide a profile dropdown component for membership sites, social networks, and similar applications. Displays a user profile card (avatar + name + location) that toggles open a dropdown menu with navigation items, icon badges, and notification counts.

## Design Tokens

| Token              | Value                                         | Source            |
| ------------------ | --------------------------------------------- | ----------------- |
| Font family        | `"Roboto", sans-serif`                        | preview CSS       |
| Font weight (body) | 300 (light)                                   | preview CSS       |
| Background         | `#efefef` (light gray)                        | preview CSS       |
| Page padding       | `7rem 0` (content section)                    | preview CSS       |
| Profile pic size   | 50px × 50px, `border-radius: 50%`             | preview CSS       |
| Profile pic gap    | `margin-right: 12px` (mr-3 Bootstrap)         | preview DOM       |
| Name font size     | 16px                                          | preview CSS       |
| Location font size | 13px, `display: block`                        | preview CSS       |
| Dropdown background| `#fff`                                        | preview CSS       |
| Dropdown shadow    | `0 15px 30px 0 rgba(0,0,0,0.2)`              | preview CSS       |
| Dropdown border    | `1px solid transparent`                       | preview CSS       |
| Dropdown border-radius | 0 (sharp corners)                          | preview CSS       |
| Dropdown item padding | `15px 15px`                                | preview CSS       |
| Dropdown item font | 14px                                          | preview CSS       |
| Dropdown item color | `#b2bac1` (muted gray)                      | preview CSS       |
| Dropdown item hover | `background: #fff; color: #000`              | preview CSS       |
| Dropdown item border-bottom | `1px solid rgba(0,0,0,0.1)`          | preview CSS       |
| Icon gap           | `margin-right: 15px`                          | preview CSS       |
| Badge color        | `#fd7e14` (Bootstrap orange)                  | preview CSS       |
| Badge text color   | `#fff`                                        | preview CSS       |
| Badge padding      | `2px 6px`                                     | preview CSS       |
| Badge font size    | 11px                                          | preview CSS       |
| Badge border-radius | 4px                                          | preview CSS       |
| Badge position     | `absolute`, right: 15px, vertical-center     | preview CSS       |
| Transition         | `0.3s margin-top, opacity, visibility`        | preview CSS       |
| Arrow rotation     | `rotate(-180deg)` on open                     | preview CSS       |
| Heading text color | `#000`                                        | preview CSS       |
| Title (section)    | 12px, 700 weight, uppercase                   | preview CSS       |

## Visual Design Notes (from screenshot)

The template shows a centered profile dropdown on a light gray (#efefef) background. A large heading "Dropdown #8" sits above a centered card-like profile link displaying a circular avatar image (person_2.jpg), user name "Kevin Thomas", and location "New York City, USA". Clicking the profile area reveals a dropdown menu with icon+text items separated by subtle dividers. Notification badges (orange) appear on the right side of relevant items (Inbox shows count "3", Setting shows "New" label). The dropdown has a clean white background with a prominent shadow, no border radius, and items use muted gray text that darkens on hover.

## Requirements

### Requirement: Page renders with centered heading and profile dropdown

Users SHALL see a centered page with a heading and a profile dropdown component.

#### Scenario: Heading is visible on load

- **WHEN** the page loads
- **THEN** the heading "DropNet" is visible and centered

#### Scenario: Footer is present with Component Dock link

- **WHEN** the page loads
- **THEN** the footer contains a link to componentdock.com

### Requirement: Profile card displays user information

Users SHALL see a profile card showing avatar, name, and location.

#### Scenario: Profile card shows avatar, name, and location

- **WHEN** the page loads
- **THEN** the profile area shows a circular avatar image
- **AND** the user name "Kevin Thomas" is displayed
- **AND** the location "New York City, USA" is displayed below the name

### Requirement: Clicking profile card toggles dropdown menu

Users SHALL be able to open and close the dropdown menu by clicking the profile card area.

#### Scenario: Click opens dropdown menu

- **WHEN** I click the profile card area
- **THEN** the dropdown menu is visible
- **AND** the menu contains navigation items (User Dashboard, Inbox, Following, Setting, Log out)

#### Scenario: Click closes open dropdown menu

- **GIVEN** the dropdown menu is open
- **WHEN** I click the profile card area again
- **THEN** the dropdown menu is not visible

### Requirement: Dropdown menu items are interactive

Users SHALL see notification badges on specific items and all items respond to hover.

#### Scenario: Inbox item shows notification count

- **GIVEN** the dropdown menu is open
- **THEN** the Inbox item displays a badge with "3"

#### Scenario: Setting item shows "New" label

- **GIVEN** the dropdown menu is open
- **THEN** the Setting item displays a badge with "New"

#### Scenario: Menu items have hover effect

- **GIVEN** the dropdown menu is open
- **WHEN** I hover over a menu item
- **THEN** the item text color changes to dark/black

### Requirement: Click outside closes dropdown

Users SHALL be able to close the dropdown by clicking outside of it.

#### Scenario: Click outside closes menu

- **GIVEN** the dropdown menu is open
- **WHEN** I click outside the dropdown component
- **THEN** the dropdown menu is not visible

### Requirement: Dropdown animates smoothly

The dropdown SHALL open and close with a smooth animation (opacity + slide transition).

#### Scenario: Dropdown opens with animation

- **WHEN** I click the profile card area
- **THEN** the dropdown menu fades in and slides down smoothly

#### Scenario: Dropdown closes with animation

- **GIVEN** the dropdown menu is open
- **WHEN** I click the profile card area again
- **THEN** the dropdown menu fades out and slides up smoothly

## Verification Checklist

- [ ] Page loads with centered "DropNet" heading on light gray background
- [ ] Profile card shows circular 50px avatar, "Kevin Thomas", "New York City, USA"
- [ ] Click on profile card opens dropdown with 5 items
- [ ] Inbox shows orange badge with "3"
- [ ] Setting shows orange badge with "New"
- [ ] Menu items have icon on left + text
- [ ] Menu items have hover effect (text turns dark)
- [ ] Click on profile card again closes dropdown
- [ ] Click outside closes dropdown
- [ ] Smooth fade+slide animation on open/close
- [ ] Arrow icon rotates 180° when open
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] Uses Roboto font family
- [ ] No border-radius on dropdown (sharp corners)

# Template: Dropmenu (Profile Dropdown Component)

## Purpose

Recreation of ColorLib **Dropdown 18** — a profile dropdown snippet for membership
sites and social networks, featuring a circular avatar, name/location, and a
dropdown menu with icon-labeled items and badges.
Preview: https://preview.colorlib.com/theme/bootstrap/dropdown-18/
Source page: https://colorlib.com/wp/template/dropdown-18/
Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Description: A centered profile trigger showing a circular 50px avatar, user name,
and location. Clicking opens a dropdown menu with five items: User Dashboard, Inbox
(with count badge "3"), Following, Setting (with "New" badge), and Log out. Each
item has an icon. The menu has a white background with box-shadow and smooth
fade-in animation.

## Design Tokens

Extracted from the preview CSS (css/style.css):

- **Font family (body/headings):** "Roboto", -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif
- **Font weight (body):** 300 (light)
- **Background:** #efefef (light gray page)
- **Body text color:** #b3b3b3
- **Heading color:** #000000
- **Trigger text color:** #000000
- **Profile image:** 50px circle (border-radius 50%)
- **Profile name:** 16px, font-weight normal
- **Profile location:** 13px, font-weight 300, block display
- **Menu background:** #ffffff
- **Menu shadow:** 0 15px 30px 0 rgba(0, 0, 0, 0.2)
- **Menu border-radius:** 0 (square)
- **Menu item text color:** #b2bac1
- **Menu item hover color:** #000000
- **Menu item border-bottom:** 1px solid rgba(0, 0, 0, 0.1)
- **Menu item padding:** 15px
- **Menu item font-size:** 14px
- **Badge background:** #fd7e14 (orange)
- **Badge text color:** #ffffff
- **Badge font-size:** 11px
- **Badge border-radius:** 4px
- **Badge padding:** 2px 6px
- **Icon margin-right:** 15px
- **Content padding:** 7rem vertical
- **Heading font-size:** 20px (h2)
- **Transition:** 0.3s all ease

## Requirements

### Requirement: Profile dropdown renders with trigger and toggle behavior

The dropdown component SHALL render a profile trigger that toggles a dropdown menu.

#### Scenario: Renders the profile trigger

- **WHEN** the page loads
- **THEN** a button with a circular profile image, name "Kevin Thomas", and location "New York City, USA" is visible

#### Scenario: Dropdown menu is hidden by default

- **WHEN** the page loads
- **THEN** the dropdown menu items are not visible

#### Scenario: Opens dropdown menu on click

- **WHEN** the user clicks the profile trigger
- **THEN** the dropdown menu becomes visible
- **AND** the menu contains five items: User Dashboard, Inbox, Following, Setting, Log out

#### Scenario: Closes menu on second click

- **WHEN** the user clicks the profile trigger while the menu is open
- **THEN** the dropdown menu becomes hidden

#### Scenario: Closes on outside click

- **WHEN** the user clicks outside the dropdown while the menu is open
- **THEN** the dropdown menu becomes hidden

### Requirement: Menu items are correctly structured

The dropdown menu SHALL display five items with icons, labels, and optional badges.

#### Scenario: Menu contains correct items

- **WHEN** the dropdown menu is open
- **THEN** "User Dashboard" is visible with a layout-grid icon
- **AND** "Inbox" is visible with a mail icon and a "3" badge
- **AND** "Following" is visible with a people icon
- **AND** "Setting" is visible with a settings icon and a "New" badge
- **AND** "Log out" is visible with a logout icon

#### Scenario: Items have icon margin

- **WHEN** the dropdown menu is open
- **THEN** each menu item icon has a right margin of 15px

#### Scenario: Items have borders

- **WHEN** the dropdown menu is open
- **THEN** each item (except the last) has a bottom border
- **AND** the last item ("Log out") has no bottom border

#### Scenario: Items are links

- **WHEN** the dropdown menu is open
- **THEN** each menu item is an anchor link with href="#"

### Requirement: Menu is styled and animated

The dropdown menu SHALL have a white background with box-shadow and smooth animation.

#### Scenario: Menu styling

- **WHEN** the dropdown menu opens
- **THEN** the menu has a white background
- **AND** the menu has a box-shadow of 0 15px 30px 0 rgba(0,0,0,0.2)
- **AND** the menu has no border-radius

#### Scenario: Menu animation

- **WHEN** the dropdown menu opens
- **THEN** the menu fades in with opacity transition
- **AND** the menu slides down with margin-top transition

### Requirement: Accessibility and footer

The dropdown SHALL use proper ARIA attributes and the page SHALL include a footer linking to Component Dock.

#### Scenario: Accessibility

- **WHEN** the dropdown trigger renders
- **THEN** the button has aria-haspopup="true"
- **AND** the button has aria-expanded="false" when closed
- **AND** the button has aria-expanded="true" when open

#### Scenario: Footer with Component Dock link

- **WHEN** the page renders
- **THEN** a footer is visible
- **AND** the footer contains a link to "https://www.componentdock.com/"

#### Scenario: Heading displays correctly

- **WHEN** the page loads
- **THEN** a centered heading "Dropdown #8" is visible

## Verification Checklist

- [ ] Heading "Dropdown #8" centered on page
- [ ] Profile trigger with circular avatar, name, and location renders
- [ ] Click toggles dropdown open/close
- [ ] Menu contains: User Dashboard, Inbox, Following, Setting, Log out
- [ ] Inbox has orange "3" badge
- [ ] Setting has orange "New" badge
- [ ] Menu items have icons with 15px right margin
- [ ] Items separated by rgba(0,0,0,0.1) borders
- [ ] Menu has white background with box-shadow
- [ ] Menu animates in (opacity + margin-top)
- [ ] Outside click closes dropdown
- [ ] aria-expanded toggles correctly
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Vitest + Testing Library tests at 100% coverage

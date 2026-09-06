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

## Gherkin requirements

### Feature: Notification dropdown snippet

**Scenario: Bell icon renders with badge count**
  Given the component is mounted
  When I look at the bell icon area
  Then I see a bell icon (lucide Bell)
  And I see a circular badge with the text "5"

**Scenario: Badge styling matches source**
  Given the component is mounted
  When I inspect the badge
  Then its background is #007bff
  And its text color is #fff
  And its border-radius is 50%
  And its border is 2px solid #fff

**Scenario: Dropdown opens on bell click**
  Given the dropdown is closed
  When I click the bell icon
  Then the dropdown panel appears with animation (opacity fade)
  And the bell icon aria-expanded is true

**Scenario: Dropdown closes on bell click again**
  Given the dropdown is open
  When I click the bell icon
  Then the dropdown panel disappears
  And the bell icon aria-expanded is false

**Scenario: Dropdown closes on outside click**
  Given the dropdown is open
  When I click outside the dropdown area
  Then the dropdown panel disappears

**Scenario: Notification list header**
  Given the dropdown is open
  When I inspect the header
  Then I see "Notifications" text (uppercase, bold, 12px)
  And I see "Mark all as read" link aligned right

**Scenario: Notification items render**
  Given the dropdown is open
  When I count the notification items
  Then there are 5 items

**Scenario: Each notification item structure**
  Given the dropdown is open
  When I look at any notification item
  Then it has a circular avatar image (40px)
  And it has a bold name
  And it has a gray action description

**Scenario: Unread items highlighted**
  Given the dropdown is open
  When I look at unread items
  Then their background is #fffaef

**Scenario: Hover state on items**
  Given the dropdown is open
  When I hover over a notification item
  Then the item background becomes #f9f9f9

**Scenario: Scrollable list**
  Given the dropdown is open
  Given there are more than 4 visible items
  When I look at the notification list
  Then its max height is 200px with overflow-y scroll

**Scenario: View All link**
  Given the dropdown is open
  When I look at the bottom of the dropdown
  Then I see a centered "View All" link

**Scenario: Dropdown max width**
  Given the dropdown is open
  When I measure the dropdown width
  Then it is at most 380px

**Scenario: Accessibility — keyboard**
  Given the dropdown is open
  When I press Escape
  Then the dropdown closes

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

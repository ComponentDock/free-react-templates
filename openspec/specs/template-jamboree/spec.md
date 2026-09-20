# Template: Jamboree (Conference / Event)

## Purpose

Jamboree is a single-page conference/event website in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Eventasia" free
template (source: https://colorlib.com/wp/template/eventasia/, preview:
https://preview.colorlib.com/theme/eventasia/), built under a DIFFERENT name
(**Jamboree**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design tokens

| Token                | Value                                              |
| -------------------- | -------------------------------------------------- |
| Primary gradient     | `#ca2dff` → `#8e96f8` → `#52fff1` (purple-blue-cyan) |
| Selection / accent   | `#C732FF` (purple)                                 |
| Font family          | `'Poppins', sans-serif`                            |
| Body text            | `#777`                                             |
| Heading color        | `#222`                                             |
| Banner overlay       | `#7f3f3b` at opacity 0.3                           |
| Footer bg            | `#222222`                                          |
| Speaker area bg      | `#f9f9ff`                                          |
| Calendar overlay     | `#222` at opacity 0.8                              |
| Button radius        | 25px (pill)                                        |

## Visual design notes

- Purple-to-cyan gradient is the signature visual element
- Banner with warm brownish overlay and countdown timer
- Facilities/services section with 6 icon columns
- Speaker cards with hover gradient overlay
- Calendar/event section with dark overlay
- Events list with date badges
- Footer with newsletter and social links

## Gherkin requirements

#### Scenario: Navbar renders with logo and navigation
  Given the page loads
  Then a navbar is visible with "Jamboree" logo
  And navigation links: Home, Speaker, Upcoming Event

#### Scenario: Hero displays conference info and countdown
  Given the hero section is visible
  Then a heading with conference name is displayed
  And a countdown timer with days/hours/mins/secs is visible
  And a "Buy Ticket" gradient button is present

#### Scenario: Facilities section shows 6 service columns
  Given the facilities section is visible
  Then 6 service columns are shown with icons and headings

#### Scenario: Speakers section shows speaker grid
  Given the speakers section is visible
  Then speaker cards are shown with photo, name, role
  And hovering reveals a gradient overlay with social links

#### Scenario: Calendar section shows upcoming events
  Given the calendar section is visible
  Then a calendar widget is displayed
  And upcoming event cards are listed

#### Scenario: Events section shows event list
  Given the events section is visible
  Then event cards are shown with image, date badge, title, description

#### Scenario: Footer links to Component Dock
  Given the footer is visible
  Then it contains a link to https://www.componentdock.com/

## Verification checklist

- [ ] Navbar with logo and nav links
- [ ] Hero with parallax bg, countdown, gradient CTA
- [ ] Facilities: 6 columns with icons
- [ ] Speakers: cards with gradient hover overlay
- [ ] Calendar: widget with event cards
- [ ] Events: list with date badges
- [ ] Footer with newsletter + Component Dock link
- [ ] Purple-to-cyan gradient used for buttons and accents
- [ ] No ColorLib references in app code
- [ ] Placeholder images use picsum.photos/seed/jamboree-*
- [ ] Font loaded via Google Fonts (Poppins)
- [ ] 100% test coverage maintained

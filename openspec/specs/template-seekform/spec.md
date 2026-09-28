# Template: SeekForm (Travel Search Form)

## Purpose

Recreation of ColorLib **Search Form 12** as a single-section travel search form
hero. This is a standalone hotel/travel booking search form — not a full-page
template. The entire viewport is a full-screen hero with a centered search card.

- **Source:** https://colorlib.com/wp/template/colorlib-search-12/
- **Preview:** https://colorlib.com/etc/searchf/colorlib-search-12/
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript
- **New name:** `seekform` (apps/seekform, @free-react-templates/seekform)
- **Category:** Travel / Search Form

## Design Tokens

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| brand-primary | `#ff8300` | Search button background |
| brand-primary-hover | `#e67600` | Search button hover state |
| brand-navy | `#002c71` | Active travel-type tab background, active tab arrow |
| brand-navy-hover | `#002c71` | Tab hover background (same as active) |
| overlay-start | `rgba(79, 172, 254, 0.8)` | Form card gradient start (light blue) |
| overlay-end | `rgba(0, 242, 254, 0.8)` | Form card gradient end (cyan) |
| text-dark | `#333` | Heading, input text, select text |
| text-medium | `#555` | Tab text (inactive), labels |
| text-placeholder | `#808080` | Input placeholder text |
| icon-light | `#ccc` | Input field icons |
| input-bg | `#fff` | Input backgrounds, tab backgrounds (inactive) |
| checkbox-green | `#00ad5f` | Checkbox check mark color |
| border-light | `#DDDDDD` | Choices select border |
| tab-arrow | `#002c71` | Down-pointing triangle arrow under active tab |

### Fonts

| Token | Family | Weights | Usage |
|-------|--------|---------|-------|
| font-body | Lato | 400, 700, 900 | Body, inputs, labels, buttons |
| font-heading | Poppins | 700 | Section legend "Search Hotels" |

### Spacing & Sizing

| Token | Value | Usage |
|-------|-------|-------|
| form-max-width | 940px | Search card max width |
| form-padding | 50px 70px 80px 70px | Card internal padding |
| form-border-radius | 10px | Card corner radius |
| tab-border-radius | 3px | Travel type tab corners |
| input-border-radius | 3px | Input field corners |
| button-border-radius | 3px | Search button corners |
| input-height | 60px | Form input height |
| button-height | 50px | Search button height |
| button-min-width | 100px | Search button min width |
| legend-font-size | 36px | "Search Hotels" heading size |

### Section Background

Full-viewport background image (`cover`, `center center`). The original uses a
Santorini/Greece white-buildings scenic photo. Use a placeholder travel image
via `https://picsum.photos/seed/seekform/1920/1080`.

## Visual Design (from Screenshot Analysis)

The template is a single full-viewport hero section. A centered card with a
semi-transparent light-blue-to-cyan gradient overlay contains the search form.
The background is a scenic travel photo (white Santorini-style buildings).

Inside the card:
1. "Search Hotels" heading in Poppins bold dark text
2. Row of 4 travel-type tabs with SVG icons (HOTEL ONLY active/navy, rest white)
3. "Going To" input with location pin icon
4. 3-column row: Check-In date, Check-Out date, Travelers dropdown
5. Two checkboxes: "Add a Flight" (checked), "Add a Car" (unchecked)
6. Orange "Search" button

## Gherkin Requirements

### Feature: SeekForm Travel Search Hero

#### Scenario: Full-viewport hero layout
- Given a user visits the SeekForm page
- Then the page displays a full-viewport hero section
- And the hero has a background travel image covering the entire viewport
- And a centered search form card is visible

#### Scenario: Search form card appearance
- Given the search form card is visible
- Then the card has a semi-transparent gradient overlay (light blue to cyan)
- And the card has rounded corners (10px radius)
- And the card contains the heading "Search Hotels"

#### Scenario: Travel type tabs
- Given the search form is displayed
- Then 4 travel type tabs are visible: "HOTEL ONLY", "HOTEL + FLIGHT", "HOTEL + FLIGHT + CAR", "HOTEL + CAR"
- And the "HOTEL ONLY" tab is active with navy background and white text
- And each tab has SVG icons representing its travel combination
- And a navy triangle arrow points down from the active tab
- When a user clicks a different tab
- Then that tab becomes active (navy background, white text, arrow)
- And the previously active tab becomes inactive (white background, dark text)

#### Scenario: Going To input field
- Given the form is displayed
- Then a "GOING TO" input field is visible with a location pin icon on the left
- And the input has placeholder text "Destination, hotel name"
- And the input field is white with 60px height

#### Scenario: Date and travelers row
- Given the form is displayed
- Then a row of 3 fields is visible: CHECK-IN, CHECK-OUT, TRAVELERS
- And CHECK-IN and CHECK-OUT show date picker fields with placeholder "mm/dd/yy"
- And TRAVELERS shows a dropdown with "1 adult" selected
- And each field has a label above the input in uppercase small bold text

#### Scenario: Checkbox options
- Given the form is displayed
- Then two checkbox options are visible: "ADD A FLIGHT" and "ADD A CAR"
- And "ADD A FLIGHT" is checked by default
- And "ADD A CAR" is unchecked by default
- When a user toggles a checkbox
- Then the checkbox state changes

#### Scenario: Search button
- Given the form is displayed
- Then an orange "Search" button is visible
- And the button has white text and rounded corners (3px)
- When a user hovers over the button
- Then the button background darkens to #e67600

#### Scenario: Responsive layout
- Given a user views the page on a mobile device (width < 768px)
- Then the form padding reduces
- And the travel type tabs scroll horizontally
- And the date/travelers row stacks vertically
- And the heading is centered

## Verification Checklist

- [ ] Full-viewport hero with background image (cover, center)
- [ ] Centered card (max-width 940px, 10px radius, gradient overlay)
- [ ] "Search Hotels" heading (Poppins 700, 36px, dark color)
- [ ] 4 travel-type tabs with SVG icons (flexbox row)
- [ ] Active tab: navy (#002c71) background, white text, down arrow
- [ ] Inactive tabs: white background, #555 text
- [ ] Tab hover: navy background, white text
- [ ] "Going To" input with location pin icon, placeholder text
- [ ] 3-column row: Check-In, Check-Out, Travelers
- [ ] Date inputs with "mm/dd/yy" placeholder
- [ ] Travelers dropdown with "1 adult" default
- [ ] Checkboxes: "Add a Flight" (checked), "Add a Car" (unchecked)
- [ ] Orange Search button (#ff8300), hover darken (#e67600)
- [ ] Responsive: stacked layout on mobile (< 768px)
- [ ] Footer links to https://www.componentdock.com/
- [ ] No references to ColorLib in app code
- [ ] Placeholder images via picsum.photos
- [ ] Google Fonts: Lato + Poppins loaded in index.html

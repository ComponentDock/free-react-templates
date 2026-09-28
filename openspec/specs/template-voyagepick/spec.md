# Template: Voyagepick (Search Form)

## Purpose

Recreation of ColorLib **Search Form V16** (`colorlib-search-16`).
Preview URL: https://colorlib.com/wp/template/colorlib-search-16/
Downloaded source: https://preview.colorlib.com/downloads/free/colorlib-search-16.zip
Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript

A single-page travel search form with three tabbed panels (Hotels, Car, Flight),
a full-viewport scenic background image, and a centered white card with a
colored tab bar. The form provides date pickers, dropdown selects, a traveller
quantity selector, and checkbox options.

## Source structure (from downloaded zip)

The original has a single `index.html` with one `page-wrapper` containing a
centered card (`wrapper--w680`, max-width 680px). Three tabs rendered via
`<ul class="tab-list">` with `<a>` links toggling `.cl-tab-pane` visibility
through a `snippet.js` script. No build step — plain CSS.

### Section order (tabs are mutually exclusive panels):

1. **Background** — full-viewport scenic image (`bg-img-01.jpg`), `min-height: 100vh`
2. **Card wrapper** — centered, max-width 680px, with `card-1` shadow
3. **Tab bar** — red background (`#fa4251`), three tabs: Hotels, Car, Flight
4. **Hotels panel** (default visible in screenshot? No — Flight is `cl-active`):
   - WHERE input (text)
   - CHECK-IN / CHECK-OUT date pickers (side by side)
   - TRAVELLERS dropdown with room/person quantity selector
   - Add a flight / Add a car checkboxes
   - SEARCH button
5. **Car panel**:
   - LOCATION text input
   - DRIVER AGE / CAR GROUP dropdowns (side by side)
   - PICK UP date / TIME dropdown (side by side)
   - DROP OFF date / TIME dropdown (side by side)
   - SEARCH button
6. **Flight panel** (shown active in the screenshot):
   - ORIGIN text input
   - DESTINATION text input
   - DEPARTING / RETURNING date pickers (side by side)
   - First Class / Business / Economy checkboxes
   - SEARCH button

## Design tokens (extracted from source CSS)

### Colors
| Token | Value | Usage |
|---|---|---|
| Tab bar background | `#fa4251` | Red tab strip at top of card |
| Submit button bg | `#00ad5f` | Green SEARCH button |
| Submit button hover | `#00994b` | Darker green on hover |
| Card body bg | `#ffffff` | White card background |
| Body text | `#555555` | Input text, value text |
| Label text | `#999999` | Uppercase field labels |
| Input underline | `#cccccc` | 2px bottom border on inputs |
| Tab text inactive | `rgba(255,255,255,0.6)` | Dimmed tab labels |
| Tab text active | `#ffffff` | Bright active tab label |
| Tab arrow / caret | `#fa4251` | CSS triangle below active tab |
| Checkbox checkmark | `#00ad5f` | Green check for checked state |
| Checkbox border | `#cccccc` | Unchecked checkbox border |
| Quantity button border | `#cccccc` | +/- circular buttons |
| Quantity button hover bg | `#cccccc` | Filled background on hover |
| "Add room" link | `#00ad5f` | Green link text |
| Input icon | `#808080` | Chevron-down icon color |
| Dropdown bg | `#ffffff` | Room selector dropdown |

### Typography
| Element | Font | Weight | Size |
|---|---|---|---|
| Body | Lato, Arial, sans-serif | 400 | 14px |
| Tab labels | Poppins, Arial, sans-serif | 500 | 22px uppercase |
| Input text | (inherit Lato) | 700 | 18px |
| Labels | (inherit Lato) | 700 | 12px uppercase |
| Button text | (inherit Lato) | 700 | 16px uppercase |
| Quantity value | (inherit Lato) | 700 | 18px |
| Person name | (inherit Lato) | 700 | 18px |
| Checkbox text | (inherit Lato) | 400 | 15px |

### Layout
| Property | Value |
|---|---|
| Card max-width | 680px |
| Card border-radius | 10px (all corners) |
| Tab bar border-radius | 10px top-left, 10px top-right |
| Card shadow | `0px 8px 20px 0px rgba(0,0,0,0.15)` |
| Tab bar padding | 0 20px |
| Tab pane padding | 44px 55px (30px on mobile) |
| Tab pane padding-bottom | 45px |
| Input group margin-bottom | 34px |
| Column gap (side-by-side) | 30px (via `calc((100% - 30px) / 2)`) |
| Submit button height | 50px line-height |
| Submit button margin-top | 32px |

### Component shapes
- Checkboxes: 20x20px, 3px border-radius, custom checkmark via CSS `:after` pseudo-element
- Quantity +/- buttons: 32x32px, 50% border-radius (circle)
- Dropdown popover: 10px border-radius, `box-shadow: 0px 8px 20px 0px rgba(0,0,0,0.15)`
- Tab active indicator: 8px CSS triangle below active tab

### Background
- Full-viewport scenic mountain landscape image, `center center/cover no-repeat`
- Original asset: `bg-img-01.jpg` — use placeholder: `https://picsum.photos/seed/voyagepick/1920/1080`

## Gherkin requirements

### Scenario: Page renders with scenic background
  Given the user opens the Voyagepick page
  Then the background covers the full viewport
  And a centered card is visible in the middle of the page

### Scenario: Tab bar displays three tabs
  Given the card is visible
  Then three tabs are displayed: "HOTELS", "CAR", "FLIGHT"
  And the tab bar has a red background
  And the first tab ("HOTELS") is active by default

### Scenario: Clicking a tab switches the visible panel
  Given the "HOTELS" tab is active
  When the user clicks the "FLIGHT" tab
  Then the flight panel is displayed
  And the hotels panel is hidden
  And the "FLIGHT" tab text is bright white
  And the other tab texts are dimmed

### Scenario: Active tab shows downward caret
  Given the "HOTELS" tab is active
  Then a small red triangle appears below the "HOTELS" tab

### Scenario: Hotels panel has correct fields
  Given the "HOTELS" tab is active
  Then the following fields are visible:
    | Label | Type |
    | WHERE | text input |
    | CHECK-IN | date input |
    | CHECK-OUT | date input |
    | TRAVELLERS | dropdown selector |
  And a checkbox "Add a flight" is visible (checked by default)
  And a checkbox "Add a car" is visible (unchecked)
  And a green "SEARCH" button is visible

### Scenario: Car panel has correct fields
  Given the user clicks the "CAR" tab
  Then the following fields are visible:
    | Label | Type |
    | LOCATION | text input |
    | DRIVER AGE | dropdown |
    | CAR GROUP | dropdown |
    | PICK UP | date input |
    | TIME | dropdown |
    | DROP OFF | date input |
    | TIME | dropdown |
  And a green "SEARCH" button is visible

### Scenario: Flight panel has correct fields
  Given the user clicks the "FLIGHT" tab
  Then the following fields are visible:
    | Label | Type |
    | ORIGIN | text input |
    | DESTINATION | text input |
    | DEPARTING | date input |
    | RETURNING | date input |
  And checkboxes "First Class", "Business", "Economy" are visible
  And "Economy" is checked by default
  And a green "SEARCH" button is visible

### Scenario: Travellers dropdown opens with room selector
  Given the "HOTELS" tab is active
  When the user clicks the TRAVELLERS input
  Then a dropdown popover opens
  And it shows "Room 1" with Adults and Children counters
  And minus/plus circular buttons are visible for each counter
  And an "Add room" link is visible at the bottom

### Scenario: Minus button decrements traveller count
  Given the travellers dropdown is open
  And the Adults count is 1
  When the user clicks the minus button for Adults
  Then the Adults count becomes 0
  And the minus button is at minimum (count 0)

### Scenario: Plus button increments traveller count
  Given the travellers dropdown is open
  When the user clicks the plus button for Children
  Then the Children count increments by 1

### Scenario: Form inputs have underline style
  Given any form panel is visible
  Then all text and date inputs have a gray bottom border
  And input labels are uppercase and small
  And input text is bold and larger than label text

### Scenario: Search button is full-width green
  Given any form panel is visible
  Then the SEARCH button spans the full card width
  And the button background is green
  And the button text is white uppercase bold
  And on hover the button becomes darker green

### Scenario: Card has rounded corners and shadow
  Given the card is rendered
  Then the card has 10px border-radius
  And the card has a box-shadow of 0 8px 20px rgba(0,0,0,0.15)

### Scenario: Responsive layout on mobile
  Given the viewport width is less than 768px
  Then the card padding reduces
  And side-by-side columns stack vertically
  And the tab bar padding adjusts for smaller screens

## Verification checklist

- [ ] Background image fills full viewport (`min-height: 100vh`)
- [ ] Card is centered, max-width 680px
- [ ] Tab bar background is `#fa4251` (red)
- [ ] Three tabs: HOTELS, CAR, FLIGHT (uppercase, Poppins 500 22px)
- [ ] Active tab text is white, inactive tabs are semi-transparent white
- [ ] Active tab has a red triangle caret pointing down
- [ ] Hotels panel: WHERE input, CHECK-IN/CHECK-OUT dates, TRAVELLERS dropdown, checkboxes, SEARCH button
- [ ] Car panel: LOCATION, DRIVER AGE, CAR GROUP, PICK UP, TIME, DROP OFF, TIME, SEARCH
- [ ] Flight panel: ORIGIN, DESTINATION, DEPARTING, RETURNING, class checkboxes, SEARCH
- [ ] Flight tab is the default active panel (matching the original screenshot)
- [ ] Inputs have 2px bottom border (`#cccccc`)
- [ ] Labels are uppercase, 12px, bold, `#999`
- [ ] Input values are bold, 18px, `#555`
- [ ] SEARCH button is full-width, 50px height, `#00ad5f` green, uppercase bold
- [ ] Button hover changes to `#00994b`
- [ ] Custom checkbox with green checkmark (`#00ad5f`)
- [ ] Travellers dropdown opens with room/person counters and +/- circular buttons
- [ ] Card has 10px border-radius and `0 8px 20px rgba(0,0,0,0.15)` shadow
- [ ] Responsive: columns stack below 768px, padding adjusts
- [ ] No reference to ColorLib in app code
- [ ] Footer links to Component Dock
- [ ] CNAME file: `voyagepick.free.componentdock.com`
- [ ] Package name: `@free-react-templates/voyagepick`

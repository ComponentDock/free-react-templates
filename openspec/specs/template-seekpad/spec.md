# Template: Seekpad (Search Form)

## Purpose

Recreation of ColorLib **Colorlib Search Form V20** (slug: `colorlib-search-20`).
Preview: https://preview.colorlib.com/theme/colorlib-search-20/
Source page: https://colorlib.com/wp/template/colorlib-search-20/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-20.jpg

A single-page flight search form with a full-viewport background image and a
centered card overlaid with a purple-to-blue gradient. The form contains six
fields across three rows: from/to text inputs, depart/return date pickers,
and a passengers dropdown with room/guest counters plus a search button.

Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript.

## Design Tokens

Extracted from `css/style.css` of the ColorLib download.

| Token | Value | Source |
|---|---|---|
| **Body font** | `"Poppins", "Arial", "Helvetica Neue", sans-serif` (400, 14px base) | `.body` |
| **Dropdown font** | `"Lato", "Arial", "Helvetica Neue", sans-serif` | `.dropdown-select` |
| **Card gradient** | `linear-gradient(to top, #3d2161 0%, #004d91 100%)` | `.card-6:before` |
| **Card gradient opacity** | `0.9` | `.card-6:before` |
| **Brand/accent color** | `#ff4b5a` (red-coral) | `.btn-submit` |
| **Brand hover** | `#eb3746` | `.btn-submit:hover` |
| **Interactive accent** | `#6c7ae0` (periwinkle) | `#btn-add-room`, `.minus:hover`, `.plus:hover` |
| **Input background** | `#fff` | `.input--style-1` |
| **Input text color** | `#666` | `.input--style-1` |
| **Input placeholder** | `#ccc` | `.input--style-1::-webkit-input-placeholder` |
| **Label color** | `#fff` (white on gradient) | `.label` |
| **Label weight** | `700`, `18px` | `.label` |
| **Border radius** | `10px` (inputs, card, button, dropdown) | `.card-6`, `.input--style-1`, `.btn-submit`, `.dropdown-select` |
| **Button line-height** | `60px`, `18px bold uppercase white` | `.btn-submit` |
| **Input padding** | `16.5px 20px`, font `18px` | `.input--style-1` |
| **Card padding** | `60px 55px` desktop / `40px 30px` mobile | `.card-6 .cl-card-body` |
| **Page wrapper padding** | `240px` top, `120px` bottom | `.p-t-240`, `.p-b-120` |
| **Wrapper max-width** | `900px` | `.wrapper--w900` |
| **Quantity buttons** | `32px` circle, `2px solid #ccc`, hover `#6c7ae0` | `.minus`, `.plus` |
| **Dropdown shadow** | `0px 8px 20px rgba(0,0,0,0.15)` | `.dropdown-select` |
| **Add-room link** | `#6c7ae0`, bold, `16px` | `#btn-add-room` |
| **Transition** | `all 0.4s ease` (global) | `a`, `.btn-submit`, `.input-icon`, etc. |
| **Background image** | Full-page cover (`bg-img-03.jpg`) | `.bg-img-3` → placeholder `picsum.photos` |

## Gherkin Requirements

### R1: Page Layout

**Scenario: Full-viewport search form**
- Given a user visits the Seekpad page
- Then a full-viewport background image is displayed covering the page
- And a centered card (max-width 900px) is positioned with 240px top padding
- And the card has a purple-to-blue gradient overlay at 0.9 opacity with 10px border-radius

**Scenario: Responsive layout**
- Given a user views the page on a mobile device (< 768px)
- Then the card padding adjusts to 40px 30px
- And page top padding reduces to 150px
- And bottom padding increases to 250px
- And form columns stack vertically (full width)

### R2: Form Fields — From / To

**Scenario: From and To text inputs**
- Given the form is visible
- Then there are two text inputs side by side labeled "from" and "to"
- And each input has placeholder "City, Region or Airport"
- And each input has a white background, 10px border-radius, 18px font, and #666 text color
- And both inputs are required

### R3: Form Fields — Depart / Return

**Scenario: Date pickers**
- Given the form is visible
- Then there are two date inputs side by side labeled "Depart" and "Return"
- And each date input matches the text input styling (white bg, 10px radius)
- And the calendar picker indicator is visible with 0.6 opacity

### R4: Passengers Dropdown

**Scenario: Passengers input with dropdown**
- Given the form is visible
- Then a "Passengers" field displays "1 Adult, 0 Children, 1 Room" as default value
- And a "+" icon is positioned on the right side of the field
- And clicking the field or icon opens a dropdown panel below

**Scenario: Dropdown content**
- Given the passengers dropdown is open
- Then "Room 1" is displayed as a heading
- And an "Adults" row shows a minus button, number input (default 1), and plus button
- And a "Children" row shows a minus button, number input (default 0), and plus button
- And an "Add room" link appears at the bottom with a top border separator

**Scenario: Quantity controls**
- Given the dropdown is open
- When the user clicks the plus button for Adults
- Then the Adults count increments by 1
- And the summary text in the input field updates accordingly
- When the user clicks the minus button
- Then the count decrements (minimum 0)
- And quantity buttons are 32px circles with 2px solid #ccc border
- And on hover, quantity buttons turn #6c7ae0 background and white text

**Scenario: Add room**
- Given the dropdown is open
- When the user clicks "Add room"
- Then a new room section (Room 2) appears with its own Adults/Children counters
- And the dropdown scrolls if content exceeds 210px height

### R5: Search Button

**Scenario: Search submission**
- Given the form is visible
- Then a full-width "search" button is displayed below the Passengers/Action row
- And the button has a #ff4b5a background, white uppercase text, 18px bold, 60px height
- And the button has 10px border-radius
- And on hover the button background changes to #eb3746

### R6: Visual Fidelity

**Scenario: Typography**
- Given the page renders
- Then the body uses Poppins font at 14px
- And labels are white, bold, 18px, with 8px left padding and 12px bottom margin
- And input fields use Poppins at 18px

**Scenario: Transitions**
- Given any interactive element is present
- Then hover/state changes animate with `all 0.4s ease`

**Scenario: Footer branding**
- Given the page renders
- Then a footer section links to https://www.componentdock.com/ branded as "Component Dock"

## Verification Checklist

- [ ] Full-viewport background image with placeholder (picsum.photos/seed/seekpad-1/1920/1080)
- [ ] Centered card (900px max-width) with purple-to-blue gradient overlay at 0.9 opacity
- [ ] Two-column form grid (20px gap) — stacks on mobile
- [ ] From/To text inputs: white bg, 10px radius, placeholder "City, Region or Airport"
- [ ] Depart/Return date inputs: same styling, native date picker
- [ ] Passengers field: displays default "1 Adult, 0 Children, 1 Room", opens dropdown
- [ ] Dropdown: Room 1 with Adults (default 1) and Children (default 0) counters
- [ ] +/- quantity buttons: 32px circles, #6c7ae0 hover
- [ ] "Add room" link with border separator
- [ ] Full-width search button: #ff4b5a bg, white uppercase text, 60px height, 10px radius
- [ ] Hover states: button → #eb3746, +/- → #6c7ae0 bg, add-room → underline
- [ ] Responsive: columns stack at 768px, padding adjusts
- [ ] Footer with Component Dock link
- [ ] No ColorLib references in app code
- [ ] Poppins font loaded via Google Fonts
- [ ] All tests pass with 100% coverage

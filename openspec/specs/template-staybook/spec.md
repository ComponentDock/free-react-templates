# StayBook — Four-Step Hotel Reservation Wizard

> Recreation of ColorLib Wizard 2 (https://colorlib.com/wp/template/colorlib-wizard-2/)
> Source HTML: https://colorlib.com/etc/bwiz/colorlib-wizard-2/index.html
> Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-2.jpg
> Note: Preview at `preview.colorlib.com/theme/colorlib-wizard-2/` returned 404;
> source HTML + CSS from the download bundle were used as primary references.

## Purpose

A four-step hotel reservation wizard. Step 1 ("Choose Date") collects
check-in/check-out dates, stay duration, and room count. Step 2 ("Choose Room")
shows a summary board of room assignments plus per-room date pickers and
adult/child selectors. Step 3 ("Make a Reservation") collects guest contact
info (first name, last name, phone, email, address, special requirements) and
terms acceptance. Step 4 ("Confirmation") shows a billing summary with line
items, VAT, total, and payment option radio (Full Payment / 10% Deposit).
The layout is split: an image panel on the left with "Your reservation" heading,
and the wizard form on the right. The original uses jQuery Steps; we use React
state for step navigation.

## Design Tokens

| Token                | Value                                  | Source                               |
| -------------------- | -------------------------------------- | ------------------------------------ |
| Brand color          | `#edc948` (gold)                       | CSS `.forward`, step indicator, links |
| Brand hover          | `#d4b43f` (dark gold)                  | CSS `button:hover`                   |
| Accent color         | `#81acee` (sky blue)                   | CSS `.checkbox-circle .checkmark`, dropdown hover |
| Page background      | `#f9f6f1` (warm cream) + background image | CSS `.wrapper`                    |
| Form area background | dark navy with texture overlay         | CSS `.wizard` (`url("../images/form-content-bg.png")`) |
| Body font            | Poppins Regular (400)                  | CSS `body`                           |
| Medium font          | Poppins Medium (500)                   | CSS `.steps li a`, `button`          |
| Heading font         | Bitter Regular                         | CSS `.image-holder h3`               |
| Icon fonts           | Linearicons + Material Design Iconic   | CSS `<link>` in HTML                 |
| Heading text         | `#fff` (white, on dark bg)             | CSS `.image-holder h3`               |
| Body text            | `#fff` (white, on dark bg)             | CSS `body`, `.form-control`          |
| Board text           | `#012353` (dark navy)                  | CSS `.board-inner`                   |
| Input border         | `1px solid #5d718e` (muted navy)       | CSS `.form-control`                  |
| Input focus border   | `1px solid #e6e6e6` (light gray)       | CSS `.form-control:focus`            |
| Input height         | 34px                                   | CSS `.form-control`                  |
| Input font-size      | 14px                                   | CSS `.form-control`                  |
| Placeholder color    | `#fff` (white)                         | CSS `::-webkit-input-placeholder`    |
| Select control border| `1px solid #5d718e` (muted navy)       | CSS `.select-control`                |
| Select control height| 34px                                   | CSS `.select-control`                |
| Dropdown bg          | `#fff` (white)                         | CSS `.select .dropdown`              |
| Dropdown border      | `1px solid #81acee` (sky blue)         | CSS `.select .dropdown`              |
| Dropdown text        | `#999`                                 | CSS `.select .dropdown`              |
| Dropdown hover       | `#81acee` bg, `#fff` text              | CSS `.dropdown li:hover`             |
| Step indicator border| `3px solid rgba(242,242,242,0.4)` left  | CSS `.steps ul`                      |
| Step active text     | `#edc948` (gold)                       | CSS `.steps li.current a`            |
| Step inactive text   | `#fff` (white)                         | CSS `.steps li a`                    |
| Step active indicator| `#edc948` (gold, 3px bar)              | CSS `.steps li.current a:before`     |
| Step font            | Poppins Medium, 15px                   | CSS `.steps li a`                    |
| Step height          | 31px                                   | CSS `.steps li`                      |
| Step spacing         | 16px bottom margin                     | CSS `.steps li`                      |
| Button bg            | `#edc948` (gold)                       | CSS `button`                         |
| Button text          | `#012353` (dark navy)                  | CSS `button`                         |
| Button hover         | `#d4b43f` (dark gold)                  | CSS `button:hover`                   |
| Button dimensions    | 164px × 42px (default)                 | CSS `button`                         |
| Button radius        | 21px (fully rounded)                   | CSS `button`                         |
| Button text-style    | uppercase, Poppins Medium, 14px        | CSS `button`                         |
| Button icon margin   | 10px left                              | CSS `button i`                       |
| Board bg             | `#fff` (white)                         | CSS `.board-inner`                   |
| Board text           | `#012353` (dark navy)                  | CSS `.board-inner`                   |
| Board padding        | 22px 33px 13px 21px                    | CSS `.board-inner`                   |
| Bill border          | `1px solid #fff`                       | CSS `.bill`                          |
| Bill cell border     | `1px solid #5d718e` (bottom)           | CSS `.bill-cell`                     |
| Price text           | `#edc948` (gold), Poppins Medium       | CSS `.bill-item .price`              |
| Total price size     | 17px                                   | CSS `.bill-item.total-price .price`  |
| Checkbox border      | `1px solid #fff`                       | CSS `.checkmark`                     |
| Checkbox size        | 15px × 14px                            | CSS `.checkmark`                     |
| Radio circle         | 12px × 12px, border-radius 50%         | CSS `.checkbox-circle .checkmark`    |
| Radio dot            | 4px × 4px, white                       | CSS `.checkbox-circle .checkmark:after` |
| Wizard padding       | 62px 60px 58px 62px (desktop)          | CSS `.wizard`                        |
| Steps width          | 26.05%                                 | CSS `.wizard .steps`                 |
| Content width        | 73.95%                                 | CSS `.wizard .content`               |
| Image panel width    | ~30% (image-holder)                    | CSS `.image-holder`                  |

## Requirements

### Requirement: Renders split layout with image panel and wizard form

The template SHALL display a full-viewport layout with an image panel on the
left (showing a hotel/room image and "Your reservation" heading) and the
wizard form on the right.

#### Scenario: Initial page load

- **WHEN** the user loads the page
- **THEN** an image panel is visible on the left with heading "Your reservation"
- **AND** a wizard form area is visible on the right
- **AND** a vertical step indicator is visible in the form area

### Requirement: Step indicator shows four named steps

The template SHALL display a vertical step indicator with four items:
"Choose Date", "Choose Room", "Make a Reservation", and "Confirmation".

#### Scenario: Step 1 is active by default

- **WHEN** the user loads the page
- **THEN** "Choose Date" is highlighted (gold text, gold left bar)
- **AND** the other three steps show white text with a semi-transparent left bar

#### Scenario: Step navigation highlights active step

- **WHEN** the user advances to step 2
- **THEN** "Choose Room" becomes highlighted in gold
- **AND** "Choose Date" returns to white text

### Requirement: Step 1 — Choose Date

Step 1 SHALL display check-in and check-out date inputs, duration selector
(1-5 nights), and room count selector (1-5 rooms).

#### Scenario: Step 1 fields visible

- **WHEN** the user is on step 1
- **THEN** a "Check in" date input is visible
- **AND** a "Check out" date input is visible
- **AND** a "Duration" dropdown with options "1 Night" through "5 Night" is visible
- **AND** a "Room" dropdown with options "1 Room" through "5 Room" is visible
- **AND** a "Book now" button with a right-arrow icon is visible

#### Scenario: Dropdown interaction

- **WHEN** the user clicks the "Duration" dropdown
- **THEN** a list of duration options appears
- **AND** selecting an option updates the dropdown display

### Requirement: Step 2 — Choose Room

Step 2 SHALL display a summary board on the left showing room details and a
form area on the right with date pickers and per-room adult/child selectors.

#### Scenario: Step 2 fields visible

- **WHEN** the user navigates to step 2
- **THEN** a summary board showing "Room 1: Small Room", "Room 2: Luxury Room" is visible
- **AND** two date picker inputs are visible in the form area
- **AND** a "Room 1" section with adult and children dropdowns is visible
- **AND** a "Room 2" section with adult and children dropdowns is visible
- **AND** a "Book now" button is visible

#### Scenario: Adult dropdown interaction

- **WHEN** the user clicks the "1 Adult" dropdown for Room 1
- **THEN** options "1 Adult", "2 Adults", "3 Adults" appear

### Requirement: Step 3 — Make a Reservation

Step 3 SHALL display contact information fields and a terms checkbox.

#### Scenario: Step 3 fields visible

- **WHEN** the user navigates to step 3
- **THEN** a "First Name" input is visible
- **AND** a "Last Name" input is visible
- **AND** a "Phone" input is visible
- **AND** a "Mail" input is visible
- **AND** an "Address" input (full width) is visible
- **AND** a "Special Requirements" textarea is visible
- **AND** a checkbox "I have read and accept the terms and conditions" is visible
- **AND** a "Book by email" button is visible

#### Scenario: Terms checkbox interaction

- **WHEN** the user clicks the terms checkbox
- **THEN** a checkmark appears in the checkbox

### Requirement: Step 4 — Confirmation

Step 4 SHALL display a billing summary with room details, pricing, VAT,
total, and payment options.

#### Scenario: Step 4 fields visible

- **WHEN** the user navigates to step 4
- **THEN** a "Check In" and "Check Out" summary is visible
- **AND** a billing table with Room 1 and Room 2 line items is visible
- **AND** a "VAT 8%" line is visible
- **AND** a "Total Price" line is visible
- **AND** radio buttons for "Full Payment" and "10% Deposit" are visible
- **AND** a "Confirmation" button is visible

#### Scenario: Payment radio interaction

- **WHEN** the user clicks "10% Deposit"
- **THEN** "Full Payment" becomes deselected
- **AND** "10% Deposit" becomes selected

### Requirement: Button navigation between steps

Each step (except step 4) SHALL have a "Book now" forward button. Step 4
SHALL have a "Confirmation" button.

#### Scenario: Forward button advances to next step

- **WHEN** the user clicks "Book now" on step 1
- **THEN** the form transitions to step 2
- **AND** the step indicator updates

#### Scenario: Confirmation button on step 4

- **WHEN** the user is on step 4
- **THEN** the button reads "Confirmation" instead of "Book now"

### Requirement: Responsive layout

The template SHALL be responsive across desktop, tablet, and mobile.

#### Scenario: Mobile layout

- **WHEN** the viewport width is ≤ 767px
- **THEN** the image panel and wizard stack vertically
- **AND** the step indicator moves to the top (horizontal or stacked)
- **AND** form rows stack vertically (single column)
- **AND** buttons are full-width

## Verification Checklist

- [ ] Split layout: image panel left, wizard form right
- [ ] "Your reservation" heading on image panel
- [ ] Four-step vertical indicator with gold active state
- [ ] Step 1: check-in/out dates, duration dropdown, room count dropdown
- [ ] Step 2: room summary board, date pickers, adult/child selects per room
- [ ] Step 3: first name, last name, phone, email, address, special requirements, terms checkbox
- [ ] Step 4: billing summary, VAT, total, payment radio, confirmation button
- [ ] Gold accent buttons with rounded corners (21px radius)
- [ ] Dark navy form area with white text
- [ ] Custom dropdowns with blue border and hover
- [ ] Custom checkbox and radio button styling
- [ ] Responsive: stacked on mobile
- [ ] 100% test coverage (Vitest + Testing Library)
- [ ] Footer links to Component Dock

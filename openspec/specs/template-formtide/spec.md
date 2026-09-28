# Template: FormTide (Advanced Registration Form)

## Purpose

Recreation of ColorLib "Colorlib Reg Form V36" — a two-column advanced registration form with General Information and Contact Details sections, underlined inputs, dropdown selects, and a pill-shaped submit button.

- **Source**: https://colorlib.com/wp/template/colorlib-regform-36/
- **Preview**: https://preview.colorlib.com/theme/colorlib-regform-36/ (404 at prep time; downloaded source archive + screenshot + CSS used as references)
- **Stack**: React 19 + Vite + Tailwind CSS 4 + TypeScript
- **Category**: Advanced registration form (two-column, multi-field)

## Design tokens

Extracted from source CSS (`css/style.css`) and screenshot analysis:

| Token | Value | Source |
|-------|-------|--------|
| Page background | `#75E2E9` teal base | `.page-content { background: #75e2e9; }` |
| Page gradient | `linear-gradient(136deg, rgb(149,153,226) 0%, rgb(139,198,236) 100%)` | `.page-content` — purple-blue to light blue at 136deg |
| Card background | `#FFFFFF` white | `.form-v10-content { background: #fff; }` |
| Card border-radius | `10px` | `.form-v10-content { border-radius: 10px; }` |
| Card box-shadow | `0px 8px 20px 0px rgba(0, 0, 0, 0.15)` | `.form-v10-content` |
| Card width | `1100px` | `.form-v10-content { width: 1100px; }` |
| Card margin | `95px 0` | `.form-v10-content { margin: 95px 0; }` |
| Font family | `'Montserrat', sans-serif` | Google Fonts — Regular (400), Medium (500), Bold (700) |
| Left section background | Transparent (inherits card white) | `.form-left` — no background override |
| Right section background | `#4835D4` vibrant purple/indigo | `.form-right { background: #4835d4; }` |
| Left heading color | `#2271DD` blue | `.form-left h2 { color: #2271dd; }` |
| Right heading color | `#FFFFFF` white | `.form-right h2 { color: #fff; }` |
| Heading font-weight | `500` (medium) | `.form-detail h2 { font-weight: 500; }` |
| Heading font-size | `25px` | `.form-detail h2 { font-size: 25px; }` |
| Heading padding | `33px 50px 0 60px` | `.form-detail h2 { padding: 33px 50px 0 60px; }` |
| Heading margin-bottom | `34px` | `.form-detail h2 { margin-bottom: 34px; }` |
| Input font-size | `16px` | `.form-detail select, .form-detail input { font-size: 16px; }` |
| Input padding | `11.5px 15px 15px 15px` | — |
| Input left text color | `#000000` | `.form-left input { color: #000; }` |
| Input right text color | `#FFFFFF` | `.form-right input { color: #fff; }` |
| Input left border-bottom | `1px solid #CCCCCC` | `.form-left input, .form-left select { border-bottom: 1px solid #ccc; }` |
| Input left focus border-bottom | `1px solid #999999` | `.form-left input:focus, .form-left select:focus` |
| Input right border-bottom | `1px solid rgba(255, 255, 255, 0.3)` | `.form-right input, .form-right select` |
| Input right focus border-bottom | `1px solid #CCCCCC` | `.form-right input:focus, .form-right select:focus` |
| Input border (other sides) | `1px solid transparent` | `.form-detail select, .form-detail input { border: 1px solid transparent; }` |
| Input background | Transparent | — |
| Left placeholder color | `#666666` | — |
| Right placeholder color | `#F2F2F2` | — |
| Left select text color | `#666666` | — |
| Right select text color | `#F2F2F2` | — |
| Right select option background | `#4835D4` | — |
| Select chevron color (left) | `#666666` | `.form-left .select-btn { color: #666; }` |
| Select chevron color (right) | `#F2F2F2` | `.form-right .select-btn { color: #f2f2f2; }` |
| Checkbox label text color | `#E5E5E5` | `.form-checkbox p { color: #e5e5e5; }` |
| Checkbox label font-size | `14px` | — |
| Terms link color | `#FFFFFF` underlined | `.form-checkbox .text { color: #fff; text-decoration: underline; }` |
| Checkmark border | `1px solid #E5E5E5` | `.checkmark { border: 1px solid #e5e5e5; }` |
| Submit button background | `#FFFFFF` white | `.register { background: #fff; }` |
| Submit button text color | `#333333` | `.register { color: #333; }` |
| Submit button font-weight | `700` (bold) | `.register { font-weight: 700; }` |
| Submit button font-size | `15px` | — |
| Submit button border-radius | `25px` (pill shape) | `.register { border-radius: 25px; }` |
| Submit button box-shadow | `0px 6px 17px 0px rgba(0, 0, 0, 0.15)` | — |
| Submit button width | `180px` | `.register { width: 180px; }` |
| Submit button padding | `12.5px` (all sides) | — |
| Submit button hover | `#CCCCCC` background | `.register:hover { background: #ccc; }` |
| Form row margin-bottom | `24px` | `.cl-form-row { margin-bottom: 24px; }` |
| Form row left padding | `60px` | `.cl-form-row { padding-left: 60px; }` |
| Form row right padding | `50px` | `.cl-form-row { padding-right: 50px; }` |
| Checkbox area margin-top | `37px` | `.form-checkbox { margin-top: 37px; }` |
| Submit area margin | `44px 0 10px` | `.form-row-last { margin: 44px 0 10px; }` |

## Visual design notes (from screenshot + source CSS)

- Full-page background: teal-to-purple-blue gradient at 136deg (`#75E2E9` base, gradient `rgb(149,153,226)` → `rgb(139,198,236)`).
- Large centered white card (1100px wide, 10px radius, drop shadow) with a two-column flex layout.
- **Left column** (General Information): transparent/white background, blue heading `#2271DD`, underline-only inputs with gray placeholder, dropdown selects with chevron icon.
- **Right column** (Contact Details): solid purple `#4835D4` background, white heading, white underline-only inputs with light placeholder, same dropdown treatment.
- **Register Badge button**: pill-shaped (25px radius), white background, dark text, centered at bottom of right column with drop shadow.
- Clean, modern, flat aesthetic. No top/bottom borders on inputs — only bottom border lines separate fields.
- Responsive: columns stack vertically below 767px; form groups within columns also stack below 575px.

## Section order and structure

1. **Full-page gradient background** — teal-to-purple-blue gradient covering viewport
2. **Floating white card** — centered, max-width 1100px, rounded corners, drop shadow
   2a. **Left column — "General Information"** (white background)
       - "General Information" heading (blue, medium weight, 25px)
       - Title dropdown (Businessman / Reporter / Secretary)
       - First Name + Last Name (side by side, equal width)
       - Position dropdown (Director / Manager / Employee)
       - Company (full width)
       - Business Arena (73% width) + Employees dropdown (50% width, side by side)
   2b. **Right column — "Contact Details"** (purple `#4835D4` background)
       - "Contact Details" heading (white, medium weight, 25px)
       - Street + Nr (full width)
       - Additional Information (full width)
       - Zip Code (50% width) + Place dropdown (50% width, side by side)
       - Country dropdown (Vietnam / Malaysia / India)
       - Code + (50% width) + Phone Number (50% width, side by side)
       - Your Email (full width)
       - Terms checkbox ("I do accept the Terms and Conditions of your site.")
       - "Register Badge" submit button (pill-shaped, white, centered)

## Gherkin scenarios

### Background: page layout

```gherkin
Feature: FormTide registration form

  Background:
    Given the page has a full-viewport gradient background (teal to purple-blue)
    And a centered white card is displayed with rounded corners and drop shadow

  Scenario: card renders as two-column layout on desktop
    Given the viewport is wider than 767px
    When the form loads
    Then the card displays two columns side by side
    And the left column has a white/transparent background
    And the right column has a purple (#4835D4) background

  Scenario: card stacks columns on mobile
    Given the viewport is 767px or narrower
    When the form loads
    Then the columns stack vertically
    And the left column appears above the right column
```

### Left column — General Information

```gherkin
  Scenario: general information section renders all fields
    When the form loads
    Then the left column heading reads "General Information"
    And the heading is colored #2271DD and uses Montserrat medium weight
    And a "Title" dropdown is visible with options: Businessman, Reporter, Secretary
    And "First Name" and "Last Name" text inputs appear side by side
    And a "Position" dropdown is visible with options: Director, Manager, Employee
    And a "Company" full-width text input is visible
    And a "Business Arena" input appears alongside an "Employees" dropdown

  Scenario: all left-column inputs have underline-only styling
    Given the left column is visible
    Then each input has only a bottom border (#CCCCCC)
    And each input has no visible border on top, left, or right sides
    And input placeholder text is #666666
    And input text color is #000000

  Scenario: dropdown selects show custom chevron
    Given the left column is visible
    When I look at each dropdown
    Then a chevron-down icon is displayed to the right of the select
    And the chevron color is #666666
```

### Right column — Contact Details

```gherkin
  Scenario: contact details section renders all fields
    When the form loads
    Then the right column heading reads "Contact Details"
    And the heading is colored white and uses Montserrat medium weight
    And a "Street + Nr" text input is visible
    And an "Additional Information" text input is visible
    And a "Zip Code" input appears alongside a "Place" dropdown
    And a "Country" dropdown is visible with options: Vietnam, Malaysia, India
    And a "Code +" input appears alongside a "Phone Number" input
    And a "Your Email" full-width text input is visible

  Scenario: all right-column inputs have white underline styling
    Given the right column is visible
    Then each input has only a bottom border (rgba(255,255,255,0.3))
    And input placeholder text is #F2F2F2
    And input text color is #FFFFFF

  Scenario: terms checkbox is present
    Given the right column is visible
    Then a checkbox with label "I do accept the Terms and Conditions of your site." is visible
    And the terms link "Terms and Conditions" is white and underlined
    And the checkbox label text color is #E5E5E5
```

### Submit button

```gherkin
  Scenario: register button renders with pill shape
    Given the right column is visible
    Then a "Register Badge" submit button is visible at the bottom
    And the button has a white background
    And the button text is bold (#333333)
    And the button has border-radius 25px (pill shape)
    And the button has a drop shadow (0px 6px 17px rgba(0,0,0,0.15))
    And the button width is 180px

  Scenario: register button hover state
    When I hover over the "Register Badge" button
    Then the button background changes to #CCCCCC
```

### Responsive behavior

```gherkin
  Scenario: form groups stack on tablet
    Given the viewport is between 768px and 991px
    When the form loads
    Then form groups (paired inputs) stack vertically
    And each input occupies full width within its column

  Scenario: form groups stack on small mobile
    Given the viewport is 575px or narrower
    When the form loads
    Then form groups stack vertically
    And form row padding reduces to 30px horizontal
    And the heading padding reduces to 33px top and 30px horizontal
```

## Verification checklist

- [ ] Full-page gradient background renders (teal → purple-blue at 136deg)
- [ ] White card centered with correct width (1100px max), 10px radius, drop shadow
- [ ] Two-column flex layout on desktop, stacking on mobile (breakpoint 767px)
- [ ] Left column: "General Information" heading in blue `#2271DD`
- [ ] Left column: all 7 form fields present with correct placeholder text
- [ ] Left column: paired inputs (First/Last Name, Business Arena/Employees) render side by side
- [ ] Left column: underline-only input styling (bottom border `#CCCCCC`, no other borders)
- [ ] Left column: custom dropdown chevron icons rendered
- [ ] Right column: purple `#4835D4` background
- [ ] Right column: "Contact Details" heading in white
- [ ] Right column: all 7 form fields present with correct placeholder text
- [ ] Right column: paired inputs (Zip/Place, Code/Phone) render side by side
- [ ] Right column: underline-only input styling (bottom border `rgba(255,255,255,0.3)`)
- [ ] Right column: terms checkbox with white underlined link text
- [ ] Submit button: pill-shaped (25px radius), white bg, 180px wide, bold dark text
- [ ] Submit button: hover state changes background to `#CCCCCC`
- [ ] Responsive: columns stack below 767px
- [ ] Responsive: form groups stack below 575px with reduced padding
- [ ] Font: Montserrat loaded (Regular 400, Medium 500, Bold 700)
- [ ] Footer: links to `https://www.componentdock.com/`
- [ ] No references to ColorLib in app code
- [ ] All field labels, placeholder texts, and dropdown options match the source

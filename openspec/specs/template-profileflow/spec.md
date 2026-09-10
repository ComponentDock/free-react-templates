# Template: ProfileFlow (Multi-Step User Profile Wizard)

## Purpose

Recreation of ColorLib "Colorlib Wizard 9" — a multi-step user profile wizard form.

- **Source:** https://colorlib.com/wp/template/colorlib-wizard-9/
- **Preview (live):** https://colorlib.com/etc/bwiz/colorlib-wizard-9/index.html
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-9.jpg
- **Category:** Bootstrap Wizard Templates (multi-step form)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens (extracted from live preview CSS)

### Colors

| Token                         | Value                    | Usage                                                              |
| ----------------------------- | ------------------------ | ------------------------------------------------------------------ |
| Brand / Primary               | `#3377c0` (navy blue)    | h3 headings, active grid label, Next button bg, input focus border |
| Button Hover                  | `#3b87d9` (lighter blue) | Button hover state                                                 |
| Body Text                     | `#999` (medium gray)     | Body default, form placeholder text                                |
| Label Text                    | `#333` (dark gray)       | Form labels, input text color                                      |
| Heading Background (inactive) | `#b3b3b3` (light gray)   | Grid item vertical label bg                                        |
| Step Counter                  | `#ccc`                   | Step number display (1/3)                                          |
| Card Background               | `#fff` (white)           | Wizard card background                                             |
| Border                        | `#ccc`                   | Form input borders                                                 |

### Typography

| Token              | Value                                                                      |
| ------------------ | -------------------------------------------------------------------------- |
| Font Family        | Poppins (Regular, Medium, SemiBold weights)                                |
| Base Size          | 14px                                                                       |
| h3 (Section Title) | Poppins-SemiBold, 35px, uppercase, letter-spacing 3px, color #3377c0       |
| Label              | Poppins-Regular, 14px, color #333                                          |
| Form Input         | Poppins-Medium, 15px, color #999                                           |
| Grid Label         | Poppins-Medium, 11px, uppercase, letter-spacing 1px, white on gray/blue bg |

### Layout

| Token         | Value                                                          |
| ------------- | -------------------------------------------------------------- |
| Wrapper Width | 819px centered                                                 |
| Card Padding  | 64px top/bottom, 58px left/right (desktop); 60px 20px (mobile) |
| Card Height   | 548px fixed (desktop)                                          |
| Form Row      | 2-column flex, 25px gap between rows                           |
| Form Column   | 50% width, 40px right margin                                   |
| Grid Items    | 31.25% width (3 cols on desktop, 2 cols mobile)                |
| Input Height  | 42px                                                           |

### Buttons

| Token        | Value                                                                                |
| ------------ | ------------------------------------------------------------------------------------ |
| Next Button  | 112px × 42px, solid bg #3377c0, white text, uppercase, letter-spacing 1px, no border |
| Back Button  | 112px × 42px, transparent bg, 1px solid #3377c0 border, #3377c0 text                 |
| Button Hover | bg #3b87d9, white text                                                               |

### Background

| Token      | Value                                                            |
| ---------- | ---------------------------------------------------------------- |
| Body BG    | Full-viewport photo (sepia-toned lifestyle image), cover, center |
| Wrapper BG | Repeating pattern image overlay                                  |
| Card BG    | Solid white, slight rounded corners implied by wrapper padding   |

## Gherkin Requirements

### Feature: Multi-Step User Profile Wizard

#### Background

Given the user navigates to the ProfileFlow page
Then a centered white card is displayed over a background image
And the card shows a 3-step wizard with step indicator "1/3"

### Scenario: Step 1 — User Profile

Given the user is on step 1
When the page loads
Then the heading "USER PROFILE" is displayed in uppercase navy blue
And the step indicator shows "1 / 3" in the top-right corner
And the following fields are visible in a 2-column grid:
| Field | Type | Icon |
| Full Name | text | account (person) |
| Education Level | text | edit (pencil) |
| Email ID | text | email (envelope) |
| Phone Number | text | smartphone (phone) |
| Specialization | text | spellcheck (text) |
| Date of Birth | text | calendar |
And the "NEXT" button is visible at the bottom-right
And the "BACK" button is not visible on step 1

### Scenario: Step 2 — Residential Address

Given the user is on step 2
When the heading "RESIDENTIAL ADDRESS" is displayed
Then the following fields are visible in a 2-column grid:
| Field | Type | Icon |
| Country | select | account |
| Street Address | text | pin |
| Apartment | text | home |
| Town / City | text | pin-drop |
| County | text | pin |
| Postcode / Zip | text | eye (password) |
And the step indicator shows "2 / 3"
And both "BACK" and "NEXT" buttons are visible

### Scenario: Step 3 — What Are You Doing?

Given the user is on step 3
When the heading "WHAT ARE YOU DOING?" is displayed
Then a 3×2 grid of clickable image cards is shown:
| Card | Default |
| Programming | active |
| Sports | default |
| Business | default |
| Tour Guide | default |
| Art-Design | default |
| Doctor | default |
And each card has a thumbnail image and a vertical label on the right
And the active card's label background is navy blue (#3377c0)
And inactive cards have a gray (#b3b3b3) label background
And the step indicator shows "3 / 3"

### Scenario: Navigation Between Steps

Given the user is on step 1
When all required fields in step 1 are filled
And the user clicks "NEXT"
Then the wizard transitions to step 2
And the step indicator updates to "2 / 3"

Given the user is on step 2
When the user clicks "BACK"
Then the wizard returns to step 1
And the step indicator updates to "1 / 3"

Given the user is on step 3
When the user clicks a grid card
Then that card becomes active (navy blue label)
And the previously active card becomes inactive (gray label)

### Scenario: Validation Feedback

Given the user is on any step
When the user tries to click "NEXT" without filling all required fields
Then the message "Your must fill all fields, to be able to continue" appears
And the "NEXT" button is hidden until validation passes

### Scenario: Responsive Layout

Given the user is on a viewport narrower than 768px
When the wizard renders
Then the form fields stack vertically (single column)
And the grid items display in a 2-column layout
And the heading font size reduces to 30px
And the card padding adjusts to 60px top, 20px sides

### Scenario: Icon-Left Input Pattern

Given any form field is displayed
Then each input has an icon positioned on the left side
And the icon is vertically centered within the input
And the input has left padding of 46px to accommodate the icon
And the select dropdown has a chevron-down icon on the right

### Scenario: Hover Effects

Given any grid card is displayed
When the user hovers over a grid card
Then the thumbnail image opacity reduces to 0.6

Given the "BACK" button is displayed
When the user hovers over it
Then the border becomes transparent
And the text becomes white
And the background becomes #3b87d9

## Verification Checklist

- [ ] 3-step wizard with Next/Back navigation
- [ ] Step indicator (1/3, 2/3, 3/3) in top-right
- [ ] Step 1: 6 fields (Full Name, Education Level, Email, Phone, Specialization, DOB)
- [ ] Step 2: 6 fields (Country select, Street, Apartment, City, County, Postcode)
- [ ] Step 3: 6 clickable image cards (Programming, Sports, Business, Tour Guide, Art-Design, Doctor)
- [ ] Active card shows navy blue label; inactive shows gray
- [ ] Form fields use icon-left pattern with Material Design icons (use lucide-react equivalents)
- [ ] Button styling: solid primary for Next, outlined for Back
- [ ] Validation message when fields empty
- [ ] Responsive: single-column fields below 768px
- [ ] Font: Poppins loaded from Google Fonts
- [ ] Brand color #3377c0 used consistently
- [ ] Full-viewport background image (use picsum placeholder)
- [ ] White centered card over background
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/

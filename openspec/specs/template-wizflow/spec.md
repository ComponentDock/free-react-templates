# Template: WizFlow (Multi-Step Signup Wizard)
<!-- prep-status: shipped-as=onboardly -->
> **SHIPPED-UNDER** — the ColorLib `colorlib-wizard-20` design this prep describes already
> ships as `apps/onboardly` (<https://onboardly.free.componentdock.com>).
> Do not scaffold `apps/wizflow`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-onboardly/spec.md`.

## Purpose

Recreation of ColorLib "Colorlib Wizard 20" — a multi-step signup form with a purple-blue gradient background, numbered step indicators, and animated transitions.

- **Source template:** [Colorlib Wizard 20](https://colorlib.com/wp/template/colorlib-wizard-20/)
- **Preview URL:** https://colorlib.com/etc/bwiz/colorlib-wizard-20/index.html
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens

### Colors
- **Body text:** #222
- **Background gradient:** linear-gradient(0deg, #884d80 0%, #9795f0 0%, #2b5876 0%, #4e4376 100%) — purple-to-blue
- **Focus/accent gradient:** linear-gradient(0deg, #a1c4fd 0%, #884d80 0%, #2b5876 0%, #4e4376 100%) — lighter purple-to-blue
- **Card background:** #fff
- **Input border:** #ebebeb
- **Placeholder text:** #999
- **Step inactive circle:** #ebebeb bg, #999 text
- **Step active circle:** accent gradient bg, #fff text
- **Step connector:** #fff
- **Button gradient:** same as accent gradient

### Typography
- **Font family:** 'Poppins' (Google Fonts, weights 300–900)
- **Body font size:** 13px
- **Body line-height:** 1.92
- **Heading (h2):** 16px, uppercase, bold, centered
- **Step title (h3):** 12px, bold, white
- **Step number:** 13px (16px when active)

### Layout
- **Container:** 373px wide, centered, transparent background
- **Content card:** 330px wide, 365px height, border-radius 10px, box-shadow 0px 5px 9.5px 0.5px rgba(0,0,0,0.1)
- **Step indicator:** flexbox, evenly spaced, 44x44px circles, 3px white border
- **Step connector:** 290px wide, 8px height, white
- **Input fields:** 100% width, 40px height, border-radius 5px
- **Action buttons:** 120x40px, border-radius 5px, centered

### Interactions
- **Input focus:** gradient border-image (accent gradient), border-radius 5px
- **Button hover:** background-color darkens to #090909
- **Step transitions:** animated via jQuery Steps library (original) → React state transitions

## Requirements

### Step navigation

#### Scenario: User sees step indicator with 3 steps

- **GIVEN** the wizard is loaded
- **THEN** the step indicator shows "1", "2", "3" as numbered circles
- **AND** step 1 is highlighted with the accent gradient
- **AND** steps 2 and 3 have a gray background

#### Scenario: User advances to next step

- **GIVEN** the user is on step 1
- **WHEN** the user clicks "Next"
- **THEN** the form transitions to step 2
- **AND** the step indicator updates to highlight step 2

#### Scenario: User goes back to previous step

- **GIVEN** the user is on step 2
- **WHEN** the user clicks "Previous"
- **THEN** the form transitions to step 1
- **AND** the step indicator updates to highlight step 1

### Step 1: Account Setup

#### Scenario: Account setup form displays correctly

- **GIVEN** the user is on step 1
- **THEN** the heading "Create your account" is visible
- **AND** an email input field is displayed
- **AND** a password input field is displayed
- **AND** a confirm password input field is displayed

#### Scenario: User fills account details

- **GIVEN** the user is on step 1
- **WHEN** the user enters "test@example.com" in the email field
- **AND** the user enters "password123" in the password field
- **AND** the user enters "password123" in the confirm password field
- **THEN** all fields are filled

### Step 2: Social Profiles

#### Scenario: Social profiles form displays correctly

- **GIVEN** the user is on step 2
- **THEN** the heading "Social profiles" is visible
- **AND** a Twitter input field is displayed
- **AND** a Facebook input field is displayed
- **AND** a Google Plus input field is displayed

#### Scenario: User fills social profiles

- **GIVEN** the user is on step 2
- **WHEN** the user enters "@testuser" in the Twitter field
- **AND** the user enters "testuser" in the Facebook field
- **AND** the user enters "testuser" in the Google Plus field
- **THEN** all social fields are filled

### Step 3: Personal Details

#### Scenario: Personal details form displays correctly

- **GIVEN** the user is on step 3
- **THEN** the heading "Personal Details" is visible
- **AND** a name input field is displayed
- **AND** a phone input field is displayed
- **AND** an address input field is displayed

#### Scenario: User fills personal details

- **GIVEN** the user is on step 3
- **WHEN** the user enters "John Doe" in the name field
- **AND** the user enters "555-1234" in the phone field
- **AND** the user enters "123 Main St" in the address field
- **THEN** all personal fields are filled

### Validation

#### Scenario: Email validation

- **GIVEN** the user is on step 1
- **WHEN** the user enters "invalid-email" in the email field
- **AND** clicks "Next"
- **THEN** an error message should be shown

#### Scenario: Password mismatch validation

- **GIVEN** the user is on step 1
- **WHEN** the user enters "password123" in the password field
- **AND** "differentpassword" in the confirm password field
- **AND** clicks "Next"
- **THEN** an error message should be shown

### Visual design

#### Scenario: Background gradient renders correctly

- **GIVEN** the wizard is loaded
- **THEN** the page background has a purple-to-blue gradient

#### Scenario: Card renders with correct styling

- **GIVEN** the wizard is loaded
- **THEN** the form card has a white background
- **AND** the card has rounded corners (border-radius 10px)
- **AND** the card has a subtle box shadow

## Verification checklist

- [ ] Step indicator renders 3 numbered circles connected by a white line
- [ ] Active step circle has accent gradient background, inactive steps are gray
- [ ] Form card is centered, white, rounded corners, subtle shadow
- [ ] Background is purple-to-blue gradient
- [ ] Poppins font loaded from Google Fonts
- [ ] Step 1: email, password, confirm password fields
- [ ] Step 2: Twitter, Facebook, Google Plus fields
- [ ] Step 3: name, phone, address fields
- [ ] Next/Previous buttons with gradient background
- [ ] Input focus shows gradient border
- [ ] Responsive design (stacks on mobile < 480px)
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/

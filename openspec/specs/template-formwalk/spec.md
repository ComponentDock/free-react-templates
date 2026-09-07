# Template: FormWalk (Form Wizard)

## Purpose

Recreation of ColorLib's **Colorlib Wizard 30** — a free minimal multi-step form wizard template.

- **Source slug:** `colorlib-wizard-30`
- **Source URL:** https://colorlib.com/wp/template/colorlib-wizard-30/
- **Preview/demo URL:** https://colorlib.com/etc/bwiz/colorlib-wizard-30/index.html
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Form Wizard / Multi-step Form

## Design tokens

Extracted from the original preview CSS (`css/style.css`) and HTML structure:

| Token | Value | Notes |
|-------|-------|-------|
| Brand color (primary) | `#3760e5` | Blue — header bg, active steps, buttons |
| Brand hover | `#2b4ab3` | Darker blue for button hover |
| Card background | `#ffffff` | White card on full-page background image |
| Card border-radius | `8px` | Rounded corners on the wizard card |
| Card box-shadow | `0px 8px 20px 0px rgba(0,0,0,0.15)` | Subtle drop shadow |
| Font family | `'Montserrat', sans-serif` | Google Font — Montserrat |
| Step circle diameter | `60px` | Inactive bg: `#ccc`; active/done bg: `#3760e5` |
| Step circle radius | `50%` (fully round) | Number text centered inside |
| Step connector line | `2px solid #e5e5e5`, width `143px` | Horizontal line between step circles |
| Input border | `1px solid #e5e5e5` | Light gray border on all inputs |
| Input border-radius | `5px` | Slightly rounded inputs |
| Input padding | `14.5px 15px` | Comfortable tap target |
| Input font-size | `16px`, weight `600` | |
| Button shape | `border-radius: 25px` (pill) | Fully rounded Next button |
| Button bg | `#3760e5` | Same as brand |
| Button dimensions | `height: 50px`, `width: 160px` | Fixed size, centered |
| Button font | `15px`, weight `600`, color `#fff` | |
| Header bg | `#3760e5` | Top banner of wizard card |
| Header text | `28px`, weight `700`, color `#fff` | "FORM WIZARD" heading |
| Full-page background | Background image (`wizard-v10-bg.jpg`) | Centered, cover, no-repeat |
| Content padding | `0 80px` (form), `20px 80px 60px` (actions) | Generous horizontal padding |

## Visual design (from screenshot reference)

The template shows a centered white card with a blue header bar displaying "FORM WIZARD" in bold white text. Below the header are three circular step indicators connected by horizontal gray lines — the active step circle is blue, inactive ones are gray. Each step contains two form fields stacked vertically (label above input). The card sits on a full-page background image. A pill-shaped blue "Next" button sits below the form fields. The overall aesthetic is clean, minimal, and modern — a classic multi-step registration/contact wizard.

## Requirements (Gherkin)

### Scenario: Page loads with full-page background
```
Given the user visits the FormWalk page
When the page renders
Then a full-page background image is displayed covering the viewport
And a centered white wizard card is visible
```

### Scenario: Wizard header displays
```
Given the wizard card is visible
When the user looks at the top of the card
Then a blue header bar (#3760e5) is displayed
And the heading "FORM WIZARD" appears in white bold text
```

### Scenario: Step indicators render correctly
```
Given the wizard is loaded
When the user views the step indicator area
Then 3 circular step indicators are displayed
And the circles are connected by horizontal gray lines
And the first step circle is highlighted blue (active)
And the remaining step circles are gray (inactive)
```

### Scenario: Step 1 form fields
```
Given the wizard is on step 1
When the user views the form content
Then a "First Name" text input is displayed
And a "Last Name" text input is displayed
And both inputs have labels above them in bold text
```

### Scenario: Navigate to step 2
```
Given the user is on step 1
When the user fills in First Name and Last Name
And the user clicks the Next button
Then the wizard transitions to step 2
And the step 1 circle turns blue (done)
And the step 2 circle turns blue (active)
```

### Scenario: Step 2 form fields
```
Given the wizard is on step 2
When the user views the form content
Then an "Email Address" email input is displayed
And a "Password" password input is displayed
```

### Scenario: Navigate to step 3
```
Given the user is on step 2
When the user fills in Email and Password
And the user clicks the Next button
Then the wizard transitions to step 3
And step 2 circle turns blue (done)
```

### Scenario: Step 3 form fields
```
Given the wizard is on step 3
When the user views the form content
Then a "Subject" dropdown select is displayed with options: Finance, Marketing, IT Support
And a "Comment" text input is displayed
```

### Scenario: Back navigation
```
Given the user is on step 2
When the user clicks the Back button
Then the wizard transitions back to step 1
And the step 2 circle reverts to gray
```

### Scenario: Responsive layout on mobile
```
Given the user views the wizard on a screen narrower than 576px
When the page renders
Then the wizard card width adapts to approximately 90% of the viewport
And form rows stack vertically (single column)
And step circles shrink to 50px diameter
```

### Scenario: Input focus styling
```
Given the user clicks on any form input
When the input receives focus
Then the input border remains visible
And no default browser outline is shown (outline: none)
```

### Scenario: Button hover effect
```
Given the Next button is visible
When the user hovers over the button
Then the button background darkens to #2b4ab3
```

## Verification checklist

- [ ] Full-page background image covers viewport
- [ ] White wizard card centered with 8px border-radius and drop shadow
- [ ] Blue header bar with "FORM WIZARD" heading in Montserrat bold
- [ ] 3 circular step indicators with connecting lines
- [ ] Active step circle: blue; inactive: gray
- [ ] Step 1: First Name + Last Name inputs with labels
- [ ] Step 2: Email + Password inputs
- [ ] Step 3: Subject dropdown + Comment input
- [ ] Next button: pill-shaped, blue, centered
- [ ] Back button appears on steps 2+ and 3
- [ ] Step transitions animate indicator state changes
- [ ] Responsive: single-column layout on mobile (< 576px)
- [ ] Montserrat font loaded from Google Fonts
- [ ] Inputs have 5px border-radius, 1px solid #e5e5e5 border
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to https://www.componentdock.com/

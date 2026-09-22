# Template: Gymphact (Fitness / Gym)

## Purpose

Recreation of the ColorLib "Gym" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page fitness/gym website.

- **Source**: [ColorLib Gym](https://colorlib.com/wp/template/gym/)
- **Preview**: https://preview.colorlib.com/theme/gym/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/gym-free-template.jpg
- **New name**: `gympact` (package `@free-react-templates/gympact`)
- **Deploy target**: `https://gympact.free.componentdock.com`

## Section Structure (top → bottom)

1. **Header** — Top bar (tagline left, logo center, phone right) + horizontal nav menu below (Home, We Offer, Top Course, Schedule, Trainer, Plan)
2. **Banner/Hero** — Full-screen background image with dark overlay, uppercase headline "Real Fitness Depends on Exercise", subtitle "Shape your body well."
3. **Offer** — Section title "We care about what we offer" + 3 cards with icon/image, title, paragraph (Regular Exercise, Training on the go, Body Building Packages)
4. **BMI Calculator** — Red (#f6214b) background, title "Calculate Your Body Mass Index", 2 text inputs (height, weight) + "Calculate Your BMI" button
5. **Top Courses** — Title "Top Courses That are open for Students" + 3 course cards (thumbnail image, "Course Available" badge, course name with price)
6. **Features** — Dark (#222) background, 2×2 grid: alternating image/text columns ("Basic Revolutions" text blocks paired with full-width images)
7. **Schedule** — Title "Schedule your Fitness Process" + responsive table (columns: Course Name, Mon–Fri; rows: Fitness Aero, Senior Fitness)
8. **Team/Trainers** — Title "Our Experienced Trainers" + 4 trainer cards (photo with social icon overlay on hover, name, role)
9. **Pricing Plans** — Title "Choose the Perfect Plan for you" + 3 pricing cards (Standard £199, Business £399, Ultimate £499) each with feature list and "Purchase Plan" button
10. **Brand Logos** — 5 partner/client logos in a horizontal row
11. **Call-to-Action** — Full-width dark overlay background, headline "Huge Transaction in last Week", paragraph, "Become a Member" button
12. **Footer** — 3-column layout: About Us text, Contact Us with phone numbers, Newsletter with email input + arrow button. Bottom bar: copyright left, social icons right (Facebook, Twitter, Dribbble, Behance). Footer MUST link `https://www.componentdock.com/`

## Design Tokens

Extracted from `https://preview.colorlib.com/theme/gym/css/main.css`:

| Token | Value | Usage |
|---|---|---|
| `--brand` | `#f6214b` | Primary CTA, selection, BMI section bg, contact numbers, footer links |
| `--heading` | `#222222` | All headings h1–h6 |
| `--body-text` | `#777777` | Body paragraphs, general text |
| `--white` | `#ffffff` | Text on dark backgrounds, card backgrounds |
| `--light-bg` | `#f9f9ff` | Team section bg, pricing card bg, default button bg |
| `--dark-bg` | `#222222` | Feature section background |
| `--overlay` | `rgba(0,0,0,0.5)` | Banner and CTA overlays |
| `--social-icon-bg` | `#111111` | Footer social icon circles |
| `--border` | `#eeeeee` | Table borders, pricing card dividers |
| Font family | `"Poppins", sans-serif` | All text (headings weight 600, body weight 300) |
| Primary button | `border-radius: 25px`, `line-height: 42px`, `padding: 0 30px 0 60px`, `background: #f6214b`, `color: #fff` | All CTA buttons |
| Button hover | `color: #f6214b`, `border: 1px solid #f6214b`, `background: #fff` | All CTA button hover states |

## Gherkin Scenarios

### Header
```gherkin
Scenario: Header displays top bar with tagline, logo, and phone
  Given the user visits the page
  Then the header shows a left tagline "We believe we helps people for happier lives"
  And the center shows a logo image
  And the right side shows phone number "+880 123 12 658 439"

Scenario: Navigation menu shows all section links
  Given the user visits the page
  Then the nav menu has links: Home, We Offer, Top Course, Schedule, Trainer, Plan
  And clicking each link scrolls to the corresponding section
```

### Banner / Hero
```gherkin
Scenario: Hero banner shows headline and subtitle
  Given the user visits the page
  Then a full-width hero section is visible with a dark overlay background
  And the headline reads "Real Fitness Depends on Exercise" in uppercase
  And the subtitle reads "Shape your body well."
```

### Offer Section
```gherkin
Scenario: Offer section displays three cards
  Given the user scrolls to the offer section
  Then the title reads "We care about what we offer"
  And three cards are displayed: "Regular Exercise", "Training on the go", "Body Building Packages"
  And each card has an icon/image and a paragraph description
```

### BMI Calculator
```gherkin
Scenario: BMI calculator section renders inputs and button
  Given the user scrolls to the BMI section
  Then the section has a red (#f6214b) background
  And the title reads "Calculate Your Body Mass Index"
  And there are two text inputs: height (inches) and weight (lbs)
  And a "Calculate Your BMI" button is visible
```

### Top Courses
```gherkin
Scenario: Top courses section displays three course cards
  Given the user scrolls to the courses section
  Then the title reads "Top Courses That are open for Students"
  And three course cards are displayed with thumbnails
  And each card shows a "Course Available" badge
  And each card shows a course name and price (e.g. "Running Classes $275")
```

### Features
```gherkin
Scenario: Features section shows 2x2 image-text grid on dark background
  Given the user scrolls to the features section
  Then the section has a dark (#222) background
  And there are two rows, each with an image and a text block
  And each text block has a subtitle "Basic & Common Repairs" and title "Basic Revolutions"
```

### Schedule
```gherkin
Scenario: Schedule section shows a weekly timetable
  Given the user scrolls to the schedule section
  Then the title reads "Schedule your Fitness Process"
  And a table is displayed with columns: Course Name, Mon, Tue, Wed, Thu, Fri
  And rows include "Fitness Aero" and "Senior Fitness" with time slots
```

### Team / Trainers
```gherkin
Scenario: Team section shows four trainer cards
  Given the user scrolls to the trainers section
  Then the title reads "Our Experienced Trainers"
  And four trainer cards are displayed with photos
  And each card has a name and role (e.g. "Ethel Davis", "Managing Director (Sales)")
  And hovering a card reveals social icons (Facebook, Twitter, LinkedIn)
```

### Pricing
```gherkin
Scenario: Pricing section shows three plan cards
  Given the user scrolls to the pricing section
  Then the title reads "Choose the Perfect Plan for you"
  And three cards are displayed: Standard (£199), Business (£399), Ultimate (£499)
  And each card lists features and has a "Purchase Plan" button
```

### Brand Logos
```gherkin
Scenario: Brand section shows partner logos
  Given the user scrolls to the brand section
  Then five partner logos are displayed in a horizontal row
```

### Call to Action
```gherkin
Scenario: CTA section has dark overlay and member button
  Given the user scrolls to the CTA section
  Then the section has a dark overlay background image
  And the headline reads "Huge Transaction in last Week"
  And a "Become a Member" button is displayed
```

### Footer
```gherkin
Scenario: Footer has three columns and bottom bar
  Given the user scrolls to the footer
  Then the footer shows "About Us", "Contact Us", and "Newsletter" columns
  And the newsletter column has an email input and submit arrow button
  And the bottom bar has copyright text and social icons (Facebook, Twitter, Dribbble, Behance)
  And the footer links to https://www.componentdock.com/
```

## Verification Checklist

- [ ] Header: top bar with tagline, logo, phone; nav menu with all 6 section links
- [ ] Banner: full-screen hero with overlay, uppercase headline, subtitle
- [ ] Offer: 3 cards with icons, titles, descriptions
- [ ] BMI Calculator: red background, 2 inputs, calculate button
- [ ] Top Courses: 3 course cards with thumbnails, badge, name+price
- [ ] Features: dark bg, 2×2 image+text grid
- [ ] Schedule: weekly timetable table
- [ ] Team: 4 trainer cards with hover social icons
- [ ] Pricing: 3 plan cards with features and CTA
- [ ] Brand Logos: 5 logos in a row
- [ ] CTA: dark overlay, headline, "Become a Member" button
- [ ] Footer: 3 columns, newsletter, social icons, Component Dock link
- [ ] All text uses Poppins font family
- [ ] Brand color #f6214b used consistently for CTAs, selection, accents
- [ ] All buttons have border-radius: 25px (rounded pill shape)
- [ ] No ColorLib references in app code
- [ ] Placeholder images from picsum.photos with deterministic seeds

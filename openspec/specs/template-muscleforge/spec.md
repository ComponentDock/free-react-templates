# Template: MuscleForge (Fitness & Gym Landing)

## Purpose

MuscleForge is a single-page fitness/gym landing page in the free-react-templates
monorepo. It is a React recreation of the ColorLib "Gym" free template (source:
https://colorlib.com/wp/template/gym/, preview: https://preview.colorlib.com/theme/gym/),
built under a DIFFERENT name (**MuscleForge**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 gym site by codepixer with a header top bar
(tagline + logo + phone), a full-width hero banner with dark overlay and
uppercase headline, a 3-column "We Offer" cards section, a red BMI calculator
banner, a 6-card "Top Courses" grid with price badges, a dark alternating
image+text feature strip, a weekly schedule timetable table, a 4-member
trainer/team grid, a 3-tier pricing table with hover effects, a brand logos
row, a parallax CTA section, and a footer with social links and copyright.
The overall aesthetic is white-background sections with hot-pink brand accents
(`#f6214b`), Poppins font throughout, and flat no-radius buttons.

## Design Tokens

Extracted from the live preview CSS (`css/main.css`) at
https://preview.colorlib.com/theme/gym/css/main.css:

| Token | Value | Usage |
|---|---|---|
| `--brand-primary` | `#f6214b` | Hot pink-red accent, CTA buttons, BMI banner bg, selection highlight, pricing hover |
| `--bg-white` | `#ffffff` | Default section backgrounds (offer, top-course, schedule, price, footer) |
| `--bg-light` | `#f9f9ff` | Team area bg, price card default bg, button default bg |
| `--bg-dark` | `#222222` | Feature area bg, heading text color, pricing button default |
| `--bg-dark-overlay` | `rgba(0,0,0,0.5)` | Hero banner overlay, CTA parallax overlay |
| `--text-heading` | `#222222` | All headings (h1-h6) |
| `--text-body` | `#777777` | Body text, paragraphs |
| `--text-muted` | `#797979` | Secondary muted text |
| `--border-light` | `#eeeeee` | Table borders, pricing card borders |
| `--font-family` | `"Poppins", sans-serif` | All text — headings and body use Poppins (weights 300-700) |
| `--btn-radius` | `0` | Flat buttons (no border-radius) |
| `--selection-bg` | `#f6214b` | Text selection highlight color |

## Sections (in page order)

1. **Header** — Top bar: tagline ("We believe we helps people for happier lives"),
   centered logo, phone number. Below: horizontal nav menu (Home, We Offer,
   Top Course, Schedule, Trainer, Plan). Sticky on scroll.
2. **Banner/Hero** — Full-width background image with dark overlay (50% black),
   uppercase heading "Real Fitness Depends on Exercise", subtext "Shape your
   body well.", CTA button.
3. **Offer Area** — Section heading "We care about what we offer", subtitle.
   3-column card grid: icon image + title + description per card (Regular
   Exercise, Training on the go, Body Building Packages).
4. **Convert (BMI Calculator)** — Full-width `#f6214b` background. Heading
   "Calculate Your Body Mass Index". Two inputs (height in inches, weight in
   lbs) + "Calculate Your BMI" button.
5. **Top Courses** — Section heading "Top Courses That are open for Students".
   6-card grid (3x2): course image thumbnail, "Course Available" badge, course
   name + price tag (e.g. "Running Classes $275").
6. **Feature Area** — Dark background (`#222`). Alternating image+text pairs
   in a 4-column row (2 images, 2 text blocks). "Basic Revolutions" headings
   with lorem description.
7. **Schedule** — Section heading "Schedule your Fitness Process". Full-width
   timetable table: rows = courses (Fitness Aero, etc.), columns = Mon-Fri
   with time slots.
8. **Team/Trainer** — Light `#f9f9ff` background. 4-column grid of trainer
   cards: photo, name, role, social media overlay on hover.
9. **Pricing** — 3-column pricing cards: header section with plan name + price,
   feature list, CTA button. Cards turn red on hover with shadow.
10. **Brand Logos** — Row of partner/client brand logos.
11. **CTA Parallax** — Background image with dark overlay. Heading + subtext
    + primary button (white on transparent, outlined on hover).
12. **Footer** — Social media links row, copyright with Component Dock link.

## Gherkin Requirements

### Header
- Scenario: Header displays tagline, logo, and phone number
  - Given the user visits the page
  - Then a top bar shows the tagline on the left, logo centered, phone on right
  - And a horizontal navigation menu is visible below the top bar

### Banner/Hero
- Scenario: Hero section renders with dark overlay and headline
  - Given the user visits the page
  - Then a full-width hero banner is displayed
  - And the heading "Real Fitness Depends on Exercise" is visible
  - And the subtext "Shape your body well." is visible
  - And a CTA button is present

### Offer Area
- Scenario: Offer section shows 3 service cards
  - Given the user scrolls to the offer section
  - Then 3 cards are displayed in a row
  - And each card has an image, title, and description

### BMI Calculator
- Scenario: BMI calculator renders inputs and button
  - Given the user scrolls to the BMI section
  - Then a height input and a weight input are visible
  - And a "Calculate Your BMI" button is present

### Top Courses
- Scenario: Course grid shows 6 courses with prices
  - Given the user scrolls to the courses section
  - Then 6 course cards are displayed in a 3x2 grid
  - And each card shows a "Course Available" badge
  - And each card displays a course name with a dollar price

### Feature Area
- Scenario: Feature section shows alternating image-text pairs
  - Given the user scrolls to the features section
  - Then 2 image-text pairs are displayed on a dark background
  - And each pair has a heading and paragraph

### Schedule
- Scenario: Schedule table renders with course rows and day columns
  - Given the user scrolls to the schedule section
  - Then a table is displayed with day columns (Mon-Fri)
  - And course rows show time slots

### Team
- Scenario: Team section shows 4 trainer cards
  - Given the user scrolls to the team section
  - Then 4 trainer cards are displayed
  - And each card shows a photo, name, and role

### Pricing
- Scenario: Pricing section shows 3 tiers
  - Given the user scrolls to the pricing section
  - Then 3 pricing cards are displayed
  - And each card shows a plan name, price, feature list, and CTA button
  - And hovering a card turns it red with a shadow

### Brand Logos
- Scenario: Brand logos row displays partner logos
  - Given the user scrolls to the brand section
  - Then a row of brand logos is visible

### CTA Parallax
- Scenario: CTA section shows headline and button on parallax background
  - Given the user scrolls to the CTA section
  - Then a parallax background image with dark overlay is displayed
  - And a heading, subtext, and primary button are visible

### Footer
- Scenario: Footer shows social links and copyright
  - Given the user scrolls to the footer
  - Then social media icon links are visible
  - And a copyright notice with "Component Dock" link is present

## Verification Checklist

- [ ] All 12 sections rendered in correct order
- [ ] Poppins font applied to headings and body
- [ ] Brand color `#f6214b` used for CTAs, BMI banner, pricing hover
- [ ] Dark feature area uses `#222` background
- [ ] Team area uses `#f9f9ff` background
- [ ] Buttons are flat (no border-radius)
- [ ] Hero banner has dark overlay on background image
- [ ] CTA parallax section has dark overlay on background image
- [ ] Pricing cards turn red on hover
- [ ] Schedule table renders with day headers and time slots
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] Google Fonts Poppins loaded via index.html link
- [ ] Responsive layout (Bootstrap grid equivalent via Tailwind)

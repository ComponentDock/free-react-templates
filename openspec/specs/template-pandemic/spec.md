# Template: Pandemic (Health / Information)

## Purpose

Recreation of ColorLib "Covid" — a coronavirus information and prevention
template with statistics, prevention tips, do/avoid lists, symptoms guide,
news articles, and a footer with quick links.

- **Source**: [ColorLib Covid](https://colorlib.com/wp/template/covid/)
- **Preview**: https://preview.colorlib.com/theme/covid/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/covid-free-template.jpg
- **Stack**: Vite · React 19 · Tailwind CSS 4 · TypeScript
- **New name**: `pandemic` (apps/pandemic, `@free-react-templates/pandemic`)

## Design tokens (extracted from preview CSS)

| Token            | Value                            | Source                          |
| ---------------- | -------------------------------- | ------------------------------- |
| Brand primary    | `#6f42c1` (purple)               | `.btn-primary`, headings        |
| Brand light      | `rgba(111,66,193,0.1)`           | `.hero-v1` background           |
| Brand lighter    | `rgba(111,66,193,0.05)`          | `.bg-primary-light` sections    |
| Danger/accent    | `#e84a5f` (red)                  | accent elements                 |
| Success green    | `#a8df65`                        | positive indicators             |
| Text dark        | `#000` (black)                   | h2, h3 body text                |
| Text muted       | `#aaa`                           | secondary text                  |
| Light gray       | `#f8f9fa`                        | light backgrounds               |
| Medium gray      | `#dee2e6`                        | borders, dividers               |
| White            | `#ffffff`                        | card backgrounds                |
| Font primary     | `'Mulish', sans-serif`           | all text                        |
| Button radius    | `30px` (pill shape)              | `.btn-primary`                  |
| Hero shape       | `border-bottom-right-radius: 50%`| `.hero-v1` curved bottom-right  |
| Section heading  | weight 900, color `#6f42c1`      | `.section-heading`              |
| Icons            | Flaticon COVID icon set          | prevention, symptoms, protection|

## Sections (in order, from preview DOM)

1. **Nav** — Sticky top nav with logo ("Covid" text), nav links (Home, Prevention, Stay at home, Keep social distancing, Wear facemask, Wash your hands, More Links, Symptoms, About, Blog, Contact), hamburger menu for mobile
2. **Hero** — Purple-tinted background (`rgba(111,66,193,0.1)`), curved bottom-right corner (`border-bottom-right-radius: 50%`). Heading "Stay Safe. Stay Home." (h1, purple, weight 900), subtitle, "How to prevent" CTA button (purple pill), illustration area
3. **Statistics** — Dark background with 3 stat cards: Total Cases (14,112,077), Deaths (595,685), Recovered (8,397,665). Each with icon + number + label
4. **What is Coronavirus?** — Light bg, heading + description paragraph, 4 prevention tip cards with icons (Protection, Prevention, Treatments, Symptoms)
5. **How to Prevent** — White bg, heading + 4 prevention items with Flaticon icons (Stay at home, Wear facemask, Keep social distancing, Wash your hands). Each: icon + title + description
6. **How To Protect Yourself** — Light purple bg (`bg-primary-light`), 2-column layout: "You should do" (Stay at home, Wear mask, Use Sanitizer, Disinfect your home, Wash your hands) + "You should avoid" (Avoid infected people, Avoid animals, Avoid handshaking, Avoid infected surfaces, Don't touch your face)
7. **Symptoms** — White bg, heading + 4 symptom cards with icons (High Fever, Cough, Sore Throat, Headache)
8. **News & Articles** — Light purple bg, 3 blog post cards with images, title, excerpt, "Read more" link
9. **About** — Description paragraph about the template
10. **Footer** — Dark bg, 4-column layout: About text, Quick Links, Helpful Links, Resources. Copyright + "Covid — Website Template by Colorlib" (to be replaced with Component Dock)

## Gherkin requirements

### Feature: Navigation

```gherkin
Scenario: Nav displays logo and links
  Given the user loads the page
  Then the nav shows the logo text "Covid"
  And navigation links are visible: "home", "prevention", "symptoms", "about", "blog", "contact"

Scenario: Mobile hamburger menu
  Given the viewport is narrow (mobile)
  When the user taps the hamburger icon
  Then a mobile menu opens with all navigation links
```

### Feature: Hero Section

```gherkin
Scenario: Hero displays heading and CTA
  Given the user is on the homepage
  Then the hero shows heading "Stay Safe. Stay Home."
  And a subtitle is visible below the heading
  And a "How to prevent" purple pill button is visible

Scenario: Hero has curved bottom-right shape
  Given the hero section is visible
  Then the bottom-right corner has a curved border-radius (50%)
```

### Feature: Statistics Section

```gherkin
Scenario: Statistics display 3 key numbers
  Given the user scrolls to the statistics section
  Then 3 stat cards are visible
  And each card shows an icon, a number, and a label
  And the numbers are: 14,112,077 (cases), 595,685 (deaths), 8,397,665 (recovered)
```

### Feature: What is Coronavirus Section

```gherkin
Scenario: Info section shows prevention tips
  Given the user scrolls to the "What is Coronavirus?" section
  Then 4 tip cards are visible with icons
  And the tips are: Protection, Prevention, Treatments, Symptoms
```

### Feature: How to Prevent Section

```gherkin
Scenario: Prevention section shows 4 tips
  Given the user scrolls to the prevention section
  Then 4 prevention items are displayed with Flaticon icons
  And the items are: Stay at home, Wear facemask, Keep social distancing, Wash your hands
```

### Feature: How To Protect Yourself Section

```gherkin
Scenario: Protection section shows do/avoid lists
  Given the user scrolls to the protection section
  Then two lists are visible: "You should do" and "You should avoid"
  And the "do" list includes: Stay at home, Wear mask, Use Sanitizer, Disinfect your home, Wash your hands
  And the "avoid" list includes: Avoid infected people, Avoid animals, Avoid handshaking, Avoid infected surfaces, Don't touch your face
```

### Feature: Symptoms Section

```gherkin
Scenario: Symptoms section shows 4 symptom cards
  Given the user scrolls to the symptoms section
  Then 4 symptom cards are visible with icons
  And the symptoms are: High Fever, Cough, Sore Throat, Headache
```

### Feature: News & Articles Section

```gherkin
Scenario: Blog section displays 3 article cards
  Given the user scrolls to the news section
  Then 3 blog post cards are visible
  And each card has an image, title, excerpt, and "Read more" link
```

### Feature: Footer

```gherkin
Scenario: Footer displays 4-column layout
  Given the user scrolls to the footer
  Then 4 columns are visible: About, Quick Links, Helpful Links, Resources
  And the copyright line includes a link to Component Dock
```

## Verification checklist

- [ ] All sections render in the correct order (10 sections)
- [ ] Hero has curved bottom-right corner shape
- [ ] Statistics section shows 3 stat cards with numbers
- [ ] Prevention tips have Flaticon icons
- [ ] Do/avoid lists display correctly in 2 columns
- [ ] Symptoms section shows 4 cards with icons
- [ ] Blog section shows 3 article cards
- [ ] Footer has 4-column layout with Component Dock link
- [ ] Mobile responsive: hamburger menu, single-column stacking
- [ ] Brand color `#6f42c1` (purple) used consistently
- [ ] Font: Mulish (loaded via Google Fonts)
- [ ] Button shape: pill (30px border-radius)
- [ ] No ColorLib references in app code

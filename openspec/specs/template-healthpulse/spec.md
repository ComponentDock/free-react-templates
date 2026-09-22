# Template: HealthPulse (Health & Wellness)

## Purpose
HealthPulse is a single-page health & wellness coaching landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Health Coach" free template (source:
https://colorlib.com/wp/template/healthcoach/, preview:
https://preview.colorlib.com/theme/healthcoach/), built under a DIFFERENT name
(**HealthPulse**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 health coaching template using Poppins Google
Font and Font Awesome 4.7.0 icons. It has a clean, professional aesthetic with
a blue (`#1089ff`) primary accent and green (`#a3cb4c`) secondary accent on a
white/light background. The page features a top info bar with phone/email and
social icons, a sticky navbar with brand logo, a full-width hero image slider
with overlay text, a services cards section, an about/founder section on a
light background, a three-column consultation/appointment section with blue
backgrounds, a testimonials carousel, a "how it works" icon grid, a success
stories carousel, a full-width CTA banner, a pricing section with four tiers,
a blog section, a newsletter subscribe form, and a dark footer with columns.

## Design Tokens

| Token            | Value                                   | Source                                  |
| ---------------- | --------------------------------------- | --------------------------------------- |
| Brand primary    | `#1089ff` (bright blue)                | Buttons, active states, links, hero h2  |
| Brand secondary  | `#a3cb4c` (lime green)                 | Service icons, logo accent, positions   |
| Consultation mid | `#006fdc` (darker blue)                | Middle consultation column              |
| Text primary     | `#000000`                              | Body text, headings                     |
| Text light       | `#fff`                                  | On dark/blue backgrounds                |
| Text muted       | `rgba(255,255,255,0.4)` / `#999`      | Footer links, secondary text            |
| Background light | `#f8f9fd`                               | `.bg-light` sections                    |
| Background dark  | `#131719`                               | Footer                                  |
| Heading font     | `"Poppins", Arial, sans-serif`          | All headings, hero text, nav            |
| Body font        | `"Poppins", Arial, sans-serif`          | Body text, paragraphs                   |
| Icon set         | Font Awesome 4.7.0 + Flaticon           | Nav toggler, service icons, social      |
| Button radius    | `4px`                                   | `.btn` custom style                     |
| Button bg        | `#1089ff` (primary), white (secondary) | CTA buttons                             |
| Card radius      | `5px` (services), `10px` (testimonials)| `.services-wrap`, `.testimony-wrap`      |
| Hero height      | `700px`                                 | `.home-slider`, `.slider-item`          |
| Section padding  | `7em 0`                                 | `.ftco-section`                         |

## Visual Description (from TEMPLATES.md screenshot + live preview)

Clean, professional health coaching aesthetic. White/light backgrounds dominate
with bright blue (`#1089ff`) accent on buttons, active states, and consultation
sections. Green (`#a3cb4c`) accent appears on service icons, the logo
"coach" text, and staff position labels. The hero is a full-width image slider
(3 slides) with dark overlay and white text — each slide has a large heading
with a blue subheading in uppercase Poppins. Below the hero, three service
cards (Exercise Program, Nutrition Plans, Diet Program) overlap the hero by
-200px on desktop. An about/founder section on light gray has a large image
left and text right. A three-column consultation band uses blue backgrounds
with a booking form in the center. Testimonials are presented as cards in a
carousel with circular user images and quote icons. A "How it works" section
shows 4 icon steps. Success stories use a side-by-side image+text card layout
in a carousel. A full-width CTA banner with background image sits above a
4-tier pricing section. Blog cards show 3 columns with image, date, and title.
A newsletter subscribe form appears above a dark footer with 4 link columns.

## Requirements (Gherkin)

### Top Info Bar

```gherkin
Scenario: Top info bar with contact and social links
  Given the user loads the HealthPulse page
  Then a thin info bar is visible at the very top
  And it shows a phone number and email on the left
  And social media icon links (Facebook, Twitter, Instagram, Dribbble) are on the right
  And the bar has a light background
```

### Header / Navigation

```gherkin
Scenario: Sticky header with logo and navigation links
  Given the user loads the HealthPulse page
  Then a header is visible below the info bar with the logo "HealthPulse" on the left
  And navigation links include Home, About, Coach, Pricing, Services, Stories, Blog, Contact
  And the header becomes sticky on scroll
  And a hamburger menu icon appears on mobile viewports
  And the active nav link has blue (#1089ff) text color
```

### Hero Section

```gherkin
Scenario: Full-width hero image slider with CTA buttons
  Given the user loads the HealthPulse page
  Then a full-width hero section is displayed at 700px height
  And it contains a carousel/slider with 3 slides
  And each slide has a background image with dark overlay
  And each slide displays a blue (#1089ff) uppercase subheading and a large white heading
  And each slide has two CTA buttons: "Learn more" (blue primary) and "Contact us" (white)
  And carousel navigation dots are visible at the bottom
```

### Services Section

```gherkin
Scenario: Three service cards overlapping the hero
  Given the user scrolls below the hero
  Then 3 service cards are displayed in a row
  And each card has a top image, a title, a description, and a "Read more" outline button
  And the cards have white background with 5px border-radius and subtle shadow
  And the cards overlap the hero section by approximately 200px on desktop
  And the service titles are "Exercise Program", "Nutrition Plans", "Diet Program"
```

### About / Founder Section

```gherkin
Scenario: About section with founder info on light background
  Given the user scrolls to the About section
  Then a two-column layout is displayed on a light (#f8f9fd) background
  And the left column shows a large image
  And the right column shows a subheading "Welcome to Healthcare", a heading, descriptive text, and a founder profile
  And the founder profile shows a circular image, name "Cythia Hunter", and title "Personal Dietitian"
```

### Consultation Band

```gherkin
Scenario: Three-column consultation/appointment section
  Given the user scrolls to the Consultation section
  Then a three-column full-width band is displayed
  And the left column has blue (#1089ff) background with title "Healthcare Services" and a "See Services" link
  And the center column has darker blue (#006fdc) background with a "Free Consultation" form
  And the form includes fields: First Name, Last Name, Services dropdown, Date, Time, and an "Appointment" submit button
  And the right column has blue (#1089ff) background with title "Find A Health Expert" and a "Meet our health coach" link
```

### Testimonials Section

```gherkin
Scenario: Testimonial carousel with client feedback
  Given the user scrolls to the Testimonials section
  Then a heading "Happy Clients & Feedbacks" with subheading "Testimonies" is displayed
  And a carousel of testimonial cards is shown
  And each card has a circular user image, a blue quote icon, feedback text, name, and position
  And the section has a light (#f8f9fd) background
```

### How It Works Section

```gherkin
Scenario: Four-step process section
  Given the user scrolls to the How It Works section
  Then a heading "How it works?" with subheading "Other Services" is displayed
  And 4 step items are shown in a row
  And each step has a green (#a3cb4c) circular icon, a title, and a description
  And the step titles are "Follow the program", "Work for result", "Eat healthy food", "Enjoy your life"
```

### Success Stories Section

```gherkin
Scenario: Success stories carousel
  Given the user scrolls to the Success Stories section
  Then a heading "Successfull Stories" with subheading "Stories" is displayed
  And a carousel of story cards is shown on a light background
  And each card has a large image on the left and text content on the right
  And each card shows a name and position label
```

### CTA Banner

```gherkin
Scenario: Full-width CTA banner with background image
  Given the user scrolls to the CTA banner section
  Then a full-width section with a background image and dark overlay is displayed
  And it shows the heading "We Provide Free Health Care Consultation"
  And a white "Free Consultation" button is on the right side
```

### Pricing Section

```gherkin
Scenario: Four-tier pricing cards
  Given the user scrolls to the Pricing section
  Then a heading "Choose Your Perfect Plans" with subheading "Price & Plans" is displayed
  And 4 pricing cards are shown in a row: Starter ($49), Standard ($79), Premium ($109), Platinum ($159)
  And each card has a plan name, description, price, feature checklist, and a blue "Get Started" button
  And the section has a light (#f8f9fd) background
```

### Blog Section

```gherkin
Scenario: Blog posts grid
  Given the user scrolls to the Blog section
  Then a heading "Latest news from our blog" with subheading "News & Blog" is displayed
  And 3 blog entry cards are shown in a row
  And each card has a background image, date, author, comment count, and article title
  And the blog title links turn blue (#1089ff) on hover
```

### Newsletter / Footer

```gherkin
Scenario: Dark footer with newsletter subscribe and link columns
  Given the user scrolls to the footer
  Then a newsletter subscribe form with email input and "Subscribe" button is displayed above the footer
  And the footer has a dark (#131719) background
  And the footer contains a logo, description text, and 4 link columns: Services, About, Resources, Social
  And the logo text "Healthcare" has the "care" part in green (#a3cb4c)
  And a copyright line and Terms/Privacy/Compliances links are at the bottom
  And the footer links are in muted white text that brightens on hover
```

## Verification Checklist

- [ ] Top info bar with phone, email, social icons
- [ ] Sticky navbar with logo and 8 nav links
- [ ] Hero slider with 3 slides, overlay, blue subheadings, two CTA buttons
- [ ] 3 service cards overlapping the hero
- [ ] About/founder section on light background
- [ ] Three-column consultation band (blue backgrounds, appointment form)
- [ ] Testimonials carousel with user cards
- [ ] How it works — 4 icon steps with green circles
- [ ] Success stories carousel with side-by-side cards
- [ ] Full-width CTA banner with background image
- [ ] 4-tier pricing section
- [ ] Blog grid (3 cards)
- [ ] Newsletter subscribe form
- [ ] Dark footer with 4 columns and green accent
- [ ] Responsive: hamburger menu, stacked columns on mobile
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] public/CNAME contains healthpulse.free.componentdock.com
- [ ] All tests pass with 100% coverage

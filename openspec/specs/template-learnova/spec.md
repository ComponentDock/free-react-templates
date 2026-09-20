# Template: Learnova (Education / Online Courses)

## Purpose

Recreation of the ColorLib **Skwela** template — a clean, Bootstrap-based online
education and course platform with a dark-overlay hero, blue primary accent,
Source Sans Pro typography, and course grid layout.

- **Source:** https://colorlib.com/wp/template/skwela/
- **Preview:** https://preview.colorlib.com/theme/skwela/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/skwela-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens

| Token          | Value          | Notes                                |
| -------------- | -------------- | ------------------------------------ |
| primary-blue   | `#007bff`      | Buttons, dropdown hover, links       |
| heading-black  | `#000000`      | h1, h2, h3                           |
| body-gray      | `#6c757d`      | Paragraph text, body                 |
| loader-accent  | `#f4b214`      | Loading spinner stroke               |
| overlay-dark   | `rgba(0,0,0,0.4)` | Hero/section dark overlays        |
| bg-light       | `#f8f9fa`      | Light section backgrounds            |

### Fonts

| Role      | Font                | Weights       |
| --------- | ------------------- | ------------- |
| All text  | `Source Sans Pro`   | 300, 400, 900 |

### Button styles

- **Primary:** Bootstrap `.btn-primary` — bg `#007bff`, text white, rounded
  corners (Bootstrap default ~0.25rem), padding standard Bootstrap.
- **Hero CTA:** white text on dark overlay, same primary button styling.

### Section backgrounds

- Hero: full-screen background image + dark overlay (`rgba(0,0,0,0.4)`)
- Features (dark): background image + dark overlay
- Features (light): white/light background, dark text
- Features (last): background image + dark overlay
- CTA cover: background image + dark overlay
- Top Courses: light gray `#f8f9fa`
- Testimonial: white
- Footer: background image + dark overlay

## Section structure (HTML order)

1. **Header** — Transparent navbar over hero. Brand "Learnova" uppercase left.
   Nav links center: Home, Online Courses (dropdown: HTML, WordPress, Web Dev,
   JS, Photoshop), Categories (dropdown), Blog, About, Contact. Login + Register
   right.
2. **Hero** — Full-screen background image + dark overlay. Centered: "Learn From
   Doing" h1 (60px, uppercase, 900 weight), lead text, "Sign up and get a 7-day
   free trial" primary button.
3. **Features (dark)** — Background image + dark overlay. 4 feature items with
   flaticon icons: Online trainings from experts, Learn anywhere in the world,
   Creative learning video, Audio learning.
4. **Features (light)** — Same 4 features repeated on white background with dark
   text.
5. **Features (last)** — Another set of 4 features on dark overlay background
   with different icons.
6. **CTA Cover** — Background image + dark overlay. Centered: "Sign Up And Get a
   7-day Free Trial" heading + lead + primary button.
7. **Top Courses** — Light gray bg. "Top Courses" heading. 6 course cards in
   grid (Web Design, WordPress, JavaScript, Photoshop, ReactJS, AngularJS) each
   with image + title + "Enroll Now".
8. **Testimonial** — Two-column layout: blockquote left, person image right.
9. **Footer** — Background image. About text + 3 link columns + copyright with
   Component Dock link.

## Gherkin scenarios

```gherkin
Scenario: Header displays transparent navbar
  Given I visit the Learnova homepage
  Then I see a transparent navbar over the hero
  And I see the brand "Learnova" in uppercase
  And I see nav links: Home, Online Courses, Categories, Blog, About, Contact
  And I see Login and Register links on the right

Scenario: Hero shows headline and CTA
  Given I visit the Learnova homepage
  Then I see a full-screen hero with dark overlay
  And I see "Learn From Doing" as the main heading
  And I see a "Sign up and get a 7-day free trial" primary button

Scenario: Features section shows learning benefits
  Given I visit the Learnova homepage
  When I scroll to the Features section
  Then I see 4 feature items with icons
  And the features are: Online trainings, Learn anywhere, Creative video, Audio learning

Scenario: Top Courses shows course grid
  Given I visit the Learnova homepage
  When I scroll to the Top Courses section
  Then I see "Top Courses" heading
  And I see 6 course cards with image, title, and "Enroll Now" text

Scenario: Testimonial shows quote and image
  Given I visit the Learnova homepage
  When I scroll to the Testimonial section
  Then I see a blockquote with a student quote
  And I see a person image alongside the quote

Scenario: Footer shows links and copyright
  Given I visit the Learnova homepage
  When I scroll to the footer
  Then I see About text and 3 link columns
  And I see a copyright notice with a "Component Dock" link
```

## Verification checklist

- [ ] Brand blue `#007bff` used for primary buttons and interactive elements
- [ ] Font is `Source Sans Pro` (Google Fonts)
- [ ] Hero is full-screen with dark overlay
- [ ] Features sections alternate dark/light backgrounds
- [ ] Course grid shows 6 items with images
- [ ] Testimonial has blockquote + person image layout
- [ ] Footer uses background image + dark overlay
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Placeholder images use `picsum.photos/seed/learnova-<n>/`
- [ ] Google Fonts loaded in `index.html`

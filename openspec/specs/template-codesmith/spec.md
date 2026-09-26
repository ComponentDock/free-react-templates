# Template: Codesmith (Personal Developer Portfolio)

## Purpose

Codesmith is a single-page PERSONAL DEVELOPER PORTFOLIO in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Martin" free template (source:
https://colorlib.com/wp/template/martin/), built under a DIFFERENT name
(**Codesmith**), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a multi-page Bootstrap 4 site (jQuery, Owl Carousel,
Animate.css, Waypoints, Magnific Popup) featuring a full-viewport hero
carousel with a 3/4 image + 1/4 yellow text panel, a three-column
services section, a case/work carousel, a subscribe/newsletter section,
and a deep-blue two-column footer. The preview is live at
https://preview.colorlib.com/theme/martin/ and the screenshot is at
https://colorlib.com/wp/wp-content/uploads/sites/2/martin-free-template.jpg.

This recreation consolidates all pages (home, about, services, work,
blog, contact) into a single scrollable SPA with section anchors, matching
the original's visual design and section order 1:1.

## Design Tokens

Extracted from https://preview.colorlib.com/theme/martin/ CSS
(`css/style.css`) and preview DOM.

| Token             | Value                       | Usage                                  |
| ----------------- | --------------------------- | -------------------------------------- |
| font-family       | "Poppins", Arial, sans-serif| All text (weights 300–800)             |
| page-bg           | #f7f7f7                     | Body / page background (light gray)    |
| text-color        | #1a1a1a                     | Body text                              |
| heading-color     | rgba(0,0,0,0.8)             | All headings h1–h6                     |
| accent/yellow     | #ffdd00                     | Links, buttons, hero panel bg, active  |
|                   |                             | nav, carousel dot, subscribe btn       |
| deep-blue         | #002bdc                     | Footer bg, button hover bg, hero text  |
|                   |                             | on yellow panel                        |
| nav-overlay       | rgba(0,43,220,0.9)          | Full-screen mobile/side nav bg         |
| white             | #ffffff                     | Case section bg, hero logo, nav text   |
| black             | #000000                     | Copyright, secondary buttons, owl nav  |
| gray-light        | #e0e0e0                     | Subscribe input bg                     |
| gray-selection    | #b7c2c2                     | Text selection highlight               |
| selection-fg      | #fcfcfc                     | Text selection text color              |
| btn-radius        | 1px                         | Default .btn border-radius (sharp)     |
| pill-radius       | 30px                        | Subscribe button, hero CTA pill        |
| circle-radius     | 50%                         | Skill circles, social icons            |
| square-radius     | 4px                         | Form input fields                      |
| footer-btn-radius | 2px                         | Footer "Tell us" CTA                   |
| overlay-alpha     | rgba(0,0,0,0.4)             | Page overlay when nav open             |

## Visual Design Notes

The screenshot shows a dark, moody developer portfolio with large
full-bleed photography. The hero is split: ~75% image (dark photo of a
person at a desk/working) + ~25% yellow (#ffdd00) panel with white/black
text overlay reading "I'm Martin, a developer from Berlin." and a "Hire
me now" CTA. Social links (Twitter, Facebook, Instagram, Dribbble) sit
vertically on the left edge of the hero. The header is a fixed
transparent bar with a white "M." logo mark on the left and a hamburger
menu on the right. Sections use alternating light gray (#f7f7f7) and
white (#fff) backgrounds. The services section shows three columns with
icon circles and lists of sub-services. The case/work section is a
horizontal carousel of image+description pairs. The newsletter section has
a centered text block and email subscribe form. The footer is deep blue
(#002bdc) with two columns: "Lets Talk" (CTA) and "Info" (contact
details + social icons).

## Gherkin Requirements

### Scenario: Page loads with correct structure

```gherkin
Given the user visits the Codesmith page
Then the page title contains "Codesmith"
And a <header> element is visible
And the header contains a logo link with text "C."
And a hamburger menu toggle button is visible
```

### Scenario: Hero section with carousel

```gherkin
Given the user visits the Codesmith page
Then a hero section is visible at the top of the page
And the hero contains a carousel/slider
And each slide shows a large background image
And each slide has a yellow (#ffdd00) text panel with a headline
And each slide has a "Hire me now" CTA button
And social media links (Twitter, Facebook, Instagram, Dribbble) are
     visible along the left edge of the hero
```

### Scenario: Services section ("What I Do")

```gherkin
Given the user scrolls to the services section
Then a section heading "What I Do" is visible
And a subheading "Strategy, design and a bit of magic" is visible
And three service cards are displayed in a row
And each card has an icon, a title, and a list of sub-services
And the first card title is "Explore" with items: Design Sprints,
     Product Strategy, UX Strategy
And the second card title is "Create" with items: Information,
     UX/UI Design, Branding
And the third card title is "Learn" with items: Prototyping,
     User Testing, UI Testing
```

### Scenario: Case/Work section

```gherkin
Given the user scrolls to the work section
Then a section heading "Work" is visible
And a subheading "Happy spending my time to this projects" is visible
And a carousel of work items is displayed
And each work item has an image on the left and a description on the right
And each work item shows a tag (e.g. "UI/UX, Art Direction"),
     a title, a description, and a "See details" button
```

### Scenario: Subscribe/Newsletter section

```gherkin
Given the user scrolls to the subscribe section
Then a centered text block with introductory paragraph is visible
And a "Read my resume here" link is visible
And a "Subscribe Newsletter" heading is visible
And a subtitle "Subscribe our newsletter and get latest update" is visible
And an email input field with placeholder "Enter your email" is visible
And a "Subscribe Now" button is visible
```

### Scenario: Footer section

```gherkin
Given the user scrolls to the footer
Then the footer has a deep blue (#002bdc) background
And a "Lets Talk" heading is visible on the left
And a description paragraph is visible on the left
And a "Tell us about your project" CTA button is visible on the left
And an "Info" heading is visible on the right
And email, phone, and address details are visible on the right
And social media icon links (Facebook, Twitter, Dribbble) are visible
And a copyright line is visible at the bottom
And the copyright includes a "Component Dock" link
```

### Scenario: Mobile navigation menu

```gherkin
Given the user is on a mobile viewport
And the user taps the hamburger menu toggle
Then a full-screen navigation overlay appears with blue background
And the overlay contains links: Home, About, Services, Work, Blog, Contact
And the active link is highlighted in yellow (#ffdd00)
And tapping a link closes the overlay and scrolls to the section
And tapping the toggle again or the overlay background closes the menu
```

### Scenario: Responsive layout

```gherkin
Given the user is on a mobile viewport (below 768px)
Then the hero section stacks vertically (image above, text below)
And service cards stack vertically in a single column
And work items stack vertically
And the footer columns stack vertically
And the subscribe form is full-width
```

## Verification Checklist

- [ ] All sections render: header, hero, services, work, subscribe, footer
- [ ] Hero carousel cycles between slides with background images
- [ ] Social media links visible in hero
- [ ] "Hire me now" CTA visible on each slide
- [ ] Services section has three cards with correct titles and items
- [ ] Work section has carousel of image+description items
- [ ] Subscribe section has email input and subscribe button
- [ ] Footer has two columns (Lets Talk / Info) with contact details
- [ ] Footer links to Component Dock
- [ ] Mobile nav toggle opens full-screen overlay with nav links
- [ ] Active nav link highlighted in yellow
- [ ] Responsive layout works (mobile stacking)
- [ ] Design tokens match: Poppins font, #f7f7f7 bg, #ffdd00 accent,
      #002bdc blue footer
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Placeholder images use picsum.photos/seed/codesmith-*
- [ ] 100% test coverage for all new components

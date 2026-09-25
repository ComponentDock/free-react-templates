# Spec: Palette

Recreation of ColorLib Clyde (https://colorlib.com/wp/template/clyde/)

## Overview

Palette is a personal portfolio / UI-UX designer CV template. It features a
hero image slider, stats counter, about section with personal info, circular
skill progress indicators, services grid, CTA banner, project gallery with
overlays, testimonials carousel on a blue background, blog cards, contact form,
and a 4-column footer.

## Source References

- **Preview:** https://preview.colorlib.com/theme/clyde/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/clyde-free-template.jpg

## Design Tokens

| Token         | Value            | Notes                         |
| ------------- | ---------------- | ----------------------------- |
| Font family   | Poppins          | Google Fonts, weights 300–800 |
| Primary color | #007bff          | Blue — buttons, links, CTA bg |
| Dark bg       | #1a1a2e          | Navbar, hero overlay          |
| Light bg      | #f8f9fa          | Stats, skills, blog sections  |
| Body text     | #212529          | Dark gray for body copy       |
| White         | #ffffff          | Card backgrounds, CTA text    |
| Shadow        | 0 4px 20px rgba  | Card shadows                  |
| Border radius | 8px (rounded-lg) | Cards, buttons                |

## Sections (in order)

1. **Navbar** — Dark bg, "Palette." brand, nav links: Home, About, Skills,
   Services, Projects, Blog, Contact. Sticky on scroll.

2. **Hero** — Full-width slider with background images (picsum seeded),
   overlay, text: "Hello! This is Palette" / "Creative UI/UX Designer &
   Developer". Two CTA buttons: "Hire me" (solid blue) + "Download CV"
   (outline blue).

3. **Stats** — 4-column counter: 750 Project Complete, 568 Happy Clients,
   478 Cups of coffee, 8 Years experienced. Light bg, icons (lucide-react).

4. **About** — Split layout: left = portrait image, right = "About Me" text,
   personal info list (Name, DOB, Address, Email, Phone), interest tags
   (Music, Travel, Movie, Sports with icons).

5. **Skills** — 6 circular progress indicators: CSS 95%, HTML 98%, jQuery
   68%, Photoshop 92%, WordPress 83%, SEO 95%. Each card shows "Last week"
   and "Last month" sub-stats. Light bg.

6. **Services** — 2x4 grid of service cards: Web Design, Web Application,
   Web Development, Banner Design, Branding, Icon Design, Graphic Design,
   SEO. Each has icon + title + description. White cards with shadow.

7. **CTA Banner** — Blue bg, text: "Have a project on your mind?" with
   description and "Contact me" button. Portrait image on the right.

8. **Projects** — 4-column grid of 8 project cards with background images
   (picsum seeded), dark overlay on hover showing title + category.

9. **Testimonials** — Blue bg (#007bff), carousel of 3 testimonial cards
   with quote icon, text, avatar, name, position.

10. **Blog** — 3 blog cards: image + date/author/comments meta + title +
    excerpt. Light bg.

11. **Contact** — Split: left = form (name, email, subject, message, submit),
    right = contact info cards (address, phone, email, website) with icons.

12. **Footer** — 4 columns: "Lets talk about" + description + CTA, Links
    list, Services list, "Have a Questions?" with contact + social icons.
    Bottom: copyright + "Made with ❤ by Component Dock" link.

## Gherkin Scenarios

```gherkin
Feature: Palette Template
  As a visitor to the Palette portfolio site
  I want to see a professional designer portfolio
  So I can evaluate the designer's work and contact them

  Scenario: Navbar displays all sections
    Given I am on the Palette homepage
    Then I see a navbar with "Palette." brand
    And the navbar has links to Home, About, Skills, Services, Projects, Blog, Contact

  Scenario: Hero section shows designer info
    Given I am on the Palette homepage
    Then I see a hero section with heading "Creative UI/UX Designer & Developer"
    And I see "Hire me" and "Download CV" buttons

  Scenario: Stats section shows counters
    Given I scroll to the stats section
    Then I see 4 stat items: Project Complete, Happy Clients, Cups of coffee, Years experienced

  Scenario: About section shows personal info
    Given I scroll to the about section
    Then I see "About Me" heading
    And I see personal info items (Name, Date of birth, Address, Email, Phone)
    And I see interest tags (Music, Travel, Movie, Sports)

  Scenario: Skills section shows progress
    Given I scroll to the skills section
    Then I see 6 skill cards: CSS, HTML, jQuery, Photoshop, WordPress, SEO
    And each card shows a percentage value

  Scenario: Services section shows offerings
    Given I scroll to the services section
    Then I see 8 service cards in a grid
    And each card has an icon, title, and description

  Scenario: CTA banner prompts contact
    Given I scroll to the CTA section
    Then I see "Have a project on your mind?" heading
    And I see a "Contact me" button

  Scenario: Projects section shows portfolio
    Given I scroll to the projects section
    Then I see 8 project cards with images and overlay text

  Scenario: Testimonials section shows reviews
    Given I scroll to the testimonials section
    Then I see testimonial cards with quotes, names, and positions

  Scenario: Blog section shows posts
    Given I scroll to the blog section
    Then I see 3 blog cards with images, dates, and titles

  Scenario: Contact section has form and info
    Given I scroll to the contact section
    Then I see a contact form with name, email, subject, message fields
    And I see contact info cards for address, phone, email, website

  Scenario: Footer contains Component Dock link
    Given I scroll to the footer
    Then I see a link to https://www.componentdock.com/
    And the link text mentions "Component Dock"
```

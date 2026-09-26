# Template: LensFolk (Photography Portfolio)

## Purpose

Recreation of ColorLib's **Louie** template as a modern React 19 + Vite + Tailwind 4 + TypeScript single-page photography portfolio.

- **Source:** https://colorlib.com/wp/template/louie/
- **Preview:** https://preview.colorlib.com/theme/louie/
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript (strict), Vitest + Testing Library

## Design tokens (extracted from preview CSS)

| Token              | Value                        | Usage                                     |
| ------------------ | ---------------------------- | ----------------------------------------- |
| Font (sans)        | Work Sans, sans-serif        | Body text, headings, navigation            |
| Font (cursive)     | Herr Von Muellerhoff         | Author signature in hero                   |
| Brand color        | `#ccb78f` (gold/tan)        | Accent on headings, keyword highlights     |
| Primary dark       | `#242423` (near-black)      | Footer background                          |
| Text primary       | `#212529`                   | Body text                                  |
| Text secondary     | `#b3b3b3` (light gray)     | Subtle text, ghost button border           |
| Overlay light      | `#ededed`                   | Large decorative name watermark            |
| Background         | `#fff`                      | Page / hero info panel                     |
| Instagram overlay  | `rgba(0,0,0,0.2)`          | Hover overlay on gallery thumbnails        |
| Button (ghost)     | 2px solid `#b3b3b3` border  | "Read more" / CTA links                    |
| Button (subscribe) | white background, `#ece4d5` border | Newsletter email input                 |

## Section structure (fidelity order)

1. **Sidebar (fixed left)** — Circular author photo, author name, vertical nav links (Home, Collection, About Me, My Services, Blog, Contact), newsletter signup form at bottom
2. **Hero (right panel, full-height)** — Background photo slider (2 slides with dot pagination), overlay text panel with: "Hello! I'm" subheading, "Louie Smith" + "A Photographer. I Capture Life" headline (with gold accent on "Photographer."), bio paragraph, cursive signature, social icons (Twitter, Facebook, Instagram)
3. **Instagram Gallery** — "Follow me on Instagram" heading (uppercase, letter-spaced), 5-column grid of photography thumbnails with dark hover overlay + Instagram icon
4. **Footer (dark)** — Three columns: Recent Photos (thumbnail grid), Archives (list of months), Have a Questions? (address, phone, email + social links). "Made with Component Dock" attribution.

## Gherkin requirements

### Sidebar

```
Feature: Sidebar navigation
  Scenario: Sidebar displays author photo
    Given the page has loaded
    Then a circular author photo is visible in the sidebar

  Scenario: Sidebar displays author name
    Given the page has loaded
    Then "Louie Smith" (or equivalent) is displayed below the author photo

  Scenario: Sidebar navigation links are present
    Given the page has loaded
    Then the sidebar contains links: Home, Collection, About Me, My Services, Blog, Contact

  Scenario: Newsletter signup form exists
    Given the page has loaded
    Then the sidebar contains an email input and a submit button

  Scenario: Newsletter form accepts email
    Given the newsletter input is visible
    When I type a valid email address
    And I click the submit button
    Then the form is submitted
```

### Hero

```
Feature: Hero section
  Scenario: Hero displays greeting and name
    Given the page has loaded
    Then "Hello! I'm" is displayed as a subheading
    And the author name is displayed in large text

  Scenario: Hero displays photographer headline
    Given the page has loaded
    Then the headline "A Photographer. I Capture Life" is visible
    And the word "Photographer" uses the brand gold color

  Scenario: Hero displays bio paragraph
    Given the page has loaded
    Then a short biography paragraph is displayed below the headline

  Scenario: Hero displays cursive signature
    Given the page has loaded
    Then a cursive/handwritten signature is displayed

  Scenario: Hero displays social links
    Given the page has loaded
    Then Twitter, Facebook, and Instagram icon links are displayed

  Scenario: Hero background is a full-height photo
    Given the page has loaded
    Then the hero section has a background photograph filling the full viewport height

  Scenario: Hero photo slider works
    Given the hero has multiple slides
    When I click a pagination dot
    Then the background image transitions to the corresponding slide
```

### Instagram Gallery

```
Feature: Instagram gallery section
  Scenario: Gallery heading is present
    Given the page has loaded
    Then "Follow me on Instagram" is displayed as an uppercase heading

  Scenario: Gallery displays photo grid
    Given the page has loaded
    Then 5 photography thumbnails are displayed in a row

  Scenario: Gallery thumbnails have hover overlay
    Given the page has loaded
    When I hover over a gallery thumbnail
    Then a dark semi-transparent overlay with an Instagram icon appears
```

### Footer

```
Feature: Footer
  Scenario: Footer has dark background
    Given the page has loaded
    Then the footer section has a dark (#242423) background

  Scenario: Footer displays Recent Photos column
    Given the page has loaded
    Then a "Recent Photos" column with thumbnail images is visible

  Scenario: Footer displays Archives column
    Given the page has loaded
    Then an "Archives" column with month links is visible

  Scenario: Footer displays contact column
    Given the page has loaded
    Then a "Have a Questions?" column with address, phone, and email is visible

  Scenario: Footer links to Component Dock
    Given the page has loaded
    Then the footer contains a link to https://www.componentdock.com/
```

## Verification checklist

- [ ] Sidebar renders with author photo, name, and all 6 nav links
- [ ] Newsletter form has email input + submit button
- [ ] Hero section renders full-height with background image
- [ ] Hero text includes greeting, name, headline with gold accent, bio, signature
- [ ] Social icons (Twitter, Facebook, Instagram) render and link correctly
- [ ] Instagram gallery renders 5 thumbnails in a grid
- [ ] Gallery thumbnails show dark overlay on hover with Instagram icon
- [ ] Footer has dark background with 3 columns (Recent Photos, Archives, Contact)
- [ ] Footer links to componentdock.com
- [ ] Responsive: sidebar collapses to hamburger on mobile
- [ ] Responsive: gallery stacks on smaller screens
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] No ColorLib references in app code

# Template: Sidecraft (Sidebar Navigation)

## Purpose

Recreation of ColorLib **Bootstrap Sidebar 02** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

- Source: https://colorlib.com/wp/template/bootstrap-sidebar-02/
- Preview: https://preview.colorlib.com/theme/bootstrap-sidebar-02/ (unreachable — 404)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-sidebar-170618.jpg
- New name: `sidecraft` (apps/sidecraft, @free-react-templates/sidecraft)
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript
- Note: Live preview was unreachable (404). Design tokens and structure derived from the screenshot.

## Design tokens (extracted from screenshot)

| Token | Value | Usage |
|-------|-------|-------|
| Sidebar background (brand purple) | `#6C4AB6` | Sidebar container background |
| Sidebar text | `#ffffff` | All sidebar text (nav links, logo, copyright) |
| Content background | `#f5f5f5` | Main content area background |
| Content heading color | `#333333` | Main content h1/h2 headings |
| Content body text | `#555555` | Paragraph text in content area |
| Hamburger button bg | `#6C4AB6` | Circular hamburger toggle button |
| Hamburger button text | `#ffffff` | Hamburger icon lines |
| Font family | `Poppins` (via Google Fonts) | Global font for all text |
| Heading weight | 600 | Sidebar nav links, content headings |
| Body weight | 400 | Paragraphs, body text |
| Body font size | 16px | Paragraphs |
| Sidebar width | ~270px | Fixed left sidebar |
| Nav link style | White text, 16px, padding ~12px vertical, dropdown arrows on Home/Pages | Sidebar navigation |
| Newsletter input | White bg, rounded, placeholder "Enter Email Address" | Newsletter subscription form |
| Copyright text | White, 12px, below newsletter | Footer copyright in sidebar |
| Section separator | Thin border/line between nav and newsletter | Visual divider |

## Page structure (section order, from screenshot)

1. **Sidebar (left, fixed)** — Purple (#6C4AB6) background, full viewport height.
   - Logo: "Splash" text, white, bold, large font (top of sidebar).
   - Navigation links: Home (with dropdown arrow ▼), About, Pages (with dropdown arrow ▼), Portfolio, Contact. White text, stacked vertically.
   - Newsletter section: "Subscribe for newsletter" heading, email input field (white bg, rounded, placeholder "Enter Email Address").
   - Copyright: "Copyright ©2019 All rights reserved | This template is made with by" (white text, small font, bottom of sidebar).

2. **Hamburger toggle** — Purple circular button (#6C4AB6) positioned at top-right of sidebar/content boundary. Toggles sidebar visibility on mobile.

3. **Main content area (right)** — Light gray (#f5f5f5) background, fills remaining width.
   - Heading: "Sidebar #02" — large, bold, dark text.
   - Body text: Two paragraphs of lorem ipsum text — standard paragraph styling with relaxed line-height.

## Gherkin requirements

### Feature: Sidecraft Sidebar Template

```gherkin
Feature: Sidecraft — Sidebar Navigation Website Template
  As a user visiting the Sidecraft website
  I want to see a clean sidebar-based layout
  So that I can navigate the site via a persistent sidebar with newsletter signup

  Scenario: Sidebar displays logo and navigation
    Given I am on the Sidecraft homepage
    Then I see a fixed left sidebar with purple background
    And I see the logo "Splash" at the top of the sidebar
    And I see navigation links: Home, About, Pages, Portfolio, Contact
    And Home and Pages have dropdown arrows indicating submenus
    And all sidebar text is white

  Scenario: Sidebar shows newsletter subscription
    Given I am on the Sidecraft homepage
    Then I see a "Subscribe for newsletter" section in the sidebar
    And I see an email input field with placeholder "Enter Email Address"
    And the input has a white background with rounded corners

  Scenario: Sidebar displays copyright at bottom
    Given I am on the Sidecraft homepage
    Then I see copyright text at the bottom of the sidebar
    And the copyright text is white and small

  Scenario: Main content shows page heading and body text
    Given I am on the Sidecraft homepage
    Then I see the heading "Sidebar #02" in the main content area
    And I see paragraphs of body text below the heading
    And the content area has a light gray background

  Scenario: Hamburger toggle is visible
    Given I am on the Sidecraft homepage
    Then I see a purple circular hamburger button at the sidebar boundary
    And on mobile it toggles sidebar visibility

  Scenario: Sidebar navigation supports dropdowns
    Given I click the "Home" link in the sidebar
    Then a dropdown submenu appears below it
    Given I click the "Pages" link in the sidebar
    Then a dropdown submenu appears below it

  Scenario: Newsletter form accepts email
    Given I am on the Sidecraft homepage
    When I enter an email address in the newsletter input
    And I submit the form
    Then the form processes the subscription

  Scenario: Responsive layout adapts to mobile
    Given I view the site on a mobile viewport
    Then the sidebar collapses and is toggled by the hamburger button
    And the main content fills the full width
```

## Verification checklist

- [ ] Sidebar: fixed left position, purple (#6C4AB6) background, full viewport height
- [ ] Logo: "Splash" text, white, bold, large font at top of sidebar
- [ ] Navigation: Home (with ▼), About, Pages (with ▼), Portfolio, Contact — white text, vertical stack
- [ ] Dropdowns: Home and Pages show/hide submenu on click
- [ ] Newsletter: "Subscribe for newsletter" heading, email input with white bg + rounded corners
- [ ] Copyright: small white text at bottom of sidebar
- [ ] Hamburger: purple circular button at sidebar boundary, toggles sidebar on mobile
- [ ] Main content: light gray (#f5f5f5) background, "Sidebar #02" heading, body text paragraphs
- [ ] Responsive: sidebar collapses on mobile, hamburger toggles visibility
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] `public/CNAME` contains `sidecraft.free.componentdock.com`
- [ ] Package name `@free-react-templates/sidecraft`, homepage `https://sidecraft.free.componentdock.com`
- [ ] No ColorLib references in app code (provenance only in spec/TEMPLATES.md)
- [ ] Global font: Poppins via Google Fonts
- [ ] Brand color: `#6C4AB6` in Tailwind theme

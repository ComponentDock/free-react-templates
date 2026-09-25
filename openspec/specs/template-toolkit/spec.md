# Template: Toolkit (UI Kit)

## Purpose

Recreation of ColorLib **Tools Ui Kit** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

- Source: https://colorlib.com/wp/template/tools-ui-kit/
- Preview: https://preview.colorlib.com/theme/tools-ui-kit/ (404 — preview unreachable; fallback to screenshot)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/tools-free-template.jpg
- New name: `toolkit` (apps/toolkit, @free-react-templates/toolkit)
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript
- Note: This is a UI Kit / component showcase template (Bootstrap 4 original). The React recreation will showcase reusable UI components organized by category.

## Design tokens (extracted from screenshot — preview unreachable)

| Token | Value | Usage |
|-------|-------|-------|
| Primary (blue) | `#5B86E5` | Hero gradient start, button backgrounds, primary accent |
| Secondary (blue) | `#36D1DC` | Hero gradient end, accent elements |
| Hero gradient | `linear-gradient(135deg, #5B86E5, #36D1DC)` | Hero section background (left-to-right blue gradient) |
| White | `#ffffff` | Hero text, button text on blue, page background, card backgrounds |
| Dark text | `#212529` | Section headings, body text on white |
| Muted text | `#6c757d` | Subtitles, secondary labels |
| Light gray bg | `#f8f9fa` | Alternating section backgrounds |
| Border | `#dee2e6` | Card borders, dividers |
| Font family | System sans-serif (Bootstrap 4 default) | All text — `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` |
| Heading weight | 300 (light) | Hero heading "Tools UI Kit." — large, thin, elegant |
| Body weight | 400 | Paragraphs, body text |
| Button style | Rounded pill, white bg on blue hero, blue bg on white sections | Primary CTA "DOWNLOAD TOOLS" with cloud-download icon |
| Button border-radius | ~4px (Bootstrap default) | All buttons |
| Section padding | ~80px top/bottom | Between major sections |
| Navbar | Transparent over hero, white text. Logo "Tools Kit." left. Right: COMPONENTS dropdown, DOWNLOAD link, social icons (Facebook, Twitter, Instagram) |

## Page structure (section order, from screenshot)

1. **Navbar** — Transparent over hero. Left: "Tools Kit." logo text (white). Right: "COMPONENTS" dropdown, "DOWNLOAD" link with cloud icon, social icons (Facebook, Twitter, Instagram). White text on gradient.

2. **Hero** — Full-width blue gradient background (`linear-gradient(135deg, #5B86E5, #36D1DC)`). Centered content: large heading "Tools UI Kit." (white, light weight), subtitle "Free Bootstrap 4 UI Kit on Tools Design." (white), white "DOWNLOAD TOOLS" button with download/cloud icon.

3. **Basic Elements** — White background. Section heading "Basic Elements" (large, dark text). Subsections:
   - **Buttons** — "Pick your style" subtitle. Row of blue buttons in different styles/sizes (rounded, outline, etc.).
   - (Additional element categories visible in full template: inputs, cards, alerts, etc.)

4. **Navigation components** — Navbar variants, breadcrumb examples.

5. **Card components** — Card layouts with images, text, buttons.

6. **Form components** — Input fields, selects, textareas, checkboxes, radio buttons.

7. **Footer** — Simple footer with copyright and links.

Note: As a UI Kit, this template showcases many small component examples rather than a cohesive single-page website. Each "section" demonstrates a different UI component category.

## Gherkin requirements

### Feature: Toolkit UI Kit Template

```gherkin
Feature: Toolkit — UI Kit Showcase Website Template
  As a user visiting the Toolkit website
  I want to browse a collection of UI components organized by category
  So that I can see design patterns and component styles I can reuse

  Background:
    Given I am on the Toolkit homepage

  # --- Navbar ---
  Scenario: Navbar displays navigation and social links
    Then I should see a "Tools Kit." logo
    And I should see a "COMPONENTS" dropdown link
    And I should see a "DOWNLOAD" link
    And I should see social icons (Facebook, Twitter, Instagram)

  Scenario: Navbar is transparent over hero
    Then the navbar should have a transparent background
    And the text should be white

  # --- Hero ---
  Scenario: Hero section displays title and CTA
    Then I should see a heading "Tools UI Kit."
    And I should see a subtitle "Free Bootstrap 4 UI Kit on Tools Design."
    And I should see a "DOWNLOAD TOOLS" button

  Scenario: Hero has gradient background
    Then the hero section should have a blue gradient background

  # --- Basic Elements ---
  Scenario: Buttons section shows button variants
    Then I should see a "Basic Elements" section heading
    And I should see a "Buttons" subsection
    And there should be multiple blue button variants displayed

  # --- Components Dropdown ---
  Scenario: Components dropdown reveals categories
    When I click the "COMPONENTS" dropdown
    Then I should see a list of component categories

  # --- Footer ---
  Scenario: Footer displays copyright
    Then I should see a footer with copyright text
    And the footer should contain a link to "https://www.componentdock.com/"
```

## Verification checklist

- [ ] Navbar transparent over hero with white text
- [ ] Hero section with blue gradient background
- [ ] Hero heading "Tools UI Kit." in light weight
- [ ] Hero subtitle and "DOWNLOAD TOOLS" CTA button
- [ ] Basic Elements section with button showcase
- [ ] Multiple button variant examples displayed
- [ ] Components dropdown functional
- [ ] Social icons in navbar (Facebook, Twitter, Instagram)
- [ ] Footer with copyright and Component Dock link
- [ ] No ColorLib references in app code
- [ ] 100% test coverage

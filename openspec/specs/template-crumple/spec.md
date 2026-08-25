# Template: Crumple (Accordion / FAQ UI)

## Purpose

Recreation of ColorLib "Accordion 06" — a Bootstrap FAQ-style accordion with
green icon boxes on the right side and blue active-state indicators. Three
question panels with text answers.

- **ColorLib source**: https://colorlib.com/wp/template/accordion-06/
- **Preview URL**: https://preview.colorlib.com/theme/bac/accordion-06/
- **Stack**: Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name**: `crumple` (single lowercase word, no collision with existing specs/apps)

## Design tokens

Extracted from the preview CSS (https://preview.colorlib.com/theme/bac/accordion-06/css/style.css):

| Token           | Value                                     | Usage                                         |
| --------------- | ----------------------------------------- | --------------------------------------------- |
| Font family     | `"Poppins", Arial, sans-serif`            | Body + headings (Google Fonts weight 300–800) |
| Brand / icon    | `#37c46f` (green)                         | Icon box background (collapsed state)         |
| Active icon     | `#3da1e3` (blue)                          | Icon box background (expanded state)          |
| Background      | `#fafafa`                                 | Page background                               |
| Card background | `#ffffff`                                 | Accordion container                           |
| Text (body)     | `gray`                                    | Body copy                                     |
| Text (headings) | `#000000`                                 | h1–h5, h3 in accordion headers                |
| Card body bg    | `rgba(0, 0, 0, 0.02)`                     | Very light gray behind answer text            |
| Shadow          | `0px 10px 24px -11px rgba(0, 0, 0, 0.27)` | Darker drop shadow on container               |
| Border radius   | `0` (sharp corners)                       | All elements: sharp, no rounding              |
| Section padding | `7em 0`                                   | `.ftco-section` top/bottom                    |
| Icon position   | Right side of header                      | Opposite of accordion-05 (left)               |
| Header padding  | `pl-4` (padding-left: 1.5rem)             | Left padding on button                        |
| Heading font    | `16px`                                    | h3 inside accordion header                    |
| Button font     | `18px`                                    | Full-width button text                        |
| Button border   | `1px solid rgba(0, 0, 0, 0.05)`           | Subtle bottom border on each header           |

## HTML structure (from preview)

```
<section class="ftco-section">
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <h2 class="heading-section mb-5 pb-md-4">Accordion #06</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-7 col-lg-6">
        <div id="accordion" class="myaccordion w-100">
          <!-- Card 1: "How to manage account?" (open by default) -->
          <div class="card">
            <div class="card-header">
              <button data-toggle="collapse" aria-expanded="true">
                <div class="heading">
                  <h3>How to manage account?</h3>
                </div>
                <div class="icon">
                  <i class="fa"></i>  <!-- chevron icon -->
                </div>
              </button>
            </div>
            <div class="collapse show">
              <div class="card-body p-4">
                <p>Far far away, behind the word mountains…</p>
              </div>
            </div>
          </div>
          <!-- Card 2: "How to become Pro" (collapsed) -->
          <!-- Card 3: "How to create an account?" (collapsed) -->
          <!-- Same structure, all collapsed -->
        </div>
      </div>
    </div>
  </div>
</section>
```

## Visual design notes

This is a FAQ-style accordion. Key visual differences from accordion-05:

- Icon boxes are on the RIGHT side of the header (not left)
- Default icon color: green (#37c46f); active/expanded icon: blue (#3da1e3)
- Card body has very light gray background (rgba(0,0,0,0.02)), not colored
- Text is a simple question/answer format
- Darker drop shadow on the container
- No list items inside — just paragraph text answers

## Gherkin requirements

```gherkin
Feature: Crumple FAQ Accordion Component
  As a user, I want to expand/collapse FAQ sections
  so I can find answers to common questions.

  Background:
    Given the page is loaded
    And the accordion is visible

  Scenario: Page heading is displayed
    Then I should see the heading "Accordion #06"

  Scenario: First FAQ is expanded by default
    Given the "How to manage account?" panel is expanded
    Then I should see the answer text in the expanded panel
    And the icon for "How to manage account?" should show expanded state

  Scenario: Clicking an expanded FAQ collapses it
    Given the "How to manage account?" panel is expanded
    When I click the "How to manage account?" header
    Then the "How to manage account?" panel should be collapsed

  Scenario: Clicking a collapsed FAQ expands it
    Given the "How to become Pro" panel is collapsed
    When I click the "How to become Pro" header
    Then the "How to become Pro" panel should be expanded
    And I should see answer text

  Scenario: Only one FAQ panel can be open at a time
    Given the "How to manage account?" panel is expanded
    When I click the "How to become Pro" header
    Then the "How to manage account?" panel should be collapsed
    And the "How to become Pro" panel should be expanded

  Scenario: Icons are green by default and blue when active
    Then the "How to become Pro" icon should have green background
    When I click the "How to become Pro" header
    Then the "How to become Pro" icon should have blue background

  Scenario: Chevron icons rotate on expand/collapse
    Given the "How to manage account?" panel is expanded
    Then the chevron for "How to manage account?" should show expanded state
    When I click the "How to manage account?" header
    Then the chevron for "How to manage account?" should show collapsed state

  Scenario: Cards have sharp corners
    Then the accordion container should have no border-radius

  Scenario: Card body has subtle gray background when expanded
    Given the "How to manage account?" panel is expanded
    Then the expanded panel body should have light gray background
```

## Verification checklist

- [ ] Heading text matches: "Accordion #06"
- [ ] Three FAQ panels: "How to manage account?", "How to become Pro", "How to create an account?"
- [ ] First panel expanded by default; others collapsed
- [ ] Clicking a collapsed header expands it
- [ ] Clicking an expanded header collapses it
- [ ] Only one panel open at a time
- [ ] Icon boxes on the RIGHT side of header
- [ ] Default icon color: green (#37c46f)
- [ ] Active icon color: blue (#3da1e3)
- [ ] Chevron rotates: down when open, right when closed
- [ ] Card body has very light gray background
- [ ] No border-radius on any element
- [ ] Dark drop shadow on container
- [ ] Font: Poppins (Google Fonts)
- [ ] Page background: #fafafa
- [ ] Footer links to https://www.componentdock.com/

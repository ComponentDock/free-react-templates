# Template: RegSite (Registration Form)

## Purpose

Recreation of ColorLib "Regform 6" — a single-page job application form template.
- **ColorLib source:** [colorlib-regform-6](https://colorlib.com/wp/template/colorlib-regform-6/)
- **Preview URL:** https://preview.colorlib.com/theme/colorlib-regform-6/ (unreachable at time of prep — fallback to screenshot + downloaded source)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Registration Forms
- **Description:** "Apply for Job" form with full name, email, message textarea, file upload CV, and submit button. Dark background, white card with speech-bubble arrow pointer from card body to heading.

## Design tokens

Extracted from ColorLib source CSS (`css/style.css`):

| Token | Value | Usage |
|---|---|---|
| Page background | `#1a1a1a` | `.cl-bg-dark` — full-page dark wrapper |
| Card body bg | `#fff` | `.card-6 .cl-card-body` |
| Card footer bg | `#fff` | `.card-6 .cl-card-footer` |
| Card border | `1px solid #e5e5e5` | Body and footer borders |
| Card border-radius | `3px` | `.cl-card` |
| Title color | `#fff` | `.title` — white on transparent heading |
| Title size | `36px`, font-weight `700` | `.title` |
| Label color | `#333` | `.cl-form-row .name` — bold field labels |
| Label size | `15px`, font-weight `700` | `.cl-form-row .name` |
| Label width | `188px` | Fixed-width label column |
| Input border | `1px solid #cccccc` | `.input--style-6` |
| Input text color | `#666` | `.input--style-6` |
| Input placeholder | `#999` | `.input--style-6::-webkit-input-placeholder` |
| Input font-size | `15px` | `.input--style-6` |
| Input border-radius | `3px` | `.input--style-6` |
| Input padding | `0 20px` | `.input--style-6` |
| Focus shadow | `0px 1px 5px 0px rgba(0,0,0,0.15)` | `.input--style-6:focus` |
| Focus lift | `translateY(-3px)` | `.input--style-6:focus` |
| Textarea min-height | `120px` | `.textarea--style-6` |
| Textarea line-height | `1.2` | `.textarea--style-6` |
| Textarea padding | `10px 20px` | `.textarea--style-6` |
| Submit button bg | `#2c6ed5` | `.btn--blue-2` |
| Submit button hover | `#185ac1` | `.btn--blue-2:hover` |
| Submit button text | `#fff` | `.cl-btn` |
| Submit button height | `50px` (line-height) | `.cl-btn` |
| Submit button padding | `0 30px` | `.cl-btn` |
| Submit button radius | `5px` | `.btn--radius-2` |
| Submit button font | `15px`, weight `700`, capitalize | `.cl-btn` |
| File upload button bg | `#666666` | `.input-file + label` |
| File upload button hover | `#1b1b1b` | `.input-file + label:hover` |
| File upload button text | `#fff` | `.input-file + label` |
| File upload button radius | `3px` | `.input-file + label` |
| Description text color | `#999` | `.label--desc` |
| Description text size | `13px` | `.label--desc` |
| Font family | `"Open Sans", "Arial", "Helvetica Neue", sans-serif` | `body` |
| Form row padding | `24px 55px` | `.cl-form-row` |
| Form row border-bottom | `1px solid #e5e5e5` | `.cl-form-row` |
| Card body padding | `30px 0` (top) | `.card-6 .cl-card-body` |
| Card footer padding | `50px 55px` | `.card-6 .cl-card-footer` |
| Wrapper max-width | `900px` | `.wrapper--w900` |
| Page padding-top | `100px` | `.p-t-100` |
| Page padding-bottom | `50px` | `.p-b-50` |
| Speech-bubble arrow | 10px triangle, `border-bottom-color: #fff`, `left: 75px` | `.card-6 .cl-card-body:before` |

## Section structure

Single-section template (no multi-page navigation). Order:

1. **Dark page wrapper** — full viewport dark background (`#1a1a1a`), centered max-width 900px card
2. **Card heading** — transparent background, white "Apply for job" title (36px bold, left-aligned)
3. **Card body (form)** — white background with border, speech-bubble arrow pointing up to heading. Contains:
   - Full name text input (label + input row)
   - Email address input with placeholder `example@email.com`
   - Message textarea with placeholder `Message sent to the employer`
   - Upload CV file picker (hidden input + "Choose file" label button + "No file chosen" info text + description "Upload your CV/Resume or any other relevant file. Max file size 50 MB")
4. **Card footer** — white background with border, "Send Application" blue submit button (right-aligned or full-width)

## Gherkin scenarios

```gherkin
Feature: RegSite job application form

  Scenario: Page renders with dark background and centered card
    Given the page loads
    Then the background is dark charcoal (#1a1a1a)
    And a white card is centered with max-width 900px
    And the card heading shows "Apply for job" in white bold text

  Scenario: Speech-bubble arrow points from card body to heading
    Given the card body section is visible
    Then a CSS triangle arrow points upward from the card body toward the heading
    And the arrow is positioned at left: 75px from the card body edge

  Scenario: Full name field renders correctly
    Given the form is displayed
    Then the "Full name" label is bold, 15px, #333
    And the text input has a light gray border (#cccccc) with 3px radius
    And the input text color is #666

  Scenario: Email field has placeholder
    Given the form is displayed
    Then the "Email address" label is shown
    And the email input has placeholder "example@email.com"

  Scenario: Message textarea renders with minimum height
    Given the form is displayed
    Then the "Message" label is shown
    And the textarea has placeholder "Message sent to the employer"
    And the textarea has a minimum height of 120px

  Scenario: Upload CV file picker works
    Given the form is displayed
    Then the "Upload CV" label is shown
    And a "Choose file" button is visible (styled label)
    And "No file chosen" info text is shown
    And description text reads "Upload your CV/Resume or any other relevant file. Max file size 50 MB"
    When the user clicks "Choose file"
    Then the native file picker opens

  Scenario: Input focus creates lift effect
    Given any text input in the form
    When the user focuses the input
    Then a subtle box-shadow appears (rgba(0,0,0,0.15))
    And the input lifts 3px upward (translateY(-3px))

  Scenario: Submit button renders with blue styling
    Given the form card footer is visible
    Then the "Send Application" button is blue (#2c6ed5)
    And the button has 5px border radius
    And the button text is white, bold, 15px
    When the user hovers the button
    Then the button darkens to #185ac1

  Scenario: Form rows have consistent spacing and borders
    Given the form is displayed
    Then each form row has padding 24px 55px
    And each form row has a bottom border (#e5e5e5)

  Scenario: Responsive layout stacks fields vertically on mobile
    Given the viewport width is less than 768px
    Then form rows stack vertically (block layout)
    And form row padding reduces to 24px 30px
    And labels and inputs each take full width

  Scenario: Card footer has proper spacing
    Given the card footer is visible
    Then the footer has padding 50px 55px (30px on mobile)
    And the submit button is rendered inside the footer
```

## Verification checklist

- [ ] Dark page background (#1a1a1a) fills viewport
- [ ] Card centered, max-width 900px
- [ ] "Apply for job" heading: white, 36px, bold, left-aligned, transparent background
- [ ] Speech-bubble triangle arrow from card body to heading (left: 75px)
- [ ] Card body: white bg, border, border-top-radius 3px
- [ ] Full name row: label 188px wide, bold 15px #333, input with #ccc border, 3px radius
- [ ] Email row: placeholder "example@email.com"
- [ ] Message row: textarea min-height 120px, placeholder present
- [ ] Upload CV row: hidden file input, styled "Choose file" label (#666 bg, white text, 3px radius), info text, description
- [ ] Focus effect: box-shadow + translateY(-3px) on inputs/textarea
- [ ] Submit button: #2c6ed5, 5px radius, 50px height, white bold text, hover #185ac1
- [ ] Form rows: padding 24px 55px, border-bottom #e5e5e5
- [ ] Responsive: <768px stacks vertically, padding 24px 30px
- [ ] Font: Open Sans (Google Fonts), weights 400 + 700
- [ ] Card footer: white bg, border, padding 50px 55px
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code

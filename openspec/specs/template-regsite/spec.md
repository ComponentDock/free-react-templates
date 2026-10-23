# Template: RegSite (Registration Form)
<!-- prep-status: shipped-as=regline -->
> **SHIPPED-UNDER** — the ColorLib `colorlib-regform-6` design this prep describes already
> ships as `apps/regline` (<https://regline.free.componentdock.com>).
> Do not scaffold `apps/regsite`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-regline/spec.md`.

## Purpose

Recreation of ColorLib "Regform 6" — a single-page job application form template.
- **ColorLib source:** [colorlib-regform-6](https://colorlib.com/wp/template/colorlib-regform-6/)
- **Preview URL:** https://preview.colorlib.com/theme/colorlib-regform-6/ (unreachable at time of prep — fallback to screenshot + downloaded source) — **re-probed 2026-10-23: the demo serves** (measured record below)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Registration Forms
- **Description:** "Apply for Job" form with full name, email, message textarea, file upload CV, and submit button. Dark background, white card with speech-bubble arrow pointer from card body to heading.

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/regform/colorlib-regform-6/` — HTTP 200, 3,266 B, title `Apply for job by Colorlib`.
>
> Sheet: `https://colorlib.com/etc/regform/colorlib-regform-6/css/style.css?v=a0432fbe` (9,652 B).
> Faces it actually declares: `Open Sans`, `Helvetica Neue`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

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

## Requirements

### Feature: RegSite template behaviour

Feature: RegSite job application form

#### Scenario: Page renders with dark background and centered card

- **GIVEN** the page loads
- **THEN** the background is dark charcoal (#1a1a1a)
- **AND** a white card is centered with max-width 900px
- **AND** the card heading shows "Apply for job" in white bold text

#### Scenario: Speech-bubble arrow points from card body to heading

- **GIVEN** the card body section is visible
- **THEN** a CSS triangle arrow points upward from the card body toward the heading
- **AND** the arrow is positioned at left: 75px from the card body edge

#### Scenario: Full name field renders correctly

- **GIVEN** the form is displayed
- **THEN** the "Full name" label is bold, 15px, #333
- **AND** the text input has a light gray border (#cccccc) with 3px radius
- **AND** the input text color is #666

#### Scenario: Email field has placeholder

- **GIVEN** the form is displayed
- **THEN** the "Email address" label is shown
- **AND** the email input has placeholder "example@email.com"

#### Scenario: Message textarea renders with minimum height

- **GIVEN** the form is displayed
- **THEN** the "Message" label is shown
- **AND** the textarea has placeholder "Message sent to the employer"
- **AND** the textarea has a minimum height of 120px

#### Scenario: Upload CV file picker works

- **GIVEN** the form is displayed
- **THEN** the "Upload CV" label is shown
- **AND** a "Choose file" button is visible (styled label)
- **AND** "No file chosen" info text is shown
- **AND** description text reads "Upload your CV/Resume or any other relevant file. Max file size 50 MB"
- **WHEN** the user clicks "Choose file"
- **THEN** the native file picker opens

#### Scenario: Input focus creates lift effect

- **GIVEN** any text input in the form
- **WHEN** the user focuses the input
- **THEN** a subtle box-shadow appears (rgba(0,0,0,0.15))
- **AND** the input lifts 3px upward (translateY(-3px))

#### Scenario: Submit button renders with blue styling

- **GIVEN** the form card footer is visible
- **THEN** the "Send Application" button is blue (#2c6ed5)
- **AND** the button has 5px border radius
- **AND** the button text is white, bold, 15px
- **WHEN** the user hovers the button
- **THEN** the button darkens to #185ac1

#### Scenario: Form rows have consistent spacing and borders

- **GIVEN** the form is displayed
- **THEN** each form row has padding 24px 55px
- **AND** each form row has a bottom border (#e5e5e5)

#### Scenario: Responsive layout stacks fields vertically on mobile

- **GIVEN** the viewport width is less than 768px
- **THEN** form rows stack vertically (block layout)
- **AND** form row padding reduces to 24px 30px
- **AND** labels and inputs each take full width

#### Scenario: Card footer has proper spacing

- **GIVEN** the card footer is visible
- **THEN** the footer has padding 50px 55px (30px on mobile)
- **AND** the submit button is rendered inside the footer

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

# Template: Inscribe (Event Registration Wizard)

> Recreation of ColorLib Colorlib Wizard 3 (https://colorlib.com/wp/template/colorlib-wizard-3/)

## Purpose

Provide a 3-step event registration form wizard with a split-screen layout: a hero image on the left and a dark-background form panel on the right. Each step collects event-related information using jQuery Steps–style wizard navigation (hidden step tiles, prev/next buttons). This is a Bootstrap-style event registration wizard snippet.

- **Source:** https://colorlib.com/wp/template/colorlib-wizard-3/
- **Live preview — REACHABLE (verified):** the naive `https://preview.colorlib.com/theme/colorlib-wizard-3/` returns 404; the REAL preview is the family path **`https://colorlib.com/etc/bwiz/colorlib-wizard-3/index.html`** (HTTP 200, 6106 bytes, `<title>FormWizard_v3</title>`).
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-3.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **Category:** Bootstrap Wizards (event registration form wizard)
- **New name:** Inscribe

## Design tokens

Extracted from the live preview stylesheet (`css/style.css`) at https://colorlib.com/etc/bwiz/colorlib-wizard-3/css/style.css:

| Token                        | Value                                   | Source                                      |
| ---------------------------- | --------------------------------------- | ------------------------------------------- |
| Font family (body)           | `"Arvo-Regular", serif`                 | `body { font-family }` (custom @font-face)  |
| Body font-size               | `15px`                                  | `body { font-size }`                         |
| Body color                   | `#fff`                                  | `body { color }`                             |
| Heading (h3) font-size       | `32px`                                  | `h3 { font-size }`                           |
| Heading (h3) color           | `#fff`                                  | `h3 { color }`                               |
| Heading (h3) font-weight     | `400`                                   | `h3 { font-weight }`                         |
| Label color                  | `#ccc`                                  | `label { color }`                            |
| Info-item span color         | `#ccc`                                  | `.info-item span { color }`                  |
| Form-control height          | `25px`                                  | `.form-control { height }`                   |
| Form-control font-size       | `13px`                                  | `.form-control { font-size }`                |
| Form-control border          | `1px solid rgba(255,255,255,0.4)`      | `.form-control { border-bottom }`            |
| Form-control focus border    | `1px solid rgba(255,255,255,0.8)`      | `input:focus { border-bottom }`              |
| Form-control background      | `none` (transparent)                    | `.form-control { background }`               |
| Form-control color           | `#fff`                                  | `.form-control { color }`                    |
| Action button height         | `42px`                                  | `.actions li a { height }`                   |
| Action button width          | `96px`                                  | `.actions li a { width }`                    |
| Action button border         | `1px solid #fff`                        | `.actions li a { border }`                   |
| Action button bg             | `none` (transparent)                    | `.actions li a { background }`               |
| Action button font           | `"Times New Roman"`                     | `.actions li a { font-family }`              |
| Action button color          | `#fff`                                  | `.actions li a { color }`                    |
| Action button hover bg       | `#fff`                                  | `.actions li a:hover { background }`         |
| Action button hover color    | `#333`                                  | `.actions li a:hover { color }`              |
| Action button hover border   | `1px solid transparent`                 | `.actions li a:hover { border }`             |
| Social icon font-size        | `17px`                                  | `.social a { font-size }`                    |
| Social icon color            | `#fff`                                  | `.social a { color }`                        |
| Social icon hover color      | `#e5e5e5`                               | `.social a:hover { color }`                  |
| Checkbox checkmark size      | `11px × 11px`                           | `.checkbox .checkmark { height, width }`     |
| Checkbox border              | `1px solid #ccc`                        | `.checkbox .checkmark { border }`            |
| Checkbox border-radius       | `50%` (circular)                        | `.checkbox .checkmark { border-radius }`     |
| Checkbox checked bg          | `#ccc`                                  | `.checkbox input:checked ~ .checkmark`       |
| Wrapper layout               | `100vh`, flex row                        | `.wrapper { height, display }`               |
| Image-holder width           | `65.78%`                                | `.wrapper .image-holder { width }`           |
| Image-holder bg              | `url(../images/form-wizard.jpg)` center/cover | `.image-holder { background }`         |
| Form-content width           | `34.22%`                                | `.wrapper .form-content { width }`           |
| Form-content bg              | `url(../images/form-wizard-bg.jpg)` center/cover | `.form-content { background }`      |
| Form-content padding         | `4.3%` left/right                       | `.form-content { padding-left, padding-right }` |
| Wizard height                | `509px`                                 | `.wizard { height }`                         |
| Steps margin-bottom          | `30px`                                  | `.steps ul { margin-bottom }`                |
| Steps heading hidden         | `.steps .current-info, .steps .number { display: none }` | Step tiles hidden |
| Responsive (≤1199px)         | wrapper block, image 100%/45vh, form 100%/55vh, wizard 50% centered | |
| Responsive (≤991px)          | image 35vh, form 65vh, wizard 80%       | |
| Responsive (≤767px)          | image none (show img tag), wrapper auto, form auto/padded, wizard 100% | |

## Structure (from preview DOM)

```
<div class="wrapper">                     ← 100vh flex row
  <div class="image-holder">              ← 65.78% left: hero background image
    <img src="images/form-wizard.jpg">    ← shown only on mobile (≤767px)
  </div>
  <div class="form-content">              ← 34.22% right: dark bg with form
    <form>
      <div id="wizard">                   ← jQuery Steps wizard container
        <!-- STEP 1: Event Information -->
        <section>
          <h3>Event Information</h3>
          <div class="info">
            <div class="info-item">
              <span class="lnr lnr-calendar-full"></span>
              <span class="unit">Date:</span> August 1 @ 8:00 am
            </div>
            <div class="info-item">
              <span class="lnr lnr-clock"></span>
              <span class="unit">Time:</span> 8:00 am - 5:00 pm
            </div>
            <div class="info-item">
              <span class="lnr lnr-apartment"></span>
              <span class="unit">Venue:</span> National Conference
            </div>
            <div class="info-item">
              <span class="lnr lnr-map"></span>
              <span class="unit">Address:</span> No 40 Baria Sreet 133/2
            </div>
            <div class="info-item">
              <span class="lnr lnr-earth"></span>
              <span class="unit">Website:</span> [email protected]
            </div>
          </div>
        </section>
        <!-- STEP 2: Set The Event -->
        <section>
          <h3>Set The Event</h3>
          <div class="form-group">
            <div class="form-price">              ← Price: $270
            <div class="form-select">             ← People: dropdown (1-10)
          </div>
          <div class="form-wrapper">Name: <input></div>
          <div class="form-wrapper">E-mail: <input></div>
          <div class="form-wrapper">Phone: <input></div>
          <div class="form-wrapper last">Address: <input></div>
        </section>
        <!-- STEP 3: Request from You -->
        <section>
          <h3 style="margin-bottom: 50px;">Request from You</h3>
          <div class="request">
            <div class="special-request">Special Request: <input></div>
            <input type="text" class="form-control" style="width: 100%;">
            <div class="question-request">
              Would you like your event staffed? <input>
              How many associates? <input>
              (Additional rates will apply for events requiring staff)
            </div>
          </div>
          <div class="checkbox">
            <label><input type="checkbox" checked> Please accept terms and conditions?</label>
          </div>
        </section>
      </div>
    </form>
    <!-- Navigation: Previous / Next buttons (jQuery Steps .actions) -->
    <div class="social">                   ← Social icons bar at bottom
      <a><i class="zmdi zmdi-facebook"></i></a>
      <a><i class="zmdi zmdi-twitter"></i></a>
      <a><i class="zmdi zmdi-tumblr"></i></a>
      <a><i class="zmdi zmdi-instagram"></i></a>
    </div>
  </div>
</div>
```

## Gherkin Requirements

### Requirement: Full-viewport split layout

The page SHALL display a full-viewport split layout with a hero image on the left (~66%) and a form panel on the right (~34%).

#### Scenario: Desktop layout
- **GIVEN** the page is rendered on a viewport wider than 1200px
- **WHEN** the layout is displayed
- **THEN** the hero image SHALL occupy approximately 66% of the width on the left
- **AND** the form panel SHALL occupy approximately 34% of the width on the right
- **AND** the total height SHALL be 100vh

#### Scenario: Mobile layout (≤767px)
- **GIVEN** the page is rendered on a viewport ≤767px
- **WHEN** the layout is displayed
- **THEN** the hero image SHALL stack above the form (block layout)
- **AND** the `<img>` tag SHALL be visible (replacing background image)
- **AND** both sections SHALL be full width

### Requirement: Step 1 — Event Information

The wizard SHALL start on Step 1 displaying event details with icons.

#### Scenario: Step 1 is visible on load
- **GIVEN** the page is rendered
- **WHEN** the wizard loads
- **THEN** Step 1 "Event Information" heading SHALL be visible
- **AND** five info items SHALL be displayed (Date, Time, Venue, Address, Website)
- **AND** each info item SHALL have a Linearicons icon next to the label

#### Scenario: Event details content
- **GIVEN** Step 1 is displayed
- **WHEN** the info items are read
- **THEN** Date SHALL show "August 1 @ 8:00 am"
- **AND** Time SHALL show "8:00 am - 5:00 pm"
- **AND** Venue SHALL show "National Conference"
- **AND** Address SHALL show "No 40 Baria Sreet 133/2"
- **AND** Website SHALL show a contact email

### Requirement: Step 2 — Set The Event

The wizard SHALL navigate to Step 2 showing a form with event setup fields.

#### Scenario: Step 2 fields
- **GIVEN** I navigate to Step 2
- **WHEN** the step is displayed
- **THEN** heading "Set The Event" SHALL be visible
- **AND** a Price field SHALL show "$270"
- **AND** a People dropdown SHALL be visible with options 1-10
- **AND** text inputs SHALL be present for Name, E-mail, Phone, and Address

#### Scenario: Form field styling
- **GIVEN** Step 2 is displayed
- **WHEN** I view the form fields
- **THEN** each input SHALL have a transparent background with a white bottom border (rgba(255,255,255,0.4))
- **AND** labels SHALL be #ccc color
- **AND** on focus the bottom border SHALL brighten to rgba(255,255,255,0.8)

### Requirement: Step 3 — Request from You

The wizard SHALL navigate to Step 3 showing special request fields and a terms checkbox.

#### Scenario: Step 3 fields
- **GIVEN** I navigate to Step 3
- **WHEN** the step is displayed
- **THEN** heading "Request from You" SHALL be visible
- **AND** a Special Request input SHALL be visible
- **AND** a full-width text input SHALL be visible below it
- **AND** "Would you like your event staffed?" with a small input SHALL be visible
- **AND** "How many associates?" with a small input SHALL be visible
- **AND** a terms-and-conditions checkbox SHALL be visible and checked by default

### Requirement: Wizard navigation (prev/next)

The wizard SHALL have Previous and Next navigation buttons.

#### Scenario: Next button advances steps
- **GIVEN** the wizard is on Step 1
- **WHEN** I click the Next button
- **THEN** the wizard SHALL advance to Step 2

#### Scenario: Previous button goes back
- **GIVEN** the wizard is on Step 2
- **WHEN** I click the Previous button
- **THEN** the wizard SHALL return to Step 1

#### Scenario: Navigation buttons styling
- **GIVEN** the wizard is displayed
- **WHEN** the navigation buttons are rendered
- **THEN** each button SHALL be 42px tall × 96px wide
- **AND** each button SHALL have a 1px solid white border and transparent background
- **AND** each button SHALL use "Times New Roman" font
- **AND** on hover the button SHALL fill white with #333 text

#### Scenario: Previous hidden on first step
- **GIVEN** the wizard is on Step 1
- **WHEN** the navigation is displayed
- **THEN** the Previous button SHALL be hidden or disabled (aria-disabled="true")

### Requirement: Social icons bar

The page SHALL display social media icon links at the bottom of the form panel.

#### Scenario: Social icons visible
- **GIVEN** the page is rendered
- **WHEN** the form panel bottom is displayed
- **THEN** four social icons SHALL be visible (Facebook, Twitter, Tumblr, Instagram)
- **AND** icons SHALL be 17px white, positioned at the bottom center of the form panel

#### Scenario: Social icon hover
- **GIVEN** the social icons are displayed
- **WHEN** I hover over a social icon
- **THEN** the icon color SHALL change to #e5e5e5

### Requirement: Design fidelity — dark background form panel

The form panel SHALL have a dark background image with white text throughout.

#### Scenario: Form panel background
- **GIVEN** the page is rendered
- **WHEN** the form panel is displayed
- **THEN** it SHALL have a dark background image (centered, cover)
- **AND** all text (headings, labels, body) SHALL be white or near-white (#ccc)

#### Scenario: Wizard container height
- **GIVEN** the wizard is displayed on desktop
- **WHEN** the wizard container is measured
- **THEN** it SHALL have a height of 509px

### Requirement: Checkbox styling

The terms checkbox SHALL be a custom circular checkbox.

#### Scenario: Checkbox appearance
- **GIVEN** Step 3 is displayed
- **WHEN** the checkbox is rendered
- **THEN** it SHALL be an 11px circular checkbox with a 1px solid #ccc border
- **AND** when checked, the background SHALL fill with #ccc

### Requirement: Footer links to Component Dock

The page footer SHALL include a link to Component Dock.

#### Scenario: Footer link
- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain a link to componentdock.com
- **AND** the link text SHALL mention "Component Dock"

## Verification checklist

- [ ] Full-viewport split layout (66% image / 34% form) on desktop
- [ ] Hero background image on left panel
- [ ] Dark background image on form panel
- [ ] Arvo-Regular font family loaded via @font-face
- [ ] Step 1: "Event Information" with 5 info items + icons
- [ ] Step 2: "Set The Event" with price, people dropdown, 4 text inputs
- [ ] Step 3: "Request from You" with special request, staff question, terms checkbox
- [ ] Prev/Next navigation buttons (42×96px, white border, Times New Roman)
- [ ] Previous button hidden on Step 1
- [ ] Next button advances wizard steps
- [ ] Previous button returns to previous step
- [ ] Form inputs: transparent bg, white bottom border, #ccc labels
- [ ] Input focus brightens border
- [ ] Social icons (Facebook, Twitter, Tumblr, Instagram) at bottom
- [ ] Social icon hover → #e5e5e5
- [ ] Custom circular checkbox (11px, #ccc border, #ccc fill on check)
- [ ] Responsive: stacks at ≤767px, image shows as <img> on mobile
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code

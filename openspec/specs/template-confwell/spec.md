# Template: ConfWell (Split-Screen Event Registration Wizard)

## Purpose

- **Recreation of ColorLib source**: Colorlib Wizard 3 (`https://colorlib.com/wp/template/colorlib-wizard-3/`)
- **Preview URL**: `https://colorlib.com/etc/bwiz/colorlib-wizard-3/index.html` (actual preview; `https://preview.colorlib.com/theme/colorlib-wizard-3/` returns 404)
- **New Name**: `confwell` (App directory: `apps/confwell`, Package: `@free-react-templates/confwell`)
- **Category**: Forms / Multi-step Event Registration Wizard
- **Description**: A split-screen 3-step event registration wizard. Left panel shows a full-height event/conference image. Right panel is a dark textured background area with white text and bottom-border inputs. Steps: (1) Event Information — display-only event details (date, time, venue, address, website); (2) Set The Event — price display, people count dropdown, name, email, phone, address inputs; (3) Request from You — special request fields, staff questions, terms checkbox. Uses Arvo-Regular font, white-on-dark aesthetic, minimal outlined buttons.
- **Source slug**: `colorlib-wizard-3`
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-3.jpg` (1200×972, shows split-screen: event image left, dark form right with 3-step wizard)

## Design Tokens (from reference CSS `css/style.css`)

| Token                   | Value                                            | Source                    |
| ----------------------- | ------------------------------------------------ | ------------------------- |
| Font family (body)      | `"Arvo-Regular"` (custom @font-face)             | `body` in `css/style.css` |
| Font size (body)        | `15px`                                           | `body`                    |
| Body text color         | `#fff` (white)                                   | `body`                    |
| Heading font-size       | `32px`, `font-weight: 400`, centered             | `h3`                      |
| Heading color           | `#fff` (white)                                   | `h3`                      |
| Label color             | `#ccc` (light gray)                              | `label`                   |
| Info span color         | `#ccc`                                           | `.info-item span`         |
| Input height            | `25px`                                           | `.form-control`           |
| Input font-size         | `13px`                                           | `.form-control`           |
| Input border            | `border-bottom: 1px solid rgba(255,255,255,0.4)` | `.form-control`           |
| Input focus border      | `border-bottom: 1px solid rgba(255,255,255,0.8)` | `input:focus`             |
| Input background        | `none` (transparent)                             | `.form-control`           |
| Input color             | `#fff` (white)                                   | `.form-control`           |
| Select font-size        | `15px`                                           | `select.form-control`     |
| Button height           | `42px`                                           | `.actions li a`           |
| Button width            | `96px`                                           | `.actions li a`           |
| Button border           | `1px solid #fff`                                 | `.actions li a`           |
| Button background       | `none` (transparent)                             | `.actions li a`           |
| Button color            | `#fff` (white)                                   | `.actions li a`           |
| Button font             | `"Times New Roman"`                              | `.actions li a`           |
| Button hover background | `#fff` (white)                                   | `.actions li a:hover`     |
| Button hover color      | `#333` (dark)                                    | `.actions li a:hover`     |
| Button hover border     | `1px solid transparent`                          | `.actions li a:hover`     |
| Social icon font-size   | `17px`                                           | `.social a`               |
| Social icon color       | `#fff` (white)                                   | `.social a`               |
| Social icon hover       | `#e5e5e5`                                        | `.social a:hover`         |
| Checkbox border         | `1px solid #ccc`                                 | `.checkbox .checkmark`    |
| Checkbox border-radius  | `50%` (circular)                                 | `.checkbox .checkmark`    |
| Checkbox size           | `11px × 11px`                                    | `.checkbox .checkmark`    |
| Image holder width      | `65.78%`                                         | `.wrapper .image-holder`  |
| Form content width      | `34.22%`                                         | `.wrapper .form-content`  |
| Wrapper height          | `100vh` (full viewport)                          | `.wrapper`                |
| Image holder background | `form-wizard.jpg` (center/cover)                 | `.image-holder`           |
| Form content background | `form-wizard-bg.jpg` (center/cover)              | `.form-content`           |
| Form content padding    | `4.3% left/right`                                | `.form-content`           |
| Form wrapper margin     | `22px` bottom                                    | `.form-wrapper`           |
| Form label width        | `27.85%`                                         | `.form-wrapper label`     |
| Form input width        | `72.15%`                                         | `.form-wrapper input`     |
| Step arrow margin-left  | `32%` (step 1), `57%` (steps 2-3)                | `.steps li .step-arrow`   |
| Steps margin-bottom     | `30px`                                           | `.steps ul`               |
| Heading margin-bottom   | `58px`                                           | `h3`                      |

## Layout Structure

This is a **split-screen** wizard — the viewport is divided into two halves:

1. **Left panel** (image side): 65.78% width, full-height event/conference background image
2. **Right panel** (form side): 34.22% width, dark textured background image, padding 4.3% on sides

### Wizard Steps (3-step flow)

| Step | Title             | Fields/Content                                                                                                                                  |
| ---- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Event Information | Display-only: Date (Aug 1 @ 8:00 am), Time (8:00 am - 5:00 pm), Venue (National Conference), Address (No 40 Baria Sreet 133/2), Website (email) |
| 2    | Set The Event     | Price ($270 display), People (dropdown 1-10), Name (text), E-mail (text), Phone (text), Address (text)                                          |
| 3    | Request from You  | Special Request (text), Free-form text, Staff questions ("Would you like your event staffed?" + "How many associates?"), Terms checkbox         |

### Step Navigation

- Previous/Next buttons at bottom of each step
- Buttons: outlined (white border, transparent bg), 42×96px, Times New Roman font
- Hover: white bg, dark text
- Disabled step: opacity 0 with 1s transition

### Social Links

- Positioned at bottom of form panel (absolute, centered)
- 4 social icons: Facebook, Twitter, Tumblr, Instagram
- Material Design Iconic Font icons, 17px, white

### Responsive Breakpoints

- **≤1199px**: Stacks vertically (image 45vh top, form 55vh bottom), wizard centered 50% width
- **≤991px**: Image 35vh, form 65vh, wizard 80% width
- **≤767px**: Auto height, form padding 35px 20px, wizard 100% width, social links static

## Gherkin Requirements

### Scenario: Page loads with step 1 active

- Given the user navigates to the ConfWell event registration wizard
- Then the page displays a split-screen layout with image left and dark form right
- And the title "Event Information" is visible (32px, centered, white)
- And event details are displayed: Date, Time, Venue, Address, Website
- And "Next" button is visible at the bottom

### Scenario: Navigate to step 2

- Given the user is on step 1
- When the user clicks "Next"
- Then step 2 becomes active
- And the title "Set The Event" is visible
- And a price display shows "$270"
- And a people count dropdown (1-10) is visible
- And inputs for Name, E-mail, Phone, Address are visible

### Scenario: Navigate to step 3

- Given the user is on step 2
- When the user clicks "Next"
- Then step 3 becomes active
- And the title "Request from You" is visible
- And a special request input is visible
- And staff question inputs are visible
- And a terms checkbox is visible

### Scenario: Navigate back to previous step

- Given the user is on step 2
- When the user clicks "Previous"
- Then step 1 becomes active again
- And event information is displayed

### Scenario: Button hover state

- Given the user hovers over the "Next" button
- Then the button background becomes white
- And the button text becomes dark (#333)

### Scenario: Responsive layout on mobile

- Given the user views the wizard on a viewport width of 375px
- Then the layout stacks vertically
- And the image section is auto-height
- And the form section has padding 35px 20px
- And social links are static (not absolutely positioned)

### Scenario: Visual design tokens

- Given the wizard is rendered
- Then the body uses font-family "Arvo-Regular"
- And headings are 32px, white, font-weight 400
- And inputs have bottom-border only (1px solid rgba(255,255,255,0.4))
- And buttons are outlined (border 1px solid #fff, transparent background)
- And the form panel has a dark background image

## Verification Checklist

- [ ] Spec exists at `openspec/specs/template-confwell/spec.md`
- [ ] Design tokens match reference CSS from `https://colorlib.com/etc/bwiz/colorlib-wizard-3/css/style.css`
- [ ] 3-step wizard flow: event info → set event → requests
- [ ] Split-screen layout (image left 65.78%, form right 34.22%)
- [ ] Arvo-Regular font loaded
- [ ] White-on-dark aesthetic with bottom-border inputs
- [ ] Outlined buttons (transparent bg, white border)
- [ ] Social links at bottom of form panel
- [ ] Terms checkbox on step 3
- [ ] Responsive: stacks vertically on mobile
- [ ] No references to ColorLib in app code (provenance only in spec + TEMPLATES.md + PR)
- [ ] Footer links to `https://www.componentdock.com/`

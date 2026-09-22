# Template: MedLink (Healthcare / Medical)

## Purpose

Recreation of **ColorLib "Medical 2"** template
(https://colorlib.com/wp/template/medical-2/).
Preview was unreachable (404) — design derived from the TEMPLATES.md screenshot.

**Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript.
**Deploy target:** `https://medlink.free.componentdock.com`.

## Source mapping

| Field             | Value                                                    |
| ----------------- | -------------------------------------------------------- |
| ColorLib slug     | `medical-2`                                              |
| Preview URL       | `https://preview.colorlib.com/theme/medical-2/` (404)    |
| Screenshot source | `https://colorlib.com/wp/wp-content/uploads/sites/2/medical-free-template.jpg` |
| Design category   | Healthcare / Medical                                     |

## Design tokens (from screenshot)

| Token             | Value                      | Notes                                      |
| ----------------- | -------------------------- | ------------------------------------------ |
| Brand green       | `#76b900` (approx)        | Primary CTA buttons, logo icon             |
| Top bar bg        | `#333333`                 | Dark charcoal bar with contact info         |
| Top bar text      | `#ffffff`                 | White                                      |
| Hero overlay      | `rgba(0,0,0,0.55)`        | Dark semi-transparent over background img   |
| Hero text         | `#ffffff`                 | White heading + subtext                    |
| Content bg        | `#ffffff`                 | White content sections                     |
| Body text         | `#666666` (approx)        | Muted gray body copy                       |
| Heading text      | `#333333`                 | Dark headings (Servicing Hours, form title) |
| Font family       | `Poppins, sans-serif`     | Sans-serif medical/tech feel               |
| Button radius     | `4px`                     | Subtle rounded corners on CTAs             |
| Section spacing   | ~80px vertical padding    | Generous whitespace between sections       |

## Gherkin requirements

### Top bar

```gherkin
Scenario: Top bar displays contact info and CTA
  Given I visit the MedLink homepage
  Then I see a top bar with phone number and email on the left
  And I see a green "BOOK APPOINTMENT" button on the right
  And the top bar has a dark background
```

### Navigation

```gherkin
Scenario: Navigation bar renders with all menu items
  Given I visit the MedLink homepage
  Then I see a white navigation bar with a green cross logo and "MedLink" brand
  And I see links for Home, About, Features, Doctors, Departments, Blog, Pages, Contact
  And the navigation is horizontal and fixed or sticky at the top

Scenario: Navigation highlights current page
  Given I am on the MedLink homepage
  Then the "Home" link is visually distinguished as active
```

### Hero section

```gherkin
Scenario: Hero displays headline and CTA over background image
  Given I visit the MedLink homepage
  Then I see a full-width hero section with a dark overlay over a medical background image
  And I see the heading "We Care for Your Health Every Moment"
  And I see a subtext paragraph below the heading
  And I see a green "GET STARTED" button centered below the subtext

Scenario: Hero button navigates to relevant section
  Given I am on the MedLink homepage
  When I click the "GET STARTED" button in the hero
  Then I am scrolled or navigated to the appointment or features section
```

### Servicing Hours section

```gherkin
Scenario: Servicing hours section shows schedule
  Given I visit the MedLink homepage
  Then I see a "Servicing Hours" heading on the left side of the split section
  And I see a descriptive paragraph below the heading
  And I see days and hours listed (e.g. "Monday-Friday" with time range)
  And the schedule content is on the left column of a two-column layout
```

### Book an Appointment form

```gherkin
Scenario: Appointment form renders all fields
  Given I visit the MedLink homepage
  Then I see a "Book an Appointment" heading on the right side of the split section
  And I see input fields for Patient Name, Phone, Email Address, Date of Birth
  And I see a Disease Type dropdown
  And I see an Appointment Date field
  And I see a submit button

Scenario: Appointment form validates required fields
  Given I am on the MedLink homepage
  When I click the submit button without filling any fields
  Then I see validation messages for required fields

Scenario: Appointment form accepts valid input
  Given I am on the MedLink homepage
  When I fill in Patient Name with "John Doe"
  And I fill in Phone with "555-1234"
  And I fill in Email Address with "john@example.com"
  And I fill in Date of Birth with "01/15/1985"
  And I select Disease Type as "General Checkup"
  And I fill in Appointment Date with "12/01/2026"
  And I click the submit button
  Then the form submits without validation errors
```

### Footer

```gherkin
Scenario: Footer links to Component Dock
  Given I visit the MedLink homepage
  Then I scroll to the bottom of the page
  And I see a footer with a link to https://www.componentdock.com/

Scenario: Footer contains template navigation
  Given I visit the MedLink homepage
  Then I see footer columns with navigation links similar to the main nav
```

## Section order (from screenshot)

1. **Top bar** — dark, contact info + green CTA button
2. **Navigation** — white, horizontal, logo + links
3. **Hero** — full-width bg image, dark overlay, centered text + CTA
4. **Split section** — Servicing Hours (left) + Book an Appointment form (right)
5. **(Inferred)** Additional sections below fold (doctors, features, departments, blog, footer) — screenshot is truncated; implementer should infer logical sections from the nav links and typical medical template structure

## Verification checklist

- [ ] Top bar: dark bg, phone/email left, green "BOOK APPOINTMENT" right
- [ ] Navigation: white bg, green cross logo + "MedLink", all nav links present
- [ ] Hero: full-width bg image, dark overlay, white heading + subtext + green CTA
- [ ] Split section: Servicing Hours left, Appointment form right
- [ ] Form fields: Patient Name, Phone, Email, DOB, Disease Type (dropdown), Appointment Date
- [ ] Form validation: required field checks, valid submission
- [ ] Footer: links to componentdock.com
- [ ] Design tokens: green (#76b900), Poppins font, dark top bar (#333), white content
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Responsive: mobile-first, hamburger nav on small screens
- [ ] 100% test coverage (lines, functions, branches, statements)

# Template: MedLink (Healthcare / Medical)

## Purpose

Recreation of **ColorLib "Medical 2"** template
(https://colorlib.com/wp/template/medical-2/).
Preview was unreachable (404) — design derived from the TEMPLATES.md screenshot.

**Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript.
**Deploy target:** `https://medlink.free.componentdock.com`.

## Source mapping

| Field             | Value                                                                          |
| ----------------- | ------------------------------------------------------------------------------ |
| ColorLib slug     | `medical-2`                                                                    |
| Preview URL       | `https://preview.colorlib.com/theme/medical-2/` (404)                          |
| Screenshot source | `https://colorlib.com/wp/wp-content/uploads/sites/2/medical-free-template.jpg` |
| Design category   | Healthcare / Medical                                                           |

## Design tokens (from screenshot)

| Token           | Value                  | Notes                                       |
| --------------- | ---------------------- | ------------------------------------------- |
| Brand green     | `#76b900` (approx)     | Primary CTA buttons, logo icon              |
| Top bar bg      | `#333333`              | Dark charcoal bar with contact info         |
| Top bar text    | `#ffffff`              | White                                       |
| Hero overlay    | `rgba(0,0,0,0.55)`     | Dark semi-transparent over background img   |
| Hero text       | `#ffffff`              | White heading + subtext                     |
| Content bg      | `#ffffff`              | White content sections                      |
| Body text       | `#666666` (approx)     | Muted gray body copy                        |
| Heading text    | `#333333`              | Dark headings (Servicing Hours, form title) |
| Font family     | `Poppins, sans-serif`  | Sans-serif medical/tech feel                |
| Button radius   | `4px`                  | Subtle rounded corners on CTAs              |
| Section spacing | ~80px vertical padding | Generous whitespace between sections        |

## Requirements

### Requirement: Top bar displays contact info and CTA

The top bar SHALL display phone number and email on the left side, and a green "BOOK APPOINTMENT" button on the right side, with a dark charcoal background.

#### Scenario: Top bar renders with contact info

- **WHEN** I visit the MedLink homepage
- **THEN** I see a top bar with phone number (+953 012 3654 896) and email (support@medlink.com) on the left
- **AND** I see a green "BOOK APPOINTMENT" button on the right
- **AND** the top bar has a dark background (#333333)

### Requirement: Navigation bar renders with all menu items

The navigation SHALL render a white bar with a green cross logo and "MedLink" brand, with links for Home, About, Features, Doctors, Departments, Blog, Pages, Contact.

#### Scenario: Navigation renders all links

- **WHEN** I visit the MedLink homepage
- **THEN** I see a white navigation bar with a green cross logo and "MedLink" brand
- **AND** I see links for Home, About, Features, Doctors, Departments, Blog, Pages, Contact
- **AND** the navigation is horizontal and sticky at the top

#### Scenario: Navigation mobile toggle works

- **WHEN** I click the mobile menu toggle button
- **THEN** the mobile menu expands showing all nav links
- **AND** aria-expanded is set to true

### Requirement: Hero displays headline and CTA over background image

The hero section SHALL display a full-width background image with dark overlay, white heading "We Care for Your Health Every Moment", subtitle text, and green "GET STARTED" button.

#### Scenario: Hero renders with heading and CTA

- **WHEN** I visit the MedLink homepage
- **THEN** I see a full-width hero section with a dark overlay over a medical background image
- **AND** I see the heading "We Care for Your Health Every Moment"
- **AND** I see a subtitle paragraph below the heading
- **AND** I see a green "GET STARTED" button centered below the subtitle

### Requirement: Servicing hours section shows schedule

The servicing hours section SHALL display a heading, description, and schedule listing days and hours.

#### Scenario: Servicing hours renders schedule

- **WHEN** I visit the MedLink homepage
- **THEN** I see a "Servicing Hours" heading
- **AND** I see a descriptive paragraph below the heading
- **AND** I see days and hours listed (Monday-Friday: 08:00 am - 10:00 pm, Saturday: 08:00 am - 06:00 pm, Sunday: Closed)

### Requirement: Book an Appointment form renders all fields

The appointment form SHALL display fields for Patient Name, Phone, Email Address, Date of Birth, Disease Type (dropdown), and Appointment Date with a submit button.

#### Scenario: Appointment form renders all fields

- **WHEN** I visit the MedLink homepage
- **THEN** I see a "Book an Appointment" heading
- **AND** I see input fields for Patient Name, Phone, Email Address, Date of Birth
- **AND** I see a Disease Type dropdown with options
- **AND** I see an Appointment Date field
- **AND** I see a submit button

#### Scenario: Appointment form validates required fields

- **WHEN** I click the submit button without filling any fields
- **THEN** the form prevents default submission

#### Scenario: Appointment form accepts valid input

- **WHEN** I fill in Patient Name with "John Doe"
- **AND** I fill in Phone with "555-1234"
- **AND** I fill in Email Address with "john@example.com"
- **AND** I select Disease Type as "Cardiology"
- **AND** I click the submit button
- **THEN** the form submits without navigation

### Requirement: Footer links to Component Dock

The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer contains Component Dock link

- **WHEN** I scroll to the bottom of the page
- **THEN** I see a footer with a link to https://www.componentdock.com/
- **AND** the link is branded as "Component Dock"

#### Scenario: Footer contains navigation columns

- **WHEN** I scroll to the footer
- **THEN** I see footer columns with Quick Links and Departments navigation
- **AND** I see a newsletter signup form
- **AND** I see social media links

## Section order (from screenshot)

1. **Top bar** — dark, contact info + green CTA button
2. **Navigation** — white, horizontal, logo + links
3. **Hero** — full-width bg image, dark overlay, centered text + CTA
4. **Split section** — Servicing Hours (left) + Book an Appointment form (right)
5. **Doctors** — team cards with photo, name, specialty
6. **Departments** — grid of service cards with icons
7. **Blog** — post cards with image, date, title, excerpt
8. **Footer** — dark bg, newsletter, nav columns, social links, Component Dock

## Verification checklist

- [x] Top bar: dark bg, phone/email left, green "BOOK APPOINTMENT" right
- [x] Navigation: white bg, green cross logo + "MedLink", all nav links present
- [x] Hero: full-width bg image, dark overlay, white heading + subtext + green CTA
- [x] Split section: Servicing Hours left, Appointment form right
- [x] Form fields: Patient Name, Phone, Email, DOB, Disease Type (dropdown), Appointment Date
- [x] Form validation: required field checks, valid submission
- [x] Footer: links to componentdock.com
- [x] Design tokens: green (#76b900), Poppins font, dark top bar (#333), white content
- [x] No ColorLib references in app code (provenance in spec only)
- [x] Responsive: mobile-first, hamburger nav on small screens
- [x] 100% test coverage (lines, functions, branches, statements)

# Template: Spellforge (Profile Builder Wizard)

## Purpose

Recreation of [ColorLib Wizard 14](https://colorlib.com/wp/template/colorlib-wizard-14/) — a free multi-step profile builder / sign-up wizard template. The original is a Bootstrap-based wizard with jQuery Steps, featuring a clean green-accented card layout with three progressive form sections (About, Account, Address).

**Source:** ColorLib Wizard 14  
**Preview:** https://colorlib.com/etc/bwiz/colorlib-wizard-14/index.html  
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-14.jpg  
**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)

## Design Tokens

Extracted from the original `css/style.css`:

| Token                   | Value                     | Notes                                    |
| ----------------------- | ------------------------- | ---------------------------------------- |
| Font family             | Poppins (weights 300–900) | Via Google Fonts                         |
| Brand color (primary)   | #1ed760                   | Green — buttons, active states, progress |
| Brand color (secondary) | #8be7ac                   | Light green — progress bar fill          |
| Text color (primary)    | #222222                   | Headings, labels                         |
| Text color (secondary)  | #999999                   | Placeholders, helper text                |
| Error color             | #f63726                   | Red — validation errors                  |
| Background (page)       | #f8f8f8                   | Light gray page background               |
| Background (card)       | #ffffff                   | White card container                     |
| Border radius (card)    | 10px                      | Rounded card corners                     |
| Border radius (inputs)  | 5px                       | Rounded input fields                     |
| Button radius           | 5px (rounded)             | Rounded action buttons                   |
| Button color            | #1ed760                   | Green fill, white text                   |
| Button hover            | Darker green shade        | On hover state                           |
| Progress bar            | #8be7ac fill              | Green progress indicator                 |

## Section Structure (from preview HTML)

1. **Page wrapper** — full-page light gray (#f8f8f8) background, centered card
2. **Card container** — white (#fff), border-radius 10px, centered max-width
3. **Header** — "Build your profile" heading (h2, 24px, dark #222)
4. **Progress bar** — green (#8be7ac) fill showing step completion
5. **Step 1 — About**
   - Profile picture upload (file input with styled label)
   - First Name, Last Name (side-by-side flex row)
   - Email input
6. **Step 2 — Account**
   - Role selection label: "What are you doing?"
   - Three radio options with icon cards: Designer, Coder, Developer
   - Radio cards: border, rounded corners, icon image + text
7. **Step 3 — Address**
   - Street Name + Street Number (side-by-side)
   - City + Country dropdown (side-by-side)
8. **Navigation buttons** — Previous / Next (green #1ed760, rounded)

## Gherkin Requirements

### Feature: Multi-step profile builder wizard

Scenario: Page loads with step 1 visible
Given the user visits the spellforge page
Then the "Build your profile" heading is visible
And the "About" step section is displayed
And the progress bar shows 33% completion

Scenario: User fills About step and proceeds
Given the user is on the About step
When the user enters "John" in the First Name field
And the user enters "Doe" in the Last Name field
And the user enters "john@example.com" in the Email field
And the user clicks Next
Then the Account step is displayed
And the progress bar shows 66% completion

Scenario: User selects a role in Account step
Given the user is on the Account step
When the user selects the "Coder" role
And the user clicks Next
Then the Address step is displayed
And the progress bar shows 100% completion

Scenario: User fills Address step and submits
Given the user is on the Address step
When the user enters "Main St" in the Street Name field
And the user enters "123" in the Street Number field
And the user enters "New York" in the City field
And the user selects "USA" from the Country dropdown
And the user clicks the Submit button
Then the form is submitted

Scenario: User can navigate backwards
Given the user is on the Account step
When the user clicks Previous
Then the About step is displayed with previously entered values preserved

Scenario: Profile picture upload shows preview
Given the user is on the About step
When the user selects an image file
Then the selected image is displayed as the profile picture preview

Scenario: Form validates required fields
Given the user is on the About step
When the user clicks Next without filling any fields
Then validation errors are shown for required fields

## Verification Checklist

- [ ] Matches section structure and order 1:1 (About → Account → Address)
- [ ] Uses Poppins font via Google Fonts (not bundled)
- [ ] Brand color #1ed760 applied to buttons and active states
- [ ] Progress bar fills with #8be7ac green
- [ ] Card container has 10px border-radius on white background
- [ ] Input fields have 5px border-radius
- [ ] Profile picture upload with preview functionality
- [ ] Radio card selection with icon placeholders (use lucide-react icons)
- [ ] Previous/Next navigation with step state management
- [ ] Footer links to https://www.componentdock.com/ ("Component Dock")
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Placeholder images via https://picsum.photos/seed/spelldesk-<n>/<w>/<h>
- [ ] Responsive layout (mobile-friendly)
- [ ] All components have 100% test coverage

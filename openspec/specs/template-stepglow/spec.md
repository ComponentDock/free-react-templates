# Template: Stepglow (Bootstrap Wizard — Multi-step Registration)

## Purpose

- **Recreation of ColorLib source**: Colorlib Wizard 6 (`https://colorlib.com/wp/template/colorlib-wizard-6/`)
- **Preview URL (live CSS extracted from)**: `https://colorlib.com/etc/bwiz/colorlib-wizard-6/index.html`
- **New Name**: `stepglow` (App directory: `apps/stepglow`, Package: `@free-react-templates/stepglow`)
- **Category**: Bootstrap Wizards / Multi-step Form Wizard
- **Description**: A pastel-themed, multi-step user registration wizard with profile avatar upload, profession selection grid, and address entry. Three steps with pill-shaped navigation buttons and animated dot indicators on a gradient background.

## Design Tokens

- **Font Family**: Poppins (Google Fonts — Regular 400, Medium 500, SemiBold 600)
- **Primary brand color (Back button)**: `#f6c2ec` (soft pink/rose), hover `#dbadd2`
- **Secondary brand color (Continue button)**: `#aac1f0` (soft blue/lavender), hover `#98add6`
- **Dot indicator border**: `#f6c2ec` (pink), active dot filled `#f6c2ec`
- **Input background**: `#f7f7f7` (light gray)
- **Body text color**: `#808080` (gray)
- **Input/label text color**: `#333` (dark gray)
- **Card**: white (`#fff`), border-radius `10px`, shadow `0px 2px 7px rgba(0,0,0,0.1)`
- **Form inputs**: height `46px`, border-radius `23px` (pill-shaped), placeholder uppercase
- **Buttons**: height `46px`, width `146px`, border-radius `23px` (pill-shaped), white text, arrow icons via lucide-react
- **Step indicator dots**: 10x10px circles, white fill; current step stretches to 22px pill
- **Grid items (Step 2)**: height `134px`, width `30%`, border-radius `7px`, background-image cards with white uppercase label
- **Background**: pastel gradient from lavender-blue to soft pink (replaces original `form-wizard-bg.jpg` — use CSS gradient)
- **Mobile**: card goes full-width, no border-radius, no shadow, grid items full-width

## Requirements

### Requirement: 3-step wizard navigation with fade transitions

Users SHALL navigate through 3 wizard steps using Back and Continue buttons with fade transitions.

#### Scenario: Step 1 is displayed on load

- **WHEN** the user loads the Stepglow page
- **THEN** Step 1 (Personal Info) is visible with profile avatar, name fields, email, and password inputs

#### Scenario: Step indicator shows current progress

- **WHEN** the user is on Step 1
- **THEN** 3 dot indicators are shown below the card; the first dot is expanded (pill-shaped, filled), the other two are small circles

#### Scenario: Clicking Continue advances to next step

- **WHEN** the user clicks "Continue" on Step 1
- **THEN** the wizard transitions to Step 2 (Choose Profession) with a fade animation

#### Scenario: Step indicator updates on advance

- **WHEN** the user advances to Step 2
- **THEN** the second dot indicator becomes expanded and filled, and Step 1's dot returns to circle

### Requirement: Step 1 — Personal Info form with avatar upload

Step 1 SHALL display a profile avatar with a camera icon "Choose Picture" label, plus form fields for First Name, Last Name, Team Name, Email, and Create Password.

#### Scenario: Avatar section is displayed

- **WHEN** Step 1 is visible
- **THEN** a circular avatar image placeholder is shown on the left side of the card header with a "Choose Picture" file-upload trigger below it

#### Scenario: Personal info fields are displayed in header row

- **WHEN** Step 1 is visible
- **THEN** three input fields (First Name, Last Name, Team Name) appear in a row to the right of the avatar, each with a pink dot indicator to the left

#### Scenario: Email and password fields are displayed below header

- **WHEN** Step 1 is visible
- **THEN** two full-width pill-shaped inputs for Email and Create Password appear below the header row, each with a pink dot indicator

#### Scenario: Focus indicator activates on input

- **WHEN** the user clicks into any input field on Step 1
- **THEN** that field's dot indicator becomes filled (solid pink) and other dots return to outline only

### Requirement: Step 2 — Profession selection grid

Step 2 SHALL display a 2×3 grid of profession cards with background images, icons, and labels.

#### Scenario: Grid of 6 profession cards is displayed

- **WHEN** the user advances to Step 2
- **THEN** a 2-row, 3-column grid of profession cards is shown: Programming, Research, Teacher, Tour Guide, Business, Artist

#### Scenario: Profession card shows icon and label

- **WHEN** the user views Step 2
- **THEN** each grid card displays a centered icon image and an uppercase white label below it, overlaid on a background image

#### Scenario: Profession card hover effect

- **WHEN** the user hovers over a profession card
- **THEN** the card gains a darker shadow (`box-shadow: 0px 2px 7px rgba(0,0,0,0.25)`)

### Requirement: Step 3 — Address / Location form

Step 3 SHALL display a 2×2 grid of address fields: Street Name, Street Number, City, Country.

#### Scenario: Address fields are displayed in two rows

- **WHEN** the user advances to Step 3
- **THEN** Street Name and Street Number appear side-by-side in the first row, and City and Country appear side-by-side in the second row

#### Scenario: All fields are pill-shaped inputs

- **WHEN** Step 3 is visible
- **THEN** each field is a pill-shaped (`border-radius: 23px`) input with a pink dot indicator, matching the Step 1 style

### Requirement: Navigation buttons — Back and Continue

The wizard SHALL have pill-shaped Back and Continue buttons below the form content.

#### Scenario: Back button hidden on first step

- **WHEN** the user is on Step 1
- **THEN** only the "Continue" button is visible (no Back button)

#### Scenario: Both buttons visible on later steps

- **WHEN** the user is on Step 2 or Step 3
- **THEN** both "Back" (pink `#f6c2ec`) and "Continue" (blue `#aac1f0`) buttons are visible, with Back on the left and Continue on the right

#### Scenario: Continue button shows right arrow icon

- **WHEN** the "Continue" button is rendered
- **THEN** it displays a right-arrow icon (from lucide-react) before the "CONTINUE" text, inside a pill-shaped blue button

#### Scenario: Back button shows left arrow icon

- **WHEN** the "Back" button is rendered
- **THEN** it displays a left-arrow icon (from lucide-react) before the "BACK" text, inside a pill-shaped pink button

#### Scenario: Clicking Back returns to previous step

- **WHEN** the user clicks "Back" on Step 2
- **THEN** the wizard transitions back to Step 1 with a fade animation

### Requirement: Step indicator dots below card

The wizard SHALL display 3 dot indicators centered below the card.

#### Scenario: Dots reflect current step

- **WHEN** the user is on step N
- **THEN** dots 1 through N are styled as checked/completed and dot N is the expanded pill; dots after N are small white circles

#### Scenario: Dots are clickable

- **WHEN** the user clicks on a completed dot
- **THEN** the wizard jumps to that step (only for previously visited steps)

### Requirement: Responsive layout

The wizard SHALL be fully responsive.

#### Scenario: Desktop layout centers the card

- **WHEN** the viewport is wider than 768px
- **THEN** the wizard card is centered on screen with the gradient background visible, max-width 738px

#### Scenario: Mobile layout removes card chrome

- **WHEN** the viewport is narrower than 768px
- **THEN** the card goes full-width with no border-radius, no shadow, the background image/gradient is hidden, the form-header stacks vertically, grid items go full-width, and step dots are hidden

### Requirement: Footer with Component Dock branding

Every template's footer SHALL link to https://www.componentdock.com/.

#### Scenario: Footer contains Component Dock link

- **WHEN** the page is rendered
- **THEN** the footer contains a link to https://www.componentdock.com/ labeled "Component Dock"

## Verification Checklist

- [ ] Spec matches section order of original: Personal Info → Profession Grid → Address
- [ ] All 3 steps render correctly with fade transitions
- [ ] Back/Continue pill buttons styled per tokens (`#f6c2ec` back, `#aac1f0` continue)
- [ ] Step indicator dots animate correctly (expand/collapse on current step)
- [ ] Form inputs are pill-shaped (`border-radius: 23px`), `#f7f7f7` background
- [ ] Avatar section with camera icon and file upload trigger
- [ ] Profession grid: 2×3 layout, card images via `picsum.photos`, hover shadow
- [ ] Address fields: 2-column grid layout
- [ ] Responsive: mobile breakpoints match original (768px)
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] App runs with `npm run dev` from `apps/stepglow`

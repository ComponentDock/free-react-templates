# Template: DatePix (Calendar / Date Picker)

## Purpose

Recreation of ColorLib **Calendar 09** — a minimal, single-purpose date/time
picker page built on Bootstrap 4. The template showcases a calendar datetime
picker with a pill-shaped input field, centered on a light background.

- **Source slug:** `calendar-09`
- **Preview URL:** `https://preview.colorlib.com/theme/bootstrap/calendar-09/`
- **Source page:** `https://colorlib.com/wp/template/calendar-09/`
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **New app name:** `datepix` (`apps/datepix`, `@free-react-templates/datepix`)

## Design tokens (extracted from preview CSS)

| Token               | Value                               | Notes                                        |
| ------------------- | ----------------------------------- | -------------------------------------------- |
| Font family         | `"Lato", Arial, sans-serif`         | Loaded via Google Fonts link                 |
| Body background     | `#f8f9fd`                           | Very light blue-gray                         |
| Body text color     | `gray`                              | Paragraph / secondary text                   |
| Heading color       | `#000`                              | All h1–h5                                    |
| Heading weight      | `400` (normal)                      | Not bold                                     |
| Link / accent       | `#fc7fb2`                           | Soft pink — used for links and `.bg-primary` |
| Section padding     | `7em 0`                             | `.ftco-section`                              |
| Heading font-size   | `28px`                              | `.heading-section`                           |
| Input height        | `50px`                              | `.datepickers .form-control`                 |
| Input padding       | `0 20px`                            | Horizontal only                              |
| Input border-radius | `40px`                              | Pill / capsule shape                         |
| Input border        | `none`                              | No visible border                            |
| Input shadow        | `0px 5px 13px 0px rgba(0,0,0,0.09)` | Subtle card shadow                           |
| Focus shadow        | `0px 5px 13px 0px rgba(0,0,0,0.14)` | Slightly stronger on focus                   |
| Bootstrap version   | 4.3.1                               | (replaced by Tailwind in React ver)          |

## Section structure (from live DOM)

The original template is a **single page** with two visible elements:

1. **Heading section** — centered `<h2 class="heading-section">Calendar #09</h2>`
   inside a Bootstrap row/col layout (`col-md-6`, centered).
2. **Date picker form** — centered below the heading (`col-md-4`, centered).
   Contains a single text input with placeholder `MM/DD/YYYY hh:mm:ss`,
   styled as a pill-shaped field with soft shadow.

There is NO navbar, hero, features, gallery, newsletter, or footer in the
original — it is a standalone date-picker demo page.

## Gherkin requirements

### Scenario: Page loads with heading

- **Given** the user navigates to the DatePix page
- **Then** a heading "Calendar Date Picker" (or similar) is visible
- **And** the heading is centered on the page

### Scenario: Date picker input renders

- **Given** the page has loaded
- **Then** a date/time input field is visible below the heading
- **And** the input has a pill shape (large border-radius)
- **And** the input has a soft drop shadow
- **And** the input placeholder reads "MM/DD/YYYY hh:mm:ss" (or similar)

### Scenario: Input accepts date/time text

- **Given** the date picker input is visible
- **When** the user types a date string into the input
- **Then** the input value updates to reflect the typed text

### Scenario: Input focus styling

- **Given** the date picker input is visible
- **When** the user focuses the input
- **Then** the shadow deepens slightly (focus state)

### Scenario: Responsive layout

- **Given** the user is on a mobile viewport (≤ 576px)
- **Then** the heading and input remain centered
- **And** the input scales to fit its container width

### Scenario: Page background and typography

- **Given** the page has loaded
- **Then** the background color is #f8f9fd (light blue-gray)
- **And** the font family is Lato (or system fallback)
- **And** the body text color is gray
- **And** the heading text is black and not bold

## Verification checklist

- [ ] Heading is centered with correct typography (Lato, 28px, normal weight, black)
- [ ] Date picker input has pill shape (border-radius: 40px)
- [ ] Input has soft shadow on default and focus states
- [ ] Input placeholder is visible
- [ ] Background color matches #f8f9fd
- [ ] Footer links to https://www.componentdock.com/ ("Component Dock")
- [ ] No references to ColorLib in app code
- [ ] Responsive on mobile (input stays centered, full-width on small screens)
- [ ] 100% test coverage (Vitest + Testing Library)
- [ ] Spec in `openspec/specs/template-datepix/spec.md`
- [ ] Docs in `docs/templates/datepix/`

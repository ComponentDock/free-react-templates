# Template: CalGrid (Calendar & Date Picker)

## Purpose

- **Recreation of:** ColorLib Calendar 12 (`https://colorlib.com/wp/template/calendar-12/`)
- **Preview URL:** `https://preview.colorlib.com/theme/bootstrap/calendar-12/`
- **Stack:** Vite, React 19, Tailwind CSS 4, TypeScript, Lucide Icons

## Design tokens

- **Colors:**
  - Background: `#ffffff` (White)
  - Text / Paragraphs: `#b3b3b3` (Muted gray)
  - Headings / UI text: `#000000` / `#212529`
  - Input border / focus: standard clean borders with subtle shadow / focus ring
- **Typography:**
  - Font family: `"Roboto", sans-serif`
  - Heading size: `20px` (`text-xl font-medium`)
- **Spacing / Layout:**
  - Centered vertical layout (`content`: `7rem` padding top/bottom)
  - Single column card / form container (`col-lg-3` centered via flex/grid)

## Gherkin Requirements & Scenarios

### Feature: CalGrid Date Picker Interface

As a user visiting the CalGrid date picker template, I want to see a clean, centered date picker input and calendar interface so that I can easily select dates.

#### Scenario: Page load displays title and date input

- **Given** I am on the CalGrid homepage
- **Then** I should see the heading "Calendar Grid" or similar clean title
- **And** I should see an interactive date picker input field with placeholder "Pick A Date"

#### Scenario: Selecting a date opens calendar popup or updates input

- **Given** I click on the date picker input field
- **Then** a calendar popup/dropdown should appear allowing date selection
- **And** selecting a date should populate the input field with the formatted date

#### Scenario: Footer includes Component Dock attribution

- **Given** I scroll to the bottom of the page
- **Then** I should see a footer linking to `https://www.componentdock.com/`

## Verification Checklist

- [ ] TypeScript strict check passes
- [ ] Linter (oxlint / eslint) passes
- [ ] 100% test coverage on all components/hooks
- [ ] Build succeeds with Vite
- [ ] Footer links to Component Dock
- [ ] CNAME points to `calgrid.free.componentdock.com`

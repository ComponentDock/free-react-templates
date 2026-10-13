# Template: MapLetter (Contact Form)

## Purpose

Recreation of the ColorLib "Contact Form V20" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page contact form.

- **Source:** [ColorLib Contact Form V20](https://colorlib.com/wp/template/contact-form-v20/)
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-v20/ (unreachable at prep time — 404; spec based on screenshot)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v20.jpg
- **New name:** `mapletter` (apps/mapletter, `@free-react-templates/mapletter`)
- **Deploy target:** https://mapletter.free.componentdock.com

## Design tokens (from screenshot analysis)

> Note: Preview page returned 404 at prep time. Tokens inferred from the
> official ColorLib screenshot.

| Token             | Value / description                                                       |
| ----------------- | ------------------------------------------------------------------------- |
| Page background   | Full-bleed greyscale/desaturated Google Maps embed (interactive map)      |
| Card background   | White (#ffffff)                                                           |
| Card shape        | Rounded corners (~10–12 px), subtle box-shadow                            |
| Card layout       | Centered, max-width ~520 px, generous vertical padding                    |
| Icon              | Outline envelope/mail icon, dark gray (#333 or similar), ~40 px           |
| Heading font      | Sans-serif (likely Poppins or similar), dark (#222), centered, ~28 px     |
| Heading text      | "Drop Us A Message"                                                       |
| Input fields      | Side-by-side row: Name + Email Address; light gray border (#ddd), white bg |
| Textarea          | Full-width below inputs, "Write Us A Message" placeholder, same border    |
| Button            | Red/coral background (#ff4b4b or #e74c3c), white text, small/compact     |
| Button position   | Bottom-right of the form card                                             |
| Overall aesthetic | Minimal, clean, centered card floating over a map background              |
| Font family       | Sans-serif; fallback to system fonts (Poppins from Google Fonts)          |

## Requirements

### Background

#### Scenario: Background

- **GIVEN** the page loads
- **THEN** a full-viewport map background is visible
- **AND** a centered white contact form card is displayed over the map

### Card structure

#### Scenario: Card structure

- **GIVEN** the contact form card is visible
- **THEN** an envelope/mail icon is displayed at the top center of the card
- **AND** a heading "Drop Us A Message" appears below the icon
- **AND** the heading is centered and styled with a dark sans-serif font

### Name field

#### Scenario: Name field

- **GIVEN** the form card is visible
- **THEN** a text input labeled "Name" is displayed
- **AND** the input has a placeholder "Name"
- **AND** the input has a light border and white background

### Email field

#### Scenario: Email field

- **GIVEN** the form card is visible
- **THEN** a text input labeled "Email Address" is displayed
- **AND** the input has a placeholder "Email Address"
- **AND** the Name and Email fields are displayed side by side in a row

### Message textarea

#### Scenario: Message textarea

- **GIVEN** the form card is visible
- **THEN** a textarea labeled "Write Us A Message" is displayed
- **AND** the textarea spans the full width of the form
- **AND** the textarea has a placeholder "Write Us A Message"

### Send button

#### Scenario: Send button

- **GIVEN** the form card is visible
- **THEN** a "Send" button is displayed at the bottom-right of the form
- **AND** the button has a red/coral background with white text
- **AND** the button is compact/small sized

### Layout and styling

#### Scenario: Layout and styling

- **GIVEN** the page is displayed at any viewport width
- **THEN** the map background fills the entire viewport
- **AND** the contact form card remains centered horizontally and vertically
- **AND** the card has rounded corners and a subtle shadow

### Footer

#### Scenario: Footer

- **GIVEN** the page is displayed
- **THEN** a footer links to https://www.componentdock.com/ (branded "Component Dock")

## Verification checklist

- [ ] Map background fills the full viewport
- [ ] White card is centered over the map
- [ ] Envelope icon renders at the top of the card
- [ ] Heading "Drop Us A Message" is centered and styled
- [ ] Name and Email inputs are side by side
- [ ] Textarea spans full width below the inputs
- [ ] Send button is red/coral, positioned bottom-right
- [ ] Card has rounded corners and box-shadow
- [ ] Responsive: card stays centered at all widths
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Typecheck passes
- [ ] Build succeeds

# Template: Classily (Classified Ads Platform)

## Purpose

Recreation of ColorLib's **Classy Ads** classified ads website template.

- Source slug: `classy-ads`
- Source URL: https://colorlib.com/wp/template/classy-ads/
- Preview URL: https://preview.colorlib.com/theme/classy-ads/ (404 — preview unreachable; screenshot used as sole reference)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/classyads-free-template.jpg
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript
- New name: **classily** (`apps/classily`, `@free-react-templates/classily`)
- Footer link: https://www.componentdock.com/ ("Component Dock")

## Design tokens (extracted from screenshot)

### Colors

| Token         | Value   | Usage                                           |
| ------------- | ------- | ----------------------------------------------- |
| brand-primary | #00C9B7 | Buttons, active nav links, icons, badge borders |
| brand-dark    | #00A896 | Hover state for brand-primary                   |
| text-dark     | #26282b | Body text, headings                             |
| text-medium   | #555555 | Category names, secondary text                  |
| text-light    | #999999 | Muted text, placeholder text                    |
| bg-white      | #ffffff | Header, category stats section                  |
| bg-page       | #f5f5f5 | Page background below hero, ad cards container  |
| border-gray   | #dddddd | Form input borders, card borders                |
| logo-black    | #000000 | "CLASSY" portion of logo                        |
| logo-accent   | #00C9B7 | "ADS" portion of logo                           |
| badge-bg      | #f5f5f5 | Category count badge background                 |
| hero-overlay  | none    | No dark overlay on hero — just background image |

### Fonts

| Role     | Family | Weight     |
| -------- | ------ | ---------- |
| Body     | Roboto | 400, 500   |
| Headings | Roboto | 700 (bold) |

### Button style

- Shape: rounded rectangle (border-radius: 8px)
- Padding: 12px 24px (Search button), 8px 16px (Post an Ad button)
- Primary: solid #00C9B7 background, white text
- Hover: darken to #00A896
- No border, no shadow, flat design

### Form elements

- Inputs: white background, #dddddd border, 8px radius
- Placeholder: light gray text
- Select dropdown: same style as inputs with gray arrow icon
- Search button: teal #00C9B7, white text, matches input height

### Section backgrounds

- Header: solid white (#ffffff)
- Hero: full-width photographic background (desaturated grayscale workspace), no overlay
- Category Stats: solid white (#ffffff), full-width
- Featured Ads: light off-white (#f5f5f5) page background, white cards

### Icon style

- Line/outline icons, thin consistent stroke
- Color: brand teal #00C9B7 for category icons, gray for arrows
- Geometric, flat design, no shadows
- Categories use: house, books, furniture, car, diamond shapes

## Requirements

### Requirement: Navbar renders with all navigation links

The navbar SHALL display the site logo, navigation links, login/register links, and a "Post an Ad" CTA button.

#### Scenario: Desktop navbar shows all elements

- **WHEN** the user loads the Classily page on a desktop viewport
- **THEN** the navbar displays links for Home, Ads, About, Blog, Contact
- **AND** a "Post an Ad" CTA button is visible in teal
- **AND** Log In and Register links are present
- **AND** the navbar is sticky at the top on scroll

#### Scenario: Mobile navbar has hamburger menu

- **WHEN** the user views the page on a mobile viewport
- **THEN** a hamburger menu button is visible
- **AND** clicking it opens a mobile navigation panel with all links
- **AND** clicking a link closes the mobile menu

### Requirement: Hero section shows search bar over background image

The hero SHALL display a full-width background image with centered text and a horizontal search bar.

#### Scenario: Hero renders headline and search form

- **WHEN** the user loads the Classily page
- **THEN** a full-width hero area displays with a background image
- **AND** a headline and subtext are centered over the image
- **AND** a horizontal search bar contains 3 input fields: search query, location, and category dropdown
- **AND** a teal "Search" button is aligned to the right of the inputs

#### Scenario: Search form accepts user input

- **WHEN** the user types in the search query field
- **THEN** the field updates with the typed text
- **AND** when the user selects a category from the dropdown
- **THEN** the dropdown shows the selected category

### Requirement: Category Stats section shows 6 category items

The category stats section SHALL display 6 category items in a row with icons, names, and count badges.

#### Scenario: Category items render with icons and counts

- **WHEN** the user scrolls to the Category Stats section
- **THEN** 6 category items are displayed in a row
- **AND** each item has a teal icon, category name, and count badge
- **AND** the section has a white background
- **AND** the count badges have a teal border with a light gray background

### Requirement: Featured Ads section shows ad cards in grid

The featured ads section SHALL display ad listing cards in a 4-column grid with images, titles, prices, and locations.

#### Scenario: Ad cards render with details

- **WHEN** the user scrolls to the Featured Ads section
- **THEN** ad cards are displayed in a 4-column grid
- **AND** each card shows an image, title, description, price, and location
- **AND** the cards sit on a light gray (#f5f5f5) page background
- **AND** the cards have a white background with no visible shadow

### Requirement: Footer contains Component Dock link

The footer SHALL display the brand name, quick links, contact info, and a link to Component Dock.

#### Scenario: Footer renders all elements

- **WHEN** the user scrolls to the footer
- **THEN** the brand name "Classily" is displayed
- **AND** quick links are present (Home, Ads, About, Blog, Contact)
- **AND** contact information is shown
- **AND** a link to https://www.componentdock.com/ is present with text "Made with Component Dock"

### Requirement: Design tokens match the original design

The template SHALL use the design tokens extracted from the original ColorLib template.

#### Scenario: Visual design matches tokens

- **WHEN** the template renders
- **THEN** the brand color is #00C9B7 (teal)
- **AND** the page background is #f5f5f5 (light gray)
- **AND** the font family is Roboto
- **AND** buttons use 8px border-radius, teal background, white text

### Requirement: No ColorLib references in app code

The app source files SHALL NOT contain any references to ColorLib.

#### Scenario: Provenance is absent from code

- **WHEN** searching all files in apps/classily/
- **THEN** no file contains "colorlib" or "preview.colorlib.com" strings
- **AND** provenance exists only in the spec and TEMPLATES.md

### Requirement: 100% test coverage

All components in the template SHALL have 100% test coverage.

#### Scenario: Coverage meets threshold

- **WHEN** running tests with coverage
- **THEN** statements, branches, functions, and lines are all at 100%

## Verification checklist

- [ ] Navbar: sticky, logo with branding, 5 nav links, Log In/Register, "Post an Ad" CTA
- [ ] Hero: full-width background image, centered headline + subtext, search bar with 3 fields + button
- [ ] Category Stats: 6 items in a row, teal icons, names, count badges with teal border
- [ ] Featured Ads: 4-column card grid with images, white cards on gray background
- [ ] Footer: copyright, links, Component Dock attribution
- [ ] Design tokens: Roboto font, #00C9B7 teal brand, #f5f5f5 page background
- [ ] Buttons: 8px radius, teal bg, white text
- [ ] Form inputs: white bg, #ddd border, 8px radius
- [ ] Icons: line/outline style from lucide-react
- [ ] No ColorLib references in app code — provenance only in spec + TEMPLATES.md
- [ ] 100% test coverage on all new components

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

| Token           | Value   | Usage                                              |
| --------------- | ------- | -------------------------------------------------- |
| brand-primary   | #00C9B7 | Buttons, active nav links, icons, badge borders     |
| brand-dark      | #00A896 | Hover state for brand-primary                      |
| text-dark       | #26282b | Body text, headings                                |
| text-medium     | #555555 | Category names, secondary text                     |
| text-light      | #999999 | Muted text, placeholder text                       |
| bg-white        | #ffffff | Header, category stats section                     |
| bg-page         | #f5f5f5 | Page background below hero, ad cards container     |
| border-gray     | #dddddd | Form input borders, card borders                   |
| logo-black      | #000000 | "CLASSY" portion of logo                           |
| logo-accent     | #00C9B7 | "ADS" portion of logo                              |
| badge-bg        | #f5f5f5 | Category count badge background                    |
| hero-overlay    | none    | No dark overlay on hero — just background image    |

### Fonts

| Role   | Family                          | Weight     |
| ------ | ------------------------------- | ---------- |
| Body   | Roboto                          | 400, 500   |
| Headings | Roboto                        | 700 (bold) |

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

- Top bar: blue #1a73e8 (omit — Colorlib WordPress chrome, not template)
- Header: solid white (#ffffff)
- Hero: full-width photographic background (desaturated grayscale workspace), no overlay
- Category Stats: solid white (#ffffff), full-width
- Featured Ads: light off-white (#f5f5f5) page background, white cards

### Icon style

- Line/outline icons, thin consistent stroke
- Color: brand teal #00C9B7 for category icons, gray for arrows
- Geometric, flat design, no shadows
- Categories use: house, books, furniture, car, diamond shapes

## Section structure (from screenshot)

1. **Navbar** — white header: logo left ("CLASSY" black + "ADS" teal), centered nav links (Home, Ads, About, Blog, Contact), right side: vertical separator, Log In / Register text links, teal "Post an Ad" CTA button
2. **Hero** — full-width background image (desaturated workspace photo), centered text: headline + subtext, horizontal search bar (3 input fields + search button)
3. **Category Stats** — 6-column grid of category items: each has an icon (teal), category name, and count badge (bordered pill with number). Categories: Real Estate, Jobs, Vehicles, Electronics, Furniture, Fashion (or similar)
4. **Featured Ads** — 4-column grid of ad listing cards: image at top, title/description below (cut off in screenshot — cards likely show title, price, location, and an image)
5. **Footer** — not visible in screenshot; standard classifieds footer with copyright, links, and Component Dock attribution

## Gherkin requirements

### Feature: Classily Template

#### Scenario: Navbar renders with all navigation links

Given the user loads the Classily page
Then the navbar displays links for Home, Ads, About, Blog, Contact
And a "Post an Ad" CTA button is visible in teal
And a Log In link and Register link are present
And the navbar is fixed/sticky at the top on scroll

#### Scenario: Logo shows split-color branding

Given the user views the navbar
Then the logo text reads "Classily" (or equivalent brand)
And the primary portion is black and the accent portion is teal (#00C9B7)

#### Scenario: Hero section shows search bar over background image

Given the user loads the Classily page
Then a full-width hero area displays with a background image
And a headline and subtext are centered over the image
And a horizontal search bar contains 3 input fields: "What are you looking for?", "Location", "All Categories" dropdown
And a teal "Search" button is aligned to the right of the inputs

#### Scenario: Category Stats section shows 6 category items

Given the user scrolls to the Category Stats section
Then 6 category items are displayed in a row
And each item has a teal icon, category name, and count badge
And the section has a white background
And the count badges have a teal border with a light gray background

#### Scenario: Featured Ads section shows ad cards in grid

Given the user scrolls to the Featured Ads section
Then ad cards are displayed in a 4-column grid
And each card shows an image, title, and description/price
And the cards sit on a light gray (#f5f5f5) page background
And the cards have a white background with no visible shadow

#### Scenario: Footer contains Component Dock link

Given the user scrolls to the footer
Then a link to https://www.componentdock.com/ is present
And the link text reads "Component Dock"

#### Scenario: Buttons use rounded rectangle shape with teal color

Given the user views any CTA button
Then the button has border-radius: 8px
And the primary button has a solid #00C9B7 background
And the button text is white

#### Scenario: Category icons use line/outline style

Given the user views the category items
Then icons use line/outline style (no filled shapes)
And icons are colored in brand teal (#00C9B7)

## Verification checklist

- [ ] Navbar: sticky, logo with split-color branding, 5 nav links, Log In/Register, "Post an Ad" CTA
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

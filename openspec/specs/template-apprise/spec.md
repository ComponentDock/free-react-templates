# Template: Apprise (App Landing Page)

## Purpose

Apprise is a single-page mobile app landing page in the App Landing / SaaS category.
It is a recreation of ColorLib's **CA App Landing** template.

- **Source**: ColorLib "CA App Landing" — https://colorlib.com/wp/template/ca-app/
- **Preview URL**: https://preview.colorlib.com/#ca-app (preview unavailable at prep time; design tokens and structure derived from the template screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/ca-app-showcase-website-template.jpg and the ColorLib template page description)
- **Stack**: Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from the template screenshot and ColorLib page metadata:

| Token              | Value                          | Notes                                                  |
| ------------------ | ------------------------------ | ------------------------------------------------------ |
| Primary gradient   | `#6C3CE1` → `#D946EF`        | Purple-to-magenta gradient on hero (135deg diagonal)   |
| Accent / CTA       | `#FF4466`                      | Coral-red "Get Started" button                         |
| Heading text        | `#1A1A2E`                     | Near-black for section headings                        |
| Body text           | `#666666`                     | Medium gray for paragraphs                             |
| Light text on hero  | `#FFFFFF`                     | White for hero headline + subtitle                     |
| Card background     | `#FFFFFF`                     | White cards with subtle shadow                         |
| Card shadow         | `0 4px 20px rgba(0,0,0,0.08)` | Light shadow on feature cards                          |
| Section background  | `#FFFFFF`                     | Clean white body background                            |
| Feature icon color  | `#D946EF`                     | Magenta for feature card icons                         |
| Heading underline   | `#FF4466`                     | Short pink/red underline below section titles          |
| Font family         | Poppins (Google Fonts)         | Bold headings, regular body                            |
| Button radius       | `4px`                         | Slightly rounded corners on CTA buttons                |
| Card radius         | `8px`                         | Rounded corners on feature cards                       |
| Navbar              | Transparent over hero gradient | Logo left, nav links center, CTA button right         |

## Requirements

### Hero Section

#### Scenario: Hero section displays gradient background

- **GIVEN** the visitor is on the landing page
- **WHEN** the hero section is visible
- **THEN** it shows a purple-to-magenta diagonal gradient background

#### Scenario: Hero section displays headline and subtitle

- **GIVEN** the hero section is visible
- **THEN** it shows the headline "Apprise" (or equivalent app name)
- **AND** it shows a subtitle describing app value proposition
- **AND** both use white text

#### Scenario: Hero section displays email input and CTA button

- **GIVEN** the hero section is visible
- **WHEN** the visitor looks at the CTA area
- **THEN** there is an email input field with placeholder "name@company.com"
- **AND** there is a coral-red "Get Started" button
- **AND** the button has rounded corners

#### Scenario: Hero section displays phone mockup

- **GIVEN** the hero section is visible
- **THEN** there is a phone/device mockup image on the right side
- **AND** the mockup shows a sample app screen

### Navigation Bar

#### Scenario: Navbar displays with transparent background over hero

- **GIVEN** the visitor is on the landing page
- **WHEN** the hero section is in view
- **THEN** the navbar is transparent with white text links
- **AND** the logo is on the left
- **AND** navigation links are centered
- **AND** a "Sign Up Free" outlined button is on the right

#### Scenario: Navbar has correct navigation links

- **GIVEN** the navbar is visible
- **THEN** it contains links to: Home, About, Features, Screenshot, Pricing, Testimonials, Team, Contact
- **AND** each link scrolls to the corresponding section

### Features Section ("Why Is It Special")

#### Scenario: Features section displays heading with underline

- **GIVEN** the visitor scrolls to the features section
- **THEN** it shows the heading "Why Is It Special"
- **AND** the heading has a short pink/red underline

#### Scenario: Features section displays three feature cards

- **GIVEN** the features section is visible
- **THEN** there are exactly 3 feature cards in a row
- **AND** each card has a colored icon at the top
- **AND** each card has a title (e.g. "Easy to use", "Powerful Design", "Customizability")
- **AND** each card has a descriptive paragraph
- **AND** cards have white backgrounds with subtle shadows
- **AND** cards have rounded corners

### Screenshots Section

#### Scenario: Screenshots section displays app screenshots carousel

- **GIVEN** the visitor scrolls to the screenshots section
- **THEN** it shows multiple app screenshots
- **AND** screenshots are displayed in a horizontal carousel or grid
- **AND** each screenshot shows a different app screen

### Pricing Section

#### Scenario: Pricing section displays pricing plans

- **GIVEN** the visitor scrolls to the pricing section
- **THEN** it shows 3 pricing plan cards (e.g. Basic, Standard, Premium)
- **AND** each plan shows a price, feature list, and CTA button
- **AND** one plan is highlighted as recommended

### Testimonials Section

#### Scenario: Testimonials section displays user testimonials

- **GIVEN** the visitor scrolls to the testimonials section
- **THEN** it shows testimonial cards with user avatar, name, and quote
- **AND** testimonials are presented in a slider or grid

### Download / CTA Section

#### Scenario: Download section encourages app download

- **GIVEN** the visitor scrolls to the download section
- **THEN** it shows app store download badges (Google Play, App Store)
- **AND** it has a gradient or colored background matching the hero

### Footer

#### Scenario: Footer displays basic information

- **GIVEN** the visitor scrolls to the footer
- **THEN** it shows copyright information
- **AND** it links to https://www.componentdock.com/ branded as "Component Dock"
- **AND** it has social media icon links

## Verification Checklist

- [ ] Hero gradient matches purple-to-magenta (135deg, #6C3CE1 → #D946EF)
- [ ] "Get Started" CTA button is coral-red (#FF4466)
- [ ] Font family is Poppins (loaded via Google Fonts)
- [ ] Phone mockup image on the right side of hero
- [ ] Email input + CTA button in hero
- [ ] Navbar is transparent over hero, becomes solid on scroll
- [ ] Features section shows 3 cards in a row with icons, titles, descriptions
- [ ] Section headings have short pink/red underline
- [ ] Screenshots section with app screenshots
- [ ] Pricing section with 3 plan cards
- [ ] Testimonials section with user quotes
- [ ] Download section with app store badges
- [ ] Footer links to Component Dock
- [ ] All placeholder images use `https://picsum.photos/seed/<template>-<n>/<w>/<h>`
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] `public/CNAME` contains `apprise.free.componentdock.com`
- [ ] `package.json` has `"homepage": "https://apprise.free.componentdock.com"`
- [ ] Tests pass with 100% coverage

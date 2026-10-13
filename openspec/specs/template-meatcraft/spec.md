# Template: Meatcraft (Restaurant / Steakhouse)

## Purpose

Recreation of the ColorLib **SteakShop** template.

- **Source:** <https://colorlib.com/wp/template/steakshop/>
- **Preview:** <https://preview.colorlib.com/theme/steakshop/>
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)
- **New name:** `meatcraft` (package: `@free-react-templates/meatcraft`)

## Design tokens (extracted from preview CSS)

| Token              | Value                                      | Usage                                    |
| ------------------ | ------------------------------------------ | ---------------------------------------- |
| Brand red          | `#f42f2c`                                  | Primary CTA, borders, accents            |
| Brand salmon       | `#f48464`                                  | Gradient endpoint (red → salmon)         |
| Primary gradient   | `linear-gradient(90deg, #f42f2c 0%, #f48464 100%)` | Buttons, hover states            |
| Text dark          | `#222222`                                  | Headings, body text                      |
| Text muted         | `#777777`                                  | Secondary text                           |
| Body font          | `Roboto, sans-serif`                       | Body copy, navigation                    |
| Accent font        | `Pacifico, cursive`                        | Logo / decorative headings               |
| Button base        | white bg, `#f42f2c` border, dark text      | `.primary-btn` default state             |
| Button hover       | gradient bg, white text                    | `.primary-btn:hover`                     |
| Banner overlay     | `#000` at opacity `.2`                     | Hero image overlay                       |
| Footer overlay     | `#000` at opacity `.75`                    | Dark image-backed footer                 |
| Section background | `#fff`                                     | Content sections (breakfast, lunch, etc.)|
| Border light       | `#eeeeee`                                  | Divider lines                            |
| Input border       | `#f42f2c`                                  | Form field focus accent                  |

## Visual design (from screenshot)

The template is a dark, moody steakhouse site with a full-screen hero banner
(dark food photography with a thin black overlay). A "banner bottom" bar sits
overlapping the hero with a video play icon on the left and a headline +
"Explore Menu" CTA button on the right. Below the hero are alternating
left/right two-column food course sections (images on one side, text on the
other). A reservation form section follows (full-width dark background, red
accents). A chef profile section features a large chef image with signature
image and a row of 4 food item thumbnails. A full-width food gallery carousel
follows. A brand partner carousel ("In association with") with grayscale logos.
A dark image-backed footer with 4 link columns, a newsletter signup, and social
icons.

## Requirements

### Feature: Meatcraft template behaviour

Feature: Meatcraft — Steakhouse Restaurant Template

Background:
- **GIVEN** the user visits the Meatcraft homepage
- **THEN** all sections render without errors

**─── Hero / Banner ─────────────────────────────────────────────────**

#### Scenario: Full-screen hero banner

- **GIVEN** the hero banner is visible
- **THEN** it covers the full viewport width
- **AND** a dark overlay is applied over the background image
- **AND** the headline reads "Steak Shop offers best steak in town"
- **AND** a "Watch video" play icon is shown

#### Scenario: Banner bottom bar

- **GIVEN** the banner bottom bar is visible
- **THEN** it overlaps the hero by ~340px (negative margin)
- **AND** it contains the headline "Steak Shop offers best steak in town"
- **AND** a subtext paragraph is present
- **AND** an "Explore Menu" CTA button is visible

**─── Breakfast / Food Course Section (left) ─────────────────────────**

#### Scenario: Breakfast section layout

- **GIVEN** the "Daily Food Courses with Drinks" breakfast section is visible
- **THEN** it uses a two-column layout (text left, images right)
- **AND** a heading "Daily Food Courses with Drinks" is displayed
- **AND** two body paragraphs of lorem ipsum are shown
- **AND** a "See Full Menu" primary button is visible
- **AND** two overlapping food images are displayed on the right

**─── Lunch / Food Course Section (right) ───────────────────────────**

#### Scenario: Lunch section layout

- **GIVEN** the lunch section is visible
- **THEN** it uses a two-column layout (images left, text right)
- **AND** a heading "Daily Food Courses with Drinks" is displayed
- **AND** two body paragraphs of lorem ipsum are shown
- **AND** a chef attribution (name + role) is displayed
- **AND** two overlapping food images are displayed on the left

**─── Reservation Form ──────────────────────────────────────────────**

#### Scenario: Reservation form

- **GIVEN** the reservation form section is visible
- **THEN** a heading "Reservation Form" is displayed
- **AND** inputs are present for: Name, Email, Phone Number
- **AND** a "Number of people" select is present
- **AND** a "Select Date & Time" input is present
- **AND** a "Select event" (location) select is present
- **AND** a "Make Reservation" submit button is visible
- **AND** the form uses red accent borders

**─── Chef Section ──────────────────────────────────────────────────**

#### Scenario: Chef profile section

- **GIVEN** the chef section is visible
- **THEN** a large chef image is displayed
- **AND** a heading "Daily Food Courses with Drinks" is present
- **AND** body paragraphs are shown
- **AND** a signature image is displayed
- **AND** 4 food item thumbnails are shown in a row

**─── Food Gallery Carousel ─────────────────────────────────────────**

#### Scenario: Food gallery carousel

- **GIVEN** the food gallery section is visible
- **THEN** a carousel of food images is displayed
- **AND** at least 6 food images are in the carousel
- **AND** the carousel is horizontally scrollable

**─── Brand Partners ────────────────────────────────────────────────**

#### Scenario: Brand partner carousel

- **GIVEN** the brands section is visible
- **THEN** a heading "In associasion with" (sic) is displayed
- **AND** a subtitle paragraph is shown
- **AND** a carousel of 6 brand logos is present
- **AND** the logos are grayscale by default

**─── Footer ────────────────────────────────────────────────────────**

#### Scenario: Footer layout

- **GIVEN** the footer is visible
- **THEN** it has a dark image background with overlay
- **AND** 5 link columns are present: Top Products, Quick Links, Features, Resources, Newsletter
- **AND** a newsletter signup form with email input is present
- **AND** social icons (Facebook, Twitter, Dribbble, Behance) are shown
- **AND** a copyright line is displayed
- **AND** a "Component Dock" attribution link is present

**─── Responsive ────────────────────────────────────────────────────**

#### Scenario: Mobile responsiveness

- **GIVEN** the viewport is 375px wide
- **THEN** the hero banner hides its background image
- **AND** the banner bottom repositions above the fold
- **AND** all sections stack vertically
- **AND** the reservation form remains usable

## Verification checklist

- [ ] All sections match the original section order (hero → banner-bottom → breakfast → lunch → reservation → chef → gallery → brands → footer)
- [ ] Design tokens (brand red #f42f2c, gradient, Roboto font, Pacifico accent) applied
- [ ] Hero uses full-width background image with dark overlay
- [ ] Banner bottom overlaps hero (negative margin)
- [ ] Alternating food course sections (left text + right images / right text + left images)
- [ ] Reservation form with all 6 fields
- [ ] Chef section with large image + signature + 4 food thumbnails
- [ ] Food gallery carousel
- [ ] Brand partner carousel (grayscale logos)
- [ ] Footer with dark image overlay, 5 columns, newsletter, social icons
- [ ] "Component Dock" link in footer
- [ ] No ColorLib references in app code
- [ ] 100% test coverage

# Template: Washbay (Car Wash & Detailing)

## Purpose

Washbay is a single-page car wash & detailing business website in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Carwash" free template (source:
https://colorlib.com/wp/template/carwash/, preview:
https://preview.colorlib.com/theme/carwash/), built under a DIFFERENT
name (**Washbay**), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a Bootstrap 4 + jQuery + SlickNav + Owl Carousel site
for a car wash/detailing business. It features a white sticky header with
logo + navigation + phone CTA button, a full-width hero slider with
blue gradient overlay, an about/equipment section with overlapping white
card, pricing cards with 3 tiers, testimonials with blue gradient
background, a services categories grid, a video CTA section, a map area,
and a dark footer with contact info and navigation links.

**WHAT MAKES WASHBAY DISTINCT (signature behaviors):**

1. **White header with rounded blue phone CTA button.** The header has a
   white background with the logo on the left, uppercase nav links in
   dark navy (`#072366`), and a prominent rounded (`border-radius: 30px`)
   gradient-blue button (`linear-gradient(#0BC6FF, #0d80f3)`) on the right
   with a phone icon and number. The header becomes sticky on scroll with
   a subtle shadow.

2. **Hero slider with blue gradient overlay + animated headline.** Full-
   width slider (Slick) with background images of car washing. The overlay
   is a left-to-right gradient: `rgba(1,10,68,0.8)` to `rgba(0,42,255,0.5)`.
   Large Poppins 124px white heading "Car Wash" + absolutely-positioned
   "& Detailing" with a clip-path animation (reveals with a wave effect).
   Subtitle text + rounded blue gradient CTA button ("OUR SERVICES").
   Slick dot-style navigation on the right side.

3. **Overlapping equipment card on light blue background.** The about/
   equipment section uses a `#EEF6FF` light blue background. A photo of
   a detailer at work overlaps a white card (`office-pera`) with padding
   `85px 81px 68px 72px`, containing a "We have the latest equipment"
   heading and "ABOUT US" outlined button. The card overlaps the photo
   via negative top margin (`margin-top: -100px`).

4. **Three pricing cards with outlined CTA buttons.** Three white cards
   with border `1px solid #E7E6EB` showing Car Wash ($50), Detailing
   ($100), Full Wash ($200). Each has: icon image, service name, price,
   feature list, and a "borders-btn" (outlined, blue `#007AFF` border).
   Cards have `70px` vertical padding. On hover, the button gets a blue
   gradient fill.

5. **Testimonials on blue gradient background.** The testimonial section
   has a full blue gradient background (`linear-gradient(#1592e6, #007aff,
   #10cafc)`). Client photos in a slider (Owl Carousel) with quote marks
   and testimonial text + author name/role on a white card overlay.

6. **4-column service categories with icons.** "Why take our services?"
   section with 4 items: Car Wash 100% Without Detergents, Efficient
   Surface Drying Machines, We Have an Application, Safe Lacquer
   Protection. Each has an icon and description text.

7. **Video CTA with play button.** Full-width section with a background
   image (`video-bg.png`), centered white heading "Your Car Will Look As
   Your New One", and a circular green play button (`#6fd66c` gradient)
   with a pulsing border animation.

8. **Dark footer (`#2a2a40` style via `section-bg2`) with contact info.**
   Footer has logo, description, phone + email links in blue `#007AFF`,
   opening hours, navigation links, and social media icons.

## Design Tokens

| Token            | Value                                          | Source/Notes                                |
| ---------------- | ---------------------------------------------- | ------------------------------------------- |
| Brand Blue       | `#007AFF`                                      | Primary accent — buttons, links, phone CTA  |
| Gradient Blue    | `linear-gradient(#0BC6FF, #0d80f3)`            | Buttons, submenu                            |
| Heading Color    | `#010A44`                                      | h1–h6 headings                             |
| Body Text        | `#10285d`                                      | Paragraphs                                  |
| Nav Text         | `#072366`                                      | Navigation links, dark navy                 |
| Hero Overlay     | `rgba(1,10,68,0.8)` → `rgba(0,42,255,0.5)`   | Left-to-right gradient on hero              |
| Light Blue BG    | `#EEF6FF`                                      | About/equipment section                     |
| Card Border      | `#E7E6EB`                                      | Pricing card borders                        |
| Card Price Color | `#4C1E51`                                      | Purple tint on price display                |
| Green Accent     | `#6fd66c`                                      | Video play button                           |
| Section Title    | `#70D76A`                                      | Uppercase subtitle in section titles        |
| Font (Body)      | Poppins, sans-serif                            | Google Fonts, 16px base                     |
| Font (Headings)  | Work Sans, sans-serif                          | Google Fonts, 500 weight                    |
| Button Radius    | `30px`                                         | Pill-shaped buttons                         |
| Card Radius      | `0` (sharp corners)                            | Pricing cards have no border-radius         |
| Shadow           | `0px 7px 21px 0px rgba(0,0,0,0.12)`           | Button shadow                               |

### Color palette from CSS

- `#007AFF` — brand blue (primary accent, buttons, links, phone CTA)
- `#0BC6FF` → `#0d80f3` — gradient blue (buttons, submenu bg)
- `#010A44` — heading text (deep navy)
- `#10285d` — body paragraph text
- `#072366` — navigation link text
- `#EEF6FF` — light blue section background
- `#E7E6EB` — card borders
- `#4C1E51` — price text (purple tint)
- `#6fd66c` → `#48c1b9` — green gradient (video play button)
- `#70D76A` — section title subtitle text
- `#1592e6` / `#10cafc` — testimonial area gradient
- `#f7f7f7` — preloader background
- `#fff` — white (header, cards, text on dark)

## Requirements

### Requirement: Header / Navbar

The system SHALL render a white sticky header with logo, navigation
links, and a phone CTA button.

#### Scenario: Header on desktop

- **GIVEN** the Washbay app is rendered on a desktop viewport (>992px)
- **THEN** the header SHALL display with a white background
- **AND** a car icon + "Car Wash" logo SHALL appear on the left
- **AND** navigation links (Home, About, Services, Blog, Contact) SHALL
  be uppercase, Work Sans font, dark navy `#072366`
- **AND** a rounded blue gradient button with phone icon + number SHALL
  appear on the right
- **AND** the header SHALL become sticky on scroll with a subtle shadow

#### Scenario: Header on mobile

- **GIVEN** the viewport is at or below 768px
- **THEN** the navigation SHALL collapse into a hamburger menu
- **AND** the logo and hamburger icon SHALL remain visible

### Requirement: Hero Slider

The system SHALL render a full-width hero slider with background images,
a blue gradient overlay, and animated headline text.

#### Scenario: Hero content on desktop

- **GIVEN** the hero section is rendered
- **THEN** a background image SHALL cover the full hero area (min-height 850px)
- **AND** a left-to-right blue gradient overlay SHALL sit over the image
- **AND** "Car Wash" SHALL display in Poppins 124px bold white
- **AND** "& Detailing" SHALL display as an absolutely positioned
  uppercase text with a clip-path wave animation
- **AND** a subtitle paragraph SHALL appear below the heading
- **AND** a rounded blue gradient CTA button ("OUR SERVICES") SHALL be present

#### Scenario: Hero is responsive

- **GIVEN** the viewport is at or below 768px
- **THEN** the hero heading SHALL reduce in font size (50–60px)
- **AND** the minimum height SHALL reduce to 500–600px

### Requirement: About / Equipment Section

The system SHALL render a section with a light blue background containing
a detailer photo and an overlapping white content card.

#### Scenario: Equipment section on desktop

- **GIVEN** the equipment section is rendered on desktop
- **THEN** the section background SHALL be `#EEF6FF`
- **AND** a photo of a car detailer SHALL be positioned on the left
- **AND** a white card SHALL overlap the photo with `margin-top: -100px`
- **AND** the card SHALL contain "We have the latest equipment" heading
- **AND** body text and an "ABOUT US" outlined button SHALL follow

#### Scenario: Equipment section responsive

- **GIVEN** the viewport is at or below 768px
- **THEN** the card SHALL stack below the photo without negative margin

### Requirement: Pricing Cards

The system SHALL render 3 pricing cards showing service tiers.

#### Scenario: Three pricing cards

- **GIVEN** the pricing section is rendered
- **THEN** 3 white cards SHALL display in a row on desktop
- **AND** each card SHALL have an icon, service name, price, feature
  list, and an outlined "GET STARTED" button
- **AND** the prices SHALL be: Car Wash $50, Detailing $100, Full Wash $200
- **AND** cards SHALL have `1px solid #E7E6EB` border and `70px` padding
- **AND** on hover, the button SHALL fill with blue gradient

#### Scenario: Pricing cards responsive

- **GIVEN** the viewport is at or below 768px
- **THEN** the cards SHALL stack vertically

### Requirement: Testimonials

The system SHALL render a testimonials section with a blue gradient
background and client photos.

#### Scenario: Testimonial content

- **GIVEN** the testimonials section is rendered
- **THEN** the background SHALL have a blue gradient (`#1592e6` to `#007AFF`)
- **AND** circular client photos SHALL carousel (auto-advancing)
- **AND** a quote icon + testimonial text SHALL display
- **AND** the author name + role SHALL appear below

### Requirement: Service Categories

The system SHALL render 4 service category items with icons.

#### Scenario: Four service items

- **GIVEN** the categories section is rendered
- **THEN** 4 items SHALL display in a grid on desktop
- **AND** each SHALL have an icon, heading, and description
- **AND** the headings SHALL be: "Car Wash 100% Without Detergents",
  "Efficient Surface Drying Machines", "We Have an Application",
  "Safe Lacquer Protection"

### Requirement: Video CTA Section

The system SHALL render a full-width video CTA with a background image
and a green play button.

#### Scenario: Video section content

- **GIVEN** the video CTA section is rendered
- **THEN** a background image SHALL cover the section
- **AND** a white heading "Your Car Will Look As Your New One" SHALL display
- **AND** a circular green play button (`#6fd66c`) SHALL be centered
- **AND** the play button SHALL have a pulsing border animation

### Requirement: Footer

The system SHALL render a dark footer with contact info and navigation.

#### Scenario: Footer layout

- **GIVEN** the footer is rendered
- **THEN** the logo + description text SHALL appear on the left
- **AND** phone number + email SHALL display in blue `#007AFF`
- **AND** opening hours widget SHALL show Mon-Fri, Sat, Sun times
- **AND** navigation links SHALL list Home, About, Services, Blog, Contact
- **AND** social media icons SHALL appear
- **AND** the footer SHALL include a link to https://www.componentdock.com/

#### Scenario: Footer responsive

- **GIVEN** the viewport is at or below 768px
- **THEN** footer columns SHALL stack into a single column

## Verification checklist

- [ ] Header: white, sticky, logo, nav links, blue phone CTA button
- [ ] Hero: slider with blue gradient overlay, animated "Car Wash & Detailing"
- [ ] Equipment: light blue BG, overlapping detailer photo + white card
- [ ] Pricing: 3 cards ($50, $100, $200), icons, feature lists, outlined buttons
- [ ] Testimonials: blue gradient BG, client photos, quotes, author info
- [ ] Categories: 4 service items with icons and descriptions
- [ ] Video CTA: background image, white heading, green play button
- [ ] Footer: dark BG, logo, contact info, hours, navigation, social, ComponentDock link
- [ ] Responsive: all sections adapt correctly at 768px and 480px
- [ ] Design tokens: brand blue `#007AFF`, gradient `#0BC6FF→#0d80f3`, Poppins + Work Sans fonts
- [ ] No ColorLib references in app code
- [ ] Placeholder images via `https://picsum.photos/seed/washbay-<n>/<w>/<h>`
- [ ] Google Fonts (Poppins + Work Sans) loaded via `<link>` in index.html
- [ ] Icons from `lucide-react` (Car, Droplets, Sparkles, Shield, Phone, Clock, Play, etc.)

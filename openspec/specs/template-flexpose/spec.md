# Template: Flexpose (Health & Fitness / Yoga)

## Purpose

Recreation of ColorLib's **Yogabest** template.
- Source: https://colorlib.com/wp/template/yogabest/
- Live preview: https://preview.colorlib.com/theme/yogabest/
- Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from live preview HTML + `css/style.css`.

| Token | Value | Usage |
|---|---|---|
| Font family (body) | `"Poppins", Arial, sans-serif` | All body text, headings |
| Font family (script) | `"Reenie Beanie", cursive` | Hero subheading, decorative subheadings |
| Primary brand green | `#6cae22` | Video play button, blog icons, CTA accents |
| Secondary green | `#9acb56` | Hover states, lighter accents |
| Accent green | `#d5f1b6` | Pale highlights |
| Dark navy | `#141b25` | Footer background |
| Black | `#000000` | Navbar (scrolled state), overlays, copyright bar |
| Body text | `#999999` | Paragraphs, descriptions |
| Heading text | `#212529` | Headings, strong text |
| Light background | `#f7f7f7` | Alternating section backgrounds (`bg-light`) |
| Off-white | `#f3f2ee` | Warm off-white sections |
| Whitespace | `#fff` | Cards, schedule active cells |
| Button shape | Circular (70×70px), `border-radius: 50%` | Video play button, social media icons |
| Section padding | ~6em vertical | `ftco-section` default |

## Visual Design Notes

- **Hero**: Full-width background image with dark semi-transparent overlay, diagonal/angled bottom-right edge (`degree-right` class). White heading + Reenie Beanie subheading. Circular green play button on the right half.
- **Services row**: 3-column, light gray background, icon + heading + description.
- **About section**: Split layout — left half is a background image with a centered stat counter overlay (years of experience), right half has text with a decorative quote + inline video thumbnail.
- **Image services**: Full-width background image with dark overlay, yoga illustration on the left, 3 benefit items (icon + heading + text) on the right.
- **Counter bar**: Background image with overlay, 4 animated stat counters with icons.
- **Classes grid**: 6 cards in 3-col layout, each with background image, trainer name, schedule, and class title.
- **Testimonials**: Split — left side has heading + 2 feature callouts, right side has an Owl Carousel of testimonial cards (quote + avatar + name).
- **Schedule table**: 7-column weekly grid with circular thumbnails in active cells, gray in inactive.
- **Trainers**: 4-column cards — photo on top, white card body below with role, name, and social icons.
- **Blog**: 3-column cards with image, date meta, title, excerpt, and chevron-right link.
- **Footer**: Dark navy background (#141b25), 4 columns — logo+social, recent blog, explore links, contact info.
- **Copyright**: Full-width dark bar with semi-transparent white text.

## Section Order (1:1 fidelity)

1. Top bar (phone + email + social icons)
2. Navbar (transparent overlay → solid black on scroll, 7 links: Home, About, Trainer, Classes, Schedule, Blog, Contact)
3. Hero (full-height bg image, dark overlay, diagonal bottom, heading + subheading + video play button)
4. Services (3 cols: Outdoor Activities, Experienced Trainers, Happy Environment) — `bg-light`
5. About (split: left image with year counter, right text + quote + video link)
6. Image services (bg image overlay, 3 benefits: Body & Mind Balance, Healthy Daily Life, Improves Flexibility)
7. Counter section (bg image, 4 stats: 150 Yoga Classes, 1000 Yoga Conducted, 65 Years Experience, 71650 Happy Customers)
8. Classes (6 cards: Private & Group Lessons, Yoga for Pregnant, Yoga for Beginners, Yoga Barre, Yoga Core, Yoga Restore)
9. Testimonials (split: left heading + features, right carousel with 4 testimonial cards)
10. Schedule (7-day weekly table grid, 5 rows of alternating active/inactive)
11. Trainers (4 cards: Elizabeth Nelson, Scarlett Torres, Victoria Wright, Stella Perry)
12. Blog (3 cards)
13. Footer (logo + social, recent blog, explore links, contact info)
14. Copyright bar

## Requirements

### Feature: Flexpose template behaviour

Feature: Flexpose - Yoga & Fitness Template

Background:
- **GIVEN** the user opens the Flexpose template homepage

#### Scenario: Top bar displays contact info and social links

- **THEN** the top bar shows phone number and email
- **AND** 4 social media icon links are visible (Facebook, Twitter, Instagram, Dribbble)

#### Scenario: Navbar navigation

- **GIVEN** the page is scrolled to the top
- **THEN** the navbar is transparent over the hero
- **WHEN** the user scrolls down
- **THEN** the navbar becomes solid black with white text
- **AND** 7 navigation links are visible: Home, About, Trainer, Classes, Schedule, Blog, Contact

#### Scenario: Hero section

- **THEN** a full-width hero background image is displayed
- **AND** the heading reads "Yoga Enhances Your Life"
- **AND** the subheading reads "Welcome to Flexpose"
- **AND** a circular green video play button is visible

#### Scenario: Services section

- **THEN** 3 service cards are displayed in a row
- **AND** each card has an icon, heading, and description
- **AND** the section has a light gray background

#### Scenario: About section

- **THEN** a split layout is displayed
- **AND** the left side shows a background image with a stat counter
- **AND** the right side shows text content with a quote and video thumbnail

#### Scenario: Image services section

- **THEN** a full-width background image with dark overlay is displayed
- **AND** a yoga illustration is shown on the left
- **AND** 3 benefit items (Body & Mind Balance, Healthy Daily Life, Improves Flexibility) are listed on the right

#### Scenario: Counter section

- **THEN** 4 animated stat counters are displayed
- **AND** each counter shows an icon, number, and label
- **AND** the section has a background image with dark overlay

#### Scenario: Classes section

- **THEN** 6 class cards are displayed in a 3-column grid
- **AND** each card shows a background image, trainer name, schedule days, time, and class title

#### Scenario: Testimonials section

- **THEN** a split layout is displayed
- **AND** the left side has a heading, description, and 2 feature callouts
- **AND** the right side has a carousel of testimonial cards
- **AND** each card shows a quote, avatar, name, and position

#### Scenario: Schedule section

- **THEN** a 7-column weekly schedule table is displayed
- **AND** active cells show a circular thumbnail, class name, and time
- **AND** inactive cells show a close icon

#### Scenario: Trainers section

- **THEN** 4 trainer cards are displayed in a row
- **AND** each card has a photo, role title, name, and social icons

#### Scenario: Blog section

- **THEN** 3 blog post cards are displayed in a row
- **AND** each card shows an image, date, title, excerpt, and a read-more link

#### Scenario: Footer

- **THEN** the footer has a dark navy background
- **AND** 4 columns are visible: logo + social, recent blog, explore links, contact info

#### Scenario: Copyright bar

- **THEN** a full-width dark bar is displayed at the bottom
- **AND** copyright text is shown in semi-transparent white

## Verification Checklist

- [ ] All 14 sections present in correct order
- [ ] Poppins font used for body/headings, Reenie Beanie for script subheadings
- [ ] Brand green #6cae22 used for video play button and accent elements
- [ ] Hero has diagonal/angled bottom edge effect
- [ ] Navbar transitions from transparent to solid on scroll
- [ ] Counter numbers animate on scroll into view
- [ ] Testimonial carousel cycles through cards
- [ ] Schedule table displays weekly grid with active/inactive states
- [ ] Footer uses dark navy (#141b25) background
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] All images use placeholder URLs (picsum.photos)
- [ ] Responsive: stacks columns on mobile
- [ ] `public/CNAME` contains `flexpose.free.componentdock.com`
- [ ] `homepage` set to `https://flexpose.free.componentdock.com`

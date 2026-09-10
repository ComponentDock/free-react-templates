# Template: CleanSlate (Cleaning Company)

## Purpose

Recreation of ColorLib's **Cleaning Company** template — a professional cleaning
services website with a top contact bar, dark navbar with yellow accent, full-width
hero, appointment booking form, welcome/about section, animated stats counter,
service cards, team member grid, testimonials carousel, blog cards, parallax CTA,
pricing table, and a 4-column footer.

- **Source slug:** `cleaning-company`
- **ColorLib page:** https://colorlib.com/wp/template/cleaning-company/
- **Preview URL:** https://preview.colorlib.com/theme/cleaningcompany/ (note: slug on preview server is `cleaningcompany` without hyphen)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/cleaningcompany.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) and screenshot analysis:

### Colors

| Token              | Value     | Usage                                                                             |
| ------------------ | --------- | --------------------------------------------------------------------------------- |
| `--color-primary`  | `#2b98f0` | Primary blue — buttons, links, hover states                                       |
| `--color-accent`   | `#f3e53d` | Yellow — logo highlight, active nav underline, counter numbers, pricing highlight |
| `--color-top-bar`  | `#1a73e8` | Top contact bar background                                                        |
| `--color-dark`     | `#343a40` | Navbar background, testimonials section background                                |
| `--color-footer`   | `#1d2124` | Footer background                                                                 |
| `--color-heading`  | `#212529` | Headings, strong text                                                             |
| `--color-body`     | `#6c757d` | Body copy, muted text                                                             |
| `--color-white`    | `#ffffff` | Primary background, card backgrounds                                              |
| `--color-light-bg` | `#f8f9fa` | Alternate section backgrounds (pricing bg-light)                                  |
| `--color-border`   | `#dee2e6` | Light borders, dividers                                                           |

### Typography

- **Primary font:** `'Roboto', Arial, sans-serif` (Google Fonts)
- **Headings:** bold weight (700), uppercase for section subheadings
- **Body:** regular weight (400), line-height ~1.8
- **Top bar / nav:** white text on dark backgrounds

### Buttons / CTAs

- **Primary button:** solid blue (`#2b98f0`), white text, `border-radius: 0.25rem`, padding `py-2 px-4`
- **Hover:** darker blue, smooth transition
- **Secondary button:** solid yellow (`#f3e53d`), dark text
- **Custom link buttons:** text-based "Read more" with arrow

### Section Backgrounds

- Hero: full-width background image (cleaning scene)
- Appointment form: white overlay bar
- Stats/counter: white with no background
- Services: white
- Team: white
- Testimonials: dark (`#343a40` / `ftco-bg-dark`)
- Blog: white
- Parallax CTA: background image with dark overlay
- Pricing: light gray (`#f8f9fa`)
- Footer: dark (`#1d2124`)

## Section Order (from live preview DOM)

1. **Top Bar** — Blue (`#1a73e8`) bar with phone number, email address, and social media icons (Facebook, Twitter, Instagram, Dribbble).
2. **Navbar** — Dark (`#343a40`) sticky navbar with logo "CleaningCompany" (white + yellow accent), nav links (Home, About, Services, Portfolio, Pricing, Blog, Contact). Mobile hamburger collapse.
3. **Hero** — Full-width background image with overlay text: subheading "Leave the house cleaning chores to us", main headline "Let us do the dirty work, so you don't have to.", and blue "Learn more" CTA button.
4. **Appointment Form** — White bar overlapping hero bottom. Fields: Name, Phone, Select Services (dropdown), Select Cleaners (dropdown). Right-aligned blue "MAKE AN APPOINTMENT" button.
5. **Welcome / About** — Two-column layout. Left: Business Hours card (blue rounded card with hours info) + cleaner illustration. Right: subheading "WELCOME TO CLEANING COMPANY", headline "Let's make you fresher than ever", description paragraph.
6. **Stats Counter** — Three animated counters: 45 Years Experienced, 2342 Happy Customers, 30 Building Cleaned. Yellow numbers, white background.
7. **Services** — Heading "How We Works". Six service cards in 3-column grid: Office Cleaning, Pool Cleaning, Carpet Cleaning, Kitchen Cleaning, Garden Cleaning, Window Cleaning. Each with icon (flaticon), title, description, "Read more" link.
8. **Team** — Heading "Our Team". Description + "View All Staff" secondary button. Four team member cards in 3-column grid (last row 1): staff image, name, position, social icons (Twitter, Facebook, Google, Instagram).
9. **Testimonials** — Dark background (`ftco-bg-dark`). Subheading "Testimonies", heading "Happy Customer". Owl carousel with quote icon, avatar image, name, position, and testimonial text.
10. **Blog** — Three blog cards with background images, rounded corners. Each with title and metadata (date, author, comments).
11. **Parallax CTA** — Full-width background image with parallax effect, call-to-action text.
12. **Pricing** — Light gray background. Four pricing cards in a row: Starter ($49), Standard ($79, highlighted/active), Premium ($109), Platinum ($159). Each with icon, name, price, feature checklist, "Get Started" button.
13. **Footer** — Dark background. Four columns: Company info + social icons, Latest News (2 blog previews), Quick Links (Home, About, Services, Works, Blog, Contact), Have a Questions? (address, phone, email). Copyright bar at bottom.

## Requirements

### Requirement: Top Bar

The system SHALL render a top contact bar with a blue background containing a phone number, email address, and social media icon links (Facebook, Twitter, Instagram, Dribbble).

#### Scenario: Top bar content

- **GIVEN** the CleanSlate page is rendered
- **WHEN** the page loads
- **THEN** the top bar SHALL display a phone number and email address
- **AND** it SHALL show social media icon links

### Requirement: Navbar

The system SHALL render a dark sticky navigation bar with the site logo "CleanSlate" on the left, navigation links (Home, About, Services, Portfolio, Pricing, Blog, Contact) on the right, and a hamburger toggle on mobile.

#### Scenario: Navbar content

- **GIVEN** the CleanSlate page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL display the site name with yellow accent on "Slate"
- **AND** it SHALL show all navigation links
- **AND** it SHALL be sticky at the top of the viewport

#### Scenario: Mobile hamburger toggle

- **GIVEN** the CleanSlate page is rendered on a mobile viewport
- **WHEN** the user taps the hamburger toggle button
- **THEN** the mobile nav menu SHALL expand with all navigation links
- **AND** tapping a link SHALL collapse the menu

### Requirement: Hero Section

The system SHALL render a full-width hero section with a background image, a subheading, a main headline, and a CTA button.

#### Scenario: Hero content

- **GIVEN** the CleanSlate page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a subheading "Leave the house cleaning chores to us"
- **AND** it SHALL show a headline containing "dirty work"
- **AND** it SHALL show a "Learn more" button with blue styling

### Requirement: Appointment Form

The system SHALL render an appointment booking form overlapping the hero section bottom with input fields for name, phone, service selection, and cleaner selection, plus a submit button.

#### Scenario: Appointment form fields

- **GIVEN** the CleanSlate page is rendered
- **WHEN** the appointment form is displayed
- **THEN** it SHALL show a "Your Name" text input
- **AND** it SHALL show a "Phone number" text input
- **AND** it SHALL show a "Select Services" dropdown
- **AND** it SHALL show a "Select Cleaners" dropdown
- **AND** it SHALL show a "MAKE AN APPOINTMENT" button

### Requirement: Welcome / About Section

The system SHALL render a two-column welcome section with a business hours card and cleaner illustration on the left, and welcome text on the right.

#### Scenario: Welcome content

- **GIVEN** the CleanSlate page is rendered
- **WHEN** the welcome section is displayed
- **THEN** it SHALL show a "Business Hours" card with opening days and vacation info
- **AND** it SHALL show a headline "Let's make you fresher than ever"
- **AND** it SHALL show a description paragraph

### Requirement: Stats Counter

The system SHALL render an animated statistics counter section with three stats.

#### Scenario: Counter content

- **GIVEN** the CleanSlate page is rendered
- **WHEN** the stats section scrolls into view
- **THEN** it SHALL animate three counters: Years Experienced, Happy Customers, Buildings Cleaned
- **AND** the numbers SHALL count up from zero to their target values

### Requirement: Services Section

The system SHALL render a services section with a heading and six service cards in a grid.

#### Scenario: Services content

- **GIVEN** the CleanSlate page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show a heading "How We Works"
- **AND** it SHALL display six service cards: Office Cleaning, Pool Cleaning, Carpet Cleaning, Kitchen Cleaning, Garden Cleaning, Window Cleaning
- **AND** each card SHALL have an icon, title, description, and "Read more" link

### Requirement: Team Section

The system SHALL render a team section with member cards showing photos, names, positions, and social links.

#### Scenario: Team content

- **GIVEN** the CleanSlate page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show a heading "Our Team"
- **AND** it SHALL display team member cards with photos, names, and positions
- **AND** each card SHALL have social media icon links

### Requirement: Testimonials Section

The system SHALL render a dark-background testimonials section with a carousel of customer reviews.

#### Scenario: Testimonials content

- **GIVEN** the CleanSlate page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show a heading "Happy Customer"
- **AND** it SHALL display a carousel with quote icons, avatar images, reviewer names, positions, and testimonial text

### Requirement: Blog Section

The system SHALL render a blog section with three post cards.

#### Scenario: Blog content

- **GIVEN** the CleanSlate page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show three blog post cards with background images, titles, and metadata

### Requirement: Parallax CTA Section

The system SHALL render a parallax background image section with a call-to-action.

#### Scenario: Parallax CTA

- **GIVEN** the CleanSlate page is rendered
- **WHEN** the parallax section is displayed
- **THEN** it SHALL show a background image with parallax scrolling effect
- **AND** it SHALL contain call-to-action text

### Requirement: Pricing Section

The system SHALL render a pricing section with four plan cards on a light background.

#### Scenario: Pricing content

- **GIVEN** the CleanSlate page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show four pricing plans: Starter ($49), Standard ($79), Premium ($109), Platinum ($159)
- **AND** each plan SHALL have an icon, name, price, feature list, and "Get Started" button
- **AND** the Standard plan SHALL be highlighted as active/recommended

### Requirement: Footer

The system SHALL render a dark footer with four columns and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the CleanSlate page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show four columns: company info + social links, latest news, quick links, and contact info
- **AND** it SHALL show a copyright bar at the bottom
- **AND** the copyright SHALL link to Component Dock

## Verification Checklist

- [ ] Top bar: blue background, phone + email + social icons
- [ ] Navbar: dark background, "CleanSlate" logo with yellow accent, 7 nav links, sticky, mobile hamburger
- [ ] Hero: background image, subheading, headline, blue CTA
- [ ] Appointment form: 4 fields + submit button, overlapping hero
- [ ] Welcome/About: business hours card + cleaner image + welcome text
- [ ] Stats counter: 3 animated counters (45, 2342, 30)
- [ ] Services: heading + 6 service cards with icons
- [ ] Team: heading + member cards with photos + social links
- [ ] Testimonials: dark bg, carousel with quotes, avatars, names
- [ ] Blog: 3 post cards with background images
- [ ] Parallax CTA: background image with parallax effect
- [ ] Pricing: 4 plan cards, Standard highlighted
- [ ] Footer: 4 columns + copyright with Component Dock link
- [ ] Responsive: all sections adapt to mobile viewports
- [ ] Accessibility: semantic HTML, aria labels, keyboard navigation
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com

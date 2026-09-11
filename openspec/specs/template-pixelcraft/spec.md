# Template: PixelCraft (Digital Agency)

## Purpose

Recreation of ColorLib's **Datarc** digital agency website template.

- Source slug: `datarc`
- Source URL: https://colorlib.com/wp/template/datarc/
- Preview URL: https://preview.colorlib.com/theme/datarc/ (200 — live)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/datarc-digital-agency-free-website-template.jpg
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript
- New name: **pixelcraft** (`apps/pixelcraft`, `@free-react-templates/pixelcraft`)
- Footer link: https://www.componentdock.com/ ("Component Dock")

## Design tokens (extracted from live preview CSS)

### Colors

| Token             | Value   | Usage                                           |
| ----------------- | ------- | ----------------------------------------------- |
| brand-primary     | #4a4fad | Nav background, overlay gradient start, dark bg |
| brand-primary-end | #5b61cf | Overlay gradient end                            |
| accent-green      | #00ff8c | Buttons, highlights, active states, links       |
| text-dark         | #222222 | Headings, body text, dark section bg            |
| text-body         | #777777 | Body text, descriptions                         |
| text-white        | #ffffff | Text on dark/overlay backgrounds                |
| bg-light          | #f9f9ff | Gray-bg sections (about, contact)               |
| bg-dark           | #222222 | Title-bg sections, dark overlays                |

### Fonts

| Role     | Family              | Weight     |
| -------- | ------------------- | ---------- |
| Body     | Poppins, sans-serif | 400        |
| Headings | Poppins, sans-serif | 600 (semi) |

### Button style

- Shape: pill / rounded rectangle (border-radius: 20px)
- Padding: 0 40px, line-height 40px
- Default: transparent background, #222222 text, bordered
- Hover: solid #00ff8c background, white text, purple box-shadow (0 10px 20px rgba(60,64,143,0.2))
- Banner variant: white text, transparent bg, green hover

### Section backgrounds

- Header/Nav: sticky, white bg (scroll), logo + nav + search + social
- Banner/Hero: full-screen background image with dark overlay gradient (linear-gradient left: rgba(60,64,143,0.95) → rgba(91,97,207,0.95))
- About: light gray bg (#f9f9ff), 3 service image cards with text
- Services ("Why Choose Us"): dark bg (#222222), 4 feature cards with icons
- Portfolio: filterable gallery grid (All, Categories, Branding, etc.), 8 items with hover overlay
- Team: 4 team member cards with images, names, roles
- Studio/Stats: dark overlay section with counters
- Clients: logo carousel/grid
- Blog: 4 blog post cards with images
- Contact: light gray bg (#f9f9ff), form + address info
- CTA: gradient banner with CTA button
- Footer: dark bg, multi-column (about, navigation, newsletter, instafeed)

## Gherkin requirements

### Feature: PixelCraft — Digital Agency Website

#### Scenario: Navbar displays with logo and navigation links

Given the user is on the homepage
When they view the navbar
Then they see the "PixelCraft" logo
And navigation links: Home, Services, Portfolio, Team, Blog, Contact
And a search icon and social media icons (Facebook, Twitter, LinkedIn)

#### Scenario: Hero banner displays with CTA

Given the user is on the homepage
When they view the hero banner
Then they see a full-screen background image with gradient overlay
And heading "Crafting Digital Agency Experiences"
And subheading "We work hard, we result perfect"
And a "Explore Us" button

#### Scenario: About section shows service cards

Given the user is on the homepage
When they scroll to the About section
Then they see a section title "About Our Digital Agency"
And 3 service image cards with titles and descriptions
And each card has an "Explore" link

#### Scenario: Services section shows feature cards

Given the user is on the homepage
When they scroll to the Services section
Then they see a dark background section
And heading "We ensure perfect quality Digital products for you"
And 4 feature cards with icons: Unique Design, Appropriate UX, Perfect Visual, Different Layout

#### Scenario: Portfolio section displays filterable gallery

Given the user is on the homepage
When they scroll to the Portfolio section
Then they see filter tabs: All, Categories, Branding, Image Manipulation, Creative Work, Web Design, Print Material
And a grid of 8 portfolio items with hover overlay showing title and category

#### Scenario: Team section displays team members

Given the user is on the homepage
When they scroll to the Team section
Then they see heading "Creative People"
And 4 team member cards with images, names, and roles
And social media icons for each member

#### Scenario: Studio section shows stats counters

Given the user is on the homepage
When they scroll to the Studio section
Then they see a dark overlay background
And heading "A Digital Studio Crafting Tech Business"
And descriptive text
And a "Start Business" CTA button

#### Scenario: Blog section displays posts

Given the user is on the homepage
When they scroll to the Blog section
Then they see heading "Latest From Blog"
And 4 blog post cards with images, titles, dates, and excerpts

#### Scenario: Contact section has form and info

Given the user is on the homepage
When they scroll to the Contact section
Then they see a contact form with fields
And physical address and web contact information

#### Scenario: CTA banner encourages action

Given the user is on the homepage
When they scroll to the CTA section
Then they see heading "Not yet convinced with our quality?"
And a CTA button

#### Scenario: Footer displays multi-column layout

Given the user is on the homepage
When they scroll to the footer
Then they see columns: About Agency, Navigation Links, Newsletter, Instafeed
And copyright notice with Component Dock link

#### Scenario: Responsive navigation

Given the user is on a mobile device
When they view the navbar
Then the navigation collapses into a hamburger menu
And the menu expands on tap

## Verification checklist

- [ ] Spec reviewed and matches live preview structure
- [ ] All design tokens extracted and documented
- [ ] Gherkin scenarios cover all sections
- [ ] Component breakdown defined in docs/templates/pixelcraft/tasks.md

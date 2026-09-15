# Template: Cleanpage (Business Consulting)

## Purpose

Recreation of ColorLib's **Whitespace** business consulting template.

- Source slug: `whitespace`
- Source URL: https://colorlib.com/wp/template/whitespace/
- Preview URL: https://preview.colorlib.com/theme/whitespace/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/whitespace-free-template.jpg
- Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) and screenshot analysis:

| Token                | Value                         | Usage                                         |
| -------------------- | ----------------------------- | --------------------------------------------- |
| `--color-brand`      | `#4ac7ea`                     | Teal/cyan — buttons, accents, counter numbers |
| `--color-brand-dark` | `#34c0e7`                     | Hover state for brand                         |
| `--color-ink`        | `#1a1a1a`                     | Headings, dark text                           |
| `--color-ink-dark`   | `#141313`                     | Navbar, footer, counter bg                    |
| `--color-paper`      | `#f7f7f7`                     | Light section backgrounds                     |
| `--color-mist`       | `#666666`                     | Body text, descriptions                       |
| Font: headings       | Poppins 300–800               | Google Fonts                                  |
| Font: body           | Work Sans 300–700             | Google Fonts                                  |
| Button shape         | Rounded pill (`rounded-full`) | CTA buttons                                   |

## Requirements

### Requirement: Navbar

The template SHALL render a dark fixed navbar with the brand name "Cleanpage" and navigation links (Home, About, Work, Pricing, Blog, Contact). The navbar SHALL include a mobile hamburger toggle.

#### Scenario: Desktop navigation

- **WHEN** the page renders on a desktop viewport
- **THEN** all 6 navigation links are visible alongside the brand

#### Scenario: Mobile toggle

- **WHEN** the user taps the hamburger button
- **THEN** a mobile menu opens showing all navigation links
- **WHEN** the user taps a link
- **THEN** the mobile menu closes

### Requirement: Hero Section

The template SHALL render a split hero with a text panel on the left and a background image on the right.

#### Scenario: Hero content

- **WHEN** the hero renders
- **THEN** it displays "Welcome" subheading, "We Help to Build You the Product" heading, "Business Solution" subheading, and a "Get in touch" CTA button

### Requirement: About Section

The template SHALL render an about section with 4 service items and a heading.

#### Scenario: Service listing

- **WHEN** the about section renders
- **THEN** it shows Market Research, Financial Services, Online Marketing, and 24/7 Support

### Requirement: Services Grid

The template SHALL render a 4-column grid of service cards.

#### Scenario: Service cards

- **WHEN** the services section renders
- **THEN** it displays Business Strategy, Data Analysis, Graphic Design, and Creative cards

### Requirement: Counter Stats

The template SHALL render a dark parallax section with 4 statistics.

#### Scenario: Counter display

- **WHEN** the counter section renders
- **THEN** it shows Done Works (2000), Happy Customers (300), Coffee (100), and Work Hours (1000)

### Requirement: Projects Gallery

The template SHALL render a masonry-style grid of 6 project cards.

#### Scenario: Project cards

- **WHEN** the projects section renders
- **THEN** it displays 6 project cards with titles and category tags

### Requirement: Testimonials

The template SHALL render 3 testimonial cards with quotes, names, and positions.

#### Scenario: Testimonial content

- **WHEN** the testimonials section renders
- **THEN** it shows 3 cards with Garreth Smith at different positions

### Requirement: Case Study

The template SHALL render 3 blog-style case study cards.

#### Scenario: Case study cards

- **WHEN** the case study section renders
- **THEN** it displays 3 cards with date, author, and title

### Requirement: Pricing

The template SHALL render 4 pricing tier cards.

#### Scenario: Pricing tiers

- **WHEN** the pricing section renders
- **THEN** it shows Free ($0), Startup ($19), Premium ($49), and Pro ($99)

### Requirement: Footer

The template SHALL render a dark footer with brand, useful links, quick links, contact info, and a link to Component Dock.

#### Scenario: Component Dock link

- **WHEN** the footer renders
- **THEN** it contains a link to https://www.componentdock.com/ labeled "Component Dock"

### Requirement: App Shell

The template SHALL compose all sections in the correct order and set the document title.

#### Scenario: Section order

- **WHEN** the app renders
- **THEN** sections appear in order: Navbar, Hero, About, Services, Counter, Projects, Testimonials, Case Study, Pricing, Footer

#### Scenario: Document title

- **WHEN** the app renders
- **THEN** the document title is "Cleanpage — Business Consulting Template"

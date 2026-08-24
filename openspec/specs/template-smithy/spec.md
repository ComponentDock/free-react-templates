# Template: Smithy (Portfolio / Personal)

## Purpose

Recreation of ColorLib Schmidt (`https://colorlib.com/wp/template/schmidt/`), preview URL: `https://preview.colorlib.com/theme/schmidt/`.
Stack: Vite, React 19, Tailwind CSS 4, TypeScript (strict), Lucide icons.

## Design Tokens

- Brand Primary: `#0d6efd` (Bootstrap Blue) / Dark Neutral `#212529`
- Font Family: "Poppins", sans-serif
- Button Style: Rounded / Pill buttons with smooth hover states and icon arrows
- Background: Clean white/light neutral sections with contrasting hero

## Requirements & Gherkin Scenarios

### Requirement 1: Navigation Bar

- The template must display a sticky/fixed-top navigation bar with logo ("Smithy.") and links (Home, About, Services, Experiences, Works, Blog, Contact).
- Scenario: User views header
  - Given the user loads the page
  - When they look at the top navigation
  - Then they see the brand logo "Smithy." and navigation links for Home, About, Services, Experiences, Works, Blog, and Contact.

### Requirement 2: Hero Section

- The template must feature a prominent hero section with tagline ("UI/UX Designer & Developer"), headline ("I'm John Smith"), call-to-action buttons ("More About Me", "Hire Me"), and professional portrait showcase.
- Scenario: User views hero banner
  - Given the user is on the landing page
  - When they view the hero section
  - Then they see the subheading, headline, CTA buttons, and portrait placeholder.

### Requirement 3: About & Services Section

- The template must include an About summary and a Services grid detailing professional capabilities.
- Scenario: User explores services
  - Given the user scrolls to the services section
  - When they inspect the service offerings
  - Then they see structured cards representing design and development services.

### Requirement 4: Experience & Works Section

- The template must present work experience milestones and a portfolio works gallery.
- Scenario: User checks portfolio
  - Given the user views the works section
  - When they browse portfolio items
  - Then they see categorized project cards with image previews and titles.

### Requirement 5: Testimonials & Blog

- The template must feature client testimonials and recent blog articles.
- Scenario: User reads blog posts
  - Given the user scrolls through the blog section
  - When they view article previews
  - Then they see titles, publication dates, and read-more links.

### Requirement 6: Contact & Footer

- The template must provide a contact form and a footer linking to Component Dock (`https://www.componentdock.com/`).
- Scenario: User checks footer attribution
  - Given the user reaches the bottom of the page
  - When they read the footer
  - Then they see copyright info and a link to Component Dock (`https://www.componentdock.com/`).

## Verification Checklist

- [ ] OpenSpec validation passes (`npm run spec:validate`)
- [ ] All sections render correctly with Tailwind CSS v4 tokens
- [ ] Footer links to Component Dock

# Template: Hewn (Personal Portfolio)

## Purpose

Recreation of ColorLib's **Clyde** template — a personal portfolio / creative
designer single-page site.

- **Source slug:** `clyde`
- **ColorLib URL:** https://colorlib.com/wp/template/clyde/
- **Preview URL:** https://preview.colorlib.com/theme/clyde/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens (extracted from preview CSS)

| Token              | Value                                         |
| ------------------ | --------------------------------------------- |
| **Brand primary**  | `#b1b493` (muted sage green — `.bg-primary`)  |
| **Dark bg**        | `#1d2124`, `#343a40` (dark sections)          |
| **Footer bg**      | `#232931`                                     |
| **Light bg**       | `#f7f7f7`, `#f8f9fa` (counter / skills areas) |
| **Text primary**   | `#1a1a1a`                                     |
| **Text secondary** | `#999999`, `#6c757d`                          |
| **Font family**    | `"Poppins", Arial, sans-serif`                |
| **Font Awesome**   | 4.7 (icons via `flaticon` + FA classes)       |
| **Button radius**  | `0.3rem` (`.btn`), `0` (`.btn-primary` full)  |
| **Navbar**         | Transparent over hero → black on scroll       |
| **Overlay**        | Black overlay on slider items (`opacity` based)|
| **Skew accent**    | `skewX(20deg)` on slider overlay-1 elements   |

## Visual Design Notes (from screenshot)

- **Dark, moody aesthetic** with full-width hero slider images and black overlays.
- Hero has skewed decorative overlays creating angular visual interest.
- Navigation is transparent over the hero, turning solid black on scroll.
- Counter bar (project count, clients, coffee, experience) sits below hero
  on a light background.
- About section: two-column with author portrait on left, bio text + skill
  bars (CSS-animated progress bars) on right.
- Skills section: animated percentage bars for CSS, HTML, jQuery, Photoshop,
  WordPress, SEO.
- Services section: grid of icon cards (Web Design, Web App, Web Dev,
  Banner Design, Branding, Icon Design, Graphic Design, SEO).
- Hire-me CTA: full-width dark banner with centered text + Contact button.
- Projects section: image grid (3 columns) with hover overlay.
- Testimonials: carousel on sage-green (`#b1b493`) background.
- Blog section: 3-column card grid with images, dates, author, excerpt.
- Contact section: form with input fields + map area.
- Footer: 4-column layout — brand blurb, links, services list, contact info.
- Overall: dark palette with sage-green accent, Poppins font throughout.

## Gherkin Requirements

### Navbar
Scenario: Transparent navbar overlaying hero
  Given the user is at the top of the page
  When the navbar renders
  Then it should be transparent with white text
  And it should show the brand name "Hewn." on the left
  And it should show nav links: Home, About, Skills, Services, Projects, Blog, Contact

Scenario: Navbar becomes solid on scroll
  Given the user scrolls past the hero section
  When the navbar re-renders
  Then it should have a solid black background

### Hero Section
Scenario: Hero slider displays
  Given the user loads the page
  When the hero section renders
  Then it should show a full-width slider with background images
  And each slide should have a black overlay with angular skew decoration
  And each slide should show a headline "Creative UI/UX Designer & Developer"
  And each slide should show a subheadline introducing the designer

### Counter Section
Scenario: Stats counters display
  Given the user views the counter section
  When it renders
  Then it should show 4 counters: Projects Complete, Happy Clients, Cups of Coffee, Years Experienced
  And each counter should display an icon and a number

### About Section
Scenario: About section with portrait and bio
  Given the user views the about section
  When it renders
  Then it should show a heading "Hello! This is Hewn"
  And it should show a portrait image on the left
  And it should show a bio paragraph on the right
  And it should show "Hire me" and "Download CV" buttons

### Skills Section
Scenario: Skills progress bars
  Given the user views the skills section
  When it renders
  Then it should show skill bars for CSS, HTML, jQuery, Photoshop, WordPress, SEO
  And each bar should show a percentage label
  And bars should animate on scroll into view

### Services Section
Scenario: Services grid
  Given the user views the services section
  When it renders
  Then it should show heading "We do awesome services for our clients"
  And it should show 8 service cards in a grid: Web Design, Web Application, Web Development, Banner Design, Branding, Icon Design, Graphic Design, SEO
  And each card should have an icon and title

### Hire-Me CTA
Scenario: Hire me banner
  Given the user views the hire-me section
  When it renders
  Then it should show a full-width dark section
  And it should display "Have a project on your mind." heading
  And it should show a description paragraph
  And it should show a "Contact me" button

### Projects Section
Scenario: Project gallery
  Given the user views the projects section
  When it renders
  Then it should show a grid of project images (3 columns)
  And each project should have an overlay on hover

### Testimonials Section
Scenario: Testimonial carousel
  Given the user views the testimonials section
  When it renders
  Then it should have a sage-green (#b1b493) background
  And it should show heading "What client says about?"
  And it should display testimonial quotes in a carousel
  And each testimonial should show a name and role

### Blog Section
Scenario: Blog card grid
  Given the user views the blog section
  When it renders
  Then it should show 3 blog cards in a row
  And each card should show an image, date, author, title, and excerpt
  And each card should have a "Learn more" link

### Contact Section
Scenario: Contact form
  Given the user views the contact section
  When it renders
  Then it should show a contact form with fields for name, email, subject, and message
  And it should show a submit button

### Footer
Scenario: Footer layout
  Given the user views the footer
  When it renders
  Then it should have a dark background (#232931)
  And it should show 4 columns: brand blurb, navigation links, services list, contact info
  And it should include a copyright notice
  And it should link to https://www.componentdock.com/ (Component Dock)

## Verification Checklist

- [ ] Navbar: transparent → solid black on scroll, brand + 7 nav links
- [ ] Hero: full-width slider, skewed overlays, headline + subheadline
- [ ] Counters: 4 stat items with icons and numbers
- [ ] About: heading, portrait, bio, Hire me + Download CV buttons
- [ ] Skills: 6 animated progress bars with percentage labels
- [ ] Services: 8 service cards with icons in grid
- [ ] Hire-me CTA: dark full-width banner, heading, description, button
- [ ] Projects: image grid with hover overlays
- [ ] Testimonials: carousel on sage-green background, quotes + attribution
- [ ] Blog: 3-card grid with image, meta, title, excerpt, link
- [ ] Contact: form with 4 fields + submit button
- [ ] Footer: 4-column dark footer, Component Dock link, copyright
- [ ] Design tokens: #b1b493 primary, Poppins font, dark palette
- [ ] 100% test coverage, typecheck passes, lint passes, build succeeds

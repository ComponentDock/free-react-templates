# Template: Clydson (Personal Portfolio)

## Purpose

Recreation of the ColorLib "Clyde" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript personal portfolio site.

- **Source:** [ColorLib Clyde](https://colorlib.com/wp/template/clyde/)
- **Preview:** https://preview.colorlib.com/theme/clyde/
- **New name:** `clydson` (app folder: `apps/clydson`, package: `@free-react-templates/clydson`)
- **Category:** Personal / Portfolio

## Design Tokens (extracted from preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| Brand accent color | `#b1b493` | Links, nav underline, hover states (olive/sage green) |
| Primary button color | `#007bff` | CTA buttons (Bootstrap blue), testimonials bg |
| Body text color | `#999999` | Paragraphs, body copy |
| Heading color | `rgba(0,0,0,0.9)` | All h1–h6 |
| Body background | `#fff` | Page background |
| Light section bg | `#f8f9fa` | Counter, skills, blog sections |
| Dark section bg | `#000` | Navbar on mobile, footer |
| Testimonial section bg | `#007bff` | Testimonials (primary color) |
| Font family | `Poppins` (weights 100–900) | All text (body + headings) |
| Button radius | `4px` | `.btn` default |
| Circle radius | `50%` | Circular progress, avatar images |
| Section padding | default Bootstrap (80px equivalent) | `.ftco-section` |
| Hero height | `100vh` (full viewport) | Slider area |

## Section Structure (from live preview DOM)

1. **Navbar** — Dark transparent navbar, logo "Clyde." left, nav links right (Home, About, Skills, Services, Projects, Blog, Contact), hamburger on mobile
2. **Hero** — Full-viewport slider with 2 slides: background image right (with overlay), text left ("Hello! This is Clyde" / "Creative UI/UX Designer & Developer"), "Hire me" primary button + "Download CV" outline button
3. **Counter Stats** — Light bg, 4-column row: Project Complete (750), Happy Clients (568), Cups of coffee (478), Years experienced (780) with flaticon icons
4. **About** — Left: background image with overlay; Right: "My Intro" subheading + "About Me" heading + paragraphs + about-info list (Name, DOB, Address, Zip, Email, Phone) + interests row (Music, Travel, Movie, Sports with icons)
5. **Skills** — Light bg, centered heading "My Skills", 3-column grid of circular progress cards (CSS 95%, HTML 98%, jQuery 68%, Photoshop 92%, WordPress 83%, SEO 95%) with last-week/last-month stats
6. **Services** — Centered heading "We do awesome services for our clients", 2 rows × 4 cards each (Web Design, Web Application, Web Development, Banner Design, Branding, Icon Design, Graphic Design, SEO), white cards with shadow and icons
7. **CTA ("Hire Me")** — Dark/primary bg section: "Have a project on your mind." + "Contact me" white button + person image right
8. **Projects** — "Our Projects" heading, 4×2 grid (8 items) of background images with dark overlay and centered text on hover
9. **Testimonials** — Primary blue bg, "What client says about?" heading, owl carousel of testimonial cards with quote, author avatar, name, title
10. **Blog** — Light bg, "Our Blog" heading, 3-column blog cards with image, date, author, comment count, title, excerpt
11. **Contact** — "Have a Project?" heading, form (Name, Email, Subject, Message, Send Message button), contact info right
12. **Footer** — Dark bg, 4-column: "Lets talk about" + "Learn more" btn, Links nav, Services list, Questions (address, phone, email) + social icons, copyright bottom

## Gherkin Scenarios

### Navbar
```gherkin
Scenario: Navbar displays navigation links
  Given the user visits the homepage
  Then the navbar shows the logo "Clyde."
  And navigation links for Home, About, Skills, Services, Projects, Blog, Contact are visible
  And the navbar is transparent on desktop

Scenario: Mobile hamburger menu
  Given the user is on a mobile viewport
  Then a hamburger menu button is visible
  And clicking it expands the navigation links
```

### Hero
```gherkin
Scenario: Hero displays intro with CTAs
  Given the user visits the homepage
  Then a full-viewport hero section with background image is shown
  And the heading "Creative UI/UX Designer & Developer" is displayed
  And a "Hire me" primary button is visible
  And a "Download CV" outline button is visible

Scenario: Hero has multiple slides
  Given the hero section is visible
  Then there are 2 slider items
  And each slider has a different background image and heading
```

### Counter Stats
```gherkin
Scenario: Counter displays statistics
  Given the user scrolls to the counter section
  Then 4 stat cards are visible in a row
  And stats show: Project Complete, Happy Clients, Cups of coffee, Years experienced
  And each stat has an icon and a number
```

### About
```gherkin
Scenario: About section shows personal info
  Given the user scrolls to the about section
  Then "About Me" heading is displayed on the right
  And a background image with overlay is on the left
  And personal info list shows Name, Date of birth, Address, Zip, Email, Phone
  And interest icons for Music, Travel, Movie, Sports are displayed
```

### Skills
```gherkin
Scenario: Skills section shows circular progress
  Given the user scrolls to the skills section
  Then "My Skills" heading is displayed
  And 6 circular progress cards are shown in a 3-column grid
  And skills include CSS (95%), HTML (98%), jQuery (68%), Photoshop (92%), WordPress (83%), SEO (95%)

Scenario: Each skill card shows week/month stats
  Given the skills section is visible
  Then each card shows "Last week" and "Last month" percentage values
```

### Services
```gherkin
Scenario: Services section shows 8 service cards
  Given the user scrolls to the services section
  Then the heading "We do awesome services for our clients" is displayed
  And 8 service cards are shown in 2 rows of 4
  And each card has an icon, title, and description
```

### CTA Banner
```gherkin
Scenario: CTA section invites contact
  Given the user scrolls past the services section
  Then a dark section with "Have a project on your mind." is displayed
  And a "Contact me" white button is visible
  And a person image is shown on the right
```

### Projects
```gherkin
Scenario: Projects gallery shows 8 items
  Given the user scrolls to the projects section
  Then "Our Projects" heading is displayed
  And 8 project items are shown in a 4×2 grid
  And each item has a background image with dark overlay
  And hovering shows centered title text
```

### Testimonials
```gherkin
Scenario: Testimonials show client quotes
  Given the user scrolls to the testimonials section
  Then a blue background section is displayed
  And "What client says about?" heading is shown
  And testimonial cards with quote, avatar, name, and title are visible
  And testimonials scroll in a carousel
```

### Blog
```gherkin
Scenario: Blog section shows 3 posts
  Given the user scrolls to the blog section
  Then "Our Blog" heading is displayed
  And 3 blog cards are shown in a row
  And each card has an image, date, author, comment count, title, and excerpt
```

### Contact
```gherkin
Scenario: Contact form is displayed
  Given the user scrolls to the contact section
  Then "Have a Project?" heading is shown
  And a form with Name, Email, Subject, Message fields is visible
  And a "Send Message" button is present
```

### Footer
```gherkin
Scenario: Footer has 4 columns
  Given the user scrolls to the footer
  Then a dark footer with 4 columns is displayed
  And columns include: intro text, Links, Services, and Questions (address/phone/email)
  And social media icons are shown
  And copyright text is at the bottom
  And a "Component Dock" link is present in the footer
```

## Verification Checklist

- [ ] Navbar: transparent on desktop, dark on mobile, logo + nav + hamburger
- [ ] Hero: full-viewport, 2 slides with background images, CTAs
- [ ] Counter: 4 stat cards with icons and numbers
- [ ] About: image left, info list + interests right
- [ ] Skills: 6 circular progress cards in 3-column grid
- [ ] Services: 8 cards in 2×4 grid with icons
- [ ] CTA: dark bg, heading, white button, person image
- [ ] Projects: 4×2 grid with hover overlay text
- [ ] Testimonials: blue bg, carousel with quotes and avatars
- [ ] Blog: 3-column cards with image, meta, title, excerpt
- [ ] Contact: form with 4 fields + submit button
- [ ] Footer: 4-column dark footer with links, services, contact, social
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Responsive design (mobile hamburger, stacked grids)
- [ ] Placeholder images via picsum.photos/seed/clydson-<n>
- [ ] Font: Poppins via Google Fonts
- [ ] Primary accent: #b1b493 (olive/sage green)

# Template: WellCare (Healthcare / Medical)

## Purpose

Recreation of the ColorLib **Medicare** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **Source template:** https://colorlib.com/wp/template/medicare/
- **Preview URL:** https://preview.colorlib.com/theme/medicare/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/medicare-free-template.jpg
- **New name:** `wellcare` (avoids collision with existing `carewell`, `medwell`, etc.)
- **App folder:** `apps/wellcare`
- **Package:** `@free-react-templates/wellcare`
- **Surge target:** `wellcare.free.componentdock.com`

## Design Tokens

Extracted from `https://preview.colorlib.com/theme/medicare/css/style.css` + DOM analysis.

| Token | Value | Notes |
|---|---|---|
| Font family | `Poppins, Arial, sans-serif` | Google Fonts (300–700) |
| Primary brand color | `#3c97e8` | Blue — logo text, nav bar background, links, intro-grid default bg, form focus border |
| Accent color | `#69cb6a` | Green — logo "care" text, nav icon accents, primary buttons, hover states |
| Button hover | `#7cd27d` | Lighter green |
| Heading color | `#000` | Black headings |
| Body text | `#666666` | Gray |
| Light text | `#999999` | Secondary text |
| Dropdown bg | `#314355` | Dark blue-gray |
| Button border-radius | `30px` | Pill-shaped buttons |
| Button padding (lg) | `18px 36px` | Large CTA buttons |
| Section padding | `7em 0` | Generous vertical spacing |
| Testimonial section bg | `whitesmoke` | Light gray |
| Counter/Register sections | Parallax background image + dark overlay | `background-attachment: fixed` |
| Footer bg | `#252525` | Dark footer |
| Nav bar height | ~50px | Compact blue nav |
| Body font-size | `16px` | Line-height 1.7 |

### Color palette summary
- Brand blue: `#3c97e8`
- Accent green: `#69cb6a`
- Dark footer: `#252525`
- Dropdown dark: `#314355`
- Whitesmoke sections: `whitesmoke`

## Section Structure (from live preview DOM)

1. **Navbar** — Top bar (logo stethoscope icon + "MEDI" (blue) "care" (green) + phone numbers + address) + blue nav bar with links (Home, Doctors, Services, Departments, Blog, Contact) + green pill CTA "Make an Appointment"
2. **Hero** — Full-width image slider/carousel with dark overlay, white text (doctor name bold, subtitle, description), green pill "Make an Appointment" button, dot indicators
3. **Intro Cards** — 4-column grid of colored cards: Medical Counseling, Qualified Doctors, Rehabilitation Center, Emergency Services (each with icon, title, short text, "Read more" link). Cards use blue background shades
4. **About** — 2-column layout: left image, right text + accordion (Why choose us?, What we do?, Offer Services) with collapsible panels
5. **Appointment CTA** — Centered text "Make an appointment" + green outlined pill button "Book an Appointment"
6. **Services** — 2-row x 3-column grid of 6 services: Qualified Doctors, Medical Counseling, Emergency Services, Blood Bank, Operation Theater, Free Medicine (each with icon, title, description)
7. **Choose Us / Features** — Split layout: left half parallax image, right half "What Makes Us Best?" heading + 4 feature items in 2x2 grid (Qualified Doctors, Free Consultation, Online Enrollment, Modern Facilities)
8. **Doctors** — "Well Experienced Doctors" heading + 4 doctor cards in a row (photo, name, specialty, social icons)
9. **Counter** — Parallax background section with dark overlay + 4 animated counters: Satisfied Customer (3297), Hospitals (378), Qualified Doctor (400), Departments (30)
10. **Blog** — "Recent blog" heading + 3 blog cards (image with date overlay, title, excerpt, "Read more" link)
11. **Register / CTA** — Parallax background section with "We offer Free Consultation" + doctor name + countdown timer + "Book an Appointment" green button
12. **Testimonials** — "What our patients says" heading + Owl Carousel of patient testimonials (avatar, name, quote, 5-star rating)
13. **Footer** — Dark background, 4 columns: Brand description, Navigation links, Our Services links, Make an Appointment form (name, email, message, submit) + copyright line

## Gherkin Requirements

### Scenario: Page loads with correct structure
```gherkin
Given the user visits the WellCare homepage
Then the page title contains "WellCare"
And a navbar with logo "WellCare" is visible
And a hero section with image slider is displayed
And 4 intro feature cards are shown below the hero
```

### Scenario: Navbar displays brand and navigation
```gherkin
Given the navbar is visible
Then the logo shows "Well" in blue and "Care" in green with a stethoscope icon
And navigation links include Home, Doctors, Services, Departments, Blog, Contact
And a green pill "Make an Appointment" CTA button is visible
And phone numbers "111-222-333" and "99-222-333" are displayed
And the address "88 Route West 21th Street, Suite 721 New York NY 10016" is shown
```

### Scenario: Hero slider displays slides
```gherkin
Given the hero section is visible
Then a doctor's name "Dr. Beatrice Prior" is displayed prominently
And a subtitle reads "Dr. Prior's Plastic Surgery Clinic Welcomes You!"
And a description text is shown
And a green "Make an Appointment" pill button is present
And slide navigation dots are visible at the bottom
```

### Scenario: Intro feature cards show services
```gherkin
Given the intro cards section is visible
Then 4 cards are displayed in a row
And each card has an icon, title, description text, and "Read more" link
And the cards show: Medical Counseling, Qualified Doctors, Rehabilitation Center, Emergency Services
```

### Scenario: About section has accordion
```gherkin
Given the about section is visible
Then an image is displayed on the left
And a heading "About WellCare" is shown
And 3 accordion panels exist: "Why choose us?", "What we do?", "Offer Services"
And clicking a panel header expands or collapses its content
And the first panel is expanded by default
```

### Scenario: Appointment CTA section
```gherkin
Given the appointment CTA section is visible
Then a heading "Make an appointment" is displayed
And a green outlined pill button "Book an Appointment" with a calendar icon is shown
```

### Scenario: Services grid displays 6 items
```gherkin
Given the services section is visible
Then a heading "Our Services" is shown
And 6 service items are displayed in a 2x3 grid
And each item has an icon, title, and description
And the services are: Qualified Doctors, Medical Counseling, Emergency Services, Blood Bank, Operation Theater, Free Medicine
```

### Scenario: Choose Us split section
```gherkin
Given the Choose Us section is visible
Then a parallax background image is shown on the left half
And a heading "What Makes Us Best?" is displayed on the right
And 4 feature items are shown in a 2x2 grid
And the features are: Qualified Doctors, Free Consultation, Online Enrollment, Modern Facilities
```

### Scenario: Doctors section
```gherkin
Given the doctors section is visible
Then a heading "Well Experienced Doctors" is shown
And 4 doctor cards are displayed in a row
And each card has a photo, name, specialty, and social media icons (Facebook, Twitter, LinkedIn, Instagram)
And the doctors are: Dr. Beatrice Prior (Dental Hygienist), Dr. Edward Dughlas (Orthopedic Surgeon), Dr. Peter Parker (Health Care), Dr. Liza Thomas (Patient Services Manager)
```

### Scenario: Counter section with animated stats
```gherkin
Given the counter section is visible
Then 4 statistics are displayed in a row
And each stat has an icon, a number, and a label
And the stats are: Satisfied Customer (3297), Hospitals (378), Qualified Doctor (400), Departments (30)
And the numbers animate from 0 to their target value on scroll
```

### Scenario: Blog section shows 3 posts
```gherkin
Given the blog section is visible
Then a heading "Recent blog" is shown
And 3 blog cards are displayed in a row
And each card has a background image with date overlay, title, excerpt, and "Read more" link
```

### Scenario: Register CTA with countdown
```gherkin
Given the register CTA section is visible
Then a heading "We offer Free Consultation" is shown
And a subheading "By Dr. Beatrice Prior" is displayed
And a countdown timer with days, hours, minutes, seconds is present
And text "Limited offer, Hurry Up!" is shown
And a green "Book an Appointment" button with calendar icon is present
```

### Scenario: Testimonials carousel
```gherkin
Given the testimonials section is visible
Then a heading "What our patients says" is shown
And a carousel of testimonial items is displayed
And each testimonial has a circular avatar image, name, quoted text, and 5-star rating
And at least 3 testimonials are present
```

### Scenario: Footer with contact form
```gherkin
Given the footer is visible
Then 4 columns are displayed
And column 1 has the brand description
And column 2 has navigation links: Department, Blog, Contact, Terms, Shop
And column 3 has service links: Heart Surgery, Surgical Treatment, General Treatment, Medical Treatment, Help Desk
And column 4 has a contact form with Name, Email, Message fields and a "Send Message" button
And a copyright line is shown at the bottom
And a link to "Component Dock" (https://www.componentdock.com/) replaces the Colorlib attribution
```

### Scenario: Responsive layout
```gherkin
Given the user views the page on a mobile viewport (< 768px)
Then the navbar collapses to a hamburger menu
And the intro cards stack to 2-column layout
And the services grid stacks to single column
And the doctor cards stack to 2-column layout
And the counter items stack to 2-column layout
And the footer columns stack vertically
```

## Verification Checklist

- [ ] Navbar: logo (stethoscope icon + brand), nav links, phone/address info, green CTA pill button
- [ ] Hero: image slider with dark overlay, white text, green CTA, dot navigation
- [ ] Intro cards: 4 blue-shaded cards with icons, titles, descriptions, "Read more"
- [ ] About: image + heading + 3 accordion panels (expand/collapse behavior)
- [ ] Appointment CTA: centered heading + outlined green button
- [ ] Services: 6 items in 2x3 grid with icons and descriptions
- [ ] Choose Us: split layout with parallax image + 4 features in 2x2
- [ ] Doctors: 4 cards with photos, names, specialties, social icons
- [ ] Counter: 4 animated stats with parallax background
- [ ] Blog: 3 cards with image, date overlay, title, excerpt, link
- [ ] Register CTA: parallax bg, countdown timer, green button
- [ ] Testimonials: carousel with avatars, names, quotes, star ratings
- [ ] Footer: 4 columns (brand, nav, services, contact form) + copyright + Component Dock link
- [ ] Responsive: all sections stack properly on mobile
- [ ] Design tokens: Poppins font, #3c97e8 blue, #69cb6a green, pill buttons (30px radius)
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] CNAME file: `wellcare.free.componentdock.com`
- [ ] homepage field in package.json set to `https://wellcare.free.componentdock.com`

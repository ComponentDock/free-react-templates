# Template: FlexZone (Gym / Fitness)

## Purpose

Recreation of ColorLib **Fitnezz** template.
- Source slug: `fitnezz`
- Preview URL: https://preview.colorlib.com/theme/fitnezz/
- Source screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/fitnezz-free-template.jpg
- Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Section structure (from preview DOM)

1. **Navbar** — dark background (`bg-dark`), logo "FlexZone" (left), nav links (Home, About, News, Contact), and a "Become a member" link/button. Responsive hamburger toggle for mobile.

2. **Hero Slider** — full-width owl-carousel with 2 slides. Each slide:
   - Headline (h1): "Health is wealth" / "Join FlexZone Today"
   - CTA buttons: "Get Started" (white outline) and "Download" (white link)
   - Background image (dark overlay)
   - Centered text, vertically centered

3. **Featured Classes** — section heading "Featured Classes" with decorative back-text. Carousel of 4 class cards, each with:
   - Square image
   - Class title (h2): "Fitness Class Name Here"
   - "Join from $15" button (pink primary)

4. **Our Schedule** — section heading "Our Schedule" with decorative back-text. 2-column layout (no gutters), 4 schedule items total:
   - Each item: image (left or right, alternating) + text (class name, description, time/date)
   - Time shown with clock icon, date with calendar icon
   - "Join from $15" button

5. **Expert Trainers** — section heading "Expert Trainers" with decorative back-text. 3 trainer cards in a row:
   - Photo, name, role ("Gym Trainer")
   - Carousel/slider behavior

6. **Testimonial** — section heading "Testimonial" with decorative back-text. 3 testimonial cards in a row:
   - Quote text (blockquote)
   - Author photo, name, role ("CEO, XYZ Company")

7. **Blog** — section heading "Blog" with decorative back-text. 2 blog posts:
   - Image (left) + text (right): title, date, excerpt
   - "Read More" button

8. **Footer** — dark background (`#262626`), 3 columns:
   - About Us (text + social icons: Twitter, Facebook, LinkedIn, Instagram)
   - Contact Info (address, phone, email)
   - Quick Links (About, Terms of Use, Disclaimers, Contact)
   - Bottom: copyright + "Made with Component Dock" attribution

## Design tokens (from preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#f73471` (hot pink) | Buttons, links, accents, heading underline |
| Secondary | `#f96593` (lighter pink) | Button hover states |
| Background dark | `#262626` (charcoal) | Footer background |
| Background light | `#f7f7f7` (off-white) | Schedule section background |
| Navbar background | `#343a40` (dark gray, Bootstrap bg-dark) | Navbar |
| Text primary | `#000` (black) | Headings |
| Text body | `#495057` (gray) | Body text |
| Text muted | `#999999` (light gray) | Schedule times, secondary text |
| Text light | `rgba(255,255,255,0.5)` | Footer text |
| Border light | `#dee2e6` | Dividers |
| White | `#fff` | Card backgrounds, button text |
| Font body | `"Open Sans", Arial, sans-serif` | All text |
| Button radius | `0` (sharp corners) | Primary buttons are rectangular |
| Heading size | `50px` uppercase | Section headings with pink underline |
| Back-text | `#e3e3e3` (light gray) | Decorative behind heading text |
| Section padding | `30px–80px` vertical | Between sections |
| Border radius (cards) | `4px` | Subtle rounded corners on some elements |

## Gherkin scenarios

### Scenario: Navbar renders with logo and navigation
```
Given the user visits the FlexZone homepage
Then the navbar is visible with a dark background
And the logo "FlexZone" is displayed on the left
And navigation links are present: Home, About, News, Contact
And a "Become a member" link is displayed
```

### Scenario: Hero slider displays gym headline
```
Given the user visits the FlexZone homepage
Then the hero slider is visible full-width
And the headline reads "Health is wealth"
And a "Get Started" button is displayed
And the slider transitions between at least 2 slides
```

### Scenario: Featured classes section displays class cards
```
Given the user scrolls to the Featured Classes section
Then the heading "Featured Classes" is visible
And 4 class cards are displayed in a carousel
And each card shows a class image, title, and "Join from $15" button
```

### Scenario: Schedule section displays class schedule
```
Given the user scrolls to the Our Schedule section
Then the heading "Our Schedule" is visible
And 4 schedule items are displayed in a 2-column layout
And each item shows a class name, description, time, and date
```

### Scenario: Expert trainers section displays trainer cards
```
Given the user scrolls to the Expert Trainers section
Then the heading "Expert Trainers" is visible
And 3 trainer cards are displayed in a row
And each card shows a photo, name, and role "Gym Trainer"
```

### Scenario: Testimonial section displays client quotes
```
Given the user scrolls to the Testimonial section
Then the heading "Testimonial" is visible
And 3 testimonial cards are displayed in a row
And each card shows a quote, author photo, name, and role
```

### Scenario: Blog section displays recent posts
```
Given the user scrolls to the Blog section
Then the heading "Blog" is visible
And 2 blog post cards are displayed
And each card shows an image, title, date, excerpt, and "Read More" button
```

### Scenario: Footer displays site information
```
Given the user scrolls to the footer
Then the footer has a dark background (#262626)
And it contains 3 columns: About Us, Contact Info, Quick Links
And social media icons are displayed (Twitter, Facebook, LinkedIn, Instagram)
And a "Made with Component Dock" attribution link is present
```

## Verification checklist

- [ ] All sections match the preview DOM structure and order
- [ ] Brand color `#f73471` (hot pink) is used for primary buttons and accents
- [ ] Font is Open Sans (loaded via Google Fonts)
- [ ] Buttons have sharp corners (no border-radius)
- [ ] Hero slider works with at least 2 slides
- [ ] Featured classes carousel displays 4 cards
- [ ] Schedule section uses 2-column no-gutters layout
- [ ] Trainer cards display 3 in a row
- [ ] Testimonial cards display 3 in a row with quotes
- [ ] Blog section displays 2 posts
- [ ] Footer has dark background with 3 columns
- [ ] Footer includes "Made with Component Dock" link
- [ ] No ColorLib references in app code
- [ ] All images use picsum.photos placeholders
- [ ] Responsive layout works on mobile

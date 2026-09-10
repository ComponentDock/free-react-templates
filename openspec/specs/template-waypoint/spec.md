# Template: Waypoint (Life Coaching / Personal Development)

## Purpose

Recreation of the ColorLib **Coaching** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page website. The original is a personal coaching/life coach landing page with a hero section with typed animation, image slider, about section, training carousel, testimonials, services, blog, contact form, and footer.

- **Source template:** ColorLib Coaching
- **Source slug:** `coaching`
- **ColorLib page:** https://colorlib.com/wp/template/coaching/
- **Live preview:** https://preview.colorlib.com/theme/coaching/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/coaching-free-template.jpg
- **New name:** `waypoint`
- **App path:** `apps/waypoint`
- **Package:** `@free-react-templates/waypoint`
- **Deploy target:** `waypoint.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) at https://preview.colorlib.com/theme/coaching/css/style.css and HTML structure analysis.

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#373a6d` | Hero bg, btn-primary bg, blockquote bg, nav active, focus borders, text-primary icons |
| Body text | `gray` (default) | Paragraphs, body text |
| Heading text | `#000` | All headings, .text-black |
| White | `#fff` | Hero text, button text, footer headings |
| Footer bg | `#333333` | Footer section (overrides .bg-primary) |
| Light bg | `#ccc` | bg-light override (training, contact sections) |
| Card bg | `#fff` | Service cards, blog entries |
| Post meta | `#b3b3b3` | Blog date text |
| Testimonial name | `#000` | Testimonial author name |
| CTA link | `#fd7e14` | Orange accent for hero paragraph links |
| Button warning | `#ffc107` (Bootstrap) | "Contact Me" hero button |

### Typography

| Property | Value |
|----------|-------|
| Font family (headings) | `Quicksand`, sans-serif |
| Font family (blockquote) | `Vollkorn`, serif |
| Font family (body) | `Quicksand` via CSS inheritance |
| Weights used | 400 (body), 500 (nav), 700 (bold), 900 (hero h1) |
| Body size | 1rem (16px) |
| Body line-height | 1.7 |
| h1 (hero) | 3rem (48px), mobile: 2rem (32px) |
| section titles | Bootstrap h2 defaults |
| Service h3 | 1.2rem |
| Blog h3 | 1.3rem |
| Training h3 | 1.5rem |

### Button Styles

| Element | Shape | Padding | Radius | Colors |
|---------|-------|---------|--------|--------|
| `.btn-primary` | Default Bootstrap | `py-2 px-5` | 5px (Bootstrap default) | bg `#373a6d`, border `#373a6d`, white text; hover → black bg |
| `.btn-warning` | Default Bootstrap | `px-5 py-3` | 5px | Bootstrap warning (orange), white text; transparent with white border on hover |
| Newsletter input+btn | Inline | input: default, btn: small | 5px | Transparent input bg with `border-secondary text-white bg-transparent` on footer |

### Section Backgrounds

| Section | Background |
|---------|------------|
| Hero/Cover | Solid `#373a6d` (site-blocks-cover bg-color) |
| About | White (default) |
| Training | `#ccc` (bg-light override) |
| Testimonials | White (default) |
| Services | Bootstrap `.bg-primary` (likely `#373a6d` or Bootstrap default) |
| Blog | White (default) |
| Contact | `#ccc` (bg-light override) |
| Footer | `#333333` (site-footer) |

### Spacing

| Section | Padding |
|---------|---------|
| `.site-section` | 2.5em vertical (mobile), 5em (desktop ≥768px) |
| `.site-footer` | 4em (mobile), 8em (desktop) |
| Hero | 80vh height, min-height 400px |

## Requirements (Gherkin)

### Feature: Header / Navigation

```gherkin
Scenario: Header renders with logo and navigation links
  Given the page loads
  Then a sticky header is visible at the top
  And the logo text "Coaching." is displayed on the left (with dot in primary color)
  And navigation links "Home", "About", "Our Training", "Testimonials", "Services", "Blog", "Contact" are present
  And a hamburger menu icon is visible on mobile/tablet

Scenario: Navigation links scroll to sections
  Given the header is rendered
  When the user clicks "About"
  Then the page scrolls to the about section
```

### Feature: Hero / Cover Section

```gherkin
Scenario: Hero section displays typed animation headline
  Given the page loads
  Then a full-height hero section covers 80vh
  And the background color is navy (#373a6d)
  And the heading reads "I'm Professional" followed by typed text cycling through "Business Speakers" and "Life Coach"
  And a subtitle paragraph is below the heading
  And a "Contact Me" button is displayed with warning/orange style

Scenario: Hero button links to contact section
  Given the hero section is visible
  When the user clicks "Contact Me"
  Then the page scrolls to the contact section
```

### Feature: Hero Image Slider

```gherkin
Scenario: Image carousel displays coaching photos
  Given the hero slider section is visible
  Then a carousel shows coaching-related images
  And the carousel has navigation arrows (prev/next)
  And the carousel auto-plays between slides
```

### Feature: About Section

```gherkin
Scenario: About section displays title and service cards
  Given the about section is visible
  Then the heading reads "Welcome To My Website"
  And two description paragraphs are present
  And two service cards are displayed: "Means of Living" and "Transform Lives"
  And each card has an icon, title, and description

Scenario: About service cards show icons
  Given the about section is visible
  Then each service card displays a primary-colored icon
```

### Feature: Training Section

```gherkin
Scenario: Training carousel displays training items
  Given the training section is visible
  Then the heading reads "Life Coach Training"
  And a description paragraph is below the heading
  And a carousel displays training cards with images
  And each card has an image, title, and description
  And the section background is light gray

Scenario: Training cards have image hover effect
  Given the training section is visible
  When the user hovers over a training card image
  Then the image scales up slightly (1.05x)
```

### Feature: Testimonials Section

```gherkin
Scenario: Testimonials carousel displays customer quotes
  Given the testimonials section is visible
  Then the heading reads "Happy Customers"
  And a carousel displays testimonial blocks
  And each block has a blockquote with navy (#373a6d) background
  And each block shows a circular avatar photo
  And each block shows the customer name

Scenario: Testimonial blockquote has speech-bubble shape
  Given the testimonials section is visible
  Then each blockquote has a triangle pointing down (speech-bubble effect)
  And the blockquote text is white on navy background
```

### Feature: Services Section

```gherkin
Scenario: Services carousel displays service cards
  Given the services section is visible
  Then the heading reads "Our Services"
  And a description paragraph is below the heading
  And a carousel displays white service cards
  And each card has an icon, title, and description
  And the section has a primary-colored background

Scenario: Service cards have icons in primary color
  Given the services section is visible
  Then each service card icon is displayed in primary color (#373a6d)
```

### Feature: Blog Section

```gherkin
Scenario: Blog grid displays blog entries
  Given the blog section is visible
  Then the heading reads "Our Blog"
  And 4 blog entries are displayed in a 2-column grid
  And each entry has an image thumbnail on the left, title, date, description, and "Read More.." link

Scenario: Blog entry date formatting
  Given the blog section is visible
  Then each entry shows a date (e.g. "April 17, 2019") in light gray
```

### Feature: Contact Section

```gherkin
Scenario: Contact form renders with fields
  Given the contact section is visible
  Then the heading reads "Contact Me"
  And contact info shows: Address, Phone, Email Address
  And the form has: First name input, Last name input (placeholder "First name" for both), Email address input, Message textarea
  And a "Send Message" button is displayed in primary style

Scenario: Contact form accepts input
  Given the contact form is visible
  When the user types in the first name field
  Then the field accepts text input
```

### Feature: Footer

```gherkin
Scenario: Footer displays about, links, social, and newsletter
  Given the footer is visible
  Then the footer has three columns: "About Coaching", "Quick Links", "Follow Us"
  And Quick Links includes: About Us, Our Training, Services, Testimonials, Contact Us
  And social icons for Facebook, Twitter, Instagram, LinkedIn are shown
  And a "Subscribe Newsletter" section with email input and "Send" button is present
  And a copyright line is displayed

Scenario: Footer links scroll to sections
  Given the footer is visible
  When the user clicks "About Us"
  Then the page scrolls to the about section
```

### Feature: Responsive Design

```gherkin
Scenario: Mobile layout shows hamburger menu
  Given the viewport is narrower than 1200px
  Then the desktop navigation is hidden
  And a hamburger menu icon is visible

Scenario: Mobile hero text scales down
  Given the viewport is narrower than 992px
  Then the hero h1 font size reduces to 2rem

Scenario: Mobile layout stacks columns
  Given the viewport is narrower than 768px
  Then sections stack vertically
  And padding is reduced to 2.5em
```

## Verification Checklist

- [ ] Header: sticky nav with "Coaching." logo, 7 nav links, hamburger on mobile
- [ ] Hero: navy bg (#373a6d), 80vh, typed animation "I'm Professional [Business Speakers / Life Coach]", "Contact Me" btn-warning
- [ ] Hero slider: owl-carousel with 2 coaching images, nav arrows
- [ ] About: "Welcome To My Website" heading, 2 paragraphs, 2 service cards with icons
- [ ] Training: bg-light (#ccc), "Life Coach Training" heading, carousel of training cards with image zoom hover
- [ ] Testimonials: "Happy Customers", carousel of blockquotes with navy bg + triangle, circular avatars, names
- [ ] Services: primary-colored bg, carousel of white service cards with icons
- [ ] Blog: "Our Blog", 4 entries in 2-col grid, image + title + date + description + "Read More.."
- [ ] Contact: bg-light, "Contact Me" heading, address/phone/email, form with 2 name inputs + email + textarea + "Send Message" btn-primary
- [ ] Footer: #333333 bg, "About Coaching" + "Quick Links" + "Follow Us" + newsletter + copyright + Component Dock link
- [ ] Fonts: Quicksand (Google Fonts) + Vollkorn (for blockquotes)
- [ ] Colors match extracted tokens
- [ ] Responsive: hamburger on mobile, scaled hero text, stacked columns
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com

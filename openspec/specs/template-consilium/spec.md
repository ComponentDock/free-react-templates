# Template: Consilium (Consulting Agency)

## Purpose

Recreation of ColorLib's **Consula** template as a React 19 + Vite + Tailwind 4 + TypeScript application.

- **Source template**: ColorLib Consula — https://colorlib.com/wp/template/consula/
- **Live preview**: https://preview.colorlib.com/theme/consula/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/consula-free-template.jpg
- **New name**: `consilium` (apps/consilium)
- **Surge URL**: https://consilium.free.componentdock.com
- **Package**: `@free-react-templates/consilium`

## Design tokens

Extracted from the live preview CSS (`css/style.css`):

| Token | Value | Notes |
|---|---|---|
| `--brand-primary` | `#46ddb0` | Mint/teal green — buttons, links, active states, check icons, dropdown borders |
| `--color-black` | `#000000` | Heading text, navbar text, `.text-black` |
| `--color-body` | `gray` | Body text color |
| `--color-footer-bg` | `#333333` | Dark footer background |
| `--color-footer-text` | `#737373` | Footer paragraph text |
| `--color-footer-link` | `#999999` | Footer links, hover → white |
| `--color-border-light` | `#edf0f5` | Section borders, dropdown borders |
| `--color-form-focus` | `#46ddb0` | Form control focus border |
| `--color-section-light-bg` | `#f8f9fa` (bg-light) | Services, contact section background |
| `--font-family` | `Roboto, sans-serif` | All headings and body (300/400/900 weights) |
| `--btn-radius` | `30px` | Pill-shaped buttons and form controls |
| `--btn-padding` | `10px 30px` | Button padding |
| `--btn-hover-inverse` | white bg + `#46ddb0` text | Primary button hover inverts colors |
| `--form-control-height` | `43px` | Input fields |
| `--section-padding-mobile` | `2.5em 0` | Site section padding on mobile |
| `--section-padding-desktop` | `5em 0` | Site section padding on ≥768px |
| `--footer-padding` | `4em 0` mobile, `8em 0` desktop |

**Visual design** (from screenshot): Clean, professional consulting agency layout. White background with light gray section alternation. Mint/teal (#46ddb0) accent color on buttons, links, and section markers. Dark (#333) footer. Rounded (pill) buttons. Roboto font. Hero with dark background image overlay and left-aligned text. Team photos in circles. Services with icon + text cards. Blog cards with thumbnails. Contact form in white card on gray section.

## Section structure

1. **TopBar** — Social media icons (left) + phone number + email (right), light gray bg (`bg-light`)
2. **Header/Navbar** — White bg, sticky. Logo "Consilium." (dot in primary color). Nav links: Home, About Us, Team, Services, Testimonials, Blog, Contact. Mobile hamburger menu.
3. **Hero** — Full-width background image with dark overlay, left-aligned heading "We Are The Best Consulting Agency", subtext, "Get Started" primary button. AOS fade-up animation.
4. **About** — Two-column: left image with "50 years of experience" badge overlay; right text (section-sub-title "About Us", title "Welcome To Consilium", paragraph, "Learn More" button with black hover).
5. **Team** — 3-column grid. Each: circular photo, name, position, description, social icon row (Facebook, Twitter, LinkedIn, Instagram). Centered text. Bottom border.
6. **How It Works** — 3-column: heading per step (Innovate, Create, Scale), description, checkmark list (3 items each) with primary-colored icons.
7. **Services** — Light gray bg, bottom border. 6 cards in 3-col grid. Each: icon (left) + title + description + "Learn More" link. Icons: autorenew, backspace, av_timer, beenhere, business_center, cloud_done.
8. **Testimonials** — Carousel/slider. Quote blockquote + person photo + name. 4 testimonials.
9. **Features** — Two-column: right image, left text with lead paragraph + 2 feature cards (Web & Mobile Specialties, Intuitive Thinkers) each with icon + description + "Learn More".
10. **Blog** — 3-column blog cards. Each: image, title link, meta (author + date + category), excerpt, "Continue Reading..." link.
11. **Contact** — Light gray bg. Two columns: left = white card with contact form (first name, last name, email, subject, message, "Send Message" button); right = white card with address, phone, email info.
12. **CTA Banner** — Full-width primary bg (#46ddb0), "Let's Get Started" white text, clickable link.
13. **Footer** — Dark bg (#333). Three columns: About Us text, Quick Links (ul), Follow Us (social icons). Right column: Subscribe Newsletter form (email input + Send button). Bottom: copyright + attribution.
14. **Component Dock Footer Link** — Must link to https://www.componentdock.com/ ("Component Dock") replacing the original Colorlib attribution.

## Gherkin requirements

### Scenario: TopBar renders contact info and social links

```gherkin
Given I visit the Consilium page
Then I see social media icons (Facebook, Twitter, Instagram, LinkedIn) in the top bar
And I see a phone number "+1 234 5678 9101" in the top bar
And I see an email "info@yourdomain.com" in the top bar
```

### Scenario: Navbar renders with correct links

```gherkin
Given I visit the Consilium page
Then I see the logo "Consilium." with a mint-colored dot
And I see navigation links: Home, About Us, Team, Services, Testimonials, Blog, Contact
And the navbar is sticky on scroll
```

### Scenario: Hero section displays headline and CTA

```gherkin
Given I visit the Consilium page
Then I see a hero heading "We Are The Best Consulting Agency"
And I see hero description text
And I see a "Get Started" primary button
```

### Scenario: About section shows experience badge and text

```gherkin
Given I visit the Consilium page
Then I see an about image with "50 years of experience" badge overlay
And I see section title "Welcome To Consilium"
And I see a "Learn More" button
```

### Scenario: Team section shows 3 team members

```gherkin
Given I visit the Consilium page
Then I see heading "Our Team"
And I see 3 team member cards in a row
And each card has a circular photo, name, position, description, and social icons
```

### Scenario: How It Works section shows 3 steps

```gherkin
Given I visit the Consilium page
Then I see heading "How It Works"
And I see 3 columns: Innovate, Create, Scale
And each step has a description and a 3-item checkmark list
```

### Scenario: Services section shows 6 service cards

```gherkin
Given I visit the Consilium page
Then I see heading "Our Services"
And I see 6 service cards in a 3-column grid
And each card has an icon, title, description, and "Learn More" link
```

### Scenario: Testimonials carousel shows quotes

```gherkin
Given I visit the Consilium page
Then I see heading "Testimonials"
And I see testimonial slides with a quote, person photo, and name
```

### Scenario: Features section shows capabilities

```gherkin
Given I visit the Consilium page
Then I see a features section with an image
And I see 2 feature items: "Web & Mobile Specialties" and "Intuitive Thinkers"
And each has an icon, title, description, and "Learn More" link
```

### Scenario: Blog section shows 3 posts

```gherkin
Given I visit the Consilium page
Then I see heading "Our Blog Posts"
And I see 3 blog cards in a row
And each card has an image, title, meta info, excerpt, and "Continue Reading..." link
```

### Scenario: Contact section has form and info

```gherkin
Given I visit the Consilium page
Then I see a contact form with fields: First Name, Last Name, Email, Subject, Message
And I see a "Send Message" submit button
And I see contact info: address, phone, email
```

### Scenario: CTA banner displays

```gherkin
Given I visit the Consilium page
Then I see a full-width mint-green banner with "Let's Get Started" in white
And the banner is clickable
```

### Scenario: Footer with newsletter and links

```gherkin
Given I visit the Consilium page
Then I see a dark footer with About Us text, Quick Links, Follow Us social icons
And I see a newsletter subscribe form with email input and Send button
And I see a link to Component Dock (https://www.componentdock.com/)
```

### Scenario: Responsive behavior

```gherkin
Given I visit the Consilium page on a mobile device
Then the navbar collapses to a hamburger menu
And sections stack vertically
And the team grid changes from 3 columns to 1
And the contact form and info stack vertically
```

## Verification checklist

- [ ] All sections render correctly and match the original section order
- [ ] Brand color #46ddb0 used consistently for buttons, links, active states
- [ ] Roboto font loaded and applied
- [ ] Pill-shaped buttons (border-radius: 30px)
- [ ] Sticky navbar with smooth scroll
- [ ] Hero background image with dark overlay
- [ ] "50 years of experience" badge positioned over about image
- [ ] Team photos in circular format (rounded-circle)
- [ ] Testimonials carousel functions (prev/next or auto-rotate)
- [ ] Contact form with proper input styling
- [ ] Dark footer with newsletter form
- [ ] Mobile responsive (hamburger nav, stacking columns)
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to Component Dock
- [ ] Placeholder images from picsum.photos with deterministic seeds
- [ ] Google Fonts (Roboto) loaded via index.html link
- [ ] AOS animations on hero and service cards

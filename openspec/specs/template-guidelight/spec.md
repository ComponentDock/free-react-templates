# Template: GuideLight (Life Coaching)

## Purpose

Recreation of ColorLib **LifeCoach** template.
- Source slug: `lifecoach`
- Preview URL: https://preview.colorlib.com/theme/lifecoach/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/lifecoach-free-template.jpg
- Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

Extracted from live preview CSS (`css/style.css`):

| Token             | Value                         | Usage                                |
| ----------------- | ----------------------------- | ------------------------------------ |
| Font family       | `"Roboto", sans-serif`        | Body + headings (weights 300/400/900)|
| Primary brand     | `#3a4971`                     | Buttons, navbar accent, links        |
| Primary hover     | `#000000`                     | Button hover state                   |
| Text special      | `#bbcdde`                     | Light-blue accent text on dark BG    |
| Text muted        | `#737373`                     | Secondary text, dates                |
| Body text         | `#333333`                     | Default paragraph text               |
| Heading text      | `#000000`                     | Section titles                       |
| Footer BG         | `#25262a`                     | Site footer background               |
| Footer text       | `#ffffff`                     | Footer paragraph text                |
| Footer heading    | `#ffffff`                     | Footer section headings              |
| Light BG          | `#f8f9fa`                     | Alternating section backgrounds      |
| Border            | `#dee2e6`                     | Subtle dividers                      |
| White             | `#ffffff`                     | Main content backgrounds             |
| Button radius     | Bootstrap default (0.25rem)   | Rounded corners                      |
| Section padding   | ~4rem vertical                | `site-section` class                 |

## Section Structure (in order)

1. **Navbar** — fixed-top sticky, logo "GuideLight ." with primary dot accent, 6 nav links (Home, About, Our Training, Services, Blog, Contact). Mobile hamburger toggle.
2. **Hero** — full-width background image overlay (`site-blocks-cover overlay`), heading "Professional Life Coaching", single CTA button "Get Started".
3. **Special Offers** — `bg-primary` section, 3-column layout: heading "Special Offers" + 2 feature cards with icon + title + description + "Read more" link.
4. **About** — two-column: image (right, rounded) + text (left): heading "Welcome to GuideLight", lead paragraph, body text, signature image.
5. **Training** — `bg-light` section, centered heading "Our Training", 2-column grid of 6 training items (image thumbnail + title + category tag + description).
6. **Team** — section with border-bottom, heading "Meet Team", lead text, 4-column grid of team member cards (photo, social overlay on hover, name, position).
7. **Carousel/Slider** — image carousel (prev/next controls) paired with text carousel (heading + lead + description + "Learn More" button) for topics: Social Life, Money & Finance, Motivation.
8. **Services** — `bg-light` with border-bottom, heading "Services", 3-column grid of service cards with icon + title + description.
9. **Testimonials** — full-width carousel, heading "Testimonials", 4 testimonial slides (blockquote + avatar + name).
10. **Blog** — heading "Our Blog", 3-column grid of blog post cards (image + category tag + title + excerpt + "Read more").
11. **Contact** — `bg-light`, heading "Get In Touch", contact form (first name, last name, email, subject, message textarea, submit button).
12. **Footer** — dark BG (`#25262a`), 3-column layout: left (About Us + Newsletter signup), middle (Quick Links), right (Follow Us social icons + sidebar image + paragraph). Copyright line at bottom. Footer MUST link `https://www.componentdock.com/` (replaces Colorlib credit).

## Gherkin Requirements

### Feature: Navbar

```gherkin
Scenario: Navbar renders all navigation links
  Given the page loads
  Then the navbar contains links: Home, About, Our Training, Services, Blog, Contact
  And the logo reads "GuideLight" with a primary-colored dot

Scenario: Navbar is sticky on scroll
  Given the user scrolls down
  Then the navbar remains fixed at the top of the viewport
```

### Feature: Hero Section

```gherkin
Scenario: Hero displays heading and CTA
  Given the page loads
  Then the hero section shows "Professional Life Coaching"
  And a "Get Started" button is visible

Scenario: Hero has background image overlay
  Given the page loads
  Then the hero section has a dark overlay over a background image
```

### Feature: Special Offers

```gherkin
Scenario: Special offers section renders on primary background
  Given the page loads
  Then the special offers section has a blue (#3a4971) background
  And it displays "Special Offers" as the heading
  And two offer cards are visible with icon, title, and description

Scenario: Offer cards have read more links
  Given the special offers section is visible
  Then each offer card has a "Read more" link
```

### Feature: About Section

```gherkin
Scenario: About section shows welcome text and image
  Given the page loads
  Then the about section shows "Welcome to GuideLight"
  And a lead paragraph and body text are visible
  And an image is displayed on the right side
  And a signature image appears below the text
```

### Feature: Training Section

```gherkin
Scenario: Training section renders 6 training items
  Given the page loads
  Then the training section heading reads "Our Training"
  And 6 training items are displayed in a 2-column grid
  And each item has a thumbnail image, title, category, and description

Scenario: Training items have linked titles
  Given the training section is visible
  Then each training item title is a clickable link
```

### Feature: Team Section

```gherkin
Scenario: Team section shows 4 team members
  Given the page loads
  Then the team section heading reads "Meet Team"
  And 4 team member cards are displayed in a row
  And each card shows a photo, name, and position

Scenario: Team cards have social overlays
  Given the team section is visible
  Then each team card shows social media icons on hover
```

### Feature: Carousel Section

```gherkin
Scenario: Carousel displays images with navigation
  Given the page loads
  Then an image carousel is visible with prev/next controls
  And the carousel cycles through at least 3 images

Scenario: Carousel has paired text slides
  Given the carousel section is visible
  Then text slides accompany each image with a heading, description, and "Learn More" button
```

### Feature: Services Section

```gherkin
Scenario: Services section renders 3 service cards
  Given the page loads
  Then the services section heading reads "Services"
  And 3 service cards are displayed in a row
  And each card has an icon, title, and description
```

### Feature: Testimonials Section

```gherkin
Scenario: Testimonials carousel renders quotes
  Given the page loads
  Then the testimonials section heading reads "Testimonials"
  And at least 4 testimonial slides are available
  And each slide shows a blockquote, avatar image, and person name
```

### Feature: Blog Section

```gherkin
Scenario: Blog section renders 3 post cards
  Given the page loads
  Then the blog section heading reads "Our Blog"
  And 3 blog post cards are displayed in a row
  And each card shows an image, category tag, title, excerpt, and "Read more" link
```

### Feature: Contact Section

```gherkin
Scenario: Contact form renders all fields
  Given the page loads
  Then the contact section heading reads "Get In Touch"
  And the form contains fields: first name, last name, email, subject, message
  And a submit button is visible

Scenario: Contact form validates required fields
  Given the user clicks submit with empty required fields
  Then validation errors appear for first name, last name, email, subject, and message
```

### Feature: Footer

```gherkin
Scenario: Footer renders three columns
  Given the page loads
  Then the footer has three columns: About + Newsletter, Quick Links, Follow Us
  And a newsletter email input and Send button are visible
  And social media icons (Facebook, Twitter, Instagram, LinkedIn) are present

Scenario: Footer links to Component Dock
  Given the footer is visible
  Then the footer contains a link to https://www.componentdock.com/
  And the Colorlib attribution is removed

Scenario: Footer has dark background
  Given the page loads
  Then the footer background is dark (#25262a)
```

## Verification Checklist

- [ ] All 12 sections render in correct order
- [ ] Design tokens match: Roboto font, #3a4971 primary, #bbcdde accent, #25262a footer
- [ ] Navbar is sticky with all 6 nav links
- [ ] Hero has background image with overlay and CTA button
- [ ] Special Offers section has primary background with 2 feature cards
- [ ] About section has two-column layout with image and signature
- [ ] Training section shows 6 items in 2-column grid on light background
- [ ] Team section shows 4 members in a row with hover social overlays
- [ ] Carousel section has image + text slide pairing with prev/next
- [ ] Services section shows 3 cards on light background
- [ ] Testimonials carousel shows 4 slides with quotes and avatars
- [ ] Blog section shows 3 post cards in a row
- [ ] Contact form has all 5 fields and submit button
- [ ] Footer has dark BG, 3 columns, newsletter form, social icons
- [ ] Footer links to componentdock.com (Colorlib credit removed)
- [ ] No Colorlib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] All placeholder images use picsum.photos/seed/guidelight-*
- [ ] Responsive: mobile hamburger nav, stacked columns on small screens

# Template: Scepter (Creative Agency Portfolio)

## Purpose

Scepter is a single-page CREATIVE AGENCY PORTFOLIO in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Monarchy" free template (source:
https://colorlib.com/wp/template/monarchy/), built under a DIFFERENT name
(**Scepter**), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a multi-page Bootstrap 4 site (jQuery, Owl Carousel,
Fancybox, Typed.js, AOS, Waypoints, Isotope, Stellar, Sticky) featuring
a warm beige hero cover with centered text and video play button,
three-column services, a six-image portfolio grid, four-column
testimonials, an Owl Carousel blog section, a brand/client logo strip,
and a warm beige footer. The preview is live at
https://preview.colorlib.com/theme/monarchy/ and the screenshot is at
https://colorlib.com/wp/wp-content/uploads/sites/2/monarchy-free-template.jpg.

This recreation consolidates all pages into a single scrollable SPA with
section anchors, matching the original's visual design and section order
1:1.

## Design Tokens

Extracted from https://preview.colorlib.com/theme/monarchy/ CSS
(`css/style.css`) and preview DOM.

| Token             | Value                | Usage                                  |
| ----------------- | -------------------- | -------------------------------------- |
| font-family       | "Jost", sans-serif   | All text (weights 300–700)             |
| page-bg           | #ffffff              | Body / page background (white)         |
| text-color        | #757575              | Body text (medium gray)                |
| heading-color     | #000000              | All headings h1–h6                     |
| accent/orange     | #f26200              | Links, nav active, form focus, carousel|
|                   |                      | dots, blog author text, service hover  |
| warm-beige        | #f5ecdb              | Footer bg, copyright bg, hero cover bg |
| selection-bg      | #000000              | Text selection background              |
| selection-fg      | #ffffff              | Text selection text color              |
| nav-text          | #f26200              | Navigation link color                  |
| nav-active        | #f26200              | Active nav link                        |
| btn-radius        | 30px                 | All buttons (pill shape)               |
| circle-radius     | 50%                  | Client testimonial avatar circles      |
| footer-link       | rgba(0,0,0,0.5)      | Footer link color                      |
| footer-link-hover | #000000              | Footer link hover                      |
| form-focus        | #f26200              | Form input focus border color          |
| hero-cover-bg     | #f5ecdb              | Hero section background                |
| section-bg-light  | #f8f9fa              | Carousel active dot bg                 |
| copyright-bg      | #f5ecdb              | Copyright section background           |

## Visual Design Notes

The screenshot shows a clean, minimal, warm-toned creative agency
portfolio. The hero is a full-width cover section with warm beige
(#f5ecdb) background and centered text: "Do What You Love" heading with
a subtitle paragraph and an orange play button (Fancybox video link).
The header is a sticky white bar with "Monarchy" text logo on the left
and nav links (Home, Portfolio, About, Services, Blog, Contact) on the
right in orange. The services section shows three columns with icon
wraps and descriptions on a white background. The portfolio is a clean
3-column grid of 6 images with hover effects. Testimonials show four
customer cards with circular avatars. The blog section uses an Owl
Carousel of article cards with images, dates, titles, and author info.
A brand/client logo strip (Google, Invision, Nike, Microsoft) sits on a
light gray background. The footer is warm beige with the logo, contact
info, and two link columns. The copyright bar is also warm beige with
social icons (Facebook, Twitter, LinkedIn, Instagram, Skype).

## Gherkin Requirements

### Scenario: Page loads with correct structure

```gherkin
Given the user visits the Scepter page
Then the page title contains "Scepter"
And a <header> element is visible
And the header contains a logo link with text "Scepter"
And a navigation menu with links is visible
```

### Scenario: Hero section with video CTA

```gherkin
Given the user visits the Scepter page
Then a hero cover section is visible at the top
And the hero has a warm beige (#f5ecdb) background
And a heading "Do What You Love" is visible
And a subtitle paragraph is visible
And a circular play button is visible
And the play button links to a video (Fancybox)
```

### Scenario: Services section

```gherkin
Given the user scrolls to the services section
Then three service cards are displayed in a row
And each card has an icon, a title, and a description
And the first card title is "Interface Design"
And the second card title is "Product Design"
And the third card title is "Quality Results"
```

### Scenario: Portfolio grid

```gherkin
Given the user scrolls to the portfolio section
Then a heading "Portfolio" is visible
And a 3-column grid of 6 portfolio images is displayed
And each image links to a portfolio detail page
And images have hover effects
```

### Scenario: Testimonials section

```gherkin
Given the user scrolls to the testimonials section
Then a heading "Testimonials" is visible
And four testimonial cards are displayed in a row
And each card shows a customer name, role, circular avatar, and quote
And the customer names are: Chad Hawkins, Ayisha Atherton,
     Riccardo Gilliam, Jasleen Dunkley
```

### Scenario: Blog carousel

```gherkin
Given the user scrolls to the blog section
Then a heading "Blog Updates" is visible
And a subtitle paragraph is visible
And a horizontal carousel of blog article cards is displayed
And each card shows an image, date, title, and author info
And carousel navigation arrows are visible
```

### Scenario: Client/Brand logos

```gherkin
Given the user scrolls to the client logos section
Then a light gray (#f8f9fa) background section is visible
And four client logo images are displayed in a row
And the logos represent: Google, Invision, Nike, Microsoft
```

### Scenario: Footer section

```gherkin
Given the user scrolls to the footer
Then the footer has a warm beige (#f5ecdb) background
And the "Scepter" logo is visible on the left
And a description paragraph is visible on the left
And contact info (email, phone) is visible on the right
And navigation link columns are visible on the right
And social media icons (Facebook, Twitter, LinkedIn, Instagram, Skype)
     are visible in the copyright section
And the copyright includes a "Component Dock" link
```

### Scenario: Responsive layout

```gherkin
Given the user is on a mobile viewport (below 768px)
Then the hero text stacks vertically
And service cards stack vertically
And portfolio grid adjusts to fewer columns
And testimonial cards stack vertically
And footer columns stack vertically
And a mobile hamburger menu toggle is visible
```

## Verification Checklist

- [ ] All sections render: header, hero, services, portfolio, testimonials, blog, clients, footer
- [ ] Hero has warm beige background with "Do What You Love" heading
- [ ] Play/video button is visible in hero
- [ ] Services section has three cards with correct titles
- [ ] Portfolio grid has 6 images in 3 columns
- [ ] Testimonials section has 4 customer cards with avatars
- [ ] Blog carousel scrolls horizontally
- [ ] Client logo strip shows 4 logos
- [ ] Footer has warm beige background with contact info and links
- [ ] Copyright section has social icons and Component Dock link
- [ ] Mobile hamburger menu works
- [ ] Responsive layout works (mobile stacking)
- [ ] Design tokens match: Jost font, #f5ecdb beige, #f26200 orange accent
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Placeholder images use picsum.photos/seed/scepter-*
- [ ] 100% test coverage for all new components

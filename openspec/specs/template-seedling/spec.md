# Template: Seedling (Education)

## Purpose

Recreation of the ColorLib **Kindergarten** template — a playful, colorful education/kindergarten website with a pink-and-indigo brand palette, rounded shapes, and a friendly, child-oriented aesthetic.

- **Source:** https://colorlib.com/wp/template/kindergarten/
- **Preview:** https://preview.colorlib.com/theme/kindergarten/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/kindergarten-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens

| Token              | Value            | Notes                                    |
| ------------------ | ---------------- | ---------------------------------------- |
| brand-pink         | `#ED078B`        | Primary CTA, header top bar, accents     |
| heading-indigo     | `#423F8D`        | Headings (h1–h6)                         |
| body-text          | `#5E5E5E`        | Paragraphs                               |
| description-indigo | `#4255A4`        | Feature captions, section description p  |
| accent-blue        | `#1F97D4`        | Feature titles (color-font1)             |
| accent-yellow      | `#FBCE0F`        | Hero subtitle, feature titles (color-font2) |
| accent-teal        | `#12D9DF`        | Header CTA button, feature titles (color-font3), footer heart/accent |
| dark-navy          | `#1D2547`        | Dropdown menu text                       |
| footer-bg          | `#4255A4`        | Footer background                        |

### Fonts

| Role          | Font                 | Weight        |
| ------------- | -------------------- | ------------- |
| Headings      | `Fredoka One`        | 400           |
| Body          | `DM Sans`            | 400, 500, 700 |
| Nav links     | `Concert One`        | 400           |
| Buttons (CTA) | `Fredoka One` / `Concert One` | 400 |

### Button styles

- **Primary CTA (`.btn`):** bg `#ED078B`, text white, font `Concert One`, `border-radius: 30px` (pill), padding `25px 38px`, hover transition with `#da047d`.
- **Header button (`.header-btn`):** bg `#12D9DF`, text white, font `Concert One`, `border-radius: 30px`, padding `13px 43px`.
- **Border button (`.border-btn`):** `border: 1px solid #ED078B`, text `#ED078B`, font `Fredoka One`, `border-radius: 30px`, padding `17px 42px`, hover fills `#ED078B`.

### Section backgrounds

- Hero: background image with white card overlay (`border-radius: 90px`)
- About: white / light
- Class offer: background image (`section_bg1.png` style)
- Date events: background image (`section_bg2.png` style)
- Team: white
- Testimonials: white
- Instagram: image grid row
- Footer: `#4255A4`

## Section structure (HTML order)

1. **Header** — Top info bar (pink `#ED078B` bg) with address + phone left, social icons right; sticky bottom bar with logo + nav (Home, Class, About, Blog w/ submenu, Contact) + "Enroll Now" teal CTA button.
2. **Hero Slider** — Full-width background image, white rounded card (`border-radius: 90px`) with "Quality Learning" h1, "For Every Child" yellow subtitle, "Explore Classes" pink pill button.
3. **About** — "Welcome to our Kindergarten" centered heading; left column: 3 feature items (icon + title + description); right column: about image.
4. **Class Offer Area** — Background image section, "Classes We Offer" heading; 4 class cards in carousel (image + title + description + footer row with age group/classes/price); "More Classes" border button.
5. **Date Events** — Background image section, countdown timer block (days/hours/minutes/seconds), "Drawing Event" heading, date span, "View Event" button.
6. **Team / Expert Teachers** — "Expert Teachers" heading; 4 team member cards in carousel (photo with hover social overlay, name + role below).
7. **Testimonials** — Slider with quotes, founder image + name + role.
8. **Instagram Feed** — Horizontal row of 6 Instagram-style image thumbnails with icon overlay.
9. **Footer** — Logo + description + social links | Quick Links column | About Us column; copyright bar with heart + "Component Dock" link.

## Gherkin scenarios

### Feature: Seedling landing page

```gherkin
Scenario: Header displays info bar and navigation
  Given I visit the Seedling homepage
  Then I see a pink top bar with address and phone info
  And I see social media icons (Facebook, Twitter, LinkedIn, Instagram)
  And I see a logo in the sticky bottom bar
  And I see navigation links: Home, Class, About, Blog, Contact
  And I see an "Enroll Now" teal CTA button

Scenario: Hero section shows headline and CTA
  Given I visit the Seedling homepage
  Then I see the hero section with a background image
  And I see "Quality Learning" as the main heading
  And I see "For Every Child" as the subtitle in yellow
  And I see an "Explore Classes" pink pill button

Scenario: About section shows features and image
  Given I visit the Seedling homepage
  When I scroll to the About section
  Then I see "Welcome to our Seedling" heading
  And I see 3 feature items with icons: Inter School Sports, Friendly Environment, Multimedia Class
  And I see an about image on the right

Scenario: Class offer section shows class cards
  Given I visit the Seedling homepage
  When I scroll to the Classes section
  Then I see "Classes We Offer" heading
  And I see class cards with image, title, description, age group, classes count, and price
  And I see a "More Classes" border button

Scenario: Date events section shows countdown
  Given I visit the Seedling homepage
  When I scroll to the Events section
  Then I see a countdown timer with days, hours, minutes, seconds
  And I see "Drawing Event" heading
  And I see a "View Event" pink button

Scenario: Team section shows teacher cards
  Given I visit the Seedling homepage
  When I scroll to the Team section
  Then I see "Expert Teachers" heading
  And I see team member cards with photo, name, and role
  And hovering over a card reveals social media links

Scenario: Testimonials section shows quotes
  Given I visit the Seedling homepage
  When I scroll to the Testimonials section
  Then I see testimonial quotes with founder images

Scenario: Instagram feed shows image grid
  Given I visit the Seedling homepage
  When I scroll to the Instagram section
  Then I see a horizontal row of Instagram-style image thumbnails

Scenario: Footer shows links and copyright
  Given I visit the Seedling homepage
  When I scroll to the footer
  Then I see the logo and description text
  And I see Quick Links and About Us columns
  And I see a copyright notice with a "Component Dock" link
```

## Verification checklist

- [ ] Brand pink `#ED078B` used for CTAs, header top bar, hover accents
- [ ] Heading font is `Fredoka One` (or loaded Google Font equivalent)
- [ ] Body font is `DM Sans`
- [ ] Nav font is `Concert One`
- [ ] Hero card has `border-radius: 90px` (pill shape) on desktop, smaller on mobile
- [ ] All buttons are pill-shaped (`border-radius: 30px`)
- [ ] "Enroll Now" header button uses teal `#12D9DF`
- [ ] Section order matches: Header → Hero → About → Classes → Events → Team → Testimonials → Instagram → Footer
- [ ] Team cards have hover overlay with social links
- [ ] Footer background is `#4255A4` indigo
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Placeholder images use `picsum.photos/seed/seedling-<n>/`
- [ ] Google Fonts loaded in `index.html`

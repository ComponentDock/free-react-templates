# Template: Needlecraft (Health & Wellness)

## Purpose

Recreation of ColorLib's **Acupuncture** free website template.
- Source: https://colorlib.com/wp/template/acupuncture/
- Preview: https://preview.colorlib.com/theme/acupuncture/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/acupuncture-free-template.jpg
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from `css/style.css` of the live preview:

| Token | Value | Notes |
|-------|-------|-------|
| Brand / primary color | `#2fc4b2` | Teal-green, used on `.text-primary`, `.bg-primary`, `.btn-primary` |
| Body background | `#ffffff` | |
| Dark text | `#364d59` | Main body text color |
| Light section bg | `#f8f9fa` | `.bg-light` — testimonials section |
| CTA section bg | `#2fc4b2` | Full-width primary banner |
| Button border-radius | `7px` | `.btn` default |
| Icon border-radius | `50%` | Circular icon containers |
| Heading font | `"Playfair Display", serif` | Google Fonts |
| Body font | `"Roboto", sans-serif` | Google Fonts |
| Section padding | `py-5` (Bootstrap) → Tailwind `py-20` | Generous vertical spacing |

## Gherkin Scenarios

### Navbar

```gherkin
Scenario: Navbar renders with brand and links
  Given the page is loaded
  Then the navbar displays "Needlecraft." as brand text (teal dot after name)
  And links "Home", "Services", "Testimonials", "Blog", "About", "Contact" are visible
  And on mobile the hamburger menu toggles the nav drawer
```

### Hero

```gherkin
Scenario: Hero section shows headline and play button
  Given the page is loaded
  Then the hero has a full-width background image
  And the headline reads "Improve your overall health." with "Improve" in teal
  And a subheading lorem text is shown below
  And a circular play-video button labeled "Watch intro video" is centered
```

### Services Row

```gherkin
Scenario: Five service icons displayed in equal columns
  Given the page is loaded
  Then 5 service items are shown in a full-width row (equal columns)
  And each has a circular icon and a label: "Acupuncture", "Therapy", "Foot", "Natural", "Healing"
```

### About / Why Choose Us

```gherkin
Scenario: About section with image and text
  Given the page is loaded
  Then the "Why Choose Us" section has an image on the right and heading + text on the left
  And a "Contact us now" button (primary) is shown below the text
```

### Service Cards (2x2)

```gherkin
Scenario: Four service detail cards in a 2x2 grid
  Given the page is loaded
  Then 4 service detail cards are shown in 2 columns
  And each has a circular icon, heading, and description paragraph
```

### Testimonials

```gherkin
Scenario: Testimonials section on light background
  Given the page is loaded
  Then the testimonials section has a light gray background (#f8f9fa)
  And "Happy Customers" heading is shown with "Testimonials" label in teal above
  And 3 testimonial cards each with a blockquote and author (avatar, name, role)
```

### Blog

```gherkin
Scenario: Blog posts section
  Given the page is loaded
  Then "News & Tips" heading is shown with "Blog" label in teal above
  And 3 blog post cards are shown in 3 columns
  And each has an image, meta date/author, heading, and description
```

### CTA Banner

```gherkin
Scenario: Full-width call-to-action banner
  Given the page is loaded
  Then a teal (#2fc4b2) full-width banner is shown
  And heading "What are you waiting for?" in white
  And subtext below, plus a "Contact us now" white button
```

### Footer

```gherkin
Scenario: Footer with contact info and copyright
  Given the page is loaded
  Then 3 columns show phone, address, and email contact info
  And copyright line with "Component Dock" link replaces original attribution
  And "Terms" and "Privacy" links are in the bottom-right
```

## Verification Checklist

- [ ] Navbar with brand + 6 nav links + mobile hamburger toggle
- [ ] Hero with background image, heading with teal highlight, subtext, play button
- [ ] 5-column services row with circular icons + labels
- [ ] About/Why Choose Us with left text + right image layout
- [ ] 2x2 service detail cards with icon + heading + description
- [ ] Testimonials on light background, 3 cards with quotes + authors
- [ ] Blog section, 3 post cards with image + meta + content
- [ ] Teal CTA banner with heading + white button
- [ ] Footer: 3 contact columns + copyright with Component Dock link + Terms/Privacy
- [ ] Brand color #2fc4b2 applied consistently via Tailwind theme
- [ ] Playfair Display for headings, Roboto for body via Google Fonts
- [ ] No ColorLib references in app code; provenance only in spec + TEMPLATES.md
- [ ] public/CNAME = `needlecraft.free.componentdock.com`
- [ ] homepage in package.json = `https://needlecraft.free.componentdock.com`
- [ ] Footer links to `https://www.componentdock.com/`

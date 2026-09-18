# Template: CalmPrayer (Nonprofit/Church)

## Purpose

Recreation of the ColorLib **Inward** church website template.
- Source: https://colorlib.com/wp/template/inward/
- Preview: https://preview.colorlib.com/theme/inward/
- Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript
- Category: Nonprofit / Church
- New name: `calmprayer` (never reuse "Inward" as an app name)

## Design Tokens (from preview stylesheet)

| Token              | Value                                        | Notes                                 |
| ------------------ | -------------------------------------------- | ------------------------------------- |
| Brand primary      | `#6A99CB` (steel blue)                       | Navbar hover, dropdown active, links  |
| Brand hover        | `#90b3d8` (lighter blue)                     | Button primary hover, outline hover   |
| Body font          | `"Open Sans", Arial, sans-serif`             | General text                          |
| Heading font       | `"Playfair Display", times, serif`           | Headings, hero h1, section h2         |
| Button radius      | `0` (square/none)                            | All buttons: sharp corners            |
| Link color         | `#6A99CB` (matches primary)                  | Anchor text, "More Info" links        |
| Body text color    | `#000` / `#b3b3b3`                           | Main text / muted text                |
| Background (main)  | `#fff` (white)                               | Base page                              |
| Background (alt)   | `#f8f9fa` (light gray, Bootstrap bg-light)   | Sermons, testimonial sections         |
| Navbar             | transparent over hero → solid black on scroll | Fixed-top, `.navbar-dark`             |
| Section borders    | none (clean, flat)                           | No decorative borders                 |
| Footer bg          | dark (implicitly black/charcoal)             | 4-column layout                       |
| Loader accent      | `#f4b214` (amber/gold)                       | SVG spinner accent                    |
| Social icons       | FontAwesome (twitter, facebook, linkedin, instagram) | In footer social list          |

## Visual Design (from screenshot)

Church/ministry website with a full-width hero slider (dark overlay on warm-toned hand-reaching image), prominent heading + outline CTA button. Below the hero: a split layout — left side has a forest/camp background with countdown timer and "Join Now" button; right side has an "Upcoming Events" list with date + title + "More Info" link per item. Audio sermons section on light background with 3-column cards (image, title, author, audio player). Latest Events as 3-column media cards (thumbnail + title + category + excerpt). Personal Testimony carousel with pastor photos and blockquotes on light background. Dark footer with 4 columns (brand, navigation links, messages links, contact info) and social icons.

## Gherkin Requirements & Scenarios

### Navbar
```gherkin
Scenario: Navbar renders with brand and navigation links
  Given the page loads
  Then the navbar displays "CalmPrayer" as the brand
  And nav links include Home, About, Messages (dropdown), Events, Contact
  And the navbar is transparent on page load
  When the user scrolls down
  Then the navbar becomes solid dark

Scenario: Messages dropdown opens on hover/click
  Given the navbar is visible
  When the user hovers over or clicks "Messages"
  Then a dropdown appears with Audio Sermons, Past Messages, Bible Reading, End Time Prophecy
```

### Hero Section (Slider)
```gherkin
Scenario: Hero slider displays with overlay and CTA
  Given the page loads
  Then a full-screen hero slider is visible
  And it shows a background image with dark overlay
  And the heading reads "Welcome to CalmPrayer"
  And a subheading paragraph is present
  And an outline button labeled "Request a Prayer" is visible
  When the user clicks "Request a Prayer"
  Then nothing navigates (placeholder link)
```

### Camp Meeting / Countdown Section
```gherkin
Scenario: Split layout shows countdown and upcoming events
  Given the page loads
  Then a split layout section is visible below the hero
  And the left half shows a camp meeting image with heading "Camp Meeting Will Start Soon"
  And a countdown timer displays weeks, days, hours, minutes, seconds
  And a "Join Now" outline button is present
  And the right half shows "Upcoming Events" heading
  And event items list with date, title, and "More Info" link

Scenario: Countdown timer counts down
  Given the countdown section renders
  Then each countdown unit (weeks, days, hours, min, sec) updates
  And countdown labels are visible below each number
```

### Audio Sermons Section
```gherkin
Scenario: Sermon cards render on light background
  Given the page loads
  Then the Audio Sermons section is on a light (#f8f9fa) background
  And a centered heading "Audio Sermons" is visible
  And 3 sermon cards are displayed in a grid
  And each card has an image, sermon title, author name + date
  And an audio player is present on each card
```

### Latest Events Section
```gherkin
Scenario: Event cards render in grid
  Given the page loads
  Then the Latest Events section is visible
  And 3 event cards are displayed
  And each card has a small thumbnail, title, date/category metadata
  And a description paragraph is present
```

### Testimonial Section
```gherkin
Scenario: Testimonial carousel displays
  Given the page loads
  Then the Personal Testimony section is on a light background
  And a heading "Personal Testimony" is centered
  And a carousel shows testimonial slides
  And each slide has a photo, blockquote, and attribution name
```

### Footer
```gherkin
Scenario: Footer renders with 4 columns and social links
  Given the page loads
  Then the footer is dark-themed
  And column 1 shows "CalmPrayer Church" heading, description, and social icons (twitter, facebook, linkedin, instagram)
  And column 2 shows "The Church" links (About Us, Organizational Chart, Events, Contact)
  And column 3 shows "Messages" links (Audio Sermons, Past Messages, Bible Reading, End Time Prophecies)
  And column 4 shows "Visit or Talk to Us" with address, telephone, email
  And a copyright line includes a link to Component Dock
```

## Verification Checklist

- [ ] All 7 sections render (Navbar, Hero, Camp Meeting, Sermons, Events, Testimonial, Footer)
- [ ] Design tokens match: brand #6A99CB, heading font Playfair Display, body font Open Sans, square buttons
- [ ] Hero is full-width with dark overlay, outline white CTA button
- [ ] Camp meeting section has split layout (countdown + events list)
- [ ] Countdown timer functional (live seconds ticking)
- [ ] Sermon cards show image + title + author + audio player
- [ ] Event cards show thumbnail + title + metadata + description
- [ ] Testimonial carousel cycles slides
- [ ] Footer has 4-column layout with social icons
- [ ] Footer links to Component Dock
- [ ] Navbar transitions from transparent to solid dark on scroll
- [ ] No ColorLib references in app code
- [ ] App name is "calmprayer" everywhere (package, CNAME, homepage)

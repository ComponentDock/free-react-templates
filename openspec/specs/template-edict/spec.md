# Template: Edict (Law Firm / Legal Services)

## Purpose

Recreation of the ColorLib "Solicitor" template for a law firm / legal services website.

- **Source:** https://colorlib.com/wp/template/solicitor/
- **Preview:** https://preview.colorlib.com/theme/solicitor/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** edict (never "solicitor" in app code)

## Design Tokens

### Colors

| Token          | Value                    | Usage                                   |
| -------------- | ------------------------ | --------------------------------------- |
| Background     | `#1b1c1e` (near-black)   | Page body, all section backgrounds      |
| Surface        | `rgba(255,255,255,0.02)` | Service cards, form backgrounds         |
| Surface hover  | `#037ef3` (blue)         | Card hover states, active indicators    |
| Accent / brand | `#037ef3` (blue)         | CTA buttons, links, active nav, circles |
| Accent hover   | `#2991f5` / `#1c8bf4`    | Button hover states                     |
| Text primary   | `#ffffff`                | Headings, body text                     |
| Text muted     | `rgba(255,255,255,0.7)`  | Nav links, placeholders                 |
| Text secondary | `rgba(255,255,255,0.4)`  | List links, muted text                  |
| Text white-50  | `rgba(255,255,255,0.5)`  | Subheadings, descriptions               |
| Overlay        | `rgba(0,0,0,0.4)`        | Hero image dark overlay                 |
| Dark surface   | `#0f0f11`                | About-me image wrap background          |

### Typography

| Element       | Font Family             | Weight | Size |
| ------------- | ----------------------- | ------ | ---- |
| Body          | Roboto, sans-serif      | 400    | 14px |
| Headings      | Playfair Display, serif | 700    | 45px |
| Hero heading  | Playfair Display, serif | 700    | 50px |
| Logo          | Playfair Display, serif | 700    | 24px |
| Nav links     | Roboto                  | 400    | 14px |
| Service cards | Roboto                  | 400    | 16px |

### Button Shapes

- Border radius: 4px
- Padding: 15px 30px
- Font size: 14px
- Shadow on hover: `0 10px 20px 0 rgba(0,0,0,0.2)`
- Primary: background `#037ef3`, text `#ffffff`
- Outline-white: border `#fff`, text `#fff`; hover fills white with black text
- Arrow variant: extra right padding (50px) with arrow icon

### Section Backgrounds

- Body: solid `#1b1c1e` (dark)
- Our Services: `rgba(255,255,255,0.02)` (barely-there light tint)
- Practice Area cards: `#0f0f11` → hover `#037ef3`
- Resources box: `rgba(255,255,255,0.02)`
- Testimonials: default dark
- Contact form: white background card with shadow
- Footer: default dark

## Section Order (from preview DOM)

1. **Navbar** — fixed/absolute top, transparent background over hero. Logo left, centered nav links (Home, Practicing Area with dropdown, Services, About, Contact Us), phone number right. Mobile hamburger menu.
2. **Hero** — full-screen (`height: 100vh; min-height: 780px`), background image with dark overlay (`rgba(0,0,0,0.4)`). Left-aligned content: large heading, subtext, two CTA buttons ("Our services" primary, "Contact us" outline-white).
3. **About Me** (`sec-about-me`) — two-column. Left: heading "I'm Jon Campbell", two paragraphs of text, CTA button. Right: image with dark background strip extending below.
4. **Our Services** (`bg-custom-light`) — section heading "Our Services", 3×2 grid of service cards. Each card: circle icon (blue background on hover), title, description paragraph. Services: Counsel, Legal Dept, Compliance, Identity, Hall of Justice, Law Abiding.
5. **Security Consultants** (`sec-why-us`) — two-column. Left: large image. Right: heading "Security Consultants", subheading "Justice serves", paragraph, CTA button.
6. **Tabbed Services** (`sec-3`) — vertical tab navigation with 3 tabs (Investigative Services, Security Consultations, Criminal Defense Investigations). Each tab: left column heading + text + CTA, right column image.
7. **Practice Area** (`sec-4`) — heading "Practice Area", 3-column grid of 12 numbered cards (01–12). Each card: dark background (`#0f0f11`), number, service title, arrow icon. Hover turns blue (`#037ef3`).
8. **Testimonials** (`sec-testimonial`) — heading "Testimonials", split layout. Left: 3 author photos in vertical tabs with name + title. Right: blockquote with testimonial text, attribution.
9. **Resources** (`sec-list`) — heading "Resources" + description. 4-column box with link lists (6 items per column).
10. **Peace & Order** (`py-0`) — two-column. Left: heading, paragraph, CTA. Right: image (reversed order on desktop: image right, text left).
11. **Contact Form** (`sec-6`) — heading "Write to us", form with fields: Full Name, Email, Phone Number, Choose a Service (select/text), Message (textarea), Submit button.
12. **Footer** (`site-footer`) — 3-column: Contact (address, phone, email), Sources (links), Links (links + social icons: Instagram, Twitter, Facebook, Pinterest, Dribbble). Social icons in circular buttons, hover turns blue.

## Gherkin Requirements

### Scenario: Navbar renders with correct links

```gherkin
Given the page loads
When I look at the navbar
Then I see the logo "Edict"
And I see nav links: Home, Practicing Area, Services, About, Contact Us
And I see a phone number on the right
```

### Scenario: Hero section displays correctly

```gherkin
Given the page loads
When I look at the hero section
Then I see a full-screen background image with dark overlay
And I see a heading "Meet all your investigative and litigation needs"
And I see a subtext paragraph
And I see two CTA buttons: "Our services" (primary) and "Contact us" (outline)
```

### Scenario: About Me section shows practitioner info

```gherkin
Given the page loads
When I scroll to the About Me section
Then I see the heading "I'm Jon Campbell"
And I see two text columns: text on left, image on right
And I see a CTA button "Our services"
```

### Scenario: Our Services grid renders 6 service cards

```gherkin
Given the page loads
When I scroll to the Our Services section
Then I see heading "Our Services"
And I see 6 service cards in a 3-column grid
And each card has an icon, title, and description
And the service titles are: Counsel, Legal Dept, Compliance, Identity, Hall of Justice, Law Abiding
```

### Scenario: Service card hover effect

```gherkin
Given the Our Services section is visible
When I hover over a service card
Then the card background changes to blue (#037ef3)
And the icon becomes fully opaque
```

### Scenario: Security Consultants section

```gherkin
Given the page loads
When I scroll to the Security Consultants section
Then I see a large image on the left
And I see heading "Security Consultants" with subheading "Justice serves"
And I see a paragraph and CTA button "Read more"
```

### Scenario: Tabbed services switch content

```gherkin
Given the tabbed services section is visible
When I click the "Security Consultations" tab
Then the tab becomes active
And I see the Security Consultations heading and image
When I click the "Criminal Defense Investigations" tab
Then I see the Criminal Defense Investigations heading and image
```

### Scenario: Practice Area grid shows 12 items

```gherkin
Given the page loads
When I scroll to the Practice Area section
Then I see heading "Practice Area"
And I see 12 numbered cards in a 3-column grid
And each card shows a number (01–12), service title, and arrow icon
```

### Scenario: Practice area card hover

```gherkin
Given the Practice Area section is visible
When I hover over a practice area card
Then the card background changes to blue (#037ef3)
```

### Scenario: Testimonials section with tabbed authors

```gherkin
Given the page loads
When I scroll to the Testimonials section
Then I see heading "Testimonials"
And I see 3 author photos on the left with names and titles
And I see a blockquote with testimonial text on the right
When I click a different author
Then the testimonial text changes to that author's quote
```

### Scenario: Resources section shows link columns

```gherkin
Given the page loads
When I scroll to the Resources section
Then I see heading "Resources"
And I see 4 columns of links in a box container
```

### Scenario: Peace & Order section

```gherkin
Given the page loads
When I scroll to the Peace & Order section
Then I see heading "Peace & order"
And I see a paragraph and CTA button on the left
And I see an image on the right
```

### Scenario: Contact form renders all fields

```gherkin
Given the page loads
When I scroll to the contact form section
Then I see heading "Write to us"
And I see input fields: Full Name, Email, Phone Number, Choose a Service
And I see a textarea for message
And I see a submit button "Send Message"
```

### Scenario: Footer renders with columns

```gherkin
Given the page loads
When I scroll to the footer
Then I see 3 columns: Contact, Sources, Links
And I see social media icons (Instagram, Twitter, Facebook, Pinterest, Dribbble)
And I see a link to https://www.componentdock.com/
```

### Scenario: Mobile responsive navbar

```gherkin
Given the viewport is 375px wide
When the page loads
Then the nav links are hidden
And a hamburger menu icon is visible
When I tap the hamburger icon
Then the mobile menu slides in from the right
```

## Verification Checklist

- [ ] Fonts loaded: Playfair Display (headings) + Roboto (body) via Google Fonts
- [ ] Dark background (#1b1c1e) on body
- [ ] Blue accent (#037ef3) on buttons, links, active states
- [ ] Hero: full-screen, background image, dark overlay, two CTAs
- [ ] About Me: two-column with image
- [ ] Our Services: 6 cards in 3×2 grid with icons and hover effect
- [ ] Security Consultants: image + text two-column
- [ ] Tabbed services: 3 tabs switching content
- [ ] Practice Area: 12 numbered cards in 3-column grid with hover
- [ ] Testimonials: author tabs with blockquote content
- [ ] Resources: 4-column link list in box
- [ ] Peace & Order: text + image two-column
- [ ] Contact form: all fields present, styled
- [ ] Footer: 3 columns, social icons, Component Dock link
- [ ] Mobile: hamburger menu, responsive layout
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] public/CNAME contains edict.free.componentdock.com
- [ ] homepage in package.json matches deploy URL
- [ ] Footer links to https://www.componentdock.com/

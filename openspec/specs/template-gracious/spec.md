# Template: Gracious (Charity / Nonprofit)

## Purpose

Recreation of the ColorLib **Kindity** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/kindity/
- **Preview:** https://preview.colorlib.com/theme/kindity/
- **Name mapping:** ColorLib "Kindity" → **Gracious**
- **Category:** Charity / Nonprofit
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript (strict), Vitest + Testing Library

## Design tokens

Extracted from the live preview stylesheet (`css/style.css`):

| Token | Value | Usage |
|---|---|---|
| Font family | `"Poppins", sans-serif` | All text (body, headings, buttons) |
| Body weight | 300 | Body paragraphs, secondary text |
| Heading weight | 600 | All headings (h1–h6) |
| Nav/link weight | 500 | Navigation items, button text |
| Primary brand | `#ea2c58` | Active nav, hover states, main CTA button, donate button |
| Heading text | `#222222` | All headings |
| Body text | `#777777` | Paragraphs, secondary text |
| Dark background | `#04091e` | Footer, features parallax section |
| Light background | `#f9f9ff` | Testimonials section |
| Card white | `#fff` | Testimonial cards, dropdown menus |
| Border gray | `#635e68` | White button border |
| Divider gray | `#eeeeee` | Top menu border, separators |
| Stat yellow | `#e7c12d` | Donation stat card (Total Donation) |
| Stat pink | `#ea2c58` | Donation stat card (Total Volunteers) — same as primary brand |
| Stat green | `#91d214` | Donation stat card (Future Plans) |
| Button line-height | 40px | Main CTA buttons |
| Button padding | 0 30px | Main CTA buttons |
| Button transform | uppercase | All CTA buttons |
| Section padding | 120px top/bottom | All content sections (.p_120) |
| Container max-width | 1170px | Standard Bootstrap container |

## Section structure (from live preview DOM)

1. **Navbar** — Transparent absolute header; top bar with social icons, language selector, My Account button, Donate Now button; main nav: Home, Gallery, About, Events (dropdown), Pages (dropdown), Blog (dropdown), Contact, search icon
2. **Hero Banner** — Full-width parallax image background, centered white text: headline "We need your Help to serve the people", subheadline "Help for victims affcted by flood", description paragraph, two CTAs: "Donate Now" (primary) + "View Activity" (white outlined)
3. **Donation Stats** — Three overlapping stat cards below banner (margin-top: -90px): yellow "Total Donation" ($2.5M), pink "Total Volunteers" (3,268), green "Future Plans" ($7.5M). Each card has title, description, divider line, and large stat number.
4. **Welcome** — Two-column layout: left text "Welcome to Kindity" with paragraph + 3 inline stats ($2.5M Total Donation, 1,465 Total Projects, 3,965 Total Volunteers each with icon); right side hero image.
5. **Causes** — Centered title "Our Major Causes" + carousel of cause cards: each card has image with percentage overlay, title "Did not find your Package", description, bottom links (Raised / Total Need amounts). Carousel shows 3 cards.
6. **Features** — Dark parallax background section with overlay image. White title "Our Key Features". Three bordered semi-transparent cards in a row: Sponsorship (diamond icon), Donate Amount (coffee cup icon), Become a Volunteer (wheelchair icon). Each card has icon, title, description.
7. **Events** — Centered title "Upcoming Events" + carousel of event cards: each card is horizontal media layout with thumbnail image, date badge, title, description. Multiple events shown.
8. **Testimonials** — Two-column layout: left has "Testimonial from our Donors" headline + paragraph; right has carousel of testimonial cards: avatar image, quote paragraph, name, role/title.
9. **Clients Logo** — Logo carousel of client/partner logos.
10. **Footer** — Dark background (#04091e), 4-column layout: About Agency (text), Navigation Links (two columns of links), Newsletter (text + email subscribe form), InstaFeed (8 thumbnail grid). Bottom bar: copyright with Component Dock link, social icons.

## Gherkin scenarios

### Scenario: Navbar renders with navigation links and donate button
```
Given the user visits the Gracious homepage
Then the navbar displays with links: Home, Gallery, About, Events, Pages, Blog, Contact
And a "Donate Now" button is visible in the top bar
And a search icon is present in the navigation
```

### Scenario: Hero banner displays headline and CTAs
```
Given the user views the hero banner
Then a headline "We need your Help to serve the people" is visible
And a subheadline about flood victims is displayed
And a "Donate Now" primary CTA button is visible
And a "View Activity" outlined CTA button is visible
```

### Scenario: Donation stats section shows three stat cards
```
Given the user scrolls past the hero
Then three stat cards are visible: Total Donation, Total Volunteers, Future Plans
And each card displays a stat number and description
And the cards use yellow, pink, and green backgrounds respectively
```

### Scenario: Welcome section displays stats and image
```
Given the user views the welcome section
Then "Welcome to Gracious" heading is displayed
And three stat columns are visible: Total Donation, Total Projects, Total Volunteers
And a welcome image is displayed on the right
```

### Scenario: Causes section shows carousel of cause cards
```
Given the user views the causes section
Then "Our Major Causes" heading is displayed
And cause cards are shown in a carousel
And each cause card has an image, title, description, and funding info (Raised / Total Need)
```

### Scenario: Features section shows key features on dark background
```
Given the user views the features section
Then the section has a dark parallax background
And "Our Key Features" heading is displayed in white
And three feature cards are visible: Sponsorship, Donate Amount, Become a Volunteer
And each card has an icon, title, and description
```

### Scenario: Events section shows upcoming events
```
Given the user views the events section
Then "Upcoming Events" heading is displayed
And event cards are shown in a carousel
And each event card shows a thumbnail, date, title, and description
```

### Scenario: Testimonials section displays donor testimonials
```
Given the user views the testimonials section
Then "Testimonial from our Donors" heading is visible on the left
And testimonial cards are shown in a carousel on the right
And each testimonial card has an avatar, quote, name, and role
```

### Scenario: Clients logo carousel displays partner logos
```
Given the user views the clients logo section
Then multiple partner/client logos are displayed in a carousel
```

### Scenario: Footer renders with four columns and social links
```
Given the user scrolls to the footer
Then the footer displays with a dark background
And four columns are visible: About Agency, Navigation Links, Newsletter, InstaFeed
And a newsletter email input and submit button are present
And the bottom bar shows copyright with "Component Dock" link
And social icons (Facebook, Twitter, Dribbble, Behance) are visible
```

## Verification checklist

- [ ] All 10 sections match the original structure and order
- [ ] Primary brand color #ea2c58 used for CTAs, hover states, active nav
- [ ] Font family Poppins loaded from Google Fonts
- [ ] Dark sections (features, footer) use #04091e background
- [ ] Donation stat cards use correct colors: yellow #e7c12d, pink #ea2c58, green #91d214
- [ ] Testimonials section has #f9f9ff light background
- [ ] Buttons are uppercase with 40px line-height and 30px horizontal padding
- [ ] Footer links to Component Dock (no ColorLib attribution in app code)
- [ ] All placeholder images use picsum.photos with deterministic seeds
- [ ] No ColorLib references in app source (only in spec and TEMPLATES.md)
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] `npm run verify:app gracious` passes
- [ ] `public/CNAME` contains `gracious.free.componentdock.com`
- [ ] `homepage` in package.json is `https://gracious.free.componentdock.com`

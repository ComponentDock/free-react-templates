# Template: Roamwise (Travel Agency)

## Purpose

Recreation of ColorLib's **Safario** travel agency template.

- **Source slug:** `safario`
- **Source URL:** https://colorlib.com/wp/template/safario/
- **Preview URL:** https://preview.colorlib.com/theme/safario/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/safario-free-template.jpg
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript
- **Output:** `apps/roamwise` — package `@free-react-templates/roamwise`

## Design tokens

Extracted from `css/style.css` of the live preview.

| Token | Value | Notes |
|---|---|---|
| Primary | `#6059f6` | Vibrant purple-indigo; used for h1, nav hover, buttons, dropdown hover bg |
| Primary hover | `#201aa3` | Darker indigo on button hover |
| Heading color | `#2a2a2a` | h1–h6, nav links |
| Body text | `#888888` | body default |
| Gray background | `#f8f8ff` | `.bg-gray` — very light blue-gray |
| Dark background | `#04091e` | Footer background — near-black navy |
| Accent light | `#ebebff` | Light purple tint (testimonial bg, icon bg) |
| Accent medium | `#d1cff4` | Medium purple (nav submenu dropdown bg) |
| Button radius | `30px` | Pill-shaped buttons |
| Button padding | `8px 25px` (mobile), `12px 45px` (desktop) | |
| Button hover bg | `#201aa3` | |
| Body font | `"Roboto", sans-serif` | 15px, weight 400, line-height 1.667 |
| Heading font | `"Roboto Condensed", sans-serif` | weight 700, line-height 1.25 |
| Section margin | `65px` (mobile), `130px` (desktop) | Between major sections |
| Section padding | `65px` (mobile), `130px` (desktop) | For padded sections |
| Navbar | Transparent header overlaying hero; fixed on scroll with shadow |

## Gherkin requirements

### Scenario: Navbar renders with correct links

```gherkin
Given the user visits the Roamwise homepage
Then the navbar displays links: Home, About, Packages, Pages (dropdown), Blog (dropdown), Contact
And the navbar displays a "Get Started" button on the right
And the navbar is transparent and overlays the hero section
```

### Scenario: Hero banner displays headline and CTA

```gherkin
Given the user visits the Roamwise homepage
Then the hero section displays the heading "Travel More To Discover Yourself"
And a supporting paragraph text
And a "Get Started" pill button
And a hero illustration on the right
```

### Scenario: Services section shows three service cards

```gherkin
Given the user scrolls to the Services section
Then three cards are displayed: Hotel Booking, Flight Booking, Destination Booking
And each card has an icon/illustration, heading, and description
And the section heading reads "Our Popular Services"
```

### Scenario: About section displays two-column layout

```gherkin
Given the user scrolls to the About section
Then an image appears on the left
And text appears on the right with heading "Exploration is really the essence of the human spirit"
And a "Learn More" pill button
And the section has a light gray background
```

### Scenario: Tour section shows four tour cards with price overlay

```gherkin
Given the user scrolls to the Tour section
Then four tour cards are displayed in a 2-column layout
And each card shows a destination image with overlay containing tour name, duration, description, and price
And a centered heading "We offer worldwise tour plan recently" appears
```

### Scenario: Testimonials carousel displays client reviews

```gherkin
Given the user scrolls to the Testimonials section
Then the section heading reads "Our client says"
And a carousel displays testimonial cards
And each testimonial has an avatar, name, role, quote text, and a quote icon
And the section has a light gray background
```

### Scenario: Search Package form accepts tour search criteria

```gherkin
Given the user scrolls to the Search Package section
Then a form appears with fields: text search, category select, tour duration select, date picker, price range select
And a "Search Package" pill button submits the form
And descriptive text "Search suitable and affordable plan for your tour" appears to the left
```

### Scenario: Blog section shows three blog cards

```gherkin
Given the user scrolls to the Blog section
Then three blog cards are displayed
And each card has an image, title, date, comment count, and excerpt
And the section heading reads "From our Blog"
And the section has a light gray background
```

### Scenario: Footer displays four columns and social links

```gherkin
Given the user scrolls to the footer
Then four columns are displayed: About Agency, Navigation Links, Newsletter (with email input), InstaFeed (image grid)
And a bottom bar shows copyright and social media icons (Facebook, Twitter, Dribbble, Behance)
And the footer has a dark navy background (#04091e)
And the footer links to https://www.componentdock.com/
```

### Scenario: Pill-shaped buttons are styled correctly

```gherkin
Given the user views any button on the page
Then buttons have a pill shape (border-radius: 30px)
And buttons use the primary purple color (#6059f6) with white text
And button hover transitions to darker purple (#201aa3)
```

### Scenario: Typography follows design tokens

```gherkin
Given the user views any text on the page
Then body text uses Roboto font at 15px
And headings use Roboto Condensed bold
And heading color is #2a2a2a
```

## Verification checklist

- [ ] All sections present in correct order: Navbar → Hero → Services → About → Tours → Testimonials → Search Package → Blog → Footer
- [ ] Design tokens match: primary #6059f6, bg-gray #f8f8ff, footer #04091e, fonts Roboto + Roboto Condensed
- [ ] Pill buttons with border-radius 30px
- [ ] Transparent navbar overlaying hero
- [ ] Tour cards have price overlay on hover/always
- [ ] Testimonial carousel functional
- [ ] Search form with all 5 fields + submit
- [ ] Footer has 4 columns + bottom bar with Component Dock link
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] All placeholder images use picsum.photos
- [ ] Footer links to https://www.componentdock.com/

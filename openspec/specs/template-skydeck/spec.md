# Template: Skydeck (Restaurant — Fine Dining)

## Purpose

Recreation of ColorLib's **Rooftop** restaurant template as a single-page React
19 + Vite + Tailwind CSS 4 + TypeScript app.

| Field | Value |
|-------|-------|
| Source template | Rooftop (ColorLib) |
| Source URL | https://colorlib.com/wp/template/rooftop/ |
| Preview URL | https://preview.colorlib.com/theme/rooftop/ |
| Screenshot | https://colorlib.com/wp/wp-content/uploads/sites/2/rooftop-free-template-1.jpg |
| App name (new) | skydeck |
| Workspace | `@free-react-templates/skydeck` |
| Deploy target | `https://skydeck.free.componentdock.com` |

## Design tokens (from preview CSS)

| Token | Value | Notes |
|-------|-------|-------|
| Brand color | `#ad9966` | Gold / tan — used on buttons, accents, selection highlight |
| Body font | `"Roboto", sans-serif` | Google Fonts — 400, 500 weights |
| Heading font | `"Playfair Display", serif` | Google Fonts — 400 normal + italic |
| Text body | `#777777` | Paragraphs, descriptions |
| Text headings | `#000` / `#fff` | Dark headings on light bg; white headings on dark bg |
| Accent | `#ad9966` | Links, hover states, borders |
| Page bg (light sections) | `#f9f9ff` | Slight blue-gray tint |
| Page bg (white) | `#fff` | Menu area, gallery, chef quotes |
| Dark bg (banner, reservation, footer) | `#04091e` | Deep navy / near-black |
| Overlay | `rgba(0,0,0,0.85)` | Gallery hover overlay |
| Banner overlay | `rgba(173,153,102,0.85)` | Gold-tinted overlay on hero |
| Button primary | `bg: #ad9966`, `color: #fff`, `border-radius: 0px`, `border: 1px solid #ad9966` | Sharp corners, uppercase text |
| Button primary hover | `bg: transparent`, `color: #ad9966` | Ghost outline effect |
| Button dark | `bg: #000`, `color: #fff`, `border: 1px solid #fff` | Used in reservation form submit |
| Button dark hover | `bg: transparent`, `border: 1px solid #ad9966`, `color: #ad9966` | |
| Form input border | `1px solid #ad9966` | On focus |
| Footer bg | `#04091e` | Deep navy |
| Footer text | `#fff` | Widget headings uppercase |

## Gherkin requirements

### Feature: Skydeck — Restaurant Landing Page

#### Scenario: Header / Navbar renders correctly
```
Given the user visits the Skydeck page
Then the header displays a centered logo image
And the left nav contains links: Home, Menu, About
And the right nav contains: Pages (dropdown with Contact, Elements), Blog (dropdown with Blog, Blog Detail), Gallery
And the navbar collapses into a hamburger menu on mobile
```

#### Scenario: Hero / Banner section
```
Given the user sees the hero banner
Then it displays a full-width dark background image
And the heading "Skydeck" is centered in Playfair Display, white, 72px
And a horizontal rule separates the heading from the subtitle
And the subtitle reads "A Fine Dining Restaurant" in Roboto, white
And a scroll-down arrow icon links to the menu section
And fixed side links show "View Menu" and "Book a Table" on desktop
```

#### Scenario: Menu section
```
Given the user scrolls to the menu section
Then a left column shows the title "Daily Food Courses with Drinks" in Playfair Display
And a paragraph of description text appears below the title
And a "See Full Menu" primary button (gold, uppercase, sharp corners) is rendered
And the right column displays menu categories: Appetizer, Main Courses, Drinks & Juices
And each category contains at least 2 menu items with name, dotted price, and description
```

#### Scenario: Gallery section
```
Given the user views the gallery section
Then 4 food/restaurant images are displayed in a staggered 2-column grid
And the first image has a top margin offset (-480px visual push)
And the third image has a top margin offset (-280px visual push)
And each image shows an overlay on hover with a cross/zoom icon
And clicking the icon opens a lightbox/popup view
```

#### Scenario: Reservation form section
```
Given the user reaches the reservation section
Then the left side shows a booking form with fields: Event Name, Event Date (with calendar icon), Meal Preferences (select), Number of Guests (select), Budget, Contact Name, Email Address, Phone Number, Message (textarea)
And a "Send Request" dark button (black bg, white text, sharp corners) is at the bottom-right
And the right side displays the title "Book a Table or Rooms for private dining" in Playfair Display
And a description paragraph appears below the title
```

#### Scenario: Chef's Quotes section
```
Given the user scrolls to the chef's quotes section
Then the left column shows the heading "Chef's Quotes" in Playfair Display
And a quote paragraph is displayed below the heading
And a signature image appears below the quote
And the right column shows a chef portrait image
```

#### Scenario: Call to Action carousel
```
Given the user reaches the CTA carousel
Then it displays food images with overlay text boxes
And each item shows a category title (e.g. "Main Course") and description
And carousel navigation arrows allow swiping between items
```

#### Scenario: Contact section
```
Given the user views the contact section
Then the left column shows a map placeholder
And the right column shows the restaurant name "Skydeck Fine Dining Restaurant" in Playfair Display
And address lines are displayed (placeholder text)
And phone numbers are listed
And email addresses are shown
```

#### Scenario: Footer
```
Given the user reaches the footer
Then the footer has a dark navy background (#04091e)
And it contains 4 widget columns: Top Products, Quick Links, Features, Resources
And each column has a heading (uppercase, white, Roboto 500) and a list of links
And the bottom includes a copyright line
And the footer includes a link to https://www.componentdock.com/ branded as "Component Dock"
```

#### Scenario: Responsive behavior
```
Given the user views on mobile
Then the navbar collapses into a hamburger toggle
Then the gallery switches to a single-column layout
Then the reservation form stacks vertically
Then the footer columns stack into 2-column grid
And all section paddings reduce appropriately
```

## Verification checklist

- [ ] Fonts loaded: Playfair Display (headings) + Roboto (body) via Google Fonts
- [ ] Brand color `#ad9966` used on primary buttons, accents, selection highlight
- [ ] Banner has dark bg image with white centered text and scroll-down arrow
- [ ] Fixed side links ("View Menu" / "Book a Table") on desktop
- [ ] Menu section: 3 categories, items with name + dotted price + description
- [ ] Gallery: 4 images, staggered grid with offset margins, hover overlay + lightbox
- [ ] Reservation form: all fields present, dark submit button
- [ ] Chef's Quotes: heading + quote + signature + chef photo
- [ ] CTA carousel with food images + text overlays + nav arrows
- [ ] Contact section: map placeholder + address/phone/email
- [ ] Footer: dark navy bg, 4 widget columns, Component Dock link
- [ ] Sharp button corners (border-radius: 0px) throughout
- [ ] All section backgrounds match tokens (#f9f9ff, #fff, #04091e)
- [ ] Responsive: hamburger nav, stacked gallery/form/footer on mobile
- [ ] No ColorLib references in app code — provenance only in spec + TEMPLATES.md
- [ ] Footer links to https://www.componentdock.com/ as "Component Dock"
- [ ] Placeholder images use `https://picsum.photos/seed/skydeck-<n>/<w>/<h>`

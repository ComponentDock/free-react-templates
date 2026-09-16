# Template: Dwellscape (Real Estate)

## Purpose

Recreation of ColorLib **Rehomes** — a real estate agency template featuring a
full-width map hero, advanced search form, property listings, feature highlights,
property categories, CTA, blog, partner logos, and a dark overlay footer.

- **Source slug:** `rehomes`
- **Preview URL:** https://preview.colorlib.com/theme/rehomes/
- **Source screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/rehomes-free-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from `style.css` served by the preview page.

| Token | Value | Notes |
|-------|-------|-------|
| Brand color | `#92c800` | Lime green — CTA buttons, heading spans, hover states, newsletter accent |
| Heading color | `#2a303b` | Dark slate — section headings (h2), text, footer bg |
| Search form bg | `#2a303b` | Dark slate — search bar area background |
| Choose Us bg | `#f5f8fa` | Very light gray — "Why Choose Us" section |
| Badge rent | `#1bb1e8` | Sky blue — property "Rent" badge |
| Badge sale | `#f26522` | Orange — property "Sale" badge |
| Body text | `#555962` / `#636a76` | Gray shades for paragraphs, meta text |
| Light bg | `#eef2f5` | Section backgrounds |
| White | `#ffffff` | Default section backgrounds |
| Footer text | `#ffffff` | Widget titles, contact info |
| Font family | `"Lato", sans-serif` | Body and headings |
| Section heading size | 42px (desktop) | `font-weight: 400`, lowercase, span gets brand color |
| Button height | 46px | `.rehomes-btn` |
| Button min-width | 150px | Primary CTA |
| Button border-radius | 2px | Near-rectangle |
| Button hover | bg white, color `#92c800`, box-shadow | |
| Card border-radius | 5px | Property thumbs, blog thumbs, category cards |
| Footer overlay | `bg-overlay bg-overlay-2` | Dark image overlay with opacity |

## Gherkin Requirements

### Scenario: Hero section renders full-width map embed

```
Given the user visits Dwellscape
When the hero section loads
Then a full-width area is displayed with a dark overlay map background
And a headline overlay or prominent visual element is visible
```

### Scenario: Search form has filter dropdowns and search button

```
Given the user sees the search form below the hero
When the form area renders
Then there are dropdown selects for Location, Property Type, City, Bedrooms, Bathrooms
And a price range slider is shown
And a size range slider is shown
And a "Search" button with brand green background (#92c800) is displayed
```

### Scenario: Property listing section shows 6 cards in 3-column grid

```
Given the user scrolls to the property listings section
When the section heading reads "Top New In NewYork"
Then 6 property cards are displayed in a 3-column responsive grid
And each card has an image thumbnail, address title, seller info, and property details (sqft, garage, baths)
And each card shows a price badge area at the bottom
And on hover the price area turns brand green (#92c800) with white text
```

### Scenario: Why Choose Us section displays 3 feature cards

```
Given the user scrolls past the property listings
When the "Why Choose Us?" section renders on a light gray (#f5f8fa) background
Then 3 feature cards are displayed in a row
And each card has an icon, a title (h5), and descriptive text
And the feature titles are "Find Your Home", "Transportation support", "Save Your Money"
```

### Scenario: Categories by Property section shows 3 category cards

```
Given the user scrolls to the categories section
When the "Categories By Property" heading renders
Then 3 category cards are displayed with background images and gradient overlay
And each card shows a category name and "25 Properties" link
```

### Scenario: Call to Action section with parallax background

```
Given the user scrolls to the CTA section
When the section renders with a parallax background image and dark overlay
Then a headline "Download app & join now!" is displayed in white
And supporting text is shown below
And a CTA button (outline style, brand green border) is displayed
```

### Scenario: Latest News blog section shows 3 post cards

```
Given the user scrolls to the blog section
When the "Latest News" heading renders
Then 3 blog post cards are displayed in a 3-column grid
And each card has a thumbnail image, a title link, and post meta (author, date, comments)
And post titles turn brand green (#92c800) on hover
```

### Scenario: Partner logos carousel

```
Given the user scrolls to the partner section
When the partner area renders
Then a horizontal carousel of 5 partner logo images is displayed
And logos are clickable links
```

### Scenario: Footer with dark overlay background

```
Given the user scrolls to the footer
When the footer renders with a dark background image and overlay
Then 4 widget columns are displayed: Logo + about, Get Info (contact), Property Cities, Newsletter
And a newsletter form with email input and submit button is shown
And a bottom footer menu bar is displayed
And the footer links to Component Dock (https://www.componentdock.com/)
```

### Scenario: Top header bar with contact info and social links

```
Given the user visits the page
When the top header bar renders
Then email "info.colorlib@gmail.com" and phone "(12) 345 6789" are displayed
And social icons for Facebook, Twitter, LinkedIn, Instagram are shown
```

### Scenario: Main navigation with logo and menu

```
Given the user sees the main header
When the navigation renders
Then a logo image and a horizontal menu with "Home" and "Pages" (with dropdown) are shown
And a "Contact Us" button with brand green styling appears at the right
```

## Verification Checklist

- [ ] Hero: full-width map area or parallax background with overlay
- [ ] Search form: dark background (#2a303b), 6 filter dropdowns, 2 sliders, green search button
- [ ] Property listings: 6 cards, 3-col grid, image + address + seller + details + price badge
- [ ] Why Choose Us: 3 cards on #f5f8fa background, icon + title + text
- [ ] Categories: 3 cards with gradient overlay, category name + count
- [ ] CTA: parallax bg, dark overlay, headline, outline button
- [ ] Blog: 3 post cards, 3-col grid, thumb + title + meta
- [ ] Partners: logo carousel, 5 logos
- [ ] Footer: dark overlay bg, 4 columns, newsletter form, Component Dock link
- [ ] Top header: contact info, social icons
- [ ] Navigation: logo, menu with dropdown, contact button
- [ ] Colors match tokens: brand #92c800, dark #2a303b, heading spans green
- [ ] Font: Lato loaded via Google Fonts
- [ ] Responsive: mobile hamburger menu, stacked grid below lg breakpoint

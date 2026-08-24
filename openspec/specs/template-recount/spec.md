# Template: Recount (Magazine / News Blog)

## Purpose

Recreation of the ColorLib "Megasis" magazine/news template as a modern React
SPA. The original is a Bootstrap-based magazine layout with a two-tier header,
featured article hero, category grids, video gallery, newsletter subscription
footer, and dark footer with four link columns.

- **Source:** https://colorlib.com/wp/template/megasis/
- **Preview:** https://preview.colorlib.com/theme/megasis/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/megasis-colorlib-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

Extracted from the live preview stylesheet (`assets/css/style.css`).

| Token           | Value                     | Usage                                                |
| --------------- | ------------------------- | ---------------------------------------------------- |
| Brand Red       | `#C70D0D`                 | Primary CTA buttons, section accents, borders        |
| Near-Black      | `#131313`                 | Footer background, section top-borders, primary text |
| Light Grey BG   | `#F3F3F3`                 | Subscribe section background                         |
| Very Light Blue | `#f9f9ff`                 | Alternate section tint                               |
| Light Purple    | `#f0e9ff`                 | Alternate section tint                               |
| Body Text       | `#646464`                 | Secondary/body text                                  |
| Muted Text      | `#888`                    | Author bylines, meta text                            |
| Body Font       | `"Chivo"` sans-serif      | All body text, nav, buttons, form inputs             |
| Heading Font    | `"Shippori Mincho"` serif | Article headlines, section titles                    |
| Button Radius   | `0` (sharp)               | CTA buttons are rectangular, no border-radius        |
| Section Border  | `4px solid #131313`       | Top border on section titles (`.section-tittle`)     |

## Gherkin Requirements

### Scenario: Header — Top Bar

```
Given a visitor loads the page
Then the top bar displays the logo on the left
And a "Sign in" button is shown on the right
And social media icons (Facebook, Instagram, Twitter, YouTube, Vimeo, LinkedIn) appear in a row next to Sign in
```

### Scenario: Header — Sticky Navigation

```
Given the visitor scrolls past the top bar
Then the navigation bar becomes sticky at the top
And it contains category links: Home, Page (with dropdown), Science, Technology, Beauty, Health, Arts & Culture, Opinion, Videos, Gallery
And a search input appears on the right side of the nav
And a mobile hamburger menu icon appears on small screens
```

### Scenario: What's New Section

```
Given the visitor is on the homepage
Then a "What's New" section is displayed
And a large featured article occupies the left 7 columns with an image, category tag "Technology", headline, and author byline
And three smaller article cards occupy the right 5 columns, each with image, category tag, headline, and author
```

### Scenario: Arts & Culture Section

```
Given the visitor scrolls to Arts & Culture
Then a section title "Arts & Culture" appears with a "See All" link, underlined by a 4px black top-border
And three article cards are displayed in a row
And each card has an image, category tag, headline, and author
And the third card (video) shows a circular play button overlay on its image
```

### Scenario: Science Update Section

```
Given the visitor scrolls to Science Update
Then a section title "Science Update" appears with a "See All" link
And four article cards are displayed in a row
And each card has an image, category tag, headline, and author
```

### Scenario: Video Gallery Section

```
Given the visitor scrolls to Video Gallery
Then a section title "Video Gallery" appears with a "See All" link
And a large featured video card occupies the left 7 columns with a play button overlay
And three smaller video cards occupy the right 5 columns, each showing a duration badge (e.g. "5:56") and a clock icon
```

### Scenario: Science Update Carousel Section

```
Given the visitor scrolls to the second Science Update
Then a carousel/slider of article cards is displayed
And each card shows an image, category tag, headline, and author
And cards scroll horizontally or wrap in a grid
```

### Scenario: Newsletter Subscription

```
Given the visitor scrolls to the subscription area
Then a heading "Subscribe to the newsletter" is displayed
And a subtitle describes the newsletter value proposition
And an email input field with placeholder "Enter your mail" is shown
And a "Send Now" button with brand red background appears next to it
And disclaimer text about privacy is shown below
```

### Scenario: Footer

```
Given the visitor reaches the bottom
Then a dark footer (background #131313) is displayed
And four columns of links appear: About, Categories, Categories, Quick Links
And each column has a heading and a list of links
And a footer bottom bar shows copyright text
And the footer links to https://www.componentdock.com/
```

### Scenario: Back to Top

```
Given the visitor scrolls down the page
Then a "back to top" button appears
And clicking it scrolls the page to the top
```

## Verification Checklist

- [ ] Two-tier header: logo + Sign in + social icons on top; sticky nav with category links + search below
- [ ] What's New: large featured article left + 3 smaller cards right
- [ ] Arts & Culture: 3-column grid with video play overlay on third card
- [ ] Science Update: 4-column card grid
- [ ] Video Gallery: large video left + 3 duration-badged videos right
- [ ] Science Update Carousel: horizontal card slider
- [ ] Newsletter: centered heading + email input + red "Send Now" button
- [ ] Footer: dark background, 4 link columns, copyright + Component Dock link
- [ ] Back to top button functional
- [ ] Mobile responsive: hamburger menu, stacked columns
- [ ] Design tokens match: #C70D0D red, #131313 dark, Chivo + Shippori Mincho fonts, sharp button corners, 4px section top-borders

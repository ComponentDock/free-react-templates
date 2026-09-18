# Template: Podvault (Podcast/Media)

## Purpose

Recreation of ColorLib **Megapod** as a React 19 + Vite + Tailwind CSS 4 + TypeScript template.

- **ColorLib source:** https://colorlib.com/wp/template/megapod/
- **Preview URL:** https://preview.colorlib.com/theme/megapod/
- **New name:** `podvault` (apps/podvault, @free-react-templates/podvault)
- **Category:** Podcast / Media
- **Design reference:** Screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/megapod-free-template-1.jpg

## Design tokens

Extracted from the live preview CSS (`css/style.css`) and inline styles:

| Token | Value | Notes |
| --- | --- | --- |
| Font family | `"Nunito", sans-serif` | Loaded via Google Fonts / CF fonts; weights 300–900 |
| Primary brand | `#6763fd` | Vibrant indigo/purple — CTA buttons, hero icon color, track bar bg, subscriber box bg, footer links |
| Deep purple | `#673ab7` | Material deep purple (secondary accent) |
| Heading text | `#111111` | Dark headings, font-weight 400 |
| Body text | `#8d8d8d` | Paragraph text, 15px, line-height 25px |
| White text | `#ffffff` | Hero text, button text, footer text, card overlays |
| Button text dark | `#232323` | White variant button text |
| Button radius | `5px` | Primary buttons |
| Pill radius | `50px` | Track bar play button, some pill buttons |
| Card radius | `20px` | Episode cards |
| Subscriber box radius | `10px` | Newsletter signup in footer |
| Hero bg | Dark image overlay | `set-bg` with background image, dark overlay |
| Track bar bg | `rgba(104, 99, 253, 0.2)` | Translucent indigo bar below hero |
| CTA section bg | Dark image overlay | Parallax background image |
| Footer bg | Dark image overlay | `set-bg` with background image |
| Footer subscriber | `#6763fd` bg | Newsletter box with white text |
| Episode card overlay | Dark gradient | Image bg with text overlay at bottom |
| Site button | `#6763fd` bg | Subscribe button in footer form |

## Gherkin requirements

### Header

```gherkin
Feature: Header / Navbar
  Scenario: Display navigation and branding
    Given the user visits the page
    Then a header is visible with the brand logo "Podvault"
    And it has nav links: Home, About, Episodes, Pages (dropdown), Contact
    And it has a search icon on the right
    And it has social icons (Facebook, Twitter, Pinterest, Instagram, Dribbble) on the right

  Scenario: Sticky header on scroll
    Given the user scrolls down the page
    Then the header remains fixed at the top

  Scenario: Mobile hamburger menu
    Given the user is on a viewport < 992px wide
    Then a hamburger icon is visible
    And the nav links are hidden in an offcanvas menu
```

### Hero

```gherkin
Feature: Hero Section
  Scenario: Display featured episode
    Given the user visits the page
    Then a hero section is visible with a dark background image
    And it shows a featured episode date "10 Dec 2019"
    And it shows a headline "Ep 05: Astronomy Binoculars A Great"
    And it has two CTA buttons: "Subscribe with iTunes" (primary) and "Subscribe with RSS" (white)

  Scenario: Podcast preview on right side
    Given the user views the hero
    Then the right half shows a circular podcast preview image
    And a play button overlay is visible on the preview

  Scenario: Audio player track bar
    Given the user views the hero
    Then a translucent indigo track bar is visible below the hero content
    And it shows a circular album art thumbnail
    And it shows the track title "Understanding Operating" and artist "Kyle Hawkins"
    And it has a play/pause button, progress bar, volume controls, share and download links
```

### Podcast (Live & Upcoming)

```gherkin
Feature: Podcast List Section
  Scenario: Section heading and filter tabs
    Given the user scrolls to the podcast section
    Then the heading "Live & Upcoming" is visible
    And filter tabs are shown: All, Entrepreneurship, Media, Tech, Tutorials
    And "All" is the active/default filter

  Scenario: Podcast item display
    Given the user views a podcast item
    Then it shows a thumbnail image on the left
    And it shows a heart/favorite icon
    And it shows metadata: date, author, tags
    And it shows a title and description paragraph
    And it has an embedded audio player with play button, progress bar, volume, share, download

  Scenario: Filter interaction
    Given the user clicks the "Tech" filter tab
    Then only tech-category podcast items are displayed
    And "Tech" becomes the active tab
```

### Call to Action

```gherkin
Feature: Call to Action Section
  Scenario: Display donation CTA
    Given the user scrolls to the CTA section
    Then a dark background image is shown
    And the heading "Support The Show" is visible in white
    And a subtitle "Enjoy listening to our podcast? Consider making a donation!" is shown
    And a "Make a Donation" primary button is displayed
```

### Episodes (Latest Episodes)

```gherkin
Feature: Latest Episodes Grid
  Scenario: Section heading
    Given the user scrolls to the episodes section
    Then the heading "Latest Episodes" is visible

  Scenario: Episode card display
    Given the user views an episode card
    Then it shows a background image with dark overlay
    And it shows tags (e.g. "Music, Radio") in the top-left
    And it shows duration (e.g. "40 mins") in the top-right
    And it has a play button overlay in the center
    And it shows the episode title at the bottom
    And it shows the date at the bottom

  Scenario: Episode grid layout
    Given the user views the episodes section
    Then 6 episode cards are displayed in a 3-column grid (3 rows × 2 columns on md)
    And cards have rounded corners (20px radius)
```

### Footer

```gherkin
Feature: Footer
  Scenario: Newsletter subscriber box
    Given the user views the footer
    Then a purple (#6763fd) newsletter subscriber box is visible
    And it shows "Sign up for our newsletter!" heading
    And it shows an email input field
    And it has a "Subscribe" button

  Scenario: Footer bottom
    Given the user views the footer bottom
    Then the brand logo is shown
    And a copyright line is displayed with Component Dock credit
    And social media icons are shown (Facebook, Twitter, Pinterest, Instagram, YouTube)
```

## Verification checklist

- [ ] All sections render in correct order: Header → Hero → Podcast → CTA → Episodes → Footer
- [ ] Design tokens match: Nunito font, #6763fd primary, #111111 headings, #8d8d8d body text
- [ ] Hero has dark background image, featured episode text, two CTA buttons, preview image with play overlay
- [ ] Audio player track bar has translucent indigo bg, album art, track info, play/pause, progress, volume
- [ ] Podcast section has filter tabs that toggle visible/hidden items by category
- [ ] CTA section has dark bg image, centered heading + subtitle + primary button
- [ ] Episodes grid shows 6 cards with bg image, tags, duration, play overlay, title, date
- [ ] Footer has purple newsletter box, logo, copyright with Component Dock link, social icons
- [ ] Responsive: hamburger menu on mobile, stacked layout on small screens
- [ ] No references to ColorLib in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
- [ ] public/CNAME = podvault.free.componentdock.com
- [ ] "homepage" field set in package.json

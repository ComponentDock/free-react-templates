# Template: Harborly (Nonprofit Charity)

## Purpose

Recreation of ColorLib "Kare" charity template.
- Source slug: `kare`
- Source URL: https://colorlib.com/wp/template/kare/
- Preview URL: https://preview.colorlib.com/theme/kare/
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript
- Category: Nonprofit / Charity / Donation

## Design tokens (extracted from preview CSS)

| Token              | Value                          | Notes                                              |
| ------------------ | ------------------------------ | -------------------------------------------------- |
| Brand primary      | `#ea2c58`                      | Hot pink/red — buttons, accents, progress bars     |
| Brand dark         | `#222222`                      | Secondary buttons, text headings, nav links        |
| Background light   | `#f9f9ff`                      | Off-white with blue tint — alternating sections    |
| Background white   | `#ffffff`                      | White section backgrounds                          |
| Text muted         | `#777777`                      | Body text, descriptions                            |
| Text lighter       | `#999999`                      | Secondary/muted text                               |
| Progress accent    | `#f8b600`                      | Gold/yellow for progress bar fill                  |
| Accent cyan        | `#4cd3e3`                      | Light cyan accent (minor use)                      |
| Accent blue        | `#38a4ff`                      | Light blue accent (minor use)                      |
| Border light       | `#dddddd`                      | Card box-shadow color                              |
| Font family        | `"Roboto", sans-serif`         | Primary body + headings + buttons                  |
| Icon font          | Linearicons-Free               | UI icons (arrows, etc.)                            |
| Button primary     | bg `#ea2c58`, color `#fff`     | `border-radius: 0px`, `border: 1px solid #ea2c58`  |
|                    | `padding: 0 30px`, `line-height: 48px` | `font-size: 14px`, `font-weight: 500`       |
| Button secondary   | bg `#222222`, color `#fff`     | Same dimensions as primary, dark background        |
| Card               | `box-shadow: 0 7px 31px #ddd` | Cause cards and campaign boxes                     |
| Banner overlay     | `rgba(0,0,0,0.28)`            | Dark overlay on hero background image              |
| Section spacing    | `.section_gap` / `.pad_top` / `.pad_bottom` | Consistent vertical padding between sections |

## Section structure (from live preview DOM)

1. **Navbar** — Fixed top nav with logo, links (Home, Causes, Events, Pages dropdown, Blog dropdown, Contact), "Donate Now" CTA button
2. **Hero Banner** — Full-width background image with dark overlay, centered text image + description paragraph, two CTA buttons ("Donate Now" primary, "View Activity" secondary)
3. **Donation Stats** — 4-column row of stat boxes with icons: Total Donation, Fund Raised, Highest Donation, Total Donation (each with icon + heading + description)
4. **Our Major Causes** — Carousel of cause cards, each with: image, progress bar (e.g. "Funded 76%"), raised amount / goal, title, description, "Donate Here" button
5. **Make a Donation** — Donation form with radio-button amount selection ($10, $50, $100, $250), custom amount text input, "Donate Now" submit button
6. **Client Logos** — Logo carousel showing partner/sponsor logos
7. **Support Campaign** — 2-column grid of campaign boxes: thumbnail image + title + amount, progress bar with funded percentage
8. **Experience CTA** — Full-width banner with background image + dark overlay, heading, description, two CTA buttons ("Make Donation Now", "Create Fundraising Today")
9. **Footer** — 3-column layout: About Me (text), Newsletter (email signup form), Follow Us (social icons: Facebook, Twitter, Dribbble, Behance), copyright line

## Gherkin scenarios

### Navbar
- **Scenario:** Navbar displays all navigation links
  - Given the user loads the page
  - Then the navbar shows links: Home, Causes, Events, Contact
  - And a "Donate Now" CTA button is visible

- **Scenario:** Navbar becomes sticky on scroll
  - Given the user scrolls past the header area
  - Then the navbar remains fixed at the top with a solid background

### Hero Banner
- **Scenario:** Hero banner shows headline and CTAs
  - Given the user loads the page
  - Then the hero section displays a headline text image
  - And a description paragraph is visible below the headline
  - And two buttons are shown: "Donate Now" (primary) and "View Activity" (secondary)

### Donation Stats
- **Scenario:** Stats section shows four metric boxes
  - Given the user views the stats section
  - Then four stat boxes are displayed in a row
  - And each box shows an icon, a heading, and a description

### Our Major Causes
- **Scenario:** Causes carousel displays cause cards
  - Given the user views the causes section
  - Then a heading "Our Major Causes" is visible
  - And multiple cause cards are displayed in a carousel
  - And each card shows an image, progress bar, raised/goal amount, title, description, and donate button

- **Scenario:** Cause cards have working progress bars
  - Given a cause card is rendered
  - Then a progress bar shows the funded percentage
  - And the raised amount and total goal are displayed

### Make a Donation
- **Scenario:** Donation form shows preset amounts
  - Given the user views the donation section
  - Then radio buttons for $10, $50, $100, $250 are displayed
  - And a custom amount text input is available
  - And a "Donate Now" submit button is shown

- **Scenario:** User can select a donation amount
  - Given the donation form is displayed
  - When the user clicks a preset amount radio button
  - Then that amount is selected

### Client Logos
- **Scenario:** Client logos section displays partner logos
  - Given the user scrolls to the client logos section
  - Then a carousel of client/partner logos is displayed

### Support Campaign
- **Scenario:** Campaign section shows fundraiser cards
  - Given the user views the support campaign section
  - Then a heading "Support a campaign or fundraiser" is visible
  - And campaign cards are displayed in a 2-column grid
  - And each card shows a thumbnail, title, amount, and progress bar

### Experience CTA
- **Scenario:** CTA section shows call to action
  - Given the user views the experience section
  - Then a heading "Experience How your Donation Can Reach" is visible
  - And two CTA buttons are shown: "Make Donation Now" and "Create Fundraising Today"

### Footer
- **Scenario:** Footer shows three columns
  - Given the user scrolls to the footer
  - Then an "About Me" column with description text is visible
  - And a "Newsletter" column with email signup form is visible
  - And a "Follow Us" column with social media icons is visible

- **Scenario:** Footer includes Component Dock link
  - Given the user views the footer
  - Then a link to https://www.componentdock.com/ is present

## Verification checklist

- [ ] Navbar matches original: logo, all nav links, "Donate Now" CTA, sticky on scroll
- [ ] Hero banner: background image with dark overlay, headline text, description, two CTA buttons
- [ ] Donation stats: 4-column layout with icons, headings, descriptions
- [ ] Major Causes carousel: cards with images, progress bars, amounts, titles, donate buttons
- [ ] Donation form: preset radio amounts ($10, $50, $100, $250), custom input, submit button
- [ ] Client logos: logo carousel with placeholder images
- [ ] Support Campaign: 2-column grid of campaign cards with thumbnails, titles, amounts, progress bars
- [ ] Experience CTA: background image with overlay, heading, description, two CTA buttons
- [ ] Footer: 3-column (About, Newsletter, Social), copyright, Component Dock link
- [ ] Design tokens applied: #ea2c58 primary, #222222 dark, #f9f9ff light bg, Roboto font, zero border-radius buttons
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] All images use picsum.photos placeholders
- [ ] Lucide React icons used instead of Font Awesome / Linearicons
- [ ] Tests pass with 100% coverage
- [ ] Build succeeds, no TypeScript errors

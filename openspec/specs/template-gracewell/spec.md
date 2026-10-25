# Template: GraceWell (Charity / Nonprofit)
<!-- prep-status: shipped-as=warmheart -->
> **SHIPPED-UNDER** — the ColorLib `kindity` design this prep describes already
> ships as `apps/warmheart` (<https://warmheart.free.componentdock.com>).
> Do not scaffold `apps/gracewell`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-warmheart/spec.md`.

## Purpose

Recreation of the ColorLib "Kindity" charity template as a React 19 + Vite +
Tailwind CSS 4 + TypeScript single-page app.

- **Source:** <https://colorlib.com/wp/template/kindity/>
- **Preview:** <https://preview.colorlib.com/theme/kindity/>
- **Screenshot:** <https://colorlib.com/wp/wp-content/uploads/sites/2/kindity-free-template.jpg>
- **New name:** `gracewell` (app folder `apps/gracewell`, package
  `@free-react-templates/gracewell`)
- **Stack:** Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from the ColorLib preview stylesheet (`css/style.css`).

| Token              | Value                           | Notes                                  |
| ------------------ | ------------------------------- | -------------------------------------- |
| Brand primary      | `#ea2c58`                       | Hot pink/red — CTAs, donate buttons    |
| Dark background    | `#04091e`                       | Features section, footer background    |
| Light background   | `#f9f9ff`                       | Causes, testimonials sections          |
| Text primary       | `#222222`                       | Headings                               |
| Text secondary     | `#777777`                       | Body copy                              |
| Heading color      | `#04091e`                       | Dark navy headings                     |
| Nav background     | `#fff`                          | White fixed navbar                     |
| Font family        | `"Poppins", sans-serif`         | Google Font, weight 400/500/600/700   |
| Font weight (head) | 600–700                         | Bold headings                          |
| Font weight (body) | 400–500                         | Regular body, buttons                  |
| Button primary     | bg `#ea2c58`, color `#fff`     | `.main_btn` — uppercase, weight 600   |
| Button secondary   | bg `#f9f9ff`, border `#eee`    | `.ac_btn` — weight 500, color `#777`  |
| Button donate      | bg `#ea2c58`, border `#ea2c58` | `.dn_btn` — small, color `#fff`       |
| Border radius      | `0` (buttons sharp), `3px`     | Cards, minor elements                 |
| Section padding    | `120px` vertical                | `.p_120` class on major sections       |
| Parallax           | `background-attachment: fixed`  | Banner overlay background image        |


<!-- heading-role-tokens: kindity/ink/template-gracewell -->
**Heading-ink role (measured 2026-10-25):** the `heading color` row states `#04091e`, but the page declares it only for non-heading elements () — no heading rule carries it. The rendered headings paint rgb(34, 34, 34) x50, rgb(255, 255, 255) x16, rgb(119, 119, 119) x12.
<!-- /heading-role-tokens -->

### Color helpers for Tailwind `@theme`

```css
@theme {
  --color-brand: #ea2c58;
  --color-brand-dark: #d1254e;
  --color-navy: #04091e;
  --color-navy-light: #060b20;
  --color-cream: #f9f9ff;
  --color-cream-alt: #fafaff;
}
```

## Section structure (DOM order)

1. **Navbar** — Fixed white bar, logo left, nav links right, "Donate Now" CTA.
   Solid white background, scroll effect (already fixed at top).

2. **Banner / Hero** — Full-width parallax background image, centered content.
   - Heading: "We need your Help to serve the people"
   - CTA: "Donate Now" (`.main_btn`)
   - Dark overlay on background image

3. **Donation Stats** — Three colored stat cards in a row:
   - Yellow card: "Help for victims affected by flood"
   - Pink card: "Total Donation" — $2.5M
   - Green card: "Total Volunteers" — 3268
   - Plus "Future Plans" — $7.5M
   - Each card has a colored left border or background accent

4. **Welcome Section** — Two-column layout:
   - Left: "Welcome to Kindity" heading + body text
   - Right: Welcome image (`welcome-img.jpg`)
   - Below: three stat counters (2.5M, 1465, 3965)

5. **Our Major Causes** — Three-column card grid:
   - Each card: image (top), overlay with icon, title, short description
   - "Did not find your Package" text appears (likely carousel pagination)
   - Causes cards with images and overlay effects

6. **Features Section** — Dark navy background (`#04091e`):
   - White text on dark background
   - Likely feature cards or stats

7. **Events Section** — White/light background:
   - Event listings or calendar items

8. **Testimonials Section** — Light background (`#f9f9ff`):
   - Client testimonials with photos

9. **Clients Logo Section** — Logo carousel of partner/client logos

10. **Footer** — Dark navy background (`#04091e`):
    - Multiple columns: about, links, newsletter, social
    - Instagram feed widget
    - Footer bottom with copyright + social icons

## Requirements

### Feature: Navbar

#### Scenario: Fixed navigation bar

- **GIVEN** the user loads the page
- **THEN** a fixed navbar is visible at the top
- **AND** the navbar contains the logo on the left
- **AND** the navbar contains navigation links
- **AND** a "Donate Now" button is visible in the navbar
- **AND** the navbar has a white background

#### Scenario: Navbar scroll behavior

- **GIVEN** the user scrolls down the page
- **THEN** the navbar remains fixed at the top of the viewport

### Feature: Hero Banner

#### Scenario: Full-width parallax banner

- **GIVEN** the user is on the landing page
- **THEN** a full-width banner with parallax background is displayed
- **AND** the banner has a dark overlay
- **AND** the banner contains the heading "We need your Help to serve the people"
- **AND** a "Donate Now" CTA button is centered below the heading

#### Scenario: Hero CTA interaction

- **GIVEN** the user sees the banner
- **WHEN** the user clicks "Donate Now"
- **THEN** the page scrolls to the donation section

### Feature: Donation Stats

#### Scenario: Three stat cards displayed

- **GIVEN** the user views the donation area
- **THEN** three stat cards are shown in a row
- **AND** the first card has a yellow accent
- **AND** the second card has a pink accent with "Total Donation" and "$2.5M"
- **AND** the third card has a green accent with "Total Volunteers" and "3268"

#### Scenario: Stat card content

- **GIVEN** a donation stat card is visible
- **THEN** it displays an icon on the left
- **AND** it displays a stat title and value on the right

### Feature: Welcome Section

#### Scenario: Welcome content displayed

- **GIVEN** the user scrolls to the welcome section
- **THEN** a "Welcome to Kindity" heading is shown (replaced with GraceWell)
- **AND** a descriptive paragraph accompanies the heading
- **AND** a welcome image appears on the right side

#### Scenario: Welcome counters

- **GIVEN** the welcome section is visible
- **THEN** three counter stats are displayed below the text
- **AND** the counters show numeric values (e.g., 2.5M, 1465, 3965)

### Feature: Causes Section

#### Scenario: Causes card grid

- **GIVEN** the user views the causes section
- **THEN** a "Our Major Causes" heading is displayed
- **AND** three cause cards are shown in a row
    Each cause card contains:
      | element     | detail                              |
      | image       | top of card, with overlay           |
      | icon        | overlaying the image                |
      | title       | cause name                          |
      | description | short blurb                         |

#### Scenario: Cause card hover

- **GIVEN** a cause card is displayed
- **WHEN** the user hovers over the card
- **THEN** the card shows a hover effect (overlay/icon transition)

### Feature: Features Section (Dark)

#### Scenario: Features on dark background

- **GIVEN** the user scrolls to the features section
- **THEN** the section has a dark navy background (#04091e)
- **AND** the text is white or light colored
- **AND** feature items are displayed in a grid

### Feature: Events Section

#### Scenario: Events listing

- **GIVEN** the user views the events section
- **THEN** event items are displayed
    Each event item contains a date, title, and description

### Feature: Testimonials Section

#### Scenario: Testimonials display

- **GIVEN** the user views the testimonials section
- **THEN** the section has a light background (#f9f9ff)
- **AND** testimonial quotes are displayed
    Each testimonial includes a client photo and name

### Feature: Clients Logos

#### Scenario: Client logo carousel

- **GIVEN** the user views the clients section
- **THEN** a row of client/partner logos is displayed
    The logos are grayscale or low-opacity by default

### Feature: Footer

#### Scenario: Dark footer layout

- **GIVEN** the user scrolls to the footer
- **THEN** the footer has a dark navy background (#04091e)
- **AND** the footer contains multiple columns (about, links, newsletter, social)
- **AND** an Instagram feed widget is present
- **AND** the footer bottom contains copyright text
- **AND** the footer links to Component Dock

#### Scenario: Footer newsletter signup

- **GIVEN** the footer is visible
- **THEN** an email input and submit button are present for newsletter signup

## Verification checklist

- [ ] Navbar: fixed position, white background, logo, links, donate CTA
- [ ] Banner: full-width parallax, dark overlay, heading, donate CTA
- [ ] Donation stats: 3 colored cards, icons, stat values
- [ ] Welcome: two-column layout, heading, text, image, counters
- [ ] Causes: "Our Major Causes" heading, 3 cards with images + overlay
- [ ] Features: dark navy background, white text, feature grid
- [ ] Events: event listing items
- [ ] Testimonials: light background, quotes, client photos
- [ ] Clients: logo row/carousel
- [ ] Footer: dark navy, multi-column, newsletter, social, copyright, Component Dock link
- [ ] Brand color `#ea2c58` used for primary CTAs
- [ ] Font: Poppins loaded via Google Fonts
- [ ] No ColorLib references in app code
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] `public/CNAME` contains `gracewell.free.componentdock.com`
- [ ] `package.json` homepage is `https://gracewell.free.componentdock.com`

# Template: CarouselDrift (Bootstrap Carousels)

Recreation of ColorLib "Carousel V15" (https://colorlib.com/wp/template/carousel-15/).

## Purpose

CarouselDrift is a modern, responsive interactive carousel and slide showcase template featuring a hero section, an immersive multi-item carousel slider with thumbnails/controls, feature highlights, a newsletter subscription banner, and a footer linking to Component Dock.

## Design reference (replication findings)

- **Source:** ColorLib "Carousel V15" — https://colorlib.com/wp/template/carousel-15/
- **Source slug:** `carousel-15`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/bootstrap/carousel-15/ — **HTTP 200**, 3,950 B, fetched 2026-10-23 (page `<title>`: "Carousel #5"). The slug-only path `https://preview.colorlib.com/theme/carousel-15/` answers **404**; the live demo is the catalog alias above, recorded so the next prep does not repeat the probe.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/bootstrap/carousel-15/css/style.css?v=c85044a4`, fetched 2026-10-23): brand `#007bff`, `#0056b3`; dominant neutrals `#212529`, `#adb5bd`, `#b3b3b3`; type Roboto, Segoe UI. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/carousel-15.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/carouseldrift` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement 1: Navbar and Navigation

The template SHALL display a sticky or fixed header with branding, navigation links (Home, Products), and a dark-mode toggle button.

#### Scenario: Renders navbar with brand and links

- **WHEN** the page loads
- **THEN** a banner region is rendered with the site name "CarouselDrift", a Home link, and a Products link

#### Scenario: Dark mode toggle

- **WHEN** the user clicks the dark-mode toggle button
- **THEN** the document root element gains the `dark` class

#### Scenario: Dark mode cleanup on unmount

- **WHEN** dark mode is enabled and the navbar is unmounted
- **THEN** the `dark` class is removed from the document root element

### Requirement 2: Hero Section

The template SHALL display a prominent hero banner with a bold headline, descriptive subtitle, and call-to-action links to the carousel and features sections.

#### Scenario: Hero renders heading and CTAs

- **WHEN** the page loads
- **THEN** a level-1 heading "Beautiful Carousel Showcase" is displayed with an "Explore Carousel" link pointing to `#carousel` and a "View Features" link pointing to `#features`

### Requirement 3: Interactive Carousel Slider

The template SHALL display an interactive carousel with multiple slide items, each showing an image, title, and description, with prev/next navigation controls and clickable thumbnail indicators.

#### Scenario: First slide is displayed by default

- **WHEN** the carousel renders
- **THEN** the first slide title "DREAM DESTINATION" and subtitle "Tropical Paradise Resort" are visible

#### Scenario: Navigate to next slide

- **WHEN** the user clicks the "Next slide" button
- **THEN** the carousel transitions to the next slide showing "TRAVEL EXPLORATION" and "Coastal Luxury Retreat"

#### Scenario: Navigate to previous slide

- **WHEN** the user clicks the "Previous slide" button
- **THEN** the carousel transitions to the previous slide

#### Scenario: Navigate via thumbnail click

- **WHEN** the user clicks the third thumbnail button
- **THEN** the carousel shows "DISCOVER NEW PLACES" and "Oceanfront Hotel & Spa"

#### Scenario: Wrapping from last to first slide

- **WHEN** the user is on the last slide and clicks "Next slide"
- **THEN** the carousel wraps to the first slide showing "DREAM DESTINATION"

#### Scenario: Wrapping from first to last slide

- **WHEN** the user is on the first slide and clicks "Previous slide"
- **THEN** the carousel wraps to the last slide showing "DISCOVER NEW PLACES"

#### Scenario: Active thumbnail has aria-current

- **WHEN** the user navigates to a different slide
- **THEN** the active thumbnail button has `aria-current="true"` and others have `aria-current="false"`

### Requirement 4: Features and Highlights Grid

The template SHALL display a grid of feature cards showcasing key carousel capabilities, each with an icon, title, and description.

#### Scenario: Features section renders all cards

- **WHEN** the features section is displayed
- **THEN** six feature cards are rendered with titles: "Responsive Layout", "Touch & Gesture Support", "Customizable Styling", "Smooth Transitions", "Mobile-First Design", and "Thumbnail Navigation"

#### Scenario: Features section has anchor id

- **WHEN** the features section renders
- **THEN** the section element has `id="features"` for in-page linking

### Requirement 5: Newsletter Subscription

The template SHALL display a newsletter subscription form with email input, validation, loading/success states, and a privacy policy link.

#### Scenario: Newsletter renders heading and form

- **WHEN** the newsletter section is displayed
- **THEN** a "Stay Updated" heading, email input, and "Subscribe" button are present

#### Scenario: Submit with empty email shows error

- **WHEN** the user clicks Subscribe without entering an email
- **THEN** an error alert "Please enter a valid email address" is shown

#### Scenario: Submit with invalid email shows error

- **WHEN** the user enters "notanemail" and clicks Subscribe
- **THEN** an error alert "Please enter a valid email address" is shown

#### Scenario: Error clears when typing

- **WHEN** an error is displayed and the user starts typing
- **THEN** the error alert disappears

#### Scenario: Successful subscription flow

- **WHEN** the user enters "test@example.com" and clicks Subscribe
- **THEN** a "Subscribing..." loading state is shown, followed by "Subscribed!" and the email field is cleared

#### Scenario: Disabled during loading

- **WHEN** the subscription is loading
- **THEN** both the email input and submit button are disabled

#### Scenario: Disabled after success

- **WHEN** the subscription succeeds
- **THEN** both the email input and submit button remain disabled

### Requirement 6: Footer

The template SHALL display a footer with the site name, a tagline, copyright notice, and a link to https://www.componentdock.com/.

#### Scenario: Footer renders brand and Component Dock link

- **WHEN** the page loads
- **THEN** the footer displays "CarouselDrift", a tagline, copyright with current year, and a "Component Dock" link pointing to `https://www.componentdock.com/`

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/carouseldrift/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/carouseldrift/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navbar and Navigation — a banner region is rendered with the site name "CarouselDrift", a Home link, and a Products link
- [ ] Hero Section — a level-1 heading "Beautiful Carousel Showcase" is displayed with an "Explore Carousel" link pointing to `#carousel` and a "View Features" link pointing to `#features
- [ ] Interactive Carousel Slider — the first slide title "DREAM DESTINATION" and subtitle "Tropical Paradise Resort" are visible
- [ ] Features and Highlights Grid — six feature cards are rendered with titles: "Responsive Layout", "Touch & Gesture Support", "Customizable Styling", "Smooth Transitions", "Mobile-First Design", and…
- [ ] Newsletter Subscription — a "Stay Updated" heading, email input, and "Subscribe" button are present

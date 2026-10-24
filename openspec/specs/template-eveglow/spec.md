# Template: EveGlow (Coming Soon)
<!-- prep-status: shipped-as=overture -->
> **SHIPPED-UNDER** — the ColorLib `06-comming-soon` design this prep describes already
> ships as `apps/overture` (<https://overture.free.componentdock.com>).
> Do not scaffold `apps/eveglow`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-overture/spec.md`.

## Purpose

Recreation of ColorLib's "Coming Soon V21" template (slug: `06-comming-soon`).
Preview: https://colorlib.com/etc/cs/06-comming-soon.html
Source page: https://colorlib.com/wp/template/06-comming-soon/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-21.jpg

A single-section, full-viewport coming-soon page with a dramatic mountain
landscape background, centered countdown timer, notification CTA, and social
media icons. Minimal, single-page layout — no navigation, no multi-section flow.

Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. Google Fonts (Open Sans
+ Poppins) loaded via `<link>` in `index.html`. Placeholder hero image from
`picsum.photos`. Icons from `lucide-react`.
- **Source design:** ColorLib "06 Comming Soon" — https://colorlib.com/wp/template/06-comming-soon/

## Design Tokens

Extracted from the original CSS (`06-comming-soon/css/styles.css`).

### Colors

| Token               | Value     | Usage                                   |
| ------------------- | --------- | --------------------------------------- |
| brand-pink          | `#F84982` | CTA button bg/border, countdown numbers |
| brand-pink-hover    | `#E45F74` | Link hover accent                       |
| text-primary        | `#333`    | Body text, countdown label              |
| text-secondary      | `#555`    | Subtitle / description                  |
| overlay-black       | `#000`    | Dark overlay at 40% opacity             |
| white               | `#FFFFFF` | Countdown circles, button text           |
| social-facebook     | `#2A61D6` | Facebook icon circle                    |
| social-twitter      | `#3AA4F8` | Twitter icon circle                     |
| social-google       | `#F43846` | Google+ icon circle                     |
| social-instagram    | `#8F614A` | Instagram icon circle                   |
| social-pinterest    | `#E1C013` | Pinterest icon circle                   |

### Fonts

| Role       | Family        | Weights     | Notes                       |
| ---------- | ------------- | ----------- | --------------------------- |
| Body       | Open Sans     | 400, 600    | Base text, labels           |
| Headings   | Poppins       | 500         | h1–h3 only (title text)     |

### Spacing & Sizing

- Page padding: `20px` all sides
- Main content box: full height minus 40px, centered via `display: table`
- Dark overlay: `rgba(0,0,0,0.4)` absolutely positioned behind content
- Box shadow on main area: `2px 5px 30px rgba(0,0,0,0.3)`

### Button (Notify CTA)

- Border-radius: `50px` (pill)
- Border: `2px solid #F84982`
- Background: `#F84982`
- Text color: `#fff`, font-weight: `700`, uppercase
- Hover: transparent background (outline only), pink border remains

### Countdown Circles

- Diameter: `90px × 90px`
- Border-radius: `100px` (perfect circle)
- Background: `#fff`
- Number text: `#F84982`, font-size `2em`, weight `500`
- Label text: `#333`, font-size `0.9em`, weight `600`

### Social Icons

- Diameter: `35px × 35px`, border-radius `40px` (circle)
- Each icon gets a unique brand color (see table above)
- Hover: white background

## Requirements

### Feature: EveGlow Coming Soon Page

The template is a single full-viewport section with background image, centered
content, countdown timer, CTA button, and social icons.

#### Scenario: Full-viewport background image

- **GIVEN** the page loads
- **THEN** a full-viewport background image covers the entire page
- **AND** a semi-transparent dark overlay (40% black) is displayed over the image
- **AND** the content is vertically centered within the viewport

#### Scenario: Title text

- **GIVEN** the page loads
- **THEN** the heading "Coming Soon" is displayed centered
- **AND** the heading uses Poppins font
- **AND** the heading is white
- **AND** the heading is large (3.5em equivalent)

#### Scenario: Description text

- **GIVEN** the page loads
- **THEN** a description paragraph is displayed below the title
- **AND** the description reads "Our website is currently undergoing scheduled maintenance. We should be back shortly. Thank you for your patience."
- **AND** the description text is white
- **AND** the description is centered with a max-width of approximately 500px

#### Scenario: Countdown timer

- **GIVEN** the page loads
- **THEN** a countdown timer is displayed with four circular badges
- **AND** each badge shows a number (days, hours, minutes, seconds)
- **AND** each badge is a white circle (90px diameter)
- **AND** the number inside each badge is pink (#F84982)
- **AND** each badge has a label below the number ("Days", "Hours", "Mins", "Sec")
- **AND** the countdown ticks down to a target date

#### Scenario: Notify Us button

- **GIVEN** the page loads
- **THEN** a "NOTIFY US" button is displayed below the countdown
- **AND** the button has a pink background (#F84982)
- **AND** the button has a pill shape (border-radius 50px)
- **AND** the button text is white and uppercase
- **WHEN** the user hovers the button
- **THEN** the background becomes transparent (outline style)

#### Scenario: Social media icons

- **GIVEN** the page loads
- **THEN** a "Follow us for update" label is displayed at the bottom
- **AND** five circular social icons are displayed in a row
- **AND** the Facebook icon has a blue circle (#2A61D6)
- **AND** the Twitter icon has a light blue circle (#3AA4F8)
- **AND** the Google+ icon has a red circle (#F43846)
- **AND** the Instagram icon has a brown circle (#8F614A)
- **AND** the Pinterest icon has a yellow circle (#E1C013)
- **WHEN** the user hovers any social icon
- **THEN** the icon circle turns white

#### Scenario: Responsive layout

- **GIVEN** the page loads on a mobile device
- **THEN** the layout stacks vertically and remains centered
- **AND** the countdown circles remain visible
- **AND** the social icons remain visible and tappable
- **AND** the text remains legible

#### Scenario: Accessibility

- **GIVEN** the page loads
- **THEN** the heading is a semantic h1 element
- **AND** the social icons have descriptive aria-labels
- **AND** the Notify button is a semantic button element
- **AND** the countdown numbers have appropriate aria attributes

#### Scenario: Footer branding

- **GIVEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the footer text reads "Component Dock"
- **AND** no ColorLib branding or attribution is present

## Verification checklist

- [ ] Background image covers full viewport with dark overlay
- [ ] Title "Coming Soon" in Poppins, white, centered, 3.5em
- [ ] Description text centered, white, max-width ~500px
- [ ] Countdown timer with 4 white circular badges (90px)
- [ ] Countdown numbers in pink (#F84982), labels in dark (#333)
- [ ] Countdown ticks down to a configurable target date
- [ ] "NOTIFY US" button: pink pill, outline on hover
- [ ] 5 social icons with brand-specific circle colors
- [ ] Social icons turn white on hover
- [ ] "Follow us for update" label above social icons
- [ ] Fully responsive (mobile, tablet, desktop)
- [ ] Semantic HTML (h1, button, nav, aria-labels)
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Vite build succeeds
- [ ] Typecheck passes

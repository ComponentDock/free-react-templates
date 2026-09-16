# Template: EveGlow (Coming Soon)

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

## Gherkin Requirements

### Feature: EveGlow Coming Soon Page

The template is a single full-viewport section with background image, centered
content, countdown timer, CTA button, and social icons.

#### Scenario: Full-viewport background image
  Given the page loads
  Then a full-viewport background image covers the entire page
  And a semi-transparent dark overlay (40% black) is displayed over the image
  And the content is vertically centered within the viewport

#### Scenario: Title text
  Given the page loads
  Then the heading "Coming Soon" is displayed centered
  And the heading uses Poppins font
  And the heading is white
  And the heading is large (3.5em equivalent)

#### Scenario: Description text
  Given the page loads
  Then a description paragraph is displayed below the title
  And the description reads "Our website is currently undergoing scheduled maintenance. We should be back shortly. Thank you for your patience."
  And the description text is white
  And the description is centered with a max-width of approximately 500px

#### Scenario: Countdown timer
  Given the page loads
  Then a countdown timer is displayed with four circular badges
  And each badge shows a number (days, hours, minutes, seconds)
  And each badge is a white circle (90px diameter)
  And the number inside each badge is pink (#F84982)
  And each badge has a label below the number ("Days", "Hours", "Mins", "Sec")
  And the countdown ticks down to a target date

#### Scenario: Notify Us button
  Given the page loads
  Then a "NOTIFY US" button is displayed below the countdown
  And the button has a pink background (#F84982)
  And the button has a pill shape (border-radius 50px)
  And the button text is white and uppercase
  When the user hovers the button
  Then the background becomes transparent (outline style)

#### Scenario: Social media icons
  Given the page loads
  Then a "Follow us for update" label is displayed at the bottom
  And five circular social icons are displayed in a row
  And the Facebook icon has a blue circle (#2A61D6)
  And the Twitter icon has a light blue circle (#3AA4F8)
  And the Google+ icon has a red circle (#F43846)
  And the Instagram icon has a brown circle (#8F614A)
  And the Pinterest icon has a yellow circle (#E1C013)
  When the user hovers any social icon
  Then the icon circle turns white

#### Scenario: Responsive layout
  Given the page loads on a mobile device
  Then the layout stacks vertically and remains centered
  And the countdown circles remain visible
  And the social icons remain visible and tappable
  And the text remains legible

#### Scenario: Accessibility
  Given the page loads
  Then the heading is a semantic h1 element
  And the social icons have descriptive aria-labels
  And the Notify button is a semantic button element
  And the countdown numbers have appropriate aria attributes

#### Scenario: Footer branding
  Given the page loads
  Then the footer contains a link to https://www.componentdock.com/
  And the footer text reads "Component Dock"
  And no ColorLib branding or attribution is present

## Verification Checklist

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

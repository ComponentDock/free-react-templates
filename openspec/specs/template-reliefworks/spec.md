# Template: ReliefWorks (Charity Foundation)

## Purpose

React 19 + Vite + Tailwind CSS 4 + TypeScript recreation of the ColorLib
"Charity Works" template — a charity foundation website designed to raise
awareness and showcase donation causes, volunteer teams, and events.

- **Source:** ColorLib "Charity Works" — https://colorlib.com/wp/template/charity-works/
- **Preview (original):** https://preview.colorlib.com/theme/charityworks/
- **Screenshot (fallback reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/charityworks-free-template.jpg
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript
- **Package:** `@free-react-templates/reliefworks`
- **Deploy target:** `reliefworks.free.componentdock.com`

> Note: The original ColorLib preview URL returns 404 at
> `preview.colorlib.com/theme/charity-works/` but works at
> `preview.colorlib.com/theme/charityworks/`. Screenshot used as secondary
> reference. Design tokens extracted from the live preview stylesheet.

## Design Tokens

### Colors

| Token              | Hex       | Usage                                           |
| ------------------ | --------- | ----------------------------------------------- |
| `--brand-green`    | `#09cc7f` | Primary brand color (CTAs, highlights, accents) |
| `--brand-navy`     | `#1f2b7b` | Secondary (secondary buttons, outlines)         |
| `--brand-dark`     | `#072366` | Navbar text, dark accents                       |
| `--heading-color`  | `#002d5b` | Hero heading and major headings                 |
| `--text-gray`      | `#64676c` | Body text color                                 |
| `--bg-light`       | `#f8fcff` | Service area, WantToWork section backgrounds    |
| `--bg-white`       | `#ffffff` | Card backgrounds                                |
| `--white`          | `#fff`    | Text on dark/parallax backgrounds               |
| `--count-bg`       | parallax  | Counter section (dark overlay on parallax img)  |

### Typography

- **Font family:** `"Mulish", sans-serif` (Google Fonts, originally "Muli" rebranded to Mulish)
- **Hero heading:** 70px, weight 800, color `#002d5b`, line-height 1.2
- **Section headings:** bold, centered, with bottom margin (~80px mb)
- **Body text:** 16px, color `#64676c`, line-height 1.6
- **Counter text:** 40px, weight 700, uppercase, white

### Buttons

- **Primary (hero):** green `#09cc7f` bg, white text, padding 30px 62px, border-radius 5px, hover darkens
- **White button:** white bg, navy `#072366` text, padding 30px 39px, border-radius 5px
- **Secondary (navy):** `#1f2b7b` bg, white text, border-radius 5px
- **Outlined:** transparent bg, `#1f2b7b` border + text, border-radius 5px

### Layout & Spacing

- **Section padding standard:** 120px top/bottom
- **Section padding large (about area):** 200px top/bottom
- **Card border-radius:** 6px
- **Avatar border-radius:** 50% (circular)
- **Hero section:** full-width background image, text left-aligned
- **Parallax sections:** fixed background-attachment for events, counter areas

## Requirements (Gherkin)

### Scenario: Header renders with top bar and sticky navigation

```gherkin
Given the user visits the ReliefWorks page
Then a top bar is visible with phone number and email
And a language selector dropdown is shown
And a "Subscribe Now" link is present
And social media icons (Twitter, Facebook, LinkedIn, Google) are shown
And a sticky navigation bar with logo and menu links is visible
And a "Donate" button is in the header
```

### Scenario: Hero section displays mission headline and CTAs

```gherkin
Given the user is on the ReliefWorks homepage
Then the hero section shows a background image
And the heading "We Are In A Mission To Help The Helpless" is displayed
And two buttons are present: "Donate" and "About US"
```

### Scenario: Services section shows three service cards

```gherkin
Given the user scrolls to the services section
Then the section has a light background (#f8fcff)
And three service cards are displayed
And each card has an icon, a title, and a short description
And cards have white background with rounded corners (border-radius: 6px)
```

### Scenario: About section shows mission description and CTAs

```gherkin
Given the user scrolls to the about section
Then the heading "We Are In A Mission To Help Helpless" is shown
And a paragraph describes the charity's mission
And a left-aligned image is displayed alongside the text
And an "About US" button and a "Become A Volunteer" button are present
```

### Scenario: Our Causes section shows causes with progress bars

```gherkin
Given the user scrolls to the causes section
Then the heading "Explore our latest causes that we works" is displayed
And three cause cards are shown
And each cause card has an image, title, and donation progress bar
And a "Donate" link is on each card
```

### Scenario: Featured Events section with parallax background

```gherkin
Given the user scrolls to the events section
Then a parallax background image is displayed
And the heading "We arrange many social events for charity donations" is shown
And the section has a dark overlay treatment
```

### Scenario: Team section shows volunteer profiles

```gherkin
Given the user scrolls to the team section
Then the heading "Our Expert Volunteer Alwyes ready" is displayed
And four team member cards are shown
And each card has a circular avatar image, name, and role
And social media icons are below each member
```

### Scenario: CTA / WantToWork section

```gherkin
Given the user scrolls to the call-to-action section
Then the heading "Lets Chenge The World With Humanity" is displayed
And a "Become A Volunteer" button is shown
And the section has a light background
```

### Scenario: Testimonials section with slider

```gherkin
Given the user scrolls to the testimonials section
Then a testimonial slider is displayed
And each testimonial shows a quote, name, and role
And dot navigation indicators allow switching between testimonials
```

### Scenario: Blog section shows recent posts

```gherkin
Given the user scrolls to the blog section
Then the heading "Latest News from our recent blog" is displayed
And three blog post cards are shown
And each card has an image, date, title, and excerpt
```

### Scenario: Counter / Funfact section with stats

```gherkin
Given the user scrolls to the counter section
Then a parallax background is displayed
And four statistic counters are shown in white text
And counters show animated numbers (e.g., total donations, volunteers, events)
```

### Scenario: Footer with three columns and copyright

```gherkin
Given the user scrolls to the footer
Then three columns are displayed: Contact Info, Important Links, and Newsletter
And a newsletter signup form with email input is present
And social media icons are shown
And a copyright bar with Component Dock link is at the bottom
```

### Scenario: Responsive layout

```gherkin
Given the user views the page on a mobile device
Then the navigation collapses into a hamburger menu
And service cards stack vertically
And the about section stacks image above text
And the footer columns stack vertically
```

## Verification Checklist

- [ ] All sections match the original order: Header → Hero → Services → About → Causes → Events → Team → CTA → Testimonials → Blog → Counter → Footer
- [ ] Brand green `#09cc7f` used for primary buttons and accents
- [ ] Navy `#1f2b7b` used for secondary buttons and outlined elements
- [ ] Mulish font loaded from Google Fonts
- [ ] Hero section has background image placeholder via picsum.photos
- [ ] Parallax sections use `bg-fixed` or equivalent Tailwind class
- [ ] Cards use white background with 6px border-radius
- [ ] Team avatars are circular (50% border-radius)
- [ ] Footer links to Component Dock (`https://www.componentdock.com/`)
- [ ] No references to ColorLib in any app source files
- [ ] Placeholder images via `picsum.photos/seed/reliefworks-<n>/<w>/<h>`
- [ ] Icons from `lucide-react`
- [ ] `packages/ui` components reused where applicable (Button, ButtonLink, etc.)
- [ ] Tests written first (TDD), 100% coverage on changed files
- [ ] Spec validates: `npm run spec:validate`

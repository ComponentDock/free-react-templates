# Template: FitPulse (Gym / Fitness)

## Purpose

Recreation of ColorLib **Fitnessclub** template.
- Source slug: `fitnessclub`
- Preview URL: https://preview.colorlib.com/theme/fitnessclub/
- Source screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/fitnessclub-free-template.jpg
- Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Section structure (from preview DOM)

1. **Header / Navbar** — sticky transparent header with logo, nav links (Home, About, Classes, Schedule, Trainer, Blog, Contact, Club), and a dark blue "become a member" CTA button. Right side has a hamburger menu for mobile.

2. **Hero / Slider** — full-width image carousel (2 slides). Each slide has:
   - Subtitle: "with patrick potter"
   - Headline (h1): "Build Perfect body Shape for good and Healthy life."
   - CTA button: "become a member" (red #f04e3c background)
   - Background image

3. **About** — split layout: left image (with play-button video popup overlay), right text area with subtitle "ABOUT OUR GYM", heading "Safe Body building proper Solutions That Saves our Valuable Time!", two paragraphs of body text, and a "become a member" button.

4. **Services** — dark section background (image: section_bg01.png), subtitle "OUR SERVICES FOR YOU", heading "PUSH YOUR LIMITS FORWARD We Offer to you". Three service cards in a row: each with an icon, title, short description, and "Discover More About Us →" link. "More Services" button on the right.

5. **Testimonials** — split layout: left image (gym interior), right testimonial carousel. Subtitle "Client Feedback", heading "What Our Client think about our gym". Two testimonials: quote text + author name (Jhon Smith) + role (Gym Trainer).

6. **Gallery** — masonry-style grid: one large image on left, four smaller images stacked in 2x2 on right. Each image has an overlay arrow link. Title "Best fitness gallery" and category "Fitness, Body" on each.

7. **Team** — subtitle "OUR TEAM MEMBERS", heading "Our Most Experienced Trainers". Three team member cards in a row: photo, name, role ("Creative director"). Card hover reveals social icons overlay.

8. **Membership CTA** — dark background (section_bg02.png), centered: "April membership offer available Now" heading with a "become a member" button.

9. **Schedule / Timetable** — subtitle "OUR TIME SCHEDULE", heading "SELECT THE PERFECT TIME YOU NEED NOW". Day-of-week tab bar (Saturday–Friday). Each tab shows a list of classes with time, class name, and trainer name.

10. **Contact** — split layout: left info (address, phone, email), right form (name, email, subject, message fields + "Send Message" button).

11. **Blog** — subtitle "RECENT NEWS FROM BLOG", heading "GYM TIPS NEWS FOR YOU THAT SELECTED BY US". Three blog cards: date badge (day + "Now"), author name, title, and link.

12. **Footer** — dark background (section_bg03.png). Four columns: Company (links), Open Hours (schedule), Resources (links), and a text blurb. Bottom row: logo, "Made with Component Dock" attribution, scroll-to-top button.

## Design tokens (from preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#1f2b7b` (dark blue) | Navbar CTA, active states, headings |
| Secondary | `#2c234d` (dark purple) | Dark backgrounds, footer |
| Accent | `#f04e3c` (red) | Hero buttons, CTAs, highlights |
| Highlight | `#4cd3e3` (cyan) | Hover states, accents |
| Warning | `#f4e700` (yellow) | Decorative accents |
| Background light | `#f9f9ff` (lavender) | Page background |
| Background accent | `#f0e9ff` (light purple) | Section backgrounds |
| Text primary | `#112957` (navy) | Headings |
| Text body | `#999999` | Body text |
| Text muted | `#888888` | Secondary text |
| White | `#fff` | Card backgrounds |
| Font display | `"Teko", sans-serif` | Headings, hero text (uppercase, bold) |
| Font body | `"Barlow", sans-serif` | Body text, nav, buttons |
| Button radius | `0` (sharp edges) | Primary buttons are rectangular |
| Section padding | `30px–150px` vertical | Between sections |

## Gherkin scenarios

### Scenario: Header renders with navigation and CTA
```
Given the user visits the FitPulse homepage
Then the header is visible with a sticky/transparent position
And the logo is displayed on the left
And navigation links are present: Home, About, Classes, Schedule, Trainer, Blog, Contact, Club
And a "become a member" button is displayed in the header right area
```

### Scenario: Hero slider displays gym headline
```
Given the user visits the FitPulse homepage
Then the hero slider is visible full-width
And the headline reads "Build Perfect body Shape for good and Healthy life."
And a subtitle "with patrick potter" is shown above the headline
And a "become a member" CTA button is displayed
And the slider transitions between at least 2 slides
```

### Scenario: About section shows gym info
```
Given the user scrolls to the About section
Then the section shows "ABOUT OUR GYM" subtitle
And the heading reads "Safe Body building proper Solutions That Saves our Valuable Time!"
And a gym image is displayed on the left side
And a video play button overlay is on the image
And two paragraphs of descriptive text are shown
And a "become a member" button is present
```

### Scenario: Services section shows three service cards
```
Given the user scrolls to the Services section
Then the section has a dark background
And the subtitle reads "OUR SERVICES FOR YOU"
And the heading reads "PUSH YOUR LIMITS FORWARD We Offer to you"
And exactly three service cards are displayed in a row
And each card has an icon, title, and short description
And each card has a "Discover More About Us" link
And a "More Services" button is visible
```

### Scenario: Testimonials show client feedback
```
Given the user scrolls to the Testimonials section
Then the subtitle reads "Client Feedback"
And the heading reads "What Our Client think about our gym"
And a gym image is displayed on the left side
And at least two testimonials are shown in a carousel
And each testimonial shows quote text, author name, and role
```

### Scenario: Gallery shows fitness images in masonry grid
```
Given the user scrolls to the Gallery section
Then a masonry-style grid of fitness images is displayed
And one large image is on the left
And four smaller images are stacked in a 2x2 grid on the right
And each image has an arrow link overlay
And each image shows "Best fitness gallery" title
```

### Scenario: Team section displays trainer cards
```
Given the user scrolls to the Team section
Then the subtitle reads "OUR TEAM MEMBERS"
And the heading reads "Our Most Experienced Trainers"
And three trainer cards are displayed in a row
And each card shows a photo, name, and role ("Creative director")
And hovering a card reveals social media icon overlays
```

### Scenario: Membership CTA section
```
Given the user scrolls to the Membership CTA section
Then a dark background section is displayed
And the heading reads "April membership offer available Now"
And a "become a member" button is centered below the heading
```

### Scenario: Schedule section shows class timetable
```
Given the user scrolls to the Schedule section
Then the subtitle reads "OUR TIME SCHEDULE"
And the heading reads "SELECT THE PERFECT TIME YOU NEED NOW"
And a day-of-week tab bar is shown (Saturday through Friday)
And each tab shows a list of classes with time, name, and trainer
```

### Scenario: Contact section with form
```
Given the user scrolls to the Contact section
Then contact information is displayed on the left (address, phone, email)
And a form is displayed on the right with fields: name, email, subject, message
And a "Send Message" button is at the bottom of the form
```

### Scenario: Blog section shows recent posts
```
Given the user scrolls to the Blog section
Then the subtitle reads "RECENT NEWS FROM BLOG"
And the heading reads "GYM TIPS NEWS FOR YOU THAT SELECTED BY US"
And three blog post cards are displayed
And each card shows a date badge, author name, and post title
```

### Scenario: Footer renders with columns and attribution
```
Given the user scrolls to the Footer
Then a dark background footer is displayed
And four columns are present: Company, Open Hours, Resources, and text blurb
And Company links include: About Us, Company, Press & Blog, Privacy Policy
And Open Hours lists daily schedules
And Resources links include: Home Insurance, Travel Insurance, etc.
And the footer bottom shows a logo and "Made with Component Dock" attribution
And a scroll-to-top button is present
```

## Verification checklist

- [ ] Header is sticky/transparent with all nav links and CTA
- [ ] Hero slider has 2+ slides with correct headline and subtitle
- [ ] About section has split layout (image + text) with video overlay
- [ ] Services section has dark bg + 3 service cards with icons
- [ ] Testimonials has carousel with quotes and author info
- [ ] Gallery is masonry grid (1 large + 4 small images)
- [ ] Team has 3 cards with photo/name/role + hover overlay
- [ ] Membership CTA is dark bg with centered heading + button
- [ ] Schedule has tab bar with days + class listings
- [ ] Contact has split layout with form + info
- [ ] Blog has 3 post cards with date/author/title
- [ ] Footer has 4 columns, dark bg, Component Dock attribution
- [ ] All fonts loaded: Barlow (body) + Teko (display)
- [ ] Brand colors applied: #1f2b7b (primary), #f04e3c (accent), #2c234d (dark)
- [ ] Buttons are rectangular (no border-radius)
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/

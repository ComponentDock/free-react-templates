# Template: LearnVault (Education / E-Learning Platform)

## Purpose

LearnVault is a single-page education/e-learning platform landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Unicat" free template (source:
https://colorlib.com/wp/template/unicat/), built under a DIFFERENT name
(**LearnVault**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 + jQuery 3.x multi-section landing page with an
Owl Carousel hero slider, parallax image backgrounds, counter/milestone stats,
event cards, team profiles, news posts, and newsletter signup. It uses the
Google Fonts "Roboto" (sans-serif body) and "Roboto Slab" (serif headings)
with a sky-blue primary brand color (#14bdee) and salmon accent (#ffa07f).

**WHAT MAKES LEARNVAULT DISTINCT (signature behaviors):**

1. **Dual-font education theme.** Body text in Roboto (sans-serif), headings
   in Roboto Slab (serif) — a clear visual hierarchy that signals academic
   authority. Most other templates use a single font family.
2. **Full-width hero slider with search form.** The hero section is an Owl
   Carousel of 3 slides, each with a dark overlay background image, a
   headline ("The Premium System Education"), a subtitle, and a 3-field
   search form (keyword text input, category select, price type select +
   search button) — not a simple CTA but a functional search bar.
3. **Sky-blue (#14bdee) primary with salmon (#ffa07f) accent.** The primary
   blue is used for buttons, links, active states, and the search icon;
   the salmon appears on the active underline indicator and certain
   section accents. Footer uses dark navy (#1e2434) and near-black
   (#232323).
4. **Parallax backgrounds on multiple sections.** The courses section,
   team section, counter/register section, newsletter, and footer all
   use parallax-scrolling background images (data-parallax="scroll"),
   creating a layered visual depth.
5. **Counter section with registration form.** A two-column layout: left
   has "Register Now" title + 4 milestone counters (15 years, 120k
   students, 670+ courses, 320 awards) that animate on scroll; right
   has a registration form (name, phone, subject select, message
   textarea, submit button).
6. **Event cards with date badges.** Three event cards each with an
   image, a colored date badge (day number + month abbreviation), title,
   time/location info, and description. Date badges use the primary blue.
7. **Team member profiles with social links.** Four team members on a
   parallax background, each with a photo, name, specialty, and
   Facebook/Twitter/Google+ social icon row.

## Design tokens (from live stylesheet + preview DOM)

| Token             | Value                                           | Use                                                                   |
| ----------------- | ----------------------------------------------- | --------------------------------------------------------------------- |
| Font body         | 'Roboto', sans-serif                            | All body text, inputs, nav links                                       |
| Font heading      | 'Roboto Slab', serif                            | Section titles, feature titles, course titles, team names, logo       |
| Brand primary     | #14bdee (sky blue)                              | Buttons, links, active nav, search icon, counter/date accents         |
| Accent warm       | #ffa07f (salmon)                                | Active underline, decorative accents                                  |
| Text dark         | #384158 (navy)                                  | Headings, nav text, body text                                         |
| Text gray         | #76777a, #a5a5a5                                | Subtitles, secondary text, meta                                      |
| Background light  | #f3f3f3                                         | Top bar, feature section bg                                           |
| Background white  | #FFFFFF                                         | Header, courses section, events section                               |
| Background dark   | #1e2434 (dark navy), #232323 (near-black)      | Footer background, counter form                                       |
| Brown accent      | #937c6f                                         | Secondary accent (counter section)                                    |
| Error / alert     | #db5246 (red), #FF6347 (tomato)                | Validation errors, alert states                                       |
| Gold              | #ffc80a                                         | Star rating icons                                                     |
| Border            | #e5e5e5 (light gray)                            | Card borders, dividers                                                |
| Border radius     | 3px (small), 5px, 6px (cards)                   | Buttons, inputs, cards, course cards                                  |
| Button style      | Solid bg, 3px radius, no border, uppercase      | Search buttons, newsletter subscribe, counter submit                  |
| Input style       | Borderless with border on focus, 3px radius     | Search inputs, newsletter email, registration form                    |
| Section spacing   | ~90px vertical padding per section              | Consistent rhythm throughout                                          |
| Parallax          | data-parallax="scroll" on bg images             | Courses, counter, team, newsletter, footer backgrounds                |

## Section order (from preview DOM)

1. **TopBar** — thin strip with "Have any questions?", phone number, email,
   and "Register or Login" button (right-aligned)
2. **Header** — logo "LearnVault" (text: "Learn" + "Vault" span), nav links
   (Home, About, Courses, Blog, Page, Contact), search icon, cart icon,
   hamburger menu for mobile
3. **HeroSlider** — full-width carousel (3 slides), each with background
   image, headline, subtitle, and search form (keyword + category select +
   price select + search button)
4. **Features** — 4-column grid: "The Experts", "Book & Library",
   "Best Courses", "Award & Reward" — each with icon, title, description
5. **Courses** — parallax background, 3 course cards with image, title,
   teacher name, price tag, and "view all courses" button
6. **Counter** — split layout: left = "Register Now" + milestones (15 years,
   120k, 670+, 320) animated counters; right = registration form (name,
   phone, subject, message, submit)
7. **Events** — 3 event cards with image, date badge (day/month), title,
   time, location, description
8. **Team** — parallax background, 4 team members with photo, name,
   specialty, social icons (Facebook, Twitter, Google+)
9. **News** — large featured post (image, title, meta, text, read more) +
   4 small sidebar posts (title + meta)
10. **Newsletter** — parallax background, title + subtitle, email input +
    subscribe button
11. **Footer** — dark background, 4 columns: About (logo, text, social
    icons), Contact info, Links, Mobile app images; copyright bar at bottom

## Gherkin requirements

```gherkin
Feature: LearnVault Education Platform Landing Page

  Background:
    Given the user opens "https://learnvault.free.componentdock.com"
    And the page loads successfully

  Scenario: TopBar displays contact information
    Then the top bar shows "Have any questions?"
    And the phone number "001-1234-88888" is visible
    And the email "info.deercreative@gmail.com" is visible
    And a "Register or Login" link is present

  Scenario: Header navigation
    Then the logo text reads "LearnVault"
    And the navigation contains links: Home, About, Courses, Blog, Page, Contact
    And a search icon button is visible
    And a cart icon is visible

  Scenario: Hero slider displays educational content
    Then the hero section shows a heading "The Premium System Education"
    And the subtitle "Future Of Education Technology" is visible
    And a search form with keyword input, category select, price select, and search button is present
    And the search button text reads "search"

  Scenario: Features section shows 4 items
    Then 4 feature cards are visible
    And the first feature is titled "The Experts"
    And the second feature is titled "Book & Library"
    And the third feature is titled "Best Courses"
    And the fourth feature is titled "Award & Reward"

  Scenario: Courses section displays popular courses
    Then the section heading reads "Popular Online Courses"
    And 3 course cards are visible
    And each course card has an image, title, teacher name, and price
    And a "view all courses" link is present

  Scenario: Counter section shows milestones and registration
    Then the left side shows "Register Now" heading
    And 4 milestone counters are visible with values
    And the right side shows a registration form
    And the form has fields: name, phone, subject select, message
    And a "submit now" button is present

  Scenario: Events section shows upcoming events
    Then the heading reads "Upcoming events"
    And 3 event cards are visible
    And each event has a date badge with day and month
    And each event shows title, time, and location

  Scenario: Team section shows tutors
    Then the heading reads "The Best Tutors in Town"
    And 4 team member cards are visible
    And each team member has a photo, name, and specialty
    And social icons (Facebook, Twitter, Google+) are present per member

  Scenario: News section displays blog posts
    Then the heading reads "Latest News"
    And 1 large featured news post is visible with image, title, and meta
    And 4 small news posts are visible in the sidebar

  Scenario: Newsletter signup form
    Then the heading reads "sign up for news and offers"
    And the subtitle "Subcribe to lastest smartphones news & great deals we offer" is visible
    And an email input with placeholder "Your Email" is present
    And a "subscribe" button is visible

  Scenario: Footer structure
    Then the footer has 4 columns: About, Contact, Links, Mobile
    And the About column shows the logo and social icons
    And the Contact column shows email, phone, and address
    And the Links column shows navigation links
    And a copyright bar is present at the bottom

  Scenario: Footer links to Component Dock
    Then the footer contains a link to "https://www.componentdock.com/"
    And the link text mentions "Component Dock"
```

## Verification checklist

- [ ] All 11 sections render in the correct order
- [ ] Hero slider cycles through 3 slides with search form
- [ ] Feature icons render (use lucide-react equivalents)
- [ ] Course cards show image, title, teacher, price
- [ ] Counter section shows 4 animated milestone numbers
- [ ] Registration form has all 4 fields + submit button
- [ ] Event cards show date badges with correct styling
- [ ] Team section shows 4 members on parallax background
- [ ] News section shows 1 large + 4 small posts
- [ ] Newsletter form with email input + subscribe button
- [ ] Footer has 4 columns + copyright + Component Dock link
- [ ] TopBar shows contact info
- [ ] Responsive design works on mobile
- [ ] All links point to "#" or valid anchors
- [ ] No ColorLib references in app code
- [ ] `npm run verify:app -- learnvault` passes (typecheck + lint + 100% coverage + build)

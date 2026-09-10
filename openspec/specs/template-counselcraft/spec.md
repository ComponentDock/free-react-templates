# Template: Counselcraft (Counseling Service)

## Purpose

Counselcraft is a single-page counseling service landing page recreation of
the ColorLib "Counselor" free template (source:
https://colorlib.com/wp/template/counselor/), built under a DIFFERENT name.
No ColorLib references may appear in the app code.

Preview URL: https://preview.colorlib.com/theme/counselor/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/counselor-free-template.jpg

Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript (strict).

## Design Tokens (extracted from preview)

- **Font family**: "Roboto", Arial, sans-serif (weights 300, 400, 500, 700)
- **Brand color (green)**: #589167 — used for primary buttons, intro card
  background, pricing price numbers, appointment section overlay
- **Secondary green**: #528760, #4e815c (darker green shades)
- **Accent green**: #01d28e (subtle highlight)
- **Dark background**: #1a1a1a (footer)
- **Light section background**: #f5f4f0 (alternating sections)
- **Button primary**: #589167 (overridden from Bootstrap default #007bff)
  - Hover: transparent with green border (outline variant)
  - Border-radius: ~0.25rem (small, Bootstrap default)
  - Padding: py-3 px-4
- **White button**: white background, green border, green text (outline)
- **Card shadow**: 0px 24px 48px -13px rgba(0,0,0,0.05) (pricing cards)
- **Hero overlay**: dark semi-transparent overlay on background image
- **Footer**: #1a1a1a dark background, white text, green hover links
- **Top bar**: dark green (#589167) background, white text + icons
- **Navbar**: dark background (Bootstrap navbar-dark), white brand text

## Section Structure (from preview DOM)

1. **TopBar** — thin dark green bar: phone number + email (left), social
   icons (right). Background: #589167, white text.
2. **Navbar** — sticky, dark background, "Counselcraft" brand (bold),
   nav links: Home, About, Counselors, Services, Pricing, Blog, Contact.
3. **Hero** — full-width background image with dark overlay. Left-aligned:
   headline "Counseling For Your Better Life", subtext, two CTAs
   (solid green "Contact us" + outline white "Read more"). Right: circular
   play button (video link).
4. **Intro Cards** — 3-column strip, dark green background (#589167),
   raised ~-70px above following section via negative margin. Columns:
   100% Confidential, Qualified Team, Individual Approach. Each has a
   white icon + bold heading + description.
5. **How It Works** — white background. Centered heading with subheading
   "Services". Three step cards with numbered circles (01, 02, 03):
   Make Schedule, Start Discussion, Enjoy Plan.
6. **About** — split layout: left image, right text on #f5f4f0 background.
   Heading "Best Counseling Funding Network Worldwide" with descriptive
   paragraph.
7. **Services** — white background. Centered heading "We Can Help You With
   This Situation". 6 service items in 2-column grid: Relation Problem,
   Couples Counseling, Depression Treatment, Family Problem, Personal
   Problem, Business Problem. Each has icon + title + description.
8. **Testimonials** — dark overlay background, owl-carousel of testimonial
   cards. "Happy Clients" heading. Each card: avatar + quote + name.
9. **Pricing** — light (#f5f4f0) background. 3 pricing cards (Basic,
   Standard, Premium) with price number, feature list with green check
   icons, CTA button.
10. **Appointment** — background image with green overlay (#589167).
    Split: left side heading "Send a Message & Get in touch!" with form,
    right side decorative text.
11. **Blog** — white background. "Recent Blog" heading. 3 blog cards with
    image + category + title + date.
12. **Footer** — #1a1a1a dark background. 4 columns: logo + social icons,
    Explore links, Legal links, Company links. Bottom: copyright + a
    "Have a Questions?" section with email signup.

## Gherkin Requirements

### TopBar

Scenario: TopBar displays contact info and social icons
Given the user visits the homepage
Then the TopBar shows a phone number and email on the left
And social media icons (Facebook, Twitter, Instagram, Dribbble) on the right

### Navbar

Scenario: Navbar is sticky and shows all nav links
Given the user visits the homepage
Then the Navbar displays the brand name "Counselcraft"
And shows links: Home, About, Counselors, Services, Pricing, Blog, Contact
And the Navbar becomes sticky on scroll

Scenario: Navbar has mobile toggle
Given the viewport is mobile-width
Then a hamburger menu button is visible
And clicking it toggles the nav links

### Hero

Scenario: Hero shows headline and CTAs
Given the user visits the homepage
Then the Hero section displays a background image with dark overlay
And the headline "Counseling For Your Better Life" is visible
And two buttons are shown: "Contact us" (solid green) and "Read more" (outline white)
And a circular play button is shown on the right side

Scenario: Hero video button opens video modal
Given the user clicks the play button in the Hero
Then a video modal or overlay opens

### Intro Cards

Scenario: Three intro cards are displayed
Given the user scrolls to the Intro section
Then 3 cards are shown in a row on desktop
And the cards are: 100% Confidential, Qualified Team, Individual Approach
And each card has an icon, heading, and description

### How It Works

Scenario: Three steps are displayed
Given the user scrolls to the How It Works section
Then 3 numbered step cards are shown: Make Schedule, Start Discussion, Enjoy Plan
And each has a numbered circle badge (01, 02, 03)

### About

Scenario: About section shows image and text
Given the user scrolls to the About section
Then a split layout with an image on the left and text on the right is displayed
And the heading reads "Best Counseling Funding Network Worldwide"
And the section has a light background

### Services

Scenario: Six services are displayed
Given the user scrolls to the Services section
Then 6 service items are shown in a 2-column grid
And the items are: Relation Problem, Couples Counseling, Depression Treatment,
Family Problem, Personal Problem, Business Problem
And each has an icon, title, and short description

### Testimonials

Scenario: Testimonial carousel is shown
Given the user scrolls to the Testimonials section
Then a carousel of testimonial cards is displayed
And the section has a dark overlay background
And each card shows an avatar, quote text, and author name

### Pricing

Scenario: Three pricing plans are shown
Given the user scrolls to the Pricing section
Then 3 pricing cards are displayed in a row on desktop
And each card has a price, feature list, and a CTA button
And the feature list uses green checkmark icons

Scenario: Pricing cards are responsive
Given the user views on mobile
Then the pricing cards stack vertically

### Appointment

Scenario: Appointment form section is displayed
Given the user scrolls to the Appointment section
Then a background image with green overlay is shown
And a contact form is visible on the left with heading "Send a Message"
And form fields include name, subject, message

### Blog

Scenario: Three blog posts are shown
Given the user scrolls to the Blog section
Then 3 blog cards are displayed
And each card has an image, category, title, and date

### Footer

Scenario: Footer shows company info and links
Given the user scrolls to the Footer
Then a dark background (#1a1a1a) footer is displayed
And 4 columns are shown: brand + social, Explore, Legal, Company
And the footer links to Component Dock in the bottom bar

Scenario: Footer social icons are interactive
Given the user hovers over a social icon in the Footer
Then the icon color changes to green (#589167)

## Verification Checklist

- [ ] TopBar renders with contact info and social icons
- [ ] Navbar is sticky, has mobile toggle, all 7 nav links
- [ ] Hero has background image, overlay, headline, 2 CTA buttons, play button
- [ ] Intro section has 3 cards on green background
- [ ] How It Works has 3 numbered steps
- [ ] About section has split image/text layout
- [ ] Services section has 6 service items in 2-col grid
- [ ] Testimonials carousel works with dot/arrow navigation
- [ ] Pricing has 3 cards with responsive stacking
- [ ] Appointment section has form with background image overlay
- [ ] Blog section has 3 cards
- [ ] Footer has 4 columns, social icons, Component Dock link
- [ ] All sections use correct design tokens (green #589167, Roboto font)
- [ ] Responsive: all sections adapt to mobile/tablet/desktop
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] public/CNAME contains counselcraft.free.componentdock.com

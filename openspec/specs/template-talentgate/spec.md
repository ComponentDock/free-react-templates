# Template: TalentGate (Job Portal)

## Purpose

TalentGate is a single-page job portal landing page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Jobportal" free
template (source: https://colorlib.com/wp/template/jobportal/), built under a
DIFFERENT name (**TalentGate**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 + jQuery job portal with a full-height hero
background image, a tabbed job search form, four service feature cards, a job
listing section, a stats counter with parallax, a testimonial carousel, a blog
grid, a newsletter subscribe section, and a dark footer. It uses the Font Awesome
icon set and the Owl Carousel for testimonials.

**Live preview URL:** https://preview.colorlib.com/theme/jobportal/

## Design tokens (extracted from preview CSS)

| Token             | Value                                         | Usage                                            |
| ----------------- | --------------------------------------------- | ------------------------------------------------ |
| Primary brand     | `#157efb` (bright blue)                       | Service icons, nav active state, section accents |
| Secondary brand   | `#5dd28e` (green)                             | Subscribe button, badge accents                  |
| Accent light      | `#78d5ef` (cyan)                              | Hover highlights                                 |
| Dark background   | `#3c312e` (warm brown-black)                  | Hero overlay, ftco-bg-dark sections              |
| Footer background | `#222831` (dark blue-gray)                    | Footer                                           |
| Light section bg  | `#f8f9fa` (off-white)                         | Services, blog sections                          |
| Body text         | `rgba(0,0,0,0.7)`                             | Paragraphs, secondary text                       |
| White             | `#fff`                                        | Headings, form inputs, card backgrounds          |
| Font (primary)    | `"Work Sans"`                                 | Headings, body, all text                         |
| Font (secondary)  | `"Nunito Sans"`                               | Subheadings (subheading class)                   |
| Border radius     | `0` (sharp corners)                           | Nav tabs, subscribe input                        |
| Button primary    | `#157efb` blue bg, white text, rounded pill   | Apply Job buttons                                |
| Button secondary  | `#6c757d` gray bg, circular                   | Favorite/heart buttons                           |
| Subscribe button  | `#5dd28e` green bg, white text, right-rounded | Newsletter subscribe                             |
| Counter number    | `34px` font, weight 600, white                | Stats counter section                            |
| Section padding   | `7em 0`                                       | Standard section spacing                         |

## Visual design (from screenshot)

The screenshot shows a dark overlay hero with large white headline text
("Your Dream Job is Waiting") and a parallax background image. Below is a
tabbed search form (Find Job / Find Candidate) with pill-shaped tabs and
form fields. The services section has a light gray background with four
icon-card columns. Job listings are white cards with company info, location
badges, and blue "Apply Job" buttons. A parallax stats section shows four
numbers on a dark background. Testimonials use a carousel with circular
user photos. Blog posts appear as four image cards on a light background.
A newsletter section uses a dark parallax background with a green subscribe
button. The footer is a dark blue-gray three-column layout.

## Gherkin requirements

### Feature: TalentGate — Job Portal Landing Page

Scenario: Page loads with full hero section
Given the user visits the TalentGate homepage
Then a full-height hero section is visible
And the hero displays the headline "Your Dream Job is Waiting"
And a counter text shows the number of job offers

Scenario: Navigation bar renders correctly
Given the user views the page
Then a dark navbar is visible at the top
And the navbar contains "Post a Job" and "Want a Job" action links
And the navbar collapses on mobile viewports

Scenario: Job search tabs function correctly
Given the user views the search section
Then two tabs are visible: "Find Job" and "Find Candidate"
And "Find Job" tab is active by default
When the user clicks "Find Candidate"
Then the "Find Candidate" tab becomes active
And the search form fields update accordingly

Scenario: Job search form fields render
Given the user views the "Find Job" tab
Then form fields for keyword, location, and job type are visible
And each field has a search icon
And a search button is present

Scenario: Services section displays feature cards
Given the user scrolls to the services section
Then four service cards are displayed in a row
And each card has a blue icon, a title, and a description
And the section has a light gray background

Scenario: Job listings display correctly
Given the user scrolls to the job listings section
Then job post cards are displayed
And each card shows job title, company name, and location
And each card has an "Apply Job" button and a heart/favorite button
And badges indicate job type (e.g., "Partime", "Fulltime")

Scenario: Stats counter section renders
Given the user scrolls to the counter section
Then four stat items are displayed
And each stat has a large number and a label
And the section uses a parallax background image

Scenario: Testimonials carousel works
Given the user scrolls to the testimonials section
Then a carousel of testimonial items is displayed
And each testimonial has a circular user photo, name, and quote
And the carousel auto-rotates between testimonials

Scenario: Blog section displays posts
Given the user scrolls to the blog section
Then four blog post cards are displayed in a grid
And each card has a thumbnail image, date, author, and title
And the section has a light gray background

Scenario: Newsletter subscribe section works
Given the user scrolls to the newsletter section
Then a heading "Subscribe to our Newsletter" is visible
And an email input field and subscribe button are present
And the section uses a parallax dark background

Scenario: Footer renders correctly
Given the user scrolls to the footer
Then the footer has a dark background
And three columns are visible: About, Employers, Workers
And social media links are present
And the footer links to Component Dock

Scenario: Footer links to Component Dock
Given the user views the footer
Then a link to "https://www.componentdock.com/" is present
And the link text includes "Component Dock"

## Verification checklist

- [ ] Hero section renders with full-height background image and overlay
- [ ] Navbar is dark with correct CTA buttons, responsive on mobile
- [ ] Search tabs toggle between Find Job / Find Candidate
- [ ] Services section shows four feature cards on light background
- [ ] Job listing cards show title, company, location, badges, apply/favorite
- [ ] Stats counter section uses parallax background with four counters
- [ ] Testimonials carousel displays user photos and quotes
- [ ] Blog grid shows four post cards with images
- [ ] Newsletter section has parallax background, email input, subscribe button
- [ ] Footer has three columns, social links, Component Dock link
- [ ] All design tokens match the original (#157efb blue, #5dd28e green, Work Sans)
- [ ] No ColorLib references anywhere in app code (provenance in spec only)
- [ ] Uses picsum.photos for placeholder images (seeded per template)
- [ ] Uses lucide-react for icons (no Font Awesome shipped)
- [ ] 100% test coverage on changed code

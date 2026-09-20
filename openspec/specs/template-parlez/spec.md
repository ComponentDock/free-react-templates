# Template: Parlez (Language School / Education)

## Purpose

Recreation of the ColorLib **Lingua** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source:** [colorlib.com/wp/template/lingua/](https://colorlib.com/wp/template/lingua/)
- **Preview:** [preview.colorlib.com/theme/lingua/](https://preview.colorlib.com/theme/lingua/)
- **New name:** `parlez` (French for "speak"; unrelated to the source name)
- **Category:** Education / Language School
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)
- **Shared UI:** `packages/ui` components (Button, ButtonLink, Card, cn)

## Design Tokens

Extracted from the live preview stylesheet (`styles/main_styles.css`).

| Token | Value | Usage |
|---|---|---|
| `brand` | `#2e21df` | Primary indigo — buttons, nav active border, register form button, newsletter button, footer CTA |
| `accent-warm` | `#937c6f` | Warm brown — instructors background overlay |
| `accent-yellow` | `#f9cf0e` | Yellow accent (sparingly) |
| `accent-red` | `#FF6347` | Tomato red (sparingly) |
| `bg-white` | `#FFFFFF` | Main content background |
| `bg-light` | `#f1f1f1` | Light section backgrounds |
| `bg-lighter` | `#f8f8f8` | Alternate section background |
| `bg-dark` | `#232323` | Dark section backgrounds (footer body) |
| `text-dark` | `#1a1a1a` | Primary body text |
| `text-secondary` | `#7c7c7c` | Secondary/muted text |
| `text-light` | `#929292` | Tertiary text |
| `border-light` | `#d9d9d9` | Borders, dividers |
| Font — body | `'Poppins', sans-serif` | Body copy, headings |
| Font — accent | `'Montserrat', sans-serif` | Buttons, nav labels, small caps |
| Button radius | `3px` | Slight rounding on primary buttons |
| Button style | `bg: #2e21df, color: #fff, font: Montserrat 12px/600, radius: 3px` | All CTA buttons |

## Section Structure (in order)

1. **Header** — top bar (phone, language selector, social icons) + main nav (Home, Courses, Instructors, Events, Blog, Contact) + search input + user icon + hamburger (mobile)
2. **Hero** — full-width background image, centered heading "Learn Languages Easily", CTA button "get started"
3. **LanguageSlider** — horizontal carousel of language flags with names (Ukrainian, Japanese, Lithuanian, Swedish, English, Italian, Chinese, French, German); prev/next arrows
4. **Courses** — section title "Popular Online Courses", 3-column grid of course cards (image, title, instructor name, language, description, students count, rating stars, price/free badge)
5. **Instructors** — section title "The Best Tutors in Town", 3-column grid of instructor cards (circular image, name, title, bio, social icons); warm brown background overlay
6. **Register** — split layout: left = registration form (Name, Email, Phone, Site fields + "get it now" submit), right = countdown timer with title "Register Now" + description text
7. **Events** — section title "Upcoming Events", 3-column grid of event cards (image with date badge overlay, event title, free tag)
8. **Blog** — split layout: left = "From Our Blog" title + description + 6-category grid (travel, languages, cultures, fashion, cooking, hobbies with images), right = featured blog post (image, category, title, excerpt, "Read More" link)
9. **Footer** — 4-column: newsletter subscribe (logo + email + arrow button), About Us links, Help & Support links, Privacy & Terms links; copyright bar with phone + social icons

## Gherkin Requirements

### Scenario: Header renders with navigation
- **Given** the page loads
- **When** the header is visible
- **Then** the logo text "Parlez" is displayed
- **And** the nav links are: Home, Courses, Instructors, Events, Blog, Contact
- **And** a search input with placeholder "Type for Search" is present
- **And** social icons (Facebook, Instagram, Twitter) are in the top bar

### Scenario: Hero section displays headline and CTA
- **Given** the page loads
- **When** the hero section is visible
- **Then** the heading reads "Learn Languages Easily"
- **And** a "get started" button is displayed
- **And** the background is a full-width image (placeholder via picsum)

### Scenario: Language slider shows language flags
- **Given** the page loads
- **When** the language slider section is visible
- **Then** at least 9 language items are displayed (Ukrainian, Japanese, Lithuanian, Swedish, English, Italian, Chinese, French, German)
- **And** each item shows a flag image and language name
- **And** prev/next navigation arrows are present

### Scenario: Courses section shows 3 course cards
- **Given** the page loads
- **When** the courses section is visible
- **Then** the heading reads "Popular Online Courses"
- **And** 3 course cards are displayed in a 3-column grid
- **And** each card shows an image, title, instructor name, language, description text, student count, rating, and price/free badge

### Scenario: Instructors section shows 3 tutor cards
- **Given** the page loads
- **When** the instructors section is visible
- **Then** the heading reads "The Best Tutors in Town"
- **And** 3 instructor cards are displayed in a 3-column grid
- **And** each card shows a circular image, name, title, bio text, and social icons (Facebook, Instagram, Twitter)

### Scenario: Register section has form and countdown
- **Given** the page loads
- **When** the register section is visible
- **Then** a registration form with fields: Name, Email, Phone, Site is displayed
- **And** a "get it now" submit button is present
- **And** a countdown timer shows days, hours, minutes, seconds
- **And** the timer title reads "Register Now"

### Scenario: Events section shows 3 event cards
- **Given** the page loads
- **When** the events section is visible
- **Then** the heading reads "Upcoming Events"
- **And** 3 event cards are displayed in a 3-column grid
- **And** each card shows an image, a date badge (day + month), event title, and a "Free" tag

### Scenario: Blog section has categories and featured post
- **Given** the page loads
- **When** the blog section is visible
- **Then** a "From Our Blog" heading is displayed on the left
- **And** 6 blog category cards are shown (travel, languages, cultures, fashion, cooking, hobbies)
- **And** a featured blog post on the right shows an image, category label, title, excerpt, and "Read More" link

### Scenario: Footer has 4 columns and copyright bar
- **Given** the page loads
- **When** the footer is visible
- **Then** a newsletter subscribe section with logo and email input is displayed
- **And** "About Us", "Help & Support", "Privacy & Terms" link columns are present
- **And** a copyright bar shows phone number and social icons
- **And** the footer links to https://www.componentdock.com/ (Component Dock)

## Verification Checklist

- [ ] Header: logo, nav links (6), search, social icons, phone
- [ ] Hero: heading, CTA button, background image
- [ ] Language Slider: 9 language items with flags, carousel navigation
- [ ] Courses: heading, 3 course cards (image, title, instructor, language, desc, students, rating, price)
- [ ] Instructors: heading, 3 instructor cards (circular image, name, title, bio, social)
- [ ] Register: form (4 fields + submit), countdown timer (4 units)
- [ ] Events: heading, 3 event cards (image, date badge, title, free tag)
- [ ] Blog: heading, 6 category cards, featured post (image, category, title, excerpt, read more)
- [ ] Footer: newsletter, 3 link columns, copyright bar, Component Dock link
- [ ] Design tokens: brand #2e21df, Poppins body font, Montserrat accent font, 3px button radius
- [ ] Responsive: mobile hamburger menu, stacked layouts on small screens
- [ ] Accessibility: semantic HTML, aria labels on icon buttons, form labels
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Placeholder images via picsum.photos
- [ ] Footer links to Component Dock

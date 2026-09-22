---
name: zenleaf
description: Yoga studio landing page with hero, services, about, counters, classes, testimonials, schedule, trainers, and blog
template: colorlib-yogabest
source: https://preview.colorlib.com/theme/yogabest/
---

## Purpose

Recreation of ColorLib Yogabest (https://colorlib.com/wp/template/yogabest/) — a yoga studio landing page with hero, services, about with video, counters, classes, testimonials, schedule calendar, trainers, blog, and footer. The new name is "Zenleaf".

### Design Tokens

- Fonts: Oswald (headings) + Roboto (body text) — Google Fonts
- Primary brand color: #6cae22 (vibrant green — CTAs, highlights, accents)
- Secondary/accent: #9acb56 (lighter green — gradients, hover states)
- Light green: #d5f1b6 (subtle backgrounds)
- Dark backgrounds: #141b25, #1d2e09, #000000 (hero overlay, dark sections)
- Body text: #000000, #333333
- Muted text: #999999, #999
- Light backgrounds: #f3f2ee (warm off-white), #f7f7f7, #e6e6e6
- Background light: #f8f9fa (Bootstrap default)
- White: #ffffff
- Gradient: linear-gradient(to bottom, #9acb56 0%, rgba(255,255,255,0) 71%) — hero/section accent
- Button primary: #6cae22 bg, white text
- Button hover: #9acb56
- Button border-radius: mostly rectangular (no explicit radius in main buttons)
- Overlay: rgba(0,0,0,0.5) on hero backgrounds

## Requirements

### Requirement: Header with top bar and navigation

The page SHALL render a top bar with phone number, email, and social media icons, plus a navbar with the Zenleaf logo and navigation links (Home, About, Trainer, Classes, Schedule, Blog, Contact).

#### Scenario: Navigation links are present

- **WHEN** the page loads
- **THEN** links for Home, About, Trainer, Classes, Schedule, Blog, and Contact are visible

#### Scenario: Top bar shows contact info

- **WHEN** the page loads
- **THEN** phone number and email address are visible in the top bar

#### Scenario: Social media icons are present

- **WHEN** the page loads
- **THEN** social media icons (Facebook, Twitter, Instagram, Dribbble) are visible

### Requirement: Hero section

The page SHALL render a full-height hero section with a background image, dark overlay, welcome subtitle, main heading "Yoga Enhances Your Life", description text, and a CTA button.

#### Scenario: Hero heading renders

- **WHEN** the page loads
- **THEN** the heading "Yoga Enhances Your Life" is visible

#### Scenario: Welcome subtitle

- **WHEN** the page loads
- **THEN** a "Welcome to Zenleaf" subtitle is visible above the heading

### Requirement: Services section (3 cards)

The page SHALL render 3 service cards (Outdoor, Experienced, Happy) each with an icon, title, and description on a light background.

#### Scenario: Three services shown

- **WHEN** the page loads
- **THEN** service titles "Outdoor", "Experienced", and "Happy" are visible with descriptions

### Requirement: About section with video

The page SHALL render a split about section with a background image, a "Year of" establishment badge, quote text, description, and a video play button.

#### Scenario: About heading renders

- **WHEN** the page loads
- **THEN** the heading "Life in Divine Yoga" is visible

#### Scenario: Establishment year badge

- **WHEN** the page loads
- **THEN** a "Year Of" badge/counter is visible in the about section

#### Scenario: Video play button

- **WHEN** the page loads
- **THEN** a "Watch video" link/button is visible

### Requirement: Services-2 section

The page SHALL render an alternating image-text section with 3 service items (Body & Mind Balance, Healthy Daily Life, Improves your flexibility), each with an icon and description.

#### Scenario: Services-2 heading

- **WHEN** the page loads
- **THEN** the heading "Control Your Body To Free Your Soul" is visible

#### Scenario: Three service items

- **WHEN** the page loads
- **THEN** titles "Body & Mind Balance", "Healthy Daily Life", and "Improves your flexibility" are visible

### Requirement: Counter/Stats section

The page SHALL render a counter section with 4 animated stats: Yoga Classes, Yoga Conducted, Years of Experienced, and Happy Customers.

#### Scenario: Four counters render

- **WHEN** the page loads
- **THEN** counter labels "Yoga Classes", "Yoga Conducted", "Years of Experienced", and "Happy Customers" are visible

### Requirement: Classes section

The page SHALL render 3 class cards, each showing a class image, instructor name, schedule days, time, and a "Lessons" link.

#### Scenario: Classes heading

- **WHEN** the page loads
- **THEN** the heading "Zenleaf Classes" is visible

#### Scenario: Class cards render

- **WHEN** the page loads
- **THEN** class titles "Private & Group Lessons", "Yoga for Pregnant", and "Yoga for Beginners" are visible with instructor and schedule info

### Requirement: Testimonials section

The page SHALL render a testimonial section with a heading, description, and a carousel of testimonial cards with avatar, name, and position.

#### Scenario: Testimonial heading

- **WHEN** the page loads
- **THEN** the heading "What They Are Saying" is visible

#### Scenario: Testimonial cards

- **WHEN** the page loads
- **THEN** testimonial cards with names and "Marketing Manager" positions are visible

### Requirement: Schedule section

The page SHALL render a schedule section with a tabbed calendar (October 2020, November 2020) showing yoga training sessions.

#### Scenario: Schedule heading

- **WHEN** the page loads
- **THEN** the heading "Zenleaf Schedule" is visible

#### Scenario: Calendar tabs

- **WHEN** the page loads
- **THEN** tabs for "October 2020" and "November 2020" are visible

### Requirement: Trainers section

The page SHALL render 4 trainer cards, each with a photo, name, and "Owner / Head Coach" subtitle.

#### Scenario: Trainers heading

- **WHEN** the page loads
- **THEN** the heading "The Best Trainer For You" is visible

#### Scenario: Trainer cards render

- **WHEN** the page loads
- **THEN** trainer names "Elizabeth Nelson", "Scarlett Torres", "Victoria Wright", and "Stella Perry" are visible

### Requirement: Blog section

The page SHALL render 3 recent blog post cards, each with an image, date, title, and excerpt.

#### Scenario: Blog heading

- **WHEN** the page loads
- **THEN** the heading "Recent Post" is visible

#### Scenario: Blog cards render

- **WHEN** the page loads
- **THEN** blog post titles "Treat Your Body Like A Temple" are visible with dates

### Requirement: Footer

The page SHALL render a footer with the Zenleaf logo, recent blog posts, explore links, contact information, and a copyright bar.

#### Scenario: Footer renders

- **WHEN** the page loads
- **THEN** contact information (address, phone, email) is visible in the footer

#### Scenario: Footer links to Component Dock

- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/

## Verification Checklist

- [ ] Oswald + Roboto fonts loaded from Google Fonts
- [ ] Hero section with background image, heading, and CTA
- [ ] 3 service cards (Outdoor, Experienced, Happy)
- [ ] About section with video play button
- [ ] Services-2 section with 3 items
- [ ] Counter section with 4 animated stats
- [ ] 3 class cards with instructor and schedule info
- [ ] Testimonial carousel
- [ ] Schedule calendar with tabs
- [ ] 4 trainer cards
- [ ] 3 blog post cards
- [ ] Footer with contact, explore links, and Component Dock link
- [ ] All brand colors match tokens (#6cae22, #9acb56, #141b25)
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] 100% test coverage
- [ ] Builds without errors

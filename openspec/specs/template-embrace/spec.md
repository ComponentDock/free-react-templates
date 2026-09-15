---
name: Embrace
slug: embrace
description: Non-profit charity & donation landing template
colorlib:
  name: Charity
  slug: charity
  url: https://colorlib.com/wp/template/charity/
  preview: https://preview.colorlib.com/theme/charity/
design_tokens:
  fonts:
    heading: Montserrat
    body: Lato
  colors:
    primary: '#e55e2a'
    dark: '#1a1a2e'
    light_bg: '#f8f9fa'
    text: '#666666'
    muted: '#999999'
    white: '#ffffff'
    progress_bar: '#e55e2a'
  layout: Bootstrap-style grid, centered container
---

# Embrace — Charity & Donation Template

Recreation of ColorLib "Charity" (https://colorlib.com/wp/template/charity/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript template.

## Sections

### 1. Navbar

- Fixed top, transparent on hero (becomes white on scroll)
- Logo: heart icon + "Embrace" text
- Nav links: Home, About, News, Causes, Pages
- "Donate" CTA button (primary color, rounded)

### 2. Hero

- Full-width background image with dark overlay
- Heading: "Donate Together we can make a difference"
- Subtext + "Donate Now" button (white, rounded)
- Full viewport height

### 3. Service Intro

- 3-column cards overlapping hero bottom
- Icons: Wallet (Give Donation), Heart (Become Volunteer), GraduationCap (Give Scholarship)
- Each card: icon + heading + description + "Learn More" link
- White background cards with shadow

### 4. Causes (Most Popular Causes)

- Section heading + lead text
- 3 cause cards: image, progress bar, raised/goal amounts, title, date, description, "Donate Now!" button
- Data: Help Children Food ($49,112/$50,000), Help Children Health ($28,127/$30,000), Help Children Education ($21,973/$100,000)

### 5. Latest Donations

- Dark background with background image
- 4 donor profiles: circular photo, name, donation amount
- Donors: Linda Reyez ($500), Chris Worth ($1,500), Janet Morris ($250), Jessa Sy ($400)

### 6. Testimonials ("What People Says")

- Carousel of quotes
- Each: circular photo, quote text, author name
- Testimonials from Mike Fisher, Jorge Smith, Brandon White

### 7. Success Stories

- Split layout: left image, right text
- Heading + paragraph + "Read More" button

### 8. News / About / Gallery

- 3-column layout:
  - News: 2 news items with date, title, description, share/comment counts
  - About: image + text + "Learn More" button
  - Gallery: image grid/carousel with "View all gallery" button

### 9. Footer

- 3 columns:
  - About Us: text + social icons (Twitter, Facebook, Github, Dribbble, LinkedIn, YouTube)
  - Contact Info: address, email, phone with icons
  - Donation: text + "Donate Now" button
- Copyright bar: "More templates at Component Dock" + back-to-top link

## Design Tokens

- Primary: #e55e2a (coral/orange)
- Dark: #1a1a2e (navy)
- Body font: Lato, 300 weight, 14px
- Heading font: Montserrat, 700 weight
- Button style: rounded, primary color bg, white text
- Section alternating: white / light gray

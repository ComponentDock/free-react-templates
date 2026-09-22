# Template: SweatLab (Fitness / Gym Landing)

## Purpose

SweatLab is a single-page fitness/gym landing page in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Fitness" free template (source: https://colorlib.com/wp/template/fitness/), built under a DIFFERENT name (**SweatLab**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Preview: https://preview.colorlib.com/theme/fitness/

The original is a multi-section Bootstrap-based single-page site for a fitness/gym business, with a hero banner, course carousel, feature list, gallery, testimonials, brand logos, newsletter CTA, and footer. The design is clean and modern with a red-pink primary accent.

## Design tokens

- **Primary color**: #f6214b (red-pink — used on buttons, section accents, footer numbers)
- **Font**: "Poppins", sans-serif (Google Fonts, weights 300–700)
- **Banner**: background image (`banner-bg.jpg`) with dark overlay `rgba(0,0,0,0.2)`
- **Button style**: `.primary-btn` — solid #f6214b background, white text, no border-radius (square/rectangular), 30px horizontal padding, line-height 42px; hover: darker shade
- **Footer**: white (#fff) background, accent numbers in #f6214b
- **CTA split section**: two side-by-side panels with dark overlay backgrounds
- **Section backgrounds**: alternating white (#fff) and very light gray (#f9f9ff / #fafaff)
- **Text colors**: headings #222, body text #777, light text #999
- **Border/divider**: #e66686 (pink — used on join-btn hover), #ccc (light dividers)

## Sections (in order)

1. **Navbar** — sticky top, logo centered, nav links: Home, About, Services, Trainers, Blog (dropdown), Pages (dropdown), Elements, Contact. Simple horizontal nav with dropdown support.
2. **Banner/Hero** — full-width background image with dark overlay. Left-aligned headline "Shape your Perfect body" (h1, uppercase, white), description paragraph, primary CTA button ("Join Now"). Right side: empty (image covers full area).
3. **Top Course Area** — section title "Our Popular Courses", carousel of course cards. Each card: thumbnail image, "JOIN NOW" button, title + price row (title left, price right in #f6214b).
4. **CTA Area** — two side-by-side panels with dark overlay backgrounds. Left panel: "Train with Personal Trainers" + description + primary button. Right panel: "Build Your Muscles" + description + primary button.
5. **Feature Area** — section title "Our Topnotch Features". Left column: feature image. Right column: list of features, each with h4 title + description paragraph. Features: "Smart Security", "Unlimited Colors", "Perfect Photography", etc.
6. **Calculation Area** — BMI calculator or pricing/plan section. Background with overlay. Contains input fields and a calculation result area.
7. **Image Gallery Area** — masonry or grid photo gallery of gym/fitness images with hover effects (magnific-popup lightbox).
8. **Testimonial Area** — section title "Testimonial from our Clients". Carousel of testimonials. Each: circular avatar image, quote paragraph, client name + title.
9. **Brands Area** — row of brand/partner logos (simple image strip).
10. **Call-to-Action / Newsletter** — "Sign up for our newsletter" email signup form. Background image with dark overlay. Email input + submit button.
11. **Footer** — 4-column layout: About Us (text), Contact Us (address, phone, email), Opening Hours (daily schedule), Newsletter (brief signup). Bottom copyright bar.

## Gherkin Requirements

### Scenario: Navbar displays all navigation links
```
Given the user loads the SweatLab page
When the navbar is visible
Then it shows links: Home, About, Services, Trainers, Blog, Pages, Elements, Contact
And the logo is displayed in the center
```

### Scenario: Hero banner displays headline and CTA
```
Given the user loads the SweatLab page
When the hero banner is visible
Then it shows the headline "Shape your Perfect body"
And it shows a description paragraph
And it shows a primary "Join Now" CTA button
And the banner has a dark overlay over a background image
```

### Scenario: Course cards display in carousel
```
Given the user loads the SweatLab page
When the "Our Popular Courses" section is visible
Then at least 3 course cards are displayed
And each card has a thumbnail image
And each card has a "JOIN NOW" button
And each card shows a title and price
```

### Scenario: CTA area shows two panels
```
Given the user loads the SweatLab page
When the CTA area is visible
Then it shows two side-by-side panels
And the left panel says "Train with Personal Trainers"
And the right panel says "Build Your Muscles"
And each panel has a primary button
```

### Scenario: Features section lists features with image
```
Given the user loads the SweatLab page
When the features section is visible
Then it shows a section title "Our Topnotch Features"
And it shows a feature image on the left
And it shows at least 3 features on the right with title and description
```

### Scenario: Gallery section shows images
```
Given the user loads the SweatLab page
When the gallery section is visible
Then it displays a grid of fitness images
And images have hover overlay effects
```

### Scenario: Testimonials carousel
```
Given the user loads the SweatLab page
When the testimonial section is visible
Then it shows "Testimonial from our Clients" heading
And it displays testimonial cards with avatar, quote, name, and title
```

### Scenario: Brand logos displayed
```
Given the user loads the SweatLab page
When the brands section is visible
Then it shows a row of partner/brand logos
```

### Scenario: Newsletter signup
```
Given the user loads the SweatLab page
When the newsletter CTA is visible
Then it shows an email input field
And it shows a submit button
And it has a dark overlay background
```

### Scenario: Footer structure
```
Given the user loads the SweatLab page
When the footer is visible
Then it shows 4 columns: About Us, Contact Us, Opening Hours, Newsletter
And it shows a copyright bar at the bottom
And the footer links to https://www.componentdock.com/
```

### Scenario: Responsive layout
```
Given the user loads the SweatLab page on a mobile viewport
When the page renders
Then the navbar collapses to a hamburger menu
And the hero text is readable
And columns stack vertically
And the gallery adjusts grid columns
```

## Verification checklist

- [ ] Section order matches original exactly (banner → courses → CTA → features → calculation → gallery → testimonials → brands → newsletter → footer)
- [ ] Primary color #f6214b used consistently on buttons, accents, price text
- [ ] Font is Poppins (weights 300–700)
- [ ] Hero banner has background image + dark overlay + left-aligned headline
- [ ] Course cards have thumbnail, JOIN NOW button, title + price
- [ ] CTA area has two side-by-side panels with dark overlays
- [ ] Features section has image left + feature list right
- [ ] Gallery has masonry/grid layout with hover effects
- [ ] Testimonials have avatar + quote + name + title
- [ ] Brands section shows logo strip
- [ ] Newsletter has email input + submit
- [ ] Footer has 4 columns + copyright bar + ComponentDock link
- [ ] Responsive: hamburger nav on mobile, stacked columns
- [ ] No ColorLib references in app code (only in spec/TEMPLATES.md)
- [ ] 100% test coverage

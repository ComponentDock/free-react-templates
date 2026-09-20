# Scholaris — Task Outline & Design Notes

## Source mapping
- **ColorLib slug:** unica
- **Preview URL:** https://preview.colorlib.com/theme/unica/
- **New name:** scholaris
- **App path:** apps/scholaris/

## Section implementation order

### 1. Header component
- Logo left, working time + address info right with orange icons
- Hamburger nav switch on mobile
- White background

### 2. Navbar component
- Dark navy `#020031` background
- Links: Home, About Us, Event, Courses, Blog, Contact
- Search + cart icons right
- Orange active/hover states

### 3. HeroSlider component
- Owl carousel with 2+ slides
- Each slide: bg image, "Award Winning UNIVERSITY" subtitle
- "An investment in knowledge pays the best interest." h2
- Description paragraph
- "GET STARTED" orange pill button (`border-radius: 50px`)

### 4. CounterNextCourse component
- Dark navy `#020031` background
- Left: graduation cap icon + "NEXT COURSE: Sales & Marketing Alignment" + time
- Right: countdown timer (Days, Hrs, Mins, secs)

### 5. Services component
- White background, "OUR SERVICES" heading
- 6 service items (3x2 grid): icon + title + description
- Services: Art Studio, Great Facility, Activity Hub, Fully Qualified, Flexible Schedule, Chemistry Lab

### 6. Enrollment component
- Background image
- "ENROLLMENT" heading, "Get started with us..." text
- 3 numbered steps: Contact, Consulting, Register (each with icon, title, description)
- Enrollment image right

### 7. Courses component
- White background, "OUR COURSES" heading
- 6 course cards (3x2 grid): image, category tag (BUSINESS, Marketing, DESIGN, DATABASE, PROGRAM), date, title, price

### 8. Facts component
- Background image
- 4 stats with icons: 50 Years, 80 Teachers, 500 Students, 800+ Lessons

### 9. Events component
- White background, "OUR EVENTS" heading
- Event items with images, dates, titles, descriptions

### 10. Gallery component
- Masonry grid of 7 images
- Popup zoom on click (magnific-popup)

### 11. Blog component
- White background, "LATEST NEWS" heading
- 4 blog items: image, date, author, title, description

### 12. Newsletter component
- Email input + "SUBSCRIBE" orange pill button

### 13. Footer component
- Dark background
- 4 columns: About + social, Useful Links, Recent Posts, Contact
- Copyright with Component Dock

## Fidelity notes
- Rubik font throughout (400, 500, 700)
- Orange `#f6783a` primary accent
- Dark navy `#020031` for nav and counter sections
- Pill-shaped buttons (`border-radius: 50px`)
- Hero uses owl carousel slider
- Countdown timer with 4 time blocks
- Course cards with category tags
- Masonry gallery layout
- Newsletter section with email form

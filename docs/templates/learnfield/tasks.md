# LearnField — Task Outline & Design Notes

## Overview

LearnField is a faithful React recreation of the ColorLib "Universityedu" template (ColorLib source: `https://colorlib.com/wp/template/universityedu/`, preview URL: `https://preview.colorlib.com/theme/universityedu/`), built as `apps/learnfield` (`@free-react-templates/learnfield`).

## Section Breakdown & Fidelity Notes

1. **Top Announcement Bar (`TopBar.tsx`)**
   - Announcement text: "ENDS TOMORROW: Join Teachable for $4,800 in bonus content"
   - Live Countdown timer component (Days, Hours, Minutes, Seconds)
   - "Learn More" button

2. **Sticky Header (`Navbar.tsx`)**
   - Logo (`LearnField`)
   - Navigation links: Home, About, Programs, Blog, Contact
   - Phone contact info: `0 (78) 675 3674`
   - Social icons: Facebook, Twitter, LinkedIn, YouTube, Email
   - Sticky behavior on scroll

3. **Hero Slider (`Hero.tsx`)**
   - Subheading badge: "EDUCATION & SCHOOL"
   - Heading: "SHOWCASE COURSES, EVENTS AND MORE!"
   - Paragraph and "Get Started Now" button
   - Background overlay styling

4. **Teaching Approach (`AboutSection.tsx`)**
   - Warm cream background (`#FCF2EB`)
   - Left: Institutional about image (`https://picsum.photos/seed/learnfield-about/600/500`)
   - Right: "A comprehensive teaching approach" title, dual paragraphs, "Learn More" button

5. **Programs We Offer (`ProgramsSection.tsx`)**
   - Centered header: "Programs we Offer" + description
   - 2-column grid: Faculty of Science & Faculty of Arts with image cards (`https://picsum.photos/seed/learnfield-prog1/600/400`, etc.)

6. **Essential Resources (`ResourcesSection.tsx`)**
   - Split layout with essential resource items ("First year students", "Tuition & fees", "International students") and chevron indicators

7. **Top Stories (`StoriesSection.tsx`)**
   - Header with "Top Stories" and "More Stories" button
   - 3-column card grid with thumbnail images (`https://picsum.photos/seed/learnfield-story1/400/300`) and article headlines

8. **Partners Marquee (`PartnersSection.tsx`)**
   - Centered title "Our Partners" and partner logo items

9. **Trusted By Banner (`TrustBanner.tsx`)**
   - Heading "TRUSTED BY OVER 6000+ STUDENTS", copy blocks, and "Join Now" CTA button

10. **Footer & Newsletter (`Footer.tsx`)**
    - Quick Links, Programs, Resources columns
    - Newsletter email input and submit button
    - Mandatory copyright and Component Dock link (`https://www.componentdock.com/`)

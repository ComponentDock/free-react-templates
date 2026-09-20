# SkillForge — Prep Notes

**Source:** ColorLib Ezuca — https://preview.colorlib.com/theme/ezuca/
**New name:** skillforge
**Category:** Education / Online Course Platform

## Section Order (match 1:1)

1. Navbar (top info bar + sticky nav + logo + cart icon)
2. Hero (dark overlay bg image, subtitle, h1 headline, description, read-more link)
3. Icon Boxes (4 feature boxes, icon + title + desc + arrow link, container-fluid)
4. Featured Courses Horizontal (2 cards side-by-side, rating, price, "view all" btn)
5. About (text + 4 stat counters + video thumbnail with play button)
6. Testimonials (Swiper carousel, 3 slides, avatar + quote + name)
7. Featured Courses Vertical (3-col grid, 6 cards, filter tabs, "view all courses" btn)
8. Latest News & Events (featured event left, 2-3 smaller events right)
9. Gallery (masonry grid, 14 images, mixed sizes)
10. Client Logos (5 logos in a row)
11. Footer (4-col widgets: about, contact, links, social + footer bar with app badges)

## Design Notes

- **Color palette:** Primary green #19c880, gold #f3a90b (ratings), dark text #383749, light bg #f3f3f3
- **Font:** Roboto via Google Fonts
- **Buttons:** Bootstrap-style flat btn, no border-radius by default
- **Hero:** Full-width, dark semi-transparent overlay, left-aligned text
- **Icon boxes:** Full-width container-fluid, 4 equal columns, each with Themify icon
- **Course cards:** Thumbnail left, content right (horizontal); thumbnail top, content below (vertical)
- **Star ratings:** Gold #f3a90b, filled vs outlined stars
- **Testimonials:** Swiper carousel with pagination dots
- **Gallery:** CSS grid masonry with 1x1, 2x2, 2x1, 3x1 size classes
- **Footer:** Dark background (#383749), 4-column widget area, lighter footer bar
- **Footer CTA:** Must link to https://www.componentdock.com/

## Component Mapping

| Section | Component File |
|---------|---------------|
| Navbar | Navbar.tsx |
| Hero | Hero.tsx |
| IconBoxes | IconBoxes.tsx |
| FeaturedCoursesHorizontal | FeaturedCourses.tsx |
| About | About.tsx |
| Testimonials | Testimonials.tsx |
| FeaturedCoursesVertical | CourseCatalog.tsx |
| LatestNewsEvents | LatestNews.tsx |
| Gallery | Gallery.tsx |
| ClientLogos | ClientLogos.tsx |
| Footer | Footer.tsx |

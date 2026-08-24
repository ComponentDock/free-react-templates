# EduFlow Task Outline & Design Notes

Recreation of ColorLib **Onedu** template (`https://preview.colorlib.com/theme/onedu/`).

## Design Tokens & Palette

- **Brand Primary**: Deep Purple `#5a4e8c` (Buttons, header accents, footer background `bg-[#5a4e8c]`)
- **Warm Accent / Testimonials**: `#f3ead8` (`bg-[#f3ead8]`)
- **Light Blue Section**: `#effdff` (`bg-[#effdff]`)
- **Body Font**: Jost (`font-sans`, imported via Google Fonts `<link>`)
- **Buttons**: Rounded `4px` (`rounded`), solid `#5a4e8c` background with white text.

## Section Breakdown & Implementation Plan

1. **Navbar (`Navbar.tsx`)**:
   - Brand title "EduFlow" with graduation cap or book icon.
   - Links: Home, Browse Courses, About, Blog, Contact.
   - Search box and "Sign In" button.
   - Mobile hamburger menu drawer with `aria-expanded`.
2. **Hero (`Hero.tsx`)**:
   - Deep purple / patterned gradient hero background.
   - Heading: "Learn new skills online with top educators".
   - Subtitle: "Learn 100% online with world-class universities and industry experts."
   - Search form: "What do you want to learn?" input + submit button.
3. **Popular Courses (`PopularCourses.tsx`)**:
   - Section heading & subtitle.
   - Grid of course cards with picsum images (`https://picsum.photos/seed/eduflow-course-1/400/250`), category badges, titles, star ratings, lesson counts, price tags.
4. **Platform Overview (`PlatformOverview.tsx`)**:
   - "The world's largest selection of online courses".
   - Description text + "Browse Courses" button.
   - Key stats counters / highlights.
5. **Students Viewing (`StudentsViewing.tsx`)**:
   - "Students are viewing" carousel/grid of top courses.
6. **Testimonials (`Testimonials.tsx`)**:
   - Warm beige background (`bg-[#f3ead8]`).
   - Student quotes, names, avatars, carousel controls.
7. **Top Categories (`TopCategories.tsx`)**:
   - 8 category cards: Programming, VFX, App Development, Technology, Graphics Design, Music, Product Design, Video Editing.
8. **Become Instructor (`InstructorBanner.tsx`)**:
   - "Become an Instructor" banner with join button and video preview button.
9. **Footer (`Footer.tsx`)**:
   - Deep purple background (`bg-[#5a4e8c]`).
   - 4 columns: Subjects, Community, Company, Newsletter subscription form.
   - Bottom bar with copyright and mandatory **Component Dock** attribution (`https://www.componentdock.com/`).

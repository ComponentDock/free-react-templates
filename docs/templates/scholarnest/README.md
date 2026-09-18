# ScholarNest — Implementation Notes

## Source Mapping
- **ColorLib template:** Educature
- **Preview URL:** https://preview.colorlib.com/theme/educature/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/educature-free-template.jpeg

## Section-by-Section Fidelity Notes

### 1. Navbar
- Logo left, 6 nav links right. "Pages" and "Blog" have dropdown sub-menus.
- Sticky/fixed on scroll. Transparent over hero, solid on scroll.

### 2. Hero (Banner Area)
- Fullscreen height with background image + dark gradient overlay.
- Heading: "We Rank the Best Courses on the Web" (white text).
- Search form: text input "Search Courses" + "Search" button (gradient bg).
- "Top courses" subtitle + horizontal row of transparent bordered pills.
- Use picsum.photos for hero background image.

### 3. About Section
- Two-column layout: image left, text right.
- Heading: "Over 2500 Courses from 5 Platform".
- Paragraph + "Explore Courses" primary button (gradient).
- Light section background (#f9f9ff).

### 4. Courses Section
- Two-column layout (reversed): text left, category list right.
- Heading: "This is Why We have Solid Idea".
- "Explore Courses" white button (.primary-btn.white).
- 2-column list of 14 categories with book icons.
- Hover effect: item bg → brand gradient.

### 5. Features Section
- Centered heading + paragraph.
- 3x2 grid of feature cards with #f1f9ff background.
- 6 items: Architecture (crown), Interior Design (briefcase), Concept Design (medal), Lifetime Access (key), Source File Included (files), Live Support (headphone).

### 6. Faculty Section
- Centered heading + paragraph.
- 4 faculty cards in a row.
- Each: circular avatar, name, "Sr. Faculty Data Science", bio, 3 social icons.
- Use picsum.photos for avatar images.

### 7. Testimonials
- Carousel of testimonial items.
- Each: quote icon, name "Fanny Spencer", 5-star rating, text.
- Below: row of avatar thumbnails with gradient overlay (carousel nav).

### 8. Footer
- Dark navy (#283367) background.
- 5 columns: Top Products, Quick Links, Features, Resources, Newsletter.
- Newsletter: email input + arrow button.
- Footer bottom: copyright + 4 social icons (Facebook, Twitter, Dribbble, Behance).
- Replace Colorlib attribution → "Made with Component Dock" link.

## Design Token Reference (Tailwind @theme)

```
--color-brand-teal: #39cfca;
--color-brand-blue: #3279bb;
--color-brand-gradient: linear-gradient(90deg, #39cfca 0%, #3279bb 100%);
--color-footer-navy: #283367;
--color-feature-card: #f1f9ff;
--color-section-alt: #f9f9ff;
--font-heading: "Montserrat", sans-serif;
--font-body: "Roboto", sans-serif;
```

## Component Architecture

```
src/
  App.tsx              — Composes all sections
  components/
    Navbar.tsx         — Fixed nav with logo + links + dropdowns
    Hero.tsx           — Fullscreen banner with search + tags
    About.tsx          — Two-column image + text
    Courses.tsx        — Two-column text + category list
    Features.tsx       — 3x2 feature card grid
    Faculty.tsx        — 4-column faculty member cards
    Testimonials.tsx   — Carousel + avatar nav
    Footer.tsx         — 5-column footer with newsletter
  index.css            — Tailwind entry + @theme tokens
```

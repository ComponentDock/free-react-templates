# MedCraft — Implementation Notes

Source: ColorLib MedArt
Preview: https://preview.colorlib.com/theme/medart/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/medart-free-template.jpg

## Structure order (section-by-section)

1. **Navbar** (`src/components/Navbar.tsx`)
   - Logo image left, nav links center-right
   - Emergency phone button with gradient bg (right side)
   - Sticky positioning, rounded container (10px radius)
   - Mobile: hamburger toggle → slide-down menu

2. **Hero** (`src/components/Hero.tsx`)
   - Full-width carousel, 3 slides
   - Each slide: background image with dark overlay, left-aligned content
   - Heading "The Best Medical Services", paragraph, "Read More" gradient button
   - Numbered pagination dots (01/02/03) positioned left side
   - Use placeholder images from picsum.photos

3. **InfoBoxes** (`src/components/InfoBoxes.tsx`)
   - 3-column row: Opening Hours, Emergency, Make an Appointment
   - Opening Hours: list of days + times
   - Emergency: gradient phone button + description
   - Appointment form: 2 dropdowns (department, doctor), 2 text inputs (name, phone), submit button
   - Background: #f0f4f8 light blue-gray

4. **Departments** (`src/components/Departments.tsx`)
   - Section heading "Our Departments"
   - 9 department cards in 3×3 grid
   - Each card: icon (lucide-react), title, short description, "Read More" link
   - Cards: white bg, rounded 20px, subtle shadow
   - Departments: Cardiology, Gastroenterology, Medical Lab, Dental Care, Surgery, Neurology, Orthopaedy, Pediatrics, Ophthalmology

5. **Testimonials** (`src/components/Testimonials.tsx`)
   - Heading "Pacient's Testimonials"
   - Carousel/slider of testimonial cards
   - Each: quote text, author name + affiliation, circular avatar
   - Right-side decorative background image (use gradient or solid as fallback)

6. **News** (`src/components/News.tsx`)
   - Heading "The News"
   - 3 blog post cards in a row
   - Each: thumbnail image, metadata (date, author, comments), title, excerpt
   - Use placeholder images from picsum.photos

7. **Subscribe** (`src/components/Subscribe.tsx`)
   - Full-width background image
   - "Subscribe to our newsletter" heading
   - Email input + gradient "Subscribe" button
   - White text

8. **Footer** (`src/components/Footer.tsx`)
   - 3 columns: About (logo + text + copyright), Contact (address/phone/email), Useful Links
   - Link to https://www.componentdock.com/ ("Component Dock")
   - Replace Colorlib attribution with Component Dock

## Fidelity notes

- **Gradient buttons**: `linear-gradient(270deg, #32c8fa, #587de4)` — must match exactly. Pill shape (border-radius 20px).
- **Nav bar**: Rounded container (10px radius), sticky. Emergency phone button is a gradient pill.
- **Hero slider**: Numbers (01, 02, 03) on the left side as pagination — not standard dots.
- **Info boxes**: Light blue-gray background section (#f0f4f8), 3 cards with rounded borders (20px).
- **Departments grid**: 3 columns × 3 rows = 9 cards. Each has an icon circle at top.
- **Testimonials**: Quote + avatar + author name/affiliation. Right-side background decoration.
- **News cards**: Thumbnail top, metadata row (date | author | comments), title, excerpt.
- **Subscribe**: Background image with white text overlay. Email input + gradient button.
- **Footer**: Clean white background, 3 columns. No gradient.
- **Font**: Raleway only (200–700 weights). Loaded via Google Fonts.
- **Mobile**: Hamburger nav, stacked columns, full-width cards.

## CSS tokens to define in @theme

```
--color-brand: #18a3eb;
--color-brand-dark: #587de4;
--color-gradient-start: #32c8fa;
--color-gradient-end: #587de4;
--color-heading: #262626;
--color-body: #404040;
--color-secondary: #757686;
--color-muted: #828282;
--color-light: #f0f4f8;
--color-card: #ffffff;
--font-family: 'Raleway', sans-serif;
--radius-button: 20px;
--radius-card: 20px;
--radius-nav: 10px;
```

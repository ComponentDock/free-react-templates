# Carvery — Design Notes

Source: ColorLib Steak → https://preview.colorlib.com/theme/steak/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/steak-free-template.jpg

## Visual Design Summary

Elegant steakhouse/restaurant template with a dark, moody aesthetic.
The hero uses a full-viewport parallax image with a semi-transparent dark
overlay, creating depth. The brand accent is a warm amber (#fba83b) that
contrasts against the predominantly white and black palette.

Typography is Playfair Display — a refined serif that conveys upscale
dining. Headings are large (display-4 = 3.5rem) and black. Body text is
muted gray (#999). The overall feel is premium but approachable.

## Section-by-Section Fidelity Notes

### Header
- Transparent over hero, becomes white+fixed on scroll with box-shadow
- Logo text: "Carvery" in Playfair Display, white (over hero) → black (scrolled)
- Hamburger menu: three-line icon, spins on toggle
- Mobile menu: full-screen black overlay with centered nav links

### Hero (Parallax)
- Full-viewport height (100vh on desktop, min-height 800px)
- Background image with CSS parallax (translateY on scroll)
- Dark overlay: #313137 at 40% opacity
- Heading: "Welcome To Carvery — Food & Restaurant" (white, centered)
- Button: white outline, uppercase, "Play Video"
- Mouse scroll indicator: 22×42px border box with animated dot

### About
- Full-width container, no max-width constraint
- Left side: parallax food image, vertically offset (-44% translateY)
- Right side: text overlay positioned absolutely on desktop
- Heading: display-4, "Welcome To Carvery Food & Restaurant"
- Two paragraphs of body text
- Black outline "Read More" button

### Services (bg-light)
- Light gray background (#f8f9fa)
- Centered heading + lead paragraph
- 3×2 responsive grid (col-md-6 col-lg-4)
- Each card: large icon (80px, #d6dadd), amber title (h5), gray description
- Icons from lucide-react: Utensils, Beef, Salad, Leaf, Drumstick, Steak

### Menu
- White background section
- Three pill tabs: Breakfast / Lunch / Dinner
- Tab style: border 2px solid #ccc, uppercase, letter-spacing 0.2em
- Active tab: black border, no background fill (just border color change)
- Two-column menu items (col-md-6)
- Each item: circular thumbnail (100px, border-radius 50%), name, description, price
- Price: h6, text-primary (#fba83b), 24px font

### Fun Facts (bg-light)
- Light gray background
- Counter statistics with large numbers (50px, black)
- Labels: uppercase, black, 50% opacity

### News & Events
- White background
- Blog/event cards with background images
- Height: 500px (or 350px sm variant)
- Hover: overlay opacity increases, content slides in from top
- Content: title (white) + post metadata

### Testimonials (bg-light)
- Light gray background
- Large quotation mark: 100px, black, centered
- Review text: 18px, black, line-height 2
- Author: circular photo (80px), name, position (gray)

### Reservation
- White background
- "Reserve A Table" heading + lead text
- Two-part layout (table-cell on desktop):
  - Left: dark (#000) panel, 400px wide, white text, opening hours
  - Right: white panel with form
- Form inputs: bottom-border only (no full border), 50px height
- Fields: Party Size (select), Date, Time, Name, Phone, Email
- Submit: full-width black button, "Reserve Now"

### Map
- Full-width, 680px height (with negative top margin on desktop)
- Placeholder: static map image or embedded iframe

### Footer
- White background, 7em vertical padding
- 4-column layout on desktop, stacking on mobile
- Widget headings: uppercase, 15px, #cccccc
- Social icons: 20px, hover → amber
- Copyright: centered, links to Component Dock

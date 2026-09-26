# CivicPulse — Political/Party Landing Template

Recreation of ColorLib Politics (https://colorlib.com/wp/template/politics/)

## Design Tokens (from preview CSS)

- **Primary brand color:** #3898f8 (blue)
- **Background light:** #f9f9ff (very light blue-gray)
- **Background dark/footer:** #04091e (near-black navy)
- **Heading color:** #222222
- **Body text:** #777777
- **Font family:** Poppins (Google Fonts), weights 300–700
- **Button style:** rounded pill (border-radius: 25px), primary: #3898f8 bg, white text
- **Header top bar:** #222222 bg, white text
- **Counter overlay:** rgba(0,0,0,0.7) over background image
- **Section padding:** 120px vertical (section-gap)
- **Accordion active:** #3898f8 bg, white text
- **Blog date badge:** #000 bg, white text
- **Footer social hover:** #3898f8

## Section Structure (in order)

1. **TopBar** — dark bar (#222) with social icons (Facebook, Twitter, Dribbble, Behance) left, phone + email right
2. **Navbar** — logo left, nav links right (Home, About, Service, Team, Blog dropdown, Elements, Contact), sticky white bg on scroll
3. **Hero** — full-screen background image with dark overlay, centered text: "Don't look further, This is our Leader" subtitle + "Support Our Party" heading + lorem paragraph + "Get Started" CTA button
4. **Countdown** — split layout: left "Election is knocking at door" + subtitle, right blue (#3898f8) countdown timer area with days/hours/minutes/seconds
5. **Services** — centered heading "What we Offer to our Supporters", 3 image cards with titles (Conduct Campaign, Generate Member, Energy Saving Policy) + descriptions
6. **About** — split: left background image, right content "Who we are to Serve the nation" + description + 2 feature items (Expert Services with diamond icon, Great Support with phone icon)
7. **Gallery** — centered heading "Our Gallery Archive", 4 images in masonry grid (8+4 cols, then 6+6 cols)
8. **Counter** — dark overlay background, 4 circular stat counters (2K+ Projects, 5.5K Employees, 959 Clients, 367 Tickets)
9. **Feedback** — split: left accordion (Success, Info, Danger, Warning items), right video play button with dark overlay
10. **Brands** — logo carousel strip on light bg
11. **Blog** — centered heading "Latest From Our Blog", 4 blog cards (image, date, title, excerpt, likes/comments)
12. **Footer** — dark bg (#04091e), 3 columns: Top Products links, Newsletter with email input + subscribe, Instagram feed grid; bottom: copyright + social icons

## Scenarios

### Navbar

- Renders all nav links (Home, About, Service, Team, Blog, Elements, Contact)
- Logo is visible and links to home
- Top bar shows phone and email

### Hero

- Displays heading "Support Our Party"
- Displays CTA button "Get Started"
- Background image with dark overlay

### Countdown

- Shows "Election is knocking at door" heading
- Displays countdown timer values

### Services

- Renders 3 service cards with images, titles, descriptions
- Cards are responsive (stack on mobile)

### About

- Shows "Who we are to Serve the nation" heading
- Displays 2 feature items with icons

### Gallery

- Renders 4 gallery images in grid layout
- Images have hover opacity effect

### Counter

- Shows 4 stat counters with values and labels
- Circular design with blue accent

### Feedback

- Accordion with 4 items (Success, Info, Danger, Warning)
- Clicking an item expands its content
- Only one item open at a time
- Video play button on right side

### Blog

- Renders 4 blog cards with image, date, title, excerpt
- Shows likes and comments count

### Footer

- Links to Component Dock (https://www.componentdock.com/)
- Newsletter email input
- Social media icons
- Copyright text

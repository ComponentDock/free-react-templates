# Zephyrine — Implementation Tasks

Source: ColorLib Dinomuz (https://colorlib.com/wp/template/dinomuz/)
Preview: https://preview.colorlib.com/theme/dinomuz/

## Design Notes

- **Boxed layout**: The original uses `width: 68.75%; margin: 0 auto;` on the main wrapper, creating a centered boxed design over a dark textured body background. Replicate with a max-w container + dark body bg.
- **Gradient brand identity**: The pink-to-orange gradient (`#e66587 → #f09458`) is the defining visual. Use Tailwind `bg-gradient-to-t from-[#e66587] to-[#f09458]` throughout.
- **Pill buttons**: `.primary-btn` has `border-radius: 20px`, transparent bg with white border, gradient overlay on hover. Replicate as `rounded-full` with gradient bg and white text.
- **Hover overlays on service cards**: White semi-transparent overlay (`rgba(255,255,255,0.89)`) fades in on hover. Use Tailwind group-hover with opacity transition.
- **Service grid**: 8 items in a 4-column grid (`col-lg-3`). Each has a 10rem-tall image thumbnail with overlay.
- **Carousel**: 5 portfolio items with image + caption. Use a simple CSS scroll or basic carousel.
- **Dark footer**: `rgba(0,0,0,0.25)` background, white text, social icon circles with white border.

## Section-by-Section Tasks

### 1. App scaffold
- [ ] Create `apps/zephyrine/` from simplest existing app
- [ ] Rename package to `@free-react-templates/zephyrine`
- [ ] Set up `vite.config.ts` with `injectUiSource()`
- [ ] Set up `public/CNAME` with `zephyrine.free.componentdock.com`
- [ ] Set `homepage` in `package.json`
- [ ] Add Poppins font link to `index.html` (weights 300, 500, 600)
- [ ] Configure Tailwind `@theme` with brand colors (#e66686, #f09359, #222222, #777777, #f9f9ff)

### 2. Layout shell
- [ ] Body: dark textured background (use picsum placeholder), Poppins font
- [ ] Main wrapper: max-w-[68.75%] mx-auto centered box
- [ ] Header component with logo + nav links + hamburger menu

### 3. Banner/Hero
- [ ] Full-width gradient background (pink-to-orange, bottom-to-top)
- [ ] Centered content: subtitle "Re-imagining the way", headline, CTA button
- [ ] Pill-shaped CTA button with gradient fill and arrow icon

### 4. Featured Area
- [ ] 3-column row, white background
- [ ] Feature card: gradient icon circle + title + description
- [ ] Cards: Stunning Visuals, Clean Code, Punctuality

### 5. Service Area
- [ ] Gradient background section
- [ ] 4-column grid of 8 service cards
- [ ] Each card: image thumbnail (use picsum), hover overlay with fade transition
- [ ] Services: Creative Design, Driving Lesson, Climbing Stairs, Bike Accident, Car Driving, Beach Hotel, Under Passway, Dawn to Dusk

### 6. Amazing Works Carousel
- [ ] Light lavender background (#f9f9ff)
- [ ] Section title + subtitle
- [ ] 5-item carousel with image + caption
- [ ] Use picsum images with deterministic seeds

### 7. Story Area
- [ ] Gradient background section
- [ ] 2-column layout: title left, narrative + CTA right
- [ ] "Our Untold Story" heading, paragraph, "Get Started" button

### 8. Subscription Area
- [ ] White background, centered
- [ ] "Subscribe for our Newsletter" heading
- [ ] Email input + submit button (use lucide-react Mail icon)

### 9. Footer Widgets
- [ ] 3-column layout: Address, Email, Phone
- [ ] Each: gradient icon circle + title + description

### 10. Footer
- [ ] Dark overlay background
- [ ] Logo, copyright text, social icons (Facebook, Twitter, Dribbble via lucide-react)
- [ ] Component Dock attribution link

# Bonquet Template Tasks & Design Notes

## Overview

- **Source:** ColorLib Restauco (`https://preview.colorlib.com/theme/restauco/`)
- **New Name:** Bonquet (`apps/bonquet`)
- **Category:** Food & Restaurant

## Section Order & Fidelity Plan

1. **Navbar (`Navbar.tsx`):**
   - Sticky header with soft peach background (`#FFF4F2`), logo, links (Home, Menu, About, Blog, Contact), "Book a Table" button, phone number CTA (`+10 (78) 783 3674`).
2. **Hero (`Hero.tsx`):**
   - Split layout: left caption with heading "Meet, Eat & Enjoy the true test", description, "Our Menu" pill button, and Watch Video button with icon. Right side hero image with rating badge overlay.
3. **Features / About (`Features.tsx`):**
   - Quality food highlights, fresh ingredients, chef specialties with cards and icons.
4. **Menu (`Menu.tsx`):**
   - Tabbed menu filter (All, Breakfast, Lunch, Dinner) displaying delicious dishes with pricing and descriptions using picsum placeholders.
5. **Reservation (`Reservation.tsx`):**
   - Table reservation form with inputs for name, email, phone, date, time, and number of persons, plus submit action.
6. **Testimonials / Gallery (`Testimonials.tsx`):**
   - Customer reviews carousel / grid highlighting dining experiences.
7. **Footer (`Footer.tsx`):**
   - Warm background footer with about blurb, contact info, newsletter signup, quick links, and mandatory Component Dock attribution linking `https://www.componentdock.com/`.

## Design Tokens & Tailwind Configuration

- Colors: `#FE5F41` (coral primary), `#4D312C` (heading deep brown), `#94817E` (muted text), `#FFF4F2` (cream background).
- Fonts: `Mitr` for headings, `Raleway` for body.

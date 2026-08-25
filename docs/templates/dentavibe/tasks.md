# Dentavibe — Implementation Plan & Tasks

## Overview

Recreation of ColorLib **Toothcare** (`https://colorlib.com/wp/template/toothcare/`) under the original name `dentavibe` (`apps/dentavibe`).

## Section Order & Structure

1. `Navbar.tsx` (Top bar with contact hours, phone, location + sticky main navigation bar with "Make An Appointment" CTA button)
2. `Hero.tsx` (Slider hero banner with headline "Dentist Services that You Can Trust", subtitle, and primary/secondary action buttons)
3. `AppointmentSection.tsx` (Appointment booking form with name, email, phone, date, time, doctor dropdown, and message)
4. `Features.tsx` (4 highlights: Easy Booking, Team Dentist, Best Price Guarantee, Tooth Protection)
5. `Services.tsx` (Grid of 8 dental services with Lucide icons)
6. `AboutStats.tsx` (Clinic overview with animated counters: 3000 Patients, 2200 Operations, 24 Hours Care)
7. `Doctors.tsx` (Qualified dentists grid with roles and social links)
8. `CtaBanner.tsx` ("Do not wait make an appointment today!" banner)
9. `Testimonials.tsx` (Happy customers review carousel / slider)
10. `Gallery.tsx` (Treatment results showcase)
11. `Blog.tsx` (Recent dental care blog posts)
12. `Pricing.tsx` (Pricing & Packages tiers)
13. `Footer.tsx` (Footer widgets, quick links, recent posts, contact info, and mandatory Component Dock link `https://www.componentdock.com/`)

## Design Notes & Fidelity

- Palette: Primary Cyan `#00bcd4`, text dark `#212529`, muted `#6c757d`, section background `#f8f9fa`.
- Font: Roboto via Google Fonts link in `index.html`.
- Placeholder images: `https://picsum.photos/seed/dentavibe-<n>/<w>/<h>`.

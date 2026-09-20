# Assembly — Design Notes & Implementation Todo

Source: ColorLib "Convention" (https://preview.colorlib.com/theme/convention/)
New name: assembly

## Section order (1:1 with original)

1. TopBar — phone, email, social icons, Buy Ticket button
2. Navbar — dark, sticky, brand "Assembly", 7 nav links, hamburger
3. Hero — full-width bg image + overlay, headline, location/date, countdown timer
4. About — split layout: image left, text right with subheading + year-established stat
5. Counter — parallax bg, 4 stat blocks (Places/Events/Photos/Speakers) with icons + animated numbers
6. Schedule — bg-light, 4 day tabs, 3 session cards per day (speaker img, time, title, desc, name)
7. Speakers — purple overlay header, 5 staff cards with hover social reveal
8. Gallery — 4x2 image grid with lightbox popup
9. Testimonials — bg-light, carousel with quote, stars, user img, name
10. Blog — 3 cards with image, meta, title, excerpt
11. Registration CTA — bg image, form (First/Last/Phone/Price/Submit)
12. Footer — 5 columns (logo+social, Explore, Info, Buy Ticket, Contact)
13. Copyright — black bar, Component Dock attribution

## Design token notes

- Brand blue: #007bff (use as @theme primary)
- Purple accent: #423ead (speakers overlay)
- Fonts: Barlow (body), Barlow Condensed (headings) via Google Fonts link
- Dark surfaces: #232429 (navbar, footer base)
- Light sections: #f8f9fa
- Buttons: rounded 0.25rem, blue bg white text
- Counter section uses parallax bg image with overlay

## Component mapping

- TopBar → components/TopBar.tsx
- Navbar → components/Navbar.tsx
- Hero → components/Hero.tsx (countdown logic in component)
- About → components/About.tsx
- Counter → components/Counter.tsx (animated numbers via intersection observer)
- Schedule → components/Schedule.tsx (tab state, day switching)
- Speakers → components/Speakers.tsx (hover reveal social)
- Gallery → components/Gallery.tsx (lightbox via package or custom)
- Testimonials → components/Testimonials.tsx (carousel)
- Blog → components/Blog.tsx
- Registration → components/Registration.tsx (form with select)
- Footer → components/Footer.tsx

## Fidelity notes

- Countdown timer: original uses jQuery animateNumber + waypoints; replace with React state + setInterval + IntersectionObserver
- Schedule tabs: original uses Bootstrap pills; implement with controlled tabs
- Gallery lightbox: original uses Magnific Popup; use a React lightbox library or custom
- Testimonials carousel: original uses Owl Carousel; implement with CSS scroll-snap or a React carousel
- Parallax: original uses stellar.js; implement with CSS background-attachment: fixed
- Social hover reveal on speaker cards: CSS group-hover
- All images use picsum.photos placeholders with deterministic seeds

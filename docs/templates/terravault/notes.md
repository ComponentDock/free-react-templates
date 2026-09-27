# Terravault — Design Notes & Task Outline

Source: ColorLib Azenta
Preview: https://preview.colorlib.com/theme/azenta/

## Section Order (top → bottom)

1. **Navbar** — dark bg, white links, language dropdown, teal "Submit Property" CTA
2. **Info Bar** — white bg, logo left, phone/address/email right with teal icons
3. **Hero** — full-width property photo, centered overlay card with address, name, price, stats (sqft, beds, baths, garage), thumbnail gallery below
4. **Search Form** — teal tab bar ("Find Your Home" / "House For Sell"), form with dropdowns (type, title, city, bedrooms), price/size sliders, teal Search button
5. **How It Work** — 3-step process with icons: Search & Find Apartment, Find Your Room, Talk To Agent
6. **Featured Properties** — 4-column grid of property cards (image, name, price)
7. **Top Properties** — 3-column grid of larger property cards with images and prices
8. **Our Agents** — 4-column grid of agent cards (photo, name, role)
9. **Blog/News** — 3-column grid of blog cards (image, title, date)
10. **Newsletter** — subscribe section with email input
11. **Footer** — dark bg, city links, social icons, attribution (replace with ComponentDock)

## Fidelity Notes

- Hero is the visual centerpiece: full-bleed property photo with a semi-transparent dark overlay card centered on top
- Teal (#2cbdb8) is the dominant accent — appears on: Submit Property button, active search tab, Search button, icons, underline accents
- The search form is a key interactive element: tab switcher + multi-field form with range sliders
- Property cards use a clean card layout with image on top, text below
- Agent cards have circular/rounded photos with name and role below
- The info bar below the nav is a distinctive element — logo + 3 contact details with teal circle icons
- Footer has a dark background with city links arranged in columns
- Poppins is the only font family used throughout

## Component Plan

- `Navbar.tsx` — dark nav with links, language dropdown, teal CTA button
- `InfoBar.tsx` — logo + phone/address/email with teal circle icons
- `Hero.tsx` — full-width photo, overlay card with property details, thumbnail gallery
- `SearchForm.tsx` — tab bar + form with dropdowns, sliders, search button
- `HowItWorks.tsx` — 3-step section with icons
- `FeaturedProperties.tsx` — 4-column property card grid
- `TopProperties.tsx` — 3-column property card grid
- `Agents.tsx` — 4-column agent card grid
- `BlogNews.tsx` — 3-column blog card grid
- `Newsletter.tsx` — subscribe section with email input
- `Footer.tsx` — dark footer with city links, social icons, componentdock link

## Design Tokens (CSS extraction)

- Brand teal: #2cbdb8
- Dark: #19191a
- Body text: #707079
- Subtle text: #aaaab3
- Light bg: #F2F4F5
- White: #ffffff
- Red accent: #E1481F (price highlight, sparingly)
- Font: Poppins, sans-serif
- Icon font: FontAwesome
- Button radius: 50px (pill shape)
- Card radius: 0 (sharp corners)
- Icon circle: 50% radius, teal bg

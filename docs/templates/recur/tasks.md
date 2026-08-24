# Tasks & Implementation Outline: Recur (ColorLib Repeat)

## Overview

- **Source:** ColorLib Repeat (`https://colorlib.com/wp/template/repeat/`)
- **Preview URL:** `https://preview.colorlib.com/theme/repeat/`
- **Target App Name:** `recur` (`@free-react-templates/recur`)

## Section Breakdown & Implementation Order

1. **Navbar (`src/components/Navbar.tsx`)**
   - Brand logo "Recur"
   - Desktop nav links (Home, Services, Pricing, About, Contact Us)
   - Mobile responsive menu toggle (hamburger)
2. **Hero (`src/components/Hero.tsx`)**
   - Background image overlay (`images/hero_1.jpg` via picsum seed)
   - Headline: "We are pretty Awesome"
   - Subtitle & Primary CTA button ("Our services")
3. **About (`src/components/About.tsx`)**
   - Split layout with images and `.intro-box` with `.v-line` accent
   - Growth copy and description paragraphs
4. **Services (`src/components/Services.tsx`)**
   - Dark background section with heading "What We Offer"
   - Service cards: Web Design, Graphic Design, Web/Mobile Application, Brand Identity
5. **Stats (`src/components/Stats.tsx`)**
   - 4-column counter blocks with Lucide icons (Handshake, Mouse, Browser, Cursor)
6. **Media / Features (`src/components/MediaSection.tsx`)**
   - Split layout with image and text blocks ("Get anything done in one place")
7. **Footer (`src/components/Footer.tsx`)**
   - Multi-column footer (Contact, Sources, Links)
   - Mandatory Component Dock link (`https://www.componentdock.com/`)

## Fidelity Notes

- **Colors:** Primary coral `#ff8e71`, secondary dark blue `#003a70`, dark section backgrounds `#212529`.
- **Fonts:** Roboto for body, Comfortaa for headings (loaded via Google Fonts link in `index.html`).
- **Images:** Use deterministic picsum seed URLs (`https://picsum.photos/seed/recur-1/600/600`, etc.).
- **No ColorLib Provenance in Code:** No mention of ColorLib in source files; provenance resides exclusively in this spec, TEMPLATES.md, and the PR description.

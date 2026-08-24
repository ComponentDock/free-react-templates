# Lawguard Template Tasks & Design Notes

## Overview

- **Source Template:** Solicitor (`https://colorlib.com/wp/template/solicitor/`)
- **New Name:** Lawguard (`apps/lawguard`)
- **Aesthetic:** Professional legal, investigative, and litigation services agency theme. Clean modern typography (Roboto), crisp blue accents (`#037ef3`), and deep dark charcoal contrast blocks (`#0f0f11`).

## Section Implementation Order

1. **Navbar (`Navbar.tsx`)**: Sticky navigation with brand logo ("Lawguard"), nav links (Home, Practicing Area, Services, About, Contact Us), phone header widget (`123-489-9381`), and responsive mobile menu toggle.
2. **Hero (`Hero.tsx`)**: Fullscreen hero (`h-screen min-h-[780px]`) with background image, dark overlay (`bg-black/40`), main headline ("Meet all your investigative and litigation needs"), subtext, and dual CTA buttons ("Our services", "Contact us").
3. **About Me (`About.tsx`)**: Founder/firm intro section ("I'm Jon Campbell"), dark background wrapper (`bg-[#0f0f11]`), overlapping image wrap, and descriptive bio copy.
4. **Services (`Services.tsx`)**: Grid of 6 service cards (Counsel, Legal Dept, Compliance, Identity, Hall of Justice, Law Abiding) with Lucide icons and hover background state transitions to `#037ef3`.
5. **Security Consultants / Editorial (`SecurityConsultants.tsx`)**: Section highlighting justice service capabilities with tabbed interactive widget ("Investigative Services", "Security Consultations", "Criminal Defense Investigations").
6. **Practice Area (`PracticeArea.tsx`)**: Numbered list of practice areas (Asset Searches, Background Investigations, Business Due Diligence, Civil Investigations, etc.) with interactive accordions/tabs.
7. **Testimonials (`Testimonials.tsx`)**: Testimonial section with tabbed avatar navigation, quotes from CEO/Founders, and large typographic blockquotes.
8. **Resources (`Resources.tsx`)**: Multi-column list of legal resources, articles, and useful links.
9. **Contact Form (`ContactSection.tsx`)**: "Write to us" form with input validation (Full Name, Email, Phone Number, Service selector, Message) and Google Maps embed placeholder.
10. **Footer (`Footer.tsx`)**: Comprehensive 4-column footer with company address, contact phone/email, quick links, social links, copyright, and mandatory Component Dock footer attribution (`https://www.componentdock.com/`).

## Design Fidelity Notes

- **Colors:** Primary blue `#037ef3`, dark contrast `#0f0f11`, neutral slate `#6c757d`.
- **Typography:** Sans-serif Google Font (Roboto).
- **Images:** Deterministic Picsum seed URLs (`https://picsum.photos/seed/lawguard-<n>/<w>/<h>`).

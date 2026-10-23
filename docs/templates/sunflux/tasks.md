# Sunflux — Implementation Todo + Design Notes

## Template Info
- **New name:** sunflux
- **Original:** SolarShift (ColorLib)
- **Preview:** https://solarshift-colorlib.pages.dev/
- **Category:** Solar Energy Business
- **App folder:** apps/sunflux

## Design Notes

### Overall Aesthetic
- Clean, modern solar energy business template
- Green (#16a34a) as the primary brand color throughout
- Amber (#f59e0b) as accent for star ratings and gradient endpoints
- Gradient text effect on hero headline: green → amber
- Light background (white/gray-50) with a dark footer
- Full dark mode support with class-based toggle

### Section-by-Section Fidelity Notes

1. **Navbar**
   - Sticky, semi-transparent white/blur background
   - Logo left, nav center, CTA + dark toggle right
   - Services has a dropdown on hover (3 sub-links)
   - Mobile: hamburger → slide-down menu with accordion for Services
   - Use lucide-react: Sun, Moon, Menu, ChevronDown, Phone icons

2. **Hero**
   - Two-column grid (lg:grid-cols-2)
   - Left: badge pill "Go Solar Today" with animated ping dot
   - Headline with gradient text span (typewriter effect optional)
   - Two CTA buttons: "Get Free Quote" (green filled) + phone (outlined)
   - Social proof: "Join 10,000+ homeowners" + 2 stat counters
   - Right: Calculator widget card with rounded-2xl border
   - Decorative: blurred gradient circles with parallax/float animation
   - Wave SVG divider at bottom

3. **Stats Bar**
   - Simple 4-column grid on gray-50 background
   - Each stat: large bold number + small label text
   - Numbers: 10K+, $50M+, 98%, 50

4. **Services**
   - Badge "Services" → heading "Complete Solar Solutions" → description
   - 3 cards in responsive grid (sm:grid-cols-2 lg:grid-cols-3)
   - Each card: rounded-2xl, border, icon in green-100 bg, title, description
   - Services: Residential Solar, Commercial Solar, Battery Storage
   - Icons: Sun, Building2, BatteryCharging (lucide-react)

5. **ROI Calculator**
   - Heading "See Your Return on Investment"
   - Comparison table/chart: Solar vs Traditional energy
   - Animated ROI bars
   - Key metrics: 25-year savings, payback period, annual output

6. **Installation Timeline**
   - Heading "Simple Installation Process"
   - Vertical timeline with numbered steps and connecting line
   - Steps: Consultation → Design → Installation → Activation

7. **Testimonials**
   - Horizontal carousel with prev/next buttons and dot indicators
   - Cards: 5-star rating (amber), quote, customer name, location
   - At least 3 testimonials

8. **CTA Banner**
   - Full-width primary-600 bg (dark:bg-primary-900)
   - White text heading + description
   - Two buttons: "Get Free Quote" (white bg, green text) + phone (bordered)

9. **FAQ**
   - Accordion with 5+ questions
   - Each: bordered container, button header with +/- icon toggle
   - Smooth expand/collapse transition

10. **Contact Form**
    - 2-column grid for name + email
    - Service Interest dropdown
    - Message textarea
    - Submit button with arrow icon
    - Office Hours info card below form

11. **Footer**
    - Dark gray-900 background
    - 4-column grid: Brand (logo + tagline + social icons) | Solutions | Resources | Company | Contact
    - Bottom bar: copyright + privacy/terms/style-guide links
    - Social icons: Facebook, LinkedIn, Twitter/X

## Component List (to create)
- src/App.tsx (composes all sections)
- src/components/Navbar.tsx
- src/components/Hero.tsx
- src/components/StatsBar.tsx
- src/components/Services.tsx
- src/components/ROICalculator.tsx
- src/components/InstallationTimeline.tsx
- src/components/Testimonials.tsx
- src/components/CTABanner.tsx
- src/components/FAQ.tsx
- src/components/ContactForm.tsx
- src/components/Footer.tsx

## Key Implementation Notes
- Calculator logic: annual savings = monthly bill × 12 × sunFactor × 0.7 (70% savings typical)
- CO2 offset = (monthly bill / rate-per-kwh) × 12 × co2Factor
- Payback = systemCost / annualSavings
- Tax credit = systemCost × 0.30 (30% federal)
- Sun factors per state: CA 1.2, TX 1.1, FL 1.15, AZ 1.3, NY 0.9, CO 1.05, NV 1.25, GA 1.0
- Dark mode: toggle adds/removes `.dark` class on documentElement, persists to localStorage
- All placeholder images: https://picsum.photos/seed/sunflux-N/WxH
- Footer MUST link https://www.componentdock.com/ (branded as "Component Dock")

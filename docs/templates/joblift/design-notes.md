# Joblift — Design Notes

**Source**: ColorLib "Comport" — https://colorlib.com/wp/template/comport/
**Preview**: https://preview.colorlib.com/theme/comport/
**New name**: joblift

## Visual Design

A job portal / directory website with a clean, professional aesthetic. The dominant color is orange (#ff9902) used for the brand, search bar, buttons, and accents against a white/gray background. The footer is a deep navy (#04091e). Typography uses Poppins for headings (bold, uppercase) and Open Sans for body text.

## Section Order (from preview DOM)

1. **Navbar** — White background, dark text, "Joblift" brand with logo icon. Links: Home, About Us, Category, Blog, Contact, Pages. Log In / Sign Up buttons right-aligned. Mobile: orange hamburger toggle.

2. **Hero** — Split layout. Left half: office/professional background image. Right half: white, large heading "FIND YOUR DREAM JOB WITH COMPORT" (orange accent on "JOB"), descriptive paragraph, "EXPLORE NOW →" secondary link.

3. **Search Bar** — Overlapping hero bottom. Orange (#ff9902) background. Horizontal form: two select dropdowns (Category, Location), text input, "FIND JOB" dark button (#111). Stacks on mobile.

4. **Features** — 3-column cards on gray #f9f9f9 background. Each: heading, description, "EXPLORE NOW →" secondary link. Hover: white + shadow.

5. **Categories** — Centered "Find job by category" heading. 8 cards in 4-col grid (2 rows). Each: icon image, category name, "250 open job" count. Gray bg + border, hover: white + shadow.

6. **Browse Jobs** — "Browse recent jobs" heading. Tabbed (Recent/Full Time/Part Time/Intern). Job rows: title, location/category/deadline with icons, job image, "full time" badge (colored per type: blue #00afed, red #cc2229, teal #0088cc, green #2dc100), "apply" button (orange).

7. **Newsletter** — Background image + dark overlay (rgba(1,2,12,0.6)). White heading "Get job information daily", subtitle, email input, "SUBSCRIBE NOW" orange button. Centered.

8. **Employee / Testimonials** — "Happy employee" heading. Carousel slides. Each: employee photo (left) + quote text (right). Photo hover overlay: orange (rgba(255,153,2,0.7)) reveals name + company.

9. **Blog / News** — "Company latest news" heading. 3 blog cards. Each: background image (rounded 5px), date + category tag metadata, linked headline.

10. **Download App** — Split layout. Left: heading "Download the app your mobile today", description, two download buttons (App Store / Play Store) with icons. Right: phone mockup background image.

11. **Footer** — Dark navy (#04091e). 3 widget columns: "top products" (link list), "newsletter" (email form), "instagram feed" (8 small images). Copyright line + social icons (Facebook, Twitter, Dribbble, Behance). Social icons hover: white on orange.

## Fidelity Notes

- The original uses Bootstrap 4 grid and jQuery plugins (owl-carousel, nice-select). React implementation will use Tailwind grid + CSS-only tabs (or lightweight state).
- "nice-select" custom selects → native `<select>` elements styled with Tailwind.
- Tab switching in "Browse Recent Jobs" → React state with conditional rendering (no jQuery).
- Owl Carousel for testimonials → CSS-based carousel or simple slide state.
- Placeholder images → `https://picsum.photos/seed/joblift-<n>/WxH`.
- Font Awesome 4 icons → `lucide-react` equivalents (map-marker, pie-chart, clock, calendar, folder-open, social icons).
- Footer MUST link Component Dock (replaces ColorLib attribution).
- No references to "Colorlib" or "comport" anywhere in app code.

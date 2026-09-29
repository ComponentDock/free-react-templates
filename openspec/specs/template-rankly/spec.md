# Template: Rankly (SEO Analysis Landing)

## Purpose

Rankly is a single-page SEO/analysis landing page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Seo" design
(https://colorlib.com/wp/template/seo/), built under a DIFFERENT name
(**Rankly**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design Tokens (extracted from preview)

- **Font:** Poppins (Google Fonts), sans-serif
- **Primary brand color:** #f54349 (red)
- **Body text:** #777777
- **Headings:** #222222
- **Section backgrounds:** white and #f9f9ff (light grayish-blue)
- **Hero overlay:** dark semi-transparent overlay on background image
- **Buttons:** primary-btn style, red (#f54349) solid background, white text, rounded, uppercase
- **Pricing cards:** white background, subtle shadow, red accent

## Sections (in order)

1. **TopBar** — phone + email left, "Free SEO Analysis" link right; light bg
2. **Navbar** — logo text "Rankly", nav links (Home, Service, Plan, Team, Blog), hamburger toggle
3. **Hero** — dark overlay bg, headline "SEO Analysis Helps to Upgrade Website Ranking", description, "Get a Quote" CTA, decorative image right
4. **Services** — "Device Related Services" heading, 3 icon+title+text cards (Site Audit, Keyword Research, Content Optimization)
5. **About** — split: decorative chart placeholder left, text right ("We Believe That Strategy Drives Growth"), "See Details" CTA
6. **Features** — "Ranking Improvement Solutions" heading, split text left + image right ("Helps You Increase Website Traffic"), "Research Details" CTA
7. **Pricing** — "Choose the Perfect Plan for You" heading, 3 pricing cards (Standard $199, Business $399, Ultimate $499) with features list and "Purchase Plan" button
8. **Team** — "About Our Creative Team" heading, 4 team members with photos, names, roles, social icons
9. **Testimonials** — dark overlay bg, avatar + quote + name + role
10. **Blog** — "Latest From Our Blog" heading, 4 blog cards (image, date, title, excerpt, likes/comments)
11. **Brands** — 5 brand logos in a row
12. **Contact** — "Contact Us" heading, form (name, email, subject, message textarea, "Send Message" button)
13. **Footer** — 3 columns: Top Products links, Newsletter form, Instagram feed grid; social icons; copyright line with "Made with ❤ by Component Dock" linking https://www.componentdock.com/

## Fidelity Notes

- Match original section order, layout, and color palette exactly
- Replace ColorLib logo/assets with picsum.photos placeholders
- Replace Font Awesome icons with lucide-react equivalents
- Footer links to Component Dock instead of Colorlib
- No ColorLib references in app code

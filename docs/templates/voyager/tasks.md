# Voyager Template Implementation Outline & Task Breakdown

Recreation of ColorLib "Passport" template (`https://colorlib.com/wp/template/passport/`).
App folder: `apps/voyager` (`@free-react-templates/voyager`).
Deployed at: `voyager.free.componentdock.com`.

## Section Breakdown & Component Architecture

1. **Navbar** (`src/components/Navbar.tsx`)
   - Logo: Voyager with brand icon / accent dot.
   - Nav items: Home, About Us, Dropdown, Services, Blog.
   - Action: "Contact Us" pill button.
   - Responsive mobile menu drawer.

2. **Hero** (`src/components/Hero.tsx`)
   - Background image with dark overlay (`bg-black/40` or gradient overlay).
   - Heading: "It is Better to Travel Well Than to Arrive".
   - Subtitle / Action button: "Watch Video".

3. **AboutExplore** (`src/components/AboutExplore.tsx`)
   - Heading: "Explore All Corners of The World With Us".
   - 2-column grid: descriptive text + dual image collage (`https://picsum.photos/seed/voyager-about-1/790/1000`).

4. **Destinations** (`src/components/Destinations.tsx`)
   - Heading: "We Provide Top Destinations".
   - Cards grid featuring Maldives and other scenic spots with `https://picsum.photos/seed/voyager-dest-.../600/400`.

5. **Testimonials** (`src/components/Testimonials.tsx`)
   - Heading: "Testimonials" / "Happy Customer".
   - Review card with quote, avatar (`https://picsum.photos/seed/voyager-test-1/200/200`), name (Rob Smith), title (Product Designer at Twitter).

6. **Faq** (`src/components/Faq.tsx`)
   - Heading: "Frequently Asked Questions".
   - Interactive accordion items (download/register, PayPal account, linking bank, better than others) with expand/collapse state.

7. **RecentPosts** (`src/components/RecentPosts.tsx`)
   - Heading: "Recent Posts".
   - 4-item grid with blog cards (thumbnail, headline "Far far away, behind the word mountains", read more link).

8. **CtaBanner** (`src/components/CtaBanner.tsx`)
   - Orange background (`bg-[#fc8621]`), text "Begin your adventurous journey here.", "Get started" button.

9. **Footer** (`src/components/Footer.tsx`)
   - 5 columns: About Passport, Connect (social icons), Links, Company, Contact info (address, phone, email).
   - Component Dock footer link (`https://www.componentdock.com/`).

## Implementation Checklist

- [ ] Initialize `apps/voyager` following conventions (Vite + React 19 + Tailwind v4 + TS).
- [ ] Configure `vite.config.ts` with `injectUiSource()`.
- [ ] Configure `public/CNAME` with `voyager.free.componentdock.com`.
- [ ] Implement components with 100% test coverage (`*.test.tsx`).
- [ ] Verify build, lint, typecheck, and coverage.

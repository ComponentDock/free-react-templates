# Caliber — Implementation Task Outline

Source: ColorLib "Classic" (https://colorlib.com/wp/template/classic/)
Preview: https://preview.colorlib.com/theme/classic/
Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Task order (by section, top to bottom)

1. **Bootstrap app** — copy simplest existing app, rename package to
   `@free-react-templates/caliber`, set `public/CNAME` to
   `caliber.free.componentdock.com`, update `homepage` in `package.json`.

2. **Navbar** — transparent-on-top, dark on scroll; logo "Caliber" +
   nav links (Home, Services, Portfolio, Team, Price, Blog, Contact) +
   dark-mode toggle + mobile hamburger menu.

3. **Hero** — full-width background image (seeded picsum) with dark
   overlay; h1 "We Are Provide Creative Business" + tagline + "Contact Now"
   CTA button linking to #contact.

4. **About** — white bg; heading "We Offer Quick & Powerful Business
   Solution" + paragraph + "Learn More" button + device mockup illustration
   (seeded picsum or SVG placeholder).

5. **Mission/Vision/Support** — gray bg (#f9f9f9); video thumbnail left
   + tabbed panel right (Our Mission / Our Vission / Our Support) with
   "View More" buttons; implement as controlled tabs.

6. **Services** — white bg; 6 feature cards in 3x2 grid; each has icon
   (lucide-react), title, description, "Read More" link.

7. **Skills** — gray bg; heading + 6 circular progress indicators; use
   SVG circles with animated stroke-dashoffset for percentage display.

8. **Portfolio** — white bg, full-width; heading + filter tabs + 8 project
   cards with hover overlay; implement client-side filtering.

9. **Team** — white bg; heading + 4 member cards; photo, name, role,
   skill bars on hover, social icons.

10. **Pricing** — gray bg; heading + Monthly/Yearly toggle + 4 cards;
    Premium card highlighted with gradient bg; implement tab state.

11. **Blog** — white bg; heading + featured post (large) + 3 sidebar
    list items (thumbnail, title, date, excerpt).

12. **Counters** — gray bg; 4 stat counters with icons; animate number
    counting up on scroll into view (IntersectionObserver + requestAnimationFrame).

13. **Contact** — white bg with subtle bg image; heading + form (name,
    phone, email, subject, message, "Send Now") + contact info sidebar
    (address, phone, email) + social icons.

14. **Footer** — dark bg; brand "Caliber" + 4 link columns (News, Company,
    Resources, Solutions) + social icons + copyright with Component Dock link.

15. **Dark mode** — implement `dark:` Tailwind utilities across all sections;
    toggle sets `.dark` on `<html>`.

16. **Tests** — write Vitest + RTL tests for each component; target 100%
    coverage.

## Design fidelity notes

- Brand gradient: `linear-gradient(to right, #a1c4fd 0%, #c2e9fb 100%)`
  — use as `@theme` custom color or Tailwind gradient utilities.
- Gray section bg: `#f9f9f9`.
- Fonts: Montserrat (headings), Roboto (body), Satisfy (accents) via
  Google Fonts `<link>` in `index.html`.
- Buttons: gradient fill, slight border-radius (2–5px), blue box-shadow
  on hover.
- Price cards: white bg, 5px radius on hover only.
- Hero: full-width bg image with `rgba(0,0,0,0.4)` overlay.
- Nav: transparent bg, `rgba(0,0,0,0.4)` on affix/scroll.
- Footer: dark bg, light text, copyright border-top.

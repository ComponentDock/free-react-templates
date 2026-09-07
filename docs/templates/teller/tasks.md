# Teller — implementation tasks + design notes

Recreates ColorLib **Banker** (`banker`) as **Teller**.
Read `openspec/specs/template-teller/spec.md` first — it holds every token,
the live-verified DOM structure, and the Gherkin scenarios.

## Live reference

- Preview: `https://preview.colorlib.com/theme/banker/` (HTTP 200, 65,213 bytes, verified 2026-09-07)
- Source page: `https://colorlib.com/wp/template/banker/` (TEMPLATES.md line 905, ONE occurrence)
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/banker-free-template.jpg` (AVIF format)

## Section order (1:1)

1. **Navbar** — Sticky header, logo "Teller." with orange period, nav links (Home, About, Services, Blog, Contact), social icons.
2. **Hero** — Full-width background image + dark overlay, centered carousel: "Banking Solutions", "Financing Solutions", "Savings Accounts". Mouse scroll indicator.
3. **Feature Highlights** — 3-column cards: Money Savings, Online Shoppings, Credit/Debit Cards. Then split layout: circular image left, "Amortization Computation" heading + checklist + email form right.
4. **About Us** — Centered title + lead. Split: circular image left, "We Solve Your Financial Problem" + description right.
5. **Meet Team** — Carousel of 8 team member cards (photo + name).
6. **Gallery** — Responsive image grid.
7. **How It Works** — Split: image carousel left, 3 numbered steps right (01. Online Applications, 02. Get an approval, 03. Card delivery).
8. **Our Services** — Light bg. 3×2 grid: Business Consulting, Credit Card, Income Monitoring, Insurance Consulting, Financial Investment, Financial Management.
9. **Testimonials** — Carousel of 4 customer quotes with author photos.
10. **Pricing** — Light bg. 3 cards: Basic ($47), Premium ($200, popular), Professional ($750).
11. **FAQ** — Two columns, 8 items total.
12. **About Us (Services)** — Split: circular image left, Bank Loan + Banking Consultation features right.
13. **Our Blog** — 3-column blog cards with image, title, meta, excerpt.
14. **Contact Us** — Light bg. Contact info (address, phone, email) + form (First Name, Last Name, Email, Subject, Message, Send Message).
15. **Footer** — Dark bg. About Us text, Quick Links, Follow Us social, Subscribe Newsletter, copyright with Component Dock link.

## Design tokens

| Token | Value | Tailwind usage |
|---|---|---|
| Primary orange | `#fd7e14` | `@theme { --color-primary: #fd7e14; }` → `text-primary`, `bg-primary` |
| Light section bg | `#f8f9fa` | `bg-gray-50` or custom token |
| Dark section bg | `#343a40` | `bg-gray-800` or custom token |
| Body text | `#212529` | `text-gray-900` |
| White text | `#fff` | `text-white` |
| Muted text | `#b3b3b3` | `text-gray-400` |
| Green accent | `#71bc42` | `text-green-500` (pricing checks) |
| Font | Open Sans 400/600/700 | Google Fonts `<link>` in index.html |
| Button radius | `30px` | `rounded-full` |
| Image mask | `50%` | `rounded-full` |
| Section padding | `~4rem` | `py-16` |

## Implementation outline (TDD)

1. Copy the simplest existing app → `apps/teller`, package
   `@free-react-templates/teller`, `public/CNAME` =
   `teller.free.componentdock.com`, `"homepage"` =
   `https://teller.free.componentdock.com`. Register workspace via
   root `npm install`.

2. App shell: `App.tsx` composes sections in order; `main.tsx` entry;
   document title "Teller — Banking & Finance".

3. Components (create one at a time, TDD each):
   - `Navbar.tsx` — sticky, logo "Teller." with orange period, nav links,
     social icons (lucide: Facebook, Twitter, LinkedIn).
   - `Hero.tsx` — bg image (picsum.photos), dark overlay, carousel of 3
     slides with headings + subtitles. Use simple auto-advancing state.
   - `FeatureHighlights.tsx` — 3-column cards + Amortization split layout.
   - `AboutUs.tsx` — centered title + lead, split layout with circular image.
   - `TeamSection.tsx` — carousel of team member cards.
   - `Gallery.tsx` — responsive image grid.
   - `HowItWorks.tsx` — split layout with image carousel + numbered steps.
   - `Services.tsx` — light bg, 3×2 service card grid.
   - `Testimonials.tsx` — carousel of quote cards.
   - `Pricing.tsx` — light bg, 3 pricing cards with feature lists.
   - `FAQ.tsx` — two-column FAQ layout.
   - `AboutServices.tsx` — split layout with feature items.
   - `Blog.tsx` — 3-column blog cards.
   - `Contact.tsx` — light bg, info columns + form.
   - `Footer.tsx` — dark bg, about text, quick links, social, newsletter,
     copyright with Component Dock link.

4. Each component: write tests first (Vitest + RTL), then implement.
   Coverage must be 100% lines/functions/branches/statements.

5. After all components: run `scripts/verify-app.sh teller` to confirm
   typecheck + lint + tests + build pass.

6. Commit as `feat: Teller — banking & finance template (ColorLib Banker)`
   and push to a `feat/template-teller` branch, open PR, merge immediately.

## Fidelity notes

- **No carousel library needed**: use simple React state for auto-advancing
  slides (the original uses Owl Carousel but we can replicate with CSS
  transitions + state).
- **No AOS needed**: use CSS scroll-driven animations or IntersectionObserver
  for fade-up effects.
- **No Isotope needed**: use CSS Grid for the gallery layout.
- **Circular images**: use `rounded-full` on img containers with fixed
  aspect ratio.
- **Icons**: use lucide-react (Wallet, ShoppingCart, CreditCard, Users,
  Mail, Phone, MapPin, Facebook, Twitter, LinkedIn, etc.) — NOT the
  original flaticon SVGs.
- **Placeholder images**: `https://picsum.photos/seed/teller-<n>/<w>/<h>`
  for deterministic placeholders.
- **Footer Component Dock**: replace Colorlib attribution with
  "Made with Component Dock" linking to `https://www.componentdock.com/`.

# Lovekit — Implementation Tasks & Design Notes

## Source mapping

- **ColorLib source:** Lovecare (https://colorlib.com/wp/template/lovecare/)
- **Preview DOM:** https://preview.colorlib.com/theme/lovecare/ (HTTP 200)
- **CSS analyzed:** `css/style.css` (84KB)
- **New name:** Lovekit (apps/lovekit)

## Section-by-section fidelity notes

### 1. Navbar

- Brand: "LoveCare" → "LoveKit" (keep same handwritten "Care" small styling via Patrick Hand)
- Links: Home, About, Causes, Blog, Contact
- Mobile: hamburger toggle with collapse
- Style: white/transparent bg, dark text, no border

### 2. Hero

- Full-width parallax background image with dark overlay
- Subheading: "Raising Hope" (gold accent, small caps)
- Headline: "To the Homeless & Hopeless People" (white, large)
- Two buttons: "Join Us" (primary gold pill) + "Watch the Video" (outlined)
- Parallax effect via scroll (use CSS background-attachment or JS)

### 3. Intro / Donation (split section)

- Left column (col-md-7): welcome text + about paragraph + 3 feature cards in a row
  - Cards: icon + title, each in a light bg card
- Right column (col-md-5): fund counter card (heart icon + "$1,850,000" + "Funds raised by 1200 people")
  - Below that: donation form with fields: name, email, cause dropdown, amount input, frequency radios (One Time/Monthly/Yearly), submit button
- Fund counter card bg: dark teal #082729
- Form submit prevents default

### 4. Statistics

- Parallax bg image with dark overlay
- "Great Reviews for our services" subheading + "Technical Statistics" heading
- 4 counter items in a row: each with icon + number + label
  - $60M / Raised Amount | 9200 / Volunteers | 5800 / Projects Done | 2750 / Happy Customers
- Numbers are static text (no JS counter needed)

### 5. Causes

- Light background (#F3F0EB)
- "Our Causes" subheading + "Our Causes & Help Us" heading
- 4 cause cards in a carousel/grid:
  - Each: image, title ("Give Food to Homeless Children"), description, progress bar
  - Progress bars show percentage

### 6. CTA Image

- Full-width parallax bg with dark overlay
- "Lovekit Charity" subheading
- Quote: "The Smallest Act of Kindness is Worth More Than the Grandest Intention"
- Two buttons: "Donate Now!" (primary) + "Become A Volunteer" (secondary)

### 7. Volunteers

- "Meet Our Volunteer" subheading + "Our Volunteer" heading
- 4 team member cards in a row:
  - Each: photo (circular), name, role
  - Members: Jason Smith, Anne Hayes, Martha Smith, Mike Tyson (use placeholder names)

### 8. Testimonials

- Parallax bg with dark overlay
- "Testimonial" subheading + "What People Says" heading
- Testimonial entries with avatar, name, role, quote text

### 9. CTA Banner

- Light/white bg section
- "Welcome to LoveKit Non-Profit Charity" subheading
- "Do You Care Our Children?" heading
- "Be A Volunteer" button

### 10. Blog

- "Our Blog" subheading + "Recent From Blog" heading
- 3 post cards in a row:
  - Each: image, title, date, author, "Read More" link
  - Blog posts: "Give Hope to the People Need Most" (×3 with different images)

### 11. Footer

- Dark teal bg (#082729)
- Brand: "LoveKit" + "Charity Theme"
- Recent Posts column with 2-3 entries
- Newsletter/email signup
- Social icons
- Copyright line + Component Dock link

## Design tokens for Tailwind @theme

```css
@theme {
  --color-brand: #d49a3a; /* gold/amber primary */
  --color-brand-dark: #b8842e; /* hover state */
  --color-teal-dark: #0a686e; /* secondary dark */
  --color-teal-darker: #0a4f53; /* footer dark */
  --color-teal-darkest: #082729; /* deepest dark */
  --color-bg-light: #f3f0eb; /* section backgrounds */
  --font-display: 'Patrick Hand', cursive;
  --font-body: 'Poppins', sans-serif;
}
```

## Component architecture

- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/IntroDonation.tsx` (split: welcome + donation form)
- `src/components/Statistics.tsx`
- `src/components/Causes.tsx`
- `src/components/CtaImage.tsx`
- `src/components/Volunteers.tsx`
- `src/components/Testimonials.tsx`
- `src/components/CtaBanner.tsx`
- `src/components/Blog.tsx`
- `src/components/Footer.tsx`

## Dependencies

- No new deps needed — use packages/ui (Button, ButtonLink, Card, cn)
- lucide-react for icons
- Google Fonts via index.html link tags (Patrick Hand + Poppins)

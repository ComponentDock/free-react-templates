# Template: Stagefront (Architecture / Interior Design)

## Purpose

Recreation of ColorLib "Staging" — an architecture, interior design, and project showcase website template with a premium dark hero and golden accent palette.

- **Source:** https://colorlib.com/wp/template/staging/
- **Preview:** https://preview.colorlib.com/theme/staging/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/staging-free-template.jpg
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript

## Design Tokens (extracted from preview stylesheet)

| Token | Value | Notes |
|---|---|---|
| Brand / accent | `#dfa667` | Golden amber — section labels, CTA buttons, project hover accents, active nav indicator |
| Heading font | `Aldrich`, sans-serif | All h1–h6, Aldrich weights 400–900 |
| Body font | `Poppins`, sans-serif | All paragraphs, buttons, nav; weights 300–900 |
| Dark text | `#111111` | Headings, nav links, dark backgrounds reversed |
| Body text | `#707070` | Paragraph copy |
| Light text | `#b7b7b7` | Secondary labels, hero social icon hover, latest blog categories |
| White | `#ffffff` | Light sections, testimonial card bg, project hover bg |
| Dark bg | `#000000` | Preloader only |
| Border accent | `rgba(255,255,255,0.2)` | Primary button corner decorations |
| Secondary border | `#c4c4c4` | Normal-btn (light) corner decorations |
| Button radius | `4px` | Decorative corner borders grow to fill on hover |
| Primary button | `16px 50px` padding, white text, decorative corner pseudo-elements | Transparent bg by default |
| CTA / site button | `#dfa667` bg, white text, `14px 36px` padding, no border decoration | Used in testimonial CTA area |
| Section padding | `100px` top/bottom (`.spad`) | Standard section rhythm |
| Testimonial client pics | `border-radius: 50%` | Circular avatars |

## Section Structure (from preview DOM)

1. **Header** — Transparent absolute header, logo left, centered nav (Home, Projects, About, Pages dropdown, Blog, Contact), phone info right. Becomes solid on scroll.
2. **Hero** — Full-width owl-carousel slider, dark bg images, white heading "Quality is not only our standard.", two CTAs (primary-btn "See Project" + more_btn "Discover more"), social icon row (FB, Twitter, IG, LinkedIn).
3. **About** — Two-column: left = section title ("who are we"), body text, "Learn More" normal-btn; right = about image with decorative inner frame.
4. **Projects** — "Our works" / "Latest projects" section-title, owl-carousel of 4+ project cards (image bg, hover overlay showing category + title), dots/nav.
5. **Services** — "Our specialization" / "What we do", 4-column grid (Interior Design, Office Design, Home Design, Design Drawing), each with icon image + title + description.
6. **Stats / Counter** — Dark bg area below services, 4 counters: 85 Projects Completed, 127 Happy Clients, 36 Awards Received, 74 Cups Of Coffee.
7. **Testimonials** — "Testimonials" / "What your clients say", parallax bg image, testimonial carousel (quote text), client avatar carousel (circular pics, center-weighted), logo carousel (partner logos).
8. **Team** — "Our Team" / "Meet our team" with "View All" button, 3-column cards (bg image, hover reveal with name, role, bio, social links).
9. **Call to Action** — Parallax bg image, "Why choose us?" label, long headline, "Contact Us" solid #dfa667 button.
10. **Latest / Blog** — "Latest News" / "From our blog" with "View All" button, 3-column blog cards (image, category span, title, "Read more" link).
11. **Footer** — Parallax bg image, top row = "Ready To Work With Us?" + email signup form; 4-column grid (logo + address + social, Company links, Services links, Get In Touch); copyright bar with terms/privacy.

## Gherkin Requirements

### Feature: Stagefront — Architecture & Interior Design Template

#### Scenario: Header displays navigation and phone info
  GIVEN the user loads the page
  THEN a transparent header with centered navigation links is visible
  AND a phone number "+01 123 456 789" appears on the right
  AND the header becomes solid on scroll

#### Scenario: Hero carousel displays slide content
  GIVEN the user loads the page
  THEN a full-width hero slider is visible with a background image
  AND a heading "Quality is not only our standard." is displayed in white
  AND a "See Project" primary button is visible
  AND a "Discover more" link is visible
  AND social media icons (Facebook, Twitter, Instagram, LinkedIn) are shown

#### Scenario: About section shows two-column layout
  GIVEN the user scrolls to the about section
  THEN a section label "who are we" appears in golden amber
  AND a heading "We propose and discuss design rules" is displayed
  AND body text paragraphs are visible
  AND a "Learn More" button is shown
  AND a right-side image with decorative frame is displayed

#### Scenario: Projects carousel shows project cards
  GIVEN the user scrolls to the projects section
  THEN a heading "Latest projects" is displayed
  AND project image cards are shown in a carousel
  AND hovering a card reveals the project category and title on a white overlay

#### Scenario: Services section shows four service cards
  GIVEN the user scrolls to the services section
  THEN a heading "What we do" is displayed
  AND four service cards are visible (Interior Design, Office Design, Home Design, Design Drawing)
  AND each card has an icon, title, and description paragraph

#### Scenario: Stats counters display metrics
  GIVEN the user scrolls to the counter section
  THEN four stat counters are displayed (85 Projects Completed, 127 Happy Clients, 36 Awards Received, 74 Cups Of Coffee)

#### Scenario: Testimonials carousel shows client quotes
  GIVEN the user scrolls to the testimonials section
  THEN a parallax background image is visible
  AND a heading "What your clients say" is displayed
  AND a testimonial carousel shows quote text
  AND a client avatar carousel shows circular photos with names and roles
  AND a logo carousel shows partner brand logos

#### Scenario: Team section shows team member cards
  GIVEN the user scrolls to the team section
  THEN a heading "Meet our team" is displayed
  AND three team member cards are shown with background images
  AND hovering a card reveals the member name, role, bio, and social links

#### Scenario: Call to action section
  GIVEN the user scrolls to the CTA section
  THEN a parallax background is visible
  AND a "Why choose us?" label is shown in golden amber
  AND a long headline about the team is displayed
  AND a solid golden "Contact Us" button is shown

#### Scenario: Blog / Latest section shows posts
  GIVEN the user scrolls to the blog section
  THEN a heading "From our blog" is displayed
  AND three blog post cards are shown with images, categories, titles, and "Read more" links

#### Scenario: Footer displays contact info and links
  GIVEN the user scrolls to the footer
  THEN a "Ready To Work With Us?" heading and email signup form are shown
  AND Company, Services, and Get In Touch columns are displayed
  AND a copyright bar with Terms of use and Privacy Policy is shown
  AND a Component Dock link is present

## Verification Checklist

- [ ] All 11 sections match the original section order 1:1
- [ ] Brand color #dfa667 used consistently for accents, section labels, CTA buttons
- [ ] Aldrich font loaded via Google Fonts for headings; Poppins for body
- [ ] Hero carousel works (manual: autoplay, dots, slide transitions)
- [ ] Projects carousel works with hover overlay
- [ ] Testimonial carousel with avatar selection
- [ ] Team cards reveal content on hover
- [ ] Parallax backgrounds on Testimonials, CTA, and Footer
- [ ] Stats counter section with animated numbers
- [ ] Footer contains Component Dock link (not ColorLib attribution)
- [ ] No ColorLib references in app code (only in spec and TEMPLATES.md)
- [ ] Placeholder images via picsum.photos
- [ ] Lucide-react icons used for social / UI icons
- [ ] Responsive layout (mobile hamburger, stacked columns)
- [ ] Typecheck passes, lint passes, 100% test coverage, build succeeds

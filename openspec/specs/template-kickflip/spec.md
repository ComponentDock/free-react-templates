commit 198bdf11d1ec50efb325bbbd8ec0ad878307e87a
Author: root <root@vmi3555397.contaboserver.net>
Date: Fri Sep 25 19:42:50 2026 +0200

    docs: prep Kickflip (ColorLib Skater) spec + research

diff --git a/openspec/specs/template-kickflip/spec.md b/openspec/specs/template-kickflip/spec.md
new file mode 100644
index 000000000..59ff874ff
--- /dev/null
+++ b/openspec/specs/template-kickflip/spec.md
@@ -0,0 +1,204 @@
+# Template: Kickflip (Skateboarding / Personal) +
+## Purpose +
+Recreation of ColorLib **Skater** template as a React 19 + Vite + Tailwind 4 + TypeScript app. +
+- Source: https://colorlib.com/wp/template/skater/
+- Preview: https://preview.colorlib.com/theme/skater/
+- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/skater-free-template.jpg
+- New name: `kickflip` (apps/kickflip, @free-react-templates/kickflip)
+- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript +
+## Design tokens (extracted from live preview CSS) +
+| Token | Value | Usage |
+|-------|-------|-------|
+| Primary (brand green) | `#71bc42` | `.text-primary` color — logo accent, section headings ("Frequently Ask Questions"), active states, icons |
+| Accent (orange) | `#ff8b00` | `.btn-primary` background hover, primary button fill |
+| Dark background | `#333333` | Services section background, form control bg, footer sections |
+| Heading color | `#222222` | All h1–h6 headings in light sections |
+| Body text | `#333333` | Paragraphs, body text |
+| Muted text | `#939393` | Secondary labels, metadata |
+| Light gray | `#e3e3e3` | Borders, dividers |
+| Lighter gray | `#f8f9fa` | Alternating section backgrounds |
+| White | `#ffffff` | Page background, card backgrounds, overlay button text |
+| Black | `#000000` | Text selection bg, hero overlay |
+| Heading font | `Oswald` (Google Fonts) | All h1–h6 headings |
+| Body font | `Rubik` (Google Fonts, -apple-system fallback stack) | All body text, nav, buttons, forms |
+| Heading weight | 700 | h1–h6 |
+| Body weight | 400 | Paragraphs, body text |
+| Button style | `.btn-outline-white` — transparent bg, 2px white border, white text; hover inverts to white bg + black text | Hero CTA "Get in touch" |
+| Button primary | `.btn-primary` — orange #ff8b00 bg, white text | Footer subscribe, secondary CTAs |
+| Button border-width | `.border-w-2` — 2px | Hero outline buttons |
+| Button padding | `.btn-md` — 8px 20px | Medium buttons |
+| Border radius | 4px (buttons, form controls) | All interactive elements |
+| Icon circles | 50% border-radius, 50×50px | Service card icon containers |
+| Section padding | ~80px top/bottom (Bootstrap site-section) | Between major sections |
+| Overlay | `rgba(0,0,0,0.3)` on `.site-section-cover.overlay::before` | Hero carousel slides |
+| Hero heading | 4.5rem, white, centered | Carousel slide headings | +
+## Page structure (section order, from live preview DOM) +
+1. **Navbar** — Sticky header. Left: logo text "Kickflip" with green primary accent. Right: nav links (Home, Services, About [dropdown: Team, Pricing, FAQ], Testimonials, Blog, Contact). Mobile: hamburger toggle with slide-in menu. Transparent background over hero, becomes solid on scroll. +
+2. **Hero Carousel** — Full-width carousel (2 slides). Each slide: background image with dark overlay (`rgba(0,0,0,0.3)`), centered content. Slide 1: "Hi I'm John and I Skate a lot" heading, subtitle text, "Get in touch" white outline button. Slide 2: "New Generation of Skating" heading, subtitle, same CTA. +
+3. **Services** — Dark background (#333). Section heading "Services" centered with subtitle. 3×2 grid of 6 service cards. Each card: circular icon (flaticon skateboard variants), white heading, white description text. Services: Skate for Beginner, Personal Training, Best Skater, Advance Skater, Novice to Pro Skater, Skate Boarding. +
+4. **About — "My Best Performance"** — White background. Two alternating split sections. First: text left (heading + 2 paragraphs + 4 bullet points), image right. Second: image left, text right (heading + 2 paragraphs + 4 bullet points). Both use `block__73422` background-image panels. +
+5. **Counter Stats** — White/light background. 4-column stat grid with animated counters: Year of Experience, Expert Trainer, Number of Trainer, Number of Members. Each shows "0+" with label. +
+6. **Team** — White background. Section heading "Our Team" centered. 3-column grid of team member cards. Each: circular photo, name ("Jean Smith", "Bob Carry", "Ricky Fisher"), role ("Skateboard Trainer"). +
+7. **Pricing** — White background. Section heading "Session Pricing" centered. 3-column pricing cards. Basic ($47/yr), Premium ($200/yr, highlighted), Professional ($750/yr). Each: price, 6 feature bullet points, "Buy Now" button. +
+8. **FAQ** — White background. Section heading "Frequently Ask Questions" (green primary color). Accordion with expandable Q&A items. 8 questions total covering payment, refunds, location, hours. +
+9. **Testimonials** — Light/parallax background. Section heading "Testimonial" centered. Carousel of testimonial cards. Each: quote text, author name, role/title. Authors: Ricky Fisher/Ken Davis, Mellisa Griffin/Robert Steward. +
+10. **Blog** — White background. Section heading "Latest Blog Posts" centered. 2-column grid of blog post cards. Each: featured image, date + author, heading, excerpt, "Read More" link. Posts: "How To Find Gold In Mining" (×2 placeholder). +
+11. **Contact** — Dark background. Section heading "Get In Touch" + subheading "Contact Me". Description text, "Get Started" CTA button. +
+12. **Footer** — Dark background (#222). 4-column layout: About Us (text), Features (nav links: About Us, Press Releases, Testimonials, Terms of Service, Privacy, Contact Us), Subscribe to Newsletter (email input + Subscribe button), Follow Us (social icons: Facebook, Twitter, Instagram, LinkedIn). Copyright line at bottom. Footer MUST link `https://www.componentdock.com/`. +
+## Gherkin requirements +
+### Feature: Kickflip Skateboarding Template +
+```gherkin
+Feature: Kickflip — Skateboarding / Personal Website Template

- As a user visiting the Kickflip website
- I want to see a professional skateboarding personal website
- So that I can learn about skateboarding services, the team, pricing, and get in touch
-
- Background:
- Given I am on the Kickflip homepage
-
- # --- Navbar ---
- Scenario: Navbar displays all navigation links
- Then I should see a "Kickflip" logo
- And I should see navigation links: Home, Services, About, Testimonials, Blog, Contact
- And the About link should have a dropdown with Team, Pricing, FAQ
-
- Scenario: Navbar is sticky on scroll
- When I scroll down the page
- Then the navbar should remain fixed at the top
-
- Scenario: Mobile hamburger menu toggles
- Given I am on a mobile viewport
- When I click the hamburger menu icon
- Then a slide-in mobile menu should appear
-
- # --- Hero Carousel ---
- Scenario: Hero carousel displays two slides
- Then I should see a hero carousel with 2 slides
- And slide 1 should show heading "Hi I'm John and I Skate a lot"
- And slide 2 should show heading "New Generation of Skating"
-
- Scenario: Hero slides have CTA buttons
- Then each hero slide should have a "Get in touch" button
- And the button should be a white outline style
-
- Scenario: Hero slides have background images with overlay
- Then each hero slide should have a background image
- And each slide should have a dark semi-transparent overlay
-
- # --- Services ---
- Scenario: Services section shows 6 service cards
- Then I should see a "Services" section heading
- And I should see 6 service cards in a 3-column grid
-
- Scenario: Service cards display icons and text
- Then each service card should have a circular icon
- And each card should have a heading and description
- And service headings should be: Skate for Beginner, Personal Training, Best Skater, Advance Skater, Novice to Pro Skater, Skate Boarding
-
- # --- About / Performance ---
- Scenario: About section shows two split content blocks
- Then I should see a "My Best Performance" heading
- And there should be two alternating text/image split sections
-
- # --- Counter Stats ---
- Scenario: Counter section displays 4 statistics
- Then I should see 4 counter items
- And they should show: Year of Experience, Expert Trainer, Number of Trainer, Number of Members
-
- # --- Team ---
- Scenario: Team section shows 3 team members
- Then I should see a "Our Team" heading
- And I should see 3 team member cards
- And each card should have a photo, name, and role "Skateboard Trainer"
-
- # --- Pricing ---
- Scenario: Pricing section shows 3 pricing tiers
- Then I should see a "Session Pricing" heading
- And I should see 3 pricing cards: Basic ($47/yr), Premium ($200/yr), Professional ($750/yr)
- And each card should have a "Buy Now" button
-
- Scenario: Premium pricing card is highlighted
- Then the Premium card should be visually highlighted
-
- # --- FAQ ---
- Scenario: FAQ section shows accordion
- Then I should see a "Frequently Ask Questions" heading
- And there should be an accordion with 8 FAQ items
-
- Scenario: FAQ accordion items expand on click
- When I click a FAQ question
- Then the answer should become visible
- And other open answers should collapse
-
- # --- Testimonials ---
- Scenario: Testimonials section shows carousel
- Then I should see a "Testimonial" heading
- And there should be a testimonials carousel with at least 2 testimonials
- And each testimonial should have a quote, author name, and role
-
- # --- Blog ---
- Scenario: Blog section shows 2 post cards
- Then I should see a "Latest Blog Posts" heading
- And I should see 2 blog post cards
- And each card should have an image, date, author, heading, excerpt, and "Read More" link
-
- # --- Contact ---
- Scenario: Contact section shows CTA
- Then I should see a "Get In Touch" heading
- And a "Contact Me" subheading
- And a "Get Started" button
-
- # --- Footer ---
- Scenario: Footer displays all sections
- Then I should see an About Us text column
- And a Features links column
- And a Newsletter subscription form with email input and Subscribe button
- And a Follow Us section with social icons (Facebook, Twitter, Instagram, LinkedIn)
-
- Scenario: Footer links to Component Dock
- Then the footer should contain a link to "https://www.componentdock.com/"
- And the link text should reference "Component Dock"
  +```
-

+## Verification checklist +
+- [ ] All sections present in correct order matching the source preview DOM
+- [ ] Navbar is sticky with dropdown support
+- [ ] Hero carousel has 2 slides with background images and overlay
+- [ ] Services section has dark background with 6 icon cards
+- [ ] About section has two alternating split layouts
+- [ ] Counter section has 4 animated stats
+- [ ] Team section has 3 member cards
+- [ ] Pricing has 3 tiers with Premium highlighted
+- [ ] FAQ accordion works (expand/collapse)
+- [ ] Testimonials carousel renders
+- [ ] Blog has 2 post cards with proper structure
+- [ ] Contact CTA section present
+- [ ] Footer has 4 columns + copyright + Component Dock link
+- [ ] Fonts: Oswald for headings, Rubik for body (loaded via Google Fonts)
+- [ ] Brand green (#71bc42) used for primary accents
+- [ ] Dark sections (#333) for services and contact
+- [ ] All images use picsum.photos placeholders
+- [ ] No ColorLib references in app code
+- [ ] 100% test coverage

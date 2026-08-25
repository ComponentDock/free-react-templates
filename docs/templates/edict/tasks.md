# Edict — Implementation Tasks

**Source:** ColorLib "Solicitor" — https://colorlib.com/wp/template/solicitor/
**Preview:** https://preview.colorlib.com/theme/solicitor/
**New name:** edict

## Section-by-Section Fidelity Notes

### 1. Navbar

- Logo text "Edict" in Playfair Display 24px bold, white
- Nav links centered: Home, Practicing Area (with dropdown), Services, About, Contact Us
- Phone number on far right with phone icon
- Transparent background over hero, absolute positioned
- Mobile: hamburger icon, slide-in menu from right
- Dropdown: white background, 7px border-radius, blue hover accent

### 2. Hero

- Full viewport height (100vh, min 780px)
- Background image with dark overlay (rgba(0,0,0,0.4))
- Content left-aligned (col-lg-5 with ms-auto)
- Heading: Playfair Display 50px bold, white
- Subtext: white-50 (rgba(255,255,255,0.5))
- Two buttons: "Our services" (primary blue), "Contact us" (outline-white)
- Buttons have right arrow icons

### 3. About Me

- Section padding: 7rem top/bottom
- Two-column: text left (col-lg-4), image right (col-lg-6)
- Heading: "I'm Jon Campbell" in Playfair Display
- Text: white-50 color
- Image has dark background strip (#0f0f11) extending below
- CTA button "Our services" at bottom of text

### 4. Our Services

- Slightly lighter background: rgba(255,255,255,0.02)
- 3×2 grid of service cards
- Each card: circle icon (with blue accent circle behind), title, description
- Icons use Flaticon font (judge, themis, fingerprint, courthouse, laws)
- Hover: card background → #037ef3, icon becomes opaque
- Note: Original uses "Councel" (typo) — correct to "Counsel" in our version

### 5. Security Consultants

- Two-column: image left (col-lg-7), text right (col-lg-4)
- Heading "Security Consultants" in Playfair Display
- Subheading "Justice serves" in regular weight
- Paragraph in white-50
- CTA button "Read more"

### 6. Tabbed Services

- 3 tabs: Investigative Services, Security Consultations, Criminal Defense Investigations
- Vertical tab navigation on left, content on right
- Each tab: heading + paragraph + CTA on left column, image on right
- Tab switching with Bootstrap-style fade transitions

### 7. Practice Area

- 3-column grid of 12 numbered cards
- Each card: dark background (#0f0f11), flex layout with number + title + arrow
- Numbers 01–12 in monospace-like style
- Hover: background → #037ef3, smooth transition
- Titles wrap with <br> for line breaks

### 8. Testimonials

- Heading "Testimonials"
- Split layout: author photos (left col-md-4), blockquote (right col-md-7)
- 3 authors with photos, names, titles
- Clicking author switches testimonial content
- Blockquote text: 30px font size (18px on mobile)

### 9. Resources

- Heading "Resources" + description paragraph
- 4-column list inside a box with rgba(255,255,255,0.02) background
- 6 link items per column
- Links have underline, white-50 color, hover → white

### 10. Peace & Order

- Two-column: text left, image right (reversed order via order-lg-2)
- Heading, paragraph, CTA "Read more"
- Same pattern as Security Consultants section

### 11. Contact Form

- Heading "Write to us"
- Form fields: Full Name, Email, Phone Number, Choose a Service, Message (textarea)
- Inputs: transparent background, white text, subtle border
- Submit button: primary blue "Send Message" with arrow

### 12. Footer

- 3-column layout
- Column 1: Contact (address, phone numbers, email)
- Column 2: Sources (links list)
- Column 3: Links (links list + social icons)
- Social icons: circular buttons (rgba(255,255,255,0.2) bg), hover → blue
- Font size: 14px
- Link hover: underline effect with blue background
- Footer MUST include Component Dock link

## Implementation Order

1. Scaffold app from simplest existing template (copy structure, rename)
2. Set up Tailwind theme tokens (colors, fonts via @theme)
3. Build Navbar (with mobile menu)
4. Build Hero section
5. Build About Me section
6. Build Our Services grid
7. Build Security Consultants section
8. Build Tabbed Services
9. Build Practice Area grid
10. Build Testimonials section
11. Build Resources section
12. Build Peace & Order section
13. Build Contact Form
14. Build Footer
15. Write tests (TDD)
16. Verify: typecheck, lint, 100% coverage, build
17. Update TEMPLATES.md (do NOT mark [~]/[x] — implementer does that)

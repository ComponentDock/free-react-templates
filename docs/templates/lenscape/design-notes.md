# Lenscape — Design Notes

## Source Mapping
- **ColorLib name:** Bato
- **ColorLib URL:** https://colorlib.com/wp/template/bato/
- **Preview URL:** https://preview.colorlib.com/theme/bato/
- **New name:** lenscape
- **Category:** Photography Portfolio (multi-page → single-page consolidation)

## Section Order (single-page consolidation)
1. Navbar (fixed header)
2. NavPanel (off-canvas, toggled by hamburger)
3. Hero Carousel (3 slides, 75/25 split)
4. Work Gallery (6 entries, alternating left/right)
5. About Section (50/50 split, 3-slide carousel)
6. Contact Section (address + form)
7. Newsletter Subscribe (email + button)
8. Footer (3 columns, sage bg)

## Fidelity Notes

### Navbar
- Original: centered logo text "Bato" in Playfair Display, hamburger icon on right
- Hamburger: small square (border-radius: 2px), black bg on hover, white lines
- Our version: replicate exact positioning and styling, replace text with "Lenscape"

### Off-Canvas Nav Panel
- Original: slides in from left, full-height, white bg
- Contains: search input (white bg, yellow button), nav links (black text, yellow active), thumbnail gallery (4 images with search icon overlay)
- Close on: hamburger click or clicking outside
- Overlay: semi-transparent black (rgba(0,0,0,0.4))

### Hero Carousel
- Original: Owl Carousel with 3 slides, full viewport height
- Layout: each slide is a flex row — 75% image (background-image, cover) + 25% text panel
- Text panel content: slide number (large Playfair, "01/03"), uppercase tag (letter-spacing: 7px, Karla), heading (Playfair Display, bold), description (Karla, gray #727272), CTA "View Galleries →" (13px, letter-spacing: 7px, black)
- Navigation: owl-nav arrows at bottom center, circular buttons with chevron icons
- Auto-advance: ~5 seconds per slide

### Work Gallery
- Original: 6 work entries on work.html
- Each entry uses the same 75/25 split as hero but alternates side:
  - Entries 1, 3, 5: image right (col-md-push-10), text left (col-md-pull-12)
  - Entries 2, 4, 6: image left (no push), text right (no pull)
- Text content: bold heading (linked), description, "View Photo" CTA
- Entry headings are all the same: "Application and practice of creating durable images"
  → paraphrase for variety in recreation
- Images: use picsum.photos/seed/lenscape-work-N/1200/800

### About Section
- Original: about.html — 50/50 horizontal split
- Left half: full-height background image (about.jpg → picsum.photos/seed/lenscape-about/800/900)
- Right half: Owl Carousel 3 with text slides:
  - Slide 1 "About Us": category title, heading "Hi! I'm [Name]", bold intro, description, 3-column info (Office/Get in Touch/Social)
  - Slide 2 "My Story": heading "History of the Company", description paragraphs
  - Slide 3 "Career": heading "My Career", description, checklist (4 items with check icons)
- Carousel navigation: dots or arrows (owl-dots)

### Contact Section
- Original: contact.html — container with heading + 2-column layout
- Left column (col-md-4): "My Address" heading + contact info list with icons
  - Map pin: address
  - Phone: phone number
  - Envelope: email
  - Globe: website
- Right column (col-md-7, pushed right): form with Name, Email, Message fields + "Send Message" button
- Use lucide-react icons: MapPin, Phone, Mail, Globe

### Newsletter Subscribe
- Original: overlay section with dark background
- Centered content: "Subscribe Newsletter" heading + subtitle + email input + "Subscribe Now" button
- Button: yellow (#F9CE00) bg, white text, 2px radius
- Background: dark overlay (rgba(0,0,0,0.5)) over image or solid dark

### Footer
- Original: 3 centered columns on sage (#b7c2c2) background
- Columns: Office (address), Get in Touch (email link), Social (4 icon links)
- Social icons: Facebook, Twitter, Google+, Dribbble → use lucide-react equivalents
- Copyright line with Component Dock link (replacing Colorlib attribution)
- Padding: 8em 0 (very spacious)

## Color Reference from CSS
```
Brand yellow:     #F9CE00  (buttons, active states, tags, borders)
Sage footer:      #b7c2c2  (footer background)
Page white:       #ffffff  (main background)
Text black:       #000000  (headings, nav, footer text)
Text gray:        #727272  (body paragraphs via rgba(114,114,114,0.8))
Text dark gray:   #333333  (form inputs, placeholder)
Light bg:         #fcfcfc  (subtle backgrounds)
```

## Typography Reference
```
Body font:        "Karla", Arial, sans-serif  (400, 700)
Heading font:     "Playfair Display", Georgia, serif  (400, 700, italic)
Slide numbers:    Playfair Display, large size
Tags:             Karla, uppercase, letter-spacing: 7px
CTA links:        Karla, 13px, letter-spacing: 7px
```

## Button Reference
```
Primary button:   bg #F9CE00, text white, border-radius 2px
Nav toggle:       bg rgba(0,0,0,0.05), border-radius 2px, black hover
Submit button:    same as primary
```

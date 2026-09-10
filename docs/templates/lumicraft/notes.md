# Lumicraft — Prep Notes

ColorLib source: Boxus (https://colorlib.com/wp/template/boxus/)
Preview: https://preview.colorlib.com/theme/boxus/
New name: lumicraft

## Task Outline

1. Copy simplest existing app as starter, rename to lumicraft
2. Configure package.json: @free-react-templates/lumicraft
3. Set public/CNAME to lumicraft.free.componentdock.com
4. Set homepage in package.json
5. Add Roboto, Montserrat, PT Serif via Google Fonts link in index.html
6. Implement Hero section
7. Implement Services section with slider
8. Implement Portfolio section with masonry grid
9. Implement Crafters/About section with team slider
10. Implement Stories/News section with blog grid
11. Implement Offer/Video section with video popup + testimonials + carousel
12. Implement Expertise/Skills section with progress bars
13. Implement Contact section with form + map embed
14. Implement Footer with social icons + Component Dock link
15. Write tests for all components (100% coverage)
16. Run scripts/verify-app.sh lumicraft
17. Commit, push, open PR, merge, deploy

## Design Notes — Section-by-Section

### Hero
- Dark purple (#221C5A) background with full-width background image (replace with picsum.photos seed)
- Centered layout: logo image → headline (Montserrat 56px bold white) → subtitle (PT Serif 22px)
- Headline: "We Craft Awesome Web And [span]Graphic Design Solutions[/span]"
- Subtitle: "Support bright students today for a better tomorrow"
- Min-height: calc(100vh - nav height)

### Services
- Left side: green 370×370px title block with section number "01" (Montserrat 180px #55B286) and heading "Services" (Montserrat 109px white uppercase, word-break)
- Right side: service card slider (manual prev/next, no auto). 2 slides × 4 cards
- Each card: icon image (48×48), uppercase title (Montserrat bold), description paragraph
- Services: Branding, Mobile Apps, Web, Graphic, Services, PSD, HTML, PHP
- Use picsum.photos for icons or lucide-react icons instead

### Portfolio
- Right side: green title block with "02" + "Portfolio"
- Left side (below title block via margin-top: 370px): masonry grid
- Grid items: image + hover overlay (semi-transparent) with category icon, title, subtitle text
- Categories: PSD Mockup, Smart Watch, etc.

### Crafters/About
- Left: green title block with "03" + "CRAFTERS"
- Right: team member slider (manual prev/next)
- 3 members: photo (square crop) + name (Montserrat)
- Members: Robert Williams, John Doe, John Doe

### Stories/News
- Right side: green title block with "04" (number embedded in HTML but not in separate span — handle gracefully) + "STORIES"
- Left side (margin-top: 370px): 2-column blog grid
- 4 entries: featured image + date tag + category tag + title (h3) + excerpt + "Read More" link

### Offer/Video
- Left: green title block with "05" + "OFFER"
- Right: video thumbnail with play button overlay (opens Vimeo popup in original)
- Below: testimonial slider with quote text + author name
- Full-width image carousel with dot pagination
- Replace Vimeo popup with a placeholder or inline play icon

### Expertise/Skills
- Right side: green title block with "06" + "EXPERTISE"
- Left side (margin-top: 370px): 4 progress bars stacked vertically
- Each bar: skill name + percentage + colored fill bar
- Colors: HTML #32DB8A (green), CSS #FFBB42 (gold), PSD #E74C78 (pink), Design #4C9EE7 (blue)
- Labels use the same color as the bar

### Contact
- Left: green title block with "07" + "Contact"
- Right: two-column layout
  - Left column (one_half): descriptive text with colored emphasis spans
  - Right column (one_half last): form — Name, Email, Subject, Message textarea, Submit
- Submit button: 2px solid #E54B76, uppercase
- Below form: full-width Google Maps iframe (replace with placeholder/iframe)

### Footer
- Dark purple (#221C5A) background
- Centered: copyright line + social icon links (Twitter, Behance, Dribbble, Facebook, RSS)
- Replace Colorlib attribution with: "Made with Component Dock" → https://www.componentdock.com/
- Social icons: use lucide-react or Font Awesome via package (not CDN CSS file)

## Replication Reference

**Fetched:** 2026-09-10 from https://preview.colorlib.com/theme/boxus/
**Screenshot fallback:** https://colorlib.com/wp/wp-content/uploads/sites/2/boxus-creative-digital-agency-free-website-template.jpg
**CSS sources:** style.css (main), css/clear.css, css/common.css
**Fonts loaded:** Roboto (300/400/700/900), Montserrat (400/700), PT Serif (400)
**Key CSS classes:** .section, .section-title-holder, .section-content-holder,
  .big-title, .entry-title, .service-holder, .grid-item, .member-name,
  .testimonial-text, .testimonial-author, .progress_bar, .contact-form,
  .copyright-footer, .social-footer

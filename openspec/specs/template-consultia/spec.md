# Template: Consultia (Business Consulting Landing)

## Purpose

Consultia is a business consulting / corporate landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Bizcon" free template (source:
https://colorlib.com/wp/template/bizcon/, preview:
https://preview.colorlib.com/theme/bizcon/), built under a DIFFERENT name
(**Consultia**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4
+ TypeScript.

The original is a Bootstrap 4 single-page business template with a
white-background aesthetic, orange/salmon gradient CTAs, floating animated
decorative icons, and sections for hero, about, services, testimonials,
portfolio gallery, second about/service, blog cards, a 5-column footer
with newsletter, and a copyright bar with social links.

**Source slug:** bizcon
**Preview URL:** https://preview.colorlib.com/theme/bizcon/

## Design Tokens

| Token | Value | Usage |
|---|---|---|
| Brand gradient start | `#feb47b` (peach) | Button gradient left |
| Brand gradient end | `#ff7e5f` (coral/salmon) | Button gradient right, link hover |
| Primary text | `#2f373d` (dark blue-grey) | Headings (h1–h6), nav links, button 3 text |
| Body text | `#646464` (medium grey) | Paragraph text, muted labels |
| Grey section bg | `#f7f7f7` | Service section background |
| Accent orange | `#ff8b23` | Blog date badge background |
| Service icon bg | `#e3f1da` (light green) | Button 3 arrow backdrop |
| Button 3 accent bg | `#e3f1da` | Green rounded rectangle behind service link arrow |
| Heading font | Poppins (Google Fonts, weights 300–800) | All headings (h1–h6), button 3, section titles |
| Body font | Roboto (Google Fonts, weights 300–500) | Body text, paragraphs |
| Secondary font | Martel (700, 800) | Imported but minimal use |
| CTA button radius | 50px (pill) | .btn_1, .btn_2, .btn_4 |
| CTA button shadow | `0px 12px 20px 0px rgba(255,126,95,0.15)` | .btn_2, .btn_4 |
| Service link radius | 5px | .btn_3::after (green backdrop) |
| Link hover color | `#ff7e5f` | All anchor hover states |
| Blog card hover shadow | `rgba(42,34,123,0.1)` | .single-blog:hover box-shadow |
| Section padding | `140px 0` desktop | .section_padding |

## Section Structure (fidelity order)

1. **Navbar** — Logo (image) left, collapsible nav right: Home (active), About, Blog (dropdown: Blog, Single Blog), Page (dropdown: Project, Project Details, Services, Elements), Contact. White background, fixed/sticky top.
2. **Hero / Banner** — White bg. Left column (7/12): h1 "Lead from Front in Business Innovation." with line breaks, paragraph, coral gradient pill CTA button "learn more", video popup link with play icon + "Intro Video" text. Right column: empty (hero image area). Multiple floating animated decorative icons (custom-animation classes — CSS keyframe bouncing shapes at various positions). These are pure CSS-animated abstract shapes (icon_1 through icon_8 PNGs).
3. **About** — White bg. Reversed row: image on left (col-5), text on right (col-6 + offset-xl-1). h2 "We Have 24 Year Experience in consulting", h4 subtitle, paragraph, coral gradient "read more" pill button. Decorative animated icons in background.
4. **Services** — Grey bg (#f7f7f7). 3-column layout: left text block (col-4) with h2 "We Provide Best Services", paragraph, "Load More" button. Two service cards (col-4 each): "Business Opportunity" (flaticon-growth icon, description, "Learn More →" link with green arrow backdrop), "Commercial Approach" (flaticon-wallet icon, description, "Learn More →" link).
5. **Testimonials** — White bg. Section title "Customer Are Saying" with subtitle. Thumbnail slider (3 client avatar thumbnails, left column) + main quote slider (large text, quote icon, review text, client name h3, role h5). Each slide: quote icon image, paragraph review, h3 name, h5 role. 4 slides with same template content.
6. **Portfolio** — White bg. Card-columns masonry layout: one large text card ("Explore Our Best Practice Area" h2 + paragraph), plus 4 project cards (image + card-body with h5 title + p description). "Startup Project" titles.
7. **Second About / Service** — White bg. Reversed row: image left, text right. h2 "We Providing high quality adviser service", h4 subtitle, paragraph, "read more" pill button. Decorative animated icons.
8. **Blog** — White bg. Section title "Update From Blog" + subtitle. 4 blog cards in a row (col-4 each): card image, category tag + date, h5 title, ul with comment count + like count icons.
9. **Footer** — White bg. 5 columns: "Top Products" (4 links), "Quick Links" (4 links), "Features" (4 links), "Resources" (4 links), "Newsletter" (p + email input + subscribe button with coral gradient).
10. **Copyright bar** — Copyright text + "Made with ♥ by Colorlib" (replaced with Component Dock link + social icons: Facebook, Twitter, Instagram, Skype).

## Gherkin Requirements

### Scenario: Navbar renders all navigation links
```
Given the Consultia page loads
Then the navbar displays: Home, About, Blog (with dropdown), Page (with dropdown), Contact
And the Blog dropdown contains: Blog, Single Blog
And the Page dropdown contains: Project, Project Details, Services, Elements
```

### Scenario: Hero banner displays headline and CTA
```
Given the Consultia page loads
Then the hero section shows the headline "Lead from Front in Business Innovation."
And a paragraph description appears below the headline
And a coral gradient pill button labeled "learn more" is visible
And a video link with play icon and "Intro Video" text is visible
```

### Scenario: Hero section has floating decorative animated elements
```
Given the Consultia page loads
Then the hero section contains at least 4 decorative floating icon elements
And the icons animate with CSS keyframe bouncing/translating motion
```

### Scenario: About section shows experience claim
```
Given the Consultia page loads
Then the about section displays heading "We Have 24 Year Experience in consulting"
And a subtitle and paragraph appear below the heading
And a "read more" coral gradient pill button is visible
And an about image is displayed alongside the text
```

### Scenario: Services section displays service cards on grey background
```
Given the Consultia page loads
Then the services section has a grey (#f7f7f7) background
And a heading "We Provide Best Services" is displayed with a "Load More" button
And two service cards are shown: "Business Opportunity" and "Commercial Approach"
And each service card has an icon, description text, and a "Learn More" link
```

### Scenario: Testimonials section renders quote slider with thumbnails
```
Given the Consultia page loads
Then the testimonials section displays heading "Customer Are Saying"
And thumbnail client avatars are shown in a side column
And a quote slider shows review text with a quote icon
And each slide displays a client name and role
```

### Scenario: Portfolio section shows project cards in masonry layout
```
Given the Consultia page loads
Then the portfolio section displays a headline card "Explore Our Best Practice Area"
And 4 project cards are shown with images, titles, and descriptions
```

### Scenario: Second about section mirrors first about layout
```
Given the Consultia page loads
Then a second about section displays "We Providing high quality adviser service"
And it has the same reversed-row layout with image and text
And a "read more" coral gradient pill button is visible
```

### Scenario: Blog section shows 4 blog post cards
```
Given the Consultia page loads
Then the blog section displays heading "Update From Blog"
And 4 blog cards are shown, each with an image, category tag, date, title, and comment/like counts
```

### Scenario: Footer has 5 columns with newsletter signup
```
Given the Consultia page loads
Then the footer shows 5 columns: Top Products, Quick Links, Features, Resources, Newsletter
And the Newsletter column has an email input and a coral gradient "subscribe" button
```

### Scenario: Copyright footer links to Component Dock
```
Given the Consultia page loads
Then the copyright bar displays the current year
And social media icon links are present (Facebook, Twitter, Instagram, Skype)
And a link to https://www.componentdock.com/ is present (branded "Component Dock")
```

### Scenario: CTA buttons use coral gradient with pill shape
```
Given the Consultia page loads
Then all primary CTA buttons use the coral gradient (#feb47b → #ff7e5f)
And buttons have a 50px border-radius (pill shape)
And button text is white
```

### Scenario: Mobile responsive layout collapses navbar
```
Given the Consultia page loads on a mobile viewport
Then the navbar shows a hamburger toggle button
And navigation links collapse into a dropdown menu
```

## Verification Checklist

- [ ] All 10 sections render in correct order matching the original
- [ ] Coral gradient (#feb47b → #ff7e5f) applied to all CTA buttons
- [ ] Pill-shaped buttons (50px radius) throughout
- [ ] Poppins font on headings, Roboto on body text (loaded via Google Fonts)
- [ ] Grey background (#f7f7f7) on services section only
- [ ] Floating decorative animated elements in hero, about, and second about sections
- [ ] Testimonial slider with thumbnails and quote cards
- [ ] Portfolio masonry-style card layout (1 text card + 4 project cards)
- [ ] Blog cards with category, date, title, comment count, like count
- [ ] Footer 5-column layout with newsletter email input + subscribe button
- [ ] Copyright bar with social icons and Component Dock link (NOT Colorlib)
- [ ] Navbar collapses to hamburger on mobile
- [ ] No Colorlib references in any app source file (provenance only in spec)
- [ ] All images use picsum.photos placeholders with deterministic seeds
- [ ] Footer links to https://www.componentdock.com/

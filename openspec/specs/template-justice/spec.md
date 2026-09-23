# Template: Justice (Law Firm Website)

## Purpose

Justice is a multi-section law firm website in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Thelawyer" free template (source: https://colorlib.com/wp/template/thelawyer/, preview: https://preview.colorlib.com/theme/thelawyer/), built under a DIFFERENT name (**Justice**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 law firm template with:
- Sticky header with logo, navigation links, and a phone-number CTA button
- Full-width hero with background image, subtitle ("Committed to Success"), bold h1 headline, paragraph, and dark CTA button
- "Area of Practice" categories section with icon cards
- Services section with image cards showing service details
- Dark "Want to Work" / call-to-action banner section
- Team members section with photos and social links
- Blog / news section with post cards
- Newsletter signup with email input
- Multi-column footer with logo, quick links, and social icons

**WHAT MAKES JUSTICE DISTINCT (signature behaviors):**

1. **Professional law firm aesthetic.** Navy-blue primary (`#2b4acb` approx from CTA button), clean white backgrounds, dark charcoal/navy footer. Professional sans-serif typography (Poppins). The hero uses a full-width background image of a professional (lawyer handshake) with text overlay on the left.
2. **Categories as practice areas.** The "Area of Practice" section uses icon cards (scalpel, stethoscope, medical icons from Flaticon) arranged in a 3-column grid — each card is a white box with an icon and practice area label.
3. **Services section with image cards.** Three service cards each with a thumbnail image, title, description text, and a "Learn More" link. Cards have a subtle hover effect.
4. **Dark CTA banner.** A dark navy/charcoal `section-bg` full-width banner with "Want to Work" messaging, centered text, and a CTA button.
5. **Team member grid.** Photos of team members in a responsive grid with name, role, and social media icons below each photo.
6. **Blog/news posts.** Cards showing blog post thumbnails, dates, titles, and "Read More" buttons.
7. **Newsletter area.** Email signup form with a styled input and submit button, dark background.
8. **Multi-column footer.** Logo, quick links, practice area links, newsletter form, copyright, and social icons.

## Design Tokens

| Token | Value | Source |
|-------|-------|--------|
| Primary (brand) | `#2b4acb` (navy blue) | CTA button, accent lines, icon tints — extracted from screenshot and preview |
| Background (page) | `#ffffff` | Main body |
| Background (dark sections) | `#2c2c2c` approx | Footer, CTA banner, newsletter area |
| Text primary | `#333333` approx | Headings, body text |
| Text secondary | `#777777` approx | Subtitles, secondary copy |
| Font family | `"Poppins", sans-serif` | Standard across ColorLib templates |
| Button shape | Rounded rectangle (~4px radius), solid fill | "Learn About Us" dark button, header CTA button |
| Section backgrounds | White (categories, services, team, blog), dark (`#2c2c2c`) for footer/newsletter/CTA banner | From preview HTML: `section-bg` class |
| Card styling | White background, subtle border/shadow | Practice area cards, service cards, blog cards |

## Requirements

### Feature: Header
- As a visitor I see a sticky navigation bar with the logo "Justice", nav links (Home, About, Services, Case Studies, Blog, Contact), and a phone-number CTA button
- The header sticks to the top on scroll
- The CTA button is styled with primary blue background and white text

### Feature: Hero Section
- As a visitor I see a full-width hero with a background image, subtitle "Committed to Success", a bold heading "Dont Feel Helpless We Fight for Justice", a descriptive paragraph, and a "Learn About Us" CTA button
- The hero uses a background image (placeholder from picsum.photos)
- Animations: fadeInLeft on text elements

### Feature: Practice Areas / Categories
- As a visitor I see an "Area of Practice" section with 3 columns of practice area cards
- Each card has an icon, a title, and a brief description
- Cards are arranged in a responsive grid (3 columns desktop, 1 column mobile)

### Feature: Services
- As a visitor I see a "Services" section with 3 service cards
- Each card has an image thumbnail, a title, and a description
- Cards have a subtle hover/interaction effect

### Feature: Call-to-Action Banner
- As a visitor I see a dark full-width banner section with "Want to Work" messaging
- The banner has centered text and a CTA button
- The banner uses a dark background color

### Feature: Team Members
- As a visitor I see a "Meet Our Dedicated Team Members" section
- Team members are displayed in a responsive grid
- Each member has a photo, name, role, and social media icon links

### Feature: Blog / News
- As a visitor I see a "Lawyers news" section with blog post cards
- Each card has a thumbnail image, date, title, and "Read More" button
- Posts are displayed in a 3-column grid

### Feature: Newsletter
- As a visitor I see a newsletter signup section with email input and submit button
- The section has a dark background

### Feature: Footer
- As a visitor I see a multi-column footer with logo, quick links, practice area links, newsletter, and social icons
- Footer has a dark background with light text

## Verification Checklist

- [ ] Header is sticky on scroll with logo, nav links, and phone CTA
- [ ] Hero section has background image, subtitle, heading, paragraph, and CTA button
- [ ] Practice areas section shows 3 icon cards in a responsive grid
- [ ] Services section shows 3 image cards with descriptions
- [ ] Dark CTA banner section exists with messaging and button
- [ ] Team members section shows responsive grid with photos, names, roles, social links
- [ ] Blog section shows 3 post cards with images, dates, titles, "Read More"
- [ ] Newsletter section has email input and submit button on dark background
- [ ] Footer has multi-column layout with logo, links, and social icons
- [ ] All sections match the ColorLib Thelawyer section order 1:1
- [ ] Design tokens (colors, fonts, button shapes) match the original
- [ ] No references to ColorLib or "Thelawyer" in any app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] public/CNAME contains `justice.free.componentdock.com`
- [ ] `@free-react-templates/justice` package name
- [ ] Tests pass at 100% coverage
- [ ] Typecheck passes
- [ ] Build succeeds

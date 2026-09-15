# GreenCause — Design Notes

Source: ColorLib Seelife
Preview: https://preview.colorlib.com/theme/seelife/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/seelife-free-template.jpg

## Visual design summary

A modern charity/nonprofit template with a bold green (#60bc0f) primary brand
color and yellow (#fdbb00) accent. Clean white sections alternating with a
light off-white (#f9fafc). Dark navy footer (#091b27) creates strong contrast.
Sharp square buttons (no border-radius) give a direct, activist feel. The hero
uses a dark semi-transparent overlay on a full-bleed background image.

## Section-by-section fidelity notes

### Navbar
- Absolute positioned over hero (z-index 99999)
- Logo left, nav links right, hamburger for mobile
- Use lucide-react for hamburger icon

### Hero
- Full-width with dark overlay: `linear-gradient(rgba(3,1,10,0.5), rgba(3,1,10,0.5))`
- Yellow accent text: "Give a hand" (50px, uppercase, #fdbb00)
- White heading: "to make the better world" (50px, bold, Poppins, uppercase)
- Body paragraph (centered, max-width 680px)
- Two buttons: "Donate Now" (green primary), "See Causes" (yellow secondary)
- Use picsum.photos/seed/greencause-hero/1920/900 for hero image

### Causes (icon cards)
- Section heading "Our major causes" + subtitle
- 3 columns: icon image, title, description
- Use picsum.photos/seed/greencause-cause-N/200/200 for icons
- Use lucide-react icons instead of images (Heart, HandHelping, Users)

### About
- Two-column layout: left image, right content
- Heading: "We are nonprofit team and work worldwide"
- Two paragraphs of body text
- Green "Learn more" button
- Use picsum.photos/seed/greencause-about/600/500 for image

### Featured Causes
- 3-column cards with image top, content below
- Each card: title, description, raised/goal amounts, donor count, donate button
- Cards have hover shadow: `0px 12px 40px rgba(153,153,153,0.2)`
- Use picsum.photos/seed/greencause-feature-N/400/300 for card images

### Events
- 2-column event cards
- Left: image with dark overlay
- Right: title, description, countdown timer, "Learn More" button
- Countdown: days, hours, minutes, seconds (use useState/useEffect)
- Use picsum.photos/seed/greencause-event-N/600/400 for images

### Team/Volunteers
- 4-column volunteer cards
- Photo, name, role, description, social icons (Facebook, Twitter, Instagram, Email)
- Use lucide-react for social icons
- Use picsum.photos/seed/greencause-team-N/300/300 for photos

### CTA Banner
- Full-width green (#60bc0f) background with dark overlay (opacity 0.5)
- Heading: "Become a volunteer" (36px, white)
- Body text (white)
- Yellow rounded button: "join with us" (#fdbb00, rounded class)

### Stories/Blog
- 3-column blog cards
- Image thumbnail, date + category metadata with calendar/book icons
- Title link
- Use picsum.photos/seed/greencause-story-N/400/250 for images

### Footer
- Dark navy background (#091b27)
- 4 columns: "Our Mission" (large title 36px), Quick Links, Gallery (6 thumbnails), Contact Us
- Copyright bar: darker navy (#071721), white text, green link to componentdock.com
- Social icons in copyright bar
- Use picsum.photos/seed/greencause-gallery-N/100/100 for gallery thumbnails

## Color palette reference

```
Brand green:    #60bc0f  (primary buttons, CTA area, accents)
Accent yellow:  #fdbb00  (secondary buttons, hero accent text)
Text dark:      #222222  (headings, body)
Text muted:     #777777  (subtitles, meta)
Text light:     #999999  (light body)
White:          #ffffff  (cards, text on dark)
Light bg:       #f9fafc  (alternating sections)
Footer bg:      #091b27  (dark navy)
Footer bottom:  #071721  (copyright bar)
```

## Fonts

- Headings/Banner: Poppins (bold, uppercase on banner)
- Body: Roboto
- Import both via Google Fonts in index.html

# NewsByte — Implementation Tasks

Source: ColorLib Magnews (https://colorlib.com/wp/template/magnews/)
Preview: https://preview.colorlib.com/theme/magnews/

## Structure Order

1. TopHeader — dark bar with nav links (About Us, Contact, Advertisement, Privacy, Login), social icons, search bar
2. LogoArea — "NEWSBYTE 24H" logo left, ad placeholder right (728×90)
3. MainNav — dark `#07090C` bar, 7 category links, active = `#EF233C`, search icon right
4. HeroCarousel — Owl-style carousel, 2 side-by-side cards, image overlay, "NEWS" badge, headline, date+comments
5. TrendingPosts — "Trending Posts" section, 4 article thumbs in row, red down-arrow separator above
6. TabbedContent — "Stay Connected" title, News/Sport tabs, article thumbnails per tab
7. SidebarWidgets — Subscribe (email input + btn), Most Read, Popular Video, Popular Posts
8. FeaturedPosts — Large article cards in grid
9. Footer — Dark `#07090C`, 4-column: About, Gallery, Social, Tweets; copyright bar with Component Dock link

## Design Notes

- **Colors:** brand `#EF233C` (red), dark `#07090C`, body text `#2C2C2C`, borders `#DDD`
- **Fonts:** Lato (headings/nav), Open Sans (body) — load via Google Fonts `<link>`
- **Shapes:** No border-radius anywhere (sharp Bootstrap-style), flat buttons
- **Carousel:** Use a React carousel library (e.g. swiper) instead of Owl
- **Category badges:** Uppercase Lato 700, white text on `#EF233C` background
- **Article cards:** Image thumbnail + title + meta (date, comments)
- **Footer:** 4 columns with widgets: about text, gallery thumbnails, social icons, tweets

## Fidelity Notes

- Section order matches original: header → logo → nav → carousel → trending → tabs → sidebar → featured → footer
- The hero uses a carousel with prev/next arrows — replicate with a React carousel
- Tab switching is JS-driven (Bootstrap tabs in original) — implement with React state
- Sidebar is a right column in the original (Bootstrap grid) — use CSS Grid or flexbox
- Red down-arrow separator is a decorative element between hero and trending

# Ethos — Design Notes

> Recreation of ColorLib "University" (https://colorlib.com/wp/template/university/)

## Preview URL

https://preview.colorlib.com/theme/university/

## Design Tokens

| Token                 | Value                            | Source                               |
| --------------------- | -------------------------------- | ------------------------------------ |
| Brand color           | #11cbd7 (cyan/teal)              | .btn, .heading, .block-18, .block-22 |
| Font                  | Rubik (300–700)                  | font-family in style.css             |
| Background - sections | #fff (white)                     | .site-section default                |
| Background - alt      | #e3e3e3 (light gray)             | .bg-light                            |
| Background - accent   | #11cbd7 (brand teal)             | .block-22, newsletter area           |
| Text - primary        | #4d4d4d                          | body text                            |
| Text - secondary      | #999999                          | meta, secondary text                 |
| Shadow - cards        | 0 2px 20px -5px rgba(0,0,0,0.07) | .block-19                            |
| Shadow - buttons      | 0 5px 20px -5px rgba(0,0,0,0.2)  | .btn                                 |
| Border-radius         | 0 (sharp corners)                | .btn border-radius: 0                |

## Sections (in order)

1. **Navbar** — fixed top, logo left, nav center, phone/email right. Mobile hamburger.
2. **Hero** — full-viewport bg image, dark gradient overlay, centered search form with 3 inputs + button.
3. **Welcome** — two-column: image with play button overlay left, heading + text + CTA right.
4. **Knowledge** — 4-column grid, each card: circle icon, heading, description, "Read More" link.
5. **Stats** — teal bg, "Education is Life" heading, 4 animated counters in grid.
6. **Courses** — "Popular Courses" heading, horizontal scroll/carousel of course cards (image, title, description, price badge).
7. **Teachers** — "Teachers" heading, 3-column grid, flip-card interaction (front: photo+name+role, back: bio+social).
8. **News** — two-column: large video embed card left, two blog cards right (image+date+title+excerpt).
9. **Newsletter** — teal bg, centered "Subscribe" heading, email input + button.
10. **Footer** — dark bg, 4 columns: brand+about, nav links, recent posts, contact info. Copyright bar with Component Dock link.

## Placeholders

- Hero bg: picsum.photos/seed/ethos-hero/1920/1080
- Welcome image: picsum.photos/seed/ethos-welcome/600/400
- Course images: picsum.photos/seed/ethos-course-N/400/300
- Teacher photos: picsum.photos/seed/ethos-teacher-N/300/300
- News images: picsum.photos/seed/ethos-news-N/600/400

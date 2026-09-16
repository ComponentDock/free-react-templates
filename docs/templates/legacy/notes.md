# Legacy — Implementation Notes

Source: ColorLib Classic (https://preview.colorlib.com/theme/classic/)
New name: `legacy` | Package: `@free-react-templates/legacy`

## Section Implementation Order

1. **Navbar** — Fixed top nav with smooth-scroll anchors. Left: logo. Right: help menu (user icon, search toggle, language selector) + primary menu links. Use `lucide-react` icons (User, Search, ChevronDown). Search input slides down on toggle.

2. **Hero** — Full-width section with background image via `picsum.photos/seed/legacy-hero/1920/1080`, dark overlay (`bg-black/40`), vertically centered content. Headings in Montserrat. Large pill CTA button with gradient.

3. **About** — 2-column (`grid-cols-2` or `flex`). Left: heading + paragraph + "Learn More" pill button. Right: illustration image via `picsum.photos`. Hide right column on small screens.

4. **Video + Why Choose Us** — Gray bg section. 2-column: left video thumbnail with play icon overlay, right tabbed content (3 tabs: Mission, Vision, Support). Each tab: uppercase subheading "SINCE WE HAVE 25 YEARS", heading "EXPERIENCE IN THIS PASSION", paragraph, "View More" button. Implement as React state for active tab.

5. **Skills** — Gray bg. Heading + paragraph. 6 circular progress charts in 3×2 grid. Use SVG circles with `stroke-dasharray`/`stroke-dashoffset` for percentage fill. Labels: WebDesign 95%, Coding 85%, Developing 90%, JavaScript 95%, Apps Design 85%, UX Design 90%.

6. **Portfolio** — Full-width. Centered heading. Filter tabs as pill buttons (state-driven). 3×2 grid of images via `picsum.photos/seed/legacy-port-N/400/300`. Hover overlay with title + icon. Implement filter with simple state (no library needed).

7. **Team** — 4-card grid. Each card: image (`picsum.photos/seed/legacy-team-N/400/500`), hover overlay with name, role, 3 horizontal skill bars (width = percentage), social icons row. Use `opacity-0 group-hover:opacity-100` for hover reveal.

8. **Pricing** — Gray bg. Centered heading. Monthly/Yearly toggle (pill tabs, state). 4-column card grid. Each card: tier name, price with period, 4 feature items (checkmarks), "Purchase Now" button. Middle card (Premium) gets active/highlighted style with gradient border or shadow.

9. **Blog** — 2-column layout. Left: featured post with large image, title, date, excerpt. Right: 3 stacked sidebar posts with thumbnail, title, date, excerpt. All placeholder content.

10. **Counters** — Gray bg. 4-column grid. Each: icon (lucide), label, large animated number. Use `react-countup` or simple CSS counter animation on scroll-into-view.

11. **Contact** — Dark bg section. Heading "Contact Now" with gradient underline/bar. 2-column: left form (2×2 field grid + textarea + submit button), right info list (address, phone, email with icons) + social icons. Form validation with controlled inputs.

12. **Footer** — Dark bg. 5-column grid: brand + description + social, News links, Company links, Resources links, Solutions links. Copyright bar with Component Dock link.

## Design Notes

- **Gradient buttons:** `bg-gradient-to-r from-[#a1c4fd] to-[#c2e9fb]` with `rounded-full` (pill). Hover: `translate-y-[-4px]` + blue shadow.
- **Font loading:** Montserrat (700) for headings, Roboto (400, 500) for body — via Google Fonts `<link>` in `index.html`.
- **Gray sections:** `bg-[#f9f9f9]` for alternating section backgrounds.
- **Text colors:** Primary `#4f4f4f`, secondary `#898989`.
- **Accent dot:** Small `#f7c336` circle after hero heading.
- **No parallax** — this is a straightforward single-page layout.
- **Icons:** All `lucide-react` replacing original `icofont` set.
- **Images:** All `picsum.photos/seed/legacy-*` for deterministic placeholders.

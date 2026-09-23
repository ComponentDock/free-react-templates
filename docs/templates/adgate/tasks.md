# AdGate (ColorLib Classy Ads) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the PREP stream (stream 3).
> Implementation ships later on `feat/template-adgate`.

## Design notes

- **Original:** ColorLib "Classy Ads" — free classified ads website template
  (source: https://colorlib.com/wp/template/classy-ads/).
- **Live preview DOM:** `https://preview.colorlib.com/theme/classy-ads/` returned HTTP 404.
  Fallback: screenshot at `https://colorlib.com/wp/wp-content/uploads/sites/2/classyads-free-template.jpg`
  analyzed via vision + ColorLib page description.
- **Structure observed (from screenshot + page copy):** navbar (Home/Ads/About/Blog/Contact + Log In/Register + Post an Ad CTA) → hero (full-width bg image, dark overlay, "Largest Classifieds In The World" / "You can buy, sell anything you want.") → search bar (keyword + location + category dropdown + Search button) → categories (Real Estate 3,921 / Books & Magazines 398 / Furniture 1,229 / Electronics 32,891 / Cars & Vehicles 29,221 / Other 219) → featured ads grid → trending items → testimonials → newsletter → footer.
- **Design tokens:** brand teal **#20c997**; dark text **#212121**/**#333333**; muted **#777777**; white navbar **#ffffff**; light gray category bg **#f8f9fa**; hero overlay **rgba(0,0,0,0.5)**; button radius **4px**; body font **Poppins** (Google Fonts).
- **Recreation name:** AdGate. App folder `apps/adgate`, package `@free-react-templates/adgate`.
- **Design approach:** hero = seeded picsum workspace photo + headline + search bar; categories with lucide icons on gray bg; featured ads grid with seeded picsum tiles; trending; testimonials; newsletter; footer with link columns + Component Dock link.
- Reuse `packages/ui` (Button, ButtonLink, Card, cn) — do NOT duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with Navbar/Hero/Sections/Footer structure).

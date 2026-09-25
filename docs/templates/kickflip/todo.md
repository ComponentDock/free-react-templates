commit 198bdf11d1ec50efb325bbbd8ec0ad878307e87a
Author: root <root@vmi3555397.contaboserver.net>
Date: Fri Sep 25 19:42:50 2026 +0200

    docs: prep Kickflip (ColorLib Skater) spec + research

diff --git a/docs/templates/kickflip/todo.md b/docs/templates/kickflip/todo.md
new file mode 100644
index 000000000..d95b4e8d2
--- /dev/null
+++ b/docs/templates/kickflip/todo.md
@@ -0,0 +1,59 @@
+# Kickflip — Implementation Notes +
+Source: ColorLib Skater (https://preview.colorlib.com/theme/skater/)
+New name: kickflip +
+## Section order (implement from top to bottom) +
+1. Navbar — sticky, transparent over hero, solid on scroll. Logo text with green accent. Dropdown for About (Team, Pricing, FAQ). Mobile hamburger + slide-in menu.
+2. Hero Carousel — 2 slides, each with background image + dark overlay. Centered heading + subtitle + white outline CTA button. Use a simple CSS/JS carousel or Framer Motion.
+3. Services — Dark bg (#333). 6 service cards in 3×2 grid. Circular icon containers (50% radius, 50×50). White text. Use lucide-react icons (e.g. Skateboard).
+4. About / "My Best Performance" — Two alternating split sections. Each: text column + image column. Use picsum.photos for images.
+5. Counter Stats — 4-column grid. Animated number counters (use IntersectionObserver + requestAnimationFrame). Stats: Experience, Expert Trainer, Trainer count, Members.
+6. Team — 3 member cards. Circular photo + name + role. Use picsum.photos for faces.
+7. Pricing — 3 cards. Basic $47/yr, Premium $200/yr (highlighted), Professional $750/yr. Each: price, 6 feature bullets, "Buy Now" button.
+8. FAQ — Accordion. 8 Q&A items. Only one open at a time.
+9. Testimonials — Carousel. Quote + author name + role. At least 2 testimonials.
+10. Blog — 2 post cards. Image + date/author + heading + excerpt + "Read More" link.
+11. Contact — Dark bg. "Get In Touch" heading + "Contact Me" subheading + description + "Get Started" button.
+12. Footer — Dark bg. 4 columns: About Us text, Features links, Newsletter form, Social icons. Copyright. Component Dock link required. +
+## Design tokens to set in @theme (index.css) +
+- brand-green: #71bc42
+- brand-orange: #ff8b00
+- dark-bg: #333333
+- dark-bg-darker: #222222
+- heading-color: #222222
+- body-color: #333333
+- muted-color: #939393
+- border-color: #e3e3e3
+- light-bg: #f8f9fa +
+## Fonts +
+- Headings: Oswald (Google Fonts, weights 400/700)
+- Body: Rubik (Google Fonts, weights 300/400/700)
+- Load via `<link>` in index.html +
+## Key component notes +
+- Navbar: use `cn()` for conditional classes (sticky state). Dropdown via useState toggle.
+- Hero Carousel: keep simple — either manual CSS carousel or lightweight JS. No heavy deps.
+- Services icons: lucide-react (Skateboard, Target, Trophy, Zap, Rocket, Star or similar).
+- Counter: IntersectionObserver to trigger animation when visible. Start at 0, animate to target.
+- FAQ: single-open accordion pattern (controlled state).
+- Testimonials: simple carousel with prev/next or auto-play.
+- All images: `https://picsum.photos/seed/kickflip-<n>/<w>/<h>`
+- No ColorLib references anywhere in app code.
+- Footer MUST link https://www.componentdock.com/ branded as "Component Dock". +
+## Fidelity notes +
+- Match section order exactly as listed in spec.
+- Services section must have dark (#333) background — this is a distinctive feature.
+- Hero uses full-viewport background images with overlay — not solid color.
+- Pricing has 3 tiers with Premium visually elevated/highlighted.
+- Counter section uses animated counting effect.
+- About section alternates text-left/image-right then image-left/text-right.
+- FAQ is a true accordion (click to expand/collapse, one at a time).

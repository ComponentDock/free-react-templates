import { PORTFOLIO_ITEMS, type PortfolioItem } from '../data'

/* div.container-fluid.portfolio-wrap.bg-light.pt-0.site-section — pulled up
   -5rem over the hero's bottom edge; a :before pseudo-element paints a solid
   black strip across the top 70% of the section (rendered here as an
   absolutely-positioned black band). Row 1 = 3/6/3 columns (bottom-aligned),
   row 2 = three equal 4-column cells. Items shadow
   `0 4px 40px -5px rgba(0,0,0,.4)`, hover: image scale 1.05 + 20% black
   overlay. */
function PortfolioLink({ src, alt, span, ratio }: PortfolioItem) {
  return (
    <a
      href="#portfolio"
      aria-label="View project"
      className={`group relative block overflow-hidden shadow-[0_4px_40px_-5px_rgba(0,0,0,.4)] ${span}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 ${ratio}`}
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </a>
  )
}

export function PortfolioMosaic() {
  return (
    <section id="portfolio" aria-label="Portfolio" className="relative z-[2] -mt-20 bg-mist">
      {/* Black band behind the top ~70% of the section (source :before). */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[70%] bg-ink" />

      <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-14 md:pt-12 md:pb-20">
        <div className="grid grid-cols-12 items-end gap-6">
          {PORTFOLIO_ITEMS.slice(0, 3).map((item) => (
            <PortfolioLink key={item.src} {...item} />
          ))}
        </div>
        <div className="mt-6 grid grid-cols-12 gap-6">
          {PORTFOLIO_ITEMS.slice(3).map((item) => (
            <PortfolioLink key={item.src} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

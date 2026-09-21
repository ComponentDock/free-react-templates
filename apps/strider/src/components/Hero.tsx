import { ShoppingBag } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="space-y-6">
          <h1
            className="text-4xl font-bold leading-tight text-heading md:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Stride Into
            <br />
            <span className="bg-gradient-to-r from-brand-light to-brand bg-clip-text text-transparent">
              Style
            </span>
          </h1>
          <p className="max-w-md text-base leading-relaxed text-body">
            Discover the latest trends in fashion. Premium sneakers, sportswear, and accessories
            curated for the modern wardrobe.
          </p>
          <a
            href="#shop"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-light to-brand px-8 py-3 text-sm font-medium uppercase text-white shadow-lg transition-all hover:shadow-xl"
          >
            <ShoppingBag size={18} />
            Shop Now
          </a>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://picsum.photos/seed/strider-hero/600/500"
            alt="Fashion sneaker showcase"
            className="w-full max-w-md rounded-2xl object-cover shadow-2xl"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}

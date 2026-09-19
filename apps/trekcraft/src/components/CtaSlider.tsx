import { Star } from 'lucide-react'

const PACKAGES = [
  {
    title: 'Bali Paradise Escape',
    rating: 5,
    description:
      'Experience the magic of Bali with temple visits, rice terrace walks, and sunset dinners on the beach.',
  },
  {
    title: 'Greek Island Hopping',
    rating: 4,
    description:
      'Sail through the stunning Aegean islands, explore ancient ruins, and enjoy Mediterranean cuisine.',
  },
  {
    title: 'Japanese Cultural Journey',
    rating: 5,
    description:
      'Immerse yourself in traditional tea ceremonies, visit ancient temples, and explore bustling Tokyo.',
  },
]

export function CtaSlider() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/trekcraft-cta/1920/600)' }}
      >
        <div className="absolute inset-0 bg-trek-dark/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Featured Packages</h2>

        <div className="space-y-6">
          {PACKAGES.map((pkg) => (
            <div key={pkg.title} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center justify-center gap-1 mb-3">
                {Array.from({ length: pkg.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-trek-star text-trek-star" />
                ))}
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">{pkg.title}</h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">{pkg.description}</p>
              <a
                href="#"
                className="inline-block bg-gradient-to-r from-trek-orange to-trek-purple text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                book now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Eye } from 'lucide-react'

const portfolioItems = [
  { seed: 'fitforge-p1', alt: 'Crossfit workout 1' },
  { seed: 'fitforge-p2', alt: 'Crossfit workout 2' },
  { seed: 'fitforge-p3', alt: 'Crossfit workout 3' },
  { seed: 'fitforge-p4', alt: 'Crossfit workout 4' },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Our Gallery
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {portfolioItems.map((item) => (
            <div key={item.seed} className="group relative overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${item.seed}/400/300`}
                alt={item.alt}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Eye className="mb-2 h-8 w-8 text-white" />
                <span className="text-sm font-semibold text-white">View More</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

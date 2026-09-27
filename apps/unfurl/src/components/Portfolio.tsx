import { useState } from 'react'

const portfolioItems = [
  { title: 'Shoe Rebranding', tags: 'web, branding', seed: 'unfurl-1' },
  { title: 'Reworking', tags: 'branding, packaging, illustration', seed: 'unfurl-2' },
  { title: 'Modern Building', tags: 'branding, packaging', seed: 'unfurl-3' },
  { title: 'Watch', tags: 'web, packaging', seed: 'unfurl-4' },
  { title: 'Shoe Rebranding', tags: 'illustration, packaging', seed: 'unfurl-5' },
  { title: 'Reshape', tags: 'web, branding', seed: 'unfurl-6' },
  { title: 'Modern Building', tags: 'branding, packaging', seed: 'unfurl-7' },
  { title: 'Showreel 2019', tags: 'web, branding', seed: 'unfurl-8' },
  { title: 'Render Packaging', tags: 'web, illustration', seed: 'unfurl-9' },
]

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="portfolio" className="py-20 bg-dark-section">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-12">
          Portfolio
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, i) => (
            <div
              key={`${item.seed}-${i}`}
              className="relative overflow-hidden rounded-lg group cursor-pointer aspect-square"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={`https://picsum.photos/seed/${item.seed}/600/600`}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div
                className={`absolute inset-0 bg-brand/80 flex flex-col items-center justify-center text-center px-4 transition-opacity duration-300 ${
                  hoveredIndex === i ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm">{item.tags}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

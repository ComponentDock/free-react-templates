import { Play } from 'lucide-react'

const slides = [
  {
    image: 'https://picsum.photos/seed/spread-hero1/1200/600',
    category: 'Travel',
    title: "Discover The World's Most Beautiful Destinations",
    date: 'MAY 8, 2024',
  },
  {
    image: 'https://picsum.photos/seed/spread-hero2/1200/600',
    category: 'Lifestyle',
    title: 'A Closer Look At Modern Living Trends',
    date: 'APR 22, 2024',
  },
  {
    image: 'https://picsum.photos/seed/spread-hero3/1200/600',
    category: 'Culture',
    title: 'Global Resorts Network Changing The Game',
    date: 'MAR 15, 2024',
  },
]

export function HeroCarousel() {
  return (
    <section className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="relative h-64 md:h-80 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
              <span className="text-brand text-xs font-semibold uppercase tracking-wider mb-2">
                {slide.category}
              </span>
              <h2 className="text-white text-xl md:text-2xl font-bold leading-snug mb-4">
                {slide.title}
              </h2>
              <button
                aria-label={`Play ${slide.title}`}
                className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-brand hover:border-brand transition-colors"
              >
                <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

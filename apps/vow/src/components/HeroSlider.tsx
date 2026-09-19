import { ChevronRight } from 'lucide-react'

const slides = [
  { id: 1, label: '01.' },
  { id: 2, label: '02.' },
  { id: 3, label: '03.' },
]

export function HeroSlider() {
  return (
    <section className="relative h-[500px] overflow-hidden bg-dark">
      <div
        className="hero-slide absolute inset-0"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/vow-hero/1920/500)',
        }}
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[3px]">Promo Prices</p>
        <h1 className="font-sans text-5xl font-bold tracking-wide">New Collection</h1>
      </div>
      <button
        aria-label="Next slide"
        className="absolute right-6 top-1/2 z-10 -translate-y-1/2 text-white/70 transition-colors hover:text-white"
      >
        <ChevronRight size={32} />
      </button>
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <ul className="flex gap-4" role="list">
          {slides.map((s, i) => (
            <li key={s.id}>
              <button
                aria-label={`Go to slide ${s.id}`}
                className={`flex items-center gap-1 text-sm font-semibold ${
                  i === 0 ? 'text-white' : 'text-white/40'
                }`}
              >
                {s.label}
                <span
                  className={`ml-1 inline-block h-[2px] w-4 ${
                    i === 0 ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

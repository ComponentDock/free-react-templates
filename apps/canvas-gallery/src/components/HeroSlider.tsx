import { ChevronRight } from 'lucide-react'

const slides = [
  { name: ['Jesse', 'Edwards'] as const, subtitle: 'Star Model 2019', seed: 'model-1' },
  { name: ['Naznin', 'Niloy'] as const, subtitle: 'Star Model 2019', seed: 'model-2' },
  { name: ['Shaila', 'Ritu'] as const, subtitle: 'Star Model 2019', seed: 'model-3' },
]

const socialIcons = ['Facebook', 'Twitter', 'Instagram', 'YouTube'] as const

export function HeroSlider() {
  const slide = slides[0]!

  return (
    <section className="relative h-[80vh] min-h-[500px] overflow-hidden bg-text-dark">
      {/* Background image (first slide shown as static) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(https://picsum.photos/seed/${slide.seed}/1920/1080)` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Decorative curve at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="max-w-lg">
            <h2 className="mb-2 text-5xl font-bold leading-tight text-white md:text-7xl">
              {slide.name[0]}
              <br />
              {slide.name[1]}
            </h2>
            <p className="mb-6 text-lg font-medium text-white/80">{slide.subtitle}</p>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
            >
              Model details <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Social info */}
      <div className="absolute bottom-24 left-4 z-10 hidden md:flex flex-col gap-3">
        {socialIcons.map((icon) => (
          <a
            key={icon}
            href="#"
            className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
          >
            <span className="h-px w-6 bg-white/50" />
            {icon}
          </a>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-8 z-10 flex gap-2">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${i === 0 ? 'bg-brand' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  )
}

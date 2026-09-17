export interface HeroProps {
  className?: string
}

const slides = [
  {
    year: '2025',
    title: 'Marketing Conference',
    date: '12-16 February 2025',
    location: 'Miami, FL',
  },
  { year: '2025', title: 'Growth Summit', date: '12-16 February 2025', location: 'Miami, FL' },
  { year: '2025', title: 'Innovation Forum', date: '12-16 February 2025', location: 'Miami, FL' },
]

export function Hero({ className }: HeroProps) {
  const slide = slides[0]!

  return (
    <section
      id="home"
      className={`relative flex min-h-screen items-center bg-navy ${className ?? ''}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/confer/1920/1080)' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
          <span className="block">{slide.year}</span>
          <span className="block">{slide.title}</span>
        </h1>

        <div className="mt-6 flex items-center gap-6 text-sm text-gray-300">
          <span>{slide.date}</span>
          <span className="h-1 w-1 rounded-full bg-primary-400" />
          <span>{slide.location}</span>
        </div>

        <a
          href="#tickets"
          className="mt-8 inline-flex items-center gap-2 rounded bg-primary-400 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
        >
          Get Tickets
          <span className="text-lg">→</span>
        </a>

        <div className="mt-12 flex gap-4">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`text-sm font-bold ${i === 0 ? 'text-primary-400' : 'text-gray-500'}`}
            >
              0{i + 1}.
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

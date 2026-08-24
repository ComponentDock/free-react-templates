import { BookOpen, Gamepad2, UtensilsCrossed } from 'lucide-react'

const iconCards = [
  { icon: BookOpen, label: 'Learn' },
  { icon: Gamepad2, label: 'Play' },
  { icon: UtensilsCrossed, label: 'Meal' },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat pt-20"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/nurture-hero/1920/1080)',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-ink/70" />

      <div className="relative z-10 px-4 text-center">
        <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
          Learning Center for Your Kids
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
          Providing quality education and a nurturing environment where children can learn, play,
          and grow together.
        </p>
        <a
          href="#contact"
          className="inline-block rounded-full bg-brand px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Enroll Now
        </a>

        {/* Icon cards */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {iconCards.map((card) => (
            <div
              key={card.label}
              className="flex w-40 flex-col items-center rounded-lg bg-white/10 px-6 py-5 backdrop-blur-sm"
            >
              <card.icon className="mb-2 h-10 w-10 text-brand" />
              <span className="text-sm font-semibold text-white">{card.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

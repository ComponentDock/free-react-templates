import { Brush, Droplets, Feather, Scissors, Sparkles, SprayCan } from 'lucide-react'

const services = [
  { icon: Scissors, title: 'Hair Cut' },
  { icon: SprayCan, title: 'Facial & Body Care' },
  { icon: Sparkles, title: 'Massages' },
  { icon: Brush, title: 'Shaving' },
  { icon: Droplets, title: 'Shampoo' },
  { icon: Feather, title: 'Hair Styling' },
] as const

export function Services() {
  return (
    <section id="about" className="relative overflow-hidden py-20 lg:py-[120px]">
      <img
        src="https://picsum.photos/seed/shear-services/1920/800"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-white sm:text-4xl">
            More Services
          </h2>
          <p className="mt-4 text-white/70">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-xl bg-white/95 p-8 text-center shadow-sm backdrop-blur transition-shadow hover:shadow-lg dark:bg-gray-950/90"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
                <service.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold uppercase text-ink dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-mist dark:text-gray-400">
                Far far away, behind the word mountains, far from the countries Vokalia.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Droplets, Palette, Scissors, Slice, Sparkles, Wand2 } from 'lucide-react'

const services = [
  {
    title: 'Hair Dressing',
    text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    icon: Scissors,
  },
  {
    title: 'Ombre Hair',
    text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    icon: Palette,
  },
  {
    title: 'Hair Coloring',
    text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    icon: Droplets,
  },
  {
    title: 'Treatments',
    text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    icon: Sparkles,
  },
  {
    title: 'Cutting & Trimming',
    text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    icon: Slice,
  },
  {
    title: 'Keratin Straightening',
    text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    icon: Wand2,
  },
] as const

export function Services() {
  return (
    <section
      id="services"
      aria-label="Services"
      className="relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://picsum.photos/seed/lustre-services/1920/900')" }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <h2 className="text-center font-display text-4xl font-bold text-white sm:text-5xl">
          Our Services
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-white/70">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group bg-gold-500 p-8 transition-colors hover:bg-gray-900"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-white">
                <service.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold text-ink-soft transition-colors group-hover:text-gold-500">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft/80 transition-colors group-hover:text-white/80">
                {service.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

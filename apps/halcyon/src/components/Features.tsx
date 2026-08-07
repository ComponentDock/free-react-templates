import { Flame, Mountain, Shirt, Waves, type LucideIcon } from 'lucide-react'

const features: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: 'Relaxing Massage',
    text: 'Slow, rhythmic treatments that quiet the nervous system.',
    icon: Waves,
  },
  {
    title: 'Candle',
    text: 'Candle-lit rituals and aromatherapy to ease the senses.',
    icon: Flame,
  },
  {
    title: 'Bathrobe',
    text: 'Wrap up in soft robes and linger a while after your session.',
    icon: Shirt,
  },
  {
    title: 'Hot Stones',
    text: 'Warm basalt stones melt tension from deep muscle layers.',
    icon: Mountain,
  },
]

export function Features() {
  return (
    <section className="relative overflow-hidden bg-slate py-24">
      <img
        src="https://picsum.photos/seed/halcyon-features/1600/900"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">Spa Features</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-brand" />
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded border border-white/20 p-8 text-center transition-colors hover:bg-white/10"
            >
              <feature.icon className="mx-auto h-9 w-9 text-brand" aria-hidden="true" />
              <h3 className="mt-4 font-serif text-lg font-bold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

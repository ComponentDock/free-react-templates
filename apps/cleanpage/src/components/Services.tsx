import { Compass, BarChart3, Palette, Sparkles } from 'lucide-react'

const items = [
  {
    icon: Compass,
    title: 'Business Strategy',
    desc: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
  },
  {
    icon: BarChart3,
    title: 'Data Analysis',
    desc: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    desc: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
  },
  {
    icon: Sparkles,
    title: 'Creative',
    desc: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
  },
]

export function Services() {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-lg bg-white p-8 text-center shadow-sm transition hover:shadow-md"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                <item.icon size={28} />
              </div>
              <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-mist">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

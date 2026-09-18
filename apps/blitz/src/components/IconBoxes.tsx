import { Globe, Users, TrendingUp, Lightbulb } from 'lucide-react'

const items = [
  {
    icon: Users,
    title: 'Great team',
    text: 'Etiam euismod sapien nec est tempus consequat. Nullam eget pretium mi.',
  },
  {
    icon: Globe,
    title: 'Modern Design',
    text: 'Etiam euismod sapien nec est tempus consequat. Nullam eget pretium mi.',
  },
  {
    icon: TrendingUp,
    title: 'Online Marketing',
    text: 'Etiam euismod sapien nec est tempus consequat. Nullam eget pretium mi.',
  },
  {
    icon: Lightbulb,
    title: 'Easy to use',
    text: 'Etiam euismod sapien nec est tempus consequat. Nullam eget pretium mi.',
  },
] as const

export function IconBoxes() {
  return (
    <section id="icon-boxes" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Title + CTA */}
          <div>
            <h2 className="mb-6 font-display text-3xl font-bold text-brand">
              Build your entire website in minutes
            </h2>
            <a
              href="#services"
              className="inline-block rounded bg-accent px-6 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-accent/90"
            >
              Discover More
            </a>
          </div>

          {/* Items left column */}
          <div className="space-y-8">
            {items.slice(0, 2).map((item) => (
              <div key={item.title}>
                <div className="mb-3 flex items-center gap-3">
                  <item.icon size={24} className="text-accent" />
                  <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-mist">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Items right column */}
          <div className="space-y-8">
            {items.slice(2).map((item) => (
              <div key={item.title}>
                <div className="mb-3 flex items-center gap-3">
                  <item.icon size={24} className="text-accent" />
                  <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-mist">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

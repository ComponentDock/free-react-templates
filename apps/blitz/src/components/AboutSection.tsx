import { User } from 'lucide-react'

const features = [
  {
    title: 'Fast support to all our clients',
    text: 'Etiam nec odio vestibulum est mattis efficitur ut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibul.',
  },
  {
    title: 'Creative solutions delivered',
    text: 'Etiam nec odio vestibulum est mattis efficitur ut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibul.',
  },
  {
    title: 'Expert team on your side',
    text: 'Etiam nec odio vestibulum est mattis efficitur ut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibul.',
  },
] as const

export function AboutSection() {
  return (
    <section id="about" className="bg-brand py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div>
            <img
              src="https://picsum.photos/seed/blitz-about/600/400"
              alt="About our team"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            {features.map((f) => (
              <div key={f.title} className="border-l-4 border-accent pl-6">
                <h3 className="mb-2 font-display text-2xl font-bold text-white">{f.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-white/70">{f.text}</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                    <User size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Michael Smith</div>
                    <div className="text-xs text-white/60">Manager</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

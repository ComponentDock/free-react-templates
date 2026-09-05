import { Leaf, Star, Sparkles, TreePine } from 'lucide-react'

const progressBars = [
  { label: 'Office plants', percentage: 80 },
  { label: 'Field manager', percentage: 70 },
  { label: 'Landscape design', percentage: 85 },
  { label: 'Garden Care', percentage: 65 },
]

const benefits = [
  {
    icon: Leaf,
    title: 'Quality Products',
    description:
      'Intiam eu sagittis est, at commodo lacini libero. Praesent dignissim sed odio vel aliquam manta lagorn.',
  },
  {
    icon: Star,
    title: 'Perfect Service',
    description:
      'Intiam eu sagittis est, at commodo lacini libero. Praesent dignissim sed odio vel aliquam manta lagorn.',
  },
  {
    icon: Sparkles,
    title: '100% Natural',
    description:
      'Intiam eu sagittis est, at commodo lacini libero. Praesent dignissim sed odio vel aliquam manta lagorn.',
  },
  {
    icon: TreePine,
    title: 'Environmentally friendly',
    description:
      'Intiam eu sagittis est, at commodo lacini libero. Praesent dignissim sed odio vel aliquam manta lagorn.',
  },
]

export function About() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Left: heading + progress bars */}
          <div className="lg:w-5/12">
            <div className="mb-4">
              <h2 className="mb-2 text-3xl font-bold text-ink">ABOUT US</h2>
              <p className="text-mist">We are leading in the plants service fields.</p>
            </div>
            <p className="mb-8 text-mist">
              Quisque orci quam, vulputate non commodo finibus, molestie ac ante. Duis in sceleri
              quesem. Nulla sit amet varius nunc. Maecenas dui, tempeu ullam corper in.
            </p>
            <div className="flex flex-col gap-5">
              {progressBars.map((bar) => (
                <div key={bar.label}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-ink">{bar.label}</span>
                    <span className="text-mist">{bar.percentage}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200">
                    <div
                      className="h-2 rounded-full bg-brand transition-all"
                      style={{ width: `${bar.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right: benefit cards */}
          <div className="lg:w-7/12">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {benefits.map((b) => (
                <div key={b.title} className="rounded-lg border border-gray-100 p-6">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                    <b.icon className="h-6 w-6 text-brand" />
                  </div>
                  <h5 className="mb-2 font-semibold text-ink">{b.title}</h5>
                  <p className="text-sm leading-relaxed text-mist">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

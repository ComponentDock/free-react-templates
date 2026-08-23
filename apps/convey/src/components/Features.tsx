import { Layers, Video, MonitorSmartphone, Sparkles, BookOpen, Maximize } from 'lucide-react'

const features = [
  { title: 'Parallax Support', blurb: 'Smooth scrolling depth on every section.', icon: Layers },
  { title: 'HTML5 Video', blurb: 'Drop in video heroes without plugins.', icon: Video },
  {
    title: 'Retina Ready Graphics',
    blurb: 'Crisp imagery on every display.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Endless Possibilities',
    blurb: 'Swap sections, colors and content freely.',
    icon: Sparkles,
  },
  { title: 'Documentation', blurb: 'Every block explained in the guide.', icon: BookOpen },
  { title: 'Boxed & Wide Layouts', blurb: 'Choose the container that fits.', icon: Maximize },
]

export function Features() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold uppercase tracking-wide text-gray-900">
          Why Aurora
        </h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="text-center">
                <Icon
                  className="mx-auto h-10 w-10 text-blush-400"
                  aria-hidden="true"
                  strokeWidth={1.5}
                />
                <h3 className="mt-4 font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{feature.blurb}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { Award, FileText, MousePointerClick, Palette, PenTool, Zap } from 'lucide-react'

const features = [
  {
    title: 'No1 in Sales!',
    blurb: 'Etiam nec odio vestibulum est mattis efficitur ut magna.',
    icon: Award,
  },
  {
    title: 'Online Marketing',
    blurb: 'Etiam nec odio vestibulum est mattis efficitur ut magna.',
    icon: MousePointerClick,
  },
  {
    title: 'Modern Design',
    blurb: 'Etiam nec odio vestibulum est mattis efficitur ut magna.',
    icon: Palette,
  },
  {
    title: 'Documented',
    blurb: 'Etiam nec odio vestibulum est mattis efficitur ut magna.',
    icon: FileText,
  },
  {
    title: 'Easy to use',
    blurb: 'Etiam nec odio vestibulum est mattis efficitur ut magna.',
    icon: Zap,
  },
  {
    title: 'Google Font',
    blurb: 'Etiam nec odio vestibulum est mattis efficitur ut magna.',
    icon: PenTool,
  },
] as const

export function Features() {
  return (
    <section id="features" aria-label="Features" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-ink dark:text-gray-100">
            All the best features
          </h2>
          <p className="mt-5 leading-relaxed text-smoke dark:text-gray-400">
            Etiam nec odio vestibulum est mattis efficitur ut magna. Pellentesque ultricies tellus a
            felis tincidunt, ac interdum arcu rutrum.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-primary-100 bg-white p-7 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100/40 text-primary-400">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink dark:text-gray-100">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-smoke dark:text-gray-400">
                {feature.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

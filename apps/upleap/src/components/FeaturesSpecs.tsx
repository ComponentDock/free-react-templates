import { Layers, ShieldCheck, Zap } from 'lucide-react'

const specs = [
  {
    icon: Layers,
    title: 'Pixel Perfect Design',
    blurb:
      'There earth face earth behold. She stars made void two given and also our own grass days.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by Default',
    blurb:
      'Greater male shall there faced earth behold she star. Sea forth fill have divide be dominion from life.',
  },
  {
    icon: Zap,
    title: 'Blazing Fast Load',
    blurb:
      'Sea forth fill have divide be dominion from life — speed you can feel on every visit.',
  },
] as const

export function FeaturesSpecs() {
  return (
    <section aria-label="Features specifications" className="bg-paper py-16 sm:py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
            Features Specifications
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
            Amazing Features That make it Awesome!
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-body dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {specs.map((spec) => (
            <div
              key={spec.title}
              className="rounded-2xl border border-gray-100 bg-white p-8 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              <spec.icon className="h-10 w-10 text-primary-600" aria-hidden="true" />
              <h3 className="mt-5 font-display text-xl font-semibold text-ink dark:text-white">
                {spec.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body dark:text-gray-400">
                {spec.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

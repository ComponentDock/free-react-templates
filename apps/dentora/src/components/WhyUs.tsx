import { CalendarClock, Cpu, HeartHandshake, ShieldCheck } from 'lucide-react'

const features = [
  {
    title: 'Advanced Technology',
    description:
      'Digital X-rays, 3D imaging, and laser dentistry for more accurate diagnoses and less invasive treatments.',
    icon: Cpu,
  },
  {
    title: 'Gentle Approach',
    description:
      'Sedation options and a compassionate team ensure a comfortable, anxiety-free experience for every patient.',
    icon: HeartHandshake,
  },
  {
    title: 'Flexible Scheduling',
    description:
      'Early morning, evening, and weekend appointments available to fit your busy schedule seamlessly.',
    icon: CalendarClock,
  },
  {
    title: 'Insurance Friendly',
    description:
      'We accept most major insurance plans and offer flexible payment options to make quality care accessible.',
    icon: ShieldCheck,
  },
] as const

export function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Modern Care You Can Trust
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            We combine cutting-edge technology with a warm, patient-first approach to make every
            visit comfortable and effective.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm dark:border-gray-800 dark:bg-gray-800"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

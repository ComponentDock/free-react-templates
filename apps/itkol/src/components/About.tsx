import { ButtonLink } from '@free-react-templates/ui'

const stats = [
  { value: '2500+', label: 'Projects Completed' },
  { value: '350+', label: 'Happy Clients' },
  { value: '20+', label: 'Years of Experience' },
] as const

export function About() {
  return (
    <section id="about" aria-label="About" className="bg-paper py-16 sm:py-24 dark:bg-gray-900">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <img
          src="https://picsum.photos/seed/itkol-about/640/520"
          alt="Itkol team at work"
          className="w-full rounded-xl shadow-lg"
          loading="lazy"
        />
        <div>
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl dark:text-white">
            ITKol - Partner for Your Business
          </h2>
          <p className="mt-5 leading-relaxed text-body dark:text-gray-400">
            We understand the complexities of modern markets and translate them into real business
            solutions for automotive, financial, insurance, software & learning institutions.
          </p>
          <ButtonLink href="#contact" className="mt-8 rounded-full px-10 py-3.5">
            Request a Quote
          </ButtonLink>
          <dl className="mt-12 grid grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl font-bold text-primary-500">{stat.value}</dd>
                <dd className="mt-1 text-sm text-body dark:text-gray-400">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

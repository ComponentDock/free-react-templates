import { Check } from 'lucide-react'
import { Reveal } from './Reveal'

const useCases = [
  {
    title: 'Healthcare',
    blurb: 'Accelerate diagnosis, documentation and patient triage with medical-grade models.',
    bullets: ['Clinical documentation', 'Medical imaging analysis', 'Patient risk scoring'],
    image: 'https://picsum.photos/seed/sentient-4/640/400',
  },
  {
    title: 'Finance',
    blurb: 'Detect fraud, automate compliance and personalize advice at scale.',
    bullets: ['Fraud detection', 'Risk assessment', 'Algorithmic trading'],
    image: 'https://picsum.photos/seed/sentient-5/640/400',
  },
  {
    title: 'E-commerce',
    blurb: 'Drive conversions with intelligent search, recommendations and pricing.',
    bullets: ['Product recommendations', 'Dynamic pricing', 'Chat support'],
    image: 'https://picsum.photos/seed/sentient-6/640/400',
  },
  {
    title: 'Manufacturing',
    blurb: 'Optimize production lines, forecast maintenance and improve quality control.',
    bullets: ['Predictive maintenance', 'Quality inspection', 'Supply chain optimization'],
    image: 'https://picsum.photos/seed/sentient-7/640/400',
  },
] as const

export function UseCases() {
  return (
    <section id="use-cases" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            AI for Every Industry
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Proven solutions for the teams already shipping intelligent products.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase, index) => (
            <Reveal
              key={useCase.title}
              delay={index * 100}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
            >
              <article>
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  loading="lazy"
                  className="aspect-video w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-gray-900 dark:text-white">
                    {useCase.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {useCase.blurb}
                  </p>
                  <ul className="mt-4 flex flex-col gap-2">
                    {useCase.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                      >
                        <Check className="h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

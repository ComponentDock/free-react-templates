import { CheckCircle } from 'lucide-react'

const highlights = [
  '10+ years of industry experience',
  'Dedicated project managers',
  '24/7 technical support',
  'Agile development methodology',
] as const

export function About() {
  return (
    <section id="about" aria-label="About" className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
        <div>
          <img
            src="https://picsum.photos/seed/netforge-about/600/450"
            alt="Netforge team working in a modern office"
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why Choose Us</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            With over a decade of experience, we deliver reliable IT solutions that drive real
            business outcomes. Our team combines technical expertise with industry knowledge to
            create solutions that scale.
          </p>
          <ul className="mt-8 space-y-4">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <CheckCircle
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary-500"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

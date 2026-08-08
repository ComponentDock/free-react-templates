import { Check, Megaphone, Palette, Smartphone, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Service {
  title: string
  blurb: string
  features: string[]
  icon: LucideIcon
}

const services: Service[] = [
  {
    title: 'Web Design',
    blurb: 'Beautiful, responsive websites that convert visitors into customers.',
    features: ['Custom Design', 'Responsive Development', 'CMS Integration', 'SEO Optimization'],
    icon: Palette,
  },
  {
    title: 'Mobile Apps',
    blurb: 'Native and cross-platform apps that users love to use.',
    features: ['iOS & Android', 'React Native', 'UI/UX Design', 'App Store Launch'],
    icon: Smartphone,
  },
  {
    title: 'Brand Identity',
    blurb: 'Memorable brands that stand out and tell your story.',
    features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy'],
    icon: Sparkles,
  },
  {
    title: 'Digital Marketing',
    blurb: 'Data-driven campaigns that grow your business.',
    features: ['Social Media', 'Content Strategy', 'PPC Advertising', 'Analytics & Reporting'],
    icon: Megaphone,
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
            What We Do
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            We offer a full range of creative services to help your business stand out and succeed
            in the digital world.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:border-primary-300 hover:shadow-xl hover:shadow-primary-500/10 dark:border-gray-800 dark:bg-gray-900"
            >
              <span className="inline-flex rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 p-3 text-white shadow-lg shadow-primary-500/25">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {service.blurb}
              </p>
              <ul className="mt-5 space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <Check className="h-4 w-4 flex-shrink-0 text-primary-500" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-6 inline-block text-sm font-semibold text-primary-500 transition-colors hover:text-primary-600"
              >
                Learn More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

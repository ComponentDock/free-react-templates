import { CheckCircle } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const features = [
  'Professional and experienced team',
  'Customized lawn care plans',
  'Eco-friendly products and methods',
  'Affordable and transparent pricing',
  'Satisfaction guaranteed on every job',
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-cream py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 id="about-heading" className="text-3xl font-bold text-ink sm:text-4xl">
            Welcome to Turfly
          </h2>
          <p className="mt-4 leading-relaxed text-gray-500">
            We are a dedicated team of lawn care professionals passionate about transforming outdoor
            spaces. With years of experience serving the community, we take pride in delivering
            exceptional results that exceed expectations.
          </p>
          <ul className="mt-6 space-y-3" role="list">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                <CheckCircle
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary-400"
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
          </ul>
          <ButtonLink
            href="#contact"
            className="mt-8 inline-flex rounded bg-primary-400 px-7 py-3 font-semibold text-white transition-colors hover:bg-primary-500"
          >
            Learn More
          </ButtonLink>
        </div>

        <div className="hidden justify-center lg:flex">
          <img
            src="https://picsum.photos/seed/turfly-about/560/400"
            alt="A lush green lawn with professional landscaping"
            className="h-auto w-full max-w-md rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

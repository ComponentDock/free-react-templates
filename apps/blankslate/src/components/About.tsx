import { Check } from 'lucide-react'

const services = [
  'Market Research',
  'Financial Services',
  'Online Marketing',
  '24/7 Support',
  'Business Strategy',
  'Data Analysis',
  'Graphic Design',
] as const

export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
              What We Can Do for You
            </h2>
            <p className="mt-4 text-mist">
              We deliver comprehensive business solutions tailored to your needs. Our team of
              experts works closely with you to understand your goals and develop strategies that
              drive growth and success.
            </p>
            <p className="mt-4 text-mist">
              From market research to graphic design, we cover every aspect of your business
              journey. Let us help you unlock your full potential.
            </p>
            <ul className="mt-8 space-y-3">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand">
                    <Check className="h-3.5 w-3.5 text-dark" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-ink">{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://picsum.photos/seed/about/600/500"
              alt="About BlankSlate"
              className="w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

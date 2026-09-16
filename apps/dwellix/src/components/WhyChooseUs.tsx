import { Search, Building2, CreditCard } from 'lucide-react'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: <Search className="h-8 w-8 text-brand" />,
    title: 'Find Your Home',
    description:
      'Browse through thousands of listings to find your perfect home. Our advanced search helps you narrow down exactly what you need.',
  },
  {
    icon: <Building2 className="h-8 w-8 text-brand" />,
    title: 'Transportation Support',
    description:
      'We provide comprehensive information about nearby transportation options so you can commute with ease.',
  },
  {
    icon: <CreditCard className="h-8 w-8 text-brand" />,
    title: 'Save Your Money',
    description:
      'Get the best deals and competitive prices. Our agents work hard to ensure you get maximum value for your investment.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-section-alt py-16">
      <div className="mx-auto max-w-6xl px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-heading">
            <span className="text-brand">Why</span> Choose Us?
          </h2>
          <p className="mt-2 text-body-text">
            We have over 8 years of experience and knowledge on how to sell more.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h5 className="mb-3 text-lg font-bold text-heading">{feature.title}</h5>
              <p className="text-sm leading-relaxed text-body-text">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

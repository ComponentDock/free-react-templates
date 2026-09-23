import { Briefcase, Users, MessageSquare, Target, ArrowRight } from 'lucide-react'

const areas = [
  {
    icon: Briefcase,
    title: 'Banking and Finance Law',
    description:
      'Expert counsel on financial regulations, banking compliance, and investment structures.',
  },
  {
    icon: Users,
    title: 'Commercial Law',
    description:
      'Comprehensive legal support for business transactions, contracts, and partnerships.',
  },
  {
    icon: MessageSquare,
    title: 'Corporate Law',
    description: 'Strategic guidance on corporate governance, mergers, and regulatory compliance.',
  },
  {
    icon: Target,
    title: 'Criminal Law',
    description: 'Aggressive defense representation in criminal proceedings and investigations.',
  },
] as const

export function PracticeAreas() {
  return (
    <section id="practice-areas" className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Our <span className="text-primary-400">Practice Areas</span>
            </h2>
            <p className="mb-4 text-gray-400">
              We specialize in a wide range of legal practice areas to serve our clients with
              comprehensive legal solutions tailored to their unique needs.
            </p>
            <p className="mb-6 text-gray-400">
              Our experienced attorneys bring decades of combined expertise to every case, ensuring
              the best possible outcomes for our clients.
            </p>
            <a
              href="#expertise"
              className="inline-flex items-center gap-2 rounded bg-primary-400 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-500"
            >
              Learn More
            </a>
          </div>

          <div className="flex flex-col gap-4">
            {areas.map((area) => (
              <a
                key={area.title}
                href="#expertise"
                className="flex items-start gap-4 rounded-lg border border-gray-700 bg-gray-800/50 p-4 transition-colors hover:border-primary-400/50 hover:bg-gray-800"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-primary-400/10">
                  <area.icon className="h-6 w-6 text-primary-400" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{area.title}</h3>
                  <p className="mt-1 text-sm text-gray-400">{area.description}</p>
                </div>
              </a>
            ))}
            <a
              href="#expertise"
              className="ml-1 inline-flex items-center gap-1 text-sm font-medium text-primary-400 transition-colors hover:text-primary-300"
            >
              More Practice Areas <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

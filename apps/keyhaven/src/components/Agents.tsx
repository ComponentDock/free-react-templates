import { ArrowRight, Mail, Phone } from 'lucide-react'

interface Agent {
  name: string
  role: string
  sales: string
  tags: string[]
  phone: string
  email: string
}

const agents: Agent[] = [
  {
    name: 'Sarah Mitchell',
    role: 'Senior Partner',
    sales: '$500M+ in sales',
    tags: ['Luxury Properties', 'Penthouses'],
    phone: 'tel:+15550100101',
    email: 'mailto:sarah@keyhaven.example',
  },
  {
    name: 'Michael Chen',
    role: 'Senior Agent',
    sales: '$250M+ in sales',
    tags: ['Brooklyn', 'Investment Properties'],
    phone: 'tel:+15550100102',
    email: 'mailto:michael@keyhaven.example',
  },
  {
    name: 'Jennifer Ross',
    role: 'Agent',
    sales: '$150M+ in sales',
    tags: ['Downtown Manhattan', 'Lofts'],
    phone: 'tel:+15550100103',
    email: 'mailto:jennifer@keyhaven.example',
  },
]

export function Agents() {
  return (
    <section id="agents" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            Meet Our Agents
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Our experienced team is dedicated to helping you find your perfect property.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <div
              key={agent.name}
              className="rounded-2xl bg-white p-6 text-center shadow-md transition-all hover:shadow-xl dark:bg-gray-800"
            >
              <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full">
                <img
                  src={`https://picsum.photos/seed/keyhaven-${agent.name.toLowerCase().replace(' ', '-')}/400/400`}
                  alt={agent.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-6 text-lg font-bold text-gray-900 dark:text-white">{agent.name}</h3>
              <p className="text-sm text-primary-600">{agent.role}</p>
              <p className="mt-2 text-sm text-gray-500">{agent.sales}</p>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {agent.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex justify-center gap-6">
                <a
                  href={agent.phone}
                  className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call
                </a>
                <a
                  href={agent.email}
                  className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Email
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#agents"
            className="flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700"
          >
            View All Agents
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

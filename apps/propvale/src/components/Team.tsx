import { Card, CardContent } from '@free-react-templates/ui'

const agents = [
  {
    id: 1,
    name: 'David Wilson',
    role: 'Senior Agent',
    photo: 'https://picsum.photos/seed/propvale-agent-1/200/200',
  },
  {
    id: 2,
    name: 'Jessica Brown',
    role: 'Property Consultant',
    photo: 'https://picsum.photos/seed/propvale-agent-2/200/200',
  },
  {
    id: 3,
    name: 'Robert Taylor',
    role: 'Investment Specialist',
    photo: 'https://picsum.photos/seed/propvale-agent-3/200/200',
  },
  {
    id: 4,
    name: 'Amanda Lee',
    role: 'Rental Manager',
    photo: 'https://picsum.photos/seed/propvale-agent-4/200/200',
  },
]

export function Team() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-semibold text-ink dark:text-gray-100">
          Our Agents
        </h2>
        <p className="mt-3 text-center text-gray-500 dark:text-gray-400">
          Meet our experienced team of professionals
        </p>

        <div className="mt-10 grid gap-6 grid-cols-2 lg:grid-cols-4">
          {agents.map((agent) => (
            <Card
              key={agent.id}
              className="overflow-hidden border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-900"
            >
              <img src={agent.photo} alt={agent.name} className="h-48 w-full object-cover" />
              <CardContent className="p-5 text-center">
                <h3 className="font-display font-semibold text-ink dark:text-gray-100">
                  {agent.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{agent.role}</p>
                <div className="mt-3 flex justify-center gap-3">
                  <a
                    href="https://facebook.com"
                    aria-label={`${agent.name} on Facebook`}
                    className="text-gray-400 transition-colors hover:text-primary-400"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com"
                    aria-label={`${agent.name} on LinkedIn`}
                    className="text-gray-400 transition-colors hover:text-primary-400"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    aria-label={`${agent.name} on Twitter`}
                    className="text-gray-400 transition-colors hover:text-primary-400"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

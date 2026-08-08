import { BarChart3, BrainCircuit, ContactRound, KanbanSquare, Send, Users } from 'lucide-react'

const features = [
  {
    icon: KanbanSquare,
    title: 'Pipeline Management',
    description:
      'Visualize your entire sales pipeline with drag-and-drop deal stages, custom workflows, and real-time revenue forecasting at a glance.',
  },
  {
    icon: ContactRound,
    title: 'Contact Management',
    description:
      'Centralize all customer data with rich contact profiles, interaction history, company hierarchies, and automated data enrichment.',
  },
  {
    icon: Send,
    title: 'Email Automation',
    description:
      'Create personalized email sequences, track opens and clicks, and automate follow-ups based on prospect behavior and engagement.',
  },
  {
    icon: BarChart3,
    title: 'Sales Analytics',
    description:
      'Make data-driven decisions with customizable dashboards, win/loss analysis, team performance metrics, and revenue forecasting.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description:
      'Assign leads, share notes, coordinate handoffs, and keep your entire sales team aligned with built-in collaboration tools.',
  },
  {
    icon: BrainCircuit,
    title: 'AI Lead Scoring',
    description:
      'Prioritize your highest-value prospects with machine learning models that analyze engagement patterns and predict deal outcomes.',
  },
] as const

export function Features() {
  return (
    <section
      id="features"
      className="border-y border-gray-200 bg-gray-50 py-20 dark:border-gray-800 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Everything You Need to Sell Smarter
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            A complete suite of sales tools designed to help your team close more deals, build
            stronger relationships, and grow revenue predictably.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-600/10 text-primary-600 dark:bg-primary-600/20 dark:text-primary-400">
                <feature.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

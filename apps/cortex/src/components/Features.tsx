import { Activity, Bot, Database, Plug, Users, Workflow } from 'lucide-react'

const features = [
  {
    title: 'Agent Builder',
    blurb:
      'Design conversational and autonomous agents with a visual builder, custom prompts, and rich tooling.',
    icon: Bot,
  },
  {
    title: 'Workflow Orchestration',
    blurb: 'Chain agents, tools, and human-in-the-loop steps into robust multi-step workflows.',
    icon: Workflow,
  },
  {
    title: 'Knowledge Base',
    blurb: 'Connect documents and data sources so your agents answer with context, not guesses.',
    icon: Database,
  },
  {
    title: 'Multi-Agent Teams',
    blurb: 'Coordinate specialized agents that collaborate to tackle complex missions end to end.',
    icon: Users,
  },
  {
    title: 'API Gateway',
    blurb: 'Expose your agents as secure, versioned APIs with built-in rate limiting and keys.',
    icon: Plug,
  },
  {
    title: 'Monitoring & Observability',
    blurb: 'Trace every run, tool call, and token — and measure cost, latency, and quality.',
    icon: Activity,
  },
]

export function Features() {
  return (
    <section id="platform" className="bg-gray-50 py-20 dark:bg-gray-900 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Everything You Need to Build AI Agents
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            A complete platform for shipping production-grade agents — from first prototype to
            global scale.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-800"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-900/40 dark:text-primary-400">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {feature.blurb}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

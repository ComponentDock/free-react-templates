import { ArrowRight, BookOpen, Sparkles } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const stats = [
  { value: '100K+', label: 'Agents Deployed' },
  { value: '5B+', label: 'Tasks Completed' },
  { value: '200+', label: 'Integrations' },
  { value: '99.99%', label: 'Uptime' },
]

export function Hero() {
  return (
    <section id="home" className="bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-900 px-4 py-1.5 text-sm text-gray-300">
            <Sparkles className="h-4 w-4 text-primary-400" aria-hidden="true" />
            Trusted by 10,000+ developers worldwide
          </p>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Build Autonomous <span className="text-primary-400">AI Agents</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            Design, deploy, and orchestrate intelligent AI agents that automate complex tasks. From
            single-purpose bots to multi-agent teams, Cortex gives you the building blocks to ship
            AI-powered automation at scale.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink
              href="#platform"
              className="w-full rounded-lg px-6 py-3 text-base sm:w-auto"
            >
              Start Building Free <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink
              href="#faq"
              variant="outline"
              className="w-full rounded-lg border-gray-700 bg-transparent px-6 py-3 text-base text-white hover:border-gray-500 hover:bg-gray-900 sm:w-auto"
            >
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              View Documentation
            </ButtonLink>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="text-3xl font-extrabold text-white">{stat.value}</dt>
                <dd className="mt-1 text-sm text-gray-400">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-2xl border border-gray-700 bg-gray-900 shadow-2xl">
          <div className="flex items-center gap-2 border-b border-gray-800 px-5 py-3.5">
            <span className="h-3 w-3 rounded-full bg-red-500/80" aria-hidden="true" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" aria-hidden="true" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" aria-hidden="true" />
            <span className="ml-3 text-sm text-gray-500">agent.py</span>
          </div>
          <pre className="overflow-x-auto p-6 text-left text-sm leading-relaxed text-gray-300">
            <code>{`from cortex import Agent, Tool

# Create a research agent
agent = Agent(
    name="research-assistant",
    model="gpt-4o",
    tools=[Tool.web_search, Tool.read_url],
    memory=True,
)

# Run the agent
result = agent.run("Summarize the latest AI research papers")`}</code>
          </pre>
        </div>
      </div>
    </section>
  )
}

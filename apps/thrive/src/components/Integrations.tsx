import {
  Boxes,
  Check,
  Cloud,
  Code2,
  Container,
  GitFork,
  GitPullRequest,
  Layers,
  MessageSquare,
} from 'lucide-react'

const integrations = [
  { name: 'GitHub', icon: GitFork },
  { name: 'GitLab', icon: GitPullRequest },
  { name: 'Slack', icon: MessageSquare },
  { name: 'AWS', icon: Cloud },
  { name: 'Vercel', icon: Code2 },
  { name: 'Docker', icon: Container },
  { name: 'Jira', icon: Layers },
  { name: 'Figma', icon: Boxes },
]

export function Integrations() {
  return (
    <section id="integrations" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
            Integrations
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Works with your favorite tools
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Connect the tools you already use and keep your workflow intact.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="flex items-center justify-between rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-sm dark:border-gray-800 dark:bg-gray-800"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200">
                  <integration.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {integration.name}
                </span>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-primary-50 px-2.5 py-1 text-xs font-semibold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
                <Check className="h-3 w-3" aria-hidden="true" />
                Connected
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

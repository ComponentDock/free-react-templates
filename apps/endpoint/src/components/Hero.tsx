import { ButtonLink } from '@free-react-templates/ui'

const stats = [
  { value: '1M+', label: 'Developers' },
  { value: '50B+', label: 'API Calls/mo' },
  { value: '99.999%', label: 'Uptime' },
  { value: '200+', label: 'SDKs' },
] as const

const terminalLines = [
  { text: '# Install the Endpoint CLI', tone: 'comment' as const },
  { text: '$ npm install -g @endpoint/cli', tone: 'command' as const },
  { text: '# Initialize your project', tone: 'comment' as const },
  { text: '$ endpoint init my-api', tone: 'command' as const },
  { text: '# Deploy to production', tone: 'comment' as const },
  { text: '$ endpoint deploy --prod', tone: 'command' as const },
  { text: '✓ Deployed to https://api.example.com', tone: 'output' as const },
  { text: '✓ Gateway configured (3 routes)', tone: 'output' as const },
  { text: '✓ SDKs generated (Node, Python, Go)', tone: 'output' as const },
  { text: '# Make your first API call', tone: 'comment' as const },
  { text: '$ curl https://api.example.com/v1/health', tone: 'command' as const },
  { text: '{ "status": "ok", "latency": "2ms" }', tone: 'output' as const },
] as const

const toneClasses: Record<(typeof terminalLines)[number]['tone'], string> = {
  comment: 'text-gray-500',
  command: 'text-gray-200',
  output: 'text-emerald-400',
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-primary-50 dark:from-gray-950 dark:via-gray-950 dark:to-primary-950/40" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:border-primary-800 dark:bg-primary-900/40 dark:text-primary-300">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-500" aria-hidden="true" />
            Trusted by 1M+ developers worldwide
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
            Ship Better APIs <span className="text-primary-600 dark:text-primary-400">Faster</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            The complete API infrastructure platform. Build, deploy, and scale production-ready APIs
            with built-in gateway, authentication, analytics, and auto-generated SDKs.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <ButtonLink href="#contact" className="rounded-full px-8 py-3 text-base">
              Get Free API Key
            </ButtonLink>
            <ButtonLink
              href="#services"
              variant="outline"
              className="rounded-full px-8 py-3 text-base"
            >
              View Documentation
            </ButtonLink>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className="order-2 text-sm text-gray-500 dark:text-gray-400">{stat.label}</dt>
                <dd className="order-1 text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          aria-label="Terminal"
          className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900 shadow-2xl"
        >
          <div className="flex items-center gap-2 border-b border-gray-800 bg-gray-800/60 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-500" aria-hidden="true" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" aria-hidden="true" />
            <span className="h-3 w-3 rounded-full bg-green-500" aria-hidden="true" />
            <span className="ml-3 text-xs font-medium text-gray-400">endpoint — zsh</span>
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-sm leading-7">
            {terminalLines.map((line) => (
              <code key={line.text} className={`block whitespace-pre ${toneClasses[line.tone]}`}>
                {line.text}
              </code>
            ))}
          </pre>
        </div>
      </div>
    </section>
  )
}

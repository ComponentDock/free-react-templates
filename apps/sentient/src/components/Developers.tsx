import { FileJson, Languages, ShieldCheck, Webhook } from 'lucide-react'
import { Reveal } from './Reveal'

const features = [
  {
    title: 'SDKs in 8 Languages',
    blurb: 'First-class SDKs for Python, TypeScript, Go, Rust, Java, Ruby, C# and Swift.',
    icon: Languages,
  },
  {
    title: 'OpenAPI Spec',
    blurb: 'A fully documented REST API with generated clients and sandbox playground.',
    icon: FileJson,
  },
  {
    title: 'Webhooks & Streaming',
    blurb: 'Stream model outputs token-by-token and wire events into your own pipelines.',
    icon: Webhook,
  },
  {
    title: '99.99% Uptime SLA',
    blurb: 'A globally distributed runtime backed by an enterprise-grade uptime guarantee.',
    icon: ShieldCheck,
  },
] as const

export function Developers() {
  return (
    <section id="developers" className="bg-gray-950 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Built by Developers, for Developers
          </h2>
          <p className="mt-3 text-gray-400">
            Ship in minutes with first-class SDKs, a complete API and streaming support.
          </p>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-gray-900/80 shadow-2xl shadow-black/40">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-3 font-mono text-xs text-gray-400">example.py</span>
              </div>
              <pre aria-label="Python model example" className="overflow-x-auto p-5 text-left">
                <code className="font-mono text-sm leading-6">
                  <span className="text-gray-500">from</span>{' '}
                  <span className="text-accent-300">sentient</span>{' '}
                  <span className="text-gray-500">import</span> load_model{'\n'}
                  <span className="text-gray-500">model</span> = load_model(
                  <span className="text-primary-300">&quot;sentient-1&quot;</span>){'\n'}
                  response = model.generate(prompt=
                  <span className="text-primary-300">&quot;Analyze this dataset&quot;</span>){'\n'}
                  <span className="text-accent-300">print</span>(response.summary)
                </code>
              </pre>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature, index) => (
              <Reveal
                key={feature.title}
                delay={(index % 2) * 100}
                className="rounded-xl border border-white/10 bg-gray-900/60 p-6"
              >
                <feature.icon className="h-6 w-6 text-accent-400" aria-hidden="true" />
                <h3 className="mt-4 font-display font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{feature.blurb}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

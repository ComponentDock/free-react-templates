import { useEffect, useState } from 'react'
import { ArrowRight, BookOpen, Play } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { Reveal } from './Reveal'

const phrases = ['in Half the Time', 'at Any Scale', 'with Full Control'] as const

function useTypewriter(phrases: readonly string[], intervalMs = 2400) {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % phrases.length)
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [intervalMs, phrases])
  return phrases[index] as string
}

const stats = [
  { value: '1M+', label: 'API Calls/Day' },
  { value: '99.99%', label: 'Uptime' },
  { value: '50ms', label: 'Avg Latency' },
  { value: '10,000+', label: 'Developers' },
] as const

export function Hero() {
  const phrase = useTypewriter(phrases)

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gray-950 pb-16 pt-32 lg:pb-24 lg:pt-40"
    >
      {/* Faint violet grid + pulsing glow orbs */}
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div
        className="animate-glow-pulse absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-primary-600/20 blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="animate-glow-pulse absolute right-1/4 top-40 h-80 w-80 rounded-full bg-accent-500/15 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="animate-glow-pulse absolute bottom-0 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-primary-500/10 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-sm font-medium text-primary-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
              </span>
              Powered by GPT-5 Architecture
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Build Intelligent Apps <span className="text-gradient">{phrase}</span>
              <span
                className="animate-caret ml-1 inline-block h-8 w-0.5 translate-y-1 bg-accent-400"
                aria-hidden="true"
              />
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
              The next-generation AI platform for building, deploying and scaling intelligent
              applications — powered by frontier models, production MLOps tooling and a developer
              experience your team will love.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink
                href="#pricing"
                className="px-6 py-3 text-base shadow-lg shadow-primary-600/30 hover:shadow-primary-600/50"
              >
                Start Building Free
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink
                href="#developers"
                variant="outline"
                className="border-gray-700 px-6 py-3 text-base text-gray-200 hover:bg-gray-800"
              >
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                View Documentation
              </ButtonLink>
              <ButtonLink
                href="#how-it-works"
                variant="outline"
                className="border-transparent px-6 py-3 text-base text-gray-300 hover:bg-gray-800/60"
              >
                <Play className="h-4 w-4" aria-hidden="true" />
                Watch Demo
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-2xl font-bold text-white">{stat.value}</dd>
                  <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Code window */}
        <Reveal delay={500}>
          <div className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-xl border border-white/10 bg-gray-900/80 shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-3 font-mono text-xs text-gray-400">api_example.py</span>
            </div>
            <pre aria-label="Python code example" className="overflow-x-auto p-5 text-left">
              <code className="font-mono text-sm leading-6">
                <span className="text-gray-500">from</span>{' '}
                <span className="text-accent-300">sentient</span>{' '}
                <span className="text-gray-500">import</span> Client{'\n'}
                <span className="text-gray-500">client</span> = Client(api_key=
                <span className="text-primary-300">&quot;sk-...&quot;</span>){'\n\n'}
                response = client.generate({'\n'}
                {'  '}prompt=
                <span className="text-primary-300">&quot;Build a recommendation engine&quot;</span>,
                {'\n'}
                {'  '}model=<span className="text-primary-300">&quot;sentient-1&quot;</span>,{'\n'})
                {'\n'}
                <span className="text-accent-300">print</span>(response.text)
              </code>
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

import { Code, Cpu, Eye, MessageSquareText, Mic, TrendingUp } from 'lucide-react'
import { Reveal } from './Reveal'

const capabilities = [
  {
    title: 'Natural Language Processing',
    blurb:
      'Understand, generate and reason over text at scale with state-of-the-art language models.',
    icon: MessageSquareText,
  },
  {
    title: 'Computer Vision',
    blurb: 'Classify images, detect objects and extract insight from visual data in real time.',
    icon: Eye,
  },
  {
    title: 'Predictive Analytics',
    blurb: 'Forecast demand, churn and revenue with models tuned to your historical data.',
    icon: TrendingUp,
  },
  {
    title: 'Voice AI',
    blurb: 'Transcribe, synthesize and understand speech across dozens of languages.',
    icon: Mic,
  },
  {
    title: 'Code Generation',
    blurb: 'Generate, review and refactor code with models trained across every major language.',
    icon: Code,
  },
  {
    title: 'Custom Models',
    blurb: 'Train bespoke models on your own data with fine-tuning pipelines in a few clicks.',
    icon: Cpu,
  },
] as const

export function Capabilities() {
  return (
    <section id="capabilities" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            AI That Actually Works
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            One platform for every kind of intelligence — from language to vision to custom models.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <Reveal
              key={capability.title}
              delay={(index % 3) * 100}
              className="rounded-2xl border border-gray-200 bg-white p-8 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600/10 text-primary-600 dark:bg-primary-500/10 dark:text-primary-400">
                <capability.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-gray-900 dark:text-white">
                {capability.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {capability.blurb}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

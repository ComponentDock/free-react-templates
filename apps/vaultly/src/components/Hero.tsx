import { ArrowRight, Bot, Send } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const stats = [
  { value: '$2.5B+', label: 'Assets Advised' },
  { value: '150K+', label: 'Happy Users' },
  { value: '4.9/5', label: 'App Rating' },
] as const

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Decorative background blob (matches the demo's grid + gradient glow) */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-primary-500/20 to-transparent blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <p className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-sm font-semibold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary-500" />
              </span>
              AI-Powered Financial Planning
            </p>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
              Your Personal{' '}
              <span className="block bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                AI Financial Advisor
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 lg:text-xl dark:text-gray-400">
              Get expert-level financial guidance 24/7. Finley analyzes your finances, creates
              personalized plans, and helps you reach your goals—all powered by advanced AI.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <ButtonLink
                href="#pricing"
                className="h-auto rounded-lg bg-primary-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary-600/25 transition-colors hover:bg-primary-700"
              >
                Start Free Trial
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink
                href="#how-it-works"
                variant="outline"
                className="h-auto rounded-lg border-gray-300 px-8 py-4 text-lg font-semibold hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
              >
                See How It Works
              </ButtonLink>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-gray-200 pt-8 dark:border-gray-800">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="font-mono text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — AI chat preview */}
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary-500/20 to-secondary-500/20 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900">
              {/* Chat header */}
              <div className="flex items-center gap-3 border-b border-gray-200 bg-gray-50 px-6 py-4 dark:border-gray-800 dark:bg-gray-800/50">
                <div className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-secondary-500">
                    <Bot className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  <span
                    className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-white bg-secondary-500 dark:border-gray-900"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="font-display font-semibold text-gray-900 dark:text-white">Finley</p>
                  <p className="text-xs text-secondary-700 dark:text-secondary-300">
                    Online • Ready to help
                  </p>
                </div>
              </div>

              {/* Chat messages */}
              <div className="space-y-4 p-6">
                <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-primary-50 px-4 py-3 dark:bg-primary-900/40">
                  <p className="whitespace-pre-line text-sm text-gray-900 dark:text-gray-100">
                    I want to save $50,000 for a house down payment in 3 years. Is that realistic?
                  </p>
                </div>
                <div className="mr-auto max-w-[85%] rounded-2xl rounded-bl-sm bg-gray-100 px-4 py-3 dark:bg-gray-800">
                  <p className="whitespace-pre-line text-sm text-gray-900 dark:text-gray-100">
                    Based on your current income of $85,000 and expenses, you&apos;d need to save
                    about $1,389/month. That&apos;s ambitious but achievable! Here&apos;s my
                    recommendation:
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['How much should I save for retirement?', 'Rebalance my portfolio'].map(
                    (chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:border-primary-800 dark:bg-primary-900/40 dark:text-primary-300"
                      >
                        {chip}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Input row */}
              <div className="border-t border-gray-200 p-4 dark:border-gray-800">
                <div className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2.5 focus-within:ring-2 focus-within:ring-primary-500 dark:border-gray-700 dark:bg-gray-900">
                  <input
                    type="text"
                    placeholder="Message Finley anything about your finances..."
                    aria-label="Message Finley"
                    className="w-full bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none dark:text-white"
                  />
                  <button
                    type="button"
                    aria-label="Send message"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-600 text-white transition-colors hover:bg-primary-700"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

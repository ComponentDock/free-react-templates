import { cn } from '@free-react-templates/ui'

interface NewsletterProps {
  className?: string
}

export function Newsletter({ className }: NewsletterProps) {
  return (
    <section aria-label="Newsletter" className={cn('bg-paper py-24', className)}>
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-4 text-3xl font-semibold text-ink md:text-4xl">
          Subscribe for our <span className="font-bold text-brand">Newsletter</span>
        </h2>
        <p className="mb-10 text-ink-light">
          We won&apos;t send any kind of spam. Unsubscribe at any time.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <input
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            className="w-full flex-1 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm text-ink outline-none transition-colors focus:border-brand"
          />
          <button
            type="submit"
            className="w-full rounded-full bg-brand px-8 py-3 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-brand-dark sm:w-auto"
            style={{ borderRadius: '20px' }}
          >
            Get Started
          </button>
        </form>
      </div>
    </section>
  )
}

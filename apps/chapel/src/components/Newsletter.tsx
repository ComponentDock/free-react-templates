import { newsletter } from '../data'

export function Newsletter() {
  return (
    <section className="bg-brand py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
        <h4 className="text-lg font-bold text-white">{newsletter.heading}</h4>
        <form className="flex w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder={newsletter.placeholder}
            className="flex-1 rounded-l-[2px] border-0 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white"
            aria-label={newsletter.placeholder}
          />
          <button
            type="submit"
            className="rounded-r-[2px] bg-ink px-6 py-3 text-xs font-bold uppercase tracking-[1px] text-white transition-colors hover:bg-ink/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {newsletter.ctaLabel}
          </button>
        </form>
      </div>
    </section>
  )
}

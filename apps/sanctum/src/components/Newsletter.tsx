import { newsletter } from '../data'

export function Newsletter() {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed py-24"
      style={{
        backgroundImage: "url('https://picsum.photos/seed/sanctum-parallax/1920/800')",
      }}
    >
      <div className="absolute inset-0 bg-nav/80" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white">{newsletter.heading}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">{newsletter.description}</p>
        <form className="mx-auto mt-8 flex max-w-md" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder={newsletter.placeholder}
            className="flex-1 rounded-l-[2px] border-0 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white"
            aria-label={newsletter.placeholder}
          />
          <button
            type="submit"
            className="rounded-r-[2px] bg-brand px-6 py-3 text-xs font-bold uppercase tracking-[1px] text-white transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {newsletter.ctaLabel}
          </button>
        </form>
      </div>
    </section>
  )
}

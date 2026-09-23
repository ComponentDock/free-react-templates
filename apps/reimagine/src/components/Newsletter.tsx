import { ArrowRight } from 'lucide-react'

export function Newsletter() {
  return (
    <section id="contact" className="py-20 bg-[--color-bg-alt]">
      <div className="mx-auto max-w-[69%] px-4 text-center">
        <p className="uppercase text-xs tracking-[0.2em] mb-2 font-light text-[--color-body]">
          Re-imagining the way
        </p>
        <h2 className="text-3xl font-semibold text-[--color-ink] mb-8">
          Subscribe for our Newsletter
        </h2>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-stretch justify-center gap-0 max-w-lg mx-auto"
        >
          <input
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            className="flex-1 px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[--color-brand] focus:border-transparent"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white text-sm font-medium hover:opacity-90 transition-opacity"
            style={{ background: 'linear-gradient(0deg, #e66587 0%, #f09458 100%)' }}
          >
            Get Started <ArrowRight size={14} />
          </button>
        </form>
      </div>
    </section>
  )
}

import { Mail } from 'lucide-react'
import { subscribeHeading, subscribeText } from '../data'

export function Subscribe() {
  return (
    <section className="bg-deep py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 text-3xl font-semibold text-white md:text-4xl">{subscribeHeading}</h2>
        <p className="mb-8 text-white/60">{subscribeText}</p>
        <form
          className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="relative flex-1">
            <Mail
              aria-hidden="true"
              className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
            />
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Email address"
              className="h-12 w-full rounded-full bg-white pl-11 pr-4 text-[14px] text-body placeholder:text-muted focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="h-12 rounded-full bg-brand px-8 text-[14px] font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

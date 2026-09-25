import { ArrowRight } from 'lucide-react'

export function Subscription() {
  return (
    <section className="bg-light-bg py-16">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div>
            <h3 className="mb-2 text-xl font-medium text-heading">Subscribe for our Newsletter</h3>
            <span className="text-sm font-light text-body">
              Can you imagine what we will be downloading in another decade?
            </span>
          </div>
          <form className="flex w-full max-w-[480px] gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 rounded border border-border-subtle bg-white px-4 py-2 text-sm text-heading placeholder:text-body"
              aria-label="Email address for newsletter"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-[20px] border border-white bg-brand-blue px-5 py-2 text-sm font-medium text-white transition hover:bg-brand-blue/90"
            >
              Get Started
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

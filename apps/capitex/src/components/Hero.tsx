import { ArrowRight } from 'lucide-react'

const loanAmounts = ['$500', '$1,000', '$2,000', '$5,000', '$10,000']
const durations = ['1 Month', '3 Months', '6 Months', '12 Months']

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center bg-cover bg-center pt-20"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/capitex-hero/1920/1080)',
      }}
    >
      <div className="absolute inset-0 bg-navy/70" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-20 lg:grid-cols-2 lg:px-8">
        {/* Left: Headline */}
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Financial Solutions for Your Business Growth
          </h1>
          <p className="mb-8 max-w-lg text-lg text-white/80">
            We provide fast and flexible loan options to help your business thrive. Get funded in as
            little as 24 hours.
          </p>
          <a
            href="#how-it-works"
            className="inline-flex w-fit items-center gap-2 rounded bg-brand px-6 py-3 text-sm font-semibold text-navy uppercase transition hover:bg-brand-hover"
          >
            How It Works
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Right: Loan form */}
        <div className="rounded bg-white p-8 shadow-xl">
          <h2 className="mb-6 text-xl font-bold text-navy">How much you want?</h2>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
            <div>
              <label htmlFor="amount" className="mb-1 block text-sm font-medium text-navy">
                Amount
              </label>
              <select
                id="amount"
                className="w-full rounded border border-border px-4 py-3 text-sm text-body focus:border-brand focus:outline-none"
              >
                {loanAmounts.map((amt) => (
                  <option key={amt}>{amt}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="duration" className="mb-1 block text-sm font-medium text-navy">
                Duration
              </label>
              <select
                id="duration"
                className="w-full rounded border border-border px-4 py-3 text-sm text-body focus:border-brand focus:outline-none"
              >
                {durations.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </div>

            <div className="rounded bg-blue/10 px-4 py-2 text-center text-sm font-semibold text-blue">
              Price: $0
            </div>

            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-navy">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded border border-border px-4 py-3 text-sm text-body placeholder:text-placeholder focus:border-brand focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium text-navy">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+1 (234) 567-890"
                className="w-full rounded border border-border px-4 py-3 text-sm text-body placeholder:text-placeholder focus:border-brand focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded bg-brand py-4 text-sm font-bold text-navy uppercase transition hover:bg-brand-hover"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

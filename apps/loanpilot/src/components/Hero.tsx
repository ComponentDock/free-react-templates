import { ArrowRight, HelpCircle } from 'lucide-react'

interface HeroProps {
  onSubmit?: (data: {
    amount: string
    days: string
    repayment: string
    name: string
    phone: string
  }) => void
}

export function Hero({ onSubmit }: HeroProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    onSubmit?.({
      amount: (form.get('amount') as string) || '',
      days: (form.get('days') as string) || '',
      repayment: (form.get('repayment') as string) || '',
      name: (form.get('name') as string) || '',
      phone: (form.get('phone') as string) || '',
    })
  }

  return (
    <section
      id="home"
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/loan-hero/1920/900)',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/80" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-20 lg:flex-row lg:items-start lg:py-28">
        {/* Left: content */}
        <div className="flex-1 text-center text-white lg:text-left">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Find The Best Monthly Payment
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            We provide the best loan services with low interest rates and flexible repayment
            options. Get started today and experience financial freedom.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-[2px] bg-primary px-8 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-primary-hover"
            >
              Get Started <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-[2px] border-2 border-white bg-transparent px-8 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-white/10"
            >
              How It Works <HelpCircle className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Right: calculator form */}
        <div className="w-full max-w-md rounded bg-white p-8 shadow-xl">
          <h2 className="mb-6 text-xl font-bold text-navy">Loan Calculator</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="amount" className="mb-1 block text-sm font-semibold text-body-text">
                Amount
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                placeholder="10000"
                className="w-full rounded-[2px] border border-gray-300 bg-input-bg px-4 py-3 text-sm text-body-text outline-none focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="days" className="mb-1 block text-sm font-semibold text-body-text">
                Days
              </label>
              <input
                type="number"
                id="days"
                name="days"
                placeholder="30"
                className="w-full rounded-[2px] border border-gray-300 bg-input-bg px-4 py-3 text-sm text-body-text outline-none focus:border-primary"
              />
            </div>
            <div>
              <label
                htmlFor="repayment"
                className="mb-1 block text-sm font-semibold text-body-text"
              >
                Repayment
              </label>
              <input
                type="text"
                id="repayment"
                name="repayment"
                placeholder="Monthly"
                className="w-full rounded-[2px] border border-gray-300 bg-input-bg px-4 py-3 text-sm text-body-text outline-none focus:border-primary"
              />
            </div>
            <div>
              <label
                htmlFor="hero-name"
                className="mb-1 block text-sm font-semibold text-body-text"
              >
                Name
              </label>
              <input
                type="text"
                id="hero-name"
                name="name"
                placeholder="Your name"
                className="w-full rounded-[2px] border border-gray-300 bg-input-bg px-4 py-3 text-sm text-body-text outline-none focus:border-primary"
              />
            </div>
            <div>
              <label
                htmlFor="hero-phone"
                className="mb-1 block text-sm font-semibold text-body-text"
              >
                Phone
              </label>
              <input
                type="tel"
                id="hero-phone"
                name="phone"
                placeholder="+1 234 567 890"
                className="w-full rounded-[2px] border border-gray-300 bg-input-bg px-4 py-3 text-sm text-body-text outline-none focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-[2px] bg-primary py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-primary-hover"
            >
              Apply Now
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

import { useState, type FormEvent } from 'react'
const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

function LaptopMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[685px]">
      <div className="rounded-t-xl border-8 border-ink bg-white p-4 shadow-2xl">
        <div className="flex items-center justify-between rounded bg-mist px-4 py-2">
          <span className="font-display text-sm font-semibold text-brand">Coinly</span>
          <span className="text-xs text-muted">BTC / USD</span>
        </div>
        <svg
          viewBox="0 0 640 320"
          className="h-auto w-full"
          role="img"
          aria-label="Trading dashboard chart"
        >
          <rect width="640" height="320" fill="#f3f7f9" />
          <g stroke="#20509e" strokeWidth="2" fill="none">
            <path d="M0 260 L90 240 L150 250 L220 200 L300 220 L360 150 L430 170 L510 100 L590 120 L640 80" />
          </g>
          <g fill="#16d0c5">
            <circle cx="360" cy="150" r="6" />
            <circle cx="510" cy="100" r="6" />
            <circle cx="640" cy="80" r="6" />
          </g>
          <g fill="#20509e">
            <rect x="40" y="40" width="120" height="16" rx="8" />
            <rect x="40" y="70" width="90" height="16" rx="8" opacity="0.5" />
            <rect x="180" y="40" width="100" height="16" rx="8" opacity="0.5" />
            <rect x="300" y="40" width="80" height="16" rx="8" opacity="0.5" />
          </g>
        </svg>
      </div>
      <div className="mx-auto h-4 w-[112%] -translate-x-[5%] rounded-b-2xl bg-ink/80" />
    </div>
  )
}

export function Hero() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError('A valid email address is required.')
      return
    }
    setError('')
  }

  return (
    <section id="solution" className="relative min-h-[900px] overflow-hidden bg-mist pt-64">
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 h-[640px] w-[900px] rotate-[-8deg] rounded-[45%] bg-gradient-to-br from-grad-start to-grad-end opacity-90"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35)_1px,transparent_1px)] bg-[length:22px_22px]"
      />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="pt-10 lg:pt-0">
          <h1 className="font-display text-5xl font-medium leading-tight text-brand md:text-[70px]">
            Invest in <span className="text-accent">Bitcoin</span>
            <br />
            Bitcoin Trading
          </h1>
          <p className="mt-4 text-[22px] text-muted">
            Use modern progressive technologies of Bitcoin to earn money
          </p>
          <form onSubmit={handleSubmit} noValidate className="mt-8 flex flex-wrap gap-4">
            <label htmlFor="hero-email" className="sr-only">
              Email address
            </label>
            <input
              id="hero-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              aria-invalid={Boolean(error)}
              className="h-14 w-full max-w-xs rounded-full border-0 px-7 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="h-14 rounded-full bg-gradient-to-r from-grad-start to-grad-end px-9 font-display text-base font-medium text-white transition-opacity hover:opacity-90"
            >
              Get Started
            </button>
          </form>
          {error ? (
            <p role="alert" className="mt-3 text-sm text-red-500">
              {error}
            </p>
          ) : null}
        </div>
        <div className="lg:pl-10">
          <LaptopMockup />
        </div>
      </div>
    </section>
  )
}

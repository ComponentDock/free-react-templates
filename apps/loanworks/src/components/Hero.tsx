import { useState } from 'react'

const amounts = ['$10', '$40', '$50', '$100', '$200']
const months = ['3 Month', '6 Month', '9 Month', '12 Month']

export function Hero() {
  const [amount, setAmount] = useState(amounts[0])
  const [month, setMonth] = useState(months[0])

  return (
    <section
      id="hero"
      className="relative bg-cover bg-center py-20 lg:py-32"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/loanworks-hero/1600/800)' }}
    >
      <div className="absolute inset-0 bg-navy-dark/50" />
      <div className="container relative z-10 mx-auto flex flex-col items-center gap-10 px-4 lg:flex-row lg:px-8">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="mb-6 text-3xl font-bold leading-tight text-white md:text-5xl">
            Get Loan for your Business growth or startup
          </h1>
          <a
            href="#how-it-works"
            className="inline-block rounded bg-brand px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-dark"
          >
            How it Works
          </a>
        </div>

        <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-lg font-semibold text-navy">How much do you want?</h2>
          <p className="mb-4 text-sm text-body-text">
            We provide online instant cash loans with quick approval that suit your term
          </p>
          <label className="mb-1 block text-xs text-body-text" htmlFor="amount">
            Amount
          </label>
          <select
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mb-3 w-full rounded border border-gray-200 px-3 py-2 text-sm"
          >
            {amounts.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
          <label className="mb-1 block text-xs text-body-text" htmlFor="month">
            Month
          </label>
          <select
            id="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="mb-4 w-full rounded border border-gray-200 px-3 py-2 text-sm"
          >
            {months.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
          <div className="mb-4 text-center text-sm text-body-text">
            You have to pay: <span className="font-semibold text-navy">$0</span>
          </div>
          <button className="w-full rounded bg-brand py-2 text-sm font-medium text-white transition hover:bg-brand-dark">
            Continue
          </button>
        </div>
      </div>
    </section>
  )
}

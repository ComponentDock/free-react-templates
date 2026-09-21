import { Button } from '@free-react-templates/ui'
import { useState } from 'react'

const amounts = ['$10,000', '$25,000', '$50,000', '$100,000']
const durations = ['6 Months', '12 Months', '24 Months', '36 Months']

export function ApplicationForm() {
  const [amount, setAmount] = useState('')
  const [duration, setDuration] = useState('')
  const [returnAmount, setReturnAmount] = useState('')

  return (
    <section className="relative py-20">
      {/* Dark background */}
      <div className="absolute inset-0 bg-navy">
        <img
          src="https://picsum.photos/seed/loanforge-form/1920/600"
          alt=""
          className="h-full w-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-heading text-sm font-bold uppercase tracking-wider text-brand">
            Apply in Three Easy Steps
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Easy Application Process For Any Types of Loan
          </h2>
        </div>

        {/* Form */}
        <form
          className="mx-auto flex flex-col gap-4 rounded-lg bg-white p-6 shadow-xl sm:flex-row sm:items-end md:max-w-4xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex-1">
            <label htmlFor="amount" className="mb-1 block text-sm font-medium text-navy">
              Select Amount
            </label>
            <select
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full rounded border border-gray-300 px-4 py-3 text-sm text-text focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
            >
              <option value="">Choose amount</option>
              {amounts.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <label htmlFor="duration" className="mb-1 block text-sm font-medium text-navy">
              Duration Month
            </label>
            <select
              id="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full rounded border border-gray-300 px-4 py-3 text-sm text-text focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
            >
              <option value="">Choose duration</option>
              {durations.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <label htmlFor="return" className="mb-1 block text-sm font-medium text-navy">
              Return Amount
            </label>
            <input
              id="return"
              type="text"
              value={returnAmount}
              onChange={(e) => setReturnAmount(e.target.value)}
              placeholder="Estimated return"
              className="w-full rounded border border-gray-300 px-4 py-3 text-sm text-text placeholder:text-text-dim focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
            />
          </div>

          <Button
            type="submit"
            className="rounded bg-brand px-8 py-3 text-white hover:bg-brand-dark"
          >
            Apply for Loan
          </Button>
        </form>
      </div>
    </section>
  )
}

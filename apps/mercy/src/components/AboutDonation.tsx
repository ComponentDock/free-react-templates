import { useState, type FormEvent } from 'react'
import { Users, Heart, Smile } from 'lucide-react'

const stats = [
  { icon: Users, value: '50', label: 'Volunteers' },
  { icon: Heart, value: '24,400', label: 'Trusted Funds' },
  { icon: Smile, value: '300', label: 'Happy Families' },
  { icon: Users, value: '25', label: 'Awards Won' },
] as const

const causes = ['Health', 'Education', 'Environment', 'Poverty'] as const

export function AboutDonation() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [cause, setCause] = useState('')
  const [amount, setAmount] = useState('')
  const [payment, setPayment] = useState('bank')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="about" className="bg-white py-16 transition-colors dark:bg-gray-950 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Donation Form */}
          <div id="donate">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
              Donate Now
            </span>
            <h2 className="mt-3 text-2xl font-bold text-ink dark:text-white sm:text-3xl">
              Make a Donation
            </h2>
            {submitted ? (
              <div className="mt-8 rounded-lg border border-brand/30 bg-brand/5 p-6 text-center">
                <p className="text-lg font-semibold text-brand">Thank you for your donation!</p>
                <p className="mt-2 text-sm text-mist">We truly appreciate your generosity.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="donor-name"
                    className="block text-sm font-medium text-ink dark:text-gray-300"
                  >
                    Full Name
                  </label>
                  <input
                    id="donor-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="mt-1 w-full rounded border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-ink placeholder:text-mist focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="donor-email"
                    className="block text-sm font-medium text-ink dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    id="donor-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="mt-1 w-full rounded border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-ink placeholder:text-mist focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="donor-cause"
                    className="block text-sm font-medium text-ink dark:text-gray-300"
                  >
                    Select Causes
                  </label>
                  <select
                    id="donor-cause"
                    value={cause}
                    onChange={(e) => setCause(e.target.value)}
                    className="mt-1 w-full rounded border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-ink focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  >
                    <option value="">Choose a cause</option>
                    {causes.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="donor-amount"
                    className="block text-sm font-medium text-ink dark:text-gray-300"
                  >
                    Amount
                  </label>
                  <input
                    id="donor-amount"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="mt-1 w-full rounded border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-ink placeholder:text-mist focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <span className="block text-sm font-medium text-ink dark:text-gray-300">
                    Payment Method
                  </span>
                  <div className="mt-2 flex gap-4">
                    <label className="flex items-center gap-2 text-sm text-mist dark:text-gray-400">
                      <input
                        type="radio"
                        name="payment"
                        value="bank"
                        checked={payment === 'bank'}
                        onChange={(e) => setPayment(e.target.value)}
                        className="accent-brand"
                      />
                      Bank Transfer
                    </label>
                    <label className="flex items-center gap-2 text-sm text-mist dark:text-gray-400">
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={payment === 'card'}
                        onChange={(e) => setPayment(e.target.value)}
                        className="accent-brand"
                      />
                      Credit Card
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full rounded bg-brand py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
                >
                  Donate Now
                </button>
              </form>
            )}
          </div>

          {/* Welcome Text + Stats */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
              Welcome to Mercy
            </span>
            <h2 className="mt-3 text-2xl font-bold text-ink dark:text-white sm:text-3xl">
              Help the People Who Need It Most
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-mist">
              Mercy is dedicated to bringing hope and essential resources to communities in need. We
              believe every individual deserves access to clean water, education, healthcare, and a
              safe place to call home.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-mist">
              Through the generous support of donors and volunteers worldwide, we have been able to
              transform lives and build stronger, more resilient communities. Your contribution
              makes a real difference.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="mx-auto h-8 w-8 text-brand" aria-hidden="true" />
                  <p className="mt-2 text-2xl font-bold text-ink dark:text-white">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-mist">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

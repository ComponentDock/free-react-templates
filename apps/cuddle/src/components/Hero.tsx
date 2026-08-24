import { useState, type FormEvent, type ChangeEvent } from 'react'
import { Heart, Play } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const causes = [
  'Food',
  'Medical Health',
  'Education',
  'Environment',
  'Shelter/Home',
  'Clothes',
  'Other',
] as const
const payments = ['Paypal', 'Credit Card', 'Payoneer'] as const
type Payment = (typeof payments)[number]

export function Hero() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [cause, setCause] = useState(causes[0])
  const [amount, setAmount] = useState('')
  const [payment, setPayment] = useState<Payment>(payments[0])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/cuddle-hero/1920/1080"
          alt="Child portrait - charity hero background"
          className="h-full w-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Main hero content */}
          <div className="lg:col-span-3 text-white">
            <span className="font-display text-lg font-semibold uppercase tracking-[0.25em] text-brand">
              Raising Hope
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              To the Homeless & Hopeless People
            </h1>

            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink
                href="#causes"
                size="md"
                className="rounded-full bg-brand px-8 uppercase tracking-[0.2em] text-white hover:bg-brand-hover"
              >
                Join Us
              </ButtonLink>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium uppercase tracking-wide text-white/90 transition-colors hover:text-brand"
              >
                <Play className="h-5 w-5" aria-hidden="true" />
                Watch the Video
              </a>
            </div>
          </div>

          {/* Donation Widget */}
          <div className="lg:col-span-1">
            {/* Stats box */}
            <div className="rounded-2xl bg-teal p-6 text-center text-white">
              <Heart className="mx-auto h-12 w-12 text-brand" aria-hidden="true" />
              <h2 className="mt-4 font-display text-4xl font-bold">$1,850,000</h2>
              <p className="mt-2 text-sm uppercase tracking-wide text-white/80">
                FUNDS RAISED BY 1200 PEOPLE
              </p>
            </div>

            {/* Donation form */}
            <div className="mt-6 rounded-2xl bg-ink p-6 shadow-2xl">
              <h3 className="font-display text-xl font-bold uppercase tracking-wide text-brand text-center">
                DONATE NOW
              </h3>
              <blockquote className="mt-4 text-center text-sm italic text-white/80">
                &ldquo;Giving is the greatest act of grace&rdquo;
              </blockquote>

              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                <div>
                  <label htmlFor="donor-name" className="block text-sm font-medium text-white/70">
                    Your Full Name
                  </label>
                  <input
                    id="donor-name"
                    type="text"
                    value={name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    placeholder="Your Full Name"
                    className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>

                <div>
                  <label htmlFor="donor-email" className="block text-sm font-medium text-white/70">
                    Email Address
                  </label>
                  <input
                    id="donor-email"
                    type="email"
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>

                <div>
                  <label htmlFor="donor-cause" className="block text-sm font-medium text-white/70">
                    Select Causes
                  </label>
                  <select
                    id="donor-cause"
                    value={cause}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                      setCause(e.target.value as (typeof causes)[0])
                    }
                    className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  >
                    {causes.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="donor-amount" className="block text-sm font-medium text-white/70">
                    Amount to Give
                  </label>
                  <input
                    id="donor-amount"
                    type="number"
                    value={amount}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)}
                    placeholder="Amount"
                    className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70">Payment Method</label>
                  <div className="mt-2 flex flex-wrap gap-4">
                    {payments.map((p) => (
                      <label
                        key={p}
                        className="flex items-center gap-2 text-sm text-white/90 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="payment"
                          value={p}
                          checked={payment === p}
                          onChange={() => setPayment(p)}
                          className="h-4 w-4 accent-brand border-white/30 text-brand focus:ring-brand"
                        />
                        {p}
                      </label>
                    ))}
                  </div>
                </div>

                <ButtonLink
                  type="submit"
                  className="w-full rounded-full bg-brand py-3 uppercase tracking-[0.2em] text-white hover:bg-brand-hover"
                >
                  Donate Now
                </ButtonLink>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

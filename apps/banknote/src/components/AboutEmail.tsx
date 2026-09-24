import { Check } from 'lucide-react'

const benefits = [
  'Transparent fee structure with no hidden charges',
  '24/7 online banking access and support',
  'FDIC insured deposits up to $250,000',
]

export function AboutEmail() {
  return (
    <section className="bg-mist py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Image */}
          <div className="flex justify-center">
            <div className="h-72 w-72 overflow-hidden rounded-full border-4 border-brand/20">
              <img
                src="https://picsum.photos/seed/banknote-about1/400/400"
                alt="About Banknote"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="mb-6 text-3xl font-bold">Amortization Computation</h2>
            <p className="mb-6 text-gray-600">
              We help you understand and manage your loan amortization schedules with clarity and
              precision. Our tools and experts guide you through every step.
            </p>
            <ul className="mb-8 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-gray-700">
                  <Check className="h-5 w-5 flex-shrink-0 text-secondary" />
                  {b}
                </li>
              ))}
            </ul>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-gray-300 px-5 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
              <button
                type="submit"
                className="rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-dark"
              >
                Submit Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

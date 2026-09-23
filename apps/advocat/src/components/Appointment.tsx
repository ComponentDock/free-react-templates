import { Landmark } from 'lucide-react'
import { services } from '../data'

/** Appointment section: left has services/performance, right has contact form. */
export function Appointment() {
  return (
    <section
      id="contact"
      className="relative bg-cover bg-fixed bg-center py-24"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/advocat-appointment/1920/900)' }}
    >
      <div className="absolute inset-0 bg-ink/80" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left — services */}
          <div className="flex flex-col justify-center text-white">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">
              Our Performance
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
              We Have Great Results
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-white/70">
              A dedicated team providing comprehensive legal solutions. We stand firm for justice
              with unwavering commitment and legal expertise.
            </p>

            <div className="mt-8 space-y-6">
              {services.map((s) => (
                <div key={s.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-brand/20">
                    <Landmark className="h-5 w-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white">{s.title}</h3>
                    <p className="mt-1 text-sm text-white/60">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">
              Drop A Message
            </span>
            <h2 className="mb-6 font-heading text-2xl font-bold text-ink">Free Case Evaluation</h2>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-ink">
                    Your Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Full Name"
                    className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm text-ink focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-ink">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm text-ink focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-1 block text-sm font-medium text-ink">
                  Select Subject
                </label>
                <select
                  id="subject"
                  className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm text-ink focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                >
                  <option value="">Practice Areas</option>
                  <option value="business">Business Law</option>
                  <option value="criminal">Criminal Law</option>
                  <option value="family">Family Law</option>
                  <option value="judicial">Judicial Law</option>
                  <option value="personal">Personal Injury</option>
                  <option value="realestate">Real Estate Law</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-ink">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Message"
                  className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm text-ink focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                />
              </div>

              <button
                type="submit"
                className="rounded bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand/90"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

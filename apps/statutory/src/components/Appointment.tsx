import { Award, Clock, Users } from 'lucide-react'

const highlights = [
  { icon: Award, label: 'Award Winning' },
  { icon: Clock, label: '60 Years of Experience' },
  { icon: Users, label: 'Best Attorneys Team' },
]

export function Appointment() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 md:grid-cols-2">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">
            Make an Appointment
          </span>
          <h2 className="mt-2 text-3xl font-bold text-dark-1">We Have Great Results</h2>
          <p className="mt-4 text-gray-600">
            Schedule a consultation with our experienced legal team. We are committed to providing
            personalized attention to every case.
          </p>
          <div className="mt-8 space-y-4">
            {highlights.map((h) => (
              <div key={h.label} className="flex items-center gap-3">
                <h.icon className="h-6 w-6 text-gold" />
                <span className="font-medium text-dark-1">{h.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded bg-paper p-8">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Your Name"
                className="rounded border border-gray-300 bg-white px-4 py-3 text-sm focus:border-brand focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="rounded border border-gray-300 bg-white px-4 py-3 text-sm focus:border-brand focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-sm focus:border-brand focus:outline-none"
            />
            <textarea
              rows={5}
              placeholder="Message"
              className="w-full resize-none rounded border border-gray-300 bg-white px-4 py-3 text-sm focus:border-brand focus:outline-none"
            />
            <button
              type="submit"
              className="rounded bg-gold px-8 py-3 font-semibold text-white transition hover:bg-gold/90"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

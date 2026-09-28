import { type FormEvent } from 'react'
import { User, Phone, Mail } from 'lucide-react'

export function About() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <section id="about" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Reservation Form */}
          <div className="lg:w-1/3">
            <h3
              className="mb-6 text-2xl font-bold text-brand-dark"
              style={{ fontFamily: 'var(--font-dancing)' }}
            >
              Book your Table
            </h3>
            <form onSubmit={handleSubmit} aria-label="Reservation form">
              <div className="mb-4">
                <label
                  htmlFor="about-name"
                  className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-text"
                >
                  Name
                </label>
                <div className="flex items-center gap-2 border-b border-gray-300 py-2">
                  <User size={16} className="text-muted-text" />
                  <input
                    type="text"
                    id="about-name"
                    className="w-full bg-transparent text-sm text-brand-dark outline-none"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="about-phone"
                  className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-text"
                >
                  Phone
                </label>
                <div className="flex items-center gap-2 border-b border-gray-300 py-2">
                  <Phone size={16} className="text-muted-text" />
                  <input
                    type="tel"
                    id="about-phone"
                    className="w-full bg-transparent text-sm text-brand-dark outline-none"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="about-email"
                  className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-text"
                >
                  Email
                </label>
                <div className="flex items-center gap-2 border-b border-gray-300 py-2">
                  <Mail size={16} className="text-muted-text" />
                  <input
                    type="email"
                    id="about-email"
                    className="w-full bg-transparent text-sm text-brand-dark outline-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full rounded bg-brand-red py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
              >
                Book Now
              </button>
            </form>
          </div>

          {/* Welcome Text */}
          <div className="lg:w-2/3">
            <h2
              className="mb-6 text-3xl font-bold text-brand-dark"
              style={{ fontFamily: 'var(--font-dancing)' }}
            >
              Welcome to Zing
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-muted-text">
              On her way she met a copy. The copy warned the Little Blind Text, that where it came
              from it would have been rewritten a thousand times and everything that was left from
              its origin would be the word &ldquo;and&rdquo; and the Little Blind Text should turn
              around and return to its own, safe country.
            </p>
            <p className="mb-6 text-sm leading-relaxed text-muted-text">
              But nothing the copy said could convince her and so it didn&apos;t take long until a
              few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and
              dragged her into their agency, where they abused her for their projects.
            </p>
            <div className="flex items-center gap-4" style={{ fontFamily: 'var(--font-dancing)' }}>
              <a
                href="#menu"
                className="rounded bg-brand-red px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700"
              >
                Our Menu
              </a>
              <a
                href="#reservation"
                className="rounded border border-brand-dark px-6 py-2 text-sm font-semibold text-brand-dark transition-colors hover:bg-brand-dark hover:text-white"
              >
                Book a Table
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
